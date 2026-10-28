import { RichText } from "@/components/site/RichText";

export type SpectreMarker = { label: string; position: number; note?: string | undefined };

type Props = {
  title: string;
  left: string;
  right: string;
  markers: SpectreMarker[];
  caption?: string | undefined;
};

/**
 * Axe gradué entre deux excès, avec le juste milieu repéré.
 * Pour les vertus qui se définissent par une tension (crainte/espérance, ṣabr, tawakkul).
 */
export function Spectre({ title, left, right, markers, caption }: Props) {
  return (
    <figure className="not-prose my-14">
      <div className="rounded-2xl border border-border/60 bg-surface/40 px-6 py-9 backdrop-blur-sm sm:px-10">
        <p className="text-center font-display text-2xl leading-tight sm:text-3xl">{title}</p>

        <div className="mt-12 hidden sm:block">
          <div className="relative h-px w-full bg-gradient-to-r from-muted-foreground/40 via-primary to-muted-foreground/40">
            {markers.map((m) => (
              <div
                key={m.label}
                className="absolute -translate-x-1/2"
                style={{ left: `${Math.min(Math.max(m.position, 0), 100)}%`, top: 0 }}
              >
                <span className="mx-auto block size-3 -translate-y-1/2 rounded-full border border-primary bg-background shadow-elegant animate-breathe" />
                <p className="mt-3 w-36 -translate-x-[calc(50%-0.375rem)] text-center text-sm font-medium leading-tight">
                  {m.label}
                </p>
                {m.note ? (
                  <p className="mt-1 w-36 -translate-x-[calc(50%-0.375rem)] text-center text-xs leading-relaxed text-muted-foreground">
                    <RichText text={m.note} />
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-32 flex justify-between text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <span>{left}</span>
            <span>{right}</span>
          </div>
        </div>

        <ul className="mt-8 space-y-3 sm:hidden">
          <li className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{left}</li>
          {markers.map((m) => (
            <li key={m.label} className="rounded-lg border border-primary/25 bg-primary/[0.04] px-4 py-3">
              <p className="text-sm font-medium">{m.label}</p>
              {m.note ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  <RichText text={m.note} />
                </p>
              ) : null}
            </li>
          ))}
          <li className="text-right text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {right}
          </li>
        </ul>
      </div>
      {caption ? (
        <figcaption className="mx-auto mt-5 max-w-xl text-center text-sm italic text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default Spectre;
