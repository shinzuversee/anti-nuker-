import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Onglets de filtre : une pastille dorée glisse d'un onglet à l'autre.
export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  const id = useId();
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((o) => {
        const active = o === value;
        return (
          <motion.button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={active}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            className={cn(
              "relative cursor-pointer rounded-full border px-4 py-2 text-xs tracking-wide transition-colors duration-300",
              active
                ? "border-transparent text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {active ? (
              <motion.span
                layoutId={`pill-${id}`}
                className="absolute inset-0 rounded-full bg-primary shadow-glow"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            <span className="relative">{o}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
