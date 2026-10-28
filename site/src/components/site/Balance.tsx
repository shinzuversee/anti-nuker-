import { Check, X } from "lucide-react";
import { RichText } from "@/components/site/RichText";

type Props = {
  title: string;
  arabic?: string | undefined;
  affirmLabel?: string | undefined;
  denyLabel?: string | undefined;
  affirm: string[];
  deny: string[];
  caption?: string | undefined;
};

/**
 * « Balance » doctrinale : ce qui est affirmé d'un côté, ce qui est écarté de
 * l'autre, séparés par un filet d'or. Format des articles sur les attributs.
 */
export function Balance({
  title,
  arabic,
  affirmLabel = "Ce que l’on affirme",
  denyLabel = "Ce que l’on écarte",
  affirm,
  deny,
  caption,
}: Props) {
  return (
    <figure className="not-prose my-12">
      <div className="rounded-xl border border-border/60 bg-surface/40 p-6 backdrop-blur-sm sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl leading-tight">{title}</h3>
          {arabic ? (
            <p lang="ar" dir="rtl" className="shimmer font-display text-xl">
              {arabic}
            </p>
          ) : null}
        </div>

        <div className="mt-7 grid gap-7 sm:grid-cols-2 sm:gap-0">
          <div className="sm:pr-8">
            <p className="eyebrow text-primary">{affirmLabel}</p>
            <ul className="mt-4 space-y-3">
              {affirm.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    <RichText text={t} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="hidden w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent sm:block"
            aria-hidden="true"
          />

          <div className="sm:pl-8">
            <p className="eyebrow text-muted-foreground">{denyLabel}</p>
            <ul className="mt-4 space-y-3">
              {deny.map((t) => (
                <li
                  key={t}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <X className="mt-0.5 size-4 shrink-0 opacity-70" />
                  <span>
                    <RichText text={t} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          <RichText text={caption} />
        </figcaption>
      ) : null}
    </figure>
  );
}

export default Balance;
