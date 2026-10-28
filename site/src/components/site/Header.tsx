import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Mishkat } from "@/components/motion/Mishkat";
import { DARK_HERO_PATHS } from "@/components/motion/PageBackdrop";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/actus", label: "Actus" },
  { to: "/blog", label: "Articles" },
  { to: "/sommaire", label: "Sommaire" },
  { to: "/videos", label: "Vidéos" },
  { to: "/qa", label: "Questions" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

const navArabic: Record<string, string> = {
  "/": "الرئيسية",
  "/actus": "الأخبار",
  "/blog": "المقالات",
  "/sommaire": "الفهرس",
  "/videos": "المرئيات",
  "/qa": "الأسئلة",
  "/about": "عن الكاتب",
  "/contact": "التواصل",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<null | { id: string }>(null);
  const [authReady, setAuthReady] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  // En haut des pages à bandeau sombre, le menu passe en clair.
  const onDark = (pathname === "/" || DARK_HERO_PATHS.includes(pathname)) && !scrolled && !open;
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Conteneur dédié au menu mobile. Ne pas viser document.body directement : React
  // tourne en boucle quand un portail vise un élément qui contient l'application.
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    let el = document.getElementById("menu-portal");
    if (!el) {
      el = document.createElement("div");
      el.id = "menu-portal";
      document.body.appendChild(el);
    }
    setPortalTarget(el);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ? { id: data.user.id } : null);
      setAuthReady(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ? { id: session.user.id } : null);
      setAuthReady(true);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "glass-soft border-b" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Mishkat className="h-9 w-auto text-primary transition-transform duration-500 group-hover:-translate-y-0.5" />
          <span
            className={cn(
              "font-display text-xl leading-none tracking-tight transition-colors duration-500",
              onDark && "text-primary-foreground",
            )}
          >
            Nūr al-Bayān
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.to || pathname.startsWith(item.to + "/");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                  onDark
                    ? active
                      ? "text-ink"
                      : "text-primary-foreground/75 hover:text-primary-foreground"
                    : active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                )}
              >
                {/* Pastille dorée qui glisse vers la page ouverte */}
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className={cn(
                      "absolute inset-0 rounded-full",
                      onDark ? "bg-primary" : "border border-primary/30 bg-primary/10",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
          <Button asChild variant="gold" size="sm" className="ml-3 h-9 px-4">
            <Link to="/appointments">Réserver</Link>
          </Button>
          <Link
            to={user ? "/assise" : "/auth"}
            className={cn(
              "ml-3 grid size-9 place-items-center rounded-full border transition-all duration-300",
              "border-primary/40 text-primary hover:border-primary hover:bg-primary/10 hover:shadow-glow",
              !authReady && "opacity-60",
            )}
            aria-label={user ? "Mon espace assise" : "Se connecter"}
            title={user ? "Mon espace assise" : "Se connecter"}
          >
            <User className="size-[18px]" strokeWidth={1.5} />
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            onDark && "text-primary-foreground hover:bg-white/10 hover:text-primary-foreground",
          )}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary/70"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* Rendu hors de l'en-tête : son flou d'arrière-plan enfermerait le panneau
          dans ses 72 pixels de hauteur et rendrait les liens impossibles à cliquer. */}
      {portalTarget
        ? createPortal(
            <AnimatePresence>
              {open ? (
                // Menu mobile plein écran : il s'ouvre en cercle depuis le bouton,
                // et chaque lien arrive à son tour avec son nom arabe.
                <motion.div
                  className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-background md:hidden"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 80% 0%, color-mix(in oklab, var(--gold-soft) 35%, transparent), transparent 60%)",
                  }}
                  initial={{ clipPath: "circle(0% at 92% 0%)" }}
                  animate={{ clipPath: "circle(150% at 92% 0%)" }}
                  exit={{ clipPath: "circle(0% at 92% 0%)" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  <motion.nav
                    aria-label="Navigation mobile"
                    className="flex flex-col px-6 pt-4 pb-10"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
                    }}
                  >
                    {nav.map((item) => {
                      const active = pathname === item.to || pathname.startsWith(item.to + "/");
                      return (
                        <motion.div
                          key={item.to}
                          variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }}
                          transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        >
                          <Link
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "relative flex items-baseline justify-between border-b border-border/60 py-4 pl-4 font-display text-3xl transition-colors",
                              active
                                ? "text-foreground"
                                : "text-foreground/70 hover:text-foreground",
                            )}
                          >
                            {active ? (
                              <span className="absolute top-4 bottom-4 left-0 w-0.5 rounded-full bg-primary" />
                            ) : null}
                            {item.label}
                            <span lang="ar" className="gold-text text-xl">
                              {navArabic[item.to]}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                    <motion.div
                      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                      className="mt-8 flex flex-col gap-3"
                    >
                      <Button asChild variant="gold" size="lg">
                        <Link to="/appointments" onClick={() => setOpen(false)}>
                          Réserver une séance
                        </Link>
                      </Button>
                      <Link
                        to={user ? "/assise" : "/auth"}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-center gap-2 rounded-md border px-2 py-3 text-sm transition-all",
                          "border-primary/40 text-primary hover:border-primary hover:bg-primary/10",
                          !authReady && "opacity-60",
                        )}
                      >
                        <User className="size-4" strokeWidth={1.5} />
                        {user ? "Mon espace assise" : "Se connecter"}
                      </Link>
                    </motion.div>
                  </motion.nav>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            portalTarget,
          )
        : null}
    </header>
  );
}
