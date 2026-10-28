type Node = { label: string; arabic?: string | undefined; note?: string | undefined };

type Props = {
  title: string;
  arabic?: string | undefined;
  nodes: Node[];
  caption?: string | undefined;
  /** "flow" : étapes reliées par des flèches. "branch" : un tronc, plusieurs branches. */
  variant?: "flow" | "branch" | undefined;
};

/** Schéma éditorial réutilisable : étapes en flux ou branches issues d'un tronc. */
export function ConceptSchema({ title, arabic, nodes, caption, variant = "flow" }: Props) {
  return (
    <figure className="not-prose my-14">
      <div className="glass grain rounded-2xl px-5 py-10 sm:px-10">
        <div className="relative z-10">
          <div className="mb-10 text-center">
            <p className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              {title}
            </p>
            {arabic ? (
              <p
                lang="ar"
                dir="rtl"
                className="gold-text shimmer mt-2 font-display text-2xl sm:text-3xl"
              >
                {arabic}
              </p>
            ) : null}
            <div className="hairline mx-auto mt-6 h-px w-24" aria-hidden="true" />
          </div>

          {variant === "flow" ? (
            <ol className="flex flex-col items-stretch gap-0">
              {nodes.map((n, i) => (
                <li key={n.label} className="flex flex-col items-center">
                  <div className="w-full max-w-xl rounded-xl border border-primary/25 bg-surface/60 px-5 py-4 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary/50">
                    <p className="text-base font-medium text-foreground">{n.label}</p>
                    {n.arabic ? (
                      <p lang="ar" dir="rtl" className="gold-text mt-1 font-display text-lg">
                        {n.arabic}
                      </p>
                    ) : null}
                    {n.note ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
                    ) : null}
                  </div>
                  {i < nodes.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="my-3 h-8 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          ) : (
            <div className="flex flex-col items-center">
              <span
                aria-hidden="true"
                className="h-10 w-px bg-gradient-to-b from-transparent to-primary/60"
              />
              <div className="grid w-full gap-4 sm:grid-cols-2">
                {nodes.map((n) => (
                  <div
                    key={n.label}
                    className="rounded-xl border border-primary/20 bg-surface/50 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50"
                  >
                    <p className="text-base font-medium text-foreground">{n.label}</p>
                    {n.arabic ? (
                      <p lang="ar" dir="rtl" className="gold-text mt-1 font-display text-lg">
                        {n.arabic}
                      </p>
                    ) : null}
                    {n.note ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {caption ? (
        <figcaption className="mx-auto mt-5 max-w-xl text-center text-sm italic leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default ConceptSchema;
