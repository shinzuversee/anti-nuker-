export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  body: (
    | { type: "p" | "h2" | "quote"; text: string }
    | { type: "verse"; arabic: string; translation: string; reference: string }
  )[];
};

export const posts: Post[] = [
  {
    slug: "muhkam-and-mutashabih",
    title: "Muḥkam et mutashābih : lire le clair à côté de l'ambigu",
    excerpt:
      "La sourate Āl ʿImrān trace une ligne entre les versets décisifs et ceux qui restent ouverts. Comprendre cette ligne, c'est commencer une interprétation disciplinée.",
    category: "Herméneutique",
    tags: ["tafsir", "méthode", "usul"],
    date: "2026-07-28",
    readingTime: "11 min",
    body: [
      {
        type: "p",
        text: "Peu de versets ont façonné la méthode interprétative musulmane aussi profondément que Cor. 3/7, qui décrit le Livre comme contenant des versets muḥkam — fermement établis — et d'autres mutashābih, susceptibles de plus d'une lecture. Le verset ne décrit pas seulement une caractéristique textuelle : il prescrit une attitude.",
      },
      {
        type: "quote",
        text: "C'est Lui qui a fait descendre sur toi le Livre : il s'y trouve des versets décisifs — ils sont la base du Livre — et d'autres ambigus.",
      },
      { type: "h2", text: "L'ambiguïté n'est pas le vague" },
      {
        type: "p",
        text: "Les exégètes classiques distinguaient soigneusement l'ambiguïté de l'imprécision. Un verset mutashābih n'est pas obscur parce que la langue aurait échoué ; il est stratifié parce que le sujet excède une formulation unique. Al-Ṭabarī lit ces versets comme une invitation à revenir aux versets décisifs, tandis qu'al-Rāzī y voit une discipline intellectuelle qui éduque le lecteur à l'humilité.",
      },
      { type: "h2", text: "Une méthode de travail" },
      {
        type: "p",
        text: "En pratique, trois gestes résolvent la plupart des tensions apparentes : établir le contexte immédiat du verset, rassembler les usages parallèles du terme dans le Coran lui-même, et seulement ensuite consulter la tradition interprétative. Inverser cet ordre revient le plus souvent à importer une conclusion plutôt qu'à la découvrir.",
      },
      {
        type: "p",
        text: "La récompense de cette patience n'est pas la certitude sur chaque question. C'est une relation apaisée au texte, où les questions non résolues restent ouvertes sans devenir inquiétantes.",
      },
    ],
  },
  {
    slug: "abrogation-reconsidered",
    title: "Le naskh reconsidéré : ce que l'abrogation affirme réellement",
    excerpt:
      "La doctrine de l'abrogation est souvent invoquée bien au-delà de son cadre classique. Regard rapproché sur l'usage qu'en faisaient les premiers savants.",
    category: "Uṣūl al-tafsīr",
    tags: ["naskh", "usul", "histoire"],
    date: "2026-07-11",
    readingTime: "14 min",
    body: [
      {
        type: "p",
        text: "L'usage ancien du naskh était considérablement plus large et plus souple que la doctrine technique qui s'est cristallisée par la suite. Pour les savants des deux premiers siècles, le mot pouvait désigner la spécification, la restriction, ou le simple enchaînement de règles.",
      },
      { type: "h2", text: "De l'ampleur à la précision" },
      {
        type: "p",
        text: "Au cinquième siècle, les juristes avaient réduit le terme à la levée d'une règle antérieure par un texte révélé postérieurement. Cette précision fut un progrès réel, mais elle créa un problème rétrospectif : les rapports anciens employant naskh au sens large furent désormais lus à travers la définition étroite.",
      },
      {
        type: "p",
        text: "Conséquence pratique : les listes de « versets abrogés » varient énormément d'un auteur à l'autre — de plus de cinq cents dans certaines compilations anciennes à moins de dix dans le décompte prudent d'al-Suyūṭī.",
      },
    ],
  },
  {
    slug: "occasions-of-revelation",
    title: "Asbāb al-nuzūl : quand le contexte éclaire et quand il restreint",
    excerpt:
      "Savoir pourquoi un verset a été révélé peut l'éclairer — ou le rétrécir en silence. De l'usage responsable des circonstances de la révélation.",
    category: "Contexte",
    tags: ["asbab", "tafsir", "méthode"],
    date: "2026-06-19",
    readingTime: "9 min",
    body: [
      {
        type: "p",
        text: "La maxime selon laquelle « la leçon réside dans la généralité du terme, non dans la particularité de la cause » est répétée si souvent que sa force s'en trouve émoussée. Elle existe précisément parce que la tentation va dans l'autre sens.",
      },
      { type: "h2", text: "Deux manières d'échouer" },
      {
        type: "p",
        text: "La première consiste à ignorer entièrement la circonstance, produisant des lectures détachées de la situation que le verset visait. La seconde consiste à traiter la circonstance comme le plafond du verset, ce qui retire discrètement le texte de toute pertinence présente.",
      },
    ],
  },
  {
    slug: "divine-attributes-language",
    title: "Le langage des attributs divins",
    excerpt:
      "Main, Trône, Face — comment la tradition a traité le langage anthropomorphique sans littéralisme ni évacuation du sens.",
    category: "Théologie",
    tags: ["aqida", "kalam", "langue"],
    date: "2026-05-30",
    readingTime: "13 min",
    body: [
      {
        type: "p",
        text: "Le débat sur les attributs divins est souvent résumé comme un affrontement entre littéralistes et allégoristes. Le dossier historique est nettement plus subtil, et les positions les plus influentes occupent le milieu.",
      },
      {
        type: "quote",
        text: "Rien ne Lui est semblable, et Il est Celui qui entend, Celui qui voit.",
      },
      {
        type: "p",
        text: "Ce verset fonctionne comme principe directeur. Affirmation sans comparaison, négation de la ressemblance sans négation du sens — une formule simple à énoncer et exigeante à tenir avec constance.",
      },
    ],
  },
  {
    slug: "seven-modes-recitation",
    title: "Les sept aḥruf et les dix qirāʾāt",
    excerpt:
      "Les lectures variantes sont souvent prises pour une instabilité du texte. C'est l'inverse : la preuve d'une transmission orale rigoureusement préservée.",
    category: "Sciences coraniques",
    tags: ["qiraat", "transmission", "histoire"],
    date: "2026-05-02",
    readingTime: "10 min",
    body: [
      {
        type: "p",
        text: "Une lecture variante n'est pas un accident de copiste retrouvé par la critique moderne. C'est une performance transmise, portée par des chaînes de maîtres nommés, et évaluée selon des critères aussi exigeants que ceux appliqués au hadith.",
      },
      { type: "h2", text: "Pourquoi la variation a été conservée" },
      {
        type: "p",
        text: "La tradition a conservé la variation délibérément, comme une miséricorde accommodant la diversité linguistique de la première communauté. La supprimer aurait été plus simple ; qu'elle ait été retenue en dit long sur le rapport de cette communauté à son propre texte.",
      },
    ],
  },
  {
    slug: "patience-and-providence",
    title: "Le ṣabr n'est pas la passivité",
    excerpt:
      "Brève réflexion sur la manière dont le Coran présente la patience comme une discipline active plutôt qu'une endurance résignée.",
    category: "Réflexion",
    tags: ["éthique", "spiritualité"],
    date: "2026-04-14",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        text: "Le champ sémantique de ṣ-b-r en arabe classique tourne autour du fait de lier et de retenir — contenir ce qui, autrement, se disperserait. On est plus près de la discipline que de l'endurance.",
      },
      {
        type: "p",
        text: "Lue ainsi, l'association coranique du ṣabr et de la prière devient intelligible : ce sont deux pratiques, répétées et structurées, qui tiennent une personne ensemble dans la durée.",
      },
    ],
  },
];

import { versePosts } from "./versets";

export const allPosts: Post[] = [...posts, ...versePosts].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export const categories = [
  "Tout",
  ...Array.from(new Set(allPosts.map((p) => p.category))),
];


export type Video = {
  id: string;
  title: string;
  description: string;
  playlist: string;
  duration: string;
};

export const videos: Video[] = [
  {
    id: "yzTuBuRdAyA",
    title: "Comment lire un verset difficile — un cadre pratique",
    description:
      "Déroulé pas à pas de la méthode : contexte, usages parallèles, puis tradition.",
    playlist: "Méthode",
    duration: "24:10",
  },
  {
    id: "6ZfuNTqbHE8",
    title: "Sourate al-Kahf : quatre récits, un seul argument",
    description:
      "Pourquoi les quatre récits de la sourate forment une structure cohérente sur l'épreuve.",
    playlist: "Études de sourates",
    duration: "38:52",
  },
  {
    id: "hHW1oY26kxQ",
    title: "Répondre à : « Le Coran se contredit-il ? »",
    description:
      "Examen attentif des trois exemples les plus fréquemment cités.",
    playlist: "Questions traitées",
    duration: "31:07",
  },
  {
    id: "e-ORhEE9VVg",
    title: "La préservation du texte : ce que montrent les manuscrits",
    description:
      "Panorama des plus anciens témoins manuscrits et de ce qu'ils établissent — ou non.",
    playlist: "Études de sourates",
    duration: "45:23",
  },
  {
    id: "ktvTqknDobU",
    title: "De la justice divine et de la souffrance humaine",
    description:
      "Lecture théologique du traitement coranique de l'épreuve et de la perte.",
    playlist: "Questions traitées",
    duration: "27:41",
  },
  {
    id: "RgKAFK5djSk",
    title: "Débuter en tafsīr : une liste de lectures",
    description: "Par où commencer, dans quel ordre, et ce qu'il vaut mieux différer.",
    playlist: "Méthode",
    duration: "18:36",
  },
];

export const playlists = [
  "Toutes",
  ...Array.from(new Set(videos.map((v) => v.playlist))),
];

export const faqs = [
  {
    q: "Faut-il connaître l'arabe pour étudier sérieusement le tafsīr ?",
    a: "Pas pour commencer. Un travail rigoureux est possible avec de bonnes traductions et une littérature secondaire fiable. Mais il existe un plafond : les questions de vocabulaire, de morphologie et de structure rhétorique finissent par exiger la langue. Commencez là où vous êtes, et traitez l'arabe comme un objectif à moyen terme, non comme un préalable.",
  },
  {
    q: "Comment évaluer des avis savants divergents ?",
    a: "Regardez trois choses : les preuves que chaque position invoque, le principe interprétatif qu'elle applique, et si elle rend compte des preuves de la position adverse. Une position qui ignore les contre-arguments est plus faible que celle qui les affronte et y répond, même si sa conclusion paraît plus intuitive.",
  },
  {
    q: "Est-il permis de laisser une question sans réponse ?",
    a: "C'est plus que permis : c'est souvent la position honnête. La tradition possède un vocabulaire riche pour le jugement suspendu — le tawaqquf — précisément parce que la certitude prématurée était reconnue comme un danger.",
  },
  {
    q: "Quelle est votre approche des versets controversés ?",
    a: "La même que pour tout autre : établir le texte, établir le contexte, parcourir l'histoire interprétative, et dire clairement où les savants ont divergé et pourquoi. Je ne présente jamais une lecture unique comme le consensus de la tradition lorsqu'elle ne l'est pas.",
  },
  {
    q: "En combien de temps les questions reçoivent-elles une réponse ?",
    a: "Les brèves clarifications reçoivent en général une réponse sous une semaine. Les questions nécessitant des recherches sont mises en file et deviennent parfois des articles ou des vidéos, ce qui peut prendre plusieurs semaines.",
  },
];

export const testimonials = [
  {
    quote:
      "Le premier endroit que j'aie trouvé qui traite les questions difficiles comme réellement difficiles, sans les écarter ni les dissoudre dans le vague.",
    name: "Dr Amina Haddad",
    role: "Enseignante en sciences religieuses",
  },
  {
    quote:
      "Je suis venu avec une liste d'objections que je portais depuis des années. J'en suis reparti avec de meilleures questions et, contre toute attente, plus de paix.",
    name: "Yusuf Rahman",
    role: "Ingénieur logiciel, Lyon",
  },
  {
    quote:
      "La consultation a été l'heure d'étude la plus utile que j'aie eue. Précise, généreuse, et absolument sans précipitation.",
    name: "Layla Farouk",
    role: "Doctorante",
  },
];

export const sessions = [
  {
    name: "Consultation d'introduction",
    length: "30 minutes",
    price: "Offerte",
    description:
      "Un court échange pour comprendre votre question et déterminer si une séance plus longue serait utile.",
    features: ["Appel vidéo", "Une question principale", "Liste de lectures ensuite"],
  },
  {
    name: "Séance d'étude",
    length: "Suivi annuel",
    price: "35 € / mois",
    description:
      "Un suivi d'étude sur une année complète, payable chaque mois, sanctionné par un diplôme à l'issue du parcours.",
    features: [
      "Accompagnement sur 12 mois",
      "Paiement mensuel de 35 €",
      "Diplôme délivré en fin d'année",
      "Notes préparées et correspondance continue",
    ],
    featured: true,
  },
  {
    name: "Programme de lecture guidée",
    length: "Accès à vie",
    price: "350 €",
    description:
      "Un accès définitif à la formation complète, ainsi qu'aux autres sujets abordés (interreligieux, jurisprudence, etc.).",
    features: [
      "Accès à la formation à vie",
      "Accès aux autres sujets (interreligieux…)",
      "Supports de lecture fournis",
      "Mises à jour incluses",
    ],
  },

];
