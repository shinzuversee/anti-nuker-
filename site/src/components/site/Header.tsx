import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Mishkat } from "@/components/motion/Mishkat";

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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<null | { id: string }>(null);
  const [authReady, setAuthReady] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  // En haut de l'accueil, le menu passe en clair au-dessus du grand fond sombre.
  const onDark = pathname === "/" && !scrolled && !open;
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        scrolled ? "glass-soft border-b" : "border-b border-transparent",
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

      {open ? (
        <motion.div
          className="glass border-t md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <nav aria-label="Navigation mobile" className="flex flex-col px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-3 mb-2">
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
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
