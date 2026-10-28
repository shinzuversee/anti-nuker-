import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

// Décor du haut des pages intérieures.
// Pages à en-tête (Sommaire, Articles, Vidéos…) : bandeau sombre dans l'esprit de l'accueil,
// avec lumière qui suit la souris et révèle le motif, lettres dorées en relief, poussière d'or,
// arc qui se trace et frise d'arcs pour passer au contenu.
// Pages de lecture (sujets, articles) : même décor en clair, pour ne pas gêner la lecture.

export const DARK_HERO_PATHS = [
  "/actus",
  "/blog",
  "/sommaire",
  "/videos",
  "/qa",
  "/about",
  "/contact",
  "/appointments",
];

const letters = [
  { l: "ن", x: "7%", y: "26%", size: 64, depth: 40 },
  { l: "ب", x: "91%", y: "20%", size: 54, depth: 28 },
  { l: "ق", x: "82%", y: "62%", size: 72, depth: 50 },
  { l: "ع", x: "16%", y: "70%", size: 46, depth: 22 },
  { l: "ل", x: "62%", y: "12%", size: 40, depth: 16 },
  { l: "م", x: "36%", y: "82%", size: 38, depth: 30 },
  { l: "ح", x: "96%", y: "84%", size: 44, depth: 36 },
  { l: "س", x: "3%", y: "52%", size: 34, depth: 18 },
  { l: "ك", x: "48%", y: "30%", size: 30, depth: 12 },
];

// Positions fixes pour que le décor soit identique à chaque visite.
const dust = Array.from({ length: 22 }, (_, i) => ({
  x: `${(i * 37) % 100}%`,
  y: `${40 + ((i * 53) % 55)}%`,
  size: 2 + (i % 3),
  duration: 6 + (i % 5),
  delay: (i * 0.7) % 6,
}));

const ARCH = "M10 400 V180 C10 95 120 45 200 6 C280 45 390 95 390 180 V400";
const ARCH_IN = "M30 400 V184 C30 108 130 62 200 28 C270 62 370 108 370 184 V400";

function Letter({
  item,
  mx,
  my,
  sy,
  i,
  opacity,
}: {
  item: (typeof letters)[number];
  mx: MotionValue<number>;
  my: MotionValue<number>;
  sy: MotionValue<number>;
  i: number;
  opacity: number;
}) {
  const x = useTransform(mx, (v) => -v * item.depth);
  // Souris et défilement : chaque lettre bouge selon sa profondeur, ce qui crée le relief.
  const y = useTransform(
    [my, sy],
    ([m, s]: number[]) => -(m ?? 0) * item.depth - (s ?? 0) * item.depth * 0.012,
  );
  return (
    <motion.span
      lang="ar"
      className="absolute leading-none text-primary"
      style={{ left: item.x, top: item.y, x, y, fontSize: item.size }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity, scale: 1 }}
      transition={{ delay: 0.2 + i * 0.07, duration: 1 }}
    >
      <motion.span
        className="block"
        animate={{ y: [0, -12, 0], rotate: [0, i % 2 ? 6 : -6, 0] }}
        transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
      >
        {item.l}
      </motion.span>
    </motion.span>
  );
}

function Pattern({ id, className }: { id: string; className: string }) {
  return (
    <svg className={className}>
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.8">
            <rect x="14.4" y="14.4" width="43.2" height="43.2" />
            <rect x="14.4" y="14.4" width="43.2" height="43.2" transform="rotate(45 36 36)" />
            <circle cx="36" cy="36" r="9.7" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function PageBackdrop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const dark = DARK_HERO_PATHS.includes(pathname);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(560);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  const { scrollY } = useScroll();

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  // Le bandeau sombre s'arrête juste sous l'en-tête de la page, quelle que soit sa hauteur.
  useLayoutEffect(() => {
    if (!dark) return;
    const measure = () => {
      const heading = document.querySelector<HTMLElement>("[data-page-hero]");
      const main = document.getElementById("content");
      if (!heading || !main) return;
      // Position de mise en page, sans les décalages des animations d'entrée en cours.
      let top = 0;
      let el: HTMLElement | null = heading;
      while (el && el !== main) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      setHeight(Math.round(top + heading.offsetHeight + 40));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, [dark, pathname]);

  if (pathname === "/") return null;

  if (!dark) {
    return (
      <div
        key={pathname}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in oklab, var(--gold-soft) 28%, transparent), transparent 70%)",
          }}
        />
        <Pattern
          id="page-pattern-light"
          className="absolute inset-0 size-full text-primary opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        {letters.map((item, i) => (
          <Letter key={item.l + i} item={item} mx={mx} my={my} sy={scrollY} i={i} opacity={0.3} />
        ))}
      </div>
    );
  }

  return (
    <div
      key={pathname}
      ref={ref}
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden bg-ink [--mx:50%] [--my:40%]"
      style={{ height }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 75% at 50% 30%, color-mix(in oklab, var(--sand) 80%, var(--gold) 20%) 0%, var(--ink) 70%)",
        }}
      />
      <Pattern
        id="page-pattern-dark"
        className="absolute inset-0 size-full text-primary opacity-[0.06]"
      />
      {/* La lumière de la souris révèle le motif doré */}
      <Pattern
        id="page-pattern-reveal"
        className="absolute inset-0 size-full text-gold-soft opacity-60 [mask-image:radial-gradient(circle_220px_at_var(--mx)_var(--my),black,transparent)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_360px_at_var(--mx)_var(--my),color-mix(in_oklab,var(--gold-soft)_14%,transparent),transparent_70%)]" />

      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMin meet"
        className="absolute top-20 -right-10 hidden h-[440px] text-primary opacity-60 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:block"
      >
        <motion.path
          d={ARCH}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.path
          d={ARCH_IN}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="2 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.rect
          x="194"
          y="0"
          width="12"
          height="12"
          fill="currentColor"
          transform="rotate(45 200 6)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: "spring" }}
          style={{ transformOrigin: "200px 6px" }}
        />
      </svg>

      {dust.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-soft"
          style={{ left: d.x, top: d.y, width: d.size, height: d.size }}
          animate={{ y: [0, -80, -160], opacity: [0, 0.8, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      {letters.map((item, i) => (
        <Letter key={item.l + i} item={item} mx={mx} my={my} sy={scrollY} i={i} opacity={0.35} />
      ))}

      {/* Frise d'arcs brisés : le passage du bandeau sombre au parchemin */}
      <svg
        className="absolute inset-x-0 -bottom-px h-6 w-full text-background"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="arch-frieze" width="48" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 24 V14 C0 8 14 4 24 0 C34 4 48 8 48 14 V24 Z" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-frieze)" />
      </svg>
      <div className="absolute inset-x-0 bottom-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
}
