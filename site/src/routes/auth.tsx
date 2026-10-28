import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  head: () => ({
    meta: [
      { title: "Se connecter — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Créez un compte ou connectez-vous pour réserver une séance d'étude et rejoindre l'assise en direct.",
      },
      { property: "og:title", content: "Se connecter — Nūr al-Bayān" },
      {
        property: "og:description",
        content: "Accédez à vos réservations et à l'assise en direct.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const schema = z.object({
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  password: z.string().min(6, "Au moins 6 caractères").max(72),
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/assise" });
    });
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]!.message);
      return;
    }
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: fullName.trim() },
          },
        });
        if (error) throw error;
        toast.success("Compte créé", {
          description: "Vérifiez votre boîte e-mail pour confirmer votre adresse.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
        navigate({ to: "/assise" });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("La connexion Google a échoué.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/assise" });
  };

  return (
    <Section className="pt-36 pb-24">
      <SectionHeading
        eyebrow="Espace personnel"
        title={mode === "signin" ? "Se connecter" : "Créer un compte"}
        description="Votre compte relie vos réservations à l'accès de l'assise en direct."
      />

      <div className="mx-auto mt-12 max-w-md">
        <form onSubmit={onSubmit} noValidate className="glass grain rounded-xl p-8">
          <div className="relative z-10 space-y-6">
            {mode === "signup" ? (
              <div className="space-y-2">
                <Label htmlFor="a-name">Nom complet</Label>
                <Input
                  id="a-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  maxLength={100}
                  className="h-11 bg-surface/50"
                />
              </div>
            ) : null}

            <div className="space-y-2">
              <Label htmlFor="a-email">E-mail</Label>
              <Input
                id="a-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="h-11 bg-surface/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="a-password">Mot de passe</Label>
              <Input
                id="a-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={72}
                className="h-11 bg-surface/50"
              />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
              {loading ? "Patientez…" : mode === "signin" ? "Se connecter" : "Créer mon compte"}
            </Button>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              ou
              <span className="h-px flex-1 bg-border" />
            </div>

            <Button type="button" variant="outline" size="lg" className="w-full" onClick={onGoogle}>
              Continuer avec Google
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {mode === "signin" ? "Pas encore de compte ?" : "Vous avez déjà un compte ?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-primary underline-offset-4 hover:underline"
              >
                {mode === "signin" ? "Créer un compte" : "Se connecter"}
              </button>
            </p>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/appointments" className="underline-offset-4 hover:underline">
            Réserver une séance d'étude
          </Link>
        </p>
      </div>
    </Section>
  );
}
