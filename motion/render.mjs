// Rendu image par image d'une scène HTML (window.seek(t)) puis encodage MP4 avec ffmpeg.
// Usage : node render.mjs scenes/trinite-demo.html out/trinite-demo.mp4 [audio.mp3]
//         [--fps 30] [--size 1080x1920] [--workers 1] [--stills 1,5,10]
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : def; };
const fps = Number(opt('--fps', 30));
const [width, height] = opt('--size', '1080x1920').split('x').map(Number);
const workers = Number(opt('--workers', 1));
const stills = opt('--stills', null);
const cuesOut = opt('--cues', null);
const [scene, out, audio] = args;
if (!scene || !out) { console.error('usage: node render.mjs <scene.html> <out.mp4|dir> [audio]'); process.exit(1); }

const launch = () => chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium',
  args: ['--allow-file-access-from-files', '--force-color-profile=srgb'],
});

async function openScene(browser) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto('file://' + resolve(scene));
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => Promise.all([...document.images].map(i => i.decode().catch(() => {}))));
  return { page, errors };
}

const browser = await launch();
const { page, errors } = await openScene(browser);
const duration = await page.evaluate(() => window.DURATION);
if (cuesOut) writeFileSync(cuesOut, JSON.stringify(await page.evaluate(() => window.CUES || []), null, 0));

if (stills) {
  mkdirSync(out, { recursive: true });
  for (const t of stills.split(',').map(Number)) {
    await page.evaluate(t => seek(t), t);
    await page.screenshot({ path: `${out}/t${t.toFixed(2)}.png` });
    if (errors.length) { console.error(errors); process.exit(1); }
  }
  await browser.close();
  process.exit(0);
}

// Encode les images [from, to) dans un fichier vidéo sans audio.
async function renderRange(from, to, file, label) {
  const { page, errors } = await openScene(browser);
  const ff = spawn('ffmpeg', [
    '-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '16', '-pix_fmt', 'yuv420p', file,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let f = from; f < to; f++) {
    await page.evaluate(t => seek(t), f / fps);
    if (errors.length) { console.error(errors); process.exit(1); }
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if ((f - from) % 120 === 0) process.stderr.write(`[${label}] frame ${f - from}/${to - from}\n`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await page.close();
}

mkdirSync(dirname(resolve(out)), { recursive: true });
const frames = Math.round(duration * fps);
const tmp = join(tmpdir(), `render-${process.pid}`);
mkdirSync(tmp, { recursive: true });
const parts = Array.from({ length: workers }, (_, i) => ({
  from: Math.floor((frames * i) / workers), to: Math.floor((frames * (i + 1)) / workers), file: join(tmp, `part${i}.mp4`),
}));
await Promise.all(parts.map((p, i) => renderRange(p.from, p.to, p.file, `w${i}`)));
await browser.close();

writeFileSync(join(tmp, 'list.txt'), parts.map(p => `file '${p.file}'`).join('\n'));
const ff = spawn('ffmpeg', [
  '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', join(tmp, 'list.txt'),
  ...(audio ? ['-i', audio, '-c:a', 'aac', '-b:a', '192k', '-shortest'] : []),
  '-c:v', 'copy', '-movflags', '+faststart', out,
], { stdio: 'inherit' });
await new Promise(r => ff.on('close', r));
rmSync(tmp, { recursive: true, force: true });
