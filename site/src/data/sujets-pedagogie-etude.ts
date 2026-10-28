import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre III — groupe b.
 * Étudier et enseigner : méthode, patience intellectuelle, choix des maîtres,
 * pédagogie et écueils contemporains de la transmission du savoir.
 */
export const sujetsPedagogieEtude: Sujet[] = [
  {
    slug: slugifySujet("Garder une question ouverte pendant des années"),
    title: "Garder une question ouverte pendant des années",
    arabic: "التوقف في المسألة",
    intro:
      "Notre époque exige des réponses immédiates : une question posée le matin doit trouver sa clôture le soir même, faute de quoi elle est vécue comme un échec intellectuel. La tradition savante musulmane connaît pourtant une posture inverse, tenue pour une **vertu** et non pour une faiblesse : le **tawaqquf**, la suspension du jugement, qui consiste à reconnaître honnêtement qu'on ne sait pas encore, et à **laisser la question ouverte** plutôt que de la fermer par une réponse fabriquée pour rassurer.\n\nCe sujet explore pourquoi les plus grands savants ont pu dire « Allāhu aʿlam » pendant des décennies sur certaines questions, comment cette attente diffère du doute stérile, et ce que cette discipline enseigne sur le rapport juste au savoir.",
    body: [
      { type: "h2", text: "Le mot et son sens" },
      {
        type: "lexique",
        root: "و ق ف",
        transliteration: "w-q-f",
        sense:
          "S'arrêter, se tenir immobile, suspendre. Le **tawaqquf** en matière de savoir n'est pas l'arrêt de la recherche, mais l'**arrêt du jugement** : on continue de chercher, on refuse seulement de trancher tant que la preuve manque.",
        derives: [
          { word: "waqf", arabic: "وَقْف", gloss: "L'arrêt, la halte — d'où aussi le bien immobilisé pour l'utilité publique." },
          { word: "mutawaqqif", arabic: "مُتَوَقِّف", gloss: "Celui qui suspend son jugement, ni affirmant ni niant." },
          { word: "waqafa ʿind", arabic: "وَقَفَ عِنْدَ", gloss: "S'arrêter à la limite de ce qu'on sait, sans la franchir par supposition." },
          { word: "tathabbut", arabic: "تَثَبُّت", gloss: "La vérification patiente, cousine du tawaqquf : ne pas conclure avant d'avoir établi." },
        ],
        note: "**وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ** — « Ne poursuis pas ce dont tu n'as pas de savoir certain. » (17:36)",
      },
      { type: "h2", text: "Un verset fondateur" },
      {
        type: "verse",
        arabic:
          "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِۦ عِلْمٌ ۚ إِنَّ ٱلسَّمْعَ وَٱلْبَصَرَ وَٱلْفُؤَادَ كُلُّ أُو۟لَٰٓئِكَ كَانَ عَنْهُ مَسْـُٔولًا",
        translation:
          "Et ne poursuis pas ce dont tu n'as pas de savoir certain. **L'ouïe, la vue et le cœur**, tout cela, en vérité, sera interrogé.",
        reference: "Coran, al-Isrāʾ, 17:36",
      },
      {
        type: "p",
        text: "Ce verset ne condamne pas l'ignorance — situation universelle et inévitable — mais **l'affirmation sans fondement**. Il place la responsabilité non pas sur le fait de ne pas savoir, mais sur le fait de **prétendre savoir**. Le tawaqquf est ainsi une réponse directe à cette exigence : plutôt que de combler le vide par une opinion hâtive, on le reconnaît comme vide, et on attend.",
      },
      { type: "h2", text: "Les maîtres et l'aveu du non-savoir" },
      {
        type: "quote",
        text:
          "قال الإمام مالك رحمه الله لمن سأله عن مسائل: **«لا أدري»**. فقيل له: كيف تقول لا أدري وأنت إمام دار الهجرة؟ فقال: اذهب فأخبرهم أن مالكًا **لا يحسن كل شيء**.\n\nL'imām Mālik, qu'Allāh lui fasse miséricorde, répondait à qui l'interrogeait sur certaines questions : **« Je ne sais pas. »** On lui dit : « Comment dis-tu 'je ne sais pas', toi l'imām de la ville du Prophète ? » Il répondit : « Va leur dire que Mālik **ne maîtrise pas tout**. »",
        source: "Rapporté dans Tartīb al-madārik, al-Qāḍī ʿIyāḍ",
      },
      {
        type: "focus",
        kind: "repere",
        title: "L'aveu du savant, non son échec",
        text: "Dire « je ne sais pas » n'a jamais été, dans la tradition, un aveu de faiblesse mais un **signe de rigueur**. Les biographes rapportent qu'un tiers des réponses de Mālik aux quarante-huit questions qu'on lui posa un jour furent des « je ne sais pas ». Cette proportion n'a rien diminué de son autorité : elle l'a au contraire consolidée.",
      },
      {
        type: "quote",
        text:
          "قال الشافعي رحمه الله: **من أفتى بكل ما يُسأل عنه فهو مجنون**.\n\nAl-Shāfiʿī, qu'Allāh lui fasse miséricorde, a dit : **« Celui qui donne un avis juridique sur tout ce qu'on lui demande est un fou. »**",
        source: "Rapporté par al-Bayhaqī, Manāqib al-Shāfiʿī",
      },
      { type: "h2", text: "Ce que le tawaqquf n'est pas" },
      {
        type: "balance",
        title: "Suspendre le jugement, ce n'est pas douter de tout",
        arabic: "التوقف لا الشك",
        affirmLabel: "Ce que fait le tawaqquf",
        denyLabel: "Ce qu'il n'est pas",
        affirm: [
          "Reconnaître une insuffisance précise et momentanée de preuve.",
          "Continuer activement la recherche sur la question suspendue.",
          "Maintenir fermement les certitudes déjà établies par ailleurs.",
        ],
        deny: [
          "Un scepticisme généralisé qui met tout savoir en balance.",
          "Une paresse qui renonce à chercher sous prétexte de prudence.",
          "Un prétexte pour ne jamais s'engager sur rien.",
        ],
        caption: "Le tawaqquf est chirurgical : il porte sur une question précise, jamais sur l'ensemble du savoir.",
      },
      { type: "h2", text: "Le temps long de certaines questions" },
      {
        type: "p",
        text: "L'histoire des sciences islamiques regorge de questions restées ouvertes pendant des générations avant qu'une réponse stable n'émerge — ou parfois sans qu'elle n'émerge jamais, la divergence elle-même devenant une donnée acquise de la discipline. Ce **temps long** n'est pas un défaut du système : il est la condition même de sa fiabilité.",
      },
      {
        type: "chronologie",
        title: "Une question de fiqh restée débattue plusieurs siècles",
        events: [
          { date: "IIe s. H.", label: "Premières divergences", note: "Les compagnons puis leurs successeurs formulent des positions distinctes sans qu'aucune ne s'impose universellement." },
          { date: "IIIe–IVe s. H.", label: "Consolidation des écoles", note: "Chaque madhhab affine son argumentaire, sans que le désaccord entre écoles ne soit résorbé." },
          { date: "Ve–IXe s. H.", label: "Transmission de la divergence", note: "Les commentateurs enseignent la question **comme un cas d'école du raisonnement**, non comme un problème à clore de force." },
          { date: "Aujourd'hui", label: "Persistance légitime", note: "La question demeure disputée ; les spécialistes s'accordent sur la légitimité de plusieurs positions." },
        ],
        caption: "Une divergence qui dure des siècles n'est pas un échec de la science : elle en est parfois le fruit le plus mûr.",
      },
      { type: "h2", text: "L'objection de l'urgence" },
      {
        type: "objection",
        objection:
          "Mais la vie exige des décisions concrètes. On ne peut pas suspendre indéfiniment son jugement sur une question qui appelle une action immédiate : prier, manger, se marier, tout cela ne peut attendre la résolution théorique.",
        reponse:
          "La distinction est ici décisive entre **le plan pratique** et **le plan théorique**. Sur le plan pratique, le musulman ordinaire suit un avis fiable disponible — celui de son madhhab, celui d'un savant de confiance — sans que cela suppose une certitude absolue et définitive sur la question sous-jacente. Le tawaqquf concerne le chercheur qui **n'a pas encore tranché la question savante elle-même**, pas le croyant qui doit agir aujourd'hui. Les deux plans coexistent sans se contredire : on peut agir prudemment selon un avis reçu tout en reconnaissant, au niveau de l'analyse, que la question mérite encore d'être approfondie.",
        suite: "C'est ainsi que des savants ont pu suivre une pratique dans leur propre vie tout en enseignant que la question restait, sur le plan théorique, ouverte à la discussion.",
      },
      { type: "h2", text: "Les degrés de l'incertitude assumée" },
      {
        type: "degres",
        title: "De l'ignorance brute à la certitude établie",
        arabic: "مراتب العلم",
        direction: "asc",
        degres: [
          { label: "Ignorance simple", arabic: "الجهل البسيط", note: "On ne sait pas et on ne sait pas qu'on ne sait pas." },
          { label: "Conscience du manque", arabic: "الشعور بالنقص", note: "On identifie précisément ce qui manque pour trancher." },
          { label: "Tawaqquf actif", arabic: "التوقف الفعّال", note: "On suspend le jugement tout en poursuivant activement la recherche." },
          { label: "Opinion probable", arabic: "الظن الراجح", note: "Une position se dégage, avec un degré de certitude suffisant pour agir." },
          { label: "Certitude établie", arabic: "اليقين", note: "La question est réglée par une preuve décisive, rarement atteinte sur les questions fines." },
        ],
        caption: "Le tawaqquf occupe une place intermédiaire honorable : il est supérieur à l'ignorance qui s'ignore, et n'usurpe pas la certitude qu'il n'a pas atteinte.",
      },
      { type: "h3", text: "Le danger inverse : la précipitation" },
      {
        type: "focus",
        kind: "vigilance",
        title: "Répondre pour ne pas paraître ignorant",
        text: "Le principal ennemi du tawaqquf n'est pas la paresse intellectuelle mais **la vanité** : la peur de perdre la face devant celui qui pose la question. Combien de réponses hâtives, données sous cette pression sociale, ont ensuite dû être rétractées, avec un dommage bien supérieur à celui d'un « je ne sais pas » initial.",
      },
      {
        type: "quote",
        text:
          "قال ابن مسعود رضي الله عنه: **من أفتى الناس في كل ما يستفتونه فيه فهو مجنون**، ولو أن أحدهم سئل عما لا علم له به فقال: لا أدري، أصاب العلم.\n\nIbn Masʿūd, qu'Allāh l'agrée, a dit : **« Celui qui répond aux gens sur tout ce qu'on lui demande est un fou. »** Et si l'un d'eux, interrogé sur ce qu'il ne connaît pas, disait « je ne sais pas », il aurait **atteint le savoir**.",
        source: "Rapporté par al-Dārimī, Sunan",
      },
      { type: "h2", text: "Une discipline du cœur autant que de l'esprit" },
      {
        type: "p",
        text: "Le tawaqquf exige une forme de renoncement intérieur : accepter de vivre avec une question non résolue, sans que cette absence de clôture ne devienne une souffrance insupportable. C'est une **maturité affective** avant d'être une compétence intellectuelle — la capacité de tolérer l'incertitude sans la fuir dans une fausse certitude.",
      },
      {
        type: "experiment",
        title: "Tenir une question ouverte, un exercice",
        steps: [
          "Choisis une question sur laquelle tu as une opinion ferme mais peu étayée.",
          "Recherche honnêtement les arguments des positions opposées, sans chercher d'emblée à les réfuter.",
          "Note explicitement ce qui te manque pour trancher avec certitude.",
          "Accepte, pour une durée fixée, de répondre « je ne sais pas encore » si la question revient.",
        ],
        conclusion: "L'exercice révèle souvent que **la certitude affichée cachait une lacune** qu'on n'avait jamais pris le temps d'examiner.",
      },
      { type: "h2", text: "Le tawaqquf face à l'autorité" },
      {
        type: "spectre",
        title: "Du silence craintif à l'affirmation dogmatique",
        left: "Silence par lâcheté",
        right: "Affirmation par vanité",
        markers: [
          { label: "Se taire pour éviter la controverse", position: 10, note: "Fuite du devoir de transmettre ce qu'on sait réellement." },
          { label: "Tawaqquf honnête", position: 50, note: "Suspendre son jugement précisément là où le savoir manque, sans plus ni moins." },
          { label: "Trancher par excès de confiance", position: 90, note: "Affirmer au-delà de ce que la preuve permet." },
        ],
        caption: "Le juste milieu n'est ni le mutisme généralisé ni l'affirmation systématique, mais une évaluation cas par cas de ce qu'on sait vraiment.",
      },
      { type: "h2", text: "L'exemple des Compagnons" },
      {
        type: "list",
        items: [
          "ʿUmar ibn al-Khaṭṭāb consultait longuement avant de trancher les affaires nouvelles, sans se hâter par crainte de se tromper.",
          "Ibn ʿAbbās, pourtant réputé pour sa vaste science, disait « je ne sais pas » sur des questions précises qu'on lui posait.",
          "ʿAlī ibn Abī Ṭālib rapportait qu'il valait mieux dire trois fois « Allāhu aʿlam » que de se prononcer sans preuve sur le Livre d'Allāh.",
        ],
      },
      {
        type: "quote",
        text:
          "قال علي رضي الله عنه: **لأن أُسأل عمّا لا أعلم فأقول لا أعلم أحبّ إليّ من أن أُسأل عمّا أعلم فأتكلّف**.\n\n ʿAlī, qu'Allāh l'agrée, a dit : **« Qu'on m'interroge sur ce que j'ignore et que je dise 'je ne sais pas' m'est plus cher que d'être interrogé sur ce que je sais et que je me force à répondre sans certitude. »**",
        source: "Rapporté dans les recueils de sagesses des Compagnons",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Garder une question ouverte pendant des années n'est ni de l'indécision ni de la paresse : c'est une **discipline de vérité**, qui refuse de sacrifier l'exactitude au confort de la clôture. Celui qui l'apprend découvre, avec le temps, que le savoir authentique se reconnaît autant à ce qu'il affirme avec assurance qu'à ce qu'il **consent honnêtement à laisser en suspens**.",
      },
    ],
  },

  {
    slug: slugifySujet("Que faire d'une réponse qui déplaît"),
    title: "Que faire d'une réponse qui déplaît",
    arabic: "الفتوى الثقيلة على النفس",
    intro:
      "Il arrive qu'une question posée avec sincérité reçoive une réponse qui contrarie ce qu'on espérait entendre. Le réflexe le plus courant est alors de chercher un autre avis, plus accommodant, jusqu'à obtenir la réponse désirée — quitte à multiplier les consultations. Ce sujet examine ce que la tradition islamique enseigne sur la **réception d'une réponse déplaisante** : comment la distinguer d'un avis simplement mal formulé, comment évaluer sa légitimité, et pourquoi le confort immédiat de l'âme ne saurait être le critère de la vérité religieuse.",
    body: [
      { type: "h2", text: "Le problème posé" },
      {
        type: "p",
        text: "Une réponse religieuse peut déplaire pour deux raisons très différentes : parce qu'elle est **mal fondée** — auquel cas la contester est légitime et même nécessaire — ou parce qu'elle **contrarie un désir**, auquel cas la rejeter relève d'un tout autre mécanisme, celui que le Coran nomme **hawā**, le penchant de l'âme. Confondre les deux motifs est l'une des sources les plus fréquentes de l'égarement religieux contemporain.",
      },
      {
        type: "lexique",
        root: "ه و ي",
        transliteration: "h-w-y",
        sense:
          "Pencher, tomber, être attiré vers le bas. Le **hawā** est l'inclination de l'âme vers ce qui lui plaît, indépendamment de sa vérité. Il n'est pas condamnable en lui-même — l'homme est fait de désirs — mais devient dangereux quand il **se substitue au critère du vrai**.",
        derives: [
          { word: "hawā", arabic: "هَوَى", gloss: "Le penchant, le désir qui incline le jugement." },
          { word: "muttabiʿ hawāhu", arabic: "مُتَّبِعُ هَوَاهُ", gloss: "Celui qui suit son penchant plutôt que la preuve." },
          { word: "hawan muttabaʿ", arabic: "هَوًى مُتَّبَع", gloss: "Un désir suivi aveuglément, cité par le Prophète ﷺ parmi les causes de perdition." },
        ],
        note: "**أَفَرَءَيْتَ مَنِ ٱتَّخَذَ إِلَٰهَهُۥ هَوَىٰهُ** — « Que dis-tu de celui qui a pris son propre désir pour divinité ? » (45:23)",
      },
      { type: "h2", text: "Un verset central" },
      {
        type: "verse",
        arabic:
          "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا۟ فِىٓ أَنفُسِهِمْ حَرَجًا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا۟ تَسْلِيمًا",
        translation:
          "Non ! par ton Seigneur, ils ne seront pas croyants tant qu'ils ne t'auront demandé de juger de leurs disputes et n'auront trouvé **nulle gêne en eux-mêmes** de ce que tu as décidé, et tant qu'ils ne se seront **soumis complètement**.",
        reference: "Coran, al-Nisāʾ, 4:65",
      },
      {
        type: "p",
        text: "Ce verset ne demande pas seulement d'obéir extérieurement à un jugement déplaisant : il demande de **ne trouver en soi aucune gêne**, c'est-à-dire de travailler intérieurement jusqu'à ce que l'âme elle-même s'apaise devant la vérité reçue. C'est une exigence d'une profondeur remarquable : la soumission n'est complète que lorsqu'elle atteint le for intérieur, pas seulement le comportement.",
      },
      { type: "h2", text: "Distinguer deux réactions" },
      {
        type: "comparaison",
        title: "Deux façons de recevoir une réponse déplaisante",
        columns: ["Réaction légitime", "Réaction problématique"],
        rows: [
          { criterion: "Point de départ", cells: ["Un doute argumenté sur la méthode ou la preuve", "Un simple inconfort émotionnel"] },
          { criterion: "Démarche", cells: ["Demander les preuves, comparer les positions savantes", "Chercher un avis qui flatte le désir initial"] },
          { criterion: "Attitude envers le savant", cells: ["Respect maintenu même en cas de désaccord argumenté", "Disqualification dès que la réponse déplaît"] },
          { criterion: "Issue possible", cells: ["Changement d'avis fondé sur une preuve supérieure", "Accumulation d'avis jusqu'à trouver le plus commode"] },
        ],
        caption: "La différence ne tient pas au fait de contester, mais **au fondement** de la contestation.",
      },
      { type: "h2", text: "La pratique dangereuse du tatabbuʿ al-rukhaṣ" },
      {
        type: "p",
        text: "Les savants ont nommé et condamné une pratique précise : le **tatabbuʿ al-rukhaṣ**, la recherche systématique des positions les plus légères parmi les écoles, non par nécessité réelle mais par **confort personnel**. Cette pratique diffère radicalement du fait de suivre légitimement un avis facilitant en cas de besoin authentique.",
      },
      {
        type: "quote",
        text:
          "قال الإمام أحمد رحمه الله: **من تتبع رخص العلماء فقد جمع الشر كله**.\n\nL'imām Aḥmad, qu'Allāh lui fasse miséricorde, a dit : **« Celui qui traque les facilités données par les savants a rassemblé tout le mal en lui. »**",
        source: "Rapporté par Ibn ʿAbd al-Barr, Jāmiʿ bayān al-ʿilm",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "La nécessité, pas le confort",
        text: "Suivre un avis facilitant lorsqu'une véritable nécessité l'exige — maladie, contrainte réelle, situation exceptionnelle — est une miséricorde reconnue par la Loi elle-même. Ce qui est condamné, c'est de **fabriquer une nécessité imaginaire** pour justifier un confort qui n'en est pas un.",
      },
      { type: "h2", text: "Le shopping religieux" },
      {
        type: "schema",
        title: "Le parcours du chercheur de réponse confortable",
        variant: "flow",
        nodes: [
          { label: "Question posée à un premier savant", note: "Réponse jugée trop stricte, écartée d'emblée." },
          { label: "Consultation d'un second avis", note: "Recherche non de la vérité mais d'une réponse plus douce." },
          { label: "Sélection de l'avis le plus commode", note: "Souvent isolé de son contexte et de ses conditions." },
          { label: "Justification a posteriori", note: "L'avis choisi est présenté comme le 'vrai' avis, les autres comme dépassés." },
        ],
        caption: "Ce parcours inverse l'ordre normal : au lieu de chercher la vérité puis de s'y conformer, on part du confort désiré et on cherche une caution religieuse.",
      },
      { type: "h2", text: "L'objection du besoin réel" },
      {
        type: "objection",
        objection:
          "Mais toutes les écoles reconnaissent la légitimité de suivre, en cas de besoin, l'avis le plus facilitant parmi les positions établies. N'est-ce pas contradictoire avec l'interdiction de rechercher les rukhaṣ ?",
        reponse:
          "Il n'y a pas de contradiction si l'on distingue le **critère** qui guide le choix. Suivre un avis facilitant parce qu'une nécessité réelle et vérifiable l'impose est une chose ; le rechercher systématiquement pour éviter tout effort ou toute contrainte religieuse en est une autre. Les savants ont posé des conditions précises à la première pratique — la sincérité de la nécessité, l'absence de contradiction flagrante entre les avis mélangés, le respect de la cohérence d'ensemble — précisément pour empêcher qu'elle ne dégénère en la seconde.",
        suite: "C'est pourquoi certains juristes exigent qu'on ne mélange pas les avis de différentes écoles au sein d'un même acte de façon à obtenir un résultat qu'aucune des écoles, prise isolément, n'aurait permis.",
      },
      { type: "h2", text: "Réponses déplaisantes et croissance spirituelle" },
      {
        type: "p",
        text: "Il existe une lecture plus positive de l'inconfort : une réponse qui déplaît peut être précisément **le signe qu'elle touche un point sensible**, un attachement de l'âme qu'il convient d'examiner plutôt que de fuir. La gêne n'est pas toujours une preuve d'erreur de la réponse ; elle est parfois la preuve d'un travail intérieur encore à faire.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas confondre la gêne salutaire et l'injustice",
        text: "Cette lecture ne dispense pas de vérifier la validité de la réponse elle-même. **Une réponse peut être à la fois déplaisante et fausse** — mal fondée, hors contexte, appliquée sans discernement. La gêne ressentie n'est jamais, à elle seule, un argument ni pour ni contre la vérité d'un avis.",
      },
      {
        type: "degres",
        title: "Comment traiter une réponse qui déplaît",
        direction: "asc",
        degres: [
          { label: "Reconnaître l'émotion", note: "Nommer honnêtement l'inconfort ressenti sans le nier ni le fuir." },
          { label: "Vérifier la source", note: "S'assurer que la réponse vient d'une compétence reconnue et repose sur une méthode sérieuse." },
          { label: "Examiner l'argument", note: "Chercher la preuve invoquée, la comprendre, éventuellement la questionner avec des outils légitimes." },
          { label: "Distinguer désir et raison", note: "Se demander honnêtement si le rejet vient d'un doute réel ou d'un simple penchant." },
          { label: "Se soumettre ou approfondir", note: "Accepter la réponse si elle tient, ou chercher un avis mieux fondé — jamais seulement plus doux." },
        ],
        caption: "Chaque étape retarde le jugement final au profit d'un examen honnête, à rebours du réflexe de rejet immédiat.",
      },
      { type: "h2", text: "L'exemple des Compagnons face à des jugements durs" },
      {
        type: "quote",
        text:
          "لما نزلت آية تحريم الخمر شقّ ذلك على بعض الصحابة، ثم قالوا: **انتهينا ربنا، انتهينا**.\n\nLorsque le verset interdisant le vin fut révélé, la chose parut difficile à certains Compagnons ; ils dirent néanmoins : **« Nous avons cessé, notre Seigneur, nous avons cessé. »**",
        source: "Rapporté par Abū Dāwūd, à propos de la révélation de 5:90-91",
      },
      {
        type: "p",
        text: "Cet épisode illustre le modèle recherché : la difficulté initiale n'a pas été niée, mais elle n'a pas non plus empêché la **soumission résolue**. Les Compagnons n'ont pas cherché un compromis pour alléger le verset ; ils ont accepté la contrariété tout en travaillant à l'accueillir intérieurement.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Une réponse qui déplaît n'est ni automatiquement vraie du seul fait qu'elle contrarie, ni automatiquement fausse du seul fait qu'elle dérange. Le critère du vrai reste **la preuve**, pas le confort. Ce que la tradition demande n'est pas d'aimer immédiatement toute réponse reçue, mais de **distinguer honnêtement** le doute argumenté du simple penchant, et de travailler patiemment son cœur jusqu'à n'y trouver, comme le dit le verset, **nulle gêne**.",
      },
    ],
  },

  {
    slug: slugifySujet("Choisir un maître, choisir un livre"),
    title: "Choisir un maître, choisir un livre",
    arabic: "اختيار الشيخ واختيار الكتاب",
    intro:
      "L'abondance actuelle de contenus religieux — vidéos, livres traduits, comptes en ligne — a rendu le choix des sources d'apprentissage à la fois plus facile en apparence et plus périlleux en réalité. Ce sujet examine les critères traditionnels du choix d'un maître et d'un livre d'étude, la différence entre **information** et **transmission**, et pourquoi la tradition islamique a toujours attaché une importance considérable à la question : « de qui prends-tu ta religion ? »",
    body: [
      { type: "h2", text: "Une question ancienne et actuelle" },
      {
        type: "quote",
        text:
          "قال محمد بن سيرين رحمه الله: **إن هذا العلم دين، فانظروا عمن تأخذون دينكم**.\n\nMuḥammad ibn Sīrīn, qu'Allāh lui fasse miséricorde, a dit : **« Ce savoir est une religion : regardez donc de qui vous prenez votre religion. »**",
        source: "Rapporté par Muslim, dans l'introduction de son Ṣaḥīḥ",
      },
      {
        type: "p",
        text: "Cette parole, prononcée à une époque où la fabrication de faux propos prophétiques avait commencé, garde une actualité frappante à l'ère numérique, où la vitesse de diffusion excède de loin la capacité de vérification. **Le choix des sources n'est jamais neutre** : il façonne, souvent sans qu'on s'en aperçoive, la sensibilité religieuse tout entière.",
      },
      { type: "h2", text: "Livre et maître : deux médiations différentes" },
      {
        type: "p",
        text: "Le livre transmet un contenu fixé, mais **le maître transmet aussi une manière** : le ton, la mesure, la prudence dans le jugement, l'art de nuancer, l'attitude devant le doute. C'est pourquoi la tradition a toujours préféré, quand cela est possible, l'apprentissage auprès d'un maître vivant à la lecture solitaire d'un livre, sans pour autant dévaloriser le livre lui-même.",
      },
      {
        type: "comparaison",
        title: "Ce que transmet chaque support",
        columns: ["Le livre", "Le maître"],
        rows: [
          { criterion: "Contenu", cells: ["Fixé, vérifiable, stable dans le temps", "Vivant, adapté à la situation de l'élève"] },
          { criterion: "Méthode", cells: ["Implicite, à reconstituer par le lecteur", "Modelée directement devant l'élève"] },
          { criterion: "Correction des erreurs", cells: ["Impossible en temps réel", "Immédiate, par le dialogue"] },
          { criterion: "Risque propre", cells: ["Mauvaise interprétation sans garde-fou", "Dépendance excessive, absence de recul critique"] },
        ],
        caption: "Les deux supports se complètent ; aucun ne remplace entièrement l'autre.",
      },
      { type: "h2", text: "Les critères du choix d'un maître" },
      {
        type: "list",
        items: [
          "Une **chaîne de transmission** reconnue, c'est-à-dire l'attestation d'autres savants établis quant à sa formation.",
          "Une **cohérence** entre ce qu'il enseigne et ce qu'il vit, sans exiger pour autant une perfection impossible.",
          "Une **mesure** dans le jugement, l'absence de tranchant systématique sur les questions divergentes.",
          "Une **capacité à dire 'je ne sais pas'**, signe distinctif d'une formation sérieuse.",
          "Un **rattachement institutionnel ou communautaire** identifiable, plutôt qu'une autorité auto-proclamée et isolée.",
        ],
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'éloquence n'est pas la preuve de la science",
        text: "Un discours fluide, une présence charismatique et une grande popularité en ligne ne garantissent en rien la solidité du savoir transmis. **La rhétorique et la science sont deux compétences distinctes**, et leur confusion est l'une des causes majeures de l'égarement religieux contemporain.",
      },
      { type: "h2", text: "Une chaîne, pas un point isolé" },
      {
        type: "schema",
        title: "La transmission comme chaîne",
        arabic: "سلسلة الإسناد",
        variant: "flow",
        nodes: [
          { label: "Le Prophète ﷺ", note: "Source première de l'enseignement." },
          { label: "Les Compagnons", note: "Témoins directs, transmetteurs premiers." },
          { label: "Les générations de savants", note: "Chaque génération vérifie et transmet à la suivante." },
          { label: "Le maître contemporain", note: "Rattaché, idéalement, à cette chaîne par sa formation reconnue." },
          { label: "L'élève d'aujourd'hui", note: "Reçoit non un contenu isolé mais l'aboutissement d'une chaîne vérifiée." },
        ],
        caption: "Un enseignement coupé de toute chaîne de transmission ressemble davantage à une opinion personnelle qu'à un savoir religieux.",
      },
      { type: "h2", text: "Les critères du choix d'un livre" },
      {
        type: "p",
        text: "Le choix d'un livre appelle une vigilance différente, puisqu'il n'y a plus d'interaction possible avec l'auteur. Les savants ont recommandé de privilégier, pour l'apprenant débutant, les **abrégés reconnus** d'une école établie plutôt que les ouvrages de synthèse personnelle, souvent séduisants mais risqués faute de garde-fous méthodologiques.",
      },
      {
        type: "degres",
        title: "Une progression classique dans la lecture",
        direction: "asc",
        degres: [
          { label: "Le mukhtaṣar", arabic: "المختصر", note: "Un abrégé bref, mémorisable, qui fixe le squelette de la matière." },
          { label: "Le sharḥ", arabic: "الشرح", note: "Un commentaire qui déploie et justifie ce que l'abrégé énonçait sèchement." },
          { label: "La ḥāshiya", arabic: "الحاشية", note: "Une glose fine qui répond aux objections et affine les subtilités." },
          { label: "L'ouvrage de référence étendu", arabic: "المطولات", note: "Réservé à qui maîtrise déjà les strates précédentes." },
        ],
        caption: "Sauter les premiers degrés pour se jeter directement sur les ouvrages étendus produit souvent une érudition fragile, désordonnée.",
      },
      { type: "h2", text: "L'objection de l'accès démocratisé" },
      {
        type: "objection",
        objection:
          "N'est-il pas élitiste d'insister sur les maîtres et les chaînes de transmission, alors que les livres et les enregistrements permettent aujourd'hui à chacun d'apprendre par soi-même, sans dépendre d'une hiérarchie savante parfois difficile d'accès ?",
        reponse:
          "L'accès élargi au savoir est un bienfait réel, que la tradition n'a jamais rejeté par principe — les grands savants ont eux-mêmes constitué d'immenses bibliothèques et encouragé la lecture. Le point n'est pas de restreindre l'accès, mais de **rappeler que lire n'est pas la même chose que comprendre**, et que comprendre correctement une matière technique requiert le plus souvent un accompagnement, au moins à ses débuts. L'autodidaxie totale en matière religieuse, sans aucune vérification extérieure, expose à des erreurs d'interprétation dont l'histoire fournit d'innombrables exemples, souvent commis par des personnes par ailleurs intelligentes et sincères.",
        suite: "D'où la formule classique : celui qui prend son savoir uniquement dans les livres, sans maître, se trompe plus qu'il ne le croit, précisément parce que rien ne lui signale son erreur.",
      },
      {
        type: "quote",
        text:
          "يقال: **من كان شيخه كتابه كان خطؤه أكثر من صوابه**.\n\nOn dit : **« Celui dont le maître est le livre commettra plus d'erreurs que de justes réponses. »**",
        source: "Adage transmis dans la tradition pédagogique islamique",
      },
      { type: "h2", text: "Un équilibre à tenir" },
      {
        type: "balance",
        title: "Ni rejet du livre, ni culte du maître",
        affirmLabel: "Attitude équilibrée",
        denyLabel: "Dérives à éviter",
        affirm: [
          "Lire largement tout en cherchant, quand c'est possible, un accompagnement qualifié.",
          "Vérifier les qualifications réelles d'un enseignant avant de s'y attacher durablement.",
          "Accepter de corriger sa compréhension d'un livre à la lumière d'un enseignement reçu.",
        ],
        deny: [
          "Rejeter tout apprentissage individuel par les livres au nom d'un culte exclusif du maître.",
          "Suivre aveuglément un enseignant sans jamais examiner la cohérence de son discours.",
          "S'enfermer dans la lecture solitaire en refusant toute correction extérieure.",
        ],
        caption: "Le livre nourrit, le maître oriente ; les deux sont nécessaires à des degrés différents selon le niveau de l'apprenant.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Choisir un maître et choisir un livre sont deux décisions que la tradition islamique a toujours prises au sérieux, car elles engagent, selon le mot d'Ibn Sīrīn, **la religion elle-même**. Ni la méfiance systématique envers toute autorité savante, ni la naïveté qui accepte n'importe quel discours pourvu qu'il soit assuré et populaire, ne rendent justice à l'exigence de cette transmission : elle demande **discernement, patience, et vérification**.",
      },
    ],
  },

  {
    slug: slugifySujet("Enseigner à des débutants sans simplifier abusivement"),
    title: "Enseigner à des débutants sans simplifier abusivement",
    arabic: "تعليم المبتدئين دون إخلال",
    intro:
      "Tout enseignant fait face au même dilemme : comment rendre une matière complexe accessible sans en trahir la substance ? La simplification est nécessaire — nul n'apprend en étant immédiatement confronté à toute la richesse d'une discipline — mais elle devient une **faute pédagogique** lorsqu'elle déforme au point de devoir être désapprise plus tard. Ce sujet examine la frontière entre simplification légitime et simplification abusive, à travers les méthodes classiques d'enseignement graduel en sciences islamiques.",
    body: [
      { type: "h2", text: "Le paradoxe pédagogique" },
      {
        type: "p",
        text: "Un débutant ne peut recevoir d'emblée la totalité des nuances d'une question : il serait submergé, découragé, incapable de retenir quoi que ce soit. Mais s'il reçoit une version trop réduite, il risque de **prendre le simplifié pour le complet**, et de bâtir sur cette confusion des années d'apprentissage erroné. La bonne pédagogie navigue entre ces deux écueils sans jamais totalement les éliminer.",
      },
      {
        type: "quote",
        text:
          "قال علي رضي الله عنه: **حدثوا الناس بما يعرفون، أتحبون أن يُكذَّب الله ورسوله؟**\n\nʿAlī, qu'Allāh l'agrée, a dit : **« Parlez aux gens de ce qu'ils peuvent comprendre. Voulez-vous qu'Allāh et Son Messager soient traités de menteurs ? »**",
        source: "Rapporté par al-Bukhārī",
      },
      {
        type: "p",
        text: "Cette parole célèbre n'autorise pas la déformation du savoir : elle porte sur le **choix du moment et de la matière enseignée**, non sur son exactitude. ʿAlī n'invite pas à mentir à un débutant, mais à **retenir provisoirement** certains éléments dont la présentation prématurée nuirait plus qu'elle n'aiderait.",
      },
      { type: "h2", text: "Simplification légitime : trois procédés" },
      {
        type: "comparaison",
        title: "Ce qu'on peut légitimement faire varier",
        columns: ["Procédé", "En quoi il consiste", "Ce qu'il préserve"],
        rows: [
          { criterion: "Séquençage", cells: ["Enseigner d'abord l'essentiel, les nuances viendront ensuite", "L'exactitude de ce qui est dit, même partiel"] },
          { criterion: "Réduction du vocabulaire technique", cells: ["Employer des mots courants plutôt que la terminologie savante", "Le sens exact, reformulé sans le trahir"] },
          { criterion: "Choix des exemples", cells: ["Privilégier des cas simples et fréquents avant les cas rares", "La structure du raisonnement, applicable ensuite aux cas complexes"] },
        ],
        caption: "Dans les trois cas, on retient une partie du réel, mais on ne le déforme pas : ce qui est dit reste vrai, même incomplet.",
      },
      { type: "h2", text: "Simplification abusive : trois dérives" },
      {
        type: "list",
        items: [
          "Présenter comme **unanime** une question en réalité disputée entre savants, pour éviter la complexité de la divergence.",
          "Réduire une règle à un **slogan** qui perd les conditions et les exceptions essentielles à sa juste application.",
          "Fabriquer une **fausse causalité simple** (« telle pratique cause tel résultat spirituel immédiat ») pour rendre l'enseignement plus vendable.",
        ],
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le slogan qui tue la nuance",
        text: "Une formule mémorable a l'avantage de se retenir facilement, mais **une règle religieuse réduite à un slogan perd presque toujours ses conditions d'application**. L'élève retient la formule, l'applique hors contexte, et découvre parfois trop tard qu'elle ne valait que pour un cas particulier.",
      },
      { type: "h2", text: "L'exemple du curriculum classique" },
      {
        type: "p",
        text: "L'école mālikite, comme les autres écoles, a développé une **progression graduée** de manuels, précisément pour éviter les deux écueils : elle ne jette pas le débutant dans la complexité entière, et elle ne l'enferme pas non plus dans une simplicité définitive dont il faudrait ensuite se défaire.",
      },
      {
        type: "schema",
        title: "Le curriculum comme spirale, non comme ligne droite",
        variant: "flow",
        nodes: [
          { label: "Premier passage : le squelette", note: "Les règles générales, énoncées sans les subtilités, mais énoncées vraiment." },
          { label: "Deuxième passage : les exceptions", note: "On revient sur les mêmes règles en ajoutant les cas particuliers." },
          { label: "Troisième passage : les divergences", note: "On expose les débats entre savants sur les points encore disputés." },
          { label: "Quatrième passage : l'application experte", note: "L'élève devenu savant applique la règle avec tout son contexte." },
        ],
        caption: "Chaque passage n'annule pas le précédent : il l'enrichit. Le débutant n'a pas appris une chose fausse, mais une chose incomplète, appelée à se compléter.",
      },
      { type: "h2", text: "L'objection du temps limité" },
      {
        type: "objection",
        objection:
          "Tous les élèves n'ont pas le loisir de suivre un curriculum complet sur plusieurs années. Certains n'auront qu'une seule occasion d'apprendre une règle avant d'avoir à l'appliquer. N'est-il pas alors préférable de leur donner une version simple, quitte à ce qu'elle soit incomplète ?",
        reponse:
          "La réponse dépend de ce qu'on entend par « incomplète ». Une règle énoncée sans toutes ses nuances mais **vraie dans son énoncé principal** reste utile et légitime : elle guidera correctement l'élève dans la majorité des cas. Le problème surgit lorsque la simplification introduit une **fausseté** — par exemple présenter comme absolue une règle qui comporte en réalité des exceptions fréquentes. Dans ce second cas, mieux vaut une règle plus longue mais exacte qu'une règle courte mais trompeuse, quitte à accepter que l'élève retienne moins de contenu au total.",
        suite: "Les manuels classiques choisissent souvent une troisième voie : ils énoncent la règle générale brièvement, puis ajoutent une clause de prudence du type « sauf cas particulier, à demander à un savant », qui protège sans alourdir.",
      },
      { type: "h2", text: "Le rôle du 'sauf cas particulier'" },
      {
        type: "focus",
        kind: "subtilite",
        title: "Une clause de sécurité, pas un aveu de faiblesse",
        text: "Ajouter systématiquement, dans l'enseignement aux débutants, une clause invitant à consulter en cas de situation atypique n'affaiblit pas l'enseignement : elle **complète honnêtement** ce qui a été simplifié, en indiquant clairement où s'arrête la portée de la règle donnée.",
      },
      { type: "h2", text: "L'erreur inverse : la surcharge précoce" },
      {
        type: "p",
        text: "Le souci d'exactitude peut lui aussi devenir une faute pédagogique lorsqu'il se transforme en **surcharge** : vouloir tout dire dès le premier cours, multiplier les exceptions et les divergences avant même que l'élève ait assimilé la règle générale, produit souvent une confusion pire que celle qu'on cherchait à éviter.",
      },
      {
        type: "spectre",
        title: "Entre l'appauvrissement et la surcharge",
        left: "Simplification déformante",
        right: "Exhaustivité précoce",
        markers: [
          { label: "Slogan sans conditions", position: 5, note: "Retient une formule fausse par omission." },
          { label: "Règle générale claire avec clause de prudence", position: 50, note: "Vraie, utile, et honnête sur ses limites." },
          { label: "Toutes les divergences dès le premier cours", position: 95, note: "Noie le débutant avant qu'il ait pu retenir l'essentiel." },
        ],
        caption: "Le juste enseignement se situe dans une zone médiane, ajustée au niveau réel de l'élève.",
      },
      { type: "h2", text: "Une expérience pédagogique simple" },
      {
        type: "experiment",
        title: "Tester sa propre simplification",
        steps: [
          "Formule en une phrase brève une règle religieuse que tu maîtrises bien.",
          "Demande-toi : cette phrase reste-t-elle vraie dans tous les cas, ou seulement dans la majorité ?",
          "Si elle comporte des exceptions fréquentes, ajoute une clause brève qui les signale sans les développer.",
          "Vérifie que la phrase, une fois complétée, reste mémorisable pour un débutant.",
        ],
        conclusion: "L'exercice montre qu'il est presque toujours possible de rester **à la fois bref et honnête**, à condition d'accepter d'ajouter une courte réserve plutôt qu'une fausse certitude.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Enseigner à des débutants exige un art véritable : celui de **réduire sans trahir**. La simplification n'est pas en elle-même une faute — elle est la condition même de tout apprentissage progressif — mais elle devient dangereuse dès qu'elle abandonne la vérité pour la seule commodité. Le bon pédagogue se reconnaît à ce qu'il transmet **moins, mais vrai**, plutôt que **beaucoup, mais faux**.",
      },
    ],
  },

  {
    slug: slugifySujet("Mémoriser, comprendre, appliquer : dans quel ordre ?"),
    title: "Mémoriser, comprendre, appliquer : dans quel ordre ?",
    arabic: "الحفظ والفهم والعمل",
    intro:
      "L'apprentissage traditionnel des sciences islamiques a longtemps commencé par la **mémorisation**, avant même la pleine compréhension — une méthode qui surprend, voire inquiète, une sensibilité pédagogique moderne attachée à faire précéder tout apprentissage par le sens. Ce sujet examine l'ordre classique mémorisation-compréhension-application, ses justifications, ses limites, et la manière dont il s'articule avec les besoins de l'apprenant contemporain.",
    body: [
      { type: "h2", text: "L'ordre traditionnel" },
      {
        type: "p",
        text: "La méthode classique d'enseignement islamique commençait presque toujours par le **ḥifẓ**, la mémorisation d'un texte concis — souvent un poème didactique ou un abrégé en prose rimée — avant que l'élève n'en reçoive l'explication détaillée. Ce choix, loin d'être arbitraire, répondait à une observation pédagogique précise : un texte mémorisé devient un **squelette mental** sur lequel viendra ensuite se déposer la compréhension.",
      },
      {
        type: "lexique",
        root: "ح ف ظ",
        transliteration: "ḥ-f-ẓ",
        sense:
          "Garder, préserver, retenir. Le ḥāfiẓ n'est pas seulement celui qui a mémorisé un texte : c'est celui qui l'a **mis à l'abri** de l'oubli, pour pouvoir le mobiliser à volonté quand la compréhension en aura besoin.",
        derives: [
          { word: "ḥāfiẓ", arabic: "حَافِظ", gloss: "Celui qui a mémorisé un texte, prêt à le restituer." },
          { word: "maḥfūẓ", arabic: "مَحْفُوظ", gloss: "Ce qui est mémorisé, gardé en sécurité dans l'esprit." },
          { word: "istiḥḍār", arabic: "اِسْتِحْضَار", gloss: "L'acte de faire revenir à l'esprit ce qui a été mémorisé, au moment utile." },
        ],
        note: "**سَنُقْرِئُكَ فَلَا تَنسَىٰٓ** — « Nous te ferons réciter, et tu n'oublieras pas. » (87:6), verset souvent cité à propos de la mémorisation du Coran par le Prophète ﷺ.",
      },
      { type: "h2", text: "Pourquoi mémoriser avant de comprendre ?" },
      {
        type: "quote",
        text:
          "قيل: **من حفظ المتون حاز الفنون**.\n\nOn dit : **« Qui mémorise les textes de base obtient les sciences. »**",
        source: "Adage classique de la pédagogie islamique",
      },
      {
        type: "p",
        text: "L'idée sous-jacente est que la compréhension d'une discipline complexe **prend du temps**, souvent des années, et qu'attendre la pleine compréhension avant toute fixation textuelle revient à **perdre le support** sur lequel cette compréhension pourra s'appuyer plus tard. Un texte mémorisé jeune, même mal compris au départ, révèle son sens par degrés, au fil des explications reçues et de l'expérience accumulée.",
      },
      {
        type: "experiment",
        title: "Le texte qui se révèle avec le temps",
        steps: [
          "Mémorise un court texte technique dont le sens t'échappe largement.",
          "Poursuis ton apprentissage général de la discipline sans revenir systématiquement sur ce texte.",
          "Après plusieurs mois, relis ou récite ce texte de mémoire.",
          "Observe combien de passages, auparavant opaques, sont devenus limpides sans effort supplémentaire spécifique.",
        ],
        conclusion: "Le texte mémorisé agit comme une **graine dormante** qui germe au contact d'une compréhension acquise ailleurs.",
      },
      { type: "h2", text: "Un ordre, pas une hiérarchie de valeur" },
      {
        type: "focus",
        kind: "repere",
        title: "Mémoriser en premier ne signifie pas mémoriser seul",
        text: "L'ordre classique concerne la **séquence d'acquisition**, non la valeur relative des trois étapes. Personne, dans la tradition, n'a jamais soutenu qu'un savoir mémorisé sans être compris ni appliqué suffise : le ḥifẓ est un **moyen**, la compréhension et l'application en sont les **fins**.",
      },
      { type: "h2", text: "Les trois étapes et leurs fruits propres" },
      {
        type: "degres",
        title: "Du texte retenu à la conduite transformée",
        arabic: "الحفظ ثم الفهم ثم العمل",
        direction: "asc",
        degres: [
          { label: "Ḥifẓ — mémorisation", arabic: "الحفظ", note: "Fixer le texte, sans quoi rien ne subsiste à quoi rattacher la compréhension future." },
          { label: "Fahm — compréhension", arabic: "الفهم", note: "Dérouler le sens, les preuves, les articulations logiques du texte mémorisé." },
          { label: "ʿAmal — application", arabic: "العمل", note: "Transformer le savoir compris en conduite effective, sans quoi il reste stérile." },
        ],
        caption: "Chaque étape appelle la suivante : un savoir mémorisé sans être compris demeure une coquille ; compris sans être appliqué, il demeure un ornement.",
      },
      {
        type: "verse",
        arabic: "أَتَأْمُرُونَ ٱلنَّاسَ بِٱلْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ وَأَنتُمْ تَتْلُونَ ٱلْكِتَٰبَ ۚ أَفَلَا تَعْقِلُونَ",
        translation:
          "Commanderez-vous aux gens la bonté et vous oublierez vous-mêmes, alors que vous récitez le Livre ? **Ne raisonnez-vous donc pas ?**",
        reference: "Coran, al-Baqara, 2:44",
      },
      {
        type: "p",
        text: "Ce verset ne dévalorise pas la récitation — il la présuppose comme un bien — mais dénonce son insuffisance lorsqu'elle **ne débouche sur rien**. Le savoir religieux authentique ne s'arrête à aucune des trois étapes prises isolément.",
      },
      { type: "h2", text: "L'objection moderne" },
      {
        type: "objection",
        objection:
          "La pédagogie contemporaine insiste sur l'apprentissage par le sens : mémoriser sans comprendre serait un bourrage inefficace, vite oublié, qui décourage l'élève par son caractère mécanique et apparemment absurde.",
        reponse:
          "Cette critique porte juste contre une mémorisation **totalement coupée** de tout accompagnement, pratiquée sans jamais promettre ni fournir d'explication ultérieure — pratique qui a effectivement existé et que de nombreux pédagogues musulmans ont eux-mêmes critiquée. Mais la méthode classique bien comprise ne sépare jamais durablement la mémorisation de la compréhension : elle se contente d'en **décaler le rythme**, en confiant à la mémoire ce que l'intelligence ne peut pas encore saisir pleinement, avec la certitude qu'elle le saisira plus tard. La différence est donc entre une mémorisation **sans horizon** et une mémorisation **en attente d'un sens à venir**, ce qui change entièrement sa valeur pédagogique.",
        suite: "Les maîtres traditionnels vérifiaient d'ailleurs systématiquement, à chaque étape, que l'élève avançait aussi en compréhension, et non en accumulation vide de textes.",
      },
      { type: "h2", text: "Le risque du savoir sans application" },
      {
        type: "quote",
        text:
          "قال الحسن البصري رحمه الله: **العلم علمان: علم في القلب فذلك العلم النافع، وعلم على اللسان فذلك حجة الله على ابن آدم**.\n\nAl-Ḥasan al-Baṣrī, qu'Allāh lui fasse miséricorde, a dit : **« Le savoir est de deux sortes : un savoir dans le cœur, celui-là est le savoir utile ; et un savoir sur la seule langue, celui-là est un argument d'Allāh contre le fils d'Adam. »**",
        source: "Rapporté par al-Dārimī, Sunan",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le savoir qui accuse au lieu de sauver",
        text: "Un savoir mémorisé et même compris, mais jamais appliqué, ne demeure pas neutre : il devient, selon cette parole célèbre, **une preuve accablante** contre celui qui le détient, précisément parce qu'il ne pourra pas invoquer l'ignorance.",
      },
      { type: "h2", text: "Comment adapter cet ordre aujourd'hui" },
      {
        type: "comparaison",
        title: "L'ordre classique face aux contraintes actuelles",
        columns: ["Contexte classique", "Contexte contemporain"],
        rows: [
          { criterion: "Temps disponible", cells: ["Souvent des années dédiées à l'étude", "Temps fragmenté, contraintes multiples"] },
          { criterion: "Accès au maître", cells: ["Suivi rapproché et continu", "Accès parfois ponctuel ou distant"] },
          { criterion: "Adaptation possible", cells: ["Mémorisation de textes longs et complets", "Mémorisation de textes plus courts, ciblés sur l'essentiel pratique"] },
          { criterion: "Point commun préservé", cells: ["L'articulation mémorisation-compréhension-application", "Le même principe, à échelle réduite mais non abandonné"] },
        ],
        caption: "L'échelle change, le principe demeure : ne jamais laisser l'une des trois étapes se substituer durablement aux deux autres.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'ordre mémoriser-comprendre-appliquer n'est pas une hiérarchie figée mais une **stratégie pédagogique éprouvée**, qui confie à la mémoire ce que l'intelligence ne peut encore saisir, à charge pour elle de le saisir ensuite. Ce qui distingue le savoir vivant du savoir mort n'est donc pas l'étape par laquelle on a commencé, mais **le fait qu'aucune des trois étapes n'ait été durablement négligée**.",
      },
    ],
  },

  {
    slug: slugifySujet("Les erreurs pédagogiques les plus répandues aujourd'hui"),
    title: "Les erreurs pédagogiques les plus répandues aujourd'hui",
    arabic: "أخطاء التعليم الشائعة",
    intro:
      "L'accélération de la diffusion religieuse — cours filmés, extraits courts, forums de discussion — a fait émerger des travers pédagogiques nouveaux, ou du moins amplifié des travers anciens à une échelle inédite. Ce sujet dresse un inventaire critique des erreurs les plus fréquentes dans l'enseignement religieux contemporain, en les mettant en regard des principes classiques qu'elles trahissent, souvent sans le savoir.",
    body: [
      { type: "h2", text: "Un contexte inédit" },
      {
        type: "p",
        text: "Jamais, dans l'histoire islamique, l'accès au contenu religieux n'a été aussi facile ; jamais non plus le contrôle de qualité de ce contenu n'a été aussi difficile à exercer. Cette tension explique une bonne part des erreurs pédagogiques recensées ici : elles ne naissent pas toutes d'une mauvaise intention, mais souvent d'une **adaptation mal pensée** à un format nouveau.",
      },
      { type: "h2", text: "Première erreur : le savoir en extraits" },
      {
        type: "p",
        text: "La fragmentation en courtes vidéos favorise un savoir en **morceaux détachés**, coupés du raisonnement qui les fondait et des conditions qui les encadraient. Une règle valable dans un cas précis circule ainsi comme une vérité générale, sans que la majorité des auditeurs n'ait accès à son contexte d'origine.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'extrait sans le corps du texte",
        text: "Une phrase de trente secondes, prélevée d'un cours de deux heures, **peut dire l'inverse de ce que le cours entier enseignait**, si l'extrait tombe précisément sur l'exposé d'une objection que l'enseignant réfutait ensuite. Ce mécanisme, banal en apparence, a produit d'innombrables malentendus.",
      },
      { type: "h2", text: "Deuxième erreur : la course à l'audience" },
      {
        type: "p",
        text: "Un enseignement conçu pour maximiser l'attention et le partage obéit à une logique différente d'un enseignement conçu pour transmettre fidèlement une science. Le premier privilégie **le tranchant, la controverse, la nouveauté apparente** ; le second privilégie la nuance, la mesure, la fidélité — des qualités structurellement moins virales.",
      },
      {
        type: "comparaison",
        title: "Logique de la transmission fidèle contre logique de l'audience",
        columns: ["Logique de la transmission", "Logique de l'audience"],
        rows: [
          { criterion: "Critère de succès", cells: ["Exactitude et compréhension durable", "Nombre de vues, de partages, de réactions"] },
          { criterion: "Rapport à la divergence", cells: ["Exposée avec ses nuances et son contexte", "Souvent effacée au profit d'une position unique et tranchée"] },
          { criterion: "Rapport au temps", cells: ["Investissement long, résultats différés", "Contenu court, effet immédiat recherché"] },
          { criterion: "Rapport à l'incertitude", cells: ["Le 'je ne sais pas' est acceptable et même valorisé", "Rarement rentable, donc rarement affiché"] },
        ],
        caption: "Ces deux logiques ne sont pas nécessairement incompatibles, mais leur confusion involontaire produit une dérive progressive du contenu vers le sensationnel.",
      },
      { type: "h2", text: "Troisième erreur : l'autorité sans chaîne" },
      {
        type: "p",
        text: "La visibilité en ligne peut conférer une **autorité perçue** totalement indépendante d'une formation réelle vérifiable. Un compte suivi par des centaines de milliers de personnes n'atteste en rien d'une chaîne de transmission solide ; il atteste seulement d'une capacité à capter l'attention, compétence distincte de la compétence savante.",
      },
      {
        type: "quote",
        text:
          "قال ابن سيرين رحمه الله: **إن هذا العلم دين، فانظروا عمن تأخذون دينكم**.\n\nIbn Sīrīn, qu'Allāh lui fasse miséricorde, a dit : **« Ce savoir est une religion : regardez donc de qui vous prenez votre religion. »**",
        source: "Rapporté par Muslim, introduction du Ṣaḥīḥ",
      },
      { type: "h2", text: "Quatrième erreur : la dispute érigée en pédagogie" },
      {
        type: "p",
        text: "Le format du débat contradictoire, efficace pour capter l'attention, s'est imposé comme mode dominant de transmission de certains contenus religieux, alors qu'il convient mal à l'enseignement des fondements. **La controverse spectacularisée** privilégie la victoire rhétorique sur la clarification patiente, et laisse souvent l'auditeur plus confus qu'informé.",
      },
      {
        type: "objection",
        objection:
          "Le débat public n'a-t-il pas toujours existé dans la tradition savante, sous la forme du munāẓara, la joute argumentative organisée entre savants ?",
        reponse:
          "Le munāẓara classique obéissait à des règles strictes — reconnaissance mutuelle de compétence entre les débatteurs, respect de méthodes argumentatives partagées, absence d'enjeu de popularité extérieure — qui en faisaient un exercice de **clarification rigoureuse**, non de spectacle. Le débat contemporain, filmé et diffusé pour son potentiel de partage, subit une pression structurelle vers l'effet de manche que le cadre classique ne connaissait pas. Le format peut être identique en apparence ; le contexte qui l'entoure en change profondément la fonction.",
      },
      { type: "h2", text: "Cinquième erreur : l'absence de progressivité" },
      {
        type: "p",
        text: "Un contenu isolé — une vidéo, un article — ne peut, par définition, situer son propos dans une progression d'ensemble. Le spectateur occasionnel reçoit ainsi des fragments de niveaux très différents sans indication de leur place respective, ce qui produit une **érudition en mosaïque**, désarticulée, où des notions avancées côtoient des lacunes fondamentales.",
      },
      {
        type: "schema",
        title: "Le savoir en mosaïque contre le savoir structuré",
        variant: "branch",
        nodes: [
          { label: "Savoir structuré", note: "Chaque nouvelle notion s'appuie sur des fondations déjà posées et vérifiées." },
          { label: "Savoir en mosaïque", note: "Des fragments juxtaposés sans architecture d'ensemble, glanés au hasard des contenus rencontrés." },
        ],
        caption: "Le second peut sembler aussi riche que le premier en apparence, tout en étant structurellement plus fragile et plus sujet à la confusion.",
      },
      { type: "h2", text: "Sixième erreur : l'émotion substituée à l'argument" },
      {
        type: "p",
        text: "Un enseignement peut chercher à convaincre par l'intensité émotionnelle — voix vibrante, mise en scène du pathétique, appel direct aux sentiments — plutôt que par la solidité de l'argument. L'émotion a sa place légitime dans l'enseignement religieux, la tradition ne l'a jamais niée ; le problème surgit quand elle **remplace** l'argument au lieu de l'accompagner.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "L'émotion, accompagnement légitime, jamais fondement",
        text: "Un cœur ému n'est pas nécessairement un cœur éclairé. Le Coran mêle constamment l'argument rationnel et l'appel du cœur, mais **jamais au détriment l'un de l'autre** : les deux se renforcent, ils ne se substituent pas.",
      },
      { type: "h2", text: "Un tableau récapitulatif" },
      {
        type: "list",
        items: [
          "Le savoir en extraits, coupé de son contexte argumentatif d'origine.",
          "La course à l'audience, qui privilégie le tranchant sur la nuance.",
          "L'autorité sans chaîne, fondée sur la seule visibilité.",
          "La dispute érigée en spectacle plutôt qu'en clarification.",
          "L'absence de progressivité, produisant un savoir en mosaïque.",
          "L'émotion substituée à l'argument plutôt qu'associée à lui.",
        ],
      },
      { type: "h2", text: "Ce que ces erreurs ont en commun" },
      {
        type: "p",
        text: "Chacune de ces dérives, prise isolément, peut sembler mineure ; leur **accumulation** produit un climat général où l'apparence de savoir se substitue progressivement à sa réalité. Le point commun de toutes ces erreurs est le même : la **priorité donnée au format et à son efficacité immédiate sur la fidélité du contenu transmis**.",
      },
      {
        type: "cycle",
        title: "Comment une dérive s'auto-entretient",
        center: "Le format prime sur le fond",
        steps: [
          { label: "Contenu simplifié à l'excès pour capter l'attention", note: "L'exactitude cède devant l'efficacité de diffusion." },
          { label: "Succès mesuré en vues et partages", note: "Le contenu simplifié se propage plus vite qu'un contenu nuancé." },
          { label: "Imitation par d'autres créateurs de contenu", note: "Le format qui fonctionne devient la norme du secteur." },
          { label: "Élévation du niveau d'attente du public", note: "Le public habitué à la simplicité rejette la nuance jugée fastidieuse." },
        ],
        caption: "Le cycle se referme sur lui-même, rendant progressivement plus difficile la diffusion d'un contenu exigeant.",
      },
      { type: "h2", text: "Des pistes de correction" },
      {
        type: "degres",
        title: "Comment résister à ces dérives, en tant qu'apprenant",
        direction: "asc",
        degres: [
          { label: "Vérifier la source", note: "Chercher qui parle, quelle formation, quelle chaîne de transmission." },
          { label: "Chercher le contexte", note: "Ne jamais juger un extrait sans chercher l'ensemble dont il est tiré." },
          { label: "Comparer plusieurs sources sérieuses", note: "Éviter de fonder son savoir sur une source unique, aussi convaincante paraisse-t-elle." },
          { label: "Préférer la durée au sensationnel", note: "Privilégier un apprentissage suivi, même modeste, à une accumulation d'extraits isolés." },
          { label: "Cultiver la patience savante", note: "Accepter que le savoir religieux solide prenne du temps à s'acquérir." },
        ],
        caption: "Aucune de ces pistes n'exige un renoncement à la technologie moderne : elles demandent seulement une **vigilance active** de l'apprenant.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les erreurs pédagogiques les plus répandues aujourd'hui ne relèvent pas nécessairement d'une malveillance, mais souvent d'une **adaptation mal maîtrisée** des principes traditionnels à des formats nouveaux et à leurs contraintes propres. La solution ne consiste pas à rejeter ces formats, mais à leur appliquer, avec discernement, les exigences que la tradition a toujours posées : **la vérification de la source, la fidélité au contexte, et la patience devant un savoir qui ne se donne jamais tout entier d'un seul coup**.",
      },
    ],
  },
];
