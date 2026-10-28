import { Link } from "@tanstack/react-router";
import { Youtube, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Nūr al-Bayān</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Une étude attentive du Coran, appuyée sur les sources — écrite,
              enregistrée et enseignée une conversation à la fois.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://youtube.com"
                aria-label="Chaîne YouTube"
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Youtube className="size-4" />
              </a>
              <a
                href="https://x.com"
                aria-label="Profil X"
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Twitter className="size-4" />
              </a>
              <Link
                to="/contact"
                aria-label="Contact par e-mail"
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
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
                <Link
                  to="/appointments"
                  className="text-muted-foreground hover:text-foreground"
                >
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
          <p className="font-display text-sm text-sand">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
    </footer>
  );
}
