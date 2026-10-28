import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre II — groupe d.
 * La vie du cœur : gratitude, patience, confiance, espérance/crainte,
 * repentir, et les maladies du cœur.
 */
export const sujetsSpiritualiteCoeur: Sujet[] = [
  {
    slug: slugifySujet("La gratitude comme forme d'attention"),
    title: "La gratitude comme forme d'attention",
    arabic: "الشكر",
    intro:
      "On croit souvent que la gratitude est un sentiment agréable qui survient après un bienfait remarquable. La tradition spirituelle musulmane en propose une lecture plus exigeante : le **shukr** n'est pas d'abord une émotion, c'est une **attention** — la capacité de voir, dans le tissu ordinaire des jours, ce qui aurait pu ne pas être donné, et qui l'a été.\n\nCelui qui ne remarque rien ne peut rien remercier. C'est pourquoi les maîtres du cœur ont toujours lié le shukr à la vigilance intérieure : avant d'être une parole, la gratitude est un **regard qui ne s'habitue pas**.\n\nCe sujet examine les trois degrés classiques du shukr — par le cœur, par la langue, par les membres — puis leurs conséquences pratiques, en particulier ce paradoxe central : plus on est reconnaissant, plus le bienfait se révèle, et plus il se révèle, plus il appelle de gratitude.",
    body: [
      { type: "h2", text: "Le mot et sa racine" },
      {
        type: "lexique",
        root: "ش ك ر",
        transliteration: "sh-k-r",
        sense:
          "Reconnaître un bienfait et en témoigner. Les lexicographes arabes rapprochent **shukr** de **shakūr** (une bête qui engraisse avec peu de fourrage) : l'image dit que la gratitude tire beaucoup d'un peu, alors que l'ingratitude (**kufr**, qui signifie aussi « recouvrir ») **cache le bienfait sous l'indifférence**.",
        derives: [
          { word: "shākir", arabic: "شَاكِر", gloss: "Celui qui reconnaît le bienfait reçu." },
          { word: "shakūr", arabic: "شَكُور", gloss: "Celui qui remercie abondamment pour peu — nom donné à Dieu et à l'homme vertueux." },
          { word: "mashkūr", arabic: "مَشْكُور", gloss: "Ce dont on est remercié ; l'effort qui reçoit reconnaissance." },
          { word: "kufrān", arabic: "كُفْرَان", gloss: "L'ingratitude, littéralement ce qui recouvre et occulte le bienfait." },
        ],
        note: "**لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ** — « Si vous êtes reconnaissants, très certainement Je vous accorderai davantage. » (14:7)",
      },
      { type: "h2", text: "Trois degrés, un seul acte" },
      {
        type: "verse",
        arabic:
          "ٱعْمَلُوٓا۟ ءَالَ دَاوُۥدَ **شُكْرًا** ۚ وَقَلِيلٌ مِّنْ عِبَادِىَ **ٱلشَّكُورُ**",
        translation:
          "Œuvrez, ô famille de Dāwūd, **en signe de gratitude** ; mais peu de Mes serviteurs sont **profondément reconnaissants**.",
        reference: "Coran, Sabaʾ, 34:13",
      },
      {
        type: "p",
        text: "Ce verset associe la gratitude à un **travail** (« œuvrez »), non à un simple sentiment. La tradition en tire trois degrés qu'il convient de tenir ensemble : la gratitude du cœur, qui reconnaît intérieurement que le bien vient de Dieu ; la gratitude de la langue, qui le dit ; la gratitude des membres, qui **emploie le bienfait dans l'obéissance** pour laquelle il a été donné.",
      },
      {
        type: "degres",
        title: "Les trois degrés du shukr",
        arabic: "مراتب الشكر",
        direction: "asc",
        degres: [
          { label: "Gratitude du cœur", arabic: "شكر القلب", note: "Reconnaître intérieurement que tout bienfait vient de Dieu seul, sans partage d'attribution." },
          { label: "Gratitude de la langue", arabic: "شكر اللسان", note: "Le dire : al-ḥamdu lillāh, l'évocation explicite qui fixe la reconnaissance en parole." },
          { label: "Gratitude des membres", arabic: "شكر الجوارح", note: "Employer le bienfait — la vue, la richesse, la santé — conformément à ce pour quoi il a été donné." },
        ],
        caption: "Un degré sans les autres reste incomplet : le cœur muet, la langue creuse, les membres désobéissants ne composent pas le shukr entier.",
      },
      { type: "h3", text: "Ce que le shukr n'est pas" },
      {
        type: "focus",
        kind: "vigilance",
        title: "La gratitude n'est pas la satisfaction béate",
        text: "Être reconnaissant ne signifie pas juger que tout va bien. On peut être **shākir** pour un bienfait précis tout en travaillant à corriger une injustice ou une souffrance ailleurs. La gratitude porte sur ce qui est donné, non sur un déni de ce qui manque.",
      },
      { type: "h2", text: "L'attention comme condition du remerciement" },
      {
        type: "p",
        text: "On ne remercie que ce que l'on a remarqué. Or l'expérience montre que **l'habitude est la plus grande voleuse de gratitude** : le souffle qui entre et sort, la vue qui distingue les couleurs, la mémoire qui retient un visage — tout cela s'use dans l'indifférence bien avant de s'user dans le corps. Le shukr commence donc par un exercice presque intellectuel : **soulever le voile de l'habitude** pour revoir ce qu'on ne voyait plus.",
      },
      {
        type: "experiment",
        title: "L'inventaire d'un instant",
        steps: [
          "Choisis un moment ordinaire — être assis, respirer, entendre un bruit lointain.",
          "Énumère mentalement dix conditions nécessaires à cet instant qui auraient pu manquer : la santé des poumons, la stabilité du sol, l'absence de douleur, la lumière du jour.",
          "Remarque qu'aucune de ces conditions n'a été obtenue par ton seul effort : **elles sont reçues avant d'être méritées**.",
          "Prononce, pour chacune, un remerciement bref et précis, non une formule générale.",
        ],
        conclusion: "L'exercice révèle que la gratitude n'attend pas l'événement extraordinaire : **elle est disponible à chaque seconde à qui consent à regarder**.",
      },
      { type: "h2", text: "Le bienfait qui se multiplie par sa reconnaissance" },
      {
        type: "verse",
        arabic: "وَإِذْ تَأَذَّنَ رَبُّكُمْ **لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ** وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِى لَشَدِيدٌ",
        translation:
          "Et lorsque votre Seigneur proclama : **« Si vous êtes reconnaissants, très certainement Je vous accorderai davantage ; mais si vous êtes ingrats, Mon châtiment est terrible. »**",
        reference: "Coran, Ibrāhīm, 14:7",
      },
      {
        type: "quote",
        text:
          "قال ابن القيم رحمه الله: **الشكر تقييد النعم الموجودة، وصيد النعم المفقودة**. فمن شكر نعمة ثبتها، ومن لم يشكرها عرضها للزوال.\n\nIbn al-Qayyim, qu'Allāh lui fasse miséricorde, a dit : **« Le remerciement fixe les bienfaits présents et attire ceux qui manquent encore. »** Qui remercie un bienfait l'ancre ; qui ne le remercie pas l'expose à disparaître.",
        source: "Ibn al-Qayyim, Madārij al-sālikīn",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un cercle, non une transaction",
        text: "On se méprend si l'on lit 14:7 comme un marché : « remercie, et tu recevras plus ». Le mécanisme est plus intérieur : **remercier ouvre l'œil qui voit le bienfait**, et voir davantage de bienfaits appelle davantage de gratitude. L'« augmentation » promise est d'abord une augmentation de perception, avant d'être une augmentation matérielle.",
      },
      {
        type: "schema",
        title: "La spirale du shukr",
        variant: "flow",
        nodes: [
          { label: "Un bienfait reçu", note: "Souvent discret, parfois invisible à qui ne le cherche pas." },
          { label: "Une attention posée", note: "Le cœur remarque ce qu'il aurait pu laisser filer." },
          { label: "Une reconnaissance exprimée", note: "Par le cœur, la langue, les membres." },
          { label: "Un bienfait multiplié", note: "Non pas mécaniquement, mais parce que l'œil devenu attentif en voit davantage." },
        ],
        caption: "Le shukr n'est pas un point mais un mouvement qui s'entretient lui-même.",
      },
      { type: "h2", text: "L'objection de l'épreuve" },
      {
        type: "objection",
        objection:
          "Comment demander de la gratitude à celui qui souffre, qui a tout perdu, ou dont la vie est faite d'épreuves répétées ? N'est-ce pas une injonction cruelle envers les affligés ?",
        reponse:
          "Le shukr n'exige jamais de nier la douleur ni de la maquiller en bienfait. Il porte sur ce qui subsiste : **un souffle, une conscience, une possibilité d'invocation** demeurent même dans l'épreuve la plus dure. Les savants distinguent d'ailleurs le shukr, qui concerne les bienfaits reçus, et le ṣabr, qui concerne les épreuves subies : on ne demande pas de remercier le malheur lui-même, mais de rester attentif à ce qui, en lui, n'a pas été retiré.",
        suite: "C'est pourquoi Ayyūb, dans l'épreuve, est loué à la fois pour sa patience et pour n'avoir jamais cessé de reconnaître les bienfaits qui subsistaient.",
      },
      { type: "h2", text: "Gratitude et justice sociale" },
      {
        type: "p",
        text: "Un shukr bien compris ne referme pas l'individu sur sa propre satisfaction : il **l'ouvre au bienfaiteur humain** autant qu'au Bienfaiteur premier. Le Prophète ﷺ a lié les deux reconnaissances de façon explicite.",
      },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«لا يشكر الله من لا يشكر الناس»**\n\nLe Prophète ﷺ a dit : **« Ne remercie pas Allāh celui qui ne remercie pas les gens. »**",
        source: "Rapporté par Abū Dāwūd et al-Tirmidhī",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le shukr n'annule pas la cause seconde",
        text: "Reconnaître que Dieu est l'Auteur premier de tout bienfait n'interdit pas de remercier la main qui l'a transmis. **Les deux reconnaissances se répondent** : l'une empêche l'idolâtrie de la cause seconde, l'autre empêche l'ingratitude envers elle.",
      },
      { type: "h2", text: "Ce que le manque enseigne" },
      {
        type: "comparaison",
        title: "Deux regards sur la même vie",
        columns: ["Le regard ingrat", "Le regard reconnaissant"],
        rows: [
          { criterion: "Face au bienfait ordinaire", cells: ["Ne le remarque pas, l'estime dû", "Le distingue, en mesure la gratuité"] },
          { criterion: "Face au manque", cells: ["Efface tout le reste par ce qui manque", "Continue de voir ce qui subsiste"] },
          { criterion: "Face à autrui", cells: ["Compare et envie", "Compare et s'attendrit du sort commun"] },
          { criterion: "Face à Dieu", cells: ["Se juge oublié", "Se sait accompagné jusque dans l'épreuve"] },
        ],
        caption: "Le contraste n'est pas dans les faits vécus, mais dans l'attention qu'on leur porte.",
      },
      { type: "h2", text: "L'ingratitude, une cécité entretenue" },
      {
        type: "p",
        text: "Le terme **kufr**, qui désigne aussi la mécréance, signifie d'abord « recouvrir ». L'ingrat n'est pas nécessairement celui qui nie qu'un bien lui a été fait : il est souvent celui qui **le tient pour acquis**, qui l'installe sous l'évidence au point de ne plus le voir. C'est une cécité choisie, entretenue par l'habitude bien plus que par la malveillance.",
      },
      {
        type: "list",
        items: [
          "Le premier degré de l'ingratitude : oublier de nommer le bienfaiteur.",
          "Le second : s'attribuer soi-même le mérite du bienfait reçu.",
          "Le troisième, le plus grave : employer le bienfait à désobéir à Celui qui l'a donné.",
        ],
      },
      { type: "h2", text: "Le shukr des prophètes" },
      {
        type: "verse",
        arabic: "إِنَّهُۥ كَانَ عَبْدًا **شَكُورًا**",
        translation: "Il était en vérité un serviteur **profondément reconnaissant**.",
        reference: "Coran, al-Isrāʾ, 17:3, à propos de Nūḥ",
      },
      {
        type: "p",
        text: "Que le Coran retienne, entre tous les traits de Nūḥ, sa gratitude, dit assez son importance : un homme qui a vécu neuf cent cinquante ans d'appel largement rejeté est loué non pour sa souffrance endurée mais pour **la disposition intérieure qui l'a traversée sans s'assécher**.",
      },
      { type: "h2", text: "Une pratique quotidienne" },
      {
        type: "experiment",
        title: "Le registre du soir",
        steps: [
          "Chaque soir, note trois faits précis de la journée, aussi modestes soient-ils.",
          "Pour chacun, précise ce qui aurait pu se passer autrement, et ne s'est pas passé.",
          "Termine par une formule de reconnaissance adressée explicitement, non par une pensée vague.",
          "Après un mois, relis l'ensemble : observe si ton regard sur les journées ordinaires a changé.",
        ],
        conclusion: "La discipline du relevé quotidien **entraîne l'œil** à percevoir ce qu'il traversait sans le voir.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le shukr n'est donc ni une politesse envers le ciel ni un optimisme de tempérament : c'est une **discipline du regard**, qui refuse de laisser l'habitude recouvrir ce qui est donné. Celui qui l'exerce découvre, paradoxalement, que **les bienfaits n'ont jamais manqué** — c'est l'attention qui, souvent, avait manqué la première.",
      },
    ],
  },

  {
    slug: "patience-and-providence",
    title: "Le ṣabr n'est pas la passivité",
    arabic: "الصبر",
    intro:
      "On confond souvent le **ṣabr** avec la résignation molle, l'incapacité d'agir, la fatalité subie faute de mieux. Cette confusion est un contresens sur un mot que le Coran cite plus de quatre-vingt-dix fois, et toujours en des termes qui associent la patience à la force, jamais à la faiblesse.\n\nLe ṣabr, dans la tradition musulmane, est une **rétention active** : celle de la langue qui ne se plaint pas injustement, celle du membre qui ne cède pas à la précipitation, celle du cœur qui ne rompt pas son lien avec Dieu sous la pression de l'épreuve. Il se distingue nettement de la passivité, qui abandonne l'effort, et il se distingue tout autant de la révolte stérile, qui épuise sans construire.\n\nCe sujet propose une lecture du ṣabr en trois objets classiques — l'obéissance, l'épreuve, le péché évité — puis examine son articulation avec l'action et avec la providence divine.",
    body: [
      { type: "h2", text: "Le mot et son champ" },
      {
        type: "lexique",
        root: "ص ب ر",
        transliteration: "ṣ-b-r",
        sense:
          "Retenir, contenir, tenir ferme. La même racine donne le mot **ṣabīr**, qui désigne une pierre dure, et **ṣubāra**, un roc. Le ṣabr n'est donc pas mollesse mais **résistance** : la capacité de tenir sans céder, ni au découragement ni à l'agitation désordonnée.",
        derives: [
          { word: "ṣābir", arabic: "صَابِر", gloss: "Celui qui tient ferme, sans céder ni à la plainte ni à la précipitation." },
          { word: "ṣabūr", arabic: "صَبُور", gloss: "Celui dont la patience est constante — un des noms divins." },
          { word: "iṣṭibār", arabic: "اِصْطِبَار", gloss: "L'effort soutenu de patience, la forme intensive de la retenue." },
          { word: "muṣābara", arabic: "مُصَابَرَة", gloss: "La patience opposée à celle de l'adversaire, sur le terrain de la lutte." },
        ],
        note: "**وَٱصْبِرْ وَمَا صَبْرُكَ إِلَّا بِٱللَّهِ** — « Sois patient : ta patience elle-même ne tient que par Allāh. » (16:127)",
      },
      { type: "h2", text: "Les trois objets du ṣabr" },
      {
        type: "p",
        text: "Les savants distinguent traditionnellement trois terrains où s'exerce la patience, et l'oubli de cette distinction est la source la plus fréquente du contresens qui la réduit à l'endurance passive de l'épreuve.",
      },
      {
        type: "comparaison",
        title: "Les trois objets classiques du ṣabr",
        columns: ["Objet", "Ce qu'il exige", "Difficulté propre"],
        rows: [
          { criterion: "Patience dans l'obéissance", cells: ["Persévérer dans l'effort, la régularité, la constance de l'acte", "La lassitude, l'usure de la répétition"] },
          { criterion: "Patience devant le péché", cells: ["Retenir le membre, la langue, le regard face à la tentation", "L'attrait immédiat de ce qui est facile"] },
          { criterion: "Patience dans l'épreuve", cells: ["Ne pas rompre le lien avec Dieu sous la douleur, la perte, le deuil", "La révolte, le désespoir, l'amertume"] },
        ],
        caption: "Le premier et le second objet sont actifs par nature ; même le troisième, souvent réduit à l'endurance, appelle une action intérieure constante.",
      },
      { type: "h2", text: "Une force, non une faiblesse" },
      {
        type: "verse",
        arabic: "إِن يَكُن مِّنكُمْ عِشْرُونَ **صَٰبِرُونَ** يَغْلِبُوا۟ مِا۟ئَتَيْنِ",
        translation: "S'il se trouve parmi vous vingt hommes **endurants**, ils vaincront deux cents.",
        reference: "Coran, al-Anfāl, 8:65",
      },
      {
        type: "p",
        text: "Ce verset, adressé à des combattants sur un champ de bataille, montre bien que le ṣabr coranique n'a rien d'une posture de retrait. Il est cité comme le **facteur décisif de la victoire militaire**, mis en balance directe avec la disproportion des forces. On ne demanderait pas d'être « patient » pour gagner une bataille si la patience consistait à ne rien faire.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le contresens le plus répandu",
        text: "Traduire ṣabr par « patience » en français expose à un glissement vers la passivité, sens que le mot français porte parfois. **Le ṣabr coranique est plus proche de l'endurance active du sportif ou du combattant** que de l'attente sans effort.",
      },
      { type: "h2", text: "Le ṣabr et l'action des causes" },
      {
        type: "p",
        text: "Ceci conduit au cœur du sujet : quel rapport le ṣabr entretient-il avec l'effort et avec les moyens ordinaires ? La réponse classique est que le ṣabr **accompagne l'action, il ne la remplace pas**. Le malade patient prend son traitement ; le commerçant patient poursuit son travail honnête ; l'étudiant patient continue d'apprendre. Ce que le ṣabr retient, ce n'est pas l'effort — c'est la précipitation, l'amertume, et l'abandon prématuré.",
      },
      {
        type: "objection",
        objection:
          "Si tout est déjà décrété par Dieu, à quoi bon patienter activement ? Ne suffit-il pas d'attendre que les choses se produisent d'elles-mêmes ?",
        reponse:
          "Cette objection confond le décret divin, qui embrasse toute chose, et la connaissance que nous en avons, qui est nulle avant l'événement. Nous ne savons jamais à l'avance ce que le décret contient ; **agir avec patience est lui-même l'un des moyens par lesquels le décret s'accomplit**. Le Prophète ﷺ a répondu à une question presque identique en disant : « Œuvrez, chacun est facilité vers ce pour quoi il a été créé » — non « cessez d'agir ».",
        suite: "La providence ne dispense donc jamais de l'effort : elle en est le cadre invisible, non le substitut.",
      },
      {
        type: "schema",
        title: "Patience active et passivité : où passe la ligne",
        variant: "branch",
        nodes: [
          { label: "Passivité", note: "Abandon de l'effort, résignation sans cœur ni mouvement, souvent nourrie de fatalisme mal compris." },
          { label: "Ṣabr", note: "Rétention de la plainte injuste et de la précipitation, maintien de l'effort et du lien avec Dieu." },
          { label: "Agitation stérile", note: "Révolte, précipitation, épuisement sans direction, rupture du lien intérieur." },
        ],
        caption: "Le ṣabr occupe la position médiane : ni démission de l'effort, ni fébrilité qui l'épuise sans le guider.",
      },
      { type: "h2", text: "Un tafsīr sur l'épreuve" },
      {
        type: "verse",
        arabic:
          "وَلَنَبْلُوَنَّكُم بِشَىْءٍ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ وَنَقْصٍ مِّنَ ٱلْأَمْوَٰلِ وَٱلْأَنفُسِ وَٱلثَّمَرَٰتِ ۗ **وَبَشِّرِ ٱلصَّٰبِرِينَ**",
        translation:
          "Nous vous éprouverons certainement par un peu de peur, de faim, de diminution des biens, des personnes et des fruits. **Et annonce une bonne nouvelle aux endurants.**",
        reference: "Coran, al-Baqara, 2:155",
      },
      {
        type: "quote",
        text:
          "قال الطبري رحمه الله في هذه الآية: **الصبر هو حبس النفس عن الجزع**، وليس هو ترك الأخذ بالأسباب ولا ترك السعي، بل هو **ضبط القلب عند نزول البلاء حتى لا ينازع القضاء**.\n\nAl-Ṭabarī, dans son commentaire de ce verset, a dit : **« Le ṣabr est la rétention de l'âme contre l'affolement »**, et non l'abandon du recours aux moyens ni de l'effort ; c'est plutôt **la maîtrise du cœur à la survenue de l'épreuve, afin qu'il ne conteste pas le décret**.",
        source: "Al-Ṭabarī, Jāmiʿ al-bayān",
      },
      { type: "h2", text: "Ce que la bonne nouvelle vise" },
      {
        type: "p",
        text: "Il est significatif que la « bonne nouvelle » du verset 2:155 ne soit pas promise à celui qui n'a pas d'épreuve, mais à celui qui **la traverse en tenant ferme**. Le ṣabr n'annule pas la difficulté ; il en change la texture intérieure, de sorte que l'épreuve devienne un lieu de proximité plutôt qu'un lieu d'éloignement.",
      },
      {
        type: "degres",
        title: "Trois attitudes possibles devant l'épreuve",
        direction: "asc",
        degres: [
          { label: "Le mécontentement (saḫaṭ)", arabic: "السخط", note: "Contester intérieurement le décret, se révolter contre ce qui est arrivé." },
          { label: "Le ṣabr", arabic: "الصبر", note: "Tenir ferme sans plainte injuste, tout en poursuivant l'effort légitime." },
          { label: "La satisfaction (riḍā)", arabic: "الرضا", note: "Accueillir l'épreuve avec une paix intérieure qui ne nie pas la douleur mais ne s'y oppose plus." },
        ],
        caption: "Le riḍā est un degré au-delà du ṣabr, rare et non obligatoire selon la majorité des savants, mais que le ṣabr rend possible.",
      },
      { type: "h2", text: "Le ṣabr collectif" },
      {
        type: "p",
        text: "Le Coran connaît aussi une forme collective et compétitive du ṣabr, dans un verset de sourate Āl ʿImrān qui gradue l'exigence.",
      },
      {
        type: "verse",
        arabic: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ **ٱصْبِرُوا۟ وَصَابِرُوا۟** وَرَابِطُوا۟",
        translation: "Ô vous qui croyez, **soyez endurants, surpassez-vous en endurance**, et tenez-vous prêts.",
        reference: "Coran, Āl ʿImrān, 3:200",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Une gradation dans le verbe",
        text: "Les commentateurs relèvent la nuance entre **ṣabr** (endurer) et **muṣābara** (surpasser en endurance, tenir plus longtemps que l'adversaire ou l'épreuve). Le second n'est pas une simple répétition du premier : il ajoute une dimension de **dépassement actif**, comme dans une compétition où l'on tient plus longtemps que ce qui s'oppose.",
      },
      { type: "h2", text: "Le ṣabr et le temps" },
      {
        type: "experiment",
        title: "L'épreuve du délai",
        steps: [
          "Choisis une difficulté actuelle dont la résolution ne dépend pas entièrement de toi.",
          "Note ce que tu peux légitimement entreprendre pour l'améliorer, et entreprends-le.",
          "Observe, dans les jours suivants, les moments où surgit l'envie de forcer une issue prématurée ou de te plaindre au-delà du nécessaire.",
          "À chacun de ces moments, retiens la plainte et poursuis l'effort déjà engagé, sans en ajouter d'artificiel.",
        ],
        conclusion: "L'exercice montre que le ṣabr se loge précisément **dans l'intervalle entre l'effort fait et le résultat qui tarde** — c'est cet intervalle qu'il faut tenir sans le rompre.",
      },
      { type: "h2", text: "La récompense sans mesure" },
      {
        type: "verse",
        arabic: "إِنَّمَا يُوَفَّى ٱلصَّٰبِرُونَ أَجْرَهُم **بِغَيْرِ حِسَابٍ**",
        translation: "C'est aux endurants seuls que leur rétribution sera pleinement donnée, **sans compte**.",
        reference: "Coran, al-Zumar, 39:10",
      },
      {
        type: "p",
        text: "Cette formule est unique dans le Coran : aucune autre vertu n'est ainsi promise « sans compte ». Les commentateurs y voient un signe : le ṣabr, parce qu'il est **la vertu qui soutient toutes les autres** — car sans lui l'obéissance ne dure pas, la retenue face au péché ne tient pas, l'épreuve ne se traverse pas — reçoit une rétribution qui échappe à la mesure ordinaire.",
      },
      { type: "h2", text: "Balance : patience et fatalisme" },
      {
        type: "balance",
        title: "Ce que le ṣabr affirme, ce qu'il écarte",
        affirmLabel: "Ce que le ṣabr affirme",
        denyLabel: "Ce qu'il écarte",
        affirm: [
          "**La poursuite de l'effort licite**, quelle que soit la durée de l'épreuve.",
          "**La retenue de la plainte injuste** et du blasphème intérieur contre le décret.",
          "**La constance du lien avec Dieu**, même lorsque la réponse tarde.",
        ],
        deny: [
          "L'abandon de l'action sous prétexte que « tout est écrit ».",
          "La révolte qui rompt la relation à Dieu au premier obstacle.",
          "La précipitation qui veut forcer une issue avant son heure.",
        ],
        caption: "Le fatalisme et le ṣabr se ressemblent en apparence — l'un attend sans agir, l'autre agit en attendant.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le ṣabr n'est donc en rien la passivité : c'est une **discipline de la constance**, qui maintient l'effort légitime, retient la plainte qui détruirait le lien avec Dieu, et refuse la précipitation qui voudrait devancer le moment juste. **Celui qui patiente n'a pas cessé d'agir : il a seulement cessé de se combattre lui-même pendant qu'il agit.**",
      },
    ],
  },

  {
    slug: slugifySujet("La confiance en Dieu et le travail des moyens"),
    title: "La confiance en Dieu et le travail des moyens",
    arabic: "التوكل",
    intro:
      "Peu de notions spirituelles sont aussi mal comprises que le **tawakkul**, la confiance en Dieu. On l'imagine tantôt comme un renoncement à l'effort — attacher la chamelle est superflu si Dieu pourvoit — tantôt, à l'inverse, comme un simple mot pieux ajouté à une vie qui, en réalité, ne compte que sur les moyens humains.\n\nLe hadith fondateur du sujet dément les deux lectures d'un seul geste : **« Attache-la, et confie-toi »**. Le tawakkul n'est ni l'abandon des causes ni leur idolâtrie ; c'est la juste articulation entre l'effort qui nous revient et l'issue qui ne nous appartient pas.\n\nCe sujet examine cette articulation à travers les textes fondateurs, les positions des théologiens sur le rapport entre cause et Créateur, et les conséquences pratiques du tawakkul dans une vie ordinaire.",
    body: [
      { type: "h2", text: "Le hadith qui règle la question" },
      {
        type: "quote",
        text:
          "عن أنس بن مالك رضي الله عنه، قال رجل: يا رسول الله، أُطلقها وأتوكل؟ قال: **«اعقلها وتوكل»**\n\nD'après Anas ibn Mālik, qu'Allāh l'agrée : un homme demanda : « Ô Messager d'Allāh, dois-je la lâcher [ma chamelle] et me confier à Allāh ? » Il répondit : **« Attache-la, et confie-toi. »**",
        source: "Rapporté par al-Tirmidhī",
      },
      {
        type: "p",
        text: "Ce hadith bref condense toute la doctrine. L'homme, en posant sa question, croyait que confiance et précaution s'excluaient. Le Prophète ﷺ répond par une **conjonction**, non par un choix : l'attache appartient à l'homme, l'issue appartient à Dieu, et **les deux ordres coexistent sans se nuire**.",
      },
      { type: "h2", text: "Le mot et sa racine" },
      {
        type: "lexique",
        root: "و ك ل",
        transliteration: "w-k-l",
        sense:
          "Confier une affaire à quelqu'un, s'en remettre à lui. Le **wakīl** est celui à qui l'on délègue la charge d'une affaire, avec la confiance que celle-ci sera bien gérée. Dire que Dieu est **al-Wakīl** signifie qu'Il prend en charge, avec une compétence absolue, ce que le serviteur Lui confie.",
        derives: [
          { word: "tawakkul", arabic: "تَوَكُّل", gloss: "L'acte de placer sa confiance en Dieu quant à l'issue des affaires." },
          { word: "wakīl", arabic: "وَكِيل", gloss: "Celui à qui l'on délègue une charge ; nom divin désignant Celui qui prend en charge parfaitement." },
          { word: "tawkīl", arabic: "تَوْكِيل", gloss: "L'acte de désigner un mandataire pour une affaire précise." },
          { word: "muwakkal", arabic: "مُوَكَّل", gloss: "Celui à qui une charge a été confiée." },
        ],
        note: "**وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ** — « Quiconque place sa confiance en Allāh, Il lui suffit. » (65:3)",
      },
      { type: "h2", text: "Le verset et son contexte" },
      {
        type: "verse",
        arabic:
          "وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًا، وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن **يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥ**",
        translation:
          "Quiconque craint Allāh, Il lui donne une issue et lui procure une subsistance là où il ne s'y attend pas. Et quiconque **place sa confiance en Allāh, Il lui suffit**.",
        reference: "Coran, al-Ṭalāq, 65:2-3",
      },
      {
        type: "p",
        text: "Ce verset est descendu, selon les circonstances rapportées, au sujet d'hommes dont la situation matérielle semblait sans issue. La promesse n'est pas que rien ne coûtera d'effort, mais qu'**une issue existera là où le calcul humain n'en voyait pas** — « d'où il ne s'y attend pas » signale précisément que la providence déborde le calcul, sans jamais dispenser de la crainte de Dieu qui l'introduit.",
      },
      { type: "h2", text: "Les degrés de la confiance" },
      {
        type: "degres",
        title: "Trois degrés du tawakkul selon les maîtres du cœur",
        arabic: "مراتب التوكل",
        direction: "asc",
        degres: [
          { label: "La confiance de celui qui mandate un avocat", note: "On confie une affaire précise à quelqu'un en qui l'on a confiance, tout en restant attentif à son issue." },
          { label: "La confiance de l'enfant envers sa mère", note: "Un abandon plus complet, sans calcul ni arrière-pensée, dans une relation de dépendance totale et paisible." },
          { label: "La confiance de celui qui se sait entre les mains de Dieu comme le mort entre les mains du laveur", note: "Le degré le plus haut : une remise totale où l'âme elle-même ne s'oppose plus au décret." },
        ],
        caption: "Ces images, empruntées aux maîtres du taṣawwuf modéré, décrivent une intensification, non trois tawakkul différents.",
      },
      { type: "h2", text: "Le tawakkul n'abolit pas les causes" },
      {
        type: "p",
        text: "C'est ici que la mauvaise compréhension guette le plus. Certains ont cru pieux de renoncer au travail, au traitement médical, ou à la prudence légitime, au nom du tawakkul. Cette lecture est unanimement écartée par les savants : **le Prophète ﷺ lui-même, modèle premier du tawakkul, portait une cotte de mailles au combat, se soignait, et planifiait ses expéditions**.",
      },
      {
        type: "objection",
        objection:
          "Si Dieu connaît déjà l'issue de toute chose et l'a décrétée de toute éternité, à quoi servent les moyens que je mets en œuvre ? Ne serait-il pas plus pur de m'en remettre totalement sans agir ?",
        reponse:
          "Cette objection oublie que **les moyens eux-mêmes font partie du décret**, et non une tentative de le contourner. Prendre un remède n'est pas s'opposer à la volonté divine : c'est, le cas échéant, la manière par laquelle cette volonté s'accomplit. Le Prophète ﷺ, interrogé sur l'utilité de se soigner alors que la mort est décrétée, répondit qu'Allāh n'a fait descendre aucune maladie sans faire descendre son remède.",
        suite: "Le tawakkul porte donc sur le **cœur** — ne pas placer sa confiance ultime dans la cause elle-même — et non sur les **membres**, qui doivent agir normalement.",
      },
      {
        type: "schema",
        title: "Où se loge le tawakkul",
        variant: "flow",
        nodes: [
          { label: "L'effort du serviteur", arabic: "الأخذ بالأسباب", note: "Attacher la chamelle : agir selon les moyens ordinaires et raisonnables." },
          { label: "La remise du cœur", arabic: "تفويض القلب", note: "Ne pas placer sa confiance ultime dans la cause elle-même, mais dans son Créateur." },
          { label: "L'accueil de l'issue", arabic: "الرضا بالنتيجة", note: "Recevoir ce qui advient, favorable ou non, sans que le cœur ne se brise ni ne se révolte." },
        ],
        caption: "Le tawakkul se situe dans le deuxième moment : il ne remplace ni le premier ni le troisième.",
      },
      { type: "h2", text: "Tafsīr : la confiance des oiseaux" },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«لو أنكم كنتم تتوكلون على الله حق توكله لرزقكم كما يرزق الطير، تغدو خماصاً وتروح بطاناً»**\n\nLe Prophète ﷺ a dit : **« Si vous placiez votre confiance en Allāh comme il se doit, Il vous accorderait votre subsistance comme Il l'accorde à l'oiseau : il part le matin le ventre vide et revient le soir rassasié. »**",
        source: "Rapporté par al-Tirmidhī et Ibn Māja",
      },
      {
        type: "focus",
        kind: "repere",
        title: "L'oiseau ne reste pas au nid",
        text: "Ce hadith, souvent cité pour illustrer l'abandon confiant, précise pourtant que l'oiseau **part chercher sa nourriture** — il ne l'attend pas immobile dans son nid. La confiance ici décrite est celle d'un être qui **agit selon sa nature propre**, sans anxiété excessive quant au résultat.",
      },
      { type: "h2", text: "Ce que le tawakkul délivre" },
      {
        type: "p",
        text: "Le fruit intérieur le plus net du tawakkul est la **libération de l'anxiété excessive**. Celui qui a fait ce qui était en son pouvoir, et qui remet sincèrement l'issue à Dieu, cesse de ressasser ce qui échappe à sa main. Ceci ne signifie pas l'indifférence : cela signifie que l'inquiétude cesse de porter sur ce qu'on ne maîtrise pas, et se concentre sur ce qu'on maîtrise réellement.",
      },
      {
        type: "experiment",
        title: "Distinguer ce qui m'appartient de ce qui ne m'appartient pas",
        steps: [
          "Prends une préoccupation actuelle et note-la précisément.",
          "Liste tout ce qui, dans cette situation, dépend réellement de ton effort.",
          "Liste ce qui n'en dépend pas : la réaction d'autrui, l'issue finale, le moment de la résolution.",
          "Engage-toi pleinement dans la première liste, et prononce une formule de remise pour la seconde.",
        ],
        conclusion: "L'exercice rend visible que **la plupart de l'anxiété ordinaire porte sur la seconde liste** — précisément celle que le tawakkul est fait pour apaiser.",
      },
      { type: "h2", text: "Balance : tawakkul et fatalisme passif" },
      {
        type: "balance",
        title: "Confiance en Dieu et démission ne se confondent pas",
        affirmLabel: "Le tawakkul véritable",
        denyLabel: "Sa contrefaçon",
        affirm: [
          "**Prendre les moyens licites et raisonnables** disponibles.",
          "**Remettre le cœur** quant à l'issue, sans anxiété rongeante.",
          "**Accueillir le résultat**, favorable ou contraire, sans amertume durable.",
        ],
        deny: [
          "Négliger les moyens ordinaires sous prétexte de piété.",
          "Se dire confiant tout en rongeant son cœur d'inquiétude.",
          "Attribuer l'échec à Dieu pour excuser sa propre négligence.",
        ],
        caption: "Le tawakkul contrefait se reconnaît à ceci qu'il dispense de l'effort ; le tawakkul véritable ne dispense que de l'angoisse.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "« Attache-la, et confie-toi » demeure la formule la plus économique et la plus complète du tawakkul. **L'attache est à l'homme, l'issue est à Dieu** ; confondre les deux ordres, dans un sens ou dans l'autre, est la source de toutes les déviations sur ce sujet. Celui qui les tient ensemble découvre une paix qui ne dépend d'aucun résultat particulier, parce qu'elle repose sur Celui à qui **rien n'échappe**.",
      },
    ],
  },

  {
    slug: slugifySujet("Espérance et crainte : la juste tension"),
    title: "Espérance et crainte : la juste tension",
    arabic: "الرجاء والخوف",
    intro:
      "Deux mouvements du cœur accompagnent toute vie spirituelle sérieuse : le **rajāʾ**, l'espérance en la miséricorde de Dieu, et le **khawf**, la crainte de Sa justice. Isolés l'un de l'autre, chacun devient une maladie : l'espérance seule engendre la présomption insouciante, la crainte seule engendre le désespoir paralysant.\n\nLa tradition musulmane a formulé cette exigence par une image devenue classique, celle des deux ailes de l'oiseau qui ne peut voler droit si l'une est plus développée que l'autre. Ce sujet explore cette tension, ses fondements scripturaires, et la manière dont elle se module selon les états de la vie — santé et maladie, jeunesse et approche de la mort.",
    body: [
      { type: "h2", text: "Les deux mots" },
      {
        type: "lexique",
        root: "ر ج و",
        transliteration: "r-j-w",
        sense:
          "Espérer, attendre avec confiance un bien possible. Le **rajāʾ** islamique se distingue du simple souhait (**tamannī**) en ce qu'il s'appuie sur des causes réelles : celui qui espère la miséricorde tout en cultivant l'obéissance espère légitimement ; celui qui pèche sans retenue en comptant sur le pardon **souhaite**, il n'espère pas au sens plein.",
        derives: [
          { word: "rājī", arabic: "رَاجٍ", gloss: "Celui qui espère, en tenant sa confiance ancrée dans l'obéissance et l'invocation." },
          { word: "raḥma", arabic: "رَحْمَة", gloss: "La miséricorde, objet premier de l'espérance du croyant." },
          { word: "khawf", arabic: "خَوْف", gloss: "La crainte de la justice et de la rigueur divines, moteur de la vigilance morale." },
          { word: "khashya", arabic: "خَشْيَة", gloss: "Une crainte plus profonde, née de la connaissance, distincte de la simple peur réflexe." },
        ],
        note: "**نَبِّئْ عِبَادِى أَنِّىٓ أَنَا ٱلْغَفُورُ ٱلرَّحِيمُ، وَأَنَّ عَذَابِى هُوَ ٱلْعَذَابُ ٱلْأَلِيمُ** — « Informe Mes serviteurs que Je suis le Pardonneur, le Miséricordieux, et que Mon châtiment est le châtiment douloureux. » (15:49-50)",
      },
      { type: "h2", text: "Un seul verset, deux moitiés" },
      {
        type: "verse",
        arabic: "نَبِّئْ عِبَادِى أَنِّىٓ **أَنَا ٱلْغَفُورُ ٱلرَّحِيمُ**، وَأَنَّ **عَذَابِى هُوَ ٱلْعَذَابُ ٱلْأَلِيمُ**",
        translation: "Informe Mes serviteurs que Je suis **le Pardonneur, le Miséricordieux**, et que **Mon châtiment est le châtiment douloureux**.",
        reference: "Coran, al-Ḥijr, 15:49-50",
      },
      {
        type: "p",
        text: "Ce verset unique tient les deux annonces dans une même respiration, sans qu'aucune ne l'emporte définitivement sur l'autre. Les commentateurs relèvent que l'ordre — la miséricorde d'abord, la rigueur ensuite — **n'est pas fortuit** : plusieurs hadiths rappellent que la miséricorde de Dieu précède Sa colère. Mais cette priorité n'efface pas la seconde moitié du verset.",
      },
      {
        type: "quote",
        text:
          "قال ابن كثير رحمه الله: بدأ سبحانه بذكر رحمته **تقديماً لها على غضبه**، كما ثبت في الحديث: «إن رحمتي سبقت غضبي»، ثم أتبعها بذكر عذابه **لئلا يأمن العبد مكر الله**.\n\nIbn Kathīr, qu'Allāh lui fasse miséricorde, a dit : Allāh a commencé par mentionner Sa miséricorde, **la faisant précéder sur Sa colère**, comme l'établit le hadith : « Ma miséricorde a précédé Ma colère », puis Il l'a fait suivre de la mention de Son châtiment, **afin que le serviteur ne se sente pas à l'abri de Sa ruse**.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿaẓīm",
      },
      { type: "h2", text: "La métaphore des deux ailes" },
      {
        type: "p",
        text: "Les maîtres du cœur ont comparé le rajāʾ et le khawf à **deux ailes** nécessaires au vol du cœur vers Dieu. Une aile seule ne fait pas voler : elle fait tourner en rond, ou tomber. L'image mérite d'être précisée : il ne s'agit pas de deux forces qui s'annulent, mais de deux forces qui, **par leur tension même, tiennent l'oiseau en équilibre et le portent en avant**.",
      },
      {
        type: "spectre",
        title: "Le curseur entre crainte et espérance",
        left: "Désespoir (qunūṭ)",
        right: "Présomption (amn min makr Allāh)",
        markers: [
          { label: "Excès de crainte", position: 8, note: "Le pécheur qui se juge irrémédiablement perdu et cesse tout effort de retour." },
          { label: "Point d'équilibre", position: 50, note: "Crainte qui vigile sans paralyser, espérance qui encourage sans endormir." },
          { label: "Excès d'espérance", position: 90, note: "Celui qui pèche en comptant sur un pardon automatique, sans effort ni retour." },
        ],
        caption: "Les deux extrémités du spectre sont explicitement nommées interdites dans le Coran : le désespoir de la miséricorde (12:87) et l'assurance contre la ruse divine (7:99).",
      },
      { type: "h2", text: "Les deux interdits coraniques symétriques" },
      {
        type: "verse",
        arabic: "**إِنَّهُۥ لَا يَا۟يْـَٔسُ مِن رَّوْحِ ٱللَّهِ إِلَّا ٱلْقَوْمُ ٱلْكَٰفِرُونَ**",
        translation: "**Nul ne désespère de la miséricorde d'Allāh, sauf les gens mécréants.**",
        reference: "Coran, Yūsuf, 12:87",
      },
      {
        type: "verse",
        arabic: "**أَفَأَمِنُوا۟ مَكْرَ ٱللَّهِ ۚ فَلَا يَأْمَنُ مَكْرَ ٱللَّهِ إِلَّا ٱلْقَوْمُ ٱلْخَٰسِرُونَ**",
        translation: "**Se sentent-ils donc à l'abri de la ruse d'Allāh ? Nul ne se sent à l'abri de la ruse d'Allāh, sauf les gens perdants.**",
        reference: "Coran, al-Aʿrāf, 7:99",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Deux voies opposées, un même naufrage",
        text: "Le Coran range le **désespoir de la miséricorde** et **l'assurance contre le châtiment** dans la même catégorie de gravité : les deux sont attribués à ceux qui ont perdu la juste mesure de Dieu. Ni Sa clémence n'est un blanc-seing, ni Sa rigueur n'est sans issue.",
      },
      { type: "h2", text: "Une tension qui varie selon les états" },
      {
        type: "p",
        text: "Une question classique des maîtres du cœur porte sur la proportion à observer entre les deux mouvements. La réponse la plus répandue, attribuée à plusieurs savants dont Ibn al-Qayyim, distingue les états de la vie.",
      },
      {
        type: "degres",
        title: "La proportion selon les états de la vie",
        direction: "desc",
        degres: [
          { label: "En bonne santé, en pleine activité", note: "La crainte doit dominer légèrement, pour retenir des excès et entretenir la vigilance morale." },
          { label: "Dans l'épreuve ou la maladie", note: "Un équilibre plus serré, où la crainte empêche le désespoir et l'espérance soutient l'effort." },
          { label: "À l'approche de la mort", note: "L'espérance doit dominer nettement, pour que le serviteur rencontre son Seigneur en bien pensant de Lui." },
        ],
        caption: "Cette gradation s'appuie sur le hadith où le Prophète ﷺ visite un mourant et lui demande comment il se sent : « J'espère Allāh, ô Messager d'Allāh, et je crains mes péchés » — et le Prophète approuve.",
      },
      {
        type: "quote",
        text:
          "عن أنس رضي الله عنه أن النبي ﷺ دخل على شاب وهو في الموت، فقال: **«كيف تجدك؟»** قال: **«أرجو الله يا رسول الله، وأخاف ذنوبي»**، فقال رسول الله ﷺ: **«لا يجتمعان في قلب عبد في مثل هذا الموطن إلا أعطاه الله ما يرجو وآمنه مما يخاف»**\n\nD'après Anas, qu'Allāh l'agrée : le Prophète ﷺ entra auprès d'un jeune homme mourant et lui demanda : **« Comment te sens-tu ? »** Il répondit : **« J'espère Allāh, ô Messager d'Allāh, et je crains mes péchés. »** Le Messager d'Allāh ﷺ dit alors : **« Ces deux [sentiments] ne se réunissent pas dans le cœur d'un serviteur en un tel moment sans qu'Allāh ne lui donne ce qu'il espère et ne le préserve de ce qu'il craint. »**",
        source: "Rapporté par al-Tirmidhī et Ibn Māja",
      },
      { type: "h2", text: "Objection : la crainte n'est-elle pas anxiogène ?" },
      {
        type: "objection",
        objection:
          "Insister sur la crainte de Dieu ne risque-t-il pas d'engendrer une religiosité anxieuse, scrupuleuse, incapable de goûter la paix promise aux croyants ?",
        reponse:
          "La crainte islamique authentique (**khashya**) n'est pas une peur névrotique sans objet : elle est **proportionnée à la connaissance** — les savants la craignent davantage, dit le Coran (35:28), précisément parce qu'ils connaissent mieux la grandeur de Celui qu'ils craignent. Elle s'accompagne toujours de l'espérance qui l'équilibre, et elle vise un effet concret — la vigilance morale — non un état de tourment permanent. Une crainte qui paralyse sans produire d'effort de correction a dévié de son but.",
        suite: "C'est pourquoi les maîtres recommandent, à celui dont la crainte tourne au désespoir, de rééquilibrer volontairement sa méditation vers les textes de miséricorde.",
      },
      { type: "h2", text: "Comparaison : deux dérives, deux profils" },
      {
        type: "comparaison",
        title: "Les deux dérives et leurs traits",
        columns: ["Le désespéré (excès de crainte)", "Le présomptueux (excès d'espérance)"],
        rows: [
          { criterion: "Rapport au péché", cells: ["S'y croit condamné, cesse le repentir", "S'en accommode, compte sur un pardon automatique"] },
          { criterion: "Rapport à l'effort", cells: ["Abandonne l'obéissance, jugée inutile", "Néglige l'obéissance, jugée superflue"] },
          { criterion: "Image de Dieu", cells: ["Un juge implacable et sans issue", "Un indulgent sans exigence"] },
          { criterion: "Verset qui les vise", cells: ["Yūsuf, 12:87", "Al-Aʿrāf, 7:99"] },
        ],
        caption: "Les deux dérives, en apparence opposées, produisent le même effet : l'arrêt de l'effort spirituel.",
      },
      { type: "h2", text: "Un exercice de rééquilibrage" },
      {
        type: "experiment",
        title: "Peser son propre cœur",
        steps: [
          "Observe, pendant une semaine, tes réactions spontanées face à tes propres manquements.",
          "Note si ta première pensée est plutôt de type « je suis perdu » ou plutôt « ce n'est pas grave, Dieu pardonne ».",
          "Si la première domine, cherche des textes sur la miséricorde et médite-les activement.",
          "Si la seconde domine, cherche des textes sur la rigueur du jugement et médite-les activement.",
        ],
        conclusion: "Le rééquilibrage n'est pas un exercice ponctuel mais **une hygiène continue**, car le cœur penche naturellement d'un côté ou de l'autre selon le tempérament.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Espérance et crainte ne sont pas deux doctrines concurrentes entre lesquelles il faudrait choisir, mais **une seule respiration du cœur croyant**, dont l'inspiration ranime l'effort et dont l'expiration console de la faiblesse. Négliger l'une des deux ailes, c'est se condamner à tourner sur soi-même ; **les tenir ensemble, c'est apprendre à voler droit vers Celui qui est à la fois le Pardonneur et le Rigoureux dans le compte.**",
      },
    ],
  },

  {
    slug: slugifySujet("Le repentir comme retour, non comme comptabilité"),
    title: "Le repentir comme retour, non comme comptabilité",
    arabic: "التوبة",
    intro:
      "On imagine souvent le repentir comme une opération comptable : une faute commise, une peine purgée, un solde ramené à zéro. Cette représentation, empruntée sans le savoir à d'autres traditions juridiques, ne correspond pas au sens du mot arabe **tawba**, qui signifie d'abord **retour**.\n\nSe repentir, dans la théologie musulmane, ce n'est pas régler une dette : c'est **revenir** — revenir vers Dieu après s'en être éloigné, comme on revient chez soi après s'être égaré. Ce déplacement de sens change tout : il fait du repentir un mouvement disponible à chaque instant, non un mécanisme conditionné par une peine à subir.\n\nCe sujet examine la structure du tawba selon les conditions posées par les théologiens, sa dimension cyclique dans une vie humaine, et les questions qu'il pose sur la répétition de la faute.",
    body: [
      { type: "h2", text: "Le mot et son sens premier" },
      {
        type: "lexique",
        root: "ت و ب",
        transliteration: "t-w-b",
        sense:
          "Revenir, faire retour. Le verbe s'emploie aussi bien pour le serviteur qui revient à Dieu que, dans un sens actif rare, pour Dieu qui **revient vers Son serviteur** avec Sa miséricorde. Le mot ne porte en lui aucune idée de calcul ou de compensation : il porte l'idée d'un **chemin repris dans le bon sens**.",
        derives: [
          { word: "tāʾib", arabic: "تَائِب", gloss: "Celui qui revient à Dieu après s'en être éloigné." },
          { word: "tawwāb", arabic: "تَوَّاب", gloss: "Celui qui revient sans cesse — nom donné à Dieu, qui accueille le retour du serviteur à répétition." },
          { word: "matāb", arabic: "مَتَاب", gloss: "Le lieu ou l'acte du retour, la destination retrouvée." },
          { word: "istighfār", arabic: "اِسْتِغْفَار", gloss: "La demande de pardon, qui accompagne et précède souvent le tawba." },
        ],
        note: "**وَتُوبُوٓا۟ إِلَى ٱللَّهِ جَمِيعًا أَيُّهَ ٱلْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ** — « Revenez tous à Allāh, ô croyants, afin que vous réussissiez. » (24:31)",
      },
      { type: "h2", text: "Un nom divin qui redouble le sens" },
      {
        type: "verse",
        arabic: "وَهُوَ **ٱلَّذِى يَقْبَلُ ٱلتَّوْبَةَ عَنْ عِبَادِهِۦ** وَيَعْفُوا۟ عَنِ ٱلسَّيِّـَٔاتِ",
        translation: "C'est Lui **qui accueille le retour de Ses serviteurs** et efface les mauvaises actions.",
        reference: "Coran, al-Shūrā, 42:25",
      },
      {
        type: "p",
        text: "Que Dieu Se nomme **al-Tawwāb**, « Celui qui revient sans cesse », est remarquable : ce n'est pas seulement le serviteur qui revient à Dieu, c'est Dieu qui **vient à la rencontre du retour**, avant même que celui-ci ne soit achevé. La tradition rapporte l'image d'un Dieu plus joyeux du retour de Son serviteur qu'un voyageur retrouvant, dans le désert, sa monture perdue avec toutes ses provisions.",
      },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«لله أفرح بتوبة عبده من أحدكم سقط على بعيره وقد أضلّه في أرض فلاة»**\n\nLe Prophète ﷺ a dit : **« Allāh se réjouit du retour de Son serviteur bien plus que l'un d'entre vous ne se réjouirait de retrouver sa monture perdue en plein désert. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      { type: "h2", text: "Les conditions du retour" },
      {
        type: "p",
        text: "Le tawba n'est pas une simple formule prononcée sans changement intérieur. Les théologiens en fixent classiquement quatre conditions, dont trois concernent le rapport à Dieu et une quatrième, propre, le rapport aux hommes.",
      },
      {
        type: "cycle",
        title: "Les étapes du repentir",
        arabic: "شروط التوبة",
        center: "Le retour vers Dieu",
        steps: [
          { label: "Cesser la faute", arabic: "الإقلاع عن الذنب", note: "Interrompre effectivement l'acte, non seulement le regretter en pensée." },
          { label: "Regretter sincèrement", arabic: "الندم", note: "Un regret du cœur, présenté par le Prophète ﷺ comme le repentir lui-même : « le regret est le repentir »." },
          { label: "Résoudre de ne pas y revenir", arabic: "العزم على عدم العود", note: "Une décision ferme, même si la faiblesse humaine peut ensuite y faire obstacle." },
          { label: "Réparer envers autrui si nécessaire", arabic: "رد الحقوق", note: "Restituer un bien, présenter des excuses, réparer un tort — condition supplémentaire quand un droit humain est en jeu." },
        ],
        caption: "Le cycle n'est pas linéaire une fois pour toutes : une vie humaine le reparcourt de nombreuses fois, et c'est précisément ce que le nom al-Tawwāb accueille.",
      },
      { type: "h2", text: "Le regret comme cœur du repentir" },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«الندم توبة»**\n\nLe Prophète ﷺ a dit : **« Le regret est le repentir. »**",
        source: "Rapporté par Ibn Māja et Aḥmad",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Pourquoi le regret et non l'effacement du souvenir",
        text: "Ce hadith surprend : il ne dit pas que le repentir consiste à oublier la faute, mais à **la regretter**. Le souvenir de la faute peut rester ; c'est le rapport intérieur à ce souvenir qui change, du plaisir ou de l'indifférence vers la douleur d'un cœur qui souhaite ne pas l'avoir commise.",
      },
      { type: "h2", text: "Un cycle, non une ligne" },
      {
        type: "p",
        text: "C'est ici que le titre du sujet prend tout son sens. Une comptabilité fonctionne par soldes définitifs : une fois la dette payée, l'affaire est close. **Le repentir islamique fonctionne autrement** : il est structurellement disponible à la répétition, parce qu'il ne repose pas sur un mérite accumulé mais sur un retour toujours possible vers Celui qui « revient sans cesse ».",
      },
      {
        type: "objection",
        objection:
          "Mais si l'on sait que le repentir efface la faute et qu'on peut toujours se repentir à nouveau, cela n'encourage-t-il pas à pécher sans retenue, en se disant qu'on se repentira ensuite ?",
        reponse:
          "Les savants répondent que le tawba sincère, celui qui remplit réellement les conditions du regret et de la résolution, **ne coexiste pas avec l'intention préalable de recommencer**. Celui qui pèche en se disant « je me repentirai après » ne fait pas un vrai repentir plus tard : il fait une présomption maintenant, condamnée dans le verset 4:18, qui exclut explicitement le repentir de celui qui persiste jusqu'à l'article de la mort. Le tawba sincère naît d'un regret réel, non d'un calcul anticipé.",
        suite: "C'est pourquoi la sincérité, et non la simple répétition formelle, demeure le critère décisif.",
      },
      {
        type: "verse",
        arabic: "وَلَيْسَتِ ٱلتَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ ٱلسَّيِّـَٔاتِ حَتَّىٰٓ إِذَا حَضَرَ أَحَدَهُمُ ٱلْمَوْتُ **قَالَ إِنِّى تُبْتُ ٱلْـَٔـٰنَ**",
        translation:
          "Il n'y a pas de repentir accepté pour ceux qui commettent de mauvaises actions jusqu'à ce que la mort se présente à l'un d'eux, et qu'alors il dise : **« Je me repens maintenant. »**",
        reference: "Coran, al-Nisāʾ, 4:18",
      },
      { type: "h2", text: "Comparaison : deux logiques du pardon" },
      {
        type: "comparaison",
        title: "Logique comptable et logique du retour",
        columns: ["Logique comptable", "Logique du retour (tawba)"],
        rows: [
          { criterion: "Ce qui efface la faute", cells: ["Une peine subie qui « solde » la dette", "Un mouvement du cœur vers Dieu, accompagné d'actes"] },
          { criterion: "Rapport au temps", cells: ["Linéaire, chaque compte est clos une fois réglé", "Cyclique, disponible à chaque instant de la vie"] },
          { criterion: "Rapport à la répétition", cells: ["Une rechute rouvre un dossier déjà clos", "Chaque retour sincère est accueilli à nouveau"] },
          { criterion: "Image de Dieu impliquée", cells: ["Un comptable rigoureux", "al-Tawwāb, Celui qui revient sans cesse vers qui revient"] },
        ],
        caption: "La différence n'est pas seulement théologique : elle change radicalement le rapport psychologique à la faute passée.",
      },
      { type: "h2", text: "Le tafsīr de la porte ouverte à l'Occident" },
      {
        type: "quote",
        text:
          "عن النبي ﷺ: **«إن الله يبسط يده بالليل ليتوب مسيء النهار، ويبسط يده بالنهار ليتوب مسيء الليل، حتى تطلع الشمس من مغربها»**\n\nLe Prophète ﷺ a dit : **« Allāh tend Sa main la nuit pour accueillir le repentir de celui qui a mal agi le jour, et Il tend Sa main le jour pour accueillir le repentir de celui qui a mal agi la nuit — et cela jusqu'à ce que le soleil se lève de l'occident. »**",
        source: "Rapporté par Muslim",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une porte, non un compte à rebours menaçant",
        text: "La mention du « soleil qui se lève de l'occident » marque un terme réel — le signe précédant la fin des temps où le repentir cessera d'être reçu — mais le hadith **insiste sur la durée de l'ouverture**, jour après jour, nuit après nuit, plutôt que sur son terme. C'est une porte tenue ouverte, non un compte à rebours anxiogène.",
      },
      { type: "h2", text: "Un exercice sur la répétition" },
      {
        type: "experiment",
        title: "Le retour, pas seulement le regret",
        steps: [
          "Identifie une faute récurrente dans ta vie, dont tu te repens régulièrement sans y parvenir totalement.",
          "Note si ton regret s'accompagne d'une action concrète — éviter l'occasion, changer une habitude — ou seulement d'une émotion passagère.",
          "Ajoute, à ton prochain repentir sur cette faute, une mesure pratique précise qui rend la rechute moins probable.",
          "Observe sur plusieurs semaines si le cycle regret-rechute se resserre ou s'écarte.",
        ],
        conclusion: "Le tawba sincère se distingue du regret stérile en ceci qu'il **engage un changement mesurable**, même modeste, et non seulement une émotion répétée sans effet.",
      },
      { type: "h2", text: "Balance : sincérité et présomption" },
      {
        type: "balance",
        title: "Le repentir vrai et sa contrefaçon",
        affirmLabel: "Le tawba sincère",
        denyLabel: "Sa contrefaçon",
        affirm: [
          "**Un regret réel**, né après la faute, non planifié avant elle.",
          "**Une résolution ferme**, même si la faiblesse peut ensuite la mettre à l'épreuve.",
          "**Des actes concrets** de réparation quand un droit d'autrui est en jeu.",
        ],
        deny: [
          "Pécher en se réservant un repentir « pour plus tard », prévu à l'avance.",
          "Prononcer une formule sans regret ni résolution intérieure.",
          "Ignorer les droits dus à autrui en pensant que la relation avec Dieu suffit.",
        ],
        caption: "La ligne de partage n'est pas le nombre de fois où l'on se repent, mais la sincérité de chaque retour.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le tawba n'est donc pas la clôture d'un compte, mais **la réouverture d'un chemin**. Chaque faute est un pas de côté ; chaque repentir sincère est un pas de retour, accueilli par Celui qui S'est nommé « Celui qui revient sans cesse » précisément pour que Ses serviteurs sachent que le retour, quel que soit le nombre de fois où il est nécessaire, **trouve toujours une main tendue**.",
      },
    ],
  },

  {
    slug: slugifySujet("L'envie, l'orgueil, la rancune : diagnostic et traitement"),
    title: "L'envie, l'orgueil, la rancune : diagnostic et traitement",
    arabic: "أمراض القلوب",
    intro:
      "La tradition musulmane a développé, à côté du droit et de la théologie, une véritable **médecine du cœur** (ṭibb al-qulūb), qui traite l'envie, l'orgueil et la rancune comme des maladies au sens propre : elles ont des causes identifiables, des symptômes reconnaissables, et des traitements que les maîtres du cœur ont détaillés avec une précision presque clinique.\n\nCes trois maux ne sont pas de simples défauts de caractère parmi d'autres : le Coran et le hadith les traitent avec une gravité particulière, car ils rongent l'intérieur sans toujours se voir à l'extérieur, et ils s'attaquent directement au lien fraternel que la foi est censée établir entre les croyants.\n\nCe sujet propose un diagnostic distinct de chacun des trois maux, leurs racines communes, et les traitements que la tradition prescrit.",
    body: [
      { type: "h2", text: "Une médecine du cœur, une méthode" },
      {
        type: "p",
        text: "Al-Ghazālī, dans le livre de son Iḥyāʾ consacré au danger de l'orgueil et de l'envie, compare explicitement le rôle du savant spirituel à celui du médecin : il ne suffit pas de nommer le mal, il faut en **connaître la cause pour prescrire le remède adéquat**, car un même symptôme peut avoir des origines différentes selon les personnes.",
      },
      {
        type: "lexique",
        root: "ح س د",
        transliteration: "ḥ-s-d",
        sense:
          "L'envie, désirer la disparition du bienfait d'autrui, que ce bienfait vous revienne ou non. Elle se distingue du **ghibṭa**, désir légitime d'obtenir un bien semblable sans souhaiter que l'autre le perde — ce dernier étant permis, voire louable en matière de bien.",
        derives: [
          { word: "ḥāsid", arabic: "حَاسِد", gloss: "Celui qui envie, qui souffre du bienfait vu chez autrui." },
          { word: "ghibṭa", arabic: "غِبْطَة", gloss: "L'émulation licite : désirer un bien semblable sans souhaiter la perte de celui qui le possède." },
          { word: "kibr", arabic: "كِبْر", gloss: "L'orgueil, le refus de la vérité et le mépris des gens." },
          { word: "ḥiqd", arabic: "حِقْد", gloss: "La rancune, le ressentiment logé et entretenu dans le cœur." },
        ],
        note: "**وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ** — « et du mal de l'envieux quand il envie » (113:5)",
      },
      { type: "h2", text: "L'envie : diagnostic" },
      {
        type: "verse",
        arabic: "أَمْ **يَحْسُدُونَ ٱلنَّاسَ عَلَىٰ مَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ**",
        translation: "Ou bien **envient-ils les gens pour ce qu'Allāh leur a donné de Sa grâce** ?",
        reference: "Coran, al-Nisāʾ, 4:54",
      },
      {
        type: "p",
        text: "Ce verset situe l'envie dans son vrai lieu : elle ne porte pas d'abord sur la personne enviée, mais **sur le partage que Dieu a fait de Ses grâces**. Al-Ghazālī note que l'envie contient une objection implicite au décret divin : au fond, l'envieux voudrait redistribuer autrement ce que Dieu a distribué.",
      },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«إياكم والحسد، فإن الحسد يأكل الحسنات كما تأكل النار الحطب»**\n\nLe Prophète ﷺ a dit : **« Gardez-vous de l'envie, car l'envie dévore les bonnes actions comme le feu dévore le bois. »**",
        source: "Rapporté par Abū Dāwūd",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'envie fait mal à celui qui l'héberge",
        text: "L'image du feu est précise : le feu ne consume que le bois qui le porte, non le bois du voisin. **L'envieux se ronge lui-même** ; l'objet de son envie continue souvent sa vie sans en être affecté, tandis que le cœur envieux, lui, brûle jour après jour.",
      },
      { type: "h2", text: "Traitement de l'envie" },
      {
        type: "experiment",
        title: "Le contre-geste de l'envie",
        steps: [
          "Identifie une personne dont le bienfait — matériel, social, spirituel — suscite en toi un pincement.",
          "Reconnais explicitement, en pensée, que ce bienfait lui vient de Dieu et non d'une injustice à ton égard.",
          "Formule pour elle une invocation sincère de bien, y compris pour ce bienfait précis.",
          "Observe l'effet sur ton propre état intérieur, indépendamment de tout changement chez l'autre.",
        ],
        conclusion: "Les maîtres du cœur enseignent que **l'invocation pour celui qu'on envie est le remède le plus direct**, car elle oblige le cœur à vouloir pour l'autre ce qu'il voudrait pour soi.",
      },
      { type: "h2", text: "L'orgueil : diagnostic" },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر»**، فقال رجل: إن الرجل يحب أن يكون ثوبه حسناً ونعله حسنة، قال: **«إن الله جميل يحب الجمال، الكبر بطر الحق وغمط الناس»**\n\nLe Prophète ﷺ a dit : **« N'entrera pas au Paradis celui dans le cœur duquel se trouve le poids d'un atome d'orgueil. »** Un homme demanda : mais l'homme aime avoir un beau vêtement et de belles sandales ! Il répondit : **« Allāh est beau et aime la beauté ; l'orgueil, c'est rejeter la vérité et mépriser les gens. »**",
        source: "Rapporté par Muslim",
      },
      {
        type: "p",
        text: "Cette définition prophétique — **« rejeter la vérité et mépriser les gens »** — est décisive : elle déplace l'orgueil du domaine de l'apparence, où on le situe spontanément, vers le domaine du **rapport à la vérité**. On peut être vêtu avec soin sans orgueil, et l'on peut être vêtu modestement tout en refusant, dans son cœur, d'admettre qu'on a tort.",
      },
      {
        type: "degres",
        title: "Les degrés de gravité de l'orgueil",
        direction: "asc",
        degres: [
          { label: "L'orgueil ordinaire", note: "Se croire supérieur par le rang, la richesse, l'apparence — condamnable mais souvent inconscient." },
          { label: "L'orgueil intellectuel", note: "Refuser une vérité claire par simple fierté de ne pas céder, même quand la preuve est établie." },
          { label: "L'orgueil d'Iblīs", note: "Le refus initial et paradigmatique : « Je vaux mieux que lui » (7:12), refusant l'ordre divin par jugement de supériorité." },
        ],
        caption: "Le Coran situe la matrice de tout orgueil dans la parole d'Iblīs refusant de se prosterner devant Ādam.",
      },
      { type: "h2", text: "Traitement de l'orgueil" },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le remède est dans l'origine, non dans le comportement",
        text: "Puisque l'orgueil se loge d'abord dans le refus de reconnaître la vérité, son traitement passe moins par des gestes d'humilité extérieurs — qui peuvent eux-mêmes devenir un motif d'orgueil subtil — que par un **entraînement répété à admettre qu'on a tort** lorsque c'est le cas, même face à un interlocuteur qu'on estime inférieur en savoir ou en rang.",
      },
      {
        type: "experiment",
        title: "L'exercice de la contradiction acceptée",
        steps: [
          "La prochaine fois qu'un interlocuteur te corrige sur un point, même mineur, remarque ta première réaction intérieure.",
          "Si cette réaction est de te défendre avant même d'examiner le fond, suspends la réponse quelques secondes.",
          "Examine sincèrement si l'objection est fondée, indépendamment de qui la formule.",
          "Si elle l'est, reconnais-le explicitement, sans minimiser ni généraliser.",
        ],
        conclusion: "Un cœur qui s'entraîne à cette reconnaissance répétée **affaiblit peu à peu la racine de l'orgueil**, qui est le refus instinctif de céder devant la vérité.",
      },
      { type: "h2", text: "La rancune : diagnostic" },
      {
        type: "p",
        text: "La rancune (**ḥiqd**) diffère de la colère momentanée : elle est une **colère qu'on a laissée se loger et durer** dans le cœur, souvent nourrie en secret, sans expression ni résolution. Le Coran en fait un des traits que les croyants du Paradis en seront explicitement délivrés.",
      },
      {
        type: "verse",
        arabic: "وَنَزَعْنَا مَا فِى صُدُورِهِم **مِّنْ غِلٍّ** إِخْوَٰنًا عَلَىٰ سُرُرٍ مُّتَقَٰبِلِينَ",
        translation: "Et Nous aurons arraché **toute rancune** de leurs poitrines : ils seront frères, sur des lits face à face.",
        reference: "Coran, al-Ḥijr, 15:47",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La fraternité suppose l'arrachement de la rancune",
        text: "Ce verset lie explicitement l'état paradisiaque à l'absence de rancune : la fraternité (« ils seront frères ») n'est possible qu'une fois **le ghill arraché**, non simplement réprimé. Ceci indique le but du traitement terrestre : non pas cacher la rancune sous une politesse de façade, mais **l'extraire réellement du cœur**.",
      },
      { type: "h2", text: "Traitement de la rancune" },
      {
        type: "quote",
        text:
          "قال النبي ﷺ: **«لا يحل لمسلم أن يهجر أخاه فوق ثلاث»**\n\nLe Prophète ﷺ a dit : **« Il n'est pas permis à un musulman de bouder son frère plus de trois jours. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "Cette limite de trois jours, fixée par le Prophète ﷺ lui-même, montre que l'islam **reconnaît la légitimité d'une froideur passagère** née d'un différend, tout en fixant un terme précis au-delà duquel elle devient une faute distincte : la rancune installée. Le mécanisme prescrit n'attend pas que le ressentiment s'éteigne de lui-même : il impose un **geste actif de réconciliation**.",
      },
      { type: "h2", text: "Objection : n'est-ce pas naïf ?" },
      {
        type: "objection",
        objection:
          "Demander d'arracher toute rancune n'est-il pas irréaliste, voire dangereux, lorsque le tort subi a été réel et grave ? N'y a-t-il pas un risque de banaliser l'injustice en exigeant un pardon rapide ?",
        reponse:
          "La tradition distingue soigneusement la **rancune intérieure entretenue** — qui ronge sans but et empêche toute paix — du **droit à la justice**, qui reste pleinement légitime et que le Coran encourage à réclamer par les voies appropriées. On peut demander réparation sans nourrir de ressentiment permanent ; on peut même pardonner sans renoncer à la vigilance envers celui qui a causé le tort. Le traitement prescrit vise le poison intérieur, non l'effacement de la justice due.",
        suite: "C'est pourquoi le Coran, juste après avoir loué le pardon (42:40), rappelle dans le même passage que la légitime défense du droit lésé n'est en rien blâmable.",
      },
      { type: "h2", text: "Une racine commune aux trois maux" },
      {
        type: "comparaison",
        title: "Trois maladies, une même racine",
        columns: ["Envie", "Orgueil", "Rancune"],
        rows: [
          { criterion: "Objet immédiat", cells: ["Le bienfait d'autrui", "Sa propre supériorité supposée", "Un tort subi non digéré"] },
          { criterion: "Racine commune", cells: ["Attachement excessif au moi et à sa comparaison avec autrui"] },
          { criterion: "Effet sur les actes", cells: ["Ronge les bonnes actions accomplies", "Fait rejeter la vérité offerte", "Empêche la réconciliation possible"] },
          { criterion: "Verset ou hadith de référence", cells: ["4:54", "Muslim, définition prophétique du kibr", "15:47"] },
        ],
        caption: "Al-Ghazālī fait dériver les trois maux d'un même attachement excessif du cœur à lui-même, appelé ḥubb al-nafs.",
      },
      { type: "h2", text: "Balance : sentiment involontaire et faute installée" },
      {
        type: "balance",
        title: "Ce qui est excusé, ce qui est repris",
        affirmLabel: "Ce que la tradition excuse",
        denyLabel: "Ce qu'elle reprend",
        affirm: [
          "**Le premier mouvement involontaire** de comparaison, de fierté ou de blessure — non maîtrisable directement.",
          "**Une froideur passagère**, dans les trois jours, après un différend réel.",
          "**Le désir légitime** d'obtenir un bien semblable à celui d'autrui (ghibṭa).",
        ],
        deny: [
          "**Entretenir volontairement** l'envie, l'orgueil ou la rancune au-delà du premier mouvement.",
          "**Agir** selon ce sentiment — médire, nuire, refuser la réconciliation offerte.",
          "**Prolonger** au-delà de trois jours une rupture née d'un différend ordinaire.",
        ],
        caption: "La faute n'est jamais dans le sentiment surgi, mais dans son entretien volontaire et dans les actes qu'on lui laisse produire.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'envie, l'orgueil et la rancune partagent une même racine — **un cœur trop attaché à lui-même pour se réjouir du bien d'autrui, accepter une vérité qui le dérange, ou relâcher un tort qu'il rumine**. La médecine du cœur, telle que la tradition musulmane l'a formulée, ne se contente pas de nommer ces maux : elle en indique la cause précise et le remède patient, rappelant que **le cœur purifié n'est pas un idéal réservé à quelques-uns, mais la condition même posée pour entrer, un jour, « frères, sur des lits face à face »**.",
      },
    ],
  },
];
