import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { PostCard } from "@/components/site/PostCard";
import { Input } from "@/components/ui/input";
import { allPosts, categories } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Articles sur l'interprétation coranique — Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Essais de fond sur le tafsīr, l'ambiguïté, l'abrogation, les attributs divins et la méthode coranique, sources à l'appui.",
      },
      { property: "og:title", content: "Articles sur l'interprétation coranique" },
      {
        property: "og:description",
        content: "Essais sur le tafsīr, l'ambiguïté et la méthode coranique.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tout");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPosts.filter((p) => {
      const matchesCategory = category === "Tout" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Section className="pt-36">
      <SectionHeading
        eyebrow="Écrits"
        title="Articles"
        description="Traitements détaillés des passages difficiles du Coran et des méthodes qui permettent de les lire."
      />

      <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-xs tracking-wide transition-all duration-300",
                category === c
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article…"
            aria-label="Rechercher un article"
            className="h-11 bg-surface/50 pl-9 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          Aucun article ne correspond à cette recherche pour l'instant.
        </p>
      )}
    </Section>
  );
}
