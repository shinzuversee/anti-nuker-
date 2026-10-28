import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Petite enluminure : un filet doré, une étoile à huit branches, un filet.
// Les filets se tracent depuis l'étoile quand l'ornement apparaît.
export function Ornament({
  className,
  align = "left",
}: {
  className?: string;
  align?: "left" | "center";
}) {
  const line = "h-px w-12 bg-gradient-to-r from-transparent via-primary/70 to-primary/70 sm:w-16";
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-primary",
        align === "center" && "justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <motion.span
        className={cn(line, "origin-right")}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.svg
        viewBox="0 0 20 20"
        className="size-4"
        initial={{ rotate: -90, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="4.5" y="4.5" width="11" height="11" />
          <rect x="4.5" y="4.5" width="11" height="11" transform="rotate(45 10 10)" />
        </g>
        <circle cx="10" cy="10" r="1.6" fill="currentColor" />
      </motion.svg>
      <motion.span
        className={cn(line, "origin-left rotate-180")}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
