import { RichText } from "@/components/site/RichText";

export type ChronoEvent = { date: string; label: string; note?: string | undefined };

type Props = { title: string; events: ChronoEvent[]; caption?: string | undefined };

/** Frise verticale : jalons alignés sur un filet d'or, pastilles pulsantes. */
export function Chronologie({ title, events, caption }: Props) {
  return (
    <figure className="not-prose my-14">
      <div className="rounded-2xl border border-border/60 bg-surface/40 px-6 py-9 backdrop-blur-sm sm:px-10">
        <p className="eyebrow">Repères</p>
        <p className="mt-2 font-display text-2xl leading-tight sm:text-3xl">{title}</p>

        <ol className="relative mt-9 space-y-8 border-l border-primary/30 pl-8">
          {events.map((e) => (
            <li key={e.date + e.label} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full border border-primary bg-background animate-breathe"
              />
              <p className="text-xs tracking-[0.25em] text-primary uppercase tabular-nums">
                {e.date}
              </p>
              <p className="mt-1 font-display text-lg leading-snug">{e.label}</p>
              {e.note ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <RichText text={e.note} />
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export default Chronologie;
