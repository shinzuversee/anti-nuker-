import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, MessageCircleQuestion, Quote, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { PostCard } from "@/components/site/PostCard";
import { VideoCard } from "@/components/site/VideoCard";

import { posts, testimonials, videos } from "@/data/content";
import contemplationCosmos from "@/assets/contemplation-cosmos.jpeg.asset.json";
import portrait from "@/assets/sunset-sidi.jpg.asset.json";
import portraitVideo from "@/assets/sunset-sidi-loop.mp4.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Nūr al-Bayān — La clarté dans l'étude du Coran" },
      {
        name: "description",
        content:
          "Articles approfondis, cours vidéo et séances individuelles sur les versets difficiles, les questions théologiques et la méthode coranique.",
      },
      { property: "og:title", content: "Nūr al-Bayān — La clarté dans l'étude du Coran" },
      {
        property: "og:description",
        content:
          "Écrits, cours et consultations appuyés sur les sources, sur les questions les plus exigeantes du Coran.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const featured = posts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-16 sm:px-8 lg:min-h-[760px] lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:pt-28 lg:pb-12">
          <div className="animate-rise">
            <p className="eyebrow flex items-center gap-3 before:h-px before:w-7 before:bg-primary">
              Nūr al-Bayān · Études coraniques
            </p>
            <h1 className="mt-6 max-w-[720px] font-display text-[3.15rem] leading-[1.02] font-medium sm:text-7xl lg:text-[5rem]">
              Comprendre les questions difficiles,
              <span className="gold-text"> à votre rythme.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Articles approfondis, cours vidéo et séances d’étude pour avancer avec méthode, à la lumière du Coran et
              des sources.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl" className="sm:min-w-56">
                <Link to="/sommaire">
                  Explorer les matières <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="sm:min-w-56">
                <Link to="/appointments">Réserver une séance</Link>
              </Button>
            </div>

            <nav aria-label="Accès rapides" className="mt-6 grid grid-cols-2 gap-2">
              {[
                { label: "Je débute", to: "/sommaire" as const, icon: ArrowRight },
                { label: "Lire les articles", to: "/blog" as const, icon: ArrowRight },
                { label: "Voir les cours", to: "/videos" as const, icon: ArrowDown },
                { label: "Poser une question", to: "/qa" as const, icon: ArrowRight },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group flex min-h-12 items-center justify-between rounded-md border border-border bg-secondary/65 px-4 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-accent"
                >
                  {item.label}
                  <item.icon className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </nav>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Avec Sidi · Découvrir la démarche <ArrowRight className="size-4 text-primary" />
            </Link>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
              {[
                ["120+", "articles publiés"],
                ["1,2 M", "vues des cours"],
                ["900+", "questions traitées"],
                ["100+", "personnes accompagnées"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl font-medium text-foreground">{value}</dt>
                  <dd className="mt-1 text-[0.68rem] leading-snug text-muted-foreground uppercase">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/25 bg-ink shadow-elegant">
              <img
                src={contemplationCosmos.url}
                alt="Un homme contemplant le ciel étoilé depuis les montagnes"
                width={720}
                height={1280}
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-primary/35 bg-ink/90 p-5 text-primary-foreground shadow-elegant backdrop-blur-xl sm:inset-x-8 sm:bottom-8">
                <p className="font-display text-3xl font-medium text-primary">12 disciplines</p>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">
                  Croyance, tafsīr, langue arabe, sciences du Coran, spiritualité…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-xl">
              <video
                src={portraitVideo.url}
                poster={portrait.url}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Silhouette contemplant la ville au coucher du soleil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="À propos"
              title="La patience d'un musulman en public."
              description={
                <>
                  Je suis un jeune musulman, citoyen <span className="france-text">français</span> vivant en France,
                  profondément attaché à la transmission du savoir. J’ai eu la grâce immense d’être accompagné, dès mes
                  premiers pas, par des personnes de science dont l’exemple a éclairé mon chemin parmi eux, mon oncle,
                  <span className="gold-wave">le Cheikh Abdullah ibn Konaté</span>, mon professeur{" "}
                  <span className="gold-wave">Ismail al-Hanifi</span>, et bien d’autres figures bienveillantes qui m’ont
                  transmis l’amour de l’étude.
                </>
              }
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Je tiens à le dire avec sincérité : je ne suis pas un savant, et mon cheminement est celui d'un éternel
                étudiant. Je ne prétends nullement à l'infaillibilité. C’est pourquoi je place ce travail sous le signe
                de l'humilité et de la consultation fraternelle : si mes écrits comportent une erreur, je vous invite,
                en toute confiance, à me contacter par mail. Votre regard critique est le garant de la justesse de cette
                modeste contribution
              </p>
              <p>
                Si mes écrits peuvent éclairer une âme, apaiser une interrogation ou ouvrir un chemin vers une meilleure
                compréhension, alors j’aurai atteint mon objectif.
                <br />
                <br />
                Qu’Allah nous accorde la sincérité dans nos paroles, la justesse dans nos intentions et la bénédiction
                dans nos efforts.
              </p>
            </div>
            <Button asChild variant="quiet" size="lg" className="mt-9">
              <Link to="/about">
                Lire le parcours complet <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Articles */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Écrits"
            title="Articles récents"
            description="Traitements détaillés de l'ambiguïté, de la méthode et de la théologie — écrits pour être lus lentement."
          />
          <Button asChild variant="ghost" className="text-primary">
            <Link to="/blog">
              Tous les articles <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      {/* Vidéos */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Vidéothèque"
            title="Les cours à l'écran"
            description="Séances enregistrées de la chaîne YouTube, organisées par thème."
          />
          <Button asChild variant="ghost" className="text-primary">
            <Link to="/videos">
              Toute la vidéothèque <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {videos.slice(0, 2).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Section>

      {/* Parcours */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Lire",
              body: "Commencez par l'article sur le muḥkam et le mutashābih : il éclaire tout le reste.",
              to: "/blog" as const,
              cta: "Ouvrir les articles",
            },
            {
              icon: MessageCircleQuestion,
              title: "Demander",
              body: "Envoyez une question. Les brèves clarifications reçoivent une réponse dans la semaine.",
              to: "/qa" as const,
              cta: "Poser une question",
            },
            {
              icon: Video,
              title: "S'asseoir ensemble",
              body: "Réservez une séance privée pour une lecture suivie et sans hâte.",
              to: "/appointments" as const,
              cta: "Prendre rendez-vous",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass grain group relative rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="relative z-10">
                <item.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <Link
                  to={item.to}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary after:absolute after:inset-0"
                >
                  {item.cta} <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Témoignages */}
      <Section>
        <SectionHeading eyebrow="Témoignages" title="Ce que disent les lecteurs" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass grain rounded-xl p-8">
              <div className="relative z-10">
                <Quote className="size-5 text-primary/70" aria-hidden="true" />
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-sand">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block text-foreground">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Section>

      {/* Appel à l'action */}
      <Section>
        <div className="glass grain relative overflow-hidden rounded-2xl px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="absolute -top-24 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="eyebrow">En tête-à-tête</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl">
              Apportez la question que vous portez depuis longtemps.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Les séances privées sont limitées chaque mois et souvent réservées plusieurs semaines à l'avance. Le
              premier échange est offert.
            </p>
            <Button asChild variant="gold" size="xl" className="mt-9">
              <Link to="/appointments">
                Prendre rendez-vous <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
