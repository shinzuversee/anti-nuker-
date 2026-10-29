// Rendu image par image d'une scène HTML (window.seek(t)) puis encodage MP4 avec ffmpeg.
// Usage : node render.mjs scenes/trinite-demo.html out/trinite-demo.mp4 [audio.mp3]
//         [--fps 30] [--size 1080x1920] [--workers 1] [--stills 1,5,10]
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, renameSync, existsSync } from 'node:fs';
import { resolve, dirname, join, basename } from 'node:path';
import { tmpdir } from 'node:os';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

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
  args: ['--allow-file-access-from-files', '--force-color-profile=srgb', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});

// Petit serveur statique : les modules ES (Three.js) ne se chargent pas depuis file://.
const ROOT = resolve('.');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf' };
const server = createServer(async (req, res) => {
  try {
    const path = resolve(ROOT, '.' + decodeURIComponent(req.url.split('?')[0]));
    if (!path.startsWith(ROOT)) throw new Error('hors racine');
    const body = await readFile(path);
    res.writeHead(200, { 'content-type': TYPES[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const sceneUrl = `http://127.0.0.1:${server.address().port}/${scene.replace(/^\.\//, '')}`;

async function openScene(browser) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(sceneUrl);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => window.READY !== false, null, { timeout: 120000 });
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
  server.close();
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
    let buf;
    for (let k = 0; ; k++) {
      try { buf = await page.screenshot({ type: 'jpeg', quality: 95, timeout: 120000 }); break; }
      catch (e) { if (k >= 2) throw e; process.stderr.write(`[${label}] nouvel essai image ${f}\n`); }
    }
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if ((f - from) % 120 === 0) process.stderr.write(`[${label}] frame ${f - from}/${to - from}\n`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await page.close();
  renameSync(file, file.replace(/\.tmp\.mp4$/, '.mp4'));
}

mkdirSync(dirname(resolve(out)), { recursive: true });
const frames = Math.round(duration * fps);
// Morceaux conservés sur disque : une relance reprend là où le rendu s'est arrêté.
const tmp = join(dirname(resolve(out)), `.parts-${basename(out)}-${fps}`);
mkdirSync(tmp, { recursive: true });
const chunks = Math.max(workers, Math.ceil(frames / 240));
const parts = Array.from({ length: chunks }, (_, i) => ({
  from: Math.floor((frames * i) / chunks), to: Math.floor((frames * (i + 1)) / chunks), file: join(tmp, `part${String(i).padStart(3, '0')}.mp4`),
}));
const todo = parts.filter(p => !existsSync(p.file));
let next = 0;
await Promise.all(Array.from({ length: workers }, async (_, w) => {
  while (next < todo.length) { const p = todo[next++]; await renderRange(p.from, p.to, p.file.replace(/\.mp4$/, '.tmp.mp4'), `w${w} ${basename(p.file)}`); }
}));
await browser.close();

writeFileSync(join(tmp, 'list.txt'), parts.map(p => `file '${p.file}'`).join('\n'));
const ff = spawn('ffmpeg', [
  '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', join(tmp, 'list.txt'),
  ...(audio ? ['-i', audio, '-c:a', 'aac', '-b:a', '192k', '-shortest'] : []),
  '-c:v', 'copy', '-movflags', '+faststart', out,
], { stdio: 'inherit' });
await new Promise(r => ff.on('close', r));
rmSync(tmp, { recursive: true, force: true });
server.close();
