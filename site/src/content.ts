// Tous les textes du site sont ici : modifie ce fichier pour changer le contenu,
// sans toucher aux composants.

export const site = {
  name: 'Nour El Bayan',
  nameAr: 'نور البيان',
  tagline: 'La lumière de la clarté',
  // À remplacer par ton adresse et tes liens.
  email: 'contact@exemple.com',
  socials: {
    tiktok: '#',
    instagram: '#',
    youtube: '#',
  },
}

export const nav = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Mission', href: '#mission' },
  { label: 'Alphabet', href: '#alphabet' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Rappels', href: '#rappels' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
  title: ['Apprends le Coran', 'avec clarté et sérénité'],
  subtitle:
    "Lecture, tajwid, langue arabe et compréhension du Livre : un chemin d'apprentissage pensé pour les francophones, du premier alphabet jusqu'à la méditation des versets.",
  primaryCta: { label: 'Commencer le parcours', href: '#parcours' },
  secondaryCta: { label: 'Découvrir les rappels', href: '#rappels' },
  highlights: ['Cours en français', 'Débutants bienvenus', 'À ton rythme'],
}

// Sourate Ar-Rahman (55), versets 1 à 4.
export const verse = {
  lines: ['الرَّحْمَنُ', 'عَلَّمَ الْقُرْآنَ', 'خَلَقَ الْإِنْسَانَ', 'عَلَّمَهُ الْبَيَانَ'],
  meaning:
    "Le Tout Miséricordieux. Il a enseigné le Coran. Il a créé l'homme. Il lui a enseigné l'expression claire.",
  reference: 'Sourate Ar-Rahman · 55 : 1-4',
  note: "C'est de ce dernier mot, al-bayân, que Nour El Bayan tire son nom.",
}

export const mission = {
  kicker: 'Notre mission',
  title: 'Rendre la science sacrée accessible, sans jamais la simplifier à l’excès',
  intro:
    "Nour El Bayan est né d'une conviction : chacun peut apprendre à lire, comprendre et vivre le Coran, quel que soit son point de départ. Nous avançons avec méthode, douceur et exigence.",
  pillars: [
    {
      title: 'Comprendre',
      text: 'Des explications claires, structurées et fidèles aux sources, pour savoir ce que l’on récite.',
    },
    {
      title: 'Pratiquer',
      text: 'Des exercices progressifs et des rappels réguliers pour ancrer le savoir dans le quotidien.',
    },
    {
      title: 'Transmettre',
      text: 'Une communauté où l’on apprend ensemble, où l’on s’encourage et où l’on partage ce qui a été reçu.',
    },
  ],
}

export type ProgramIcon = 'alphabet' | 'tajwid' | 'arabic' | 'tafsir' | 'heart'

export const programs = {
  kicker: 'Les parcours',
  title: 'Un chemin complet, étape par étape',
  intro: 'Choisis ton point de départ. Chaque parcours s’enchaîne naturellement avec le suivant.',
  items: [
    {
      icon: 'alphabet' as ProgramIcon,
      level: 'Débutant',
      title: 'Lecture du Coran',
      text: "De l'alphabet arabe à une lecture fluide du Mushaf, lettre après lettre.",
      points: ['Alphabet et voyelles', 'Liaisons et lecture syllabique', 'Lecture guidée des sourates courtes'],
    },
    {
      icon: 'tajwid' as ProgramIcon,
      level: 'Intermédiaire',
      title: 'Tajwid',
      text: 'Les règles de la récitation pour embellir ta lecture comme elle a été transmise.',
      points: ["Points d'articulation", 'Règles du noun et du mim', 'Prolongations (mudûd)'],
    },
    {
      icon: 'arabic' as ProgramIcon,
      level: 'Tous niveaux',
      title: 'Langue arabe',
      text: 'Le vocabulaire et la grammaire du Coran pour en saisir le sens directement.',
      points: ['Vocabulaire coranique fréquent', 'Grammaire essentielle', 'Analyse de versets'],
    },
    {
      icon: 'tafsir' as ProgramIcon,
      level: 'Avancé',
      title: 'Compréhension du Coran',
      text: 'Le sens des versets à la lumière des savants, pour méditer ce que l’on récite.',
      points: ['Contexte de la révélation', 'Thèmes des sourates', 'Méditation (tadabbur)'],
    },
    {
      icon: 'heart' as ProgramIcon,
      level: 'Pour tous',
      title: 'Rappels & spiritualité',
      text: 'Des rappels courts sur la patience, la gratitude et la sincérité, pour nourrir le cœur.',
      points: ['Vidéos courtes', 'Invocations du quotidien', 'Purification du cœur'],
    },
  ],
}

export const method = {
  kicker: 'La méthode',
  title: 'Apprendre avec structure, progresser avec constance',
  steps: [
    { title: 'Évaluer', text: 'On situe ton niveau pour te proposer le bon point de départ.' },
    { title: 'Apprendre', text: 'Des leçons courtes et claires, à suivre à ton rythme.' },
    { title: 'Pratiquer', text: 'Des exercices et des lectures guidées pour ancrer chaque notion.' },
    { title: 'Avancer', text: 'Chaque étape validée ouvre la suivante, jusqu’à la compréhension du Livre.' },
  ],
}

export const reminders = {
  kicker: 'Les rappels',
  title: 'Des mots courts pour des cœurs vivants',
  intro: 'Des vidéos brèves, sobres et soignées, à regarder et à partager.',
  cta: { label: 'Voir toutes les vidéos', href: '#' },
  items: [
    {
      title: 'La patience',
      ar: 'الصَّبْر',
      text: "Ô vous qui avez cru ! Cherchez secours dans l'endurance et la prière. Certes, Allah est avec ceux qui endurent.",
      reference: 'Al-Baqara · 2 : 153',
      href: '#',
    },
    {
      title: 'La gratitude',
      ar: 'الشُّكْر',
      text: 'Reconnaître les bienfaits, petits et grands, et en remercier Celui qui les accorde.',
      reference: 'Rappel',
      href: '#',
    },
    {
      title: 'La sincérité',
      ar: 'الإِخْلَاص',
      text: "Purifier l'intention pour que chaque acte, même discret, soit tourné vers Allah.",
      reference: 'Rappel',
      href: '#',
    },
  ],
}

// Sourate An-Nur (24), verset 35 (extraits).
export const lightVerse = {
  kicker: 'Le verset de la Lumière',
  ar: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ',
  meaning: '« Allah est la Lumière des cieux et de la terre. »',
  arEnd: 'نُورٌ عَلَى نُورٍ',
  meaningEnd: '« Lumière sur lumière. »',
  reference: 'Sourate An-Nur · 24 : 35',
  text: "Dans ce verset, la lumière d'Allah est comparée à une lampe posée dans une niche, la mishkât. C'est cette niche qui a inspiré notre emblème.",
}

// Chiffres réels sur le Coran et l'alphabet (décompte des versets selon Kûfa, lecture Hafs).
export const stats = {
  kicker: 'Ce qui t’attend',
  title: 'Un océan de savoir, une lettre à la fois',
  items: [
    { value: 28, label: 'lettres', text: 'pour apprendre à lire' },
    { value: 114, label: 'sourates', text: 'à découvrir et méditer' },
    { value: 6236, label: 'versets', text: 'pour une vie d’étude' },
  ],
}

export const words = [
  { ar: 'العِلْم', fr: 'la science' },
  { ar: 'النُّور', fr: 'la lumière' },
  { ar: 'البَيَان', fr: 'la clarté' },
  { ar: 'الحِكْمَة', fr: 'la sagesse' },
  { ar: 'الصَّبْر', fr: 'la patience' },
  { ar: 'التَّدَبُّر', fr: 'la méditation' },
  { ar: 'القَلَم', fr: 'le calame' },
  { ar: 'الهُدَى', fr: 'la guidance' },
]

// L'alphabet arabe : lettre, nom, son approché en français.
// « joins: false » pour les six lettres qui ne s'attachent jamais à la lettre suivante.
export const alphabet = {
  kicker: 'Premier pas',
  title: 'Touche une lettre, et commence à lire',
  intro: 'Les 28 lettres de l’alphabet arabe. Choisis-en une pour voir son nom, son son et ses formes selon sa place dans le mot.',
  letters: [
    { l: 'ا', name: 'Alif', sound: 'a long, comme dans « papa »', joins: false },
    { l: 'ب', name: 'Bâ', sound: 'b, comme dans « bon »', joins: true },
    { l: 'ت', name: 'Tâ', sound: 't, comme dans « table »', joins: true },
    { l: 'ث', name: 'Thâ', sound: 'th anglais, comme dans « think »', joins: true },
    { l: 'ج', name: 'Jîm', sound: 'dj, comme dans « djinn »', joins: true },
    { l: 'ح', name: 'Hâ', sound: 'h soufflé du fond de la gorge', joins: true },
    { l: 'خ', name: 'Khâ', sound: 'kh, comme la jota espagnole', joins: true },
    { l: 'د', name: 'Dâl', sound: 'd, comme dans « dos »', joins: false },
    { l: 'ذ', name: 'Dhâl', sound: 'th anglais, comme dans « this »', joins: false },
    { l: 'ر', name: 'Râ', sound: 'r roulé', joins: false },
    { l: 'ز', name: 'Zây', sound: 'z, comme dans « zèbre »', joins: false },
    { l: 'س', name: 'Sîn', sound: 's, comme dans « sel »', joins: true },
    { l: 'ش', name: 'Shîn', sound: 'ch, comme dans « chat »', joins: true },
    { l: 'ص', name: 'Sâd', sound: 's emphatique, la langue plus basse', joins: true },
    { l: 'ض', name: 'Dâd', sound: 'd emphatique, propre à l’arabe', joins: true },
    { l: 'ط', name: 'Tâ', sound: 't emphatique', joins: true },
    { l: 'ظ', name: 'Dhâ', sound: 'th de « this », emphatique', joins: true },
    { l: 'ع', name: 'ʿAyn', sound: 'son serré du milieu de la gorge', joins: true },
    { l: 'غ', name: 'Ghayn', sound: 'r grasseyé, comme dans « Paris »', joins: true },
    { l: 'ف', name: 'Fâ', sound: 'f, comme dans « fleur »', joins: true },
    { l: 'ق', name: 'Qâf', sound: 'k prononcé au fond de la gorge', joins: true },
    { l: 'ك', name: 'Kâf', sound: 'k, comme dans « kilo »', joins: true },
    { l: 'ل', name: 'Lâm', sound: 'l, comme dans « lune »', joins: true },
    { l: 'م', name: 'Mîm', sound: 'm, comme dans « mer »', joins: true },
    { l: 'ن', name: 'Nûn', sound: 'n, comme dans « nuit »', joins: true },
    { l: 'ه', name: 'Hâ', sound: 'h aspiré léger', joins: true },
    { l: 'و', name: 'Wâw', sound: 'w, ou « ou » long', joins: false },
    { l: 'ي', name: 'Yâ', sound: 'y, ou « i » long', joins: true },
  ],
}

export const faq = {
  kicker: 'Questions fréquentes',
  title: 'Tout ce que tu veux savoir avant de commencer',
  items: [
    {
      q: 'Je ne sais pas du tout lire l’arabe, puis-je commencer ?',
      a: 'Oui. Le parcours « Lecture du Coran » part de zéro : l’alphabet, les voyelles, puis la lecture des premières sourates.',
    },
    {
      q: 'Combien de temps faut-il y consacrer ?',
      a: 'Quelques minutes par jour suffisent pour progresser. La régularité compte plus que la durée.',
    },
    {
      q: 'Les cours sont-ils en français ?',
      a: 'Oui, toutes les explications sont en français, avec le texte arabe et sa translittération lorsque c’est utile.',
    },
    {
      q: 'Sur quelles sources s’appuie l’enseignement ?',
      a: 'Sur le Coran, la Sunna authentique et les ouvrages reconnus des savants, cités avec leurs références.',
    },
    {
      q: 'Comment rester informé des nouveaux contenus ?',
      a: 'Suis-nous sur les réseaux ou écris-nous : nous te préviendrons à chaque nouveau parcours ou rappel.',
    },
  ],
}

export const finalCta = {
  title: 'Commence aujourd’hui, même par une seule lettre',
  text: 'Le plus long des chemins commence par un premier pas. Écris-nous et nous t’aiderons à trouver ton point de départ.',
  button: 'Nous écrire',
}

export const footer = {
  text: 'Apprendre le Coran, la langue arabe et les sciences islamiques avec clarté.',
  copyright: `© ${new Date().getFullYear()} Nour El Bayan. Tous droits réservés.`,
}
