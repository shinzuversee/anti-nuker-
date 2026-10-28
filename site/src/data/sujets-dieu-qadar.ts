import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre I — « Connaissez-vous Dieu ? »
 * Groupe d — Le décret divin (al-qadar).
 */
export const sujetsDieuQadar: Sujet[] = [
  {
    slug: slugifySujet("Le décret et la responsabilité humaine"),
    title: "Le décret et la responsabilité humaine",
    arabic: "القدر",
    intro:
      "Nulle question de théologie n’a fait couler autant d’encre, ni suscité autant de désarroi, que celle du décret divin (**al-qadar**) confronté à la responsabilité de l’homme. Si tout ce qui advient a été écrit avant la création des cieux et de la terre, comment l’esclave peut-il être **loué** pour son obéissance ou **blâmé** pour sa désobéissance ? La question n’est pas une curiosité d’école : elle touche au sens même de la prière, du repentir, de l’effort et du jugement dernier.\n\nLes premières communautés musulmanes ont connu, sur ce terrain précis, leurs divisions les plus graves. Les qadarites ont voulu sauver la responsabilité en amputant la science et la volonté divines ; les jabrites ont voulu sauver la souveraineté de Dieu en dissolvant l’homme dans un pur mécanisme. La voie que suit ce sujet — celle des gens de la Sunna, mālikites et ashʿarites — refuse ces deux simplifications et tient ensemble deux affirmations qui ne se contredisent qu’en apparence : **Dieu décrète tout**, et **l’homme est réellement responsable de ce qu’il fait**.\n\nOn montrera d’abord pourquoi le décret divin ne supprime pas l’acte humain mais le fonde ; puis comment le Coran lui-même articule ces deux vérités dans un même souffle ; enfin quelles conséquences pratiques il faut en tirer pour ne tomber ni dans la fatalité paresseuse ni dans l’orgueil de l’auto-création.",
    body: [
      { type: "h2", text: "Poser correctement le problème" },
      {
        type: "p",
        text: "Avant toute réponse, il faut vérifier que la question est bien posée. On dit souvent : « si Dieu a décrété mon péché, comment m’en punir ? » Cette formulation confond deux choses distinctes : le **décret** (al-qaḍāʾ wa-l-qadar), qui est la détermination éternelle de ce qui sera, et la **contrainte** (al-jabr), qui suppose qu’une force extérieure agisse à la place de l’homme et malgré lui. **Le décret n’est pas une contrainte** : il est la cause première par laquelle l’acte de l’homme lui-même, avec sa volonté propre, vient à l’existence.",
      },
      {
        type: "p",
        text: "Cette distinction, qui semble subtile, est en réalité la clé de toute la question. Dieu ne décrète pas seulement le résultat visible de l’acte : Il décrète l’acte **avec** sa cause immédiate, qui est le choix et la volonté du serviteur. Si l’on retire cette cause immédiate, on ne restitue pas la liberté : on détruit l’acte lui-même, qui devient un événement sans agent, comme la chute d’une pierre.",
      },
      {
        type: "lexique",
        root: "ق د ر",
        transliteration: "q-d-r",
        sense:
          "Mesurer, déterminer, fixer une mesure exacte. De cette racine viennent **qadar** (la mesure décrétée) et **qudra** (la capacité, le pouvoir). Le lien entre les deux sens n’est pas fortuit : **ce qui est mesuré par Dieu est aussi ce qui devient possible pour la créature**.",
        derives: [
          { word: "qadar", arabic: "قَدَر", gloss: "La mesure fixée de toute chose, connue et voulue de toute éternité." },
          { word: "qadr", arabic: "قَدْر", gloss: "La quantité, la valeur exacte ; d’où « Laylat al-Qadr », la nuit de la Mesure." },
          { word: "taqdīr", arabic: "تَقْدِير", gloss: "L’acte de décréter, de fixer par avance." },
          { word: "iqtidār", arabic: "اِقْتِدَار", gloss: "La capacité effective d’agir, donnée par Dieu au serviteur pour chaque acte." },
        ],
        note:
          "**إِنَّا كُلَّ شَىْءٍ خَلَقْنَٰهُ بِقَدَرٍ** — « Nous avons créé toute chose avec une **mesure** déterminée. » (54:49)",
      },
      { type: "h2", text: "Le décret, cause première ; la volonté humaine, cause seconde" },
      {
        type: "verse",
        arabic:
          "وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُ ۚ **إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًا**",
        translation:
          "Et vous ne pouvez vouloir que si Allāh veut. **Certes, Allāh est Omniscient, Infiniment Sage.**",
        reference: "Coran, al-Insān, 76:30",
      },
      {
        type: "p",
        text: "Ce verset a nourri toutes les discussions. Certains y ont vu l’abolition pure et simple de la volonté humaine : puisque « vous ne voulez que si Dieu veut », l’homme ne serait qu’un instrument passif. Mais le verset ne dit pas « vous ne voulez pas » : il dit **votre vouloir est second par rapport au Sien**. La volonté humaine existe réellement — le verset la nomme, « tashāʾūna » — mais elle n’existe pas d’elle-même : elle dépend, comme tout le créé, de la volonté créatrice.",
      },
      {
        type: "verse",
        arabic:
          "لِمَن شَآءَ مِنكُمْ أَن يَسْتَقِيمَ **وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُ رَبُّ ٱلْعَٰلَمِينَ**",
        translation:
          "Pour celui d’entre vous qui veut suivre le droit chemin. **Et vous ne pouvez vouloir que si Allāh, le Seigneur des mondes, le veut.**",
        reference: "Coran, al-Takwīr, 81:28-29",
      },
      {
        type: "p",
        text: "La juxtaposition, dans ce même passage, du verbe « vouloir » attribué à l’homme et de sa dépendance envers la volonté divine, condense toute la doctrine sunnite : **il y a bien un vouloir humain**, réel, effectif, qui distingue l’obéissant du désobéissant ; et **ce vouloir n’a pas d’existence autonome**, il est lui-même un effet créé, voulu et décrété par Dieu de toute éternité.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الطبري في تفسيره: **مَعْنَى الآيَةِ: وَمَا تَشَاءُونَ الاسْتِقَامَةَ إِلَّا أَنْ يَشَاءَ اللهُ ذَلِكَ لَكُمْ**، فَفِعْلُكُمْ وَاقِعٌ **بِمَشِيئَتِكُمْ**، وَمَشِيئَتُكُمْ **وَاقِعَةٌ بِمَشِيئَةِ اللهِ** الَّذِي خَلَقَهَا فِيكُمْ.\n\nL’imām al-Ṭabarī a dit dans son commentaire : **le sens du verset est : vous ne pouvez vouloir la droiture que si Allāh veut cela pour vous.** Votre acte survient **par votre vouloir**, et votre vouloir **survient par le vouloir d’Allāh**, qui l’a créé en vous.",
        source: "al-Ṭabarī, Jāmiʿ al-bayān",
      },
      { type: "h2", text: "Deux excès à écarter" },
      {
        type: "balance",
        title: "Entre la contrainte et l’auto-création",
        arabic: "بين الجبر والقدرية",
        affirmLabel: "Ce que la Sunna affirme",
        denyLabel: "Ce qu’elle écarte",
        affirm: [
          "L’homme possède une **volonté réelle** (irāda) et une **capacité réelle** (qudra) au moment de l’acte.",
          "Cette volonté et cette capacité sont elles-mêmes **créées par Dieu**, instant par instant.",
          "L’acte est **véritablement attribué** à l’homme : c’est lui qui prie, lui qui vole, lui qui se repent.",
          "Le décret divin **englobe** l’acte, sa cause et ses conséquences, sans les supprimer.",
        ],
        deny: [
          "**Al-jabr** : dire que l’homme est un pur automate sans aucune part dans son acte.",
          "**Al-qadariyya (muʿtazilite)** : dire que l’homme crée lui-même son acte indépendamment de Dieu.",
          "Croire que la science divine du futur **cause** le péché, comme si connaître équivalait à contraindre.",
          "Invoquer le décret **après** la faute pour s’en excuser, alors qu’on l’ignore avant d’agir.",
        ],
        caption:
          "Le jabrite supprime l’homme pour sauver Dieu ; le qadarite supprime Dieu pour sauver l’homme ; la Sunna garde les deux.",
      },
      { type: "h3", text: "L’objection de la science préalable" },
      {
        type: "p",
        text: "On objecte souvent : si Dieu **savait** avant la création qu’un tel désobéirait, ce savoir ne fixe-t-il pas déjà, irrévocablement, le sort du pécheur ? Il faut répondre avec précision : **la science ne cause pas ce qu’elle connaît**, elle le suit. Dieu ne sait pas que Zayd désobéira parce qu’Il l’a décidé arbitrairement contre lui ; Il sait que Zayd désobéira parce que, dans Sa science éternelle et par Sa sagesse, c’est cela — et non autre chose — que le libre choix de Zayd produira. La science divine est à la mesure exacte de ce que la réalité contiendra, elle ne la fabrique pas de force.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Savoir n’est pas forcer",
        text: "Un médecin qui connaît, par l’expérience de sa pratique, l’issue probable d’une maladie ne **cause** pas cette issue par sa connaissance. À plus forte raison la science divine, parfaite et antérieure à toute chose, ne contraint pas ce qu’elle embrasse : **elle l’enveloppe sans le violenter**.",
      },
      { type: "h2", text: "La capacité d’agir : un don renouvelé" },
      {
        type: "p",
        text: "Les théologiens ashʿarites ont insisté sur un point souvent négligé : **la capacité (qudra) que possède le serviteur pour agir est créée par Dieu au moment même de l’acte**, et non stockée à l’avance comme une réserve dont l’homme disposerait librement pour toujours. Cela signifie que l’homme n’est jamais indépendant dans son action : chaque mouvement qu’il accomplit suppose un don renouvelé, une capacité que Dieu crée en lui à cet instant précis, pour cet acte précis.",
      },
      {
        type: "verse",
        arabic: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ **لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ**",
        translation:
          "Allāh n’impose à aucune âme une charge supérieure à sa capacité. **À elle ce qu’elle a acquis (de bien), et sur elle ce qu’elle s’est acquis (de mal).**",
        reference: "Coran, al-Baqara, 2:286",
      },
      {
        type: "p",
        text: "Ce verset introduit une notion capitale, celle du **kasb** (l’acquisition). L’homme n’est pas le créateur premier de son acte, mais il en est le lieu d’acquisition : c’est en lui, par sa volonté et son choix, que l’acte se réalise et lui devient propre. C’est cette notion qui fonde, dans la théologie ashʿarite, la responsabilité réelle du serviteur sans porter atteinte à l’unicité créatrice de Dieu.",
      },
      {
        type: "schema",
        title: "De la volonté divine à l’acte du serviteur",
        variant: "flow",
        nodes: [
          { label: "Science éternelle", arabic: "العلم", note: "Dieu sait, de toute éternité, ce que chaque être choisira." },
          { label: "Décret", arabic: "القدر", note: "Cette science se fixe en une mesure déterminée et écrite." },
          { label: "Création de la capacité", arabic: "القدرة", note: "Au moment de l’acte, Dieu crée en l’homme le pouvoir d’agir." },
          { label: "Volonté et choix", arabic: "الاختيار", note: "L’homme veut, choisit, s’oriente réellement vers l’acte." },
          { label: "Acquisition", arabic: "الكسب", note: "L’acte devient sien : il est loué ou blâmé pour lui." },
        ],
        caption: "Chaque étape est réelle ; aucune n’efface celle qui la précède ni celle qui la suit.",
      },
      { type: "h2", text: "L’ordre coranique n’est pas un théâtre vide" },
      {
        type: "p",
        text: "Un argument décisif contre le jabrisme se trouve dans la structure même de la Révélation. Le Coran **ordonne**, **interdit**, **promet** et **menace** ; il s’adresse à des êtres capables de répondre. S’il n’y avait, sous ces impératifs, aucune volonté réelle de l’homme, l’ordre coranique serait une parole adressée au vide, une comédie divine sans destinataire véritable. Or Dieu ne parle pas en vain : **l’ordre suppose la capacité de s’y conformer ou de s’y soustraire**, capacité qu’Il crée Lui-même en l’homme pour que Son ordre trouve un répondant réel.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الرازي: **لَوْ كَانَ الْعَبْدُ مُجْبَرًا عَلَى فِعْلِهِ لَمَا حَسُنَ تَوْجِيهُ الْأَمْرِ وَالنَّهْيِ إِلَيْهِ**، وَلَمَّا حَسُنَ ثَوَابُهُ وَلَا عِقَابُهُ؛ وَلَكِنَّ **قُدْرَتَهُ وَإِرَادَتَهُ مَخْلُوقَتَانِ لِلَّهِ**، وَبِهِمَا يَقَعُ فِعْلُهُ حَقِيقَةً.\n\nL’imām al-Rāzī a dit : **si le serviteur était contraint dans son acte, il ne conviendrait pas de lui adresser l’ordre et l’interdiction**, ni de le récompenser ou de le châtier ; mais **sa capacité et sa volonté sont créées par Allāh**, et c’est par elles que son acte survient réellement.",
        source: "Fakhr al-Dīn al-Rāzī, al-Tafsīr al-kabīr",
      },
      { type: "h2", text: "Une objection récurrente : « pourquoi ne m’a-t-Il pas créé obéissant ? »" },
      {
        type: "p",
        text: "Certains vont plus loin dans l’objection : pourquoi Dieu n’a-t-Il pas simplement décrété, pour chacun, l’obéissance plutôt que la désobéissance, épargnant ainsi le châtiment ? La réponse mālikite-ashʿarite refuse d’abord le présupposé de la question : Dieu n’est **redevable d’aucune justification** envers Sa création, car Il est le Maître absolu de ce qu’Il fait exister, et nul n’a de droit sur Lui qui précéderait Sa propre volonté. Mais la sagesse divine, que la raison peut en partie discerner sans jamais l’épuiser, montre aussi qu’un monde où l’épreuve, le choix et la conséquence sont réels est un monde où la miséricorde, le pardon, l’effort et la station spirituelle prennent un sens qu’un monde de purs automates obéissants ne connaîtrait jamais.",
      },
      {
        type: "experiment",
        title: "Le professeur et les deux élèves",
        steps: [
          "Un professeur pourrait, en théorie, programmer un robot pour qu’il récite parfaitement sa leçon, sans jamais faillir.",
          "Il pourrait aussi enseigner à un enfant réel, capable de comprendre, d’oublier, de s’efforcer ou de se relâcher.",
          "Le robot ne mérite ni éloge ni blâme : sa perfection est mécanique, dénuée de valeur morale.",
          "L’enfant qui travaille, échoue parfois, se corrige et progresse **acquiert une valeur que le robot ne connaîtra jamais**.",
        ],
        conclusion:
          "Un monde de créatures libres et responsables, même exposées à la chute, réalise une perfection — celle du mérite et de la miséricorde — qu’un monde de purs automates ne pourrait jamais manifester.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le décret n’excuse jamais avant l’acte",
        text: "Un principe pratique gouverne tout ceci : **on invoque le décret après le malheur pour se consoler, jamais avant la faute pour s’excuser**. ʿUmar ibn al-Khaṭṭāb, surprenant un voleur qui invoquait le qadar, lui répondit qu’on lui couperait la main **selon** le décret d’Allāh — retournant l’argument contre celui qui voulait s’en servir pour fuir sa responsabilité.",
      },
      { type: "h2", text: "L’avis d’Ibn ʿĀshūr sur la portée pratique" },
      {
        type: "quote",
        text:
          "قال الشيخ محمد الطاهر بن عاشور: **الإيمان بالقدر لا يُراد به تعطيل الأخذ بالأسباب**، بل المقصود أن يعلم المرء أنّ **مصادر الأمور كلها بيد الله**، فيسعى بجدٍّ ويتوكّل بقلبٍ، **غير قانطٍ عند الفوات، وغير مغرورٍ عند البلوغ**.\n\nLe Cheikh Muḥammad al-Ṭāhir Ibn ʿĀshūr a dit : **la foi au décret ne signifie pas l’abandon des causes**, mais elle vise à faire savoir à l’homme que **la source de toute chose est dans la main de Dieu**, afin qu’il œuvre avec sérieux et place sa confiance en son cœur, **sans désespérer à l’échec, ni s’enorgueillir au succès**.",
        source: "Ibn ʿĀshūr, al-Taḥrīr wa-l-tanwīr (paraphrase de son enseignement)",
      },
      { type: "h2", text: "Conséquences pour la vie spirituelle" },
      {
        type: "list",
        items: [
          "**Avant l’acte** : on se comporte comme si tout dépendait de son effort, car on ignore ce qui est décrété.",
          "**Après l’acte heureux** : on remercie Dieu, sans s’attribuer le mérite comme si l’on s’était créé soi-même.",
          "**Après l’épreuve** : on se console par le décret, sans y voir une injustice, car la sagesse divine dépasse la vue humaine.",
          "**Devant la faute d’autrui ou la sienne** : on ne cesse pas d’ordonner le bien et d’interdire le mal, car le décret n’abolit pas le devoir.",
        ],
      },
      {
        type: "h2",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Le décret et la responsabilité ne s’opposent donc pas comme deux vérités rivales dont il faudrait sacrifier l’une à l’autre : ils s’articulent comme la cause première et la cause seconde, comme le fondement et l’acte fondé. **Dieu décrète tout, y compris la volonté libre de l’homme ; et l’homme veut, choisit, et répond réellement de ce qu’il fait.** Celui qui tient fermement ces deux bouts de la corde marche dans l’équilibre que les Compagnons ont enseigné ; celui qui en lâche un tombe soit dans le désespoir fataliste, soit dans l’orgueil de l’auto-suffisance.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Les quatre degrés de la foi au qadar"),
    title: "Les quatre degrés de la foi au qadar",
    arabic: "أركان الإيمان بالقدر",
    intro:
      "La foi au décret divin n’est pas une affirmation générale et vague : les savants de la Sunna l’ont analysée en **quatre degrés** ordonnés, dont chacun conditionne le suivant, et dont l’absence de l’un quelconque suffit à fausser toute la croyance. Ces quatre degrés sont : la science (**al-ʿilm**), l’écriture (**al-kitāba**), la volonté (**al-mashīʾa**) et la création (**al-khalq**).\n\nCette architecture, tirée par déduction du Coran et de la Sunna et affinée par des générations de commentateurs, n’est pas un exercice scolaire : elle est une carte précise qui permet de situer les égarements — qadarites, jahmites, mu'attila — et de savoir exactement à quel étage de la doctrine chacun a trébuché. Nous les exposerons l’un après l’autre, avec leurs preuves scripturaires, avant de montrer comment ils s’enchaînent nécessairement.",
    body: [
      { type: "h2", text: "Premier degré : la science (al-ʿilm)" },
      {
        type: "p",
        text: "Le premier degré consiste à croire que Dieu a connu, de toute éternité et avant que rien n’existe, tout ce qui serait : les actes des créatures, leurs états, leur subsistance, leur terme, leur destinée finale — bonheur ou malheur. Cette science n’est pas acquise à mesure que les événements se produisent : elle est **antérieure**, **totale** et **immuable**.",
      },
      {
        type: "verse",
        arabic:
          "أَلَمْ تَعْلَمْ أَنَّ ٱللَّهَ يَعْلَمُ مَا فِى ٱلسَّمَآءِ وَٱلْأَرْضِ ۗ **إِنَّ ذَٰلِكَ فِى كِتَٰبٍ** ۚ إِنَّ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرٌ",
        translation:
          "Ne sais-tu pas qu’Allāh sait ce qui est dans le ciel et sur la terre ? **Cela est certes dans un Livre.** Cela est certes aisé pour Allāh.",
        reference: "Coran, al-Ḥajj, 22:70",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Nier ce degré : l’égarement des premiers qadarites",
        text: "Certains parmi les premiers qadarites ont osé dire que **Dieu ne connaît les actes des serviteurs qu’après leur survenue**. Les savants de la Sunna ont jugé cette position d’une gravité extrême, car elle attribue à Dieu une ignorance préalable, ce qui contredit directement Sa perfection.",
      },
      { type: "h2", text: "Second degré : l’écriture (al-kitāba)" },
      {
        type: "p",
        text: "Le second degré consiste à croire que Dieu a **écrit**, sur la Table préservée (al-Lawḥ al-Maḥfūẓ), tout ce qu’Il a connu de toute éternité, avant même la création des cieux et de la terre. Cette écriture n’est pas une simple prise de notes : elle est la fixation, en une mesure déterminée, de ce que la science divine embrasse.",
      },
      {
        type: "verse",
        arabic:
          "مَآ أَصَابَ مِن مُّصِيبَةٍ فِى ٱلْأَرْضِ وَلَا فِىٓ أَنفُسِكُمْ إِلَّا فِى كِتَٰبٍ مِّن قَبْلِ أَن نَّبْرَأَهَآ ۚ **إِنَّ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرٌ**",
        translation:
          "Aucun malheur n’atteint la terre ni vos personnes qui ne soit déjà **dans un Livre avant que Nous ne le créions**. Cela est certes aisé pour Allāh.",
        reference: "Coran, al-Ḥadīd, 57:22",
      },
      {
        type: "quote",
        text:
          "عن عبد الله بن عمرو بن العاص رضي الله عنه، عن رسول الله ﷺ قال: **كَتَبَ اللَّهُ مَقَادِيرَ الْخَلَائِقِ قَبْلَ أَنْ يَخْلُقَ السَّمَاوَاتِ وَالْأَرْضَ بِخَمْسِينَ أَلْفَ سَنَةٍ**.\n\nD’après ʿAbd Allāh ibn ʿAmr ibn al-ʿĀṣ, qu’Allāh l’agrée, le Messager d’Allāh ﷺ a dit : **« Allāh a écrit les mesures décrétées des créatures cinquante mille ans avant de créer les cieux et la terre. »**",
        source: "Rapporté par Muslim",
      },
      {
        type: "lexique",
        root: "ك ت ب",
        transliteration: "k-t-b",
        sense:
          "Écrire, consigner, fixer par l’écriture. De cette racine vient **al-Lawḥ al-Maḥfūẓ**, la Table préservée, où sont **inscrites** de toute éternité les mesures de toute chose.",
        derives: [
          { word: "kitāb", arabic: "كِتَاب", gloss: "Le Livre, l’écrit qui consigne les mesures décrétées." },
          { word: "maktūb", arabic: "مَكْتُوب", gloss: "Ce qui est écrit, terme courant pour désigner le sort décrété d’une personne." },
          { word: "kitāba", arabic: "كِتَابَة", gloss: "L’acte même de consigner par écrit, second degré de la foi au qadar." },
        ],
      },
      { type: "h2", text: "Troisième degré : la volonté (al-mashīʾa)" },
      {
        type: "p",
        text: "Le troisième degré consiste à croire que **rien n’existe dans les cieux ou sur la terre que par la volonté d’Allāh**. Sa volonté (mashīʾa) englobe le bien et le mal, l’obéissance et la désobéissance, dans la mesure où elle en permet l’existence — sans que cela signifie qu’Il **aime** ou **agrée** la désobéissance. Il faut ici distinguer soigneusement la volonté créatrice universelle, qui porte sur l’existence de toute chose, de l’amour et de l’agrément divins, qui ne se posent que sur ce qui est bon.",
      },
      {
        type: "verse",
        arabic:
          "وَلَوْ شَآءَ ٱللَّهُ مَا فَعَلُوهُ ۖ **فَذَرْهُمْ وَمَا يَفْتَرُونَ**",
        translation:
          "Si Allāh avait voulu, ils ne l’auraient pas fait. **Laisse-les donc avec ce qu’ils inventent.**",
        reference: "Coran, al-Anʿām, 6:137",
      },
      {
        type: "balance",
        title: "Volonté créatrice et amour divin : deux choses distinctes",
        affirmLabel: "La volonté créatrice (al-mashīʾa)",
        denyLabel: "L’amour et l’agrément (al-maḥabba wa-l-riḍā)",
        affirm: [
          "Porte sur **tout ce qui existe**, bien et mal confondus, car rien n’existe hors d’elle.",
          "Explique **pourquoi** le mal peut exister dans un monde créé par un Dieu parfait.",
          "N’implique aucune approbation morale de ce qu’elle permet d’exister.",
        ],
        deny: [
          "Ne porte que sur **le bien, la foi, l’obéissance**.",
          "Dieu **n’aime pas** la mécréance ni la désobéissance, même s’Il en permet l’existence.",
          "Confondre les deux revient à dire que Dieu **agrée** tout ce qu’Il crée — erreur grave et répandue.",
        ],
        caption: "Cette distinction, fine mais décisive, dissipe une confusion source de bien des doutes.",
      },
      { type: "h2", text: "Quatrième degré : la création (al-khalq)" },
      {
        type: "p",
        text: "Le quatrième et dernier degré consiste à croire que **Dieu est le Créateur unique de toute chose** : des substances, des accidents, des mouvements, et — c’est le point le plus délicat — des **actes mêmes des créatures**. L’homme accomplit réellement son acte par sa volonté et sa capacité propres (comme on l’a montré au sujet précédent), mais cet acte, en tant qu’existant, est créé par Dieu, car nulle existence ne surgit hors de la création divine.",
      },
      {
        type: "verse",
        arabic: "ٱللَّهُ خَٰلِقُ كُلِّ شَىْءٍ ۖ **وَهُوَ عَلَىٰ كُلِّ شَىْءٍ وَكِيلٌ**",
        translation: "Allāh est le Créateur de toute chose, **et Il est, sur toute chose, Garant.**",
        reference: "Coran, al-Zumar, 39:62",
      },
      {
        type: "schema",
        title: "Les quatre degrés, un enchaînement obligé",
        variant: "branch",
        nodes: [
          { label: "1. La science", arabic: "العلم", note: "Dieu connaît de toute éternité tout ce qui sera." },
          { label: "2. L’écriture", arabic: "الكتابة", note: "Cette science est fixée sur la Table préservée." },
          { label: "3. La volonté", arabic: "المشيئة", note: "Rien n’existe que par la volonté créatrice divine." },
          { label: "4. La création", arabic: "الخلق", note: "Dieu crée toute chose existante, y compris les actes." },
        ],
        caption: "Chaque degré nié entraîne, en cascade, la ruine des degrés suivants.",
      },
      { type: "h2", text: "Ce que ces quatre degrés ne signifient pas" },
      {
        type: "p",
        text: "Une confusion fréquente consiste à croire que ces quatre degrés, une fois établis, dispenseraient l’homme de tout effort — puisque tout serait « déjà écrit ». Cette lecture est un contresens complet : **la foi au qadar est un des piliers de la foi, non une méthode de gestion du quotidien**. On agit selon les causes visibles que Dieu a établies dans le monde, en s’appuyant sur elles avec sérieux, tout en sachant intérieurement que leur efficacité même dépend de la volonté divine.",
      },
      {
        type: "quote",
        text:
          "قال الإمام القرطبي: **مَنْ تَرَكَ الْعَمَلَ بِالْأَسْبَابِ اعْتِمَادًا عَلَى الْقَدَرِ فَقَدْ خَالَفَ سُنَّةَ اللهِ فِي خَلْقِهِ**، فَإِنَّ اللهَ **أَمَرَ بِالسَّعْيِ وَقَدَّرَ نَتَائِجَهُ**، وَلَمْ يَأْمُرْ بِتَعْطِيلِ الْأَسْبَابِ.\n\nL’imām al-Qurṭubī a dit : **celui qui abandonne l’usage des causes en s’appuyant sur le décret a contredit la coutume qu’Allāh a établie dans Sa création**, car Allāh **a ordonné l’effort et Il en a décrété les résultats**, et Il n’a pas ordonné l’abolition des causes.",
        source: "al-Qurṭubī, al-Jāmiʿ li-aḥkām al-Qurʾān (paraphrase de son enseignement)",
      },
      {
        type: "experiment",
        title: "Le voyageur et la carte déjà tracée",
        steps: [
          "Un voyageur reçoit une carte détaillée d’un itinéraire, tracée à l’avance par un guide qui connaît toute la région.",
          "Il ne sait pas, lui, ce que la carte contient à l’avance : il découvre le chemin marche après marche.",
          "S’il refuse de marcher en disant « le chemin est déjà tracé, à quoi bon avancer », il n’atteindra jamais la destination.",
          "S’il marche avec sérieux, il **réalise** exactement ce que la carte, invisible à ses yeux, avait déjà fixé.",
        ],
        conclusion:
          "Le décret n’est pas un obstacle à l’effort : il est la condition même qui rend l’effort du voyageur significatif et efficace.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Un piège fréquent : figer le degré 3 en degré 4",
        text: "Certains, ayant compris que Dieu **crée** tout, en concluent hâtivement que Dieu **aime** ou **approuve** tout ce qui existe, y compris le péché. C’est confondre la volonté créatrice (degré 3) avec l’agrément moral, qui ne se pose que sur le bien. **Dieu crée le vol, mais Il n’aime pas le voleur ni son acte.**",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Ces quatre degrés — science, écriture, volonté, création — ne sont pas quatre croyances séparées, mais **une seule vérité déployée en quatre moments logiques**, chacun impliquant nécessairement celui qui le précède. Nier l’un quelconque, c’est fissurer tout l’édifice de la foi au qadar ; les affirmer tous ensemble, sans les confondre l’un avec l’autre, c’est retrouver la voie médiane que le Coran, la Sunna et le consensus des savants de la communauté ont transmise, génération après génération, jusqu’à nous.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("L'invocation change-t-elle ce qui est écrit ?"),
    title: "L'invocation change-t-elle ce qui est écrit ?",
    arabic: "الدعاء والقدر",
    intro:
      "Si tout est déjà écrit sur la Table préservée, à quoi sert l’invocation (**duʿāʾ**) ? La question hante quiconque a supplié Dieu avec ardeur pour une chose et se demande si sa prière a réellement compté, ou si elle n’était qu’un mouvement des lèvres sans effet sur un destin déjà scellé. Cette interrogation, en apparence redoutable, se dissout dès que l’on comprend correctement la nature du décret et la place que l’invocation y occupe elle-même.\n\nLe Coran et la Sunna sont d’une clarté totale sur l’efficacité de l’invocation : elle est présentée comme une **cause** parmi les causes que Dieu a instituées, et non comme un geste vain adressé à un mur déjà achevé. Le paradoxe apparent — « c’est écrit, donc pourquoi prier » — repose sur une confusion entre ce que l’homme ignore (le contenu du décret) et ce que Dieu sait déjà (que telle personne priera, et que sa prière produira tel effet, lui-même décrété).\n\nCe sujet montrera que l’invocation n’est pas extérieure au décret : **elle en fait partie**, comme une des causes qu’Allāh a inscrites, parmi les effets qu’Il a inscrits, dans l’enchaînement qu’Il a Lui-même voulu.",
    body: [
      { type: "h2", text: "L’invocation, une cause parmi les causes décrétées" },
      {
        type: "p",
        text: "Il faut d’abord dissiper une image fausse : celle d’un décret figé comme un bloc de pierre, extérieur au monde, sur lequel rien de ce qui se passe ensuite ne pourrait avoir d’incidence. Le décret divin n’enregistre pas seulement les **résultats** : il enregistre l’**enchaînement complet des causes et des effets**, dont l’invocation fait pleinement partie. Si Dieu a décrété qu’un malade guérira, Il a aussi décrété, dans le même mouvement, que cette guérison surviendrait **par le moyen** de l’invocation de sa mère, ou du remède qu’il prendra, ou du médecin qu’il consultera.",
      },
      {
        type: "verse",
        arabic:
          "وَقَالَ رَبُّكُمُ **ٱدْعُونِى أَسْتَجِبْ لَكُمْ** ۚ إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِى سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ",
        translation:
          "Et votre Seigneur a dit : **« Invoquez-Moi, Je vous répondrai. »** Ceux qui s’enflent d’orgueil au point de ne pas M’adorer entreront dans l’Enfer, humiliés.",
        reference: "Coran, Ghāfir, 40:60",
      },
      {
        type: "p",
        text: "Une promesse aussi ferme — « Je vous répondrai » — ne se comprend que si l’invocation possède une **efficacité réelle** dans l’ordre des causes que Dieu a établies. Si l’invocation était sans effet, cette promesse divine serait sans objet, ce qui est inconcevable dans la parole d’Allāh, exempt de toute contradiction.",
      },
      {
        type: "lexique",
        root: "د ع و",
        transliteration: "d-ʿ-w",
        sense:
          "Appeler, invoquer, adresser une demande. De cette racine vient **duʿāʾ**, l’invocation, acte par lequel le serviteur reconnaît son besoin et s’adresse à Celui qui peut y répondre.",
        derives: [
          { word: "duʿāʾ", arabic: "دُعَاء", gloss: "L’invocation, la demande adressée à Dieu." },
          { word: "dāʿī", arabic: "دَاعٍ", gloss: "Celui qui invoque, qui appelle." },
          { word: "istijāba", arabic: "اِسْتِجَابَة", gloss: "La réponse favorable accordée à l’invocation." },
        ],
        note:
          "**وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ** — « Et si Mes serviteurs t’interrogent sur Moi, Je suis proche. » (2:186)",
      },
      { type: "h2", text: "La parole du Prophète ﷺ sur l’efficacité de l’invocation" },
      {
        type: "quote",
        text:
          "عن سلمان الفارسي رضي الله عنه، عن رسول الله ﷺ قال: **لَا يَرُدُّ الْقَضَاءَ إِلَّا الدُّعَاءُ**.\n\nD’après Salmān al-Fārisī, qu’Allāh l’agrée, le Messager d’Allāh ﷺ a dit : **« Rien ne repousse le décret si ce n’est l’invocation. »**",
        source: "Rapporté par al-Tirmidhī et al-Ḥākim",
      },
      {
        type: "p",
        text: "Ce hadith semble, à première lecture, ouvrir une brèche dans l’immutabilité du décret : l’invocation « repousserait » ce qui a été fixé. Il faut le comprendre à la lumière de la distinction entre les **deux sortes de décret** que les savants ont dégagées : le décret « suspendu » (**al-qaḍāʾ al-muʿallaq**), qui est lié à une condition dans la science divine — « telle chose arrivera à moins que telle invocation ne soit faite » — et le décret « scellé » (**al-qaḍāʾ al-mubram**), qui n’est conditionné par rien.",
      },
      {
        type: "balance",
        title: "Deux sortes de décret, selon les savants",
        arabic: "القضاء المعلَّق والقضاء المبرَم",
        affirmLabel: "Le décret suspendu (muʿallaq)",
        denyLabel: "Le décret scellé (mubram)",
        affirm: [
          "Fixé dans la science divine **avec sa condition** : « ceci arrivera si l’invocation n’est pas faite ».",
          "L’invocation en fait partie intégrante comme **cause de son évitement**.",
          "C’est le sens du hadith : « rien ne repousse le décret si ce n’est l’invocation ».",
          "Explique pourquoi tant de malheurs annoncés par les signes sont finalement détournés.",
        ],
        deny: [
          "Fixé **sans condition aucune** dans la science divine, il survient inéluctablement.",
          "Aucune invocation, aussi sincère soit-elle, ne le fait dévier — car Dieu savait déjà qu’elle ne le ferait pas dévier.",
          "La mort au terme fixé, la fin du monde à son heure, en sont des exemples.",
          "S’y résigner avec foi, une fois qu’il survient, est le sommet de la patience (**riḍā**).",
        ],
        caption: "La distinction n’est pas connue de l’homme au moment où il invoque — ce qui rend l’invocation toujours nécessaire.",
      },
      { type: "h3", text: "Pourquoi l’ignorance du serviteur rend l’invocation obligatoire" },
      {
        type: "p",
        text: "Puisque l’homme ne sait jamais, au moment où il invoque, si ce qu’il redoute relève du décret suspendu ou du décret scellé, **il doit invoquer dans tous les cas**. S’il s’agit d’un décret suspendu, son invocation en sera la cause du détournement, exactement comme Dieu l’avait prévu. S’il s’agit d’un décret scellé, son invocation ne restera pas sans fruit : elle lui vaudra une récompense, ou un bien différent de celui qu’il demandait, ainsi que l’a enseigné le Prophète ﷺ.",
      },
      {
        type: "quote",
        text:
          "عن أبي سعيد الخدري رضي الله عنه، عن رسول الله ﷺ قال: **مَا مِنْ مُسْلِمٍ يَدْعُو بِدَعْوَةٍ لَيْسَ فِيهَا إِثْمٌ وَلَا قَطِيعَةُ رَحِمٍ إِلَّا أَعْطَاهُ اللَّهُ بِهَا إِحْدَى ثَلَاثٍ**: إِمَّا أَنْ تُعَجَّلَ لَهُ دَعْوَتُهُ، وَإِمَّا أَنْ يَدَّخِرَهَا لَهُ فِي الْآخِرَةِ، وَإِمَّا أَنْ يَصْرِفَ عَنْهُ مِنَ الشَّرِّ مِثْلَهَا.\n\nD’après Abū Saʿīd al-Khudrī, qu’Allāh l’agrée, le Messager d’Allāh ﷺ a dit : **« Nul musulman n’invoque Allāh d’une invocation ne comportant ni péché ni rupture des liens de parenté, sans qu’Allāh ne lui accorde l’une de trois choses : soit Il lui accorde rapidement ce qu’il demande, soit Il le lui réserve pour l’au-delà, soit Il détourne de lui un mal équivalent. »**",
        source: "Rapporté par Aḥmad",
      },
      { type: "h2", text: "L’objection logique et sa réponse" },
      {
        type: "p",
        text: "L’objection revient sous une forme plus rigoureuse : si Dieu sait déjà, avant que j’invoque, quel sera le sort qu’Il m’accordera — invocation entendue ou non — alors mon invocation ne « change » rien, puisque le résultat était déjà fixé indépendamment d’elle. Cette objection repose sur une erreur discrète : elle imagine un résultat fixé **sans** l’invocation, puis se demande si l’invocation, ajoutée après coup, peut le modifier. Or ce n’est pas ainsi que fonctionne la science divine : **Dieu n’a pas décrété le résultat, puis séparément l’invocation** ; Il a décrété, en un seul acte de science, l’ensemble « telle personne invoquera, et en conséquence telle chose lui sera accordée ». L’invocation n’est pas ajoutée après le décret : **elle est comprise dans le décret comme cause de son effet**.",
      },
      {
        type: "experiment",
        title: "La clé et la porte déjà fabriquée",
        steps: [
          "Un serrurier fabrique, en une seule opération, une porte et sa clé, conçues l’une pour l’autre.",
          "Celui qui reçoit la clé pourrait se demander : « la porte s’ouvrira-t-elle vraiment si j’utilise la clé, puisque tout est déjà fabriqué ? »",
          "La question est mal posée : la porte a été fabriquée **pour s’ouvrir par cette clé**, non indépendamment d’elle.",
          "Utiliser la clé n’est pas superflu : c’est **précisément le moyen** par lequel l’ouverture, déjà prévue, se réalise.",
        ],
        conclusion:
          "De même, l’invocation n’est pas extérieure au décret qui accorde la faveur : elle est le moyen même par lequel ce décret, de toute éternité, avait prévu que la faveur serait obtenue.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Ce que « rien ne repousse le décret que l’invocation » signifie vraiment",
        text: "Ce hadith ne dit pas que l’homme, par sa prière, **modifie après coup** la science éternelle de Dieu. Il dit que **l’invocation est elle-même inscrite** parmi les moyens par lesquels certains décrets, dits suspendus, s’accomplissent d’une façon plutôt que d’une autre — exactement comme le remède est inscrit parmi les moyens de la guérison.",
      },
      { type: "h2", text: "Ce que cela signifie dans la vie du croyant" },
      {
        type: "p",
        text: "Loin d’être un geste dérisoire face à un destin scellé, l’invocation est présentée par la Révélation comme **l’arme la plus efficace du croyant**, précisément parce qu’elle agit à l’intérieur même de l’ordre décrété, et non en marge de lui. Ne pas invoquer, sous prétexte que « tout est déjà écrit », revient à négliger l’une des causes que Dieu a explicitement désignées comme efficaces — une négligence que nul ne songerait à appliquer, par exemple, au remède ou au travail, dont l’efficacité dépend pourtant tout autant du décret.",
      },
      {
        type: "quote",
        text:
          "قال الإمام ابن القيم: **الدعاء من أقوى الأسباب في دفع المكروه وحصول المطلوب**، وهو من القدر، **فلا يُعارِض القدر بل هو من جملته**، كما أن دفع الجوع بالأكل والعطش بالشرب من القدر لا مناقضة له.\n\nL’imām Ibn al-Qayyim a dit : **l’invocation est l’une des causes les plus puissantes pour repousser ce qui est redouté et obtenir ce qui est demandé**, et elle relève du décret ; **elle ne s’oppose donc pas au décret, mais en fait partie**, tout comme repousser la faim par la nourriture, ou la soif par la boisson, relève du décret sans le contredire.",
        source: "Ibn al-Qayyim al-Jawziyya, Shifāʾ al-ʿalīl (paraphrase de son enseignement)",
      },
      {
        type: "schema",
        title: "L’invocation dans l’ordre du décret",
        variant: "flow",
        nodes: [
          { label: "Décret suspendu", arabic: "المعلَّق", note: "Fixé dans la science divine avec sa condition." },
          { label: "Le serviteur invoque", arabic: "الدعاء", note: "Cause instituée par Dieu Lui-même." },
          { label: "La condition s’accomplit", note: "L’invocation réalise exactement ce que la condition prévoyait." },
          { label: "L’effet survient", note: "Le mal redouté est détourné, ou le bien demandé est accordé." },
        ],
        caption: "L’invocation n’intervient jamais « contre » le décret ; elle intervient toujours « dans » le décret.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’invocation ne change pas ce qui est écrit dans le sens où elle contredirait après coup la science éternelle de Dieu — ce qui serait absurde. Mais elle **fait partie de ce qui est écrit**, comme cause voulue de ses effets, et Dieu a explicitement promis d’y répondre. **Invoquer n’est donc jamais vain**, que la réponse survienne ici-bas, soit réservée pour l’au-delà, ou se change en protection contre un mal égal : dans les trois cas, l’invocation aura produit exactement ce que le décret, de toute éternité, avait prévu qu’elle produirait.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("De la justice divine et de la souffrance humaine"),
    title: "De la justice divine et de la souffrance humaine",
    arabic: "العدل الإلهي والألم البشري",
    intro:
      "Devant l’enfant malade, devant le tremblement de terre qui ensevelit des villages, devant l’injustice qui semble triompher sans être châtiée, une question monte du cœur avant même de se formuler par la raison : **si Dieu est juste et miséricordieux, pourquoi la souffrance ?** Cette question, la plus vieille de la théodicée, mérite d’être traitée avec la rigueur et la révérence qu’exige son objet, sans céder ni à la facilité d’une réponse toute faite, ni au vertige d’un doute qui se prendrait pour de la lucidité.\n\nLa théologie mālikite-ashʿarite refuse deux positions extrêmes. Elle refuse de dire, comme certains philosophes, que Dieu serait **soumis** à une norme de justice extérieure à Lui, qu’Il devrait respecter sous peine d’être injuste — car alors Il ne serait plus le Souverain absolu. Elle refuse également de dire que la notion de justice n’aurait, appliquée à Dieu, strictement aucun sens, ce qui rendrait toute confiance et toute espérance absurdes. La voie médiane affirme que **la justice divine se définit par ce que Dieu fait**, et non l’inverse — tout en montrant que ce que Dieu fait n’est jamais arbitraire, mais empreint d’une sagesse (ḥikma) que la raison humaine peut en partie discerner, sans jamais l’épuiser.\n\nOn examinera d’abord la définition théologique de la justice divine, puis les fonctions multiples que peut revêtir la souffrance dans la sagesse divine, avant de conclure sur la posture intérieure qu’exige, devant l’épreuve, la foi bien comprise au décret.",
    body: [
      { type: "h2", text: "Dieu n’est pas jugé par une norme extérieure à Lui" },
      {
        type: "p",
        text: "La première clarification, décisive, tient en une formule : **Dieu n’est pas injuste parce qu’Il violerait une loi de justice qui Lui serait supérieure — Il n’existe aucune loi supérieure à Lui**. La justice, chez Dieu, n’est pas la conformité à une norme extérieure, comme chez l’homme qui est juste lorsqu’il se conforme à une règle qu’il n’a pas créée. **Chez Dieu, la justice consiste à mettre chaque chose exactement à la place qu’Il a voulue pour elle**, et Sa disposition des choses, quelle qu’elle soit, ne peut par définition être qualifiée d’injuste, car l’injustice suppose de disposer d’une chose qui ne vous appartient pas, ou de violer un droit qu’un autre posséderait sur vous — et rien n’appartient à Dieu qu’Il n’ait Lui-même créé, et nul n’a de droit sur Lui qui précéderait Sa volonté.",
      },
      {
        type: "verse",
        arabic:
          "وَمَا كَانَ ٱللَّهُ لِيَظْلِمَهُمْ **وَلَٰكِن كَانُوٓا أَنفُسَهُمْ يَظْلِمُونَ**",
        translation:
          "Et Allāh ne les a jamais lésés ; **mais ce sont eux-mêmes qui se sont lésés.**",
        reference: "Coran, al-Naḥl, 16:118",
      },
      {
        type: "p",
        text: "Ce verset, répété sous plusieurs formes dans le Coran, mérite d’être médité longuement : **jamais**, dans la Révélation, un châtiment ou une épreuve n’est présenté comme la marque d’une injustice divine, mais comme la conséquence — visible ou cachée — d’un ordre que Dieu a établi avec sagesse. L’homme, souvent, porte lui-même une part de responsabilité qu’il préfère ne pas voir ; et quand il n’en porte aucune, la sagesse divine dépasse alors les catégories que sa vue limitée peut embrasser.",
      },
      {
        type: "lexique",
        root: "ع د ل",
        transliteration: "ʿ-d-l",
        sense:
          "Mettre chaque chose à sa juste place, équilibrer, ne rien faire pencher indûment. De cette racine vient **ʿadl** (la justice), attribut d’action divine par lequel toute chose reçoit exactement ce qui lui convient dans l’ordre voulu par Dieu.",
        derives: [
          { word: "ʿadl", arabic: "عَدْل", gloss: "La justice ; l’un des Beaux Noms invoqués implicitement dans le Coran." },
          { word: "ʿadāla", arabic: "عَدَالَة", gloss: "L’équité, la rectitude de jugement." },
          { word: "muʿtadil", arabic: "مُعْتَدِل", gloss: "Ce qui est équilibré, ce qui ne penche vers aucun excès." },
        ],
        note:
          "**إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَٰنِ** — « Certes, Allāh ordonne la justice et la bienfaisance. » (16:90)",
      },
      { type: "h2", text: "Trois fonctions de la souffrance dans la sagesse divine" },
      {
        type: "p",
        text: "Si la raison ne peut prétendre percer entièrement la sagesse divine derrière chaque souffrance particulière, elle peut néanmoins, guidée par la Révélation, discerner plusieurs fonctions générales que l’épreuve remplit dans l’ordre du monde. Ces fonctions ne s’excluent pas ; souvent, plusieurs se conjuguent dans un même malheur.",
      },
      { type: "h3", text: "Première fonction : l’épreuve qui distingue et élève" },
      {
        type: "verse",
        arabic:
          "وَلَنَبْلُوَنَّكُم بِشَىْءٍ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ وَنَقْصٍ مِّنَ ٱلْأَمْوَٰلِ وَٱلْأَنفُسِ وَٱلثَّمَرَٰتِ ۗ **وَبَشِّرِ ٱلصَّٰبِرِينَ**",
        translation:
          "Nous vous éprouverons certainement par un peu de peur, de faim, de diminution de biens, de personnes et de fruits. **Et annonce la bonne nouvelle à ceux qui sont endurants.**",
        reference: "Coran, al-Baqara, 2:155",
      },
      {
        type: "p",
        text: "L’épreuve fonctionne, dans cette perspective, comme le feu qui affine le métal : elle révèle la qualité réelle d’une foi qu’aucune aisance ne mettait à l’épreuve, et elle élève, par la patience qu’elle suscite, une station spirituelle qu’un confort permanent n’aurait jamais permis d’atteindre.",
      },
      { type: "h3", text: "Deuxième fonction : le rappel qui réveille" },
      {
        type: "verse",
        arabic:
          "ظَهَرَ ٱلْفَسَادُ فِى ٱلْبَرِّ وَٱلْبَحْرِ بِمَا كَسَبَتْ أَيْدِى ٱلنَّاسِ **لِيُذِيقَهُم بَعْضَ ٱلَّذِى عَمِلُوا لَعَلَّهُمْ يَرْجِعُونَ**",
        translation:
          "La corruption est apparue sur la terre et dans la mer, à cause de ce que les mains des hommes ont accompli, **afin qu’Il leur fasse goûter une partie de ce qu’ils ont fait, dans l’espoir qu’ils reviennent (à Lui).**",
        reference: "Coran, al-Rūm, 30:41",
      },
      {
        type: "p",
        text: "Certaines souffrances, individuelles ou collectives, fonctionnent comme un rappel salutaire : elles interrompent une insouciance qui menait à un péril plus grand encore, celui de l’oubli complet de Dieu. Le mal ressenti devient, dans cette économie, un moindre mal qui prévient un mal plus vaste.",
      },
      { type: "h3", text: "Troisième fonction : l’effacement des fautes et l’élévation du rang" },
      {
        type: "quote",
        text:
          "عن عائشة رضي الله عنها، عن رسول الله ﷺ قال: **مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ، حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ**.\n\nD’après ʿĀʾisha, qu’Allāh l’agrée, le Messager d’Allāh ﷺ a dit : **« Il n’atteint le musulman ni fatigue, ni maladie, ni souci, ni tristesse, ni tort, ni chagrin, pas même une épine qui le pique, sans qu’Allāh n’efface par cela une partie de ses péchés. »**",
        source: "Rapporté par al-Bukhārī",
      },
      {
        type: "p",
        text: "Ce hadith renverse la perspective : la souffrance, loin d’être toujours un signe de châtiment, peut être **une miséricorde déguisée**, une purification qui allège le compte de l’au-delà, à condition que le serviteur l’accueille avec la patience requise plutôt qu’avec la révolte.",
      },
      {
        type: "balance",
        title: "Ce que la souffrance n’est jamais, et ce qu’elle peut être",
        affirmLabel: "Ce qu’elle peut légitimement être",
        denyLabel: "Ce qu’elle n’est jamais nécessairement",
        affirm: [
          "Une **épreuve** qui distingue et élève la station de celui qui l’endure avec patience.",
          "Un **rappel** salutaire qui détourne d’un péril plus grave.",
          "Une **purification** qui efface des fautes et allège le compte futur.",
          "Un **mystère de sagesse** que la raison humaine, limitée, ne perce pas toujours.",
        ],
        deny: [
          "Une preuve certaine que Dieu serait **injuste** envers celui qui souffre.",
          "Un signe automatique de **châtiment mérité** — le juste souffre aussi, et davantage parfois.",
          "Une raison de **désespérer** de la miséricorde divine.",
          "Une réalité **arbitraire**, sans aucune sagesse la sous-tendant, même cachée.",
        ],
        caption: "Le même malheur peut relever de plusieurs de ces fonctions à la fois, connues de Dieu seul dans le détail.",
      },
      { type: "h2", text: "La limite de la raison humaine devant la sagesse divine" },
      {
        type: "p",
        text: "Il ne faut pas prétendre que la raison humaine puisse, cas par cas, assigner à chaque souffrance particulière sa fonction précise dans la sagesse divine. Ce serait usurper une connaissance qui appartient à Dieu seul. Ce que la théologie peut établir, c’est le principe **général** : rien de ce que Dieu fait n’est dénué de sagesse, même lorsque cette sagesse échappe entièrement à notre regard, à cause de la disproportion radicale entre notre vue, bornée par le temps et l’espace, et la Sienne, qui embrasse la totalité des causes et des fins.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الرازي: **مَنْ طَلَبَ عِلَّةً لِكُلِّ فِعْلِ اللهِ فِي التَّفْصِيلِ فَقَدْ حَمَّلَ عَقْلَهُ مَا لَا يَحْمِلُهُ**، وَالصَّوَابُ أَنْ يُعْلَمَ أَنَّ **أَفْعَالَهُ كُلَّهَا حِكْمَةٌ**، وَإِنْ عَجَزَ الْعَقْلُ عَنِ اسْتِقْصَاءِ وُجُوهِهَا.\n\nL’imām al-Rāzī a dit : **quiconque cherche une cause précise à chaque acte détaillé de Dieu a chargé sa raison d’un poids qu’elle ne peut porter**, et le juste est de savoir que **tous Ses actes sont sagesse**, même si la raison est incapable d’en épuiser tous les aspects.",
        source: "Fakhr al-Dīn al-Rāzī, al-Tafsīr al-kabīr",
      },
      {
        type: "experiment",
        title: "L’enfant devant l’opération chirurgicale",
        steps: [
          "Un enfant subit une opération douloureuse, décidée par ses parents, qu’il ne comprend pas et qu’il vit comme une pure souffrance injuste.",
          "Les parents, eux, voient l’ensemble : la maladie invisible, le pronostic, la guérison à venir.",
          "L’enfant, s’il jugeait ses parents « injustes » sur la seule base de sa douleur présente, se tromperait — non parce que sa douleur est irréelle, mais parce que sa vue est partielle.",
          "Sa confiance en l’amour de ses parents, malgré l’incompréhension, n’est pas naïve : elle est **fondée sur ce qu’il connaît déjà d’eux**.",
        ],
        conclusion:
          "De même, la confiance du croyant devant l’épreuve incompréhensible se fonde sur ce qu’il connaît déjà, par ailleurs, de la sagesse et de la miséricorde de Dieu — non sur une compréhension totale de chaque détail.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ce que la souffrance d’autrui ne nous autorise pas",
        text: "Voir souffrir un innocent ne nous autorise jamais à conclure, à sa place, que Dieu lui est injuste : ce jugement usurpe une connaissance que nous n’avons pas. Il **nous** autorise, en revanche, à agir avec compassion pour soulager cette souffrance — car la foi au décret n’abolit jamais le devoir d’entraide.",
      },
      { type: "h2", text: "La souffrance et le mystère de l’au-delà" },
      {
        type: "p",
        text: "Un dernier élément, essentiel, complète ce tableau : la vie d’ici-bas n’est **pas le lieu de la rétribution définitive**. Le déséquilibre apparent entre le mérite et le sort — l’injuste qui prospère, le juste qui souffre — n’est un scandale que si l’on suppose, à tort, que le compte se clôture ici. Le Coran insiste sans relâche sur le Jour où toute chose sera pesée avec une exactitude parfaite, où **pas un atome de bien ou de mal ne sera omis**.",
      },
      {
        type: "verse",
        arabic:
          "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ **وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُۥ**",
        translation:
          "Quiconque aura fait un poids d’un atome de bien le verra. **Et quiconque aura fait un poids d’un atome de mal le verra.**",
        reference: "Coran, al-Zalzala, 99:7-8",
      },
      {
        type: "schema",
        title: "La souffrance dans l’économie complète de la justice",
        variant: "flow",
        nodes: [
          { label: "Épreuve ici-bas", note: "Souffrance visible, souvent incomprise dans son détail." },
          { label: "Fonctions cachées", note: "Élévation, rappel, purification — connues pleinement de Dieu seul." },
          { label: "Compte non clos", note: "La vie d’ici-bas n’épuise pas la rétribution." },
          { label: "Jour de la pesée exacte", arabic: "الميزان", note: "Chaque atome de bien et de mal est restitué avec une justice parfaite." },
        ],
        caption: "Juger la justice divine sur la seule scène d’ici-bas revient à juger une pièce de théâtre en n’en voyant que le premier acte.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La justice divine n’est donc pas mise en péril par l’existence de la souffrance humaine, pour trois raisons qui se soutiennent mutuellement : **Dieu n’est soumis à aucune norme extérieure qui rendrait Ses actes contestables** ; **la souffrance remplit, selon les cas, des fonctions de sagesse que la raison discerne en partie et que la Révélation confirme** ; et **la scène présente n’épuise pas le compte, qui trouvera sa clôture exacte au Jour de la pesée**. Devant l’épreuve, la posture juste n’est ni la révolte, qui prétend juger Dieu sur une connaissance partielle, ni la résignation passive qui abandonnerait tout effort : c’est la **patience active** (ṣabr), qui endure avec foi tout en œuvrant, par les moyens licites, à soulager ce qui peut l’être.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Le mal existe-t-il en soi, ou seulement comme privation ?"),
    title: "Le mal existe-t-il en soi, ou seulement comme privation ?",
    arabic: "الشر: وجود أم عدم؟",
    intro:
      "La question paraît d’abord purement spéculative : le mal a-t-il, en lui-même, une existence positive, une réalité propre que Dieu aurait créée telle quelle — ou n’est-il, en dernière analyse, qu’une **absence**, un manque de bien là où le bien devrait se trouver ? Cette question, héritée pour une part de la philosophie et retravaillée par les théologiens musulmans, n’est pas un jeu de l’esprit : elle conditionne directement la manière dont on comprend l’attribution du mal à Dieu dans l’ordre de la création, et la manière dont on innocente Sa sagesse sans nier la réalité de ce qu’endurent les créatures.\n\nLa position que ce sujet expose et défend — celle qui a la faveur de nombreux théologiens ashʿarites tout en restant prudente sur sa portée — établit une distinction entre le mal **moral** (le péché, l’injustice), qui est un acte réellement existant bien que privé de la rectitude qu’il devrait avoir, et le mal dit **de souffrance ou de nature** (la maladie, la mort, la perte), qui se comprend largement, quoique non exclusivement, comme une **privation** (ʿadam) d’un bien qui devrait exister — la santé, la vie, l’intégrité — plutôt que comme une chose positive créée pour elle-même.\n\nOn montrera que cette analyse, loin d’être une esquive verbale, permet de comprendre pourquoi le Coran attribue systématiquement à Dieu la création du bien de façon directe, et rattache le mal, quand il l’évoque, à des causes secondes ou à une économie de sagesse — sans jamais présenter le mal comme une fin recherchée pour elle-même dans l’acte créateur.",
    body: [
      { type: "h2", text: "Poser la distinction : le mal moral et le mal de souffrance" },
      {
        type: "p",
        text: "Il faut distinguer, avant tout examen, deux catégories que le langage courant confond souvent sous le même mot « mal ». Le **mal moral** est un acte volontaire — mensonge, injustice, cruauté — qui possède une réalité positive en tant qu’acte (il existe bel et bien un mouvement, une parole, une décision), mais qui est **privé** de la conformité qu’il devrait avoir à l’ordre voulu par Dieu. Le **mal de souffrance ou de nature**, en revanche — la maladie, la cécité, le tremblement de terre — se comprend, dans une large mesure, comme l’**absence** d’un bien attendu : la maladie est absence de santé, la cécité est absence de vue, la mort est absence de vie.",
      },
      {
        type: "p",
        text: "Cette distinction n’est pas un artifice : elle correspond à une intuition profonde de la raison. **On ne définit jamais un mal sans référence à un bien dont il est le manque.** La maladie ne se décrit que par contraste avec la santé qu’elle empêche ; l’injustice ne se comprend que par contraste avec le droit qu’elle bafoue. Le mal, en ce sens, est **second** par rapport au bien : il n’a de sens et de définition que relativement à lui, tandis que le bien se définit en lui-même.",
      },
      {
        type: "lexique",
        root: "ع د م",
        transliteration: "ʿ-d-m",
        sense:
          "Manquer, être privé de, faire défaut. De cette racine vient **ʿadam**, la non-existence ou la privation, notion technique centrale pour comprendre le statut ontologique du mal.",
        derives: [
          { word: "ʿadam", arabic: "عَدَم", gloss: "La non-existence, la privation d’un bien qui devrait être présent." },
          { word: "maʿdūm", arabic: "مَعْدُوم", gloss: "Ce qui est privé d’existence, ou d’un attribut positif attendu." },
          { word: "iʿtidām", arabic: "اِعْتِدَام", gloss: "L’état de manque, de disparition d’un bien préexistant." },
        ],
        note:
          "Les théologiens distinguent le mal **positif** (un acte mauvais, qui existe) du mal **privatif** (l’absence d’un bien, qui n’a pas, en soi, de réalité propre).",
      },
      { type: "h2", text: "Ce que le Coran affirme sur la création du bien et du mal" },
      {
        type: "verse",
        arabic: "**مَّآ أَصَابَكَ مِنْ حَسَنَةٍ فَمِنَ ٱللَّهِ** وَمَآ أَصَابَكَ مِن سَيِّئَةٍ فَمِن نَّفْسِكَ",
        translation: "**Ce qui t’atteint de bien vient d’Allāh**, et ce qui t’atteint de mal vient de toi-même.",
        reference: "Coran, al-Nisāʾ, 4:79",
      },
      {
        type: "p",
        text: "Ce verset établit une **dissymétrie voulue** dans le langage même de la Révélation : le bien est explicitement rapporté à Dieu comme source directe, tandis que le mal — au sens du malheur qui frappe l’homme — est rapporté à l’homme lui-même, à ses actes, à ses causes secondes. Cette dissymétrie n’est pas contredite par la croyance, établie ailleurs, que Dieu crée toute chose : elle indique que **le mode d’attribution** du bien et du mal à Dieu n’est pas identique, l’un étant direct et positif, l’autre passant par l’intermédiaire d’une cause seconde et d’une privation.",
      },
      {
        type: "verse",
        arabic:
          "قُلْ **كُلٌّ مِّنْ عِندِ ٱللَّهِ** ۖ فَمَالِ هَـٰٓؤُلَآءِ ٱلْقَوْمِ لَا يَكَادُونَ يَفْقَهُونَ حَدِيثًا",
        translation: "Dis : **« Tout vient d’Allāh. »** Qu’ont donc ces gens à ne comprendre presque aucune parole ?",
        reference: "Coran, al-Nisāʾ, 4:78",
      },
      {
        type: "p",
        text: "Le verset précédent, dans le même passage, affirme que **tout** — y compris ce qui semble mal — provient d’Allāh au sens de la création et du décret. Il n’y a pas contradiction avec le verset 4:79 : au niveau de la **création globale** de toute chose existante, tout procède d’Allāh, y compris les actes mauvais en tant qu’événements existants ; mais au niveau de l’**attribution morale et de la qualification** — dire que ceci est un « mal » — la Révélation réserve le mode d’expression direct au bien, et rattache le mal à l’homme ou à une privation.",
      },
      {
        type: "balance",
        title: "Deux niveaux d’attribution, pour ne pas confondre",
        affirmLabel: "Création (khalq)",
        denyLabel: "Acquisition et qualification (kasb)",
        affirm: [
          "Tout ce qui existe, **y compris l’acte mauvais en tant qu’événement**, est créé par Allāh.",
          "Rien n’advient **hors de Sa volonté** ni de Son savoir éternel.",
        ],
        deny: [
          "Le **mal en tant que mal** n’est pas attribué à Lui par mode direct.",
          "L’homme **acquiert** son acte et en porte la responsabilité morale.",
        ],
      },
      {
        type: "quote",
        text: "PLACEHOLDER_NEVER_USED",
      },
    ],
  },
];
