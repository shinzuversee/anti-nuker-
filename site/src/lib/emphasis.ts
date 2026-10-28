/**
 * Met en évidence automatiquement le passage le plus signifiant d'un texte,
 * en l'entourant de ** (rendu ensuite en vert ondulé par <RichText />).
 * Si le texte contient déjà des marqueurs **, il est laissé tel quel.
 */

const ARABIC = /[\u0600-\u06FF]/;

function splitClauses(text: string): string[] {
  // Conserve les séparateurs pour pouvoir reconstruire le texte à l'identique.
  return text.split(/(\s*[,;:—–]\s*|\s*\.\s+|\s*[،؛]\s*)/);
}

/** Mots-clés qui méritent la mise en valeur dans un texte arabe. */
const AR_KEYWORDS = [
  "الله",
  "اللَّه",
  "رب",
  "رَب",
  "الرحم",
  "الحق",
  "الهدى",
  "الإيمان",
  "التقوى",
  "العلم",
  "الكتاب",
  "الفطر",
  "النور",
  "الصبر",
];

const stripDiacritics = (s: string) => s.replace(/[\u064B-\u0652\u0670]/g, "");

/**
 * En arabe, on ne surligne qu'un court groupe de mots (2 à 4),
 * de préférence celui qui contient un terme central.
 */
function emphasizeArabic(text: string): string {
  const tokens = text.split(/(\s+)/);
  const words: number[] = [];
  tokens.forEach((t, i) => {
    if (t.trim().length > 0) words.push(i);
  });
  if (words.length < 4) return text;

  const span = Math.min(3, Math.max(2, Math.round(words.length * 0.3)));
  let start = 0;
  const hit = words.findIndex((i) => {
    const w = stripDiacritics(tokens[i] ?? "");
    return AR_KEYWORDS.some((k) => w.includes(stripDiacritics(k)));
  });
  if (hit >= 0) start = Math.max(0, Math.min(hit, words.length - span));
  else start = Math.max(0, Math.floor((words.length - span) / 2));

  const from = words[start]!;
  const to = words[Math.min(start + span - 1, words.length - 1)]!;
  const before = tokens.slice(0, from).join("");
  const middle = tokens.slice(from, to + 1).join("");
  const after = tokens.slice(to + 1).join("");
  return `${before}**${middle}**${after}`;
}

export function autoEmphasize(text: string): string {
  if (!text || text.includes("**")) return text;
  const isArabic = ARABIC.test(text);
  if (isArabic) return emphasizeArabic(text);
  const minLength = 40;
  if (text.trim().length < minLength) return text;

  const parts = splitClauses(text);
  // Les segments d'index pair sont les clauses, les impairs les séparateurs.
  let bestIndex = -1;
  let bestScore = 0;
  for (let i = 0; i < parts.length; i += 2) {
    const clause = parts[i] ?? "";
    const trimmed = clause.trim();
    if (trimmed.length < (isArabic ? 12 : 24)) continue;
    // On privilégie une clause substantielle mais pas la plus longue tirade.
    const score = trimmed.length <= (isArabic ? 90 : 140) ? trimmed.length : 60;
    if (score > bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }
  if (bestIndex === -1) return text;

  const clause = parts[bestIndex]!;
  const leading = clause.match(/^\s*/)?.[0] ?? "";
  const trailing = clause.match(/\s*$/)?.[0] ?? "";
  const core = clause.trim().replace(/^[«"']\s*/, "").replace(/\s*[»"']$/, "");
  if (!core) return text;
  const prefix = clause.trim().startsWith("«") ? "« " : "";
  const suffix = clause.trim().endsWith("»") ? " »" : "";
  parts[bestIndex] = `${leading}${prefix}**${core}**${suffix}${trailing}`;
  return parts.join("");
}

