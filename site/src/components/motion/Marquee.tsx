import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

const words = [
  { ar: "العِلْم", fr: "la science" },
  { ar: "النُّور", fr: "la lumière" },
  { ar: "البَيَان", fr: "la clarté" },
  { ar: "الحِكْمَة", fr: "la sagesse" },
  { ar: "التَّدَبُّر", fr: "la méditation" },
  { ar: "الصَّبْر", fr: "la patience" },
  { ar: "القَلَم", fr: "le calame" },
  { ar: "الهُدَى", fr: "la guidance" },
];

function Row({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const skewX = useTransform(velocity, [-2000, 2000], [8, -8]);
  const dir = useRef(1);

  // Le bandeau défile en continu et accélère avec la vitesse de défilement de la page.
  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const b = boost.get();
    if (b < 0) dir.current = -1;
    else if (b > 0) dir.current = 1;
    x.set(wrap(-50, 0, x.get() - dir.current * 1.4 * (delta / 1000) * (1 + Math.abs(b))));
  });

  const translate = useTransform(x, (v) => `${v}%`);
  return (
    <motion.div className="flex w-max" style={{ x: translate, skewX }}>
      {children}
      {children}
    </motion.div>
  );
}

export function Marquee() {
  const items = (
    <div className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w.ar} className="flex items-center gap-5 px-6 sm:px-8">
          <span lang="ar" className="gold-text text-4xl sm:text-5xl">
            {w.ar}
          </span>
          <span className="font-display text-xl text-primary-foreground/60 italic sm:text-2xl">
            {w.fr}
          </span>
          <svg
            viewBox="0 0 20 20"
            className="ml-6 size-4 text-primary/70 sm:ml-8"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="12" height="12" fill="none" stroke="currentColor" />
            <rect
              x="4"
              y="4"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              transform="rotate(45 10 10)"
            />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Mots du savoir"
      className="relative overflow-hidden border-y border-primary/20 bg-ink py-7"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <Row>{items}</Row>
    </section>
  );
}
