import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Mishkat } from "./Mishkat";

// Rideau de transition entre les pages : un voile parchemin couvre l'écran,
// l'arc doré se trace, la lampe s'allume et le nom arabe de la page apparaît,
// puis le voile se lève sur la nouvelle page avec un liseré d'or.

const names: Record<string, string> = {
  "/": "نور البيان",
  "/actus": "الأخبار",
  "/blog": "المقالات",
  "/sommaire": "الفهرس",
  "/videos": "الدروس المرئية",
  "/qa": "الأسئلة",
  "/about": "عن الكاتب",
  "/contact": "التواصل",
  "/appointments": "المجالسة",
};

function nameFor(path: string) {
  if (names[path]) return names[path];
  if (path.startsWith("/sujet/") || path.startsWith("/blog/")) return "اقْرَأْ";
  return "نور البيان";
}

const ARCH = "M20 300 V140 C20 75 100 35 150 6 C200 35 280 75 280 140 V300";

export function RouteCurtain() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);
  const [run, setRun] = useState<{ key: number; path: string } | null>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const key = Date.now();
    setRun({ key, path: pathname });
    const t = setTimeout(() => setRun((r) => (r?.key === key ? null : r)), 700);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {run ? (
        <motion.div
          key={run.key}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[95] grid place-items-center bg-background"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 45%, color-mix(in oklab, var(--gold-soft) 35%, transparent), transparent 65%)",
          }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Liseré d'or au bord du voile qui se lève */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_6px] shadow-primary/40" />
          <div className="relative flex flex-col items-center text-primary">
            <svg
              viewBox="0 0 300 300"
              className="absolute top-1/2 left-1/2 h-[46vh] -translate-x-1/2 -translate-y-[58%]"
            >
              <motion.path
                d={ARCH}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0.6 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Mishkat className="h-16 w-auto" />
            </motion.div>
            <motion.p
              lang="ar"
              className="gold-text mt-5 text-5xl leading-[1.5]"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            >
              {nameFor(run.path)}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
