import { Link } from "@tanstack/react-router";
import { Youtube, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Mishkat } from "@/components/motion/Mishkat";
import { Ornament } from "@/components/motion/Ornament";

export function Footer() {
  return (
    <footer className="relative isolate mt-32 overflow-hidden border-t border-primary/20">
      {/* Lueur dorée et grand nom arabe en filigrane */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, color-mix(in oklab, var(--gold-soft) 26%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Le filigrane est enveloppé : l'animation dorée du texte modifie son opacité. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -z-10 -translate-x-1/2 opacity-[0.1] select-none"
      >
        <motion.p
          lang="ar"
          className="gold-text text-[9rem] leading-none whitespace-nowrap sm:text-[14rem]"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          whileInView={{ clipPath: "inset(0 0 0 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
        >
          نور البيان
        </motion.p>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8">
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="relative">
            <div
              className="absolute inset-[-80%] rounded-full bg-primary/15 blur-2xl"
              aria-hidden="true"
            />
            <Mishkat className="relative h-14 w-auto text-primary" />
          </div>
          <p lang="ar" dir="rtl" className="gold-text mt-6 text-3xl leading-[1.7] sm:text-4xl">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
          <p className="mt-2 font-display text-lg text-muted-foreground italic">
            « Et dis : Seigneur, accrois mes connaissances. » · Ṭā-Hā, 20 : 114
          </p>
          <Ornament className="mt-6" align="center" />
        </div>

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Nūr al-Bayān</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Une étude attentive du Coran, appuyée sur les sources — écrite, enregistrée et
              enseignée une conversation à la fois.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://youtube.com"
                aria-label="Chaîne YouTube"
                className="grid size-11 place-items-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-glow"
              >
                <Youtube className="size-4" />
              </a>
              <a
                href="https://x.com"
                aria-label="Profil X"
                className="grid size-11 place-items-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-glow"
              >
                <Twitter className="size-4" />
              </a>
              <Link
                to="/contact"
                aria-label="Contact par e-mail"
                className="grid size-11 place-items-center rounded-full border border-border bg-background/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-glow"
              >
                <Mail className="size-4" />
              </Link>
            </div>
          </div>

          <nav aria-label="Explorer">
            <p className="eyebrow">Explorer</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/sommaire" className="text-muted-foreground hover:text-foreground">
                  Sommaire
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-muted-foreground hover:text-foreground">
                  Vidéothèque
                </Link>
              </li>
              <li>
                <Link to="/qa" className="text-muted-foreground hover:text-foreground">
                  Questions &amp; réponses
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-muted-foreground hover:text-foreground">
                  Rendez-vous
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Plus">
            <p className="eyebrow">Plus</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  À propos de l'auteur
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nūr al-Bayān. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span className="size-1 rotate-45 bg-primary/70" aria-hidden="true" />
            Une étude attentive du Coran, appuyée sur les sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
