import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mishkat } from "./Mishkat";
import { INTRO_KEY, introPending } from "./intro";

// Ouverture : la niche se dessine, la lampe s'allume, le nom s'écrit de droite à gauche,
// puis la page s'ouvre en cercle.
export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!introPending()) {
      setShow(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // Stockage indisponible : l'ouverture se rejouera à la prochaine visite.
      }
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = "")}>
      {show ? (
        <motion.div
          className="intro-overlay fixed inset-0 z-[100] grid place-items-center bg-background"
          initial={{ clipPath: "circle(150% at 50% 45%)" }}
          exit={{ clipPath: "circle(0% at 50% 45%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <motion.div
                className="absolute inset-[-120%] rounded-full bg-primary/25 blur-3xl"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 1.2 }}
              />
              <Mishkat draw className="relative h-28 w-auto text-primary" />
            </div>
            <motion.p
              lang="ar"
              className="mt-8 text-4xl text-primary"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              transition={{ delay: 1.1, duration: 1, ease: [0.65, 0, 0.35, 1] }}
            >
              نور البيان
            </motion.p>
            <motion.p
              className="eyebrow mt-3"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.22em" }}
              transition={{ delay: 1.5, duration: 0.9 }}
            >
              Nūr al-Bayān
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
