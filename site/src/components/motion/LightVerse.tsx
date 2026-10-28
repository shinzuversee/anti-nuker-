import { useRef, type PointerEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mishkat } from "./Mishkat";

// Sourate An-Nūr (24), verset 35 : la lampe dans sa niche éclaire le texte,
// et la lumière suit aussi la souris.
export function LightVerse() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lampY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const glow = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const reveal = useTransform(
    scrollYProgress,
    [0.22, 0.48],
    ["inset(0 0 0 100%)", "inset(0 0 0 0%)"],
  );
  const revealEnd = useTransform(
    scrollYProgress,
    [0.38, 0.58],
    ["inset(0 0 0 100%)", "inset(0 0 0 0%)"],
  );

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--lx", `${e.clientX - r.left}px`);
    el.style.setProperty("--ly", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate overflow-hidden bg-ink py-24 text-center text-primary-foreground [--lx:50%] [--ly:30%] sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_420px_at_var(--lx)_var(--ly),color-mix(in_oklab,var(--gold-soft)_10%,transparent),transparent_70%)]" />
      <motion.div
        className="pointer-events-none absolute top-[-30rem] left-1/2 -z-10 size-[80rem] -translate-x-1/2 bg-[repeating-conic-gradient(from_0deg,color-mix(in_oklab,var(--gold)_10%,transparent)_0deg_4deg,transparent_4deg_16deg)] [mask-image:radial-gradient(circle,black_10%,transparent_55%)]"
        style={{ opacity: glow }}
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ y: lampY }} className="relative mx-auto w-fit">
        <div className="mx-auto h-20 w-px bg-gradient-to-b from-transparent to-primary/70" />
        <motion.div
          className="absolute top-20 left-1/2 size-64 -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/25 blur-[70px]"
          style={{ opacity: glow }}
        />
        <Mishkat className="relative h-36 w-auto text-primary" />
      </motion.div>

      <div className="mx-auto mt-12 max-w-4xl px-5">
        <p className="eyebrow">Le verset de la Lumière</p>
        <motion.p
          lang="ar"
          dir="rtl"
          className="gold-text mt-8 text-5xl leading-[1.7] sm:text-7xl"
          style={{ clipPath: reveal }}
        >
          اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ
        </motion.p>
        <p className="mt-4 font-display text-2xl text-primary-foreground/85 italic sm:text-3xl">
          « Allah est la Lumière des cieux et de la terre. »
        </p>
        <motion.p
          lang="ar"
          dir="rtl"
          className="mt-10 text-4xl leading-[1.7] sm:text-5xl"
          style={{ clipPath: revealEnd }}
        >
          نُورٌ عَلَى نُورٍ
        </motion.p>
        <p className="mt-2 font-display text-xl text-primary-foreground/75 italic sm:text-2xl">
          « Lumière sur lumière. »
        </p>
        <p className="eyebrow mt-6">Sourate An-Nūr · 24 : 35</p>
      </div>
    </section>
  );
}
