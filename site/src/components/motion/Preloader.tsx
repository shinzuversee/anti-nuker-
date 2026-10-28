import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mishkat } from "./Mishkat";
import { INTRO_KEY, introPending } from "./intro";

// Ouverture du site : une porte en arc à deux battants, couleur encre et or.
// L'arc se trace, la lampe s'allume, le nom s'écrit, un filet de lumière passe entre
// les battants, puis la porte s'ouvre en 3D sur l'accueil.

const OPEN_AT = 2400;
const DONE_AT = 3900;
const ease = [0.65, 0, 0.35, 1] as const;

// Demi-arc brisé, du bas du battant jusqu'au sommet, côté jointure (x = 200).
const HALF_ARCH = "M24 620 V300 C24 160 120 80 200 10";
const HALF_ARCH_IN = "M48 620 V306 C48 178 138 104 200 40";

function Leaf({ side, open }: { side: "left" | "right"; open: boolean }) {
  const id = useId();
  const left = side === "left";
  return (
    <motion.div
      className="absolute inset-y-0 w-1/2 overflow-hidden bg-ink"
      style={{
        [left ? "left" : "right"]: 0,
        transformOrigin: left ? "left center" : "right center",
        backfaceVisibility: "hidden",
        boxShadow: open ? "0 0 80px rgba(0,0,0,0.5)" : "none",
      }}
      initial={false}
      animate={open ? { rotateY: left ? -105 : 105 } : { rotateY: 0 }}
      transition={{ duration: 1.3, ease: [0.7, 0, 0.2, 1] }}
    >
      {/* Motif géométrique doré sur le bois du battant */}
      <svg className="absolute inset-0 size-full text-primary opacity-[0.09]" aria-hidden="true">
        <defs>
          <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <rect x="13" y="13" width="38" height="38" />
              <rect x="13" y="13" width="38" height="38" transform="rotate(45 32 32)" />
              <circle cx="32" cy="32" r="8" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${left ? "90deg" : "270deg"}, transparent 60%, rgba(0,0,0,0.35))`,
        }}
      />
      <svg
        viewBox="0 0 200 620"
        preserveAspectRatio={left ? "xMaxYMax meet" : "xMinYMax meet"}
        className="absolute inset-0 size-full text-primary"
        style={left ? undefined : { transform: "scaleX(-1)" }}
        aria-hidden="true"
      >
        <motion.path
          d={HALF_ARCH}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
        />
        <motion.path
          d={HALF_ARCH_IN}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.45, ease }}
        />
        {/* Poignée en anneau près de la jointure */}
        <motion.circle
          cx="184"
          cy="400"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ transformOrigin: "184px 400px" }}
        />
      </svg>
      <div className={`absolute inset-y-0 w-px bg-primary/40 ${left ? "right-0" : "left-0"}`} />
    </motion.div>
  );
}

export function Preloader() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!introPending()) {
      setShow(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t1 = setTimeout(() => setOpen(true), OPEN_AT);
    const t2 = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // Stockage indisponible : l'ouverture se rejouera à la prochaine visite.
      }
    }, DONE_AT);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="intro-overlay fixed inset-0 z-[100] overflow-hidden"
          style={{ perspective: "1600px" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          {/* Éclat de lumière derrière la porte, révélé à l'ouverture */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, var(--background) 0%, color-mix(in oklab, var(--gold-soft) 55%, transparent) 30%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={open ? { opacity: [0, 1, 0], scale: [0.6, 1.4, 1.8] } : { opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <Leaf side="left" open={open} />
          <Leaf side="right" open={open} />

          {/* Filet de lumière qui s'échappe entre les battants juste avant l'ouverture */}
          <motion.div
            className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-gold-soft shadow-[0_0_40px_12px] shadow-gold-soft/60"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [0, 1, 1], opacity: open ? 0 : [0, 0, 1] }}
            transition={{ duration: open ? 0.2 : 2.3, times: [0, 0.85, 1] }}
          />

          {/* Lampe et nom, au centre de la porte */}
          <motion.div
            className="absolute inset-x-0 top-[22%] flex flex-col items-center text-primary"
            animate={open ? { opacity: 0, y: -30, scale: 1.1 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-[-140%] rounded-full bg-primary/30 blur-3xl"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 1.2 }}
              />
              <Mishkat draw delay={0.3} className="relative h-24 w-auto sm:h-28" />
            </div>
            <motion.p
              lang="ar"
              className="gold-text mt-8 text-5xl sm:text-6xl"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              transition={{ delay: 1, duration: 1, ease }}
            >
              نور البيان
            </motion.p>
            <motion.p
              className="eyebrow mt-4"
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.22em" }}
              transition={{ delay: 1.4, duration: 0.9 }}
            >
              Nūr al-Bayān
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
