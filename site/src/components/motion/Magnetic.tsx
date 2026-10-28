import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Enveloppe « aimantée » pour un bouton : il se laisse attirer par la souris
// et une onde de lumière part du point de clic. Le bouton lui-même est passé en enfant.
export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength * 1.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((rs) => rs.filter((rp) => rp.id !== id)), 700);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerDown={onDown}
      whileTap={{ scale: 0.96 }}
      className={cn("relative inline-flex overflow-hidden rounded-full", className)}
    >
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none absolute size-4 rounded-full bg-white/50"
          style={{ left: r.x - 8, top: r.y - 8 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  );
}
