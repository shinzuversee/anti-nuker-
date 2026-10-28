import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre I — « Connaissez-vous Dieu ? »
 * Groupe e — Reconnaître Dieu comme unique objet d'adoration (tawḥīd al-ulūhiyya).
 */
export const sujetsDieuUluhiyya: Sujet[] = [
  {
    slug: slugifySujet("Reconnaître Dieu comme unique divinité"),
    title: "Reconnaître Dieu comme unique divinité",
    arabic: "توحيد الألوهية",
    intro:
      "Il existe une différence capitale, souvent ignorée, entre reconnaître que Dieu existe et Le reconnaître comme l’unique objet légitime d’adoration. Les polythéistes que le Coran interpelle en premier lieu n’étaient pas, pour la plupart, des athées : ils admettaient l’existence d’un Créateur suprême, souvent nommé Allāh, auteur des cieux et de la terre. Leur égarement ne portait pas sur l’existence de Dieu, mais sur **à qui adresser le culte** — invocation, sacrifice, vœu, crainte, espoir. C’est précisément ce point que le tawḥīd al-ulūhiyya vient trancher : Celui qui crée seul est Celui qu’on doit adorer seul.\n\nCette distinction, que les théologiens nomment la différence entre tawḥīd al-rubūbiyya (unicité de la Seigneurie, c’est-à-dire de la création et du gouvernement de l’univers) et tawḥīd al-ulūhiyya (unicité de la divinité adorée), structure l’ensemble de la prédication prophétique. Chaque envoyé a dit à son peuple : « Adorez Allāh, vous n’avez pas d’autre divinité que Lui » — non pas « croyez qu’Allāh existe », ce que nul ne contestait sérieusement.\n\nCe sujet reprend cette distinction depuis ses fondements coraniques, en examine les conséquences logiques, et montre pourquoi elle demeure, aujourd’hui encore, la question la plus déterminante de toute vie religieuse — bien au-delà des idoles de pierre.",
    body: [
      { type: "h2", text: "Deux unicités, une seule confusion possible" },
      {
        type: "p",
        text: "Le mot « tawḥīd » signifie littéralement « fait d’unifier », « fait de déclarer un ». Mais unifier quoi ? La tradition sunnite distingue, pour la clarté de l’exposé, plusieurs volets de cette unicité, dont deux sont ici essentiels. Le premier, **tawḥīd al-rubūbiyya**, consiste à reconnaître qu’Allāh seul crée, fait subsister, donne la vie et la mort, gouverne le cosmos sans associé. Le second, **tawḥīd al-ulūhiyya**, consiste à ne diriger aucun acte de culte — invocation, sacrifice, prosternation, vœu, crainte révérencielle, espérance ultime — vers un autre que Lui.",
      },
      {
        type: "p",
        text: "Or l’histoire humaine, telle que le Coran la raconte, montre que **la première unicité était rarement niée**, tandis que la seconde était constamment trahie. Les Arabes de l’époque préislamique invoquaient des idoles de pierre en période de détresse, mais reconnaissaient, dès qu’on les pressait de répondre, qu’Allāh seul avait créé les cieux et la terre.",
      },
      {
        type: "verse",
        arabic:
          "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ لَيَقُولُنَّ **ٱللَّهُ** ۚ قُلْ أَفَرَءَيْتُم مَّا تَدْعُونَ مِن دُونِ ٱللَّهِ",
        translation:
          "Et si tu leur demandes qui a créé les cieux et la terre, ils diront à coup sûr : **« Allāh. »** Dis : « Que penser alors de ce que vous invoquez en dehors d’Allāh ? »",
        reference: "Coran, Luqmān, 31:25",
      },
      {
        type: "p",
        text: "Ce verset, et une dizaine d’autres qui lui font écho, révèle **le point exact du désaccord**. Il ne portait pas sur qui a créé, mais sur qui mérite l’adoration une fois qu’on a reconnu le Créateur. C’est cette bascule logique — de la reconnaissance théorique à la pratique cultuelle — que la Révélation reprend inlassablement, car elle est le lieu réel du combat spirituel, non un point de doctrine abstraite.",
      },
      { type: "h2", text: "L’argument coranique : celui qui crée seul mérite le culte seul" },
      {
        type: "p",
        text: "Le Coran ne se contente pas d’affirmer l’unicité du culte : il en construit méthodiquement la preuve, en partant précisément de ce que les interlocuteurs concédaient déjà. Le raisonnement suit un schéma constant : rappel des bienfaits que seul le Créateur dispense (pluie, subsistance, alternance du jour et de la nuit, navigation), puis question rhétorique — pourquoi adorer autre que Celui qui dispense tout cela ?",
      },
      {
        type: "verse",
        arabic:
          "يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ **ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًا وَٱلسَّمَآءَ بِنَآءً**",
        translation:
          "Ô hommes ! Adorez votre Seigneur, qui vous a créés, vous et ceux d’avant vous, ainsi peut-être craindrez-vous, **Lui qui a fait pour vous de la terre un lit et du ciel un édifice**.",
        reference: "Coran, al-Baqara, 2:21-22",
      },
      {
        type: "p",
        text: "Remarquons la structure : l’ordre d’adorer (« adorez ») précède immédiatement le rappel des bienfaits créateurs. La logique est irréfutable pour qui l’examine sans parti pris : **si Allāh seul crée, subsiste, nourrit et gouverne, alors Lui seul mérite qu’on Le prie, qu’on L’invoque, qu’on place en Lui son espérance dernière**. Associer à Lui le culte tout en Lui reconnaissant seul la création revient à séparer artificiellement ce que la raison unit.",
      },
      {
        type: "quote",
        text:
          "قال الطبري رحمه الله في تفسير قوله تعالى ﴿اعبدوا ربكم﴾: يعني بذلك جل ثناؤه: **وحِّدوا ربَّكم بالعبادة**، وأخْلِصوا له الطاعة دون ما سواه من الآلهة والأنداد، **الذي خلقكم ولم يخلقكم غيره**، فهو أحقُّ بالعبادة ممن لم يخلق شيئًا.\n\nṬabarī écrit, au sujet de « Adorez votre Seigneur » : cela signifie — que Sa louange soit exaltée — **« unifiez votre Seigneur par le culte »**, et vouez-Lui une obéissance exclusive, à l’exclusion de toute autre divinité ou associé, **Lui qui vous a créés, sans que nul autre ne vous ait créés** ; Il est donc plus digne d’être adoré que ce qui n’a rien créé.",
        source: "Ṭabarī, Jāmiʿ al-bayān, commentaire de 2:21",
      },
      { type: "h2", text: "Le sens précis du mot « ilāh »" },
      {
        type: "lexique",
        root: "أ ل ه",
        transliteration: "ʾ-l-h",
        sense:
          "La racine désigne l’adoration, l’attachement du cœur, la soumission par amour et par crainte réunis. **« Ilāh » (divinité) n’est donc pas seulement « ce qui est puissant » mais « ce à quoi le cœur se voue »**. « Allāh » est le Nom propre qui désigne l’Unique digne de cette dévotion totale.",
        derives: [
          { word: "ilāh", arabic: "إِلَٰه", gloss: "Toute chose érigée en objet de culte, vraie ou fausse." },
          { word: "Allāh", arabic: "ٱللَّٰه", gloss: "Le Nom propre de la Divinité unique et véritable, sans pluriel ni dérivation admise." },
          { word: "ulūhiyya", arabic: "أُلُوهِيَّة", gloss: "La qualité d’être digne d’adoration ; d’où « tawḥīd al-ulūhiyya »." },
          { word: "taʾalluh", arabic: "تَأَلُّه", gloss: "L’acte du cœur qui se voue, s’attache, se soumet par amour et par crainte." },
        ],
        note:
          "**لَآ إِلَٰهَ إِلَّا ٱللَّهُ** — « Il n’y a de divinité digne d’adoration qu’Allāh » : la négation porte sur toute divinité concevable, l’exception ne laisse subsister qu’Allāh.",
      },
      {
        type: "p",
        text: "Comprendre ce que signifie « ilāh » dissout d’emblée un malentendu répandu : traduire la shahāda par « il n’y a pas de dieu sauf Dieu » laisse entendre une tautologie, alors que le sens exact est **« nul n’est digne d’être adoré, si ce n’est Allāh »**. La particule de négation « lā » porte sur l’aptitude à recevoir le culte, non sur l’existence brute. Une idole existe ; elle n’est simplement pas un « ilāh » légitime.",
      },
      { type: "h2", text: "La finalité de la création : un verset-clé" },
      {
        type: "verse",
        arabic:
          "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ **إِلَّا لِيَعْبُدُونِ**",
        translation:
          "Je n’ai créé les djinns et les hommes **que pour qu’ils M’adorent**.",
        reference: "Coran, al-Dhāriyāt, 51:56",
      },
      {
        type: "p",
        text: "Ce verset situe le tawḥīd al-ulūhiyya au cœur même du dessein de la création. Il ne s’agit pas d’une option pieuse parmi d’autres, mais de **la raison d’être de l’existence humaine telle que le texte la formule**. Ibn ʿAbbās et la majorité des commentateurs anciens glosent « liyaʿbudūn » par « liyuwaḥḥidūn » — pour qu’ils M’unifient dans le culte —, montrant que l’adoration visée ici n’est pas un simple rituel mais l’acte fondateur qui donne sens à toute autre pratique.",
      },
      {
        type: "quote",
        text:
          "قال ابن عاشور رحمه الله: **العبادة المرادة هنا هي توحيد الله بالعبادة**، لا مجرد فعل الطاعات، إذ لو أُريد ذلك لم يكن للاستثناء معنًى ظاهرًا مع كثرة العصاة؛ فالمعنى: **ما خلقتهم إلا ليُقِرُّوا بوحدانيتي ويُخلصوا لي العبادة**.\n\nIbn ʿĀshūr écrit : **le culte visé ici est l’unification d’Allāh par l’adoration**, non le simple accomplissement d’actes d’obéissance — car si c’était le cas, l’exception n’aurait pas de sens manifeste, vu le grand nombre de désobéissants. Le sens est donc : **« Je ne les ai créés que pour qu’ils reconnaissent Mon unicité et Me vouent un culte exclusif. »**",
        source: "Ibn ʿĀshūr, al-Taḥrīr wa al-tanwīr, commentaire de 51:56",
      },
      { type: "h2", text: "Une même prédication, chez tous les envoyés" },
      {
        type: "p",
        text: "Le Coran rapporte, avec une insistance qui devient elle-même une preuve, que **chaque prophète a ouvert sa mission par la même phrase**. Nūḥ, Hūd, Ṣāliḥ, Shuʿayb : tous disent à leur peuple, presque mot pour mot, « Adorez Allāh ! Vous n’avez pas d’autre divinité que Lui. »",
      },
      {
        type: "verse",
        arabic:
          "وَلَقَدْ بَعَثْنَا فِى كُلِّ أُمَّةٍ رَّسُولًا أَنِ **ٱعْبُدُوا۟ ٱللَّهَ وَٱجْتَنِبُوا۟ ٱلطَّٰغُوتَ**",
        translation:
          "Nous avons envoyé dans chaque communauté un messager, chargé de dire : **« Adorez Allāh et écartez-vous du ṭāghūt. »**",
        reference: "Coran, al-Naḥl, 16:36",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un seul message, répété, jamais renouvelé dans son contenu",
        text: "Aucun prophète n’est venu enseigner l’existence de Dieu comme une nouveauté philosophique : tous sont venus **restaurer l’exclusivité du culte**, sans cesse rongée par l’habitude, l’intérêt, ou l’imitation des ancêtres. Le contenu du message prophétique est, dans son cœur, invariable depuis Adam jusqu’au sceau des prophètes.",
      },
      { type: "h2", text: "Distinguer, sans jamais séparer" },
      {
        type: "p",
        text: "Il serait erroné de croire que les deux volets de l’unicité — rubūbiyya et ulūhiyya — sont indépendants ou que le second pourrait se passer du premier. Au contraire, **le second est la conséquence logique et nécessaire du premier**. La distinction sert un but pédagogique précis : montrer que la simple croyance en un Créateur, aussi sincère soit-elle, ne suffit pas si elle ne débouche pas sur l’exclusivité pratique du culte.",
      },
      {
        type: "balance",
        title: "Ce que suppose vraiment la reconnaissance de l’unique divinité",
        arabic: "توحيد الألوهية",
        affirmLabel: "Ce que l’ulūhiyya implique",
        denyLabel: "Ce qu’elle exclut absolument",
        affirm: [
          "Diriger **toute invocation** (duʿāʾ) vers Allāh seul, dans la détresse comme dans l’aisance.",
          "Ne vouer de **sacrifice** ou de vœu qu’à Lui, quelle que soit l’intention.",
          "Placer en Lui seul **l’espérance ultime** et la **crainte révérencielle** qui détermine la conduite.",
          "Reconnaître que la reconnaissance théorique de Dieu, sans exclusivité du culte, **ne suffit pas**.",
        ],
        deny: [
          "Invoquer un saint, un ange ou un défunt **comme s’il agissait par lui-même**.",
          "Croire qu’un objet, une formule ou une personne peut **détourner à son profit** une part du culte dû à Dieu seul.",
          "Réduire le tawḥīd à une affirmation d’existence sans conséquence sur le comportement cultuel.",
          "Séparer la « croyance en Dieu » de « l’adoration exclusive de Dieu », comme deux choses sans lien.",
        ],
        caption:
          "C’est précisément cette confusion — croire sans exclure — que le Coran combat en priorité, bien avant tout autre point de doctrine.",
      },
      {
        type: "schema",
        title: "De la reconnaissance à l’exclusivité : la chaîne du tawḥīd",
        variant: "flow",
        nodes: [
          { label: "Rubūbiyya", arabic: "الربوبية", note: "Allāh seul crée, gouverne, fait subsister — fait rarement contesté." },
          { label: "Constat logique", note: "Celui qui crée seul mérite d’être adoré seul." },
          { label: "Ulūhiyya", arabic: "الألوهية", note: "Exclusivité du culte : invocation, sacrifice, crainte, espoir." },
          { label: "Asmāʾ wa ṣifāt", arabic: "الأسماء والصفات", note: "Connaître Celui qu’on adore, pour L’adorer avec justesse." },
        ],
        caption:
          "Les trois volets classiques du tawḥīd ne sont pas juxtaposés : ils s’enchaînent selon une nécessité logique stricte.",
      },
      {
        type: "experiment",
        title: "Le gouverneur et l’intendant",
        steps: [
          "Imagine un royaume où chacun s’accorde à dire qu’un seul roi gouverne, décide des lois, distribue les richesses.",
          "Or les sujets, pour leurs requêtes quotidiennes, s’adressent non au roi mais à des intendants locaux, comme si ceux-ci disposaient d’un pouvoir propre.",
          "Le roi proteste : « Vous reconnaissez que je gouverne seul, et pourtant vous frappez à d’autres portes que la mienne. »",
          "La faute des sujets n’est pas d’ignorer qui gouverne : elle est d’**agir comme si un autre gouvernait**, en pratique, malgré leur aveu théorique.",
        ],
        conclusion:
          "C’est très exactement la situation que le Coran dénonce chez les polythéistes de la Mecque : **la théorie était juste, la pratique la contredisait**. Le tawḥīd al-ulūhiyya exige la cohérence entre les deux.",
      },
      { type: "h2", text: "Ce que cela change concrètement" },
      {
        type: "p",
        text: "Reconnaître Dieu comme unique divinité n’est donc pas un exercice de logique abstraite réservé aux théologiens : c’est une **discipline du cœur et des membres**, qui s’exerce à chaque instant de détresse, chaque tentation de placer son espoir ailleurs, chaque geste de dévotion. Elle implique de scruter ses propres réflexes : vers qui se tourne-t-on vraiment lorsque tout semble perdu ? Qu’espère-t-on réellement d’une amulette, d’un talisman, d’une formule magique, d’un saint invoqué directement ?",
      },
      {
        type: "p",
        text: "L’histoire du salut, telle que rapportée par le Coran, n’est pas d’abord celle de peuples qui niaient Dieu : c’est celle de peuples qui, Le reconnaissant, **refusaient de Lui réserver l’exclusivité du culte**. Ce constat devrait inquiéter davantage qu’il ne rassure, car il signifie que la profession théorique du tawḥīd n’immunise personne contre sa trahison pratique.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le tawḥīd al-ulūhiyya est le point d’aboutissement de toute la doctrine de l’unicité : il ne suffit pas de savoir qui a créé, il faut savoir **à qui s’adresser**. C’est cette exclusivité de destination — dans l’invocation, la crainte, l’espoir, le sacrifice — qui distingue le croyant authentique de celui qui, tout en professant l’existence de Dieu, disperse son cœur entre mille recours. **La shahāda n’est pas un constat, elle est une orientation totale du cœur.**",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Ce qu'est réellement le shirk, et ses degrés"),
    title: "Ce qu’est réellement le shirk, et ses degrés",
    arabic: "الشرك",
    intro:
      "Peu de mots suscitent autant de malentendus que « shirk ». Beaucoup l’imaginent réduit à l’adoration littérale d’idoles de pierre, phénomène qu’ils jugent lointain, presque folklorique, sans rapport avec leur propre vie religieuse. Cette lecture restrictive méconnaît la portée réelle du terme : le shirk, dans son sens technique, désigne **tout partage, même partiel, même discret, du droit exclusif d’Allāh à être adoré, invoqué, craint ou espéré**.\n\nLa tradition théologique a soigneusement hiérarchisé les manifestations du shirk, distinguant le shirk majeur (akbar), qui exclut totalement de l’islam, du shirk mineur (aṣghar), qui compromet gravement la sincérité de l’acte sans faire sortir de la religion, et parfois même du shirk caché (khafī), si subtil que les Compagnons eux-mêmes craignaient d’en être atteints sans le savoir.\n\nCe sujet reprend cette hiérarchie depuis les textes fondateurs, en détaille les catégories, et montre en quoi la vigilance contre le shirk demeure, pour tout croyant sincère, une tâche continue plutôt qu’une affaire réglée une fois pour toutes par la simple profession de foi.",
    body: [
      { type: "h2", text: "Le sens premier du mot" },
      {
        type: "lexique",
        root: "ش ر ك",
        transliteration: "sh-r-k",
        sense:
          "La racine désigne le partage, l’association, le fait d’avoir part à quelque chose avec autrui. **« Sharīk » désigne l’associé dans une affaire commerciale** ; appliqué à la religion, le mot désigne celui qu’on associe, à quelque degré que ce soit, à ce qui revient exclusivement à Allāh.",
        derives: [
          { word: "shirk", arabic: "شِرْك", gloss: "L’acte d’associer à Allāh, dans le culte ou dans les attributs de la divinité." },
          { word: "mushrik", arabic: "مُشْرِك", gloss: "Celui qui pratique l’association, quel qu’en soit le degré." },
          { word: "sharīk", arabic: "شَرِيك", gloss: "L’associé, le partenaire — au sens commercial comme au sens théologique." },
          { word: "ishrāk", arabic: "إِشْرَاك", gloss: "L’acte volontaire de rendre quelqu’un ou quelque chose participant du droit exclusif d’Allāh." },
        ],
        note:
          "**إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ** — « Allāh ne pardonne pas qu’on Lui associe quoi que ce soit » (4:48) : l’absoluité de la formule dit la gravité unique de la faute.",
      },
      {
        type: "verse",
        arabic:
          "إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ **وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَآءُ**",
        translation:
          "Allāh ne pardonne pas qu’on Lui associe quoi que ce soit, **mais Il pardonne, en dehors de cela, à qui Il veut**.",
        reference: "Coran, al-Nisāʾ, 4:48",
      },
      {
        type: "p",
        text: "Ce verset établit une hiérarchie absolue des fautes : toutes sont susceptibles de pardon, sauf une, si le pécheur meurt sans s’en être repenti — l’association à Allāh. Cette exception unique explique pourquoi les savants ont consacré une attention disproportionnée, en apparence, à un péché que beaucoup jugent aujourd’hui marginal : **c’est précisément parce qu’il est le seul dont l’issue est scellée que sa prévention doit être maximale**.",
      },
      { type: "h2", text: "Trois degrés, non trois catégories étanches" },
      {
        type: "p",
        text: "La tradition distingue classiquement trois degrés du shirk, non pour cataloguer froidement les fautes, mais pour permettre à chacun de situer sa propre pratique et de la corriger. Ces degrés ne sont pas des cases isolées : **un même acte peut, selon l’intention et le degré de conscience, glisser de l’un à l’autre**.",
      },
      { type: "h3", text: "1. Le shirk majeur (al-shirk al-akbar)" },
      {
        type: "p",
        text: "Il consiste à diriger vers un autre qu’Allāh un acte de culte à part entière : invoquer un mort en pensant qu’il répond par lui-même, sacrifier un animal au nom d’un esprit, prosterner devant une idole, croire qu’un saint dispose d’un pouvoir propre de nuire ou de bénéficier indépendamment de la permission divine. Ce degré **fait sortir de l’islam** lorsqu’il est commis en pleine connaissance et sans contrainte.",
      },
      {
        type: "verse",
        arabic:
          "وَيَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ وَيَقُولُونَ **هَٰٓؤُلَآءِ شُفَعَٰٓؤُنَا عِندَ ٱللَّهِ**",
        translation:
          "Et ils adorent, en dehors d’Allāh, ce qui ne peut ni leur nuire ni leur être utile, et ils disent : **« Voici nos intercesseurs auprès d’Allāh. »**",
        reference: "Coran, Yūnus, 10:18",
      },
      {
        type: "p",
        text: "Ce verset dévoile un mécanisme psychologique constant : le mushrik ne prétend presque jamais que ses idoles créent ou gouvernent l’univers — il prétend seulement qu’elles servent d’intermédiaires efficaces. C’est cette prétention même, aussi modeste paraisse-t-elle, que le Coran qualifie de shirk majeur, car **elle attribue à autrui une part du droit exclusif qu’a Allāh d’être sollicité directement**.",
      },
      { type: "h3", text: "2. Le shirk mineur (al-shirk al-aṣghar)" },
      {
        type: "p",
        text: "Il ne fait pas sortir de l’islam, mais il ternit gravement la sincérité de l’acte d’adoration. La référence textuelle la plus célèbre est la crainte, exprimée par le Prophète ﷺ lui-même, que sa communauté ne tombe dans **l’ostentation religieuse (riyāʾ)** — accomplir un acte pieux pour être vu ou loué des hommes, tout en professant l’adorer pour Allāh.",
      },
      {
        type: "quote",
        text:
          "عن محمود بن لَبِيد رضي الله عنه أن رسول الله ﷺ قال: **«إنَّ أخوف ما أخاف عليكم الشرك الأصغر»**، قالوا: وما الشرك الأصغر يا رسول الله؟ قال: **«الرِّياء»**.\n\nMaḥmūd ibn Labīd, qu’Allāh l’agrée, rapporte que le Messager d’Allāh ﷺ a dit : **« Ce que je crains le plus pour vous, c’est le shirk mineur. »** On demanda : « Qu’est-ce que le shirk mineur, ô Messager d’Allāh ? » Il répondit : **« L’ostentation. »**",
        source: "Rapporté par Aḥmad, Musnad, ḥadīth n° 23630",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le péché que redoutaient les meilleurs",
        text: "Il est frappant que ce soit précisément **ce risque-là**, et non un autre, que le Prophète ﷺ ait déclaré le plus redoutable pour sa communauté — non le vol, non le mensonge, mais une corruption silencieuse de l’intention, capable de se loger jusque dans la prière, le jeûne ou l’aumône les plus apparemment sincères.",
      },
      { type: "h3", text: "3. Le shirk caché (al-shirk al-khafī)" },
      {
        type: "p",
        text: "Plus subtil encore, ce degré désigne des mouvements du cœur si discrets que le sujet lui-même peine à les déceler : espérer secrètement l’approbation d’un homme influent avec la même intensité qu’on espère celle de Dieu, redouter le regard d’autrui plus que le regard divin, ou attribuer un succès non à la grâce d’Allāh mais à sa propre compétence, oubliant que **toute cause seconde tire son efficacité de la permission divine**.",
      },
      {
        type: "quote",
        text:
          "عن أبي سعيد الخدري رضي الله عنه قال: خرج علينا رسول الله ﷺ ونحن نتذاكر المسيح الدجال، فقال: **«ألا أخبركم بما هو أخوف عليكم عندي من المسيح الدجال؟»** قلنا: بلى، قال: **«الشرك الخفي، أن يقوم الرجل فيصلي فيزيّن صلاته لما يرى من نظر رجل»**.\n\nAbū Saʿīd al-Khudrī, qu’Allāh l’agrée, rapporte que le Messager d’Allāh ﷺ vint à nous alors que nous évoquions l’Antéchrist, et dit : **« Ne vous informerai-je pas de ce qui, à mes yeux, est plus à craindre pour vous que l’Antéchrist ? »** Nous répondîmes : « Si. » Il dit : **« Le shirk caché : que l’homme se lève pour prier et embellisse sa prière parce qu’il voit qu’un autre le regarde. »**",
        source: "Rapporté par Ibn Māja, Sunan, ḥadīth n° 4204",
      },
      { type: "h2", text: "Le shirk dans l’attribution des causes" },
      {
        type: "p",
        text: "Une autre manifestation, subtile, du shirk réside dans **l’attribution des bienfaits à autre qu’Allāh** : dire « si ce n’était untel, je serais mort », ou « c’est mon étoile qui m’a favorisé », sans se rappeler que la cause seconde n’est que le moyen que Dieu a établi, non la source ultime. Certains savants classent ces formulations, selon l’intention exacte du locuteur, entre shirk mineur et simple maladresse de langage à corriger.",
      },
      {
        type: "quote",
        text:
          "قال الرازي رحمه الله عند تفسير آيات الشرك: **الشرك أنواع**: منه ما هو **جليٌّ** كعبادة الأصنام، ومنه ما هو **خفيٌّ** كتعليق القلب بالأسباب دون الالتفات إلى مسبِّبها، **وهذا النوع أدقُّ مسلكًا وأخفى مدخلًا**.\n\nRāzī écrit, en commentant les versets relatifs au shirk : **le shirk est de plusieurs sortes** : il en est un **manifeste**, comme l’adoration des idoles, et il en est un **caché**, comme l’attachement du cœur aux causes sans se tourner vers Celui qui en est l’Auteur — **et cette dernière sorte est d’une voie plus subtile et d’une entrée plus discrète**.",
        source: "Rāzī, Mafātīḥ al-ghayb, commentaire des versets du shirk",
      },
      {
        type: "balance",
        title: "Situer un acte : shirk majeur, mineur, ou licite ?",
        arabic: "درجات الشرك",
        affirmLabel: "Demeure dans le licite",
        denyLabel: "Bascule dans le shirk",
        affirm: [
          "Demander l’aide d’un vivant présent, capable, dans les limites de sa capacité réelle.",
          "Reconnaître qu’un médicament ou une compétence humaine sont des **causes secondes** permises par Allāh.",
          "Espérer la satisfaction des hommes **sans que cela ne prime** sur celle d’Allāh.",
          "Prendre les précautions naturelles (fermer sa porte, épargner) en sachant qu’**elles n’écartent rien sans la permission divine**.",
        ],
        deny: [
          "Invoquer un mort ou un absent comme s’il **entendait et répondait par lui-même**.",
          "Croire qu’une amulette, à elle seule, **repousse le mal sans intervention divine**.",
          "Accomplir un acte d’adoration principalement **pour le regard des hommes**.",
          "Craindre une cause seconde **plus qu’on ne craint Allāh**, ou lui attribuer un pouvoir indépendant.",
        ],
        caption:
          "La ligne de partage tient presque toujours à une question : à qui, en dernière analyse, le cœur attribue-t-il l’effet réel ?",
      },
      {
        type: "schema",
        title: "Les trois degrés du shirk et leurs conséquences",
        variant: "branch",
        nodes: [
          { label: "Shirk akbar", arabic: "الشرك الأكبر", note: "Fait sortir de l’islam ; invoquer, sacrifier, craindre un autre qu’Allāh comme s’il agissait seul." },
          { label: "Shirk aṣghar", arabic: "الشرك الأصغر", note: "Ne fait pas sortir de l’islam ; corrompt la sincérité, ex. le riyāʾ." },
          { label: "Shirk khafī", arabic: "الشرك الخفي", note: "Mouvement discret du cœur, souvent inconscient ; exige une vigilance constante." },
          { label: "Ikhlāṣ", arabic: "الإخلاص", note: "Antidote unique aux trois degrés : purifier l’intention pour Allāh seul." },
        ],
        caption:
          "Chaque degré appelle un remède distinct, mais tous convergent vers la même exigence : la sincérité exclusive de l’intention.",
      },
      {
        type: "experiment",
        title: "Le double serrure",
        steps: [
          "Imagine une porte fermée par deux serrures identiques, dont une seule clé, unique, ouvre réellement la première.",
          "Un homme dépose une seconde clé, factice, dans la seconde serrure, convaincu qu’elle aide un peu à l’ouverture.",
          "La porte s’ouvre — mais uniquement grâce à la première clé ; la seconde n’a servi à rien, sinon à tromper celui qui la portait.",
          "Le propriétaire de la maison découvre la seconde clé et s’en offusque : non parce qu’elle a nui à l’ouverture, mais parce que **son dépôt trahissait un doute sur la suffisance de la première**.",
        ],
        conclusion:
          "Le shirk, même mineur, ne procède pas toujours d’un rejet ouvert d’Allāh : il naît souvent d’un **doute discret sur la suffisance de Son pouvoir seul**, qui pousse le cœur à chercher un appui supplémentaire, fût-il illusoire.",
      },
      { type: "h2", text: "Pourquoi cette faute est unique" },
      {
        type: "p",
        text: "On pourrait objecter : pourquoi le shirk serait-il la seule faute privée de pardon, alors que le meurtre ou l’adultère sont, eux, pardonnables sur repentir ? La réponse tient à la nature de l’acte : le meurtre et l’adultère sont des transgressions d’une loi, mais **le shirk est une falsification de la réalité elle-même** — il consiste à traiter comme divin ce qui ne l’est pas, à inverser l’ordre du réel. C’est une atteinte non à une règle, mais à la vérité fondamentale sur laquelle repose toute règle.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le shirk n’est pas d’abord une affaire de statues",
        text: "Réduire le shirk à l’adoration littérale d’idoles, c’est **se rassurer à bon compte**. La véritable question posée par ce concept n’est pas « ai-je une statue chez moi ? » mais : « où va mon espérance ultime, ma crainte la plus profonde, ma confiance la plus intime, lorsque tout vacille ? »",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le shirk n’est donc pas un phénomène révolu, circonscrit à l’Arabie préislamique : c’est **une pente permanente du cœur humain**, qui se manifeste tantôt de façon grossière, tantôt d’une manière si fine qu’elle échappe presque à la conscience. La distinction entre ses degrés n’a pas pour but de rassurer celui qui évite le pire en se croyant quitte : elle a pour but d’aiguiser une vigilance de tous les instants, car **nul n’est à l’abri, sinon celui qui interroge sans relâche la sincérité de son propre cœur**.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("L'intercession : les versets qui la limitent, ceux qui l'affirment"),
    title: "L’intercession : les versets qui la limitent, ceux qui l’affirment",
    arabic: "الشفاعة",
    intro:
      "L’intercession (shafāʿa) est l’une des questions où la tentation d’un excès inverse — négation totale d’un côté, glissement vers le shirk de l’autre — menace le plus directement l’équilibre doctrinal. Certains, effrayés par les abus, nient toute forme d’intercession dans l’au-delà ; d’autres, portés par un attachement affectif légitime aux saints et aux prophètes, en viennent à les invoquer directement, comme s’ils disposaient d’un pouvoir propre de faire pencher la balance divine.\n\nLe Coran, sur ce point comme sur tant d’autres, tient les deux bouts d’une même corde : il affirme l’existence de l’intercession, tout en la soumettant à des conditions si strictes qu’elles rendent impossible toute captation humaine de ce privilège. L’intercession n’est jamais un droit acquis par l’intercesseur, ni un service qu’on pourrait solliciter directement de lui : elle demeure, du début à la fin, **une faveur qu’Allāh accorde, à qui Il veut, pour qui Il veut**.\n\nCe sujet reprend les versets qui limitent l’intercession, ceux qui l’affirment, et montre comment leur articulation précise trace la frontière exacte entre la croyance légitime en l’intercession prophétique et la dérive qui consiste à invoquer directement les intercesseurs supposés.",
    body: [
      { type: "h2", text: "Le sens du mot et son terrain propre" },
      {
        type: "lexique",
        root: "ش ف ع",
        transliteration: "sh-f-ʿ",
        sense:
          "La racine évoque la paire, le fait de joindre un second à un premier — d’où **« shafʿ »**, le nombre pair. L’intercesseur « joint » sa demande à celle d’un autre pour la présenter à une autorité supérieure ; il ne décide de rien par lui-même.",
        derives: [
          { word: "shafāʿa", arabic: "شَفَاعَة", gloss: "L’intercession : l’acte de plaider une cause auprès d’une autorité qui seule décide." },
          { word: "shāfiʿ", arabic: "شَافِع", gloss: "L’intercesseur, celui qui plaide, sans détenir le pouvoir de décision." },
          { word: "mashfūʿ lahu", arabic: "مَشْفُوعٌ لَهُ", gloss: "Celui en faveur de qui l’intercession est présentée." },
          { word: "shafʿ", arabic: "شَفْع", gloss: "Le nombre pair — sens premier de la racine, d’où découle l’idée de « joindre »." },
        ],
        note:
          "L’étymologie révèle déjà la nature subordonnée de l’intercession : elle **s’ajoute** à une décision qui appartient à un autre, elle ne la remplace jamais.",
      },
      { type: "h2", text: "Les versets qui limitent l’intercession" },
      {
        type: "p",
        text: "Le Coran pose, avec une netteté remarquable, une série de conditions qui rendent l’intercession radicalement différente de tout mécanisme d’influence terrestre. Trois restrictions reviennent constamment : **nul n’intercède sans la permission d’Allāh**, l’intercession ne bénéficie qu’à **celui qu’Allāh agrée**, et **nul ne peut, de sa propre initiative, en solliciter le principe** auprès de l’intercesseur.",
      },
      {
        type: "verse",
        arabic:
          "مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ **إِلَّا بِإِذْنِهِۦ**",
        translation:
          "Qui peut intercéder auprès de Lui **sans Sa permission** ?",
        reference: "Coran, al-Baqara, 2:255 (āyat al-kursī)",
      },
      {
        type: "verse",
        arabic:
          "وَلَا يَشْفَعُونَ **إِلَّا لِمَنِ ٱرْتَضَىٰ**",
        translation:
          "Et ils n’intercèdent **que pour celui qu’Il agrée**.",
        reference: "Coran, al-Anbiyāʾ, 21:28",
      },
      {
        type: "verse",
        arabic:
          "وَكَم مِّن مَّلَكٍ فِى ٱلسَّمَٰوَٰتِ لَا تُغْنِى شَفَٰعَتُهُمْ شَيْـًٔا **إِلَّا مِنۢ بَعْدِ أَن يَأْذَنَ ٱللَّهُ لِمَن يَشَآءُ وَيَرْضَىٰٓ**",
        translation:
          "Que d’anges dans les cieux, dont l’intercession ne sert de rien, **si ce n’est après qu’Allāh l’a permise, pour qui Il veut et agrée** !",
        reference: "Coran, al-Najm, 53:26",
      },
      {
        type: "p",
        text: "La convergence de ces trois versets, portant sur trois catégories différentes d’intercesseurs supposés — les créatures en général, les anges auprès du Trône, et l’intercession en général —, dessine **une doctrine unifiée** : l’intercession n’est jamais une prérogative propre, elle est toujours **suspendue à une double permission divine**, celle d’intercéder et celle d’être agréé comme bénéficiaire.",
      },
      {
        type: "quote",
        text:
          "قال القرطبي رحمه الله في تفسير آية الكرسي: هذا **ردٌّ على من زعم أن له عند الله شفعاء يشفعون له بغير إذنه**، كما كان يقوله المشركون في آلهتهم؛ فبيّن الله أن **الشفاعة كلها ملكٌ له**، لا تكون إلا بإذنه ولمن ارتضى قوله وعمله.\n\nQurṭubī écrit, au sujet du verset du Trône : ceci **réfute quiconque prétend avoir auprès d’Allāh des intercesseurs qui plaideraient pour lui sans Sa permission**, comme le prétendaient les polythéistes au sujet de leurs divinités ; Allāh a clarifié que **l’intercession Lui appartient tout entière**, elle ne survient que par Sa permission et pour celui dont Il agrée la parole et l’action.",
        source: "Qurṭubī, al-Jāmiʿ li-aḥkām al-Qurʾān, commentaire de 2:255",
      },
      { type: "h2", text: "Les versets qui affirment l’intercession" },
      {
        type: "p",
        text: "Face à ceux qui, par excès de prudence doctrinale, nieraient jusqu’à l’existence de toute intercession, le Coran et la Sunna affirment sans ambiguïté sa réalité future, notamment celle réservée au Prophète ﷺ, appelée **« al-maqām al-maḥmūd »**, la station louée.",
      },
      {
        type: "verse",
        arabic:
          "وَمِنَ ٱلَّيْلِ فَتَهَجَّدْ بِهِۦ نَافِلَةً لَّكَ عَسَىٰٓ أَن يَبْعَثَكَ رَبُّكَ **مَقَامًا مَّحْمُودًا**",
        translation:
          "Et une partie de la nuit, veille en prière : ce sera pour toi un surcroît. Il se peut que ton Seigneur t’élève à **une station louée**.",
        reference: "Coran, al-Isrāʾ, 17:79",
      },
      {
        type: "quote",
        text:
          "عن أنس بن مالك رضي الله عنه أن رسول الله ﷺ قال: **«شفاعتي لأهل الكبائر من أمتي»**، وفي حديث آخر: **«لكل نبيٍّ دعوةٌ قد دعا بها، وإني اختبأتُ دعوتي شفاعةً لأمتي يوم القيامة»**.\n\nAnas ibn Mālik, qu’Allāh l’agrée, rapporte que le Messager d’Allāh ﷺ a dit : **« Mon intercession est destinée aux gens de grands péchés de ma communauté. »** Et dans un autre ḥadīth : **« Chaque prophète a eu une invocation qu’il a formulée ; moi, j’ai réservé la mienne comme intercession pour ma communauté, le Jour de la Résurrection. »**",
        source: "Rapporté par Abū Dāwūd, Sunan, ḥadīth n° 4739, et al-Bukhārī, Ṣaḥīḥ, ḥadīth n° 6304",
      },
      {
        type: "p",
        text: "Ces textes établissent donc, sans contestation possible dans la tradition sunnite, la réalité de l’intercession prophétique, réservée en particulier — mais non exclusivement — aux « gens de grands péchés » de sa communauté, ceux qui méritaient le châtiment mais qu’Allāh, **par la voie de l’intercession qu’Il a Lui-même autorisée**, choisit d’épargner.",
      },
      { type: "h2", text: "Comment concilier l’affirmation et la limitation" },
      {
        type: "p",
        text: "La conciliation ne demande aucun artifice : les deux séries de versets **portent sur deux moments distincts** de la même réalité. Les versets qui limitent décrivent **la structure de l’intercession** — son fonctionnement, sa dépendance totale à la permission divine ; les versets qui l’affirment décrivent **son occurrence effective**, accordée au Jour du Jugement à ceux qu’Allāh a choisis comme intercesseurs, pour ceux qu’Il agrée.",
      },
      {
        type: "balance",
        title: "Croire à l’intercession sans tomber dans son détournement",
        arabic: "الشفاعة المشروعة",
        affirmLabel: "Croyance légitime",
        denyLabel: "Dérive vers le shirk",
        affirm: [
          "Croire que le Prophète ﷺ intercédera, **par la permission d’Allāh**, en faveur de qui Il agrée.",
          "Demander à Allāh, dans l’invocation, de **faire bénéficier soi-même** de l’intercession prophétique : « Ô Allāh, fais-le intercéder pour moi. »",
          "Œuvrer pour mériter d’être **agréé**, condition explicite posée par le Coran, plutôt que de compter sur l’intercession seule.",
          "Reconnaître que même le plus grand des envoyés **ne décide de rien par lui-même** en ce domaine.",
        ],
        deny: [
          "S’adresser **directement** au Prophète ou à un saint défunt en lui demandant d’intercéder, comme s’il entendait et agissait par lui-même.",
          "Croire qu’un intercesseur pourrait **faire pencher** la décision divine contre Sa volonté ou sans Sa permission.",
          "Négliger l’effort personnel de piété en misant uniquement sur une intercession **présumée acquise**.",
          "Nier purement et simplement l’intercession, au mépris des textes explicites qui l’affirment.",
        ],
        caption:
          "La différence tient tout entière à l’adresse de la demande : c’est à Allāh qu’on demande l’intercession, jamais à l’intercesseur qu’on la sollicite directement.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une formule à retenir",
        text: "Le croyant dit : **« Ô Allāh, fais que le Prophète ﷺ intercède pour moi »** — la demande reste adressée à Allāh, l’intercession en est l’objet, non l’interlocuteur. Il ne dit jamais : **« Ô Prophète, intercède pour moi »** en s’adressant directement à lui, absent, comme s’il entendait la requête indépendamment d’Allāh.",
      },
      {
        type: "schema",
        title: "Le circuit de l’intercession légitime",
        variant: "flow",
        nodes: [
          { label: "Le croyant", note: "Adresse sa demande d’intercession à Allāh seul, jamais directement à l’intercesseur absent." },
          { label: "Allāh", arabic: "الإذن", note: "Accorde ou non la permission d’intercéder ; rien ne se passe sans Sa décision première." },
          { label: "L’intercesseur", arabic: "الشافع", note: "Le Prophète, un ange, un martyr — plaide, sans décider, uniquement une fois autorisé." },
          { label: "L’agréé", arabic: "المرتضى", note: "Seul celui qu’Allāh agrée bénéficie effectivement de l’intercession présentée." },
        ],
        caption:
          "Quatre étapes, dont trois dépendent entièrement d’Allāh : la demande de l’homme est la seule variable qu’il maîtrise.",
      },
      {
        type: "experiment",
        title: "Le ministre et le souverain",
        steps: [
          "Un sujet souhaite obtenir la grâce d’un souverain absolu, dont la décision est sans appel.",
          "Il sait qu’un ministre, très proche du souverain, plaide parfois pour certains condamnés — mais uniquement lorsque le souverain l’y autorise expressément.",
          "Le sujet a deux options : écrire directement au ministre en le suppliant d’agir de sa propre initiative, ou bien s’adresser au souverain lui-même en lui demandant d’autoriser son ministre à plaider pour lui.",
          "Seule la seconde option respecte l’ordre réel du pouvoir : **le ministre ne peut rien sans l’autorisation qu’il attend lui-même du souverain**.",
        ],
        conclusion:
          "Solliciter directement l’intercesseur, en ignorant que son action dépend entièrement d’une permission qu’il n’a pas encore reçue, **c’est méconnaître la structure même de l’intercession** telle que le Coran la décrit.",
      },
      { type: "h2", text: "Ce que cela change pour la piété quotidienne" },
      {
        type: "p",
        text: "Cette doctrine, loin d’appauvrir l’attachement affectif au Prophète ﷺ et aux gens vertueux, **le canalise vers sa forme correcte** : la prière sur le Prophète, l’invocation en sa faveur, la demande formulée à Allāh de le faire bénéficier de son intercession — plutôt qu’un appel direct qui trahirait, sans même que l’on s’en rende compte, une conception erronée de qui détient réellement le pouvoir de décision.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’intercession, correctement comprise, n’est ni un mythe à rejeter ni une porte ouverte à l’invocation des créatures : c’est **une faveur divine, intégralement suspendue à la permission et à l’agrément d’Allāh**, qui honore l’intercesseur sans jamais lui conférer de pouvoir propre. Celui qui saisit cette structure peut aimer les prophètes et les saints d’un amour immense, sans jamais glisser vers ce que le Coran dénonce chez les polythéistes de tous les temps : **faire d’un intermédiaire un interlocuteur**.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Le recours aux causes n'est pas une atteinte à l'unicité"),
    title: "Le recours aux causes n’est pas une atteinte à l’unicité",
    arabic: "الأسباب",
    intro:
      "Un malentendu tenace prétend qu’une piété authentique consisterait à négliger les causes ordinaires — soigner sa maladie, verrouiller sa porte, travailler pour subvenir à ses besoins — au motif que s’en remettre à Allāh (tawakkul) exigerait un abandon total de toute démarche humaine. Cette lecture, en réalité, contredit la pratique même du Prophète ﷺ, qui portait une armure au combat, faisait soigner ses blessures, et enseignait à ses Compagnons d’attacher leur monture avant de placer leur confiance en Dieu.\n\nÀ l’inverse, une autre erreur, plus insidieuse, consiste à s’attacher aux causes au point d’oublier qu’elles ne produisent leur effet que par la permission divine, transformant ainsi une pratique légitime — reconnaître et utiliser les causes — en une forme subtile de shirk, en attribuant à la cause elle-même un pouvoir propre et indépendant.\n\nCe sujet établit la juste position entre ces deux excès, en s’appuyant sur les versets et ḥadīths fondateurs, pour montrer que **prendre les causes n’a jamais été une atteinte à l’unicité divine**, tant que le cœur reconnaît qu’elles ne sont que des moyens que Dieu a établis, non des sources autonomes d’efficacité.",
    body: [
      { type: "h2", text: "Le vocabulaire des causes" },
      {
        type: "lexique",
        root: "س ب ب",
        transliteration: "s-b-b",
        sense:
          "La racine désigne le lien, la corde qui rattache une chose à une autre — d’où **« sabab »**, la cause, le moyen par lequel un effet est relié à ce qui le produit. En théologie, la cause est un lien créé par Allāh, non une puissance indépendante.",
        derives: [
          { word: "sabab", arabic: "سَبَب", gloss: "La cause, le moyen : un lien établi par Allāh entre un acte et son effet." },
          { word: "musabbib", arabic: "مُسَبِّب", gloss: "Celui qui établit les causes et leur donne effet — Allāh Seul, ultimement." },
          { word: "asbāb", arabic: "أَسْبَاب", gloss: "Pluriel de sabab ; les moyens ordinaires que la sagesse divine a instaurés dans le monde." },
          { word: "tawakkul", arabic: "تَوَكُّل", gloss: "Le fait de placer sa confiance en Allāh — tout en prenant les causes qu’Il a prescrites." },
        ],
        note:
          "Distinguer **al-sabab** (la cause) et **al-musabbib** (Celui qui en établit l’effet) est la clé de toute cette question.",
      },
      { type: "h2", text: "Le ḥadīth fondateur : attache ta monture" },
      {
        type: "quote",
        text:
          "عن أنس بن مالك رضي الله عنه أن رجلًا قال: يا رسول الله، أُرسلها وأتوكل؟ قال: **«اعقلها وتوكل»**.\n\nAnas ibn Mālik, qu’Allāh l’agrée, rapporte qu’un homme demanda : « Ô Messager d’Allāh, dois-je lâcher ma chamelle et m’en remettre à Allāh ? » Il répondit : **« Attache-la, puis remets-t’en à Allāh. »**",
        source: "Rapporté par al-Tirmidhī, Sunan, ḥadīth n° 2517",
      },
      {
        type: "p",
        text: "Ce ḥadīth, d’une concision saisissante, tranche définitivement le débat : le tawakkul authentique **n’exclut pas la prise des causes, il l’exige**. Négliger d’attacher sa monture n’est pas un signe de confiance en Dieu plus élevée : c’est une négligence coupable, revêtue à tort d’un vernis pieux. La véritable piété consiste à faire les deux choses ensemble — agir selon les causes prescrites, et remettre le résultat à Celui qui seul en dispose.",
      },
      { type: "h2", text: "Le fondement coranique de l’usage des causes" },
      {
        type: "verse",
        arabic:
          "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًا فَٱمْشُوا۟ فِى مَنَاكِبِهَا **وَكُلُوا۟ مِن رِّزْقِهِۦ**",
        translation:
          "C’est Lui qui vous a rendu la terre docile : parcourez-en donc les étendues **et mangez de Sa subsistance**.",
        reference: "Coran, al-Mulk, 67:15",
      },
      {
        type: "p",
        text: "Le verset associe explicitement deux mouvements : **« marchez »**, qui commande l’action humaine, et **« mangez de Sa subsistance »**, qui rappelle que le résultat de cette action demeure un don divin. Aucun des deux termes n’efface l’autre : la marche est requise, la subsistance reste attribuée à Allāh. C’est très exactement la structure de toute cause légitime.",
      },
      {
        type: "verse",
        arabic:
          "وَإِذَا مَرِضْتُ **فَهُوَ يَشْفِينِ**",
        translation:
          "Et quand je suis malade, **c’est Lui qui me guérit**.",
        reference: "Coran, al-Shuʿarāʾ, 26:80",
      },
      {
        type: "p",
        text: "Ce verset, prononcé par Ibrāhīm au sujet de sa propre maladie, ne signifie nullement qu’il faudrait s’abstenir de soigner son corps : le Prophète ﷺ lui-même, selon un ḥadīth célèbre, a affirmé qu’Allāh n’a fait descendre aucune maladie sans en faire descendre le remède. Le verset enseigne plutôt **où situer l’attribution ultime de la guérison** : dans la cause seconde qu’est le remède, certes, mais dans l’efficacité que seul Allāh y insuffle.",
      },
      {
        type: "quote",
        text:
          "عن أبي هريرة رضي الله عنه أن النبي ﷺ قال: **«ما أنزل الله داءً إلا أنزل له شفاءً»**.\n\nAbū Hurayra, qu’Allāh l’agrée, rapporte que le Prophète ﷺ a dit : **« Allāh n’a fait descendre aucune maladie sans faire descendre son remède. »**",
        source: "Rapporté par al-Bukhārī, Ṣaḥīḥ, ḥadīth n° 5678",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Chercher le remède n’est pas douter de Dieu",
        text: "Ce ḥadīth établit un principe fondamental : **rechercher activement un remède fait partie de la foi bien comprise, non son contraire**. Le malade qui refuse tout soin sous prétexte de confiance absolue en Dieu contredit l’enseignement même du Prophète ﷺ, qui encourageait la médecine tout en rappelant que la guérison finale procède d’Allāh.",
      },
      { type: "h2", text: "Où se situe alors le danger" },
      {
        type: "p",
        text: "Le danger ne réside jamais dans l’usage de la cause elle-même, mais dans **le glissement du cœur qui finit par lui attribuer un pouvoir autonome**, indépendant de la permission divine. Ce glissement se manifeste de plusieurs façons : croire qu’un remède guérit « par lui-même » sans référence à Dieu, craindre une cause seconde plus qu’on ne craint Allāh, ou encore désespérer totalement lorsqu’une cause habituelle fait défaut, comme si Allāh ne pouvait agir hors d’elle.",
      },
      {
        type: "quote",
        text:
          "قال ابن القيم رحمه الله: **الأسباب لا تنفع بذاتها، وإنما تنفع بإذن مسبِّبها**، فمن اعتمد عليها اعتماد استقلالٍ فقد أشرك، ومن ألغاها بالكلية فقد عطَّل حكمة الله في خلقه، **والصواب اتخاذها مع التوكل على مُسبِّبها**.\n\nIbn al-Qayyim écrit : **les causes ne sont pas efficaces par elles-mêmes ; elles ne le sont que par la permission de Celui qui en est l’Auteur**. Quiconque s’appuie sur elles avec l’idée qu’elles agissent de façon autonome commet un shirk ; quiconque les abolit entièrement méconnaît la sagesse d’Allāh dans Sa création. **Le juste milieu consiste à les prendre, tout en s’en remettant à Celui qui en est l’Auteur.**",
        source: "Ibn al-Qayyim, Madārij al-sālikīn",
      },
      {
        type: "balance",
        title: "Prendre une cause : usage légitime ou glissement vers le shirk",
        arabic: "الأخذ بالأسباب",
        affirmLabel: "Usage licite de la cause",
        denyLabel: "Glissement vers le shirk",
        affirm: [
          "Prendre un remède en sachant qu’il **n’agit que par la permission d’Allāh**.",
          "Verrouiller sa porte, épargner, travailler : **obéir à la sagesse divine** qui a institué des moyens ordinaires.",
          "Remercier la personne qui a été le moyen d’un bienfait, tout en sachant qu’Allāh en est **l’Auteur ultime**.",
          "Continuer à chercher une cause licite même en cas d’échec, sans désespérer de la miséricorde divine.",
        ],
        deny: [
          "Croire qu’une amulette, un talisman ou un rituel **agit par lui-même**, indépendamment d’Allāh.",
          "Craindre une cause seconde (un homme, un signe, un mauvais œil) **plus qu’on ne craint Allāh**.",
          "Désespérer totalement lorsqu’une cause habituelle échoue, **comme si Allāh ne pouvait agir hors d’elle**.",
          "Négliger totalement les causes prescrites sous prétexte d’un tawakkul mal compris.",
        ],
        caption:
          "La cause est un moyen voulu par Allāh ; l’erreur commence quand le cœur en fait une fin, ou pire, un pouvoir concurrent.",
      },
      {
        type: "schema",
        title: "Cause, effet, et attribution ultime",
        variant: "branch",
        nodes: [
          { label: "L’homme agit", note: "Il prend la cause prescrite : remède, travail, précaution." },
          { label: "La cause opère", arabic: "السبب", note: "Elle produit son effet ordinaire, selon la sagesse instaurée par Allāh." },
          { label: "L’effet survient", note: "Guérison, subsistance, protection — jamais garanti à cent pour cent." },
          { label: "Allāh en est l’Auteur", arabic: "المسبِّب", note: "Aucune cause n’agit sans Sa permission ; Il peut en suspendre l’effet à volonté." },
        ],
        caption:
          "Quatre étapes distinctes, mais une seule attribution ultime : la cause est un maillon, non la source.",
      },
      {
        type: "experiment",
        title: "L’interrupteur et le courant",
        steps: [
          "Un homme appuie chaque jour sur un interrupteur, et la lumière s’allume : il en conclut que l’interrupteur est la source de la lumière.",
          "Un jour, une coupure de courant survient ailleurs dans le réseau : il appuie sur l’interrupteur, rien ne se produit.",
          "Il comprend alors que l’interrupteur n’était qu’un **moyen de connexion à une source qu’il ne voyait pas**, jamais la source elle-même.",
          "Celui qui avait compris cela dès le début appuyait sur l’interrupteur avec la même habitude, mais sans jamais s’étonner ni désespérer lorsque, parfois, la lumière ne venait pas.",
        ],
        conclusion:
          "Prendre les causes avec constance, tout en sachant qu’elles ne sont que des interrupteurs reliés à une Source unique, **c’est exactement la posture du tawakkul authentique** : ni passivité, ni illusion d’autonomie.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le recours aux causes ordinaires — travailler, se soigner, se protéger, planifier — n’a donc jamais été, dans la doctrine authentique, une atteinte au tawḥīd : c’est au contraire **une obéissance à l’ordre que Dieu a Lui-même établi dans le monde**. L’atteinte véritable à l’unicité ne survient que lorsque le cœur détache la cause de son Auteur, lui prêtant une autonomie qu’elle n’a jamais possédée. **Attache ta monture, puis remets-t’en à Allāh** : la formule tient en cinq mots toute la théologie de l’action humaine.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Amulettes, superstitions et lecture des signes"),
    title: "Amulettes, superstitions et lecture des signes",
    intro:
      "Peu de pratiques révèlent aussi clairement l’état du cœur croyant que le rapport qu’il entretient avec l’amulette, le porte-bonheur, ou l’interprétation superstitieuse des signes du quotidien. Ces pratiques, largement répandues dans presque toutes les cultures humaines, procèdent d’un même réflexe : chercher une protection ou une prédiction en dehors du canal que Dieu a Lui-même établi — l’invocation directe et la remise de son sort à Sa seule volonté.\n\nLe Prophète ﷺ a traité cette question avec une fermeté qui surprend parfois les esprits modernes, allant jusqu’à qualifier de shirk le port d’amulettes censées repousser le mal par leur seule vertu, et l’art de tirer des présages des vols d’oiseaux ou des rencontres fortuites. Cette sévérité ne relève pas d’un rigorisme arbitraire : elle protège un principe fondamental, à savoir que **le destin, le bien et le mal, la protection et l’atteinte, ne dépendent que d’Allāh seul**.\n\nCe sujet examine les textes relatifs aux amulettes (tamāʾim), à la superstition et aux mauvais présages (ṭiyara), en distingue les degrés de gravité, et propose une lecture équilibrée qui n’ignore ni la sévérité prophétique ni les marges laissées, par ailleurs, à une piété sereine face aux signes du monde.",
    body: [
      { type: "h2", text: "Les amulettes : sens et jugement" },
      {
        type: "lexique",
        root: "ت م م / ع و ذ",
        transliteration: "tamīma / taʿwīdh",
        sense:
          "**« Tamīma »** désigne l’objet suspendu — perle, os, écrit — que l’on porte en croyant qu’il repousse par lui-même le mal ou le mauvais œil. La racine évoque l’achèvement, la complétude que l’on cherche à obtenir par ce moyen.",
        derives: [
          { word: "tamīma", arabic: "تَمِيمَة", gloss: "L’amulette portée en croyant qu’elle protège par sa propre vertu." },
          { word: "taʿwīdh", arabic: "تَعْوِيذ", gloss: "Le fait de chercher protection ; licite lorsqu’il s’agit d’invoquer Allāh par Ses paroles." },
          { word: "ruqya", arabic: "رُقْيَة", gloss: "La récitation protectrice tirée du Coran et des invocations authentiques — licite et recommandée." },
          { word: "ṭiyara", arabic: "طِيَرَة", gloss: "Le mauvais présage tiré du vol des oiseaux, puis étendu à tout signe interprété comme funeste." },
        ],
        note:
          "La différence entre **tamīma** (interdite) et **ruqya** (licite) ne tient pas à la forme, mais à **la source d’où l’on attend l’effet** : l’objet lui-même, ou la parole d’Allāh récitée avec la certitude que Lui seul guérit.",
      },
      {
        type: "quote",
        text:
          "عن عبد الله بن مسعود رضي الله عنه أن رسول الله ﷺ قال: **«إنَّ الرُّقى والتَّمائم والتِّوَلة شركٌ»**.\n\nʿAbd Allāh ibn Masʿūd, qu’Allāh l’agrée, rapporte que le Messager d’Allāh ﷺ a dit : **« Les incantations non conformes, les amulettes et les charmes d’amour sont du shirk. »**",
        source: "Rapporté par Ibn Māja, Sunan, ḥadīth n° 3530, et Aḥmad, Musnad",
      },
      {
        type: "p",
        text: "Ce ḥadīth, sévère dans sa formulation, ne condamne pas toute forme de recours protecteur : les commentateurs précisent que **« ruqya »** ici désigne les incantations obscures, aux paroles inconnues ou empruntées à des pratiques païennes, tandis que la récitation coranique et les invocations prophétiques demeurent explicitement autorisées, le Prophète ﷺ ayant lui-même pratiqué la ruqya sur ses proches avec des sourates précises.",
      },
      { type: "h2", text: "Pourquoi l’amulette est-elle assimilée au shirk" },
      {
        type: "p",
        text: "La raison de cette sévérité tient à l’intention implicite que révèle l’objet lui-même : celui qui suspend une amulette à son cou ou à celui de son enfant **espère, par cet objet, une protection que rien d’autre qu’Allāh ne peut accorder**. Même si l’intention consciente reste floue, l’acte lui-même trahit une confusion entre la cause matérielle et la véritable Source de toute protection.",
      },
      {
        type: "quote",
        text:
          "عن عقبة بن عامر رضي الله عنه أن رسول الله ﷺ قال: **«من علَّق تميمةً فلا أتمَّ الله له»**، وفي رواية: **«من تعلَّق تميمةً فقد أشرك»**.\n\nʿUqba ibn ʿĀmir, qu’Allāh l’agrée, rapporte que le Messager d’Allāh ﷺ a dit : **« Quiconque suspend une amulette, qu’Allāh ne parachève pas son affaire »**, et dans une autre version : **« Quiconque s’attache à une amulette a commis un shirk. »**",
        source: "Rapporté par Aḥmad, Musnad, ḥadīth n° 17422",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Un cas concret pour trancher un doute fréquent",
        text: "La question n’est pas « le support est-il licite ? » mais **« qu’est-ce que mon cœur attend de lui ? »**. Dès qu’un objet est censé protéger par lui-même, l’acte bascule ; tant que la protection est demandée à Allāh seul, l’objet redevient ce qu’il est : rien.",
      },
      {
        type: "p",
        text: "Certains portent aujourd’hui des versets coraniques inscrits sur un support, suspendus autour du cou ou de l’enfant. La majorité des jurisconsultes anciens y voient une variante de la tamīma interdite, non par manque de respect pour le Coran, mais parce que **le simple port d’un texte, sans le lire ni le comprendre, tend à reproduire le réflexe de l’amulette** — chercher un effet magique d’un objet, plutôt que le bénéfice spirituel d’une invocation consciente. D’autres l’autorisent à condition que le contenu soit exclusivement coranique. Le point d’accord unanime demeure : **l’intention qui attribue à l’objet lui-même un pouvoir protecteur autonome est, elle, sans discussion possible, interdite**.",
      },
      { type: "h2", text: "La ṭiyara : le mauvais présage" },
      {
        type: "p",
        text: "Les Arabes préislamiques observaient le vol des oiseaux pour décider d’entreprendre ou non un voyage, un mariage, une transaction. Cette pratique, la ṭiyara, s’est ensuite étendue à toute interprétation superstitieuse des événements fortuits : un chat noir, un chiffre, une rencontre matinale jugée de mauvais augure. Le Coran rapporte que les peuples anciens réagissaient déjà de cette manière face à leurs prophètes.",
      },
      {
        type: "verse",
        arabic:
          "قَالُوٓا۟ **إِنَّا تَطَيَّرْنَا بِكُمْ** لَئِن لَّمْ تَنتَهُوا۟ لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٌ",
        translation:
          "Ils dirent : **« Nous voyons en vous un mauvais présage. »** Si vous ne cessez pas, nous vous lapiderons, et un châtiment douloureux vous touchera de notre part.",
        reference: "Coran, Yā-Sīn, 36:18",
      },
      {
        type: "quote",
        text:
          "عن عبد الله بن مسعود رضي الله عنه عن النبي ﷺ قال: **«الطِّيَرَةُ شركٌ، الطيرةُ شركٌ»** ثلاثًا، **«وما مِنَّا إلا»، ولكنَّ الله يُذهبه بالتوكل**.\n\nʿAbd Allāh ibn Masʿūd, qu’Allāh l’agrée, rapporte que le Prophète ﷺ a dit trois fois : **« Le mauvais présage est un shirk, le mauvais présage est un shirk »**, puis il ajouta : **« Il n’en est aucun d’entre nous [qui n’en ressente une trace], mais Allāh la dissipe par le tawakkul. »**",
        source: "Rapporté par Abū Dāwūd, Sunan, ḥadīth n° 3910, et al-Tirmidhī",
      },
      {
        type: "p",
        text: "Ce ḥadīth est d’une grande finesse psychologique : le Prophète ﷺ reconnaît que **le sentiment spontané de mauvais présage traverse presque tous les cœurs** — une pensée fugace, une impression désagréable. Ce n’est pas ce sentiment lui-même qui constitue le shirk, mais **le fait de s’y arrêter, de laisser cette impression déterminer sa décision**, en lui attribuant un pouvoir prédictif que seul Allāh détient sur le futur.",
      },
      {
        type: "quote",
        text:
          "قال ابن حجر رحمه الله: **الطيرة إنما تكون شركًا إذا اعتقد المتطيِّر أن ذلك الشيء يجلب ضرًّا أو نفعًا استقلالًا**، أما مجرد ما يقع في النفس من كراهية بلا اعتقاد ولا عمل، **فذلك موضوعٌ عن الأمة**، ولهذا أُمر مَن وجد ذلك في نفسه أن يمضيَ ولا يرجع.\n\nIbn Ḥajar écrit : **la ṭiyara ne devient un shirk que lorsque celui qui l’éprouve croit que la chose en question apporte, par elle-même, un tort ou un bienfait de façon autonome**. Quant au simple sentiment de répulsion qui traverse l’âme, sans croyance ni acte qui s’ensuive, **il est pardonné à la communauté** ; c’est pourquoi celui qui ressent cela a reçu l’ordre de poursuivre son chemin sans faire demi-tour.",
        source: "Ibn Ḥajar al-ʿAsqalānī, Fatḥ al-bārī",
      },
      {
        type: "balance",
        title: "Sentiment involontaire et croyance active : où passe la limite",
        affirmLabel: "Toléré (pardonné)",
        denyLabel: "Interdit",
        affirm: [
          "Le **sentiment fugace** de gêne devant un signe, sans y adhérer.",
          "Poursuivre son chemin **malgré** l’impression, par tawakkul.",
          "Se réjouir d’une **bonne parole** entendue, sans lui prêter de pouvoir.",
        ],
        deny: [
          "**Renoncer** à un acte à cause d’un présage.",
          "Croire qu’un objet, un jour ou un animal **agit par lui-même**.",
          "Consulter ceux qui **prétendent lire l’avenir** dans les signes.",
        ],
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le remède prophétique : le bon augure (al-fal)",
        text: "Le Prophète ﷺ n’a pas seulement interdit le mauvais présage : il a proposé une alternative positive, **al-fal al-ḥasan**, le bon augure — se réjouir d’une parole ou d’un signe favorable, sans jamais lui attribuer de pouvoir causal, mais en y voyant simplement une occasion de bien espérer en Allāh. « J’aime le bon augure », disait-il, « et je déteste le mauvais présage. »",
      },
      {
        type: "schema",
        title: "Trois attitudes face aux signes du quotidien",
        variant: "flow",
        nodes: [
          { label: "Le signe survient", note: "Un événement fortuit, une rencontre, une parole entendue par hasard." },
          { label: "Sentiment involontaire", note: "Une impression fugace naît dans l’âme — pardonnée, tant qu’elle reste passive." },
          { label: "Chemin du shirk", arabic: "الطيرة", note: "On s’arrête, on change de décision, on croit le signe doté d’un pouvoir propre." },
          { label: "Chemin du tawakkul", arabic: "التوكل", note: "On poursuit son chemin, on invoque Allāh, on refuse au signe toute autorité sur le futur." },
        ],
        caption:
          "Le même signe peut mener à deux issues radicalement différentes : tout dépend de ce que le cœur en fait, non du signe lui-même.",
      },
      {
        type: "experiment",
        title: "Le message mal lu",
        steps: [
          "Un voyageur voit un corbeau croiser sa route juste avant de partir, et se rappelle une vieille croyance selon laquelle cela présage un malheur.",
          "Un premier voyageur, effrayé, annule son départ, convaincu que l’oiseau détenait un savoir sur son avenir.",
          "Un second voyageur ressent la même impression fugace, mais dit : « Ô Allāh, il n’y a de bien qu’en Ton bien, il n’y a d’augure que le Tien », et poursuit sa route en s’en remettant à Dieu.",
          "Rien, dans le vol de l’oiseau, ne contenait la moindre information sur l’avenir de l’un ou de l’autre : **seule la réaction du cœur a différé**.",
        ],
        conclusion:
          "Le corbeau n’a jamais eu de pouvoir prophétique ; **c’est l’attribution de ce pouvoir, par le cœur du voyageur, qui constitue la véritable atteinte à l’unicité**, non l’oiseau lui-même.",
      },
      { type: "h2", text: "Une sévérité qui protège une liberté" },
      {
        type: "p",
        text: "On pourrait s’étonner de la fermeté prophétique sur des pratiques qui semblent, au premier regard, inoffensives ou simplement culturelles. Mais cette sévérité protège en réalité une liberté essentielle : **celle de ne dépendre, dans son destin, que de la volonté d’Allāh**, sans être l’otage d’un oiseau, d’un chiffre, d’un objet suspendu au cou. Celui qui a intégré cette doctrine avance dans le monde **sans craindre les signes, sans espérer des objets**, le cœur tourné vers une Source unique.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Amulettes et superstitions partagent une même structure fautive : **elles déplacent vers un objet ou un signe créé le pouvoir de protection ou de prédiction qui n’appartient qu’à Allāh**. La rigueur prophétique sur ce point n’exprime pas un rejet de la sensibilité humaine aux signes — le Prophète ﷺ lui-même aimait le bon augure —, mais une exigence de cohérence : **espérer et craindre ne doivent jamais se détourner de Celui qui, seul, dispose réellement du bien et du mal**.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },

  {
    slug: slugifySujet("Le concept même de culte : ce que « ʿibāda » recouvre"),
    title: "Le concept même de culte : ce que « ʿibāda » recouvre",
    arabic: "العبادة",
    intro:
      "Le mot « ʿibāda », traduit habituellement par « culte » ou « adoration », souffre d’un rétrécissement fréquent : on l’associe presque exclusivement aux cinq piliers rituels — prière, jeûne, aumône, pèlerinage, attestation de foi — au point d’oublier que sa portée coranique originelle est infiniment plus vaste. Comprendre ce que « ʿibāda » recouvre réellement change profondément la manière dont un croyant habite sa journée entière, et non les seuls moments consacrés au rituel.\n\nIbn Taymiyya a proposé une définition devenue classique, qui embrasse tout ce qu’Allāh aime et agrée, en parole comme en acte, apparent comme caché — définition qui fait de la ʿibāda non une catégorie d’actes séparée de la vie ordinaire, mais une qualité que tout acte peut recevoir, selon l’intention qui l’anime et la conformité qui l’encadre.\n\nCe sujet reconstitue le sens plein de la racine ʿ-b-d, expose la définition classique du culte, et montre comment cette conception large transforme le travail, la parole, le sommeil même en occasions potentielles d’adoration — sans pour autant diluer la spécificité des actes rituels proprement dits.",
    body: [
      { type: "h2", text: "La racine et son double sens" },
      {
        type: "lexique",
        root: "ع ب د",
        transliteration: "ʿ-b-d",
        sense:
          "La racine porte un double sens complémentaire : la **soumission totale** (d’où « ʿabd », esclave, serviteur) et **l’amour porté à son plus haut degré**. La ʿibāda islamique unit les deux : elle est **une soumission née de l’amour**, non une contrainte extérieure ni une dévotion sans discipline.",
        derives: [
          { word: "ʿibāda", arabic: "عِبَادَة", gloss: "Le culte, l’adoration : tout ce qu’Allāh aime et agrée, en parole et en acte." },
          { word: "ʿabd", arabic: "عَبْد", gloss: "Le serviteur — statut le plus honorable dans le Coran, attribué au Prophète ﷺ lui-même (« ʿabduhu wa rasūluhu »)." },
          { word: "taʿabbud", arabic: "تَعَبُّد", gloss: "L’effort actif d’adoration, la recherche assidue de la proximité par le culte." },
          { word: "maʿbūd", arabic: "مَعْبُود", gloss: "Celui vers qui le culte est dirigé — Allāh seul, légitimement." },
        ],
        note:
          "**قَدْ أَفْلَحَ مَن زَكَّاهَا** trouve son écho dans le statut de « ʿabd » : nul titre n’est plus élevé, dans le Coran, que celui de « serviteur d’Allāh ».",
      },
      { type: "h2", text: "La définition classique d’Ibn Taymiyya" },
      {
        type: "quote",
        text:
          "قال ابن تيمية رحمه الله: **العبادة اسمٌ جامعٌ لكل ما يحبه الله ويرضاه من الأقوال والأعمال الباطنة والظاهرة**، فالصلاة والزكاة والصيام والحج وصدق الحديث وأداء الأمانة وبرّ الوالدين وصلة الأرحام والوفاء بالعهود، والأمر بالمعروف والنهي عن المنكر... كلُّ ذلك من العبادة، **وكذلك حبُّ الله ورسوله وخشيته والإنابة إليه وإخلاص الدين له والصبر لحكمه والشكر لنعمه**.\n\nIbn Taymiyya écrit : **la ʿibāda est un nom englobant tout ce qu’Allāh aime et agrée, parmi les paroles et les actes, apparents comme cachés** : la prière, l’aumône légale, le jeûne, le pèlerinage, la véracité de la parole, la restitution des dépôts, la bonté envers les parents, le maintien des liens de parenté, la fidélité aux engagements, l’ordre du convenable et l’interdiction du blâmable... tout cela relève de la ʿibāda, **de même que l’amour d’Allāh et de Son Messager, la crainte révérencielle envers Lui, le retour repentant à Lui, la sincérité de la religion pour Lui, la patience face à Son décret et la gratitude pour Ses bienfaits**.",
        source: "Ibn Taymiyya, al-ʿUbūdiyya",
      },
      {
        type: "p",
        text: "Cette définition bouleverse toute conception étriquée du culte. Elle établit que **la ʿibāda déborde largement le rituel codifié** pour englober la sincérité d’une parole, la restitution d’un dépôt confié, la douceur envers un parent âgé, la patience face à l’épreuve — pourvu que ces actes soient accomplis avec l’intention de plaire à Allāh et dans le cadre qu’Il a agréé.",
      },
      { type: "h2", text: "Le fondement coranique de cette extension" },
      {
        type: "verse",
        arabic:
          "قُلْ إِنَّ صَلَاتِى وَنُسُكِى **وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ**",
        translation:
          "Dis : « Ma prière, mon sacrifice, **ma vie et ma mort appartiennent à Allāh, Seigneur des mondes**. »",
        reference: "Coran, al-Anʿām, 6:162",
      },
      {
        type: "p",
        text: "Ce verset place, dans une même énumération, deux actes rituels précis — la prière, le sacrifice — et deux réalités englobant toute l’existence — la vie et la mort. Cette conjonction n’est pas fortuite : elle enseigne que **la vie entière du croyant, et non seulement ses moments de dévotion formelle, doit être orientée vers Allāh**, ce qui est la définition même de la ʿibāda au sens large.",
      },
      {
        type: "verse",
        arabic:
          "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ **إِلَّا لِيَعْبُدُونِ**",
        translation:
          "Je n’ai créé les djinns et les hommes **que pour qu’ils M’adorent**.",
        reference: "Coran, al-Dhāriyāt, 51:56",
      },
      {
        type: "quote",
        text:
          "قال ابن كثير رحمه الله: أي: **إلا لآمُرَهم بعبادتي**، لا لحاجةٍ مني إليهم، **فالعبادة هنا شاملةٌ لكل ما أُمروا به من عقيدة وقول وعمل**، وليست مقصورة على الشعائر المعروفة، وإن كانت هي عمودها وأصلها.\n\nIbn Kathīr écrit : c’est-à-dire — **si ce n’est pour leur ordonner de M’adorer**, non par besoin que J’aurais d’eux. **La ʿibāda ici englobe tout ce qu’ils ont reçu comme ordre**, en croyance, en parole et en acte, et n’est pas restreinte aux rites connus, bien que ceux-ci en constituent le pilier et le fondement.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿaẓīm, commentaire de 51:56",
      },
      { type: "h2", text: "Le critère qui distingue l’acte ordinaire de l’acte cultuel" },
      {
        type: "p",
        text: "Si tout acte peut potentiellement devenir ʿibāda, cela ne signifie pas que tout acte l’est automatiquement. Deux conditions, constamment rappelées par les savants, distinguent l’acte de culte de l’acte simplement neutre : **la sincérité de l’intention** (ikhlāṣ) — accomplir l’acte pour Allāh — et **la conformité au modèle prophétique** (mutābaʿa) — l’accomplir selon la manière qu’Il a agréée, non selon une invention personnelle.",
      },
      {
        type: "balance",
        title: "Ce qui transforme un acte ordinaire en culte",
        arabic: "شرطا قبول العبادة",
        affirmLabel: "Conditions requises",
        denyLabel: "Ce qui invalide l’acte comme culte",
        affirm: [
          "**Al-ikhlāṣ** : accomplir l’acte pour Allāh seul, sans recherche de louange ou d’intérêt étranger.",
          "**Al-mutābaʿa** : se conformer, dans la forme et l’esprit, à ce que la Révélation a enseigné.",
          "Manger, travailler, dormir **avec l’intention de se fortifier pour obéir à Allāh** — l’intention élève l’acte ordinaire.",
          "Ordonner le convenable, tenir parole, être patient : autant d’actes explicitement nommés « ʿibāda » par les savants.",
        ],
        deny: [
          "Accomplir un rite pour être vu ou loué des hommes : **l’intention corrompue vide l’acte de sa valeur cultuelle**.",
          "Innover une pratique dévotionnelle sans fondement textuel, si sincère soit l’intention.",
          "Réduire la religion aux seuls rituels, en négligeant l’honnêteté, la bonté et la justice comme s’ils n’en faisaient pas partie.",
          "Accomplir un acte religieux par pure habitude sociale, sans aucune intention tournée vers Allāh.",
        ],
        caption:
          "Le même geste — donner, parler, se reposer — peut être culte ou n’être rien, selon ces deux conditions réunies.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le sommeil du croyant peut être une adoration",
        text: "Les savants citent souvent l’exemple du sommeil pris **dans l’intention de reprendre des forces pour l’obéissance** : cet acte, en apparence purement biologique, reçoit alors la valeur d’une ʿibāda, non parce que dormir serait en soi un rite, mais parce que **l’intention l’a orienté vers Allāh**.",
      },
      {
        type: "schema",
        title: "Les cercles concentriques de la ʿibāda",
        variant: "branch",
        nodes: [
          { label: "Rites codifiés", arabic: "الشعائر", note: "Prière, jeûne, zakāt, ḥajj — le noyau, le pilier structurant." },
          { label: "Paroles agréées", note: "Véracité, douceur, rappel d’Allāh, ordre du convenable." },
          { label: "États du cœur", note: "Amour d’Allāh, crainte révérencielle, patience, gratitude, repentir." },
          { label: "Actes ordinaires intentionnés", note: "Travailler, manger, dormir — élevés au rang de culte par l’intention et la licéité." },
        ],
        caption:
          "Le noyau rituel structure l’ensemble, mais les cercles extérieurs ne sont pas moins réels : ils s’élargissent à toute la vie du croyant sincère.",
      },
      {
        type: "experiment",
        title: "Les deux artisans",
        steps: [
          "Deux artisans façonnent, côte à côte, le même objet, avec la même compétence technique et le même résultat visible.",
          "Le premier travaille uniquement pour le salaire, sans une pensée pour Allāh ; le second travaille pour nourrir honnêtement les siens, avec la conscience que le travail licite est aimé d’Allāh.",
          "À l’œil nu, rien ne distingue leurs gestes : mêmes outils, même sueur, même production.",
          "Pourtant, selon la définition d’Ibn Taymiyya, **l’un des deux accomplit une ʿibāda, l’autre non** — la différence tient entièrement à une intention invisible.",
        ],
        conclusion:
          "Ce constat devrait transformer le rapport du croyant à sa journée entière : **l’essentiel du culte véritable se joue dans des gestes que nul rituel ne codifie**, mais que l’intention seule qualifie.",
      },
      { type: "h2", text: "Une extension qui ne dilue pas le rituel" },
      {
        type: "p",
        text: "Il serait erroné de conclure de cette large extension que les rites codifiés perdraient leur importance, ou que « tout se vaudrait » du moment que l’intention est bonne. Les savants insistent au contraire : **la ʿibāda au sens strict — les cinq piliers — demeure le pilier structurant**, le pôle d’entraînement qui forme le cœur à l’ikhlāṣ, avant qu’il ne puisse se déployer dans l’ensemble de l’existence. Sans la discipline de la prière quotidienne, l’extension du culte au reste de la vie resterait un vœu pieux sans assise.",
      },
      {
        type: "p",
        text: "C’est pourquoi Ibn Taymiyya, tout en offrant cette définition large, n’a jamais suggéré de relâcher l’attention portée aux rites : **le noyau rituel et l’extension existentielle se nourrissent mutuellement**, l’un donnant sa forme et sa rigueur, l’autre donnant son ampleur et sa continuité.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Comprendre ce que « ʿibāda » recouvre réellement libère le croyant d’une fausse partition entre « moments religieux » et « vie ordinaire » : **toute son existence devient un champ potentiel d’adoration**, à condition que l’intention demeure tournée vers Allāh et que l’acte reste conforme à ce qu’Il agrée. Le culte ne commence pas au moment de la prière et ne s’achève pas avec elle : il **irrigue, ou peut irriguer, la totalité d’une vie humaine**, du premier souffle au dernier.",
      },
      { type: "audio", src: "", title: "Écouter le commentaire de Sidi" },
    ],
  },
];
