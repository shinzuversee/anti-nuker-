import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Sujets d'usul al-tafsir — groupe B.
 * Règles de compréhension du texte révélé selon la méthode des savants
 * de la Sunna : portée du général, restriction légitime, absolu et
 * conditionné, explicite et implication, sommaire et détail, et enfin
 * la primauté de l'interprétation du Coran par le Coran.
 */
export const sujetsInterpretationB: Sujet[] = [
  {
    slug: slugifySujet("La portée générale du terme prime sur la particularité de la cause"),
    title: "La portée générale du terme prime sur la particularité de la cause",
    arabic: "العبرة بعموم اللفظ لا بخصوص السبب",
    intro:
      "Un verset descend souvent à propos d'un homme, d'un événement, d'une question posée au Prophète ﷺ. Faut-il alors enfermer son sens dans cette circonstance précise, ou bien son énoncé déborde-t-il l'anecdote qui l'a fait naître ? Les savants de la Sunna, au premier rang desquels al-Shinqīṭī, ont tranché par une règle devenue un pilier de l'exégèse : c'est la généralité du mot qui fait loi, non la particularité de l'occasion. Ce sujet expose cette règle, ses preuves, ses limites, et les erreurs qu'elle permet d'éviter des deux côtés.\n\nOn y verra que cette méthode n'est pas un artifice rhétorique, mais le prolongement naturel du fait que le Coran est un discours adressé à tous les hommes jusqu'au Jour de la Résurrection, et non un procès-verbal figé dans le passé.",
    body: [
      { type: "h2", text: "Poser la question correctement" },
      {
        type: "p",
        text: "Quand on demande « pourquoi ce verset est-il descendu ? », on cherche ce que les savants appellent **sabab al-nuzūl**, la cause de la révélation. Cette connaissance est précieuse : elle éclaire le contexte, dissipe des ambiguïtés, permet de dater certaines prescriptions. Mais une confusion guette aussitôt : croire que la cause **délimite** le sens, comme si le verset ne parlait que de cet homme-là, de ce jour-là. Or le texte révélé s'exprime le plus souvent par un **énoncé général** — un nom indéterminé, un pluriel, une condition — et cet énoncé porte en lui une portée qui dépasse largement l'anecdote qui l'a occasionné.",
      },
      {
        type: "lexique",
        root: "ع ب ر",
        transliteration: "ʿ-b-r",
        sense:
          "Passer d'une chose à une autre, tirer une leçon, considérer. Le mot **ʿibra** désigne ce sur quoi l'on doit fonder son jugement, ce qui « fait loi » dans une situation. Dire que « la considération porte sur la généralité du terme » (**al-ʿibra bi-ʿumūm al-lafẓ**), c'est dire que c'est l'énoncé, non l'anecdote, qui gouverne la règle.",
        derives: [
          { word: "ʿibra", arabic: "عِبْرَة", gloss: "Ce qui fait loi, ce dont on tire la règle." },
          { word: "sabab", arabic: "سَبَب", gloss: "La cause occasionnelle, l'événement qui a précédé la révélation." },
          { word: "lafẓ", arabic: "لَفْظ", gloss: "L'énoncé lui-même, la formule employée par le texte." },
          { word: "ʿumūm", arabic: "عُمُوم", gloss: "La généralité : ce qui embrasse tous les cas semblables sans exception injustifiée." },
        ],
        note: "La règle complète se formule ainsi : **العبرة بعموم اللفظ لا بخصوص السبب** — « la considération va à la généralité de l'énoncé, non à la particularité de la cause ».",
      },
      { type: "h2", text: "Le verset fondateur de la règle" },
      {
        type: "verse",
        arabic:
          "إِنَّ ٱلَّذِينَ يَرْمُونَ ٱلْمُحْصَنَٰتِ ٱلْغَٰفِلَٰتِ ٱلْمُؤْمِنَٰتِ لُعِنُوا۟ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ وَلَهُمْ عَذَابٌ عَظِيمٌ",
        translation:
          "Ceux qui accusent injustement les femmes chastes, insouciantes du mal, croyantes, sont maudits ici-bas et dans l'au-delà ; un châtiment immense les attend.",
        reference: "Coran, al-Nūr, 24:23",
      },
      {
        type: "p",
        text: "Ce verset est descendu au sujet de l'accusation portée contre ʿĀʾisha, l'épouse du Prophète ﷺ, lors de l'événement connu sous le nom de **ḥadīth al-ifk**. Nul ne conteste cette cause historique. Et pourtant, aucun savant n'a jamais restreint la portée de ce verset à ʿĀʾisha seule : **toute femme chaste et croyante accusée injustement d'inconduite tombe sous cette menace**, parce que le texte emploie un pluriel indéterminé — « ceux qui accusent les femmes chastes » — et non un nom propre.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une cause, un texte, deux étendues",
        text: "La cause est **ponctuelle** : elle appartient à l'histoire, elle ne se répète pas à l'identique. Le texte est **général** : sa formulation embrasse quiconque se trouve dans la même situation de fait, en tout temps et en tout lieu. Confondre les deux revient à faire du Coran un simple compte rendu, alors qu'il est une législation perpétuelle.",
      },
      { type: "h2", text: "Le témoignage d'al-Shinqīṭī" },
      {
        type: "quote",
        text:
          "قال الشيخ محمد الأمين الشنقيطي رحمه الله: **الاعتبار في الآيات بعموم ألفاظها لا بخصوص أسبابها**، وهذا هو المقرر عند جماهير الأصوليين والمفسرين، **خلافاً لمن زعم أن حكم الآية يختص بسببها**.\n\nLe cheikh Muḥammad al-Amīn al-Shinqīṭī, qu'Allāh lui fasse miséricorde, a dit : **la considération dans les versets porte sur la généralité de leurs énoncés, non sur la particularité de leurs causes**, ce qui est la position établie chez la majorité des spécialistes des fondements et des exégètes, **contrairement à celui qui prétend que la règle du verset se limite à sa cause**.",
        source: "al-Shinqīṭī, Aḍwāʾ al-bayān",
      },
      {
        type: "p",
        text: "Al-Shinqīṭī consacre, dans son œuvre monumentale **Aḍwāʾ al-bayān**, de nombreux passages à défendre ce principe chaque fois qu'un verset semble, à première vue, viser un cas isolé. Sa méthode constante consiste à rappeler que **le Législateur parle en énoncés**, et que l'énoncé, en langue arabe comme dans toute langue de législation, se lit selon sa forme grammaticale, non selon le souvenir de l'anecdote qui l'a précédé.",
      },
      {
        type: "h2", text: "Un second exemple : le serment de ẓihār" },
      {
        type: "verse",
        arabic:
          "قَدْ سَمِعَ ٱللَّهُ قَوْلَ ٱلَّتِى تُجَٰدِلُكَ فِى زَوْجِهَا وَتَشْتَكِىٓ إِلَى ٱللَّهِ وَٱللَّهُ يَسْمَعُ تَحَاوُرَكُمَآ",
        translation:
          "Allāh a bien entendu la parole de celle qui discutait avec toi au sujet de son époux et se plaignait à Allāh ; et Allāh entend votre dialogue.",
        reference: "Coran, al-Mujādila, 58:1",
      },
      {
        type: "p",
        text: "La sourate al-Mujādila s'ouvre sur le cas d'une femme précise, Khawla bint Thaʿlaba, et de son époux qui avait prononcé la formule du **ẓihār**. Les règles qui suivent — expiation, gradation des peines substitutives — sont énoncées en termes généraux : « quiconque revient sur ce qu'il a dit... ». **Aucun juriste musulman n'a jamais soutenu que ces règles ne s'appliquent qu'au mari de Khawla** : la cause a ouvert la révélation, l'énoncé a fixé la loi pour tous les hommes placés dans la même situation.",
      },
      {
        type: "comparaison",
        title: "Deux lectures possibles d'un même verset",
        columns: ["Lecture par la cause seule", "Lecture par la portée du terme"],
        rows: [
          { criterion: "Champ d'application", cells: ["Limité à la personne ou à l'événement visé", "Étendu à tout cas partageant la même réalité"] },
          { criterion: "Statut du Coran", cells: ["Réduit à un procès-verbal historique", "Maintenu comme législation perpétuelle"] },
          { criterion: "Conséquence juridique", cells: ["Vide la loi de portée pratique", "Fonde l'universalité des jugements"] },
          { criterion: "Position des savants", cells: ["Isolée, rejetée par la majorité", "Position des uṣūliyyūn et des mufassirūn"] },
        ],
        caption: "La seconde colonne représente l'position retenue depuis les premiers siècles.",
      },
      { type: "h2", text: "Les exceptions à ne pas confondre avec la règle" },
      {
        type: "p",
        text: "Cette règle n'ouvre pas la porte à toutes les extensions arbitraires. Il existe des cas où **un indice propre** (qarīna) restreint effectivement le sens à la cause : c'est le cas lorsque le texte lui-même contient une désignation particulière, ou lorsqu'un autre texte vient préciser que la règle est propre à une personne, comme certaines spécificités reconnues au Prophète ﷺ dans le mariage. Mais **l'exception doit être prouvée, elle ne se présume jamais**.",
      },
      {
        type: "objection",
        objection: "Si l'on généralise ainsi chaque verset, ne risque-t-on pas d'appliquer des jugements à des situations que le Législateur n'a jamais visées ?",
        reponse:
          "La généralisation ne se fait pas au gré de l'interprète : elle suit la **forme grammaticale de l'énoncé** — pluriel indéterminé, condition, relative générale — et non son imagination. Ce n'est pas l'homme qui étend le texte, c'est la langue arabe, telle qu'elle a été révélée, qui porte déjà cette étendue en elle.",
        suite:
          "C'est pourquoi les uṣūliyyūn ont développé toute une science des formes du général (ṣīgh al-ʿumūm) afin de reconnaître objectivement où l'énoncé embrasse et où il se limite.",
      },
      {
        type: "schema",
        title: "Comment reconnaître la portée d'un énoncé",
        arabic: "ألفاظ العموم",
        variant: "flow",
        nodes: [
          { label: "Identifier la cause", arabic: "السبب", note: "Connaître le contexte historique de la révélation, sans s'y arrêter." },
          { label: "Examiner l'énoncé", arabic: "اللفظ", note: "Repérer la forme grammaticale : pluriel, condition, relative, nom générique." },
          { label: "Vérifier l'absence de restriction", arabic: "عدم التخصيص", note: "S'assurer qu'aucun texte ne vient limiter cette portée à la cause seule." },
          { label: "Appliquer la règle générale", arabic: "تطبيق العموم", note: "Étendre le jugement à tout cas semblable, en tout temps." },
        ],
        caption: "Une méthode en quatre étapes, appliquée systématiquement par les exégètes des uṣūl.",
      },
      { type: "h2", text: "Ce que disent Ibn ʿUthaymīn et Ibn Kathīr" },
      {
        type: "quote",
        text:
          "قال الشيخ ابن عثيمين رحمه الله: **القاعدة عند العلماء أن العبرة بعموم اللفظ لا بخصوص السبب**، فإذا نزلت الآية بسبب معين وكان لفظها عاماً، **فإنها تشمل كل ما يشمله اللفظ ولو تعدد السبب**.\n\nLe cheikh Ibn ʿUthaymīn, qu'Allāh lui fasse miséricorde, a dit : **la règle chez les savants est que la considération porte sur la généralité de l'énoncé et non sur la particularité de la cause** ; si un verset descend pour une cause déterminée alors que son énoncé est général, **il embrasse tout ce qu'embrasse l'énoncé, même si les causes se multiplient**.",
        source: "Ibn ʿUthaymīn, Uṣūl fī al-tafsīr",
      },
      {
        type: "p",
        text: "Ibn Kathīr, dans son tafsīr, applique constamment ce principe : chaque fois qu'il rapporte un sabab al-nuzūl, il prend soin d'ajouter que **« le jugement est général bien que la cause soit spécifique »**. C'est une clause presque rituelle dans son commentaire, tant elle lui paraît nécessaire pour couper court à toute lecture réductrice.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le danger de l'historicisation du texte",
        text: "Certains courants modernes prétendent que chaque verset serait **enfermé dans son contexte d'origine**, et perdrait toute portée normative une fois ce contexte dépassé. Cette thèse, sous couvert de rigueur historique, aboutit en réalité à **vider le Coran de sa fonction législative**. Elle inverse exactement la règle établie par les savants : elle fait de la cause la mesure du texte, alors que c'est le texte qui doit mesurer et dépasser sa cause.",
      },
      { type: "h2", text: "Une règle qui protège la cohérence de la loi" },
      {
        type: "list",
        items: [
          "Elle empêche de réduire le Coran à une chronique d'événements révolus.",
          "Elle garantit que chaque croyant, en tout temps, se sent directement interpellé par le texte.",
          "Elle fonde la possibilité même du **qiyās** et de l'extension analogique des jugements.",
          "Elle explique pourquoi les juristes tirent des règles générales de récits particuliers.",
          "Elle protège contre les lectures arbitraires qui limiteraient le texte selon les intérêts de l'interprète.",
        ],
      },
      {
        type: "degres",
        title: "Les trois attitudes possibles face à un verset occasionné",
        degres: [
          { label: "Restriction abusive", arabic: "تخصيص باطل", note: "Limiter le sens à la cause sans aucune preuve textuelle : erreur rejetée." },
          { label: "Prudence méthodique", arabic: "التحقق", note: "Vérifier la forme de l'énoncé avant de trancher : démarche requise." },
          { label: "Généralisation fondée", arabic: "العموم الصحيح", note: "Appliquer le jugement à tout cas semblable selon la forme du texte : position des savants." },
        ],
        direction: "asc",
        caption: "La troisième étape est le but recherché par la méthode d'al-Shinqīṭī.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La règle « la considération va à la généralité de l'énoncé, non à la particularité de la cause » n'est pas un détail technique réservé aux spécialistes : elle conditionne **la manière dont le croyant reçoit chaque verset qu'il lit**. Elle lui apprend que même le récit le plus circonstancié porte, dans sa formulation, une adresse qui le concerne personnellement. **Le sabab ouvre la porte, mais c'est le lafẓ qui trace le chemin** — et ce chemin, contrairement à l'anecdote, ne s'arrête jamais.",
      },
    ],
  },

  {
    slug: slugifySujet("Le général et ce qui le restreint légitimement"),
    title: "Le général et ce qui le restreint légitimement",
    arabic: "العام والمخصِّص",
    intro:
      "Le Coran s'exprime souvent en termes généraux : « les croyants », « les femmes », « les biens ». Mais ce même Coran, ou la Sunna qui l'explique, vient parfois **restreindre** cette généralité par une exception, une condition ou une précision. Comprendre comment un texte général peut être légitimement restreint, sans pour autant être vidé de sa force, constitue l'un des chapitres les plus fins des uṣūl al-fiqh appliqués au tafsīr.\n\nCe sujet distingue la restriction légitime — fondée sur un texte ou une preuve reconnue — de la restriction arbitraire, qui n'est que le prétexte des innovateurs pour échapper aux implications d'un texte gênant.",
    body: [
      { type: "h2", text: "Qu'est-ce qu'un énoncé général ?" },
      {
        type: "p",
        text: "Un énoncé est dit **général** (**ʿāmm**) lorsqu'il embrasse, par sa seule forme linguistique, tous les individus ou tous les cas auxquels son sens peut s'appliquer, sans limite ni exception apparente. « Et tuez les associateurs où que vous les trouviez » est un énoncé général : il ne vise ni un lieu ni un individu précis, mais **toute occurrence de la catégorie désignée**.",
      },
      {
        type: "lexique",
        root: "خ ص ص",
        transliteration: "kh-ṣ-ṣ",
        sense:
          "Particulariser, réserver une partie, distinguer un cas du reste. Le **takhṣīṣ** est l'opération par laquelle on retire, d'un énoncé général, une portion précise, sur la base d'une preuve indépendante.",
        derives: [
          { word: "ʿāmm", arabic: "عَامّ", gloss: "L'énoncé général, embrassant sans restriction apparente." },
          { word: "khāṣṣ", arabic: "خَاصّ", gloss: "L'énoncé particulier, visant un cas déterminé." },
          { word: "mukhaṣṣiṣ", arabic: "مُخَصِّص", gloss: "Le texte ou la preuve qui vient restreindre la portée du général." },
          { word: "takhṣīṣ", arabic: "تَخْصِيص", gloss: "L'acte même de restreindre, opéré par une preuve reconnue, non par préférence." },
        ],
        note: "Restreindre un texte sans preuve, c'est **falsifier la parole d'Allāh**, non l'expliquer.",
      },
      { type: "h2", text: "Un exemple coranique de restriction légitime" },
      {
        type: "verse",
        arabic:
          "وَٱلْمُطَلَّقَٰتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَٰثَةَ قُرُوٓءٍۢ",
        translation:
          "Les femmes répudiées observeront un délai d'attente de trois cycles.",
        reference: "Coran, al-Baqara, 2:228",
      },
      {
        type: "p",
        text: "Cet énoncé, pris seul, engloberait **toute femme répudiée**, y compris la femme enceinte et celle qui n'a jamais eu de relation conjugale. Or un autre verset restreint explicitement ce cas : « et celles qui sont enceintes, leur délai est jusqu'à ce qu'elles accouchent » (65:4). Ici, **la restriction est légitime** parce qu'elle repose elle-même sur un texte coranique explicite, et non sur une préférence de l'interprète.",
      },
      {
        type: "verse",
        arabic: "وَأُو۟لَٰتُ ٱلْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ",
        translation: "Et celles qui sont enceintes, leur délai est jusqu'à ce qu'elles accouchent.",
        reference: "Coran, al-Ṭalāq, 65:4",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Restreindre n'est pas contredire",
        text: "Le second verset ne contredit pas le premier : il **précise un cas** que le premier n'avait pas envisagé de manière détaillée. C'est le principe même de la restriction légitime : elle **complète** l'énoncé général au lieu de l'annuler, exactement comme un décret d'application précise une loi-cadre sans l'abroger.",
      },
      { type: "h2", text: "Les sources reconnues du takhṣīṣ" },
      {
        type: "list",
        items: [
          "**Un autre verset du Coran** venant préciser un cas particulier.",
          "**Un hadith authentique** du Prophète ﷺ, car la Sunna explique le Coran.",
          "**Le consensus (ijmāʿ)** des savants sur l'exclusion d'un cas déterminé.",
          "**Une analogie (qiyās) rigoureuse**, selon les uṣūliyyūn qui l'admettent comme mukhaṣṣiṣ.",
          "**Le contexte du discours (siyāq)** lorsqu'il indique sans ambiguïté une restriction voulue.",
        ],
      },
      {
        type: "comparaison",
        title: "Takhṣīṣ légitime et takhṣīṣ arbitraire",
        columns: ["Restriction légitime", "Restriction arbitraire"],
        rows: [
          { criterion: "Fondement", cells: ["Texte, consensus ou analogie rigoureuse", "Opinion personnelle ou intérêt de circonstance"] },
          { criterion: "Vérifiabilité", cells: ["Peut être montrée et discutée publiquement", "Repose sur une intuition invérifiable"] },
          { criterion: "Effet sur le texte", cells: ["Précise sans contredire l'esprit du texte", "Vide le texte de son contenu gênant"] },
          { criterion: "Jugement des savants", cells: ["Accepté et intégré au corpus jurisprudentiel", "Rejeté comme falsification (taḥrīf)"] },
        ],
        caption: "Distinguer les deux colonnes est la tâche centrale de la science des uṣūl.",
      },
      { type: "h2", text: "Le témoignage d'Ibn ʿUthaymīn" },
      {
        type: "quote",
        text:
          "قال الشيخ ابن عثيمين رحمه الله: **العام يبقى على عمومه حتى يقوم دليل على تخصيصه**، فلا يجوز أن نُخرج من العموم شيئاً **إلا بحجة شرعية معتبرة**، وإلا كان ذلك تحريفاً للكلم عن مواضعه.\n\nLe cheikh Ibn ʿUthaymīn, qu'Allāh lui fasse miséricorde, a dit : **l'énoncé général demeure sur sa généralité tant qu'aucune preuve n'établit sa restriction**, et il n'est pas permis d'en exclure quoi que ce soit **sans une preuve légale reconnue**, sinon ce serait dénaturer les mots hors de leur place.",
        source: "Ibn ʿUthaymīn, Uṣūl fī al-tafsīr",
      },
      {
        type: "p",
        text: "Ce principe — **al-ʿāmm yabqā ʿalā ʿumūmihi ḥattā yaqūma dalīl ʿalā takhṣīṣihi**, « le général demeure général jusqu'à preuve de sa restriction » — est l'un des piliers les plus cités des uṣūl al-fiqh. Il place la **charge de la preuve** sur celui qui prétend restreindre, jamais sur celui qui s'en tient à la généralité apparente du texte.",
      },
      {
        type: "objection",
        objection: "Mais alors, tout innovateur pourrait invoquer une soi-disant preuve pour restreindre n'importe quel verset qui le dérange.",
        reponse:
          "C'est précisément pour cela que les savants exigent une preuve **reconnue et examinée par la communauté des spécialistes**, non une intuition personnelle. Une restriction n'est recevable que si elle repose sur un texte authentique, un consensus établi, ou une analogie soumise aux critères stricts des uṣūliyyūn — jamais sur le simple désir d'échapper à une implication gênante.",
        suite: "C'est ce qui distingue le takhṣīṣ des savants du taʾwīl arbitraire des gens d'innovation, qui invoquent la raison contre le texte au lieu de chercher un texte pour préciser le texte.",
      },
      {
        type: "schema",
        title: "Les étapes de vérification d'une restriction proposée",
        variant: "flow",
        nodes: [
          { label: "Constater l'énoncé général", arabic: "العام", note: "Repérer la portée apparente du texte." },
          { label: "Chercher un mukhaṣṣiṣ", arabic: "المخصِّص", note: "Examiner s'il existe un texte ou une preuve reconnue de restriction." },
          { label: "Évaluer la force de la preuve", arabic: "قوة الدليل", note: "Vérifier l'authenticité et la clarté de la preuve invoquée." },
          { label: "Trancher", arabic: "الحكم", note: "Restreindre si la preuve est solide ; maintenir la généralité sinon." },
        ],
        caption: "Une démarche rigoureuse qui exclut toute restriction fondée sur le seul goût de l'interprète.",
      },
      { type: "h2", text: "Un exemple où la généralité doit être maintenue" },
      {
        type: "verse",
        arabic: "وَمَن يَقْتُلْ مُؤْمِنًۭا مُّتَعَمِّدًۭا فَجَزَآؤُهُۥ جَهَنَّمُ خَٰلِدًۭا فِيهَا",
        translation: "Et quiconque tue un croyant intentionnellement, sa rétribution sera l'Enfer, où il demeurera éternellement.",
        reference: "Coran, al-Nisāʾ, 4:93",
      },
      {
        type: "p",
        text: "Certains ont voulu restreindre ce verset en prétendant qu'il ne viserait qu'un cas historique isolé. Or **aucune preuve reconnue** ne vient limiter cette portée : le verset s'applique donc dans toute sa généralité à quiconque commet ce crime, tout en s'articulant avec les textes qui établissent que le repentir sincère efface les péchés, y compris celui-là, sans que cela n'annule pour autant la sévérité de l'avertissement.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Restriction et abrogation : ne pas confondre",
        text: "Le **takhṣīṣ** ne supprime pas le texte général : il en précise un cas, **le reste demeurant pleinement applicable**. L'abrogation (**naskh**), à l'inverse, met fin à l'application d'une règle entière. Confondre les deux mécanismes conduit soit à croire des textes abrogés encore en vigueur, soit à annuler par erreur des textes qui ne devaient être que précisés.",
      },
      { type: "h2", text: "L'avis d'al-Saʿdī" },
      {
        type: "quote",
        text:
          "قال الشيخ عبد الرحمن السعدي رحمه الله: **من قواعد التفسير أن يُحمل العام على عمومه، ويُخصَّص بما يخصصه من الأدلة**، **وليس لأحد أن يخصص بمجرد رأيه أو استحسانه**.\n\nLe cheikh ʿAbd al-Raḥmān al-Saʿdī, qu'Allāh lui fasse miséricorde, a dit : **parmi les règles de l'exégèse, il faut porter le général sur sa généralité, et ne le restreindre que par ce qui le restreint réellement parmi les preuves**, **et nul n'a le droit de le restreindre par sa simple opinion ou sa préférence personnelle**.",
        source: "al-Saʿdī, principes d'exégèse rapportés dans son tafsīr",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Comprendre la relation entre le général et son restricteur légitime, c'est apprendre à lire le Coran comme **un ensemble cohérent où chaque texte éclaire les autres**, sans jamais céder à la tentation d'écarter un verset gênant sous prétexte d'interprétation. **Le général reste général jusqu'à preuve contraire, et la preuve, seule, a le droit de trancher** — non le goût, non l'époque, non la commodité de l'interprète.",
      },
    ],
  },

];
