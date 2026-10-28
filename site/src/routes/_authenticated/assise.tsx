import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Lock, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { JitsiRoom } from "@/components/site/JitsiRoom";
import { AssiseResources } from "@/components/site/AssiseResources";
import { Button } from "@/components/ui/button";
import { getAssiseAccess } from "@/lib/assise.functions";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/assise")({
  component: AssisePage,
  head: () => ({
    meta: [
      { title: "L'assise en direct — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Salle d'étude en direct : voix, caméra, partage d'écran et de documents, chat écrit.",
      },
      { property: "og:title", content: "L'assise en direct — Nūr al-Bayān" },
      {
        property: "og:description",
        content: "Rejoignez l'assise en direct réservée aux séances confirmées.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const ROOM_NAME = "nur-al-bayan-assise-privee-8f3a2c";

function AssisePage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchAccess = useServerFn(getAssiseAccess);
  const { data, isLoading } = useQuery({
    queryKey: ["assise-access"],
    queryFn: () => fetchAccess(),
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <Section className="pt-36 pb-24">
      <SectionHeading
        eyebrow="En direct"
        title="L'assise"
        description="Une salle d'étude en visioconférence : la parole, la caméra, le partage d'écran et de documents, et un coin chat pour écrire."
      />

      <div className="mt-12">
        {isLoading ? (
          <div className="glass grain rounded-xl p-8 text-sm text-muted-foreground">
            Vérification de votre accès…
          </div>
        ) : data?.allowed ? (
          <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                {data.isHost
                  ? "Vous êtes l'animateur : vous pouvez couper les micros, partager l'écran et gérer les participants."
                  : "Votre place est confirmée. Votre micro est coupé à l'entrée."}
              </p>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Se déconnecter
              </Button>
            </div>
            <JitsiRoom
              roomName={ROOM_NAME}
              displayName={data.displayName}
              isHost={data.isHost}
            />
            <AssiseResources isHost={data.isHost} />
          </>
        ) : (
          <div className="glass grain rounded-xl p-8">
            <div className="relative z-10 space-y-4">
              <Lock className="size-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl">Accès réservé aux séances confirmées</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {data && data.reservations.length > 0
                  ? "Votre demande a bien été enregistrée. Dès que le paiement de la séance est confirmé, cette page ouvrira la salle en direct."
                  : "Réservez d'abord une séance d'étude. Une fois le paiement confirmé, vous pourrez rejoindre l'assise depuis cette page."}
              </p>

              {data && data.reservations.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {data.reservations.map((r) => (
                    <li
                      key={r.id}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3"
                    >
                      <span>
                        {r.session_name} — {r.requested_date} à {r.requested_slot}
                      </span>
                      <span className="text-xs tracking-wider text-muted-foreground uppercase">
                        {r.status === "paid"
                          ? "Confirmée"
                          : r.status === "cancelled"
                            ? "Annulée"
                            : "En attente"}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="gold">
                  <Link to="/appointments">Réserver une séance</Link>
                </Button>
                <Button variant="ghost" onClick={signOut}>
                  Se déconnecter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
