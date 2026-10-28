import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";

export const Route = createFileRoute("/qa")({
  component: QAPage,
  head: () => ({
    meta: [
      { title: "Questions & réponses — Poser une question sur le Coran | Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Posez votre question sur le Coran et lisez des réponses soignées aux questions les plus fréquentes.",
      },
      { property: "og:title", content: "Questions & réponses sur le Coran" },
      {
        property: "og:description",
        content: "Posez une question et lisez les réponses aux plus fréquentes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/qa" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/qa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Merci d'indiquer votre nom").max(100),
  email: z.string().trim().email("Merci d'indiquer une adresse e-mail valide").max(255),
  question: z
    .string()
    .trim()
    .min(20, "Merci de donner au moins une ou deux phrases de contexte")
    .max(2000, "Merci de limiter la question à 2000 caractères"),
});

type FormErrors = { name?: string; email?: string; question?: string };

function QAPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof FormErrors] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Question bien reçue", {
        description: "Vous recevrez une réponse par e-mail, en général sous une semaine.",
      });
    }, 600);
  };

  return (
    <>
      <Section className="pt-36 pb-10">
        <SectionHeading
          eyebrow="Questions & réponses"
          arabic="الأسئلة"
          title="Posez votre question"
          description="Aucune question n'est trop élémentaire et aucune n'est interdite. Les réponses arrivent par e-mail ; certaines deviennent des articles ou des cours."
        />
      </Section>

      <Section className="py-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <form onSubmit={onSubmit} noValidate className="glass grain rounded-xl p-8">
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="qa-name">Votre nom</Label>
                <Input
                  id="qa-name"
                  name="name"
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "qa-name-error" : undefined}
                  className="h-11 bg-surface/50"
                />
                {errors.name ? (
                  <p id="qa-name-error" className="text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="qa-email">Adresse e-mail</Label>
                <Input
                  id="qa-email"
                  name="email"
                  type="email"
                  maxLength={255}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "qa-email-error" : undefined}
                  className="h-11 bg-surface/50"
                />
                {errors.email ? (
                  <p id="qa-email-error" className="text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="qa-question">Votre question</Label>
                <Textarea
                  id="qa-question"
                  name="question"
                  rows={7}
                  maxLength={2000}
                  placeholder="Indiquez le verset ou le sujet, et ce qui vous pose problème précisément…"
                  aria-invalid={!!errors.question}
                  aria-describedby={errors.question ? "qa-question-error" : undefined}
                  className="resize-none bg-surface/50"
                />
                {errors.question ? (
                  <p id="qa-question-error" className="text-xs text-destructive">
                    {errors.question}
                  </p>
                ) : null}
              </div>

              <Button type="submit" variant="gold" size="lg" disabled={submitting}>
                {submitting ? "Envoi…" : "Envoyer la question"}
              </Button>
            </div>
          </form>

          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="cursor-pointer text-left font-display text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>
    </>
  );
}
