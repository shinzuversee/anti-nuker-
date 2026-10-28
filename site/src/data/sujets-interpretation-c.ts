import { slugifySujet, type Sujet } from "./sujet-core";

export const sujetsInterpretationC: Sujet[] = [
  {
    slug: slugifySujet("Quel poids accorder à l'exégèse d'un Compagnon ?"),
    title: "Quel poids accorder à l'exégèse d'un Compagnon ?",
    arabic: "تفسير الصحابي",
    intro:
      "Un Compagnon a vécu la descente du Coran, interrogé le Prophète ﷺ sur son sens, et transmis sa compréhension à la génération suivante. Faut-il alors traiter son exégèse comme une simple opinion parmi d'autres, ou lui reconnaître un rang particulier, presque contraignant ? La question n'est pas académique : elle commande toute la méthode d'interprétation du Livre d'Allāh.\n\nCe sujet expose la position d'Ibn Taymiyya dans sa Muqaddima fī uṣūl al-tafsīr, distingue les cas où le tafsīr du Compagnon relève du rapporté (marfūʿ implicite) de ceux où il relève de son propre effort (ijtihād), et fixe la règle de conduite du lecteur d'aujourd'hui.",
    body: [
      { type: "h2", text: "Une génération à part" },
      {
        type: "p",
        text: "Les Compagnons ne sont pas des lecteurs du Coran parmi d'autres : ils en sont les premiers témoins. Ils ont vu les circonstances de révélation, entendu les explications du Prophète ﷺ, et parlaient une langue arabe dans sa pureté première, avant toute altération par le contact des non-arabes. **Trois raisons convergent pour donner un poids particulier à leur parole** : la proximité de la révélation, l'accès direct au Messager ﷺ, et la maîtrise native de la langue dans laquelle le Coran fut révélé.",
      },
      {
        type: "p",
        text: "Ibn Taymiyya insiste sur ce point dans sa Muqaddima : comprendre le Coran suppose de connaître les circonstances de la révélation (asbāb al-nuzūl), le sens des mots dans l'usage arabe de l'époque, et l'intention du législateur. Sur ces trois plans, **nul n'est mieux placé qu'un Compagnon ayant vécu l'événement lui-même**.",
      },
      {
        type: "quote",
        text:
          "قال شيخ الإسلام ابن تيمية: **فإذا اتفق المفسرون من الصحابة على تفسير لم يجز أن يخرج عن قولهم**، فإنهم أعلم الناس بالتأويل، لما خصهم الله به من صحبة النبي ﷺ وما شاهدوه من القرائن والأحوال التي اختصوا بها.\n\nLe Shaykh de l'Islam Ibn Taymiyya a dit : **lorsque les Compagnons s'accordent sur une exégèse, il n'est pas permis de sortir de leur parole**, car ils sont les hommes les plus savants concernant l'interprétation, en raison du privilège que Dieu leur a accordé d'être compagnons du Prophète ﷺ et d'avoir été témoins des circonstances et des états qui leur furent propres.",
        source: "Ibn Taymiyya, Muqaddima fī uṣūl al-tafsīr",
      },
      { type: "h2", text: "Deux natures de tafsīr chez le Compagnon" },
      {
        type: "p",
        text: "Il faut distinguer avec soin deux registres, faute de quoi on tombe soit dans une confiance excessive, soit dans une méfiance injustifiée. Le premier registre concerne les questions **qui ne relèvent pas de l'opinion personnelle** : circonstances de révélation, sens d'un événement passé (comme les récits liés aux prophètes antérieurs), ou description de l'au-delà. Sur ces sujets, un Compagnon ne parle en principe que de ce qu'il a entendu, directement ou indirectement, du Prophète ﷺ : son propos prend alors le statut de **marfūʿ ḥukman**, c'est-à-dire rattaché au Prophète par le jugement des savants du hadīth, même sans mention explicite.",
      },
      {
        type: "p",
        text: "Le second registre concerne l'interprétation de la langue, du sens général d'un verset, ou de son application à un cas particulier : là, le Compagnon **use de son propre effort de compréhension (ijtihād)**, appuyé sur sa connaissance de l'arabe et du contexte, mais sans que cela remonte nécessairement à une parole du Prophète ﷺ. Ce second registre garde une haute valeur, sans revêtir l'autorité contraignante du premier.",
      },
      {
        type: "comparaison",
        title: "Les deux registres du tafsīr des Compagnons",
        columns: ["Registre", "Nature", "Statut", "Exemple"],
        rows: [
          {
            criterion: "Circonstances de révélation",
            cells: [
              "Fait historique vécu",
              "Rattaché au Prophète (marfūʿ ḥukman)",
              "Ibn ʿAbbās rapportant l'occasion d'un verset",
            ],
          },
          {
            criterion: "Récits sur le Ghayb (au-delà, anciens peuples)",
            cells: [
              "Information non déductible par la raison",
              "Rattaché au Prophète, sauf source israélite avérée",
              "Description du Paradis d'après Ibn Masʿūd",
            ],
          },
          {
            criterion: "Sens d'un mot arabe",
            cells: [
              "Compétence linguistique propre",
              "Ijtihād, haute autorité mais non contraignant",
              "Ibn ʿAbbās expliquant un terme rare",
            ],
          },
          {
            criterion: "Application à un cas particulier",
            cells: [
              "Raisonnement analogique",
              "Ijtihād, discutable entre Compagnons eux-mêmes",
              "Divergences sur le sens de certaines lettres isolées",
            ],
          },
        ],
        caption: "La distinction gouverne le degré de contrainte que l'on peut attribuer à chaque parole.",
      },
      { type: "h2", text: "L'accord des Compagnons : une barrière infranchissable" },
      {
        type: "p",
        text: "Lorsque les Compagnons s'accordent unanimement sur le sens d'un verset, cet accord constitue une forme d'**ijmāʿ** (consensus) que nul n'est autorisé à contredire, quelle que soit la subtilité de l'argument avancé ultérieurement. Ibn Taymiyya rappelle que cette génération, la meilleure de la communauté selon la parole prophétique, ne pouvait s'accorder collectivement sur une erreur d'interprétation touchant le sens voulu par Allāh.",
      },
      {
        type: "verse",
        arabic:
          "**وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ وَالَّذِينَ اتَّبَعُوهُم بِإِحْسَانٍ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ**",
        translation:
          "**Les tout premiers, parmi les émigrés et les auxiliaires, et ceux qui les ont suivis dans l'excellence, Allāh est satisfait d'eux et ils sont satisfaits de Lui.**",
        reference: "Coran, al-Tawba, 9:100",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Consensus et divergence ne se traitent pas de même",
        text: "Là où les Compagnons s'accordent, l'accord fait autorité contraignante. **Là où ils divergent entre eux**, leur divergence ouvre un espace légitime d'interprétation, dans les limites de la langue et des principes généraux — mais elle n'autorise en rien une lecture étrangère à l'ensemble de leurs positions.",
      },
      { type: "h2", text: "Le cas d'Ibn ʿAbbās" },
      {
        type: "p",
        text: "Parmi les Compagnons, Ibn ʿAbbās occupe une place à part : le Prophète ﷺ invoqua pour lui : « Ô Allāh, donne-lui la compréhension de la religion et enseigne-lui l'interprétation. » Sa production exégétique, transmise par des chaînes de valeur inégale, forme le socle sur lequel s'appuiera toute l'école de tafsīr mecquoise, puis, à travers ses élèves, l'ensemble du tafsīr par la tradition.",
      },
      {
        type: "chronologie",
        title: "De la révélation à la transmission écrite",
        events: [
          { date: "An 1–11 H.", label: "Révélation et explication directe par le Prophète ﷺ", note: "Les Compagnons interrogent, observent, retiennent." },
          { date: "An 11–40 H.", label: "Génération des grands Compagnons", note: "Ibn ʿAbbās, Ibn Masʿūd, Ubayy ibn Kaʿb transmettent aux Successeurs." },
          { date: "An 40–110 H.", label: "Génération des Successeurs (Tābiʿūn)", note: "Mujāhid, ʿIkrima, Qatāda recueillent le tafsīr des Compagnons." },
          { date: "IIIe siècle H.", label: "Compilation critique", note: "Al-Ṭabarī rassemble et hiérarchise ces chaînes de transmission." },
        ],
        caption: "Chaque maillon fragilise potentiellement la chaîne : d'où l'exigence d'authentification.",
      },
      { type: "h2", text: "Un devoir de vérification des chaînes" },
      {
        type: "p",
        text: "Reconnaître l'autorité du tafsīr des Compagnons n'implique pas d'accepter aveuglément tout ce qui leur est attribué. Beaucoup de propos leur sont faussement rapportés, par des chaînes faibles ou inventées. **La règle salafie exige la même rigueur pour l'authentification d'un tafsīr que pour celle d'un hadīth** : étude des transmetteurs, continuité de la chaîne, absence d'anomalie (shudhūdh) et de vice caché (ʿilla).",
      },
      {
        type: "objection",
        objection: "Puisque les Compagnons ont vécu la révélation, ne suffit-il pas qu'un propos leur soit attribué pour qu'on l'accepte ?",
        reponse:
          "Non : l'attribution elle-même doit être établie avec certitude. Beaucoup de tafsīrs circulent sous le nom d'Ibn ʿAbbās sans provenir réellement de lui, transmis par des chaînes contenant des menteurs avérés ou des inconnus. **L'honneur du Compagnon ne dispense jamais de vérifier qui parle en son nom.**",
        suite: "C'est pourquoi al-Ṭabarī, malgré sa méthode de collecte large, indique systématiquement la chaîne, laissant au lecteur averti la possibilité de juger.",
      },
      { type: "h2", text: "Le rôle des Compagnons face aux innovations théologiques" },
      {
        type: "p",
        text: "Un autre bénéfice, capital, du recours au tafsīr des Compagnons concerne les versets touchant les noms et attributs divins, la prédestination, ou l'au-delà. Ces sujets furent, après leur époque, l'objet de constructions rationnelles étrangères à la première communauté : muʿtazilisme, jahmisme, puis diverses formes de kalām. **Revenir à la compréhension des Compagnons sur ces versets, c'est se prémunir contre des lectures apparues après coup et projetées rétroactivement sur le texte.**",
      },
      {
        type: "balance",
        title: "Ce que le retour aux Compagnons permet et ce qu'il empêche",
        affirmLabel: "Ce que cela permet",
        denyLabel: "Ce que cela empêche",
        affirm: [
          "Ancrer l'interprétation dans le sens connu **avant** l'apparition des écoles théologiques rivales.",
          "Bénéficier d'une connaissance directe de la langue et du contexte de révélation.",
          "Disposer d'un filtre contre les lectures ésotériques ou allégoriques forcées.",
        ],
        deny: [
          "Projeter sur le texte une doctrine philosophique postérieure.",
          "Réinterpréter les attributs divins par la négation ou l'assimilation.",
          "Traiter le Coran comme un support ouvert à toute lecture rationnelle indépendante du texte.",
        ],
        caption: "Le tafsīr des Compagnons agit comme un rempart chronologique autant que doctrinal.",
      },
      { type: "h2", text: "La position d'Ibn Taymiyya résumée" },
      {
        type: "p",
        text: "Dans la Muqaddima, Ibn Taymiyya établit une hiérarchie des sources d'interprétation : d'abord le Coran s'explique par le Coran, puis par la Sunna, puis par les paroles des Compagnons, puis par celles des Successeurs. **Cette hiérarchie n'est pas arbitraire : elle reflète la proximité décroissante avec la source de la révélation.** Sauter cette hiérarchie pour se fonder d'emblée sur des considérations rationnelles étrangères revient à inverser l'ordre naturel de la connaissance religieuse.",
      },
      {
        type: "lexique",
        root: "ف س ر",
        transliteration: "f-s-r",
        sense:
          "Dévoiler, expliquer, rendre clair ce qui était caché. De cette racine vient **tafsīr**, l'exégèse qui découvre le sens du texte révélé sans lui en imposer un étranger.",
        derives: [
          { word: "tafsīr", arabic: "تَفْسِير", gloss: "L'explication du sens voulu par le texte." },
          { word: "mufassir", arabic: "مُفَسِّر", gloss: "Celui qui exerce cette explication avec compétence et méthode." },
          { word: "tafsīr bi-l-maʾthūr", arabic: "تفسير بالمأثور", gloss: "L'exégèse fondée sur le Coran, la Sunna et les paroles des Compagnons." },
          { word: "tafsīr bi-l-raʾy", arabic: "تفسير بالرأي", gloss: "L'exégèse fondée sur l'opinion personnelle, admise seulement dans certaines limites." },
        ],
      },
      { type: "h2", text: "Une hiérarchie, non une fermeture" },
      {
        type: "p",
        text: "Reconnaître le poids du tafsīr des Compagnons ne revient pas à interdire tout effort ultérieur de compréhension. **Les savants après eux ont continué d'approfondir la langue, de préciser les circonstances, d'organiser les données.** Ce qui est fermé, c'est la possibilité de contredire ce sur quoi ils se sont accordés, ou de bâtir une lecture entièrement étrangère à leur compréhension collective sur les fondements de la foi.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Ne pas confondre transmission fidèle et immobilisme",
        text: "**Suivre les Compagnons dans les fondements n'empêche pas l'étude linguistique, historique ou juridique de progresser** sur les questions secondaires. La fermeture concerne le cœur de la doctrine ; l'ouverture demeure sur les détails d'application, de langue et de contexte.",
      },
      {
        type: "quote",
        text:
          "قال الإمام ابن كثير رحمه الله: **وأصح الطرق في ذلك أن يفسر القرآن بالقرآن**، فما أجمل في مكان فقد فُسِّر في موضع آخر، فإن أعياك ذلك فعليك بالسنة، فإن لم تجد فحينئذ يرجع إلى أقوال الصحابة.\n\nL'imām Ibn Kathīr, qu'Allāh lui fasse miséricorde, a dit : **la voie la plus juste en cela est d'expliquer le Coran par le Coran**, car ce qui est énoncé brièvement en un endroit est détaillé ailleurs ; si cela ne suffit pas, on recourt à la Sunna ; et si l'on n'y trouve rien, on revient alors aux paroles des Compagnons.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿaẓīm, introduction",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le tafsīr d'un Compagnon n'est ni une opinion négligeable ni un texte intouchable au même titre que la révélation elle-même : c'est une source d'autorité graduée, tantôt rattachée au Prophète ﷺ par le jugement des savants, tantôt fruit d'un effort personnel de compréhension mais éclairé par une proximité inégalable avec la source. **La méthode salafie retient cette gradation avec précision : ni mépris de la parole des premiers témoins, ni sacralisation aveugle de tout ce qui leur est attribué.** C'est dans cet équilibre, fixé par Ibn Taymiyya et repris par les générations suivantes, que se construit une exégèse fidèle à la fois au texte et à son histoire.",
      },
    ],
  },
  {
    slug: slugifySujet("Les récits des Gens du Livre dans les ouvrages de tafsīr"),
    title: "Les récits des Gens du Livre dans les ouvrages de tafsīr",
    arabic: "الإسرائيليات",
    intro:
      "Ouvrez un ancien ouvrage de tafsīr à la sourate de Joseph ou à celle des Cavernes, et vous croiserez des détails absents du Coran : le nom des compagnons de la Caverne, la couleur de la vache d'Israël, le nombre exact des années passées par Adam au Paradis. Ces ajouts portent un nom : isrāʾīliyyāt, les récits venus des Gens du Livre. D'où viennent-ils, pourquoi les commentateurs les ont-ils rapportés, et quelle attitude la doctrine salafie recommande-t-elle face à eux ?\n\nCe sujet expose la règle prophétique qui encadre ce matériau, la classification qu'en fait Ibn Kathīr, et les critères qui permettent de trier, dans une masse considérable, ce qui peut être retenu de ce qui doit être rejeté.",
    body: [
      { type: "h2", text: "Une porte ouverte très tôt" },
      {
        type: "p",
        text: "Dès la génération des Successeurs, des convertis venus du judaïsme, comme Kaʿb al-Aḥbār, ou plus tard Wahb ibn Munabbih, apportèrent avec eux une masse de récits issus de la tradition rabbinique et des évangiles apocryphes. Ces récits comblaient un vide naturel : le Coran mentionne souvent un fait sans en détailler les circonstances, laissant l'auditeur curieux d'en savoir davantage. **Cette curiosité, légitime en elle-même, devint la porte par laquelle un matériau étranger, parfois fiable, parfois fabriqué, s'introduisit dans les commentaires.**",
      },
      { type: "h2", text: "La règle prophétique qui gouverne tout" },
      {
        type: "p",
        text: "Le Prophète ﷺ avait anticipé cette situation par une parole qui reste, aujourd'hui encore, la clé de voûte de la méthode salafie sur ce sujet.",
      },
      {
        type: "quote",
        text:
          "عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ: **«لَا تُصَدِّقُوا أَهْلَ الْكِتَابِ وَلَا تُكَذِّبُوهُمْ، وَقُولُوا: آمَنَّا بِاللَّهِ وَمَا أُنْزِلَ إِلَيْنَا»**\n\nD'après Abū Hurayra, qu'Allāh l'agrée : le Messager d'Allāh ﷺ a dit : **« Ne croyez pas les Gens du Livre et ne les démentez pas, mais dites : nous croyons en Allāh et en ce qui nous a été révélé. »**",
        source: "Al-Bukhārī, Ṣaḥīḥ, Kitāb al-tafsīr",
      },
      {
        type: "p",
        text: "Cette parole trace une position médiane, exigeante à tenir : ni acceptation naïve, ni rejet catégorique. **Le silence prudent devient la règle par défaut** dès lors qu'un récit provenant des Gens du Livre ne trouve aucune confirmation ni aucune infirmation dans le Coran et la Sunna authentique.",
      },
      {
        type: "balance",
        title: "La position médiane du hadīth",
        arabic: "لا تصدقوا ولا تكذبوا",
        affirmLabel: "Ce qui est écarté",
        denyLabel: "Ce qui est retenu",
        affirm: [
          "Croire aveuglément tout récit venu des Gens du Livre, comme s'il était parole révélée.",
          "Démentir systématiquement tout récit, alors qu'une part peut correspondre à une vérité ancienne.",
        ],
        deny: [
          "S'en tenir fermement à ce qu'Allāh a révélé et à ce que le Prophète ﷺ a authentiquement transmis.",
          "Rapporter certains récits **à titre d'illustration**, sans leur accorder le statut de preuve religieuse.",
        ],
        caption: "La formule prophétique protège des deux excès inverses : la crédulité et le rejet systématique.",
      },
      { type: "h2", text: "La classification d'Ibn Kathīr" },
      {
        type: "p",
        text: "Dans l'introduction de son tafsīr, Ibn Kathīr reprend et développe cette règle en distinguant trois catégories de récits israélites, selon leur degré de compatibilité avec les sources islamiques.",
      },
      {
        type: "degres",
        title: "Les trois catégories d'Ibn Kathīr",
        degres: [
          { label: "Confirmé", arabic: "ما يشهد له الشرع بالصحة", note: "Récit dont le contenu est corroboré par le Coran ou une Sunna authentique : il est accepté, non en tant qu'isrāʾīliyya mais en tant que vérité islamique." },
          { label: "Infirmé", arabic: "ما يشهد له الشرع بالبطلان", note: "Récit contredisant un texte établi ou une règle de raison certaine : il est catégoriquement rejeté, quelle que soit l'autorité qui le rapporte." },
          { label: "Suspendu", arabic: "المسكوت عنه", note: "Récit sur lequel le Coran et la Sunna ne se prononcent ni pour ni contre : on ne le croit pas, on ne le dément pas, on peut au mieux le mentionner à titre d'exemple." },
        ],
        direction: "desc",
        caption: "Cette tripartition permet de trier un matériau considérable sans tomber dans l'arbitraire.",
      },
      {
        type: "quote",
        text:
          "قال الحافظ ابن كثير رحمه الله: **فهذا الضرب مما لا فائدة فيه تعود، ولا فائدة دينية، ولهذا لم يعتن السلف بنقله**، وإن كان بعضهم قد ينقل من ذلك ما يجوز أن يكون وأن لا يكون، فحكمه حكم ما تقدم بيانه.\n\nLe Ḥāfiẓ Ibn Kathīr, qu'Allāh lui fasse miséricorde, a dit : **ce genre de récits n'apporte aucun bénéfice, ni utilité religieuse, c'est pourquoi les Salaf ne se sont pas souciés de les transmettre**, même si certains d'entre eux en ont rapporté qui pouvaient être vrais ou faux, dont le jugement suit ce qui a été précédemment exposé.",
        source: "Ibn Kathīr, Tafsīr al-Qurʾān al-ʿaẓīm, introduction",
      },
      { type: "h2", text: "Pourquoi ces récits ont malgré tout circulé si largement" },
      {
        type: "p",
        text: "Plusieurs facteurs expliquent l'ampleur du phénomène. D'abord, l'absence, aux premiers siècles, d'une méthode critique aussi élaborée que celle appliquée au hadīth : les récits historiques circulaient avec moins de rigueur dans la vérification des chaînes. Ensuite, la conversion sincère de figures comme Kaʿb al-Aḥbār, dont le savoir antérieur pouvait légitimement éclairer certains points, sans que cela garantisse l'exactitude de chaque détail transmis. Enfin, **le souci pédagogique de rendre le récit coranique plus vivant** poussa des commentateurs à emprunter des détails narratifs séduisants, sans toujours s'interroger sur leur origine.",
      },
      {
        type: "chronologie",
        title: "L'histoire du phénomène isrāʾīliyyāt",
        events: [
          { date: "Ier siècle H.", label: "Premiers convertis porteurs de traditions", note: "Kaʿb al-Aḥbār, puis Wahb ibn Munabbih transmettent des récits bibliques et apocryphes." },
          { date: "IIe–IIIe siècle H.", label: "Intégration large dans le tafsīr naissant", note: "Ces récits se mêlent aux commentaires faute de méthode critique systématique." },
          { date: "IIIe siècle H.", label: "Compilation par al-Ṭabarī", note: "Les récits sont rapportés avec leur chaîne, permettant un tri ultérieur." },
          { date: "VIIIe siècle H.", label: "Critique méthodique d'Ibn Kathīr", note: "Classification tripartite et mise en garde explicite contre l'usage religieux de ce matériau." },
          { date: "Époque contemporaine", label: "Reprise de la vigilance salafie", note: "Al-Shinqīṭī, Ibn Bāz et Ibn ʿUthaymīn renouvellent l'appel à la prudence dans l'enseignement du tafsīr." },
        ],
        caption: "La vigilance critique s'est renforcée à mesure que la méthode du hadīth gagnait le champ de l'exégèse.",
      },
      { type: "h2", text: "Des exemples concrets de vigilance nécessaire" },
      {
        type: "p",
        text: "Le Coran mentionne, dans la sourate des Cavernes, le nombre d'années que les jeunes gens passèrent endormis, sans donner leur nombre exact ni leurs noms. Une abondante littérature israélite a comblé ce vide par des chiffres précis et des noms détaillés, que le Coran lui-même semble décourager de rechercher.",
      },
      {
        type: "verse",
        arabic:
          "**سَيَقُولُونَ ثَلَاثَةٌ رَّابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ رَجْمًۢا بِالْغَيْبِ** ۖ وَيَقُولُونَ سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ ۚ قُل رَّبِّىٓ أَعْلَمُ بِعِدَّتِهِم مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌ",
        translation:
          "**Ils diront : ils étaient trois, leur chien étant le quatrième ; et ils diront : ils étaient cinq, leur chien étant le sixième — conjecture sur l'inconnu** — et ils diront : ils étaient sept, et leur chien le huitième. Dis : mon Seigneur connaît mieux leur nombre ; peu nombreux sont ceux qui le savent.",
        reference: "Coran, al-Kahf, 18:22",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le Coran lui-même met en garde",
        text: "Le verset qualifie ces suppositions de **rajm bi-l-ghayb**, « conjecture sur l'inconnu ». La demande de précisions non fournies par le texte est présentée comme une impasse : **rechercher un détail que la Révélation a volontairement tu relève souvent d'une curiosité mal orientée**.",
      },
      { type: "h2", text: "Le cas d'al-Ṭabarī et celui d'Ibn Kathīr" },
      {
        type: "p",
        text: "Al-Ṭabarī, fidèle à sa méthode de collecte critique, rapporte un grand nombre de ces récits, mais **toujours avec leur chaîne de transmission**, laissant ainsi au lecteur formé les moyens d'en juger la valeur. Il ne les présente jamais comme des vérités certaines, mais comme des propos rapportés, dont la responsabilité de véracité incombe à leurs transmetteurs. Ibn Kathīr, venu plus tard, resserre encore l'exigence : il cite ces récits pour les commenter, les corriger, ou les rejeter explicitement lorsqu'ils contredisent un principe de la foi.",
      },
      {
        type: "comparaison",
        title: "Deux attitudes face au même matériau",
        columns: ["Critère", "Al-Ṭabarī", "Ibn Kathīr"],
        rows: [
          {
            criterion: "Volume rapporté",
            cells: ["Très large, par souci d'exhaustivité", "Plus resserré, par souci de sélection"],
          },
          {
            criterion: "Présentation",
            cells: ["Avec chaîne systématique", "Avec chaîne et commentaire critique"],
          },
          {
            criterion: "Jugement explicite",
            cells: ["Rarement formulé directement", "Souvent formulé, avec rejet argumenté"],
          },
          {
            criterion: "Usage recommandé par la suite",
            cells: ["Lecture avec discernement du spécialiste", "Référence privilégiée pour le grand public"],
          },
        ],
        caption: "L'évolution de la méthode reflète un affinement progressif du tri critique en exégèse.",
      },
      { type: "h2", text: "Les critères pratiques de tri" },
      {
        type: "list",
        items: [
          "Vérifier si le récit **contredit un texte du Coran ou une Sunna authentique** : dans ce cas, rejet catégorique, quelle que soit l'autorité qui le transmet.",
          "Vérifier si le récit **prête à Dieu ou aux prophètes des imperfections** contraires à leur rang : rejet immédiat, ces récits provenant souvent de déformations postérieures des textes bibliques.",
          "Examiner si le récit relève d'un **détail sans portée religieuse** (couleur, nombre, nom propre non révélé) : suspension de jugement, mention possible à titre indicatif seulement.",
          "Vérifier la **chaîne de transmission elle-même** jusqu'au converti qui l'a rapportée : un rapport isolé et non recoupé garde une valeur faible.",
          "Ne jamais fonder une croyance ou une pratique religieuse sur un récit de cette catégorie, **fût-il séduisant ou pédagogiquement commode**.",
        ],
      },
      {
        type: "experiment",
        title: "Le voisin qui raconte une histoire ancienne",
        steps: [
          "Un voisin, connu pour son honnêteté générale mais issu d'une autre tradition, te raconte un événement très ancien.",
          "Tu ne peux ni vérifier chaque détail, ni le traiter comme un menteur systématique.",
          "S'il confirme ce que tu sais déjà par une source sûre, tu l'acceptes avec confiance.",
          "S'il contredit ce que tu sais déjà, tu le rejettes, même si le récit est captivant.",
          "S'il ajoute un détail que tu ne peux ni confirmer ni infirmer, **tu le retiens sans le tenir pour certain**.",
        ],
        conclusion:
          "C'est exactement l'attitude prescrite par le hadīth d'Abū Hurayra : ni crédulité, ni démenti systématique, mais un jugement au cas par cas fondé sur ce qui est déjà solidement établi.",
      },
      { type: "h2", text: "Conséquences pour l'enseignement contemporain du tafsīr" },
      {
        type: "p",
        text: "Les savants contemporains de l'école salafie, en particulier al-Shinqīṭī dans Aḍwāʾ al-bayān, appliquent systématiquement cette grille de lecture : lorsqu'un point du Coran reste sans détail supplémentaire dans le Coran ou la Sunna, **al-Shinqīṭī s'arrête où le texte s'arrête**, refusant de combler le silence révélé par des suppositions importées. Cette rigueur constitue un modèle pour quiconque veut aujourd'hui étudier le tafsīr sans se laisser emporter par le charme narratif de récits invérifiables.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le silence du texte est parfois un enseignement en soi",
        text: "Quand le Coran ne précise pas un détail, **ce silence n'est pas un oubli mais souvent une leçon** : l'essentiel du récit ne réside pas dans l'anecdote, mais dans la leçon morale et théologique qu'il porte. Chercher à tout prix le détail manquant risque de détourner l'attention du sens véritable.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Les isrāʾīliyyāt ne sont ni un trésor caché à exhumer, ni un poison à bannir de toute mention : elles forment un matériau ambigu, que la parole prophétique invite à traiter avec discernement plutôt qu'avec fascination ou hostilité de principe. **La règle est simple à énoncer et exigeante à appliquer : ne pas croire, ne pas démentir, s'en tenir à ce qu'Allāh et Son Messager ﷺ ont authentiquement transmis.** C'est cette discipline, formulée par le hadīth et affinée par Ibn Kathīr, qui protège l'exégèse islamique de la dérive narrative tout en lui laissant, avec prudence, la richesse d'un patrimoine ancien.",
      },
    ],
  },

  {
    slug: slugifySujet("Lire al-Ṭabarī : quelle était réellement sa méthode"),
    title: "Lire al-Ṭabarī : quelle était réellement sa méthode",
    arabic: "تفسير الطبري",
    intro:
      "Jāmiʿ al-bayān ʿan taʾwīl āy al-Qurʾān, l'immense tafsīr d'Ibn Jarīr al-Ṭabarī, reste après plus de mille ans la référence première de toute exégèse par la tradition. Mais sa taille impressionnante décourage souvent d'en comprendre la logique interne : pourquoi rapporte-t-il autant d'avis divergents, pourquoi cite-t-il des chaînes entières pour chaque propos, et comment tranche-t-il finalement entre les interprétations ?\n\nCe sujet reconstitue la méthode réelle d'al-Ṭabarī, telle que l'ont analysée Ibn Taymiyya et al-Dhahabī, et montre pourquoi cette rigueur de transmission en fait un modèle salafi malgré la présence en son sein de récits à trier avec prudence.",
    body: [
      { type: "h2", text: "Un homme, une œuvre, un siècle" },
      {
        type: "p",
        text: "Muḥammad ibn Jarīr al-Ṭabarī naquit à Āmul, dans le Ṭabaristān, vers 224 H., et voyagea toute sa vie pour recueillir le savoir : Baghdad, la Syrie, l'Égypte. **Il ne fut pas seulement exégète : historien, juriste, spécialiste du hadīth**, sa formation encyclopédique explique l'ampleur inégalée de son tafsīr, achevé à la fin du IIIe siècle de l'hégire.",
      },
      {
        type: "chronologie",
        title: "La vie d'al-Ṭabarī et la genèse de son tafsīr",
        events: [
          { date: "224 H.", label: "Naissance à Āmul", note: "Dans une famille aisée qui encourage tôt son instruction religieuse." },
          { date: "240–260 H.", label: "Voyages de quête du savoir", note: "Baghdad, la Syrie, l'Égypte : collecte de chaînes de transmission auprès de nombreux maîtres." },
          { date: "Vers 270 H.", label: "Rédaction du Jāmiʿ al-bayān", note: "Compilation systématique des tafsīrs transmis, verset par verset." },
          { date: "310 H.", label: "Mort à Baghdad", note: "Laissant, outre le tafsīr, une monumentale histoire universelle, Taʾrīkh al-rusul wa-l-mulūk." },
        ],
        caption: "Une vie entière de collecte aboutit à une œuvre pensée comme un dépôt fidèle de la tradition reçue.",
      },
      { type: "h2", text: "Le principe directeur : rapporter avant de trancher" },
      {
        type: "p",
        text: "La méthode d'al-Ṭabarī obéit à une structure constante, verset après verset : il cite d'abord les différents avis transmis par les Compagnons et les Successeurs, chacun accompagné de sa chaîne complète de transmission, puis il examine leur compatibilité, et **conclut le plus souvent par son propre jugement, introduit par la formule « la parole la plus juste sur ce sujet est… » (aṣ-ṣawāb min al-qawl fī dhālika)**.",
      },
      {
        type: "schema",
        title: "La structure type d'un commentaire chez al-Ṭabarī",
        variant: "flow",
        nodes: [
          { label: "Citation du verset", note: "Rappel du texte à commenter." },
          { label: "Collecte des avis transmis", arabic: "الروايات بأسانيدها", note: "Chaque opinion est rapportée avec sa chaîne complète de transmetteurs." },
          { label: "Examen linguistique", note: "Recours à la poésie arabe ancienne et à la grammaire pour éclairer le sens des mots." },
          { label: "Confrontation des avis", note: "Étude de leur compatibilité ou de leur contradiction réelle." },
          { label: "Tranchement", arabic: "الصواب من القول", note: "Jugement personnel motivé, lorsque les avis divergent réellement." },
        ],
        caption: "Cette structure, répétée sur des milliers de versets, fait du Jāmiʿ al-bayān un sommet de méthode critique.",
      },
      { type: "h2", text: "Une distinction essentielle : divergence de mots, divergence de sens" },
      {
        type: "p",
        text: "L'un des apports méthodologiques majeurs d'al-Ṭabarī, souligné par les analyses postérieures, consiste à distinguer les divergences de simple formulation des divergences de sens réel. Beaucoup des avis qu'il rapporte, en apparence contradictoires, **décrivent en réalité la même réalité avec des mots différents**, ou insistent chacun sur un aspect complémentaire du sens.",
      },
      {
        type: "quote",
        text:
          "قال شيخ الإسلام ابن تيمية: **واختلاف السلف في التفسير قليل، وأكثر اختلافهم من باب اختلاف التنوع لا اختلاف التضاد**، وكثيرًا ما يذكر كل واحد منهم بعض المعنى ويظن مَن لا خبرة له أن هذا اختلاف وليس كذلك.\n\nLe Shaykh de l'Islam Ibn Taymiyya a dit : **la divergence des Salaf dans le tafsīr est peu importante, et la plupart de leurs divergences relèvent d'une divergence de variété et non d'une divergence d'opposition** ; chacun d'eux mentionne souvent une partie du sens, et celui qui manque d'expérience croit qu'il s'agit d'une contradiction, alors qu'il n'en est rien.",
        source: "Ibn Taymiyya, Muqaddima fī uṣūl al-tafsīr",
      },
      {
        type: "balance",
        title: "Deux types de divergence chez les commentateurs",
        arabic: "اختلاف تنوع واختلاف تضاد",
        affirmLabel: "Divergence de variété (tanawwuʿ)",
        denyLabel: "Divergence d'opposition (taḍādd)",
        affirm: [
          "Chaque avis décrit un aspect vrai et complémentaire du même sens.",
          "Les avis peuvent être **réunis** sans en écarter aucun.",
          "Exemple : les avis multiples sur la nature exacte de la « sourate » dans un verset donné.",
        ],
        deny: [
          "Les avis s'excluent réellement l'un l'autre, un seul pouvant être exact.",
          "Il faut alors **trancher** selon la langue, le contexte et les autres textes.",
          "Exemple : les avis contradictoires sur l'abrogation ou non d'un verset donné.",
        ],
        caption: "Cette distinction, mise en lumière par Ibn Taymiyya, éclaire toute la structure du Jāmiʿ al-bayān.",
      },
      { type: "h2", text: "La rigueur des chaînes de transmission" },
      {
        type: "p",
        text: "Contrairement à une idée répandue, al-Ṭabarī ne mélange pas indistinctement tout ce qu'il trouve : **chaque propos est systématiquement rattaché à sa chaîne**, ce qui permet au lecteur formé d'en évaluer la valeur, exactement comme pour un hadīth. Cette exigence place son tafsīr, malgré son ancienneté, dans la catégorie des ouvrages vérifiables plutôt que des compilations anonymes.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Rapporter n'est pas garantir",
        text: "Le fait qu'al-Ṭabarī cite un récit avec sa chaîne **ne signifie pas qu'il le tient pour authentique** : il transmet fidèlement ce qui lui est parvenu, laissant au spécialiste le soin de juger la solidité de chaque chaîne, selon les mêmes critères que pour le hadīth.",
      },
      { type: "h2", text: "L'appréciation d'al-Dhahabī" },
      {
        type: "quote",
        text:
          "قال الحافظ الذهبي رحمه الله عن تفسير الطبري: **وهو أجلّ التفاسير وأعظمها قدرًا**، لم يؤلَّف مثله، جمع فيه بين الرواية والدراية، وبيّن اختلاف العلماء واستدلّ لكل قول، ورجّح ما رآه راجحًا.\n\nLe Ḥāfiẓ al-Dhahabī, qu'Allāh lui fasse miséricorde, a dit du tafsīr d'al-Ṭabarī : **c'est le plus noble des tafsīrs et le plus grand par sa valeur**, rien de semblable n'a été composé ; il y a réuni la transmission et la compréhension, exposé la divergence des savants, argumenté chaque opinion, et privilégié ce qu'il jugeait le plus juste.",
        source: "Al-Dhahabī, Siyar aʿlām al-nubalāʾ",
      },
      { type: "h2", text: "Une méthode saine sur le fond de la croyance" },
      {
        type: "p",
        text: "Sur les questions touchant les noms et attributs divins, al-Ṭabarī suit fidèlement la voie des premiers, sans se laisser entraîner dans les débats de kalām qui déjà, de son vivant, se développaient. Il affirme les versets qui mentionnent la main, la face, l'établissement sur le Trône, **sans les nier, sans les assimiler au créé et sans en rechercher le comment** — position qu'il partage avec l'ensemble des Salaf, et qui contraste nettement avec des méthodes exégétiques postérieures marquées par le rationalisme théologique.",
      },
      {
        type: "verse",
        arabic: "**الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ**",
        translation: "**Le Tout-Miséricordieux S'est établi sur le Trône.**",
        reference: "Coran, Ṭā-Hā, 20:5",
      },
      {
        type: "p",
        text: "Sur ce type de verset, al-Ṭabarī rapporte les avis des premiers exégètes sur le sens du mot **istawā** (s'élever, s'établir), en écartant les interprétations qui le détournent vers un sens figuré de domination pure, tout en s'abstenant, à la suite de Mālik, de décrire le comment de cet établissement.",
      },
      { type: "h2", text: "Les limites reconnues de l'ouvrage" },
      {
        type: "p",
        text: "La rigueur méthodologique d'al-Ṭabarī n'exclut pas la présence, en son sein, de récits israélites rapportés avec leur chaîne mais dont l'authenticité reste fragile, ainsi que quelques chaînes affaiblies par des transmetteurs peu fiables. **Cela ne discrédite en rien l'ouvrage** : cela invite le lecteur, comme pour toute compilation ancienne, à appliquer la méthode critique du hadīth à chaque chaîne rapportée, plutôt qu'à recevoir en bloc tout ce qui y figure.",
      },
      {
        type: "objection",
        objection: "Si le tafsīr d'al-Ṭabarī contient des chaînes faibles, ne vaut-il pas mieux l'éviter au profit d'ouvrages plus tardifs et déjà « nettoyés » ?",
        reponse:
          "Non : la présence de chaînes faibles, clairement identifiables par le spécialiste, ne retire rien à la valeur du travail de collecte lui-même. **Ibn Kathīr et al-Saʿdī, plus tardifs, se sont largement appuyés sur le matériau rassemblé par al-Ṭabarī**, en affinant le tri critique. Éviter la source première reviendrait à se priver de la matière sur laquelle repose tout le tafsīr ultérieur par la tradition.",
        suite: "La bonne pratique consiste à lire al-Ṭabarī en gardant à l'esprit les critères de tri déjà exposés pour les isrāʾīliyyāt et pour l'authentification des chaînes.",
      },
      { type: "h2", text: "Pourquoi ce modèle reste une référence pour l'exégète salafi" },
      {
        type: "p",
        text: "Trois traits font du Jāmiʿ al-bayān un modèle méthodologique durable : la **transparence** de la transmission, qui permet toujours de remonter à la source ; la **fidélité** au sens des premiers commentateurs, sans détournement rationaliste ; et le **discernement** final de l'auteur, qui ne se contente pas d'empiler les avis mais les confronte et choisit, en toute rigueur, celui que la langue et le contexte imposent.",
      },
      {
        type: "lexique",
        root: "ب ي ن",
        transliteration: "b-y-n",
        sense:
          "Être clair, apparent, manifeste. Le titre même de l'ouvrage, Jāmiʿ al-bayān, dit son ambition : **rassembler la clarté** de l'interprétation, plutôt que de la produire par pure spéculation.",
        derives: [
          { word: "bayān", arabic: "بَيَان", gloss: "La clarté, l'exposition manifeste du sens." },
          { word: "jāmiʿ", arabic: "جَامِع", gloss: "Celui qui rassemble : ici, la collecte exhaustive des avis transmis." },
          { word: "taʾwīl", arabic: "تَأْوِيل", gloss: "L'interprétation, terme employé par al-Ṭabarī dans le titre complet de son œuvre." },
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Al-Ṭabarī n'est pas un simple collectionneur d'opinions anciennes : c'est un critique méthodique, qui rapporte avec exactitude, distingue les divergences réelles des divergences apparentes, et tranche avec des arguments de langue et de contexte plutôt que par préférence théologique. **Ibn Taymiyya et al-Dhahabī s'accordent à voir en lui le sommet du tafsīr par la tradition transmise**, un socle sur lequel toute la science exégétique ultérieure, jusqu'à Ibn Kathīr, continuera de s'appuyer. Le lire aujourd'hui, avec la même vigilance critique qu'il appliquait lui-même aux chaînes de transmission, reste l'une des voies les plus sûres d'entrer dans l'exégèse islamique authentique.",
      },
    ],
  },
];
