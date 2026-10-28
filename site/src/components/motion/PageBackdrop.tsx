import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

// Décor du haut des pages intérieures, dans l'esprit de l'accueil mais sur fond clair :
// lueur dorée, motif géométrique qui s'efface vers le bas, arc qui se trace,
// et lettres arabes dorées qui flottent et suivent la souris en profondeur.

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

const ARCH = "M10 400 V180 C10 95 120 45 200 6 C280 45 390 95 390 180 V400";

function Letter({
  item,
  mx,
  my,
  i,
}: {
  item: (typeof letters)[number];
  mx: MotionValue<number>;
  my: MotionValue<number>;
  i: number;
}) {
  const x = useTransform(mx, (v) => -v * item.depth);
  const y = useTransform(my, (v) => -v * item.depth);
  return (
    <motion.span
      lang="ar"
      className="absolute leading-none text-primary"
      style={{ left: item.x, top: item.y, x, y, fontSize: item.size }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 0.22, scale: 1 }}
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

export function PageBackdrop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  if (pathname === "/") return null;

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
      <svg className="absolute inset-0 size-full text-primary opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <defs>
          <pattern id="page-pattern" width="72" height="72" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="14.4" y="14.4" width="43.2" height="43.2" />
              <rect x="14.4" y="14.4" width="43.2" height="43.2" transform="rotate(45 36 36)" />
              <circle cx="36" cy="36" r="9.7" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-pattern)" />
      </svg>
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMin meet"
        className="absolute top-20 -right-16 hidden h-[420px] text-primary opacity-40 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:block"
      >
        <motion.path
          d={ARCH}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.path
          d="M30 400 V184 C30 108 130 62 200 28 C270 62 370 108 370 184 V400"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        />
      </svg>
      {letters.map((item, i) => (
        <Letter key={item.l + i} item={item} mx={mx} my={my} i={i} />
      ))}
    </div>
  );
}
