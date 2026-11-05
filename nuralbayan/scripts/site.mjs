import { createServer } from 'node:http';
import { cp, mkdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(project, 'src');
if (process.argv[2] === 'build') {
  const out = resolve(project, 'dist');
  await mkdir(out, { recursive: true });
  await cp(site, out, { recursive: true });
  console.log('Version actuelle copiée dans dist/');
} else {
  const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.jpg':'image/jpeg', '.webp':'image/webp', '.ttf':'font/ttf', '.ico':'image/x-icon', '.json':'application/json' };
  const port = Number(process.env.PORT || 4173);
  const server = createServer(async (req,res) => {
    try {
      const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      let file = resolve(site, '.' + path);
      if (file !== site && !file.startsWith(site + sep)) {res.writeHead(403);res.end();return;}
      try {if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');}
      catch { if (extname(path)) {res.writeHead(404);res.end();return;} file = resolve(site,'index.html'); }
      const bytes = await readFile(file);
      res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream'});res.end(bytes);
    } catch {res.writeHead(404);res.end();}
  });
  server.listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}`));
}
