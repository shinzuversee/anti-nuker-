import { RichText } from "@/components/site/RichText";

type Props = { title: string; steps: string[]; conclusion?: string | undefined };

/** Encadré « expérience de pensée » : mise en situation en étapes, puis leçon. */
export function ThoughtExperiment({ title, steps, conclusion }: Props) {
  return (
    <aside className="not-prose my-12 rounded-xl border-l-2 border-primary/70 bg-surface/50 px-6 py-7 backdrop-blur-sm sm:px-8">
      <p className="eyebrow">Expérience de pensée</p>
      <h3 className="mt-3 font-display text-2xl leading-snug text-foreground">{title}</h3>
      <ol className="mt-5 space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-xs text-primary tabular-nums">
              {i + 1}
            </span>
            <p className="text-[1.02rem] leading-relaxed text-foreground/90">
              <RichText text={s} />
            </p>
          </li>
        ))}
      </ol>
      {conclusion ? (
        <>
          <div className="hairline my-6 h-px w-24" aria-hidden="true" />
          <p className="text-[1.02rem] leading-relaxed text-foreground/90">
            <RichText text={conclusion} />
          </p>
        </>
      ) : null}
    </aside>
  );
}

export default ThoughtExperiment;
