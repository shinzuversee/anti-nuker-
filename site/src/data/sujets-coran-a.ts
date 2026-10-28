import { slugifySujet, type Sujet } from "./sujet-core";

export const sujetsCoranA: Sujet[] = [
  {
    slug: slugifySujet("Ce que le Coran dit de lui-même"),
    title: "Ce que le Coran dit de lui-même",
    intro:
      "Avant de demander à la tradition ce qu'elle affirme du Coran, il vaut la peine de demander au texte lui-même ce qu'il dit de sa propre nature. Le Coran ne se contente pas d'énoncer des lois et des récits : il se **désigne**, se qualifie, se défend et se distingue. Cette auto-description est une source de premier ordre, trop souvent laissée de côté au profit de discussions théologiques abstraites.",
    body: [
      { type: "h2", text: "Un texte qui parle de lui-même" },
      {
        type: "p",
        text: "Peu de livres se prennent eux-mêmes pour objet avec une telle insistance. Le Coran revient sans cesse sur son origine, son statut, sa fonction et le sort de ceux qui le reçoivent. Il ne se présente jamais comme une simple compilation de sagesse humaine, mais comme une **parole descendue**, un dépôt confié à un messager et destiné à une communauté puis à l'humanité entière.",
      },
      {
        type: "verse",
        arabic: "**إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ وَإِنَّا لَهُۥ لَحَٰفِظُونَ**",
        translation:
          "**C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes gardien.**",
        reference: "Coran, al-Ḥijr, 15:9",
      },
      {
        type: "p",
        text: "Ce verset condense à lui seul trois affirmations : l'origine divine de la descente, l'identité du texte comme « Rappel » (dhikr), et une promesse de préservation qui engage directement la crédibilité du message. Ibn Kathīr note que cette garantie distingue le Coran des Écritures antérieures, confiées à la garde des communautés humaines et donc exposées à l'altération.",
      },
      { type: "h2", text: "Les noms que le texte se donne" },
      {
        type: "lexique",
        root: "ق ر أ",
        transliteration: "q-r-ʾ",
        sense: "Réciter, rassembler, lire à voix haute",
        derives: [
          { word: "Qurʾān", arabic: "قرآن", gloss: "la récitation par excellence, rassemblée dans les cœurs" },
          { word: "Furqān", arabic: "فرقان", gloss: "le Critère, ce qui distingue le vrai du faux" },
          { word: "Dhikr", arabic: "ذكر", gloss: "le Rappel, ce qui restitue une vérité oubliée" },
          { word: "Kitāb", arabic: "كتاب", gloss: "l'Écrit, ce qui est consigné et transmis" },
        ],
        note: "Le texte cumule ces noms plutôt que d'en choisir un seul : chacun met en avant une fonction différente.",
      },
      {
        type: "p",
        text: "Cette pluralité de noms n'est pas décorative. Le mot Qurʾān insiste sur l'oralité, la récitation vivante, transmise de bouche à oreille avant même d'être fixée par écrit. Le mot Furqān insiste sur la fonction de discrimination morale et doctrinale. Le mot Dhikr rattache le texte à une chaîne de rappels envoyés aux nations précédentes. Cette richesse lexicale interne montre que le Coran ne se pense pas comme un simple recueil, mais comme un acte à plusieurs dimensions.",
      },
      { type: "h2", text: "Un texte qui revendique sa provenance" },
      {
        type: "quote",
        text: "وَإِن كُنتُمْ فِى رَيْبٍۢ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ\n\n**Et si vous êtes dans le doute sur ce que Nous avons fait descendre sur Notre serviteur, apportez-en une sourate semblable.**",
        source: "Coran, al-Baqara, 2:23",
      },
      {
        type: "p",
        text: "Ce défi, répété sous plusieurs formes tout au long du texte, est une pièce centrale de l'auto-description coranique. Le Coran ne demande pas seulement d'être cru sur parole : il propose une épreuve concrète, vérifiable par quiconque maîtrise la langue arabe de l'époque. C'est cette logique qui donnera naissance, plus tard, à toute la science de l'iʿjāz, l'inimitabilité, développée systématiquement par al-Bāqillānī puis par al-Jurjānī.",
      },
      {
        type: "schema",
        title: "Les strates de l'auto-description coranique",
        variant: "flow",
        nodes: [
          { label: "Origine", arabic: "التنزيل", note: "Une parole descendue, non composée par un homme." },
          { label: "Fonction", arabic: "الهدى", note: "Une guidance pour ceux qui craignent Dieu." },
          { label: "Statut", arabic: "الإعجاز", note: "Un défi lancé à quiconque doute de son origine." },
          { label: "Destin", arabic: "الحفظ", note: "Un texte promis à la préservation jusqu'à la fin des temps." },
        ],
        caption: "Le Coran s'auto-décrit sur quatre plans distincts, qui se renforcent mutuellement.",
      },
      { type: "h2", text: "Guidance, lumière, guérison : les fonctions revendiquées" },
      {
        type: "p",
        text: "Au-delà de son origine, le texte insiste sur ce qu'il est censé accomplir chez celui qui le reçoit avec sincérité. Il se présente comme une **guidance** pour les pieux, une **lumière** qui dissipe les ténèbres du doute, une **guérison** pour ce que recèlent les poitrines, et une **miséricorde** pour les croyants. Ces qualificatifs ne sont pas de simples métaphores littéraires : ils dessinent une théorie implicite de la lecture, où le texte agit sur celui qui s'en approche avec les bonnes dispositions.",
      },
      {
        type: "p",
        text: "Ibn al-Qayyim développe longuement cette idée dans plusieurs de ses ouvrages : le Coran ne se limite pas à informer, il **transforme**. Un même verset lu par un cœur endurci et par un cœur disposé ne produit pas le même effet, alors que les lettres et les mots restent identiques. Cette dimension expérientielle, difficile à formaliser, est pourtant explicitement revendiquée par le texte lui-même.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une source négligée",
        text: "Beaucoup de débats sur la nature du Coran partent directement de la théologie systématique, en oubliant de commencer par ce que le texte dit explicitement de lui-même. Or cette auto-description est elle-même une donnée révélée, à traiter avec la même rigueur que n'importe quel autre enseignement coranique.",
      },
      { type: "h2", text: "Un texte qui anticipe les objections" },
      {
        type: "objection",
        objection: "N'est-ce pas circulaire qu'un texte témoigne de lui-même pour prouver sa propre valeur ?",
        reponse:
          "L'objection vaudrait si le Coran se contentait d'affirmer sa perfection sans offrir de moyen de vérification. Ce n'est pas le cas : il propose un défi linguistique concret, adressé à une société où la maîtrise de l'éloquence était un critère public et partagé. L'auto-description n'est donc pas une preuve autosuffisante, mais l'annonce d'un critère externe et vérifiable, que les contemporains du Prophète ﷺ, pourtant hostiles, n'ont jamais pu relever malgré tout leur intérêt à le faire.",
      },
      {
        type: "verse",
        arabic: "**كِتَٰبٌ أَنزَلْنَٰهُ إِلَيْكَ مُبَٰرَكٌ لِّيَدَّبَّرُوٓا۟ ءَايَٰتِهِۦ**",
        translation:
          "**C'est un Livre béni que Nous avons fait descendre vers toi, afin qu'ils méditent ses versets.**",
        reference: "Coran, Ṣād, 38:29",
      },
      {
        type: "p",
        text: "Ce verset relie explicitement la descente du texte à la finalité de la méditation. Le Coran ne s'auto-décrit pas seulement comme objet de croyance, mais comme objet d'un travail intellectuel et spirituel continu. C'est ce qui explique l'ampleur prise par la science du tafsīr : elle prolonge une invitation formulée par le texte lui-même.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Interroger le Coran sur ce qu'il dit de lui-même n'est pas un exercice rhétorique : c'est une porte d'entrée méthodologique. Avant les débats théologiques ultérieurs sur la nature de la parole divine, avant les traités d'iʿjāz, le texte a déjà posé les termes de sa propre réception : origine divine, défi vérifiable, fonction transformante, promesse de préservation. Toute théorie postérieure du Coran devra rendre compte de ces quatre données, ou s'exposer à parler d'un objet différent de celui que le texte revendique être.",
      },
    ],
  },
  {
    slug: slugifySujet("L'inimitabilité : de quoi parle-t-on exactement ?"),
    title: "L'inimitabilité : de quoi parle-t-on exactement ?",
    arabic: "الإعجاز",
    intro:
      "Le mot « inimitabilité » circule beaucoup, souvent réduit à des arguments scientifiques ou numériques trouvés sur internet. Or la notion classique d'iʿjāz est bien plus précise, bien plus ancienne, et bien plus rigoureuse que ces usages populaires ne le laissent penser. Comprendre ce que les savants ont réellement entendu par ce terme suppose de revenir à ses fondements linguistiques et théologiques.",
    body: [
      { type: "h2", text: "Un mot, une racine, une prétention" },
      {
        type: "lexique",
        root: "ع ج ز",
        transliteration: "ʿ-j-z",
        sense: "Être incapable, se trouver dans l'impuissance",
        derives: [
          { word: "ʿAjz", arabic: "عجز", gloss: "l'incapacité elle-même" },
          { word: "Muʿjiza", arabic: "معجزة", gloss: "ce qui rend incapable, le signe prophétique" },
          { word: "Iʿjāz", arabic: "إعجاز", gloss: "le fait de rendre autrui incapable de produire un équivalent" },
        ],
        note: "L'iʿjāz du Coran n'est donc pas d'abord une qualité intrinsèque, mais une **relation** : le texte rend incapables ceux qui tentent de l'égaler.",
      },
      {
        type: "p",
        text: "Cette précision lexicale change beaucoup de choses. Dire que le Coran est inimitable, ce n'est pas seulement dire qu'il est beau ou parfait : c'est affirmer que, mis à l'épreuve d'un défi précis et public, personne n'a réussi à produire son équivalent, alors même que les conditions de ce défi étaient réunies chez les contemporains les plus qualifiés pour le relever.",
      },
      { type: "h2", text: "Le défi coranique, étape par étape" },
      {
        type: "verse",
        arabic:
          "قُل لَّئِنِ ٱجْتَمَعَتِ ٱلْإِنسُ وَٱلْجِنُّ عَلَىٰٓ أَن يَأْتُوا۟ **بِمِثْلِ هَٰذَا ٱلْقُرْءَانِ لَا يَأْتُونَ بِمِثْلِهِۦ**",
        translation:
          "Dis : « Si les hommes et les djinns s'unissaient pour produire **l'équivalent de ce Coran, ils ne pourraient en produire l'équivalent**, même en s'assistant les uns les autres. »",
        reference: "Coran, al-Isrāʾ, 17:88",
      },
      {
        type: "degres",
        title: "Le défi et son resserrement progressif",
        arabic: "التدرج في التحدي",
        degres: [
          { label: "Un texte semblable", note: "Le Coran entier, mesuré à l'aune de n'importe quel discours humain." },
          { label: "Dix sourates semblables", note: "Un resserrement, avec liberté de s'associer à plusieurs." },
          { label: "Une seule sourate semblable", note: "Le défi le plus resserré, y compris pour une sourate brève." },
          { label: "Silence des contemporains", note: "Aucune tentative sérieuse n'a été rapportée, malgré l'hostilité." },
        ],
        direction: "asc",
      },
      {
        type: "p",
        text: "Ce resserrement progressif du défi, relevé par les commentateurs classiques, est un argument en soi : loin d'atténuer sa prétention avec le temps, le texte l'a rendue plus précise et plus vérifiable. Al-Bāqillānī en fait le socle de son traité *Iʿjāz al-Qurʾān*, où il montre que l'échec des Arabes à relever ce défi, alors qu'ils étaient les maîtres incontestés de leur langue, constitue une preuve d'un ordre particulier.",
      },
      { type: "h2", text: "Les différents registres de l'inimitabilité" },
      {
        type: "comparaison",
        title: "Les axes classiques de l'iʿjāz",
        columns: ["Registre", "Ce qu'il met en avant"],
        rows: [
          { criterion: "Naẓm (composition)", cells: ["L'agencement des mots, étudié par al-Jurjānī, indépendant du sens isolé de chaque terme"] },
          { criterion: "Balāgha (rhétorique)", cells: ["La force persuasive et l'à-propos de chaque expression selon la situation"] },
          { criterion: "Ghayb (annonces)", cells: ["Des informations sur le passé ou l'avenir inaccessibles au Prophète ﷺ par lui-même"] },
          { criterion: "Tashrīʿ (législation)", cells: ["Une cohérence normative jamais démentie par l'expérience historique"] },
          { criterion: "Aḥkām ʿilmiyya", cells: ["Des remarques compatibles avec des connaissances tardivement établies, lues avec prudence"] },
        ],
        caption: "Ces registres se complètent ; aucun n'épuise à lui seul la notion classique d'iʿjāz.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le piège de la réduction",
        text: "Réduire l'iʿjāz aux seules « annonces scientifiques » est un raccourci récent et fragile : il expose le Coran à des lectures forcées et le prive de son argument le plus solide et le plus ancien, celui de la langue elle-même, inaccessible à qui ne la maîtrise pas mais central pour les premiers destinataires.",
      },
      { type: "h2", text: "Pourquoi la langue plutôt qu'autre chose ?" },
      {
        type: "p",
        text: "Le choix du terrain linguistique n'est pas arbitraire : il correspond exactement au domaine d'excellence de la société qui a reçu le message. Les Arabes du VIIe siècle organisaient des foires poétiques, mémorisaient des milliers de vers, jugeaient de la qualité d'un discours avec une acuité que peu de civilisations ont égalée. Défier un peuple sur son propre terrain d'excellence, et le voir échouer, a un poids argumentatif que ne posséderait pas un défi lancé sur un domaine étranger à sa culture.",
      },
      {
        type: "p",
        text: "C'est pourquoi les savants insistent : l'iʿjāz n'est pas une preuve abstraite valable en toute époque de la même manière, mais un argument historique situé, dont la force initiale reposait sur la compétence linguistique exceptionnelle de ses premiers témoins. Cela n'empêche pas l'inimitabilité de rester perceptible aujourd'hui, mais sa pleine mesure exige un minimum de familiarité avec l'arabe classique.",
      },
      {
        type: "objection",
        objection: "Comment prouver qu'aucun Arabe n'a jamais tenté sérieusement de relever le défi ?",
        reponse:
          "Plusieurs tentatives sont effectivement rapportées par les sources, notamment celle attribuée à Musaylima. Les commentateurs soulignent unanimement leur caractère grotesque et immédiatement ridiculisé par les contemporains eux-mêmes, précisément parce que ce public possédait les compétences nécessaires pour juger. L'absence de contestation sérieuse de ce jugement, dans une société où l'hostilité au message ne manquait pourtant pas, est elle-même une donnée historique significative.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Parler d'iʿjāz, ce n'est donc pas brandir une liste d'arguments disparates, mais s'inscrire dans une démonstration précise : un défi public, gradué, lancé à des experts incontestés de la langue, et jamais relevé. Cette architecture, bâtie patiemment par des générations de savants, mérite d'être restituée dans sa rigueur d'origine plutôt que diluée dans des usages populaires qui, malgré leur bonne intention, affaiblissent souvent l'argument qu'ils prétendent défendre.",
      },
    ],
  },
  {
    slug: slugifySujet("Les modalités de la révélation"),
    title: "Les modalités de la révélation",
    arabic: "الوحي",
    intro:
      "Le mot waḥy recouvre en réalité plusieurs expériences très différentes, rapportées par les sources les plus fiables avec un luxe de détails inhabituel. Loin d'être un phénomène uniforme, la révélation coranique a pris des formes distinctes selon les circonstances, dont la description minutieuse par les Compagnons constitue un témoignage historique de premier plan.",
    body: [
      { type: "h2", text: "Le mot avant la chose" },
      {
        type: "lexique",
        root: "و ح ي",
        transliteration: "w-ḥ-y",
        sense: "Faire connaître rapidement et discrètement",
        derives: [
          { word: "Waḥy", arabic: "وحي", gloss: "l'inspiration ou la révélation elle-même" },
          { word: "Awḥā", arabic: "أوحى", gloss: "communiquer de façon rapide, cachée à autrui" },
          { word: "Īḥāʾ", arabic: "إيحاء", gloss: "le geste même de suggérer, d'inspirer discrètement" },
        ],
        note: "Le Coran emploie ce même mot pour l'inspiration donnée aux abeilles (16:68), ce qui montre l'étendue sémantique du terme avant sa spécialisation prophétique.",
      },
      { type: "h2", text: "Le témoignage de ʿĀʾisha" },
      {
        type: "quote",
        text: "عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا: **«وَلَقَدْ رَأَيْتُهُ يَنْزِلُ عَلَيْهِ الْوَحْيُ فِي الْيَوْمِ الشَّدِيدِ الْبَرْدِ، فَيَفْصِمُ عَنْهُ وَإِنَّ جَبِينَهُ لَيَتَفَصَّدُ عَرَقًا»**\n\nʿĀʾisha, qu'Allāh l'agrée, a dit : **« Je l'ai vu recevoir la révélation par un jour de grand froid ; puis elle s'interrompait, et son front ruisselait de sueur. »**",
        source: "Rapporté par al-Bukhārī",
      },
      {
        type: "p",
        text: "Ce hadith, parmi les plus cités sur le sujet, montre que la révélation n'était pas vécue comme une simple pensée qui traverse l'esprit. Elle s'accompagnait d'effets physiques observables, rapportés par les témoins les plus proches du Prophète ﷺ, ce qui exclut d'emblée l'idée d'une expérience purement intérieure ou imaginative.",
      },
      { type: "h2", text: "Les formes recensées par les savants" },
      {
        type: "degres",
        title: "Les modalités classées par intensité",
        arabic: "أنواع الوحي",
        degres: [
          { label: "La vision véridique", note: "Précédant la mission, décrite comme « pareille à la lueur de l'aube » selon ʿĀʾisha." },
          { label: "L'inspiration directe au cœur", note: "Sans intermédiaire visible ni son perçu." },
          { label: "L'ange sous forme humaine", note: "Jibrīl se présentant en homme, comme dans le célèbre hadith de Jibrīl." },
          { label: "Le bruit de cloche", note: "La forme la plus pénible, décrite par le Prophète ﷺ lui-même comme la plus rude." },
          { label: "La vision de l'ange dans sa forme réelle", note: "Deux fois seulement, selon la Sunna, en raison de son immensité." },
          { label: "La parole directe sans intermédiaire", note: "Réservée à la nuit du Mirāj, un cas unique et distinct." },
        ],
        direction: "asc",
      },
      {
        type: "p",
        text: "Ibn Ḥajar, dans son commentaire de Ṣaḥīḥ al-Bukhārī, détaille ces catégories avec précision, en s'appuyant sur les hadiths qui les rapportent chacune. Cette diversité n'est pas un embarras pour la tradition : elle est au contraire présentée comme une richesse, chaque modalité correspondant à des circonstances et à des besoins différents.",
      },
      { type: "h2", text: "Pourquoi la forme la plus pénible ?" },
      {
        type: "verse",
        arabic: "**إِنَّا سَنُلْقِى عَلَيْكَ قَوْلًا ثَقِيلًا**",
        translation: "**Nous allons te révéler une parole lourde.**",
        reference: "Coran, al-Muzzammil, 73:5",
      },
      {
        type: "p",
        text: "Ce verset annonce lui-même le poids de l'épreuve, physique autant que spirituelle. Les exégètes rapprochent cette « lourdeur » du fait que le chameau du Prophète ﷺ s'agenouillait parfois de tout son poids pendant la descente de la révélation, tant la charge portée par son cavalier devenait perceptible de l'extérieur, comme le rapportent plusieurs récits authentifiés.",
      },
      {
        type: "schema",
        title: "Le circuit de la transmission",
        variant: "flow",
        nodes: [
          { label: "Allāh", note: "Source de la parole révélée." },
          { label: "Jibrīl", arabic: "جبريل", note: "L'ange intermédiaire, décrit dans plusieurs formes." },
          { label: "Le cœur du Prophète ﷺ", arabic: "قلب النبي", note: "Lieu de réception, selon 26:193-194." },
          { label: "La récitation orale", note: "Transmise aux Compagnons, mémorisée immédiatement." },
        ],
        caption: "Un circuit décrit par le Coran lui-même, et non reconstruit après coup par la tradition.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un détail souvent oublié",
        text: "Le Prophète ﷺ ne choisissait pas le moment de la révélation, ni ne pouvait l'accélérer par un effort de concentration. Ce trait, souligné par Ibn Taymiyya contre les thèses qui font du Coran une production psychologique, distingue nettement le waḥy de toute forme d'inspiration littéraire ou poétique volontaire.",
      },
      {
        type: "objection",
        objection: "Ces descriptions physiques ne suggèrent-elles pas un trouble d'ordre médical plutôt qu'une révélation ?",
        reponse:
          "Cette hypothèse, avancée par certains orientalistes, se heurte à plusieurs faits têtus rapportés par les mêmes sources : la lucidité totale du Prophète ﷺ après chaque épisode, sa capacité immédiate à réciter un texte d'une cohérence et d'une élégance remarquables, et la continuité de ce phénomène sur vingt-trois années sans dégradation ni incohérence croissante, contrairement à ce qu'impliquerait une pathologie évolutive. Les manifestations physiques décrites correspondent d'ailleurs à un schéma stable et reconnu par les Compagnons eux-mêmes comme un signe distinctif, non comme une inquiétude médicale.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Loin d'un phénomène flou ou uniforme, la révélation coranique a été vécue, observée et rapportée dans une diversité de formes précisément documentées. Cette richesse descriptive, transmise par les témoins les plus proches, constitue l'une des données les plus solides dont dispose la tradition islamique sur la nature même de l'événement fondateur du Coran.",
      },
    ],
  },
  {
    slug: slugifySujet("Pourquoi le Coran n'est pas ordonné chronologiquement"),
    title: "Pourquoi le Coran n'est pas ordonné chronologiquement",
    intro:
      "Ouvrir le muṣḥaf, c'est constater immédiatement que l'ordre des sourates ne suit pas l'ordre de leur révélation : la longue sourate al-Baqara, révélée à Médine, précède des sourates mecquoises bien plus anciennes. Ce constat surprend souvent les nouveaux lecteurs, avant qu'ils ne découvrent que cet agencement est lui-même le fruit d'un choix réfléchi, et non d'un oubli ou d'un hasard de compilation.",
    body: [
      { type: "h2", text: "Deux ordres, deux logiques" },
      {
        type: "comparaison",
        title: "L'ordre de révélation face à l'ordre du muṣḥaf",
        columns: ["Ordre de révélation", "Ordre du muṣḥaf"],
        rows: [
          { criterion: "Logique", cells: ["Chronologique, historique", "Thématique et pédagogique"] },
          { criterion: "Utilité principale", cells: ["Étudier le contexte, l'abrogation, l'évolution de la législation", "Réciter, mémoriser, méditer un ensemble organisé"] },
          { criterion: "Fixation", cells: ["Reconstituée après coup par les savants, avec des divergences ponctuelles", "Fixée du vivant du Prophète ﷺ par instruction directe"] },
          { criterion: "Première sourate", cells: ["Al-ʿAlaq", "Al-Fātiḥa"] },
        ],
      },
      {
        type: "p",
        text: "Cette distinction est essentielle : l'ordre chronologique n'a jamais été perdu par accident, il a simplement été **remplacé** par un autre principe d'organisation, jugé plus adapté à la fonction principale du texte, qui est d'être récité, mémorisé et médité dans la vie quotidienne du croyant plutôt que consulté comme une chronique historique.",
      },
      { type: "h2", text: "Un ordre fixé par instruction prophétique" },
      {
        type: "quote",
        text: "عن عثمان بن أبي العاص رضي الله عنه أن جبريل عليه السلام كان يأتي النبي ﷺ فيقول: **«ضَعْ آيَةَ كَذَا فِي مَوْضِعِ كَذَا»**\n\nD'après ʿUthmān ibn Abī al-ʿĀṣ, qu'Allāh l'agrée, Jibrīl venait au Prophète ﷺ et lui disait : **« Place ce verset à tel endroit. »**",
        source: "Rapporté par Aḥmad et Abū Dāwūd",
      },
      {
        type: "p",
        text: "Ce hadith, cité par al-Suyūṭī dans al-Itqān, est central : il montre que l'agencement interne des versets à l'intérieur des sourates, tout comme l'ordre général reconnu par les Compagnons, ne procède pas d'un choix arbitraire postérieur, mais d'une instruction transmise du vivant même du Prophète ﷺ, sourate par sourate et parfois verset par verset.",
      },
      { type: "h2", text: "L'exemple d'al-Baqara" },
      {
        type: "p",
        text: "Prenons un exemple concret. Al-Baqara, sourate médinoise tardive, ouvre pourtant le corps du muṣḥaf juste après la Fātiḥa. Ce choix se comprend par son contenu : elle rassemble les grands thèmes de la foi, de la législation, du récit d'Adam, de l'histoire des Fils d'Israël et de l'établissement de la communauté, ce qui en fait un socle thématique idéal pour la suite du texte, indépendamment de sa date de descente.",
      },
      {
        type: "p",
        text: "À l'inverse, les courtes sourates mecquoises, bien que révélées en premier, sont placées à la fin du muṣḥaf. Elles y jouent un rôle particulier : leur brièveté et leur intensité rythmique en font des supports privilégiés pour la mémorisation initiale, notamment chez les enfants, et pour la récitation dans la prière quotidienne, où des versets longs seraient peu praticables.",
      },
      {
        type: "cycle",
        title: "Fonctions de l'ordre canonique dans la vie du croyant",
        center: "Le muṣḥaf",
        steps: [
          { label: "Apprentissage", note: "Les courtes sourates, mémorisées en premier par les enfants." },
          { label: "Récitation quotidienne", note: "Un texte organisé pour la prière et le culte régulier." },
          { label: "Approfondissement thématique", note: "Les grandes sourates médinoises, socle doctrinal et législatif." },
          { label: "Retour méditatif", note: "La lecture cyclique du muṣḥaf, sans dépendre d'une chronologie externe." },
        ],
        caption: "L'ordre canonique sert des usages liturgiques et pédagogiques que l'ordre chronologique ne pourrait pas assurer seul.",
      },
      { type: "h2", text: "La chronologie n'est pas pour autant perdue" },
      {
        type: "focus",
        kind: "repere",
        title: "Deux sciences, non une seule perte",
        text: "Les savants ont développé la science des « asbāb al-nuzūl » et celle du « makkī wa madanī » précisément pour préserver, à côté de l'ordre canonique, la mémoire du contexte et de la chronologie de chaque passage. Rien n'a été sacrifié : deux besoins différents ont simplement reçu deux réponses distinctes.",
      },
      {
        type: "objection",
        objection: "Un ordre chronologique ne serait-il pas plus rigoureux, plus proche d'une lecture historique-critique légitime ?",
        reponse:
          "Il le serait pour un objectif précis, celui de retracer l'évolution du message. Mais le Coran ne se présente pas d'abord comme une archive historique : il se présente comme une guidance vivante, destinée à la récitation rituelle et à la méditation continue. Un ordre chronologique, en isolant chaque texte dans son moment d'origine, affaiblirait au contraire les résonances thématiques que l'ordre canonique met en valeur, par exemple entre les débuts et les fins de sourates qui se répondent délibérément.",
      },
      {
        type: "verse",
        arabic: "**وَقُرْءَانًا فَرَقْنَٰهُ لِتَقْرَأَهُۥ عَلَى ٱلنَّاسِ عَلَىٰ مُكْثٍ**",
        translation:
          "**Et c'est un Coran que Nous avons fragmenté, afin que tu le récites aux gens avec pondération.**",
        reference: "Coran, al-Isrāʾ, 17:106",
      },
      {
        type: "p",
        text: "Ce verset justifie lui-même le mode de descente progressif du Coran, sur plus de vingt années, en fonction des événements et des besoins de la communauté naissante. Cette progressivité de la révélation est un fait distinct de l'ordre du muṣḥaf, mais les deux logiques s'articulent : la descente répond à l'histoire, l'agencement final répond à l'usage rituel et pédagogique.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'absence d'ordre chronologique dans le muṣḥaf n'est donc ni un défaut ni un accident de transmission : c'est le résultat d'un choix délibéré, fondé sur une instruction prophétique attestée, et justifié par la fonction principale du texte comme guidance récitée plutôt que chronique historique. Les deux dimensions, loin de s'exclure, sont préservées chacune par une science dédiée, ce qui montre la cohérence méthodique de toute la tradition islamique sur ce point.",
      },
    ],
  },
  {
    slug: "seven-modes-recitation",
    title: "Les sept aḥruf et les dix qirāʾāt",
    arabic: "الأحرف السبعة",
    intro:
      "Peu de sujets suscitent autant de confusion que celui des « sept lettres » (aḥruf) et des « dix lectures » (qirāʾāt), souvent présentés comme synonymes alors qu'ils désignent des réalités distinctes, situées à des moments différents de l'histoire du texte. Démêler ces deux notions est indispensable pour comprendre pourquoi il existe aujourd'hui plusieurs lectures légitimes du même Coran.",
    body: [
      { type: "h2", text: "Le hadith fondateur" },
      {
        type: "quote",
        text: "عن ابن عباس رضي الله عنهما قال: قال رسول الله ﷺ: **«أَقْرَأَنِي جِبْرِيلُ عَلَى حَرْفٍ فَرَاجَعْتُهُ فَلَمْ أَزَلْ أَسْتَزِيدُهُ وَيَزِيدُنِي حَتَّى انْتَهَى إِلَى سَبْعَةِ أَحْرُفٍ»**\n\nIbn ʿAbbās, qu'Allāh les agrée, a rapporté que le Messager d'Allāh ﷺ a dit : **« Jibrīl m'a fait réciter selon une lettre, et je n'ai cessé de lui en demander davantage, et il m'en donnait davantage, jusqu'à ce qu'il en arrive à sept lettres. »**",
        source: "Rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "Ce hadith, unanimement authentifié, est la source première de la notion des sept aḥruf. Il montre qu'une facilité a été accordée à la communauté naissante, composée de tribus aux prononciations et parfois aux tournures différentes. Al-Zarkashī, dans al-Burhān, consacre un chapitre entier à répertorier les interprétations savantes de ce que recouvrent précisément ces « sept lettres ».",
      },
      { type: "h2", text: "Que désignent réellement les sept aḥruf ?" },
      {
        type: "p",
        text: "Les savants ne s'accordent pas sur un sens unique du terme, et al-Suyūṭī recense pas moins d'une quarantaine d'opinions à ce sujet. L'avis le plus répandu, défendu notamment par Ibn Qutayba, y voit sept types de variations possibles : dans les formes des mots, les déclinaisons, les singuliers et pluriels, les inversions d'ordre, les substitutions de termes, les ajouts et retranchements mineurs, ou encore les dialectes tribaux.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Une confusion à éviter",
        text: "Les sept aḥruf ne correspondent pas aux « sept lectures » (qirāʾāt sabʿ) popularisées plus tard par Ibn Mujāhid. Cette identification, longtemps répandue par simplification, est rejetée par la majorité des spécialistes classiques, à commencer par Ibn al-Jazarī lui-même.",
      },
      { type: "h2", text: "De sept lettres à dix lectures" },
      {
        type: "chronologie",
        title: "De la révélation aux dix lectures canoniques",
        events: [
          { date: "Époque prophétique", label: "Accord de la facilité des sept aḥruf", note: "Pour alléger la mémorisation entre les tribus." },
          { date: "Sous ʿUthmān (~24 H)", label: "Unification autour d'un seul rasm consonantique", note: "Resserrement volontaire pour éviter la discorde." },
          { date: "IIIe siècle H.", label: "Ibn Mujāhid fixe sept lecteurs", note: "Sélection de sept imams parmi les lectures transmises avec la meilleure chaîne." },
          { date: "IVe-Ve siècle H.", label: "Ajout de trois lectures supplémentaires", note: "Reconnues comme tout aussi authentiques, formant les dix qirāʾāt." },
          { date: "Ibn al-Jazarī (m. 833 H.)", label: "Codification définitive des dix lectures", note: "Dans al-Nashr fī al-Qirāʾāt al-ʿAshr." },
        ],
        caption: "Les qirāʾāt sont un sous-ensemble organisé, transmis avec chaîne, à l'intérieur du champ ouvert par les aḥruf.",
      },
      {
        type: "p",
        text: "Cette chronologie montre que les dix qirāʾāt ne sont pas une invention tardive arbitraire : elles constituent une sélection rigoureuse, fondée sur des critères précis de chaîne de transmission, de conformité au rasm ʿuthmānien et de compatibilité avec la langue arabe, parmi la masse plus large des variations orales existantes depuis l'époque prophétique.",
      },
      {
        type: "degres",
        title: "Les critères de validité d'une lecture",
        arabic: "شروط صحة القراءة",
        degres: [
          { label: "Chaîne de transmission authentique", note: "Une transmission ininterrompue jusqu'au Prophète ﷺ." },
          { label: "Conformité au rasm ʿuthmānien", note: "Même approximativement, selon les conventions de l'écriture ancienne." },
          { label: "Conformité aux règles de la langue arabe", note: "Aucune lecture ne doit violer la grammaire classique." },
        ],
        direction: "asc",
      },
      { type: "h2", text: "Un exemple concret de lecture variante" },
      {
        type: "verse",
        arabic: "**مَٰلِكِ يَوْمِ ٱلدِّينِ** — lu aussi **مَلِكِ يَوْمِ ٱلدِّينِ**",
        translation:
          "**Maître du Jour du Jugement** — ou selon une autre lecture tout aussi authentique, **Roi du Jour du Jugement**.",
        reference: "Coran, al-Fātiḥa, 1:4",
      },
      {
        type: "p",
        text: "Les deux lectures de ce verset célèbre, mālik et malik, sont l'une et l'autre mutawātir, c'est-à-dire transmises par un nombre de chaînes excluant toute possibilité d'erreur collective. Loin de se contredire, elles enrichissent le sens : l'une insiste sur la possession totale, l'autre sur la royauté absolue, deux attributs complémentaires de Dieu au Jour du Jugement.",
      },
      {
        type: "objection",
        objection: "Cette multiplicité de lectures ne fragilise-t-elle pas l'unité du texte coranique ?",
        reponse:
          "C'est l'inverse qui est vrai : chaque lecture reconnue comme mutawātir bénéficie d'une chaîne de transmission propre, aussi rigoureuse que celle du hadith le plus authentique, ce qui renforce plutôt qu'affaiblit la crédibilité globale du texte. La diversité des qirāʾāt n'introduit aucune contradiction doctrinale ou juridique majeure ; elle multiplie au contraire les angles de lecture d'un même sens révélé, ce qu'Ibn al-Jazarī compare à des facettes d'un même joyau.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les sept aḥruf et les dix qirāʾāt appartiennent donc à deux moments et à deux logiques distincts : une facilité originelle accordée par la révélation elle-même, puis une codification savante et rigoureuse d'un sous-ensemble de lectures transmises avec la plus grande fiabilité. Loin d'être une source de confusion, cette architecture, une fois comprise dans son détail historique, révèle au contraire l'ampleur du travail de préservation accompli par les premières générations musulmanes.",
      },
    ],
  },
  {
    slug: slugifySujet("La préservation du texte : ce que montrent les manuscrits"),
    title: "La préservation du texte : ce que montrent les manuscrits",
    intro:
      "Face aux critiques qui interrogent la fiabilité de la transmission du Coran, les manuscrits anciens constituent un terrain d'examen concret et vérifiable, indépendant de la seule confiance envers la tradition orale. Leur étude, menée aussi bien par des chercheurs musulmans que non-musulmans, apporte des éléments factuels précieux sur la remarquable stabilité du texte coranique depuis ses origines.",
    body: [
      { type: "h2", text: "Un texte double dès l'origine : écrit et mémorisé" },
      {
        type: "p",
        text: "Contrairement à une idée reçue, le Coran n'a jamais reposé sur la seule mémoire orale. Dès l'époque prophétique, des scribes désignés couchaient par écrit chaque révélation nouvelle, sur des supports variés — feuilles de palmier, omoplates, pierres plates. Cette double transmission, écrite et orale, simultanée et non successive, constitue un dispositif de vérification mutuelle rarement égalé pour un texte de l'Antiquité tardive.",
      },
      {
        type: "schema",
        title: "Le double canal de transmission",
        variant: "branch",
        nodes: [
          { label: "Révélation", note: "Reçue par le Prophète ﷺ." },
          { label: "Mémorisation immédiate", arabic: "الحفظ", note: "Par le Prophète ﷺ puis par les Compagnons." },
          { label: "Consignation écrite", arabic: "الكتابة", note: "Par des scribes attitrés, du vivant même du Prophète ﷺ." },
          { label: "Contrôle mutuel", note: "Chaque support vérifie et confirme l'autre en permanence." },
        ],
        caption: "Une transmission à deux canaux indépendants, rare pour un texte de cette époque.",
      },
      { type: "h2", text: "Ce que disent les manuscrits les plus anciens" },
      {
        type: "p",
        text: "Le manuscrit dit de Ṣanʿāʾ, découvert au Yémen en 1972, ainsi que le manuscrit de Birmingham, dont une datation au radiocarbone a placé le parchemin dans une fourchette remontant potentiellement du vivant du Prophète ﷺ ou juste après, ont fait l'objet d'un examen international poussé. Les résultats, loin de mettre en doute la stabilité du texte, ont plutôt surpris par leur degré de conformité avec le muṣḥaf actuellement en circulation.",
      },
      {
        type: "p",
        text: "Certes, ces manuscrits anciens présentent un texte purement consonantique, sans points diacritiques ni signes vocaliques — ce qui est normal pour l'écriture arabe de cette période, bien avant l'islam déjà. Mais le squelette consonantique lui-même, le rasm, correspond de façon frappante à celui transmis depuis quatorze siècles, avec des écarts d'orthographe mineurs qui n'affectent jamais le sens du texte.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une palimpseste bien comprise",
        text: "Le manuscrit de Ṣanʿāʾ contient un texte inférieur (effacé et recouvert) qui présente quelques variantes d'ordre et de formulation. Les spécialistes, y compris non-musulmans, l'interprètent le plus souvent comme un exemplaire de travail personnel antérieur à l'unification ʿuthmānienne, et non comme une preuve d'instabilité du texte canonique lui-même, qui reste, lui, d'une remarquable constance à travers tous les manuscrits ultérieurs.",
      },
      { type: "h2", text: "Comparaison avec la transmission d'autres textes anciens" },
      {
        type: "comparaison",
        title: "Délai entre composition et plus ancien manuscrit complet",
        columns: ["Texte", "Délai approximatif"],
        rows: [
          { criterion: "Coran", cells: ["Quelques décennies, avec des fragments quasi-contemporains"] },
          { criterion: "Nouveau Testament (ensemble complet)", cells: ["Plusieurs siècles pour les manuscrits complets"] },
          { criterion: "Œuvres classiques grecques et latines", cells: ["Souvent plusieurs siècles, parfois plus d'un millénaire"] },
        ],
        caption: "Un tel délai réduit place le Coran parmi les textes antiques les mieux attestés matériellement.",
      },
      {
        type: "verse",
        arabic: "**إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ وَإِنَّا لَهُۥ لَحَٰفِظُونَ**",
        translation: "**C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes gardien.**",
        reference: "Coran, al-Ḥijr, 15:9",
      },
      {
        type: "p",
        text: "Les études matérielles sur les manuscrits ne remplacent pas la promesse théologique de préservation formulée par ce verset ; elles en constituent un indice convergent et vérifiable sur le plan historique. Les deux registres, révélation et histoire, ne s'opposent pas : le second illustre concrètement ce que le premier annonce comme une garantie divine.",
      },
      { type: "h2", text: "Les limites méthodologiques à connaître" },
      {
        type: "objection",
        objection: "Certains chercheurs occidentaux ne concluent-ils pas au contraire à une histoire textuelle complexe et incertaine ?",
        reponse:
          "Une minorité de chercheurs, notamment dans le sillage de l'école dite « révisionniste », a proposé des scénarios de composition tardive du Coran. Ces thèses, cependant, peinent à expliquer la convergence remarquable entre les manuscrits les plus anciens datés matériellement et le texte canonique ultérieur, ainsi que l'absence de variantes doctrinalement significatives dans l'ensemble du corpus manuscrit connu. La majorité des islamologues contemporains, y compris non-musulmans, considère aujourd'hui ces scénarios comme largement infirmés par les découvertes archéologiques et paléographiques des dernières décennies.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'examen matériel des manuscrits, loin d'être une menace pour la confiance dans le texte coranique, en constitue au contraire un appui indépendant et vérifiable. Entre la mémorisation vivante transmise de génération en génération et le témoignage silencieux du parchemin, deux voies distinctes convergent vers la même conclusion : celle d'un texte remarquablement stable depuis les premières décennies de l'islam.",
      },
    ],
  },
  {
    slug: slugifySujet("La collecte sous Abū Bakr et les exemplaires de ʿUthmān"),
    title: "La collecte sous Abū Bakr et les exemplaires de ʿUthmān",
    arabic: "جمع القرآن",
    intro:
      "L'histoire de la mise par écrit définitive du Coran est souvent résumée d'une phrase, alors qu'elle s'est déroulée en plusieurs étapes distinctes, chacune répondant à un besoin précis et documentée par des chaînes de transmission solides. Reconstituer cette chronologie permet de dissiper bien des malentendus sur ce que signifie réellement « la collecte du Coran ».",
    body: [
      { type: "h2", text: "Une première collecte, née d'une urgence militaire" },
      {
        type: "p",
        text: "Après la bataille de Yamāma, où périrent de nombreux récitateurs du Coran, ʿUmar ibn al-Khaṭṭāb, encore simple Compagnon à cette date, prit conscience du danger que représentait la disparition progressive des porteurs de la mémorisation. Il proposa au calife Abū Bakr de rassembler le texte en un seul volume, projet auquel ce dernier hésita d'abord à se livrer, faute de précédent prophétique explicite en ce sens.",
      },
      {
        type: "quote",
        text: "قال أبو بكر رضي الله عنه لعمر: **«كَيْفَ أَفْعَلُ شَيْئًا لَمْ يَفْعَلْهُ رَسُولُ اللَّهِ ﷺ؟»** فقال عمر: **«هُوَ وَاللَّهِ خَيْرٌ»**\n\nAbū Bakr, qu'Allāh l'agrée, dit à ʿUmar : **« Comment ferais-je une chose que le Messager d'Allāh ﷺ n'a pas faite ? »** Ce à quoi ʿUmar répondit : **« Par Allāh, c'est un bien. »**",
        source: "Rapporté par al-Bukhārī, dans le récit de Zayd ibn Thābit",
      },
      {
        type: "p",
        text: "Ce dialogue, rapporté par al-Bukhārī lui-même, montre la prudence méthodologique des premiers califes : ils ne s'autorisaient aucune initiative religieuse sans en avoir pesé la légitimité. La tâche fut finalement confiée à Zayd ibn Thābit, l'un des scribes attitrés de la révélation, choisi précisément pour sa rigueur reconnue de tous.",
      },
      { type: "h2", text: "La méthode de Zayd ibn Thābit" },
      {
        type: "p",
        text: "Zayd ne s'est pas contenté de sa propre mémoire, pourtant excellente. Il a exigé, pour chaque passage, deux types de témoignage concordants : un support écrit provenant de l'époque prophétique, et une attestation orale d'au moins deux témoins fiables confirmant l'avoir entendu réciter directement par le Prophète ﷺ. Cette double exigence, rapportée dans les sources classiques, révèle un souci de vérification qui dépasse largement les standards habituels de compilation d'un texte ancien.",
      },
      { type: "h2", text: "La seconde étape : l'unification sous ʿUthmān" },
      {
        type: "p",
        text: "Quelques années plus tard, l'expansion rapide de l'empire islamique posa un nouveau problème : dans des régions éloignées, des divergences de prononciation, liées à la légitime diversité des aḥruf, commençaient à être perçues à tort comme des désaccords sur le texte lui-même. Ḥudhayfa ibn al-Yamān, témoin de ces tensions naissantes lors de campagnes en Arménie et en Azerbaïdjan, alerta directement le calife ʿUthmān.",
      },
      {
        type: "chronologie",
        title: "De la collecte d'Abū Bakr à la diffusion des exemplaires ʿuthmāniens",
        events: [
          { date: "~12 H. (633)", label: "Bataille de Yamāma", note: "Mort de nombreux récitateurs, déclencheur de la première collecte." },
          { date: "~12-13 H.", label: "Collecte par Zayd ibn Thābit", note: "Sous l'autorité d'Abū Bakr, avec double vérification écrite et orale." },
          { date: "Fin du califat d'Abū Bakr", label: "Le muṣḥaf conservé chez ʿUmar", note: "Puis transmis à sa fille Ḥafṣa." },
          { date: "~25 H. (646)", label: "Alerte de Ḥudhayfa à ʿUthmān", note: "Divergences de lecture perçues dans les provinces éloignées." },
          { date: "~25-30 H.", label: "Commission dirigée par Zayd ibn Thābit", note: "Copie unifiée à partir du muṣḥaf de Ḥafṣa, fixant le rasm définitif." },
          { date: "Après ~30 H.", label: "Diffusion de cinq à sept exemplaires officiels", note: "Envoyés vers les grandes métropoles de l'empire naissant." },
        ],
        caption: "Deux collectes distinctes, séparées d'une quinzaine d'années, répondant à deux besoins différents.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Ce que ʿUthmān n'a pas fait",
        text: "ʿUthmān n'a inventé aucun contenu ni ajouté aucun verset : la commission qu'il a réunie a copié le muṣḥaf déjà rassemblé sous Abū Bakr, en se limitant à fixer un rasm consonantique unique et à ordonner la destruction des copies personnelles divergentes, précisément pour éviter toute dispersion future du texte.",
      },
      { type: "h2", text: "Le consentement des Compagnons" },
      {
        type: "p",
        text: "Point capital souvent négligé : cette unification n'a suscité aucune opposition doctrinale de fond parmi les Compagnons survivants, malgré l'existence de désaccords personnels sur d'autres sujets politiques de l'époque. ʿAlī ibn Abī Ṭālib lui-même, qui deviendra calife peu après, a défendu publiquement la légitimité de cette initiative, déclarant que si lui-même avait eu l'autorité en premier, il aurait agi de la même manière.",
      },
      {
        type: "verse",
        arabic: "**وَٱعْتَصِمُوا۟ بِحَبْلِ ٱللَّهِ جَمِيعًۭا وَلَا تَفَرَّقُوا۟**",
        translation: "**Et cramponnez-vous tous ensemble au câble d'Allāh, et ne vous divisez pas.**",
        reference: "Coran, Āl ʿImrān, 3:103",
      },
      {
        type: "p",
        text: "Ce principe coranique d'unité, cité par plusieurs historiens comme arrière-plan de la décision de ʿUthmān, éclaire la logique de la démarche : préserver l'unité de la communauté autour d'un texte commun était perçu comme un devoir religieux à part entière, non comme une simple commodité administrative.",
      },
      {
        type: "objection",
        objection: "La destruction des copies divergentes n'est-elle pas la preuve d'une manipulation du texte originel ?",
        reponse:
          "C'est l'inverse qui ressort des sources : les copies détruites n'étaient pas des versions doctrinalement différentes du Coran, mais des exemplaires personnels de Compagnons contenant des annotations, des lectures selon différents aḥruf, ou un ordre de sourates propre à leur usage privé. Le contenu révélé lui-même n'a subi aucune suppression ni ajout ; seule la forme de diffusion a été resserrée autour d'un rasm unique, précisément pour éviter les malentendus que commençaient à provoquer, sur le terrain, des lectures légitimes mais mal comprises par des populations éloignées de l'Arabie.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La collecte du Coran fut donc un processus en deux temps, mené avec une rigueur méthodologique exceptionnelle et un large consensus des Compagnons, dont aucune source fiable ne rapporte de contestation de fond. Loin d'être un événement obscur, cette histoire est parmi les mieux documentées de toute l'Antiquité tardive, ce qui constitue un argument matériel de poids en faveur de la fiabilité du texte parvenu jusqu'à nous.",
      },
    ],
  },
  {
    slug: slugifySujet("Une lecture variante modifie-t-elle une règle ?"),
    title: "Une lecture variante modifie-t-elle une règle ?",
    intro:
      "La question revient souvent, notamment face aux non-spécialistes déconcertés par l'existence de plusieurs lectures authentiques du Coran : ces variantes changent-elles le sens des versets au point d'altérer les règles qui en découlent ? La réponse exige de distinguer plusieurs cas de figure, que les uṣūlistes ont soigneusement classés.",
    body: [
      { type: "h2", text: "Rappel du cadre : des lectures toutes authentiques" },
      {
        type: "p",
        text: "Il faut d'abord rappeler que les qirāʾāt mutawātir ne sont pas des variantes douteuses concurrentes du « vrai » texte : chacune constitue une révélation à part entière, transmise avec la même rigueur que l'autre. La question n'est donc jamais « laquelle est correcte », mais « comment ces lectures s'articulent-elles entre elles lorsqu'elles diffèrent sur un point juridique ».",
      },
      { type: "h2", text: "Premier cas : des lectures qui ne changent rien au fond" },
      {
        type: "p",
        text: "La majorité des variantes concerne la prononciation, l'intonation ou des différences purement grammaticales sans effet sur le sens légal. Ainsi, la variation entre mālik et malik dans la Fātiḥa, déjà évoquée ailleurs, enrichit la compréhension théologique sans toucher à aucune règle pratique. Ce premier cas représente l'écrasante majorité des différences entre les dix lectures.",
      },
      { type: "h2", text: "Second cas : des lectures qui se complètent" },
      {
        type: "verse",
        arabic:
          "فَٱغْسِلُوا۟ وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى ٱلْمَرَافِقِ وَٱمْسَحُوا۟ بِرُءُوسِكُمْ **وَأَرْجُلَكُمْ / وَأَرْجُلِكُمْ** إِلَى ٱلْكَعْبَيْنِ",
        translation:
          "Lavez vos visages et vos mains jusqu'aux coudes, et essuyez vos têtes, et vos pieds — lu **wa arjulakum** (à l'accusatif, « lavez ») ou **wa arjulikum** (au génitif, « essuyez ») — jusqu'aux chevilles.",
        reference: "Coran, al-Māʾida, 5:6",
      },
      {
        type: "p",
        text: "Ce cas est le plus souvent cité en exemple, car il illustre parfaitement comment deux lectures authentiques peuvent, loin de se contredire, apporter chacune une précision complémentaire sur le même geste rituel. La lecture à l'accusatif indique de laver les pieds ; la lecture au génitif indique d'y passer la main mouillée, ce qui a nourri la discussion fiqhique sur l'essuyage des chaussettes ou du khuff.",
      },
      {
        type: "balance",
        title: "Comment les juristes ont traité cette double lecture",
        affirmLabel: "Ce que la majorité en conclut",
        denyLabel: "Ce qui reste discuté",
        affirm: [
          "Le lavage complet des pieds est l'acte de référence, confirmé par la pratique constante du Prophète ﷺ.",
          "L'essuyage n'est une alternative licite que sur un support couvrant (khuff, chaussette), non sur le pied nu.",
          "Les deux lectures collaborent pour préciser la nature exacte du geste requis.",
        ],
        deny: [
          "Le détail des conditions de validité de l'essuyage sur chaussette selon les écoles.",
          "La durée et les circonstances autorisées pour cette dispense.",
        ],
        caption: "Un désaccord de détail parmi les juristes, mais jamais sur la légitimité des deux lectures elles-mêmes.",
      },
      { type: "h2", text: "Troisième cas : une lecture qui ajoute une précision juridique" },
      {
        type: "verse",
        arabic: "وَإِن كَانَ رَجُلٌۭ يُورَثُ كَلَٰلَةً أَوِ ٱمْرَأَةٌۭ وَلَهُۥٓ أَخٌ أَوْ أُخْتٌۭ **وَلَهُۥٓ إِخْوَةٌ لِأُمٍّ**",
        translation:
          "Selon une lecture, la précision **« ... et il a des frères de mère »** est explicite dans le texte, levant toute ambiguïté sur l'identité des héritiers visés par ce partage successoral particulier.",
        reference: "Coran, al-Nisāʾ, 4:12 (lecture rapportée de Saʿd ibn Abī Waqqāṣ et d'Ubayy)",
      },
      {
        type: "p",
        text: "Dans ce type de cas, une lecture non retenue parmi les dix canoniques, dite « shādhdha » (isolée), peut néanmoins servir de témoignage exégétique précieux pour clarifier une ambiguïté du texte principal, sans pour autant être récitée dans la prière ni fonder seule une obligation légale, faute de statut de mutawātir.",
      },
      {
        type: "degres",
        title: "Le statut des lectures selon leur force de transmission",
        arabic: "مراتب القراءات",
        degres: [
          { label: "Mutawātir", note: "Transmission massive, base de la récitation rituelle et de la législation." },
          { label: "Mashhūr", note: "Chaîne fiable mais non massive ; utilisée avec prudence en exégèse." },
          { label: "Āḥād", note: "Chaîne unique ; sert d'éclairage exégétique, non de fondement rituel." },
          { label: "Shādhdha", note: "Isolée ; utile comme témoignage de sens, jamais comme base normative autonome." },
        ],
        direction: "desc",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le principe retenu par les uṣūlistes",
        text: "Une lecture mutawātir, même minoritaire parmi les dix, a rang de preuve législative à part entière. Une lecture non mutawātir peut éclairer le sens et orienter la compréhension, mais ne peut, seule, instaurer une obligation religieuse contraignante.",
      },
      {
        type: "objection",
        objection: "Si deux lectures produisent deux règles différentes, l'une des deux n'est-elle pas simplement fausse ?",
        reponse:
          "Cette objection suppose que le Coran ne pourrait porter qu'un seul niveau de sens légal par verset, ce qu'aucun principe scripturaire n'impose. Les savants comparent plutôt ce phénomène à deux versets distincts qui traiteraient chacun d'un aspect complémentaire d'une même question — ce qui est banal dans tout texte législatif complexe. La différence, ici, est que les deux « versets » sont en réalité deux lectures d'une seule et même formule consonantique, ce qui concentre en un minimum d'espace une richesse normative que le Coran aurait pu, sinon, exprimer en deux passages séparés.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Une lecture variante peut donc, selon les cas, ne rien changer au sens, l'enrichir de façon complémentaire, ou apporter une précision juridique supplémentaire — mais jamais contredire une autre lecture mutawātir de façon irréconciliable. Cette architecture, patiemment élaborée par les uṣūlistes, transforme ce qui pourrait sembler une source de confusion en un instrument d'une remarquable densité normative et exégétique.",
      },
    ],
  },
  {
    slug: slugifySujet("Points diacritiques, vocalisation et découpage en versets"),
    title: "Points diacritiques, vocalisation et découpage en versets",
    intro:
      "Le muṣḥaf que l'on feuillette aujourd'hui, avec ses points bien distincts, ses voyelles colorées et ses versets numérotés, est le fruit d'un long travail d'appareillage technique postérieur à la révélation elle-même. Comprendre à quel moment et pourquoi ces outils ont été introduits permet de dissiper toute confusion entre le texte révélé et les instruments graphiques destinés à en faciliter la lecture.",
    body: [
      { type: "h2", text: "Un rasm dépouillé à l'origine" },
      {
        type: "p",
        text: "L'écriture arabe ancienne, avant même l'islam, ne comportait ni points diacritiques distinguant les lettres de même forme, ni signes de voyelles brèves. Un lecteur devait s'appuyer sur sa connaissance orale préalable du texte pour lever les ambiguïtés graphiques. Ce système, courant dans les écritures sémitiques anciennes, n'a rien d'une négligence : il correspond simplement à l'état technique de l'écriture de l'époque.",
      },
      {
        type: "p",
        text: "C'est précisément pour cette raison que la transmission orale, mémorisée et vérifiée collectivement, a toujours occupé une place centrale et prioritaire par rapport au support écrit dans la culture islamique classique : l'écrit servait d'aide-mémoire à une communauté qui savait déjà réciter, non de source première et autosuffisante pour qui n'aurait jamais entendu le texte.",
      },
      { type: "h2", text: "L'introduction des points diacritiques" },
      {
        type: "chronologie",
        title: "L'appareillage progressif du muṣḥaf",
        events: [
          { date: "Époque de ʿUthmān (~30 H.)", label: "Fixation du rasm consonantique", note: "Sans points ni voyelles, conforme à l'usage de l'époque." },
          { date: "~65-70 H.", label: "Premiers points diacritiques", note: "Introduits sous l'impulsion d'al-Ḥajjāj, pour prévenir les erreurs de lecture dans les provinces éloignées." },
          { date: "Fin du Ier siècle H.", label: "Généralisation progressive des points", note: "Attribuée traditionnellement à Abū al-Aswad al-Duʾalī et ses élèves." },
          { date: "IIe siècle H.", label: "Système de vocalisation par points colorés", note: "Rouge pour les voyelles, à l'initiative d'al-Khalīl ibn Aḥmad notamment." },
          { date: "Xe siècle et après", label: "Adoption des signes actuels (ḥarakāt)", note: "Fatḥa, ḍamma, kasra, sukūn, sous la forme encore utilisée aujourd'hui." },
        ],
        caption: "Un processus étalé sur plusieurs générations, jamais présenté par la tradition comme touchant au texte révélé lui-même.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un ajout accepté sans controverse doctrinale",
        text: "Contrairement à ce qu'on pourrait croire, l'introduction de ces signes graphiques n'a suscité aucun débat théologique majeur dans les sources classiques : elle a été perçue d'emblée comme un outil pédagogique nécessaire à mesure que l'islam s'étendait à des populations non arabophones, non comme une modification du texte lui-même.",
      },
      { type: "h2", text: "Le découpage en versets : un cas particulier" },
      {
        type: "p",
        text: "Le découpage en versets (āyāt) est, lui, d'origine prophétique et non postérieure : contrairement aux points diacritiques, la fin de chaque verset était connue et enseignée du vivant même du Prophète ﷺ, qui marquait une pause récitative reconnaissable par les Compagnons. Ce qui a évolué ultérieurement, en revanche, c'est la **numérotation** continue des versets, pratique commode introduite pour faciliter les références et les citations, sans incidence sur le texte lui-même.",
      },
      {
        type: "comparaison",
        title: "Ce qui relève du texte révélé et ce qui relève de l'appareillage",
        columns: ["Élément", "Statut"],
        rows: [
          { criterion: "Le rasm consonantique", cells: ["Fixé à l'époque prophétique et sous ʿUthmān ; transmis tel quel"] },
          { criterion: "La fin des versets", cells: ["Connue et enseignée par le Prophète ﷺ lui-même"] },
          { criterion: "Les points diacritiques", cells: ["Appareillage postérieur, facilitant la lecture sans en changer le sens établi"] },
          { criterion: "La vocalisation", cells: ["Appareillage postérieur, transcrivant une prononciation déjà connue oralement"] },
          { criterion: "La numérotation continue", cells: ["Convention de commodité, purement pratique"] },
          { criterion: "Le découpage en juzʾ et ḥizb", cells: ["Convention pédagogique pour la récitation répartie, sans valeur normative"] },
        ],
      },
      {
        type: "verse",
        arabic: "**لَا تُحَرِّكْ بِهِۦ لِسَانَكَ لِتَعْجَلَ بِهِۦ إِنَّ عَلَيْنَا جَمْعَهُۥ وَقُرْءَانَهُۥ**",
        translation:
          "**Ne remue pas ta langue pour hâter cette révélation. C'est à Nous de la rassembler et de la faire réciter.**",
        reference: "Coran, al-Qiyāma, 75:16-17",
      },
      {
        type: "p",
        text: "Ce passage rappelle que la fixation orale précise du texte, y compris sa segmentation en unités récitées, relevait déjà d'un ordre divin transmis directement au Prophète ﷺ. Cette antériorité de la structure orale sur tout appareillage graphique explique pourquoi les savants classiques n'ont jamais considéré points et voyelles comme constitutifs du texte lui-même, mais comme des béquilles techniques pour une lecture correcte par ceux qui n'ont pas hérité de la chaîne orale complète.",
      },
      {
        type: "experiment",
        title: "Ce que révèle un rasm sans point",
        steps: [
          "Prenons trois lettres consonantiques sans point : ب - ت - ث ont exactement la même forme de base.",
          "Sans contexte oral, un lecteur isolé ne peut deviner s'il doit lire bāʾ, tāʾ ou thāʾ.",
          "Un lecteur formé par la chaîne orale sait immédiatement de quelle lettre il s'agit, car il connaît déjà le mot par cœur.",
          "Le point diacritique vient seulement confirmer par écrit ce que la mémoire orale transmettait déjà avec certitude.",
        ],
        conclusion:
          "Le point diacritique n'ajoute aucune information nouvelle au texte : il rend visible, pour qui n'a pas la chaîne orale, une information que la tradition transmettait déjà de manière fiable et indépendante.",
      },
      {
        type: "objection",
        objection: "L'ajout de points et de voyelles n'ouvre-t-il pas la porte à des altérations discrètes du texte ?",
        reponse:
          "Cette crainte serait fondée si l'écrit avait constitué la seule source de fixation du texte. Mais la priorité accordée à la transmission orale ininterrompue, vérifiée par une chaîne de maîtres à élèves jusqu'à aujourd'hui, a fonctionné comme un garde-fou permanent : aucun point ni aucune voyelle n'a jamais pu être ajouté en contradiction avec ce que des générations de récitateurs, indépendants des scribes, continuaient de transmettre oralement de mémoire. C'est cette convergence entre deux canaux indépendants qui exclut toute possibilité d'altération silencieuse par le simple ajout de signes graphiques.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Points diacritiques, voyelles et numérotation des versets sont des instruments graphiques postérieurs, développés par nécessité pédagogique à mesure que l'islam se répandait au-delà du monde arabophone. Aucun d'entre eux ne touche au texte révélé lui-même, dont la fixation orale précède et contrôle en permanence tout appareillage écrit ultérieur. Cette distinction, essentielle et pourtant souvent ignorée, permet de comprendre pourquoi la tradition islamique n'a jamais traité ces évolutions techniques comme une remise en cause de l'intégrité du Coran.",
      },
    ],
  },
];
