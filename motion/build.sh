#!/usr/bin/env bash
# Chaîne complète : calage texte/voix → rendu image → mixage voix + effets → MP4 TikTok.
#   ./build.sh projets/patience patience.html chemin/vers/voix.m4a
set -euo pipefail
cd "$(dirname "$0")"
DIR=$1; SCENE=$2; VOICE=$3
NAME=$(basename "$DIR")
mkdir -p audio out

ffmpeg -y -loglevel error -i "$VOICE" -ac 1 -ar 16000 audio/$NAME-16k.wav
ffmpeg -y -loglevel error -i "$VOICE" -ar 48000 -af "highpass=f=80,acompressor=threshold=-20dB:ratio=3:attack=5:release=80,loudnorm=I=-16:TP=-1.5:LRA=9" audio/$NAME-voix.wav

python3 align.py "$DIR/script.txt" audio/$NAME-16k.wav "$DIR/words.json"
(printf 'window.ALIGN = '; cat "$DIR/words.json"; printf ';\n') > "$DIR/words.js"

node render.mjs "$DIR/$SCENE" out/$NAME-video.mp4 --cues "$DIR/cues.json"

python3 sfx.py bank >/dev/null
python3 sfx.py mix audio/$NAME-voix.wav "$DIR/cues.json" audio/$NAME-mix.wav
ffmpeg -y -loglevel error -i audio/$NAME-mix.wav -af "loudnorm=I=-14:TP=-1.0:LRA=11" -ar 48000 audio/$NAME-final.wav

ffmpeg -y -loglevel error -i out/$NAME-video.mp4 -i audio/$NAME-final.wav -map 0:v -map 1:a -c:v copy -af apad -c:a aac -b:a 192k -shortest -movflags +faststart out/$NAME.mp4
echo "→ out/$NAME.mp4"
