# Outils : extraire / remplacer l'objet d'un sujet dans le bundle, par son titre.
import re
def bounds(s, title):
    key = '{slug:$(`' + title + '`)'
    i = s.index(key)
    d, k, inb = 0, i, False
    while True:
        c = s[k]
        if c == '`' and s[k-1] != '\\': inb = not inb
        elif not inb:
            if c == '{': d += 1
            elif c == '}':
                d -= 1
                if d == 0: return i, k + 1
        k += 1
def blocks_outline(obj):
    out = []
    for m in re.finditer(r'\{type:`([\w-]+)`(?:,text:`([^`]{0,70}))?', obj):
        out.append(m.group(1) + ((': ' + m.group(2)) if m.group(1) in ('h2', 'h3') else ''))
    return out
