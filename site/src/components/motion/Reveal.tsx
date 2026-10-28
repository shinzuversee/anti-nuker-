import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

// Entrée en perspective : l'élément se redresse en arrivant à l'écran.
export const rise3d = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: 32,
    scale: 0.95,

    transformPerspective: 1200,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 1200,
    transition: { duration: 0.9, ease },
  },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export function Reveal({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotateX: 20, transformPerspective: 1200 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,

        transformPerspective: 1200,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease, delay }}
      {...props}
    />
  );
}

// Grille dont les enfants (motion.* avec variants={rise3d}) apparaissent l'un après l'autre.
export function StaggerGrid({
  className,
  children,
  gap = 0.1,
}: {
  className?: string;
  children: ReactNode;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger(gap)}
    >
      {children}
    </motion.div>
  );
}
