import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { sujetIndex, getSujet } from "@/data/sujets";
import { cn } from "@/lib/utils";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function SommaireSearch() {
  const [query, setQuery] = useState("");

  const haystack = useMemo(
    () =>
      sujetIndex.map((location) => ({
        location,
        key: normalize(
          [
            location.entry.title,
            location.entry.note ?? "",
            location.entry.arabic ?? "",
            location.groupLabel,
            location.chapter.title,
          ].join(" "),
        ),
      })),
    [],
  );

  const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);

  const results = useMemo(() => {
    if (!terms.length) return [];
    return haystack
      .filter((item) => terms.every((t) => item.key.includes(t)))
      .slice(0, 24)
      .map((item) => item.location);
  }, [haystack, terms.join(" ")]);

  return (
    <div className="mt-10">
      <div
        className={cn(
          "glass grain relative flex items-center gap-3 rounded-full px-5 py-3.5 transition-all duration-300",
          "focus-within:shadow-glow focus-within:ring-1 focus-within:ring-primary/40",
        )}
      >
        <Search className="size-4 shrink-0 text-primary" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un sujet, un mot-clé, un thème…"
          aria-label="Rechercher un sujet dans le sommaire"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70 [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Effacer la recherche"
            className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      {terms.length ? (
        <div className="mt-5">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">
            {results.length === 0
              ? "Aucun sujet ne correspond"
              : `${results.length} sujet${results.length > 1 ? "s" : ""} trouvé${results.length > 1 ? "s" : ""}`}
          </p>

          {results.length ? (
            <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
              {results.map((location) => {
                const written =
                  Boolean(location.entry.slug) || Boolean(getSujet(location.slug));
                const inner = (
                  <>
                    <span className="flex-1">
                      <span className="block text-[11px] tracking-wide text-primary uppercase">
                        {location.chapter.title} · {location.groupLabel}
                      </span>
                      <span className="mt-1 block leading-snug text-foreground">
                        {location.entry.title}
                      </span>
                      {location.entry.note ? (
                        <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                          {location.entry.note}
                        </span>
                      ) : null}
                    </span>
                    {location.entry.arabic ? (
                      <span
                        dir="rtl"
                        lang="ar"
                        className="shimmer hidden shrink-0 self-start font-display text-base sm:block"
                      >
                        {location.entry.arabic}
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

                const className =
                  "group flex items-baseline gap-5 py-4 transition-colors hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

                return (
                  <li key={`${location.chapter.id}-${location.slug}`}>
                    {location.entry.slug ? (
                      <Link
                        to="/blog/$slug"
                        params={{ slug: location.entry.slug }}
                        className={className}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <Link
                        to="/sujet/$slug"
                        params={{ slug: location.slug }}
                        className={className}
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
