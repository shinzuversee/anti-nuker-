import { RichText } from "@/components/site/RichText";

export type LexiqueDerive = { word: string; arabic?: string; gloss: string };

type Props = {
  root: string;
  transliteration?: string | undefined;
  sense: string;
  derives: LexiqueDerive[];
  note?: string | undefined;
};

/**
 * Carte lexicale : la racine arabe éclatée en lettres dorées,
 * puis ses dérivés. Format propre aux articles sur les attributs.
 */
export function LexiqueRacine({ root, transliteration, sense, derives, note }: Props) {
  const letters = Array.from(root.replace(/\s+/g, ""));
  return (
    <aside className="not-prose glass grain my-12 overflow-hidden rounded-xl px-6 py-8 sm:px-9">
      <div className="relative z-10">
        <p className="eyebrow">Racine</p>

        <div className="mt-5 flex flex-row-reverse flex-wrap items-center justify-end gap-3">
          {letters.map((l, i) => (
            <span
              key={i}
              className="divine-sparkle flex size-14 items-center justify-center rounded-lg border border-primary/40 bg-primary/5 font-display text-3xl text-primary shadow-elegant"
              style={{ animationDelay: `${i * 0.45}s` }}
              lang="ar"
              dir="rtl"
            >
              {l}
            </span>
          ))}
          {transliteration ? (
            <span className="ml-1 text-sm tracking-[0.25em] text-muted-foreground uppercase">
              {transliteration}
            </span>
          ) : null}
        </div>

        <p className="mt-6 text-base leading-relaxed text-foreground/90">
          <RichText text={sense} />
        </p>

        <div className="hairline my-7 h-px w-full" aria-hidden="true" />

        <ul className="grid gap-4 sm:grid-cols-2">
          {derives.map((d) => (
            <li key={d.word} className="border-l border-primary/40 pl-4">
              <p className="flex items-baseline gap-2">
                <span className="gold-text font-display text-lg">{d.word}</span>
                {d.arabic ? (
                  <span lang="ar" dir="rtl" className="shimmer font-display text-lg">
                    {d.arabic}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                <RichText text={d.gloss} />
              </p>
            </li>
          ))}
        </ul>

        {note ? (
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground italic">
            <RichText text={note} />
          </p>
        ) : null}
      </div>
    </aside>
  );
}

export default LexiqueRacine;
