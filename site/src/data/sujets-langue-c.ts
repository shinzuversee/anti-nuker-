import { slugifySujet, type Sujet } from "./sujet-core";

/** Groupe C : langue, parole et attributs divins. */
export const sujetsLangueC: Sujet[] = [
  {
    slug: slugifySujet("De la parole rare"),
    title: "De la parole rare",
    intro:
      "Les textes ne cessent de louer le silence et de mettre en garde contre le flot des mots. Ce n'est pas un éloge du mutisme, mais un rappel : la langue est la partie du corps la plus difficile à maîtriser, et **chaque mot compte au Jour du Jugement**. Comprendre pourquoi la parole rare est une vertu, ce n'est pas seulement lire un adab de savoir-vivre, c'est toucher à la racine de la piété du cœur.",
    body: [
      { type: "h2", text: "Un organe sans os" },
      {
        type: "p",
        text: "La langue, disent les Arabes, n'a pas d'os : elle tourne dans toutes les directions sans résistance. C'est précisément ce qui en fait un danger disproportionné à sa taille. Un homme peut craindre sa main, qui frappe rarement sans réflexion ; il oublie sa langue, qui parle avant que la pensée n'ait fini de se former. **Le Prophète ﷺ n'a cessé de désigner cet organe comme le premier front du combat intérieur.**",
      },
      {
        type: "quote",
        text: "قال النبي ﷺ: **من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت.**\n\nLe Prophète ﷺ a dit : **« Quiconque croit en Allāh et au Jour dernier, qu'il dise du bien ou qu'il se taise. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "Le hadith ne propose que deux issues, et non trois : dire du bien, ou se taire. Il n'y a pas de troisième case pour « parler pour parler ». Cette alternative binaire est en elle-même une leçon de méthode : avant d'ouvrir la bouche, on pèse, et si la pesée ne penche pas clairement vers le bien, le silence l'emporte par défaut.",
      },
      { type: "h2", text: "Ce que disent les anges scribes" },
      {
        type: "verse",
        arabic: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ",
        translation: "**Il ne prononce pas une parole sans avoir auprès de lui un observateur prêt à l'inscrire.**",
        reference: "Coran, Qāf, 50:18",
      },
      {
        type: "p",
        text: "Le verset ne distingue pas entre parole grave et parole légère : toute émission de son est consignée. Les commentateurs anciens, dont al-Ṭabarī, notent que ce verset a été révélé dans un contexte de mise en garde contre l'insouciance du langage quotidien, celui qu'on croit anodin parce qu'il ne concerne ni mensonge ni médisance flagrante.",
      },
      {
        type: "schema",
        title: "Le trajet d'une parole",
        variant: "flow",
        nodes: [
          { label: "Pensée", note: "Une intention se forme, encore instable." },
          { label: "Filtre", arabic: "التثبت", note: "L'étape que la parole rare préserve : vérifier avant de dire." },
          { label: "Énoncé", note: "Le mot sort, il ne revient plus." },
          { label: "Inscription", arabic: "الكتابة", note: "Consigné par les anges scribes, sans exception." },
        ],
        caption: "Supprimer le filtre, c'est laisser la pensée se transformer directement en trace éternelle.",
      },
      { type: "h2", text: "Le silence des savants" },
      {
        type: "p",
        text: "Les biographies des salaf regorgent d'anecdotes sur leur retenue verbale. On rapporte que certains d'entre eux passaient des jours entiers sans dire un mot de trop, non par mépris des gens, mais par peur de ce qu'un mot mal pesé pourrait engendrer : une médisance, une exagération, une promesse qu'on ne tiendra pas. **Le silence, chez eux, n'était pas absence de savoir, mais surabondance de vigilance.**",
      },
      {
        type: "quote",
        text: "قال لقمان لابنه: **يا بني، إن كان الكلام من فضة فإن السكوت من ذهب.**\n\nLuqmān dit à son fils : **« Ô mon fils, si la parole est d'argent, le silence est d'or. »**",
        source: "Sagesse rapportée dans les recueils d'adab",
      },
      {
        type: "p",
        text: "Cette formule est devenue proverbiale bien au-delà du monde musulman, mais son origine s'inscrit dans une pédagogie précise : Luqmān ne dit pas que la parole est mauvaise, il dit qu'elle vaut moins que le silence lorsqu'elle n'est pas nécessaire. L'argent a sa valeur ; l'or la dépasse. La hiérarchie n'annule pas le premier terme, elle en relativise l'usage.",
      },
      {
        type: "degres",
        title: "Les niveaux de la parole",
        arabic: "مراتب الكلام",
        degres: [
          { label: "Nuisible", note: "Mensonge, médisance, calomnie : à bannir absolument." },
          { label: "Inutile", note: "Ni bien ni mal, mais du temps et une attention dilapidés." },
          { label: "Permise sans plus", note: "Nécessaire à la vie sociale, sans mérite particulier." },
          { label: "Recommandée", note: "Rappel, enseignement, réconciliation entre les gens." },
          { label: "Obligatoire", note: "Témoignage requis, réponse à une injustice constatée." },
        ],
        direction: "asc",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un test simple",
        text: "Avant de parler, demande-toi : est-ce nécessaire, est-ce vrai, est-ce utile ? Si la réponse est incertaine sur l'un des trois, le silence est la position la plus sûre — et il n'engage, lui, aucune responsabilité nouvelle.",
      },
      { type: "h2", text: "Une objection fréquente" },
      {
        type: "objection",
        objection: "Mais l'islam n'encourage-t-il pas la prédication, l'enseignement, le rappel — donc la parole abondante ?",
        reponse:
          "Certainement, et c'est bien pour cela que le principe n'est pas « se taire toujours » mais « peser toujours ». La parole rare dont parlent les textes n'est pas un vœu de mutisme monastique : elle est une discipline qui distingue le mot nécessaire du mot superflu. Un savant qui enseigne dix heures par jour peut être d'une parole rare au sens religieux, s'il ne prononce rien qui ne serve la vérité ou le bien d'autrui. **C'est la gratuité du mot, non sa quantité, qui est visée.**",
      },
      {
        type: "p",
        text: "Il faut ici se garder d'un contresens répandu : croire que la piété se mesure au volume de paroles religieuses prononcées. Un discours peut être entièrement composé de vocabulaire pieux et rester bavardage, s'il ne vise qu'à occuper l'espace, à briller, ou à répéter sans réflexion ce que d'autres ont dit avant. **La rareté véritable est celle du cœur avant celle de la bouche.**",
      },
      {
        type: "experiment",
        title: "L'expérience du silence d'une journée",
        steps: [
          "Choisis une journée et note chaque parole que tu prononces sans nécessité claire.",
          "Compte les remarques, les commentaires, les répétitions inutiles.",
          "Observe combien de ces mots, une fois dits, ont dû être corrigés ou regrettés.",
          "Compare avec les moments où le silence a suffi à éviter tout cela.",
        ],
        conclusion:
          "La plupart des regrets verbaux ne naissent pas de mots méchants, mais de mots superflus qui ont dérapé faute d'avoir été retenus à temps.",
      },
      { type: "h2", text: "Le lien avec la crainte d'Allāh" },
      {
        type: "p",
        text: "Ibn al-Qayyim rattache la maîtrise de la langue à la maîtrise du cœur : selon lui, l'organe qui parle trop est presque toujours l'organe d'un cœur agité, avide de se montrer, de trancher, de corriger autrui sans nécessité. À l'inverse, un cœur apaisé par le rappel d'Allāh trouve dans le silence un repos naturel, non un effort contraint. **La parole rare est ainsi un fruit, non une simple technique de discours.**",
      },
      {
        type: "p",
        text: "Cette dimension intérieure explique pourquoi les mêmes mots — un conseil, une remarque, une plaisanterie — peuvent être un bien chez l'un et un mal chez l'autre. Ce n'est pas la forme extérieure qui décide seule, mais l'intention et la retenue qui l'accompagnent. D'où l'insistance des textes sur l'examen du cœur avant l'examen de la phrase.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La parole rare n'est ni la timidité ni le refus d'enseigner : c'est la discipline de ne dire que ce qui mérite d'être dit, et de le dire quand il le faut. Elle protège des trois grands périls du langage — le mensonge, l'inutile et l'excès — sans jamais empêcher le bien nécessaire d'être proclamé. Peser ses mots avant de les prononcer reste, selon les textes, l'un des chemins les plus sûrs vers la droiture du cœur.",
      },
    ],
  },
  {
    slug: slugifySujet("Le mensonge, l'ambiguïté et la réserve permise"),
    title: "Le mensonge, l'ambiguïté et la réserve permise",
    arabic: "المعاريض",
    intro:
      "Le mensonge est interdit sans discussion possible dans les textes. Pourtant, une catégorie voisine, les **maʿārīḍ**, permet de dire une vérité formulée de sorte qu'elle induise en erreur celui qui l'entend, sans que le locuteur ait menti au sens strict. Cette frontière subtile n'est pas une échappatoire inventée par les juristes : elle repose sur des textes précis et répond à une nécessité réelle de la vie sociale.",
    body: [
      { type: "h2", text: "L'interdiction du mensonge" },
      {
        type: "verse",
        arabic: "**إِنَّمَا يَفْتَرِى ٱلْكَذِبَ ٱلَّذِينَ لَا يُؤْمِنُونَ بِـَٔايَٰتِ ٱللَّهِ**",
        translation: "**Seuls forgent le mensonge ceux qui ne croient pas aux signes d'Allāh.**",
        reference: "Coran, al-Naḥl, 16:105",
      },
      {
        type: "p",
        text: "Le verset associe le mensonge à un défaut de foi, et non simplement à un défaut de morale civique. C'est une gravité d'un autre ordre : mentir n'est pas seulement nuire à autrui, c'est trahir une disposition intérieure incompatible avec la certitude en Allāh. Cette gravité explique pourquoi les juristes n'ont ouvert que des portes très étroites à toute exception.",
      },
      {
        type: "quote",
        text: "قال النبي ﷺ: **إن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة... وإن الكذب يهدي إلى الفجور وإن الفجور يهدي إلى النار.**\n\nLe Prophète ﷺ a dit : **« La véracité mène à la piété et la piété mène au Paradis… et le mensonge mène au vice et le vice mène au Feu. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      { type: "h2", text: "Ce que sont les maʿārīḍ" },
      {
        type: "lexique",
        root: "ع ر ض",
        transliteration: "ʿ-r-ḍ",
        sense: "Ce qui se présente de biais, ce qui est offert par le côté",
        derives: [
          { word: "maʿārīḍ", arabic: "معاريض", gloss: "formulations équivoques, vraies en elles-mêmes mais comprises autrement par l'auditeur" },
          { word: "taʿrīḍ", arabic: "تعريض", gloss: "allusion, suggestion indirecte sans énoncé explicite" },
          { word: "ʿarḍ", arabic: "عرض", gloss: "le côté, la largeur — par opposition à la ligne directe" },
        ],
        note: "La racine porte l'idée de biais, de détour — exactement ce que réalise cette figure de langage.",
      },
      {
        type: "p",
        text: "Le principe des maʿārīḍ est simple : dire une phrase qui, prise dans son sens réel, est parfaitement vraie, mais que l'auditeur comprendra dans un autre sens, plus favorable au locuteur. Ce n'est pas un mensonge, puisque rien de faux n'a été prononcé ; c'est une **exploitation licite de l'ambiguïté du langage**, réservée à des cas précis.",
      },
      {
        type: "quote",
        text: "قال ابن عباس رضي الله عنهما: **إن في المعاريض لمندوحة عن الكذب.**\n\nIbn ʿAbbās, qu'Allāh les agrée, a dit : **« Il y a dans les maʿārīḍ de quoi se dispenser largement du mensonge. »**",
        source: "Rapporté par al-Bukhārī (chapitre de l'adab)",
      },
      { type: "h2", text: "Les précédents prophétiques" },
      {
        type: "p",
        text: "Les récits rapportent qu'Ibrāhīm ﷺ, questionné par un tyran sur l'identité de Sarah, répondit qu'elle était sa sœur — vraie parole, puisqu'ils étaient frères en la foi, tout en laissant entendre autre chose à celui qui l'interrogeait avec de mauvaises intentions. De même, lorsqu'on l'interrogea sur qui avait brisé les idoles, il répondit que c'était la plus grande d'entre elles — réponse vraie dans sa forme, puisqu'il désignait celle qui, selon la logique même des idolâtres, aurait dû pouvoir parler.",
      },
      {
        type: "schema",
        title: "Trois issues face à une question gênante",
        variant: "branch",
        nodes: [
          { label: "Mensonge", note: "Interdit en toute circonstance, quelle que soit la pression." },
          { label: "Maʿārīḍ", arabic: "معاريض", note: "Vérité formulée de biais, comprise autrement par l'auditeur : permis dans des limites strictes." },
          { label: "Vérité nue", note: "Toujours l'option la plus sûre, quand elle ne cause pas de tort injustifié." },
        ],
        caption: "Le maʿārīḍ n'est pas un compromis entre les deux premières voies : c'est une catégorie propre, à condition qu'aucun droit d'autrui ne soit lésé.",
      },
      { type: "h2", text: "Les limites de la licéité" },
      {
        type: "balance",
        title: "Ce qui rend le maʿārīḍ licite ou non",
        affirmLabel: "Cas où il est permis",
        denyLabel: "Cas où il devient illicite",
        affirm: [
          "Éviter un tort injuste (oppression, persécution, question indiscrète).",
          "Préserver la réconciliation entre deux personnes.",
          "Épargner une susceptibilité sans priver autrui d'un droit.",
        ],
        deny: [
          "Priver quelqu'un d'un droit légitime (dette, témoignage, contrat).",
          "Tromper dans une transaction commerciale.",
          "Se soustraire à une obligation religieuse envers autrui.",
        ],
        caption: "Le critère n'est pas la forme de la phrase mais l'effet produit sur les droits d'autrui.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Une porte étroite, pas une échappatoire générale",
        text: "Les juristes insistent : le maʿārīḍ se pratique **en cas de besoin réel**, non comme habitude de discours. En faire un usage systématique dans les échanges quotidiens revient à instiller la méfiance et détruit la confiance que la parole doit inspirer entre croyants.",
      },
      { type: "h2", text: "Une objection à examiner" },
      {
        type: "objection",
        objection: "N'est-ce pas au fond une manière élégante de mentir sans le nom ?",
        reponse:
          "La différence n'est pas cosmétique. Dans le mensonge, l'énoncé lui-même est faux : sa correspondance avec la réalité est rompue. Dans le maʿārīḍ, l'énoncé reste vrai dans son sens propre ; seule l'interprétation spontanée de l'auditeur diverge. Cette différence a une conséquence concrète : celui qui use du maʿārīḍ reste comptable de la vérité de ses mots devant Allāh, alors que le menteur a rompu ce lien-là même. **La forme n'est pas un détail : elle porte la responsabilité.**",
      },
      {
        type: "p",
        text: "Il reste que cette permission doit être maniée avec une extrême prudence. Un croyant sincère cherchera d'abord la vérité directe, et ne recourra au détour du maʿārīḍ que lorsque celle-ci causerait un tort disproportionné — à lui-même ou à autrui — sans justification religieuse. **La facilité de la ruse verbale ne doit jamais devenir un réflexe de lâcheté déguisée en finesse.**",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les maʿārīḍ tracent une ligne fine mais réelle entre l'interdiction absolue du mensonge et la nécessité, parfois légitime, de ne pas tout dire directement. Cette ligne n'est pas une invention de convenance : elle est attestée par la pratique des prophètes et la parole des Compagnons. Mais sa légitimité tient tout entière à sa rareté d'usage et à l'absence de tort causé à autrui — faute de quoi elle redevient, sous un autre nom, la ruse que l'islam a précisément voulu bannir.",
      },
    ],
  },
  {
    slug: slugifySujet("Traduire : ce qui se perd nécessairement"),
    title: "Traduire : ce qui se perd nécessairement",
    intro:
      "Chaque lecteur non-arabophone du Coran s'appuie, qu'il le veuille ou non, sur une traduction. Or aucune traduction, même la plus soignée, ne restitue l'intégralité de ce que le texte arabe porte. Ce n'est pas une critique adressée aux traducteurs : c'est une conséquence logique du passage d'une langue à une autre, que les savants ont identifiée depuis des siècles et qu'il est essentiel de comprendre pour lire une traduction sans se méprendre sur sa nature.",
    body: [
      { type: "h2", text: "Le Coran est arabe, par déclaration explicite" },
      {
        type: "verse",
        arabic: "إِنَّآ أَنزَلْنَٰهُ **قُرْءَٰنًا عَرَبِيًّا** لَّعَلَّكُمْ تَعْقِلُونَ",
        translation: "**Nous l'avons fait descendre en Coran arabe**, afin que vous raisonniez.",
        reference: "Coran, Yūsuf, 12:2",
      },
      {
        type: "p",
        text: "Ce n'est pas une précision accessoire : le texte lui-même se désigne comme arabe, et lie cette caractéristique à la possibilité même de la raison humaine d'en tirer profit pleinement. Les savants en ont déduit que l'arabité du Coran n'est pas un simple vecteur interchangeable, comme l'emballage d'un contenu qui resterait identique une fois transvasé ailleurs.",
      },
      { type: "h2", text: "Ce qu'une traduction transporte, et ce qu'elle laisse" },
      {
        type: "comparaison",
        title: "Sens et forme dans le passage d'une langue à l'autre",
        columns: ["Élément", "Transmis par la traduction", "Perdu ou affaibli"],
        rows: [
          { criterion: "Sens référentiel", cells: ["Oui, en grande partie", "Nuances de racine, connotations"] },
          { criterion: "Rythme et sonorité", cells: ["Non", "Assonances, rimes internes (fawāṣil)"] },
          { criterion: "Polysémie voulue", cells: ["Partiellement, au choix du traducteur", "Les autres sens simultanément possibles"] },
          { criterion: "Registres grammaticaux", cells: ["Rarement", "Emphase par changement de temps, d'accord, de construction"] },
          { criterion: "Charge d'une racine", cells: ["Le mot isolé", "Le réseau de mots apparentés dans tout le Coran"] },
        ],
      },
      {
        type: "p",
        text: "Prenons un exemple concret : la racine du mot traduit habituellement par « miséricorde », r-ḥ-m, est la même que celle du mot désignant la matrice, raḥim. Un lecteur arabophone entend, sous chaque occurrence de raḥma, l'écho de cette parenté physique et affective — l'attachement d'une mère à l'enfant qu'elle porte. Une traduction, quelle qu'elle soit, ne peut faire résonner cet écho à chaque passage sans devenir une explication plutôt qu'une traduction.",
      },
      {
        type: "lexique",
        root: "ر ح م",
        transliteration: "r-ḥ-m",
        sense: "L'attache viscérale, la tendresse qui protège",
        derives: [
          { word: "raḥma", arabic: "رحمة", gloss: "miséricorde, l'attribut divin le plus fréquemment invoqué" },
          { word: "raḥim", arabic: "رحم", gloss: "la matrice, le lien de parenté utérine" },
          { word: "al-Raḥmān", arabic: "الرحمن", gloss: "Nom divin intensif, sans équivalent grammatical exact en français" },
        ],
        note: "Une traduction isole un fruit de cette racine ; elle ne peut en restituer l'arbre entier à chaque occurrence.",
      },
      { type: "h2", text: "Le témoignage des grands traducteurs eux-mêmes" },
      {
        type: "quote",
        text: "قال بعض العلماء: **من ترجم القرآن فقد فسّره برأيه، وليس القرآن هو ذلك التفسير.**\n\nCertains savants ont dit : **« Quiconque traduit le Coran l'a déjà interprété selon sa compréhension ; et le Coran n'est pas cette interprétation. »**",
        source: "Principe rappelé dans les traités de sciences du Coran (ʿulūm al-Qurʾān)",
      },
      {
        type: "p",
        text: "Ce principe a des conséquences juridiques concrètes : les savants ont établi que la traduction du Coran ne peut légitimement servir dans la prière rituelle à la place du texte arabe, précisément parce qu'elle n'est plus, techniquement, « le Coran », mais un commentaire de son sens. Ce n'est pas un détail formaliste : c'est la reconnaissance explicite que **traduire, c'est déjà choisir, réduire, trancher entre plusieurs possibles**.",
      },
      {
        type: "schema",
        title: "Du texte source au lecteur traduit",
        variant: "flow",
        nodes: [
          { label: "Texte arabe", note: "Sons, rythme, racines, polysémie, contexte de révélation." },
          { label: "Compréhension du traducteur", arabic: "فهم", note: "Un choix parmi les sens possibles, influencé par son propre bagage." },
          { label: "Formulation cible", note: "Contrainte par la grammaire et le lexique de la langue d'arrivée." },
          { label: "Lecture du public", note: "Reçoit un sens, sans accès direct à ce qui a été laissé de côté." },
        ],
        caption: "Chaque flèche est un filtre supplémentaire ; aucune n'est neutre, même chez le traducteur le plus honnête.",
      },
      { type: "h2", text: "Une objection légitime" },
      {
        type: "objection",
        objection: "Faut-il alors renoncer aux traductions et réserver le Coran aux seuls arabophones ?",
        reponse:
          "Nullement : la traduction reste un outil indispensable, et la priver aux non-arabophones serait les priver de tout accès au message. Ce qui est demandé n'est pas l'abandon de la traduction, mais la conscience de son statut : une traduction est **une compréhension humaine du sens**, non le miracle linguistique lui-même. C'est pourquoi les meilleures éditions se présentent comme « traduction du sens des versets », et non comme « le Coran en français » — précision qui n'est pas de la coquetterie académique mais une exactitude théologique.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une règle de prudence pour le lecteur",
        text: "Quand une traduction paraît étrange, répétitive ou peu claire, la première hypothèse à envisager n'est pas l'incohérence du texte, mais la limite de la traduction. Consulter un commentaire (tafsīr) permet souvent de retrouver la richesse que le passage d'une langue à l'autre avait provisoirement effacée.",
      },
      { type: "h2", text: "L'exception qui confirme la règle" },
      {
        type: "p",
        text: "Il existe cependant un domaine où la perte est moindre : celui de la législation et des récits narratifs, où le sens référentiel domine largement sur l'effet stylistique. Un verset de jurisprudence sur l'héritage ou le jeûne se traduit avec une fidélité relativement élevée, car sa portée dépend surtout du contenu logique de l'énoncé. C'est en revanche dans les passages de mise en garde, de promesse, de description de l'au-delà ou d'évocation des Noms divins que la perte se fait le plus sentir, car ces passages reposent lourdement sur la charge affective et sonore de la langue.",
      },
      {
        type: "p",
        text: "Cette observation invite à une hiérarchie de vigilance : plus un passage est chargé sur le plan spirituel et esthétique, plus le lecteur devrait se méfier de croire qu'une seule traduction en épuise le sens. La multiplication des traductions consultées, loin d'être un signe de doute, est au contraire une manière de se rapprocher, par recoupement, de la richesse du texte source.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Traduire le Coran, c'est rendre un service nécessaire tout en acceptant une perte inévitable. Reconnaître cette perte n'affaiblit pas la foi dans le texte : elle protège au contraire de deux excès symétriques, croire qu'une traduction dit tout, ou renoncer à s'en servir faute de maîtriser l'arabe. Entre les deux, la voie médiane consiste à lire la traduction avec gratitude et avec la modestie de savoir qu'elle reste, par nature, **une fenêtre et non la demeure elle-même**.",
      },
    ],
  },
  {
    slug: slugifySujet("Débattre sans chercher à vaincre"),
    title: "Débattre sans chercher à vaincre",
    arabic: "الجدال",
    intro:
      "Le débat argumenté, al-jadal, occupe une place ambivalente dans les textes : loué quand il vise la clarification de la vérité, blâmé quand il ne vise que la victoire sur l'adversaire. Cette distinction, loin d'être un raffinement moral secondaire, conditionne la légitimité même de toute discussion religieuse — et son absence explique une grande partie des dérives polémiques observées aujourd'hui.",
    body: [
      { type: "h2", text: "Le mot et sa charge ambivalente" },
      {
        type: "lexique",
        root: "ج د ل",
        transliteration: "j-d-l",
        sense: "Tordre fermement une corde, entrelacer avec force",
        derives: [
          { word: "jadal", arabic: "جدل", gloss: "débat argumenté, souvent connoté d'obstination" },
          { word: "jidāl", arabic: "جدال", gloss: "controverse, échange contradictoire" },
          { word: "mujādala", arabic: "مجادلة", gloss: "action réciproque de débattre, employée en un sens positif dans le Coran" },
        ],
        note: "L'image de la corde tordue dit assez la tension : le débat peut serrer la vérité ou l'étrangler.",
      },
      {
        type: "verse",
        arabic: "**وَجَٰدِلْهُم بِٱلَّتِى هِىَ أَحْسَنُ**",
        translation: "**Et discute avec eux de la manière la plus belle.**",
        reference: "Coran, al-Naḥl, 16:125",
      },
      {
        type: "p",
        text: "Ce verset, adressé au Prophète ﷺ lui-même dans le cadre de l'appel à la religion, montre que le débat argumenté n'est pas condamné en soi : il est même prescrit, à condition d'être conduit « de la manière la plus belle ». Le Coran distingue donc, dès ce verset, le débat comme méthode légitime du débat comme comportement condamnable.",
      },
      { type: "h2", text: "L'autre visage du jadal" },
      {
        type: "quote",
        text: "قال النبي ﷺ: **ما ضلّ قوم بعد هدى كانوا عليه إلا أوتوا الجدل.**\n\nLe Prophète ﷺ a dit : **« Aucun peuple ne s'égare après avoir été guidé, si ce n'est qu'on lui a donné le débat stérile. »**",
        source: "Rapporté par al-Tirmidhī",
      },
      {
        type: "p",
        text: "Le hadith attribue explicitement au débat une capacité de dévoiement, non par la nature de l'échange verbal lui-même, mais par ce que l'obstination polémique produit chez celui qui s'y adonne : elle détourne progressivement de la recherche sincère de la vérité vers la seule satisfaction de ne pas perdre la face.",
      },
      { type: "h2", text: "Deux intentions, deux issues" },
      {
        type: "spectre",
        title: "De la recherche de la vérité à la volonté de vaincre",
        left: "Chercher la vérité",
        right: "Chercher la victoire",
        markers: [
          { label: "Écoute réelle de l'argument adverse", position: 10, note: "Prêt à changer d'avis si l'argument est solide." },
          { label: "Reformulation honnête de la position opposée", position: 30 },
          { label: "Concentration sur les points forts, minimisation des points faibles propres", position: 60 },
          { label: "Recherche de la faille rhétorique plutôt que du fond", position: 80 },
          { label: "Humiliation de l'interlocuteur comme but avoué", position: 100, note: "Le débat n'a plus aucun rapport avec la vérité recherchée." },
        ],
        caption: "Le même échange verbal peut se situer n'importe où sur ce spectre ; l'intention en décide la valeur.",
      },
      {
        type: "cycle",
        title: "La spirale du jadal condamné",
        arabic: "الجدل المذموم",
        center: "L'ego du débatteur",
        steps: [
          { label: "Argument reçu comme attaque", note: "Toute objection est vécue comme une menace personnelle." },
          { label: "Réponse défensive plutôt que réfléchie", note: "On cherche à parer, pas à comprendre." },
          { label: "Escalade rhétorique", note: "Ton qui monte, arguments d'autorité, procès d'intention." },
          { label: "Fermeture définitive", note: "Plus aucune vérité ne peut plus être entendue, d'où qu'elle vienne." },
        ],
        caption: "Le cycle se referme sur lui-même : chaque tour rend le suivant plus probable.",
      },
      { type: "h2", text: "Ce que les salaf en disaient" },
      {
        type: "p",
        text: "Ibn Taymiyya, qui a lui-même beaucoup débattu contre les théologiens de son temps, a laissé des mises en garde répétées sur les pièges du jadal. Il rappelle que le but d'une discussion religieuse doit toujours être de faire triompher la vérité, jamais de faire triompher sa propre personne — et que celui qui confond les deux finit, tôt ou tard, par défendre une position fausse simplement parce qu'il l'a défendue publiquement et ne veut plus se dédire.",
      },
      {
        type: "p",
        text: "Cette observation rejoint un principe que les uṣūlistes rappellent souvent : l'attachement à une opinion peut devenir, avec le temps, plus fort que l'attachement à la preuve elle-même. Le débatteur sincère se surveille constamment sur ce point, car le cœur humain a une tendance naturelle à confondre défense de la vérité et défense de soi.",
      },
      {
        type: "degres",
        title: "Les conditions d'un débat sain",
        degres: [
          { label: "L'intention", note: "Chercher la vérité, non la victoire — condition première et continuellement à renouveler." },
          { label: "La connaissance du sujet", note: "Ne pas débattre de ce qu'on ne maîtrise pas suffisamment." },
          { label: "L'équité envers l'adversaire", note: "Reformuler fidèlement sa position avant de la réfuter." },
          { label: "La retenue du ton", note: "Éviter l'insulte, l'ironie blessante, le mépris affiché." },
          { label: "L'acceptation de se taire", note: "Savoir arrêter quand la discussion ne mène plus qu'à l'entêtement." },
        ],
        direction: "asc",
      },
      { type: "h2", text: "Une objection à considérer" },
      {
        type: "objection",
        objection: "Mais si l'on doit toujours rester si mesuré, comment défendre fermement une vérité contre une erreur manifeste ?",
        reponse:
          "La fermeté sur le fond n'est en rien contredite par la retenue dans la forme. On peut affirmer une vérité sans concession et, en même temps, refuser l'humiliation de l'interlocuteur, l'exagération polémique ou la généralisation abusive. **La fermeté vise l'idée, la douceur vise la personne** : ce sont deux exigences distinctes qui se renforcent, elles ne s'opposent pas. Le Prophète ﷺ a été d'une fermeté absolue sur les fondements de la foi tout en restant, envers ses interlocuteurs les plus hostiles, d'une patience proverbiale.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le signe qui ne trompe pas",
        text: "Observe ta propre réaction quand ton interlocuteur marque un point juste : la joie de voir la vérité progresser, ou la contrariété de perdre du terrain ? Cette réaction, plus que n'importe quel argument échangé, révèle la nature réelle du débat que tu mènes.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le jadal n'est ni condamné ni glorifié dans l'absolu : il est jugé selon son intention et sa manière. Débattre pour clarifier une vérité, avec équité envers l'adversaire, est un acte recommandé et parfois nécessaire. Débattre pour vaincre, humilier ou sauver son orgueil, même avec les meilleurs arguments du monde, revient à trahir l'objet même que l'on prétend défendre. Le critère décisif n'est donc pas la qualité de l'argumentation, mais **la sincérité du cœur qui la porte**.",
      },
    ],
  },
];
