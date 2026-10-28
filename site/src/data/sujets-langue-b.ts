import { slugifySujet, type Sujet } from "./sujet-core";

/** Groupe : balāgha coranique — particules, structures, emphase. */
export const sujetsLangueB: Sujet[] = [
  {
    slug: slugifySujet("Le lau conditionnel et ce qu'il nie"),
    title: "Le lau conditionnel et ce qu'il nie",
    arabic: "لو الامتناعية",
    intro:
      "Parmi les particules les plus chargées de sens du Coran figure **lau** (لو), dite « imtināʿiyya » : elle pose une condition irréalisée dans le passé et nie, du même mouvement, sa conséquence. Comprendre ce mécanisme n'est pas un raffinement grammatical gratuit — c'est la clé d'un grand nombre de versets où Dieu écarte des hypothèses pour mieux affirmer une réalité.",
    body: [
      { type: "h2", text: "Une particule à double négation" },
      {
        type: "p",
        text: "**Lau** introduit une proposition conditionnelle passée dont la protase est présentée comme **non réalisée**, ce qui entraîne mécaniquement que l'apodose ne l'est pas non plus. Dire « lau kāna kadhā lakāna kadhā » (si cela avait été, cela aurait été) revient à affirmer que ni l'un ni l'autre n'a eu lieu. C'est là toute sa force : elle ne se contente pas de suspendre un jugement, elle **nie deux fois** en une seule phrase.",
      },
      {
        type: "p",
        text: "Les grammairiens la distinguent nettement de **in** (إن), qui pose une condition ouverte, possible, dont on ignore si elle se réalisera. Avec **lau**, au contraire, l'orateur sait déjà que la condition ne s'est pas produite : il l'évoque pour tirer une leçon de son absence, non pour envisager un futur.",
      },
      {
        type: "lexique",
        root: "ل و",
        transliteration: "l-w",
        sense: "Poser une hypothèse contraire au réel pour en écarter la conséquence",
        derives: [
          { word: "lau", arabic: "لو", gloss: "particule conditionnelle du passé irréalisé" },
          { word: "lawlā", arabic: "لولا", gloss: "« n'eût été... », condition niant l'existence d'un obstacle" },
          { word: "law-mā", arabic: "لوما", gloss: "variante rare de lawlā, à valeur incitative" },
        ],
        note: "Ces trois formes partagent l'idée d'un état contraire au réel, mais avec des emplois syntaxiques distincts.",
      },
      { type: "h2", text: "Le verset de la multiplicité des dieux" },
      {
        type: "verse",
        arabic:
          "**لَوْ كَانَ فِيهِمَآ ءَالِهَةٌ إِلَّا ٱللَّهُ لَفَسَدَتَا** فَسُبْحَٰنَ ٱللَّهِ رَبِّ ٱلْعَرْشِ عَمَّا يَصِفُونَ",
        translation:
          "**S'il y avait dans les deux [le ciel et la terre] des divinités autres qu'Allāh, ils seraient l'un et l'autre en ruine.** Gloire à Allāh, Seigneur du Trône, purifié de ce qu'ils décrivent.",
        reference: "Coran, al-Anbiyāʾ, 21:22",
      },
      {
        type: "p",
        text: "Ce verset est l'exemple le plus cité de l'argument dit **burhān al-tamānuʿ**, la preuve par l'exclusion mutuelle. L'ordre visible dans les cieux et sur terre est un **fait constaté** ; la corruption qu'entraînerait une pluralité de divinités est une **conséquence niée** par **lau**. De la négation de la conséquence, la raison remonte à la négation de la condition : il n'y a pas plusieurs dieux, puisque l'ordre subsiste.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La structure logique du verset",
        text: "Le raisonnement va du visible à l'invisible : on observe que l'univers ne s'est pas effondré, et l'on en déduit, par la négation qu'exprime lau, l'unicité du Créateur. C'est un argument rationnel porté par un seul mot de grammaire.",
      },
      { type: "h2", text: "Le verset de la conquête et des otages" },
      {
        type: "verse",
        arabic:
          "**وَلَوْلَا رِجَالٌ مُّؤْمِنُونَ وَنِسَآءٌ مُّؤْمِنَٰتٌ لَّمْ تَعْلَمُوهُمْ أَن تَطَـُٔوهُمْ فَتُصِيبَكُم مِّنْهُم مَّعَرَّةٌۢ بِغَيْرِ عِلْمٍ لَّأَذِنَ ٱللَّهُ لَكُمْ**",
        translation:
          "**N'eussent été des croyants et des croyantes que vous ne connaissiez pas, que vous auriez pu piétiner, vous attirant ainsi, sans le savoir, une souillure de leur fait, Allāh vous aurait donné licence [d'entrer par la force].**",
        reference: "Coran, al-Fatḥ, 48:25",
      },
      {
        type: "p",
        text: "Ici c'est **lawlā**, sœur de lau, qui joue le même rôle : elle nie l'existence de la permission de combattre à cause d'un obstacle réel — la présence de croyants inconnus parmi les ennemis. Le sens précis de la particule change directement le jugement juridique tiré du verset : sans elle, on croirait le combat empêché par une prudence générale ; avec elle, on comprend que seule cette circonstance précise l'a suspendu.",
      },
      {
        type: "comparaison",
        title: "Lau et in : deux conditions, deux mondes",
        columns: ["Lau (imtināʿiyya)", "In (conditionnelle ouverte)"],
        rows: [
          { criterion: "Statut de la condition", cells: ["Connue comme non réalisée", "Incertaine, possible"] },
          { criterion: "Temps visé", cells: ["Le passé, révolu", "Le futur ou l'indéterminé"] },
          { criterion: "Fonction rhétorique", cells: ["Écarter une hypothèse pour affirmer le réel", "Ouvrir une alternative à venir"] },
          { criterion: "Exemple", cells: ["« Lau kāna fīhimā ālihatun... »", "« In tattaqū Llāha yajʿal lakum furqānan »"] },
        ],
        caption: "Confondre les deux particules fait basculer un argument métaphysique en simple hypothèse d'école.",
      },
      { type: "h2", text: "Le regret que lau peut exprimer" },
      {
        type: "p",
        text: "Un usage fréquent de **lau** dans le Coran est de rapporter le **regret** des égarés au Jour de la Résurrection. Ils disent « lau anna lī karratan » (si seulement j'avais un retour) : la particule y garde sa fonction de négation, mais colorée d'un souhait impossible. Ce glissement du conditionnel logique au souhait affectif montre la souplesse rhétorique d'une même racine grammaticale selon le contexte.",
      },
      {
        type: "verse",
        arabic: "وَأَسَرُّوا۟ ٱلنَّدَامَةَ لَمَّا رَأَوُا۟ ٱلْعَذَابَ ۖ **وَلَوْ نَرَىٰٓ إِذْ وُقِفُوا۟ عَلَى ٱلنَّارِ**",
        translation:
          "Ils cachèrent leur remords en voyant le châtiment. **Si tu les voyais lorsqu'ils seront placés devant le Feu !**",
        reference: "Coran, Sabaʾ, 34:33",
      },
      {
        type: "quote",
        text: "قال ابن القيم رحمه الله: **«لو» حرف امتناع لامتناع، يدل على انتفاء الشيء لانتفاء غيره**، فمن فهم هذا فهم كثيرًا من دقائق القرآن.\n\nIbn al-Qayyim, qu'Allāh lui fasse miséricorde, a dit : **« Lau est une particule qui nie une chose par la négation d'une autre »** ; quiconque saisit cela saisit beaucoup de subtilités du Coran.",
        source: "Ibn al-Qayyim, Badāʾiʿ al-Fawāʾid",
      },
      {
        type: "objection",
        objection: "N'est-ce pas excessif de bâtir un argument théologique entier sur une seule particule grammaticale ?",
        reponse:
          "Le Coran a été révélé dans une langue dont chaque particule porte un sens précis, connu des Arabes auxquels il s'adressait en premier lieu. Négliger cette précision ne rend pas le lecteur plus pieux, cela le rend simplement moins exact. Les savants de la langue et les exégètes comme al-Ṭabarī ont toujours pris ces nuances au sérieux, précisément parce qu'elles changent le sens et parfois la règle tirée du texte.",
      },
      {
        type: "degres",
        title: "Ce qu'implique une phrase avec lau",
        arabic: "مقتضى لو",
        degres: [
          { label: "La condition", note: "Un événement présenté comme non survenu dans le passé." },
          { label: "La conséquence attendue", note: "Ce qui aurait dû suivre logiquement, si la condition avait eu lieu." },
          { label: "La double négation", note: "Ni la condition ni la conséquence n'ont eu lieu réellement." },
          { label: "La leçon tirée", note: "Souvent une preuve rationnelle ou un regret amer, selon le contexte." },
        ],
        direction: "asc",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un piège de traduction",
        text: "Traduire mécaniquement lau par « si » en français masque sa spécificité : le français « si » couvre aussi bien l'hypothèse ouverte que la condition irréalisée. Le lecteur francophone doit reconstituer, par le contexte, ce que l'arabe indique d'emblée par le seul choix de la particule.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Une seule petite particule, **lau**, porte à elle seule une architecture logique complète : poser une hypothèse pour la nier et, par ce détour, affirmer avec force une vérité qu'une phrase directe n'aurait pas rendue aussi persuasive. Lire le Coran avec attention à ces outils, c'est refuser de réduire la révélation à son seul contenu informatif et respecter la langue par laquelle Dieu a choisi de s'adresser aux hommes.",
      },
    ],
  },
  {
    slug: slugifySujet("Les structures de serment et leur fonction rhétorique"),
    title: "Les structures de serment et leur fonction rhétorique",
    arabic: "القسم",
    intro:
      "Le Coran ouvre plusieurs sourates par des **serments** portant sur des réalités aussi diverses que le temps, les astres, les chevaux de guerre ou l'âme humaine. Loin d'être un simple procédé de style hérité de la poésie préislamique, cette structure rhétorique remplit une fonction précise : elle capte l'attention, elle atteste, et elle prépare l'esprit à recevoir une affirmation d'une portée considérable.",
    body: [
      { type: "h2", text: "L'anatomie d'un serment coranique" },
      {
        type: "p",
        text: "Le serment arabe, le **qasam**, se compose toujours de trois éléments : la particule de serment (wa, ta, bi), l'objet sur lequel on jure (le **muqsam bihi**), et la chose affirmée par le serment (le **muqsam ʿalayhi**). Dans le Coran, c'est Dieu qui jure, ce qui exclut d'emblée toute lecture anthropomorphique du procédé : Il n'a besoin, pour Lui-même, d'aucune garantie ; c'est **l'auditeur** que le serment vise à convaincre.",
      },
      {
        type: "p",
        text: "Les exégètes insistent sur ce point : quand Dieu jure par une créature — l'astre, le figuier, l'aube — ce n'est jamais pour diviniser cette créature, mais pour attirer l'attention sur une **signe** (āya) qu'elle recèle. Jurer par le soleil, c'est inviter à méditer sur le soleil ; jurer par le temps, c'est inviter à méditer sur la fuite du temps.",
      },
      { type: "h2", text: "Le serment le plus dense : sourate al-ʿAṣr" },
      {
        type: "verse",
        arabic: "**وَٱلْعَصْرِ** إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ",
        translation: "**Par le Temps !** L'homme est certes en perdition,",
        reference: "Coran, al-ʿAṣr, 103:1-2",
      },
      {
        type: "p",
        text: "Al-Shāfiʿī aurait dit que cette sourate, à elle seule, aurait suffi comme guidance aux hommes s'ils l'avaient méditée. Le serment initial sur le temps installe d'emblée une tension : ce sur quoi l'on jure — le temps qui passe, irréversible — est précisément ce qui rend la conséquence, la perdition de l'homme, inéluctable en l'absence des quatre conditions énoncées ensuite : la foi, l'œuvre bonne, l'exhortation à la vérité et l'exhortation à la patience.",
      },
      {
        type: "schema",
        title: "Les trois pièces du serment coranique",
        variant: "flow",
        nodes: [
          { label: "Particule", arabic: "وَ / بِ / تَ", note: "Le marqueur grammatical du serment." },
          { label: "Objet du serment", arabic: "المقسم به", note: "Une réalité créée, choisie pour ce qu'elle signale." },
          { label: "Chose affirmée", arabic: "المقسم عليه", note: "La vérité que le serment vient garantir aux yeux de l'auditeur." },
        ],
        caption: "Retirer l'un des trois éléments dissout la fonction persuasive du serment.",
      },
      { type: "h2", text: "Le serment par les chevaux de la course" },
      {
        type: "verse",
        arabic: "**وَٱلْعَٰدِيَٰتِ ضَبْحًا فَٱلْمُورِيَٰتِ قَدْحًا فَٱلْمُغِيرَٰتِ صُبْحًا**",
        translation:
          "**Par les coursiers qui, haletants, courent, qui font jaillir des étincelles, qui attaquent au matin !**",
        reference: "Coran, al-ʿĀdiyāt, 100:1-3",
      },
      {
        type: "p",
        text: "Cette série de serments consécutifs, rythmée par des participes actifs sonores, imite par sa musicalité même le galop qu'elle décrit. La sourate enchaîne cinq serments avant d'énoncer l'apodose : **« Certes l'homme est ingrat envers son Seigneur »** (100:6). L'accumulation des serments crée une **attente**, une tension narrative que la brièveté de la conclusion vient rompre avec d'autant plus de force.",
      },
      {
        type: "cycle",
        title: "L'effet rhétorique du serment sur l'auditeur",
        arabic: "أثر القسم",
        center: "Le serment coranique",
        steps: [
          { label: "Captation", arabic: "التنبيه", note: "L'auditeur est saisi par l'objet inattendu du serment." },
          { label: "Attestation", arabic: "التوكيد", note: "Le serment garantit la vérité de ce qui va être énoncé." },
          { label: "Méditation", arabic: "التدبر", note: "L'objet du serment devient lui-même objet de réflexion." },
          { label: "Réception de l'apodose", arabic: "التسليم", note: "L'esprit, préparé, accueille l'affirmation avec plus de force." },
        ],
        caption: "Le serment ne prouve rien par lui-même : il prépare le terrain psychologique de la preuve qui suit.",
      },
      { type: "h2", text: "Pourquoi Dieu jure-t-Il, Lui qui n'en a nul besoin ?" },
      {
        type: "quote",
        text: "قال ابن القيم رحمه الله: **إن الله تعالى يقسم بما شاء من مخلوقاته، وليس ذلك لحاجته إلى توكيد كلامه، بل تنبيهًا على شرف المقسم به وعظمته**.\n\nIbn al-Qayyim a dit : **« Allāh jure par ce qu'Il veut de Ses créatures, non par besoin de renforcer Sa parole, mais pour attirer l'attention sur la noblesse et la grandeur de la chose sur laquelle Il jure. »**",
        source: "Ibn al-Qayyim, al-Tibyān fī Aqsām al-Qurʾān",
      },
      {
        type: "p",
        text: "Cette explication répond à une question ancienne : Dieu, dont la parole est nécessairement vraie, n'a besoin d'aucun serment pour être cru. Le serment n'est donc pas dirigé vers Lui, mais vers **nous**. Il redouble l'attention, souligne l'importance de l'objet choisi, et installe dans l'esprit du lecteur une disposition à la réflexion avant même que l'affirmation principale ne soit énoncée.",
      },
      {
        type: "objection",
        objection: "N'est-il pas contradictoire que Dieu jure par des créatures alors que le serment islamique doit se faire par Allāh seul ?",
        reponse:
          "La règle qui interdit de jurer par autre qu'Allāh s'adresse aux créatures, à qui il est défendu d'attribuer une grandeur qui ne revient qu'au Créateur. Dieu, en revanche, est le Souverain absolu : Il peut jurer par ce qu'Il veut de Ses créations sans que cela implique leur divinisation, exactement comme un roi peut évoquer la valeur d'un de ses sujets sans se placer sous son autorité. Les exégètes rappellent unanimement cette distinction pour couper court à toute confusion.",
      },
      { type: "h2", text: "Le serment comme structure argumentative" },
      {
        type: "p",
        text: "Au-delà de l'effet oratoire, le serment fonctionne souvent comme un **syllogisme abrégé** : l'objet du serment contient en germe la preuve de l'affirmation qui suit. Jurer par l'astre qui décline, puis affirmer que le compagnon de Muḥammad ﷺ ne s'égare ni ne parle sous l'effet de la passion, revient à dire : de même que la course des astres suit un ordre immuable voulu par Dieu, de même la parole du Prophète ﷺ suit un ordre, celui de la révélation, et non le désordre du caprice.",
      },
      {
        type: "verse",
        arabic: "**وَٱلنَّجْمِ إِذَا هَوَىٰ مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَىٰ**",
        translation: "**Par l'étoile quand elle décline ! Votre compagnon ne s'est pas égaré et n'a pas été induit en erreur.**",
        reference: "Coran, al-Najm, 53:1-2",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas isoler le serment de son apodose",
        text: "Commenter l'objet d'un serment coranique sans le relier à ce qu'il vient affirmer revient à s'arrêter à la moitié de la phrase. Le sens complet ne se dégage que de la mise en relation entre le muqsam bihi et le muqsam ʿalayhi.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le serment coranique n'est donc ni une formule creuse ni un simple héritage stylistique de l'arabe ancien : c'est une structure rhétorique complète, au service d'une pédagogie de l'attention. En choisissant des objets aussi variés que le temps, les astres ou les chevaux de guerre, le Coran invite sans cesse le lecteur à quitter la lecture distraite pour la **méditation active**, seule à même de recevoir pleinement l'affirmation qui suit.",
      },
    ],
  },
  {
    slug: slugifySujet("Les changements de personne en cours de verset"),
    title: "Les changements de personne en cours de verset",
    arabic: "الالتفات",
    intro:
      "Il arrive qu'un même verset, voire une même phrase, passe sans transition apparente de la troisième personne à la deuxième, ou du singulier au pluriel. Ce phénomène, appelé **iltifāt**, a longtemps déconcerté les lecteurs pressés d'y voir une incohérence, alors qu'il s'agit d'un des procédés les plus étudiés — et les plus admirés — de la rhétorique coranique.",
    body: [
      { type: "h2", text: "Définir l'iltifāt" },
      {
        type: "p",
        text: "Le terme **al-iltifāt** signifie littéralement « le fait de se tourner », comme on tourne la tête. En rhétorique, il désigne le passage d'un mode d'énonciation à un autre à l'intérieur d'un même discours : de la troisième personne à la première ou à la deuxième, du passé au présent, du singulier au pluriel. Les rhétoriciens arabes, à commencer par al-Zamakhsharī puis al-Suyūṭī, en ont recensé des dizaines d'occurrences coraniques et en ont analysé l'effet.",
      },
      {
        type: "p",
        text: "Loin d'être une négligence stylistique, ce procédé est reconnu comme une marque de **haute éloquence** dans la langue arabe classique, aussi bien en poésie qu'en prose. Il rompt la monotonie de l'énoncé, ravive l'attention de l'auditeur et souligne, par la rupture même, un moment de bascule dans le sens.",
      },
      { type: "h2", text: "L'exemple de la Fātiḥa" },
      {
        type: "verse",
        arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ مَٰلِكِ يَوْمِ ٱلدِّينِ **إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ**",
        translation:
          "Louange à Allāh, Seigneur des mondes, le Tout Miséricordieux, le Très Miséricordieux, Maître du Jour de la rétribution. **C'est Toi [seul] que nous adorons, et c'est Toi [seul] dont nous implorons secours.**",
        reference: "Coran, al-Fātiḥa, 1:2-5",
      },
      {
        type: "p",
        text: "Les quatre premiers versets parlent de Dieu à la troisième personne, comme on décrit une réalité à un tiers absent. Puis, sans transition, le discours **se tourne** vers Dieu et Lui parle directement : « C'est Toi que nous adorons ». Ibn Kathīr explique que ce passage traduit un mouvement intérieur : après avoir loué Dieu et reconnu Sa grandeur, le cœur du serviteur se trouve naturellement conduit à s'adresser à Lui en personne, comme on finit par s'approcher de celui dont on vient de faire l'éloge.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un mouvement du cœur autant que de la grammaire",
        text: "Le passage à la deuxième personne dans la Fātiḥa n'est pas un simple procédé technique : il met en scène, dans la syntaxe même, l'approche progressive du serviteur vers son Seigneur, de la description à l'adresse directe.",
      },
      { type: "h2", text: "Le passage du pluriel de majesté au singulier" },
      {
        type: "verse",
        arabic:
          "إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ **تَنَزَّلُ ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم**",
        translation:
          "Nous l'avons fait descendre pendant la nuit du Destin. Et qui te dira ce qu'est la nuit du Destin ? La nuit du Destin vaut mieux que mille mois. **Les anges et l'Esprit y descendent, par la permission de leur Seigneur.**",
        reference: "Coran, al-Qadr, 97:1-4",
      },
      {
        type: "p",
        text: "La sourate ouvre par le pluriel de majesté, « Nous l'avons fait descendre », qui souligne la puissance divine à l'œuvre dans la révélation. Puis, à l'évocation des anges, le texte se tourne vers la troisième personne, « leur Seigneur » : ce glissement met en scène la **soumission** des anges à l'ordre divin, eux qui descendent par permission et non de leur propre initiative — un contraste que le pluriel de majesté initial n'aurait pas rendu aussi net.",
      },
      {
        type: "comparaison",
        title: "Les principaux types d'iltifāt",
        columns: ["Type de passage", "Effet recherché"],
        rows: [
          { criterion: "3e personne → 2e personne", cells: ["Passer de la description à l'adresse directe, intensifier l'implication"] },
          { criterion: "Passé → présent", cells: ["Rendre vivante et actuelle une scène pourtant révolue ou future"] },
          { criterion: "Singulier → pluriel de majesté", cells: ["Souligner la puissance ou la solennité de l'action divine"] },
          { criterion: "2e personne du singulier → pluriel", cells: ["Étendre un propos individuel à toute la communauté des croyants"] },
        ],
        caption: "Chaque type de bascule correspond à un effet de sens précis, jamais gratuit.",
      },
      { type: "h2", text: "Le passé qui devient présent" },
      {
        type: "verse",
        arabic:
          "وَٱللَّهُ ٱلَّذِىٓ أَرْسَلَ ٱلرِّيَٰحَ فَتُثِيرُ سَحَابًا فَسُقْنَٰهُ إِلَىٰ بَلَدٍ مَّيِّتٍ **فَأَحْيَيْنَا بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَا**",
        translation:
          "C'est Allāh qui envoie les vents ; ils soulèvent des nuages que Nous poussons vers une contrée morte. **C'est ainsi que Nous rendons la vie à la terre après sa mort.**",
        reference: "Coran, Fāṭir, 35:9",
      },
      {
        type: "p",
        text: "Le verbe initial « arsala », au passé, décrit l'envoi des vents comme un fait accompli ; puis le texte passe au présent, « tuthīru » (elle soulève), rendant la scène **vivante sous les yeux** de l'auditeur, avant de revenir au passé, « suqnāhu » (Nous l'avons poussé) puis « aḥyaynā » (Nous avons ravivé). Ces allers-retours temporels donnent au verset un mouvement cinématographique, où le lecteur suit le cycle météorologique comme s'il se déroulait devant lui.",
      },
      {
        type: "quote",
        text: "قال الزمخشري رحمه الله: **الالتفات من فنون البلاغة التي يستفزّ بها السامع ويستدعى بها إصغاؤه**.\n\nAl-Zamakhsharī a dit : **« L'iltifāt est l'un des procédés de la rhétorique par lesquels on éveille l'auditeur et l'on requiert son attention. »**",
        source: "Al-Zamakhsharī, al-Kashshāf",
      },
      {
        type: "objection",
        objection: "Ne peut-on pas simplement dire que ces changements sont dus aux hasards de la révélation par fragments ?",
        reponse:
          "Cette explication ne résiste pas à l'examen : l'iltifāt apparaît aussi bien à l'intérieur d'une seule phrase, révélée d'un seul tenant, qu'entre des versets distincts. De plus, le procédé était déjà identifié et prisé dans la poésie arabe préislamique, longtemps avant la révélation, ce qui montre qu'il s'agit d'une figure de style reconnue et maîtrisée, non d'un accident de composition.",
      },
      {
        type: "degres",
        title: "Lire un iltifāt : la démarche de l'exégète",
        arabic: "منهج تفسير الالتفات",
        degres: [
          { label: "Repérer la bascule", note: "Identifier précisément le mot où le mode d'énonciation change." },
          { label: "Nommer le type", note: "Personne, nombre, temps : préciser la nature exacte du passage." },
          { label: "Chercher l'effet de sens", note: "Se demander ce que ce changement met en relief dans le propos." },
          { label: "Vérifier chez les anciens", note: "Comparer avec ce qu'en ont dit al-Zamakhsharī, Ibn Kathīr et leurs pairs." },
        ],
        direction: "asc",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'iltifāt rappelle qu'une lecture attentive du Coran ne peut faire l'économie de sa langue. Ce qui semble, à une lecture rapide, une simple variation grammaticale, se révèle, à l'examen, un procédé délibéré au service du sens : il ranime l'attention, souligne une bascule intérieure, ou donne à une scène révolue la vivacité du présent. Autant de finesses qui invitent le lecteur à ralentir sa lecture plutôt qu'à la survoler.",
      },
    ],
  },
  {
    slug: slugifySujet("La répétition comme argument, non comme redondance"),
    title: "La répétition comme argument, non comme redondance",
    intro:
      "Certains versets, certaines formules reviennent plusieurs fois dans une même sourate, presque à l'identique. Un lecteur pressé pourrait y voir une redondance stylistique ; l'examen attentif montre au contraire que la **répétition** coranique est un instrument argumentatif à part entière, dont chaque occurrence prend un relief particulier selon ce qui la précède.",
    body: [
      { type: "h2", text: "La répétition n'est pas la redite" },
      {
        type: "p",
        text: "En rhétorique arabe, on distingue le **takrār**, la répétition volontaire à but expressif, de la simple redite involontaire que la langue soignée évite. Le Coran use abondamment du premier, jamais du second. Chaque retour d'une formule s'accompagne d'un contexte nouveau, et c'est précisément ce contraste entre l'identique qui revient et le nouveau qui l'entoure qui produit l'effet recherché.",
      },
      {
        type: "p",
        text: "Les rhétoriciens distinguent plusieurs fonctions à la répétition : **marteler** une vérité essentielle pour qu'elle s'imprime dans les cœurs, **structurer** un texte en le rythmant par un refrain, ou encore **relier** des unités de sens qui, sans ce fil conducteur, apparaîtraient disparates.",
      },
      { type: "h2", text: "Le refrain de sourate al-Raḥmān" },
      {
        type: "verse",
        arabic: "**فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ**",
        translation: "**Lequel donc des bienfaits de votre Seigneur nierez-vous ?**",
        reference: "Coran, al-Raḥmān, 55:13 (répété 31 fois dans la sourate)",
      },
      {
        type: "p",
        text: "Cette formule revient trente et une fois dans la sourate, après chaque évocation d'un bienfait divin : la création de l'homme, le soleil et la lune, les jardins du paradis, les rivières de miel. Chaque répétition n'a pas le même objet devant elle : elle qualifie tantôt une merveille cosmique, tantôt une description du châtiment, tantôt une promesse du paradis. Le sens du refrain se **renouvelle** donc à chaque occurrence, alors que sa forme reste identique — c'est cette tension entre stabilité de la forme et variation du contenu qui crée l'effet de martèlement pédagogique.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un refrain qui ne dit jamais deux fois la même chose",
        text: "Bien que les mots soient rigoureusement identiques à chaque occurrence, le référent auquel ils s'appliquent change systématiquement : la répétition formelle sert un renouvellement constant du contenu.",
      },
      { type: "h2", text: "La répétition-argument dans le récit de Mūsā" },
      {
        type: "verse",
        arabic: "**فَكَذَّبُوهُ فَأَخَذَهُمْ عَذَابُ يَوْمِ ٱلظُّلَّةِ ۚ إِنَّهُۥ كَانَ عَذَابَ يَوْمٍ عَظِيمٍ إِنَّ فِى ذَٰلِكَ لَءَايَةً ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ**",
        translation:
          "Ils le traitèrent de menteur, et le châtiment du jour de l'Ombre les saisit ; ce fut le châtiment d'un jour terrible. Il y a en cela certes un signe ; mais la plupart d'entre eux ne croient pas.",
        reference: "Coran, al-Shuʿarāʾ, 26:189-190",
      },
      {
        type: "p",
        text: "Sourate al-Shuʿarāʾ répète, après chacun des huit récits de prophètes qu'elle rapporte, la même conclusion : « Il y a en cela certes un signe ; mais la plupart d'entre eux ne croient pas ». Cette répétition transforme une série de récits historiques distincts en une **démonstration cumulative** : ce n'est plus un peuple isolé qui refuse un message, c'est une constante humaine que le texte donne à voir à travers huit répétitions de la même structure. L'argument gagne en force à chaque occurrence, comme une preuve que l'on répète pour montrer qu'elle ne souffre aucune exception.",
      },
      {
        type: "schema",
        title: "La fonction cumulative de la répétition narrative",
        variant: "flow",
        nodes: [
          { label: "Récit 1", note: "Nūḥ et son peuple : rejet, châtiment, signe." },
          { label: "Récit 2 à 7", note: "Hūd, Ṣāliḥ, Ibrāhīm, Lūṭ, Shuʿayb : même structure répétée." },
          { label: "Refrain constant", arabic: "إن في ذلك لآية", note: "La formule qui clôt chaque récit et les relie entre eux." },
          { label: "Conclusion cumulée", note: "Une loi générale du rejet humain, démontrée par accumulation d'exemples." },
        ],
        caption: "La répétition transforme huit récits en une seule démonstration.",
      },
      { type: "h2", text: "Répéter pour insister sur une négation" },
      {
        type: "verse",
        arabic: "**كَلَّا سَوْفَ تَعْلَمُونَ ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ**",
        translation: "**Non ! Vous saurez bientôt. Encore une fois, non ! Vous saurez bientôt.**",
        reference: "Coran, al-Takāthur, 102:3-4",
      },
      {
        type: "p",
        text: "Ici, la répétition presque mot pour mot de la même phrase, à deux versets d'intervalle, sert à intensifier la mise en garde. Les commentateurs relèvent que la seconde occurrence outrepasse la première en gravité : selon une interprétation reçue, le premier avertissement concerne ce qui adviendra dans la tombe, le second ce qui adviendra le Jour de la Résurrection. La répétition n'est donc pas un simple redoublement d'intensité, elle marque aussi une **progression** dans l'échelle du temps eschatologique.",
      },
      {
        type: "quote",
        text: "قال ابن كثير رحمه الله في هذا الموضع: **التكرير للتأكيد**، وقيل: الأول للتخويف في القبر، والثاني للتخويف يوم القيامة.\n\nIbn Kathīr a dit à ce sujet : **« La répétition est faite pour insister »** ; et il a été dit que la première mention avertit de ce qui attend dans la tombe, et la seconde de ce qui attend au Jour de la Résurrection.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿAẓīm",
      },
      {
        type: "balance",
        title: "Ce que la répétition n'est pas / ce qu'elle est",
        affirmLabel: "Ce qu'elle accomplit",
        denyLabel: "Ce qu'elle n'est pas",
        affirm: [
          "Un refrain qui structure et rythme le texte.",
          "Un procédé de martèlement pédagogique d'une vérité centrale.",
          "Une démonstration cumulative à travers plusieurs récits.",
          "Un marqueur de progression ou d'intensification du sens.",
        ],
        deny: [
          "Une simple redite due à un manque de vocabulaire.",
          "Un remplissage sans fonction argumentative.",
          "Un accident de la transmission orale du texte.",
        ],
        caption: "Chaque répétition coranique répond à une fonction identifiable, jamais à un hasard de composition.",
      },
      {
        type: "objection",
        objection: "Une langue aussi riche que l'arabe n'aurait-elle pas pu varier son vocabulaire au lieu de répéter ?",
        reponse:
          "La richesse d'une langue ne se mesure pas à sa capacité d'éviter systématiquement la répétition, mais à sa capacité de choisir, pour chaque effet recherché, l'outil le plus adapté. Or l'effet de martèlement, de refrain ou de démonstration cumulative exige précisément l'identité formelle : varier le vocabulaire à chaque occurrence aurait dilué l'unité du procédé et affaibli, non renforcé, l'impact recherché sur l'auditeur.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas confondre variante et répétition",
        text: "Certains passages qui semblent répéter un récit — comme les différentes évocations de la création d'Adam — introduisent en réalité des détails distincts à chaque fois. Il faut vérifier, avant de parler de répétition, que la formule est bien identique, et non seulement voisine.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La répétition coranique, loin d'être un signe de pauvreté stylistique, est un outil de composition d'une grande sophistication : elle structure les sourates, martèle les vérités essentielles, relie des récits disparates en une démonstration unique, et marque parfois une progression dans l'intensité du propos. Y voir de la redondance, c'est manquer la finesse d'une langue qui répète toujours **pour dire quelque chose de plus**, jamais pour dire deux fois la même chose sans raison.",
      },
    ],
  },
  {
    slug: slugifySujet("Les fins de versets et la logique des formules de clôture"),
    title: "Les fins de versets et la logique des formules de clôture",
    arabic: "فواصل الآيات",
    intro:
      "Beaucoup de versets coraniques s'achèvent par des couples de noms divins — « Il est le Puissant, le Sage », « Il est l'Audient, le Voyant » — que l'on pourrait croire interchangeables. Il n'en est rien : ces **fawāṣil**, ces formules de clôture, sont choisies avec une précision qui reflète exactement le contenu du verset qu'elles achèvent, et leur permutation en changerait le sens.",
    body: [
      { type: "h2", text: "Une clôture qui n'est jamais neutre" },
      {
        type: "p",
        text: "On appelle **fāṣila** (pluriel fawāṣil) la formule, souvent constituée de deux noms divins accolés, qui clôt un grand nombre de versets. Les exégètes ont depuis longtemps observé que ces formules ne sont jamais de simples ornements sonores placés pour la cadence : chacune est en **adéquation rhétorique** avec le contenu du verset, au point que substituer l'une à l'autre produirait un énoncé théologiquement incohérent ou, au mieux, appauvri.",
      },
      {
        type: "p",
        text: "Cette discipline, appelée parfois 'ilm al-munāsaba, a donné lieu à des ouvrages entiers consacrés uniquement à expliquer pourquoi tel verset s'achève par tel couple de noms plutôt que par un autre, apparemment tout aussi vraisemblable.",
      },
      { type: "h2", text: "Un exemple de pardon et de puissance" },
      {
        type: "verse",
        arabic:
          "وَلَا جُنَاحَ عَلَيْكُمْ فِيمَآ أَخْطَأْتُم بِهِۦ وَلَٰكِن مَّا تَعَمَّدَتْ قُلُوبُكُمْ ۚ **وَكَانَ ٱللَّهُ غَفُورًا رَّحِيمًا**",
        translation:
          "Nul grief sur vous pour ce en quoi vous vous seriez trompés, mais [seulement] pour ce que vos cœurs ont prémédité. **Et Allāh est Pardonneur, Très Miséricordieux.**",
        reference: "Coran, al-Aḥzāb, 33:5",
      },
      {
        type: "p",
        text: "Le verset traite de l'erreur non intentionnelle, opposée à l'acte prémédité. Sa clôture par **Ghafūr, Raḥīm** (Pardonneur, Très Miséricordieux) correspond exactement au propos : il s'agit d'excuser une faute involontaire, ce que ces deux noms, orientés vers le pardon et la clémence, viennent conforter. Une clôture par « al-ʿAzīz al-Ḥakīm » (le Puissant, le Sage), pourtant très fréquente ailleurs, aurait ici semblé déplacée, car elle évoque la rigueur de la sagesse plus que la miséricorde envers l'erreur.",
      },
      { type: "h2", text: "Un exemple de puissance et de sagesse" },
      {
        type: "verse",
        arabic:
          "وَٱلسَّارِقُ وَٱلسَّارِقَةُ فَٱقْطَعُوٓا۟ أَيْدِيَهُمَا جَزَآءًۢ بِمَا كَسَبَا نَكَٰلًا مِّنَ ٱللَّهِ ۗ **وَٱللَّهُ عَزِيزٌ حَكِيمٌ**",
        translation:
          "Le voleur et la voleuse, coupez-leur la main, en punition de ce qu'ils ont acquis, à titre d'exemple de la part d'Allāh. **Et Allāh est Puissant et Sage.**",
        reference: "Coran, al-Māʾida, 5:38",
      },
      {
        type: "p",
        text: "Ce verset, qui institue une peine sévère, s'achève par **ʿAzīz, Ḥakīm** (Puissant, Sage) : la Puissance rappelle que la sanction émane d'une autorité capable de l'imposer, la Sagesse rappelle qu'elle n'est pas arbitraire mais pesée avec justesse. On voit qu'une inversion des deux clôtures — Pardonneur, Miséricordieux ici, Puissant, Sage pour l'erreur non intentionnelle — produirait un contresens : elle ferait passer la peine légale pour un pardon, et l'erreur excusable pour un acte à sanctionner avec rigueur.",
      },
      {
        type: "comparaison",
        title: "Deux fawāṣil, deux logiques",
        columns: ["Ghafūr Raḥīm (33:5)", "ʿAzīz Ḥakīm (5:38)"],
        rows: [
          { criterion: "Objet du verset", cells: ["L'erreur non intentionnelle", "Le vol avéré et volontaire"] },
          { criterion: "Ton dominant", cells: ["Clémence, excuse", "Fermeté, autorité légale"] },
          { criterion: "Fonction de la clôture", cells: ["Rassurer sur le pardon possible", "Légitimer la sévérité de la peine"] },
          { criterion: "Effet d'une inversion", cells: ["Rendrait le pardon suspect de rigueur déplacée", "Ferait paraître la sanction arbitraire ou excusable"] },
        ],
        caption: "Le choix du couple de noms divins est indissociable du contenu juridique ou moral du verset.",
      },
      { type: "h2", text: "Le cas des versets sur l'audition et la vue" },
      {
        type: "verse",
        arabic:
          "لَّا يَسْتَوِى مِنكُم مَّنْ أَنفَقَ مِن قَبْلِ ٱلْفَتْحِ وَقَٰتَلَ ۚ ... وَكُلًّا وَعَدَ ٱللَّهُ ٱلْحُسْنَىٰ ۚ **وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ**",
        translation:
          "Ne sont pas égaux, parmi vous, ceux qui ont dépensé et combattu avant la victoire... À chacun, Allāh a promis la meilleure récompense. **Et Allāh est Parfaitement Informé de ce que vous faites.**",
        reference: "Coran, al-Ḥadīd, 57:10",
      },
      {
        type: "p",
        text: "Ce verset établit une distinction entre les mérites variables des croyants selon le moment de leur engagement ; sa clôture par **Khabīr** (Parfaitement Informé) souligne que Dieu connaît la valeur exacte de chaque action, jusque dans ses circonstances et ses intentions cachées — ce qui est précisément l'enjeu du verset, puisqu'il s'agit de graduer des mérites que les hommes eux-mêmes ne peuvent mesurer avec certitude.",
      },
      {
        type: "lexique",
        root: "ف ص ل",
        transliteration: "f-ṣ-l",
        sense: "Séparer, trancher, clore une chose distinctement d'une autre",
        derives: [
          { word: "fāṣila", arabic: "فاصلة", gloss: "la formule qui clôt et sépare un verset du suivant" },
          { word: "faṣl", arabic: "فصل", gloss: "séparation, tranchée, chapitre distinct" },
          { word: "tafṣīl", arabic: "تفصيل", gloss: "l'exposition détaillée, point par point" },
        ],
        note: "La racine évoque une clôture nette, qui referme le sens du verset comme on referme une phrase par sa conclusion logique.",
      },
      {
        type: "quote",
        text: "قال البقاعي رحمه الله: **كل آية من القرآن ختمت بما يناسب مضمونها من أسماء الله وصفاته، ولو أبدلت الفاصلة لفسد المعنى**.\n\nAl-Biqāʿī a dit : **« Chaque verset du Coran s'achève par ce qui correspond, parmi les noms et attributs d'Allāh, à son contenu ; si l'on substituait la clôture, le sens en serait corrompu. »**",
        source: "Al-Biqāʿī, Naẓm al-Durar fī Tanāsub al-Āyāt wa-l-Suwar",
      },
      {
        type: "objection",
        objection: "N'est-ce pas une lecture après-coup, qui trouve toujours une justification quel que soit le couple de noms employé ?",
        reponse:
          "L'objection serait recevable si les exégètes proposaient des explications vagues, applicables à n'importe quelle clôture. Or la méthode consiste précisément à montrer qu'une **permutation** des fawāṣil entre deux versets produirait une gêne de sens perceptible, comme le montrent les deux exemples du vol et de l'erreur excusable. Cette sensibilité au contraste, vérifiable verset après verset, distingue une analyse rigoureuse d'une simple rationalisation arbitraire.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un exercice de lecture utile",
        text: "Devant un verset achevé par un couple de noms divins, l'exercice le plus formateur consiste à imaginer le remplacer par un autre couple fréquent ailleurs, et à observer précisément ce qui, dans le sens, en serait affecté.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les formules de clôture du Coran ne sont donc jamais de simples cadences sonores destinées à harmoniser la lecture : elles portent, condensée en deux noms divins, une **relecture théologique** du contenu qui précède. S'attarder sur elles, loin d'être un exercice réservé aux spécialistes de la rhétorique, ouvre au lecteur ordinaire une voie supplémentaire vers la cohérence profonde du texte révélé.",
      },
    ],
  },
  {
    slug: slugifySujet("L'ellipse et ce qu'elle laisse au lecteur"),
    title: "L'ellipse et ce qu'elle laisse au lecteur",
    arabic: "الحذف",
    intro:
      "Le Coran omet parfois un mot, une proposition entière, voire le second terme d'une comparaison, laissant au lecteur le soin de le restituer. Cette **ellipse** (ḥadhf) n'est pas une lacune du texte : elle est un choix rhétorique délibéré, dont les grammairiens ont montré qu'il produit un effet de sens que la formulation complète n'aurait pas atteint.",
    body: [
      { type: "h2", text: "Ce que taire peut dire" },
      {
        type: "p",
        text: "En rhétorique arabe, l'**iḍmār** ou **ḥadhf** — l'omission d'un élément que le contexte permet de suppléer — est considéré comme l'un des sommets de l'éloquence, à la condition que l'élément omis reste **récupérable** sans effort excessif. Al-Jurjānī, dans ses Dalāʾil al-Iʿjāz, en a fait l'un des piliers de sa théorie de la composition (naẓm) : dire moins pour suggérer plus, à condition que l'esprit du lecteur soit guidé vers la restitution exacte.",
      },
      {
        type: "p",
        text: "Le Coran multiplie ces silences signifiants, qui obligent le lecteur à un travail actif de reconstruction — travail qui, loin d'être un obstacle, **intensifie** la portée du verset en le faisant habiter par celui qui le lit, plutôt que de la lui livrer toute mâchée.",
      },
      { type: "h2", text: "L'ellipse la plus discutée : la Fātiḥa" },
      {
        type: "verse",
        arabic: "**غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ**",
        translation: "**Non pas [le chemin] de ceux qui ont encouru [Ta] colère, ni des égarés.**",
        reference: "Coran, al-Fātiḥa, 1:7",
      },
      {
        type: "p",
        text: "L'agent de la colère, « ghayri al-maghḍūbi ʿalayhim », est passé au passif sans nommer qui a suscité cette colère. Les exégètes s'accordent, sur la base de la Sunna, à considérer que c'est Dieu qui a suscité cette colère, mais le texte l'omet, alors qu'il ne l'omet pas pour la miséricorde, mentionnée explicitement plus haut : « ceux que Tu as comblés de faveurs » (allathīna anʿamta ʿalayhim). Ibn al-Qayyim relève que ce déséquilibre est volontaire : la faveur est **attribuée directement** à Dieu, tandis que la colère, effet d'un mérite négatif de la créature, est **atténuée** par l'omission de son agent grammatical, comme pour marquer une répugnance divine à s'associer nommément à ce jugement.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Une asymétrie volontaire",
        text: "Le Coran nomme Dieu comme source de la faveur et voile grammaticalement Son rôle dans la colère, sans nier pour autant qu'Il en soit l'auteur. C'est une manière de rappeler que la miséricorde de Dieu devance Sa colère, ainsi que le rapporte un hadith authentique.",
      },
      { type: "h2", text: "L'ellipse du second terme comparé" },
      {
        type: "verse",
        arabic: "**أَفَمَن يُلْقَىٰ فِى ٱلنَّارِ خَيْرٌ أَم مَّن يَأْتِىٓ ءَامِنًا يَوْمَ ٱلْقِيَٰمَةِ**",
        translation: "**Celui qui sera jeté au Feu est-il donc meilleur, ou celui qui viendra en sécurité au Jour de la Résurrection ?**",
        reference: "Coran, Fuṣṣilat, 41:40",
      },
      {
        type: "p",
        text: "La question rhétorique implique une réponse omise, tant elle est évidente : nul besoin de préciser que le second est meilleur, le lecteur la fournit lui-même. Cette figure, très fréquente dans le Coran, s'appelle **al-istifhām al-inkārī**, l'interrogation qui vaut négation implicite : en taisant la réponse, le texte force l'auditeur à **prononcer intérieurement** le jugement qu'il ne peut honnêtement esquiver, ce qui l'engage bien davantage qu'une affirmation directe.",
      },
      {
        type: "schema",
        title: "Le mécanisme de l'ellipse persuasive",
        variant: "flow",
        nodes: [
          { label: "Question posée", note: "Une interrogation dont la réponse semble ouverte." },
          { label: "Élément omis", note: "La réponse, tue par le texte mais rendue nécessaire par le contexte." },
          { label: "Restitution du lecteur", note: "L'esprit fournit lui-même la réponse évidente." },
          { label: "Engagement renforcé", note: "Le lecteur, ayant conclu lui-même, adhère plus fortement qu'à une affirmation directe." },
        ],
        caption: "L'ellipse transforme le lecteur de récepteur passif en co-auteur du sens.",
      },
      { type: "h2", text: "L'ellipse du complément dans le récit de Yūsuf" },
      {
        type: "verse",
        arabic: "وَلَمَّا دَخَلُوا۟ عَلَىٰ يُوسُفَ ءَاوَىٰٓ إِلَيْهِ أَبَوَيْهِ وَقَالَ **ٱدْخُلُوا۟ مِصْرَ إِن شَآءَ ٱللَّهُ ءَامِنِينَ**",
        translation: "Et quand ils entrèrent auprès de Yūsuf, il accueillit auprès de lui ses parents et dit : **« Entrez en Égypte, si Allāh le veut, en sécurité. »**",
        reference: "Coran, Yūsuf, 12:99",
      },
      {
        type: "p",
        text: "Entre le verset précédent, qui rapporte le départ de la famille de Yaʿqūb vers l'Égypte, et celui-ci, qui les montre déjà entrés auprès de Yūsuf, le texte omet tout le récit du **voyage** lui-même : sa durée, ses péripéties, son arrivée. Ce silence narratif, très fréquent dans les récits coraniques, s'appelle l'ellipse de l'action intermédiaire : elle concentre l'attention sur les moments significatifs — le départ, chargé d'émotion, et l'arrivée, chargée de retrouvailles — en écartant tout ce qui n'ajoute rien au sens spirituel du récit.",
      },
      {
        type: "quote",
        text: "قال عبد القاهر الجرجاني رحمه الله: **باب الحذف باب دقيق المسلك، لطيف المأخذ، عجيب الأمر، شبيه بالسحر، فإنك تسقط الكلمة فيكون إسقاطها أفصح من ذكرها**.\n\nAbd al-Qāhir al-Jurjānī a dit : **« Le chapitre de l'ellipse est un chemin subtil, une prise délicate, une chose merveilleuse et proche de la magie : tu retranches le mot, et son retranchement se révèle plus éloquent que sa mention. »**",
        source: "Abd al-Qāhir al-Jurjānī, Dalāʾil al-Iʿjāz",
      },
      {
        type: "objection",
        objection: "Ces omissions ne rendent-elles pas le texte ambigu, ouvert à des interprétations divergentes selon ce que chacun choisit d'y restituer ?",
        reponse:
          "L'ellipse coranique n'est jamais totale ni arbitraire : le contexte immédiat, la grammaire ou la transmission prophétique fournissent presque toujours l'élément à suppléer avec un haut degré de certitude, comme le montre l'accord des exégètes sur l'agent de la colère dans la Fātiḥa. L'ambiguïté véritable, celle qui laisserait place à des restitutions contradictoires et également plausibles, est en réalité rare ; là où elle existe, les savants la signalent explicitement plutôt que de trancher arbitrairement.",
      },
      {
        type: "degres",
        title: "Reconnaître une ellipse signifiante",
        arabic: "علامات الحذف البليغ",
        degres: [
          { label: "Un vide grammatical repérable", note: "Un complément, un sujet ou une réponse manque à la construction normale de la phrase." },
          { label: "Une restitution possible par le contexte", note: "Le sens général ou la syntaxe environnante permettent de deviner l'élément omis." },
          { label: "Un effet de sens propre à l'omission", note: "La formulation complète produirait un effet moindre que le silence choisi." },
          { label: "Une confirmation par les exégètes anciens", note: "Al-Ṭabarī, al-Jurjānī ou leurs pairs signalent et commentent l'ellipse." },
        ],
        direction: "asc",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Ce que le Coran choisit de taire pèse parfois autant que ce qu'il énonce. L'ellipse n'est ni une lacune ni une facilité stylistique : c'est un appel discret à la participation du lecteur, qui doit combler l'espace laissé vacant pour recevoir pleinement le sens. Apprendre à repérer ces silences, c'est apprendre à lire le Coran non plus seulement avec les yeux, mais avec l'intelligence qu'il requiert de son lecteur.",
      },
    ],
  },
  {
    slug: slugifySujet("La mise en avant et le report d'un terme"),
    title: "La mise en avant et le report d'un terme",
    arabic: "التقديم والتأخير",
    intro:
      "L'arabe classique permet une grande liberté dans l'ordre des mots d'une phrase, liberté que le Coran exploite avec une précision remarquable. Placer un complément avant le verbe, ou un attribut avant le sujet, n'est jamais indifférent : cette **antéposition** (taqdīm) déplace l'accent du sens et révèle, souvent, l'intention profonde du verset.",
    body: [
      { type: "h2", text: "Le principe : ce qui vient en premier compte" },
      {
        type: "p",
        text: "La rhétorique arabe classique tient pour principe qu'avancer un mot dans la phrase, alors que l'ordre normal l'aurait placé après, produit un effet de **restriction** ou d'**insistance** : « iyyāka naʿbudu » (c'est Toi que nous adorons) met en avant le complément « Toi » avant le verbe « nous adorons », alors que l'ordre neutre aurait été « naʿbuduka » (nous T'adorons). Ce déplacement suggère l'exclusivité : c'est Toi, et Toi seul, que nous adorons — nul autre.",
      },
      {
        type: "p",
        text: "Les rhétoriciens résument ce principe par une formule devenue classique : **« taqdīm mā ḥaqquhu al-taʾkhīr yufīdu al-ikhtiṣāṣ »**, avancer ce dont la place normale serait après indique la restriction exclusive. Ce principe permet de résoudre des questions de sens que la seule traduction ne peut rendre sensibles.",
      },
      { type: "h2", text: "L'exemple fondateur de la Fātiḥa" },
      {
        type: "verse",
        arabic: "**إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ**",
        translation: "**C'est Toi [seul] que nous adorons, et c'est Toi [seul] dont nous implorons secours.**",
        reference: "Coran, al-Fātiḥa, 1:5",
      },
      {
        type: "p",
        text: "L'antéposition du pronom « iyyāka » avant chacun des deux verbes exprime que l'adoration et la demande de secours ne s'adressent **qu'à Dieu**, à l'exclusion de tout autre. C'est précisément sur ce verset que repose, selon Ibn al-Qayyim, la distinction entre le pur monothéisme et toute forme d'associationnisme : la construction grammaticale elle-même porte, avant même le contenu doctrinal, l'exclusivité de l'adoration due à Dieu seul.",
      },
      {
        type: "quote",
        text: "قال ابن القيم رحمه الله: **تقديم المعمول يفيد الحصر**، وتقديم إياك على نعبد يدل على اختصاص العبادة بالله وحده لا شريك له.\n\nIbn al-Qayyim a dit : **« L'antéposition du complément indique la restriction »**, et le fait d'avancer « Toi » avant « nous adorons » indique que l'adoration est **exclusivement réservée** à Allāh, sans associé.",
        source: "Ibn al-Qayyim, Madārij al-Sālikīn",
      },
      { type: "h2", text: "Un ordre de mots qui change le sujet du procès" },
      {
        type: "verse",
        arabic: "**وَإِلَٰهُكُمْ إِلَٰهٌ وَٰحِدٌ ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ**",
        translation: "**Et votre Dieu est un Dieu unique ; il n'y a de divinité que Lui, le Tout Miséricordieux, le Très Miséricordieux.**",
        reference: "Coran, al-Baqara, 2:163",
      },
      {
        type: "p",
        text: "L'ordre « lā ilāha illā huwa » place la négation générale « nulle divinité » avant l'exception « si ce n'est Lui », construction dite **ḥaṣr par nafy et ithbāt** (négation puis affirmation), l'une des formes de restriction les plus puissantes de la langue arabe. Elle nie d'abord toute divinité en général, avant de rétablir une seule exception, ce qui produit un effet bien plus catégorique que l'affirmation directe « Il est l'unique divinité » : la négation universelle, suivie de la restriction, ferme toute échappatoire à l'esprit avant même que le nom de Dieu ne soit prononcé.",
      },
      {
        type: "comparaison",
        title: "Ordre neutre et ordre marqué",
        columns: ["Ordre neutre (sans effet particulier)", "Ordre avec antéposition (ḥaṣr)"],
        rows: [
          { criterion: "Exemple", cells: ["« Nous T'adorons » (naʿbuduka)", "« C'est Toi que nous adorons » (iyyāka naʿbudu)"] },
          { criterion: "Information transmise", cells: ["Un simple fait, sans exclusivité marquée", "Une exclusivité : Toi et nul autre"] },
          { criterion: "Effet sur l'auditeur", cells: ["Neutre, informatif", "Engageant, catégorique"] },
        ],
        caption: "Le même contenu informatif produit un effet radicalement différent selon l'ordre choisi.",
      },
      { type: "h2", text: "Avancer le sujet pour souligner une capacité" },
      {
        type: "verse",
        arabic: "أَوَلَيْسَ ٱلَّذِى خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ بِقَٰدِرٍ عَلَىٰٓ أَن يَخْلُقَ مِثْلَهُم بَلَىٰ **وَهُوَ ٱلْخَلَّٰقُ ٱلْعَلِيمُ**",
        translation:
          "Celui qui a créé les cieux et la terre n'est-Il pas capable de créer leur pareil ? Bien sûr que si ! **Et c'est Lui le Grand Créateur, l'Omniscient.**",
        reference: "Coran, Yā Sīn, 36:81",
      },
      {
        type: "p",
        text: "L'antéposition du pronom « huwa » (Lui) avant « al-Khallāq al-ʿAlīm » souligne, en réponse à la question rhétorique qui précède sur la résurrection, que c'est **précisément Lui**, le Créateur des cieux et de la terre, et nul autre, qui détient cette capacité incontestable. Le pronom antéposé referme la boucle argumentative ouverte par la question initiale, en désignant sans ambiguïté celui à qui revient le pouvoir en discussion.",
      },
      {
        type: "spectre",
        title: "Degré d'exclusivité selon la construction",
        left: "Affirmation neutre",
        right: "Restriction exclusive maximale",
        markers: [
          { label: "« Nous T'adorons »", position: 10, note: "Fait énoncé sans emphase particulière" },
          { label: "« Lui, le Créateur »", position: 55, note: "Pronom antéposé, désignation appuyée" },
          { label: "« Nulle divinité si ce n'est Lui »", position: 80, note: "Négation universelle puis exception" },
          { label: "« C'est Toi [seul] que nous adorons »", position: 95, note: "Antéposition du complément, exclusivité maximale" },
        ],
        caption: "Plus la construction s'écarte de l'ordre neutre, plus l'exclusivité affirmée est catégorique.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un réflexe de lecture utile",
        text: "Face à un ordre de mots qui surprend en arabe, la première question à poser est : qu'est-ce qui a été avancé, et qu'aurait été l'ordre attendu ? La réponse révèle presque toujours ce que le verset veut mettre en relief.",
      },
      {
        type: "objection",
        objection: "Cette analyse grammaticale très fine ne risque-t-elle pas de projeter sur le texte des intentions qu'il n'a pas réellement ?",
        reponse:
          "Ce risque existerait si la règle était appliquée au cas par cas, selon la préférence de l'exégète. Mais le principe de l'antéposition restrictive est un fait de langue documenté indépendamment du Coran, attesté dans la poésie et la prose arabes préislamiques, et systématisé par les grammairiens bien avant que la question théologique ne soit en jeu. Appliquer une règle générale de la langue à un texte écrit dans cette langue n'est pas une projection arbitraire, c'est une lecture conforme aux outils mêmes dans lesquels le texte a été façonné.",
      },
      {
        type: "experiment",
        title: "Vérifier l'effet par substitution",
        steps: [
          "Prendre le verset « iyyāka naʿbudu » et le reformuler en ordre neutre : « naʿbuduka ».",
          "Comparer les deux formulations à voix haute.",
          "Observer que la seconde n'exclut pas, par elle-même, l'adoration d'autre chose à côté de Dieu.",
          "Constater que seule la première, par l'antéposition, porte l'exclusivité.",
        ],
        conclusion: "Le déplacement d'un seul mot suffit à faire basculer un énoncé descriptif en une déclaration d'exclusivité totale.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'ordre des mots, en arabe coranique, n'est jamais affaire de simple style ou de convenance rythmique : c'est un instrument de sens à part entière, capable de transformer une affirmation neutre en déclaration d'exclusivité absolue. Prêter attention à ce qui est avancé et à ce qui est reporté dans un verset, c'est se donner les moyens de percevoir des nuances de sens que la traduction, contrainte par l'ordre naturel du français, ne peut souvent que suggérer sans jamais pleinement restituer.",
      },
    ],
  },
];
