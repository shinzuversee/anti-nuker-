import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/portrait-sidi-studio.png.asset.json";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "À propos de Sidi — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Quatorze années de recherche et d'enseignement en herméneutique coranique, et la méthode derrière tout ce qui est publié ici.",
      },
      { property: "og:title", content: "À propos de Sidi" },
      {
        property: "og:description",
        content: "La mission, le parcours et la méthode interprétative.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const milestones = [
  ["2026", "Ijāzah Tafsil ad-Daruri fi mukhtasari-l-'Akhdari, al-Iqraiyyah"],
  ["", "no"],
  ["", "no"],
  ["", "no"],
];

function AboutPage() {
  return (
    <>
      <Section className="pt-36">
        <div className="grid items-start gap-14 md:grid-cols-[1fr_1.15fr]">
          <div className="relative md:sticky md:top-28">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-3xl" aria-hidden="true" />
            <img
              src={portraitAsset.url}
              alt="Portrait de Sidi en studio d'enregistrement"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full rounded-xl border border-border object-cover shadow-elegant"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="À propos"
              title="Sidi"
              description="Un jeune musulman, citoyen français vivant en France, profondément attaché à la transmission du savoir."
            />

            <div className="mt-9 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Je suis un jeune musulman, citoyen <span className="france-text">français</span> vivant en France,
                profondément attaché à la transmission du savoir. J’ai eu la grâce immense d’être accompagné, dès mes
                premiers pas, par des personnes de science dont l’exemple a éclairé mon chemin. Parmi eux, mon oncle,
                <span className="gold-wave">le Cheikh Abdullah ibn Konaté</span>, mon professeur{" "}
                <span className="gold-wave">Ismail al-Hanifi</span>, et bien d’autres figures bienveillantes qui m’ont
                transmis l’amour de l’étude.
              </p>
              <p>
                Je tiens à le dire avec sincérité : je ne suis pas un savant, et mon cheminement est celui d'un éternel
                étudiant. Je ne prétends nullement à l'infaillibilité. C’est pourquoi je place ce travail sous le signe
                de l'humilité et de la consultation fraternelle : si mes écrits comportent une erreur, je vous invite,
                en toute confiance, à me contacter par mail. Votre regard critique est le garant de la justesse de cette
                modeste contribution.
              </p>
              <p>
                Si mes écrits peuvent éclairer une âme, apaiser une interrogation ou ouvrir un chemin vers une meilleure
                compréhension, alors j’aurai atteint mon objectif.
              </p>
              <p>
                Qu’Allah nous accorde la sincérité dans nos paroles, la justesse dans nos intentions et la bénédiction
                dans nos efforts.
              </p>
            </div>

            <div className="mt-12">
              <p className="eyebrow">Parcours</p>
              <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
                {milestones.map(([year, text]) => (
                  <li key={year} className="flex gap-6 py-5">
                    <span className="font-display text-lg text-primary">{year}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/appointments">
                  Réserver une séance <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/blog">Lire les articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
