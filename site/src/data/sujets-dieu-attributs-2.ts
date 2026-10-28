import { slugifySujet, type Sujet } from "./sujet-core";

/** Suite du groupe « Les qualificatifs divins » — voie des salaf. */
export const sujetsDieuAttributs2: Sujet[] = [
  {
    slug: slugifySujet("La parole divine : ce qui est affirmé et ce qui ne l'est pas"),
    title: "La parole divine : ce qui est affirmé et ce qui ne l'est pas",
    arabic: "كلام الله",
    intro:
      "Que Dieu parle n'est pas une image poétique : c'est une donnée constante de la Révélation. Il appelle, Il répond, Il ordonne, Il raconte. Mais dès que l'on demande « comment ? », la discussion devient technique, et l'histoire de la pensée islamique s'est longuement arrêtée sur ce point. La voie des premières générations y répond avec une sobriété remarquable.",
    body: [
      { type: "h2", text: "Le point de départ : Il parle, réellement" },
      {
        type: "p",
        text: "Le Coran affirme la parole divine sans détour, et il l'attribue à Dieu comme un acte qu'Il accomplit **quand Il veut, comme Il veut**. Ce n'est ni un son créé en dehors de Lui, ni une simple métaphore de Sa volonté.",
      },
      {
        type: "verse",
        arabic: "وَكَلَّمَ ٱللَّهُ مُوسَىٰ **تَكْلِيمًا**",
        translation: "Et Allāh a parlé à Mūsā **d'une parole réelle**.",
        reference: "Coran, al-Nisāʾ, 4:164",
      },
      {
        type: "p",
        text: "Les grammairiens relèvent que le complément absolu (**taklīman**) est précisément ce qui interdit de lire le verbe au figuré. Al-Shinqīṭī, dans *Aḍwāʾ al-bayān*, en fait un principe : lorsque la langue ferme la porte du figuré, la doctrine n'a pas à la rouvrir.",
      },
      {
        type: "quote",
        text: "**القرآن كلام الله غير مخلوق**، منه بدأ وإليه يعود.\n\n**Le Coran est la parole d'Allāh, non créée** ; de Lui elle procède et vers Lui elle retourne.",
        source: "Formule des imams des salaf, rapportée d'Aḥmad ibn Ḥanbal et d'ʿAbdullāh ibn al-Mubārak",
      },
      {
        type: "balance",
        title: "Ce que l'on affirme, ce que l'on refuse",
        arabic: "كلام الله",
        affirmLabel: "Affirmé",
        denyLabel: "Écarté",
        affirm: [
          "Dieu parle réellement, par des paroles audibles pour qui Il veut.",
          "Sa parole est liée à Sa volonté : Il parle quand Il veut.",
          "Le Coran est Sa parole, lettres et sens, non créée.",
          "Sa parole est sans commencement en tant qu'attribut, renouvelée en tant qu'actes.",
        ],
        deny: [
          "Une parole intérieure muette (kalām nafsī) dont le Coran ne serait que l'expression créée.",
          "Une parole créée dans un corps, comme celle des créatures.",
          "Un organe, un souffle, une gorge : rien de ce qui relève du corps.",
          "Le silence sur le sens : les mots du Coran veulent dire ce qu'ils disent.",
        ],
        caption: "La règle constante : affirmer l'attribut, nier la ressemblance, se taire sur le comment.",
      },
      { type: "h2", text: "Pourquoi la question a divisé" },
      {
        type: "p",
        text: "Certains ont craint qu'admettre une parole faite de lettres et de sons revienne à faire de Dieu un corps. Ils ont donc inventé une parole « de l'âme » sans lettre ni son, dont le Coran récité ne serait que la traduction créée. Les imams des salaf ont refusé ce détour : il ne préserve pas la transcendance, il **supprime l'attribut** au lieu de le purifier.",
      },
      {
        type: "objection",
        objection:
          "Si Dieu parle par des lettres qui se succèdent, Sa parole est donc composée et temporelle, donc créée.",
        reponse:
          "Le raisonnement transpose à Dieu les conditions de notre parole. Ibn Taymiyya répond que la succession appartient aux actes de Sa parole, non à l'attribut lui-même : Il n'a jamais été privé de parole, et Il parle pourtant quand Il veut. Nier cela, c'est nier qu'Il soit vivant et agissant.",
        suite:
          "Le principe reste le même que pour tous les attributs : l'analogie avec la créature n'est pas un argument, c'est l'erreur à éviter.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Une règle simple à retenir",
        text: "Chaque fois qu'un argument commence par « si Dieu était ainsi, ce serait comme nous », il faut s'arrêter : la prémisse cachée est déjà la comparaison que le verset 42:11 interdit.",
      },
      { type: "h2", text: "Ce que cela change pour le lecteur" },
      {
        type: "p",
        text: "Si le Coran est la parole même de Dieu, alors le lire n'est pas consulter un document : c'est **être adressé**. La récitation cesse d'être un exercice et devient une audience. C'est exactement ce que décrivent les biographies des salaf, qui pleuraient à des versets qu'ils connaissaient par cœur depuis trente ans.",
      },
      {
        type: "verse",
        arabic: "وَإِنْ أَحَدٌ مِّنَ ٱلْمُشْرِكِينَ ٱسْتَجَارَكَ فَأَجِرْهُ **حَتَّىٰ يَسْمَعَ كَلَٰمَ ٱللَّهِ**",
        translation:
          "Et si l'un des associateurs te demande asile, accorde-le-lui **afin qu'il entende la parole d'Allāh**.",
        reference: "Coran, al-Tawba, 9:6",
      },
      {
        type: "p",
        text: "Remarque la formulation : ce que l'on fait entendre à celui qui vient, ce n'est pas « un discours sur Dieu », c'est **Sa parole**. Le verset règle la question doctrinale en passant.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La position des premières générations tient en trois gestes : affirmer sans amputer, nier la ressemblance sans nier l'attribut, et laisser le comment à Celui qui seul le connaît. Ce n'est pas une prudence timide, c'est la seule attitude cohérente pour une créature qui parle de son Créateur.",
      },
    ],
  },
  {
    slug: slugifySujet("« Dieu est en haut » : hauteur, séparation, infinité"),
    title: "« Dieu est en haut » : hauteur, séparation, infinité",
    arabic: "العلو",
    intro:
      "Peu de questions ont autant intimidé les lecteurs modernes : dire que Dieu est « en haut » semble Le loger quelque part. Pourtant les textes sont nombreux, explicites, et les imams des salaf n'y ont vu aucune gêne. Comprendre pourquoi demande de distinguer la hauteur affirmée par la Révélation et l'espace tel que nous l'imaginons.",
    body: [
      { type: "h2", text: "L'abondance des textes" },
      {
        type: "p",
        text: "La hauteur divine (**al-ʿuluww**) n'est pas déduite d'un verset isolé : elle traverse le Coran, la Sunna, la langue de l'invocation et le geste spontané de tout croyant qui lève les mains.",
      },
      {
        type: "verse",
        arabic: "**ٱلرَّحْمَٰنُ عَلَى ٱلْعَرْشِ ٱسْتَوَىٰ**",
        translation: "**Le Tout-Miséricordieux S'est établi sur le Trône.**",
        reference: "Coran, Ṭāhā, 20:5",
      },
      {
        type: "quote",
        text: "**الاستواء معلوم، والكيف مجهول، والإيمان به واجب، والسؤال عنه بدعة.**\n\n**L'istiwāʾ est connu, le comment est inconnu, y croire est une obligation, et interroger sur le comment est une innovation.**",
        source: "Imām Mālik ibn Anas, rapporté par al-Bayhaqī et d'autres",
      },
      {
        type: "p",
        text: "La phrase de Mālik est le protocole complet en une ligne : le **sens** est connu — s'établir, c'est s'établir ; le **comment** échappe ; la foi est due ; la curiosité sur la modalité est une porte fermée.",
      },
      { type: "h2", text: "Trois affirmations distinctes" },
      {
        type: "degres",
        title: "Ce que la hauteur recouvre",
        arabic: "العلو",
        degres: [
          { label: "Hauteur d'essence", arabic: "علو الذات", note: "Il est au-dessus de Sa création, distinct d'elle." },
          { label: "Hauteur de puissance", arabic: "علو القهر", note: "Rien ne Lui échappe, rien ne Le contraint." },
          { label: "Hauteur de rang", arabic: "علو القدر", note: "Toute perfection Lui revient absolument." },
        ],
        direction: "asc",
        caption:
          "Certains n'admettent que les deux dernières ; les salaf affirment les trois, car les textes affirment les trois.",
      },
      {
        type: "p",
        text: "Al-Shinqīṭī remarque que si l'on retire la première, les versets qui parlent de ce qui « monte vers Lui » et « descend de chez Lui » perdent leur cohérence : ils ne décrivent plus rien.",
      },
      {
        type: "verse",
        arabic: "**إِلَيْهِ يَصْعَدُ ٱلْكَلِمُ ٱلطَّيِّبُ** وَٱلْعَمَلُ ٱلصَّٰلِحُ يَرْفَعُهُۥ",
        translation:
          "**Vers Lui monte la bonne parole**, et Il élève l'œuvre bonne.",
        reference: "Coran, Fāṭir, 35:10",
      },
      { type: "h2", text: "Hauteur n'est pas localisation" },
      {
        type: "objection",
        objection:
          "Si Dieu est en haut, Il est dans une direction ; s'Il est dans une direction, Il est contenu par l'espace, donc limité.",
        reponse:
          "L'espace est une création. Ce qui est créé ne contient pas son Créateur : Il était, et rien n'était avec Lui, puis Il créa le lieu sans devenir dépendant de lui. Affirmer la hauteur, c'est affirmer une relation de séparation entre le Créateur et l'univers, non une coordonnée dans l'univers.",
        suite:
          "Ibn al-Qayyim résume : la question « où ? » posée par la créature reçoit une réponse dans son propre langage, sans que cette réponse fasse de Dieu un habitant du monde.",
      },
      {
        type: "experiment",
        title: "L'expérience du plafond",
        steps: [
          "Imagine une pièce close, et un occupant qui cherche à situer l'architecte du bâtiment.",
          "Il conclut : l'architecte est soit dans la pièce, soit nulle part.",
          "L'erreur est visible de l'extérieur : sa dichotomie ne vaut que pour ce qui est dans le bâtiment.",
          "Transpose : notre couple « dedans / nulle part » est né dans l'espace créé et ne borne pas Celui qui l'a créé.",
        ],
        conclusion:
          "La hauteur affirmée par les textes dit une séparation et une souveraineté, pas une adresse.",
      },
      { type: "h2", text: "Le témoignage du geste" },
      {
        type: "p",
        text: "Le hadith de la servante, à qui le Prophète ﷺ demande « Où est Allāh ? » et qui répond « Au ciel », est rapporté par Muslim. Sa réponse est validée sans correction. Les salaf en tirent une conclusion pratique : cette connaissance est **accessible à la fitra**, elle ne demande pas de formation philosophique.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Pourquoi l'invocation lève les mains",
        text: "Le geste n'est pas une convention culturelle : il est la traduction corporelle d'une conviction que le cœur porte avant que la langue ne la formule.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Affirmer la hauteur, c'est refuser deux excès : celui qui loge Dieu dans le monde, et celui qui, pour Le préserver, Le rend introuvable. La voie des salaf maintient les deux bords du verset : **rien ne Lui ressemble**, et **Il entend, Il voit, Il s'est établi**.",
      },
    ],
  },
  {
    slug: slugifySujet("« Dieu est avec vous » et « Je suis proche » : concilier les registres"),
    title: "« Dieu est avec vous » et « Je suis proche » : concilier les registres",
    arabic: "المعية والقرب",
    intro:
      "Un lecteur pressé oppose volontiers deux séries de versets : ceux qui placent Dieu au-dessus, et ceux qui Le disent avec nous, plus proche que la veine jugulaire. On en conclut parfois à une contradiction, parfois à une dissolution du sens. Les deux conclusions sont hâtives : la tradition des salaf lit ces registres ensemble, sans en sacrifier un seul.",
    body: [
      { type: "h2", text: "Les deux séries" },
      {
        type: "verse",
        arabic: "وَهُوَ مَعَكُمْ **أَيْنَ مَا كُنتُمْ**",
        translation: "Et Il est avec vous **où que vous soyez**.",
        reference: "Coran, al-Ḥadīd, 57:4",
      },
      {
        type: "verse",
        arabic: "وَنَحْنُ **أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ**",
        translation: "Et Nous sommes **plus proche de lui que sa veine jugulaire**.",
        reference: "Coran, Qāf, 50:16",
      },
      {
        type: "p",
        text: "Remarque que le verset 57:4 s'ouvre, quelques mots plus haut, sur l'établissement sur le Trône. La même phrase énonce donc les deux registres : le texte lui-même refuse qu'on les oppose.",
      },
      { type: "h2", text: "Deux formes d'accompagnement" },
      {
        type: "comparaison",
        title: "Maʿiyya générale et maʿiyya particulière",
        columns: ["Accompagnement général", "Accompagnement particulier"],
        rows: [
          {
            criterion: "Qui est concerné",
            cells: ["Toute créature, croyante ou non", "Les prophètes, les croyants, les patients, les véridiques"],
          },
          {
            criterion: "Contenu",
            cells: ["Science, puissance, vision, maîtrise absolue", "Soutien, protection, secours, apaisement"],
          },
          {
            criterion: "Verset type",
            cells: ["« Il est avec vous où que vous soyez » (57:4)", "« Ne t'attriste pas, Allāh est avec nous » (9:40)"],
          },
          {
            criterion: "Effet sur le cœur",
            cells: ["Vigilance, pudeur devant Dieu", "Confiance, fermeté dans l'épreuve"],
          },
        ],
        caption: "Distinction constante chez Ibn Taymiyya, Ibn al-Qayyim, al-Shinqīṭī et Ibn Bāz.",
      },
      {
        type: "verse",
        arabic: "لَا تَحْزَنْ **إِنَّ ٱللَّهَ مَعَنَا**",
        translation: "Ne t'attriste pas, **Allāh est avec nous**.",
        reference: "Coran, al-Tawba, 9:40",
      },
      {
        type: "p",
        text: "Dans la grotte, Abū Bakr ne reçoit pas une information cosmologique : il reçoit une **promesse de secours**. Le sens du mot « avec » se lit dans ce qu'il produit — et ici, il produit la paix, non une localisation.",
      },
      { type: "h2", text: "La règle de lecture" },
      {
        type: "quote",
        text: "**هو معهم أينما كانوا يعلم ما هم عاملون**\n\n**Il est avec eux où qu'ils soient : Il sait ce qu'ils font.**",
        source: "Explication rapportée d'Ibn ʿAbbās et reprise par al-Ṭabarī",
      },
      {
        type: "p",
        text: "Cette glose ancienne est décisive : ce ne sont pas des théologiens tardifs qui « adoucissent » le verset, ce sont les Compagnons eux-mêmes qui en donnent le sens. La proximité affirmée est **réelle**, et elle n'implique ni mélange ni contact.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'erreur à éviter",
        text: "Conclure de « Il est avec nous » que Dieu serait diffus dans les choses. Aucun Compagnon n'a jamais lu ainsi, et la conséquence — Dieu présent dans ce qui est vil — suffit à montrer l'absurdité.",
      },
      {
        type: "objection",
        objection: "Choisir un sens pour « avec », n'est-ce pas déjà interpréter comme on le reproche aux autres ?",
        reponse:
          "Non : on lit le mot selon son emploi en arabe. « Je suis avec toi dans cette épreuve » n'a jamais signifié en aucune langue une coprésence physique. Le sens retenu est le sens propre du terme dans son contexte, pas un sens détourné pour échapper à une difficulté.",
      },
      { type: "h2", text: "Ce que la conciliation produit" },
      {
        type: "cycle",
        title: "L'effet des deux registres sur le croyant",
        arabic: "المراقبة",
        center: "Murāqaba",
        steps: [
          { label: "Il est au-dessus", note: "Grandeur : je ne dispose pas de Lui." },
          { label: "Il sait tout", note: "Pudeur : je ne suis jamais hors de Sa vue." },
          { label: "Il est proche", note: "Espérance : l'invocation n'a aucune distance à franchir." },
          { label: "Il est avec les patients", note: "Fermeté : l'épreuve n'est pas un abandon." },
        ],
        caption: "Les deux séries de textes ne se neutralisent pas : elles composent un même équilibre intérieur.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La transcendance sans la proximité produit un Dieu lointain ; la proximité sans la transcendance produit un Dieu domestiqué. Le Coran maintient les deux dans la même phrase, et la voie des premières générations consiste simplement à ne pas défaire ce qu'Il a joint.",
      },
    ],
  },
  {
    slug: slugifySujet("Ce que l'on remet à Dieu : le sens des termes, ou la réalité qu'ils désignent ?"),
    title: "Ce que l'on remet à Dieu : le sens des termes, ou la réalité qu'ils désignent ?",
    arabic: "التفويض",
    intro:
      "« Nous ne savons pas ce que cela veut dire, Dieu seul le sait » : cette phrase passe souvent pour la position des anciens. Elle ne l'est pas tout à fait, et la nuance est capitale. Ce que les salaf remettent à Dieu, ce n'est pas le **sens** des mots qu'Il a révélés, c'est la **modalité** de la réalité qu'ils désignent.",
    body: [
      { type: "h2", text: "Deux tafwīḍ que l'on confond" },
      {
        type: "comparaison",
        title: "Remettre le sens, ou remettre le comment",
        columns: ["Tafwīḍ du sens", "Tafwīḍ du comment (voie des salaf)"],
        rows: [
          {
            criterion: "Ce que l'on dit",
            cells: ["« Nous ignorons ce que le mot signifie »", "« Nous savons ce qu'il signifie, nous ignorons comment »"],
          },
          {
            criterion: "Statut du Coran",
            cells: ["Des passages resteraient inintelligibles", "Tout le Coran est une explicitation"],
          },
          {
            criterion: "Effet sur la foi",
            cells: ["Attributs sans contenu, cœur sans objet", "Attributs connus, adoration nourrie"],
          },
          {
            criterion: "Position de Mālik",
            cells: ["Contredit sa phrase : « l'istiwāʾ est connu »", "Exactement sa phrase"],
          },
        ],
      },
      {
        type: "p",
        text: "La formule de Mālik tranche à elle seule : il ne dit pas « l'istiwāʾ est inconnu », il dit **« l'istiwāʾ est connu, le comment est inconnu »**. Confondre les deux, c'est lui faire dire l'inverse de ce qu'il a dit.",
      },
      {
        type: "verse",
        arabic: "كِتَٰبٌ **أُحْكِمَتْ ءَايَٰتُهُۥ ثُمَّ فُصِّلَتْ** مِن لَّدُنْ حَكِيمٍ خَبِيرٍ",
        translation:
          "Un Livre **dont les versets sont parfaitement établis puis exposés en détail**, de la part d'un Sage, parfaitement Informé.",
        reference: "Coran, Hūd, 11:1",
      },
      {
        type: "p",
        text: "Al-Shinqīṭī en tire un argument direct : un Livre décrit comme **exposé en détail** ne peut contenir des pages entières dont personne, pas même le Prophète ﷺ, ne saurait ce qu'elles veulent dire.",
      },
      { type: "h2", text: "Le prix caché du tafwīḍ du sens" },
      {
        type: "list",
        items: [
          "Il transforme des versets d'éloge en énigmes : on ne peut plus louer Dieu par ce qu'on ne comprend pas.",
          "Il suppose que les Compagnons récitaient sans saisir — alors qu'aucun d'eux n'a demandé le sens de ces versets.",
          "Il ouvre la porte, par contrecoup, à toutes les interprétations : là où le sens est vide, chacun le remplit.",
          "Il coupe l'attribut de son effet spirituel : la miséricorde n'apaise plus, la vue ne rend plus pudique.",
        ],
      },
      {
        type: "quote",
        text: "**أمِرُّوها كما جاءت بلا كيف.**\n\n**Faites-les passer comme elles sont venues, sans comment.**",
        source: "Parole des imams des salaf, rapportée notamment d'al-Awzāʿī, Sufyān al-Thawrī et Mālik",
      },
      {
        type: "p",
        text: "« Comme elles sont venues » : c'est-à-dire avec leur sens, dans leur langue. « Sans comment » : c'est-à-dire sans prétendre à la modalité. La formule dit exactement les deux gestes, et pas un de plus.",
      },
      {
        type: "experiment",
        title: "L'expérience du témoin",
        steps: [
          "Un témoin décrit un phénomène qu'il a vu mais dont il ignore le mécanisme.",
          "Demande-lui ce qu'il a vu : il répond précisément.",
          "Demande-lui comment cela fonctionne : il se tait.",
          "Personne n'en conclut que son témoignage n'a pas de sens.",
        ],
        conclusion:
          "Connaître le sens sans connaître la modalité est une situation ordinaire de la connaissance humaine, pas une acrobatie théologique.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Le critère pratique",
        text: "Demande-toi si la lecture que tu adoptes te permet encore d'invoquer Dieu par cet attribut. Si l'attribut est devenu inutilisable dans l'adoration, la lecture a détruit quelque chose.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le vrai tafwīḍ est un silence sur le **comment**, pas une amnésie sur le **quoi**. Il ne rend pas la Révélation obscure : il rend l'esprit sobre. Et cette sobriété, loin d'appauvrir la foi, la protège des deux dérives symétriques que sont la comparaison et la négation.",
      },
    ],
  },
  {
    slug: slugifySujet("Ta'wīl : là où elle s'impose, là où elle ne s'étend pas"),
    title: "Ta'wīl : là où elle s'impose, là où elle ne s'étend pas",
    arabic: "التأويل",
    intro:
      "Le mot taʾwīl est l'un des plus glissants du vocabulaire islamique : il a changé de sens entre les premières générations et les théologiens postérieurs, et une bonne part des polémiques vient de là. Clarifier les emplois du mot suffit à dissoudre beaucoup de faux désaccords.",
    body: [
      { type: "h2", text: "Trois usages du même mot" },
      {
        type: "degres",
        title: "Les sens de taʾwīl",
        arabic: "التأويل",
        degres: [
          {
            label: "La réalité vers laquelle le texte renvoie",
            arabic: "ما يؤول إليه الكلام",
            note: "Sens coranique : « le jour où en viendra le taʾwīl » (7:53).",
          },
          {
            label: "L'explication du sens",
            arabic: "التفسير",
            note: "Sens courant chez al-Ṭabarī, qui écrit « taʾwīl de ce verset » pour dire « explication ».",
          },
          {
            label: "Le détournement d'un sens apparent vers un sens second",
            arabic: "صرف اللفظ عن ظاهره",
            note: "Sens des théologiens tardifs — celui qui pose problème quand il est appliqué aux attributs.",
          },
        ],
        caption: "Beaucoup de disputes disparaissent dès qu'on précise lequel des trois sens est en cause.",
      },
      {
        type: "verse",
        arabic: "هَلْ يَنظُرُونَ إِلَّا **تَأْوِيلَهُۥ** ۚ يَوْمَ يَأْتِى **تَأْوِيلُهُۥ**",
        translation:
          "Attendent-ils autre chose que **sa réalisation** ? Le jour où **sa réalisation** viendra…",
        reference: "Coran, al-Aʿrāf, 7:53",
      },
      { type: "h2", text: "Quand un déplacement de sens est légitime" },
      {
        type: "p",
        text: "La langue arabe connaît le figuré, et le Coran l'emploie. Personne ne comprend « demande à la cité » comme une interpellation de murs. La règle des uṣūlistes est claire : on ne quitte le sens premier que lorsqu'un **indice contraignant** l'exige, tiré du texte lui-même.",
      },
      {
        type: "balance",
        title: "Le test de légitimité",
        affirmLabel: "Déplacement recevable",
        denyLabel: "Déplacement abusif",
        affirm: [
          "Un autre texte impose explicitement le sens second.",
          "La langue arabe atteste couramment cet emploi.",
          "Les Compagnons ont lu ainsi.",
          "Le sens premier est impossible dans le contexte lui-même.",
        ],
        deny: [
          "Le sens premier « choque » une prémisse philosophique importée.",
          "Aucun ancien n'a jamais lu ainsi.",
          "L'emploi invoqué n'est attesté nulle part en arabe.",
          "Le déplacement vide l'attribut au lieu de le préciser.",
        ],
      },
      {
        type: "p",
        text: "Ibn Taymiyya résume l'enjeu : le rejet du taʾwīl chez les salaf ne vise pas la reconnaissance du figuré dans la langue, il vise l'usage **systématique** du figuré pour échapper à ce que le texte affirme.",
      },
      {
        type: "objection",
        objection:
          "Mais si l'on refuse tout taʾwīl, il faudra bien dire que Dieu a une main comme la nôtre.",
        reponse:
          "Non, et c'est précisément ce que la voie des salaf évite. Affirmer l'attribut tel que le texte le nomme n'implique jamais qu'il soit de même nature que le nôtre : « rien ne Lui ressemble » gouverne toute la lecture. Nous vivons, Il vit ; Il n'y a pas là deux vies de même espèce. Le même raisonnement s'applique à tout le reste.",
        suite:
          "La comparaison est écartée par le verset, pas par le déplacement de sens. C'est l'économie de la position : elle protège la transcendance sans mutiler le texte.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le piège des mots identiques",
        text: "Deux réalités peuvent porter le même nom sans partager la moindre modalité. La langue nomme des ressemblances de fonction, pas des identités de nature.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Il n'y a pas d'un côté ceux qui interprètent et de l'autre ceux qui refusent de penser. Il y a ceux qui déplacent le sens quand le texte l'exige, et ceux qui le déplacent quand une doctrine extérieure l'exige. Toute la question tient dans l'origine de l'exigence.",
      },
    ],
  },
  {
    slug: slugifySujet("Une classification des attributs : essentiels, actifs, personnels"),
    title: "Une classification des attributs : essentiels, actifs, personnels",
    arabic: "تقسيم الصفات",
    intro:
      "Classer n'est pas inventer : c'est ranger ce que les textes affirment pour mieux le tenir ensemble. La classification des attributs, telle qu'elle est employée par Ibn Taymiyya, Ibn al-Qayyim, puis Ibn Bāz et Ibn ʿUthaymīn, est un outil pédagogique — utile à condition de ne jamais le prendre pour la réalité elle-même.",
    body: [
      { type: "h2", text: "La première division" },
      {
        type: "schema",
        title: "Les attributs divins",
        arabic: "الصفات",
        variant: "branch",
        nodes: [
          { label: "Attributs d'essence", arabic: "صفات ذاتية", note: "Inséparables de Lui : la vie, la science, la puissance, l'ouïe, la vue." },
          { label: "Attributs d'action", arabic: "صفات فعلية", note: "Liés à Sa volonté : créer, donner, descendre, parler quand Il veut." },
          { label: "Attributs affirmatifs", arabic: "صفات ثبوتية", note: "Ce que les textes Lui attribuent en propre." },
          { label: "Attributs négatifs", arabic: "صفات سلبية", note: "Ce qu'ils écartent de Lui : le sommeil, la fatigue, l'associé, l'enfant." },
        ],
        caption: "Un même attribut peut relever de plusieurs catégories selon l'angle considéré.",
      },
      {
        type: "verse",
        arabic: "**لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ**",
        translation: "**Ni somnolence ni sommeil ne Le saisissent.**",
        reference: "Coran, al-Baqara, 2:255",
      },
      {
        type: "p",
        text: "Note la structure du verset du Trône : il enchaîne des affirmations (le Vivant, Celui qui subsiste par Lui-même) et des négations (ni somnolence ni sommeil). Les négations coraniques ne sont jamais des vides : elles servent toujours à **renforcer une perfection** affirmée juste avant.",
      },
      { type: "h2", text: "Une règle de méthode" },
      {
        type: "quote",
        text: "**النفي المحض لا مدح فيه** حتى يتضمن إثبات كمال.\n\n**Une négation pure ne comporte aucun éloge**, à moins d'impliquer l'affirmation d'une perfection.",
        source: "Principe formulé par Ibn Taymiyya et repris par Ibn al-Qayyim",
      },
      {
        type: "p",
        text: "Ce principe est un antidote puissant : une doctrine qui ne parle de Dieu que par des négations — ni ceci, ni cela, ni ailleurs — finit par décrire **rien**. Les textes, eux, nient pour affirmer.",
      },
      { type: "h2", text: "Attributs d'action et volonté" },
      {
        type: "p",
        text: "Les attributs d'action sont ceux dont les textes lient l'occurrence à la volonté divine : Il crée quand Il veut, Il pardonne qui Il veut, Il agrée. Les salaf y voient la preuve que Dieu est **agissant maintenant**, et non une cause figée ayant tout produit une fois pour toutes.",
      },
      {
        type: "verse",
        arabic: "**كُلَّ يَوْمٍ هُوَ فِى شَأْنٍ**",
        translation: "**Chaque jour, Il est à quelque œuvre.**",
        reference: "Coran, al-Raḥmān, 55:29",
      },
      {
        type: "cycle",
        title: "Ce que produit chaque famille d'attributs",
        center: "Adoration",
        steps: [
          { label: "Essence", note: "Vie, science, puissance → révérence." },
          { label: "Action", note: "Il donne, Il répond → invocation constante." },
          { label: "Affirmation", note: "Miséricorde, sagesse → amour." },
          { label: "Négation", note: "Ni associé, ni faiblesse → unicité pure." },
        ],
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas confondre l'outil et l'objet",
        text: "La classification est un tableau que nous dressons pour comprendre. Elle n'introduit aucune division en Dieu : Il est un, et Ses attributs ne sont pas des parties.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Bien employée, la classification empêche deux erreurs : croire que tout attribut est éternel de la même manière, et croire qu'un attribut lié à la volonté serait une nouveauté en Dieu. Elle sert la clarté, elle ne remplace pas la révérence.",
      },
    ],
  },
  {
    slug: slugifySujet("Attributs de beauté et attributs de rigueur"),
    title: "Attributs de beauté et attributs de rigueur",
    arabic: "الجمال والجلال",
    intro:
      "La Révélation ne présente pas Dieu sur un seul registre. Elle alterne la douceur et la sévérité, souvent dans le même passage, parfois dans le même verset. Cette alternance n'est pas un effet de style : elle est un enseignement sur la manière dont le cœur doit se tenir devant son Seigneur.",
    body: [
      { type: "h2", text: "L'alternance coranique" },
      {
        type: "verse",
        arabic:
          "**نَبِّئْ عِبَادِىٓ أَنِّىٓ أَنَا ٱلْغَفُورُ ٱلرَّحِيمُ** ۝ **وَأَنَّ عَذَابِى هُوَ ٱلْعَذَابُ ٱلْأَلِيمُ**",
        translation:
          "**Informe Mes serviteurs que Je suis le Pardonneur, le Très Miséricordieux** — **et que Mon châtiment est le châtiment douloureux.**",
        reference: "Coran, al-Ḥijr, 15:49-50",
      },
      {
        type: "p",
        text: "Deux versets, deux versants, aucune contradiction. Les commentateurs anciens notent que la juxtaposition est **volontairement immédiate** : elle interdit au lecteur de s'installer dans l'un des deux états.",
      },
      {
        type: "spectre",
        title: "La position du cœur",
        left: "Crainte seule",
        right: "Espérance seule",
        markers: [
          { label: "Désespoir", position: 5, note: "Croire que le pardon ne me concerne pas : une accusation contre Sa miséricorde." },
          { label: "Crainte agissante", position: 32, note: "Elle éloigne du péché sans éteindre l'élan." },
          { label: "Équilibre", position: 50, note: "Les deux ailes de l'oiseau, selon l'image classique." },
          { label: "Espérance agissante", position: 68, note: "Elle nourrit l'obéissance et le retour rapide." },
          { label: "Illusion de sécurité", position: 95, note: "Se croire à l'abri de Sa ruse : un péché en soi." },
        ],
        caption: "Les salaf recommandaient la crainte en bonne santé, l'espérance dominante à l'approche de la mort.",
      },
      { type: "h2", text: "Pourquoi les deux registres sont nécessaires" },
      {
        type: "comparaison",
        title: "Ce que produit chaque versant",
        columns: ["Attributs de beauté", "Attributs de rigueur"],
        rows: [
          { criterion: "Noms typiques", cells: ["al-Raḥmān, al-Ghafūr, al-Laṭīf, al-Wadūd", "al-ʿAzīz, al-Jabbār, al-Muntaqim, Shadīd al-ʿiqāb"] },
          { criterion: "Effet immédiat", cells: ["Amour, confiance, retour", "Révérence, retenue, sérieux"] },
          { criterion: "Danger si isolé", cells: ["Laxisme, familiarité déplacée", "Dureté, désespoir, rigidité"] },
          { criterion: "Correctif", cells: ["Se rappeler la sévérité de Son décompte", "Se rappeler que Sa miséricorde devance Sa colère"] },
        ],
      },
      {
        type: "quote",
        text: "**إنَّ رحمتي سبقت غضبي.**\n\n**Ma miséricorde a devancé Ma colère.**",
        source: "Ḥadīth qudsī rapporté par al-Bukhārī et Muslim",
      },
      {
        type: "p",
        text: "Le verbe employé — **sabaqat**, « a devancé » — n'annule pas la colère : il en fixe le rang. Ibn al-Qayyim en tire que la rigueur divine est toujours **seconde**, jamais première ; elle répond, elle n'initie pas.",
      },
      {
        type: "experiment",
        title: "L'expérience des deux ailes",
        steps: [
          "Représente-toi un oiseau qui n'utiliserait qu'une aile.",
          "Il ne vole pas : il tourne, puis tombe.",
          "Observe maintenant un croyant qui ne connaît que la peur : il fuit et s'épuise.",
          "Et un croyant qui ne connaît que l'espoir : il s'installe et se relâche.",
        ],
        conclusion:
          "Le vol suppose les deux : la crainte donne la direction, l'espérance donne l'élan.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un critère de sincérité",
        text: "Une espérance véritable produit de l'action. Celle qui ne change rien à la conduite n'est pas de l'espérance, c'est de la négligence habillée d'un beau nom.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Connaître Dieu par un seul de Ses versants, c'est ne pas Le connaître. La Révélation compose les deux registres pour former un cœur à la fois humble et confiant — c'est cet équilibre, et non l'une des deux moitiés, qui s'appelle la foi.",
      },
    ],
  },
  {
    slug: slugifySujet("Peut-on employer pour d'autres que Lui les termes qui Le qualifient ?"),
    title: "Peut-on employer pour d'autres que Lui les termes qui Le qualifient ?",
    arabic: "المشترك اللفظي",
    intro:
      "Nous disons d'un homme qu'il est savant, vivant, généreux, puissant. Nous le disons aussi de Dieu. Faut-il en conclure une communauté de nature ? Toute la théologie des attributs se joue dans la réponse à cette question de langue apparemment banale.",
    body: [
      { type: "h2", text: "Le partage du mot, non de la réalité" },
      {
        type: "lexique",
        root: "ع ل م",
        transliteration: "ʿ-l-m",
        sense: "Savoir, connaître, laisser une marque distinctive",
        derives: [
          { word: "ʿilm", arabic: "علم", gloss: "la science, la connaissance établie" },
          { word: "ʿālim", arabic: "عالِم", gloss: "celui qui sait — dit de l'homme comme de Dieu" },
          { word: "ʿalīm", arabic: "عليم", gloss: "forme intensive : Celui dont la science est totale" },
          { word: "ʿallām", arabic: "علّام", gloss: "superlatif : « ʿallām al-ghuyūb », qui sait tous les invisibles" },
        ],
        note: "La langue elle-même gradue : le même radical dit l'homme et Dieu, mais les formes marquent l'écart.",
      },
      {
        type: "p",
        text: "Ibn Taymiyya formule la règle qui gouverne la question : les termes sont **communs dans leur signification générale**, et **propres dès qu'ils sont attribués**. Dire « savant » de Zayd et de Dieu, ce n'est pas leur prêter la même science, comme dire « main » de l'homme et de l'éléphant ne prête pas la même main.",
      },
      {
        type: "verse",
        arabic: "**لَيْسَ كَمِثْلِهِۦ شَىْءٌ ۖ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ**",
        translation: "**Rien ne Lui ressemble, et Il est l'Audient, le Clairvoyant.**",
        reference: "Coran, al-Shūrā, 42:11",
      },
      {
        type: "p",
        text: "Une seule phrase fait les deux gestes : elle **écarte la ressemblance** et **maintient les attributs**. Aucune lecture qui sacrifie l'une des deux moitiés n'est fidèle au verset.",
      },
      { type: "h2", text: "Les termes réservés" },
      {
        type: "balance",
        title: "Ce qui se partage, ce qui ne se partage pas",
        affirmLabel: "Employable pour la créature",
        denyLabel: "Réservé à Dieu",
        affirm: [
          "Savant, vivant, généreux, puissant — au sens limité de la créature.",
          "Roi, seigneur d'une maison, au sens relatif attesté dans le Coran.",
          "Miséricordieux (raḥīm), employé du Prophète ﷺ dans un verset.",
        ],
        deny: [
          "Allāh : jamais employé pour un autre, ni au pluriel ni au féminin.",
          "al-Raḥmān : refusé aux créatures par l'usage constant.",
          "Rabb al-ʿālamīn, al-Khāliq au sens absolu, al-Ṣamad.",
          "Toute forme qui affirme l'absoluité : « le Puissant » sans restriction.",
        ],
        caption: "Le critère n'est pas le mot seul, mais l'absoluité de ce qu'il affirme.",
      },
      {
        type: "verse",
        arabic: "لَقَدْ جَآءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ ... **بِٱلْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ**",
        translation:
          "Certes, un Messager pris parmi vous est venu à vous… **plein de sollicitude et de miséricorde pour les croyants**.",
        reference: "Coran, al-Tawba, 9:128",
      },
      {
        type: "objection",
        objection:
          "Si les mots ont un sens commun, la ressemblance est déjà admise en douce.",
        reponse:
          "La communauté est dans le **concept général** que l'esprit forme, pas dans les réalités existantes. Aucune existence n'est identique à une autre, même entre deux créatures : la science d'un enfant et celle d'un savant portent le même nom sans être de même mesure. À plus forte raison entre le créé et le Créateur, où l'écart n'est pas de degré mais de nature.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le point que beaucoup manquent",
        text: "Refuser tout langage commun conduit à l'agnosticisme : si aucun mot ne s'applique, Dieu devient indicible, et la Révélation aurait parlé pour rien.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le langage est un pont, pas une mesure. Il permet de dire vrai sur Dieu sans permettre de Le circonscrire. C'est exactement l'usage qu'en font les textes : ils nomment abondamment, et ils interdisent en même temps de figurer.",
      },
    ],
  },
  {
    slug: slugifySujet("« Afin que Nous sachions » : Dieu ignorerait-Il l'avenir ?"),
    title: "« Afin que Nous sachions » : Dieu ignorerait-Il l'avenir ?",
    arabic: "لنعلم",
    intro:
      "Plusieurs versets disent que Dieu éprouve les hommes « afin de savoir » qui est sincère. Lus rapidement, ils suggèrent une science qui s'acquiert. La difficulté est réelle, la réponse des exégètes anciens est précise, et elle éclaire au passage la nature même de l'épreuve.",
    body: [
      { type: "h2", text: "Le verset" },
      {
        type: "verse",
        arabic:
          "وَمَا جَعَلْنَا ٱلْقِبْلَةَ ٱلَّتِى كُنتَ عَلَيْهَآ إِلَّا **لِنَعْلَمَ مَن يَتَّبِعُ ٱلرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ**",
        translation:
          "Et Nous n'avions établi la qibla que tu observais que **pour savoir qui suit le Messager et qui s'en retourne sur ses talons**.",
        reference: "Coran, al-Baqara, 2:143",
      },
      {
        type: "p",
        text: "Le même tour revient à propos du combat, de la patience, du jeûne. Il ne s'agit donc pas d'un accident de formulation, mais d'un mode d'expression constant du Coran.",
      },
      { type: "h2", text: "L'explication des anciens" },
      {
        type: "quote",
        text: "قال أهل التفسير: **لنعلمَ** ذلك موجودًا واقعًا، **علمَ شهادةٍ بعد أن كان علمَ غيب**؛ لأنه سبحانه **قد علمه قبل أن يكون**.\n\nLes exégètes ont dit : **« afin que Nous sachions »** signifie : afin que Nous le sachions **advenu, en acte** — d'une science de constatation après qu'il fut objet d'une science de l'invisible ; car Lui, gloire à Lui, **le savait déjà avant qu'il ne fût**.",
        source: "Sens rapporté par al-Ṭabarī et développé par al-Shinqīṭī dans Aḍwāʾ al-bayān",
      },
      {
        type: "degres",
        title: "Deux faces d'une science unique",
        arabic: "علم الغيب وعلم الشهادة",
        degres: [
          { label: "Science de ce qui sera", arabic: "علم الغيب", note: "Antérieure, totale, sans manque : rien ne Lui est caché." },
          { label: "Science de ce qui est advenu", arabic: "علم الشهادة", note: "Le même savoir portant sur la chose devenue effective." },
        ],
        direction: "desc",
        caption:
          "Ce n'est pas Dieu qui apprend : c'est la chose qui passe de la possibilité à l'existence.",
      },
      {
        type: "verse",
        arabic: "**عَٰلِمُ ٱلْغَيْبِ وَٱلشَّهَٰدَةِ** ٱلْكَبِيرُ ٱلْمُتَعَالِ",
        translation:
          "**Le Connaisseur de l'invisible et du visible**, le Grand, le Très Haut.",
        reference: "Coran, al-Raʿd, 13:9",
      },
      { type: "h2", text: "Une seconde lecture, complémentaire" },
      {
        type: "p",
        text: "Des exégètes ajoutent que le verbe vaut ici pour « afin que cela se manifeste » — pour vous, pour les autres, pour l'histoire. L'épreuve ne renseigne pas Dieu : elle **révèle l'homme à lui-même**, et elle rend la rétribution manifestement juste.",
      },
      {
        type: "experiment",
        title: "L'expérience du professeur",
        steps: [
          "Un professeur sait depuis des semaines lequel de ses élèves a travaillé.",
          "Il fait pourtant passer l'examen.",
          "L'examen ne lui apprend rien : il rend public et incontestable ce qu'il savait.",
          "Et il apprend quelque chose à l'élève sur lui-même.",
        ],
        conclusion:
          "L'épreuve a une fonction de manifestation et de justice, pas d'information — et l'analogie s'arrête là, car sa science reste celle d'une créature.",
      },
      {
        type: "objection",
        objection:
          "N'est-ce pas une échappatoire commode pour sauver un verset gênant ?",
        reponse:
          "Ce serait le cas si l'explication venait de nulle part. Or elle est ancienne, attestée chez les premiers exégètes, et conforme à l'usage arabe où le verbe « savoir » se dit couramment de la constatation. Elle est confirmée par des dizaines de versets qui affirment sans ambiguïté la science totale et antérieure de Dieu.",
        suite:
          "Le principe de lecture est le même que partout : le passage ambigu se lit à la lumière des passages clairs, jamais l'inverse.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ce qu'il ne faut pas en tirer",
        text: "Ni une science divine progressive, ni un Dieu qui découvre. Les deux idées contredisent frontalement des versets clairs et sortent de la voie des salaf.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le verset ne fragilise pas la science divine : il éclaire le sens de l'épreuve. Dieu sait avant, pendant et après ; ce que l'épreuve ajoute, ce n'est pas un savoir pour Lui, c'est une vérité rendue visible — et pour l'éprouvé, une occasion de se découvrir tel qu'il est.",
      },
    ],
  },
];
