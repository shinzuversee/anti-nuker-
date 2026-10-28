const NOMS = [
  "ar-Raḥmān", "ar-Raḥīm", "al-Malik", "al-Quddūs", "as-Salām", "al-Muʾmin",
  "al-Muhaymin", "al-ʿAzīz", "al-Jabbār", "al-Mutakabbir", "al-Khāliq",
  "al-Bāriʾ", "al-Muṣawwir", "al-Ghaffār", "al-Qahhār", "al-Wahhāb",
  "ar-Razzāq", "al-Fattāḥ", "al-ʿAlīm", "al-Qābiḍ", "al-Bāsiṭ", "al-Khāfiḍ",
  "ar-Rāfiʿ", "al-Muʿizz", "al-Mudhill", "as-Samīʿ", "al-Baṣīr", "al-Ḥakam",
  "al-ʿAdl", "al-Laṭīf", "al-Khabīr", "al-Ḥalīm", "al-ʿAẓīm", "al-Ghafūr",
  "ash-Shakūr", "al-ʿAlī", "al-Kabīr", "al-Ḥafīẓ", "al-Muqīt", "al-Ḥasīb",
  "al-Jalīl", "al-Karīm", "ar-Raqīb", "al-Mujīb", "al-Wāsiʿ", "al-Ḥakīm",
  "al-Wadūd", "al-Majīd", "al-Bāʿith", "ash-Shahīd", "al-Ḥaqq", "al-Wakīl",
  "al-Qawī", "al-Matīn", "al-Walī", "al-Ḥamīd", "al-Muḥṣī", "al-Mubdiʾ",
  "al-Muʿīd", "al-Muḥyī", "al-Mumīt", "al-Ḥayy", "al-Qayyūm", "al-Wājid",
  "al-Mājid", "al-Wāḥid", "al-Aḥad", "aṣ-Ṣamad", "al-Qādir", "al-Muqtadir",
  "al-Muqaddim", "al-Muʾakhkhir", "al-Awwal", "al-Ākhir", "aẓ-Ẓāhir",
  "al-Bāṭin", "al-Wālī", "al-Mutaʿālī", "al-Barr", "at-Tawwāb", "al-Muntaqim",
  "al-ʿAfū", "ar-Raʾūf", "Mālik al-Mulk", "Dhū al-Jalāl", "al-Muqsiṭ",
  "al-Jāmiʿ", "al-Ghanī", "al-Mughnī", "al-Māniʿ", "aḍ-Ḍārr", "an-Nāfiʿ",
  "an-Nūr", "al-Hādī", "al-Badīʿ", "al-Bāqī", "al-Wārith", "ar-Rashīd",
  "aṣ-Ṣabūr",
];

const SIZES = ["text-[0.68rem]", "text-[0.75rem]", "text-[0.86rem]", "text-[0.78rem]"];
const TONES = [
  "text-foreground/85",
  "text-foreground/60",
  "text-primary font-semibold",
  "text-foreground/75",
];

/** Schéma : « Allah » → flèche → bulle contenant les noms divins. */
export function NomsSchema() {
  return (
    <figure className="not-prose my-16 flex flex-col items-center">
      {/* Titre */}
      <div className="mb-6 space-y-2 text-center">
        <p className="font-display text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
          Allah
        </p>
        <p
          lang="ar"
          dir="rtl"
          className="gold-text shimmer font-display text-4xl opacity-90 sm:text-5xl"
        >
          الله
        </p>
      </div>

      {/* Ligne décorative et flèche */}
      <div className="relative mb-10 flex flex-col items-center">
        <span
          aria-hidden="true"
          className="h-16 w-px bg-gradient-to-b from-transparent via-primary/40 to-primary"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="-mt-1 size-4 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Bulle circulaire des 99 noms */}
      <div className="relative">
        {/* Halo extérieur */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary/5 blur-3xl"
        />
        <div className="relative aspect-square w-[min(92vw,34rem)] rounded-full border border-primary/20 bg-surface/50 p-8 shadow-[0_0_80px_-12px_rgba(197,160,89,0.12)] backdrop-blur-sm sm:w-[min(88vw,38rem)] sm:p-14">
          <div className="flex h-full w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-center leading-relaxed">
            {NOMS.map((n, i) => {
              const tone = TONES[i % TONES.length]!;
              const size = SIZES[i % SIZES.length]!;
              const isHighlight = tone.includes("text-primary");
              return (
                <span
                  key={n}
                  style={{ animationDelay: `${(i * 0.12) % 4}s` }}
                  className={`${size} ${tone} ${isHighlight ? "text-[0.8rem] sm:text-[0.92rem]" : ""} divine-sparkle whitespace-nowrap transition-colors duration-300 hover:text-primary`}
                >
                  {n}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Légende */}
      <figcaption className="mt-12 max-w-md text-center">
        <p className="eyebrow mb-2">Les Attributs Divins</p>
        <p className="text-sm italic leading-relaxed text-muted-foreground">
          Les quatre-vingt-dix-neuf noms se rapportent tous au nom « Allah ».
        </p>
      </figcaption>
    </figure>
  );
}

export default NomsSchema;
