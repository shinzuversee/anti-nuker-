import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Clock, Globe } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sessions } from "@/data/content";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { createReservation } from "@/lib/assise.functions";
import { SessionCheckout } from "@/components/site/SessionCheckout";
import { PaymentTestModeBanner } from "@/components/site/PaymentTestModeBanner";



export const Route = createFileRoute("/appointments")({
  component: AppointmentsPage,
  head: () => ({
    meta: [
      { title: "Réserver une séance d'étude privée — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Réservez une séance d'étude coranique individuelle ou un programme de lecture guidée. Consultation d'introduction offerte.",
      },
      { property: "og:title", content: "Réserver une séance d'étude privée" },
      {
        property: "og:description",
        content: "Séances d'étude coranique individuelles et programmes de lecture guidée.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/appointments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/appointments" }],
  }),
});

const slots = ["09:00", "11:00", "14:00", "16:30", "19:00"];

const priceIdBySession: Record<string, string> = {
  "Séance d'étude": "seance_etude_unique",
  "Programme de lecture guidée": "programme_lecture_guidee_unique",
};

const schema = z.object({
  name: z.string().trim().min(1, "Merci d'indiquer votre nom").max(100),
  email: z.string().trim().email("Merci d'indiquer une adresse e-mail valide").max(255),
  date: z.string().trim().min(1, "Merci de choisir une date"),
  slot: z.string().trim().min(1, "Merci de choisir un horaire"),
  notes: z.string().trim().max(1000).optional(),
});

type FormErrors = {
  name?: string;
  email?: string;
  date?: string;
  slot?: string;
  notes?: string;
};

function AppointmentsPage() {
  const navigate = useNavigate();
  const submitReservation = useServerFn(createReservation);
  const [selected, setSelected] = useState(sessions[1]!.name);
  const [slot, setSlot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [checkout, setCheckout] = useState<{ priceId: string; reservationId: string } | null>(
    null,
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form)), slot };
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues)
        next[issue.path[0] as keyof FormErrors] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      setSubmitting(false);
      toast.info("Créez votre compte pour finaliser", {
        description: "L'accès à l'assise en direct est lié à votre compte.",
      });
      navigate({ to: "/auth" });
      return;
    }

    try {
      const created = await submitReservation({
        data: {
          sessionName: selected,
          requestedDate: result.data.date,
          requestedSlot: result.data.slot,
          notes: result.data.notes ?? "",
        },
      });
      form.reset();
      setSlot("");

      const priceId = priceIdBySession[selected];
      if (priceId) {
        setCheckout({ priceId, reservationId: created.reservationId });
        toast.success("Demande enregistrée", {
          description: "Réglez la séance ci-dessous pour ouvrir l'accès à l'assise.",
        });
      } else {
        toast.success("Demande envoyée", {
          description: `${selected} — vous recevrez une confirmation sous peu.`,
        });
        navigate({ to: "/assise" });
      }
    } catch {
      toast.error("La demande n'a pas pu être enregistrée. Réessayez.");
    } finally {
      setSubmitting(false);
    }
  };



  if (checkout) {
    return (
      <>
        <PaymentTestModeBanner />
        <Section className="pt-36 pb-24">
          <SectionHeading
            eyebrow="Paiement"
            title="Régler votre séance"
            description="Carte bancaire ou paiement en plusieurs fois avec Klarna, selon votre pays. Dès le paiement validé, l'assise en direct s'ouvre dans votre espace."
          />
          <div className="mt-12">
            <SessionCheckout
              priceId={checkout.priceId}
              reservationId={checkout.reservationId}
              returnUrl={`${typeof window === "undefined" ? "" : window.location.origin}/assise`}
            />
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PaymentTestModeBanner />
      <Section className="pt-36 pb-10">
        <SectionHeading
          eyebrow="Rendez-vous"
          arabic="المجالسة"
          title="S'asseoir ensemble"
          description="Les séances privées se tiennent en visioconférence. Choisissez le format qui convient, puis proposez un créneau."
        />
      </Section>


      <Section className="py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {sessions.map((s) => {
            const isSelected = selected === s.name;
            return (
              <button
                key={s.name}
                type="button"
                onClick={() => setSelected(s.name)}
                aria-pressed={isSelected}
                className={cn(
                  "glass grain cursor-pointer rounded-xl p-8 text-left transition-all duration-500 hover:-translate-y-1",
                  isSelected ? "border-primary/50 shadow-glow" : "hover:border-primary/25",
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">{s.length}</p>
                    {s.featured ? (
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[0.65rem] tracking-wider text-primary uppercase">
                        La plus demandée
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-2xl">{s.name}</h3>
                  <p className="mt-2 font-display text-3xl text-sand">{s.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </div>
      </Section>

      <Section className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <form onSubmit={onSubmit} noValidate className="glass grain rounded-xl p-8">
            <div className="relative z-10 space-y-6">
              <p className="eyebrow">Demande : {selected}</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ap-name">Nom complet</Label>
                  <Input id="ap-name" name="name" maxLength={100} className="h-11 bg-surface/50" />
                  {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ap-email">E-mail</Label>
                  <Input
                    id="ap-email"
                    name="email"
                    type="email"
                    maxLength={255}
                    className="h-11 bg-surface/50"
                  />
                  {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ap-date">Date souhaitée</Label>
                  <Input id="ap-date" name="date" type="date" className="h-11 bg-surface/50" />
                  {errors.date ? <p className="text-xs text-destructive">{errors.date}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ap-slot">Horaire souhaité (heure de Paris)</Label>
                  <Select value={slot} onValueChange={setSlot}>
                    <SelectTrigger id="ap-slot" className="h-11 bg-surface/50">
                      <SelectValue placeholder="Choisir un créneau" />
                    </SelectTrigger>
                    <SelectContent>
                      {slots.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.slot ? <p className="text-xs text-destructive">{errors.slot}</p> : null}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ap-notes">Que souhaitez-vous aborder ? (facultatif)</Label>
                <Textarea
                  id="ap-notes"
                  name="notes"
                  rows={5}
                  maxLength={1000}
                  className="resize-none bg-surface/50"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" disabled={submitting}>
                {submitting ? "Envoi…" : "Demander ce créneau"}
              </Button>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="glass grain rounded-xl p-8">
              <div className="relative z-10 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p>
                    Les séances ont lieu du lundi au jeudi. Les demandes sont
                    confirmées sous 48 heures avec une invitation d'agenda et un lien
                    visio.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p>
                    Les horaires indiqués sont à l'heure de Paris. Votre invitation
                    s'adaptera automatiquement à votre fuseau horaire.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p>
                    Le report est gratuit jusqu'à 24 heures avant la séance. Rien
                    n'est facturé tant que la séance n'est pas confirmée.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass grain rounded-xl p-8">
              <div className="relative z-10">
                <p className="eyebrow">Avant notre rencontre</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Envoyez le passage ou la question à l'avance si vous le pouvez. Les
                  séances préparées vont systématiquement plus loin que les séances
                  improvisées, et le temps de préparation n'est pas facturé.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
