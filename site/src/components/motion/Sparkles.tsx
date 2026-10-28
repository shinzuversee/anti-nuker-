import { useEffect, useRef } from "react";

// Poussière d'or : une traînée de paillettes suit la souris, et chaque clic
// fait jaillir une petite gerbe d'étoiles. Dessiné sur un canvas, souris uniquement.

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
  star: boolean;
};

const GOLD = ["#c9a35a", "#e2cf9f", "#b8923e", "#f1e3bd"];

export function Sparkles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = ref.current;
    if (!fine || reduced || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ps: P[] = [];
    let last = 0;
    let raf = 0;
    // L'animation ne tourne que tant qu'il reste des paillettes à l'écran.
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 28) return;
      last = now;
      ps.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.6,
        vy: Math.random() * 0.6 + 0.2,
        life: 0,
        max: 40 + Math.random() * 25,
        size: 1 + Math.random() * 1.8,
        star: Math.random() < 0.25,
      });
      wake();
    };
    const onDown = (e: PointerEvent) => {
      for (let i = 0; i < 18; i++) {
        const a = (i / 18) * Math.PI * 2;
        const speed = 2 + Math.random() * 2.5;
        ps.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed,
          life: 0,
          max: 38 + Math.random() * 18,
          size: 1.6 + Math.random() * 2.2,
          star: i % 3 === 0,
        });
      }
      wake();
    };

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]!;
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy = p.vy * 0.94 + 0.04;
        const t = p.life / p.max;
        if (t >= 1) {
          ps.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = 1 - t;
        ctx.fillStyle = GOLD[i % GOLD.length]!;
        if (p.star) {
          // Petite étoile à quatre branches
          const s = p.size * 2.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x + s * 0.25, p.y - s * 0.25);
          ctx.lineTo(p.x + s, p.y);
          ctx.lineTo(p.x + s * 0.25, p.y + s * 0.25);
          ctx.lineTo(p.x, p.y + s);
          ctx.lineTo(p.x - s * 0.25, p.y + s * 0.25);
          ctx.lineTo(p.x - s, p.y);
          ctx.lineTo(p.x - s * 0.25, p.y - s * 0.25);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      raf = ps.length ? requestAnimationFrame(tick) : 0;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[89] size-full"
    />
  );
}
