import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Ornament } from "@/components/motion/Ornament";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { SommaireSearch } from "@/components/site/SommaireSearch";
import { sommaire, sommaireEntryCount } from "@/data/sommaire";
import { slugifySujet, getSujet } from "@/data/sujets";
import { posts } from "@/data/content";

export const Route = createFileRoute("/sommaire")({
  component: Sommaire,
  head: () => ({
    meta: [
      { title: "Sommaire — Index complet des articles | Nūr al-Bayān" },
      {
        name: "description",
        content:
          "L'index thématique complet des articles : fondements de l'interprétation, langue et sciences du Coran, théologie, culte, société et méditation.",
      },
      { property: "og:title", content: "Sommaire — Index complet des articles" },
      {
        property: "og:description",
        content:
          "Tous les articles de Nūr al-Bayān, classés par thème : uṣūl al-tafsīr, langue, ʿulūm al-Qurʾān, ʿaqīdah, culte et méditation.",
      },

      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sommaire" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sommaire" }],
  }),
});

function Sommaire() {
  return (
    <>
      <Section className="pt-36 pb-10">
        <SectionHeading
          eyebrow="Sommaire"
          arabic="الفهرس"
          title="L'index complet"
          description="Tout ce qui est publié ici, classé par thème plutôt que par date. Sept chapitres, divisés en sections, dans l'ordre où un lecteur les parcourrait raisonnablement."
        />

        <SommaireSearch />

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 border-t border-border/60 pt-10 sm:grid-cols-3">
          {[
            [String(sommaire.length), "Chapitres"],
            [String(sommaireEntryCount), "Entrées indexées"],
            [String(posts.length), "Articles en ligne"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-3xl text-sand">{value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="py-0">
        <nav
          aria-label="Chapitres"
          className="glass grain gold-edge relative rounded-xl p-7 sm:p-9"
        >
          <div className="relative z-10">
            <p className="eyebrow">Sur cette page</p>

            <ol className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {sommaire.map((chapter) => (
                <li key={chapter.id}>
                  <a
                    href={`#${chapter.id}`}
                    className="group flex items-baseline gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-display text-primary">{chapter.numeral}</span>
                    <span className="flex-1 border-b border-dotted border-border/70 pb-1 group-hover:border-primary/40">
                      {chapter.title}
                    </span>
                    <span dir="rtl" className="shimmer font-display text-sm">
                      {chapter.arabic}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </Section>

      {sommaire.map((chapter) => (
        <Section key={chapter.id} id={chapter.id} className="py-16 sm:py-20">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex max-w-2xl items-start gap-6">
              {/* Médaillon à huit branches avec le numéro du chapitre */}
              <div className="relative grid size-20 shrink-0 place-items-center text-primary">
                <svg viewBox="0 0 80 80" className="absolute inset-0 size-full" aria-hidden="true">
                  {[0, 45].map((r, i) => (
                    <motion.rect
                      key={r}
                      x="16"
                      y="16"
                      width="48"
                      height="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      transform={`rotate(${r} 40 40)`}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.2, ease: [0.65, 0, 0.35, 1] }}
                    />
                  ))}
                  <circle
                    cx="40"
                    cy="40"
                    r="17"
                    fill="var(--background)"
                    stroke="currentColor"
                    strokeOpacity="0.35"
                  />
                </svg>
                <span className="relative font-display text-xl">{chapter.numeral}</span>
              </div>
              <div>
                <p className="eyebrow">Chapitre {chapter.numeral}</p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{chapter.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {chapter.summary}
                </p>
              </div>
            </div>
            <motion.p
              dir="rtl"
              lang="ar"
              className="gold-text text-4xl leading-[1.6] sm:text-5xl"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              whileInView={{ clipPath: "inset(0 0 0 0%)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            >
              {chapter.arabic}
            </motion.p>
          </Reveal>
          <Ornament className="mt-8" />

          <div className="mt-10 space-y-12">
            {chapter.groups.map((group) => (
              <div key={group.label} className="grid gap-6 lg:grid-cols-[15rem_1fr]">
                <h3 className="text-sm leading-relaxed tracking-wide text-primary uppercase">
                  {group.label}
                </h3>

                <ul className="divide-y divide-border/60 border-y border-border/60">
                  {group.entries.map((entry) => {
                    const sujetSlug = slugifySujet(entry.title);
                    const written = Boolean(entry.slug) || Boolean(getSujet(sujetSlug));
                    const inner = (
                      <>
                        <span className="flex-1">
                          <span className="block leading-snug text-foreground">{entry.title}</span>
                          {entry.note ? (
                            <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                              {entry.note}
                            </span>
                          ) : null}
                        </span>
                        {entry.arabic ? (
                          <span
                            dir="rtl"
                            lang="ar"
                            className="shimmer hidden shrink-0 self-start font-display text-base sm:block"
                          >
                            {entry.arabic}
                          </span>
                        ) : null}
                        {written ? null : (
                          <span className="shrink-0 self-start text-xs text-muted-foreground/70">
                            à paraître
                          </span>
                        )}
                        <ArrowUpRight
                          className="size-4 shrink-0 self-start text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </>
                    );

                    return (
                      <li key={entry.title}>
                        {entry.slug ? (
                          <Link
                            to="/blog/$slug"
                            params={{ slug: entry.slug }}
                            className="group relative flex items-baseline gap-5 py-4 transition-all duration-300 before:absolute before:inset-y-3 before:left-0 before:w-0.5 before:scale-y-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:bg-primary/[0.04] hover:pl-4 hover:before:scale-y-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          >
                            {inner}
                          </Link>
                        ) : (
                          <Link
                            to="/sujet/$slug"
                            params={{ slug: sujetSlug }}
                            className="group relative flex items-baseline gap-5 py-4 transition-all duration-300 before:absolute before:inset-y-3 before:left-0 before:w-0.5 before:scale-y-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:bg-primary/[0.04] hover:pl-4 hover:before:scale-y-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          >
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section className="pb-28">
        <div className="glass grain relative overflow-hidden rounded-2xl px-8 py-14 text-center sm:px-16">
          <div className="relative z-10">
            <BookOpen className="mx-auto size-6 text-primary" aria-hidden="true" />
            <h2 className="mx-auto mt-5 max-w-xl text-2xl leading-tight sm:text-3xl">
              Vous préférez parcourir par date ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Le blog liste toutes les publications, de la plus récente à la plus ancienne, avec
              recherche et filtres par catégorie.
            </p>
            <Link to="/blog" className="mt-7 inline-flex items-center gap-1.5 text-sm text-primary">
              Aller aux articles <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
