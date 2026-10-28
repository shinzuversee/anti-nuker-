import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Série — Fondements de l'interprétation du Coran.
 * Article 1/3 : muḥkam et mutashābih.
 */
export const sujetsInterpretationA1: Sujet[] = [
  {
    slug: "muhkam-and-mutashabih",
    title: "Muḥkam et mutashābih : lire le clair à la lumière de l'ambigu",
    arabic: "المحكم والمتشابه",
    intro:
      "Le Coran lui-même annonce qu'il contient deux catégories de versets : les uns fermement établis, dont le sens est clair et net, les autres susceptibles de plusieurs lectures, dont le sens ne s'impose pas de lui-même. Cette distinction n'est pas un aveu de confusion : c'est une mise en garde et une méthode. Ceux dont le cœur est droit reviennent au clair pour éclairer l'ambigu ; ceux dont le cœur est dévié cherchent l'ambigu pour y semer le trouble.\n\nCe sujet expose la position des salaf sur le verset qui fonde cette distinction, précise ce que recouvre réellement le mutashābih lorsqu'il s'agit des attributs divins, et met en garde contre les détournements de cette catégorie qu'a connus l'histoire de la pensée islamique.",
    body: [
      { type: "h2", text: "Le verset fondateur" },
      {
        type: "verse",
        arabic:
          "هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ **مُّحْكَمَاتٌ** هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ **مُتَشَابِهَاتٌ** ۖ فَأَمَّا الَّذِينَ فِي قُلُوبِهِمْ زَيْغٌ فَيَتَّبِعُونَ مَا تَشَابَهَ مِنْهُ ابْتِغَاءَ الْفِتْنَةِ وَابْتِغَاءَ تَأْوِيلِهِ",
        translation:
          "C'est Lui qui a fait descendre sur toi le Livre : il en est des versets **fermement établis** — ils sont la base du Livre — et d'autres **à plusieurs sens possibles**. Ceux dont les cœurs sont enclins à la déviation en suivent les versets à plusieurs sens, cherchant le trouble et cherchant à en donner une interprétation.",
        reference: "Coran, Āl ʿImrān, 3:7",
      },
      {
        type: "p",
        text: "Ce verset unique contient à lui seul la totalité de la question herméneutique en islam. Il pose d'abord un fait : le Livre comporte deux sortes de textes. Il donne ensuite un critère moral, non pas seulement intellectuel, pour distinguer deux catégories de lecteurs : **ceux dont le cœur est droit et ceux dont le cœur est dévié (zaygh)**. La déviation ne commence donc pas par une erreur de méthode : elle commence par une inclination du cœur qui cherche dans le texte de quoi justifier ce qu'elle veut déjà croire.",
      },
      {
        type: "lexique",
        root: "ح ك م",
        transliteration: "ḥ-k-m",
        sense:
          "Établir fermement, juger, empêcher le désordre. De cette racine viennent **ḥukm** (jugement), **ḥikma** (sagesse) et **muḥkam** (ce qui est solidement établi, sans ambiguïté). Un verset muḥkam est un verset dont le sens est **fixé**, comme une construction achevée que rien ne peut ébranler.",
        derives: [
          { word: "muḥkam", arabic: "مُحْكَم", gloss: "Le verset au sens clair, univoque, qui ne souffre qu'une seule interprétation légitime." },
          { word: "ḥukm", arabic: "حُكْم", gloss: "Le jugement, la règle tranchée ; ce que le muḥkam fournit à la doctrine et à la loi." },
          { word: "ḥikma", arabic: "حِكْمَة", gloss: "La sagesse qui préside à l'agencement du Livre, mêlant le clair et l'ambigu pour éprouver les cœurs." },
          { word: "iḥkām", arabic: "إِحْكَام", gloss: "L'action de rendre ferme, solide ; le Livre tout entier est dit muḥkam en un sens plus large, celui de sa perfection." },
        ],
        note: "**كِتَابٌ أُحْكِمَتْ آيَاتُهُ** — « Un Livre dont les versets sont rendus fermes » (Hūd, 11:1) : au sens large, tout le Coran est muḥkam par sa perfection ; au sens restreint du verset 3:7, seule une partie l'est par la clarté univoque de son sens.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Deux sens du mot muḥkam",
        text: "Il faut distinguer le sens **général** (tout le Coran est parfaitement établi, sans contradiction ni défaut) et le sens **restreint** du verset 3:7 (une partie des versets a un sens univoque, une autre partie se prête à plusieurs lectures possibles). C'est ce second sens qui organise toute la discussion de cet article.",
      },
      { type: "h2", text: "Qu'est-ce qui rend un verset mutashābih ?" },
      {
        type: "p",
        text: "Le mot **mutashābih** vient de la racine **sh-b-h**, qui indique la ressemblance : une chose est mutashābiha lorsqu'elle ressemble à une autre au point qu'on hésite à les distinguer. Appliqué aux versets, cela désigne des textes dont le sens n'apparaît pas immédiatement à l'esprit, soit parce que leur formulation admet plusieurs significations grammaticalement possibles, soit — pour un ensemble de versets bien précis — parce qu'ils portent sur une réalité que l'esprit humain ne peut se représenter, à savoir la modalité (**kayfiyya**) des attributs divins.",
      },
      {
        type: "degres",
        title: "Les trois degrés du mutashābih selon Ibn Taymiyya",
        arabic: "درجات التشابه",
        degres: [
          { label: "Mutashābih relatif et résoluble", arabic: "متشابه نسبي", note: "Un verset paraît ambigu à un lecteur peu instruit, mais son sens se découvre par la comparaison avec d'autres versets, par la langue arabe ou par le contexte de révélation." },
          { label: "Mutashābih portant sur le détail des événements futurs", note: "Les circonstances précises de la Résurrection, la nature exacte du Paradis : le principe est connu, le détail échappe à l'imagination." },
          { label: "Mutashābih des attributs divins", arabic: "متشابه الصفات", note: "Le sens général du mot (la Main, le Visage, l'Établissement) est connu en langue arabe ; ce qui demeure inaccessible n'est jamais le sens, mais la modalité (kayf) de la réalité désignée." },
        ],
        direction: "asc",
        caption: "Seul le troisième degré concerne la doctrine des Noms et Attributs ; les deux premiers relèvent de l'exégèse ordinaire.",
      },
      {
        type: "quote",
        text:
          "قال ابن تيمية رحمه الله: **والمتشابه من آيات الصفات ليس هو المعنى، بل الكيفية**، فإن معاني هذه الآيات معلومة في اللغة، **وأما كيفية اتصاف الرب تعالى بها فهو المتشابه** الذي لا يعلمه إلا الله.\n\nIbn Taymiyya, qu'Allāh lui fasse miséricorde, a dit : **ce qui est mutashābih dans les versets des attributs, ce n'est pas le sens, mais la modalité**. Les significations de ces versets sont connues en langue ; **quant à la modalité selon laquelle le Seigneur, Exalté soit-Il, est qualifié par ces attributs, voilà ce qui est mutashābih**, que nul ne connaît excepté Allāh.",
        source: "Ibn Taymiyya, Majmūʿ al-fatāwā",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Ne pas confondre ignorance du sens et ignorance du comment",
        text: "C'est ici le point le plus délicat de toute la question : quand les salaf disent que le mutashābih des attributs est connu de Dieu seul, ils ne parlent jamais du **sens des mots** — que tout arabophone comprend — mais de **la réalité concrète** que ce sens désigne chez Allāh. Confondre les deux ouvre la porte soit au taʿṭīl (nier le sens sous prétexte d'ignorer le comment), soit au tashbīh (imaginer le comment sous prétexte de connaître le sens).",
      },
      { type: "h2", text: "L'arrêt sur le verset : où placer la pause de lecture ?" },
      {
        type: "p",
        text: "Le verset 3:7 contient une célèbre difficulté grammaticale, qui a donné lieu à deux lectures possibles selon l'endroit où l'on place la pause (**waqf**) : « Nul n'en connaît l'interprétation excepté Allāh — et ceux qui sont enracinés dans la science disent : nous y croyons » ; ou bien : « Nul n'en connaît l'interprétation excepté Allāh et ceux qui sont enracinés dans la science, qui disent : nous y croyons ». La différence n'est pas anodine : elle a été exploitée par certains courants pour prétendre que les savants possèdent la clé du taʾwīl des attributs, ce que rejette fermement la position des salaf.",
      },
      {
        type: "comparaison",
        title: "Deux lectures du même verset, deux conséquences doctrinales",
        columns: ["Lecture avec pause après « Allāh »", "Lecture sans pause"],
        rows: [
          { criterion: "Qui connaît le taʾwīl ?", cells: ["Allāh seul", "Allāh et les savants enracinés dans la science"] },
          { criterion: "Position des salaf majoritaires", cells: ["Retenue par Ibn ʿAbbās, al-Ṭabarī et la majorité pour le taʾwīl au sens de « réalité ultime, modalité »", "Retenue pour le taʾwīl au sens d'« explication, tafsīr » — les savants comprennent le sens des mots"] },
          { criterion: "Risque en cas de confusion des deux sens du mot taʾwīl", cells: ["Aucun, si l'on précise de quel taʾwīl il s'agit", "Prétention à connaître la modalité des attributs, ce que rejettent unanimement les salaf"] },
          { criterion: "Conclusion retenue", cells: ["Les deux lectures sont valables selon le sens donné au mot taʾwīl", "Aucune ne permet de prétendre percer le comment des attributs"] },
        ],
        caption: "Ibn Taymiyya résout l'apparente contradiction en distinguant deux sens du mot taʾwīl, question développée dans l'article suivant de cette série.",
      },
      { type: "h2", text: "La voie du cœur droit et la voie du cœur dévié" },
      {
        type: "spectre",
        title: "Deux usages opposés du mutashābih",
        left: "Le cœur droit : soumission et retour au muḥkam",
        right: "Le cœur dévié : instrumentalisation en vue de la fitna",
        markers: [
          { label: "Salaf (Ibn ʿAbbās, Mālik)", position: 8, note: "Reçoivent le mutashābih avec foi, le rapportent au muḥkam, s'abstiennent de décrire le comment." },
          { label: "Ashʿarites tardifs", position: 45, note: "Recourent au taʾwīl rationnel des attributs, prétendant réconcilier le mutashābih avec la raison philosophique." },
          { label: "Muʿtazila", position: 65, note: "Nient le sens même des attributs au nom d'une lecture jugée trop littérale de la transcendance." },
          { label: "Bāṭinites et sectes ésotéristes", position: 95, note: "Utilisent le mutashābih pour vider tout le Coran de son sens apparent et y substituer des significations cachées arbitraires." },
        ],
        caption: "Le verset 3:7 avait précisément pour fonction d'annoncer et de disqualifier d'avance cette dérive croissante.",
      },
      {
        type: "objection",
        objection:
          "Si le mutashābih est par nature difficile à comprendre, n'est-il pas légitime que chaque école en propose sa propre interprétation rationnelle, comme l'a fait le kalām ashʿarite pour les attributs ?",
        reponse:
          "Cette objection confond deux choses : le mutashābih **relatif**, qui se résout par la science des textes et de la langue, et le mutashābih **des attributs**, qui ne porte jamais sur le sens des mots mais sur leur modalité. Le kalām ashʿarite ne s'est pas contenté d'expliquer le sens des mots (ce que fait légitimement le tafsīr) : il a prétendu trancher, par la raison seule, ce que la modalité des attributs devait ou ne devait pas être, allant jusqu'à nier certains attributs authentiquement rapportés (comme la Main ou la Face) sous prétexte qu'ils semblaient impliquer une ressemblance avec le créé.",
        suite:
          "Ibn Taymiyya répond que cette démarche renverse la méthode du verset 3:7 : au lieu de faire du muḥkam (le principe **rien ne Lui ressemble**) la clé qui protège le sens du mutashābih, elle fait de la raison spéculative le juge qui décide quels attributs peuvent être maintenus et lesquels doivent être réinterprétés — exactement la voie de « ceux dont les cœurs sont enclins à la déviation ».",
      },
      { type: "h2", text: "Le rôle protecteur du muḥkam" },
      {
        type: "p",
        text: "La méthode des salaf ne consiste jamais à isoler un verset mutashābih pour le juger seul. Elle consiste à le **rapporter systématiquement au muḥkam**, c'est-à-dire aux versets clairs qui posent les principes fondamentaux de la doctrine, au premier rang desquels le verset 42:11 : **« Rien ne Lui ressemble ; et Il est Celui qui entend, Celui qui voit »**. Ce verset muḥkam devient la clé de lecture de tous les versets mutashābih relatifs aux attributs : il interdit la ressemblance sans jamais interdire l'affirmation du sens.",
      },
      {
        type: "cycle",
        title: "La méthode salafie de lecture du mutashābih",
        arabic: "منهج السلف في التعامل مع المتشابه",
        steps: [
          { label: "Réception", arabic: "التلقي", note: "On reçoit le texte tel qu'il est, sans le rejeter ni le déformer par avance." },
          { label: "Confrontation au muḥkam", arabic: "الرد إلى المحكم", note: "On vérifie sa cohérence avec les principes fermement établis, notamment 42:11." },
          { label: "Affirmation du sens", arabic: "إثبات المعنى", note: "On affirme ce que le mot signifie en langue arabe, sans le nier ni le détourner." },
          { label: "Suspension du comment", arabic: "تفويض الكيف", note: "On s'abstient de décrire ou d'imaginer la modalité de la réalité désignée." },
          { label: "Foi et soumission", arabic: "الإيمان والتسليم", note: "On clôt la démarche par la foi, sans laisser l'esprit chercher plus loin que ce qui lui a été donné." },
        ],
        caption: "Ce cycle, répété devant chaque verset mutashābih, immunise contre le taʿṭīl comme contre le tashbīh.",
      },
      {
        type: "verse",
        arabic: "وَالرَّاسِخُونَ فِي الْعِلْمِ يَقُولُونَ **آمَنَّا بِهِ كُلٌّ مِّنْ عِندِ رَبِّنَا**",
        translation: "Et ceux qui sont enracinés dans la science disent : **« Nous y croyons, tout vient de notre Seigneur. »**",
        reference: "Coran, Āl ʿImrān, 3:7",
      },
      {
        type: "p",
        text: "Cette dernière partie du verset est essentielle : elle montre que la science véritable ne débouche pas sur une prétention à percer le mystère, mais sur une **soumission éclairée**. Le savant enraciné dans la science n'est pas celui qui prétend avoir résolu l'énigme du mutashābih par un raisonnement : c'est celui qui reconnaît la sagesse de sa présence et s'y soumet sans chercher à forcer une porte qui ne lui a pas été ouverte.",
      },
      { type: "h2", text: "Ce que l'histoire a fait de cette catégorie" },
      {
        type: "chronologie",
        title: "Le mutashābih à travers les controverses théologiques",
        events: [
          { date: "Époque des Compagnons", label: "Réception sans discussion", note: "Ibn ʿAbbās et les Compagnons appliquent 3:7 aux attributs comme aux prophéties eschatologiques, sans chercher à rationaliser le comment." },
          { date: "IIᵉ-IIIᵉ siècle hégirien", label: "Naissance du kalām", note: "Les muʿtazilites commencent à utiliser des arguments rationnels pour réinterpréter (taʾwīl) les versets jugés anthropomorphiques." },
          { date: "IVᵉ-Vᵉ siècle hégirien", label: "Systématisation ashʿarite", note: "Une partie de l'école ashʿarite reprend certains outils du kalām pour le taʾwīl de versets comme ceux de la Main ou du Rire d'Allāh." },
          { date: "VIIIᵉ siècle hégirien", label: "Réponse d'Ibn Taymiyya", note: "La Muqaddima fī uṣūl al-tafsīr et le Majmūʿ al-fatāwā restaurent systématiquement la méthode des salaf face aux dérives du kalām." },
          { date: "Époque contemporaine", label: "Reprise par les savants salafis", note: "Ibn Bāz, Ibn ʿUthaymīn et al-Fawzān réexposent cette méthode dans leurs commentaires de ʿaqīda pour les générations actuelles." },
        ],
        caption: "La catégorie du mutashābih n'a cessé d'être au centre des débats sur la manière correcte de lire les textes des attributs.",
      },
      {
        type: "quote",
        text:
          "قال ابن القيم رحمه الله: **من ظن أن آيات الصفات من المتشابه الذي لا يفهم معناه فقد أعظم الفرية على القرآن**، فإن الله أنزله بلسان عربي مبين ليفهم، **وإنما المتشابه فيها هو الكيفية لا المعنى**.\n\nIbn al-Qayyim, qu'Allāh lui fasse miséricorde, a dit : **quiconque pense que les versets des attributs relèvent du mutashābih dont le sens ne peut être compris a commis une grave calomnie contre le Coran**, car Allāh l'a fait descendre en langue arabe claire afin qu'il soit compris ; **le mutashābih qui s'y trouve concerne la modalité, non le sens**.",
        source: "Ibn al-Qayyim, aṣ-Ṣawāʿiq al-mursala (sens rapporté)",
      },
      { type: "h2", text: "Le muḥkam et le mutashābih dans la pratique de l'exégèse" },
      {
        type: "p",
        text: "Au-delà de la question des attributs, la distinction muḥkam/mutashābih structure tout l'exercice du tafsīr. Un exégète prudent commence toujours par chercher si un verset difficile trouve son éclaircissement ailleurs dans le Coran, puis dans la Sunna, puis dans les explications rapportées des Compagnons, avant de recourir à son propre raisonnement. C'est la hiérarchie même que rappelle Ibn Kathīr en tête de son tafsīr : **le Coran s'explique par le Coran**, puis par la Sunna, puis par les paroles des Compagnons.",
      },
      {
        type: "schema",
        title: "La hiérarchie des sources pour éclairer un verset mutashābih",
        variant: "flow",
        nodes: [
          { label: "Le Coran par le Coran", arabic: "القرآن بالقرآن", note: "On cherche d'abord un autre verset qui précise ou complète le sens." },
          { label: "Le Coran par la Sunna", arabic: "القرآن بالسنة", note: "Le Prophète ﷺ est le premier interprète autorisé du Livre qui lui fut révélé." },
          { label: "Le Coran par les paroles des Compagnons", arabic: "أقوال الصحابة", note: "Ils ont assisté à la révélation et en connaissent les circonstances et les intentions." },
          { label: "Le Coran par la langue arabe", arabic: "لغة العرب", note: "À défaut de texte transmis, on recourt aux usages de la langue dans laquelle le Coran fut révélé." },
        ],
        caption: "Cette hiérarchie, exposée par Ibn Kathīr d'après Ibn Taymiyya, évite de faire de la raison individuelle le premier juge du sens.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le danger de l'excès inverse",
        text: "Il serait également fautif de traiter tout verset difficile comme s'il relevait du mutashābih des attributs, en s'abstenant par prudence excessive de chercher son sens. La grande majorité des versets qualifiés d'ambigus par un lecteur pressé se résolvent en réalité aisément par la comparaison avec d'autres passages du Coran : **le mutashābih véritablement irréductible ne concerne qu'un nombre limité de questions**, principalement la modalité des attributs et le détail de l'Au-delà.",
      },
      { type: "h2", text: "Application concrète : le cas de l'Istiwāʾ" },
      {
        type: "p",
        text: "Prenons l'exemple du verset : « Le Tout-Miséricordieux S'est établi sur le Trône » (20:5). Le **sens** du mot istiwāʾ est parfaitement connu en langue arabe : il signifie s'élever, s'installer avec fermeté et domination sur quelque chose. Ce sens fait partie du muḥkam, du connu. Ce qui demeure inconnu, ce n'est pas ce que signifie le mot, mais **comment** cette réalité se réalise concrètement pour Allāh, puisqu'aucune expérience humaine ne peut fournir de modèle à cette modalité. C'est précisément la réponse que fit l'imām Mālik à la question qu'on lui posa sur ce verset, et que reprend toute la tradition salafie après lui.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الشافعي رحمه الله فيما يُنسب إليه في هذا الباب: **آمنت بالله وبما جاء عن الله على مراد الله، وآمنت برسول الله وبما جاء عن رسول الله على مراد رسول الله**.\n\nL'imām al-Shāfiʿī, qu'Allāh lui fasse miséricorde, a dit dans ce domaine : **« Je crois en Allāh et en ce qui est venu d'Allāh selon l'intention d'Allāh, et je crois au Messager d'Allāh et en ce qui est venu du Messager d'Allāh selon l'intention du Messager d'Allāh. »**",
        source: "Rapporté d'après l'imām al-Shāfiʿī",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La distinction entre muḥkam et mutashābih n'est ni un aveu d'obscurité dans le Livre d'Allāh, ni une invitation à spéculer librement sur ce qui échappe à la raison. C'est une **discipline de lecture** qui commande de rapporter sans cesse l'ambigu au clair, d'affirmer le sens des mots sans jamais prétendre en percer la modalité, et de reconnaître dans cette limite même une sagesse divine qui distingue le cœur soumis du cœur en quête de trouble.",
      },
      {
        type: "p",
        text: "Comme l'ont enseigné les salaf, **le sens des versets des attributs n'est jamais l'objet de l'ignorance** : seule la modalité de la réalité qu'ils désignent l'est. Retenir cette distinction, c'est se prémunir à la fois contre la négation qui vide le texte de son contenu et contre l'anthropomorphisme qui le charge d'images étrangères à la transcendance divine. C'est là, très exactement, la voie médiane que le verset 3:7 trace entre deux égarements, et que les articles suivants de cette série approfondiront à travers l'étude du tafsīr et du taʾwīl.",
      },
    ],
  },
];
