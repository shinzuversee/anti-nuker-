import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BookOpen, MessageCircleQuestion, Quote, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { PostCard } from "@/components/site/PostCard";
import { VideoCard } from "@/components/site/VideoCard";

import { posts, testimonials, videos } from "@/data/content";
import portrait from "@/assets/sunset-sidi.jpg.asset.json";
import portraitVideo from "@/assets/sunset-sidi-loop.mp4.asset.json";
import { rise3d, StaggerGrid } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { Marquee } from "@/components/motion/Marquee";
import { HomeHero } from "@/components/motion/HomeHero";
import { VerseInterlude } from "@/components/motion/VerseInterlude";
import { LightVerse } from "@/components/motion/LightVerse";

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
      <HomeHero />

      {/* Accès rapides */}
      <section id="acces" className="border-b border-border/60">
        <StaggerGrid
          className="mx-auto grid max-w-6xl gap-3 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4"
          gap={0.08}
        >
          {[
            { label: "Je débute", to: "/sommaire" as const, icon: ArrowRight },
            { label: "Lire les articles", to: "/blog" as const, icon: ArrowRight },
            { label: "Voir les cours", to: "/videos" as const, icon: ArrowDown },
            { label: "Poser une question", to: "/qa" as const, icon: ArrowRight },
          ].map((item) => (
            <motion.div key={item.label} variants={rise3d}>
              <TiltCard className="rounded-md" max={6}>
                <Link
                  to={item.to}
                  className="group flex min-h-14 items-center justify-between rounded-md border border-border bg-secondary/65 px-5 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-accent hover:shadow-glow"
                >
                  {item.label}
                  <item.icon className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGrid>
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Avec Sidi · Découvrir la démarche <ArrowRight className="size-4 text-primary" />
          </Link>
        </div>
      </section>

      <Marquee />

      {/* À propos */}
      <Section>
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <motion.div
              className="overflow-hidden rounded-2xl border border-border/60 shadow-xl"
              initial={{ clipPath: "inset(100% 0 0 0 round 1rem)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0 round 1rem)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
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
            </motion.div>
          </div>
          <div>
            <SectionHeading
              eyebrow="À propos"
              title="La patience d'un musulman en public."
              description={
                <>
                  Je suis un jeune musulman, citoyen <span className="france-text">français</span>{" "}
                  vivant en France, profondément attaché à la transmission du savoir. J’ai eu la
                  grâce immense d’être accompagné, dès mes premiers pas, par des personnes de
                  science dont l’exemple a éclairé mon chemin parmi eux, mon oncle,
                  <span className="gold-wave">le Cheikh Abdullah ibn Konaté</span>, mon professeur{" "}
                  <span className="gold-wave">Ismail al-Hanifi</span>, et bien d’autres figures
                  bienveillantes qui m’ont transmis l’amour de l’étude.
                </>
              }
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Je tiens à le dire avec sincérité : je ne suis pas un savant, et mon cheminement est
                celui d'un éternel étudiant. Je ne prétends nullement à l'infaillibilité. C’est
                pourquoi je place ce travail sous le signe de l'humilité et de la consultation
                fraternelle : si mes écrits comportent une erreur, je vous invite, en toute
                confiance, à me contacter par mail. Votre regard critique est le garant de la
                justesse de cette modeste contribution
              </p>
              <p>
                Si mes écrits peuvent éclairer une âme, apaiser une interrogation ou ouvrir un
                chemin vers une meilleure compréhension, alors j’aurai atteint mon objectif.
                <br />
                <br />
                Qu’Allah nous accorde la sincérité dans nos paroles, la justesse dans nos intentions
                et la bénédiction dans nos efforts.
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

      <VerseInterlude />

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

        <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((post) => (
            <motion.div key={post.slug} variants={rise3d}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </StaggerGrid>
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

        <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-2" gap={0.15}>
          {videos.slice(0, 2).map((video) => (
            <motion.div key={video.id} variants={rise3d}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </StaggerGrid>
      </Section>

      {/* Parcours */}
      <Section>
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
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
            <motion.div key={item.title} variants={rise3d}>
              <TiltCard className="rounded-xl">
                <div className="glass grain gold-edge group relative h-full rounded-xl p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-glow">
                  <div className="relative z-10">
                    <item.icon
                      className="size-6 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                    <Link
                      to={item.to}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary after:absolute after:inset-0"
                    >
                      {item.cta}{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGrid>
      </Section>

      {/* Témoignages */}
      <Section>
        <SectionHeading eyebrow="Témoignages" title="Ce que disent les lecteurs" align="center" />
        <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-3" gap={0.15}>
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={rise3d}
              className="glass grain gold-edge relative rounded-xl p-8"
            >
              <div className="relative z-10">
                <Quote className="size-5 text-primary/70" aria-hidden="true" />
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-sand">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block text-foreground">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </StaggerGrid>
      </Section>

      <LightVerse />

      {/* Appel à l'action */}
      <Section>
        <motion.div
          className="glass grain relative overflow-hidden rounded-2xl px-8 py-16 text-center sm:px-16 sm:py-20"
          initial={{ clipPath: "inset(100% 0 0 0 round 50% 50% 1rem 1rem)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0 round 1rem 1rem 1rem 1rem)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
        >
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
              Les séances privées sont limitées chaque mois et souvent réservées plusieurs semaines
              à l'avance. Le premier échange est offert.
            </p>
            <Button asChild variant="gold" size="xl" className="mt-9">
              <Link to="/appointments">
                Prendre rendez-vous <ArrowRight />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
