import { useRef, useState, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { introDelay } from "./intro";
import { HeroConstellation } from "./HeroConstellation";
import { Magnetic } from "./Magnetic";
import { CountUp } from "./CountUp";

const ease = [0.22, 1, 0.36, 1] as const;
const draw = [0.65, 0, 0.35, 1] as const;

// Grand arc brisé qui encadre le titre, comme l'entrée d'une mosquée ou le cadre d'un manuscrit.
const ARCH = "M10 600 V270 C10 140 120 70 200 8 C280 70 390 140 390 270 V600";
const ARCH_IN = "M28 600 V274 C28 156 128 90 200 32 C272 90 372 156 372 274 V600";

const stats = [
  ["120+", "articles publiés"],
  ["1,2 M", "vues des cours"],
  ["900+", "questions traitées"],
  ["100+", "personnes accompagnées"],
] as const;

// Motif d'étoiles à huit branches, répété en fond.
function Pattern({ className }: { className: string }) {
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="hero-pattern" width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.8">
            <rect x="14.4" y="14.4" width="43.2" height="43.2" />
            <rect x="14.4" y="14.4" width="43.2" height="43.2" transform="rotate(45 36 36)" />
            <circle cx="36" cy="36" r="9.7" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-pattern)" />
    </svg>
  );
}

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  // Les animations attendent la fin de l'ouverture en porte lors de la première visite.
  const [d] = useState(introDelay);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const archScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // La lumière suit la souris et révèle le motif géométrique caché.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const words = ["Comprendre", "les", "questions", "difficiles,"];

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink pt-28 pb-24 text-primary-foreground [--mx:50%] [--my:40%]"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, color-mix(in oklab, var(--sand) 85%, var(--gold) 15%) 0%, var(--ink) 62%)",
        }}
      />
      <Pattern className="absolute inset-0 -z-10 text-primary opacity-[0.06]" />
      <Pattern className="absolute inset-0 -z-10 text-gold-soft opacity-60 [mask-image:radial-gradient(circle_220px_at_var(--mx)_var(--my),black,transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_380px_at_var(--mx)_var(--my),color-mix(in_oklab,var(--gold-soft)_14%,transparent),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <HeroConstellation avoidCenter />
      </div>

      <motion.svg
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMax meet"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[86%] w-[94vw] lg:h-[92%] max-w-3xl -translate-x-1/2 text-primary"
        style={{ scale: archScale, opacity: fade, transformOrigin: "50% 100%" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arch-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="arch-light" cx="0.5" cy="0.3" r="0.6">
            <stop offset="0" style={{ stopColor: "var(--gold)", stopOpacity: 0.16 }} />
            <stop offset="1" style={{ stopColor: "var(--ink)", stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <motion.path
          d={ARCH_IN}
          fill="url(#arch-light)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: d + 0.8, duration: 1.5 }}
        />
        <motion.path
          d={ARCH}
          fill="none"
          stroke="url(#arch-fade)"
          strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: d, duration: 2.2, ease: draw }}
        />
        <motion.path
          d={ARCH_IN}
          fill="none"
          stroke="url(#arch-fade)"
          strokeWidth="0.7"
          strokeDasharray="2 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: d + 0.3, duration: 2.2, ease: draw }}
        />
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: d + 1.9, type: "spring", stiffness: 200, damping: 14 }}
          style={{ transformOrigin: "200px 8px" }}
        >
          <rect
            x="194"
            y="2"
            width="12"
            height="12"
            fill="currentColor"
            transform="rotate(45 200 8)"
          />
          <circle
            cx="200"
            cy="8"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.6"
          />
        </motion.g>
      </motion.svg>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8"
      >
        <motion.p
          lang="ar"
          dir="rtl"
          className="text-lg text-primary/90 sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 0.2, duration: 1, ease }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* Le nom s'écrit de droite à gauche, comme le trace un calame. */}
        <motion.p
          lang="ar"
          className="gold-text mt-5 text-7xl leading-[1.45] font-bold drop-shadow-[0_0_30px_color-mix(in_oklab,var(--gold)_35%,transparent)] sm:text-8xl md:text-9xl"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ delay: d + 0.5, duration: 1.6, ease: draw }}
        >
          نور البيان
        </motion.p>

        <h1 className="mt-2 text-4xl leading-[1.05] font-medium text-balance sm:text-6xl md:text-7xl">
          <span className="sr-only">Comprendre les questions difficiles, à votre rythme.</span>
          <span aria-hidden="true">
            {words.map((w, i) => (
              <span key={w} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: d + 1.1 + i * 0.08, duration: 0.9, ease }}
                >
                  {w}
                  {i < words.length - 1 ? " " : null}
                </motion.span>
              </span>
            ))}
            <br />
            <motion.span
              className="inline-block text-primary-foreground/60 italic"
              initial={{ opacity: 0, filter: "blur(12px)", letterSpacing: "0.12em" }}
              animate={{ opacity: 1, filter: "blur(0px)", letterSpacing: "0em" }}
              transition={{ delay: d + 1.5, duration: 1.4, ease }}
            >
              à votre rythme.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 1.8, duration: 0.9, ease }}
        >
          Articles approfondis, cours vidéo et séances d’étude pour avancer avec méthode, à la
          lumière du Coran et des sources.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 2, duration: 0.9, ease }}
        >
          <Magnetic>
            <Link
              to="/sommaire"
              className="btn-shine group inline-flex h-13 items-center gap-2 rounded-full bg-primary px-7 font-medium text-ink shadow-[0_0_40px_-8px] shadow-primary/60 hover:bg-gold-soft hover:shadow-[0_0_60px_-6px] hover:shadow-primary/80"
            >
              Explorer les matières
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/appointments"
              className="inline-flex h-13 items-center rounded-full border border-primary-foreground/20 px-7 font-medium text-primary-foreground hover:border-primary/60 hover:text-primary"
            >
              Réserver une séance
            </Link>
          </Magnetic>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: d + 2.3, duration: 1 }}
        >
          {stats.map(([value, label], i) => (
            <li key={label} className="flex items-center gap-6">
              {i > 0 ? (
                <span className="size-1 rotate-45 bg-primary/70" aria-hidden="true" />
              ) : null}
              <span>
                <span className="font-display text-lg text-primary-foreground/90">
                  <CountUp value={value} />
                </span>{" "}
                {label}
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.a
        href="#acces"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-primary-foreground/40 uppercase md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 2.6 }}
      >
        Entrer
        <motion.span
          className="h-10 w-px origin-top bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
