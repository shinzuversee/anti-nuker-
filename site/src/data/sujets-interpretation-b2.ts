import { slugifySujet, type Sujet } from "./sujet-core";

/** Suite du groupe « Règles à connaître avant de commenter un verset ». */
export const sujetsInterpretationB2: Sujet[] = [
  {
    slug: slugifySujet("L'absolu et le conditionné"),
    title: "L'absolu et le conditionné",
    arabic: "المطلق والمقيد",
    intro:
      "Un même terme apparaît ici sans restriction, là avec une précision qui le borne. Faut-il transporter la précision d'un passage à l'autre ? La question paraît technique ; elle décide pourtant du sens de dizaines de versets, et notamment de règles pratiques que tout croyant applique.",
    body: [
      { type: "h2", text: "Poser les termes" },
      {
        type: "p",
        text: "L'**absolu** (*muṭlaq*) est un terme employé sans limitation : « un esclave ». Le **conditionné** (*muqayyad*) est le même terme assorti d'une restriction : « un esclave croyant ». La question des uṣūlistes est simple à formuler : quand porte-t-on la restriction sur l'emploi absolu ?",
      },
      {
        type: "comparaison",
        title: "Les quatre cas de figure",
        columns: ["Cause identique", "Cause différente"],
        rows: [
          {
            criterion: "Règle identique",
            cells: ["On transporte la restriction : accord large", "On ne transporte pas : chaque cause garde sa règle"],
          },
          {
            criterion: "Règle différente",
            cells: ["On ne transporte pas : les règles sont autonomes", "Aucun transport possible"],
          },
        ],
        caption: "Le transport n'est admis qu'au premier cas — même règle, même cause — et il fait alors l'objet d'un large accord.",
      },
      { type: "h2", text: "Le cas d'école : l'expiation" },
      {
        type: "verse",
        arabic: "وَمَن قَتَلَ مُؤْمِنًا خَطَـًٔا **فَتَحْرِيرُ رَقَبَةٍ مُّؤْمِنَةٍ**",
        translation:
          "Quiconque tue un croyant par erreur : **l'affranchissement d'un esclave croyant**.",
        reference: "Coran, al-Nisāʾ, 4:92",
      },
      {
        type: "verse",
        arabic:
          "فَكَفَّٰرَتُهُۥٓ إِطْعَامُ عَشَرَةِ مَسَٰكِينَ ... أَوْ **تَحْرِيرُ رَقَبَةٍ**",
        translation:
          "Son expiation est de nourrir dix pauvres… ou **l'affranchissement d'un esclave**.",
        reference: "Coran, al-Māʾida, 5:89",
      },
      {
        type: "p",
        text: "Faut-il exiger que l'esclave du second verset soit croyant, par transport de la restriction du premier ? Les écoles divergent : la cause n'est pas la même — homicide involontaire d'un côté, rupture de serment de l'autre. Le désaccord n'est donc pas un caprice : il découle mécaniquement de l'application de la règle.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Ce qu'il faut vérifier avant de trancher",
        text: "Deux questions, dans cet ordre : la règle est-elle la même ? la cause est-elle la même ? Répondre non à l'une des deux suffit à bloquer le transport.",
      },
      { type: "h2", text: "Un cas où le transport s'impose" },
      {
        type: "p",
        text: "Le sang est mentionné absolument dans un verset et **« répandu »** dans un autre. Même règle — l'interdiction — et même cause. Les exégètes portent donc la restriction : ce qui est interdit est le sang qui s'écoule, non ce qui subsiste dans les fibres d'une viande.",
      },
      {
        type: "verse",
        arabic: "أَوْ **دَمًا مَّسْفُوحًا**",
        translation: "…ou **du sang répandu**…",
        reference: "Coran, al-Anʿām, 6:145",
      },
      {
        type: "experiment",
        title: "L'expérience des deux consignes",
        steps: [
          "Une note affiche : « apportez un livre ».",
          "Une autre, pour le même cours : « apportez un livre annoté ».",
          "Même exigence, même motif : la seconde précise la première.",
          "Mais si la seconde concernait un autre cours, rien ne permettrait de l'imposer au premier.",
        ],
        conclusion:
          "L'intuition ordinaire suit déjà la règle des uṣūlistes ; la discipline ne fait que l'expliciter et la rendre contrôlable.",
      },
      {
        type: "objection",
        objection: "Ces distinctions ne compliquent-elles pas inutilement un texte fait pour tous ?",
        reponse:
          "Elles ne compliquent pas le texte : elles rendent explicite ce que tout locuteur fait spontanément. Leur utilité est de rendre la lecture vérifiable, donc discutable, donc corrigible — au lieu de laisser chacun trancher à l'intuition et appeler cela évidence.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La règle de l'absolu et du conditionné empêche deux excès symétriques : durcir un texte en y important une condition qu'il n'a pas, et le vider en ignorant une précision qu'il porte. Elle demande peu de choses : lire les versets ensemble, et vérifier que l'on compare bien le comparable.",
      },
    ],
  },
  {
    slug: slugifySujet("L'énoncé explicite et l'implication"),
    title: "L'énoncé explicite et l'implication",
    arabic: "المنطوق والمفهوم",
    intro:
      "Un texte dit quelque chose ; il en laisse entendre d'autres. La tradition juridique a nommé ces deux niveaux et fixé les conditions dans lesquelles l'implicite fait autorité. C'est l'un des outils les plus utiles au lecteur du Coran — et l'un des plus abusés.",
    body: [
      { type: "h2", text: "Deux niveaux de sens" },
      {
        type: "schema",
        title: "Ce qu'un énoncé porte",
        arabic: "الدلالة",
        variant: "branch",
        nodes: [
          { label: "Explicite", arabic: "المنطوق", note: "Ce que les mots disent directement." },
          { label: "Implication concordante", arabic: "مفهوم الموافقة", note: "Le cas non dit reçoit la même règle, à plus forte raison." },
          { label: "Implication contraire", arabic: "مفهوم المخالفة", note: "Le cas contraire reçoit la règle inverse — sous conditions." },
        ],
      },
      {
        type: "verse",
        arabic: "**فَلَا تَقُل لَّهُمَآ أُفٍّ**",
        translation: "**Ne leur dis pas : « Fi ! »**",
        reference: "Coran, al-Isrāʾ, 17:23",
      },
      {
        type: "p",
        text: "L'explicite interdit un soupir de lassitude. L'implication concordante en tire, **à plus forte raison**, l'interdiction de frapper ou d'insulter. Personne n'a jamais eu besoin d'un verset supplémentaire pour cela : la langue le porte.",
      },
      { type: "h2", text: "L'implication contraire, et ses garde-fous" },
      {
        type: "p",
        text: "Plus délicate est l'inférence inverse : « si le texte pose une condition, l'absence de la condition renverse la règle ». Elle est recevable, mais seulement quand la précision n'a pas d'autre raison d'être.",
      },
      {
        type: "balance",
        title: "Quand l'implication contraire tombe",
        affirmLabel: "Elle vaut",
        denyLabel: "Elle ne vaut pas",
        affirm: [
          "La précision n'a pas d'autre fonction apparente.",
          "Aucun autre texte ne couvre le cas contraire.",
          "L'usage arabe l'appuie.",
        ],
        deny: [
          "La précision décrit la situation habituelle, non une condition.",
          "Elle répond à une question posée.",
          "Elle vise l'insistance ou l'encouragement.",
          "Un autre texte règle explicitement le cas contraire.",
        ],
      },
      {
        type: "verse",
        arabic: "وَرَبَٰٓئِبُكُمُ ٱلَّٰتِى فِى حُجُورِكُم",
        translation: "…et vos belles-filles **qui sont sous votre tutelle**…",
        reference: "Coran, al-Nisāʾ, 4:23",
      },
      {
        type: "p",
        text: "La majorité des savants refuse ici l'implication contraire : « sous votre tutelle » décrit le cas ordinaire, il ne pose pas une condition. La belle-fille élevée ailleurs relève de la même interdiction.",
      },
      {
        type: "objection",
        objection:
          "Si l'implicite peut être écarté, on peut écarter n'importe quelle inférence gênante.",
        reponse:
          "Non, car l'écart doit être justifié : il faut montrer que la précision a une autre fonction, attestée par le contexte, la langue ou un texte parallèle. Ce n'est pas une porte de sortie, c'est une charge de preuve — et elle pèse sur celui qui écarte comme sur celui qui infère.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'abus le plus courant",
        text: "Tirer d'un verset qui loue une chose la condamnation de tout le reste. Un éloge n'est pas une exclusivité ; il faut un indice supplémentaire pour transformer une mention en frontière.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'implicite est une richesse du langage révélé : il permet à peu de mots de couvrir beaucoup de cas. Mais il n'est pas un espace libre. Ce que le texte laisse entendre s'établit selon des règles, exactement comme ce qu'il dit.",
      },
    ],
  },
  {
    slug: slugifySujet("Le sommaire et son explicitation"),
    title: "Le sommaire et son explicitation",
    arabic: "المجمل والمبين",
    intro:
      "Le Coran ordonne la prière sans en décrire les gestes, la zakāt sans en fixer les taux, le pèlerinage sans en détailler les étapes. Cette économie n'est pas une lacune : elle est le principe même d'une Révélation qui institue en même temps un enseignant.",
    body: [
      { type: "h2", text: "L'énoncé qui appelle une explicitation" },
      {
        type: "verse",
        arabic: "**وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ**",
        translation: "**Accomplissez la prière et acquittez la zakāt.**",
        reference: "Coran, al-Baqara, 2:43",
      },
      {
        type: "p",
        text: "Le verbe est clair, l'objet ne l'est pas : combien d'unités, à quelles heures, selon quelle forme ? Le terme technique est **mujmal** : un énoncé dont la portée est réelle mais indéterminée, en attente d'un **mubayyin**, ce qui l'explicite.",
      },
      {
        type: "verse",
        arabic: "وَأَنزَلْنَآ إِلَيْكَ ٱلذِّكْرَ **لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ**",
        translation:
          "Et Nous avons fait descendre vers toi le Rappel **pour que tu exposes aux gens ce qu'on a fait descendre vers eux**.",
        reference: "Coran, al-Naḥl, 16:44",
      },
      {
        type: "p",
        text: "Le verset assigne au Prophète ﷺ une fonction textuelle, pas seulement morale : **exposer**. C'est pourquoi la Sunna n'est pas un supplément facultatif au Coran : elle en est le mode d'emploi voulu par Celui qui l'a fait descendre.",
      },
      {
        type: "quote",
        text: "**صلّوا كما رأيتموني أصلّي.**\n\n**Priez comme vous m'avez vu prier.**",
        source: "Rapporté par al-Bukhārī, d'après Mālik ibn al-Ḥuwayrith",
      },
      { type: "h2", text: "Les voies de l'explicitation" },
      {
        type: "degres",
        title: "Qui explicite quoi",
        arabic: "طرق البيان",
        degres: [
          { label: "Le Coran par le Coran", note: "Un verset précise ce qu'un autre laisse ouvert." },
          { label: "La Sunna verbale", note: "Une parole fixe un nombre, un seuil, un moment." },
          { label: "La Sunna pratique", note: "Le geste accompli devient la norme observable." },
          { label: "L'accord des premières générations", note: "La transmission continue d'une pratique tranche l'indétermination." },
        ],
        direction: "asc",
      },
      {
        type: "experiment",
        title: "L'expérience de l'ordonnance",
        steps: [
          "Un médecin écrit : « prenez ce traitement ».",
          "La consigne est réelle, mais inapplicable telle quelle.",
          "Il ajoute la posologie oralement, en montrant la dose.",
          "Refuser la démonstration au motif que seule l'ordonnance est écrite, c'est refuser le traitement.",
        ],
        conclusion:
          "Un énoncé sommaire n'est pas ambigu : il est ouvert, et il désigne lui-même qui le referme.",
      },
      {
        type: "objection",
        objection: "Pourquoi Dieu n'a-t-Il pas tout détaillé dans le Livre ?",
        reponse:
          "Parce que le détail exhaustif aurait produit un code figé, illisible et démesuré, et parce que la Révélation institue une communauté vivante autour d'un enseignant. Le sommaire crée un lien : il oblige à recevoir le texte de la main de celui qui l'a reçu, et non à l'inventer seul.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Distinguer l'ouvert du vague",
        text: "Le mujmal n'est pas un texte flou : sa signification générale est parfaitement déterminée. Seule sa mise en œuvre attend une précision — nuance qui interdit d'en faire une réserve d'interprétations libres.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le couple sommaire / explicitation dit la structure même de la religion : un Livre qui fonde, une Sunna qui montre, une communauté qui transmet. En séparer les termes, c'est se retrouver avec un ordre que personne ne saurait exécuter.",
      },
    ],
  },
  {
    slug: slugifySujet("Lire un verset à la lumière de tout le Livre avant toute la tradition"),
    title: "Lire un verset à la lumière de tout le Livre avant toute la tradition",
    arabic: "القرآن يفسّر بعضه بعضًا",
    intro:
      "Avant d'ouvrir un commentaire, avant même de chercher un hadith, il existe un geste premier que les exégètes anciens plaçaient en tête de la méthode : rassembler ce que le Coran dit ailleurs du même sujet. C'est la règle la plus simple à énoncer, et la plus souvent négligée.",
    body: [
      { type: "h2", text: "Le principe" },
      {
        type: "quote",
        text: "**أصحّ الطرق في ذلك أن يُفسَّر القرآن بالقرآن**، فما أُجمل في مكان فإنه قد بُسط في موضع آخر.\n\n**La plus juste des voies en cela est d'expliquer le Coran par le Coran** : ce qui est énoncé sommairement en un endroit se trouve développé ailleurs.",
        source: "Ibn Kathīr, introduction de son Tafsīr, reprenant Ibn Taymiyya",
      },
      {
        type: "p",
        text: "Al-Shinqīṭī a bâti tout *Aḍwāʾ al-bayān* sur ce seul principe : chaque difficulté est d'abord soumise au reste du Coran, et la plupart se résolvent sans qu'il ait fallu sortir du Livre.",
      },
      { type: "h2", text: "Une démonstration" },
      {
        type: "verse",
        arabic: "**ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ**",
        translation: "**Guide-nous vers le chemin droit.**",
        reference: "Coran, al-Fātiḥa, 1:6",
      },
      {
        type: "p",
        text: "Quel est ce chemin ? Le verset suivant le définit par ceux qui l'ont suivi. Et un autre passage nomme ceux-là : prophètes, véridiques, martyrs, vertueux. La question posée par la Fātiḥa reçoit sa réponse **dans le Coran lui-même**, sans aucune source externe.",
      },
      {
        type: "verse",
        arabic:
          "فَأُو۟لَٰٓئِكَ مَعَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم **مِّنَ ٱلنَّبِيِّـۧنَ وَٱلصِّدِّيقِينَ وَٱلشُّهَدَآءِ وَٱلصَّٰلِحِينَ**",
        translation:
          "Ceux-là seront avec ceux qu'Allāh a comblés de Ses bienfaits : **les prophètes, les véridiques, les martyrs et les vertueux**.",
        reference: "Coran, al-Nisāʾ, 4:69",
      },
      {
        type: "cycle",
        title: "La méthode en quatre temps",
        center: "Le verset",
        steps: [
          { label: "Rassembler", note: "Tous les passages où le terme ou le thème apparaît." },
          { label: "Classer", note: "Général et particulier, absolu et conditionné, clair et ambigu." },
          { label: "Faire porter le clair sur l'ambigu", note: "Jamais l'inverse : c'est la règle d'ordre." },
          { label: "Confronter à la Sunna", note: "Puis aux paroles des Compagnons et des exégètes anciens." },
        ],
        caption: "Sauter la première étape produit des lectures qui semblent fondées et sont pourtant contredites par le Livre.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un réflexe simple",
        text: "Avant d'affirmer ce qu'un verset signifie, cherche cinq autres versets où le même mot est employé. La plupart des erreurs de lecture ne survivent pas à cet exercice.",
      },
      {
        type: "objection",
        objection: "N'est-ce pas rejeter la tradition au profit d'une lecture personnelle du texte ?",
        reponse:
          "L'ordre proposé n'exclut rien : il place la Sunna et les salaf immédiatement après, et leur donne le dernier mot en cas de divergence. Ce que la règle interdit, c'est de plaquer une explication sur un verset sans avoir vu que le Coran l'expliquait déjà autrement.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Un Livre décrit comme sa propre lumière ne se lit pas par fragments. Rassembler avant de conclure n'est pas une méthode parmi d'autres : c'est la manière dont le texte demande lui-même à être reçu.",
      },
    ],
  },
];
