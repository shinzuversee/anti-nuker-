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

## Présentation Nūr al-Bayān (16:9, 60 i/s, muette)

`projets/nur-al-bayan/presentation.html` : présentation du site en 10 scènes (69 s), aux couleurs du site
(noir et or, Amiri, Cormorant). Pas de son : la piste est laissée libre pour un nasheed.
Mouvements : ressorts amortis avec léger dépassement (`E.spring`, `E.soft`, `E.bouncy`), anticipation
(`E.anticip`), ease-in/out (`E.io`, `E.inExpo`), flou de mouvement proportionnel à la vitesse (`smear`),
caméra 3D en perspective.

```bash
node render.mjs projets/nur-al-bayan/presentation.html out/nur-al-bayan-presentation.mp4 --size 1920x1080 --fps 60 --workers 4
# ajouter le nasheed ensuite :
node render.mjs projets/nur-al-bayan/presentation.html out/avec-son.mp4 nasheed.mp3 --size 1920x1080 --fps 60 --workers 4
```

Options de `render.mjs` : `--size LxH` (défaut 1080x1920), `--fps`, `--workers N` (rendu parallèle).

## Nūr al-Bayān v3 — 3D (Three.js)

`projets/nur-al-bayan/v3/nur3d.html` : vraie 3D WebGL (Three.js) — volumes dorés extrudés, ombres douces,
sol miroir, faisceaux de lumière, poussière, bloom, profondeur de champ (réutilise la profondeur, sans second
rendu), aberration chromatique, flous de fouetté et de zoom, flash. Le texte arabe reste en HTML (mise en forme
correcte), la calligraphie 3D est une texture empilée en couches.

`render.mjs` sert désormais les pages en HTTP local (les modules ES ne se chargent pas depuis file://) et
attend `window.READY`. Le WebGL tourne en logiciel (SwiftShader) : ~1,4 s par image en 1080p.

```bash
npm install
node render.mjs projets/nur-al-bayan/v3/nur3d.html out/nur-al-bayan-3d.mp4 --size 1920x1080 --fps 60 --workers 2
```
