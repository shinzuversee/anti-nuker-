"""Banque d'effets sonores synthétisés + mixage avec la voix.

  python3 sfx.py bank                      -> génère sfx/*.wav
  python3 sfx.py mix voix.wav cues.json out.wav
     cues.json : [{"t": 1.25, "fx": "whoosh", "gain": 0.8}, ...]
"""
import json, sys, os
import numpy as np
from scipy import signal
from scipy.io import wavfile

SR = 48000
rng = np.random.default_rng(7)
HERE = os.path.dirname(os.path.abspath(__file__))


def env(n, a, d, curve=3.0):
    """Enveloppe attaque/déclin (en secondes)."""
    t = np.arange(n) / SR
    att = np.clip(t / max(a, 1e-4), 0, 1)
    dec = np.exp(-np.clip(t - a, 0, None) * curve / max(d, 1e-4))
    return att * dec


def bandsweep(x, f0, f1, q=2.0, steps=64):
    """Filtre passe-bande qui glisse de f0 à f1 (traité par blocs)."""
    out = np.zeros_like(x)
    blk = int(np.ceil(len(x) / steps))
    zi = None
    for i in range(steps):
        f = f0 * (f1 / f0) ** (i / (steps - 1))
        b, a = signal.iirpeak(min(f, SR / 2 * 0.95), q, fs=SR)
        seg = x[i * blk:(i + 1) * blk]
        if zi is None:
            zi = signal.lfilter_zi(b, a) * 0
        y, zi = signal.lfilter(b, a, seg, zi=zi)
        out[i * blk:i * blk + len(seg)] = y
    return out


def stereo(m, pan_from=0.0, pan_to=0.0):
    p = np.linspace(pan_from, pan_to, len(m))
    l = m * np.cos((p + 1) * np.pi / 4)
    r = m * np.sin((p + 1) * np.pi / 4)
    return np.stack([l, r], 1)


def norm(x, peak=0.9):
    return x / (np.abs(x).max() + 1e-9) * peak


def whoosh(dur=0.7, f0=300, f1=4000, pan=(-0.7, 0.7)):
    n = int(dur * SR)
    noise = rng.standard_normal(n)
    sw = bandsweep(noise, f0, f1, q=1.6)
    t = np.linspace(0, 1, n)
    e = np.sin(np.pi * t ** 0.7) ** 2
    return stereo(norm(sw * e, .8), *pan)


def swipe():
    return whoosh(0.32, 900, 7000, (0.5, -0.5))


def wind(dur=2.2):
    n = int(dur * SR)
    noise = rng.standard_normal(n)
    b, a = signal.butter(2, [250, 2200], 'bandpass', fs=SR)
    x = signal.lfilter(b, a, noise)
    t = np.arange(n) / SR
    gust = 0.6 + 0.4 * np.sin(2 * np.pi * 0.9 * t + 1) * np.sin(2 * np.pi * 0.37 * t)
    sw = bandsweep(noise, 500, 1400, q=3, steps=40) * 0.6
    e = np.sin(np.pi * np.linspace(0, 1, n)) ** 1.5
    return stereo(norm((x + sw) * gust * e, .55), -0.4, 0.4)


def pop(f0=900, f1=260, dur=0.12):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = f1 + (f0 - f1) * np.exp(-t * 45)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return stereo(norm(np.sin(ph) * env(n, .002, dur * .6, 4), .7))


def click():
    n = int(0.04 * SR)
    x = rng.standard_normal(n) * env(n, .0005, .01, 5)
    b, a = signal.butter(2, 3000, 'highpass', fs=SR)
    return stereo(norm(signal.lfilter(b, a, x), .5))


def impact(dur=1.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = 42 + 80 * np.exp(-t * 18)
    sub = np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, .003, dur * .7, 4)
    nz = rng.standard_normal(n) * env(n, .001, .25, 6)
    b, a = signal.butter(2, 1800, 'lowpass', fs=SR)
    nz = signal.lfilter(b, a, nz)
    return stereo(norm(sub + .5 * nz, .95))


def riser(dur=1.4):
    n = int(dur * SR)
    t = np.linspace(0, 1, n)
    noise = bandsweep(rng.standard_normal(n), 300, 6000, q=2)
    f = 200 * (8 ** t)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR) * .25
    e = t ** 2.2
    return stereo(norm((noise + tone) * e, .7), -0.2, 0.2)


def shimmer(dur=1.8):
    n = int(dur * SR)
    t = np.arange(n) / SR
    x = np.zeros(n)
    for i, f in enumerate([1318.5, 1567.98, 1975.5, 2637.0, 3136.0]):
        d = int(i * 0.07 * SR)
        x[d:] += np.sin(2 * np.pi * f * t[:n - d]) * np.exp(-t[:n - d] * 2.5) / (i + 1.5)
    trem = 1 + .3 * np.sin(2 * np.pi * 9 * t)
    return stereo(norm(x * trem, .45), 0.3, -0.3)


def ding():
    n = int(1.2 * SR)
    t = np.arange(n) / SR
    x = sum(np.sin(2 * np.pi * f * t) * np.exp(-t * k) * g for f, k, g in [(880, 3, 1), (1760, 5, .4), (2640, 8, .2)])
    return stereo(norm(x, .5))


def glitch():
    n = int(0.35 * SR)
    x = np.zeros(n)
    for i in range(7):
        s = int(rng.uniform(0, n - 2000)); L = int(rng.uniform(600, 2500))
        seg = np.sign(np.sin(2 * np.pi * rng.uniform(200, 1800) * np.arange(L) / SR))
        x[s:s + L] += seg * rng.uniform(.3, 1)
    x = np.round(x * 6) / 6
    return stereo(norm(x * env(n, .001, .3, 2), .4))


def typing(dur=0.6):
    n = int(dur * SR)
    x = np.zeros((n, 2))
    for k in range(int(dur * 14)):
        c = click() * rng.uniform(.4, 1)
        s = int(k / 14 * SR + rng.uniform(0, 800))
        x[s:s + len(c)] += c[:max(0, min(len(c), n - s))]
    return x


BANK = {
    'whoosh': whoosh, 'swipe': swipe, 'wind': wind, 'pop': pop, 'click': click,
    'impact': impact, 'riser': riser, 'shimmer': shimmer, 'ding': ding, 'glitch': glitch,
    'typing': typing, 'whoosh_low': lambda: whoosh(1.0, 120, 1500, (0.6, -0.6)),
    'pop_high': lambda: pop(1600, 600, .09),
}


def write(path, x):
    wavfile.write(path, SR, (np.clip(x, -1, 1) * 32767).astype(np.int16))


def bank():
    os.makedirs(os.path.join(HERE, 'sfx'), exist_ok=True)
    for k, fn in BANK.items():
        write(os.path.join(HERE, 'sfx', k + '.wav'), fn())
    print('ok', len(BANK), 'effets')


def load(path):
    sr, x = wavfile.read(path)
    x = x.astype(np.float32) / (32768 if x.dtype == np.int16 else 1)
    if x.ndim == 1:
        x = np.stack([x, x], 1)
    if sr != SR:
        x = signal.resample_poly(x, SR, sr, axis=0)
    return x


def mix(voice_path, cues_path, out_path, sfx_gain=0.35, tail=1.5):
    voice = load(voice_path)
    cues = json.load(open(cues_path))
    out = np.zeros((len(voice) + int(tail * SR), 2))
    out[:len(voice)] += voice
    cache = {}
    for c in cues:
        fx = cache.setdefault(c['fx'], load(os.path.join(HERE, 'sfx', c['fx'] + '.wav')))
        s = int(c['t'] * SR)
        if s >= len(out):
            continue
        L = min(len(fx), len(out) - s)
        out[s:s + L] += fx[:L] * c.get('gain', 1) * sfx_gain
    write(out_path, out * (0.95 / max(1.0, np.abs(out).max())))


if __name__ == '__main__':
    if sys.argv[1] == 'bank':
        bank()
    else:
        mix(*sys.argv[2:5])
