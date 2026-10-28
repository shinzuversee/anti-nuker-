import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Halo doré qui suit la souris sur tout le site, et un anneau qui s'agrandit
// au-dessus de tout ce qui est cliquable. Seulement avec une souris, jamais au toucher.
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 500, damping: 40 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40 });
  const glowX = useSpring(x, { stiffness: 80, damping: 20 });
  const glowY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest("a, button, [role=button], input, textarea, select, label"));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[60] size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold-soft) 22%, transparent), transparent 65%)",
          mixBlendMode: "multiply",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 48 : 22,
          height: hovering ? 48 : 22,
          backgroundColor: hovering
            ? "color-mix(in oklab, var(--gold) 14%, transparent)"
            : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </>
  );
}
