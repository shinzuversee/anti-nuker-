import { slugifySujet, type Sujet } from "./sujet-core";

/** Suite du groupe « Le décret divin ». */
export const sujetsDieuQadar2: Sujet[] = [
  {
    slug: slugifySujet("Ce que « Dieu égare qui Il veut » signifie, et ne signifie pas"),
    title: "Ce que « Dieu égare qui Il veut » signifie, et ne signifie pas",
    arabic: "الإضلال",
    intro:
      "C'est l'un des versets que l'on cite le plus vite, et que l'on comprend le plus mal. « Il égare qui Il veut et guide qui Il veut » : lu isolément, l'énoncé donne l'image d'un tirage au sort. Lu dans le Coran entier, il dit tout autre chose — et cette autre chose est bien plus exigeante.",
    body: [
      { type: "h2", text: "Le verset et son voisinage" },
      {
        type: "verse",
        arabic: "**فَيُضِلُّ ٱللَّهُ مَن يَشَآءُ وَيَهْدِى مَن يَشَآءُ** ۚ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
        translation:
          "**Allāh égare alors qui Il veut et guide qui Il veut**, et Il est le Puissant, le Sage.",
        reference: "Coran, Ibrāhīm, 14:4",
      },
      {
        type: "p",
        text: "Deux mots ferment la phrase : **al-ʿAzīz al-Ḥakīm**. La volonté dont il est question n'est pas un caprice : elle est qualifiée de sage dans le mouvement même du verset. Al-Shinqīṭī fait de cette clôture la clé de lecture : chaque fois que le Coran mentionne l'égarement, il en indique ailleurs la **cause**.",
      },
      { type: "h2", text: "Les causes que le Coran indique lui-même" },
      {
        type: "list",
        items: [
          "L'injustice persistante : « Allāh n'égare que les injustes » (14:27).",
          "Le refus délibéré après la clarté : « lorsqu'ils dévièrent, Allāh fit dévier leurs cœurs » (61:5).",
          "L'orgueil : « Ainsi Allāh scelle le cœur de tout orgueilleux tyrannique » (40:35).",
          "Le mensonge et l'excès : « Allāh n'égare pas un peuple après l'avoir guidé, avant de lui avoir exposé ce dont il doit se garder » (9:115).",
        ],
      },
      {
        type: "verse",
        arabic: "**فَلَمَّا زَاغُوٓا۟ أَزَاغَ ٱللَّهُ قُلُوبَهُمْ**",
        translation:
          "**Puis, lorsqu'ils dévièrent, Allāh fit dévier leurs cœurs.**",
        reference: "Coran, al-Ṣaff, 61:5",
      },
      {
        type: "p",
        text: "L'ordre des deux verbes est décisif : la déviation de l'homme **précède**, la sanction divine **suit**. Le verset ne décrit pas une condamnation initiale, il décrit une conséquence.",
      },
      {
        type: "cycle",
        title: "L'enchaînement décrit par les textes",
        arabic: "الطبع على القلوب",
        center: "Scellement",
        steps: [
          { label: "Clarté", note: "L'argument est exposé, la fitra est intacte." },
          { label: "Refus", note: "Le refus est volontaire, souvent motivé par l'intérêt ou l'orgueil." },
          { label: "Habitude", note: "Le refus répété devient une pente." },
          { label: "Abandon", note: "Dieu retire l'assistance : c'est l'égarement mentionné." },
        ],
        caption: "Ibn al-Qayyim : la punition du péché, c'est le péché suivant ; la récompense de la bonne action, c'en est une autre.",
      },
      { type: "h2", text: "Deux sens de l'égarement" },
      {
        type: "comparaison",
        title: "Ce que fait Dieu, ce que fait l'homme",
        columns: ["Égarement initial", "Égarement de sanction"],
        rows: [
          { criterion: "Qui l'initie", cells: ["Personne : Dieu ne commence pas par égarer", "Dieu, après le refus de l'homme"] },
          { criterion: "Fondement textuel", cells: ["Aucun verset ne l'affirme", "9:115, 61:5, 40:35, 2:26"] },
          { criterion: "Nature", cells: ["Injustice impossible en Dieu", "Justice : privation méritée d'une aide gratuite"] },
          { criterion: "Conséquence", cells: ["Rendrait le châtiment absurde", "Rend le châtiment intelligible"] },
        ],
      },
      {
        type: "quote",
        text: "**وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَٰسِقِينَ**\n\n**Et Il n'égare par cela que les pervers** — ceux qui sont sortis de l'obéissance en connaissance de cause.",
        source: "Coran, al-Baqara, 2:26, avec la glose des exégètes anciens",
      },
      {
        type: "objection",
        objection:
          "Si la guidée dépend en dernier ressort de Sa volonté, tout effort humain devient décoratif.",
        reponse:
          "Le Coran répond en liant explicitement les deux : « Ceux qui luttent pour Nous, Nous les guiderons certes vers Nos chemins » (29:69). L'effort n'est pas une cause contraignante — rien ne contraint Dieu — mais Il a décrété que cette cause produirait cet effet. Nier l'effort au nom du décret, c'est nier le décret lui-même, qui inclut les causes.",
      },
      {
        type: "verse",
        arabic: "**وَٱلَّذِينَ جَٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا**",
        translation:
          "**Et ceux qui luttent pour Nous, Nous les guiderons certes sur Nos chemins.**",
        reference: "Coran, al-ʿAnkabūt, 29:69",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'usage abusif du verset",
        text: "Invoquer « Dieu égare qui Il veut » pour justifier sa propre négligence est exactement l'argument que le Coran met dans la bouche des associateurs (6:148). Il est réfuté, pas approuvé.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le verset affirme une souveraineté, il n'annule pas une responsabilité. Il se lit avec ceux qui l'accompagnent : Dieu n'égare pas un peuple avant de lui avoir exposé, Il n'égare que les injustes, et Il guide ceux qui font l'effort de chercher. Rien, dans cette économie, n'est arbitraire ; tout y est sage.",
      },
    ],
  },
  {
    slug: slugifySujet("Agir alors que tout est su : le paradoxe dissous"),
    title: "Agir alors que tout est su : le paradoxe dissous",
    arabic: "العلم والفعل",
    intro:
      "« Si tout est déjà écrit, pourquoi agir ? » La question n'est pas neuve : elle a été posée au Prophète ﷺ lui-même, et sa réponse tient en une phrase. Encore faut-il comprendre pourquoi cette phrase suffit, alors que des siècles de philosophie n'ont pas épuisé le problème.",
    body: [
      { type: "h2", text: "La question posée au Prophète" },
      {
        type: "quote",
        text: "قالوا: **يا رسول الله، أفلا نتّكل؟** قال: «**اعملوا فكلٌّ ميسَّرٌ لما خُلق له**».\n\nIls dirent : « **Ô Messager d'Allāh, ne devrions-nous pas nous en remettre à ce qui est écrit ?** » Il dit : « **Agissez, car chacun est facilité vers ce pour quoi il a été créé.** »",
        source: "Rapporté par al-Bukhārī et Muslim, d'après ʿAlī ibn Abī Ṭālib",
      },
      {
        type: "p",
        text: "Remarque la structure de la réponse : elle ne nie pas la prescience, elle **réoriente**. Le Prophète ﷺ ne dit pas « rien n'est écrit », il dit « agissez ». Autrement dit : le décret n'est pas un renseignement dont tu disposes pour choisir, c'est une réalité que ton action manifeste.",
      },
      { type: "h2", text: "Où se cache l'erreur du raisonnement" },
      {
        type: "experiment",
        title: "L'expérience du billet inconnu",
        steps: [
          "On te dit : le résultat de ton examen de demain est déjà connu de quelqu'un.",
          "Tu demandes lequel : personne ne te le communique.",
          "Tu dois donc choisir : réviser, ou ne pas réviser.",
          "Constate que la connaissance de l'autre n'a rien ajouté ni retiré à ta délibération.",
        ],
        conclusion:
          "Une science que tu ne possèdes pas ne peut pas fonder ta décision. Le décret n'est jamais donné comme prémisse à l'homme, seulement constaté après coup.",
      },
      {
        type: "p",
        text: "Ibn al-Qayyim formule cela avec précision : le décret est un **secret** que nul n'atteint avant l'acte. Nous ne connaissons notre destinée qu'à travers ce que nous faisons ; l'action est donc l'unique voie d'accès à ce qu'on prétendait invoquer contre elle.",
      },
      {
        type: "balance",
        title: "Ce que le décret n'affirme pas",
        arabic: "القدر",
        affirmLabel: "Ce qui est vrai",
        denyLabel: "Ce qui est faux",
        affirm: [
          "Dieu sait tout, avant et après, sans se tromper.",
          "Sa science n'est pas la cause de nos actes : elle en est la connaissance.",
          "Nous avons une volonté réelle, créée, dont nous éprouvons l'exercice.",
          "Le décret inclut les causes, dont notre effort.",
        ],
        deny: [
          "Que la prescience contraigne : savoir n'est pas forcer.",
          "Que l'homme soit une pierre qui tombe : la différence entre tomber et marcher, chacun l'éprouve.",
          "Que le décret dispense de l'action, alors qu'il l'inclut.",
          "Que l'on puisse invoquer le décret pour excuser un péché commis.",
        ],
      },
      { type: "h2", text: "Savoir n'est pas contraindre" },
      {
        type: "p",
        text: "La confusion tient à un glissement : de « Dieu sait que je ferai X » on passe à « Dieu fait que je ferai X ». Or la première proposition dit une **conformité** de la science au réel, non une production du réel. Un savoir vrai n'ajoute rien à ce qu'il connaît.",
      },
      {
        type: "verse",
        arabic: "**لِمَن شَآءَ مِنكُمْ أَن يَسْتَقِيمَ** ۝ **وَمَا تَشَآءُونَ إِلَّآ أَن يَشَآءَ ٱللَّهُ**",
        translation:
          "**Pour celui d'entre vous qui veut suivre le droit chemin** — **mais vous ne le voudrez que si Allāh le veut**.",
        reference: "Coran, al-Takwīr, 81:28-29",
      },
      {
        type: "p",
        text: "Deux versets successifs affirment la volonté humaine puis la placent sous la volonté divine. Le Coran ne choisit pas entre les deux : il les **empile**. Toute doctrine qui n'en garde qu'un des deux a déjà quitté le texte.",
      },
      {
        type: "spectre",
        title: "Les positions en présence",
        left: "Tout est contraint",
        right: "L'homme crée ses actes",
        markers: [
          { label: "Jabriyya", position: 6, note: "L'homme est une plume dans le vent : nie la responsabilité." },
          { label: "Voie des salaf", position: 50, note: "Volonté réelle de l'homme, créée par Dieu, sous Sa maîtrise." },
          { label: "Qadariyya", position: 94, note: "L'homme crée ses actes : nie la souveraineté." },
        ],
        caption: "Les deux extrêmes sacrifient chacun une moitié des versets ; la voie médiane les tient ensemble.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La règle pratique des anciens",
        text: "Regarde le décret quand tu subis une épreuve — il apaise. Regarde ton devoir quand tu dois agir — il oblige. Inverser les deux est la source de presque tous les égarements sur cette question.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le paradoxe ne se dissout pas par une démonstration philosophique, mais par un déplacement : le décret n'est pas une information disponible, c'est une souveraineté. Il ne se consulte pas avant d'agir ; il se reconnaît après, quand il devient consolation plutôt qu'excuse.",
      },
    ],
  },
  {
    slug: slugifySujet("Le ṣabr n'est pas la passivité"),
    title: "Le ṣabr n'est pas la passivité",
    arabic: "الصبر",
    intro:
      "On traduit ṣabr par « patience », et le mot français fait aussitôt penser à l'attente résignée. La racine arabe dit tout autre chose : elle dit la retenue, la fermeté, le fait de tenir une position. Le ṣabr coranique n'est pas ce qui reste quand on ne peut plus rien faire — c'est une force qui s'exerce en agissant.",
    body: [
      { type: "h2", text: "Ce que dit la racine" },
      {
        type: "lexique",
        root: "ص ب ر",
        transliteration: "ṣ-b-r",
        sense: "Retenir, contenir, maintenir fermement en place",
        derives: [
          { word: "ṣabr", arabic: "صبر", gloss: "retenir l'âme de ce qu'elle réclame" },
          { word: "ṣabūr", arabic: "صبور", gloss: "celui dont la retenue est constante ; nom divin al-Ṣabūr" },
          { word: "iṣṭabara", arabic: "اصطبر", gloss: "s'astreindre, persévérer avec effort" },
          { word: "ṣabr al-nafs", arabic: "صبر النفس", gloss: "l'expression employée pour « rester avec » les croyants (18:28)" },
        ],
        note: "En arabe classique, on dit qu'un animal est « ṣabr » lorsqu'il est retenu en place : le mot dit la contrainte exercée, pas l'absence d'action.",
      },
      { type: "h2", text: "Trois domaines, un même effort" },
      {
        type: "degres",
        title: "Les trois ṣabr des anciens",
        arabic: "أقسام الصبر",
        degres: [
          { label: "Sur l'obéissance", arabic: "الصبر على الطاعة", note: "Tenir dans l'effort : la prière de nuit, l'étude, la constance." },
          { label: "Contre la désobéissance", arabic: "الصبر عن المعصية", note: "Retenir l'âme de ce qui l'attire : le plus exigeant selon Ibn al-Qayyim." },
          { label: "Devant le décret", arabic: "الصبر على الأقدار", note: "Recevoir l'épreuve sans révolte, tout en cherchant les remèdes." },
        ],
        direction: "asc",
        caption: "Les deux premiers sont entièrement actifs ; même le troisième n'interdit pas d'agir sur les causes.",
      },
      {
        type: "verse",
        arabic: "**يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟**",
        translation:
          "**Ô vous qui croyez ! Soyez endurants, rivalisez d'endurance et soyez vigilants au poste.**",
        reference: "Coran, Āl ʿImrān, 3:200",
      },
      {
        type: "p",
        text: "Trois impératifs qui montent en intensité, et le dernier — **rābiṭū** — désigne la garde en poste, la vigilance armée. Difficile d'imaginer vocabulaire moins passif.",
      },
      { type: "h2", text: "Le contre-exemple des prophètes" },
      {
        type: "p",
        text: "Yaʿqūb dit **« une belle patience »** en pleine détresse, et il envoie pourtant ses fils chercher Yūsuf. Ayyūb est loué pour son endurance, et il invoque son Seigneur pour la guérison. La patience n'a jamais empêché d'agir sur les causes : elle empêche de se révolter contre Celui qui les a posées.",
      },
      {
        type: "verse",
        arabic:
          "قَالَ بَلْ سَوَّلَتْ لَكُمْ أَنفُسُكُمْ أَمْرًا ۖ **فَصَبْرٌ جَمِيلٌ**",
        translation:
          "Il dit : « Vos âmes vous ont plutôt suggéré une action. **Une belle patience donc !** »",
        reference: "Coran, Yūsuf, 12:18",
      },
      {
        type: "quote",
        text: "**الصبر الجميل: الذي لا شكوى فيه إلى الخلق.**\n\n**La belle patience, c'est celle où il n'y a pas de plainte adressée aux créatures.**",
        source: "Explication rapportée des salaf, citée par Ibn Kathīr",
      },
      {
        type: "p",
        text: "La définition est exacte et libératrice : elle n'interdit ni la douleur, ni les larmes, ni la demande de secours auprès de Dieu. Elle interdit la plainte **contre** Dieu, adressée à ceux qui ne peuvent rien.",
      },
      {
        type: "comparaison",
        title: "Deux attitudes qu'on confond",
        columns: ["Ṣabr", "Résignation"],
        rows: [
          { criterion: "Rapport aux causes", cells: ["On les cherche activement", "On les néglige"] },
          { criterion: "État du cœur", cells: ["Confiance, tension vers un but", "Fatalisme, extinction du désir"] },
          { criterion: "Rapport à Dieu", cells: ["Invocation intense", "Silence, parfois rancœur muette"] },
          { criterion: "Durée", cells: ["Se renouvelle à chaque coup", "S'installe et éteint"] },
        ],
      },
      {
        type: "objection",
        objection: "Chercher un remède, n'est-ce pas manquer de confiance dans le décret ?",
        reponse:
          "Le Prophète ﷺ a ordonné de se soigner, il a fui la peste et interdit d'y entrer, il a attaché sa monture avant de s'en remettre à Dieu. Les moyens font partie du décret, et les négliger n'est pas une élévation spirituelle : c'est une désobéissance déguisée en confiance.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le premier coup",
        text: "« La patience est au premier choc » (al-Bukhārī). Ce qui est loué n'est pas le calme retrouvé après des mois, c'est la tenue au moment où la nouvelle tombe.",
      },
      {
        type: "verse",
        arabic: "**إِنَّمَا يُوَفَّى ٱلصَّٰبِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ**",
        translation:
          "**Les endurants recevront leur pleine récompense sans compter.**",
        reference: "Coran, al-Zumar, 39:10",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le ṣabr est une puissance de retenue au service d'une direction : il tient l'âme pendant que la volonté travaille. C'est pourquoi le Coran le place à côté de la prière comme moyen de secours — non pas comme un renoncement, mais comme l'appui de celui qui continue.",
      },
    ],
  },
];
