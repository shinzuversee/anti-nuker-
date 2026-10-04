"""Cale chaque mot du texte sur la voix, sans modèle de transcription.

Entrée : script.txt avec des repères « (m:ss) » + l'audio.
Méthode : on détecte les zones de parole (silencedetect de ffmpeg), on recale
chaque repère sur le début de parole le plus proche, puis on répartit les mots
d'un bloc sur les zones de parole du bloc, au prorata du nombre de lettres.

  python3 align.py script.txt voix.wav words.json
"""
import json, re, subprocess, sys


def speech_segments(wav, noise='-35dB', min_sil=0.22):
    log = subprocess.run(['ffmpeg', '-i', wav, '-af', f'silencedetect=n={noise}:d={min_sil}', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    starts = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)]
    ends = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]
    dur = float(re.search(r'Duration: (\d+):(\d+):([\d.]+)', log).group(3)) + \
          60 * float(re.search(r'Duration: (\d+):(\d+)', log).group(2))
    segs, cur = [], 0.0
    for s, e in zip(starts, ends + [dur] * (len(starts) - len(ends))):
        if s - cur > 0.05:
            segs.append([cur, s])
        cur = e
    if dur - cur > 0.05:
        segs.append([cur, dur])
    return segs, dur


def main(script, wav, out):
    text = open(script, encoding='utf-8').read()
    parts = re.split(r'\((\d+):(\d+)\)', text)
    blocks = []
    for i in range(1, len(parts), 3):
        blocks.append([int(parts[i]) * 60 + int(parts[i + 1]), parts[i + 2].split()])
    segs, dur = speech_segments(wav)
    # recale chaque repère sur le début de parole le plus proche
    onsets = [s for s, _ in segs]
    for b in blocks:
        b[0] = min(onsets, key=lambda o: abs(o - b[0]))
    words = []
    for i, (t0, toks) in enumerate(blocks):
        t1 = blocks[i + 1][0] if i + 1 < len(blocks) else dur
        mine = [[max(s, t0), min(e, t1)] for s, e in segs if e > t0 and s < t1]
        mine = [m for m in mine if m[1] - m[0] > 0.04]
        total = sum(e - s for s, e in mine)
        weights = [max(2, len(w)) for w in toks]
        W = sum(weights)
        acc = 0
        for w, k in zip(toks, weights):
            a, b = acc / W * total, (acc + k) / W * total
            acc += k

            def at(x):  # temps de parole cumulé -> temps réel
                for s, e in mine:
                    if x <= e - s:
                        return s + x
                    x -= e - s
                return mine[-1][1]
            words.append({'w': w, 's': round(at(a + 1e-6), 3), 'e': round(at(b), 3), 'block': i})
    json.dump({'duration': dur, 'words': words, 'blocks': [b[0] for b in blocks]}, open(out, 'w'), ensure_ascii=False, indent=0)
    print(len(words), 'mots,', len(blocks), 'blocs, durée', dur)


if __name__ == '__main__':
    main(*sys.argv[1:4])
