// Moteur de motion design déterministe : tout est calculé à partir du temps t (secondes).
// Une scène définit window.seek(t), window.DURATION et window.CUES (effets sonores).
(function () {
  const M = (window.M = {});
  const clamp = (M.clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x)));
  const lerp = (M.lerp = (a, b, k) => a + (b - a) * k);
  const prog = (M.prog = (t, s, d) => clamp((t - s) / d));
  const E = (M.E = {
    lin: k => k,
    out: k => 1 - Math.pow(1 - k, 3),
    out5: k => 1 - Math.pow(1 - k, 5),
    in: k => k * k * k,
    inOut: k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
    back: k => { const c = 1.7; return 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); },
    elastic: k => (k === 0 || k === 1 ? k : Math.pow(2, -10 * k) * Math.sin((k * 10 - 0.75) * 2.094) + 1),
  });
  M.$ = id => document.getElementById(id);
  M.seeded = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  M.hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  M.pulse = (t, at, w = 0.15) => Math.max(0, 1 - Math.abs(t - at) / w);

  // ---------- état d'un élément : entrée (from → identité) puis sortie (identité → to) ----------
  const ID = { x: 0, y: 0, z: 0, s: 1, r: 0, rx: 0, ry: 0, o: 1, b: 0 };
  M.apply = function (el, st, extra = '') {
    el.style.transform = `translate3d(${st.x}px,${st.y}px,${st.z}px) rotateX(${st.rx}deg) rotateY(${st.ry}deg) rotate(${st.r}deg) scale(${st.s}) ${extra}`;
    el.style.opacity = st.o;
    el.style.filter = st.b > 0.1 ? `blur(${st.b}px)` : '';
    el.style.visibility = st.o <= 0.001 ? 'hidden' : 'visible';
  };
  // opts : { i: début, id: durée, f: {état de départ}, ie: easing, o: début sortie, od, to: {état final}, oe, add: {décalage live} }
  M.show = function (el, t, opts, extra = '') {
    const ki = opts.i == null ? 1 : prog(t, opts.i, opts.id ?? 0.5);
    const ei = E[opts.ie || 'back'](ki);
    const ko = opts.o == null ? 0 : prog(t, opts.o, opts.od ?? 0.4);
    const eo = E[opts.oe || 'in'](ko);
    const f = opts.f || { y: 60, s: 0.6, b: 12 }, to = opts.to || { o: 0, s: 0.8, b: 10 }, add = opts.add || {};
    const st = {};
    for (const k in ID) {
      const a = f[k] ?? ID[k], b = to[k] ?? ID[k];
      if (k === 's') st.s = lerp(a, 1, ei) * lerp(1, b, eo) * (add.s ?? 1);
      else if (k === 'o') st.o = clamp(lerp(a === 1 && f.o == null ? 0 : a, 1, clamp(ki * 2.5))) * lerp(1, b, eo) * (add.o ?? 1);
      else if (k === 'b') st.b = Math.max(0, lerp(a, 0, E.out(ki)) + lerp(0, b, eo) + (add.b ?? 0));
      else st[k] = lerp(a, 0, ei) + lerp(0, b, eo) + (add[k] ?? 0);
    }
    if (t < (opts.i ?? -1)) st.o = 0;
    M.apply(el, st, extra);
    return { k: ki, e: ei, ko };
  };

  // ---------- texte en volume (extrusion 3D) ----------
  M.extrude = (col, depth = 10, glow = col) =>
    Array.from({ length: depth }, (_, i) => `0 ${i + 1}px 0 ${shade(col, 0.35 - i * 0.015)}`).join(',') +
    `,0 ${depth + 4}px 18px rgba(0,0,0,.6),0 0 40px ${glow}`;
  function shade(h, k) { const [r, g, b] = M.hex(h); return `rgb(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)})`; }

  // ---------- découpe d'un texte en lettres animables ----------
  M.letters = (el, txt) => { el.innerHTML = [...txt].map(c => `<span style="display:inline-block">${c === ' ' ? '&nbsp;' : c}</span>`).join(''); return [...el.children]; };

  // ---------- palette : couleur du fond selon le propos ----------
  M.palette = function (PAL, t) {
    for (let i = 0; i < PAL.length - 1; i++) if (t < PAL[i + 1][0]) {
      const k = E.inOut(prog(t, PAL[i + 1][0] - 0.7, 0.7));
      const a = M.hex(PAL[i][1]), b = M.hex(PAL[i + 1][1]);
      return a.map((v, j) => Math.round(lerp(v, b[j], k)));
    }
    return M.hex(PAL[PAL.length - 1][1]);
  };

  // ---------- fond : aurores, sol 3D en perspective, particules en profondeur ----------
  const SYM = ['∞', '✦', '⌛', '◇', '○', '△', '✧', '·'];
  M.background = function (ctx, t, [r, g, b], o = {}) {
    const W = 1080, H = 1920;
    ctx.fillStyle = '#05060b'; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 4; i++) {
      const x = 540 + Math.sin(t * 0.35 + i * 1.9) * 380, y = 500 + i * 360 + Math.cos(t * 0.3 + i * 1.3) * 200;
      const gr = ctx.createRadialGradient(x, y, 0, x, y, 700);
      gr.addColorStop(0, `rgba(${r},${g},${b},${0.3 - i * 0.05})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    }
    // sol en perspective (lignes qui fuient vers l'horizon)
    const hz = 1180, vx = 540;
    ctx.save(); ctx.globalAlpha = 0.5;
    const fade = ctx.createLinearGradient(0, hz, 0, H);
    fade.addColorStop(0, `rgba(${r},${g},${b},0)`); fade.addColorStop(1, `rgba(${r},${g},${b},.28)`);
    ctx.strokeStyle = fade; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = -12; i <= 12; i++) { ctx.moveTo(vx + i * 30, hz); ctx.lineTo(vx + i * 260, H); }
    const sp = (t * 0.6) % 1;
    for (let j = 0; j < 12; j++) { const k = (j + sp) / 12, y = hz + (H - hz) * k * k; ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke(); ctx.restore();
    // grille verticale discrète en haut
    ctx.strokeStyle = `rgba(${r},${g},${b},.05)`; ctx.lineWidth = 1.5; ctx.beginPath();
    const off = (t * 25) % 90;
    for (let x = -off; x < W; x += 90) { ctx.moveTo(x, 0); ctx.lineTo(x, hz); }
    for (let y = -off; y < hz; y += 90) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke();
    // symboles flottants
    ctx.textAlign = 'center';
    for (let i = 0; i < 16; i++) {
      const z = 0.4 + M.seeded(i + 33) * 0.9;
      const sx = M.seeded(i) * W + Math.sin(t * 0.4 + i) * 20, spd = 20 + z * 40;
      const sy = ((M.seeded(i + 9) * 2300 - t * spd) % 2300 + 2300) % 2300 - 150;
      ctx.font = `700 ${50 * z + 30}px P`;
      ctx.fillStyle = `rgba(${r},${g},${b},${0.05 + 0.07 * z})`;
      ctx.fillText(SYM[i % SYM.length], sx, sy);
    }
    // poussière lumineuse avec profondeur
    for (let i = 0; i < 90; i++) {
      const z = M.seeded(i + 900);
      const px = M.seeded(i + 200) * W + Math.sin(t * 0.7 + i) * 25 * z;
      const py = ((M.seeded(i + 300) * H - t * (15 + z * 60)) % H + H) % H;
      const a = (0.15 + 0.55 * Math.max(0, Math.sin(t * 2.5 + i * 1.7))) * (0.4 + z * 0.6);
      ctx.fillStyle = `rgba(${Math.min(255, r + 100)},${Math.min(255, g + 100)},${Math.min(255, b + 100)},${a})`;
      ctx.beginPath(); ctx.arc(px, py, 1 + z * 3.5, 0, 6.283); ctx.fill();
    }
    // traînées de vitesse
    if (o.whoosh > 0.01) {
      ctx.strokeStyle = `rgba(255,255,255,${0.45 * o.whoosh})`; ctx.lineWidth = 3;
      for (let i = 0; i < 100; i++) {
        const a = M.seeded(i + 500) * 6.283, d0 = 120 + M.seeded(i + 600) * 600, len = 150 + o.whoosh * 800;
        ctx.beginPath(); ctx.moveTo(540 + Math.cos(a) * d0, 860 + Math.sin(a) * d0);
        ctx.lineTo(540 + Math.cos(a) * (d0 + len), 860 + Math.sin(a) * (d0 + len)); ctx.stroke();
      }
    }
    // lignes de vent horizontales
    if (o.wind > 0.01) {
      for (let i = 0; i < 40; i++) {
        const y = M.seeded(i + 1000) * H, len = 200 + M.seeded(i + 1100) * 500;
        const x = ((M.seeded(i + 1200) * 2000 + t * 2600 * (0.6 + M.seeded(i))) % 2600) - 800;
        const gr = ctx.createLinearGradient(x, 0, x + len, 0);
        gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, `rgba(255,255,255,${0.35 * o.wind})`);
        ctx.strokeStyle = gr; ctx.lineWidth = 2 + M.seeded(i) * 3;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + len, y); ctx.stroke();
      }
    }
    // explosions de particules
    for (const bu of o.bursts || []) {
      const k = bu.k; if (k <= 0 || k >= 1) continue;
      for (let i = 0; i < 140; i++) {
        const a = M.seeded(i + 700 + bu.seed) * 6.283, spd = 250 + M.seeded(i + 800) * 900, d = E.out(k) * spd;
        ctx.globalAlpha = 1 - k; ctx.fillStyle = bu.cols[i % bu.cols.length];
        ctx.beginPath(); ctx.arc(bu.x + Math.cos(a) * d, bu.y + Math.sin(a) * d + k * k * 200, 2 + M.seeded(i) * 6, 0, 6.283); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  };

  // ---------- grain de film ----------
  const grain = document.createElement('canvas'); grain.width = grain.height = 256;
  { const g = grain.getContext('2d'), d = g.createImageData(256, 256);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    g.putImageData(d, 0, 0); }
  M.grain = function (ctx, t) {
    ctx.clearRect(0, 0, 1080, 1920);
    const f = Math.floor(t * 30), ox = (M.seeded(f) * 256) | 0, oy = (M.seeded(f + 7) * 256) | 0;
    for (let x = -ox; x < 1080; x += 256) for (let y = -oy; y < 1920; y += 256) ctx.drawImage(grain, x, y);
  };

  // ---------- sous-titres karaoké ----------
  M.chunks = function (words, maxWords = 5, gap = 0.35) {
    const out = []; let cur = [];
    words.forEach((w, i) => {
      cur.push(w);
      const nx = words[i + 1];
      const end = !nx || nx.block !== w.block || /[.,!?…]$/.test(w.w) && cur.length >= 2 || cur.length >= maxWords || (nx && nx.s - w.e > gap && cur.length >= 2);
      if (end) { out.push(cur); cur = []; }
    });
    return out;
  };
  M.subtitles = function (el, t, chunks, KEY, accent, hideAfter = 1e9) {
    const ci = chunks.findIndex((c, i) => t >= c[0].s - 0.08 && (i === chunks.length - 1 || t < chunks[i + 1][0].s - 0.08));
    if (ci < 0 || t > hideAfter) { el.innerHTML = ''; return; }
    const c = chunks[ci], last = c[c.length - 1];
    const gone = prog(t, last.e + 0.6, 0.2);
    el.innerHTML = c.map(w => {
      const k = prog(t, w.s - 0.06, 0.18), e = E.back(k);
      const active = t >= w.s - 0.03 && t < w.e + 0.02;
      const clean = w.w.toLowerCase().replace(/[.,!?…«»"]/g, '');
      const key = KEY[clean];
      const col = active ? '#0b0b12' : key || '#ffffff';
      const bg = active ? (key || accent) : 'transparent';
      return `<span style="opacity:${clamp(k * 3) * (1 - gone)};color:${col};background:${bg};
        box-shadow:${active ? `0 0 30px ${key || accent}` : 'none'};
        text-shadow:${active ? 'none' : '0 5px 0 rgba(0,0,0,.65), 0 0 18px rgba(0,0,0,.6)'};
        transform:translateY(${lerp(40, 0, e)}px) scale(${lerp(0.5, 1, e) * (active ? 1.1 : 1)}) rotate(${active ? -2 : 0}deg)">${w.w.toUpperCase()}</span>`;
    }).join(' ');
  };
})();
