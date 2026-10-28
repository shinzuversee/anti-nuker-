import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Section, SectionHeading } from "@/components/site/Section";
import { ActusFeed } from "@/components/site/ActusFeed";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/actus")({
  ssr: false,
  component: ActusPage,
  head: () => ({
    meta: [
      { title: "Actus — le fil de Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Le fil d'actualités de Nūr al-Bayān : annonces des assises, publications, images et notes, classées par hashtags.",
      },
      { property: "og:title", content: "Actus — le fil de Nūr al-Bayān" },
      {
        property: "og:description",
        content: "Annonces, publications et images classées par hashtags.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/actus" }],
  }),
});

function ActusPage() {
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    let active = true;
    const check = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        if (active) setIsHost(false);
        return;
      }
      const { data: admin } = await supabase.rpc("has_role", {
        _user_id: data.user.id,
        _role: "admin",
      });
      if (active) setIsHost(Boolean(admin));
    };
    void check();
    const { data: listener } = supabase.auth.onAuthStateChange(() => void check());
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Section className="pt-36">
      <SectionHeading
        eyebrow="Fil d'actualités"
        title="Actus"
        description="Les nouvelles de la maison, publiées au fil des jours et classées par hashtags."
      />
      <ActusFeed isHost={isHost} />
    </Section>
  );
}
