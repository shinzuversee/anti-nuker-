import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre III — groupe a.
 * Les facultés de connaissance : ʿilm et maʿrifa, degrés de certitude,
 * raison et Révélation, limites du savoir, concepts de la pensée pure.
 */
export const sujetsPedagogieFacultes: Sujet[] = [
  {
    slug: slugifySujet("ʿIlm et maʿrifa : deux manières de connaître"),
    title: "ʿIlm et maʿrifa : deux manières de connaître",
    arabic: "العلم والمعرفة",
    intro:
      "En français, nous n'avons qu'un seul mot pour dire « savoir » et « connaître » dans bien des contextes : « je sais que Paris est la capitale de la France », « je connais mon voisin ». La langue arabe, elle, distingue deux verbes et deux univers : **al-ʿilm** (العلم) et **al-maʿrifa** (المعرفة). Cette distinction n'est pas un raffinement de grammairien : elle porte, dans la tradition islamique, sur la différence entre savoir une chose de l'extérieur et la connaître de l'intérieur, entre l'information reçue et la réalité éprouvée.\n\nCet article se propose de démêler ces deux notions, d'observer comment le Coran et les savants les emploient, et de comprendre pourquoi certains domaines — en particulier la connaissance de Dieu — appellent la maʿrifa bien plus que le simple ʿilm.",
    body: [
      { type: "h2", text: "Deux racines, deux visées" },
      {
        type: "lexique",
        root: "ع ل م",
        transliteration: "ʿ-l-m",
        sense:
          "Savoir, connaître un fait établi. Le ʿilm porte sur un objet stable, qu'on peut énoncer, transmettre, vérifier. C'est le savoir des propositions : « je sais que… »",
        derives: [
          { word: "ʿālim", arabic: "عَالِم", gloss: "Celui qui possède le savoir ; le savant." },
          { word: "maʿlūm", arabic: "مَعْلُوم", gloss: "Ce qui est su, l'objet même du savoir." },
          { word: "taʿlīm", arabic: "تَعْلِيم", gloss: "L'enseignement, la transmission du savoir." },
          { word: "ʿallām", arabic: "عَلَّام", gloss: "Celui qui sait absolument tout — nom donné à Dieu seul dans sa plénitude." },
        ],
        note: "**وَقُل رَّبِّ زِدْنِى عِلْمًا** — « Dis : Seigneur, accrois mon savoir » (20:114), verset invoqué pour l'ʿilm autant que pour la maʿrifa.",
      },
      {
        type: "lexique",
        root: "ع ر ف",
        transliteration: "ʿ-r-f",
        sense:
          "Connaître, reconnaître, identifier par un contact direct ou une expérience. La maʿrifa suppose souvent un objet préalablement rencontré, puis reconnu ; elle porte sur les êtres et les réalités vécues plutôt que sur les seules propositions abstraites.",
        derives: [
          { word: "ʿārif", arabic: "عَارِف", gloss: "Celui qui connaît par expérience intérieure ; terme technique du vocabulaire spirituel." },
          { word: "maʿrūf", arabic: "مَعْرُوف", gloss: "Ce qui est reconnu comme convenable, établi par l'usage et la conscience commune." },
          { word: "taʿāruf", arabic: "تَعَارُف", gloss: "Le fait de se connaître mutuellement, de se reconnaître les uns les autres." },
          { word: "ʿirfān", arabic: "عِرْفَان", gloss: "La connaissance intime, souvent employée dans le vocabulaire du soufisme théorique." },
        ],
      },
      {
        type: "verse",
        arabic:
          "يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًا وَقَبَآئِلَ **لِتَعَارَفُوٓا۟**",
        translation:
          "Ô hommes, Nous vous avons créés d'un mâle et d'une femelle, et Nous avons fait de vous des nations et des tribus, **afin que vous vous connaissiez mutuellement**.",
        reference: "Coran, al-Ḥujurāt, 49:13",
      },
      {
        type: "p",
        text: "Remarquons que le verset emploie la racine de la maʿrifa (taʿāruf) et non celle du ʿilm. Il ne s'agit pas d'accumuler des informations les uns sur les autres, mais d'entrer en **relation de reconnaissance** : ce qui suppose une rencontre, un vécu partagé, non une simple fiche signalétique.",
      },
      { type: "h2", text: "Le savoir des propositions et la connaissance des réalités" },
      {
        type: "comparaison",
        title: "ʿIlm et maʿrifa, deux registres",
        columns: ["ʿIlm (العلم)", "Maʿrifa (المعرفة)"],
        rows: [
          { criterion: "Objet", cells: ["Un fait, une proposition, une règle", "Un être, une réalité vécue"] },
          { criterion: "Mode d'accès", cells: ["Transmission, démonstration, mémorisation", "Expérience, fréquentation, épreuve"] },
          { criterion: "Peut-on l'avoir sans l'aimer ?", cells: ["Oui : on peut savoir sans être touché", "Rarement : la connaissance intime engage le cœur"] },
          { criterion: "Exemple", cells: ["Savoir que Dieu existe et qu'Il est Un", "Sentir Sa proximité au moment de l'invocation"] },
          { criterion: "Verbe employé pour Dieu Lui-même", cells: ["ʿAlīm, savoir absolu de toute chose", "Non employé pour Dieu : la maʿrifa suppose une progression, étrangère à Sa perfection"] },
        ],
        caption: "Les deux notions ne s'opposent pas : elles se complètent, la maʿrifa prolongeant souvent le ʿilm dans l'expérience.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Pourquoi Dieu n'est jamais dit ʿārif",
        text: "Parmi les quatre-vingt-dix-neuf noms, on trouve al-ʿAlīm (le Savant), jamais un dérivé de la racine ʿ-r-f appliqué à Dieu. La maʿrifa implique en arabe classique un cheminement, une acquisition progressive — ce qui est incompatible avec la perfection immuable du savoir divin. **Dieu sait de toute éternité ; Il ne « parvient » pas à connaître.**",
      },
      { type: "h2", text: "Deux façons de connaître Dieu" },
      {
        type: "p",
        text: "Cette distinction devient décisive lorsqu'on l'applique à la théologie. On peut savoir, par la démonstration rationnelle et les textes, qu'Allāh existe, qu'Il est unique, qu'Il possède les attributs de perfection : c'est le **ʿilm bi-Llāh**, le savoir au sujet de Dieu. Mais il existe un degré supérieur, que les savants nomment **al-maʿrifa bi-Llāh**, la connaissance de Dieu : un état du cœur où la vérité apprise devient une présence vécue, où l'on n'a plus seulement des arguments mais une **certitude goûtée**.",
      },
      {
        type: "quote",
        text:
          "قال الغزالي رحمه الله: **المعرفة ثمرة العلم، وليست العلم نفسه**؛ فرب عالم بصفات الله لم يذق حلاوة القرب منه، ورب عارف قليل العلم بالتفاصيل، عظيم الحال مع ربه.\n\nAl-Ghazālī, qu'Allāh lui fasse miséricorde, a dit : **« La connaissance (maʿrifa) est le fruit du savoir (ʿilm), non le savoir lui-même. »** Tel savant connaît par cœur les attributs de Dieu sans avoir goûté la douceur de la proximité avec Lui ; et tel homme de peu de science détaillée possède, avec son Seigneur, un état intérieur immense.",
        source: "Formulation résumant Iḥyāʾ ʿulūm al-dīn",
      },
      {
        type: "schema",
        title: "Du savoir à la connaissance",
        variant: "flow",
        nodes: [
          { label: "Écouter la preuve", arabic: "سماع الدليل", note: "On reçoit un argument rationnel ou un texte révélé." },
          { label: "Comprendre et retenir", arabic: "العلم", note: "Le fait devient un savoir stable, énonçable, transmissible." },
          { label: "Fréquenter ce savoir", arabic: "المجاهدة", note: "Par l'invocation, la méditation, la pratique répétée." },
          { label: "Goûter la réalité", arabic: "المعرفة", note: "Le savoir devient une présence intérieure, une certitude vécue." },
        ],
        caption: "Le passage du ʿilm à la maʿrifa n'est pas automatique : il demande un travail intérieur que le savoir seul ne fournit pas.",
      },
      {
        type: "verse",
        arabic:
          "إِنَّمَا يَخْشَى ٱللَّهَ مِنْ عِبَادِهِ ٱلْعُلَمَٰٓؤُا۟",
        translation:
          "Parmi Ses serviteurs, seuls **les savants craignent Allāh** avec une crainte révérencielle.",
        reference: "Coran, Fāṭir, 35:28",
      },
      {
        type: "p",
        text: "Ce verset associe explicitement le savoir (**ʿilm**, dont dérive « ʿulamāʾ ») à un fruit intérieur, la crainte révérencielle (khashya), qui n'est pas une simple donnée intellectuelle mais un état du cœur. Il montre que la frontière entre ʿilm et maʿrifa n'est pas étanche : un savoir véritablement assimilé produit naturellement un effet sur le cœur ; à défaut, on peut se demander s'il a été réellement compris, ou seulement mémorisé.",
      },
      {
        type: "objection",
        objection: "N'est-ce pas dangereux de valoriser une « connaissance du cœur » qui échapperait au contrôle de la raison et des textes ? Ne risque-t-on pas d'ouvrir la porte à toutes les prétentions subjectives ?",
        reponse:
          "La tradition sunnite pose une condition stricte : **la maʿrifa authentique ne contredit jamais le ʿilm établi par le Coran et la Sunna** ; elle en est l'approfondissement, non le dépassement ou le remplacement. Un état intérieur qui contredirait un texte clair serait suspect, non une preuve de sainteté. C'est pourquoi les maîtres avertis insistent : on ne se fie pas à un « ressenti » qui prétendrait annuler une règle établie.",
        suite: "C'est en ce sens qu'on dit que le soufisme sain se nourrit du fiqh et de l'ʿaqīda, jamais contre eux.",
      },
      { type: "h2", text: "Une expérience de pensée : le géographe et le voyageur" },
      {
        type: "experiment",
        title: "Le géographe et le voyageur",
        steps: [
          "Imagine un géographe qui a mémorisé toutes les cartes d'un pays lointain : ses fleuves, ses montagnes, la latitude de chaque ville.",
          "Imagine ensuite un voyageur illettré qui a traversé ce pays à pied, senti sa chaleur, entendu ses langues, mangé ses fruits.",
          "Demande-toi lequel des deux peut dire : « je connais ce pays » au sens le plus fort du terme.",
          "Remarque que le géographe possède un **ʿilm** exact, souvent plus précis point par point ; mais le voyageur possède une **maʿrifa** que la carte seule ne donne pas.",
          "Conclus que l'idéal n'est ni l'un ni l'autre isolément, mais le géographe devenu voyageur : **celui qui unit l'exactitude du savoir à la vérité de l'expérience**.",
        ],
        conclusion: "Ainsi en est-il de la religion : le savant qui n'a jamais « voyagé » dans la prière risque un savoir froid ; le dévot sans savoir risque l'égarement sincère. La perfection réunit les deux.",
      },
      { type: "h2", text: "Le lien avec la certitude" },
      {
        type: "degres",
        title: "De l'information à la certitude vécue",
        arabic: "من الخبر إلى اليقين",
        direction: "asc",
        degres: [
          { label: "Entendre parler", arabic: "الخبر", note: "On rapporte un fait sans l'avoir vérifié soi-même." },
          { label: "Savoir (ʿilm)", arabic: "العلم", note: "Le fait est établi par preuve, mémorisé, tenu pour vrai." },
          { label: "Reconnaître (maʿrifa)", arabic: "المعرفة", note: "Le fait est retrouvé, éprouvé, confirmé par l'expérience intérieure." },
          { label: "Certitude visuelle du cœur", arabic: "عين اليقين", note: "Une clarté telle que le doute devient psychologiquement impossible." },
        ],
        caption: "Cette échelle prépare l'article suivant sur les degrés de la certitude (yaqīn), qui approfondit le sommet de cette progression.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le maʿrūf, ou la connaissance devenue norme commune",
        text: "La racine ʿ-r-f donne aussi **al-maʿrūf**, « ce qui est convenable », que l'on retrouve dans « ordonner le convenable » (al-amr bi-l-maʿrūf). Le mot suggère que le bien véritable est ce que les cœurs sains **reconnaissent** spontanément, sans qu'il faille toujours une longue démonstration : une trace supplémentaire du lien entre maʿrifa et intuition droite.",
      },
      {
        type: "spectre",
        title: "Du savoir livresque à la connaissance vécue",
        left: "ʿIlm pur : savoir sans expérience",
        right: "Maʿrifa pure : expérience sans articulation",
        markers: [
          { label: "L'étudiant qui mémorise sans pratiquer", position: 10, note: "Risque : un savoir sec, sans fruit sur le cœur." },
          { label: "Le savant pieux, ʿālim ʿāmil", position: 50, note: "Le savoir nourrit la pratique et l'expérience confirme le savoir." },
          { label: "Le mystique sans discipline doctrinale", position: 90, note: "Risque : des états invérifiables, sans ancrage textuel solide." },
        ],
        caption: "L'idéal islamique se situe au centre : un savoir rigoureux vécu intérieurement, jamais l'un sans l'autre.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "ʿIlm et maʿrifa ne sont donc pas deux voies rivales, mais **deux moments d'un même chemin**. Le premier fournit la carte, l'armature, la garantie contre l'illusion ; le second donne la saveur, la présence, la vie du cœur. Négliger le ʿilm au profit d'une prétendue maʿrifa expose à l'égarement sincère ; s'arrêter au seul ʿilm sans jamais le laisser descendre au cœur expose à la sécheresse d'un savoir sans fruit.\n\nLa juste articulation des deux notions rappelle enfin une leçon plus large : en islam, la connaissance de Dieu n'est jamais un exercice purement académique. Elle est destinée à devenir un état vécu, une certitude qui transforme la manière d'aimer, de craindre et d'espérer — ce que les articles suivants sur les degrés de la certitude et sur la place respective de la raison et de la Révélation viendront préciser davantage.",
      },
    ],
  },

  {
    slug: slugifySujet("À quel degré de certitude savons-nous ce que nous savons ?"),
    title: "À quel degré de certitude savons-nous ce que nous savons ?",
    arabic: "درجات اليقين",
    intro:
      "Toutes les certitudes ne se valent pas. Il existe une différence entre savoir qu'un ami est arrivé parce qu'on le lui a dit, savoir qu'il est arrivé parce qu'on entend sa voiture dans l'allée, et savoir qu'il est arrivé parce qu'on le voit devant soi. Ces trois degrés existent en arabe sous des noms précis, et le Coran s'en sert pour décrire les niveaux de certitude accessibles à l'homme au sujet des réalités les plus graves : la résurrection, le jugement, la rencontre avec Dieu.\n\nCet article expose l'échelle classique du **yaqīn** (اليقين), la certitude, telle que la présentent les exégètes à partir des versets de sourate al-Takāthur et d'al-Wāqiʿa, puis examine comment cette échelle éclaire notre rapport quotidien au savoir religieux.",
    body: [
      { type: "h2", text: "Trois mots pour un seul mot français" },
      {
        type: "p",
        text: "Le français dispose d'un seul terme, « certitude », pour désigner des états très différents. L'arabe coranique, lui, distingue trois degrés successifs dans la connaissance d'une même réalité : **ʿilm al-yaqīn** (علم اليقين), la certitude par déduction ; **ʿayn al-yaqīn** (عين اليقين), la certitude par vision directe ; et **ḥaqq al-yaqīn** (حق اليقين), la certitude par expérience vécue et totale.",
      },
      {
        type: "verse",
        arabic:
          "كَلَّا لَوْ تَعْلَمُونَ **عِلْمَ ٱلْيَقِينِ** ۝ لَتَرَوُنَّ ٱلْجَحِيمَ ۝ ثُمَّ لَتَرَوُنَّهَا **عَيْنَ ٱلْيَقِينِ**",
        translation:
          "Prenez garde ! Si vous saviez **d'une certitude de science (ʿilm al-yaqīn)**… Vous verrez certainement la Fournaise ! Puis vous la verrez **d'une certitude de vision (ʿayn al-yaqīn)**.",
        reference: "Coran, al-Takāthur, 102:5-7",
      },
      {
        type: "verse",
        arabic: "وَإِنَّهُۥ **لَحَقُّ ٱلْيَقِينِ**",
        translation: "Et cela est, en vérité, **la certitude absolue (ḥaqq al-yaqīn)**.",
        reference: "Coran, al-Wāqiʿa, 56:95",
      },
      {
        type: "quote",
        text:
          "قال ابن كثير رحمه الله في هذه الآيات: **علم اليقين هو الخبر الصادق، وعين اليقين هو المشاهدة، وحق اليقين هو المباشرة والذوق**؛ فمن أخبر عن العسل أنه حلو فقد حصل له علم اليقين، فإذا رآه حصل له عين اليقين، فإذا ذاقه حصل له حق اليقين.\n\nIbn Kathīr, qu'Allāh lui fasse miséricorde, a écrit à propos de ces versets : **« ʿIlm al-yaqīn, c'est l'information véridique ; ʿayn al-yaqīn, c'est l'observation directe ; ḥaqq al-yaqīn, c'est le contact et le goût même de la chose. »** Ainsi celui à qui l'on dit que le miel est doux obtient ʿilm al-yaqīn ; celui qui le voit obtient ʿayn al-yaqīn ; celui qui le goûte obtient ḥaqq al-yaqīn.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿAẓīm, commentaire d'al-Takāthur",
      },
      {
        type: "degres",
        title: "Les trois degrés du yaqīn",
        arabic: "مراتب اليقين",
        direction: "asc",
        degres: [
          { label: "ʿIlm al-yaqīn", arabic: "علم اليقين", note: "Certitude par le raisonnement et le rapport digne de foi — on sait que le miel est doux parce qu'on nous l'a dit et que la preuve est fiable." },
          { label: "ʿAyn al-yaqīn", arabic: "عين اليقين", note: "Certitude par observation directe — on voit le miel de ses propres yeux." },
          { label: "Ḥaqq al-yaqīn", arabic: "حق اليقين", note: "Certitude par expérience totale — on goûte le miel, on en fait l'épreuve complète." },
        ],
        caption: "Chaque degré n'annule pas le précédent : il l'enveloppe et le dépasse.",
      },
      {
        type: "schema",
        title: "La pyramide du yaqīn",
        variant: "branch",
        nodes: [
          { label: "ʿIlm al-yaqīn", arabic: "علم اليقين", note: "Base : la démonstration et le texte fiable." },
          { label: "ʿAyn al-yaqīn", arabic: "عين اليقين", note: "Milieu : l'observation qui confirme le savoir." },
          { label: "Ḥaqq al-yaqīn", arabic: "حق اليقين", note: "Sommet : l'expérience vécue, sans reste de distance." },
        ],
        caption: "Plus on s'élève, moins l'intermédiaire (récit, image, preuve indirecte) est nécessaire : la réalité elle-même se substitue à sa description.",
      },
      { type: "h2", text: "Application au domaine religieux" },
      {
        type: "p",
        text: "Cette échelle éclaire un problème que se posent souvent les croyants : « Suis-je réellement certain de ce que je crois, ou seulement persuadé par habitude ? » La réponse tient à distinguer les objets de croyance selon le degré de certitude qui leur est, dans cette vie, accessible.",
      },
      {
        type: "comparaison",
        title: "Trois objets, trois degrés accessibles ici-bas",
        columns: ["Objet de foi", "Degré accessible en cette vie", "Source du savoir"],
        rows: [
          { criterion: "L'existence de Dieu", cells: ["ʿIlm al-yaqīn renforcé par la fiṭra", "Raison, signes de la création, révélation"] },
          { criterion: "La réalité de la résurrection", cells: ["ʿIlm al-yaqīn (avant la mort)", "Textes révélés, argumentation rationnelle du possible"] },
          { criterion: "La vision du Paradis ou de l'Enfer", cells: ["ʿAyn al-yaqīn, puis ḥaqq al-yaqīn", "Réservée à l'au-delà : la vision directe, puis l'entrée effective"] },
        ],
        caption: "Cette vie est le lieu du ʿilm al-yaqīn ; l'au-delà est le lieu où les deux degrés supérieurs se réalisent pleinement.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Une confusion fréquente",
        text: "On croit parfois que « croire sans voir » est un pis-aller, une certitude de seconde zone. Le Coran inverse cette hiérarchie implicite : la foi fondée sur le ʿilm al-yaqīn, acceptée **avant** la vision, est justement ce qui est loué chez les croyants du Jour dernier — car elle suppose une soumission sincère, non contrainte par l'évidence sensible.",
      },
      {
        type: "verse",
        arabic: "ٱلَّذِينَ يُؤْمِنُونَ **بِٱلْغَيْبِ**",
        translation: "Ceux qui croient **en l'invisible**.",
        reference: "Coran, al-Baqara, 2:3",
      },
      { type: "h2", text: "Une expérience de pensée : la lettre du voyageur" },
      {
        type: "experiment",
        title: "La lettre du voyageur",
        steps: [
          "Un ami digne de confiance, qui n'a jamais menti de sa vie, t'écrit une lettre te décrivant en détail un pays qu'il vient de visiter.",
          "Tu n'as jamais vu ce pays, mais la fiabilité totale de ton ami te donne une certitude ferme de son existence et de ses traits : c'est un ʿilm al-yaqīn.",
          "Imagine ensuite que tu voyages toi-même jusqu'à la frontière de ce pays et que tu l'aperçois à l'horizon : ta certitude change de nature, elle devient ʿayn al-yaqīn.",
          "Enfin, imagine que tu y entres, que tu y marches, que tu y vis : c'est ḥaqq al-yaqīn.",
          "Demande-toi : à aucun moment de ce parcours n'as-tu été dans l'erreur. Le premier degré n'était pas un doute déguisé ; c'était déjà une **certitude authentique**, appelée simplement à se déployer.",
        ],
        conclusion: "Ainsi le croyant qui n'a pas « vu » n'est pas dans l'incertitude : il possède un savoir réel, du même ordre logique que la certitude, appelé à se compléter dans l'au-delà.",
      },
      { type: "h2", text: "Le rôle du cœur dans la fixation du yaqīn" },
      {
        type: "p",
        text: "Les théologiens ashʿarites, en systématisant cette échelle, insistent sur un point : le yaqīn n'est pas une simple accumulation d'arguments, mais un **état stable du cœur**, où le doute a cessé d'avoir prise, même si la personne ne saurait reformuler chaque étape de la démonstration qui l'a produit. C'est pourquoi on trouve, chez les savants comme chez les gens simples, des degrés de certitude parfois supérieurs chez ceux qui argumentent le moins.",
      },
      {
        type: "cycle",
        title: "Comment le yaqīn s'installe dans le cœur",
        arabic: "استقرار اليقين",
        center: "قلب مطمئن — Un cœur apaisé",
        steps: [
          { label: "Recevoir la preuve", arabic: "الدليل", note: "Un argument rationnel, un texte, un signe dans la création." },
          { label: "L'examiner sans complaisance", arabic: "التدبر", note: "Vérifier sa solidité, écarter les objections sérieuses." },
          { label: "Le laisser descendre au cœur", arabic: "المجاهدة", note: "Par l'invocation, la pratique, la répétition." },
          { label: "Une stabilité qui résiste au doute", arabic: "الطمأنينة", note: "Le doute occasionnel ne renverse plus la certitude acquise." },
        ],
        caption: "Le yaqīn est un aboutissement, non un point de départ garanti par la seule intelligence.",
      },
      {
        type: "objection",
        objection: "Si la certitude totale (ḥaqq al-yaqīn) n'est accessible qu'après la mort, la foi en cette vie n'est-elle pas condamnée à rester fragile, hypothétique ?",
        reponse:
          "Non : le ʿilm al-yaqīn est un savoir véritable, non une simple opinion probable. Une démonstration rigoureuse, un texte authentique et transmis avec certitude, produisent une connaissance ferme, du même ordre logique — bien que non du même ordre expérientiel — qu'une observation directe. La fragilité que l'on ressent parfois tient moins à la nature du savoir qu'à un défaut d'attention ou de pratique du cœur.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'échelle du yaqīn nous enseigne à ne pas confondre l'absence de vision sensible avec l'absence de certitude. **Savoir, voir, vivre** : trois degrés d'une même vérité, dont seul le premier nous est requis en cette existence, et dont les deux autres nous sont promis. Comprendre cette hiérarchie aide à traverser sereinement les moments où le doute frappe à la porte du cœur : il ne signale pas nécessairement une faille dans la preuve, mais parfois seulement le rappel que nous sommes encore, ici-bas, au premier degré d'un chemin appelé à se parachever.\n\nCette question de la certitude prépare directement celle du prochain article : comment la raison et la Révélation collaborent-elles pour produire, précisément, ce ʿilm al-yaqīn qui nous est demandé dans cette vie ?",
      },
    ],
  },

  {
    slug: slugifySujet("Raisonner avec son cœur, et la place de la Révélation"),
    title: "Raisonner avec son cœur, et la place de la Révélation",
    arabic: "العقل والسمع",
    intro:
      "« Utilise ta raison » et « suis ce qui t'a été révélé » sont deux invitations que l'on croit parfois rivales, comme si accorder de la place à l'une revenait à diminuer l'autre. La tradition théologique sunnite, en particulier l'école ashʿarite, a consacré des volumes entiers à préciser leurs rapports exacts. Elle est arrivée à une position équilibrée, résumée en une formule devenue classique : **la raison établit l'obligation d'accepter la Révélation, et la Révélation guide la raison sur ce qu'elle ne peut atteindre seule**.\n\nCet article explore ce que le Coran dit du rôle de la raison, ce que signifie « raisonner avec le cœur » dans le vocabulaire coranique, puis comment se répartissent les rôles respectifs de l'ʿaql (العقل) et du samʿ (السمع, ce qui est transmis par audition, c'est-à-dire la Révélation).",
    body: [
      { type: "h2", text: "Le cœur, siège de la raison en arabe coranique" },
      {
        type: "p",
        text: "Une surprise attend le lecteur occidental du Coran : le siège de la raison n'y est pas la tête, mais le **qalb** (القلب), le cœur. Le verbe **yaʿqilūna**, « ils raisonnent », est associé à plusieurs reprises à cet organe. Ce n'est pas une métaphore poétique gratuite : elle signale que, dans la vision coranique, la fonction rationnelle n'est jamais séparée de la disposition morale et affective de la personne.",
      },
      {
        type: "verse",
        arabic:
          "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ **يَعْقِلُونَ بِهَآ** أَوْ ءَاذَانٌ يَسْمَعُونَ بِهَا ۖ فَإِنَّهَا لَا تَعْمَى ٱلْأَبْصَٰرُ وَلَٰكِن تَعْمَى ٱلْقُلُوبُ ٱلَّتِى فِى ٱلصُّدُورِ",
        translation:
          "N'ont-ils pas parcouru la terre, afin d'avoir des cœurs **avec lesquels ils raisonnent**, ou des oreilles avec lesquelles ils entendent ? En vérité, ce ne sont pas les yeux qui s'aveuglent, mais ce sont les cœurs, dans les poitrines, qui s'aveuglent.",
        reference: "Coran, al-Ḥajj, 22:46",
      },
      {
        type: "quote",
        text:
          "قال الرازي رحمه الله: **إسناد العقل إلى القلب في القرآن يدل على أن حقيقة العقل ليست مجرد إدراك المقدمات، بل إدراك مقترن بحياة القلب وصفائه**؛ فمن فسد قلبه بالهوى والغفلة، ضعف عقله وإن كان ذكيا في أمور دنياه.\n\nAl-Rāzī, qu'Allāh lui fasse miséricorde, a écrit : **« L'attribution de la raison au cœur, dans le Coran, indique que la réalité de la raison n'est pas la simple saisie de prémisses logiques, mais une perception liée à la vie et à la pureté du cœur. »** Ainsi celui dont le cœur est corrompu par la passion et l'insouciance voit sa raison s'affaiblir, même s'il demeure habile dans les affaires de ce bas monde.",
        source: "Al-Rāzī, Mafātīḥ al-ghayb, commentaire d'al-Ḥajj 22:46",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Une intelligence qui peut être « aveugle »",
        text: "Le verset ne dit pas que les gens manquent d'yeux ou d'intelligence technique. Il dit que **leurs cœurs sont aveugles** — c'est-à-dire que leur faculté de raisonner droitement est obstruée par autre chose que le manque de capacité : l'orgueil, l'habitude, le désir de ne pas voir. Cela explique pourquoi une grande intelligence logique peut coexister avec un profond aveuglement sur les questions dernières.",
      },
      { type: "h2", text: "Ce que la raison peut établir seule" },
      {
        type: "p",
        text: "La tradition ashʿarite reconnaît à la raison une compétence propre, et refuse absolument le fidéisme aveugle qui rejetterait tout usage de l'intellect. Elle distingue précisément ce que la raison peut établir par elle-même de ce qui lui demeure hors de portée.",
      },
      {
        type: "balance",
        title: "Ce que la raison seule peut établir, et ce qu'elle ne peut pas",
        arabic: "ما يستقل به العقل وما لا يستقل به",
        affirmLabel: "Accessible à la raison seule",
        denyLabel: "Hors de portée de la raison seule",
        affirm: [
          "L'existence d'un Créateur, à partir de l'observation du monde contingent.",
          "L'impossibilité que le monde se soit créé lui-même à partir du néant.",
          "L'unicité de Dieu, par l'argument dit de la « répulsion mutuelle » (tamānuʿ).",
          "Le caractère raisonnable, non contradictoire, de l'envoi de prophètes.",
        ],
        deny: [
          "Le détail des obligations rituelles : nombre de prières, modalités du jeûne.",
          "La nature exacte des félicités et des peines de l'au-delà.",
          "Le nom précis par lequel Dieu veut être invoqué et adoré.",
          "Les modalités concrètes du culte agréées par Dieu.",
        ],
        caption: "La Révélation ne vient donc pas combler une faiblesse de la raison en général, mais préciser ce qui, par nature, ne relève pas du raisonnement abstrait.",
      },
      {
        type: "verse",
        arabic:
          "وَمَا كُنَّا مُعَذِّبِينَ **حَتَّىٰ نَبْعَثَ رَسُولًا**",
        translation:
          "Et Nous n'avons jamais châtié un peuple **avant de lui avoir envoyé un messager**.",
        reference: "Coran, al-Isrāʾ, 17:15",
      },
      {
        type: "p",
        text: "Ce verset fonde un principe majeur du droit et de la théologie sunnites : nul n'est tenu responsable, au sens du détail légal, des obligations qu'il n'a pas reçues par la voie prophétique. Cela ne signifie pas que la raison seule ne peut rien reconnaître — reconnaître un Créateur reste à sa portée — mais que le détail du culte, les peines et récompenses précises relèvent du **samʿ**, de ce qui est transmis, non de la seule spéculation.",
      },
      { type: "h2", text: "Une hiérarchie, non une opposition" },
      {
        type: "degres",
        title: "Comment raison et Révélation s'articulent",
        arabic: "ترتيب العقل والسمع",
        direction: "asc",
        degres: [
          { label: "La raison examine", arabic: "النظر العقلي", note: "Elle observe le monde, en tire l'existence et l'unicité du Créateur." },
          { label: "La raison conclut à la véracité du Messager", arabic: "تصديق الرسول", note: "Par l'examen des preuves de la prophétie : miracles, cohérence, moralité." },
          { label: "La Révélation prend le relais", arabic: "السمع", note: "Une fois la prophétie établie, on reçoit d'elle le détail que la raison ne pouvait fournir." },
          { label: "La raison continue d'examiner la cohérence", arabic: "التدبر", note: "Elle vérifie, sans prétendre juger seule du fond des obligations révélées." },
        ],
        caption: "La raison est la porte d'entrée qui conduit à accepter la Révélation ; une fois franchie, elle ne s'efface pas mais change de fonction.",
      },
      {
        type: "schema",
        title: "Le partage des rôles entre ʿaql et samʿ",
        variant: "branch",
        nodes: [
          { label: "العقل — La raison", note: "Établit l'existence de Dieu, l'unicité, la possibilité et la nécessité de la prophétie." },
          { label: "السمع — La Révélation transmise", note: "Détaille le culte, les noms divins à invoquer, les réalités de l'au-delà." },
          { label: "القلب — Le cœur qui reçoit les deux", note: "Unit la démonstration rationnelle et l'acceptation confiante du texte." },
        ],
        caption: "Aucune des trois instances ne fonctionne seule dans la construction d'une foi mûre.",
      },
      { type: "h2", text: "Que faire quand un verset semble heurter la raison ?" },
      {
        type: "objection",
        objection: "Si un texte révélé semblait contredire une conclusion rationnelle certaine, laquelle des deux instances devrait céder ?",
        reponse:
          "Les théologiens répondent qu'une **contradiction réelle et certaine** entre une preuve rationnelle définitive et un texte authentique est, en réalité, impossible — car les deux proviennent, en dernière analyse, de la même source de vérité. Ce qui se présente comme une contradiction relève, dans les faits examinés historiquement, soit d'une preuve rationnelle mal établie, soit d'une compréhension trop littérale d'un texte qui appelle une interprétation figurée (**taʾwīl**) dans les limites reconnues par la science exégétique.",
        suite: "C'est pourquoi les savants ont élaboré des règles précises de taʾwīl, étudiées ailleurs, pour ne jamais céder ni à un rationalisme qui vide le texte de son sens, ni à un littéralisme qui l'oppose sans nécessité à une certitude démontrée.",
      },
      { type: "h2", text: "Une expérience de pensée : le juge et le témoin fiable" },
      {
        type: "experiment",
        title: "Le juge et le témoin fiable",
        steps: [
          "Imagine un juge chargé d'instruire une affaire sur des faits qu'il n'a pas vus de ses propres yeux.",
          "Sa raison lui permet d'évaluer la fiabilité d'un témoin : cohérence du récit, moralité connue, absence de contradiction.",
          "Une fois établi que le témoin est parfaitement digne de confiance, le juge fonde son jugement sur ce que le témoin rapporte, même pour des détails qu'il n'aurait jamais pu déduire seul.",
          "Le juge n'a pas « abandonné » sa raison en faisant cela : il l'a au contraire pleinement exercée, en l'employant à la tâche pour laquelle elle est faite : évaluer, puis faire confiance à bon escient.",
        ],
        conclusion: "De même, accepter la Révélation après avoir rationnellement établi la véracité du Prophète n'est pas un renoncement à la raison, mais son **usage le plus abouti**.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Ni rationalisme, ni fidéisme",
        text: "La position ashʿarite se distingue de deux extrêmes : le rationalisme qui prétend que rien ne doit être cru sans démonstration rationnelle indépendante, et le fidéisme qui prétend que la raison n'a aucune part légitime dans la foi. **Elle tient les deux bouts de la chaîne : la raison ouvre la porte, la Révélation en franchit le seuil.**",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Raisonner avec son cœur, au sens coranique, ce n'est pas renoncer à la rigueur intellectuelle : c'est refuser de séparer l'exercice de l'intelligence de la disposition morale qui la rend féconde. La raison est capable, seule, d'atteindre l'existence et l'unicité de Dieu ; elle demeure incapable, seule, de préciser le détail du culte que Dieu agrée. Loin de s'opposer, **ʿaql et samʿ collaborent selon un ordre précis**, que la théologie sunnite a pris soin de définir sans jamais sacrifier l'un à l'autre.\n\nCette articulation prépare la question suivante, plus délicate encore : que faire des limites que la raison rencontre malgré tout, de ce qu'elle ne parviendra jamais à percer — et pourquoi cette limite n'est en rien un défaut du dessein divin ?",
      },
    ],
  },

  {
    slug: slugifySujet("Ce que nous ne pouvons pas savoir, et pourquoi c'est acceptable"),
    title: "Ce que nous ne pouvons pas savoir, et pourquoi c'est acceptable",
    arabic: "حدود العلم البشري",
    intro:
      "Il y a une différence entre ignorer par accident — faute de temps, de méthode, de moyens — et ignorer par nature, parce que l'objet même dépasse structurellement les capacités humaines. La tradition islamique a nommé cette seconde catégorie **al-ghayb** (الغيب), l'invisible, et a fait de son acceptation sereine un pilier de la foi plutôt qu'un aveu de faiblesse.\n\nCet article explore pourquoi certaines limites du savoir humain ne sont pas des défauts à corriger, mais des frontières voulues, cohérentes avec la nature même de la créature ; et comment cette acceptation, loin de mener au scepticisme, fonde au contraire une humilité intellectuelle féconde.",
    body: [
      { type: "h2", text: "Le ghayb : une catégorie, non un vide" },
      {
        type: "lexique",
        root: "غ ي ب",
        transliteration: "gh-y-b",
        sense:
          "Être absent, caché, hors de portée du regard. Al-ghayb désigne toute réalité soustraite à la perception humaine ordinaire, qu'elle soit passée, présente ou future.",
        derives: [
          { word: "ghāʾib", arabic: "غَائِب", gloss: "Ce qui est absent, hors de vue." },
          { word: "ʿālim al-ghayb", arabic: "عَالِمُ ٱلْغَيْبِ", gloss: "Celui qui connaît l'invisible — épithète divine exclusive." },
          { word: "ghayba", arabic: "غَيْبَة", gloss: "L'absence, l'éloignement temporaire." },
        ],
        note: "Le ghayb n'est pas « ce qui n'existe pas » mais **ce qui existe sans nous être accessible**, ce qui change tout dans notre rapport à lui.",
      },
      {
        type: "verse",
        arabic:
          "**وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ** ۚ وَيَعْلَمُ مَا فِى ٱلْبَرِّ وَٱلْبَحْرِ",
        translation:
          "**Il détient les clefs de l'invisible : nul ne les connaît, si ce n'est Lui.** Il sait ce qui est sur la terre ferme et dans la mer.",
        reference: "Coran, al-Anʿām, 6:59",
      },
      {
        type: "verse",
        arabic:
          "**إِنَّ ٱللَّهَ عِندَهُۥ عِلْمُ ٱلسَّاعَةِ** وَيُنَزِّلُ ٱلْغَيْثَ وَيَعْلَمُ مَا فِى ٱلْأَرْحَامِ ۖ وَمَا تَدْرِى نَفْسٌ مَّاذَا تَكْسِبُ غَدًا",
        translation:
          "**C'est auprès d'Allāh que se trouve la science de l'Heure.** C'est Lui qui fait descendre la pluie et connaît ce qu'il y a dans les matrices. Nulle âme ne sait ce qu'elle acquerra demain.",
        reference: "Coran, Luqmān, 31:34",
      },
      {
        type: "quote",
        text:
          "قال ابن عاشور رحمه الله: **إحصاء مفاتح الغيب في هذه الآية يفيد أن علم الله بالغيب علم إحاطة تام، لا يشذ عنه شيء، بخلاف علم الإنسان الذي هو علم بأسباب ودلائل ظنية أو قطعية في بعضها**، فليس عدم علمنا بالغيب نقصا يستحى منه، بل هو مقتضى كوننا مخلوقين لا خالقين.\n\nIbn ʿĀshūr, qu'Allāh lui fasse miséricorde, a écrit : **« L'énumération des clefs de l'invisible dans ce verset indique que la science divine de l'invisible est une science d'englobement total, dont rien n'échappe — à la différence de la science humaine, qui procède par causes et indices, tantôt probables, tantôt certains. »** Notre ignorance du ghayb n'est donc pas une lacune dont il faudrait avoir honte, mais la conséquence nécessaire de notre condition de créature, non de créateur.",
        source: "Ibn ʿĀshūr, al-Taḥrīr wa-l-tanwīr, commentaire d'al-Anʿām 6:59",
      },
      { type: "h2", text: "Trois catégories d'invisible" },
      {
        type: "comparaison",
        title: "Ce qui échappe à l'homme, selon son degré",
        columns: ["Catégorie", "Exemple", "Accessible à qui ?"],
        rows: [
          { criterion: "Ghayb absolu", cells: ["L'Heure, le détail du Décret, l'essence de Dieu", "À Dieu seul"] },
          { criterion: "Ghayb relatif révélé", cells: ["Certains événements de l'au-delà, des récits anciens", "À Dieu, communiqué en partie aux prophètes"] },
          { criterion: "Ghayb relatif ordinaire", cells: ["Ce qui se passe dans la pièce voisine, la pensée d'autrui", "Accessible par des moyens naturels indirects"] },
        ],
        caption: "Seule la première catégorie est un « invisible » au sens théologique fort : structurellement fermé à toute créature, quels que soient ses progrès.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Une confusion à éviter",
        text: "Certains rapprochent trop vite les progrès de la science moderne — prévisions météorologiques, imagerie médicale du fœtus — d'une réfutation du verset 31:34. C'est une confusion de catégories : le verset parle d'une **connaissance de détail totale et certaine**, non d'une estimation probabiliste construite après coup à partir d'indices matériels. Prévoir une probabilité de pluie n'est pas connaître, au sens du verset, « ce que Dieu fait descendre » dans sa décision précise et son moment exact.",
      },
      { type: "h2", text: "Pourquoi cette limite est cohérente, non arbitraire" },
      {
        type: "p",
        text: "On pourrait s'interroger : pourquoi Dieu n'a-t-Il pas simplement donné à l'homme un accès total à la connaissance, ce qui aurait, semble-t-il, facilité la foi et évité bien des erreurs ? La tradition répond par plusieurs considérations convergentes.",
      },
      {
        type: "balance",
        title: "Pourquoi la limite du savoir humain a un sens",
        arabic: "حكمة حجب الغيب",
        affirmLabel: "Ce que cette limite rend possible",
        denyLabel: "Ce qu'un accès total aurait supprimé",
        affirm: [
          "Le mérite de la foi en l'invisible, distinctive du croyant authentique (2:3).",
          "La place de l'effort, de la recherche, du raisonnement humble.",
          "La reconnaissance effective de la différence entre Créateur et créature.",
          "Une motivation constante à se tourner vers Dieu, faute de tout maîtriser soi-même.",
        ],
        deny: [
          "Le mérite moral d'une foi acquise sans épreuve du doute.",
          "La liberté véritable, puisque savoir avec certitude absolue l'issue de chaque choix figerait l'agir.",
          "Une distinction claire entre ce qui relève de Dieu et ce qui relève de l'homme.",
          "Une place réelle pour l'humilité intellectuelle, qui structure la piété authentique.",
        ],
        caption: "La limite n'est donc pas un accident regrettable du dessein divin, mais l'une des conditions mêmes de la responsabilité et du mérite humains.",
      },
      {
        type: "schema",
        title: "Ce qui dépend de la connaissance totale, et ce qui n'en dépend pas",
        variant: "flow",
        nodes: [
          { label: "Un accès total au ghayb", note: "Hypothèse examinée : que se passerait-il ?" },
          { label: "Plus d'épreuve réelle du choix", note: "Chaque conséquence serait connue à l'avance avec certitude totale." },
          { label: "Plus de mérite distinctif à la foi", note: "Croire deviendrait une simple constatation, non un engagement du cœur." },
          { label: "Une humanité déresponsabilisée", note: "L'effort moral perdrait une grande part de sa valeur." },
        ],
        caption: "Ce parcours hypothétique montre que la limite du savoir n'est pas séparable de la nature même de l'épreuve terrestre.",
      },
      { type: "h2", text: "Une expérience de pensée : l'élève et l'examen à livre fermé" },
      {
        type: "experiment",
        title: "L'élève et l'examen à livre fermé",
        steps: [
          "Imagine un professeur qui, avant un examen, donnerait à chaque élève la copie déjà corrigée avec la note finale inscrite.",
          "L'examen perdrait alors tout son sens : il ne resterait plus qu'à constater un résultat déjà écrit, sans que l'élève ait eu à fournir un effort réel.",
          "C'est précisément pour préserver le sens de l'épreuve que l'examen se déroule à livre fermé, dans une incertitude partielle assumée.",
          "De même, la vie terrestre est conçue comme une **épreuve** (Coran, al-Mulk, 67:2) ; connaître à l'avance chaque issue viderait cette épreuve de son sens.",
        ],
        conclusion: "L'ignorance de certaines choses n'est donc pas un défaut du dispositif : elle en est, structurellement, la condition de possibilité.",
      },
      { type: "h2", text: "Ce que le Prophète lui-même ignorait" },
      {
        type: "verse",
        arabic: "قُل لَّآ أَقُولُ لَكُمْ عِندِى خَزَآئِنُ ٱللَّهِ وَلَآ **أَعْلَمُ ٱلْغَيْبَ**",
        translation: "Dis : Je ne vous dis pas que je détiens les trésors d'Allāh, ni que **je connais l'invisible**.",
        reference: "Coran, al-Anʿām, 6:50",
      },
      {
        type: "p",
        text: "Ce verset est décisif : même le Prophète ﷺ, dernier des envoyés, reçoit l'ordre de démentir explicitement toute prétention à connaître le ghayb par lui-même. Ce qu'il en a su lui a été **communiqué**, non acquis en propre. La distinction entre connaissance propre et connaissance transmise permet d'écarter toute confusion entre la position du Prophète et celle de Dieu Lui-même — confusion que certains courants populaires ont pu introduire, à tort, dans la piété commune.",
      },
      {
        type: "objection",
        objection: "Mais le Coran ne rapporte-t-il pas plusieurs événements futurs annoncés par la révélation, comme la victoire des Romains en 30:2-4 ? N'est-ce pas une connaissance du ghayb ?",
        reponse:
          "Ces annonces relèvent du **ghayb relatif révélé** : Dieu en informe qui Il veut parmi Ses messagers, comme le précise le verset « Il ne dévoile Son mystère à personne, sinon à un messager qu'Il agrée » (72:26-27). Il ne s'agit pas d'un accès autonome et permanent à l'invisible, mais d'une communication ponctuelle et voulue, qui ne remet nullement en cause l'exclusivité de la connaissance totale de Dieu.",
      },
      {
        type: "chronologie",
        title: "Le ghayb dans le parcours d'une vie de foi",
        events: [
          { date: "Avant la révélation", label: "Interrogation naturelle", note: "L'homme pressent des limites à son savoir sans les nommer précisément." },
          { date: "Réception du texte révélé", label: "Nomination du ghayb", note: "Le Coran distingue explicitement ce qui est su, ce qui est révélé, ce qui reste caché." },
          { date: "Vie quotidienne", label: "Pratique de l'humilité épistémique", note: "Le croyant agit sans exiger de certitude totale sur chaque issue." },
          { date: "Au-delà", label: "Levée partielle du voile", note: "Une partie du ghayb devient ʿayn al-yaqīn, sans jamais égaler la science divine." },
        ],
        caption: "L'acceptation du ghayb n'est pas statique : elle se vit et se module au fil du temps et des états du cœur.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une humilité qui n'interdit pas la recherche",
        text: "Reconnaître l'existence d'un ghayb absolu n'invite en rien à cesser de chercher, d'observer, de raisonner sur le monde accessible. Le Coran encourage constamment l'examen de la création (**siyāḥa**, **tafakkur**). L'humilité épistémique porte sur les frontières précises que la Révélation désigne, non sur un renoncement général à la connaissance.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Ne pas tout savoir n'est donc pas une défaillance à corriger, ni une frustration à masquer, mais l'expression cohérente de notre condition de créature placée devant une épreuve véritable. **Le ghayb absolu appartient à Dieu seul** ; en accepter les frontières avec sérénité, sans anxiété ni prétention illégitime, constitue l'un des traits les plus stables de la foi mûre.\n\nCette humilité devant l'inconnaissable trouve un prolongement naturel dans l'étude de certains concepts abstraits de la pensée pure — l'infini, la possibilité, la nécessité — que le prochain article aborde, et qui montrent que même dans le champ accessible à la raison, la rigueur exige souvent de tracer soigneusement ses propres limites.",
      },
    ],
  },

  {
    slug: slugifySujet("Quelques concepts liés à la pensée pure"),
    title: "Quelques concepts liés à la pensée pure",
    arabic: "مصطلحات المنطق والنظر",
    intro:
      "Les traités de théologie musulmane classique (**ʿaqīda**, **kalām**) ouvrent souvent par un chapitre de logique élémentaire, avant même d'aborder l'existence de Dieu. Ce n'est pas un détour érudit : sans un vocabulaire précis pour distinguer ce qui est **nécessaire**, **possible** et **impossible**, on ne peut ni démontrer l'existence du Créateur, ni comprendre pourquoi certaines objections contre la foi reposent en réalité sur une confusion de catégories logiques.\n\nCet article présente les outils conceptuels de base de cette « pensée pure » — wujūb, jawāz, imtināʿ — puis leur application aux preuves classiques de l'existence de Dieu, avant de clore ce chapitre sur les facultés de connaissance.",
    body: [
      { type: "h2", text: "Trois catégories pour tout ce qui peut être pensé" },
      {
        type: "p",
        text: "Les théologiens ashʿarites distinguent trois statuts logiques exhaustifs, applicables à toute chose que l'esprit peut concevoir : ce dont l'existence est **nécessaire** (wājib), ce dont l'existence est **possible** (jāʾiz ou mumkin), et ce dont l'existence est **impossible** (mustaḥīl). Cette tripartition, apparemment scolaire, est en réalité l'instrument principal qui permet de démontrer l'existence de Dieu et Son unicité.",
      },
      {
        type: "lexique",
        root: "و ج ب",
        transliteration: "w-j-b",
        sense: "Être nécessaire, s'imposer inévitablement à l'esprit comme ne pouvant pas ne pas être.",
        derives: [
          { word: "wājib al-wujūd", arabic: "وَاجِبُ ٱلْوُجُود", gloss: "Celui dont l'existence est nécessaire par soi — désigne exclusivement Dieu." },
          { word: "wājib", arabic: "وَاجِب", gloss: "Obligatoire, dans le vocabulaire du droit ; nécessaire, dans le vocabulaire logique." },
        ],
      },
      {
        type: "degres",
        title: "Les trois statuts logiques",
        arabic: "الأحكام العقلية الثلاثة",
        degres: [
          { label: "Wājib — Nécessaire", arabic: "واجب", note: "Ce dont l'esprit ne peut concevoir l'inexistence sans contradiction. Ex. : l'existence de Dieu, une fois établie comme Être par Soi." },
          { label: "Jāʾiz / Mumkin — Possible", arabic: "جائز / ممكن", note: "Ce dont l'esprit peut concevoir aussi bien l'existence que l'inexistence, sans contradiction ni dans un sens ni dans l'autre. Ex. : toute chose créée." },
          { label: "Mustaḥīl — Impossible", arabic: "مستحيل", note: "Ce dont l'esprit ne peut concevoir l'existence sans contradiction. Ex. : un cercle carré, un associé égal à Dieu." },
        ],
        caption: "Ces trois catégories sont exhaustives et mutuellement exclusives : toute chose pensable appartient nécessairement à l'une d'elles, et à une seule.",
      },
      {
        type: "schema",
        title: "La carte des trois statuts logiques",
        variant: "branch",
        nodes: [
          { label: "واجب — Nécessaire", note: "Un seul être répond à ce statut par nature : Dieu, l'Être par Soi." },
          { label: "ممكن — Possible", note: "Toute la création, qui aurait tout aussi bien pu ne pas exister." },
          { label: "مستحيل — Impossible", note: "Ce que la raison exclut absolument, quel que soit le pouvoir invoqué." },
        ],
        caption: "Confondre ces trois catégories est la source de la plupart des objections mal posées contre la théologie islamique.",
      },
      { type: "h2", text: "L'argument de la contingence" },
      {
        type: "p",
        text: "C'est sur cette tripartition que repose l'un des arguments classiques de l'existence de Dieu, dit **argument de la contingence** (dalīl al-imkān). Il s'énonce simplement : tout ce qui est **possible** (mumkin) — c'est-à-dire dont l'existence n'est pas nécessaire par soi-même — a besoin d'une cause extérieure pour exister plutôt que ne pas exister. Or l'univers entier, composé de choses contingentes, ne peut trouver sa cause ultime dans une chaîne infinie de contingents : il faut, au terme de la chaîne causale, un être dont l'existence soit nécessaire par soi, non reçue d'un autre.",
      },
      {
        type: "verse",
        arabic:
          "أَمْ خُلِقُوا۟ مِنْ غَيْرِ شَىْءٍ **أَمْ هُمُ ٱلْخَٰلِقُونَ**",
        translation:
          "Ont-ils été créés à partir de rien, **ou seraient-ils eux-mêmes leurs propres créateurs** ?",
        reference: "Coran, al-Ṭūr, 52:35",
      },
      {
        type: "quote",
        text:
          "قال الطبري رحمه الله في هذه الآية: **إن القوم لا يخلون من ثلاثة أوجه: إما أن يكونوا خلقوا من غير خالق، وهذا محال؛ وإما أن يكونوا خلقوا أنفسهم، وهذا محال أشد استحالة؛ وإما أن يكون لهم خالق خلقهم، وهذا هو الحق الذي لا مندوحة عنه**.\n\nAl-Ṭabarī, qu'Allāh lui fasse miséricorde, a écrit à propos de ce verset : **« Ces gens ne sortent pas de trois hypothèses : ou bien ils ont été créés sans créateur, ce qui est impossible ; ou bien ils se sont créés eux-mêmes, ce qui est plus impossible encore ; ou bien ils ont un Créateur qui les a créés, ce qui est la vérité dont on ne peut se dispenser. »**",
        source: "Al-Ṭabarī, Jāmiʿ al-bayān, commentaire d'al-Ṭūr 52:35",
      },
      {
        type: "focus",
        kind: "repere",
        title: "L'exhaustivité comme force de l'argument",
        text: "La force de ce verset tient à ce qu'il énumère **toutes** les hypothèses logiquement possibles (créé sans cause, auto-créé, créé par un Créateur), en élimine deux par impossibilité logique pure, et ne laisse subsister que la troisième. C'est une démonstration par exhaustion, technique de raisonnement encore employée aujourd'hui en mathématiques.",
      },
      { type: "h2", text: "Une expérience de pensée : la chaîne d'emprunteurs" },
      {
        type: "experiment",
        title: "La chaîne d'emprunteurs",
        steps: [
          "Imagine une personne qui te demande de lui prêter un stylo. Tu lui expliques que tu n'en as pas, mais que tu peux lui en emprunter un à quelqu'un d'autre.",
          "Cette autre personne, elle non plus, n'a pas de stylo en propre : elle doit elle-même l'emprunter à un tiers.",
          "Suppose que cette chaîne d'emprunts se poursuive indéfiniment, sans qu'aucun maillon ne possède jamais réellement de stylo par lui-même.",
          "Demande-toi : à la fin de cette chaîne infinie, un stylo existe-t-il réellement entre les mains de quelqu'un, à un moment donné ?",
          "Il apparaît que si personne, à aucun maillon, ne possède le stylo par soi-même, **aucun maillon ne peut jamais réellement le transmettre à un autre** : la chaîne, aussi longue soit-elle, ne produit jamais l'existence effective de l'objet.",
        ],
        conclusion: "De même, une chaîne infinie de causes contingentes, dont aucune ne détient l'existence par elle-même, ne peut expliquer pourquoi quoi que ce soit existe réellement. Il faut, au fondement, un Être qui possède l'existence par Soi — un **wājib al-wujūd**.",
      },
      { type: "h2", text: "L'argument de la répulsion mutuelle (tamānuʿ)" },
      {
        type: "p",
        text: "La même logique des trois statuts sert un second argument classique, portant cette fois sur l'unicité de Dieu : l'argument dit de **tamānuʿ**, la « répulsion mutuelle » entre deux volontés absolues qui se contrediraient.",
      },
      {
        type: "verse",
        arabic:
          "لَوْ كَانَ فِيهِمَآ ءَالِهَةٌ إِلَّا ٱللَّهُ **لَفَسَدَتَا**",
        translation:
          "S'il y avait, dans les cieux et sur la terre, d'autres divinités qu'Allāh, **ils seraient l'un et l'autre dans le chaos**.",
        reference: "Coran, al-Anbiyāʾ, 21:22",
      },
      {
        type: "quote",
        text:
          "قال البيضاوي رحمه الله: **لو تعدد الآلهة لتصور اختلاف إرادتهم، فإذا أراد أحدهما شيئا وأراد الآخر ضده، فإما أن ينفذا معا وهو جمع بين النقيضين، أو لا ينفذ واحد منهما فيلزم عجزهما، أو ينفذ أحدهما دون الآخر فيلزم عجز الآخر، وكل ذلك ينافي الألوهية**.\n\nAl-Bayḍāwī, qu'Allāh lui fasse miséricorde, a écrit : **« S'il y avait plusieurs divinités, il serait concevable que leurs volontés divergent. Si l'une veut une chose et l'autre son contraire, soit les deux volontés s'accomplissent ensemble — ce qui réunit deux contraires, ce qui est impossible — soit aucune ne s'accomplit, ce qui implique leur incapacité à toutes deux, soit l'une s'accomplit sans l'autre, ce qui implique l'incapacité de celle qui échoue. Or tout cela contredit la divinité elle-même. »**",
        source: "Al-Bayḍāwī, Anwār al-tanzīl, commentaire d'al-Anbiyāʾ 21:22",
      },
      {
        type: "schema",
        title: "L'argument du tamānuʿ",
        variant: "flow",
        nodes: [
          { label: "Hypothèse : deux divinités absolues", note: "Chacune dotée d'une volonté et d'un pouvoir totaux." },
          { label: "Leurs volontés peuvent diverger", note: "Rien n'empêche, par hypothèse, un désaccord entre deux volontés absolues distinctes." },
          { label: "Trois issues, toutes impossibles", note: "Accomplissement simultané des deux contraires ; échec des deux ; ou incapacité de l'une." },
          { label: "Chaque issue nie la divinité de l'une ou l'autre", note: "Aucune divinité authentique ne peut être ainsi limitée ou mise en échec." },
          { label: "Conclusion : l'unicité est nécessaire", note: "Une seule Divinité à la puissance et la volonté absolues peut exister sans contradiction." },
        ],
        caption: "Cet argument figure, sous une forme plus développée, chez la plupart des théologiens ashʿarites classiques comme démonstration rationnelle du tawḥīd al-ulūhiyya.",
      },
      {
        type: "objection",
        objection: "Cet argument ne suppose-t-il pas arbitrairement que deux divinités devraient nécessairement entrer en conflit ? Ne pourraient-elles pas simplement toujours vouloir la même chose, en parfaite harmonie ?",
        reponse:
          "Si deux volontés voulaient toujours, sans exception possible, exactement la même chose, on serait fondé à se demander en quoi elles seraient réellement **deux** volontés distinctes plutôt qu'une seule volonté dédoublée sans raison. L'argument ne prétend pas qu'un désaccord se produirait forcément en fait, mais qu'un désaccord reste **logiquement concevable** tant que les deux volontés sont réellement indépendantes et absolues ; or une divinité authentique doit être à l'abri de toute possibilité même conceptuelle d'échec ou de contrainte.",
      },
      { type: "h2", text: "Une mise en garde : la logique au service du texte, non l'inverse" },
      {
        type: "focus",
        kind: "vigilance",
        title: "Un outil, non une fin",
        text: "La tradition ashʿarite a développé ces outils logiques pour **défendre et articuler** les vérités révélées face aux objections, jamais pour leur substituer un système philosophique autonome et déconnecté du Coran et de la Sunna. Ibn Taymiyya, tout en étant critique de certains usages du kalām, reconnaissait lui-même la validité de fond de l'argument de contingence, preuve que l'outil logique bien employé rejoint la démonstration coranique plutôt que de la concurrencer.",
      },
      {
        type: "spectre",
        title: "Usages de la logique en théologie",
        left: "Logique mise au service du texte révélé",
        right: "Logique substituée au texte révélé",
        markers: [
          { label: "Kalām ashʿarite classique", position: 25, note: "Les outils logiques servent à défendre et clarifier des vérités déjà établies par le texte." },
          { label: "Certains excès philosophiques médiévaux", position: 80, note: "Tentation de faire primer une conclusion philosophique sur un texte clair, sans nécessité." },
        ],
        caption: "La juste position théologique se tient fermement du côté gauche du spectre.",
      },
      { type: "h2", text: "Conclusion du chapitre sur les facultés de connaissance" },
      {
        type: "p",
        text: "Ces quelques concepts — nécessaire, possible, impossible — referment ce parcours consacré aux instruments de la connaissance. Nous sommes partis de la distinction entre **ʿilm et maʿrifa**, avons gravi l'échelle des **degrés de certitude**, précisé les rôles respectifs de la **raison et de la Révélation**, reconnu la légitimité des **limites du savoir humain**, et voici enfin les catégories les plus abstraites de la pensée pure, qui permettent de fonder rationnellement l'existence et l'unicité de Dieu sans jamais prétendre épuiser Son mystère.\n\nCe chapitre aura, on l'espère, montré une chose essentielle : en islam, la rigueur intellectuelle et l'humilité devant l'invisible ne sont pas deux exigences contraires, mais **les deux faces d'une même discipline du cœur et de l'esprit**. C'est fort de ces outils que le chapitre suivant pourra aborder, avec plus de précision encore, les questions pédagogiques de l'étude et de la transmission du savoir.",
      },
    ],
  },
];
