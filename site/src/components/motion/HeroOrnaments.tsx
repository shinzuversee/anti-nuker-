import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

// Ornements flottants en arrière-plan de l'accueil : étoiles à huit branches, arcs et lettres.
// Chacun est placé à une profondeur différente et se déplace à l'opposé de la souris,
// ce qui donne une impression de relief.

type Item = {
  x: string;
  y: string;
  depth: number;
  size: number;
  kind: "star" | "arch" | "letter";
  letter?: string;
  spin?: number;
};

const items: Item[] = [
  { x: "6%", y: "18%", depth: 40, size: 70, kind: "star", spin: 60 },
  { x: "44%", y: "8%", depth: 18, size: 34, kind: "star", spin: -80 },
  { x: "88%", y: "12%", depth: 30, size: 46, kind: "arch" },
  { x: "52%", y: "62%", depth: 55, size: 90, kind: "star", spin: 120 },
  { x: "3%", y: "72%", depth: 25, size: 54, kind: "arch" },
  { x: "36%", y: "88%", depth: 35, size: 40, kind: "letter", letter: "ن" },
  { x: "93%", y: "78%", depth: 50, size: 48, kind: "letter", letter: "ب" },
  { x: "24%", y: "40%", depth: 12, size: 26, kind: "star", spin: -50 },
  { x: "66%", y: "30%", depth: 22, size: 38, kind: "letter", letter: "ق" },
];

function Shape({ item }: { item: Item }) {
  if (item.kind === "letter")
    return (
      <span lang="ar" className="block leading-none" style={{ fontSize: item.size }}>
        {item.letter}
      </span>
    );
  if (item.kind === "arch")
    return (
      <svg
        viewBox="0 0 40 48"
        width={item.size}
        height={item.size * 1.2}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M6 46 V22 C6 12.5 13 6.5 20 2 C27 6.5 34 12.5 34 22 V46" />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 40 40"
      width={item.size}
      height={item.size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <rect x="8" y="8" width="24" height="24" />
      <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" />
      <circle cx="20" cy="20" r="5" />
    </svg>
  );
}

function Ornament({
  item,
  mx,
  my,
  index,
}: {
  item: Item;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  index: number;
}) {
  const x = useTransform(mx, (v) => -v * item.depth);
  const y = useTransform(my, (v) => -v * item.depth);
  return (
    <motion.div className="absolute text-primary" style={{ left: item.x, top: item.y, x, y }}>
      <motion.div
        className="opacity-[0.22]"
        animate={{ y: [0, -14, 0], rotate: item.spin ? [0, item.spin] : 0 }}
        transition={{
          y: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
        }}
      >
        <Shape item={item} />
      </motion.div>
    </motion.div>
  );
}

export function HeroOrnaments() {
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

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {items.map((item, i) => (
        <Ornament key={i} item={item} mx={mx} my={my} index={i} />
      ))}
    </div>
  );
}
