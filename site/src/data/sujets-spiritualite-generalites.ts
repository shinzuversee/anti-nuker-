import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre II — Spiritualité, généralités (groupe a).
 * Tazkiya, le cœur comme organe de connaissance, la ligne de la progression
 * intérieure, états et stations.
 */
export const sujetsSpiritualiteGeneralites: Sujet[] = [
  {
    slug: slugifySujet("Ce que la tradition appelle tazkiya, et ce qu'elle n'appelle pas ainsi"),
    title: "Ce que la tradition appelle tazkiya, et ce qu'elle n'appelle pas ainsi",
    arabic: "التزكية",
    intro:
      "Le mot **tazkiya** est aujourd'hui prononcé à toute occasion, parfois pour désigner une émotion agréable, parfois pour habiller de savoir un simple bien-être. Il porte pourtant, dans les textes, un sens précis, enraciné dans le Coran lui-même, et distinct de bien des usages qu'on lui prête aujourd'hui.\n\nCe sujet reprend le mot à sa racine, montre ce que le Coran et les commentateurs y ont réellement mis, puis dessine la frontière entre la tazkiya véritable et ses contrefaçons les plus courantes : l'émotion sans fruit, la scrupulosité sans miséricorde, le vocabulaire spirituel sans changement de vie.\n\nOn y verra que la tazkiya n'est ni une technique de bien-être, ni un vernis de vocabulaire soufi : c'est un **travail sur le cœur**, mesurable à ses effets, décrit par la Révélation avant d'être décrit par les maîtres.",
    body: [
      { type: "h2", text: "La racine : purifier en faisant croître" },
      {
        type: "lexique",
        root: "ز ك و",
        transliteration: "z-k-w",
        sense:
          "La racine porte un double sens, rarement séparé en arabe : **purifier** et **faire croître**. Une terre *zakiyya* est une terre pure, mais aussi une terre fertile. Le mot ne désigne donc jamais une simple soustraction : ôter le mal ne suffit pas à la tazkiya si rien ne pousse à la place.",
        derives: [
          { word: "zakāt", arabic: "زَكَاة", gloss: "L'aumône légale : elle purifie le bien et le fait fructifier, exactement selon la double racine." },
          { word: "zakiyy / azkā", arabic: "زَكِيّ / أَزْكَى", gloss: "Ce qui est pur et croissant ; employé pour l'âme comme pour le fruit." },
          { word: "tazkiya", arabic: "تَزْكِيَة", gloss: "L'action de purifier-et-faire-croître l'âme ; jamais un simple nettoyage." },
          { word: "muzakkī", arabic: "مُزَكٍّ", gloss: "Celui qui accomplit la tazkiya sur autrui : c'est un des rôles du Prophète ﷺ." },
        ],
        note:
          "**Aucune traduction française ne rend les deux sens à la fois** : « purification » perd la croissance, « édification » perd la pureté. Retenir les deux est la clé de tout le sujet.",
      },
      {
        type: "verse",
        arabic:
          "قَدْ **أَفْلَحَ مَن زَكَّاهَا** ﴿٩﴾ وَقَدْ خَابَ مَن دَسَّاهَا ﴿١٠﴾",
        translation:
          "Bienheureux **celui qui l'a purifiée** ! Malheureux celui qui l'a corrompue !",
        reference: "Coran, al-Shams, 91:9-10",
      },
      {
        type: "p",
        text: "Ce verset, souvent cité isolément, doit être lu avec ce qui le précède : Dieu jure par l'âme et Celui qui l'a façonnée, **puis Il lui inspire son immoralité et sa piété**. La tazkiya n'est donc pas un talent réservé à quelques natures fines : elle est une capacité inscrite dans l'âme de chaque être humain, activée par un travail, non par un tempérament.",
      },
      {
        type: "quote",
        text:
          "وَنَفْسٍ وَمَا سَوَّاهَا، فَأَلْهَمَهَا **فُجُورَهَا وَتَقْوَاهَا**: أي بيَّن لها طريق الخير وطريق الشر، وجعل فيها استعدادًا لكليهما، ثم بيَّن أن **الفلاح في تزكيتها**، وهو تطهيرها من الرذائل ورفعها بالفضائل، **لا في تركها على حالها**.\n\n« Par l'âme et Celui qui l'a façonnée, puis lui a inspiré **son immoralité et sa piété** » : c'est-à-dire qu'Il lui a montré la voie du bien et celle du mal, et a mis en elle une aptitude pour les deux ; puis Il a précisé que **la réussite est dans sa purification**, c'est-à-dire son épuration des vices et son élévation par les vertus, **non dans le fait de la laisser telle qu'elle est**.",
        source: "D'après le sens retenu par les commentateurs sur Coran 91:7-10 (cf. Tafsīr al-Qurṭubī, al-Ṭabarī)",
      },
      { type: "h2", text: "Le Prophète ﷺ envoyé pour tazkiya" },
      {
        type: "verse",
        arabic:
          "هُوَ ٱلَّذِى بَعَثَ فِى ٱلْأُمِّيِّـۧنَ رَسُولًا مِّنْهُمْ يَتْلُوا۟ عَلَيْهِمْ ءَايَٰتِهِۦ **وَيُزَكِّيهِمْ** وَيُعَلِّمُهُمُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ",
        translation:
          "C'est Lui qui a envoyé, parmi les gens sans Écriture, un Messager pris parmi eux, leur récitant Ses versets, **les purifiant**, et leur enseignant le Livre et la Sagesse.",
        reference: "Coran, al-Jumuʿa, 62:2",
      },
      {
        type: "p",
        text: "On notera l'ordre : **réciter, purifier, enseigner**. La tazkiya n'est pas placée après l'enseignement comme un supplément facultatif ; elle est nommée avant, comme condition de fécondité de l'enseignement lui-même. Un savoir reçu sans travail sur le cœur reste, dit-on souvent en tradition, un savoir qui « n'entre pas plus bas que la gorge ».",
      },
      { type: "h2", text: "Ce que la tazkiya n'est pas" },
      {
        type: "h3", text: "Elle n'est pas l'émotion religieuse" },
      {
        type: "p",
        text: "Pleurer à l'écoute d'une récitation, ressentir une paix passagère lors d'une assemblée de rappel, éprouver un élan après un discours : ces émotions **peuvent accompagner** la tazkiya, elles ne la constituent jamais. Ghazālī, dans l'*Iḥyāʾ*, distingue avec insistance l'état passager (ḥāl) de l'acquis stable (khuluq) : seul le second **modifie durablement le comportement**.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le piège de l'émotion sans fruit",
        text: "**Une larme n'est pas une preuve.** Beaucoup pleurent en écoutant un rappel et retournent, une heure plus tard, à la médisance ou à la dureté envers un proche. La tazkiya se mesure non à l'intensité du ressenti, mais à **ce qui change dans la conduite le lendemain**.",
      },
      { type: "h3", text: "Elle n'est pas la scrupulosité anxieuse" },
      {
        type: "p",
        text: "À l'inverse, certains confondent tazkiya et scrupule permanent : douter sans fin de son ablution, s'accuser sans relâche, vivre dans la peur continuelle du péché. Ce comportement, souvent appelé **waswasa** dans la tradition, n'est pas de la piété affinée : c'est un **dérèglement qui épuise le cœur** au lieu de le faire croître, contredisant ainsi le second sens même de la racine z-k-w.",
      },
      {
        type: "balance",
        title: "Tazkiya authentique et ses contrefaçons",
        arabic: "التزكية وما يُشبهها",
        affirmLabel: "Ce qu'est la tazkiya",
        denyLabel: "Ce qu'elle n'est pas",
        affirm: [
          "Un **travail volontaire** sur les intentions, les habitudes et les attaches du cœur.",
          "Un processus qui **purifie et fait croître** en même temps.",
          "Une œuvre qui **se vérifie dans le comportement durable**, non dans le ressenti d'un instant.",
          "Un chemin ouvert à **toute âme**, quelle que soit sa sensibilité naturelle.",
        ],
        deny: [
          "Une simple **émotion religieuse** passagère, aussi intense soit-elle.",
          "Une **scrupulosité anxieuse** qui épuise sans élever.",
          "Un **vocabulaire soufi** employé sans aucune pratique correspondante.",
          "Un **isolement d'ambiance** confondu avec le détachement du cœur.",
        ],
        caption: "La distinction n'est pas affaire de vocabulaire mais d'effets constatables.",
      },
      { type: "h3", text: "Elle n'est pas le vocabulaire" },
      {
        type: "p",
        text: "On peut parler de nafs, de qalb, de fanāʾ, citer Ibn ʿAṭāʾ Allāh de mémoire, et n'avoir **rien entamé** de son avarice ou de son orgueil. Le vocabulaire technique de la voie spirituelle est un outil, non une garantie. **La tradition juge sur le fruit, jamais sur le lexique employé.**",
      },
      {
        type: "objection",
        objection:
          "Mais si la tazkiya exige tant de rigueur, n'est-ce pas décourageant pour le croyant ordinaire, qui n'a ni le temps ni les moyens d'un ascète ?",
        reponse:
          "Non, car la tazkiya n'est pas réservée à une élite recluse. Les versets cités concernent **« l'âme »** en général, et le Prophète ﷺ a été envoyé « parmi les gens sans Écriture », c'est-à-dire des hommes ordinaires. La tazkiya se pratique dans le commerce honnête, la parole retenue, la prière assidue, le pardon accordé : **des actes à la portée de tous**, non des exploits réservés à quelques-uns.",
        suite: "Ce qui distingue les degrés, ce n'est donc pas l'accès à la tazkiya, mais sa profondeur et sa constance.",
      },
      { type: "h2", text: "Les degrés reconnus par la tradition" },
      {
        type: "degres",
        title: "Trois strates de l'âme selon le vocabulaire coranique",
        arabic: "مراتب النفس",
        direction: "asc",
        degres: [
          { label: "L'âme qui incite au mal", arabic: "النفس الأمّارة بالسوء", note: "État initial, dominé par les penchants non travaillés (Coran 12:53)." },
          { label: "L'âme qui se blâme", arabic: "النفس اللوّامة", note: "Elle voit la faute, la regrette, se reprend sans cesse (Coran 75:2)." },
          { label: "L'âme apaisée", arabic: "النفس المطمئنّة", note: "Elle se repose en Dieu, entre au Paradis « satisfaite et agréée » (Coran 89:27-28)." },
        ],
        caption:
          "Ces trois noms, tous coraniques, décrivent une **même âme à des états successifs**, non trois âmes différentes.",
      },
      {
        type: "verse",
        arabic: "يَٰٓأَيَّتُهَا **ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ** ﴿٢٧﴾ ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً ﴿٢٨﴾",
        translation: "Ô **âme apaisée**, retourne vers ton Seigneur, satisfaite et agréée !",
        reference: "Coran, al-Fajr, 89:27-28",
      },
      { type: "h2", text: "Un schéma cyclique, non une ligne à sens unique" },
      {
        type: "cycle",
        title: "Le mouvement quotidien de la tazkiya",
        arabic: "دورة التزكية اليومية",
        center: "Le cœur",
        steps: [
          { label: "Vigilance", arabic: "مراقبة", note: "Observer ses intentions avant l'acte." },
          { label: "Faute ou négligence", arabic: "تقصير", note: "Chute, oubli, mouvement bas de l'âme." },
          { label: "Blâme intérieur", arabic: "لوم", note: "Le cœur se reproche, sans désespérer." },
          { label: "Retour", arabic: "توبة", note: "Retour à Dieu, réparation si possible." },
          { label: "Affermissement", arabic: "تثبيت", note: "L'acte bon devient habitude, l'âme s'apaise un peu plus." },
        ],
        caption:
          "La tazkiya n'avance pas comme une flèche : elle **tourne**, chaque tour laissant l'âme un peu plus stable qu'au tour précédent.",
      },
      { type: "h2", text: "Tazkiya et zakāt : un même mouvement" },
      {
        type: "verse",
        arabic:
          "خُذْ مِنْ أَمْوَٰلِهِمْ صَدَقَةً **تُطَهِّرُهُمْ وَتُزَكِّيهِم** بِهَا وَصَلِّ عَلَيْهِمْ",
        translation:
          "Prélève sur leurs biens une aumône par laquelle **tu les purifies et les fais croître**, et prie pour eux.",
        reference: "Coran, al-Tawba, 9:103",
      },
      {
        type: "p",
        text: "Le rapprochement n'est pas fortuit. **Donner un bien qu'on aime purifie l'attache du cœur à ce bien**, et cette purification fait croître, en retour, la générosité elle-même. La tazkiya du corps social — par l'aumône — et la tazkiya de l'âme individuelle obéissent à la même logique : on ôte ce qui encombre pour permettre à autre chose de croître.",
      },
      {
        type: "comparaison",
        title: "Tazkiya du bien et tazkiya de l'âme",
        columns: ["Aspect", "Zakāt (le bien)", "Tazkiya (l'âme)"],
        rows: [
          { criterion: "Ce qu'on retire", cells: ["Une part du bien matériel", "Une attache, un vice, une négligence"] },
          { criterion: "Ce qui croît en retour", cells: ["La bénédiction du bien restant", "La vertu, la paix intérieure"] },
          { criterion: "Condition de validité", cells: ["Intention sincère, mesure juste", "Persévérance, sincérité, patience"] },
          { criterion: "Risque en cas d'omission", cells: ["Bien impur, non béni", "Âme stagnante ou corrompue"] },
        ],
        caption: "Le parallèle coranique entre les deux emplois de la racine z-k-w n'est pas ornemental : il est structurant.",
      },
      { type: "h2", text: "Une expérience pour éprouver la différence" },
      {
        type: "experiment",
        title: "L'émotion et l'habitude, un mois plus tard",
        steps: [
          "Note, un soir de grande émotion spirituelle (assemblée, prière nocturne, écoute marquante), les résolutions que tu formes.",
          "Un mois plus tard, sans te souvenir de la liste, note à nouveau ton comportement réel sur les mêmes points.",
          "Compare les deux listes : l'émotion du premier soir a-t-elle laissé une **trace mesurable** dans les actes ?",
          "Si l'écart est grand, ce n'est pas un échec définitif : c'est l'indice qu'**il fallait un travail, pas seulement un instant**.",
        ],
        conclusion:
          "La tazkiya ne se juge jamais le soir même : elle se juge **un mois, un an après**, dans la constance de l'acte, non dans l'intensité du ressenti initial.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Retenir la double racine",
        text: "Chaque fois que le mot tazkiya est employé, demander : **qu'est-ce qui est purifié, et qu'est-ce qui, en conséquence, se met à croître ?** Si la réponse à la seconde question manque, le mot est probablement mal employé.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La tazkiya, telle que le Coran et les commentateurs l'établissent, n'est ni un sentiment ni un vocabulaire : c'est **un travail patient, cyclique, vérifiable**, qui purifie l'âme d'un mal réel et fait croître en elle un bien réel. Elle est offerte à toute âme, non réservée à une élite, et elle se reconnaît, non aux larmes du moment, mais **à la constance du fruit**.",
      },
    ],
  },

  {
    slug: slugifySujet("Le cœur comme organe de connaissance"),
    title: "Le cœur comme organe de connaissance",
    arabic: "القلب",
    intro:
      "Dans le vocabulaire coranique, le **qalb** n'est pas d'abord l'organe qui bat dans la poitrine : c'est le siège de la compréhension, de la foi, de l'aveuglement ou de la clairvoyance. Le Coran dit de certains hommes qu'ils ont **des cœurs avec lesquels ils ne comprennent pas** — non des yeux, non des oreilles, mais des cœurs.\n\nCette affirmation heurte une intuition moderne qui loge la connaissance dans le cerveau et le sentiment dans le cœur. La tradition islamique, elle, fait du cœur un **organe de perception à part entière**, capable de voir des réalités que l'œil ne voit pas, et susceptible, comme tout organe, de maladie, d'aveuglement ou de guérison.\n\nCe sujet expose le statut du cœur dans le Coran et chez les maîtres de la voie, ses maladies, ses degrés de clarté, et la manière dont on peut, concrètement, en prendre soin.",
    body: [
      { type: "h2", text: "Le cœur qui comprend, le cœur qui ne comprend pas" },
      {
        type: "verse",
        arabic:
          "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ **يَعْقِلُونَ بِهَآ** أَوْ ءَاذَانٌ يَسْمَعُونَ بِهَا ۖ فَإِنَّهَا لَا تَعْمَى ٱلْأَبْصَٰرُ وَلَٰكِن **تَعْمَى ٱلْقُلُوبُ** ٱلَّتِى فِى ٱلصُّدُورِ",
        translation:
          "N'ont-ils pas parcouru la terre, afin d'avoir des cœurs **avec lesquels ils comprennent**, ou des oreilles avec lesquelles ils entendent ? En vérité, ce ne sont pas les yeux qui s'aveuglent, mais **ce sont les cœurs**, dans les poitrines, qui s'aveuglent.",
        reference: "Coran, al-Ḥajj, 22:46",
      },
      {
        type: "quote",
        text:
          "أخبر تعالى أنَّ **العمى الحقيقي هو عمى القلب** لا عمى البصر، فإنَّ صاحب البصر السليم قد لا ينتفع بما يرى إذا كان قلبه أعمى عن الاعتبار، وصاحب القلب البصير **يرى بقلبه ما لا تراه العين**.\n\nAllāh, Très-Haut, informe que **l'aveuglement véritable est celui du cœur**, non celui de la vue : celui qui a une vue saine peut ne tirer aucun profit de ce qu'il voit si son cœur est aveugle à la considération, tandis que **celui dont le cœur voit clair perçoit par son cœur ce que l'œil ne perçoit pas**.",
        source: "D'après le sens retenu dans le Tafsīr al-Qurṭubī sur Coran 22:46",
      },
      {
        type: "lexique",
        root: "ق ل ب",
        transliteration: "q-l-b",
        sense:
          "La racine dit d'abord le **retournement** : *qalaba* signifie retourner, changer de face. Le cœur porte ce nom parce qu'il **change d'état sans cesse** — d'où l'invocation prophétique demandant à Celui qui retourne les cœurs de fixer le sien sur la religion.",
        derives: [
          { word: "qalb", arabic: "قَلْب", gloss: "Le cœur, siège de la foi, de la compréhension et de l'affection." },
          { word: "taqallub", arabic: "تَقَلُّب", gloss: "Le retournement, l'instabilité naturelle des états du cœur." },
          { word: "inqilāb", arabic: "اِنْقِلاَب", gloss: "Le renversement complet, parfois brutal, d'un état à son opposé." },
          { word: "muqallib al-qulūb", arabic: "مُقَلِّب القُلُوب", gloss: "« Celui qui retourne les cœurs », nom employé par le Prophète ﷺ dans son invocation." },
        ],
        note:
          "**يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ** — « Ô Toi qui retournes les cœurs, affermis mon cœur sur Ta religion » (invocation prophétique authentique).",
      },
      { type: "h2", text: "Un organe, deux fonctions" },
      {
        type: "p",
        text: "Ghazālī, dans le *Kitāb sharḥ ʿajāʾib al-qalb* de l'*Iḥyāʾ*, distingue le cœur charnel — un organe de chair situé dans la poitrine, commun à l'homme et à l'animal — et le cœur subtil, réalité spirituelle qui **connaît, veut et se dirige vers Dieu ou s'en détourne**. C'est ce second sens qui est visé par tous les versets sur la cécité ou la clairvoyance du cœur, et c'est lui que la tazkiya cherche à guérir.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un lien, non deux réalités séparées",
        text: "La tradition n'oppose pas les deux cœurs comme deux choses sans rapport : elle affirme que **le cœur subtil se sert du cœur charnel comme d'une demeure et d'un instrument**, un peu comme la vue se sert de l'œil sans se réduire à lui.",
      },
      { type: "h2", text: "Le cœur comme organe de connaissance" },
      {
        type: "p",
        text: "Ce que le Coran nomme *fiqh* du cœur (« comprendre avec »), *baṣīra* (« clairvoyance ») ou *nūr* (« lumière ») désigne une **perception directe**, distincte du raisonnement discursif de l'intellect (ʿaql) et distincte aussi de la simple sensation. Le cœur, chez les maîtres de la voie, est comparé à un miroir : **il reflète le réel dans la mesure où il est poli**, et il déforme ou n'affiche rien dans la mesure où il est terni.",
      },
      {
        type: "schema",
        title: "Le cœur, miroir plus ou moins poli",
        variant: "flow",
        arabic: "القلب كالمرآة",
        nodes: [
          { label: "Cœur pur", arabic: "قلب سليم", note: "Reflète le vrai sans distorsion ; reçoit inspiration et clarté (Coran 26:89)." },
          { label: "Cœur terni", arabic: "قلب مطبوع عليه", note: "Couvert d'un voile de péchés répétés ; perçoit encore, mais faiblement." },
          { label: "Cœur mort", arabic: "قلب ميت", note: "Ne réagit plus ni au rappel ni à l'avertissement ; comparé par les maîtres à un miroir rouillé." },
        ],
        caption:
          "Ce n'est pas la lumière qui varie, dit-on souvent en tradition, **c'est le poli du miroir**.",
      },
      {
        type: "verse",
        arabic: "كَلَّا ۖ بَلْ ۜ **رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا۟ يَكْسِبُونَ**",
        translation: "Que non ! Mais **ce qu'ils ont acquis a couvert leurs cœurs d'une rouille**.",
        reference: "Coran, al-Muṭaffifīn, 83:14",
      },
      {
        type: "quote",
        text:
          "الرَّانُ: **صدأ يعلو القلب** بسبب المعاصي حتى يسودَّ، فإذا تكرر الذنب زاد الصدأ حتى **يغلق القلب فلا يبصر الحق**، وهو أشد من الطبع لأنه حاصل تدريجًا من كثرة الذنوب.\n\nLa rouille (*rān*) est **un dépôt qui recouvre le cœur** à cause des péchés, jusqu'à le noircir ; si la faute se répète, le dépôt s'épaissit jusqu'à **fermer le cœur, qui ne perçoit plus la vérité** — état plus grave que le simple scellement, car il s'installe graduellement, à force de péchés répétés.",
        source: "D'après le sens retenu dans le Tafsīr al-Qurṭubī sur Coran 83:14",
      },
      { type: "h2", text: "Les maladies du cœur" },
      {
        type: "p",
        text: "La tradition distingue les maladies du cœur de ses infirmités passagères. Ghazālī consacre tout un livre de l'*Iḥyāʾ* à chacune : l'orgueil (*kibr*), l'envie (*ḥasad*), l'avarice (*bukhl*), l'ostentation (*riyāʾ*), l'amour du monde (*ḥubb al-dunyā*). Ces maladies **ne se voient pas de l'extérieur** et peuvent coexister avec une apparence religieuse impeccable : c'est en cela qu'elles sont redoutables.",
      },
      {
        type: "comparaison",
        title: "Trois maladies du cœur et leur remède classique",
        columns: ["Maladie", "Manifestation", "Remède rapporté"],
        rows: [
          { criterion: "Orgueil (kibr)", cells: ["Mépris d'autrui, refus de la vérité venue d'un « inférieur »", "Se souvenir de son origine et de sa fin ; fréquenter les humbles"] },
          { criterion: "Envie (ḥasad)", cells: ["Souffrir du bien d'autrui, souhaiter sa disparition", "Invoquer le bien pour celui qu'on envie ; se rappeler la répartition divine"] },
          { criterion: "Ostentation (riyāʾ)", cells: ["Agir pour le regard, non pour Dieu", "Multiplier les actes cachés ; examiner l'intention avant l'acte"] },
        ],
        caption: "Le détail de ces remèdes occupe des livres entiers de l'Iḥyāʾ ʿulūm al-dīn.",
      },
      {
        type: "objection",
        objection:
          "Ne risque-t-on pas, à force de scruter les maladies du cœur, de sombrer dans une auto-observation permanente et anxieuse ?",
        reponse:
          "Le risque est réel, et la tradition l'a signalé : l'examen du cœur (*muḥāsaba*) doit être **borné dans le temps**, généralement en fin de journée, et suivi d'un abandon confiant. Il vise à corriger, non à ruminer. Un examen qui ne débouche sur aucune action et se répète sans fin dans l'angoisse **n'est plus de la muḥāsaba, mais du waswasa**.",
        suite: "La différence tient, encore une fois, au fruit : correction et apaisement, ou paralysie et tourment.",
      },
      { type: "h2", text: "Les degrés de clarté du cœur" },
      {
        type: "degres",
        title: "États successifs du cœur selon le vocabulaire des maîtres",
        arabic: "أحوال القلب",
        direction: "asc",
        degres: [
          { label: "Cœur scellé", arabic: "قلب مطبوع", note: "Ne reçoit plus le rappel ; le Coran le décrit chez ceux qui persistent dans le refus obstiné." },
          { label: "Cœur malade", arabic: "قلب مريض", note: "Reçoit encore, mais faiblement, mêlant foi et attaches contraires (Coran 2:10)." },
          { label: "Cœur vivant mais lutteur", arabic: "قلب يجاهد", note: "Reconnaît ses fautes, se blâme, se corrige, avance par efforts répétés." },
          { label: "Cœur sain", arabic: "قلب سليم", note: "Se présente à Dieu sans attache ni vice caché (Coran 26:88-89)." },
        ],
        caption: "Nul ne naît au dernier degré : la tazkiya est précisément le chemin qui y mène.",
      },
      {
        type: "verse",
        arabic: "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ ﴿٨٨﴾ إِلَّا مَنْ أَتَى ٱللَّهَ **بِقَلْبٍ سَلِيمٍ** ﴿٨٩﴾",
        translation: "Le jour où ni la richesse ni les enfants ne seront utiles, sauf à celui qui viendra à Allāh **avec un cœur sain**.",
        reference: "Coran, al-Shuʿarāʾ, 26:88-89",
      },
      { type: "h2", text: "Comment le cœur perçoit-il ? Une expérience de pensée" },
      {
        type: "experiment",
        title: "La vitre sale",
        steps: [
          "Imagine une pièce éclairée en plein jour, vue à travers une vitre couverte de poussière depuis des années.",
          "La lumière du dehors n'a pas diminué ; pourtant, ce qu'on perçoit à l'intérieur est terne, imprécis, parfois trompeur.",
          "On nettoie progressivement la vitre : rien n'a changé dans la lumière, mais la perception intérieure se transforme entièrement.",
          "Applique l'image au cœur : **la vérité ne varie pas**, c'est l'organe de réception qui, selon son état, la laisse passer ou l'obscurcit.",
        ],
        conclusion:
          "La tazkiya du cœur n'ajoute rien à la vérité : elle **retire ce qui empêchait de la voir**, exactement comme on nettoie une vitre sans rien ajouter à la lumière du jour.",
      },
      { type: "h2", text: "Le cœur et l'intellect : deux organes, non des rivaux" },
      {
        type: "p",
        text: "On objecte parfois que privilégier le cœur reviendrait à mépriser la raison. Ce n'est pas la position de la tradition sunnite : l'intellect (*ʿaql*) demeure la condition de la responsabilité légale et l'instrument du raisonnement théologique. Mais certaines réalités — la saveur de la foi (*ḥalāwat al-īmān*), la présence sentie de Dieu, la certitude paisible — **ne s'atteignent pas par le seul syllogisme** : elles se reçoivent par un cœur rendu apte à les recevoir.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La foi a une saveur, pas seulement une preuve",
        text: "Le Prophète ﷺ a annoncé que « goûtera la saveur de la foi celui qui agrée Allāh pour Seigneur, l'islam pour religion, et Muḥammad pour messager ». **Une saveur ne se démontre pas : elle se goûte**, et c'est le cœur purifié qui la goûte.",
      },
      { type: "h2", text: "Une image de progression et de rechute" },
      {
        type: "spectre",
        title: "Le spectre de la présence du cœur",
        left: "Cœur absent (ghafla)",
        right: "Cœur présent (ḥuḍūr)",
        markers: [
          { label: "Prière mécanique", position: 15, note: "Les mots sont dits, l'esprit est ailleurs." },
          { label: "Effort de rappel", position: 45, note: "Le fidèle se reprend à chaque distraction." },
          { label: "Concentration stable", position: 70, note: "Le cœur reste fixé la majorité du temps." },
          { label: "Présence continue", position: 95, note: "État rare, rapporté des grands adorateurs." },
        ],
        caption:
          "**Personne ne se situe toujours au même point** de ce spectre ; le travail consiste à s'y déplacer vers la droite, sans se décourager des retours en arrière.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le cœur, dans la vision coranique, n'est ni une simple pompe ni un simple siège d'émotions : c'est **l'organe premier de la connaissance de Dieu**, susceptible de cécité comme de clairvoyance, de maladie comme de guérison. Le prendre au sérieux, c'est admettre que la vérité la plus certaine ne suffit pas si l'organe destiné à la recevoir reste terni — et que **soigner son cœur est une science et une pratique**, non un simple sentiment religieux.",
      },
    ],
  },

  {
    slug: slugifySujet("La progression intérieure suit-elle une ligne droite ?"),
    title: "La progression intérieure suit-elle une ligne droite ?",
    intro:
      "L'image la plus répandue de la vie spirituelle est celle d'un escalier : on monte marche après marche, sans redescendre, jusqu'à un sommet. Cette image, séduisante par sa clarté, **correspond mal à ce que rapportent les textes et l'expérience des maîtres**. Le compagnon Ḥanẓala confiait au Prophète ﷺ que sa foi, ardente en sa présence, s'affaiblissait une fois rentré chez lui — et le Prophète ﷺ ne le blâma pas, mais lui répondit que la foi connaît des heures et des heures.\n\nCe sujet examine la question de la linéarité de la progression intérieure : ce que les textes disent des hauts et des bas de la foi, ce que les maîtres de la voie appellent *tarqiya* (montée), et pourquoi une théologie réaliste de la vie spirituelle doit intégrer le recul, la stagnation et le retour, sans pour autant excuser le relâchement volontaire.",
    body: [
      { type: "h2", text: "Le hadith de Ḥanẓala : une heure et une heure" },
      {
        type: "quote",
        text:
          "عن حنظلة الأسيدي رضي الله عنه قال: **نافق حنظلة!** فقلت: وما ذاك؟ قال: نكون عند رسول الله ﷺ يُذكِّرنا بالنار والجنة حتى كأنَّا رأي عين، فإذا خرجنا من عند رسول الله ﷺ عافسنا الأزواج والأولاد والضيعات فنسينا كثيرًا، فقال رسول الله ﷺ: **«لو تدومون على ما تكونون عندي، لصافحتكم الملائكة... ولكن يا حنظلة، ساعةً وساعةً»** ثلاث مرات.\n\nḤanẓala al-Usaydī, qu'Allāh l'agrée, rapporte : **« Ḥanẓala est devenu hypocrite ! »** [se dit-il]. On lui demanda pourquoi. Il dit : « Nous sommes auprès du Messager d'Allāh ﷺ, il nous rappelle le Feu et le Paradis comme si nous les voyions de nos propres yeux ; puis, sortis de chez lui, happés par nos épouses, nos enfants, nos affaires, nous oublions beaucoup. » Le Messager d'Allāh ﷺ dit alors : **« Si vous demeuriez comme vous êtes chez moi, les anges vous serreraient la main... mais, ô Ḥanẓala, une heure et une heure »**, et il le répéta trois fois.",
        source: "Rapporté par Muslim, dans son Ṣaḥīḥ",
      },
      {
        type: "p",
        text: "Ce hadith, l'un des plus cités par les maîtres du soufisme sunnite, **normalise la fluctuation** sans l'ériger en excuse. Ḥanẓala ne relâche pas volontairement son effort : il constate, avec une inquiétude sincère, que l'intensité de sa présence à Dieu varie selon les circonstances. Le Prophète ﷺ ne dit pas que cette variation est un idéal, mais que **c'est la condition humaine**, à ne pas confondre avec l'hypocrisie.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Fluctuer n'est pas reculer définitivement",
        text: "« Une heure et une heure » n'autorise pas à cesser tout effort dans les heures « basses » : il **décrit un rythme naturel**, à condition que les heures hautes demeurent le cap et que les heures basses ne deviennent jamais l'habitude installée.",
      },
      { type: "h2", text: "L'image de l'escalier et ses limites" },
      {
        type: "p",
        text: "L'image populaire d'une montée continue vient souvent d'une mauvaise lecture de certains textes qui décrivent des **stations** (maqāmāt) successives : repentir, patience, gratitude, confiance, satisfaction. On en tire l'idée d'un escalier sans redescente. Or les maîtres eux-mêmes, notamment al-Qushayrī dans sa *Risāla*, distinguent la station acquise (maqām), stable en principe, de l'état donné (ḥāl), essentiellement instable — et **même les stations connaissent des reculs**, sous l'effet d'un péché, d'une négligence ou d'une épreuve.",
      },
      {
        type: "schema",
        title: "L'escalier imaginé et le sentier réel",
        variant: "branch",
        nodes: [
          { label: "Image populaire", note: "Montée continue, sans recul, jusqu'à un sommet fixe." },
          { label: "Réalité rapportée", note: "Montées, plateaux, reculs partiels, nouvelles montées — sur une tendance générale ascendante." },
          { label: "Erreur à éviter (1)", note: "Croire qu'un recul signale un échec total et abandonner l'effort." },
          { label: "Erreur à éviter (2)", note: "Nier tout recul et vivre dans une image de soi flatteuse et fausse." },
        ],
        caption: "La tradition tient une position médiane entre le découragement et l'illusion de perfection continue.",
      },
      { type: "h2", text: "Un verset sur l'alternance des états collectifs" },
      {
        type: "verse",
        arabic: "وَتِلْكَ ٱلْأَيَّامُ **نُدَاوِلُهَا بَيْنَ ٱلنَّاسِ**",
        translation: "Et ces jours, **Nous les faisons alterner parmi les gens**.",
        reference: "Coran, Āl ʿImrān, 3:140",
      },
      {
        type: "quote",
        text:
          "أي: **نُصرِّف الأيام بين الناس مرة لهم ومرة عليهم**، فتارة يُنصرون وتارة يُبتلون، وذلك ليتميز الصادق من المنافق، وليعتبر المؤمن أنَّ **المداولة سنة جارية** لا تختص بالحرب دون سائر الأحوال.\n\nC'est-à-dire : **Nous faisons circuler les jours parmi les gens, tantôt en leur faveur, tantôt à leur détriment** — tantôt secourus, tantôt éprouvés — afin que le sincère se distingue de l'hypocrite, et afin que le croyant retienne que **l'alternance est une règle courante**, non propre à la seule guerre, mais à l'ensemble des états.",
        source: "D'après le sens retenu dans le Tafsīr al-Ṭabarī et al-Qurṭubī sur Coran 3:140",
      },
      {
        type: "p",
        text: "Ce que le verset dit d'une communauté sur le plan collectif, les maîtres l'ont transposé, par analogie prudente, au for intérieur de chaque croyant : les jours de ferveur et les jours de sécheresse **alternent aussi dans le cœur**, sans que cette alternance signifie l'abandon divin.",
      },
      { type: "h2", text: "Quatre figures rapportées de la non-linéarité" },
      {
        type: "comparaison",
        title: "Quatre manières dont la progression se dévie de la ligne droite",
        columns: ["Figure", "Description", "Attitude recommandée"],
        rows: [
          { criterion: "Le plateau", cells: ["Longue période sans progrès ni recul sensible", "Persévérer dans les actes, sans exiger un ressenti"] },
          { criterion: "La chute après élévation", cells: ["Un péché survient après une période de grande ferveur", "Retour immédiat au repentir, sans généraliser l'échec"] },
          { criterion: "L'épreuve qui fait douter", cells: ["Une difficulty ébranle une certitude qu'on croyait acquise", "Distinguer le doute de l'épreuve et la recherche sincère du savoir"] },
          { criterion: "L'avancée après un creux", cells: ["Une période basse précède, sans lien apparent, une montée forte", "Ne jamais mépriser les temps de sécheresse : ils préparent parfois le sursaut"] },
        ],
        caption: "Ces figures sont décrites, chacune à sa manière, dans la littérature spirituelle attentive à l'expérience réelle des cœurs.",
      },
      {
        type: "objection",
        objection:
          "Si la progression n'est pas linéaire, comment distinguer une rechute normale d'un véritable abandon de la voie ?",
        reponse:
          "La tradition répond par un critère simple, énoncé notamment par Ibn ʿAṭāʾ Allāh dans ses *Ḥikam* : ce qui compte n'est pas l'absence de chute, mais **ce qui suit la chute**. Celui qui, après une négligence, revient au repentir et reprend l'effort n'a pas quitté la voie ; celui qui justifie sa négligence, s'y installe et cesse tout effort **s'en est bel et bien détourné**, quels que soient ses discours.",
        suite: "Le signe distinctif n'est donc pas le niveau atteint, mais la direction du mouvement suivant.",
      },
      {
        type: "quote",
        text:
          "**رُبَّ مَعصيةٍ أورثت ذُلًّا وانكسارًا، خيرٌ من طاعةٍ أورثت عزًّا واستكبارًا.**\n\n**Il se peut qu'un péché, ayant engendré humilité et brisement, vaille mieux qu'une obéissance ayant engendré fierté et orgueil.**",
        source: "Ibn ʿAṭāʾ Allāh al-Sakandarī, al-Ḥikam al-ʿAṭāʾiyya",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le recul peut servir la montée",
        text: "Cette sagesse ne banalise pas le péché : elle rappelle que **l'orgueil né d'une bonne action peut être plus nuisible que l'humilité née d'une chute assumée et suivie de repentir**. La ligne n'est pas droite, précisément parce que le cœur est plus complexe qu'une jauge.",
      },
      { type: "h2", text: "Une chronologie exemplaire : les débuts de la révélation" },
      {
        type: "chronologie",
        title: "Fluctuations rapportées dans les tout premiers temps de la révélation",
        events: [
          { date: "Nuit de Ḥirāʾ", label: "Première rencontre avec l'ange", note: "Bouleversement, crainte intense, retour tremblant auprès de Khadīja." },
          { date: "Période suivante", label: "Fatra (interruption de la révélation)", note: "Silence du ciel pendant un temps, source d'une inquiétude rapportée par les biographes." },
          { date: "Reprise", label: "Nouvelle descente de révélation (Sourate al-Ḍuḥā)", note: "Réconfort explicite : « Ton Seigneur ne t'a ni abandonné ni détesté » (93:3)." },
          { date: "Années suivantes", label: "Alternance d'épreuves et de consolations", note: "Boycott, deuil de Khadīja et Abū Ṭālib, puis ouverture de Médine." },
        ],
        caption:
          "Même l'histoire prophétique, modèle premier des croyants, **connaît des interruptions et des reprises**, non une ligne ininterrompue.",
      },
      {
        type: "verse",
        arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        translation: "**Ton Seigneur ne t'a ni délaissé ni détesté.**",
        reference: "Coran, al-Ḍuḥā, 93:3",
      },
      { type: "h2", text: "Une expérience pour observer sa propre courbe" },
      {
        type: "experiment",
        title: "Le journal des cinq prières",
        steps: [
          "Pendant deux semaines, note après chaque prière, sur une échelle de 1 à 5, le degré de présence du cœur ressenti.",
          "Relie les points sur un graphique simple : observe la forme obtenue.",
          "Constate qu'aucune ligne parfaitement croissante n'apparaît, mais que **certaines tendances de fond se dégagent** malgré les creux.",
          "Identifie les circonstances qui précèdent les creux (fatigue, dispute, distraction) : elles indiquent souvent une **cause corrigible**, non une fatalité.",
        ],
        conclusion:
          "L'observation directe confirme ce que les textes annoncent : **la courbe est irrégulière**, et le travail spirituel consiste à agir sur les causes des creux, non à espérer leur disparition totale.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La progression intérieure ne suit pas une ligne droite, et la tradition islamique **le reconnaît sans détour**, depuis le hadith de Ḥanẓala jusqu'aux sagesses d'Ibn ʿAṭāʾ Allāh. Ce réalisme n'ouvre la porte ni au découragement ni à la complaisance : il invite à juger **la direction du mouvement plutôt que le niveau instantané**, et à revenir, après chaque recul, avec la même détermination qu'au premier jour.",
      },
    ],
  },

  {
    slug: slugifySujet("Les états passagers et les stations acquises"),
    title: "Les états passagers et les stations acquises",
    intro:
      "Deux mots techniques traversent toute la littérature spirituelle en islam : le **ḥāl** (état) et le **maqām** (station). Le premier désigne ce qui **descend** sur le cœur sans que l'on y soit pour grand-chose — une paix, une crainte, une douceur soudaine ; le second désigne ce que l'on **acquiert** par l'effort et qui devient une disposition stable — le repentir affermi, la patience durable, la gratitude constante.\n\nAl-Qushayrī, dans sa célèbre *Risāla*, consacre à cette distinction des pages qui sont devenues la référence de tout enseignement ultérieur sur la voie. Ce sujet en reprend l'architecture, montre en quoi elle éclaire des expériences religieuses courantes, et met en garde contre la confusion — fréquente aujourd'hui — entre l'émotion spirituelle et la vertu réellement acquise.",
    body: [
      { type: "h2", text: "Deux mots, deux réalités" },
      {
        type: "lexique",
        root: "ح و ل / ق و م",
        transliteration: "ḥ-w-l / q-w-m",
        sense:
          "*Ḥāl* vient d'une racine de **transformation, changement de situation** ; *maqām* vient d'une racine de **station debout, lieu où l'on se tient**. Le vocabulaire technique reprend fidèlement le sens des racines : l'un change, l'autre se tient.",
        derives: [
          { word: "ḥāl", arabic: "حَال", gloss: "L'état passager, reçu, non maîtrisé, qui va et vient." },
          { word: "aḥwāl", arabic: "أَحْوَال", gloss: "Le pluriel : la succession des états qui traversent le cœur du débutant comme de l'avancé." },
          { word: "maqām", arabic: "مَقَام", gloss: "La station acquise par l'effort, stabilisée, dont on ne redescend pas sans cause grave." },
          { word: "maqāmāt", arabic: "مَقَامَات", gloss: "Les stations successives décrites par les maîtres : repentir, scrupule, renoncement, patience, confiance, satisfaction." },
        ],
        note:
          "Al-Qushayrī résume : **« l'état vient sans effort du serviteur, la station s'acquiert par son effort »** — formule reprise par la quasi-totalité des auteurs postérieurs.",
      },
      { type: "h2", text: "Ce que dit al-Qushayrī" },
      {
        type: "quote",
        text:
          "الحالُ عند القوم: **معنًى يَرِدُ على القلب من غير تصنُّعٍ ولا اجتلابٍ ولا اكتساب**، من طَرَبٍ أو حزنٍ أو قبضٍ أو بسطٍ، فإذا دام واستقرَّ وصار كالخُلق للصاحبه سُمِّي مقامًا. والمقامُ ما يتحقَّقه العبدُ **بضربٍ من التكلُّف والتصرُّف**، فأصحاب المقامات أرباب رياضاتٍ ومجاهدات، وأصحاب الأحوال أرباب مواهب.\n\nL'état, chez les maîtres de la voie, est **un sens qui descend sur le cœur sans artifice, sans qu'on l'attire ni qu'on l'acquière** — allégresse, tristesse, contraction, expansion. Lorsqu'il dure, se stabilise et devient comme un trait de caractère pour celui qui le possède, on l'appelle station. La station est ce que le serviteur réalise **par un effort et une discipline personnels** : les gens des stations sont des maîtres d'exercice et d'effort, tandis que les gens des états sont des maîtres de dons reçus.",
        source: "Al-Qushayrī, al-Risāla al-Qushayriyya, chapitre sur les états et les stations",
      },
      {
        type: "balance",
        title: "Ḥāl et maqām : la ligne de partage",
        arabic: "الحال والمقام",
        affirmLabel: "L'état (ḥāl)",
        denyLabel: "La station (maqām)",
        affirm: [
          "**Reçu**, non produit par l'effort direct du serviteur.",
          "**Passager** : il peut disparaître aussi vite qu'il est venu.",
          "N'engage pas, à lui seul, la valeur morale de la personne.",
          "Exemples : douceur soudaine en prière, crainte intense à l'écoute d'un verset.",
        ],
        deny: [
          "**Acquis** par l'exercice, la discipline, la répétition.",
          "**Stable** : il devient un trait durable du caractère.",
          "Engage directement la valeur du cheminement du serviteur.",
          "Exemples : la patience affermie, la sincérité constante, le renoncement réel.",
        ],
        caption: "Un ḥāl n'est ni méritoire ni suspect en soi ; ce qui compte est ce qu'on en fait.",
      },
      { type: "h2", text: "Les sept stations classiques" },
      {
        type: "degres",
        title: "Les stations selon l'ordre le plus couramment transmis",
        arabic: "المقامات",
        direction: "asc",
        degres: [
          { label: "Le repentir", arabic: "التوبة", note: "Point de départ : rupture avec le péché, regret sincère, résolution." },
          { label: "Le scrupule", arabic: "الورع", note: "Éviter le douteux, non seulement l'interdit certain." },
          { label: "Le renoncement", arabic: "الزهد", note: "Détachement du cœur à l'égard du superflu, non rejet obligatoire du licite." },
          { label: "La pauvreté spirituelle", arabic: "الفقر", note: "Se savoir totalement dépendant de Dieu, même dans l'aisance." },
          { label: "La patience", arabic: "الصبر", note: "Endurance stable devant l'épreuve et devant l'obéissance elle-même." },
          { label: "La confiance", arabic: "التوكل", note: "Remise du sort à Dieu après avoir pris les causes légitimes." },
          { label: "La satisfaction", arabic: "الرضا", note: "Accueil paisible du décret divin, sans révolte ni indifférence." },
        ],
        caption:
          "L'ordre varie selon les auteurs ; **l'essentiel est que chaque station suppose la précédente et prépare la suivante**.",
      },
      { type: "h2", text: "Les états, plus nombreux et plus fugaces" },
      {
        type: "p",
        text: "Les états rapportés dans la littérature spirituelle sont nombreux et souvent présentés par couples opposés : la **contraction** (qabḍ) et l'**expansion** (basṭ), la **crainte** (khawf) et l'**espoir** (rajāʾ), l'**absence** (ghayba) et la **présence** (ḥuḍūr). Ils ne se choisissent pas : ils **surviennent**, parfois en des moments qu'on n'attendait pas, et se retirent de même.",
      },
      {
        type: "spectre",
        title: "Le va-et-vient de la contraction et de l'expansion",
        left: "Contraction (qabḍ)",
        right: "Expansion (basṭ)",
        markers: [
          { label: "Cœur lourd, sans cause apparente", position: 10, note: "État qui appelle patience, non désespoir." },
          { label: "Équilibre relatif", position: 50, note: "État le plus fréquent du quotidien." },
          { label: "Joie sereine dans l'adoration", position: 80, note: "Souvent après un effort ou une épreuve traversée." },
          { label: "Allégresse intense et brève", position: 95, note: "État rare, à recevoir avec gratitude, sans l'ériger en norme attendue." },
        ],
        caption:
          "**Nul n'est censé rester fixé à une extrémité** : le cœur du croyant se meut naturellement le long de ce spectre.",
      },
      {
        type: "verse",
        arabic: "**قُلْ إِنَّ رَبِّى يَبْسُطُ ٱلرِّزْقَ لِمَن يَشَآءُ وَيَقْدِرُ** وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
        translation: "Dis : **« Mon Seigneur dispense la subsistance avec largesse ou la mesure à qui Il veut »**, mais la plupart des gens ne savent pas.",
        reference: "Coran, Sabaʾ, 34:36",
      },
      {
        type: "p",
        text: "Ce verset porte d'abord sur la subsistance matérielle, mais les maîtres l'ont médité en parallèle avec les états du cœur : **la même main qui resserre ou déploie les biens resserre ou déploie les états intérieurs**, selon une sagesse qui échappe souvent à celui qui la subit.",
      },
      { type: "h2", text: "L'erreur contemporaine : confondre l'état pour la station" },
      {
        type: "objection",
        objection:
          "Beaucoup de discours contemporains sur la spiritualité valorisent avant tout l'expérience vécue, l'émotion forte, le moment de « connexion ». Cette distinction ancienne entre état et station n'est-elle pas trop savante pour la vie religieuse ordinaire ?",
        reponse:
          "Elle est au contraire une protection nécessaire pour la vie religieuse ordinaire. Sans elle, on juge son avancement sur la seule intensité du dernier moment fort — une soirée de Ramadan, une omra, une conférence marquante — et l'on **néglige la patience discrète et l'effort répété qui seuls produisent une station**. La distinction n'est savante que dans son vocabulaire ; dans son fond, elle protège de l'illusion la plus commune : croire acquis ce qui n'a été que reçu.",
        suite: "Elle invite à demander, après tout état fort : qu'ai-je fait, ensuite, pour qu'il devienne une habitude ?",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'état seul ne sauve ni ne perd",
        text: "**Ni la sécheresse du cœur n'est un péché, ni son extase n'est une vertu.** Ce qui vaut, dans les deux cas, c'est l'usage qu'on en fait : persévérer dans l'acte prescrit malgré la sécheresse, transformer l'élan de l'extase en acte durable.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La question à se poser après un état fort",
        text: "Après toute émotion religieuse intense, la tradition invite à se demander : **« Qu'est-ce que je vais construire de durable à partir de cet instant ? »** Sans cette question, l'état le plus sublime ne laisse, à terme, aucune trace.",
      },
      { type: "h2", text: "Expérience : distinguer un état d'une station chez soi" },
      {
        type: "experiment",
        title: "Le test de la répétition sans soutien",
        steps: [
          "Choisis une vertu que tu crois avoir acquise (patience, sincérité, générosité) sur la base d'un souvenir marquant.",
          "Place-toi, sans y être préparé, dans une situation ordinaire qui sollicite cette vertu (contrariété banale, occasion discrète de générosité).",
          "Observe : la vertu se manifeste-t-elle **sans le soutien de l'ambiance particulière** qui t'avait fait croire à son acquisition ?",
          "Si elle disparaît hors de ce contexte, ce que tu avais pris pour une station **n'était encore qu'un état lié à des circonstances**.",
        ],
        conclusion:
          "Une station se reconnaît à ceci : **elle tient debout sans décor**. Un état, lui, dépend souvent du décor qui l'a fait naître.",
      },
      { type: "h2", text: "Un schéma récapitulatif" },
      {
        type: "cycle",
        title: "Du don reçu à la disposition acquise",
        arabic: "من الحال إلى المقام",
        center: "Le cœur",
        steps: [
          { label: "Don reçu", arabic: "موهبة", note: "Un état survient sans effort direct : douceur, crainte, joie." },
          { label: "Reconnaissance", arabic: "شكر", note: "Le serviteur reconnaît le don sans se l'attribuer." },
          { label: "Mise à l'épreuve", arabic: "ابتلاء", note: "L'état s'efface ; reste à savoir ce qui en subsiste dans l'acte." },
          { label: "Effort répété", arabic: "مجاهدة", note: "Le serviteur travaille à retrouver, par la discipline, ce que le don avait montré." },
          { label: "Stabilisation", arabic: "تمكين", note: "Ce qui n'était qu'un instant devient une disposition : la station est atteinte." },
        ],
        caption:
          "Le cercle recommence souvent à un niveau plus élevé : **une station acquise peut redevenir le terreau d'un nouvel état plus haut encore**.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Distinguer l'état de la station, ce n'est pas dévaluer l'émotion religieuse : c'est lui donner sa juste place, celle d'un **don à recevoir avec gratitude et à transformer par l'effort**, plutôt que d'une preuve suffisante d'avancement. La tradition, en cela, protège aussi bien de la sécheresse rationaliste qui méprise tout ressenti, que de l'illusion sentimentale qui prend le dernier frisson pour une vertu acquise. **Entre les deux se tient le travail patient, seul capable de transformer un instant en une vie.**",
      },
    ],
  },
];
