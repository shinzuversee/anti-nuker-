import { RichText } from "@/components/site/RichText";

export type Degre = { label: string; arabic?: string | undefined; note?: string | undefined };

type Props = {
  title: string;
  arabic?: string | undefined;
  degres: Degre[];
  caption?: string | undefined;
  /** "asc" : du bas vers le haut (progression). "desc" : du haut vers le bas (gravité). */
  direction?: "asc" | "desc" | undefined;
};

/**
 * Échelle de degrés : barres d'or de largeur croissante, pour les gradations
 * (stations spirituelles, degrés de certitude, degrés d'un blâme).
 */
export function DegresSchema({ title, arabic, degres, caption, direction = "asc" }: Props) {
  const ordered = direction === "asc" ? [...degres].reverse() : degres;
  const total = ordered.length;
  return (
    <figure className="not-prose my-14">
      <div className="rounded-2xl border border-border/60 bg-surface/40 px-5 py-9 backdrop-blur-sm sm:px-9">
        <div className="text-center">
          <p className="font-display text-3xl tracking-tight sm:text-4xl">{title}</p>
          {arabic ? (
            <p lang="ar" dir="rtl" className="gold-text shimmer mt-2 font-display text-2xl">
              {arabic}
            </p>
          ) : null}
          <div className="hairline mx-auto mt-5 h-px w-24" aria-hidden="true" />
        </div>

        <ol className="mt-9 space-y-3">
          {ordered.map((d, i) => {
            const rank = direction === "asc" ? total - i : i + 1;
            const width = 42 + (68 * (total - i)) / total;
            return (
              <li key={d.label} className="flex flex-col items-center">
                <div
                  className="group rounded-lg border border-primary/30 bg-gradient-to-r from-primary/5 via-primary/12 to-primary/5 px-5 py-4 transition-all duration-500 hover:border-primary/60"
                  style={{ width: `${Math.min(width, 100)}%` }}
                >
                  <div className="flex flex-wrap items-baseline justify-center gap-3 text-center">
                    <span className="text-xs tracking-[0.3em] text-primary tabular-nums">
                      {String(rank).padStart(2, "0")}
                    </span>
                    <p className="font-display text-lg leading-tight">{d.label}</p>
                    {d.arabic ? (
                      <span lang="ar" dir="rtl" className="gold-text font-display text-lg">
                        {d.arabic}
                      </span>
                    ) : null}
                  </div>
                  {d.note ? (
                    <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                      <RichText text={d.note} />
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {caption ? (
        <figcaption className="mx-auto mt-5 max-w-xl text-center text-sm italic text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default DegresSchema;
