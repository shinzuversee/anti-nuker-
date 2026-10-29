# Nūr al-Bayān, chapitre 1 : contenus approfondis

Scripts qui injectent les approfondissements du chapitre 1 (« Connaissez-vous Dieu ? »)
dans le bundle JS du site publié.

- `add_*.py` : contenus par vagues (sources Shamela, savants malikites d'abord).
- `inserer.py` : insertion dans le bundle ; usage
  `python3 inserer.py <bundle.js> add_a.py add_a2.py add_b.py add_d.py add_ce.py add_a3.py add_obj.py add_m_a.py add_m_bd.py add_m_ce.py dev_a.py dev_b.py dev_ce.py dev_d.py`
  à partir du bundle de base (v11), dans cet ordre.
- `dev_*.py` : explications en prose et objections après chaque schéma ou tableau (clé `after`).
