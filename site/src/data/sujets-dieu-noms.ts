import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre I — « Connaissez-vous Dieu ? »
 * Groupe c — Les noms divins (asmāʾ Allāh al-ḥusnā).
 */
export const sujetsDieuNoms: Sujet[] = [
  {
    slug: slugifySujet("Un nom, quatre-vingt-dix-neuf, ou davantage ?"),
    title: "Un nom, quatre-vingt-dix-neuf, ou davantage ?",
    arabic: "أسماء الله الحسنى",
    intro:
      "Un ḥadīth célèbre annonce quatre-vingt-dix-neuf noms « à qui les dénombre, le Paradis ». Le chiffre a frappé les imaginations au point qu’on oublie parfois de lire le ḥadīth jusqu’au bout, et de le confronter aux autres textes qui, eux, ne fixent aucune limite. Le Coran parle des « noms les plus beaux » (al-asmāʾ al-ḥusnā) sans en donner le compte ; une invocation authentique du Prophète ﷺ évoque un « nom qu’Il a gardé pour Lui dans la science du mystère ». Entre ces textes, une tension apparente, que ce sujet se propose de dénouer avec la rigueur qu’elle mérite.\n\nCette question n’est pas un simple exercice d’érudition sur des listes. Elle engage la manière dont on conçoit la Révélation elle-même : les noms divins sont-ils un catalogue fermé qu’il suffirait de mémoriser, ou une réalité ouverte que la Révélation nous donne à connaître par touches successives, sans jamais en épuiser l’étendue ? On verra que la position la plus solide, et la plus fidèle à l’ensemble des textes, tient les deux bouts : le chiffre 99 a un sens réel et précieux, sans que le nombre total des noms de Dieu s’y trouve enfermé.\n\nOn examinera d’abord le ḥadīth fondateur et ses deux formulations, puis la question de savoir si le mot « quatre-vingt-dix-neuf » désigne une liste fixée ou une propriété numérique, avant d’aborder les tentatives des savants pour dresser des listes précises, les critères qui doivent gouverner la reconnaissance d’un nom divin, et enfin le sens spirituel de « dénombrer » (aḥṣā) ces noms.",
    body: [
      { type: "h2", text: "Le ḥadīth fondateur et ses deux formulations" },
      {
        type: "quote",
        text:
          "عن أبي هريرة رضي الله عنه أنَّ رسول الله ﷺ قال: **«إنَّ لله تسعةً وتسعين اسمًا، مائةً إلَّا واحدًا، مَن أحصاها دخل الجنَّة»**.\n\nD’après Abū Hurayra, qu’Allāh l’agrée, le Messager d’Allāh ﷺ a dit : **« Allāh a quatre-vingt-dix-neuf noms, cent moins un ; quiconque les dénombre entrera au Paradis. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "La formulation « cent moins un » (*miʾatan illā wāḥidan*) retient l’attention des linguistes : pourquoi ne pas dire simplement « quatre-vingt-dix-neuf » ? Les commentateurs y voient un procédé de mise en relief propre à l’arabe, qui **grave le chiffre dans la mémoire** en le faisant passer par un nombre rond avant de le corriger d’une unité — comme on retient mieux « cent moins un euro » que « quatre-vingt-dix-neuf euros ». Ce n’est donc pas une hésitation du texte, mais une insistance stylistique.",
      },
      {
        type: "h2", text: "Une liste fermée, ou une propriété numérique ?",
      },
      {
        type: "p",
        text: "La question décisive porte sur la structure grammaticale de la phrase prophétique : dit-elle « voici quatre-vingt-dix-neuf noms, et pas un de plus », ou dit-elle « parmi les noms d’Allāh, il s’en trouve quatre-vingt-dix-neuf tels que quiconque les dénombre entre au Paradis » ? La seconde lecture, défendue par une part importante des exégètes, s’appuie sur la tournure indéfinie du ḥadīth (« Allāh a quatre-vingt-dix-neuf noms » et non « les noms d’Allāh sont au nombre de quatre-vingt-dix-neuf, ni plus ni moins »).",
      },
      {
        type: "quote",
        text:
          "قال الإمام النووي رحمه الله: **«ليس معناه الحصر في هذا العدد بحيث لا يكون له اسم غيرها، بل المراد أنَّ هذه التسعة والتسعين مَن أحصاها دخل الجنَّة، ولا يمنع ذلك أن يكون له أسماء أخرى»**.\n\nL’imām al-Nawawī a dit : **« Le sens n’est pas de limiter [les noms] à ce nombre, comme s’Il n’avait pas d’autre nom, mais le sens est que ces quatre-vingt-dix-neuf, quiconque les dénombre entre au Paradis, et cela n’empêche pas qu’Il ait d’autres noms. »**",
        source: "al-Nawawī, Sharḥ Ṣaḥīḥ Muslim",
      },
      {
        type: "p",
        text: "Cette lecture trouve un appui décisif dans une autre invocation prophétique, où le Prophète ﷺ demande à Allāh par **« tout nom qu’Il S’est nommé, qu’Il a fait descendre dans Son Livre, qu’Il a enseigné à l’une de Ses créatures, ou qu’Il a gardé pour Lui dans la science du mystère »**. Cette dernière clause est capitale : elle affirme explicitement l’existence de noms **non révélés**, connus de Dieu seul.",
      },
      {
        type: "verse",
        arabic: "وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا",
        translation: "**C’est à Allāh qu’appartiennent les noms les plus beaux : invoquez-Le donc par eux.**",
        reference: "Coran, al-Aʿrāf, 7:180",
      },
      {
        type: "p",
        text: "Le verset ne pose aucune limite numérique ; il institue une catégorie, « les noms les plus beaux », et une pratique, l’invocation par ces noms. C’est cette catégorie que le ḥadīth vient ensuite qualifier par un chiffre, sans prétendre l’épuiser.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الرازي رحمه الله في تفسيره: **«اعلم أنَّ أسماء الله تعالى غير متناهية، لأنَّ كل صفة من صفات كماله يمكن أن يُشتقَّ منها اسم، وصفاته الكمالية لا تتناهى»**.\n\nL’imām al-Rāzī a dit dans son commentaire : **« Sache que les noms d’Allāh sont sans limite, car de chacun de Ses attributs de perfection il est possible de tirer un nom, et Ses attributs de perfection sont sans limite. »**",
        source: "al-Rāzī, Mafātīḥ al-Ghayb, commentaire de 7:180",
      },
      { type: "h2", text: "Les tentatives de dresser une liste des quatre-vingt-dix-neuf" },
      {
        type: "p",
        text: "Le ḥadīth de Bukhārī et Muslim ne fournit aucune liste. Une version transmise par al-Tirmidhī, jugée plus faible par la critique du ḥadīth, en propose une, largement diffusée dans la piété populaire — celle qu’on trouve gravée sur les chapelets et les affiches. Les savants du ḥadīth ont montré que **cette énumération est un ajout d’un transmetteur postérieur**, et non la parole du Prophète ﷺ lui-même : elle demeure une compilation savante, utile et globalement fidèle, mais non intangible.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une liste utile, non un texte révélé",
        text: "Les listes de quatre-vingt-dix-neuf noms diffusées aujourd’hui rendent un service pédagogique réel. Mais **aucune d’elles n’a le statut d’un texte prophétique intégral** : elles résultent d’un travail de collecte à partir du Coran et de la Sunna, avec des variantes d’un compilateur à l’autre selon les critères retenus.",
      },
      {
        type: "p",
        text: "Ibn Ḥajar al-ʿAsqalānī a consacré à cette question de longues pages dans son commentaire du Ṣaḥīḥ de Bukhārī, comparant plusieurs listes attribuées à différents savants — celle attribuée à al-Walīd ibn Muslim, celle d’Ibn Ḥazm, celle d’al-Qurṭubī — et relevant leurs divergences, parfois jusqu’à une vingtaine de noms différents selon les critères d’inclusion retenus.",
      },
      {
        type: "schema",
        title: "Trois strates dans les noms divins",
        variant: "flow",
        nodes: [
          { label: "Noms révélés dans le Coran", arabic: "الأسماء القرآنية", note: "Al-Raḥmān, al-ʿAzīz, al-Ḥakīm… attestés par le texte lui-même." },
          { label: "Noms attestés dans la Sunna authentique", arabic: "الأسماء النبوية", note: "Certains noms figurent dans des invocations prophétiques sans être coraniques." },
          { label: "Noms retenus dans les quatre-vingt-dix-neuf", arabic: "التسعة والتسعون", note: "Sélection savante, utile à la mémorisation et à l’invocation." },
          { label: "Noms gardés dans la science du mystère", arabic: "ما استأثر به في علم الغيب", note: "Connus de Dieu seul, textuellement affirmés, jamais énumérables par nous." },
        ],
        caption: "Chaque strate est réelle ; seule la troisième correspond au chiffre du ḥadīth de Bukhārī et Muslim.",
      },
      { type: "h2", text: "Qu’est-ce qu’un « nom » divin ? Les critères de la discipline" },
      {
        type: "p",
        text: "Tous les mots qui décrivent Dieu dans le Coran ne sont pas nécessairement des « noms » au sens technique. Les savants distinguent le **nom** (*ism*), qui se substantive et peut se dire de Dieu à la troisième personne (« al-ʿAlīm », le Savant), de l’**attribut** (*ṣifa*), qui décrit une réalité sans nécessairement fournir un nom autonome, et de la simple **relation verbale**, qui rapporte une action sans se figer en nom.",
      },
      {
        type: "lexique",
        root: "س م و",
        transliteration: "s-m-w",
        sense:
          "Élever, être haut ; d’où **ism** (nom), qui « élève » et distingue la chose nommée en la faisant reconnaître. Certains grammairiens rattachent le mot à **sima** (marque, signe) : le nom serait alors ce par quoi une réalité se signale à la connaissance.",
        derives: [
          { word: "ism", arabic: "اِسْم", gloss: "Le nom, ce qui désigne et distingue." },
          { word: "musammā", arabic: "مُسَمَّى", gloss: "Le nommé : l’Essence divine, réalité unique derrière tous les noms." },
          { word: "tasmiya", arabic: "تَسْمِيَة", gloss: "L’acte de nommer, notamment au début des actes rituels : « bismillāh »." },
          { word: "samāʾ (à ne pas confondre)", arabic: "سَمَاء", gloss: "Racine distincte (le ciel) que la proximité sonore fait parfois confondre à tort." },
        ],
        note: "Débat classique : le nom est-il identique au nommé, ou distinct de lui ? La position ashʿarite majoritaire tient que **le nom est le nommé lui-même sous un aspect de signification**, non une réalité surajoutée à l’Essence.",
      },
      {
        type: "balance",
        title: "Ce qui fait qu’un mot est reconnu comme nom divin",
        affirmLabel: "Critères requis",
        denyLabel: "Ce qui exclut un mot de la liste",
        affirm: [
          "Le mot doit se dire de Dieu **à Sa propre initiative** : par révélation, non par invention humaine.",
          "Il doit exprimer **une perfection absolue**, sans aucune trace d’imperfection possible.",
          "Il doit être **substantivable** et employé en position de nom, non seulement de verbe conjugué.",
        ],
        deny: [
          "Un verbe d’action ponctuelle, comme « Il trompe [les comploteurs] » (*al-Māḥiq*, non retenu), qui n’exprime pas une perfection permanente sous cette forme.",
          "Un mot dont le sens, pris isolément, comporterait une limite ou un défaut.",
          "Une invention purement humaine, non appuyée sur un texte révélé.",
        ],
        caption: "C’est ce filtrage qui explique les divergences entre listes savantes : tous n’appliquent pas les critères de la même manière.",
      },
      { type: "h2", text: "Le sens de « dénombrer » (aḥṣā)" },
      {
        type: "p",
        text: "Le ḥadīth promet le Paradis à qui « les dénombre » (*aḥṣāhā*). Les commentateurs refusent d’y voir une simple récitation mécanique. Trois sens s’articulent dans ce verbe : **compter** matériellement la liste, **cerner le sens** de chaque nom pour le comprendre correctement, et **agir en conséquence**, c’est-à-dire faire de chaque nom une porte d’entrée dans un comportement — invoquer al-Ghafūr en demandant pardon, se conduire en s’inspirant d’al-ʿAdl dans la justice qu’on rend aux autres.",
      },
      {
        type: "quote",
        text:
          "قال ابن حجر رحمه الله: **«معنى الإحصاء عند العلماء يرجع إلى ثلاثة أشياء: حفظها، وفهم معانيها، والعمل بمقتضاها»**.\n\nIbn Ḥajar a dit : **« Le sens du dénombrement, selon les savants, se ramène à trois choses : les retenir par cœur, en comprendre les sens, et agir selon ce qu’ils requièrent. »**",
        source: "Ibn Ḥajar al-ʿAsqalānī, Fatḥ al-Bārī",
      },
      {
        type: "experiment",
        title: "La bibliothèque sans dernière étagère",
        steps: [
          "Imagine une bibliothèque dont on te montre quatre-vingt-dix-neuf volumes soigneusement reliés, avec la promesse que leur lecture attentive suffit à combler une vie entière.",
          "On t’informe, honnêtement, que la bibliothèque possède d’autres salles, dont certaines te resteront à jamais fermées.",
          "Tu ne conclus pas que les quatre-vingt-dix-neuf volumes sont sans valeur, sous prétexte qu’il existe d’autres salles.",
          "Tu ne prétends pas non plus que la bibliothèque se limite à ce qu’on t’a montré, sous prétexte que cela suffirait à ta tâche.",
        ],
        conclusion:
          "Tenir ensemble **la suffisance de ce qui est donné** et **l’humilité devant ce qui dépasse notre accès** : voilà exactement la position juste sur le nombre des noms divins.",
      },
      { type: "h2", text: "Une richesse, non une contrainte" },
      {
        type: "p",
        text: "Loin d’être un problème arithmétique à résoudre, cette pluralité ouverte des noms divins traduit une vérité théologique de premier plan : **Dieu ne Se réduit à aucune formule**, si riche soit-elle, et chaque nom qu’Il Se donne ouvre un accès véridique, jamais total, à Sa perfection. C’est pourquoi le fidèle qui médite un nom nouveau ne « découvre » rien que Dieu ignorerait de Lui-même : il reçoit, à son échelle, un rayon de plus d’une lumière qui ne s’épuise jamais.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas transformer la piété en comptabilité",
        text: "Réciter machinalement une liste de noms, chapelet en main, sans que le cœur ni la conduite n’en soient touchés, **manque le sens même du ḥadīth**. La promesse du Paradis est attachée au dénombrement véritable, celui qui unit mémoire, compréhension et pratique — non au seul débit verbal.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le chiffre quatre-vingt-dix-neuf n’enferme pas Dieu dans une liste : il désigne un ensemble de noms dont la fréquentation assidue conduit au Paradis, sans épuiser la totalité de ce que Dieu Se nomme. **Affirmer les quatre-vingt-dix-neuf sans les figer en plafond, et reconnaître l’existence de noms gardés dans le mystère sans céder au vertige de l’indéfini** : telle est la position qui rend justice à tous les textes, et qui restitue au chapelet de nos invocations sa portée réelle.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Extraire un nom à partir d'un verbe coranique : les conditions"),
    title: "Extraire un nom à partir d'un verbe coranique : les conditions",
    arabic: "الاشتقاق",
    intro:
      "Le Coran regorge de verbes qui décrivent l’action divine : « Il pardonne » (*yaghfiru*), « Il fait miséricorde » (*yarḥamu*), « Il ruse [contre les comploteurs] » (*yamkuru*), « Il éprouve » (*yabtalī*). Une tentation naturelle, mais dangereuse si elle n’est pas encadrée, consisterait à transformer systématiquement chaque verbe en un nom divin : d’« Il ruse » vers « Al-Mākir », le Ruseur, ou d’« Il trompe [les hypocrites] » vers un nom qui figerait cette action isolée en attribut permanent. Or les savants ont établi des conditions précises à cette opération d’extraction, appelée *ishtiqāq*, sans lesquelles la théologie des noms divins sombrerait dans l’arbitraire.\n\nCe sujet examine la logique de cette prudence méthodologique, souvent négligée par une piété pressée de multiplier les noms. On y verra que la question n’est pas seulement grammaticale : elle touche à la dignité même de Dieu, car nommer Dieu d’un nom mal formé revient à Lui attribuer, sous couvert de révérence, une imperfection ou une limitation.\n\nOn distinguera d’abord le nom, l’attribut et le simple énoncé d’un acte ; puis on énoncera les trois conditions majeures reconnues par les théologiens pour qu’un verbe donne légitimement naissance à un nom ; enfin on appliquera ces conditions à des cas concrets et disputés, notamment les verbes de ruse, de moquerie et d’oubli employés en réponse à leurs semblables humains.",
    body: [
      { type: "h2", text: "Nom, attribut, acte : trois niveaux à ne pas confondre" },
      {
        type: "p",
        text: "Avant d’examiner les conditions de l’extraction, il faut fixer le vocabulaire. Un **acte** rapporté par un verbe (« Il a créé », « Il a envoyé ») décrit un événement ponctuel ou récurrent. Un **attribut** (*ṣifa*) désigne une qualité permanente de l’Essence (la science, la puissance, la vie). Un **nom** (*ism*) est la forme substantive qui, employée en position de sujet, permet de dire « Il est... » de manière stable et révérencielle : al-ʿAlīm, le Savant ; al-Khāliq, le Créateur.",
      },
      {
        type: "p",
        text: "Tout attribut ne devient pas automatiquement nom, et tout acte rapporté par un verbe ne se laisse pas transformer en nom. **C’est précisément cette dernière transition, du verbe au nom, qui exige des garde-fous.**",
      },
      { type: "h2", text: "Première condition : la perfection intrinsèque du sens" },
      {
        type: "p",
        text: "La condition la plus décisive est que le sens du verbe, une fois substantivé, doit exprimer **une perfection absolue, sans aucune connotation de défaut, de limitation ou de rabaissement**, quel que soit le contexte. Un nom divin doit pouvoir être invoqué en toute circonstance, loué pour lui-même, sans qu’aucune restriction n’en tempère l’éloge.",
      },
      {
        type: "verse",
        arabic: "**إِنَّ ٱللَّهَ غَفُورٌ رَّحِيمٌ**",
        translation: "**Certes Allāh est Pardonneur, Très-Miséricordieux.**",
        reference: "Coran, al-Nisāʾ, 4:96 (formule récurrente)",
      },
      {
        type: "p",
        text: "Al-Ghafūr et al-Raḥīm satisfont pleinement ce critère : pardonner et faire miséricorde sont des perfections en toute hypothèse, dignes d’être invoquées et louées sans réserve, quel que soit le contexte où elles apparaissent.",
      },
      {
        type: "verse",
        arabic: "**وَيَمْكُرُونَ وَيَمْكُرُ ٱللَّهُ ۖ وَٱللَّهُ خَيْرُ ٱلْمَٰكِرِينَ**",
        translation: "**Ils rusent, et Allāh ruse [en retour] ; et Allāh est le meilleur des ruseurs.**",
        reference: "Coran, Āl ʿImrān, 3:54",
      },
      {
        type: "p",
        text: "Le verbe *makara* (ruser) pose une difficulté typique : dans l’usage courant, la ruse porte une connotation de tromperie qui n’est pas, en elle-même, une perfection absolue — elle serait même un défaut si elle visait un innocent. Le Coran l’emploie ici **exclusivement en réponse et en châtiment de la ruse des comploteurs**, jamais de manière libre et absolue. C’est pourquoi les savants majoritaires refusent de former le nom « al-Mākir » (le Ruseur) comme nom divin autonome : le verbe est vrai dans son contexte précis, mais **il ne satisfait pas la condition de perfection absolue et inconditionnée** requise d’un nom.",
      },
      {
        type: "quote",
        text:
          "قال الإمام ابن القيم رحمه الله: **«لا يجوز أن يُشتقَّ له اسمٌ من كلِّ فعلٍ أخبر به عن نفسه، بل يُخبَر عنه بالفعل ولا يُشتقُّ منه الاسم إلَّا إذا كان الفعل كمالًا مطلقًا من كلِّ وجه»**.\n\nL’imām Ibn al-Qayyim a dit : **« Il n’est pas permis de Lui extraire un nom de chaque verbe par lequel Il S’est décrit ; on rapporte l’action par le verbe, sans en extraire un nom, à moins que ce verbe n’exprime une perfection absolue sous tous les rapports. »**",
        source: "Ibn al-Qayyim, Badāʾiʿ al-Fawāʾid",
      },
      { type: "h2", text: "Deuxième condition : l’absence de restriction contextuelle" },
      {
        type: "p",
        text: "Une deuxième condition, étroitement liée à la première, exige que **le sens ne soit pas restreint à une circonstance particulière défavorable**. Un nom divin doit valoir en toute situation, sans qu’un contexte négatif en limite la portée. C’est ce qui distingue, par exemple, « al-Muntaqim » (le Vengeur) employé isolément — refusé par plusieurs savants comme nom autonome, car la vengeance seule évoquerait la rigueur sans l’équilibre de la miséricorde — de l’expression coranique « Dhū intiqām » (Détenteur de rétribution), toujours associée à un autre nom qui en tempère la portée.",
      },
      {
        type: "verse",
        arabic: "**نَبِّئْ عِبَادِى أَنِّىٓ أَنَا ٱلْغَفُورُ ٱلرَّحِيمُ وَأَنَّ عَذَابِى هُوَ ٱلْعَذَابُ ٱلْأَلِيمُ**",
        translation:
          "**Informe Mes serviteurs que Je suis, Moi, le Pardonneur, le Très-Miséricordieux ; et que Mon châtiment est le châtiment douloureux.**",
        reference: "Coran, al-Ḥijr, 15:49-50",
      },
      {
        type: "p",
        text: "Ce couplet est un modèle d’équilibre théologique : la miséricorde est nommée d’abord et sous forme de nom stable (al-Ghafūr, al-Raḥīm), tandis que le châtiment reste décrit par un attribut circonstancié (« Mon châtiment »), **sans jamais recevoir la forme figée d’un nom autonome comme « al-Muʿadhdhib »**. Cette dissymétrie n’est pas un hasard stylistique : elle traduit la priorité structurelle de la miséricorde sur la rigueur, affirmée ailleurs par le ḥadīth qudsī : « Ma miséricorde précède Ma colère. »",
      },
      { type: "h2", text: "Troisième condition : l’attestation textuelle elle-même" },
      {
        type: "p",
        text: "La troisième condition, de nature méthodologique et non plus seulement sémantique, tient à la source : **on ne fabrique pas un nom divin par pure déduction rationnelle**, même si le sens paraît noble. Il faut que le nom, sous sa forme substantive, soit lui-même attesté — ou que sa formation à partir d’un verbe attesté soit validée par un usage reconnu chez les Compagnons, les Successeurs ou les grands exégètes, et non le fruit d’une initiative individuelle isolée.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La différence entre décrire et nommer",
        text: "On peut légitimement **dire** de Dieu, en suivant le texte, qu’Il « a créé », qu’Il « a envoyé », qu’Il « fait descendre la pluie » — ces verbes décrivent Son action sans qu’il soit nécessaire, ni même permis dans certains cas, d’en tirer un nom figé comme « al-Munzil » érigé en attribut permanent d’invocation autonome, sauf attestation propre. **Décrire une action est plus large que nommer une essence.**",
      },
      {
        type: "lexique",
        root: "ش ق ق",
        transliteration: "sh-q-q",
        sense:
          "Fendre, séparer, tirer une chose d’une autre en la faisant naître d’elle. D’où **ishtiqāq**, la dérivation grammaticale, opération par laquelle un mot est « extrait » d’une racine ou d’un autre mot, comme une branche fendue du tronc.",
        derives: [
          { word: "ishtiqāq", arabic: "اِشْتِقَاق", gloss: "L’extraction d’un mot à partir d’un autre ; ici, d’un nom à partir d’un verbe." },
          { word: "mushtaqq", arabic: "مُشْتَقّ", gloss: "Le mot dérivé, obtenu par ce procédé." },
          { word: "ishtiqāq akbar", arabic: "اِشْتِقَاق أَكْبَر", gloss: "La dérivation majeure : celle qui ne conserve que l’ordre des lettres, non leur identité stricte." },
          { word: "mushtaqq minhu", arabic: "مُشْتَقّ مِنْه", gloss: "La racine ou le mot source dont on tire le dérivé." },
        ],
        note: "Le débat sur les noms divins est, techniquement, un débat sur les **limites licites de l’ishtiqāq théologique**, distinct de l’ishtiqāq purement grammatical qui, lui, n’a pas de garde-fou doctrinal.",
      },
      { type: "h2", text: "Application à des cas disputés" },
      {
        type: "p",
        text: "Le verbe *nasiya* (oublier), employé dans le Coran à propos de Dieu dans un sens de réponse symétrique (« ils ont oublié Allāh, alors Il les a oubliés »), ne donne évidemment naissance à aucun nom : l’oubli, pris en lui-même, est un pur défaut, jamais une perfection, et son emploi coranique relève de la figure rhétorique de la **mushākala** (assimilation de forme), où le second terme reprend le mot du premier par miroir stylistique sans en partager le sens réel.",
      },
      {
        type: "verse",
        arabic: "**نَسُوا۟ ٱللَّهَ فَنَسِيَهُمْ**",
        translation: "**Ils ont oublié Allāh ; alors Il les a oubliés [c’est-à-dire : délaissés, comme en rétribution de leur oubli].**",
        reference: "Coran, al-Tawba, 9:67",
      },
      {
        type: "quote",
        text:
          "قال الإمام الطبري رحمه الله: **«ومعنى نسيانه إياهم: تركه إياهم من رحمته وتوفيقه، لا نسيان الذهول والغفلة الذي هو من صفات النقص»**.\n\nL’imām al-Ṭabarī a dit : **« Le sens de Son oubli d’eux est qu’Il les délaisse de Sa miséricorde et de Son assistance, non l’oubli d’étourderie et de négligence, qui relève des attributs d’imperfection. »**",
        source: "al-Ṭabarī, Tafsīr al-Ṭabarī, commentaire de 9:67",
      },
      {
        type: "balance",
        title: "Ce qui autorise l’extraction d’un nom, ce qui l’interdit",
        affirmLabel: "Cas où l’extraction est légitime",
        denyLabel: "Cas où elle est refusée",
        affirm: [
          "**Al-Ghafūr, al-Raḥīm, al-ʿAlīm, al-Qadīr** : perfections absolues, sans contexte restrictif, largement attestées.",
          "**Al-Samīʿ, al-Baṣīr** : qualités permanentes, jamais employées en défaveur du sens.",
          "Noms attestés eux-mêmes sous forme substantive dans le texte, sans détour de dérivation risquée.",
        ],
        deny: [
          "**Al-Mākir** isolé : le verbe n’exprime une perfection qu’en contexte de rétribution, non de manière absolue.",
          "**Al-Muʿadhdhib, al-Nāsī** : le sens brut évoquerait un défaut ou une limitation s’il était figé en nom permanent.",
          "Toute forme obtenue par pure spéculation grammaticale, sans usage attesté chez les autorités reconnues.",
        ],
        caption: "La grammaire seule ne suffit jamais à fonder un nom divin : il faut la convergence du sens, du contexte et de l’attestation.",
      },
      { type: "h2", text: "Pourquoi cette rigueur n’est pas un excès de précaution" },
      {
        type: "p",
        text: "On pourrait juger cette prudence excessive, presque tatillonne. Elle répond pourtant à un enjeu de fond : **nommer, c’est fixer une image durable dans l’esprit des croyants**. Un nom mal formé, répété dans les invocations et les chants, finit par façonner une représentation déformée de Dieu, quand bien même le verbe d’origine, replacé dans son contexte, ne portait aucune atteinte à Sa perfection.",
      },
      {
        type: "experiment",
        title: "L’étiquette et le médicament",
        steps: [
          "Un médicament, pris à la bonne dose et pour la bonne pathologie, guérit véritablement.",
          "Si l’on inscrit sur son étiquette une indication trop large, en omettant les conditions de son usage, il devient dangereux pour qui l’absorbe hors de propos.",
          "Le verbe divin employé en contexte précis est comme le médicament bien dosé : vrai et bénéfique à sa place.",
          "En faire un nom absolu, détaché de son contexte, revient à réécrire l’étiquette en supprimant la condition qui en garantissait la justesse.",
        ],
        conclusion:
          "Les conditions de l’ishtiqāq sont **l’étiquette exacte** qui empêche un énoncé vrai de devenir, par généralisation abusive, une atteinte à la transcendance qu’il visait pourtant à honorer.",
      },
      {
        type: "schema",
        title: "Le trajet d’un verbe coranique vers un nom légitime",
        variant: "flow",
        nodes: [
          { label: "Verbe attesté dans le Coran", arabic: "الفعل", note: "Point de départ : un acte rapporté par le texte." },
          { label: "Examen du contexte", note: "Le sens est-il restreint à une circonstance défavorable ?" },
          { label: "Examen de la perfection", note: "Le sens, une fois isolé, est-il une perfection en toute hypothèse ?" },
          { label: "Recherche d’attestation", note: "Un usage reconnu valide-t-il la forme substantive ?" },
          { label: "Nom légitimement reconnu", arabic: "الاسم", note: "Seule issue si les trois étapes précédentes sont franchies." },
        ],
        caption: "Un seul maillon manquant suffit à interrompre le trajet et à refuser la formation du nom.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Extraire un nom divin d’un verbe coranique n’est donc pas une opération purement grammaticale, à la portée de quiconque manie l’arabe : c’est un acte théologique engageant, qui exige la convergence du sens, du contexte et de l’attestation reconnue. **Cette discipline protège à la fois la transcendance de Dieu et la sincérité de nos invocations** : elle garantit que chaque nom prononcé dans la prière est bien une porte ouverte sur une perfection réelle, et non une image approximative héritée d’une lecture pressée du texte.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Al-Raḥmān et al-Raḥīm : deux miséricordes, deux portées"),
    title: "Al-Raḥmān et al-Raḥīm : deux miséricordes, deux portées",
    arabic: "الرحمن الرحيم",
    intro:
      "Ils ouvrent le Livre, reviennent à chaque sourate hormis une, et scandent la vie du croyant depuis la *basmala* prononcée avant chaque repas jusqu’à la formule récitée en entrant dans la prière : al-Raḥmān, al-Raḥīm. Deux noms tirés de la même racine, si proches par la forme qu’on pourrait croire à une simple redondance stylistique, un doublement rhétorique sans conséquence doctrinale. C’est là une erreur que les exégètes se sont appliqués, dès les premiers siècles, à dissiper avec minutie.\n\nCar la langue arabe, dans sa précision morphologique, ne double jamais un sens sans raison : les deux formes *faʿlān* et *faʿīl*, appliquées à une même racine, ouvrent des nuances distinctes que le Coran met à profit pour composer, en deux mots, une théologie entière de la miséricorde divine — l’une immense et universelle, l’autre choisie et durable. Ce sujet reprend cette distinction classique, l’articule aux emplois coraniques respectifs des deux noms, et en tire les conséquences pour la vie spirituelle du croyant.\n\nOn commencera par la racine commune, r-ḥ-m, et son ancrage dans l’expérience humaine la plus élémentaire ; on examinera ensuite la différence morphologique entre les deux formes et son incidence sémantique ; on suivra les emplois coraniques de chaque nom pour vérifier cette distinction sur pièces ; enfin on en tirera les fruits pour l’invocation et pour la compréhension du mal et de la souffrance dans un monde gouverné par un Dieu miséricordieux.",
    body: [
      { type: "h2", text: "Une racine ancrée dans l’expérience humaine" },
      {
        type: "lexique",
        root: "ر ح م",
        transliteration: "r-ḥ-m",
        sense:
          "La racine désigne originellement la **matrice** (*raḥim*), le lieu où se forme et se protège l’être le plus vulnérable. De ce sens concret dérive le sens abstrait de tendresse protectrice, de sollicitude qui prend soin d’un être fragile sans rien attendre en retour.",
        derives: [
          { word: "raḥim", arabic: "رَحِم", gloss: "La matrice ; d’où aussi les liens de parenté, ṣilat al-raḥim." },
          { word: "raḥma", arabic: "رَحْمَة", gloss: "La miséricorde elle-même, attribut et don." },
          { word: "raḥīm", arabic: "رَحِيم", gloss: "Forme intensive *faʿīl* : la miséricorde qui se manifeste, s’actualise, se répète." },
          { word: "raḥmān", arabic: "رَحْمَٰن", gloss: "Forme intensive *faʿlān* : la miséricorde qui embrasse tout, sans exception, par nature." },
        ],
        note:
          "**«الرَّحِمُ شُجْنَةٌ مِنَ الرَّحْمَٰن»** — « Le lien de parenté est une ramification tirée d’al-Raḥmān » (ḥadīth rapporté par Bukhārī et Muslim) : la racine sociale et la racine théologique du mot ne font qu’une.",
      },
      {
        type: "p",
        text: "Cette origine n’est pas un détail étymologique sans portée : elle inscrit la miséricorde divine dans le registre le plus intime de l’expérience humaine, celui de la protection maternelle, tout en l’élevant, comme toujours dans le langage des attributs, **hors de toute mesure créaturelle**. Dieu ne « ressent » pas la tendresse comme une émotion qui Le traverserait ; Il en est l’Auteur absolu, la source dont toute tendresse créée n’est qu’une trace infime.",
      },
      { type: "h2", text: "La forme grammaticale : deux intensités, deux orientations" },
      {
        type: "p",
        text: "Les grammairiens arabes distinguent, parmi les formes d’intensification, le schème *faʿlān* et le schème *faʿīl*. Le premier, appliqué à **Raḥmān**, exprime une qualité **qui saisit le sujet dans sa totalité, de façon inhérente et permanente** — comme *ghaḍbān* désigne celui qui est saisi tout entier par la colère. Le second, appliqué à **Raḥīm**, exprime une qualité **qui se manifeste par actes répétés, qui se donne à voir dans des effets successifs** — comme *ʿalīm* désigne celui dont le savoir s’exerce concrètement, encore et encore, sur chaque objet connu.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الرازي رحمه الله: **«الرحمن أبلغ من الرحيم، لأنَّ زيادة البناء تدلُّ على زيادة المعنى؛ فالرحمن هو المنعم بجلائل النعم، والرحيم هو المنعم بدقائقها»**.\n\nL’imām al-Rāzī a dit : **« Al-Raḥmān est plus intense qu’al-Raḥīm, car l’augmentation dans la construction morphologique indique une augmentation de sens ; al-Raḥmān est Celui qui accorde les grands bienfaits, et al-Raḥīm Celui qui accorde les bienfaits menus. »**",
        source: "al-Rāzī, Mafātīḥ al-Ghayb, commentaire de la Fātiḥa",
      },
      {
        type: "p",
        text: "Une autre formulation, plus répandue chez les exégètes postérieurs, articule la distinction non sur la grandeur des bienfaits mais sur leur **étendue** : al-Raḥmān embrasse toute créature, croyant et mécréant, homme et bête, dans les bienfaits de ce bas monde — souffle, subsistance, lumière du jour ; al-Raḥīm réserve une miséricorde propre, choisie, durable, aux croyants, notamment dans l’autre monde.",
      },
      {
        type: "verse",
        arabic: "**وَكَانَ بِٱلْمُؤْمِنِينَ رَحِيمًا**",
        translation: "**Et Il est, envers les croyants, Miséricordieux (Raḥīm).**",
        reference: "Coran, al-Aḥzāb, 33:43",
      },
      {
        type: "p",
        text: "Ce verset, comme plusieurs autres, associe explicitement **al-Raḥīm** aux croyants en particulier, jamais à l’ensemble indifférencié des créatures. On ne trouve nulle part dans le Coran une formule qui dirait « Il est al-Raḥmān envers les croyants » de manière restrictive : **al-Raḥmān reste toujours le nom de la miséricorde universelle**, tandis qu’al-Raḥīm se prête, textuellement, à la restriction.",
      },
      {
        type: "quote",
        text:
          "قال ابن عباس رضي الله عنهما: **«هما اسمان رقيقان، أحدهما أرقُّ من الآخر»**. وقال الخطابي رحمه الله: **«الرحمن هو ذو الرحمة الشاملة الجامعة لجميع الخلق، والرحيم ذو الرحمة الخاصة بالمؤمنين»**.\n\nIbn ʿAbbās, qu’Allāh les agrée lui et son père, a dit : **« Ce sont deux noms empreints de tendresse, l’un plus délicat que l’autre. »** Al-Khaṭṭābī a dit : **« Al-Raḥmān est le Détenteur de la miséricorde globale qui embrasse toute la création, et al-Raḥīm le Détenteur de la miséricorde particulière réservée aux croyants. »**",
        source: "Rapporté et commenté par al-Qurṭubī, al-Jāmiʿ li-aḥkām al-Qurʾān",
      },
      { type: "h2", text: "Une confirmation par l’usage coranique global" },
      {
        type: "p",
        text: "L’examen exhaustif des occurrences coraniques confirme cette distinction. **Al-Raḥmān** n’est jamais employé, dans le Coran, à propos d’un être autre que Dieu, et n’est jamais mis au pluriel ni décliné en adjectif ordinaire : c’est un nom propre théologique, réservé, incomparable — au point que les polythéistes de la Mecque, entendant ce nom, s’en étonnaient et le rejetaient comme une divinité inconnue d’eux. **Al-Raḥīm**, en revanche, peut se dire, à l’état d’adjectif ordinaire, d’un être humain : le Coran qualifie ainsi le Prophète ﷺ lui-même de *raʾūfun raḥīm*, « plein de sollicitude, miséricordieux », envers les croyants.",
      },
      {
        type: "verse",
        arabic: "**لَقَدْ جَآءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِٱلْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ**",
        translation:
          "**Un Messager issu de vous-mêmes vous est venu ; il lui est pénible que vous subissiez la moindre gêne ; il est plein de sollicitude pour vous ; envers les croyants, il est compatissant, miséricordieux (raʾūf, raḥīm).**",
        reference: "Coran, al-Tawba, 9:128",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un nom incommunicable, un adjectif partagé",
        text: "**Al-Raḥmān ne se dit jamais que de Dieu** ; al-Raḥīm, sous sa forme adjective ordinaire, peut qualifier une créature. Cette dissymétrie grammaticale, vérifiable dans tout le Coran, appuie exactement la distinction sémantique établie par les exégètes : universalité incomparable d’un côté, intensité communicable de l’autre.",
      },
      {
        type: "h2", text: "Ce que cette distinction change dans la vie spirituelle" },
      {
        type: "p",
        text: "Comprendre ces deux noms n’est pas un exercice de philologie détaché de la vie religieuse : c’est une clé pour résoudre une objection ancienne, celle qui s’étonne de voir la souffrance frapper des innocents dans un monde régi par un Dieu « miséricordieux ». La réponse mālikite-ashʿarite distingue précisément les deux registres : **la miséricorde d’al-Raḥmān** se déploie dans l’existence même donnée à toute créature, le souffle, la subsistance, les capacités de vivre — bienfaits accordés indistinctement aux justes et aux injustes ; **la miséricorde d’al-Raḥīm** se réserve pour l’au-delà, où elle rejoint enfin, sans mélange ni contretemps, ceux qui auront cru.",
      },
      {
        type: "balance",
        title: "Deux miséricordes, deux régimes",
        arabic: "الرحمن / الرحيم",
        affirmLabel: "Al-Raḥmān : miséricorde d’étendue",
        denyLabel: "Al-Raḥīm : miséricorde d’élection",
        affirm: [
          "S’étend à **toute créature** sans distinction de foi ou de mécréance.",
          "Se manifeste dans les **bienfaits de ce bas monde** : souffle, subsistance, ordre cosmique.",
          "Nom propre, incomparable, **jamais employé pour une créature**.",
        ],
        deny: [
          "Se **réserve aux croyants**, dans une continuité qui traverse ce monde et culmine dans l’autre.",
          "Se manifeste par des **actes répétés et choisis**, notamment le pardon et l’accueil au Paradis.",
          "Nom transposable en adjectif, **partagé, à son échelle, par une créature miséricordieuse**.",
        ],
        caption: "La souffrance d’ici-bas ne dément pas al-Raḥmān : elle appartient à un ordre où la miséricorde d’élection, al-Raḥīm, n’a pas encore dit son dernier mot.",
      },
      {
        type: "schema",
        title: "De la matrice à l’au-delà : le trajet de la miséricorde",
        variant: "branch",
        nodes: [
          { label: "Racine originelle", arabic: "الرَّحِم", note: "La matrice : protection du plus vulnérable." },
          { label: "Al-Raḥmān", arabic: "الرَّحْمَٰن", note: "Miséricorde universelle, inhérente, incomparable." },
          { label: "Al-Raḥīm", arabic: "الرَّحِيم", note: "Miséricorde d’élection, active, répétée envers les croyants." },
          { label: "Manifestation en ce monde", note: "Subsistance, souffle, guidance envoyée à tous." },
          { label: "Accomplissement dans l’au-delà", note: "Accueil, pardon, entrée au Paradis réservés aux croyants." },
        ],
        caption: "Un même flux, deux embranchements : l’un ouvert à tous ici-bas, l’autre réservé et parachevé dans l’au-delà.",
      },
      {
        type: "experiment",
        title: "Le soleil et la source",
        steps: [
          "Le soleil se lève chaque matin sur tous les jardins, cultivés ou en friche, entretenus ou négligés, sans qu’aucun jardinier n’ait besoin de le mériter.",
          "Une source, elle, est captée, canalisée, offerte à qui vient y puiser avec un récipient : elle demande un geste, une disposition à recevoir.",
          "Le soleil figure **al-Raḥmān** : un don massif, indifférencié, offert à toute vie sans condition préalable.",
          "La source figure **al-Raḥīm** : un don qui, bien que gratuit dans son origine, se donne à recueillir par ceux qui s’en approchent avec foi.",
        ],
        conclusion:
          "Ni le soleil ni la source ne s’opposent : **l’un rend la vie possible pour tous, l’autre l’élève et la comble pour ceux qui la cherchent**. C’est ainsi que se comprennent, ensemble, les deux miséricordes divines.",
      },
      { type: "h2", text: "Pourquoi la Fātiḥa les réunit" },
      {
        type: "p",
        text: "La sourate d’ouverture du Coran fait figurer les deux noms l’un après l’autre, à deux reprises rapprochées, dès la *basmala* et de nouveau au deuxième verset. Les exégètes y voient une leçon de méthode : **on commence toute chose par l’évocation de la miséricorde la plus vaste**, celle qui accueille indistinctement le pécheur et le juste dans l’acte même de commencer, avant d’en appeler, dans le même souffle, à **la miséricorde d’élection**, celle qui distingue et qui sauve — de sorte que le fidèle, à peine entré dans la prière, se trouve enveloppé des deux régimes de la tendresse divine.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Al-Raḥmān et al-Raḥīm ne sont pas un doublon rhétorique : ils composent, en deux mots choisis avec une exactitude grammaticale rigoureuse, **une théologie complète de la miséricorde divine**, à la fois universelle dans sa source et sélective dans son accomplissement. Le croyant qui les répète chaque jour, à chaque prière, ne prononce pas une formule vide : il rappelle à lui-même que **le monde tout entier baigne dans une tendresse qui ne se lasse jamais**, et que cette tendresse, pour qui croit, se change en un accueil définitif.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Al-Ḥakīm : la sagesse comme mise en ordre"),
    title: "Al-Ḥakīm : la sagesse comme mise en ordre",
    arabic: "الحكيم",
    intro:
      "Al-Ḥakīm revient plus de quatre-vingt-dix fois dans le Coran, presque toujours accolé à un autre nom — al-ʿAzīz al-Ḥakīm, al-ʿAlīm al-Ḥakīm — comme si la sagesse divine avait besoin, pour se faire entendre, d’être toujours reconduite à une autre perfection dont elle serait le fruit ou le compagnon nécessaire. Ce nom, qu’on traduit trop vite par « le Sage » au sens flottant que ce mot a pris en français, désigne dans la langue arabe une réalité beaucoup plus précise : la maîtrise qui **place chaque chose exactement là où elle doit être**, ni au hasard, ni par excès, ni par défaut.\n\nCe sujet propose de reconstituer, à partir de la racine ḥ-k-m, la portée exacte de ce nom : on y verra qu’il ne s’agit pas seulement d’une intelligence supérieure, mais d’une **cohérence gouvernante** qui relie la création, la législation et la rétribution en un seul ordre. On examinera aussi la question difficile qui accompagne toujours ce nom : Dieu agit-Il en vue de causes finales, comme le suggère parfois le mot « sagesse » appliqué à l’homme, ou faut-il concevoir la sagesse divine autrement, à l’abri de toute nécessité qui Lui serait extérieure ?\n\nOn suivra d’abord la racine et ses trois grandes branches sémantiques (juger, gouverner, empêcher le désordre) ; on distinguera ensuite la sagesse dans la création, dans la législation et dans la rétribution ; on affrontera la question du rapport entre sagesse divine et finalité ; enfin on montrera comment ce nom, correctement compris, transforme le regard porté sur ce qui, dans la vie, semble privé de sens.",
    body: [
      { type: "h2", text: "La racine ḥ-k-m : juger, gouverner, empêcher le désordre" },
      {
        type: "lexique",
        root: "ح ك م",
        transliteration: "ḥ-k-m",
        sense:
          "La racine, dans son emploi le plus concret, désigne le mors du cheval (*ḥakama*), la pièce de métal qui **retient la bête et l’empêche de s’égarer**. De là dérive tout le champ du jugement, du gouvernement et de la sagesse : gouverner, c’est empêcher le désordre, comme le mors empêche la monture de dévier.",
        derives: [
          { word: "ḥukm", arabic: "حُكْم", gloss: "Le jugement, la décision qui tranche et ordonne." },
          { word: "ḥikma", arabic: "حِكْمَة", gloss: "La sagesse : mettre chaque chose à sa juste place, avec la finalité la plus droite." },
          { word: "ḥākim", arabic: "حَاكِم", gloss: "Celui qui gouverne, qui tranche par jugement." },
          { word: "ḥakīm", arabic: "حَكِيم", gloss: "Le Sage : Celui dont l’acte et la parole sont, par nature, exempts de tout désordre." },
        ],
        note: "Le lien entre le mors du cheval et la sagesse n’est pas fortuit : **la sagesse est ce qui retient toute chose sur la voie où elle doit se tenir**, l’empêchant de verser dans l’excès ou le défaut.",
      },
      {
        type: "p",
        text: "Cette racine se déploie en arabe le long de trois axes solidaires : **al-ḥukm**, le jugement qui tranche entre le vrai et le faux, le licite et l’illicite ; **al-ḥikma**, la sagesse qui choisit la fin la plus droite et le moyen le plus juste pour y parvenir ; et **al-iḥkām**, la solidité de l’ouvrage bien fait, qui ne comporte ni faille ni excès. Al-Ḥakīm réunit ces trois axes en un seul nom : Celui qui juge avec justesse, qui agit avec la finalité la plus droite, et dont l’œuvre, dans sa texture même, est exempte de faille.",
      },
      { type: "h2", text: "Trois terrains où se déploie la sagesse divine" },
      { type: "h3", text: "La sagesse dans la création" },
      {
        type: "verse",
        arabic: "**صُنْعَ ٱللَّهِ ٱلَّذِىٓ أَتْقَنَ كُلَّ شَىْءٍ**",
        translation: "**Voilà l’œuvre d’Allāh, qui a rendu parfaite chaque chose.**",
        reference: "Coran, al-Naml, 27:88",
      },
      {
        type: "p",
        text: "Le mot *atqana* (rendre solide, parfait, sans faille) est le commentaire naturel du nom al-Ḥakīm appliqué à la création. Chaque organe d’un corps vivant, chaque équilibre d’un écosystème, chaque orbite planétaire manifeste **une adéquation exacte entre la structure et la fonction**, sans qu’un seul élément ne soit superflu ou manquant à ce qu’exige sa fin.",
      },
      { type: "h3", text: "La sagesse dans la législation" },
      {
        type: "verse",
        arabic: "**وَمَآ أَنزَلْنَا عَلَيْكَ ٱلْكِتَٰبَ إِلَّا لِتُبَيِّنَ لَهُمُ ٱلَّذِى ٱخْتَلَفُوا۟ فِيهِ**",
        translation:
          "**Et Nous ne t’avons révélé le Livre que pour que tu leur exposes clairement ce en quoi ils divergent.**",
        reference: "Coran, al-Naḥl, 16:64",
      },
      {
        type: "p",
        text: "Les juristes classiques ont consacré des volumes entiers à la recherche des **maqāṣid**, les finalités de la Loi révélée : préservation de la vie, de la raison, de la lignée, des biens, de la religion. Ce projet méthodologique tout entier repose sur la conviction qu’al-Ḥakīm ne légifère jamais arbitrairement : **chaque prescription vise une finalité identifiable**, même lorsque l’intelligence humaine peine à la saisir dans le détail.",
      },
      { type: "h3", text: "La sagesse dans la rétribution" },
      {
        type: "verse",
        arabic: "**وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ حَكِيمٌ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ**",
        translation:
          "**Craignez Allāh, et sachez qu’Allāh est Sage, Connaisseur de ce qui est dans les poitrines.**",
        reference: "Coran, al-Baqara, 2:235 (association fréquente)",
      },
      {
        type: "p",
        text: "L’association d’al-Ḥakīm à la connaissance des intentions cachées annonce le jugement dernier : **la rétribution ne sera ni excessive ni déficiente**, mais parfaitement ajustée à ce que chacun aura mérité, jusque dans les intentions les plus secrètes. La sagesse, ici, n’est pas seulement architecturale : elle est aussi la garantie d’une justice sans faille.",
      },
      { type: "h2", text: "La question difficile : Dieu agit-Il « pour » une fin ?" },
      {
        type: "p",
        text: "Dire que Dieu est sage suggère, dans notre langage humain, qu’Il agit **en vue d’**une fin — comme l’artisan sage travaille en vue de l’objet qu’il façonne. Or affirmer que Dieu aurait besoin d’une fin extérieure à Lui-même pour agir reviendrait à Lui prêter une carence, un manque comblé par l’acte : ce serait retomber dans l’anthropomorphisme le plus subtil, celui qui loge une finalité créaturelle au cœur de l’acte créateur.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الرازي رحمه الله: **«الحكيم هو العالم بحقائق الأشياء، الفاعل لها على وفق علمه ومشيئته، لا لجلب نفعٍ أو دفع ضررٍ عن نفسه، بل حكمته تعود إلى إتقان الفعل ووضعه في محلِّه»**.\n\nL’imām al-Rāzī a dit : **« Al-Ḥakīm est Celui qui connaît les réalités des choses, et qui les fait selon Sa science et Sa volonté, non pour s’attirer un profit ou repousser de Lui un dommage, mais Sa sagesse revient à la perfection de l’acte et à sa juste mise en place. »**",
        source: "al-Rāzī, Mafātīḥ al-Ghayb",
      },
      {
        type: "p",
        text: "La solution classique distingue donc la **finalité qui profiterait à l’agent** — exclue de Dieu, car Il est Autosuffisant, sans besoin — de la **finalité qui profite à autrui, ou qui réside dans la perfection de l’acte lui-même** — pleinement affirmée en Dieu. Al-Ḥakīm agit pour des sagesses réelles, mais ces sagesses reviennent aux créatures ou à la beauté intrinsèque de l’acte, jamais à un besoin qui compléterait Son Essence.",
      },
      {
        type: "balance",
        title: "Deux manières de comprendre la sagesse divine",
        affirmLabel: "Ce qui est affirmé",
        denyLabel: "Ce qui est écarté",
        affirm: [
          "Chaque acte, chaque décret, comporte une **sagesse réelle**, connue ou inconnue de nous.",
          "Cette sagesse **profite aux créatures** ou réside dans la perfection intrinsèque de l’acte.",
          "L’ignorance humaine d’une sagesse particulière **n’en prouve pas l’absence**.",
        ],
        deny: [
          "Que Dieu agirait **pour combler un manque** en Lui-même.",
          "Qu’une finalité extérieure **contraindrait** Sa volonté comme une cause l’exigerait d’un effet.",
          "Que l’absence de sagesse apparente à nos yeux **autorise à parler de désordre** en Sa création ou Sa Loi.",
        ],
        caption: "Affirmer la sagesse divine sans lui prêter le besoin qui accompagne la sagesse humaine : voilà tout l’enjeu du nom al-Ḥakīm.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas confondre sagesse et nécessité",
        text: "Certains courants ont voulu faire de la sagesse divine une **obligation** pesant sur Dieu, comme si Sa nature L’astreignait à toujours choisir le meilleur pour la créature, sous peine d’injustice. La position mālikite-ashʿarite refuse cette contrainte : Dieu **choisit librement** ce qui est sage, sans qu’aucune loi supérieure à Lui ne l’y oblige ; mais Son choix, précisément parce qu’Il est libre et parfait, ne comporte jamais de désordre.",
      },
      {
        type: "schema",
        title: "Les trois faces d’al-Ḥakīm",
        variant: "flow",
        nodes: [
          { label: "Al-Ḥukm : le jugement", arabic: "الحُكْم", note: "Trancher entre le vrai et le faux, le licite et l’illicite." },
          { label: "Al-Ḥikma : la finalité droite", arabic: "الحِكْمَة", note: "Choisir la fin la plus juste et le moyen le plus adéquat." },
          { label: "Al-Iḥkām : la solidité de l’œuvre", arabic: "الإِحْكَام", note: "Une exécution sans faille, sans excès ni manque." },
          { label: "Al-Ḥakīm : nom qui réunit les trois", note: "Le Sage, dont le jugement, la finalité et l’exécution sont sans défaut." },
        ],
        caption: "Un seul nom, trois racines de sens qui convergent en une seule perfection.",
      },
      {
        type: "experiment",
        title: "L’horloger et la pièce isolée",
        steps: [
          "On te montre une seule roue dentée, détachée du mécanisme d’une horloge, sans en connaître l’usage.",
          "Tu peux, en l’examinant seule, la juger inutile, mal taillée, ou disproportionnée.",
          "On te montre ensuite l’horloge entière, en marche : la roue occupe une place exacte, indispensable à l’ensemble.",
          "Ton jugement initial ne portait pas sur la pièce, mais sur ton ignorance du mécanisme complet.",
        ],
        conclusion:
          "Ce qui, dans le décret divin, paraît de prime abord absurde ou disproportionné, est souvent **une roue dentée jugée hors de son mécanisme**. Le nom al-Ḥakīm invite à suspendre le jugement plutôt qu’à conclure au désordre.",
      },
      { type: "h2", text: "L’avis des commentateurs sur l’association fréquente d’al-Ḥakīm" },
      {
        type: "quote",
        text:
          "قال ابن عاشور رحمه الله: **«اقتران اسم الحكيم بأسماء أخرى كالعزيز والعليم، يفيد أنَّ حكمته صادرة عن كمال قدرته وكمال علمه، فليست حكمته حكمة عاجزٍ يتحرَّى الأصلح لعجزه، بل حكمة قادرٍ عالمٍ يضع الأمور في مواضعها اختيارًا»**.\n\nIbn ʿĀshūr a dit : **« L’association du nom al-Ḥakīm à d’autres noms, comme al-ʿAzīz et al-ʿAlīm, indique que Sa sagesse procède de la perfection de Sa puissance et de la perfection de Sa science ; Sa sagesse n’est donc pas la sagesse d’un être impuissant qui rechercherait le meilleur faute de pouvoir davantage, mais la sagesse d’un Être puissant et savant qui place les choses à leur juste place par pur choix. »**",
        source: "Ibn ʿĀshūr, al-Taḥrīr wa-l-Tanwīr",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Al-Ḥakīm n’est pas un adjectif ornemental accolé au hasard aux autres noms divins : il est **le sceau qui garantit la cohérence de tout l’édifice** — création, législation, rétribution — sans jamais réduire Dieu à la nécessité d’une fin qui Lui manquerait. Comprendre ce nom, c’est apprendre à suspendre le jugement devant ce qui semble disproportionné, tout en affirmant, avec une certitude entière, que **rien, dans l’œuvre du Sage, n’est placé au hasard**.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Al-Ṣamad, ou l'autosuffisance : commentaire de sourate al-Ikhlāṣ"),
    title: "Al-Ṣamad, ou l'autosuffisance : commentaire de sourate al-Ikhlāṣ",
    arabic: "الصمد",
    intro:
      "Quatre versets, dix-sept mots en arabe, et pourtant le Prophète ﷺ a pu dire de cette sourate qu’elle « équivaut au tiers du Coran ». Sourate al-Ikhlāṣ concentre en quelques lignes toute la doctrine de l’unicité divine, et son deuxième verset porte un nom qui n’apparaît nulle part ailleurs dans le Coran sous cette forme appliquée à Dieu : **al-Ṣamad**. Ce mot, d’une densité rare, a donné lieu à l’une des plus longues discussions lexicographiques de toute l’exégèse coranique, tant sa traduction en une seule expression française semble impossible sans en trahir une part.\n\nCe sujet se propose de commenter la sourate al-Ikhlāṣ verset par verset, en s’arrêtant longuement sur al-Ṣamad, pour en dégager le sens précis : ni simplement « éternel », ni simplement « maître », mais l’**Autosuffisant absolu vers qui tout converge dans le besoin**, sans qu’Il ait Lui-même besoin de rien ni de personne. On verra comment ce seul nom, correctement compris, referme définitivement la porte à toute idée d’association ou de filiation divine — ce qui explique la place de la sourate dans le contexte de sa révélation.\n\nOn suivra d’abord l’occasion de la révélation, puis chacun des quatre versets, avec une insistance particulière sur al-Ṣamad et ses lectures lexicographiques concurrentes, avant de montrer la cohérence interne parfaite de la sourate, qui referme sur elle-même la question de l’unicité divine.",
    body: [
      { type: "h2", text: "L’occasion de la révélation" },
      {
        type: "quote",
        text:
          "عن أُبيّ بن كعب رضي الله عنه قال: **«إنَّ المشركين قالوا للنبيِّ ﷺ: انسب لنا ربَّك، فأنزل الله: قل هو الله أحد، الله الصمد، لم يلد ولم يولد، ولم يكن له كفوًا أحد»**.\n\nUbayy ibn Kaʿb, qu’Allāh l’agrée, a rapporté : **« Les polythéistes dirent au Prophète ﷺ : décris-nous la généalogie de ton Seigneur. Alors Allāh révéla : Dis : Il est Allāh, Unique. Allāh, al-Ṣamad. Il n’a pas engendré et n’a pas été engendré. Et nul n’est égal à Lui. »**",
        source: "Rapporté par al-Tirmidhī et repris par les exégètes",
      },
      {
        type: "p",
        text: "La question posée n’était pas anodine : dans l’Arabie préislamique, décrire une divinité, c’était d’abord la situer dans une généalogie — fille de tel dieu, épouse de tel autre. La sourate répond en **court-circuitant entièrement cette logique généalogique**, par un nom, al-Ṣamad, qui exclut par nature toute idée de filiation, d’engendrement, de dépendance à l’égard d’un autre être.",
      },
      { type: "h2", text: "Premier verset : l’Unicité proclamée" },
      {
        type: "verse",
        arabic: "**قُلْ هُوَ ٱللَّهُ أَحَدٌ**",
        translation: "**Dis : Il est Allāh, Unique.**",
        reference: "Coran, al-Ikhlāṣ, 112:1",
      },
      {
        type: "p",
        text: "Les grammairiens ont relevé une nuance entre **wāḥid** (un, par opposition à deux ou trois) et **aḥad** (unique dans un sens absolu, sans partage possible, sans second concevable). Le choix d’*aḥad* plutôt que de *wāḥid* n’est pas un hasard prosodique : **aḥad** exclut jusqu’à la possibilité conceptuelle d’un semblable, là où *wāḥid* pourrait n’exclure qu’un nombre.",
      },
      { type: "h2", text: "Deuxième verset : al-Ṣamad, le cœur du problème lexicographique" },
      {
        type: "verse",
        arabic: "**ٱللَّهُ ٱلصَّمَدُ**",
        translation: "**Allāh, l’Autosuffisant absolu, Celui vers qui tout converge dans le besoin.**",
        reference: "Coran, al-Ikhlāṣ, 112:2",
      },
      {
        type: "lexique",
        root: "ص م د",
        transliteration: "ṣ-m-d",
        sense:
          "La racine, en arabe préislamique, désigne le fait de **se diriger vers**, de **viser**, mais aussi ce qui est **massif, plein, sans creux ni cavité** — on l’employait pour une pierre dure et compacte, sans porosité, ou pour le chef d’une tribu vers qui tous se tournent pour trancher leurs affaires, faute de pouvoir s’en remettre à un autre.",
        derives: [
          { word: "ṣamada", arabic: "صَمَدَ", gloss: "Se diriger, converger vers quelqu’un pour satisfaire un besoin." },
          { word: "ṣamad (chose)", arabic: "صَمَد", gloss: "Ce qui est massif, plein, sans cavité intérieure : image de perfection sans faille." },
          { word: "sayyid maṣmūd ilayh", arabic: "سَيِّد مَصْمُود إِلَيْه", gloss: "Le chef vers qui l’on converge en toute affaire, faute d’autre recours." },
          { word: "al-Ṣamad", arabic: "الصَّمَد", gloss: "Nom divin : Celui vers qui converge tout besoin, et qui n’a Lui-même besoin de rien." },
        ],
        note:
          "Les deux sens — « massif, sans cavité » et « vers qui l’on converge » — **ne s’excluent pas mais se complètent** : c’est précisément parce qu’Il n’a en Lui aucun manque, aucune cavité de besoin, que toute créature converge légitimement vers Lui pour combler les siens.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الطبري رحمه الله: **«الصمد هو السيِّد الذي كمُل سؤدده، الذي يُصمد إليه في الحوائج، وقيل: هو الذي لا جوف له، وقيل: الذي لا يأكل ولا يشرب، والصحيح أنَّ جميع هذه المعاني متقاربة راجعة إلى كماله واستغنائه عن كلِّ شيء وحاجة كلِّ شيء إليه»**.\n\nL’imām al-Ṭabarī a dit : **« Al-Ṣamad est le Maître dont la maîtrise est parfaite, vers qui l’on converge dans les besoins ; on a dit aussi : Celui qui n’a pas d’intérieur creux ; on a dit encore : Celui qui ne mange ni ne boit ; et le correct est que tous ces sens se rapprochent et reviennent à Sa perfection, à Son indépendance totale à l’égard de toute chose, et au besoin que toute chose a de Lui. »**",
        source: "al-Ṭabarī, Tafsīr al-Ṭabarī, commentaire de 112:2",
      },
      {
        type: "p",
        text: "Al-Qurṭubī recense, dans son commentaire, jusqu’à une dizaine de sens rapportés par les Anciens pour ce seul mot — le Maître achevé en sa maîtrise, l’Éternel qui ne périt pas, Celui qui n’a pas de nombril ni de conduit corporel, Celui que rien ne précède — et conclut, comme al-Ṭabarī, que **ces sens ne se contredisent pas mais se rassemblent** autour de deux pôles : la perfection sans faille de l’Essence, et la convergence universelle des besoins créés vers Lui seul.",
      },
      {
        type: "balance",
        title: "Al-Ṣamad : deux mouvements en un seul mot",
        arabic: "الصمد",
        affirmLabel: "Ce que le mot affirme de Dieu",
        denyLabel: "Ce que le mot affirme des créatures",
        affirm: [
          "**Aucun besoin, aucune cavité, aucun manque** en Son Essence.",
          "Une **perfection achevée**, sans dépendance à l’égard de qui que ce soit.",
          "Une **maîtrise absolue** qui ne s’appuie sur aucun secours extérieur.",
        ],
        deny: [
          "Que les créatures puissent se **suffire à elles-mêmes** dans leurs besoins.",
          "Qu’il existe un **autre recours véritable** vers qui l’on pourrait se tourner en dernier ressort.",
          "Que la convergence des besoins vers Lui **diminue en rien Sa perfection**.",
        ],
        caption: "Al-Ṣamad tient ensemble l’autosuffisance de Dieu et la dépendance universelle de tout le reste : un seul mot, deux vérités indissociables.",
      },
      { type: "h2", text: "Troisième verset : la négation de toute filiation" },
      {
        type: "verse",
        arabic: "**لَمْ يَلِدْ وَلَمْ يُولَدْ**",
        translation: "**Il n’a pas engendré, et n’a pas été engendré.**",
        reference: "Coran, al-Ikhlāṣ, 112:3",
      },
      {
        type: "p",
        text: "Ce verset découle directement du précédent : **engendrer suppose un besoin de perpétuation** que seul un être limité, mortel, éprouve ; être engendré suppose une origine, donc une antériorité, donc une dépendance. Al-Ṣamad, par définition, exclut les deux : Celui qui n’a besoin de rien ne peut avoir besoin de se perpétuer par engendrement, et Celui vers qui tout converge ne peut Lui-même procéder d’un autre.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un verset qui vise des débats précis",
        text: "Ce verset répond directement aux affirmations trinitaires sur la filiation du Christ comme aux généalogies polythéistes qui prêtaient à Dieu des filles ou des associés. **Al-Ṣamad n’est pas une notion abstraite : c’est une arme théologique précise**, forgée pour clore ces débats à la racine.",
      },
      { type: "h2", text: "Quatrième verset : l’incomparabilité totale" },
      {
        type: "verse",
        arabic: "**وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ**",
        translation: "**Et nul n’est égal à Lui.**",
        reference: "Coran, al-Ikhlāṣ, 112:4",
      },
      {
        type: "p",
        text: "Le mot *kufuʾ* (l’égal, le pair) referme la sourate sur l’exclusion de toute comparaison. On notera la construction en boucle de la sourate entière : elle s’ouvre sur l’Unique (aḥad) et se referme sur l’exclusion de tout égal (kufuwan aḥad), **les deux occurrences du mot aḥad, au début et à la fin, enserrant les deux versets intermédiaires comme un sceau**.",
      },
      {
        type: "schema",
        title: "La structure en boucle de sourate al-Ikhlāṣ",
        variant: "branch",
        nodes: [
          { label: "V.1 — Aḥad", arabic: "هُوَ اللهُ أَحَدٌ", note: "L’Unicité posée en ouverture." },
          { label: "V.2 — Al-Ṣamad", arabic: "اللهُ الصَّمَدُ", note: "L’Autosuffisance qui fonde et explique l’Unicité." },
          { label: "V.3 — Négation de la filiation", arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", note: "Conséquence directe de l’Autosuffisance." },
          { label: "V.4 — Kufuwan aḥad", arabic: "كُفُوًا أَحَدٌ", note: "Retour au mot aḥad : la boucle se referme sur l’incomparabilité." },
        ],
        caption: "Quatre versets, une seule architecture : chaque affirmation découle nécessairement de la précédente.",
      },
      {
        type: "experiment",
        title: "Le puits sans fond et les puits creusés",
        steps: [
          "Imagine une multitude de puits creusés dans une terre aride, chacun destiné à recueillir l’eau que les habitants viennent y puiser.",
          "Chaque puits, à son tour, doit être alimenté par une source, faute de quoi il se tarit et devient lui-même un lieu où l’on vient puiser en vain.",
          "Poursuis la chaîne : un puits alimente un autre réservoir, qui dépend à son tour d’une nappe plus profonde.",
          "Cette chaîne ne peut se poursuivre à l’infini sans se dissoudre dans l’absurde ; il faut, à son origine, **une Source qui ne reçoit d’aucune autre et dont toutes les autres reçoivent**.",
        ],
        conclusion:
          "Al-Ṣamad est cette Source ultime : **le point où s’arrête, sans reste et sans vertige, la chaîne infinie des dépendances**.",
      },
      { type: "h2", text: "La valeur de la sourate selon la Sunna" },
      {
        type: "quote",
        text:
          "عن أبي سعيد الخدري رضي الله عنه أنَّ رسول الله ﷺ قال لأصحابه: **«أيعجز أحدكم أن يقرأ ثلث القرآن في ليلة؟» فقالوا: وكيف يقرأ ثلث القرآن؟ قال: «قل هو الله أحد تعدل ثلث القرآن»**.\n\nAbū Saʿīd al-Khudrī, qu’Allāh l’agrée, a rapporté que le Messager d’Allāh ﷺ dit à ses Compagnons : **« L’un de vous serait-il incapable de réciter le tiers du Coran en une nuit ? » Ils dirent : Et comment réciter le tiers du Coran ? Il dit : « Qul huwa Llāhu aḥad équivaut au tiers du Coran. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "Les commentateurs expliquent cette équivalence en observant que le Coran, dans sa substance, traite de trois grands objets : **l’unicité divine (tawḥīd), la législation (aḥkām), et les récits édifiants (qaṣaṣ)**. Sourate al-Ikhlāṣ, en quatre versets, épuise entièrement le premier de ces trois objets — d’où son équivalence, non en volume mais en **densité thématique**, au tiers du Livre entier.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Al-Ṣamad n’est pas un simple synonyme d’« éternel » ou de « maître » : c’est le nom qui **fonde logiquement toute la doctrine de l’unicité**, en articulant en un seul mot l’absence totale de besoin en Dieu et la convergence universelle vers Lui de tout ce qui, dans l’univers créé, manque de quelque chose. La sourate al-Ikhlāṣ, en quatre versets bâtis en boucle, tire de ce seul nom toutes les conséquences nécessaires — négation de la filiation, exclusion de tout égal — et mérite, à ce titre, d’être méditée non comme une formule brève à réciter vite, mais comme **une architecture théologique complète**, tenue tout entière dans la paume d’un seul mot.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Invoquer Dieu par Ses noms : ce qui est rapporté et ce qui est inventé"),
    title: "Invoquer Dieu par Ses noms : ce qui est rapporté et ce qui est inventé",
    arabic: "الدعاء بأسماء الله",
    intro:
      "« Invoquez-Le par eux », dit le Coran des noms divins, et cette instruction a nourri, à travers les siècles, une pratique spirituelle immense : invocations tissées de noms divins, litanies récitées après les prières, chapelets égrenés en marchant. Mais cette même richesse a aussi ouvert la porte à des dérives, certaines pratiques attribuant aux noms divins des vertus magiques précises — tel nom répété tant de fois procurerait la richesse, tel autre guérirait de telle maladie selon un compte numérique — sans le moindre fondement dans les textes authentiques.\n\nCe sujet se propose de tracer, avec les critères de la science du ḥadīth et les principes de la théologie sunnite, la ligne qui sépare l’invocation légitime par les noms divins de ses contrefaçons. On y verra que le Prophète ﷺ nous a laissé des invocations d’une richesse considérable, construites autour des noms divins, et que c’est précisément cette richesse authentique qui rend inutile, et souvent dangereux, le recours à des pratiques inventées.\n\nOn examinera d’abord le fondement coranique de la pratique et sa portée exacte ; puis on présentera des invocations prophétiques authentiques bâties sur les noms divins, avec leur contexte ; on s’arrêtera ensuite sur les critères qui permettent de juger une pratique invocatoire, avant d’examiner des cas concrets de dérives répandues — la numérologie des noms, les vertus curatives inventées, les talismans — pour finir sur le sens spirituel profond de tawassul par les noms.",
    body: [
      { type: "h2", text: "Le fondement coranique" },
      {
        type: "verse",
        arabic: "**وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا وَذَرُوا۟ ٱلَّذِينَ يُلْحِدُونَ فِىٓ أَسْمَٰٓئِهِۦ ۚ سَيُجْزَوْنَ مَا كَانُوا۟ يَعْمَلُونَ**",
        translation:
          "**C’est à Allāh qu’appartiennent les noms les plus beaux : invoquez-Le donc par eux, et laissez ceux qui dévient au sujet de Ses noms — ils seront rétribués pour ce qu’ils faisaient.**",
        reference: "Coran, al-Aʿrāf, 7:180",
      },
      {
        type: "p",
        text: "Le verset associe étroitement deux commandements : **invoquer par les noms**, et **se garder de la déviation** (ilḥād) à leur sujet. Cette proximité n’est pas fortuite : elle avertit que la pratique invocatoire, si féconde soit-elle, comporte un risque de dérapage vers des usages que le mot lui-même ne cautionne pas.",
      },
      {
        type: "lexique",
        root: "ل ح د",
        transliteration: "l-ḥ-d",
        sense:
          "Dévier, s’écarter de la ligne droite ; d’où **laḥd**, la niche latérale de la tombe, creusée en biais et non à la verticale. Appliquée aux noms divins, la racine désigne le fait de **détourner un nom de son sens juste**, que ce soit en le niant, en le déformant, ou en l’exploitant à des fins étrangères à sa fonction.",
        derives: [
          { word: "ilḥād", arabic: "إِلْحَاد", gloss: "La déviation au sujet des noms divins : nier, dénaturer, ou instrumentaliser." },
          { word: "laḥd", arabic: "لَحْد", gloss: "La niche en biais de la tombe ; image concrète de l’écart par rapport à la ligne droite." },
          { word: "mulḥid", arabic: "مُلْحِد", gloss: "Celui qui dévie, qui s’écarte de la juste compréhension." },
        ],
        note:
          "Les exégètes classent sous *ilḥād* trois catégories : **nier un nom** attesté, **forger un nom** non attesté, et **détourner un nom attesté** vers un usage magique ou superstitieux qu’il n’a jamais eu.",
      },
      { type: "h2", text: "Des invocations prophétiques authentiques bâties sur les noms" },
      {
        type: "p",
        text: "Le corpus prophétique contient des invocations d’une grande richesse, tissées explicitement de noms divins. L’une des plus célèbres, transmise par Ibn Masʿūd, énumère les sources possibles d’un nom, révélant au passage la conscience prophétique de l’existence de noms non révélés :",
      },
      {
        type: "quote",
        text:
          "عن عبد الله بن مسعود رضي الله عنه أنَّ النبيَّ ﷺ كان يقول: **«اللهمَّ إني عبدك... أسألك بكلِّ اسمٍ هو لك، سمَّيتَ به نفسك، أو أنزلتَه في كتابك، أو علَّمتَه أحدًا من خلقك، أو استأثرتَ به في علم الغيب عندك»**.\n\nIbn Masʿūd, qu’Allāh l’agrée, a rapporté que le Prophète ﷺ disait : **« Ô Allāh, je suis Ton serviteur... je Te demande par tout nom qui est le Tien, que Tu T’es nommé Toi-même, ou que Tu as fait descendre dans Ton Livre, ou que Tu as enseigné à l’une de Tes créatures, ou que Tu as gardé pour Toi dans la science du mystère. »**",
        source: "Rapporté par Aḥmad, authentifié par al-Albānī",
      },
      {
        type: "p",
        text: "Une autre invocation, rapportée dans les recueils authentiques, associe un attribut de miséricorde à une demande précise : « Ô Vivant, ô Soutien [de toute chose], c’est par Ta miséricorde que j’implore le secours » (*Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth*). On y observe un principe constant de la pratique prophétique : **le nom invoqué est toujours en rapport de sens avec la demande formulée** — on invoque al-Ḥayy et al-Qayyūm, la Vie et le Soutien permanent, pour une demande de secours vital.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La correspondance entre le nom et la demande",
        text: "Les invocations prophétiques manifestent une cohérence sémantique constante : on demande le pardon en invoquant **al-Ghafūr**, la subsistance en invoquant **al-Razzāq**, la guidance en invoquant **al-Hādī**. **Cette adéquation n’est pas accessoire : elle est la marque même d’une invocation qui a compris ce qu’elle fait.**",
      },
      { type: "h2", text: "Les critères pour juger une pratique invocatoire" },
      {
        type: "balance",
        title: "Ce qui distingue le tawassul légitime de ses contrefaçons",
        affirmLabel: "Pratique légitime",
        denyLabel: "Pratique déviante",
        affirm: [
          "Invoquer un **nom attesté**, dans son sens juste, en rapport avec la demande formulée.",
          "S’en remettre à Dieu **sans prétendre à un effet mécanique garanti** par la seule répétition.",
          "Fonder la pratique sur un **texte transmis et authentifié** par la science du ḥadīth.",
        ],
        deny: [
          "Répéter un nom un **nombre précis de fois calculé par valeur numérique des lettres** (ḥisāb al-jummal) pour obtenir un effet magique automatique.",
          "Prétendre qu’un nom, gravé sur une amulette, **agit par lui-même** indépendamment de la volonté divine.",
          "Forger des invocations **sans attestation**, en prêtant au Prophète ﷺ des formules qu’il n’a jamais dites.",
        ],
        caption: "Le critère n’est jamais l’efficacité ressentie, mais la conformité au texte et à son sens.",
      },
      {
        type: "h2", text: "Un cas concret : la numérologie des noms" },
      {
        type: "p",
        text: "Une pratique répandue dans certains milieux populaires consiste à assigner à chaque lettre arabe une valeur numérique (*ḥisāb al-jummal*), puis à calculer la « valeur » d’un nom divin pour en déduire un nombre de répétitions censé produire un effet déterminé — la guérison, la richesse, l’amour d’autrui. **Aucun texte prophétique authentique ne cautionne cette méthode** ; elle relève d’un héritage ésotérique tardif, mêlé d’influences étrangères à la Révélation, que les savants du ḥadīth n’ont jamais validé comme pratique religieuse.",
      },
      {
        type: "quote",
        text:
          "قال الإمام الشاطبي رحمه الله: **«كل عبادة لم يُنقل عن النبيِّ ﷺ تخصيصها بعددٍ أو هيئةٍ أو وقتٍ معيَّن، فتخصيصها بذلك من غير دليلٍ بدعةٌ، وإن كان أصل الذكر مشروعًا»**.\n\nL’imām al-Shāṭibī a dit : **« Tout acte d’adoration dont il n’est pas rapporté du Prophète ﷺ qu’il l’ait spécifié par un nombre, une forme ou un moment précis : le spécifier ainsi sans preuve est une innovation, même si le fondement de l’invocation, lui, est légiféré. »**",
        source: "al-Shāṭibī, al-Iʿtiṣām",
      },
      {
        type: "p",
        text: "Ce principe, d’une grande portée méthodologique, distingue nettement **le fond** (invoquer Dieu par Ses noms, pratique fondée et recommandée) de **la forme spécifique** ajoutée sans preuve (tel nombre de répétitions, tel jour, telle configuration). C’est cette distinction qui permet de garder l’enthousiasme pour la pratique authentique sans tomber dans l’invention.",
      },
      {
        type: "h2", text: "Un autre cas : les vertus curatives et les talismans" },
      {
        type: "p",
        text: "Il existe une pratique authentique de guérison par la récitation coranique, la *ruqya*, solidement attestée dans la Sunna — le Prophète ﷺ lui-même récitait sur les malades certaines sourates protectrices. Mais cette pratique attestée a été, dans certains cercles, prolongée par des ajouts qui n’ont plus rien à voir avec elle : inscription de noms divins sur des talismans portés en pendentif, censés protéger par leur seule présence physique, indépendamment de toute demande sincère adressée à Dieu.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le glissement du moyen licite vers l’objet superstitieux",
        text: "La différence entre la ruqya authentique et le talisman superstitieux tient en un point : dans la première, **c’est Dieu qui guérit**, par un texte qu’on Lui adresse en implorant Son secours ; dans le second, **c’est l’objet lui-même qui semble agir**, comme s’il détenait un pouvoir propre. Ce glissement, même minime en apparence, engage la pureté du monothéisme.",
      },
      {
        type: "experiment",
        title: "La clé et la formule magique",
        steps: [
          "Une clé, correctement taillée, ouvre une serrure parce qu’elle correspond au mécanisme intérieur voulu par le fabricant.",
          "Personne ne prétend que la clé « possède un pouvoir » indépendant : elle ne fait qu’actionner un mécanisme conçu à cet effet.",
          "Une formule magique, en revanche, prétend produire un effet par sa seule prononciation, sans référence à une volonté qui l’accueillerait librement.",
          "L’invocation authentique ressemble à la clé : elle est le moyen prescrit pour s’adresser à une Volonté qui répond librement, non un mécanisme autonome.",
        ],
        conclusion:
          "Invoquer Dieu par Ses noms, **c’est actionner un moyen que Lui-même a institué**, non déclencher un mécanisme qui se passerait de Sa décision libre.",
      },
      {
        type: "schema",
        title: "Du texte révélé à la pratique : trois filtres nécessaires",
        variant: "flow",
        nodes: [
          { label: "Le nom est-il attesté ?", note: "Vérifier l’authenticité du nom lui-même dans le Coran ou la Sunna." },
          { label: "La formule est-elle transmise ?", note: "Vérifier que l’invocation précise est rapportée par une chaîne fiable." },
          { label: "Le sens correspond-il à la demande ?", note: "S’assurer de la cohérence entre le nom invoqué et l’objet de la demande." },
          { label: "Une garantie mécanique est-elle prétendue ?", note: "Écarter toute pratique qui promettrait un effet automatique indépendant de la volonté divine." },
          { label: "Pratique validée", note: "Seule issue si les quatre filtres sont franchis avec succès." },
        ],
        caption: "Quatre questions simples suffisent à démasquer la plupart des pratiques invocatoires inventées.",
      },
      { type: "h2", text: "Le sens spirituel profond du tawassul par les noms" },
      {
        type: "p",
        text: "Au-delà des critères techniques, invoquer Dieu par Ses noms est un acte d’une profondeur particulière : c’est **choisir, parmi les perfections divines, celle qui correspond le plus exactement à sa propre pauvreté du moment**. Celui qui pèche invoque al-Ghafūr ; celui qui craint invoque al-Ḥafīẓ, le Protecteur ; celui qui doute invoque al-Hādī, le Guide. Chaque situation existentielle trouve, dans le trésor des noms divins, une porte taillée à sa mesure.",
      },
      {
        type: "quote",
        text:
          "قال ابن القيم رحمه الله: **«من عرف أسماء الله وصفاته، أحسن دعاءه، فسأل بكلِّ اسمٍ ما يناسبه؛ فسأل بالرحمن الرحيم رحمته، وبالغفور مغفرته، وبالرزَّاق رزقه، وهذا من أعظم أبواب الإجابة»**.\n\nIbn al-Qayyim a dit : **« Quiconque connaît les noms et les attributs d’Allāh améliore son invocation, car il demande par chaque nom ce qui lui correspond : il demande, par al-Raḥmān al-Raḥīm, Sa miséricorde ; par al-Ghafūr, Son pardon ; par al-Razzāq, sa subsistance ; et c’est là l’une des plus grandes portes de l’exaucement. »**",
        source: "Ibn al-Qayyim, al-Fawāʾid",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La Révélation nous a légué, dans les invocations prophétiques authentiques, un trésor bien plus riche que tout ce que l’ingéniosité populaire a pu ajouter par la suite : nombres calculés, talismans, formules non transmises. **Invoquer Dieu par Ses noms est un art de la justesse** — justesse du nom choisi, justesse de la demande formulée, justesse enfin de l’attente, qui s’en remet à une Volonté libre et non à un mécanisme automatique. C’est cette justesse, et non l’accumulation de pratiques inventées, qui ouvre réellement la porte de l’exaucement.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },
];
