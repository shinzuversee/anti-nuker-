/** Types et utilitaires partagés par tous les fichiers de sujets. */

export function slugifySujet(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u0600-\u06FF]/g, "")
    .toLowerCase()
    .replace(/[«»"'’“”]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export type SchemaNode = { label: string; arabic?: string; note?: string };

export type SujetBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; source?: string }
  | { type: "verse"; arabic: string; translation: string; reference: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "audio"; src: string; title?: string; caption?: string }
  | { type: "noms-schema" }
  | {
      type: "schema";
      title: string;
      arabic?: string;
      nodes: SchemaNode[];
      caption?: string;
      variant?: "flow" | "branch";
    }
  | { type: "experiment"; title: string; steps: string[]; conclusion?: string }
  | {
      type: "lexique";
      root: string;
      transliteration?: string;
      sense: string;
      derives: { word: string; arabic?: string; gloss: string }[];
      note?: string;
    }
  | {
      type: "balance";
      title: string;
      arabic?: string;
      affirmLabel?: string;
      denyLabel?: string;
      affirm: string[];
      deny: string[];
      caption?: string;
    }
  | {
      type: "focus";
      kind?: "vigilance" | "repere" | "subtilite";
      title: string;
      text: string;
    }
  | {
      type: "cycle";
      title: string;
      arabic?: string;
      center?: string;
      steps: { label: string; arabic?: string; note?: string }[];
      caption?: string;
    }
  | {
      type: "degres";
      title: string;
      arabic?: string;
      degres: { label: string; arabic?: string; note?: string }[];
      direction?: "asc" | "desc";
      caption?: string;
    }
  | {
      type: "comparaison";
      title: string;
      columns: string[];
      rows: { criterion: string; cells: string[] }[];
      caption?: string;
    }
  | { type: "objection"; objection: string; reponse: string; suite?: string }
  | {
      type: "spectre";
      title: string;
      left: string;
      right: string;
      markers: { label: string; position: number; note?: string }[];
      caption?: string;
    }
  | {
      type: "chronologie";
      title: string;
      events: { date: string; label: string; note?: string }[];
      caption?: string;
    };

export type Sujet = {
  slug: string;
  title: string;
  arabic?: string;
  intro: string;
  body: SujetBlock[];
};
