import { AlertTriangle, Compass, Sparkles } from "lucide-react";
import { RichText } from "@/components/site/RichText";

type Props = {
  kind?: "vigilance" | "repere" | "subtilite" | undefined;
  title: string;
  text: string;
};

const META = {
  vigilance: { label: "Point de vigilance", Icon: AlertTriangle },
  repere: { label: "Repère", Icon: Compass },
  subtilite: { label: "Subtilité", Icon: Sparkles },
} as const;

/** Encadré court et respirant, marqué d'un halo doré discret. */
export function Focus({ kind = "repere", title, text }: Props) {
  const { label, Icon } = META[kind];
  return (
    <aside className="not-prose relative my-10 overflow-hidden rounded-xl border border-primary/25 bg-primary/[0.04] px-6 py-6 sm:px-8">
      <div
        className="pointer-events-none absolute -top-16 -right-10 size-40 rounded-full bg-primary/15 blur-3xl animate-breathe"
        aria-hidden="true"
      />
      <div className="relative z-10 flex gap-4">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
          <Icon className="size-4" />
        </span>
        <div>
          <p className="eyebrow">{label}</p>
          <p className="mt-2 font-display text-xl leading-tight">{title}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            <RichText text={text} />
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Focus;
