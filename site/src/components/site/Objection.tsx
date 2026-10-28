import { RichText } from "@/components/site/RichText";

type Props = { objection: string; reponse: string; suite?: string | undefined };

/** Dialogue objection / réponse : deux bulles opposées, filet d'or au milieu. */
export function Objection({ objection, reponse, suite }: Props) {
  return (
    <aside className="not-prose my-12 space-y-4">
      <div className="ml-0 mr-auto max-w-[92%] rounded-2xl rounded-tl-sm border border-border/70 bg-surface/60 px-6 py-5 backdrop-blur-sm">
        <p className="eyebrow text-muted-foreground">Objection</p>
        <p className="mt-2 text-[1.02rem] leading-relaxed text-foreground/85">
          <RichText text={objection} />
        </p>
      </div>

      <div className="flex items-center gap-3 px-2" aria-hidden="true">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      <div className="ml-auto mr-0 max-w-[92%] rounded-2xl rounded-tr-sm border border-primary/35 bg-primary/[0.05] px-6 py-5">
        <p className="eyebrow text-primary">Réponse</p>
        <p className="mt-2 text-[1.02rem] leading-relaxed text-foreground/90">
          <RichText text={reponse} />
        </p>
        {suite ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
            <RichText text={suite} />
          </p>
        ) : null}
      </div>
    </aside>
  );
}

export default Objection;
