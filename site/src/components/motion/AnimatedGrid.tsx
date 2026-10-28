import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Grille dont les cartes se réorganisent en douceur quand un filtre change :
// celles qui partent rétrécissent, celles qui arrivent se retournent en entrant.
export function AnimatedGrid<T>({
  items,
  getKey,
  render,
  className,
}: {
  items: T[];
  getKey: (item: T) => string;
  render: (item: T) => ReactNode;
  className?: string;
}) {
  return (
    <motion.div layout className={className}>
      <AnimatePresence mode="popLayout">
        {items.map((item, i) => (
          <motion.div
            key={getKey(item)}
            layout
            initial={{ opacity: 0, scale: 0.85, rotateY: -25, y: 30, transformPerspective: 1200 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0, transformPerspective: 1200 }}
            exit={{ opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.25 } }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
              delay: Math.min(i, 8) * 0.05,
            }}
          >
            {render(item)}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
