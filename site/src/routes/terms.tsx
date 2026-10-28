import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Conditions relatives aux articles, aux cours vidéo et aux séances d'étude privées proposés par Nūr al-Bayān.",
      },
      { property: "og:title", content: "Conditions d'utilisation — Nūr al-Bayān" },
      {
        property: "og:description",
        content: "Conditions d'usage des contenus, des séances et des annulations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
  return (
    <Section className="max-w-3xl pt-36">
      <SectionHeading
        eyebrow="Mentions légales"
        title="Conditions d'utilisation"
        description="Dernière mise à jour le 1er août 2026."
      />
      <div className="prose-reading mt-10">
        <h2>Usage des contenus</h2>
        <p>
          Les articles et les cours peuvent être cités, partagés et enseignés
          librement, avec mention de la source. La republication d'articles complets,
          ou leur reproduction derrière un accès payant, requiert une autorisation
          écrite.
        </p>
        <h2>Nature des contenus</h2>
        <p>
          Tout ce qui est publié ici relève de la discussion savante, et non d'un avis
          religieux contraignant pour qui que ce soit. Lorsqu'une question touche à vos
          obligations personnelles, consultez un savant qualifié connaissant votre
          situation.
        </p>
        <h2>Séances et annulations</h2>
        <p>
          Une séance réservée peut être reportée ou annulée sans frais jusqu'à
          vingt-quatre heures à l'avance. Les annulations passé ce délai peuvent être
          facturées intégralement. Les séances annulées de mon fait sont toujours
          remboursées ou reportées, à votre convenance.
        </p>
        <h2>Modifications</h2>
        <p>
          Ces conditions peuvent être révisées. Les changements substantiels seront
          signalés par une date de mise à jour en haut de cette page.
        </p>
      </div>
    </Section>
  );
}
