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
  { label: 'Parcours', href: '#parcours' },
  { label: 'Méthode', href: '#methode' },
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
  // Sourate Al-Alaq (96), verset 1, affiché sur la première carte.
  featuredVerse: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
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

// Sourate Ta-Ha (20), verset 114 (extrait).
export const quote = {
  ar: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
  meaning: '« Et dis : Seigneur, accrois mes connaissances. »',
  reference: 'Sourate Ta-Ha · 20 : 114',
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
