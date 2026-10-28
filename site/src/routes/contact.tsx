import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircleQuestion, Youtube } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Écrivez pour une invitation à intervenir, une collaboration, une correction ou toute autre demande.",
      },
      { property: "og:title", content: "Contact — Nūr al-Bayān" },
      {
        property: "og:description",
        content: "Invitations, collaborations, corrections et demandes diverses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Merci d'indiquer votre nom").max(100),
  email: z.string().trim().email("Merci d'indiquer une adresse e-mail valide").max(255),
  subject: z.string().trim().min(1, "Merci d'ajouter un objet").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Merci d'écrire un peu plus")
    .max(2000, "Merci de limiter le message à 2000 caractères"),
});

type FormErrors = { name?: string; email?: string; subject?: string; message?: string };

function ContactPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const result = schema.safeParse(Object.fromEntries(new FormData(form)));

    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues)
        next[issue.path[0] as keyof FormErrors] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Message envoyé", { description: "Merci — je lis chaque message." });
    }, 600);
  };

  return (
    <Section className="pt-36">
      <SectionHeading
        eyebrow="Contact"
        title="Prendre contact"
        description="Pour les invitations à intervenir, les collaborations, les corrections, ou tout ce qui n'entre pas dans les autres formulaires."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="glass grain rounded-xl p-8">
          <div className="relative z-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="c-name">Nom</Label>
                <Input id="c-name" name="name" maxLength={100} className="h-11 bg-surface/50" />
                {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-email">E-mail</Label>
                <Input
                  id="c-email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className="h-11 bg-surface/50"
                />
                {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="c-subject">Objet</Label>
              <Input id="c-subject" name="subject" maxLength={150} className="h-11 bg-surface/50" />
              {errors.subject ? (
                <p className="text-xs text-destructive">{errors.subject}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="c-message">Message</Label>
              <Textarea
                id="c-message"
                name="message"
                rows={7}
                maxLength={2000}
                className="resize-none bg-surface/50"
              />
              {errors.message ? (
                <p className="text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <Button type="submit" variant="gold" size="lg" disabled={submitting}>
              {submitting ? "Envoi…" : "Envoyer le message"}
            </Button>
          </div>
        </form>

        <aside className="space-y-6">
          {[
            {
              icon: MessageCircleQuestion,
              title: "Une question coranique ?",
              body: "Utilisez plutôt le formulaire Questions : elles entrent dans la file des réponses et deviennent souvent des articles.",
            },
            {
              icon: Mail,
              title: "Délai de réponse",
              body: "La plupart des messages reçoivent une réponse sous cinq jours ouvrés. Les invitations sont examinées chaque mois.",
            },
            {
              icon: Youtube,
              title: "Ailleurs",
              body: "De nouveaux cours paraissent un jeudi sur deux sur la chaîne, avec les notes d'étude en description.",
            },
          ].map((item) => (
            <div key={item.title} className="glass grain rounded-xl p-8">
              <div className="relative z-10">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-xl">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}
