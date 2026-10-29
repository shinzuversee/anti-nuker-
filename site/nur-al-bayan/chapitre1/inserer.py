# Insère des blocs enrichis dans les sujets du chapitre 1.
# Usage : python3 inserer.py <bundle.js> add_a.py [add_b.py ...]
# Chaque fichier add_*.py définit ADD = { "titre du sujet": {"intro_plus": "...", "blocks": [...], "before": "Conclusion"} }
import re, sys, importlib.util
sys.path.insert(0, __import__('os').path.dirname(__file__))
from sujets import bounds

DOTS = str.maketrans('ḥṭṣḍẓḤṬṢḌẒ', 'htsdzHTSDZ')

def norm(t):
    """Règles du site : pas de tirets longs, pas de points souscrits."""
    t = t.translate(DOTS)
    t = re.sub(r' — ([^—\n]{1,160}?) — ', r', \1, ', t)
    t = re.sub(r'([?!:;…]) — ', r'\1 ', t)
    return t.replace(' — ', ', ').replace('—', ', ').replace('–', '-')

AR = {'\u06e1': '\u0652', '\u0671': '\u0627', '\u0657': '\u064b', '\u0656': '\u064d', '\u065e': '\u064c',
      '\u06e2': '', '\u0653': '', '\u06da': '', '\u06d6': '', '\u06d7': '', '\u06e5': '', '\u06e6': '', '\u06df': '', '\u06e0': ''}
def clean_ar(t):
    """Graphie coranique uthmanie → graphie courante, pour les polices hors bloc verset."""
    t = t.replace('\u0640\u0654', '\u0621')
    return ''.join(AR.get(c, c) for c in t)

def prep(v, in_verse=False):
    if isinstance(v, dict):
        iv = in_verse or v.get('type') == 'verse'
        return {k: (clean_ar(x) if k in ('arabic', 'center') and isinstance(x, str) and not iv else prep(x, iv)) for k, x in v.items()}
    if isinstance(v, list): return [prep(x, in_verse) for x in v]
    return v

def js(v):
    if isinstance(v, str):
        v = norm(v)
        assert '`' not in v and '${' not in v, v[:80]
        return '`' + v.replace('\\', '\\\\') + '`'
    if isinstance(v, bool): return '!0' if v else '!1'
    if isinstance(v, (int, float)): return str(v)
    if isinstance(v, list): return '[' + ','.join(js(x) for x in v) + ']'
    if isinstance(v, dict): return '{' + ','.join(f'{k}:{js(x)}' for k, x in v.items()) + '}'
    raise TypeError(v)

bundle = sys.argv[1]
s = open(bundle, encoding='utf-8').read()
total = 0
for path in sys.argv[2:]:
    spec = importlib.util.spec_from_file_location('m', path); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    for title, add in m.ADD.items():
        title_n = norm(title)
        add = prep(add)
        if add.get('intro'): add['intro'] = add['intro'].replace('**', '')
        a, b = bounds(s, title_n)
        obj = s[a:b]
        assert '<!--enrichi-->' not in obj, 'déjà enrichi : ' + title_n
        new_blocks = ','.join(js(x) for x in add.get('blocks', []))
        befores = add.get('before', ['Conséquences pratiques', 'Conclusion'])
        if isinstance(befores, str): befores = [befores]
        marker = next(('{type:`h2`,text:`' + x + '`}' for x in befores if '{type:`h2`,text:`' + x + '`}' in obj), '§')
        if not new_blocks: pass
        elif marker in obj:
            obj = obj.replace(marker, new_blocks + ',' + marker, 1)
        else:  # pas de conclusion : avant l'audio éventuel, sinon en fin de corps
            k = obj.rfind('{type:`audio`')
            if k < 0: k = obj.rfind(']}')
            else: obj = obj[:k] + new_blocks + ',' + obj[k:]; k = None
            if k is not None: obj = obj[:k] + ',' + new_blocks + obj[k:]
        if add.get('start_blocks'):  # en tête du corps
            i = obj.index(',body:[') + len(',body:[')
            obj = obj[:i] + ','.join(js(x) for x in add['start_blocks']) + ',' + obj[i:]
        for sec, blks in add.get('section_blocks', {}).items():  # en fin de section nommée
            key = '{type:`h2`,text:`' + norm(sec)
            i = obj.index(key)
            j = obj.find('{type:`h2`', i + len(key))
            if j < 0: j = obj.rfind(']}')
            obj = obj[:j] + ','.join(js(x) for x in blks) + (',' if obj[j] == '{' else '') + obj[j:] if obj[j] == '{' else obj[:j] + ',' + ','.join(js(x) for x in blks) + obj[j:]
        if add.get('intro'):  # remplace le résumé
            i = obj.index(',intro:`') + len(',intro:`')
            j = obj.index('`', i)
            obj = obj[:i] + js(add['intro'])[1:-1] + obj[j:]
        if add.get('intro_plus'):
            i = obj.index(',intro:`') + len(',intro:`')
            j = obj.index('`', i)
            obj = obj[:j] + '\n\n' + norm(add['intro_plus']) + obj[j:]
        s = s[:a] + obj + s[b:]
        total += 1
        print('enrichi :', title_n, len(obj))
open(bundle, 'w', encoding='utf-8').write(s)
print('sujets enrichis :', total)
