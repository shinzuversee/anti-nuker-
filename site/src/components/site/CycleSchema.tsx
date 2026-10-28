import { RichText } from "@/components/site/RichText";

export type CycleStep = { label: string; arabic?: string | undefined; note?: string | undefined };

type Props = {
  title: string;
  arabic?: string | undefined;
  steps: CycleStep[];
  center?: string | undefined;
  caption?: string | undefined;
};

/**
 * Schéma circulaire : les étapes disposées en orbite autour d'un noyau doré,
 * pour les processus qui se referment sur eux-mêmes (repentir, dhikr, cycles du cœur).
 */
export function CycleSchema({ title, arabic, steps, center, caption }: Props) {
  const n = Math.max(steps.length, 1);
  return (
    <figure className="not-prose my-14">
      <div className="glass grain rounded-2xl px-5 py-10 sm:px-10">
        <div className="relative z-10">
          <div className="mb-8 text-center">
            <p className="font-display text-3xl tracking-tight sm:text-4xl">{title}</p>
            {arabic ? (
              <p lang="ar" dir="rtl" className="gold-text shimmer mt-2 font-display text-2xl">
                {arabic}
              </p>
            ) : null}
          </div>

          {/* Orbite (desktop) */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[30rem] sm:block">
            <div
              className="absolute inset-8 rounded-full border border-dashed border-primary/30 animate-breathe"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-32 items-center justify-center rounded-full border border-primary/50 bg-primary/10 p-4 text-center backdrop-blur-sm">
                <span className="gold-text font-display text-lg leading-tight">
                  {center ?? title}
                </span>
              </div>
            </div>
            {steps.map((s, i) => {
              const a = (i / n) * 2 * Math.PI - Math.PI / 2;
              const left = 50 + 43 * Math.cos(a);
              const top = 50 + 43 * Math.sin(a);
              return (
                <div
                  key={s.label}
                  className="absolute w-40 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/25 bg-surface/70 px-3 py-2 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary/60"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <span className="block text-xs tracking-widest text-primary tabular-nums">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium leading-tight">{s.label}</p>
                  {s.arabic ? (
                    <p lang="ar" dir="rtl" className="gold-text font-display text-base">
                      {s.arabic}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Liste (mobile) */}
          <ol className="space-y-3 sm:hidden">
            {steps.map((s, i) => (
              <li
                key={s.label}
                className="rounded-xl border border-primary/25 bg-surface/60 px-4 py-3"
              >
                <span className="text-xs text-primary tabular-nums">{i + 1}</span>
                <p className="text-sm font-medium">{s.label}</p>
                {s.note ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    <RichText text={s.note} />
                  </p>
                ) : null}
              </li>
            ))}
          </ol>

          <ul className="mt-8 hidden gap-3 sm:grid sm:grid-cols-2">
            {steps
              .filter((s) => s.note)
              .map((s) => (
                <li key={s.label} className="border-l border-primary/40 pl-4">
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    <RichText text={s.note!} />
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {caption ? (
        <figcaption className="mx-auto mt-5 max-w-xl text-center text-sm italic text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default CycleSchema;
