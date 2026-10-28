import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Groupe — L'interprétation du Coran selon la méthode des salaf.
 */
export const sujetsInterpretationA2: Sujet[] = [
  {
    slug: slugifySujet("Interpréter le Coran par le Coran"),
    title: "Interpréter le Coran par le Coran",
    arabic: "تفسير القرآن بالقرآن",
    intro:
      "Le Coran est le livre le plus explicité qui soit, car il s'explicite souvent lui-même. Ibn Taymiyya a posé cette vérité comme le premier des degrés du tafsīr : ce que le Livre énonce en un lieu de façon brève, il le développe ailleurs de façon détaillée. Chercher d'abord cette clarté interne, avant de recourir à toute source extérieure, est la méthode la plus sûre et la plus fidèle à l'intention du Législateur.\n\nCe sujet expose ce premier degré, ses fondements, ses exemples les plus célèbres chez les commentateurs salafis, et la discipline mentale qu'il exige du lecteur.",
    body: [
      { type: "h2", text: "Le premier des degrés du tafsīr" },
      {
        type: "p",
        text: "Dans sa **Muqaddima fī uṣūl al-tafsīr**, Ibn Taymiyya établit une hiérarchie des sources de l'exégèse : si l'on t'interroge sur le tafsīr, la première chose à considérer est **le Coran par le Coran**, car ce qui est énoncé succinctement en un endroit se trouve développé ailleurs. Ce n'est pas une méthode parmi d'autres : c'est la porte d'entrée obligée, car nul n'explique mieux la parole d'Allāh que Sa propre parole.",
      },
      {
        type: "quote",
        text:
          "فإن سألت عن التفسير فأصح الطرق في ذلك: **أن يفسر القرآن بالقرآن**، فما أجمل في مكان فإنه قد فسر في موضع آخر، وما اختصر في مكان فقد بسط في موضع آخر.\n\nSi tu interroges sur le tafsīr, la voie la plus authentique en la matière est **que le Coran soit interprété par le Coran** : ce qui est énoncé de façon globale en un lieu se trouve interprété ailleurs, et ce qui est résumé en un lieu se trouve développé ailleurs.",
        source: "Ibn Taymiyya, Muqaddima fī uṣūl al-tafsīr",
      },
      { type: "h2", text: "Pourquoi le Coran est le meilleur commentaire de lui-même" },
      {
        type: "p",
        text: "Le Coran n'est pas un texte composé de fragments indépendants : il forme **un tout cohérent**, révélé par une seule Source, sur une durée de plus de vingt années, et portant sur les mêmes thèmes fondamentaux — le tawḥīd, la Révélation, le Jugement, le récit des prophètes, la législation. Il est donc naturel qu'un même sujet revienne sous des angles complémentaires : bref ici, détaillé là ; général ici, restreint là ; absolu ici, conditionné là. Le lecteur qui néglige cette circulation interne risque de bâtir un sens **isolé, appauvri, parfois erroné**, alors qu'un verset frère attendait justement de le corriger.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une unité d'auteur, une unité de sens",
        text: "Parce que le Coran procède d'un seul Locuteur, ses différentes formulations d'un même thème **ne se contredisent jamais** : elles se complètent. Chercher la pièce manquante ailleurs dans le Livre, avant de sortir du Livre, est donc un acte de foi autant qu'une méthode.",
      },
      { type: "h2", text: "Exemple : le sens de « al-ṣirāṭ al-mustaqīm »" },
      {
        type: "verse",
        arabic: "**ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ**",
        translation: "**Guide-nous sur le droit chemin.**",
        reference: "Coran, al-Fātiḥa, 1:6",
      },
      {
        type: "p",
        text: "Que désigne ce « droit chemin » que le croyant répète dix-sept fois par jour au moins ? Le Coran lui-même répond, quelques versets plus loin dans une autre sourate : c'est le chemin de ceux qu'Allāh a comblés de Son bienfait, non celui de ceux qui ont encouru la colère ni des égarés. Mais il répond encore ailleurs, de façon plus explicite.",
      },
      {
        type: "verse",
        arabic:
          "وَمَن يُطِعِ ٱللَّهَ وَٱلرَّسُولَ فَأُو۟لَٰٓئِكَ مَعَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم مِّنَ ٱلنَّبِيِّـۧنَ وَٱلصِّدِّيقِينَ وَٱلشُّهَدَآءِ وَٱلصَّٰلِحِينَ ۚ **وَحَسُنَ أُو۟لَٰٓئِكَ رَفِيقًا**",
        translation:
          "Quiconque obéit à Allāh et au Messager sera avec ceux qu'Allāh a comblés de Son bienfait : les prophètes, les véridiques, les témoins et les vertueux. **Quels excellents compagnons que ceux-là !**",
        reference: "Coran, al-Nisāʾ, 4:69",
      },
      {
        type: "p",
        text: "Ainsi, « ceux qu'Allāh a comblés de Son bienfait » de la Fātiḥa se trouvent nommés ailleurs : prophètes, véridiques, témoins, vertueux. **Le chemin droit est donc le chemin de l'obéissance à Allāh et au Messager**, celui qu'ont emprunté ces quatre catégories. Un verset explique l'autre sans qu'il soit besoin d'aucune source extérieure.",
      },
      {
        type: "schema",
        title: "Comment circule le sens dans le Livre",
        variant: "flow",
        nodes: [
          { label: "Terme bref", arabic: "مجمل", note: "« al-ṣirāṭ al-mustaqīm » énoncé sans détail en 1:6." },
          { label: "Terme développé", arabic: "مفصّل", note: "« ceux qu'Allāh a comblés » précisé en 4:69." },
          { label: "Sens obtenu", note: "Le chemin droit est celui de l'obéissance à Allāh et au Messager." },
        ],
        caption: "Le mujmal (succinct) d'un endroit trouve son mufaṣṣal (détaillé) ailleurs dans le même Livre.",
      },
      { type: "h2", text: "Exemple : la restriction d'un terme absolu" },
      {
        type: "p",
        text: "Un second procédé consiste à restreindre (**taqyīd**) ce qui paraît absolu (**iṭlāq**) dans un verset, grâce à une précision apportée dans un autre. Ainsi, la sourate al-Anʿām mentionne l'interdiction de consommer « le sang », en termes absolus. Mais la sourate al-Baqara et d'autres textes précisent qu'il s'agit du **sang répandu** (masfūḥ), non du sang résiduel qui demeure dans la chair après l'égorgement.",
      },
      {
        type: "verse",
        arabic:
          "قُل لَّآ أَجِدُ فِى مَآ أُوحِىَ إِلَىَّ مُحَرَّمًا عَلَىٰ طَاعِمٍ يَطْعَمُهُۥٓ إِلَّآ أَن يَكُونَ مَيْتَةً أَوْ **دَمًا مَّسْفُوحًا**",
        translation:
          "Dis : « Je ne trouve, dans ce qui m'a été révélé, rien d'interdit à celui qui voudrait le manger, sauf si c'est une bête morte, ou **du sang répandu**... »",
        reference: "Coran, al-Anʿām, 6:145",
      },
      {
        type: "p",
        text: "La précision « répandu » (masfūḥ) restreint l'interdiction absolue du sang mentionnée ailleurs sans cette qualification. Le tafsīr par le Coran opère ici comme un **correctif de précision**, évitant au lecteur de généraliser une interdiction au-delà de ce qu'elle vise réellement.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Général et particulier, absolu et restreint",
        text: "Les commentateurs salafis distinguent avec soin le **ʿāmm** (général) du **khāṣṣ** (particulier), et le **muṭlaq** (absolu) du **muqayyad** (restreint). Le Coran contient de nombreux couples de ce type, où un verset généralise et un autre précise sans jamais se contredire, car la précision n'annule pas l'affirmation : elle la complète.",
      },
      { type: "h2", text: "Ibn Kathīr, héritier de cette méthode" },
      {
        type: "p",
        text: "Ibn Kathīr, dans l'introduction de son tafsīr, reprend explicitement les degrés fixés par Ibn Taymiyya, son maître en la matière. Il commence systématiquement chaque explication de verset en cherchant si un autre passage du Coran vient l'éclairer, avant de se tourner vers la Sunna. Cette discipline méthodique fait de son commentaire une référence incontournable pour quiconque veut observer ce premier degré en action, verset après verset.",
      },
      {
        type: "quote",
        text:
          "فأصح طرق التفسير في ذلك: أن **يفسر القرآن بالقرآن**، فما أُجمل في مكان فإنه قد فُسّر في موضع آخر.\n\nLa voie la plus authentique du tafsīr est donc **que le Coran soit interprété par le Coran** : ce qui est résumé en un lieu se trouve interprété en un autre.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿAẓīm, Muqaddima",
      },
      { type: "h2", text: "Al-Shinqīṭī et Aḍwāʾ al-bayān" },
      {
        type: "p",
        text: "L'exemple le plus systématique de cette méthode à l'époque contemporaine est l'ouvrage monumental d'al-Shinqīṭī, **Aḍwāʾ al-bayān fī īḍāḥ al-Qurʾān bi-l-Qurʾān** — « Les lumières de l'exposé, dans l'éclaircissement du Coran par le Coran ». Le titre même de l'ouvrage proclame le programme : rassembler, verset après verset, tous les passages parallèles du Livre, pour laisser le Coran parler de lui-même avant toute autre considération.",
      },
      {
        type: "list",
        items: [
          "Rassembler les versets traitant du même thème avant de conclure sur son sens.",
          "Distinguer le mujmal (bref) et le mufaṣṣal (détaillé) sur une même question.",
          "Repérer les couples muṭlaq / muqayyad et ʿāmm / khāṣṣ.",
          "Ne recourir à la Sunna, puis aux dires des Compagnons, qu'après avoir épuisé cette première recherche.",
        ],
      },
      { type: "h2", text: "Le récit des prophètes : un cas privilégié" },
      {
        type: "p",
        text: "Le récit de Mūsā et de Firʿawn, celui de Yūsuf, celui d'Ibrāhīm, sont répétés en plusieurs sourates, chacune insistant sur un aspect différent selon le contexte de la révélation. Lire l'un de ces récits sans les autres, c'est se priver de détails essentiels que le Coran a **volontairement répartis**, pour des raisons pédagogiques et rhétoriques propres à chaque sourate. Le lecteur attentif reconstitue le tableau complet en croisant les occurrences.",
      },
      {
        type: "comparaison",
        title: "Un même récit, deux focalisations",
        columns: ["Sourate", "Ce qui est mis en avant"],
        rows: [
          { criterion: "al-Aʿrāf", cells: ["Le rappel de l'histoire de Mūsā dans une perspective d'avertissement aux peuples précédents."] },
          { criterion: "Ṭāhā", cells: ["Le détail de l'appel initial de Mūsā et du buisson, avec insistance sur la miséricorde et le réconfort du prophète."] },
          { criterion: "al-Shuʿarāʾ", cells: ["L'affrontement rhétorique avec Firʿawn et les magiciens, dans une perspective de victoire de la vérité."] },
        ],
        caption: "Trois éclairages complémentaires d'un même événement, qu'aucune sourate isolée n'épuise à elle seule.",
      },
      { type: "h2", text: "Une exigence de patience et d'humilité" },
      {
        type: "p",
        text: "Ce premier degré demande du lecteur une **familiarité étendue** avec le texte entier, car on ne peut rapprocher que ce que l'on connaît. Il exige aussi une discipline : ne pas se hâter de conclure sur un verset isolé avant d'avoir cherché s'il existe, ailleurs dans le Livre, un passage qui le développe, le restreint ou le précise. **Se précipiter sur le sens apparent d'un seul verset, sans consulter ses parallèles, est une source fréquente d'erreur d'interprétation.**",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'erreur de l'isolement",
        text: "Nombre de déviations doctrinales dans l'histoire de l'exégèse proviennent d'un verset extrait de son ensemble, lu sans ses parallèles coraniques. La règle des salaf est claire : **on ne juge pas un verset seul quand le Livre entier permet d'en préciser le sens**.",
      },
      { type: "h2", text: "Un exemple supplémentaire : la vision d'Allāh" },
      {
        type: "verse",
        arabic: "**وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ إِلَىٰ رَبِّهَا نَاظِرَةٌ**",
        translation: "**Ce jour-là, des visages seront resplendissants, regardant leur Seigneur.**",
        reference: "Coran, al-Qiyāma, 75:22-23",
      },
      {
        type: "p",
        text: "Ce verset, comparé à d'autres passages qui insistent sur la transcendance d'Allāh (« Rien ne Lui ressemble »), montre comment le Coran par le Coran permet d'affirmer un attribut réel — la vision d'Allāh par les croyants au Paradis — sans jamais tomber dans une représentation charnelle, puisque la règle générale de la transcendance, énoncée ailleurs, encadre cette affirmation particulière.",
      },
      { type: "h2", text: "Ibn al-Qayyim sur la cohérence du Livre" },
      {
        type: "quote",
        text:
          "القرآن يصدّق بعضه بعضًا، ويشهد بعضه لبعض، **ولا يتناقض ولا يختلف**، فمن تدبّره حقّ التدبّر وجد كل آية منه شاهدة لأختها، موضحة لمعناها.\n\nLe Coran s'atteste mutuellement, une partie témoignant pour l'autre, **sans contradiction ni divergence** ; quiconque le médite comme il se doit trouve chaque verset témoignant pour son semblable et clarifiant son sens.",
        source: "Ibn al-Qayyim, Miftāḥ dār al-saʿāda (sens rapporté)",
      },
      { type: "h2", text: "Une méthode, non une suffisance totale" },
      {
        type: "p",
        text: "Il serait erroné de croire que ce premier degré épuise à lui seul tout le tafsīr. Ibn Taymiyya précise bien qu'il s'agit du **premier** des degrés, non de l'unique : viennent ensuite la Sunna, qui explique et détaille le Coran, puis les dires des Compagnons qui ont assisté à la révélation et en connaissaient les circonstances, puis ceux des Tābiʿīn qui les ont reçus des Compagnons. Mais nul de ces degrés suivants ne dispense de chercher d'abord la lumière interne du Livre.",
      },
      {
        type: "degres",
        title: "Les degrés du tafsīr selon Ibn Taymiyya",
        degres: [
          { label: "Le Coran par le Coran", note: "Le degré premier et le plus sûr." },
          { label: "Le Coran par la Sunna", note: "Le Prophète ﷺ explicite ce que le Coran a révélé." },
          { label: "Les dires des Compagnons", note: "Témoins directs de la révélation et de ses circonstances." },
          { label: "Les dires des Tābiʿīn", note: "Héritiers de la science des Compagnons, dans la continuité." },
        ],
        direction: "desc",
        caption: "Un ordre de préférence méthodologique, non une exclusion des degrés suivants.",
      },
      { type: "h2", text: "Ibn ʿUthaymīn sur la pratique de cette méthode" },
      {
        type: "p",
        text: "Dans **Uṣūl fī al-tafsīr**, Ibn ʿUthaymīn reprend cette hiérarchie et insiste sur un point pratique : l'étudiant du tafsīr doit s'exercer à rassembler lui-même les versets parallèles avant de consulter les commentaires, afin de former en lui la sensibilité coranique qui permet de reconnaître, presque instinctivement, où se trouve la précision attendue.",
      },
      {
        type: "quote",
        text:
          "**أعلى أنواع التفسير**: تفسير القرآن بالقرآن، فما أُجمل في مكان فُسِّر في مكان آخر، وما اختُصر في مكان بُسِط في مكان آخر.\n\n**La plus haute des catégories du tafsīr** est le tafsīr du Coran par le Coran : ce qui est résumé en un lieu est interprété en un autre, ce qui est abrégé en un lieu est développé en un autre.",
        source: "Ibn ʿUthaymīn, Uṣūl fī al-tafsīr",
      },
      { type: "h2", text: "Un exercice pour le lecteur" },
      {
        type: "experiment",
        title: "Rassembler avant de conclure",
        steps: [
          "Choisir un terme coranique qui semble ambigu ou général, par exemple « al-fitna » ou « al-ẓulm ».",
          "Rechercher, à l'aide d'un index thématique ou d'une concordance, tous les emplois de ce terme dans le Coran.",
          "Classer les occurrences selon qu'elles précisent, restreignent ou développent le sens.",
          "Ne conclure sur le sens du terme dans le verset étudié qu'après ce rassemblement.",
        ],
        conclusion: "Cette discipline, répétée, forme le goût coranique nécessaire à tout exégète sérieux.",
      },
      { type: "h2", text: "Al-Saʿdī et la simplicité féconde" },
      {
        type: "p",
        text: "Al-Saʿdī, dans son tafsīr **Taysīr al-Karīm al-Raḥmān**, pratique cette méthode avec une grande sobriété : chaque fois qu'un verset appelle un éclaircissement, il renvoie brièvement au passage parallèle, sans excès de développement, illustrant qu'**une bonne exégèse ne s'alourdit pas de digressions quand le Coran a déjà répondu lui-même**.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La sobriété comme signe de maîtrise",
        text: "Un commentateur qui maîtrise bien les parallèles coraniques n'a pas besoin de long détour : il indique la référence et laisse le texte parler. **La longueur d'un commentaire n'est pas un signe de sa valeur.**",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Interpréter le Coran par le Coran, c'est reconnaître que le Livre d'Allāh porte en lui-même la clé de la plupart de ses énigmes apparentes, pour qui prend la peine de le fréquenter dans son ensemble plutôt que verset par verset isolé. Cette méthode, fondée par la pratique même des Compagnons et systématisée par Ibn Taymiyya, demeure **le premier réflexe de tout exégète sincère**, avant tout recours à la raison, à l'opinion, ou même — dans un premier temps — à la Sunna. **Que celui qui interroge sur un verset commence par interroger le Livre tout entier.**",
      },
    ],
  },

  {
    slug: slugifySujet("Quand le silence est le bon résultat interprétatif"),
    title: "Quand le silence est le bon résultat interprétatif",
    arabic: "التوقف في التفسير",
    intro:
      "Dire « je ne sais pas » face à un verset n'est pas un aveu de faiblesse : c'est parfois la conclusion la plus savante qu'un homme puisse formuler. Les salaf, pourtant les plus proches de la révélation, se sont tus devant certaines questions, préférant le silence à la spéculation. Ce sujet examine cette vertu du tawaqquf, ses fondements chez les Compagnons et les Tābiʿīn, et la distingue de l'ignorance coupable.\n\nOn y verra que le silence savant n'arrête pas la science : il la protège de la présomption.",
    body: [
      { type: "h2", text: "Le silence, une catégorie de la science" },
      {
        type: "p",
        text: "Les usūlistes distinguent, parmi les réponses légitimes à une question religieuse, trois attitudes : affirmer avec certitude, nier avec certitude, ou **suspendre son jugement** (tawaqquf) quand la preuve manque ou que la matière dépasse la portée du texte. Cette troisième voie n'est pas une esquive : elle est elle-même une position savante, fondée sur la connaissance des limites de ce qui est accessible à la raison et au texte.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Trois issues, non deux",
        text: "On croit souvent qu'une question religieuse n'admet que deux réponses : oui ou non. Les salaf en connaissaient une troisième, **tout aussi rigoureuse** : « Allāh sait mieux », lorsque ni le Coran ni la Sunna ne tranchent explicitement.",
      },
      { type: "h2", text: "Ibn ʿAbbās et les lettres isolées" },
      {
        type: "p",
        text: "Ibn ʿAbbās, pourtant surnommé « l'interprète du Coran » (turjumān al-Qurʾān) en raison de l'ampleur de sa science, s'est abstenu de trancher définitivement le sens de certaines lettres isolées ouvrant plusieurs sourates — **Alif Lām Mīm**, **Kāf Hā Yā ʿAyn Ṣād**, et d'autres. Il rapportait que ces lettres relèvent du secret d'Allāh dans Son Livre, sans prétendre en épuiser le sens par une explication catégorique.",
      },
      {
        type: "verse",
        arabic: "**الٓمٓ** ۝ ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ",
        translation: "**Alif Lām Mīm.** Voici le Livre, sans doute possible, ...",
        reference: "Coran, al-Baqara, 2:1-2",
      },
      {
        type: "quote",
        text:
          "قال ابن عباس رضي الله عنهما في الحروف المقطّعة: **هذا من المتشابه الذي استأثر الله بعلمه**، ولم يثبت عنه في تفسيرها قول قاطع يُعتمد.\n\nIbn ʿAbbās, qu'Allāh l'agrée, a dit à propos des lettres isolées : **cela fait partie de ce qui est ambigu, dont Allāh S'est réservé la science exclusive**, et il ne lui est pas rapporté de manière authentique de parole tranchante et adoptée à leur sujet.",
        source: "Rapporté dans les recueils de tafsīr par la tradition (rapport de sens)",
      },
      { type: "h2", text: "Mujāhid et la limite de l'interprétation par opinion" },
      {
        type: "p",
        text: "Mujāhid ibn Jabr, disciple d'Ibn ʿAbbās et l'un des plus grands commentateurs parmi les Tābiʿīn, rapportait qu'il présentait le Coran à son maître verset par verset, l'interrogeant sur le sens de chacun. Malgré cette formation exceptionnelle, il lui arrivait de dire, sur certains points relevant du ghayb (l'invisible) : « je ne sais pas », refusant d'ajouter au texte ce que le texte ne disait pas.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "La science produit aussi de l'humilité",
        text: "Plus un savant connaît l'étendue du Coran, plus il perçoit avec exactitude **où s'arrête ce qui est dit** et où commence ce qui ne l'est pas. L'ignorant, au contraire, comble les silences du texte par ses propres suppositions, faute de savoir qu'il y a là un silence.",
      },
      { type: "h2", text: "Les salaf et le ghayb : l'heure de la fin des temps" },
      {
        type: "verse",
        arabic:
          "يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى ۖ **لَا يُجَلِّيهَا لِوَقْتِهَآ إِلَّا هُوَ**",
        translation:
          "Ils t'interrogent sur l'Heure : quand se produira-t-elle ? Dis : « Sa science n'est qu'auprès de mon Seigneur ; **nul autre que Lui ne la dévoilera en son temps**. »",
        reference: "Coran, al-Aʿrāf, 7:187",
      },
      {
        type: "p",
        text: "Ce verset répond directement à ceux qui interrogent le Prophète ﷺ sur un point du ghayb : la réponse n'est pas un développement, mais un renvoi explicite à Allāh Seul. Le Prophète ﷺ lui-même, à qui la Révélation entière fut confiée, **s'est arrêté là où Allāh a voulu qu'il s'arrête**. Aucun savant après lui ne saurait prétendre franchir cette limite par l'effort de sa seule raison.",
      },
      {
        type: "balance",
        title: "Ce qui autorise le silence, ce qui l'interdit",
        affirmLabel: "Le silence est requis",
        denyLabel: "Le silence serait fautif",
        affirm: [
          "Sur le comment (kayfiyya) des attributs divins, non révélé par le texte.",
          "Sur les lettres isolées et d'autres mystères que le texte ne développe pas.",
          "Sur des questions de détail sans preuve claire du Coran ou de la Sunna.",
          "Sur des affaires du ghayb futur que nul texte n'a précisées.",
        ],
        deny: [
          "Sur les piliers de la foi, clairement établis et transmis en abondance.",
          "Sur les obligations et interdits explicites de la Sharīʿa.",
          "Sur ce qu'un texte authentique et clair a déjà tranché.",
          "Quand le silence servirait à fuir une vérité gênante, non par ignorance réelle.",
        ],
        caption: "Le tawaqquf n'est légitime que devant une absence réelle de preuve, non par paresse ou par lâcheté.",
      },
      { type: "h2", text: "Ibn Taymiyya sur les limites du tafsīr par la raison" },
      {
        type: "p",
        text: "Ibn Taymiyya rappelle, dans sa Muqaddima, que les salaf différaient parfois entre eux sur le sens d'un verset, mais que ces différences relevaient le plus souvent de la **variation d'expression** (ikhtilāf tanawwuʿ) et non d'une opposition réelle. Là où un désaccord véritable subsistait sans qu'aucune preuve décisive ne tranche, il rapporte que certains d'entre eux préféraient s'abstenir plutôt que de trancher par pure conjecture.",
      },
      {
        type: "quote",
        text:
          "كان بعض السلف **يتوقف عن الكلام فيما لا علم له به**، ويقول: **الله أعلم**، ولا يرى ذلك نقصًا في علمه بل كمالًا في ورعه.\n\nCertains des salaf **s'abstenaient de parler de ce dont ils n'avaient pas la science**, et disaient : **« Allāh sait mieux »**, sans considérer cela comme une lacune dans leur science, mais plutôt comme un accomplissement de leur scrupule religieux.",
        source: "Ibn Taymiyya, propos rapporté dans Majmūʿ al-fatāwā (sens général)",
      },
      { type: "h2", text: "Le cas d'al-Shaʿbī et d'autres Tābiʿīn" },
      {
        type: "p",
        text: "Il est rapporté d'al-Shaʿbī, grand Tābiʿī réputé pour sa science, qu'interrogé sur des points délicats, il répondait franchement son ignorance, sans honte, préférant cette franchise à une improvisation. Ce comportement était partagé par plusieurs des Tābiʿīn les plus savants, qui redoutaient de parler du Livre d'Allāh sans certitude.",
      },
      {
        type: "list",
        items: [
          "Ibn ʿAbbās, sur le sens ultime des lettres isolées.",
          "Mujāhid, sur des points précis du ghayb non détaillés par le texte.",
          "Al-Shaʿbī, répondant « je ne sais pas » à des questions qui dépassaient sa preuve.",
          "Un grand nombre de Compagnons, rapportés hésitants devant une question inédite, avant de chercher une preuve claire.",
        ],
      },
      { type: "h2", text: "Distinguer le silence savant de l'ignorance coupable" },
      {
        type: "p",
        text: "Il serait erroné de confondre ce silence méthodique avec le simple défaut d'apprentissage. Le tawaqquf des salaf survient **après recherche**, quand la preuve authentique fait réellement défaut ; il ne dispense jamais d'étudier, de chercher, de consulter les textes et les avis des compagnons avant de conclure à l'absence de réponse. Le silence sans recherche préalable n'est que paresse déguisée en piété.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas transformer le tawaqquf en excuse",
        text: "Certains invoquent aujourd'hui le silence des salaf pour fuir l'étude elle-même, prétendant qu'« on ne peut rien savoir ». C'est une déformation : **les salaf se sont tus après avoir cherché**, non pour éviter de chercher.",
      },
      { type: "h2", text: "Ibn al-Qayyim sur la hiérarchie des réponses" },
      {
        type: "p",
        text: "Ibn al-Qayyim classe les réponses du muftī et de l'exégète selon leur degré de certitude, plaçant le silence honnête au-dessus de la réponse hasardeuse. Il rappelle que le Prophète ﷺ lui-même a parfois attendu la révélation avant de répondre à une question, préférant le délai du silence à une parole prématurée.",
      },
      {
        type: "schema",
        title: "Le cheminement avant le silence légitime",
        variant: "flow",
        nodes: [
          { label: "Question posée", note: "Un point du texte ou du ghayb demeure obscur." },
          { label: "Recherche exhaustive", note: "Coran, Sunna, dires des Compagnons et des Tābiʿīn consultés." },
          { label: "Absence de preuve décisive", note: "Aucun texte clair ne tranche la question." },
          { label: "Tawaqquf", arabic: "التوقف", note: "« Allāh sait mieux » : réponse savante et honnête." },
        ],
        caption: "Le silence légitime est la conclusion d'un effort, non son absence.",
      },
      { type: "h2", text: "Ibn Bāz et la fatwa contemporaine" },
      {
        type: "p",
        text: "Le Shaykh Ibn Bāz, interrogé souvent sur des questions nouvelles ou délicates, répondait volontiers « Allāh sait mieux » ou renvoyait la question à d'autres savants plus spécialisés, montrant que cette vertu du silence n'est pas réservée aux premières générations mais demeure une exigence permanente de l'honnêteté scientifique en islam.",
      },
      {
        type: "quote",
        text:
          "**لا حرج أن يقول العالم: لا أدري**، فهذا نصف العلم، وقد كان السلف الصالح يفعلون ذلك فيما لم يتبين لهم فيه دليل واضح.\n\n**Il n'y a aucun mal à ce que le savant dise : « je ne sais pas »**, car cela constitue la moitié de la science ; les pieux prédécesseurs agissaient ainsi dans ce où aucune preuve claire ne leur était apparue.",
        source: "Ibn Bāz, fatwa rapportée (sens général)",
      },
      { type: "h2", text: "Une discipline pour l'étudiant d'aujourd'hui" },
      {
        type: "experiment",
        title: "S'exercer à distinguer le su et l'inconnu",
        steps: [
          "Face à une question de tafsīr, chercher d'abord ce que le Coran, la Sunna et les salaf en ont dit explicitement.",
          "Si une réponse claire existe, l'adopter sans hésitation ni fausse modestie.",
          "Si aucune preuve décisive n'apparaît après recherche sincère, formuler honnêtement l'incertitude.",
          "Refuser de combler ce vide par une opinion personnelle non fondée sur une preuve.",
        ],
        conclusion: "Cette discipline évite deux excès opposés : l'audace sans preuve et la paresse sans recherche.",
      },
      {
        type: "objection",
        objection: "Mais un exégète qui dit « je ne sais pas » n'est-il pas incompétent pour sa fonction ?",
        reponse:
          "Bien au contraire : c'est l'exégète qui prétend tout savoir, y compris ce qu'aucun texte ne détaille, qui trahit sa fonction. **La compétence véritable inclut la connaissance de ses propres limites**, comme l'ont montré les plus grands parmi les Compagnons.",
        suite:
          "Un médecin honnête qui ignore la cause d'un symptôme rare inspire plus confiance que celui qui invente un diagnostic pour ne pas paraître ignorant.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le silence des salaf devant certains versets n'était ni indifférence ni faiblesse : c'était **la marque la plus sûre de leur science**, car ils savaient reconnaître où le texte parle et où il se tait. Cette leçon reste valable pour tout étudiant du Coran : chercher avec ardeur, répondre avec certitude quand la preuve existe, et savoir dire, sans honte, **« Allāh sait mieux »**, lorsque le Livre lui-même a choisi de garder son secret.",
      },
    ],
  },
];
