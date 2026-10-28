import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre I — « Connaissez-vous Dieu ? »
 * Groupe b — Les qualificatifs divins (al-ṣifāt), selon la voie des salaf
 * (ahl al-sunna wa-l-jamāʿa) : ithbāt sans tashbīh, sans taʿṭīl, sans taḥrīf
 * et sans takyīf, telle qu'exposée par Ibn Taymiyya, Ibn al-Qayyim,
 * al-Shinqīṭī et les savants de leur école.
 */
export const sujetsDieuAttributs: Sujet[] = [
  {
    slug: "divine-attributes-language",
    title: "Le langage des attributs divins",
    arabic: "الصفات",
    intro:
      "Parler de Dieu, c'est parler avec des mots faits pour les créatures. Nous disons « Il sait », « Il veut », « Il entend » — et ces verbes, nous les avons appris en parlant de nous. La voie des salaf tranche ici avec une clarté rare : on affirme le **sens** que le texte indique, sans jamais prétendre en décrire le **comment**.\n\nCette méthode, résumée par la formule « ithbāt bilā tashbīh, tanzīh bilā taʿṭīl », est celle des Compagnons, des Suivants, et de tous ceux qui les ont suivis avec excellence, telle que l'ont transmise Ibn Taymiyya et Ibn al-Qayyim.",
    body: [
      { type: "h2", text: "Un vocabulaire emprunté, un sens transposé" },
      {
        type: "p",
        text: "Quand nous disons d'un homme qu'il sait, nous décrivons un savoir acquis, partiel, susceptible d'oubli. Quand la Révélation dit d'Allāh qu'Il sait, **le mot reste le même, la réalité désignée change entièrement d'ordre**. Il ne s'agit pas d'un savoir plus grand : il s'agit d'un savoir d'une autre nature, sans acquisition, sans succession, sans limite.",
      },
      {
        type: "lexique",
        root: "و ص ف",
        transliteration: "w-ṣ-f",
        sense:
          "Décrire, qualifier, dire comment une chose est. De cette racine viennent le mot **ṣifa** (qualificatif) et **waṣf** (description). Le terme dit déjà la difficulté : décrire, c'est cerner — et Celui qui n'a pas de limite ne se laisse pas cerner par nos mots, sans que cela empêche d'en affirmer le sens.",
        derives: [
          { word: "ṣifa", arabic: "صِفَة", gloss: "Le qualificatif : ce qui est affirmé de Lui par la Révélation, avec son sens réel." },
          { word: "waṣf", arabic: "وَصْف", gloss: "L'acte de décrire, opéré par nous, avec nos mots limités." },
          { word: "mawṣūf", arabic: "مَوْصُوف", gloss: "Le qualifié : l'Essence, jamais atteinte dans sa modalité par la description." },
          { word: "tawṣīf", arabic: "تَوْصِيف", gloss: "La mise en description ; d'où l'avertissement coranique sur « ce qu'ils décrivent »." },
        ],
        note:
          "**سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ** — « Gloire à ton Seigneur, Seigneur de la puissance, au-dessus de ce qu'ils décrivent. » (37:180) — verset qui écarte la description imaginée, non le sens révélé.",
      },
      { type: "h2", text: "La règle qui gouverne tout le reste" },
      {
        type: "verse",
        arabic: "**لَيْسَ كَمِثْلِهِۦ شَىْءٌ** ۖ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ",
        translation:
          "**Rien ne Lui ressemble** ; et Il est Celui qui entend, Celui qui voit.",
        reference: "Coran, al-Shūrā, 42:11",
      },
      {
        type: "p",
        text: "Ce verset est à lui seul la méthode entière des salaf. Sa première moitié **écarte toute ressemblance** ; sa seconde moitié **affirme deux attributs réels** dans la même phrase. Ni négation vide (taʿṭīl), ni comparaison grossière (tashbīh) : l'affirmation et la transcendance tiennent ensemble, dans un seul souffle. C'est pourquoi Ibn Taymiyya rappelle que **quiconque nie un attribut authentique imite les jahmites, et quiconque en imagine le comment imite les assimilationnistes**.",
      },
      {
        type: "balance",
        title: "La grammaire de la doctrine salafie",
        arabic: "إثبات بلا تشبيه ولا تعطيل",
        affirmLabel: "Ce que l'on affirme (ithbāt)",
        denyLabel: "Ce que l'on écarte",
        affirm: [
          "Que les attributs mentionnés par le Coran et la Sunna authentique sont **réels**, et non de simples façons de parler.",
          "Qu'ils sont **éternels**, sans commencement, inséparables de l'Essence.",
          "Que leur **sens** nous est intelligible dans la langue arabe : savoir n'est pas ignorer, entendre n'est pas être sourd, la main est une main réelle et non une métaphore vidée.",
        ],
        deny: [
          "**Tashbīh** : les concevoir à l'image des nôtres.",
          "**Tamthīl** : leur donner un semblable parmi les créatures.",
          "**Taʿṭīl** : les vider de contenu jusqu'à nier l'attribut lui-même — voie des jahmites et des muʿtazilites.",
          "**Takyīf** : prétendre en décrire le comment (kayfiyya), que seul Allah connaît.",
        ],
        caption:
          "L'équilibre se perd dès qu'on abandonne l'une des deux moitiés du verset 42:11.",
      },
      { type: "h2", text: "Pourquoi ce langage n'est pas un pis-aller" },
      {
        type: "p",
        text: "On objecte parfois : si nos mots ne conviennent pas, pourquoi les employer ? Parce qu'ils ne sont pas faux, ils sont **véridiques mais insuffisants à cerner la modalité**. Un enfant à qui l'on dit que le soleil est « très chaud » n'apprend pas une erreur : il apprend une vérité qu'il ne mesurera jamais complètement. Le langage révélé nous donne une prise juste sur le sens, non une prise sur le comment.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le mot est commun, la réalité est propre",
        text: "L'accord de vocabulaire entre le Créateur et la créature n'entraîne aucun accord de nature. **Deux êtres peuvent partager un nom sans rien partager de leur réalité** : on dit d'un homme et d'une fourmi qu'ils « entendent », et pourtant leur manière d'entendre n'a rien de commun. Ainsi de l'ouïe, de la vue, de la main et de la face d'Allah : le mot est partagé, la réalité ne l'est jamais.",
      },
      {
        type: "experiment",
        title: "Le poisson et le feu",
        steps: [
          "Un poisson entend parler du feu : chaleur, lumière, danger, transformation.",
          "Il peut en comprendre quelque chose : ce n'est pas de l'eau, cela consume, cela éclaire.",
          "Mais tout ce qu'il connaît lui vient de l'eau ; **chaque image qu'il se forme du feu sera humide**.",
          "S'il déclare : « le feu n'existe pas, puisque je ne peux me le représenter », il commet une faute de raison, non d'observation.",
        ],
        conclusion:
          "Il ne s'agit pas d'imaginer Dieu, mais de recevoir ce qu'Il dit de Lui-même, en sachant que **c'est la représentation qu'il faut délaisser, jamais le sens**.",
      },
      { type: "h2", text: "L'avis des savants" },
      {
        type: "quote",
        text:
          "قال شيخ الإسلام ابن تيمية رحمه الله: **مذهب سلف الأمة وأئمتها إثبات ما أثبته الله لنفسه من الصفات من غير تحريف ولا تعطيل، ومن غير تكييف ولا تمثيل**، بل يقولون: **إن الله ليس كمثله شيء لا في ذاته ولا في صفاته ولا في أفعاله**.\n\nLe cheikh de l'islam Ibn Taymiyya, qu'Allah lui fasse miséricorde, a dit : **la voie des salaf de cette communauté et de ses guides est d'affirmer ce qu'Allah S'est affirmé à Lui-même comme attributs, sans déformation ni abolition, et sans description du comment ni assimilation**. Ils disent plutôt : **rien ne ressemble à Allah, ni dans Son Essence, ni dans Ses attributs, ni dans Ses actes**.",
        source: "Ibn Taymiyya, al-ʿAqīda al-wāsiṭiyya",
      },
      {
        type: "quote",
        text:
          "قال ابن القيم رحمه الله: **فصفاته لا تشبه صفات المخلوقين كما أن ذاته لا تشبه ذوات المخلوقين، فليس إثباتها تمثيلاً كما أن نفيها ليس تنزيهاً**.\n\nIbn al-Qayyim, qu'Allah lui fasse miséricorde, a dit : **Ses attributs ne ressemblent pas aux attributs des créatures, tout comme Son Essence ne ressemble pas aux essences des créatures ; les affirmer n'est donc pas les assimiler, tout comme les nier n'est pas une purification**.",
        source: "Ibn al-Qayyim, al-Ṣawāʿiq al-mursala",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le langage des attributs n'est pas un exercice de prudence timide : c'est une **discipline de la révérence**. On dit tout ce qui a été dit, on ne dit rien de plus, et l'on garde présent à l'esprit que le mot juste, ici, sert d'abord à empêcher le mot faux — qu'il vienne de l'assimilation ou de la négation. **Ce que nous affirmons est vrai ; ce que nous imaginons est faux.**",
      },
    ],
  },

  {
    slug: slugifySujet("Affirmer sans comparer : le verset qui gouverne la question"),
    title: "Affirmer sans comparer : le verset qui gouverne la question",
    arabic: "ليس كمثله شيء",
    intro:
      "Un seul verset a réglé, pour les salaf, la question la plus délicate de la doctrine. Il tient en quelques mots et contient à la fois la négation qui protège et l'affirmation qui nourrit.\n\nCe sujet en fait la lecture mot à mot, puis expose la méthode que les imams des trois premiers siècles ont transmise pour toute lecture des textes qui mentionnent la main, le visage, la venue ou l'établissement sur le Trône : les faire passer comme elles sont venues, sans comment.",
    body: [
      { type: "h2", text: "Le verset, mot à mot" },
      {
        type: "verse",
        arabic:
          "فَاطِرُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ **لَيْسَ كَمِثْلِهِۦ شَىْءٌ** ۖ **وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ**",
        translation:
          "Créateur des cieux et de la terre. **Rien n'est à Sa semblance** ; **et Il est l'Audient, le Clairvoyant**.",
        reference: "Coran, al-Shūrā, 42:11",
      },
      {
        type: "p",
        text: "Deux points de langue méritent l'attention. D'abord **laysa** : la négation la plus catégorique de l'arabe. Ensuite le **kāf** de comparaison ajouté à **mithl** (semblable) : la tournure redouble la négation, comme pour dire « il n'y a rien qui soit même comme un semblable de Lui ». **La ressemblance est écartée jusque dans son ombre**, tandis que l'ouïe et la vue sont affirmées, réelles, dans la même phrase.",
      },
      {
        type: "balance",
        title: "Une seule phrase, deux mouvements",
        arabic: "٤٢:١١",
        affirmLabel: "Première moitié : la barrière",
        denyLabel: "Seconde moitié : la fenêtre",
        affirm: [
          "**Laysa ka-mithlihi shayʾ** : aucune créature n'offre de modèle pour Le penser.",
          "Toute image mentale formée à partir du créé est **écartée d'avance**.",
          "Le comment (*kayfiyya*) est retiré de notre portée, non par ignorance passagère mais par nature.",
        ],
        deny: [
          "**Wa huwa al-samīʿ al-baṣīr** : Il entend réellement, Il voit réellement.",
          "La transcendance **n'aboutit pas au silence** : Dieu Se nomme et Se qualifie Lui-même.",
          "Nier les attributs au nom de la transcendance, c'est trahir la moitié du verset — c'est la voie des jahmites.",
        ],
        caption:
          "Celui qui ne retient que la première moitié tombe dans le taʿṭīl ; celui qui ne retient que la seconde tombe dans le tashbīh.",
      },
      { type: "h2", text: "Application aux textes de l'élévation" },
      {
        type: "p",
        text: "Lorsque la Révélation mentionne la Main, le Visage, ou l'Établissement sur le Trône, la règle s'applique immédiatement : **on ne nie pas le texte, on nie la ressemblance**. Le lecteur affirme donc ce qui est dit, écarte la représentation corporelle, et s'abstient de décrire le comment. C'est ce que les imams des salaf appelaient : « les faire passer comme elles sont venues, sans comment ».",
      },
      {
        type: "quote",
        text:
          "سُئل الإمام مالك رحمه الله عن قوله تعالى: **﴿الرَّحْمَنُ عَلَى الْعَرْشِ اسْتَوَى﴾** كيف استوى؟ فقال: **الاستواء غير مجهول**، **والكيف غير معقول**، **والإيمان به واجب**، **والسؤال عنه بدعة**.\n\nOn interrogea l'imam Mālik, qu'Allah lui fasse miséricorde, au sujet de Sa parole : **« Le Tout-Miséricordieux S'est établi sur le Trône »** — comment S'est-Il établi ? Il répondit : **l'établissement n'est pas inconnu**, **le comment n'est pas concevable**, **y croire est une obligation**, **et interroger sur son comment est une innovation**.",
        source: "Rapporté d'après l'imam Mālik ibn Anas",
      },
      {
        type: "quote",
        text:
          "قال سفيان الثوري والوليد بن مسلم وغيرهما من الأئمة: **أمرُّوا آيات وأحاديث الصفات كما جاءت بلا كيف**.\n\nSufyān al-Thawrī, al-Walīd ibn Muslim et d'autres imams ont dit : **« Faites passer les versets et les hadiths des attributs tels qu'ils sont venus, sans comment. »**",
        source: "Rapporté par al-Lālakāʾī et Ibn Baṭṭa dans leurs recueils sur la croyance des salaf",
      },
      {
        type: "focus",
        kind: "repere",
        title: "« Connu » ne veut pas dire « imaginé »",
        text: "Mālik dit que l'istiwāʾ n'est pas inconnu : le mot a un sens en arabe, il n'est pas une syllabe vide. Il ajoute que le **comment n'est pas concevable** : ce sens ne se figure pas. Toute la doctrine salafie tient dans l'écart entre ces deux affirmations.",
      },
      {
        type: "experiment",
        title: "Le portrait interdit",
        steps: [
          "On te confie une lettre d'un roi que nul n'a vu et que nul ne verra ici-bas.",
          "La lettre dit : « ma main a signé ». Tu comprends qu'une main réelle a posé un acte souverain.",
          "Un premier lecteur dessine une main humaine : il a compris quelque chose de vrai et l'a aussitôt rendu faux en lui donnant une forme.",
          "Un second lecteur déclare : « la lettre ne veut rien dire, il n'y a pas de main » : il a évité l'erreur du premier en tombant dans la sienne.",
        ],
        conclusion:
          "**Il reste la troisième voie, celle des salaf** : recevoir la phrase, en tenir le sens pour réel, et refuser le crayon comme le déni.",
      },
      { type: "h2", text: "L'avis des savants" },
      {
        type: "quote",
        text:
          "قال ابن عبد البر رحمه الله: **أهل السنة مجمعون على الإقرار بالصفات كلها الواردة في القرآن والسنة، والإيمان بها، وحملها على الحقيقة لا على المجاز، إلا أنهم لا يُكيِّفون شيئاً من ذلك ولا يحدُّون فيه صفة محصورة**.\n\nIbn ʿAbd al-Barr, qu'Allah lui fasse miséricorde, a dit : **les gens de la Sunna sont unanimes à reconnaître tous les attributs mentionnés dans le Coran et la Sunna, à y croire, et à les porter sur leur sens réel et non métaphorique — sauf qu'ils n'en décrivent le comment en rien, et n'y fixent aucune limite déterminée**.",
        source: "Ibn ʿAbd al-Barr, al-Tamhīd",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "42:11 n'est pas un verset parmi d'autres : c'est **la clé de lecture de tous les autres**. Chaque fois qu'un texte mentionne un attribut, ce verset intervient pour écarter toute ressemblance ; chaque fois qu'un raisonnement voudrait dissoudre Dieu dans l'abstraction, la seconde moitié du verset le rappelle à l'ordre. **Affirmer sans comparer : la formule tient en trois mots, et une vie n'épuise pas sa mise en œuvre.**",
      },
    ],
  },

  {
    slug: slugifySujet("Dieu sait tout, entend tout, voit tout, et a pouvoir sur toute chose"),
    title: "Dieu sait tout, entend tout, voit tout, et a pouvoir sur toute chose",
    intro:
      "Quatre attributs reviennent sans cesse dans le Coran : la science, l'ouïe, la vue, la puissance. Ils ne sont pas énumérés pour l'érudition : ils sont énoncés pour transformer la manière dont l'homme se tient debout, parle, agit et espère.\n\nCe sujet expose chacun d'eux selon la voie des salaf, montre ce qui les distingue de leurs équivalents créés, et tire les conséquences intérieures de leur affirmation.",
    body: [
      { type: "h2", text: "Une science sans acquisition" },
      {
        type: "verse",
        arabic:
          "وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِى ٱلْبَرِّ وَٱلْبَحْرِ ۚ **وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا**",
        translation:
          "Il détient les clés de l'invisible : nul ne les connaît hors Lui. Il sait ce qui est sur la terre ferme et dans la mer. **Et pas une feuille ne tombe sans qu'Il ne le sache.**",
        reference: "Coran, al-Anʿām, 6:59",
      },
      {
        type: "p",
        text: "Notre science est un mouvement : on ignore, puis on apprend, puis on oublie. La science divine **n'a pas de mouvement** : elle n'est ni recueillie ni renouvelée. Elle porte sur ce qui fut, ce qui est, ce qui sera. Rien n'y entre, rien n'en sort — nous en affirmons le sens réel, sans en imaginer la modalité.",
      },
      {
        type: "balance",
        title: "Nos attributs et les Siens : le même mot, deux ordres",
        affirmLabel: "Chez la créature",
        denyLabel: "Chez le Créateur",
        affirm: [
          "Le savoir s'acquiert, se perd, se trompe.",
          "L'ouïe dépend d'un organe, d'un air, d'une distance.",
          "La vue exige lumière, angle, contraste.",
          "Le pouvoir rencontre une matière qui résiste.",
        ],
        deny: [
          "**ʿIlm** : sans apprentissage, sans oubli, sans erreur possible — mais réellement science.",
          "**Samʿ** : sans organe créé à la manière du nôtre, sans intermédiaire, sans seuil — mais réellement ouïe.",
          "**Baṣar** : sans lumière requise, sans obstacle, sans distance — mais réellement vue.",
          "**Qudra** : sans effort, sans instrument, sans résistance — mais réellement puissance.",
        ],
        caption:
          "Le mot est repris de notre langue ; la limitation, elle, ne suit pas. Le sens demeure, le comment échappe.",
      },
      { type: "h2", text: "Une ouïe et une vue réelles, sans limite" },
      {
        type: "p",
        text: "Le Coran rapporte l'épisode de la femme qui plaidait sa cause auprès du Prophète ﷺ, dans un coin de la maison, à voix basse. La révélation descend pour dire qu'**Il l'entendait déjà**. Ce n'est pas une information abstraite : c'est une consolation adressée à quiconque se croit sans témoin, fondée sur une ouïe véritable d'Allah.",
      },
      {
        type: "verse",
        arabic:
          "قَدْ سَمِعَ ٱللَّهُ قَوْلَ ٱلَّتِى تُجَٰدِلُكَ فِى زَوْجِهَا وَتَشْتَكِىٓ إِلَى ٱللَّهِ **وَٱللَّهُ يَسْمَعُ تَحَاوُرَكُمَآ**",
        translation:
          "Allāh a bien entendu la parole de celle qui discutait avec toi au sujet de son époux et se plaignait à Allāh. **Et Allāh entend votre dialogue.**",
        reference: "Coran, al-Mujādila, 58:1",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Une doctrine qui se vérifie dans le comportement",
        text: "Celui qui affirme du bout des lèvres que Dieu entend tout, et qui médit dès qu'une porte se ferme, **n'a pas encore cru cet attribut**. Les attributs ne sont pas des articles à mémoriser : ce sont des présences à tenir.",
      },
      { type: "h2", text: "Une puissance qui n'excepte rien" },
      {
        type: "p",
        text: "**Qudra** porte sur tout ce qui est possible. Les salaf précisent : elle ne « manque » pas devant l'impossible en soi, car l'impossible en soi — le carré rond, l'associé égal — **n'est pas une chose** dont on pourrait dire qu'elle échappe. Ce n'est pas la puissance qui est limitée, c'est l'énoncé qui ne désigne rien.",
      },
      {
        type: "schema",
        title: "Quatre attributs, quatre effets sur le cœur",
        variant: "branch",
        nodes: [
          { label: "Il sait", arabic: "العليم", note: "Fin de la comédie sociale : l'intention compte plus que la façade." },
          { label: "Il entend", arabic: "السميع", note: "L'invocation la plus faible est reçue ; la parole cachée est retenue." },
          { label: "Il voit", arabic: "البصير", note: "La solitude n'existe pas ; la pudeur devient intérieure." },
          { label: "Il peut", arabic: "القدير", note: "Aucune situation n'est fermée ; l'espérance cesse d'être naïve." },
        ],
        caption:
          "La théologie des salaf n'est pas une science froide : chaque attribut, correctement cru, déplace une habitude du cœur.",
      },
      { type: "h2", text: "L'avis des savants" },
      {
        type: "quote",
        text:
          "قال ابن كثير رحمه الله: **﴿وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا﴾ أي: يعلم سبحانه وتعالى ذلك، فلا يخفى عليه شيء في السماوات ولا في الأرض ولا في البر ولا في البحر**، **وهذا إخبار عن كمال علمه المحيط بكل شيء**.\n\nIbn Kathīr, qu'Allah lui fasse miséricorde, a dit : **« pas une feuille ne tombe sans qu'Il ne le sache » signifie qu'Allah, exalté et glorifié soit-Il, sait cela, et rien ne Lui échappe dans les cieux ni sur la terre, ni sur la terre ferme ni dans la mer** ; **c'est là une information sur la perfection de Sa science qui embrasse toute chose**.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿaẓīm, sourate al-Anʿām",
      },
      {
        type: "quote",
        text:
          "قال ابن عثيمين رحمه الله: **صفات الله تعالى كلها كمال، لا نقص فيها بوجه من الوجوه، ونحن نثبتها لله على الوجه اللائق به من غير تشبيه ولا تعطيل**.\n\nIbn ʿUthaymīn, qu'Allah lui fasse miséricorde, a dit : **les attributs d'Allah sont tous perfection, sans aucune imperfection sous quelque aspect que ce soit, et nous les Lui affirmons de la manière qui Lui sied, sans assimilation ni abolition**.",
        source: "Ibn ʿUthaymīn, Sharḥ al-ʿAqīda al-wāsiṭiyya",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Ces quatre attributs forment, ensemble, une manière d'habiter le monde : **on ne parle plus de la même façon quand on se sait entendu, on ne se cache plus de la même façon quand on se sait vu, on ne désespère plus de la même façon quand on sait à Qui l'on s'adresse.**",
      },
    ],
  },

];
