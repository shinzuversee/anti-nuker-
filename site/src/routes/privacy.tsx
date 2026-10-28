import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Comment sont traitées les questions, demandes de rendez-vous et messages envoyés à Nūr al-Bayān.",
      },
      { property: "og:title", content: "Politique de confidentialité — Nūr al-Bayān" },
      {
        property: "og:description",
        content: "Traitement et conservation des informations transmises.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <Section className="max-w-3xl pt-36">
      <SectionHeading
        eyebrow="Mentions légales"
        title="Politique de confidentialité"
        description="Dernière mise à jour le 1er août 2026."
      />
      <div className="prose-reading mt-10">
        <h2>Données collectées</h2>
        <p>
          Uniquement ce que vous saisissez dans un formulaire : votre nom, votre
          adresse e-mail et le contenu de votre question, demande de rendez-vous ou
          message. Rien d'autre n'est recueilli à votre sujet, et aucun traceur
          publicitaire ou tiers n'est utilisé sur ce site.
        </p>
        <h2>Usage</h2>
        <p>
          Vos informations servent à vous répondre et, pour les rendez-vous, à
          organiser et confirmer la séance. Une question peut recevoir une réponse
          publique dans un article ou une vidéo, mais jamais avec votre nom ou votre
          e-mail, sauf si vous demandez à être cité.
        </p>
        <h2>Conservation et partage</h2>
        <p>
          Les échanges sont conservés tant qu'ils restent utiles au suivi, puis
          supprimés. Vos informations ne sont jamais vendues et ne sont partagées
          qu'avec les prestataires nécessaires à l'envoi des e-mails et à
          l'hébergement des visioconférences.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander à tout moment une copie des données vous concernant,
          ou leur suppression, via le formulaire de contact. Les demandes sont
          traitées sous trente jours.
        </p>
      </div>
    </Section>
  );
}
