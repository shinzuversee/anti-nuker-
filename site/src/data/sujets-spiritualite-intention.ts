import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre II — La vie intérieure du croyant.
 * Groupe c — L'intention, la sincérité, l'ostentation.
 */
export const sujetsSpiritualiteIntention: Sujet[] = [
  {
    slug: slugifySujet("L'intention, et la part qui doit en être consciente"),
    title: "L'intention, et la part qui doit en être consciente",
    arabic: "النية",
    intro:
      "Un homme prie, un autre homme prie : les gestes sont identiques, les mots récités les mêmes, la durée comparable au dixième de seconde près. Et pourtant, aux yeux de la Loi, ces deux prières n'ont rien de commun, car ce qui les distingue ne se voit pas. **L'acte extérieur n'est qu'une enveloppe ; ce qui lui donne son poids réel se joue avant lui, dans le cœur.**\n\nOn répète volontiers le hadith fondateur — « les actes ne valent que par les intentions » — sans toujours mesurer ce qu'il exige concrètement : combien faut-il se représenter, au juste, pour qu'une action soit dite « intentionnée » devant Dieu ? Une pleine clarté mentale, comparable à celle d'un discours qu'on se tiendrait à soi-même ? Ou bien un mouvement plus discret, plus proche du réflexe que de la délibération ?\n\nCe sujet reprend la question à sa racine lexicale, distingue les degrés de conscience que les juristes ont su nommer, et montre en quoi la miséricorde de la Loi consiste précisément à ne pas exiger de l'homme ce qu'aucun homme ne pourrait fournir : une transparence totale à lui-même.",
    body: [
      { type: "h2", text: "Le hadith qui gouverne tout le fiqh" },
      {
        type: "quote",
        text:
          "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى\n\n« **Les actes ne valent que par les intentions**, et à chacun ne revient que ce qu'il a eu l'intention de faire. »",
        source: "Hadith rapporté par al-Bukhārī et Muslim, d'après ʿUmar ibn al-Khaṭṭāb",
      },
      {
        type: "p",
        text: "Les commentateurs ont noté que ce hadith figure en tête de la plupart des grands recueils : non par hasard de compilation, mais parce que **tout le reste du droit religieux en dépend**. La prière, l'aumône, le jeûne, le pèlerinage : chacun de ces piliers requiert, pour être validé, qu'un acte de cœur l'ait précédé ou accompagné. Sans lui, le geste demeure un mouvement du corps, rien de plus.",
      },
      {
        type: "lexique",
        root: "ن و ي",
        transliteration: "n-w-y",
        sense:
          "Viser, se diriger vers, se proposer. Le mot **niyya** (intention) partage sa racine avec **nawan** (le noyau du fruit) — image suggestive : l'intention est ce point dur et caché autour duquel tout le reste se forme, invisible sous la chair du fruit.",
        derives: [
          { word: "niyya", arabic: "نِيَّة", gloss: "L'intention : le fait de se diriger vers un objet précis par le cœur." },
          { word: "nawā", arabic: "نَوَى", gloss: "Il eut l'intention de, il se proposa de." },
          { word: "muntawan", arabic: "مُنْتَوًى", gloss: "Ce vers quoi l'on se dirige intérieurement ; le dessein." },
          { word: "tanawwin", arabic: "تَنَوٍّ", gloss: "Fait de former une intention — terme technique tardif des usūlistes." },
        ],
        note:
          "Les juristes ont retenu cette étymologie du noyau pour insister sur ceci : **on ne voit jamais le noyau de dehors ; on ne connaît son existence que par le fruit qu'il a formé**.",
      },
      { type: "h2", text: "Faut-il se parler l'intention, ou suffit-il de la vivre ?" },
      {
        type: "p",
        text: "C'est ici que le débat juridique devient fin. Une opinion répandue chez certains dévots tardifs a consisté à réciter verbalement l'intention avant chaque acte de culte — dire, par exemple, avant la prière : « j'ai l'intention d'accomplir telle prière obligatoire, de telle heure, tournée vers la Qibla ». **Cette pratique, si elle n'est en elle-même condamnable, n'est fondée sur aucune obligation textuelle** : ni le Prophète ﷺ ni ses Compagnons ne l'ont pratiquée de cette façon systématique.",
      },
      {
        type: "objection",
        objection:
          "Si l'intention n'a pas besoin d'être verbalisée, comment savoir qu'elle existe réellement ? Ne risque-t-on pas d'agir « à vide », sans intention aucune, en croyant qu'elle est là par défaut ?",
        reponse:
          "La réponse mālikite classique distingue le **fait** de l'intention de sa **formulation**. Se lever pour la prière au moment de son heure, se diriger vers la Qibla, accomplir les gestes propres à cette prière précise — tout cela **constitue déjà, en soi, la manifestation suffisante d'une intention**, sans qu'un discours intérieur explicite soit requis. Un homme qui se met à table n'a pas besoin de se dire « j'ai l'intention de manger » pour que son geste soit véritablement volontaire.",
        suite:
          "Ce qui est requis, en revanche, c'est que l'acte ne soit pas un pur automatisme mental, un geste de somnambule : il doit demeurer **rattachable, si on l'interrogeait, à un but conscient**, même informulé.",
      },
      { type: "h3", text: "Les degrés de présence du cœur" },
      {
        type: "degres",
        title: "De l'intention pleine à l'absence totale de dessein",
        arabic: "مراتب حضور القلب",
        direction: "desc",
        degres: [
          { label: "Intention pleinement présente et énoncée", arabic: "النية الحاضرة الصريحة", note: "Le cœur se représente clairement l'acte, son but, son destinataire. Degré le plus sûr, non le seul valable." },
          { label: "Intention implicite portée par le contexte", arabic: "النية الضمنية", note: "Se lever à l'heure de la prière, se tourner vers la Qibla : la situation entière porte l'intention sans qu'un mot intérieur soit requis." },
          { label: "Intention initiale, puis pensée distraite en cours d'acte", arabic: "النية الابتدائية مع سهو عارض", note: "Cas le plus fréquent : l'acte a été commencé avec un but réel, l'esprit vagabonde ensuite. La validité initiale n'est pas annulée par la distraction ultérieure." },
          { label: "Absence de tout dessein, geste automatique et vide", arabic: "الفعل الآلي بلا قصد", note: "Cas de l'acte purement réflexe, sans aucun rattachement possible à un but — ce degré seul invalide l'acte de culte." },
        ],
        caption:
          "La Loi n'exige pas le premier degré à chaque instant : elle exclut seulement le dernier.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le distrait n'est pas l'inintentionnel",
        text: "Un esprit qui vagabonde en pleine prière — pensant soudain à une facture à payer — **n'a pas pour autant perdu son intention**. Celle-ci demeure comme un socle sous la distraction, de la même manière qu'un homme parti en voyage ne cesse pas de voyager parce que son esprit, en chemin, songe à autre chose que sa destination.",
      },
      {
        type: "verse",
        arabic: "**وَمَا أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ**",
        translation:
          "**Il ne leur a été commandé, pourtant, que d'adorer Allāh, Lui vouant un culte exclusif**",
        reference: "Coran, al-Bayyina, 98:5",
      },
      {
        type: "p",
        text: "Ce verset associe le culte (**ʿibāda**) à l'exclusivité d'orientation (**ikhlāṣ al-dīn**) : ce n'est pas la multiplication des paroles pieuses qui est requise, c'est **la rectitude d'une seule direction du cœur**. On retrouve ici la thèse centrale : l'intention n'est pas un supplément verbal à l'acte, elle est son orientation même.",
      },
      { type: "h2", text: "Comment l'intention se distingue du but visé" },
      {
        type: "comparaison",
        title: "Trois notions souvent confondues",
        columns: ["Niyya (intention)", "Qaṣd (dessein, visée précise)", "Gharaḍ (motif, mobile secondaire)"],
        rows: [
          { criterion: "Objet", cells: ["Se diriger vers Dieu par l'acte de culte", "Préciser lequel des cultes est accompli", "Ce qui pousse par ailleurs à l'accomplir"] },
          { criterion: "Exigence juridique", cells: ["Obligatoire pour la validité", "Obligatoire quand plusieurs actes sont possibles", "Toléré s'il ne supplante pas la niyya"] },
          { criterion: "Exemple", cells: ["Vouloir adorer Allāh en jeûnant", "Préciser : jeûne de ramadan, non un jeûne surérogatoire", "Vouloir aussi préserver sa santé en jeûnant"] },
          { criterion: "Ce qui l'invalide", cells: ["Absence totale de but conscient", "Confusion entre deux cultes distincts", "Mobile qui devient l'unique but réel (voir riyāʾ)"] },
        ],
        caption:
          "Le motif secondaire (gharaḍ) ne détruit pas l'acte tant qu'il reste second ; c'est son inversion de rang qui pose problème.",
      },
      { type: "h2", text: "Le cycle de la formation d'un acte religieux" },
      {
        type: "cycle",
        title: "Du cœur au geste, et retour",
        arabic: "من القلب إلى الجارحة",
        center: "النية",
        steps: [
          { label: "Perception de l'obligation", arabic: "إدراك التكليف", note: "Le croyant sait qu'une prière, un jeûne, une aumône lui incombent." },
          { label: "Orientation du cœur", arabic: "توجّه القلب", note: "Un mouvement intérieur se porte vers l'accomplissement, pour Dieu." },
          { label: "Passage au geste", arabic: "انتقال إلى الفعل", note: "Le corps exécute ce que le cœur a déjà orienté." },
          { label: "Retour d'évaluation", arabic: "المحاسبة", note: "Après l'acte, le croyant s'interroge sur ce qui l'a réellement mû." },
        ],
        caption:
          "Ce cycle se referme et recommence à chaque acte de culte, formant peu à peu une habitude du cœur.",
      },
      { type: "h2", text: "L'avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال الإمام النووي رحمه الله: **محلّ النية القلب**، ولا يُشترط التلفظ بها باتِّفاق العلماء؛ ولو تلفَّظ بلسانه بخلاف ما نواه بقلبه، فالمعتبر ما في قلبه.\n\nL'imām al-Nawawī, qu'Allāh lui fasse miséricorde, a dit : **le lieu de l'intention est le cœur**, et sa formulation verbale n'est requise selon aucun accord des savants ; si quelqu'un prononçait de sa langue autre chose que ce qu'il a eu l'intention de faire dans son cœur, c'est ce qui est dans son cœur qui compte.",
        source: "al-Nawawī, Al-Majmūʿ",
      },
      {
        type: "experiment",
        title: "Le voyageur endormi",
        steps: [
          "Un homme monte dans un train pour se rendre chez son frère, avec une intention claire au départ.",
          "En chemin, il s'endort profondément et ne pense plus du tout à sa destination.",
          "À son réveil, le train arrive précisément où il voulait aller.",
          "Personne ne dira qu'il n'a pas voyagé vers son frère sous prétexte qu'il dormait en chemin.",
        ],
        conclusion:
          "**L'intention initiale porte l'acte tout du long, même quand la conscience explicite s'endort en route.** C'est ainsi que la prière du distrait demeure valide si le socle d'intention a été posé.",
      },
      {
        type: "spectre",
        title: "De l'automatisme pur à la présence de cœur parfaite",
        left: "Geste vide, sans aucun rattachement à un but",
        right: "Conscience pleine et continue de l'acte et de son sens",
        markers: [
          { label: "Acte réflexe invalidant", position: 5, note: "Aucun but n'était présent, même implicitement." },
          { label: "Prière valide du distrait ordinaire", position: 45, note: "Cas le plus fréquent, socle d'intention conservé." },
          { label: "Prière du dévot appliqué", position: 75, note: "Attention soutenue, retours fréquents à la conscience de l'acte." },
          { label: "Idéal du iḥsān", position: 98, note: "« Adorer Allāh comme si tu Le voyais » — degré rarement tenu longtemps." },
        ],
        caption:
          "La validité juridique se situe déjà loin à gauche du spectre ; la perfection spirituelle, elle, se cherche à droite, sans jamais s'y installer durablement.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Exiger de l'homme une conscience permanente et sans faille de chacun de ses actes reviendrait à lui imposer une charge qu'aucune créature ne porte. **La Loi demande un socle, non une transparence totale** : que l'acte soit rattaché, fût-ce implicitement, à un but reconnu par Dieu. Le reste — la vigilance accrue, le retour fréquent de l'attention, la lutte contre la distraction — relève non plus de la validité, mais de l'excellence, et c'est un chemin qui ne connaît pas de terme fixé.",
      },
    ],
  },

  {
    slug: slugifySujet("Divergences d'intention pour un même acte"),
    title: "Divergences d'intention pour un même acte",
    intro:
      "Deux frères font l'aumône du même montant, au même mendiant, le même jour. L'un espère la miséricorde de Dieu ; l'autre espère être vu par les passants et gagner une réputation de générosité. Le geste, décrit de l'extérieur, est un et identique ; **ce que Dieu en retient est aussi éloigné que le sont leurs deux cœurs**.\n\nLes juristes n'ont pas seulement enseigné que l'intention est requise : ils ont aussi cartographié la manière dont un même acte extérieur peut recevoir des intentions radicalement différentes, parfois contraires, parfois superposées, parfois en conflit ouvert au sein d'un même cœur. C'est là un chapitre discret mais décisif de la science du fiqh, trop souvent réduit à sa formule d'ouverture.\n\nOn examinera ici les cas typiques où l'acte demeure identique tandis que l'intention varie, les conséquences juridiques de cette variation, et la question plus délicate encore des intentions mêlées, ni pures ni ouvertement corrompues.",
    body: [
      { type: "h2", text: "Le même acte, deux mondes" },
      {
        type: "p",
        text: "Prenons l'exemple le plus cité par les traités : le jeûne. Un homme s'abstient de nourriture du lever au coucher du soleil. Cette abstention peut recevoir, à elle seule, plusieurs statuts selon l'intention qui l'anime : **jeûne obligatoire de ramadan, jeûne de rattrapage, jeûne surérogatoire, ou simple régime alimentaire sans dimension cultuelle aucune**. Le corps ne fait pourtant qu'une seule chose : s'abstenir.",
      },
      {
        type: "verse",
        arabic: "**قُلْ كُلٌّ يَعْمَلُ عَلَىٰ شَاكِلَتِهِۦ**",
        translation: "**Dis : « Chacun agit selon sa disposition propre »**",
        reference: "Coran, al-Isrāʾ, 17:84",
      },
      {
        type: "quote",
        text:
          "قال المفسرون: **الشاكلة هي النية والطريقة والوجهة**، فالفعل الواحد يصدر عن أناس شتّى، وكلٌّ يحمل فيه ما في قلبه، لا ما تراه العين فحسب.\n\nLes commentateurs ont dit : **la « disposition » (shākila) désigne l'intention, la manière et l'orientation** ; un acte unique peut être accompli par des gens divers, et chacun y porte ce qui est dans son cœur, non seulement ce que voit l'œil.",
        source: "Synthèse des commentaires classiques sur 17:84",
      },
      { type: "h2", text: "Typologie des divergences possibles" },
      {
        type: "schema",
        title: "Comment un même geste se ramifie selon l'intention",
        variant: "branch",
        nodes: [
          { label: "Aumône", arabic: "الصدقة", note: "Peut être zakāt obligatoire, aumône surérogatoire, ou simple générosité sociale sans dimension religieuse." },
          { label: "Prosternation", arabic: "السجود", note: "Peut relever du rite de la prière, d'une prosternation de gratitude, ou n'être qu'un exercice physique." },
          { label: "Abstention alimentaire", arabic: "الإمساك", note: "Jeûne rituel obligatoire, jeûne surérogatoire, ou régime sans aucune visée cultuelle." },
          { label: "Don d'argent à une mosquée", arabic: "التبرع", note: "Construction d'une œuvre pieuse pour Dieu seul, ou recherche d'un nom gravé et d'une reconnaissance publique." },
        ],
        caption:
          "Dans chaque branche, l'observateur extérieur ne peut trancher ; seule l'intention, connue de Dieu et parfois du seul agent, distingue les cas.",
      },
      { type: "h3", text: "Le cas des intentions concurrentes au sein du même acte" },
      {
        type: "p",
        text: "Le cas le plus fin n'est pas celui de l'acte purement pieux opposé à l'acte purement intéressé : c'est celui où **les deux intentions coexistent, dans des proportions variables, au sein d'un seul mouvement du cœur**. Un homme fait le pèlerinage pour l'agrément de Dieu, mais aussi parce qu'un voyage lui permettra de conclure une affaire commerciale sur place. Le Coran a explicitement envisagé ce cas et ne l'a pas condamné en soi.",
      },
      {
        type: "verse",
        arabic: "لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَبْتَغُوا۟ فَضْلًا مِّن رَّبِّكُمْ",
        translation: "Nul grief à vous faire de rechercher une faveur de votre Seigneur",
        reference: "Coran, al-Baqara, 2:198",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un motif second ne détruit pas un motif premier",
        text: "Ce verset fut révélé, selon les commentateurs, au sujet de ceux qui hésitaient à commercer pendant le pèlerinage par scrupule excessif. **La présence d'un motif mondain, tant qu'il reste subordonné à l'intention cultuelle et ne la remplace pas, n'invalide rien.** C'est l'inversion de la hiérarchie, non la simple coexistence, qui pose problème.",
      },
      { type: "h2", text: "Une balance des cas selon leur validité" },
      {
        type: "balance",
        title: "Ce qui n'annule pas l'acte, ce qui l'annule",
        affirmLabel: "Coexistence tolérée",
        denyLabel: "Substitution qui invalide",
        affirm: [
          "Faire l'aumône pour Dieu, tout en étant heureux qu'on la voie sans l'avoir recherché.",
          "Jeûner pour Dieu, en sachant que cela apportera aussi un bienfait pour la santé.",
          "Étudier une science religieuse pour Dieu, en visant accessoirement une compétence utile à sa subsistance.",
          "Faire le pèlerinage pour Dieu, en profitant du voyage pour une affaire commerciale seconde.",
        ],
        deny: [
          "**Faire l'aumône dans le seul but d'être vu et loué** : l'acte perd sa valeur cultuelle propre.",
          "**Jeûner uniquement pour un régime**, sans aucune visée d'adoration : ce n'est plus un jeûne rituel.",
          "**Étudier uniquement pour dominer une joute verbale** : la science devient un instrument de vanité.",
          "**Faire le pèlerinage uniquement pour l'affaire commerciale**, le rite n'étant qu'un prétexte de circonstance.",
        ],
        caption:
          "Le critère n'est jamais la présence d'un second motif, mais la place qu'occupe, en dernier ressort, le motif religieux.",
      },
      { type: "h2", text: "L'échelle des degrés d'un même acte selon l'intention dominante" },
      {
        type: "degres",
        title: "L'aumône du même montant, selon ce qui la meut",
        direction: "desc",
        degres: [
          { label: "Aumône donnée en secret, sans que nul ne sache", arabic: "صدقة السر", note: "Degré le plus recommandé selon les textes prophétiques, exempt de toute recherche de regard." },
          { label: "Aumône donnée publiquement, mais pour Dieu et sans recherche de louange", arabic: "صدقة العلانية بإخلاص", note: "Toléré, notamment lorsque la visibilité vise à encourager d'autres donateurs." },
          { label: "Aumône donnée en cherchant sincèrement Dieu, avec plaisir secondaire d'être vu", arabic: "الرياء الطارئ", note: "Cas délicat traité séparément ; l'intention première demeure sauve si elle n'a pas été recherchée." },
          { label: "Aumône donnée d'abord et surtout pour être vu", arabic: "الرياء المقصود", note: "L'intention religieuse n'est qu'un vernis ; le motif réel est social." },
        ],
        caption:
          "Un même montant, donné au même bénéficiaire, occupe quatre places très différentes sur cette échelle.",
      },
      {
        type: "experiment",
        title: "Les deux constructeurs",
        steps: [
          "Deux hommes financent chacun la construction d'un puits dans un village sans eau.",
          "Le premier demande que son nom ne soit inscrit nulle part et s'en va sans se retourner.",
          "Le second exige une plaque gravée à son nom, visible de la route.",
          "Le puits, achevé, rend le même service aux villageois dans les deux cas.",
        ],
        conclusion:
          "**Le bienfait rendu aux hommes peut être identique alors que la rétribution attendue de Dieu diffère du tout au tout.** Le fiqh juge la validité de l'acte cultuel ; seul Dieu pèse le poids exact de chaque cœur.",
      },
      { type: "h2", text: "La chronologie d'un débat juridique classique" },
      {
        type: "chronologie",
        title: "Comment la question des intentions mêlées fut discutée",
        events: [
          { date: "Ier siècle H.", label: "Interrogations des premiers Compagnons sur les motifs mêlés au jihād", note: "Cas de l'homme combattant pour le butin autant que pour la foi." },
          { date: "IIe-IIIe siècle H.", label: "Formalisation par les premiers juristes des critères de validité des actes de culte", note: "Distinction naissante entre motif dominant et motif accessoire." },
          { date: "Ve-VIe siècle H.", label: "Approfondissement par les théologiens de la vie intérieure", note: "Notamment la distinction fine entre riyāʾ recherché et plaisir non recherché d'être vu." },
          { date: "Époque contemporaine", label: "Application aux formes nouvelles d'action publique et caritative", note: "La question se pose à neuf pour le don relayé sur les réseaux sociaux." },
        ],
        caption:
          "La question n'a jamais reçu de réponse mécanique valable pour tous les cas : elle requiert, à chaque fois, un examen du cas particulier.",
      },
      { type: "h2", text: "L'avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال ابن رجب الحنبلي رحمه الله: **من خالط عملَه الصالح غرضٌ دنيويٌّ من غير أن يقصده ابتداءً، فذلك لا يُبطل عمله**، وإنما يُبطله **أن يكون الدنيا هي الباعث الأول والدين تابعًا لها.**\n\nIbn Rajab al-Ḥanbalī, qu'Allāh lui fasse miséricorde, a dit : **celui dont l'œuvre pieuse se trouve mêlée d'un motif mondain, sans qu'il l'ait recherché dès le départ, cela n'annule pas son œuvre** ; ce qui l'annule, c'est **que le mondain soit le mobile premier et la religion, sa suivante.**",
        source: "Ibn Rajab, Jāmiʿ al-ʿUlūm wa-l-Ḥikam",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Se méfier du diagnostic trop rapide sur autrui",
        text: "Nul ne peut, en observant un acte de dehors, trancher avec certitude quelle intention l'a produit. **Le devoir de charité interprétative envers autrui reste entier**, alors même que chacun est appelé à un examen sévère de ses propres mobiles.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La divergence d'intention pour un même acte n'est pas une curiosité de spécialistes : c'est **le lieu même où se joue, dans le quotidien le plus ordinaire, la différence entre un culte et un simulacre**. La leçon pratique qui s'en dégage tient en une vigilance modeste : interroger, non pas ce que l'on fait, mais pourquoi on le fait, et accepter que cette question doive être reposée chaque jour, car les motifs des hommes ne se fixent jamais tout à fait.",
      },
    ],
  },

  {
    slug: slugifySujet("La sincérité, et le peu qu'on en peut vérifier du dehors"),
    title: "La sincérité, et le peu qu'on en peut vérifier du dehors",
    arabic: "الإخلاص",
    intro:
      "Un homme peut réciter le Coran d'une voix qui fait pleurer une assemblée entière et n'avoir, dans le secret de son cœur, aucune part à la crainte qu'il paraît transmettre. Un autre peut prier dans un coin obscur, sans art ni élégance de voix, et porter en lui une **sincérité totale** que nul dans la mosquée ne soupçonnera jamais. La sincérité — al-ikhlāṣ — est peut-être, de toutes les vertus religieuses, celle qui échappe le plus radicalement à toute mesure extérieure.\n\nCette situation pose une difficulté pratique et une difficulté théologique. Difficulté pratique : comment juger, enseigner, corriger, si l'essentiel du jugement religieux ultime porte sur une réalité qu'aucun tiers ne peut examiner ? Difficulté théologique : quelle place reste-t-il à l'effort humain de sincérité, si celle-ci demeure, par nature, hors d'atteinte de toute vérification, même personnelle et rigoureuse ?\n\nCe sujet reprend la définition de l'ikhlāṣ, ses degrés, et s'attarde longuement sur ce point souvent négligé : **la sincérité ne se prouve presque jamais, elle se cultive dans l'incertitude**, et c'est précisément cette incertitude qui la préserve de se corrompre en certitude orgueilleuse.",
    body: [
      { type: "h2", text: "Une racine qui dit la purification" },
      {
        type: "lexique",
        root: "خ ل ص",
        transliteration: "kh-l-ṣ",
        sense:
          "Être pur, dégagé de tout mélange, débarrassé de ce qui altère. **Al-ikhlāṣ** est l'état de ce qui a été purifié de tout ce qui n'est pas son objet propre — ici, purifié de tout mobile qui ne serait pas Dieu.",
        derives: [
          { word: "khāliṣ", arabic: "خَالِص", gloss: "Ce qui est pur, sans mélange — se dit du lait sans écume au Coran (16:66)." },
          { word: "mukhliṣ", arabic: "مُخْلِص", gloss: "Celui qui purifie son acte, l'oriente exclusivement vers Dieu." },
          { word: "mukhlaṣ", arabic: "مُخْلَص", gloss: "Celui que Dieu Lui-même a rendu pur — degré supérieur, reçu et non seulement produit." },
          { word: "khalāṣ", arabic: "خَلَاص", gloss: "La délivrance, l'issue hors d'une situation confuse — sens dérivé mais parlant." },
        ],
        note:
          "La distinction entre **mukhliṣ** (celui qui s'efforce d'être pur) et **mukhlaṣ** (celui que Dieu a purifié) traverse toute la littérature spirituelle : la sincérité parfaite serait, en un sens, moins un mérite qu'une grâce.",
      },
      {
        type: "verse",
        arabic: "**قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ**",
        translation:
          "**Dis : « En vérité, ma prière, mon rite, ma vie et ma mort appartiennent à Allāh, Seigneur des mondes. »**",
        reference: "Coran, al-Anʿām, 6:162",
      },
      { type: "h2", text: "Ce que l'on peut observer, ce que l'on ne peut pas" },
      {
        type: "comparaison",
        title: "Signes extérieurs et réalité intérieure de la sincérité",
        columns: ["Ce qu'un observateur peut constater", "Ce que cela permet réellement de conclure"],
        rows: [
          { criterion: "Assiduité aux prières collectives", cells: ["Régularité du comportement observable", "Ne prouve ni sincérité ni son absence"] },
          { criterion: "Larmes durant la récitation", cells: ["Une émotion manifeste", "Peut être sincère, ou entraînée, ou théâtrale"] },
          { criterion: "Générosité publique documentée", cells: ["Un don réellement effectué", "Ne dit rien du mobile qui l'a produit"] },
          { criterion: "Discours pieux tenu en société", cells: ["Une maîtrise du vocabulaire religieux", "Compatible avec une absence totale de vécu intérieur correspondant"] },
          { criterion: "Constance dans l'adoration secrète", cells: ["Rien — par définition, elle échappe à l'observation", "Seul indice indirect : témoignage de l'intéressé lui-même, sujet à caution"] },
        ],
        caption:
          "Chaque ligne du tableau confirme la même leçon : **l'extérieur documente le comportement, jamais le mobile**.",
      },
      {
        type: "objection",
        objection:
          "Si nul ne peut vérifier la sincérité d'autrui, la religion ne devient-elle pas une affaire purement privée, indifférente à toute communauté et à tout jugement social ?",
        reponse:
          "Non, car la Loi ne fonde jamais ses statuts juridiques sur la sincérité invérifiable, mais sur **des actes extérieurs constatables** : accomplissement de la prière, paiement de l'aumône légale, respect des interdits. Ces actes suffisent à organiser la vie commune, à établir des droits et des devoirs. **La sincérité, elle, ne conditionne pas le statut social de l'acte : elle en conditionne la valeur devant Dieu**, ce qui est un ordre de jugement entièrement distinct.",
        suite:
          "Ainsi un homme peut être un bon musulman aux yeux de la communauté — parce qu'il prie, jeûne, paie l'aumône — et être, ou ne pas être, sincère devant Dieu ; **ces deux jugements ne se recoupent pas nécessairement**, et c'est une source de grande humilité pour qui y songe sérieusement.",
      },
      { type: "h2", text: "Les degrés de la sincérité selon les maîtres de la vie intérieure" },
      {
        type: "degres",
        title: "De la sincérité comme effort à la sincérité comme état",
        arabic: "مراتب الإخلاص",
        direction: "asc",
        degres: [
          { label: "Purifier l'acte du désir d'être vu des hommes", arabic: "التخلص من الرياء الظاهر", note: "Premier degré, le plus accessible : ne pas agir pour la réputation." },
          { label: "Purifier l'acte du désir d'être loué en son for intérieur", arabic: "التخلص من إعجاب النفس", note: "Plus difficile : ne pas se féliciter soi-même de sa propre piété." },
          { label: "Purifier l'acte de toute recherche de rétribution, même légitime", arabic: "الإخلاص عن طلب الجزاء", note: "Adorer Dieu par amour et par dû, sans que le paradis soit le seul horizon visé." },
          { label: "Ne plus même voir son propre acte comme sien", arabic: "الفناء عن رؤية العمل", note: "Degré rare, décrit par les maîtres soufis : la conscience que tout bien vient de Dieu, jusqu'à l'acte de sincérité lui-même." },
        ],
        caption:
          "Chaque degré suppose le précédent résolu ; peu d'hommes, selon les maîtres, atteignent durablement le dernier.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le piège de se croire sincère",
        text: "Un des dangers les plus subtils de la vie spirituelle consiste à **se rassurer sur sa propre sincérité**, alors que cette assurance même trahit souvent un relâchement de la vigilance. Les maîtres anciens conseillaient de continuer à craindre pour son ikhlāṣ jusqu'au dernier souffle, non par scrupule maladif, mais parce que **le cœur change plus vite que le regard qu'on porte sur lui**.",
      },
      { type: "h2", text: "Une expérience de pensée sur l'auto-examen" },
      {
        type: "experiment",
        title: "Le miroir qui ne montre que ce qu'on veut y voir",
        steps: [
          "Un homme s'interroge : « Pourquoi ai-je donné cette aumône aujourd'hui ? »",
          "Il se répond aussitôt : « Pour Dieu, évidemment » — réponse rapide, presque automatique.",
          "On lui demande d'imaginer que cette aumône soit restée totalement secrète, à jamais, y compris pour lui-même une fois oubliée : éprouverait-il la même satisfaction ?",
          "S'il hésite à répondre, un doute légitime s'installe sur la pureté de son mobile initial.",
        ],
        conclusion:
          "**L'auto-examen sincère demande plus qu'une question rapide : il exige d'imaginer l'acte totalement privé de toute résonance sociale, même future ou imaginaire**, pour discerner ce qui, en lui, tenait encore à Dieu seul.",
      },
      { type: "h2", text: "La chronologie d'une notion approfondie siècle après siècle" },
      {
        type: "chronologie",
        title: "L'ikhlāṣ dans la littérature spirituelle",
        events: [
          { date: "Époque prophétique", label: "Formulation du hadith fondateur sur les intentions", note: "Établissement du principe sans développement théorique élaboré." },
          { date: "IIe-IIIe siècle H.", label: "Premiers traités d'ascèse (zuhd) évoquant la pureté du cœur", note: "Attention portée à la différence entre acte et mobile." },
          { date: "IVe-Ve siècle H.", label: "Al-Muḥāsibī et les débuts d'une psychologie spirituelle systématique", note: "Analyse fine des ruses de l'âme contre elle-même." },
          { date: "VIe siècle H.", label: "Al-Ghazālī, dans l'Iḥyāʾ, consacre un livre entier à l'ikhlāṣ et à la sincérité", note: "Synthèse la plus citée encore aujourd'hui sur le sujet." },
        ],
        caption:
          "Le vocabulaire s'est affiné, mais le constat central — l'opacité du cœur à lui-même — demeure inchangé depuis les origines.",
      },
      { type: "h2", text: "L'avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال أبو القاسم القشيري رحمه الله: **الإخلاص إفراد الحق سبحانه بالقصد في الطاعة**، بأن يريد بطاعته التقرب إلى الله تعالى دون شيء آخر... **وقلَّ من سلِم من شوب**.\n\nAbū al-Qāsim al-Qushayrī, qu'Allāh lui fasse miséricorde, a dit : **la sincérité, c'est réserver le Vrai — exalté soit-Il — comme seule visée dans l'obéissance**, en sorte que l'on ne veuille par cette obéissance que le rapprochement d'Allāh, le Très-Haut, et rien d'autre... **Et rares sont ceux qui échappent à tout mélange.**",
        source: "Al-Qushayrī, Al-Risāla al-Qushayriyya",
      },
      {
        type: "spectre",
        title: "Du geste totalement intéressé à la sincérité la plus pure",
        left: "Motif entièrement mondain déguisé en piété",
        right: "Pureté d'intention totale, connue de Dieu seul",
        markers: [
          { label: "Hypocrisie déclarée", position: 3, note: "L'acte religieux comme simple façade sociale." },
          { label: "Riyāʾ recherché", position: 20, note: "Le regard d'autrui comme but réellement poursuivi." },
          { label: "Mélange ordinaire du croyant moyen", position: 55, note: "Ce que la plupart des maîtres estiment être le lot commun." },
          { label: "Sincérité éprouvée mais non certifiée", position: 85, note: "Aucun signe extérieur ne la distingue nécessairement du mélange précédent." },
          { label: "Ikhlāṣ des mukhlaṣīn", position: 99, note: "Degré que le Coran attribue à un petit nombre, hors de portée d'Iblīs lui-même selon 38:83." },
        ],
        caption:
          "Aucun instrument, ni humain ni introspectif, ne permet de situer avec certitude un cœur donné sur ce spectre — pas même le cœur qui s'examine lui-même.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Reconnaître qu'on ne peut presque rien vérifier, du dehors comme parfois du dedans, sur sa propre sincérité n'est pas une invitation au découragement : c'est **une invitation à l'humilité perpétuelle et à l'effort continué**, sans jamais se reposer sur l'illusion d'une transparence acquise. La demande la plus juste, disaient les anciens, n'est pas « suis-je sincère ? » — question à laquelle nul ne répond avec certitude — mais **« Ô Toi qui retournes les cœurs, affermis mon cœur sur Ta religion »**, prière qui reconnaît d'emblée que la sincérité, en dernier lieu, est aussi un don.",
      },
    ],
  },

  {
    slug: slugifySujet("L'ostentation discrète et ses formes contemporaines"),
    title: "L'ostentation discrète et ses formes contemporaines",
    arabic: "الرياء",
    intro:
      "On imagine volontiers l'ostentation religieuse — le riyāʾ — sous les traits caricaturaux de l'hypocrite qui prie longuement devant la foule et néglige toute dévotion une fois seul. Cette forme existe, et les textes la nomment sans détour comme l'un des pires vices du cœur. Mais **la forme la plus redoutée par les maîtres spirituels n'est pas la plus visible : c'est la plus discrète**, celle qui se love dans un acte par ailleurs authentique et n'en corrompt qu'un fragment, sans que l'agent lui-même en ait toujours pleine conscience.\n\nÀ l'ère des réseaux sociaux, cette discrétion a trouvé des formes nouvelles, parfois insoupçonnées : la photographie de l'aumône, le partage de la citation pieuse, la mise en scène de la piété personnelle sous couvert de « rappel » adressé aux autres. Le vocabulaire religieux contemporain a même produit un mot — le « rīʾāʾ numérique » n'existe pas encore dans les traités classiques, mais le phénomène qu'il désigne y était déjà pleinement anticipé.\n\nCe sujet reprend la notion classique de riyāʾ, distingue ses degrés d'après les maîtres anciens, et l'applique sans complaisance aux pratiques d'aujourd'hui, où le regard collectif s'est démultiplié dans des proportions qu'aucun siècle antérieur n'avait connues.",
    body: [
      { type: "h2", text: "Une racine qui dit le spectacle" },
      {
        type: "lexique",
        root: "ر أ ي",
        transliteration: "r-ʾ-y",
        sense:
          "Voir, montrer à voir. **Al-riyāʾ** est la forme qui dérive du fait de « se faire voir » : l'acte cesse d'être orienté vers Dieu pour devenir un spectacle offert aux regards des hommes.",
        derives: [
          { word: "riyāʾ", arabic: "رِيَاء", gloss: "L'ostentation : accomplir un acte religieux pour qu'il soit vu et loué." },
          { word: "murāʾī", arabic: "مُرَائِي", gloss: "Celui qui pratique l'ostentation, qui « joue » sa piété devant un public." },
          { word: "samʿa", arabic: "سُمْعَة", gloss: "Cousine proche du riyāʾ : rechercher qu'un acte soit connu par ouï-dire, même non vu directement." },
          { word: "shirk khafī", arabic: "شِرْك خَفِيّ", gloss: "« L'associationnisme discret » — nom donné par le hadith au riyāʾ, tant sa gravité est jugée sérieuse." },
        ],
        note:
          "**الرِّيَاءُ هُوَ الشِّرْكُ الْخَفِيُّ** — « Le riyāʾ est l'associationnisme discret », selon une parole prophétique rapportée par Aḥmad. Ce n'est pas une hyperbole rhétorique : c'est un diagnostic théologique précis.",
      },
      {
        type: "verse",
        arabic: "**فَوَيْلٌ لِّلْمُصَلِّينَ ۝ ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ ۝ ٱلَّذِينَ هُمْ يُرَآءُونَ**",
        translation:
          "**Malheur donc à ceux qui prient**, ceux qui de leur prière sont négligents, **ceux qui la font par ostentation**",
        reference: "Coran, al-Māʿūn, 107:4-6",
      },
      {
        type: "p",
        text: "Ce texte est redoutable pour un motif précis : il ne s'adresse pas à ceux qui ne prient pas, mais à ceux qui prient et le font mal — **par négligence intérieure et par recherche du regard**. La menace ne vise donc pas l'absence de pratique, mais sa corruption silencieuse de l'intérieur.",
      },
      { type: "h2", text: "Le riyāʾ manifeste et le riyāʾ subtil" },
      {
        type: "comparaison",
        title: "Deux visages de la même maladie",
        columns: ["Riyāʾ manifeste (jalī)", "Riyāʾ subtil (khafī)"],
        rows: [
          { criterion: "Rapport à l'acte lui-même", cells: ["L'acte n'est accompli que s'il est vu", "L'acte aurait été accompli de toute façon, mais un plaisir secret naît d'être vu"] },
          { criterion: "Conscience de l'agent", cells: ["Souvent pleinement consciente et recherchée", "Parfois inconsciente, débusquée seulement par l'introspection"] },
          { criterion: "Exemple type", cells: ["Prolonger sa prière uniquement quand quelqu'un entre dans la pièce", "Ressentir une satisfaction fugace en apprenant que son aumône a été remarquée"] },
          { criterion: "Sévérité du jugement classique", cells: ["Peut annuler la valeur cultuelle de l'acte", "Diminue la récompense sans nécessairement annuler l'acte, selon la doctrine dominante"] },
        ],
        caption:
          "Le second, précisément parce qu'il n'annule pas toujours l'acte, est jugé par les maîtres **plus difficile à combattre que le premier, car on baisse aisément la garde devant lui**.",
      },
      { type: "h2", text: "Les degrés de gravité selon les maîtres anciens" },
      {
        type: "degres",
        title: "De l'ombre légère à l'hypocrisie déclarée",
        direction: "asc",
        degres: [
          { label: "Plaisir passager d'être vu, non recherché", arabic: "فرح عارض غير مقصود", note: "N'invalide pas l'acte selon la majorité ; à combattre par le repentir immédiat." },
          { label: "Embellissement discret de l'acte en présence d'autrui", arabic: "تحسين العمل عند الناس", note: "Allonger légèrement une prière, adoucir sa voix, sachant qu'on est observé." },
          { label: "Acte accompli différemment selon qu'il est vu ou non", arabic: "التفاوت بحسب الرؤية", note: "Signe clair que le mobile a glissé, au moins partiellement, vers le regard humain." },
          { label: "Acte n'existant que par et pour le regard d'autrui", arabic: "الرياء المحض", note: "Forme achevée, la plus grave, souvent qualifiée de nifāq (hypocrisie) par les textes." },
        ],
        caption:
          "La progression montre que le riyāʾ n'est presque jamais un choix brutal : c'est une **pente**, empruntée par degrés à peine perceptibles.",
      },
      {
        type: "objection",
        objection:
          "Si le simple fait d'éprouver un plaisir passager en étant vu suffit à entacher un acte, la religion ne devient-elle pas une source d'angoisse permanente, où le moindre mouvement du cœur menace de ruiner toute bonne œuvre ?",
        reponse:
          "Les maîtres ont précisément voulu éviter cette dérive scrupuleuse. **Ce n'est pas le sentiment fugace, non recherché, non cultivé, qui invalide l'acte** ; c'est le mobile devenu dominant et volontairement entretenu. Un homme peut ressentir un bref frémissement de satisfaction et le chasser aussitôt par le repentir : cela ne fait pas de lui un ostentatoire.",
        suite:
          "La juste attitude, disent-ils, consiste à **traiter ce genre de pensée comme on traiterait une mouche qui se pose : on la chasse sans en faire une affaire d'État**, et l'on poursuit son acte sans s'y arrêter davantage.",
      },
      { type: "h2", text: "Le cycle du riyāʾ contemporain" },
      {
        type: "cycle",
        title: "Comment le regard numérique reproduit un schéma ancien",
        center: "الرياء",
        steps: [
          { label: "Accomplissement d'un acte pieux", arabic: "أداء العمل", note: "Aumône, lecture coranique, participation à une œuvre caritative." },
          { label: "Tentation de la documentation", arabic: "توثيق العمل", note: "Photographier, filmer, capturer une preuve de l'acte accompli." },
          { label: "Publication et attente du regard", arabic: "النشر وانتظار الاستحسان", note: "Partage sur un réseau, guet des réactions, des « likes », des commentaires." },
          { label: "Renforcement du mobile pour le prochain acte", arabic: "تعزيز الباعث للعمل القادم", note: "L'acte futur est désormais, dès sa conception, pensé en fonction de sa publication possible." },
        ],
        caption:
          "Le cycle se referme sur lui-même et s'auto-alimente : chaque publication réussie rend la suivante plus probable, sans qu'un jugement conscient n'ait été porté.",
      },
      { type: "h2", text: "Le spectre des motifs dans la publication d'un acte pieux en ligne" },
      {
        type: "spectre",
        title: "Publier un acte de piété : du service rendu à l'exhibition pure",
        left: "Volonté sincère d'inciter autrui au bien",
        right: "Recherche exclusive de l'estime et de la reconnaissance",
        markers: [
          { label: "Appel au don pour une cause précise", position: 15, note: "L'objectif documenté est la collecte elle-même, non la personne du donateur." },
          { label: "Témoignage discret pour encourager, nom tu", position: 25, note: "Toléré largement par les juristes contemporains, dans l'esprit de 2:271." },
          { label: "Publication personnelle nommée, avec justification pédagogique", position: 55, note: "Zone grise : l'intention réelle est difficile à établir même pour l'auteur." },
          { label: "Mise en scène esthétisée de l'acte, mise en avant de soi", position: 85, note: "Le bénéficiaire de l'aumône devient accessoire du récit centré sur le donateur." },
          { label: "Fabrication d'un acte pour la seule mise en scène", position: 99, note: "Forme extrême où l'acte religieux réel s'efface derrière sa représentation." },
        ],
        caption:
          "Le curseur exact varie selon l'intention réelle de chacun ; le seul repère fiable reste, comme toujours, l'auto-examen honnête et non l'apparence de la publication.",
      },
      {
        type: "verse",
        arabic: "**إِن تُبْدُوا۟ ٱلصَّدَقَٰتِ فَنِعِمَّا هِىَ ۖ وَإِن تُخْفُوهَا وَتُؤْتُوهَا ٱلْفُقَرَآءَ فَهُوَ خَيْرٌ لَّكُمْ**",
        translation:
          "**Si vous donnez ouvertement vos aumônes, quelle bonne chose ! Mais si vous les cachez et les donnez aux pauvres, c'est meilleur pour vous.**",
        reference: "Coran, al-Baqara, 2:271",
      },
      {
        type: "quote",
        text:
          "قال القرطبي رحمه الله في تفسير هذه الآية: **الإخفاء أفضل في صدقة التطوع**، إلا أن يكون في الإظهار مصلحة كالاقتداء والتحريض على البذل، **فيُنظر حينئذٍ إلى الأصلح**.\n\nAl-Qurṭubī, qu'Allāh lui fasse miséricorde, a dit dans son commentaire de ce verset : **la dissimulation est préférable pour l'aumône surérogatoire**, à moins qu'il n'y ait dans sa manifestation un intérêt tel que l'exemple donné et l'incitation d'autrui à donner ; **on considère alors ce qui est le plus profitable**.",
        source: "Al-Qurṭubī, Al-Jāmiʿ li-Aḥkām al-Qurʾān",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Publier n'est pas automatiquement ostentatoire",
        text: "Le principe posé par al-Qurṭubī reste le juge le plus sûr aujourd'hui : **c'est l'intérêt réel visé, et non la seule visibilité de l'acte, qui détermine sa licéité**. Une campagne de collecte publique, bien administrée, peut relever du meilleur camp du verset 271 ; une mise en scène personnelle centrée sur son propre visage, du pire.",
      },
      { type: "focus", kind: "vigilance", title: "L'autosatisfaction sans public n'échappe pas au vice", text: "On croit parfois avoir échappé au riyāʾ en évitant toute publication. Mais **se complaire secrètement en soi-même, se comparer favorablement aux autres croyants dans le silence de son cœur, est une forme d'ostentation retournée vers soi** — les maîtres l'appellent ʿujb, et la classent parmi les poisons voisins du riyāʾ, parfois plus tenace encore." },
      { type: "h2", text: "Une expérience de pensée sur l'aumône documentée" },
      {
        type: "experiment",
        title: "La caméra qui s'éteint",
        steps: [
          "Un homme s'apprête à filmer la distribution de repas qu'il finance pour des nécessiteux.",
          "Juste avant de commencer, sa caméra tombe en panne, définitivement, sans recours possible.",
          "Il doit choisir : distribuer les repas sans aucune trace, ou renoncer à l'opération faute de pouvoir la documenter.",
          "S'il renonce, ou perd l'essentiel de son enthousiasme, un doute sérieux se pose sur le mobile initial.",
        ],
        conclusion:
          "**La panne de caméra est le meilleur révélateur de l'intention réelle** : ce qui survit à la disparition du regard humain est ce qui, en nous, appartenait véritablement à Dieu.",
      },
      { type: "h2", text: "L'avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال الإمام الغزالي رحمه الله: **الرياء الخفي أخوف على العارفين من الرياء الجليّ**، لأنَّ صاحبه قد لا يشعر به، فيظن نفسه مخلصًا وهو غير ذلك، **وقلَّما ينجو منه إلا مَن دقَّق النظر في نفسه.**\n\nL'imām al-Ghazālī, qu'Allāh lui fasse miséricorde, a dit : **le riyāʾ subtil est plus redouté pour les initiés que le riyāʾ manifeste**, car celui qui le porte peut ne pas s'en apercevoir, se croyant sincère alors qu'il ne l'est pas, **et rares sont ceux qui y échappent hormis ceux qui scrutent finement leur propre âme.**",
        source: "Al-Ghazālī, Iḥyāʾ ʿUlūm al-Dīn",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L'ostentation discrète n'a pas attendu les réseaux sociaux pour exister, mais elle y trouve un terrain d'une fécondité inédite : jamais dans l'histoire un individu n'a pu, d'un geste du pouce, exposer sa piété à un public d'une ampleur autrefois réservée aux plus grands prédicateurs. **Le remède reste pourtant celui d'hier** : interroger, acte par acte, ce qui subsisterait de son désir d'agir si toute possibilité d'être vu venait, soudain, à disparaître pour toujours. Ce qui reste debout dans cette hypothèse est, seul, ce qui appartenait déjà à Dieu.",
      },
    ],
  },
];
