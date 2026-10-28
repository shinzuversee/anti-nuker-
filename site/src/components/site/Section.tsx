import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Ornament } from "@/components/motion/Ornament";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  arabic,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  /** Mot arabe affiché en grand, en or, au-dessus du titre (en-têtes de page). */
  arabic?: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {arabic ? (
        // Le mot s'écrit de droite à gauche, comme le trace un calame.
        <motion.p
          lang="ar"
          dir="rtl"
          className={cn(
            "gold-text mb-4 text-6xl leading-[1.5] drop-shadow-[0_2px_18px_color-mix(in_oklab,var(--gold)_30%,transparent)] sm:text-7xl",
            align === "left" && "text-left",
          )}
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        >
          {arabic}
        </motion.p>
      ) : null}
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        {eyebrow}
      </motion.p>
      {arabic ? (
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h1>
      ) : (
        <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
      )}
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      <Ornament className="mt-8" align={align} />
    </Reveal>
  );
}
