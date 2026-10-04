# Motion design — vidéos verticales animées

Chaque vidéo est une page HTML (`scenes/*.html`) qui expose `window.seek(t)` et `window.DURATION`.
`render.mjs` capture la page image par image avec Chromium (Playwright) puis encode le MP4 avec ffmpeg.

```bash
npm install
# images fixes pour vérifier la mise en page
node render.mjs scenes/trinite-demo.html out/stills --stills 1,4,8,12
# vidéo complète 1080x1920, 30 i/s, avec la piste audio
node render.mjs scenes/trinite-demo.html out/trinite-demo.mp4 out/demo-audio.wav
```

Dans `scenes/trinite-demo.html` :
- `PHRASES` : sous-titres karaoké (début, fin, texte) ; `KEY` colore les mots-clés.
- `PAL` : couleur du fond en fonction du temps (elle suit le propos).
- `BEATS` : instants des « punch zooms » de caméra.
