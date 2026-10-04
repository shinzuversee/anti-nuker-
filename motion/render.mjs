// Rendu image par image d'une scène HTML (window.seek(t)) puis encodage MP4 avec ffmpeg.
// Usage : node render.mjs scenes/trinite-demo.html out/trinite-demo.mp4 [audio.mp3] [--fps 30] [--stills 1,5,10]
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : def; };
const fps = Number(opt('--fps', 30));
const stills = opt('--stills', null);
const cuesOut = opt('--cues', null);
const [scene, out, audio] = args;
if (!scene || !out) { console.error('usage: node render.mjs <scene.html> <out.mp4|dir> [audio]'); process.exit(1); }

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--allow-file-access-from-files', '--force-color-profile=srgb'],
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
await page.goto('file://' + resolve(scene));
await page.evaluate(() => document.fonts.ready);
const duration = await page.evaluate(() => window.DURATION);
if (cuesOut) { const { writeFileSync } = await import('node:fs'); writeFileSync(cuesOut, JSON.stringify(await page.evaluate(() => window.CUES || []), null, 0)); }

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

mkdirSync(dirname(resolve(out)), { recursive: true });
const ff = spawn('ffmpeg', [
  '-y', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
  ...(audio ? ['-i', audio, '-c:a', 'aac', '-b:a', '192k', '-shortest'] : []),
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out,
], { stdio: ['pipe', 'inherit', 'inherit'] });

const frames = Math.round(duration * fps);
for (let f = 0; f < frames; f++) {
  await page.evaluate(t => seek(t), f / fps);
  if (errors.length) { console.error(errors); process.exit(1); }
  const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  if (f % 60 === 0) process.stderr.write(`frame ${f}/${frames}\n`);
}
ff.stdin.end();
await new Promise(r => ff.on('close', r));
await browser.close();
