import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { allPosts, type Post } from "@/data/content";
import { Button } from "@/components/ui/button";
import { RichText } from "@/components/site/RichText";
import { autoEmphasize } from "@/lib/emphasis";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: PostPage,
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} — Nūr al-Bayān` : "Article — Nūr al-Bayān";
    const description = post?.excerpt ?? "Un article sur l'interprétation coranique.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                inLanguage: "fr",
                author: { "@type": "Person", name: "Sidi" },
              }),
            },
          ]
        : [],
    };
  },
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-10 sm:px-8">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Tous les articles
      </Link>

      <header className="mt-10">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="text-primary">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} de lecture</span>
        </div>
        <h1 className="mt-6 text-4xl leading-[1.12] sm:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="hairline mt-10 h-px w-full" aria-hidden="true" />
      </header>

      <div className="prose-reading mt-10 text-[1.05rem]">
        {post.body.map((block, i) => {
          if (block.type === "verse")
            return (
              <figure key={i} className="glass grain my-10 rounded-xl px-6 py-8 sm:px-9">
                <div className="relative z-10">
                  <p
                    dir="rtl"
                    lang="ar"
                    className="shimmer font-display text-2xl leading-[2] sm:text-3xl"
                  >
                    <RichText text={autoEmphasize(block.arabic)} />
                  </p>
                  <div className="hairline my-6 h-px w-24" aria-hidden="true" />
                  <p className="text-base leading-relaxed text-foreground/90">
                    <RichText text={autoEmphasize(block.translation)} />
                  </p>
                  <figcaption className="mt-3 text-xs tracking-wide text-primary uppercase">
                    {block.reference}
                  </figcaption>
                </div>
              </figure>
            );
          const isArabic = /[\u0600-\u06FF]/.test(block.text);
          if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
          if (block.type === "quote")
            return (
              <figure key={i} className="glass grain my-10 rounded-xl px-6 py-8 sm:px-9">
                <div className="relative z-10">
                  <p
                    dir={isArabic ? "rtl" : undefined}
                    lang={isArabic ? "ar" : undefined}
                    className={
                      isArabic
                        ? "shimmer font-display text-2xl leading-[2] sm:text-3xl"
                        : "font-display text-xl leading-relaxed"
                    }
                  >
                    <RichText text={autoEmphasize(block.text)} />
                  </p>
                </div>
              </figure>
            );
          return (
            <p key={i}>
              <RichText text={autoEmphasize(block.text)} />
            </p>
          );

        })}
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="glass grain mt-16 rounded-xl p-8">
        <div className="relative z-10">
          <p className="eyebrow">Une question demeure ?</p>
          <h2 className="mt-4 text-2xl">Envoyez-la, ou réservez une séance.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <Link to="/qa">Poser une question</Link>
            </Button>
            <Button asChild variant="quiet">
              <Link to="/appointments">Réserver une séance</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-20" aria-label="Articles liés">
        <p className="eyebrow">Poursuivre la lecture</p>
        <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
          {related.map((p) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between gap-6 py-6"
              >
                <span>
                  <span className="block font-display text-xl">{p.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {p.category} · {p.readingTime}
                  </span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
