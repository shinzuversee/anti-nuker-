import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Ornament } from "@/components/motion/Ornament";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NomsSchema } from "@/components/site/NomsSchema";
import { AudioPlayer } from "@/components/site/AudioPlayer";
import { ConceptSchema } from "@/components/site/ConceptSchema";
import { ThoughtExperiment } from "@/components/site/ThoughtExperiment";
import { AudioSlot } from "@/components/site/AudioSlot";
import { LexiqueRacine } from "@/components/site/LexiqueRacine";
import { Balance } from "@/components/site/Balance";
import { Focus } from "@/components/site/Focus";
import { CycleSchema } from "@/components/site/CycleSchema";
import { DegresSchema } from "@/components/site/DegresSchema";
import { Comparaison } from "@/components/site/Comparaison";
import { Objection } from "@/components/site/Objection";
import { Spectre } from "@/components/site/Spectre";
import { Chronologie } from "@/components/site/Chronologie";

import { findSujetLocation, getSujet, sujetIndex, type SujetBlock } from "@/data/sujets";

export const Route = createFileRoute("/sujet/$slug")({
  loader: ({ params }) => {
    const location = findSujetLocation(params.slug);
    if (!location) throw notFound();
    return { location, sujet: getSujet(params.slug) ?? null };
  },
  component: SujetPage,
  head: ({ params, loaderData }) => {
    const entry = loaderData?.location.entry;
    const title = entry ? `${entry.title} — Nūr al-Bayān` : "Sujet — Nūr al-Bayān";
    const description =
      loaderData?.sujet?.intro ??
      entry?.note ??
      (entry ? `${entry.title} : développement, sources et versets.` : "Sujet du sommaire.");
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/sujet/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/sujet/${params.slug}` }],
    };
  },
});

/** Rend le texte en mettant en vert ondulé les passages entourés de **. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="emerald-wave">
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

// Un paragraphe s'écrit de droite à gauche seulement s'il commence par une lettre arabe :
// un mot arabe cité au début d'une phrase française ne doit pas en inverser le sens.
const isArabic = (s: string) => /^[^A-Za-zÀ-ÿ\u0600-\u06FF]*[\u0600-\u06FF]/.test(s);

function Block({ block }: { block: SujetBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return (
        <blockquote>
          {block.text.split("\n\n").map((para, i) => (
            <p key={i} dir={isArabic(para) ? "rtl" : undefined}>
              <RichText text={para} />
            </p>
          ))}

          {block.source ? (
            <cite className="mt-3 block text-sm not-italic text-muted-foreground">
              — {block.source}
            </cite>
          ) : null}
        </blockquote>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );

    case "verse":
      return (
        <figure className="glass grain my-10 rounded-xl px-6 py-8 sm:px-9">
          <div className="relative z-10">
            <p
              dir="rtl"
              lang="ar"
              className="shimmer font-display text-2xl leading-[2] sm:text-3xl"
            >
              <RichText text={block.arabic} />
            </p>
            <div className="hairline my-6 h-px w-24" aria-hidden="true" />
            <p className="text-base leading-relaxed text-foreground/90">
              <RichText text={block.translation} />
            </p>
            <figcaption className="mt-3 text-xs tracking-wide text-primary uppercase">
              {block.reference}
            </figcaption>
          </div>
        </figure>
      );
    case "image":
      return (
        <figure className="my-10">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="w-full rounded-xl border border-border/60"
          />
          {block.caption ? (
            <figcaption className="mt-3 text-sm text-muted-foreground">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "audio":
      return <AudioPlayer src={block.src} title={block.title} caption={block.caption} />;
    case "noms-schema":
      return <NomsSchema />;
    case "schema":
      return (
        <ConceptSchema
          title={block.title}
          arabic={block.arabic}
          nodes={block.nodes}
          caption={block.caption}
          variant={block.variant ?? "flow"}
        />
      );
    case "experiment":
      return (
        <ThoughtExperiment title={block.title} steps={block.steps} conclusion={block.conclusion} />
      );
    case "lexique":
      return (
        <LexiqueRacine
          root={block.root}
          transliteration={block.transliteration}
          sense={block.sense}
          derives={block.derives}
          note={block.note}
        />
      );
    case "balance":
      return (
        <Balance
          title={block.title}
          arabic={block.arabic}
          affirmLabel={block.affirmLabel}
          denyLabel={block.denyLabel}
          affirm={block.affirm}
          deny={block.deny}
          caption={block.caption}
        />
      );
    case "focus":
      return <Focus kind={block.kind} title={block.title} text={block.text} />;
    case "cycle":
      return (
        <CycleSchema
          title={block.title}
          arabic={block.arabic}
          center={block.center}
          steps={block.steps}
          caption={block.caption}
        />
      );
    case "degres":
      return (
        <DegresSchema
          title={block.title}
          arabic={block.arabic}
          degres={block.degres}
          direction={block.direction}
          caption={block.caption}
        />
      );
    case "comparaison":
      return (
        <Comparaison
          title={block.title}
          columns={block.columns}
          rows={block.rows}
          caption={block.caption}
        />
      );
    case "objection":
      return <Objection objection={block.objection} reponse={block.reponse} suite={block.suite} />;
    case "spectre":
      return (
        <Spectre
          title={block.title}
          left={block.left}
          right={block.right}
          markers={block.markers}
          caption={block.caption}
        />
      );
    case "chronologie":
      return <Chronologie title={block.title} events={block.events} caption={block.caption} />;
    case "p":
      return (
        <>
          {block.text.split("\n\n").map((para: string, i: number) => (
            <p key={i} dir={isArabic(para) ? "rtl" : undefined}>
              <RichText text={para} />
            </p>
          ))}
        </>
      );
    default:
      return null;
  }
}

function SujetPage() {
  const { location, sujet } = Route.useLoaderData();
  const { entry, chapter, groupLabel } = location;

  const siblings = sujetIndex
    .filter((l) => l.chapter.id === chapter.id && l.slug !== location.slug)
    .slice(0, 6);

  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-28 sm:px-8">
      <Link
        to="/sommaire"
        hash={chapter.id}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Retour au sommaire
      </Link>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="text-primary">
            Chapitre {chapter.numeral} · {chapter.title}
          </span>
          <span aria-hidden="true">·</span>
          <span>{groupLabel}</span>
        </div>
        <h1 className="mt-6 text-4xl leading-[1.12] sm:text-5xl">{entry.title}</h1>
        {entry.arabic ? (
          <p
            dir="rtl"
            lang="ar"
            className="gold-text mt-5 text-left text-4xl leading-[1.6] drop-shadow-[0_2px_14px_color-mix(in_oklab,var(--gold)_25%,transparent)] sm:text-5xl"
          >
            {entry.arabic}
          </p>
        ) : null}
        {sujet ? (
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{sujet.intro}</p>
        ) : null}
        <Ornament className="mt-10" />
      </header>

      {sujet ? (
        <div className="prose-reading mt-10 text-[1.05rem]">
          {(sujet.body as SujetBlock[]).map((block: SujetBlock, i: number) => (
            <Block key={i} block={block} />
          ))}
        </div>
      ) : (
        <div className="glass grain mt-12 rounded-xl p-8">
          <div className="relative z-10">
            <p className="eyebrow">En préparation</p>
            <h2 className="mt-4 text-2xl leading-tight">
              Ce développement n'est pas encore publié.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Le sujet est inscrit au sommaire ; le texte complet, avec ses versets et ses
              références, paraîtra ici. Vous pouvez d'ici là poser une question précise sur ce
              point.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <Link to="/qa">Poser une question</Link>
              </Button>
              <Button asChild variant="quiet">
                <Link to="/sommaire">Parcourir le sommaire</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {!sujet || !sujet.body.some((b) => b.type === "audio") ? <AudioSlot /> : null}

      {siblings.length ? (
        <section className="mt-20" aria-label="Sujets du même chapitre">
          <p className="eyebrow">Dans le même chapitre</p>
          <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/sujet/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="leading-snug">{s.entry.title}</span>
                  <ArrowRight className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
