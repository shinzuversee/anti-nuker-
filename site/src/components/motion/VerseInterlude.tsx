import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const ease = [0.65, 0, 0.35, 1] as const;

// Sourate Ar-Rahman (55), versets 1 à 4 : le dernier mot, al-bayān, donne son nom au site.
const lines = ["الرَّحْمَنُ", "عَلَّمَ الْقُرْآنَ", "خَلَقَ الْإِنْسَانَ", "عَلَّمَهُ الْبَيَانَ"];

// Coin d'enluminure (tazhīb) qui se trace à l'arrivée de la section.
function Corner({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`absolute size-14 text-primary sm:size-20 ${className}`}
      aria-hidden="true"
    >
      {["M2 78 V20 Q2 2 20 2 H78", "M12 78 V28 Q12 12 28 12 H78", "M22 40 Q22 22 40 22"].map(
        (d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={i === 0 ? 1.4 : 0.8}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: i * 0.2, ease }}
          />
        ),
      )}
      <motion.rect
        x="34"
        y="34"
        width="8"
        height="8"
        fill="currentColor"
        transform="rotate(45 38 38)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, type: "spring" }}
        style={{ transformOrigin: "38px 38px" }}
      />
    </svg>
  );
}

export function VerseInterlude() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 text-primary-foreground sm:px-8 sm:py-28">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-14 text-center sm:px-16 sm:py-16">
        <Corner className="top-0 left-0" />
        <Corner className="top-0 right-0 -scale-x-100" />
        <Corner className="bottom-0 left-0 -scale-y-100" />
        <Corner className="right-0 bottom-0 -scale-100" />

        <div
          className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8"
          lang="ar"
          dir="rtl"
        >
          {lines.map((line, i) => {
            const last = i === lines.length - 1;
            return (
              // Chaque verset s'écrit de droite à gauche, comme le trace un calame.
              <motion.span
                key={line}
                className={`relative inline-block text-4xl leading-[1.9] sm:text-5xl ${last ? "gold-text" : ""}`}
                initial={{ clipPath: "inset(0 0 0 100%)", opacity: 0.2 }}
                whileInView={{ clipPath: "inset(0 0 0 0%)", opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.5, ease }}
              >
                {line}
              </motion.span>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="hairline mx-auto mt-10 h-px w-40" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-snug text-primary-foreground/90 italic sm:text-3xl">
            Le Tout Miséricordieux. Il a enseigné le Coran. Il a créé l'homme. Il lui a enseigné
            l'expression claire.
          </p>
          <p className="eyebrow mt-5">Sourate Ar-Raḥmān · 55 : 1-4</p>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/55">
            C'est de ce dernier mot, al-bayān, que Nūr al-Bayān tire son nom.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
