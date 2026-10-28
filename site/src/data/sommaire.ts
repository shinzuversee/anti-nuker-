export type IndexEntry = {
  title: string;
  slug?: string;
  note?: string;
  arabic?: string;
};

export type IndexGroup = {
  label: string;
  entries: IndexEntry[];
};

export type IndexChapter = {
  id: string;
  numeral: string;
  title: string;
  arabic: string;
  summary: string;
  groups: IndexGroup[];
};

export const sommaire: IndexChapter[] = [
  {
    id: "dieu",
    numeral: "I",
    title: "Connaissez-vous Dieu ?",
    arabic: "الله ربنا تبارك وتعالى",
    summary:
      "Ce que la Révélation affirme de Dieu, ce que la raison en atteint, et ce qu'il faut se garder d'ajouter. Le point de départ de tout le reste.",
    groups: [
      {
        label: "a — Généralités au sujet de Dieu",
        entries: [
          { title: "« Allāh » est le nom, en arabe, de Celui qui crée toute chose", arabic: "الله" },
          { title: "Croire en Dieu est naturel à l'homme", arabic: "الفطرة" },
          { title: "Si la foi est rationnelle, pourquoi tant de savants n'y adhèrent-ils pas ?" },
          { title: "Dieu regarde-t-Il l'homme, si petit dans l'immensité du cosmos ?" },
          { title: "Allāh est-il « un dieu des Arabes » ?" },
          { title: "Peut-on voir Dieu de ces yeux-ci ?", arabic: "الرؤية" },
          { title: "Dieu était, et rien n'était avec Lui : le temps commence-t-il avec la création ?" },
          { title: "Nul n'a la garantie de mourir croyant : la notion de muwāfāt", arabic: "الموافاة" },
          { title: "L'amour de Dieu : ce qui l'attire, ce qui l'éloigne" },
          { title: "Une objection : un Dieu qui châtie l'incroyance est-il juste ?" },
        ],
      },
      {
        label: "b — Les qualificatifs divins",
        entries: [
          {
            title: "Le langage des attributs divins",
            slug: "divine-attributes-language",
            arabic: "الصفات",
          },
          { title: "Affirmer sans comparer : le verset qui gouverne la question", arabic: "ليس كمثله شيء" },
          { title: "Dieu sait tout, entend tout, voit tout, et a pouvoir sur toute chose" },
          { title: "La parole divine : ce qui est affirmé et ce qui ne l'est pas", arabic: "كلام الله" },
          { title: "« Dieu est en haut » : hauteur, séparation, infinité" },
          { title: "« Dieu est avec vous » et « Je suis proche » : concilier les registres" },
          { title: "Ce que l'on remet à Dieu : le sens des termes, ou la réalité qu'ils désignent ?", arabic: "التفويض" },
          { title: "Ta'wīl : là où elle s'impose, là où elle ne s'étend pas", arabic: "التأويل" },
          { title: "Une classification des attributs : essentiels, actifs, personnels" },
          { title: "Attributs de beauté et attributs de rigueur", arabic: "الجمال والجلال" },
          { title: "Peut-on employer pour d'autres que Lui les termes qui Le qualifient ?" },
          { title: "« Afin que Nous sachions » : Dieu ignorerait-Il l'avenir ?", arabic: "لنعلم" },
        ],
      },
      {
        label: "c — Les noms divins",
        entries: [
          { title: "Un nom, quatre-vingt-dix-neuf, ou davantage ?", arabic: "أسماء الله الحسنى" },
          { title: "Extraire un nom à partir d'un verbe coranique : les conditions" },
          { title: "Al-Raḥmān et al-Raḥīm : deux miséricordes, deux portées" },
          { title: "Al-Ḥakīm : la sagesse comme mise en ordre" },
          { title: "Al-Ṣamad, ou l'autosuffisance : commentaire de sourate al-Ikhlāṣ" },
          { title: "Invoquer Dieu par Ses noms : ce qui est rapporté et ce qui est inventé" },
        ],
      },
      {
        label: "d — Le décret divin",
        entries: [
          { title: "Le décret et la responsabilité humaine", arabic: "القدر" },
          { title: "Les quatre degrés de la foi au qadar" },
          { title: "L'invocation change-t-elle ce qui est écrit ?" },
          { title: "De la justice divine et de la souffrance humaine" },
          { title: "Le mal existe-t-il en soi, ou seulement comme privation ?" },
          { title: "Ce que « Dieu égare qui Il veut » signifie, et ne signifie pas" },
          { title: "Agir alors que tout est su : le paradoxe dissous" },
        ],
      },
      {
        label: "e — Reconnaître Dieu comme unique objet d'adoration",
        entries: [
          { title: "Reconnaître Dieu comme unique divinité", arabic: "توحيد الألوهية" },
          { title: "Ce qu'est réellement le shirk, et ses degrés", arabic: "الشرك" },
          { title: "L'intercession : les versets qui la limitent, ceux qui l'affirment", arabic: "الشفاعة" },
          { title: "Le recours aux causes n'est pas une atteinte à l'unicité", arabic: "الأسباب" },
          { title: "Amulettes, superstitions et lecture des signes" },
          { title: "Le concept même de culte : ce que « ʿibāda » recouvre", arabic: "العبادة" },
        ],
      },
    ],
  },
  {
    id: "spiritualite",
    numeral: "II",
    title: "Spiritualité et actions du cœur",
    arabic: "الروحانية وأعمال القلب",
    summary:
      "La part intérieure de la religion : ce qui se travaille sans témoin, et sans quoi les actes extérieurs perdent leur sens.",
    groups: [
      {
        label: "a — Généralités",
        entries: [
          { title: "Ce que la tradition appelle tazkiya, et ce qu'elle n'appelle pas ainsi", arabic: "التزكية" },
          { title: "Le cœur comme organe de connaissance", arabic: "القلب" },
          { title: "La progression intérieure suit-elle une ligne droite ?" },
          { title: "Les états passagers et les stations acquises" },
        ],
      },
      {
        label: "b — Évoquer Dieu",
        entries: [
          { title: "Le dhikr : formules rapportées et innovations", arabic: "الذكر" },
          { title: "La prière surérogatoire comme discipline du temps" },
          { title: "Lire lentement, délibérément" },
          { title: "Le silence comme exercice", arabic: "الصمت" },
        ],
      },
      {
        label: "c — L'intention",
        entries: [
          { title: "L'intention, et la part qui doit en être consciente", arabic: "النية" },
          { title: "Divergences d'intention pour un même acte" },
          { title: "La sincérité, et le peu qu'on en peut vérifier du dehors", arabic: "الإخلاص" },
          { title: "L'ostentation discrète et ses formes contemporaines", arabic: "الرياء" },
        ],
      },
      {
        label: "d — Autres actions du cœur",
        entries: [
          { title: "La gratitude comme forme d'attention", arabic: "الشكر" },
          { title: "Le ṣabr n'est pas la passivité", slug: "patience-and-providence", arabic: "الصبر" },
          { title: "La confiance en Dieu et le travail des moyens", arabic: "التوكل" },
          { title: "Espérance et crainte : la juste tension", arabic: "الرجاء والخوف" },
          { title: "Le repentir comme retour, non comme comptabilité", arabic: "التوبة" },
          { title: "L'envie, l'orgueil, la rancune : diagnostic et traitement" },
        ],
      },
    ],
  },
  {
    id: "pedagogie",
    numeral: "III",
    title: "Pédagogie, raison et transmission",
    arabic: "التربية والتعليم",
    summary:
      "Comment on apprend, comment on enseigne, et comment on sait ce que l'on croit savoir.",
    groups: [
      {
        label: "a — Les facultés de connaissance",
        entries: [
          { title: "ʿIlm et maʿrifa : deux manières de connaître", arabic: "العلم والمعرفة" },
          { title: "À quel degré de certitude savons-nous ce que nous savons ?", arabic: "درجات اليقين" },
          { title: "Raisonner avec son cœur, et la place de la Révélation", arabic: "العقل والسمع" },
          { title: "Ce que nous ne pouvons pas savoir, et pourquoi c'est acceptable" },
          { title: "Quelques concepts liés à la pensée pure" },
        ],
      },
      {
        label: "b — Étudier et enseigner",
        entries: [
          { title: "Garder une question ouverte pendant des années" },
          { title: "Que faire d'une réponse qui déplaît" },
          { title: "Choisir un maître, choisir un livre" },
          { title: "Enseigner à des débutants sans simplifier abusivement" },
          { title: "Mémoriser, comprendre, appliquer : dans quel ordre ?" },
          { title: "Les erreurs pédagogiques les plus répandues aujourd'hui" },
        ],
      },
    ],
  },
  {
    id: "usul-tafsir",
    numeral: "IV",
    title: "Les fondements de l'interprétation",
    arabic: "أصول التفسير",
    summary:
      "Les principes à établir avant même de lire un seul verset : ce qu'est le texte, ce que l'interprétation a le droit de faire, et où s'arrêtent ses limites.",
    groups: [
      {
        label: "a — Ce qu'est l'interprétation, et ce qu'elle n'est pas",
        entries: [
          {
            title: "Muḥkam et mutashābih : lire le clair à la lumière de l'ambigu",
            slug: "muhkam-and-mutashabih",
            arabic: "المحكم والمتشابه",
          },
          {
            title: "Tafsīr et taʾwīl : deux mots, deux prétentions différentes",
            note: "Pourquoi les premiers savants les employaient indifféremment et les suivants non.",
          },
          {
            title: "La différence entre expliquer un verset et appliquer un verset",
            note: "L'application découle du sens ; confondre les deux produit l'essentiel des confusions contemporaines.",
          },
          {
            title: "Interpréter le Coran par le Coran",
            arabic: "تفسير القرآن بالقرآن",
            note: "La première méthode, la moins contestée — et ses pièges discrets.",
          },
          { title: "Quand le silence est le bon résultat interprétatif", arabic: "التوقف" },
          { title: "L'exégèse par l'opinion : blâmée en un sens, requise en un autre", arabic: "التفسير بالرأي" },
        ],
      },
      {
        label: "b — Règles à connaître avant de commenter un verset",
        entries: [
          {
            title: "La portée générale du terme prime sur la particularité de la cause",
            arabic: "العبرة بعموم اللفظ لا بخصوص السبب",
          },
          { title: "Le général et ce qui le restreint légitimement", arabic: "العام والخاص" },
          { title: "L'absolu et le conditionné", arabic: "المطلق والمقيد" },
          { title: "L'énoncé explicite et l'implication", arabic: "المنطوق والمفهوم" },
          { title: "Le sommaire et son explicitation", arabic: "المجمل والمبين" },
          { title: "Lire un verset à la lumière de tout le Livre avant toute la tradition" },
        ],
      },
      {
        label: "c — Les sources et leur poids",
        entries: [
          { title: "Quel poids accorder à l'exégèse d'un Compagnon ?" },
          { title: "Les récits des Gens du Livre dans les ouvrages de tafsīr", arabic: "الإسرائيليات" },
          { title: "Lire al-Ṭabarī : quelle était réellement sa méthode" },
          { title: "Al-Rāzī, al-Zamakhsharī, Ibn ʿĀshūr : trois tempéraments" },
          {
            title: "Commencer le tafsīr : une bibliographie",
            note: "Par où débuter, dans quel ordre, et ce qu'il vaut mieux remettre à plus tard.",
          },
        ],
      },
    ],
  },
  {
    id: "langue",
    numeral: "V",
    title: "La parole et la langue arabe",
    arabic: "اللسان العربي",
    summary:
      "La grammaire et la rhétorique ne sont pas ici des ornements. Bien des lectures disputées se dissolvent — ou se précisent — dès que la question linguistique est correctement posée.",
    groups: [
      {
        label: "a — Les mots et leurs champs",
        entries: [
          { title: "Sens propre et sens figuré", arabic: "الحقيقة والمجاز" },
          { title: "Ces quasi-synonymes qui n'en sont pas" },
          { title: "Termes et formules récurrents : un glossaire de travail" },
          { title: "Ẓulm : mettre une chose ailleurs qu'à sa place", arabic: "الظلم" },
          { title: "Adhā et ḍarar : deux registres du préjudice", arabic: "الأذى والضرر" },
          { title: "Kufr, fisq, ẓulm : trois termes et leurs degrés" },
          { title: "Ḥaqq : droit, vérité, dû" },
        ],
      },
      {
        label: "b — Particules, structures, emphase",
        entries: [
          { title: "Le lau conditionnel et ce qu'il nie", arabic: "لو الامتناعية" },
          { title: "Les structures de serment et leur fonction rhétorique", arabic: "القسم" },
          { title: "Les changements de personne en cours de verset", arabic: "الالتفات" },
          { title: "La répétition comme argument, non comme redondance" },
          { title: "Les fins de versets et la logique des formules de clôture", arabic: "فواصل الآيات" },
          { title: "L'ellipse et ce qu'elle laisse au lecteur", arabic: "الحذف" },
          { title: "La mise en avant et le report d'un terme", arabic: "التقديم والتأخير" },
        ],
      },
      {
        label: "c — La parole humaine",
        entries: [
          { title: "De la parole rare" },
          { title: "Le mensonge, l'ambiguïté et la réserve permise", arabic: "المعاريض" },
          { title: "Traduire : ce qui se perd nécessairement" },
          { title: "Débattre sans chercher à vaincre", arabic: "الجدال" },
        ],
      },
    ],
  },
  {
    id: "coran",
    numeral: "VI",
    title: "Les sciences du Coran",
    arabic: "علوم القرآن",
    summary:
      "Transmission, ordonnancement, lectures variantes et questions historiques : soulevées d'ordinaire comme objections, elles constituent en réalité l'objet même de la tradition.",
    groups: [
      {
        label: "a — Généralités",
        entries: [
          { title: "Ce que le Coran dit de lui-même" },
          { title: "L'inimitabilité : de quoi parle-t-on exactement ?", arabic: "الإعجاز" },
          { title: "Les modalités de la révélation", arabic: "الوحي" },
          { title: "Pourquoi le Coran n'est pas ordonné chronologiquement" },
        ],
      },
      {
        label: "b — Transmission et texte",
        entries: [
          {
            title: "Les sept aḥruf et les dix qirāʾāt",
            slug: "seven-modes-recitation",
            arabic: "الأحرف السبعة",
          },
          { title: "La préservation du texte : ce que montrent les manuscrits" },
          { title: "La collecte sous Abū Bakr et les exemplaires de ʿUthmān", arabic: "جمع القرآن" },
          { title: "Une lecture variante modifie-t-elle une règle ?" },
          { title: "Points diacritiques, vocalisation et découpage en versets" },
        ],
      },
      {
        label: "c — Chronologie et abrogation",
        entries: [
          {
            title: "Le naskh réexaminé : ce que prétend réellement l'abrogation",
            slug: "abrogation-reconsidered",
            arabic: "النسخ",
          },
          { title: "Mecquois et médinois : critères, et pourquoi ils comptent", arabic: "المكي والمدني" },
          {
            title: "Asbāb al-nuzūl : quand le contexte éclaire et quand il enferme",
            slug: "occasions-of-revelation",
            arabic: "أسباب النزول",
          },
          { title: "Combien de versets sont véritablement abrogés ?" },
        ],
      },
      {
        label: "d — Structure et récits",
        entries: [
          { title: "La cohérence d'une sourate", arabic: "المناسبة" },
          { title: "Sourate al-Kahf : quatre récits, un seul argument" },
          { title: "Les lettres isolées", arabic: "الحروف المقطعة" },
          { title: "Les récits coraniques : leur fonction, non leur chronique", arabic: "القصص القرآني" },
          { title: "Les paraboles du Coran", arabic: "الأمثال" },
        ],
      },
      {
        label: "e — Réciter",
        entries: [
          { title: "Le tajwīd : obligation, recommandation, ou convention ?" },
          { title: "Réciter pour comprendre, réciter pour mémoriser" },
          { title: "Toucher et manipuler le muṣḥaf : les avis" },
        ],
      },
    ],
  },
  {
    id: "sunna",
    numeral: "VII",
    title: "Vie et enseignements du Prophète",
    arabic: "السنة النبوية",
    summary:
      "Ce qui est attribué au Prophète, comment on l'authentifie, et comment on distingue ce qui relève du culte de ce qui relève de l'usage.",
    groups: [
      {
        label: "a — Généralités sur la Sunna",
        entries: [
          { title: "Ce que « Sunna » désigne selon les disciplines" },
          {
            title: "Sunna cultuelle, utilitaire, coutumière : une distinction décisive",
            arabic: "سنة تعبدية وعادية",
          },
          { title: "Le Prophète pratiquait-il l'ijtihād ?" },
          { title: "Obéir au Prophète : la portée du commandement" },
        ],
      },
      {
        label: "b — Authentification",
        entries: [
          { title: "Principes de la critique du hadīth", arabic: "أصول الحديث" },
          { title: "Chaîne et texte : les deux niveaux d'examen", arabic: "السند والمتن" },
          { title: "Le hadīth faible : usages admis et abus courants" },
          { title: "Le hadīth solitaire en matière de croyance", arabic: "خبر الآحاد" },
          { title: "Ce que l'orientalisme a objecté, et ce qu'il en reste" },
        ],
      },
      {
        label: "c — Sīra et commentaire",
        entries: [
          { title: "La sīra lue comme argument, non comme épopée", arabic: "السيرة" },
          { title: "Les étapes de la mission : Mecque, hijra, Médine" },
          { title: "Commentaire de quelques hadīths souvent mal compris", arabic: "شرح أحاديث" },
          { title: "Les miracles, et la différence entre signe et spectacle" },
        ],
      },
    ],
  },
  {
    id: "creation",
    numeral: "VIII",
    title: "La création et l'invisible",
    arabic: "الخلق والغيب",
    summary:
      "Anges, esprits, cieux, temps et matière : ce que le texte décrit, dans quel registre, et jusqu'où il est légitime de l'expliciter.",
    groups: [
      {
        label: "a — Cadres",
        entries: [
          { title: "Le temps et l'espace dans le discours révélé", arabic: "الزمان والمكان" },
          { title: "Le Trône et le Calame" },
          { title: "Les cieux et la terre : lecture cosmologique ou lecture théologique ?" },
          { title: "Concordisme scientifique : les raisons de s'en méfier" },
        ],
      },
      {
        label: "b — Les créatures",
        entries: [
          { title: "Au sujet des anges", arabic: "الملائكة" },
          { title: "Au sujet des djinns", arabic: "الجن" },
          { title: "L'homme : rūḥ, nafs, jasad", arabic: "الروح والنفس والجسد" },
          { title: "Adam et Ève : le récit et ses enseignements" },
          { title: "Les animaux et le statut du vivant" },
        ],
      },
    ],
  },
  {
    id: "prophetie",
    numeral: "IX",
    title: "Les prophètes et les peuples",
    arabic: "الأنبياء والأمم",
    summary:
      "Une même mission transmise à travers des histoires distinctes, et ce que les communautés antérieures nous apprennent.",
    groups: [
      {
        label: "a — La prophétie en général",
        entries: [
          { title: "L'infaillibilité des prophètes et sa portée", arabic: "العصمة" },
          { title: "Pourquoi une révélation, si la raison suffit ?" },
          { title: "Prophète et messager : la distinction tient-elle ?" },
        ],
      },
      {
        label: "b — Figures et communautés",
        entries: [
          { title: "Abraham et l'Alliance" },
          { title: "Moïse et le judaïsme" },
          { title: "Jésus fils de Marie et le christianisme" },
          { title: "Daniel, l'exil et les lignées prophétiques" },
          { title: "Les fils d'Ismaël et les Arabes avant l'islam" },
          { title: "Muḥammad, et ce qui change après lui" },
        ],
      },
      {
        label: "c — Après le Prophète",
        entries: [
          { title: "Les Compagnons : statut et critique historique", arabic: "الصحابة" },
          { title: "Les dissensions entre Compagnons : comment en parler" },
          { title: "La formation des écoles juridiques" },
        ],
      },
    ],
  },
  {
    id: "foi",
    numeral: "X",
    title: "La foi et ses implications",
    arabic: "الإيمان",
    summary:
      "Ce que croire engage : le seuil de la foi, sa complétude, et les conséquences pratiques que le texte en tire.",
    groups: [
      {
        label: "a — Structure de la foi",
        entries: [
          { title: "La foi : base et complétude", arabic: "أصل الإيمان وكماله" },
          { title: "Les deux types d'hypocrisie", arabic: "النفاق الأكبر والأصغر" },
          { title: "L'augmentation et la diminution de la foi" },
          { title: "Le doute : lequel est fatal, lequel est ordinaire" },
        ],
      },
      {
        label: "b — Ce que la foi implique",
        entries: [
          { title: "Alliance de divinisation et alliance humaine", arabic: "الولاء والبراء" },
          { title: "Prendre pour référentiel ce que Dieu agrée", arabic: "تحكيم الشرع" },
          { title: "Les œuvres : quelle place dans le salut ?" },
          { title: "Celui à qui la vérité n'est pas parvenue", arabic: "الجهل والتأويل" },
        ],
      },
      {
        label: "c — La demeure dernière",
        entries: [
          { title: "Ce que le Coran décrit de l'au-delà, et dans quel registre" },
          { title: "Les signes de la fin des temps : lire sans s'affoler", arabic: "أشراط الساعة" },
          { title: "Le Messie trompeur", arabic: "المسيح الدجال" },
          { title: "La tombe : ce qui est établi et ce qui est conjectural", arabic: "البرزخ" },
        ],
      },
      {
        label: "d — Croyances diverses",
        entries: [
          { title: "La bénédiction et la recherche de bénédiction", arabic: "البركة والتبرك" },
          { title: "Rêves, songes et inspirations : quel statut ?" },
          { title: "Le mauvais œil et la sorcellerie" },
        ],
      },
    ],
  },
  {
    id: "usul-fiqh",
    numeral: "XI",
    title: "Principes d'extraction des normes",
    arabic: "أصول الاستنباط",
    summary:
      "La machinerie par laquelle un texte devient une règle — et les points précis où les savants divergent.",
    groups: [
      {
        label: "a — Les textes eux-mêmes",
        entries: [
          { title: "Ordre et interdiction : ce qu'ils impliquent par défaut", arabic: "الأمر والنهي" },
          { title: "L'abrogation d'un texte par un autre", arabic: "النسخ" },
          { title: "Concilier avant d'écarter", arabic: "الجمع والترجيح" },
        ],
      },
      {
        label: "b — Outils complémentaires",
        entries: [
          { title: "Le raisonnement par analogie et la ratio legis", arabic: "القياس والتعليل" },
          { title: "Le consensus : sa définition, sa vérifiabilité", arabic: "الإجماع" },
          { title: "Cause, condition, empêchement", arabic: "السبب والشرط والمانع" },
          { title: "Ta'āwun, muqaddima, dharīʿa, ḥīla, ʿurf" },
        ],
      },
      {
        label: "c — Principes détaillés",
        entries: [
          { title: "Halāl et harām : la portée réelle des qualifications", arabic: "الحلال والحرام" },
          { title: "Les objectifs supérieurs de la Loi", arabic: "مقاصد الشريعة" },
          { title: "Bienfait et méfait : peser sans arbitraire", arabic: "المصلحة والمفسدة" },
          { title: "Règles générales et règles détaillées" },
          { title: "Divergence d'interprétations : ce qui est tolérable", arabic: "الاختلاف" },
          { title: "Fatwā, ijtihād, taqlīd, appartenance à une école" },
          { title: "Ahl al-ẓāhir, ahl al-ḥadīth, ahl al-raʾy" },
          { title: "Le jugement d'un juge et ce qu'il tranche", arabic: "قضاء القاضي" },
          { title: "Devoirs et droits", arabic: "الحقوق" },
        ],
      },
    ],
  },
  {
    id: "culte",
    numeral: "XII",
    title: "Questions liées au culte",
    arabic: "مسائل متعلقة بالعبادات",
    summary:
      "Des questions pratiques traitées à partir des textes, en énonçant les divergences plutôt qu'en les gommant.",
    groups: [
      {
        label: "a — Purification et prière",
        entries: [
          { title: "Les deux adhāns du matin" },
          { title: "Rassembler deux prières : les conditions réellement rapportées" },
          { title: "La prière en groupe pour le voyageur" },
          { title: "Ce qui invalide la concentration et ce qui la trouble seulement" },
          { title: "Les horaires aux hautes latitudes" },
          { title: "L'essuyage sur les chaussettes : conditions et durée", arabic: "المسح على الخفين" },
        ],
      },
      {
        label: "b — Jeûne",
        entries: [
          { title: "La nuit du jeûne : le verset et sa portée" },
          { title: "Rattraper les jeûnes manqués : majoritaire et minoritaire" },
          { title: "Le début du mois : calcul ou observation ?", arabic: "الرؤية والحساب" },
          { title: "Ce qui rompt le jeûne : la liste et ses discussions" },
        ],
      },
      {
        label: "c — Aumône et pèlerinage",
        entries: [
          { title: "La zakāt : assiette, seuil, bénéficiaires", arabic: "الزكاة" },
          { title: "L'aumône surérogatoire et sa discrétion", arabic: "الصدقة" },
          { title: "Les rites du pèlerinage qui font débat, et pourquoi" },
          { title: "Déléguer le pèlerinage pour autrui" },
        ],
      },
    ],
  },
  {
    id: "vie-quotidienne",
    numeral: "XIII",
    title: "Aliments, apparence et vie quotidienne",
    arabic: "الأطعمة واللباس والعادات",
    summary:
      "Le domaine où le principe de licéité originelle joue le plus, et où l'on confond le plus souvent norme et coutume.",
    groups: [
      {
        label: "a — Aliments et boissons",
        entries: [
          { title: "La règle d'origine : la licéité", arabic: "الأصل في الأشياء الإباحة" },
          { title: "L'abattage rituel et les viandes des Gens du Livre" },
          { title: "Additifs, enzymes et transformations chimiques" },
          { title: "L'alcool : le peu, le beaucoup, et les traces" },
        ],
      },
      {
        label: "b — Vêtements et apparence",
        entries: [
          { title: "Ce que le texte prescrit et ce que la coutume ajoute" },
          { title: "L'or et la soie pour l'homme" },
          { title: "Se distinguer ou se fondre : la question de l'imitation", arabic: "التشبه" },
        ],
      },
      {
        label: "c — La vie de tous les jours",
        entries: [
          { title: "Les salutations, la politesse et la mesure" },
          { title: "Musique et images : l'état réel du débat" },
          { title: "Le voisinage, le bruit et le droit d'autrui" },
          { title: "Le rapport au temps et au travail" },
        ],
      },
    ],
  },
  {
    id: "femme-famille",
    numeral: "XIV",
    title: "La femme, le mariage et la famille",
    arabic: "المرأة والأسرة",
    summary:
      "Des versets fréquemment cités hors contexte, replacés dans leur logique juridique et dans la réalité qu'ils régissent.",
    groups: [
      {
        label: "a — La femme",
        entries: [
          { title: "La femme en soi : statut, capacité, responsabilité" },
          { title: "La tenue : les versets, les avis, les seuils" },
          { title: "La femme dans la société et l'espace public" },
          { title: "Le témoignage et l'héritage : lire l'ensemble du dispositif" },
        ],
      },
      {
        label: "b — Le couple",
        entries: [
          { title: "Le contrat de mariage et ses conditions" },
          { title: "Le verset 4:34 : ce qu'il autorise et ce qu'il n'autorise pas" },
          { title: "La polygamie : condition, contexte, pratique" },
          { title: "Le divorce : procédure, délais, réparations" },
          { title: "Questions intimes traitées sobrement" },
        ],
      },
      {
        label: "c — Les enfants",
        entries: [
          { title: "L'éducation religieuse sans contrainte" },
          { title: "Filiation, adoption et kafāla" },
          { title: "L'obéissance aux parents et ses limites" },
        ],
      },
    ],
  },
  {
    id: "societe",
    numeral: "XV",
    title: "Texte, contexte et société",
    arabic: "الشرع والواقع",
    summary:
      "Se référer aux textes tout en tenant compte des circonstances — la discipline qui garde une lecture à la fois fidèle et praticable.",
    groups: [
      {
        label: "a — Méthode",
        entries: [
          { title: "Comprendre la réalité sur laquelle on statue", arabic: "فقه الواقع" },
          { title: "L'usage, et le seuil à partir duquel il fait preuve", arabic: "العرف" },
          { title: "Nécessité, difficulté et limites de la dispense", arabic: "الضرورة والمشقة" },
          { title: "Les deux autorités humaines au sein de la communauté" },
        ],
      },
      {
        label: "b — Culture et communauté",
        entries: [
          { title: "Culture, identité, communauté, nationalité" },
          { title: "Vivre en pays non musulman : la question du cadre", arabic: "دار الإسلام ودار غيرها" },
          { title: "Les musulmans et la laïcité" },
          { title: "L'engagement associatif et politique" },
        ],
      },
      {
        label: "c — Questions contemporaines",
        entries: [
          { title: "Répondre à : « Le Coran se contredit-il ? »" },
          { title: "Lire les versets de guerre sans les deux distorsions habituelles" },
          { title: "Relations interreligieuses : ce que le texte pose comme principe" },
          { title: "Paix et conflit : les conditions classiques et leur actualité" },
          { title: "L'Occident, la Palestine et la tentation du raccourci" },
        ],
      },
    ],
  },
  {
    id: "economie",
    numeral: "XVI",
    title: "Finances, technique et écologie",
    arabic: "المال والتقنية والبيئة",
    summary:
      "Trois domaines où les textes sont brefs et les situations nouvelles nombreuses : l'occasion d'exercer la méthode plutôt que de réciter des conclusions.",
    groups: [
      {
        label: "a — Finances et économie",
        entries: [
          { title: "Richesse, dette et instruments financiers contemporains" },
          { title: "Le ribā : définition, extensions, contournements" },
          { title: "L'incertitude excessive dans les contrats", arabic: "الغرر" },
          { title: "Assurance, crédit immobilier, marchés" },
          { title: "Le travail, le juste prix et le salaire" },
        ],
      },
      {
        label: "b — Technique et éthique",
        entries: [
          { title: "Bioéthique : début et fin de vie" },
          { title: "Intelligence artificielle et responsabilité" },
          { title: "Vie privée, données et surveillance" },
          { title: "Réseaux sociaux : parole publique et retenue" },
        ],
      },
      {
        label: "c — Écologie",
        entries: [
          { title: "L'homme comme dépositaire", arabic: "الاستخلاف" },
          { title: "Le gaspillage comme catégorie religieuse", arabic: "الإسراف" },
          { title: "Animaux, terres et eaux : les règles anciennes relues" },
        ],
      },
    ],
  },
  {
    id: "orthodoxie",
    numeral: "XVII",
    title: "Orthodoxie, savants et courants",
    arabic: "العلم الشرعي والفِرَق",
    summary:
      "Qui parle au nom de la tradition, à quel titre, et comment se repérer entre des courants qui invoquent tous les mêmes textes.",
    groups: [
      {
        label: "a — Le savoir et ses porteurs",
        entries: [
          { title: "Ce qu'est un savant, et ce qui n'en fait pas un" },
          { title: "L'adab du désaccord entre savants" },
          { title: "La vulgarisation : ses services et ses dégâts" },
        ],
      },
      {
        label: "b — Courants",
        entries: [
          { title: "Sunnisme : ce que le mot recouvre historiquement" },
          { title: "Ashʿarisme, māturīdisme, atharisme : la carte réelle" },
          { title: "Muʿtazilisme et jahmisme : ce qui était en jeu" },
          { title: "Courants contemporains : lecture sans caricature" },
          { title: "L'excommunication : la règle et son extrême prudence", arabic: "التكفير" },
        ],
      },
    ],
  },
  {
    id: "reflection",
    numeral: "XVIII",
    title: "Méditation et vie intérieure",
    arabic: "الرقائق",
    summary:
      "Des textes plus courts, écrits pour être lus une fois lentement plutôt que consultés.",
    groups: [
      {
        label: "a — Le caractère",
        entries: [
          { title: "La gratitude comme forme d'attention" },
          { title: "La sincérité, et le peu qu'on en peut vérifier du dehors" },
          { title: "De la parole rare" },
          { title: "Le repentir comme retour, non comme comptabilité" },
          { title: "La patience avec les personnes, plus difficile que celle des épreuves" },
        ],
      },
      {
        label: "b — L'étude comme discipline",
        entries: [
          { title: "Lire lentement, délibérément" },
          { title: "Garder une question ouverte pendant des années" },
          { title: "Que faire d'une réponse qui déplaît" },
          { title: "Tenir un carnet de lecture" },
        ],
      },
      {
        label: "c — Divers",
        entries: [
          { title: "Éditoriaux et notes de circonstance" },
          { title: "Réponses brèves à des questions reçues" },
          { title: "Recommandations de lecture par niveau" },
        ],
      },
    ],
  },
  {
    id: "jurisprudence-malikite",
    numeral: "XIX",
    title: "Jurisprudence — l'avis retenu chez les Mālikites",
    arabic: "الفقه المالكي",
    summary:
      "Les questions pratiques traitées selon le mashhūr de l'école de Mālik : ce que dit l'avis écrasamment majoritaire, ses preuves, et l'endroit exact où l'école diverge des trois autres. Réponses concrètes sur la tenue vestimentaire, les ablutions, la prière et la vie de tous les jours.",
    groups: [
      {
        label: "a — Situer l'école et ses avis",
        entries: [
          { title: "Ce que veut dire « l'avis mashhūr » chez les Mālikites", arabic: "المشهور" },
          { title: "Hiérarchie des sources chez Mālik : Coran, Sunna, ʿamal des gens de Médine", arabic: "عمل أهل المدينة" },
          { title: "Al-Mudawwana, al-Risāla, Khalīl : à quel livre se fier pour quoi" },
          { title: "Pourquoi suivre une école, et jusqu'où", arabic: "التقليد" },
          { title: "Quand un Mālikite peut-il prendre l'avis d'une autre école ?" },
          { title: "Fatwa, taqwā et facilitation : la règle mālikite du raf' al-ḥaraj", arabic: "رفع الحرج" },
        ],
      },
      {
        label: "b — La pureté et les ablutions",
        entries: [
          { title: "Les obligations de l'ablution chez les Mālikites : les sept farāʾiḍ", arabic: "فرائض الوضوء" },
          { title: "L'intention (niyya) est une obligation de l'ablution : la position mālikite", arabic: "النية" },
          { title: "Le dalk : frotter les membres, condition retenue chez Mālik", arabic: "الدلك" },
          { title: "La muwālāt : enchaîner les membres sans interruption", arabic: "الموالاة" },
          { title: "Essuyer toute la tête, et non une partie : l'avis dominant", arabic: "مسح الرأس" },
          { title: "Essuyer les oreilles : sunna, et non obligation" },
          { title: "Ce qui annule l'ablution : ḥadath et asbāb chez les Mālikites", arabic: "نواقض الوضوء" },
          { title: "Toucher son épouse annule-t-il l'ablution ? La règle de la lamsa avec plaisir", arabic: "اللمس" },
          { title: "Toucher le sexe : annulation, conditions et cas d'oubli" },
          { title: "Le sommeil léger et le sommeil lourd" },
          { title: "Le doute survenu après l'ablution : la règle du yaqīn et du shakk", arabic: "اليقين لا يزول بالشك" },
          { title: "L'essuyage sur les khuffs : conditions mālikites, sans durée fixée par jour" },
          { title: "Les chaussettes non imperméables : pourquoi l'école ne l'admet pas" },
          { title: "Le ghusl : obligations, sunan et ce qui l'impose", arabic: "الغسل" },
          { title: "Le tayammum : quand y recourir, avec quoi, et sa portée", arabic: "التيمم" },
          { title: "L'eau muṭlaq, l'eau usée et l'eau modifiée", arabic: "الماء المطلق" },
          { title: "Les impuretés : najāsa légère, lourde, et pardonnée", arabic: "النجاسة" },
          { title: "L'istinjāʾ, l'istijmār et les usages sanitaires contemporains" },
          { title: "Menstrues, lochies et istiḥāḍa : durées retenues chez Mālik", arabic: "الحيض" },
        ],
      },
      {
        label: "c — La tenue vestimentaire",
        entries: [
          { title: "La ʿawra de l'homme chez les Mālikites : mughallaẓa et mukhaffafa", arabic: "العورة" },
          { title: "La ʿawra dans la prière et la ʿawra hors de la prière : deux registres" },
          { title: "Le port du short au-dessus du genou : ce que dit l'avis dominant" },
          { title: "Le voile de la femme dehors : ce qui est obligatoire selon l'école", arabic: "الحجاب" },
          { title: "Le visage et les mains : l'avis mālikite retenu, et la question de la fitna" },
          { title: "Le niqāb : sunna, coutume ou obligation ? Le tri mālikite" },
          { title: "Les vêtements ajustés ou transparents : le critère du waṣf" },
          { title: "L'isbāl : traîner son vêtement par orgueil ou par habitude", arabic: "الإسبال" },
          { title: "La soie et l'or pour l'homme : interdit, exceptions et bijoux modernes" },
          { title: "Se teindre les cheveux, la barbe, et la question du noir" },
          { title: "La barbe : obligation ou sunna ferme chez les Mālikites ?", arabic: "اللحية" },
          { title: "Le parfum, le maquillage et la sortie de la femme" },
          { title: "Imiter les usages vestimentaires non musulmans : les limites de la tashabbuh", arabic: "التشبه" },
          { title: "Vêtement de travail, uniforme imposé et contrainte professionnelle" },
          { title: "La tenue à la mosquée : ce qui est recommandé, ce qui est blâmable" },
        ],
      },
      {
        label: "d — La prière",
        entries: [
          { title: "Les farāʾiḍ, sunan et faḍāʾil de la prière selon Khalīl", arabic: "أركان الصلاة" },
          { title: "Les mains le long du corps ou croisées : le sadl mālikite", arabic: "السدل" },
          { title: "La basmala à voix haute ou basse, et sa lecture en Fātiḥa" },
          { title: "Le qunūt du ṣubḥ : sa place chez les Mālikites", arabic: "القنوت" },
          { title: "Les horaires : temps choisi, temps toléré, temps de nécessité", arabic: "الأوقات" },
          { title: "Le rattrapage des prières manquées : ordre, immédiateté et grand nombre", arabic: "القضاء" },
          { title: "Les sujūd al-sahw : avant ou après le salām, selon le manque ou l'ajout", arabic: "سجود السهو" },
          { title: "La prière du voyageur : distance, raccourcissement et regroupement", arabic: "القصر" },
          { title: "Le jamʿ entre deux prières : les cas admis par l'école" },
          { title: "Suivre un imām d'une autre école : ce qui invalide, ce qui n'invalide pas" },
          { title: "La prière de la femme : rangs, mosquée et prière à la maison" },
          { title: "Le vendredi : conditions de validité de la jumuʿa chez Mālik", arabic: "الجمعة" },
          { title: "La prière sur un tapis, une chaise, dans un train ou un avion" },
        ],
      },
      {
        label: "e — Jeûne, zakāt et pèlerinage",
        entries: [
          { title: "L'intention du jeûne : une seule pour tout le mois", arabic: "نية الصوم" },
          { title: "Ce qui rompt le jeûne et ce qui impose la kaffāra chez les Mālikites", arabic: "الكفارة" },
          { title: "Vomissement, inhalateur, perfusion : les cas médicaux contemporains" },
          { title: "La vision du croissant et le calcul astronomique", arabic: "رؤية الهلال" },
          { title: "Zakāt : niṣāb, ḥawl et biens soumis" },
          { title: "Zakāt sur les salaires, l'épargne et l'immobilier locatif" },
          { title: "Zakāt al-fiṭr : mesure, moment et versement en argent" },
          { title: "Le ḥajj : ifrād privilégié chez Mālik, et l'ordre des rites", arabic: "الإفراد" },
          { title: "La ʿumra : son statut chez les Mālikites" },
        ],
      },
      {
        label: "f — Vie quotidienne, transactions et famille",
        entries: [
          { title: "L'alimentation : bêtes licites, chasse et abattage", arabic: "الذكاة" },
          { title: "Les viandes des Gens du Livre : la position mālikite" },
          { title: "Additifs, gélatine et alcool résiduel : la règle de l'istiḥāla", arabic: "الاستحالة" },
          { title: "La ribā dans les crédits contemporains et le prêt immobilier" },
          { title: "Les ventes interdites : gharar, ʿīna et vente à terme", arabic: "الغرر" },
          { title: "L'assurance, la retraite et les placements" },
          { title: "Le mariage : le walī, condition de validité chez Mālik", arabic: "الولي" },
          { title: "La dot, le contrat et les conditions posées par les époux" },
          { title: "Le divorce : les formules, le délai de viduité et le retour", arabic: "الطلاق" },
          { title: "La garde des enfants : ḥaḍāna et ordre des ayants droit", arabic: "الحضانة" },
          { title: "L'héritage : parts fixées et cas fréquents", arabic: "الفرائض" },
          { title: "Funérailles : lavage, prière et enterrement selon l'école", arabic: "الجنائز" },
          { title: "Les serments et les vœux : formulation et expiation", arabic: "الأيمان" },
        ],
      },
    ],
  },
];


export const sommaireEntryCount = sommaire.reduce(
  (total, chapter) =>
    total + chapter.groups.reduce((n, g) => n + g.entries.length, 0),
  0,
);
