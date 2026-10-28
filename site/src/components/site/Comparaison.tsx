import { RichText } from "@/components/site/RichText";

type Props = {
  title: string;
  columns: string[];
  rows: { criterion: string; cells: string[] }[];
  caption?: string | undefined;
};

/** Tableau comparatif éditorial : critères en colonne, notions en regard. */
export function Comparaison({ title, columns, rows, caption }: Props) {
  return (
    <figure className="not-prose my-14">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-surface/40 backdrop-blur-sm">
        <div className="border-b border-border/60 px-6 py-5">
          <p className="eyebrow">Comparaison</p>
          <p className="mt-2 font-display text-2xl leading-tight">{title}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="px-6 py-4 text-xs font-normal tracking-[0.2em] text-muted-foreground uppercase">
                  Critère
                </th>
                {columns.map((c) => (
                  <th key={c} className="px-6 py-4 font-display text-base text-primary">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.criterion} className="border-b border-border/40 last:border-0">
                  <th
                    scope="row"
                    className="px-6 py-4 align-top text-sm font-medium text-foreground/90"
                  >
                    {r.criterion}
                  </th>
                  {r.cells.map((cell, i) => (
                    <td
                      key={i}
                      className="px-6 py-4 align-top leading-relaxed text-muted-foreground"
                    >
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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

export default Comparaison;
