import { slugifySujet, type Sujet } from "./sujet-core";

export const sujetsCoranB: Sujet[] = [
  {
    slug: "abrogation-reconsidered",
    title: "Le naskh réexaminé : ce que prétend réellement l'abrogation",
    arabic: "النسخ",
    intro:
      "Peu de notions ont été autant caricaturées que le naskh. On l'imagine comme un rideau qui tombe brutalement sur un verset, l'effaçant de la pratique et presque du texte. La réalité, telle que l'ont fixée les uṣūlistes, est bien plus étroite et bien plus rigoureuse que cette image populaire.",
    body: [
      { type: "h2", text: "Ce que le mot désigne" },
      {
        type: "lexique",
        root: "ن س خ",
        transliteration: "n-s-kh",
        sense: "Transcrire, mais aussi faire succéder une chose à une autre",
        derives: [
          { word: "naskh", arabic: "نسخ", gloss: "le fait qu'un texte second lève l'application d'un texte premier" },
          { word: "nāsikh", arabic: "الناسخ", gloss: "le texte qui abroge" },
          { word: "mansūkh", arabic: "المنسوخ", gloss: "le texte dont l'application est levée" },
        ],
        note: "Le naskh porte sur le **jugement pratique**, non sur la vérité de l'énoncé, qui demeure Parole de Dieu récitée.",
      },
      {
        type: "p",
        text: "Il faut distinguer d'emblée deux choses que la vulgarisation confond sans cesse : l'abrogation de la **récitation** et l'abrogation du **jugement**. On peut avoir un jugement qui demeure alors que sa formulation textuelle a disparu ; on peut avoir un texte qui demeure récité alors que son jugement pratique a été remplacé. Les deux cas existent, mais ils sont rares et précisément recensés, non pas devinés au fil des besoins d'un exégète.",
      },
      {
        type: "p",
        text: "L'erreur la plus répandue consiste à croire que tout verset de miséricorde a été abrogé par un verset de rigueur, selon l'idée fausse que le « verset du sabre » aurait effacé des centaines d'autres passages. **Cette lecture appauvrit le Coran** et contredit la méthode même des premiers savants, qui exigeaient des conditions strictes avant de prononcer un naskh.",
      },
      { type: "h2", text: "Les conditions du naskh véritable" },
      {
        type: "degres",
        title: "Ce qu'il faut établir avant de parler d'abrogation",
        arabic: "شروط النسخ",
        degres: [
          { label: "Contradiction réelle", note: "Les deux textes doivent être inconciliables, non simplement différents dans leur portée." },
          { label: "Postériorité certaine", note: "Le texte abrogeant doit être daté avec certitude après le texte abrogé." },
          { label: "Absence de particularisation possible", note: "Si l'on peut restreindre un des deux textes à un cas, on préfère cette voie au naskh." },
          { label: "Une source légiférante", note: "Coran, Sunna authentique — jamais une simple opinion ou une nécessité de circonstance." },
        ],
        direction: "asc",
      },
      {
        type: "verse",
        arabic:
          "**مَا نَنسَخْ مِنْ ءَايَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَآ أَوْ مِثْلِهَآ**",
        translation:
          "**Si Nous abrogeons un verset quelconque ou que Nous le fassions oublier, Nous apportons meilleur, ou son pareil.**",
        reference: "Coran, al-Baqara, 2:106",
      },
      {
        type: "p",
        text: "Ce verset fonde le principe et en fixe la finalité : le naskh n'est jamais une perte, il est un remplacement par ce qui est meilleur pour la communauté à un moment donné de sa formation. Ibn al-Qayyim insiste sur ce point dans Iʿlām al-muwaqqiʿīn : la Sagesse divine adapte la charge légale à la capacité et à l'état des croyants, sans que cela n'affecte la vérité de ce qui a été révélé.",
      },
      {
        type: "schema",
        title: "Les trois figures classiques du naskh",
        variant: "branch",
        nodes: [
          { label: "Texte et jugement abrogés", arabic: "نسخ الحكم والتلاوة", note: "Rarissime, connu par transmission expresse." },
          { label: "Texte abrogé, jugement maintenu", arabic: "نسخ التلاوة دون الحكم", note: "Le cas de la lapidation, connu hors du muṣḥaf actuel." },
          { label: "Jugement abrogé, texte maintenu", arabic: "نسخ الحكم دون التلاوة", note: "Le cas le plus fréquent, et le seul que l'on rencontre encore dans le texte récité." },
        ],
        caption: "Seule la troisième figure explique les débats habituels sur les versets « abrogés » du muṣḥaf actuel.",
      },
      { type: "h2", text: "Un exemple souvent mal exposé" },
      {
        type: "verse",
        arabic: "وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ وَيَذَرُونَ أَزْوَٰجًا **وَصِيَّةً لِّأَزْوَٰجِهِم مَّتَٰعًا إِلَى ٱلْحَوْلِ غَيْرَ إِخْرَاجٍ**",
        translation:
          "Ceux d'entre vous qui meurent et laissent des épouses doivent laisser un testament en faveur de leurs épouses, **une provision pour un an, sans les faire sortir**.",
        reference: "Coran, al-Baqara, 2:240",
      },
      {
        type: "p",
        text: "Ce verset a été compris par la majorité des exégètes comme abrogé, dans son jugement pratique, par le verset fixant à quatre mois et dix jours la durée de viduité et par les versets d'héritage. Le texte reste récité, chargé de sens spirituel et de mémoire législative, mais la règle qu'il énonçait a été remplacée par une règle plus précise et plus protectrice pour la veuve.",
      },
      {
        type: "quote",
        text: "قال ابن كثير رحمه الله: **هذا منسوخ بآية الميراث وبتربص أربعة أشهر وعشرا**.\n\nIbn Kathīr a dit : **« Ceci est abrogé par le verset de l'héritage et par le délai de quatre mois et dix jours. »**",
        source: "Tafsīr Ibn Kathīr, commentaire de 2:240",
      },
      {
        type: "objection",
        objection: "Si Dieu change Ses jugements, cela ne trahit-il pas une hésitation contraire à Sa perfection ?",
        reponse:
          "Le changement de jugement selon les circonstances n'est pas une hésitation, c'est une manifestation de la Sagesse divine face à des situations différentes. Un médecin qui change de prescription selon l'évolution du patient ne se contredit pas : il adapte son savoir à un état nouveau. De même, la Loi a accompagné la formation progressive de la communauté, du permis de boire du vin jusqu'à son interdiction totale, sans que la vérité de chaque étape ne soit remise en cause pour son temps.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le piège du naskh de confort",
        text: "Beaucoup de prétendues abrogations invoquées aujourd'hui servent surtout à écarter un verset gênant. Avant d'accepter un naskh, exige toujours la preuve de contradiction réelle et de postériorité certaine : à défaut, cherche la conciliation, elle est presque toujours possible.",
      },
      { type: "h2", text: "Un nombre restreint, contre l'idée reçue" },
      {
        type: "p",
        text: "Les listes anciennes, comme celle d'al-Naḥḥās ou d'Ibn al-Jawzī, comptaient parfois plus de deux cents versets abrogés, faute d'avoir épuisé les voies de conciliation. Les chercheurs plus rigoureux, à commencer par al-Shinqīṭī dans Aḍwāʾ al-bayān, ont réduit ce nombre à une poignée de cas véritablement établis, montrant que la plupart des versets jadis classés « abrogés » sont en réalité **particularisés** ou **conditionnés**, ce qui est une opération toute différente du naskh.",
      },
      {
        type: "p",
        text: "Cette révision n'est pas une nouveauté moderniste : elle prolonge une exigence méthodologique déjà présente chez les premiers uṣūlistes, qui rappelaient qu'on ne doit recourir au naskh qu'en dernier ressort, lorsque toute autre lecture est impossible. Le naskh est un outil de précision, non un solvant qu'on applique à tout passage qui dérange une lecture rapide.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Bien compris, le naskh révèle une législation vivante, attentive aux capacités humaines, et non un texte instable dont des pans entiers seraient caducs. La rigueur des conditions exigées par les savants protège le Coran contre les usages abusifs de cette notion, qu'ils viennent de ceux qui veulent trop en abroger ou de ceux qui, par réaction, voudraient n'en abroger aucun.",
      },
    ],
  },
  {
    slug: slugifySujet("Mecquois et médinois : critères, et pourquoi ils comptent"),
    title: "Mecquois et médinois : critères, et pourquoi ils comptent",
    arabic: "المكي والمدني",
    intro:
      "Savoir qu'une sourate est mecquoise ou médinoise n'est pas un détail d'érudition. C'est une clé de lecture qui explique le ton, le vocabulaire, les thèmes et jusqu'à la longueur des versets. Ignorer cette distinction expose à des lectures anachroniques, plaquant sur un contexte de faiblesse des règles pensées pour un État naissant.",
    body: [
      { type: "h2", text: "Un critère géographique... et pas seulement" },
      {
        type: "p",
        text: "La première idée qui vient à l'esprit est purement géographique : mecquois pour ce qui a été révélé avant l'émigration, médinois pour ce qui l'a été après. Cette définition, dite « temporelle », est celle que retiennent la majorité des savants, car elle est opératoire même pour les versets révélés en dehors des deux villes elles-mêmes, par exemple pendant un voyage.",
      },
      {
        type: "p",
        text: "Une seconde définition, dite « thématique », s'attache non au lieu mais au contenu : est mecquois ce qui s'adresse à un auditoire polythéiste sur les fondements de la foi, est médinois ce qui légifère pour une communauté déjà constituée. Ces deux approches se recoupent le plus souvent, mais elles ne sont pas rigoureusement identiques, et leur articulation a nourri des débats fins chez les spécialistes des sciences coraniques.",
      },
      {
        type: "comparaison",
        title: "Deux définitions, deux usages",
        columns: ["Critère temporel", "Critère thématique"],
        rows: [
          { criterion: "Fondement", cells: ["Avant / après l'émigration", "Contenu et destinataire du discours"] },
          { criterion: "Avantage", cells: ["Simple, daté, transmis par les Compagnons", "Explique pourquoi un verset « mecquois » peut être révélé à Médine"] },
          { criterion: "Limite", cells: ["Ne rend pas compte du style à lui seul", "Moins objectif, dépend d'une lecture du contenu"] },
        ],
      },
      { type: "h2", text: "Des signes stylistiques reconnaissables" },
      {
        type: "degres",
        title: "Indices qui orientent le classement",
        degres: [
          { label: "Longueur des versets", note: "Généralement courts et rythmés à La Mecque, plus longs et explicatifs à Médine." },
          { label: "Vocatif employé", note: "« Ô hommes » domine à La Mecque ; « Ô vous qui croyez » domine à Médine." },
          { label: "Thèmes dominants", note: "Unicité, résurrection, récits des prophètes à La Mecque ; lois, contrats, jihad organisé à Médine." },
          { label: "Interlocuteurs visés", note: "Polythéistes de Quraysh à La Mecque ; croyants, hypocrites et gens du Livre à Médine." },
        ],
        direction: "asc",
      },
      {
        type: "verse",
        arabic: "**يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُمْ**",
        translation: "**Ô hommes, adorez votre Seigneur qui vous a créés.**",
        reference: "Coran, al-Baqara, 2:21",
      },
      {
        type: "verse",
        arabic: "**يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ**",
        translation: "**Ô vous qui croyez, le jeûne vous est prescrit.**",
        reference: "Coran, al-Baqara, 2:183",
      },
      {
        type: "p",
        text: "Ces deux versets, dans une même sourate à dominante médinoise, illustrent bien pourquoi les savants ne se contentent jamais d'un simple découpage par sourate entière. Al-Baqara est médinoise dans son ensemble, mais elle contient un vocatif « Ô hommes » qui rappelle un mode d'adresse mecquois, signe que la sourate reprend des thèmes universels avant d'aborder la législation propre à la nouvelle communauté.",
      },
      { type: "h2", text: "Pourquoi cette science n'est pas accessoire" },
      {
        type: "focus",
        kind: "repere",
        title: "Une clé de compréhension du naskh",
        text: "Beaucoup de cas d'abrogation supposent de savoir quel texte est antérieur à l'autre. Sans la chronologie mecquois/médinois, aucune détermination de nāsikh et de mansūkh ne serait possible.",
      },
      {
        type: "p",
        text: "Cette science éclaire également l'évolution graduelle de la législation, notamment sur l'interdiction du vin ou l'organisation du jihad, qui n'ont pas été imposées d'un bloc mais introduites par étapes correspondant à la maturation de la communauté. Lire un verset mecquois comme s'il portait une législation d'État, ou lire un verset médinois comme s'il s'adressait à des individus isolés sans autorité constituée, produit des contresens pratiques aux conséquences sérieuses.",
      },
      {
        type: "quote",
        text: "قالت عائشة رضي الله عنها: **إنما نزل أول ما نزل منه سورة من المفصل فيها ذكر الجنة والنار حتى إذا ثاب الناس إلى الإسلام نزل الحلال والحرام**.\n\n‌ʿĀʾisha, qu'Allāh l'agrée, a dit : **« Ce qui est descendu en premier, ce sont des sourates du Mufaṣṣal mentionnant le Paradis et l'Enfer ; puis, quand les gens se sont tournés vers l'Islam, le licite et l'illicite sont descendus. »**",
        source: "Rapporté par al-Bukhārī",
      },
      {
        type: "chronologie",
        title: "Repères de la progression générale",
        events: [
          { date: "Mecque, années 1-10 de la prophétie", label: "Fondements de la foi", note: "Unicité, résurrection, récits édifiants, versets brefs et intenses." },
          { date: "Médine, an 1-2 H", label: "Constitution de la communauté", note: "Premières lois sociales, orientation de la qibla, jeûne." },
          { date: "Médine, an 3-9 H", label: "Législation développée", note: "Héritage, pénal, traités, organisation du jihad." },
        ],
      },
      {
        type: "objection",
        objection: "Ce classement ne repose-t-il pas surtout sur des avis d'exégètes, sujets à divergence ?",
        reponse:
          "Il existe en effet des divergences sur des sourates ou des versets précis, mais elles portent sur des cas limités, non sur le principe. La masse du Coran fait l'objet d'un consensus solide quant à son caractère mecquois ou médinois, transmis par les Compagnons eux-mêmes qui ont vécu la révélation et savaient où et quand chaque passage était descendu. Les cas discutés sont précisément signalés comme tels dans les ouvrages spécialisés, ce qui montre le sérieux méthodologique de cette discipline plutôt que sa fragilité.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le classement mecquois/médinois n'est pas une curiosité d'érudits mais une grille de lecture indispensable, qui restitue à chaque verset son contexte d'énonciation et évite de faire dire au texte plus ou moins que ce qu'il dit dans l'ordre où Dieu l'a fait descendre.",
      },
    ],
  },
  {
    slug: "occasions-of-revelation",
    title: "Asbāb al-nuzūl : quand le contexte éclaire et quand il enferme",
    arabic: "أسباب النزول",
    intro:
      "Connaître l'occasion de la révélation d'un verset peut dissoudre en un instant des siècles de malentendus. Mais cette même connaissance, mal maniée, peut aussi devenir un carcan qui réduit une parole universelle à un fait divers du passé. La règle fixée par les savants trace la frontière exacte entre ces deux usages.",
    body: [
      { type: "h2", text: "Un outil, pas une clôture" },
      {
        type: "p",
        text: "Un sabab al-nuzūl est un événement, une question, ou une situation qui a précédé et motivé la descente d'un verset. Cette connaissance appartient au patrimoine transmis par les Compagnons, témoins directs de la révélation, et elle constitue l'une des sources les plus sûres pour fixer le sens d'un passage autrement ambigu.",
      },
      {
        type: "p",
        text: "Mais la règle fondamentale que les uṣūlistes n'ont cessé de rappeler inverse l'intuition du grand public : **on ne s'arrête pas à la cause particulière, on suit la portée générale du mot**. Un verset descendu à propos d'un homme précis engage, sauf preuve contraire, tous les croyants placés dans une situation semblable jusqu'au Jour dernier.",
      },
      {
        type: "quote",
        text: "قال العلماء: **العبرة بعموم اللفظ لا بخصوص السبب**.\n\nLes savants ont établi ce principe : **« La considération est à la généralité du mot, non à la spécificité de la cause. »**",
        source: "Principe classique d'uṣūl al-tafsīr",
      },
      { type: "h2", text: "Un exemple qui illustre la règle" },
      {
        type: "verse",
        arabic: "إِنَّ ٱلَّذِينَ يَرْمُونَ ٱلْمُحْصَنَٰتِ ٱلْغَٰفِلَٰتِ ٱلْمُؤْمِنَٰتِ **لُعِنُوا۟ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ**",
        translation:
          "Ceux qui lancent des accusations contre des femmes chastes, insouciantes et croyantes **sont maudits ici-bas et dans l'au-delà**.",
        reference: "Coran, al-Nūr, 24:23",
      },
      {
        type: "p",
        text: "Ce verset est descendu à l'occasion de l'accusation calomnieuse portée contre ʿĀʾisha, qu'Allāh l'agrée, lors de l'événement connu sous le nom de ḥadīth al-ifk. Personne pourtant ne restreint ce verset à sa seule personne : la règle qu'il pose vaut pour toute femme croyante et chaste calomniée, en tout temps. Restreindre le verset à ʿĀʾisha seule serait une lecture absurde qui viderait le texte de sa portée législative.",
      },
      {
        type: "schema",
        title: "Du fait particulier à la règle générale",
        variant: "flow",
        nodes: [
          { label: "Événement historique", note: "Une situation datée, connue par transmission." },
          { label: "Verset révélé", note: "Formulé en termes généraux, souvent sans nommer personne." },
          { label: "Règle extraite", arabic: "الحكم العام", note: "Applicable à tout cas semblable, indépendamment de l'occasion initiale." },
        ],
        caption: "Le sabab éclaire l'intention, mais ne referme pas le champ d'application du mot.",
      },
      { type: "h2", text: "Quand le contexte devient nécessaire" },
      {
        type: "p",
        text: "À l'inverse, il existe des versets dont le sens reste opaque, voire trompeur, sans la connaissance de leur occasion. C'est le cas de certains versets touchant des disputes entre Compagnons, ou de passages qui semblent contenir un blâme général alors qu'ils visent un comportement isolé et condamné par ailleurs. Sans le sabab, un lecteur pressé pourrait généraliser une critique ponctuelle en jugement collectif, ce qui serait une erreur inverse et tout aussi grave.",
      },
      {
        type: "spectre",
        title: "Le bon usage du sabab al-nuzūl",
        left: "Ignorer totalement le contexte",
        right: "Enfermer le verset dans son contexte",
        markers: [
          { label: "Lecture juste", position: 50, note: "Le sabab informe le sens sans limiter la portée du mot." },
          { label: "Anachronisme", position: 5, note: "Appliquer une règle de guerre à toute situation de paix." },
          { label: "Réductionnisme historiciste", position: 95, note: "Dire qu'un verset ne « valait » que pour son époque." },
        ],
      },
      {
        type: "objection",
        objection: "Si le verset dépasse toujours sa cause, à quoi bon connaître les asbāb al-nuzūl ?",
        reponse:
          "Le sabab reste indispensable pour trois raisons au moins : il permet souvent de trancher entre plusieurs sens grammaticalement possibles, il révèle la sagesse et la miséricorde qui accompagnent la loi, et il empêche les lectures anachroniques qui prêteraient à un verset une portée que son contexte exclut formellement. Connaître la cause n'enferme pas le sens, il en garantit la justesse avant que l'on en tire la portée générale.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un double excès à éviter",
        text: "Certains veulent tout expliquer par le sabab et nient toute portée générale ; d'autres, à l'inverse, ignorent le sabab et projettent sur le verset des lectures modernes déconnectées de son ancrage historique. La méthode des salaf tient les deux bouts ensemble.",
      },
      { type: "h2", text: "Une science transmise, non inventée" },
      {
        type: "p",
        text: "Les récits d'asbāb al-nuzūl ne sont pas le fruit de suppositions tardives : ils reposent sur des chaînes de transmission examinées avec la même rigueur que les récits juridiques. Al-Wāḥidī, puis al-Suyūṭī dans Lubāb al-nuqūl, ont rassemblé ces récits en écartant systématiquement ce qui n'était pas solidement attesté, conscients du risque de voir fleurir des anecdotes inventées pour justifier telle ou telle lecture partisane.",
      },
      {
        type: "p",
        text: "C'est pourquoi tout sabab avancé sans chaîne fiable doit être traité avec la plus grande prudence, quelle que soit sa popularité dans certains cercles de prédication contemporaine. Le sérieux de cette science tient précisément à sa rigueur documentaire, non à la vraisemblance narrative d'une histoire.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le sabab al-nuzūl est une lumière projetée sur le sens, non une frontière tracée autour de lui. Bien employé, il révèle la sagesse du texte sans jamais l'enfermer dans l'anecdote qui l'a fait descendre.",
      },
    ],
  },
  {
    slug: slugifySujet("Combien de versets sont véritablement abrogés ?"),
    title: "Combien de versets sont véritablement abrogés ?",
    intro:
      "Les chiffres avancés varient de façon spectaculaire selon les auteurs : certains parlent de plus de deux cents versets abrogés, d'autres n'en retiennent qu'une poignée. Cet écart considérable ne tient pas à des désaccords sur les textes eux-mêmes, mais à des méthodes de comptage radicalement différentes.",
    body: [
      { type: "h2", text: "Pourquoi les chiffres divergent autant" },
      {
        type: "p",
        text: "Les premiers ouvrages spécialisés, comme celui d'al-Naḥḥās au IVe siècle de l'hégire, recensaient plus de cent trente-huit versets abrogés. D'autres compilateurs sont allés jusqu'à en compter plus de deux cent cinquante. Pourtant, à mesure que la science des uṣūl s'est affinée, ce nombre n'a cessé de diminuer sous l'examen critique des générations suivantes.",
      },
      {
        type: "p",
        text: "La raison en est simple : beaucoup de cas qualifiés d'abrogation n'en étaient pas. Un verset qui restreint la portée d'un autre n'abroge rien, il **particularise** ; un verset qui pose une condition n'abroge rien, il **conditionne** ; un verset qui s'applique à un cas différent d'un autre ne le contredit pas, il le **complète**. Ce n'est que lorsque toutes ces voies de conciliation échouent que l'on doit, en dernier recours, parler de naskh.",
      },
      {
        type: "comparaison",
        title: "Confusions fréquentes avec le naskh",
        columns: ["Opération réelle", "Pourquoi ce n'est pas un naskh"],
        rows: [
          { criterion: "Particularisation", cells: ["Un verset général, un verset spécifique", "Les deux règles coexistent, chacune sur son champ"] },
          { criterion: "Conditionnement", cells: ["Un jugement soumis à une condition explicite", "Le jugement s'applique quand la condition est réunie, sans contradiction"] },
          { criterion: "Complémentarité", cells: ["Deux versets sur des cas voisins mais distincts", "Aucune contradiction n'existe entre eux"] },
        ],
      },
      { type: "h2", text: "La réduction opérée par les chercheurs rigoureux" },
      {
        type: "degres",
        title: "De l'inventaire maximal à la liste vérifiée",
        direction: "desc",
        degres: [
          { label: "Plus de 250 versets", note: "Comptage large de certains commentateurs anciens, incluant tout ce qui semblait en tension." },
          { label: "Environ 138 versets", note: "Décompte d'al-Naḥḥās, encore englobant, dans al-Nāsikh wa-l-Mansūkh." },
          { label: "Environ 20 versets", note: "Décompte resserré par des critiques plus tardifs, écartant les cas de particularisation." },
          { label: "Une poignée de cas certains", note: "Position d'al-Shinqīṭī et d'autres chercheurs contemporains, exigeant contradiction et postériorité prouvées." },
        ],
      },
      {
        type: "verse",
        arabic: "**لَّا تَجِدُ قَوْمًا يُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ يُوَآدُّونَ مَنْ حَآدَّ ٱللَّهَ وَرَسُولَهُۥ**",
        translation:
          "**Tu ne trouveras pas de gens croyant en Allāh et au Jour dernier, éprouvant de l'amitié pour ceux qui s'opposent à Allāh et à Son Messager.**",
        reference: "Coran, al-Mujādala, 58:22",
      },
      {
        type: "p",
        text: "Un tel verset a parfois été présenté par des exégètes anciens comme abrogé par des versets d'ordre plus général sur la miséricorde envers les proches non musulmans. Une lecture plus rigoureuse montre qu'il n'y a en réalité aucune contradiction : chaque verset porte sur un registre différent, l'amitié du cœur et de l'alliance d'un côté, la bienfaisance et la justice familiale de l'autre. Nul besoin d'invoquer un naskh là où la conciliation est possible.",
      },
      {
        type: "quote",
        text: "قال الشيخ محمد الأمين الشنقيطي رحمه الله: **الأصل عدم النسخ حتى يقوم دليل يوجب المصير إليه**.\n\nAl-Shinqīṭī a dit : **« Le principe de base est l'absence d'abrogation, jusqu'à ce qu'une preuve impose d'y recourir. »**",
        source: "Aḍwāʾ al-bayān",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le principe directeur",
        text: "En matière de naskh, la charge de la preuve pèse toujours sur celui qui prétend l'abrogation, jamais sur celui qui cherche à concilier les textes.",
      },
      { type: "h2", text: "Les cas les plus solidement établis" },
      {
        type: "p",
        text: "Parmi les cas qui résistent à cet examen rigoureux figure le changement de qibla, de Jérusalem vers La Mecque, qui constitue un exemple d'école tant la contradiction et la postériorité y sont manifestes et attestées par une transmission massive. De même, le verset imposant initialement dix combattants patients contre cent ennemis a été explicitement allégé par le verset suivant qui ramène ce rapport à un contre deux, avec une formule qui indique elle-même l'allègement.",
      },
      {
        type: "verse",
        arabic: "ٱلْـَٰٔنَ خَفَّفَ ٱللَّهُ عَنكُمْ وَعَلِمَ أَنَّ فِيكُمْ ضَعْفًا **فَإِن يَكُن مِّنكُم مِّا۟ئَةٌ صَابِرَةٌ يَغْلِبُوا۟ مِا۟ئَتَيْنِ**",
        translation:
          "Maintenant, Allāh a allégé votre charge, sachant qu'il y a de la faiblesse en vous. **S'il y a cent d'entre vous endurants, ils vaincront deux cents.**",
        reference: "Coran, al-Anfāl, 8:66",
      },
      {
        type: "objection",
        objection: "Pourquoi les savants médiévaux ont-ils gonflé la liste si le principe de prudence était déjà connu ?",
        reponse:
          "Il ne s'agit pas d'un manque de rigueur mais d'une évolution méthodologique progressive. Les premiers recueils, souvent compilatoires, rassemblaient tout avis rapporté sans toujours le soumettre à un examen critique complet. Les générations suivantes, en particulier autour des uṣūl al-fiqh, ont raffiné les critères de contradiction et de postériorité, ce qui a naturellement réduit la liste. Ce resserrement n'est donc pas une remise en cause de la science ancienne, mais son aboutissement naturel.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le nombre de versets véritablement abrogés est bien plus restreint que ne le suggèrent certains inventaires anciens ou certains discours populaires. Cette rareté, loin d'affaiblir la notion de naskh, en confirme le statut d'exception rigoureusement encadrée, jamais de principe général appliqué à la légère.",
      },
    ],
  },
  {
    slug: slugifySujet("La cohérence d'une sourate"),
    title: "La cohérence d'une sourate",
    arabic: "المناسبة",
    intro:
      "Une lecture superficielle du Coran peut donner l'impression d'un texte fait de fragments juxtaposés sans lien apparent. La science de la munāsaba, la cohérence entre les versets et les sourates, montre au contraire une architecture réfléchie, où chaque passage répond à ce qui précède et prépare ce qui suit.",
    body: [
      { type: "h2", text: "Une science tardive, mais fondée" },
      {
        type: "p",
        text: "La munāsaba n'apparaît comme discipline autonome que chez des auteurs comme al-Biqāʿī, au IXe siècle de l'hégire, avec son immense tafsīr Naẓm al-durar. Cela ne signifie pas que la cohérence du texte est une découverte tardive : les premiers exégètes en avaient conscience, mais ils ne l'avaient pas systématisée comme discipline à part entière.",
      },
      {
        type: "p",
        text: "Cette science part d'un postulat théologique simple : si le Coran est la Parole de Dieu, organisée sous Sa direction et fixée dans son ordre par le Prophète ﷺ lui-même selon l'enseignement de Jibrīl, alors cet ordre n'est pas arbitraire. **Chercher la cohérence, c'est chercher la sagesse de cet arrangement**, non l'imposer artificiellement là où elle ferait défaut.",
      },
      { type: "h2", text: "Un exemple d'ouverture de sourate" },
      {
        type: "verse",
        arabic: "ٱلٓمٓ ۝ ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        translation: "Alif Lām Mīm. Voici le Livre, nul doute en lui, guidée pour les pieux.",
        reference: "Coran, al-Baqara, 2:1-2",
      },
      {
        type: "p",
        text: "Cette ouverture répond directement à la fin de la sourate précédente, al-Fātiḥa, où le croyant demande à être guidé sur le droit chemin. À peine cette demande formulée, la sourate suivante s'ouvre en désignant précisément la réponse : ce Livre-ci est la guidée. Cette articulation n'est pas une coïncidence de mise en page mais un dialogue voulu entre deux sourates consécutives, souligné par la quasi-totalité des commentateurs classiques.",
      },
      {
        type: "schema",
        title: "Un fil qui relie deux sourates",
        variant: "flow",
        nodes: [
          { label: "Fin d'al-Fātiḥa", arabic: "اهدنا الصراط المستقيم", note: "Une demande de guidée adressée à Dieu." },
          { label: "Ouverture d'al-Baqara", arabic: "هدى للمتقين", note: "La réponse immédiate : ce Livre est la guidée demandée." },
        ],
        caption: "Un exemple canonique de munāsaba entre deux sourates.",
      },
      { type: "h2", text: "La cohérence à l'intérieur d'une même sourate" },
      {
        type: "p",
        text: "La munāsaba ne se limite pas aux transitions entre sourates : elle éclaire aussi l'agencement interne d'une même sourate, où récits, lois et exhortations alternent selon une logique thématique précise. Sourate al-Baqara, par exemple, articule le récit d'Adam, celui des Fils d'Israël, puis la législation de la nouvelle communauté, formant une progression qui va de la leçon universelle à l'application concrète.",
      },
      {
        type: "cycle",
        title: "Le mouvement d'ensemble d'une longue sourate médinoise",
        center: "Édification de la communauté",
        steps: [
          { label: "Rappel des nations passées", note: "Adam, les Fils d'Israël : leçons universelles." },
          { label: "Fondements de la foi", note: "Unicité, révélation, épreuve." },
          { label: "Législation pratique", note: "Jeûne, mariage, commerce, héritage." },
          { label: "Exhortation finale", note: "Appel à la crainte de Dieu et rappel du Jugement." },
        ],
        caption: "Un cycle récurrent dans plusieurs longues sourates médinoises.",
      },
      {
        type: "quote",
        text: "قال البقاعي رحمه الله: **علم المناسبة علم شريف تعنو له الجباه... به يعرف حسن نظم القرآن ووجه انتظامه**.\n\nAl-Biqāʿī a dit : **« La science de la munāsaba est une science noble devant laquelle s'inclinent les fronts... par elle se connaît la beauté de l'agencement du Coran et la façon dont il s'articule. »**",
        source: "Naẓm al-durar fī tanāsub al-āyāt wa-l-suwar",
      },
      {
        type: "objection",
        objection: "Chercher un lien entre tous les versets ne force-t-il pas parfois le texte à dire ce qu'il ne dit pas ?",
        reponse:
          "Ce risque est réel et plusieurs savants l'ont signalé, notamment envers certains excès d'al-Biqāʿī lui-même, accusé par certains contemporains d'aller chercher des liens trop subtils pour être certains. La règle prudente consiste à retenir les cohérences manifestes, appuyées par le vocabulaire, la thématique ou une transmission des salaf, et à s'abstenir de systématiser un lien partout où il n'est qu'une possibilité parmi d'autres. La munāsaba est un outil de lecture, non une obligation de trouver du sens à chaque juxtaposition.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Cohérence n'est pas linéarité",
        text: "Un texte cohérent n'est pas nécessairement un texte qui avance en ligne droite. Le Coran procède souvent par reprises, échos et retours, une architecture plus proche du tissage que du récit chronologique.",
      },
      { type: "h2", text: "Une aide précieuse à l'interprétation" },
      {
        type: "p",
        text: "Au-delà de l'intérêt esthétique, la munāsaba rend des services concrets à l'interprète : elle aide à choisir entre plusieurs sens possibles d'un mot en tenant compte de son environnement immédiat, elle éclaire pourquoi tel récit suit tel autre, et elle permet parfois de comprendre la sagesse d'un ordre législatif, comme la mention du jeûne juste après les versets sur la loi du talion et les rapports entre communautés.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La cohérence d'une sourate n'est pas une théorie imposée au texte, mais une observation patiente de son architecture. Elle rappelle au lecteur que chaque passage du Coran s'inscrit dans un ensemble voulu, et que comprendre un verset isolément, sans égard à ce qui l'entoure, revient souvent à n'en saisir qu'une part.",
      },
    ],
  },
  {
    slug: slugifySujet("Sourate al-Kahf : quatre récits, un seul argument"),
    title: "Sourate al-Kahf : quatre récits, un seul argument",
    intro:
      "Quatre histoires, en apparence disparates — des jeunes gens endormis dans une caverne, un possesseur de deux jardins, Moïse et un serviteur mystérieux, un roi qui parcourt la terre. Pourtant, les exégètes s'accordent à y voir une seule et même démonstration, patiemment déclinée sous quatre formes.",
    body: [
      { type: "h2", text: "Une sourate liée à une épreuve précise" },
      {
        type: "p",
        text: "La tradition rapporte que sourate al-Kahf répond à trois questions posées aux polythéistes de La Mecque par les gens du Livre, portant sur les jeunes gens de la caverne, sur un homme qui parcourut la terre d'un bout à l'autre, et sur la nature de l'esprit. Ce contexte d'épreuve intellectuelle et religieuse commande la lecture de toute la sourate, conçue comme une réponse organisée à quatre tentations qui menacent la foi.",
      },
      {
        type: "degres",
        title: "Les quatre épreuves de la sourate",
        arabic: "الفتن الأربع",
        degres: [
          { label: "L'épreuve de la religion", note: "Les gens de la caverne, menacés dans leur foi par le pouvoir." },
          { label: "L'épreuve de la richesse", note: "Le possesseur des deux jardins, aveuglé par ses biens." },
          { label: "L'épreuve du savoir", note: "Moïse face à un serviteur détenteur d'une science que la raison seule ne saisit pas." },
          { label: "L'épreuve du pouvoir", note: "Dhū l-Qarnayn, qui use de sa puissance dans la justice, non l'orgueil." },
        ],
      },
      { type: "h2", text: "Premier récit : la fuite pour préserver la foi" },
      {
        type: "verse",
        arabic: "إِنَّهُمْ فِتْيَةٌ ءَامَنُوا۟ بِرَبِّهِمْ **وَزِدْنَٰهُمْ هُدًى**",
        translation: "Ce sont des jeunes gens qui crurent en leur Seigneur, et **Nous les guidâmes davantage**.",
        reference: "Coran, al-Kahf, 18:13",
      },
      {
        type: "p",
        text: "Les jeunes de la caverne choisissent l'exil plutôt que le reniement, illustrant le principe selon lequel la foi peut exiger de tout sacrifier, y compris son confort et sa société. Ibn Kathīr souligne que Dieu ne se contente pas de préserver leur croyance : Il **augmente leur guidée**, montrant que la fidélité dans l'épreuve attire un surcroît de faveur divine, non une simple survie spirituelle.",
      },
      { type: "h2", text: "Deuxième récit : l'illusion de la richesse" },
      {
        type: "verse",
        arabic: "وَدَخَلَ جَنَّتَهُۥ وَهُوَ ظَالِمٌ لِّنَفْسِهِۦ قَالَ **مَآ أَظُنُّ أَن تَبِيدَ هَٰذِهِۦٓ أَبَدًا**",
        translation:
          "Il entra dans son jardin, injuste envers lui-même, et dit : **« Je ne pense pas que ceci puisse jamais périr. »**",
        reference: "Coran, al-Kahf, 18:35",
      },
      {
        type: "p",
        text: "Le possesseur des deux jardins oublie que la richesse est une faveur passagère, non une possession éternelle. Son erreur n'est pas d'avoir des biens, mais d'y voir une garantie contre le Décret divin, un aveuglement que le récit sanctionne par la ruine soudaine de son jardin, rappel adressé à quiconque confond abondance et pérennité.",
      },
      { type: "h2", text: "Troisième récit : les limites du savoir apparent" },
      {
        type: "quote",
        text: "قال الخضر لموسى عليهما السلام: **إنك لن تستطيع معي صبرا. وكيف تصبر على ما لم تحط به خبرا**.\n\nAl-Khiḍr dit à Moïse, sur eux la paix : **« Tu ne pourras jamais avoir de patience avec moi. Et comment aurais-tu patience sur ce que tu n'embrasses pas par ta connaissance ? »**",
        source: "Coran, al-Kahf, 18:67-68",
      },
      {
        type: "p",
        text: "Ce récit central montre qu'un prophète doté d'une science immense peut se heurter à des actes dont la sagesse lui échappe momentanément, faute d'en connaître l'issue. La leçon dépasse le cas de Moïse : elle invite tout croyant à accepter qu'une partie de la sagesse divine reste hors de portée du jugement humain immédiat, sans que cela n'ébranle la confiance en la justice de Dieu.",
      },
      { type: "h2", text: "Quatrième récit : le pouvoir mis au service du bien" },
      {
        type: "p",
        text: "Dhū l-Qarnayn, à l'opposé des tyrans que craint son époque, utilise sa puissance considérable pour établir la justice, protéger les faibles et repousser la corruption, sans jamais s'attribuer sa réussite à lui-même. Il attribue explicitement chaque victoire à la miséricorde de son Seigneur, formant ainsi le contrepoint parfait à l'orgueil du possesseur des deux jardins.",
      },
      {
        type: "comparaison",
        title: "Deux hommes de pouvoir, deux issues",
        columns: ["Le possesseur des jardins", "Dhū l-Qarnayn"],
        rows: [
          { criterion: "Attitude face aux biens", cells: ["S'en attribue le mérite", "Les rapporte à la faveur divine"] },
          { criterion: "Usage du pouvoir", cells: ["Aucun pouvoir réel, orgueil personnel", "Puissance mise au service de la justice"] },
          { criterion: "Issue du récit", cells: ["Ruine et regret", "Louange et rappel du Jugement dernier"] },
        ],
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le fil conducteur",
        text: "Les quatre récits déclinent une même vérité : rien de ce monde — religion menacée, richesse, science, pouvoir — ne doit devenir une fin en soi ; tout doit rester rapporté à Dieu et à la préparation de l'au-delà.",
      },
      {
        type: "objection",
        objection: "Le lien entre ces quatre histoires n'est-il pas une construction a posteriori des commentateurs ?",
        reponse:
          "La sourate elle-même fournit l'indice de cette unité : elle s'ouvre par une mise en garde contre ceux qui se réjouissent de la vie d'ici-bas en pensant bien agir, et elle se referme sur l'annonce du Jugement où les œuvres seront pesées. Entre ces deux bornes, chaque récit illustre une manière différente de se laisser accaparer par ce monde. Ce n'est donc pas une lecture forcée mais la structure même de la sourate qui impose ce fil conducteur, comme le relèvent unanimement les commentateurs classiques.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Sourate al-Kahf n'aligne pas quatre anecdotes sans lien : elle construit, par quatre voies distinctes, une même leçon sur les tentations majeures de l'existence terrestre. C'est cette cohérence profonde qui explique la recommandation prophétique de la réciter chaque vendredi, comme rappel hebdomadaire contre les épreuves qui guettent la foi, la richesse, le savoir et le pouvoir.",
      },
    ],
  },
  {
    slug: slugifySujet("Les lettres isolées"),
    title: "Les lettres isolées",
    arabic: "الحروف المقطعة",
    intro:
      "Vingt-neuf sourates s'ouvrent par des lettres énigmatiques : Alif Lām Mīm, Yā Sīn, Ḥā Mīm, Qāf. Aucun consensus définitif n'a jamais fixé leur sens exact, et les plus grands savants ont préféré la prudence à la spéculation. Ce silence choisi est lui-même une leçon de méthode.",
    body: [
      { type: "h2", text: "Un phénomène unique dans le Coran" },
      {
        type: "p",
        text: "Ces combinaisons de lettres, appelées al-ḥurūf al-muqaṭṭaʿa, ouvrent vingt-neuf sourates et se présentent sous des formes variées : une seule lettre comme Ṣād ou Qāf, deux lettres comme Ṭā Hā, jusqu'à cinq lettres comme Kāf Hā Yā ʿAyn Ṣād. Elles sont récitées lettre par lettre, non comme un mot, ce qui souligne d'emblée leur statut à part dans le texte coranique.",
      },
      {
        type: "p",
        text: "Les Compagnons eux-mêmes n'ont pas laissé de tradition unanime sur leur signification précise, ce qui a conduit les savants ultérieurs à classer cette question parmi ce que l'on appelle **al-mutashābih**, les versets dont le sens précis échappe à la certitude humaine, sans que cela affecte en rien la compréhension du message général du Coran.",
      },
      { type: "h2", text: "Les grandes hypothèses avancées" },
      {
        type: "comparaison",
        title: "Principales positions des exégètes",
        columns: ["Position", "Argument principal"],
        rows: [
          { criterion: "Science exclusive de Dieu", cells: ["Ibn ʿAbbās (dans un rapport), certains salaf", "Suivre l'exemple des « enracinés dans la science » qui disent : nous y croyons"] },
          { criterion: "Défi de style (iʿjāz)", cells: ["Nombreux exégètes classiques", "Ces lettres, base de la langue arabe, montrent l'incapacité des hommes à composer un texte semblable à partir des mêmes éléments"] },
          { criterion: "Attirer l'attention des auditeurs", cells: ["Al-Zamakhsharī et d'autres", "Une rupture de rythme qui capte l'oreille de ceux qui s'apprêtaient à ne pas écouter"] },
          { criterion: "Noms de sourates", cells: ["Usage constaté", "Elles servent concrètement à désigner et distinguer les sourates entre elles"] },
        ],
      },
      {
        type: "verse",
        arabic: "الٓمٓ ۝ **ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ**",
        translation: "Alif Lām Mīm. **Voici le Livre, nul doute en lui.**",
        reference: "Coran, al-Baqara, 2:1-2",
      },
      {
        type: "p",
        text: "L'argument le plus solide, retenu par de nombreux commentateurs dont Ibn Kathīr, relie ces lettres au thème de l'inimitabilité du Coran : presque toutes les sourates qui commencent par des lettres isolées évoquent, dans les versets qui suivent immédiatement, le Coran lui-même ou la révélation. Le message implicite serait alors : ce Livre est composé des mêmes lettres que celles que vous employez chaque jour, et pourtant vous êtes incapables d'en produire l'équivalent.",
      },
      {
        type: "schema",
        title: "Le lien constant avec le thème du Livre",
        variant: "flow",
        nodes: [
          { label: "Lettres isolées", note: "Composées des sons de base de la langue arabe." },
          { label: "Mention immédiate du Coran", note: "Presque toujours dans le verset qui suit." },
          { label: "Défi implicite", arabic: "التحدي", note: "Ces mêmes lettres, et pourtant l'inimitabilité du texte." },
        ],
        caption: "Une régularité frappante que les exégètes n'ont pas manqué de relever.",
      },
      { type: "h2", text: "La position de prudence des salaf" },
      {
        type: "quote",
        text: "قال أبو بكر الصديق رضي الله عنه فيما يُروى: **في كل كتاب سرّ، وسرّ الله في القرآن أوائل السور**.\n\nOn rapporte d'Abū Bakr al-Ṣiddīq, qu'Allāh l'agrée : **« Chaque Livre a un secret, et le secret de Dieu dans le Coran, ce sont les débuts des sourates. »**",
        source: "Rapporté dans les recueils d'exégèse anciens",
      },
      {
        type: "p",
        text: "Cette parole, quelle que soit sa force de transmission, résume l'attitude adoptée par une large part des salaf : reconnaître un sens voulu par Dieu sans prétendre le cerner totalement. Cette position s'appuie directement sur le verset d'Āl ʿImrān qui distingue les versets clairs des versets ambigus, et qui loue ceux qui, face à l'ambigu, disent simplement : « Nous y croyons, tout vient de notre Seigneur. »",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Se garder des lectures ésotériques",
        text: "Certains courants, notamment chez des ésotéristes ou des numérologues, ont voulu tirer de ces lettres des calculs sur la durée du monde ou des messages cachés. Cette voie a été fermement rejetée par les savants sunnites, qui y voient une porte ouverte à l'arbitraire le plus total.",
      },
      {
        type: "objection",
        objection: "N'est-il pas insatisfaisant que le Coran contienne des passages dont personne ne connaît le sens exact ?",
        reponse:
          "Cette présence de l'ambigu n'est pas une faiblesse du texte mais une épreuve pour le cœur, comme le rappelle le verset d'Āl ʿImrān : ceux dont le cœur est enclin à la déviance s'attachent à l'ambigu pour semer le doute, tandis que les enracinés dans la science s'y soumettent avec confiance. Le sens général du message, lui, n'est nullement obscur : la loi, la croyance, l'histoire du salut sont exposées avec une clarté totale. L'ambigu ne touche qu'une portion marginale, volontairement laissée à la science de Dieu.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les lettres isolées demeurent l'un des mystères assumés du texte coranique. Loin d'être une lacune, elles enseignent au lecteur une humilité méthodologique essentielle : savoir reconnaître les limites de sa science, sans que cela n'entame en rien sa certitude sur l'essentiel du message.",
      },
    ],
  },
  {
    slug: slugifySujet("Les récits coraniques : leur fonction, non leur chronique"),
    title: "Les récits coraniques : leur fonction, non leur chronique",
    arabic: "القصص القرآني",
    intro:
      "Le Coran raconte l'histoire de Moïse plusieurs dizaines de fois, chaque fois différemment. Un lecteur habitué aux chroniques historiques y verrait des redites ou des contradictions. Mais le Coran n'écrit pas l'histoire pour elle-même : il la met au service d'un argument, ce qui change tout dans la manière de la lire.",
    body: [
      { type: "h2", text: "Le récit comme argument, non comme archive" },
      {
        type: "p",
        text: "Contrairement à un ouvrage d'histoire qui viserait l'exhaustivité chronologique, le Coran sélectionne dans chaque récit les éléments qui servent son propos immédiat. C'est pourquoi l'histoire de Moïse racontée dans sourate Ṭā Hā met l'accent sur des détails absents de la version donnée dans sourate al-Shuʿarāʾ, sans qu'il y ait la moindre contradiction : chaque version choisit ses focales selon le message de la sourate qui l'accueille.",
      },
      {
        type: "quote",
        text: "قال ابن تيمية رحمه الله: **القرآن ليس كتاب تاريخ يستوعب الوقائع، بل كتاب هداية يسوق منها ما فيه عبرة**.\n\nIbn Taymiyya a dit, en substance : **« Le Coran n'est pas un livre d'histoire qui recense les événements, mais un livre de guidée qui en tire ce qui contient une leçon. »**",
        source: "D'après les principes exposés dans Muqaddima fī Uṣūl al-Tafsīr",
      },
      { type: "h2", text: "Un même récit, des focales différentes" },
      {
        type: "comparaison",
        title: "L'histoire de Moïse selon deux sourates",
        columns: ["Sourate Ṭā Hā", "Sourate al-Shuʿarāʾ"],
        rows: [
          { criterion: "Accent principal", cells: ["L'expérience intime de la révélation à Moïse", "L'affrontement public avec Pharaon et les magiciens"] },
          { criterion: "Détails retenus", cells: ["Le buisson, l'ordre de retirer ses sandales, le bâton", "Le débat devant la cour, la conversion des magiciens"] },
          { criterion: "Fonction dans la sourate", cells: ["Réconforter le Prophète ﷺ dans sa mission solitaire", "Montrer la victoire de la vérité sur l'arrogance collective"] },
        ],
      },
      {
        type: "verse",
        arabic: "**نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ ٱلْقَصَصِ** بِمَآ أَوْحَيْنَآ إِلَيْكَ هَٰذَا ٱلْقُرْءَانَ",
        translation:
          "**Nous te racontons le meilleur des récits** en te révélant ce Coran.",
        reference: "Coran, Yūsuf, 12:3",
      },
      {
        type: "p",
        text: "Le terme « meilleur des récits » n'est pas un jugement esthétique isolé : il annonce que l'histoire de Joseph tout entière est construite pour instruire, non pour divertir. Chaque étape — la jalousie des frères, l'épreuve de la prison, l'ascension au pouvoir, le pardon final — s'enchaîne pour illustrer la patience face à l'injustice et la reconnaissance envers Dieu au sommet de la réussite.",
      },
      { type: "h2", text: "L'absence de détails superflus" },
      {
        type: "p",
        text: "Le Coran ne nomme presque jamais les personnages secondaires, ne précise ni les dates ni les lieux exacts des événements racontés, contrairement à d'autres écritures ou traditions historiques. Le nom du roi d'Égypte à l'époque de Joseph, la ville précise où vécurent les Compagnons de la caverne, ou l'identité exacte du serviteur mystérieux de Moïse dans sourate al-Kahf ne sont jamais donnés, alors que ces détails auraient satisfait la curiosité historique.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le principe d'économie narrative",
        text: "Le Coran retient ce qui sert la leçon et omet ce qui ne la sert pas. Cette économie délibérée distingue son projet de celui d'une chronique et explique pourquoi chercher des détails absents relève souvent d'une préoccupation étrangère au texte.",
      },
      {
        type: "experiment",
        title: "Ce que révèle l'absence de nom",
        steps: [
          "Le récit de sourate al-Kahf ne nomme ni le roi injuste, ni le village visité, ni le lieu exact de la caverne.",
          "Un historien y verrait une lacune gênante à combler par la recherche.",
          "Le lecteur du Coran comprend que la leçon — endurance, humilité, patience — ne dépend d'aucun de ces détails.",
          "Fournir ces détails n'ajouterait rien à la portée universelle du récit, et pourrait même la restreindre à un cas précis.",
        ],
        conclusion: "L'omission volontaire des détails historiques sert justement l'universalité de l'enseignement moral.",
      },
      {
        type: "objection",
        objection: "Cette absence de précision ne trahit-elle pas un manque de rigueur historique ?",
        reponse:
          "Elle trahit au contraire un choix délibéré et cohérent avec la finalité du texte. Le Coran ne se présente jamais comme une source d'histoire événementielle exhaustive, mais comme une guidée qui puise dans l'histoire des leçons intemporelles. Exiger de lui la précision d'une chronique reviendrait à lui appliquer un critère étranger à son propre projet, de la même manière qu'on ne reprocherait pas à un livre de sagesse de ne pas fournir de cartes géographiques.",
      },
      { type: "h2", text: "Une constante confirmée par les récits répétés" },
      {
        type: "p",
        text: "Cette logique se vérifie aussi dans les récits qui reviennent souvent, comme celui de Noé ou d'Abraham, présents dans plusieurs sourates avec des variations d'accent selon le contexte de chaque sourate. Loin d'être des redites maladroites, ces reprises fonctionnent comme des rappels adaptés à chaque situation d'énonciation, renforçant l'idée que chaque récit sert d'abord un argument précis, avant de servir la mémoire d'un événement.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Aborder les récits coraniques comme on aborderait un livre d'histoire conduit à s'égarer dans des questions que le texte n'a jamais eu l'intention de trancher. Sa méthode est autre : choisir, dans chaque événement raconté, ce qui édifie le cœur et fortifie la foi, laissant délibérément dans l'ombre tout ce qui ne servirait qu'une curiosité étrangère à sa mission.",
      },
    ],
  },
  {
    slug: slugifySujet("Les paraboles du Coran"),
    title: "Les paraboles du Coran",
    arabic: "الأمثال",
    intro:
      "Le Coran multiplie les images : une graine qui donne sept épis, une toile d'araignée fragile, une lumière dans une niche. Ces paraboles, appelées amthāl, ne sont pas de simples ornements de style : elles constituent, selon les savants, l'un des moyens pédagogiques les plus puissants du texte révélé.",
    body: [
      { type: "h2", text: "Pourquoi Dieu recourt aux images" },
      {
        type: "verse",
        arabic: "**وَتِلْكَ ٱلْأَمْثَٰلُ نَضْرِبُهَا لِلنَّاسِ وَمَا يَعْقِلُهَآ إِلَّا ٱلْعَٰلِمُونَ**",
        translation:
          "**Ces paraboles, Nous les citons aux hommes ; mais seuls les savants les comprennent véritablement.**",
        reference: "Coran, al-ʿAnkabūt, 29:43",
      },
      {
        type: "p",
        text: "Ce verset indique une double fonction du mathal : il rend accessible une vérité abstraite en la rattachant à une réalité sensible, tout en réservant sa pleine intelligence à ceux qui réfléchissent sérieusement. La parabole n'est donc pas un simple ornement mais un test cognitif et spirituel, qui distingue celui qui s'arrête à l'image de celui qui en saisit la portée.",
      },
      {
        type: "p",
        text: "Ibn al-Qayyim consacre à ce sujet un ouvrage entier, Amthāl al-Qurʾān, où il montre que ces images fonctionnent comme des ponts entre l'intelligible et le sensible : elles permettent à l'esprit humain, naturellement plus à l'aise avec le concret, de saisir des vérités qui, énoncées abstraitement, resteraient hors de portée de beaucoup.",
      },
      { type: "h2", text: "Quelques grandes catégories de paraboles" },
      {
        type: "degres",
        title: "Ce que les paraboles illustrent le plus souvent",
        degres: [
          { label: "La valeur de l'œuvre bonne", note: "La graine qui produit sept épis, chacun portant cent grains." },
          { label: "La fragilité de ce en quoi on place sa confiance hors de Dieu", note: "La toile de l'araignée, la plus fragile des demeures." },
          { label: "La lumière de la foi dans le cœur", note: "La niche, la lampe, le verre étincelant comme un astre." },
          { label: "La vanité des œuvres sans foi", note: "La cendre emportée par un vent violent, un jour de tempête." },
        ],
      },
      {
        type: "verse",
        arabic: "مَثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ **أَنۢبَتَتْ سَبْعَ سَنَابِلَ فِى كُلِّ سُنۢبُلَةٍ مِّا۟ئَةُ حَبَّةٍ**",
        translation:
          "L'exemple de ceux qui dépensent leurs biens dans le sentier d'Allāh est semblable à un grain qui **a fait pousser sept épis, et dans chaque épi cent grains**.",
        reference: "Coran, al-Baqara, 2:261",
      },
      {
        type: "p",
        text: "Cette image agricole, immédiatement compréhensible pour une société habituée à l'agriculture, rend palpable une réalité invisible : la multiplication de la récompense divine. Elle transforme un principe théologique — Dieu multiplie la rétribution de Ses serviteurs — en une expérience presque visuelle, ancrée dans l'observation quotidienne.",
      },
      { type: "h2", text: "La parabole de la lumière" },
      {
        type: "verse",
        arabic: "ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ مَثَلُ نُورِهِۦ كَمِشْكَوٰةٍ فِيهَا مِصْبَاحٌ **ٱلْمِصْبَاحُ فِى زُجَاجَةٍ ٱلزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّىٌّ**",
        translation:
          "Allāh est la Lumière des cieux et de la terre. Le mathal de Sa lumière est comme une niche où se trouve une lampe : **la lampe est dans un verre, le verre est comme un astre étincelant**.",
        reference: "Coran, al-Nūr, 24:35",
      },
      {
        type: "p",
        text: "Ce verset, l'un des plus commentés du Coran, empile les images — niche, lampe, verre, astre, huile bénie — pour approcher, par gradation, une réalité qui dépasse la représentation directe. Al-Ghazālī en a fait le cœur d'un traité entier, tandis que les exégètes plus attachés à la méthode des salaf, comme Ibn Kathīr, ont préféré y voir avant tout une description de la lumière de la foi dans le cœur du croyant, plutôt qu'une spéculation métaphysique sur l'essence divine.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Une image n'est pas une description",
        text: "Dire que la lumière de Dieu est « comme » une lampe ne signifie en aucune façon que Dieu serait comparable à une lampe. Le mathal établit une ressemblance partielle et pédagogique, jamais une identité de nature — principe essentiel pour éviter tout anthropomorphisme dans la lecture des versets sur les attributs divins.",
      },
      {
        type: "objection",
        objection: "Recourir à des images n'affaiblit-il pas la rigueur d'un discours censé être la Parole de Dieu ?",
        reponse:
          "Bien au contraire : la pédagogie par l'image est un signe de sagesse, non de faiblesse. S'adresser à une multitude d'esprits, du plus simple au plus savant, exige des moyens variés, et l'image sensible permet de faire percevoir une vérité abstraite à qui n'aurait pas les outils d'une démonstration purement rationnelle. Le mathal ne remplace pas l'argument, il le rend accessible, et les plus grands savants n'ont jamais vu de contradiction entre la profondeur théologique du Coran et son usage constant des images.",
      },
      { type: "h2", text: "L'exemple de la vie d'ici-bas" },
      {
        type: "verse",
        arabic: "**إِنَّمَا مَثَلُ ٱلْحَيَوٰةِ ٱلدُّنْيَا كَمَآءٍ أَنزَلْنَٰهُ مِنَ ٱلسَّمَآءِ فَٱخْتَلَطَ بِهِۦ نَبَاتُ ٱلْأَرْضِ ثُمَّ أَصْبَحَ هَشِيمًا تَذْرُوهُ ٱلرِّيَٰحُ**",
        translation:
          "**L'exemple de la vie d'ici-bas est comme une eau que Nous faisons descendre du ciel : la végétation de la terre s'y mêle, puis elle devient de la paille sèche que les vents dispersent.**",
        reference: "Coran, Yūnus, 10:24",
      },
      {
        type: "p",
        text: "Cette parabole condense en une image saisonnière tout un enseignement sur l'éphémère de ce bas monde : une verdure luxuriante suivie d'une dessiccation rapide. Elle ne se contente pas d'affirmer que la vie d'ici-bas est passagère, elle en fait ressentir le rythme, le contraste entre l'abondance apparente et la disparition rapide, bien plus efficacement qu'une simple affirmation doctrinale.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les paraboles du Coran ne sont pas un habillage littéraire secondaire : elles constituent une méthode pédagogique à part entière, capable de transmettre des vérités profondes par des images accessibles à tous, tout en réservant leur pleine intelligence à ceux qui prennent la peine d'y réfléchir.",
      },
    ],
  },
  {
    slug: slugifySujet("Le tajwīd : obligation, recommandation, ou convention ?"),
    title: "Le tajwīd : obligation, recommandation, ou convention ?",
    intro:
      "Peu de sujets suscitent autant de débats feutrés dans les cercles d'enseignement que le statut exact des règles du tajwīd. Sont-elles une obligation religieuse au même titre que la prière, une simple recommandation esthétique, ou une convention pédagogique apparue après la mort du Prophète ﷺ ? La réponse des savants distingue soigneusement plusieurs niveaux.",
    body: [
      { type: "h2", text: "Ce que le mot recouvre" },
      {
        type: "lexique",
        root: "ج و د",
        transliteration: "j-w-d",
        sense: "Rendre excellent, perfectionner",
        derives: [
          { word: "tajwīd", arabic: "تجويد", gloss: "l'art de donner à chaque lettre son droit de prononciation" },
          { word: "ḥaqq al-ḥarf", arabic: "حق الحرف", gloss: "le droit de la lettre : son point d'articulation et ses attributs essentiels" },
          { word: "mustaḥaqq al-ḥarf", arabic: "مستحق الحرف", gloss: "les règles dérivées, comme l'allongement ou l'assimilation, qui varient selon le contexte" },
        ],
        note: "Cette distinction, établie par les spécialistes du tajwīd, est la clé de tout le débat sur son statut légal.",
      },
      { type: "h2", text: "Deux niveaux à ne pas confondre" },
      {
        type: "comparaison",
        title: "Deux composantes du tajwīd, deux statuts",
        columns: ["Ḥaqq al-ḥarf", "Mustaḥaqq al-ḥarf"],
        rows: [
          { criterion: "Contenu", cells: ["Point d'articulation exact, attributs essentiels de chaque lettre", "Règles fines : allongements, assimilations, nasalisations"] },
          { criterion: "Conséquence d'une erreur", cells: ["Peut changer le sens du mot ou le dénaturer gravement", "N'altère pas le sens, affecte seulement la perfection de la récitation"] },
          { criterion: "Statut retenu par la majorité", cells: ["Obligatoire (wājib)", "Recommandé (mustaḥabb), objet d'une science codifiée après coup"] },
        ],
      },
      {
        type: "p",
        text: "Confondre injuste et hijāʾ, par exemple, ou prononcer un qāf comme un kāf, peut réellement altérer le sens d'un mot ou le rendre méconnaissable. Ce premier niveau, celui de la prononciation correcte des lettres selon leur nature propre, fait l'objet d'un accord très large parmi les savants quant à son caractère obligatoire pour quiconque récite le Coran.",
      },
      {
        type: "verse",
        arabic: "**وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا**",
        translation: "**Et récite le Coran avec soin et clarté.**",
        reference: "Coran, al-Muzzammil, 73:4",
      },
      {
        type: "p",
        text: "L'ordre de tartīl, souvent invoqué comme fondement scripturaire du tajwīd, appuie surtout l'exigence d'une récitation claire, posée, articulée, à l'opposé d'une lecture précipitée et bredouillée. Il n'établit pas nécessairement chaque règle technique élaborée plus tard par les spécialistes, mais il en fournit l'esprit général et la légitimité de principe.",
      },
      { type: "h2", text: "Une codification progressive, non une invention" },
      {
        type: "chronologie",
        title: "L'évolution de la science du tajwīd",
        events: [
          { date: "Époque du Prophète ﷺ", label: "Transmission orale directe", note: "Chaque Compagnon reçoit la récitation bouche à oreille, sans manuel théorique." },
          { date: "Ier-IIe siècle H", label: "Diffusion géographique de l'Islam", note: "Multiplication des locuteurs non natifs de l'arabe, risques accrus d'erreurs de prononciation." },
          { date: "IIIe-IVe siècle H", label: "Naissance des premiers traités", note: "Systématisation des règles déjà pratiquées, pour préserver l'exactitude de la transmission." },
        ],
      },
      {
        type: "p",
        text: "Le tajwīd, en tant que science codifiée avec sa terminologie technique, n'existait pas sous cette forme du vivant du Prophète ﷺ ni des premiers Compagnons, tout simplement parce que ceux-ci, locuteurs natifs de l'arabe, appliquaient naturellement ces règles sans avoir besoin de les nommer. La codification est venue répondre à un besoin réel : l'entrée massive de non-arabophones dans l'Islam rendait nécessaire un enseignement explicite de ce qui allait de soi auparavant.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une distinction utile",
        text: "Ce n'est pas parce qu'une terminologie est tardive que la réalité qu'elle décrit l'est aussi. Le tajwīd nomme après coup des pratiques de prononciation déjà observées à l'époque prophétique, exactement comme la grammaire arabe a nommé des règles déjà suivies spontanément par les locuteurs natifs.",
      },
      {
        type: "objection",
        objection: "Si ces règles sont tardives, pourquoi les rendre obligatoires pour tous aujourd'hui ?",
        reponse:
          "Il faut distinguer, une fois encore, les deux niveaux évoqués plus haut. Ce qui est obligatoire, c'est de préserver l'exactitude du son et du sens des lettres telles qu'elles ont été transmises depuis le Prophète ﷺ, qu'on le nomme tajwīd ou non. Ce qui relève de la recommandation, ce sont les raffinements techniques ultérieurs, précieux pour la beauté et la précision de la récitation, mais dont l'omission par ignorance excusable, chez quelqu'un qui fait un effort sincère, n'invalide ni la lecture ni la prière.",
      },
      { type: "h2", text: "La place de l'effort individuel" },
      {
        type: "quote",
        text: "قال النبي صلى الله عليه وسلم: **الماهر بالقرآن مع السفرة الكرام البررة، والذي يقرأ القرآن ويتتعتع فيه وهو عليه شاق له أجران**.\n\nLe Prophète ﷺ a dit : **« Celui qui excelle dans le Coran sera avec les scribes nobles et vertueux ; et celui qui récite le Coran en bafouillant et pour qui c'est difficile aura deux récompenses. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "Ce hadith montre que la maîtrise technique n'est pas la condition unique de la valeur d'une récitation devant Dieu : l'effort sincère de celui qui peine est également récompensé, doublement même. Cela n'annule évidemment pas l'intérêt d'apprendre le tajwīd correctement, mais cela remet les choses à leur juste place : la science du tajwīd est un moyen de perfection, non une barrière qui exclurait de la récompense divine ceux qui n'y sont pas encore parvenus.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le tajwīd n'est ni une simple convention esthétique sans portée, ni une obligation uniforme dans tous ses détails. Son noyau — la prononciation correcte qui préserve le sens des lettres — relève de l'obligation ; ses raffinements techniques relèvent de l'excellence recommandée. Cette hiérarchie protège à la fois la rigueur de la transmission et la miséricorde envers celui qui apprend.",
      },
    ],
  },
  {
    slug: slugifySujet("Réciter pour comprendre, réciter pour mémoriser"),
    title: "Réciter pour comprendre, réciter pour mémoriser",
    intro:
      "Deux pratiques légitimes du rapport au Coran se côtoient parfois sans bien s'articuler : la récitation lente qui cherche le sens, et la récitation répétée qui vise la fixation dans le cœur. Beaucoup de croyants s'inquiètent de privilégier l'une au détriment de l'autre. Les textes et la pratique des salaf montrent qu'il ne s'agit pas d'un choix exclusif, mais de deux moments complémentaires.",
    body: [
      { type: "h2", text: "Deux fonctions, un même Livre" },
      {
        type: "p",
        text: "La mémorisation, ḥifẓ, et la méditation, tadabbur, ne poursuivent pas exactement le même objectif immédiat. La première fixe le texte dans la mémoire pour le rendre disponible en toute circonstance, dans la prière comme dans le rappel intérieur. La seconde s'attarde sur le sens, revient sur un verset, le compare à d'autres, cherche à en tirer un effet sur le cœur et le comportement.",
      },
      {
        type: "verse",
        arabic: "كِتَٰبٌ أَنزَلْنَٰهُ إِلَيْكَ مُبَٰرَكٌ **لِّيَدَّبَّرُوٓا۟ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَٰبِ**",
        translation:
          "Un Livre béni que Nous avons fait descendre vers toi, **afin qu'ils méditent sur ses versets et que les gens doués d'intelligence se rappellent**.",
        reference: "Coran, Ṣād, 38:29",
      },
      {
        type: "p",
        text: "Ce verset donne la finalité ultime de la révélation : la méditation qui conduit au rappel du cœur. Cela ne diminue en rien la valeur de la mémorisation, condition nécessaire pour que le texte soit disponible dans l'esprit et puisse justement y être médité, récité et transmis avec exactitude à travers les générations.",
      },
      { type: "h2", text: "Ce que rapportent les salaf sur leur propre pratique" },
      {
        type: "quote",
        text: "قال ابن مسعود رضي الله عنه: **كان الرجل منا إذا تعلم عشر آيات لم يجاوزهن حتى يعلم معانيهن والعمل بهن**.\n\nIbn Masʿūd, qu'Allāh l'agrée, a dit : **« Quand l'un d'entre nous apprenait dix versets, il ne les dépassait pas avant d'en connaître le sens et la mise en pratique. »**",
        source: "Rapporté par al-Ṭabarī et d'autres",
      },
      {
        type: "p",
        text: "Ce récit montre une méthode où mémorisation, compréhension et mise en pratique avancent de concert, à un rythme lent mais profond. Cette pédagogie contraste avec certaines pratiques contemporaines qui privilégient la vitesse de mémorisation d'un volume important de texte, parfois au détriment d'un engagement réel avec le sens.",
      },
      {
        type: "degres",
        title: "Un parcours idéal, sans exclusive",
        degres: [
          { label: "Écoute attentive", note: "Se familiariser avec le son et le rythme du texte." },
          { label: "Récitation correcte", note: "Fixer une prononciation juste, appuyée sur le tajwīd de base." },
          { label: "Mémorisation progressive", note: "Fixer le texte dans le cœur, porte d'entrée vers sa disponibilité constante." },
          { label: "Méditation régulière", note: "Revenir sur ce qui est mémorisé pour en approfondir le sens et l'effet." },
        ],
        direction: "asc",
      },
      { type: "h2", text: "Le risque de deux excès symétriques" },
      {
        type: "spectre",
        title: "Deux dérives à équilibrer",
        left: "Mémoriser sans jamais méditer",
        right: "Méditer sans jamais mémoriser",
        markers: [
          { label: "Équilibre recherché", position: 50, note: "Un texte fixé dans le cœur ET habité par la réflexion." },
          { label: "Récitation mécanique", position: 10, note: "Vitesse et volume sans lien avec le sens ni l'effet spirituel." },
          { label: "Lecture savante sans ancrage", position: 90, note: "Analyse fine du sens, mais absence de texte disponible dans le cœur, y compris pour la prière." },
        ],
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le symptôme d'un déséquilibre",
        text: "Un signe révélateur : quand la récitation n'a plus aucun effet perceptible sur le comportement ou l'état du cœur, malgré sa régularité, c'est souvent que la mémorisation a pris toute la place au détriment de la méditation. Ibn al-Qayyim rappelait que la lecture sans réflexion est comme un remède qu'on n'avale jamais.",
      },
      { type: "h2", text: "Un exemple prophétique de lenteur méditative" },
      {
        type: "quote",
        text: "عن حذيفة رضي الله عنه قال: صليت مع النبي صلى الله عليه وسلم فقرأ البقرة ثم النساء ثم آل عمران **يقرأ مترسلا، إذا مر بآية فيها تسبيح سبح، وإذا مر بسؤال سأل**.\n\nḤudhayfa, qu'Allāh l'agrée, rapporte : « J'ai prié avec le Prophète ﷺ, il récita al-Baqara puis al-Nisāʾ puis Āl ʿImrān, **en récitant lentement : quand il passait sur un verset de glorification, il glorifiait, et quand il passait sur une demande, il demandait**. »",
        source: "Rapporté par Muslim",
      },
      {
        type: "p",
        text: "Ce hadith montre le Prophète ﷺ interrompre sa récitation, malgré la longueur du texte, pour interagir avec le sens à chaque étape. Ce modèle prophétique ne s'oppose pas à la longueur de la récitation ni à sa mémorisation antérieure — il suppose au contraire un texte déjà connu — mais il montre que la connaissance du texte devait déboucher sur une interaction vivante avec lui.",
      },
      {
        type: "objection",
        objection: "Un enfant qui mémorise sans comprendre la langue arabe perd-il donc son temps ?",
        reponse:
          "Nullement. La mémorisation précoce constitue un investissement précieux : elle fixe dans le cœur un texte qui pourra être médité plus tard, à mesure que la compréhension de la langue et du sens progresse. De nombreux savants, dont beaucoup de salaf, ont mémorisé le Coran enfants avant d'en saisir toute la portée, et cette mémorisation a servi de socle à des décennies d'étude et de méditation ultérieures. Le problème surgirait seulement si cette étape restait la seule et unique relation au Coran, jamais suivie d'un effort de compréhension à l'âge adulte.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Réciter pour mémoriser et réciter pour comprendre ne sont pas deux voies concurrentes mais deux étapes d'un même chemin, dont l'ordre peut varier selon l'âge et les circonstances. Le but final demeure le même : un cœur qui porte le Coran et qui, en le portant, se laisse transformer par lui.",
      },
    ],
  },
  {
    slug: slugifySujet("Toucher et manipuler le muṣḥaf : les avis"),
    title: "Toucher et manipuler le muṣḥaf : les avis",
    intro:
      "Peut-on toucher le muṣḥaf sans ablution ? Le porter dans un sac en état d'impureté rituelle ? Le faire lire à un enfant qui n'a pas encore l'usage complet de la purification ? Ces questions pratiques, fréquentes dans la vie quotidienne des croyants, ont reçu des réponses variées selon les écoles, avec des nuances qu'il convient de connaître avant de trancher hâtivement.",
    body: [
      { type: "h2", text: "Le verset au cœur du débat" },
      {
        type: "verse",
        arabic: "**لَّا يَمَسُّهُۥٓ إِلَّا ٱلْمُطَهَّرُونَ**",
        translation: "**Nul ne le touche, sinon les purifiés.**",
        reference: "Coran, al-Wāqiʿa, 56:79",
      },
      {
        type: "p",
        text: "Ce verset est la pierre angulaire de toute la discussion, mais son interprétation même divise les commentateurs avant que ne se pose la question du droit. Certains y voient une description des anges purifiés qui seuls touchent la Tablette gardée dans les cieux, sans rapport direct avec le comportement des croyants ici-bas. D'autres, tout en reconnaissant ce premier sens, en tirent une règle de convenance envers le muṣḥaf terrestre par analogie.",
      },
      {
        type: "h2", text: "Les positions des quatre écoles" },
      {
        type: "comparaison",
        title: "Le muṣḥaf et l'état de petite impureté (ḥadath)",
        columns: ["École", "Position principale"],
        rows: [
          { criterion: "Ḥanafites", cells: ["Interdiction de toucher directement le texte sans ablution, sauf avec un linge ou un objet interposé"] },
          { criterion: "Shāfiʿites", cells: ["Interdiction ferme de tout contact sans purification, y compris pour une partie de la reliure contenant du texte"] },
          { criterion: "Ḥanbalites", cells: ["Interdiction similaire, avec quelques nuances sur les supports électroniques ou les traductions"] },
          { criterion: "Mālikites", cells: ["Interdiction de principe pour l'adulte, mais avec des aménagements notables retenus par l'école, notamment pour l'enseignement"] },
        ],
      },
      { type: "h2", text: "L'avis mālikite mis en avant" },
      {
        type: "p",
        text: "L'école mālikite, tout en s'accordant globalement avec les autres écoles sur l'interdiction de principe pour l'adulte en état de petite impureté, se distingue par une attention particulière portée au contexte de l'apprentissage. La nécessité pédagogique d'enseigner le Coran aux enfants, souvent en état d'impureté mineure sans y prêter attention, a conduit plusieurs mālikites à admettre des tempéraments pratiques importants pour préserver la continuité de l'enseignement coranique.",
      },
      {
        type: "quote",
        text: "قال الإمام مالك رحمه الله فيما نقله عنه أصحابه: **يجوز للصبيان مسّ الألواح التي فيها القرآن للتعلّم ولو كانوا على غير طهارة، رفعاً للحرج**.\n\nL'imam Mālik a dit, selon ce que ses disciples ont rapporté : **« Il est permis aux enfants de toucher les tablettes contenant le Coran pour l'apprentissage, même sans purification, afin de lever la difficulté. »**",
        source: "Rapporté dans les recueils de fiqh mālikite, notamment chez al-Qarāfī",
      },
      {
        type: "p",
        text: "Cet aménagement, retenu par plusieurs juristes mālikites postérieurs, repose sur une règle fondamentale de leur méthode : la considération des besoins réels de la communauté et le principe de **rafʿ al-ḥaraj**, la levée de la gêne excessive, lorsque l'application stricte d'une règle entraînerait une difficulté disproportionnée par rapport à l'objectif poursuivi. Exiger d'un enfant en apprentissage une purification constante avant chaque contact avec sa tablette aurait rendu l'enseignement coranique traditionnel extrêmement difficile à organiser.",
      },
      {
        type: "balance",
        title: "L'aménagement mālikite pour l'enseignement",
        affirmLabel: "Ce qui est permis",
        denyLabel: "Ce qui reste interdit",
        affirm: [
          "Le contact de l'enfant en apprentissage avec des supports pédagogiques contenant du Coran, sans purification stricte.",
          "Une tolérance analogue pour les nécessités d'enseignement collectif dans certains contextes.",
        ],
        deny: [
          "Le contact délibéré et sans nécessité de l'adulte pubère avec le muṣḥaf en état de grande impureté (janāba).",
          "La négligence volontaire de la purification quand elle est aisément accessible.",
        ],
        caption: "L'aménagement vise la nécessité pédagogique, non une levée générale de toute convenance envers le texte.",
      },
      { type: "h2", text: "La question de la grande impureté" },
      {
        type: "p",
        text: "Sur l'état de grande impureté rituelle, janāba, et les menstrues, l'accord entre les écoles est plus large en faveur d'une interdiction plus stricte de tout contact direct avec le muṣḥaf, en dehors de nécessités précises comme l'enseignement religieux reconnu à certaines élèves selon des avis contemporains, notamment défendus par certains savants hanbalites modernes pour les étudiantes en état de menstrues suivant un cursus continu.",
      },
      {
        type: "objection",
        objection: "Si le verset parle des anges célestes, pourquoi en tirer une règle pour les croyants ici-bas ?",
        reponse:
          "La majorité des juristes, tout en reconnaissant le sens premier du verset relatif aux anges, considèrent qu'il fonde par extension une convenance envers le muṣḥaf terrestre, appuyée par la pratique constante des Compagnons et par des indications complémentaires, notamment la lettre envoyée par le Prophète ﷺ aux gens du Yémen leur demandant de ne pas toucher le Coran sans purification. Cette convergence entre le principe scripturaire et la pratique transmise a conduit l'immense majorité des juristes, au-delà des nuances entre écoles, à retenir une forme d'interdiction de principe, assortie chez les mālikites d'aménagements pédagogiques notables.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Distinguer la rigueur de principe et l'aménagement pratique",
        text: "L'école mālikite ne nie pas la convenance générale exigée envers le muṣḥaf : elle l'articule avec un principe méthodologique propre, la levée de la difficulté excessive, pour ne pas entraver l'objectif supérieur que représente la transmission du Coran aux nouvelles générations.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les avis sur le contact avec le muṣḥaf illustrent bien comment un même respect du texte peut s'exprimer par des règles nuancées selon les écoles et les contextes. L'aménagement mālikite pour l'enseignement des enfants, loin d'être une facilité relâchée, incarne une sagesse méthodologique précieuse : préserver la convenance envers le Livre de Dieu sans jamais sacrifier, par excès de rigueur, la transmission de ce même Livre aux générations futures.",
      },
    ],
  },
];
