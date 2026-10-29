import sys,re;sys.path.insert(0,'ch1')
from sujets import bounds
s=open('site-new/assets/index-PmtvkTrY.js').read()
def bloc(title):
    i=s.index('title:`'+title+'`'); st=s.rfind('{type:`',0,i); d=0;k=st
    while True:
        c=s[k]
        if c=='`': k=s.index('`',k+1)
        elif c=='{': d+=1
        elif c=='}':
            d-=1
            if d==0: break
        k+=1
    return s[st:k+1]
for t in sys.argv[1:]: print(bloc(t)[:1500]); print()
