import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const nav = [
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
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary/10">
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
              <path
                d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-xl leading-none tracking-tight">
            Nūr al-Bayān
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
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
          className="md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="glass border-t md:hidden">
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
        </div>
      ) : null}
    </header>
  );
}
