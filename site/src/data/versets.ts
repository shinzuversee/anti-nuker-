import type { Post } from "./content";

type VerseSeed = {
  slug: string;
  ref: string;
  surah: string;
  arabic: string;
  french: string;
  category: string;
  tags: string[];
  angle: string;
  axes: string[];
  date: string;
};

const seeds: VerseSeed[] = [
  // ───────────── Herméneutique ─────────────
  {
    slug: "coran-2-26-la-parabole-du-moustique",
    ref: "Cor. 2/26",
    surah: "Sourate al-Baqara",
    arabic:
      "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَن يَضْرِبَ مَثَلًا مَّا بَعُوضَةً فَمَا فَوْقَهَا",
    french:
      "Allāh ne se gêne pas de proposer en parabole un moustique, ou quoi que ce soit au-dessus.",
    category: "Herméneutique",
    tags: ["parabole", "langage", "tafsir"],
    angle:
      "Pourquoi le Coran choisit-il des images minuscules pour dire des vérités immenses ? Une exégèse du régime de la parabole.",
    axes: [
      "Le sens de « ḍaraba mathalan » dans l'usage coranique et son enracinement dans la rhétorique arabe.",
      "La fonction pédagogique du petit : le moustique comme épreuve du cœur autant que comme image.",
      "Ce que la suite du verset dit du critère de réception : la même parabole égare les uns et guide les autres.",
    ],
    date: "2026-07-20",
  },
  {
    slug: "coran-16-44-la-fonction-du-bayan",
    ref: "Cor. 16/44",
    surah: "Sourate al-Naḥl",
    arabic:
      "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ",
    french:
      "Et Nous avons fait descendre vers toi le Rappel, afin que tu explicites aux gens ce qui est descendu vers eux.",
    category: "Herméneutique",
    tags: ["bayan", "sunna", "méthode"],
    angle:
      "Le verset qui fonde l'idée même d'explicitation : le texte appelle un explicitant, et cet explicitant est prophétique.",
    axes: [
      "Les degrés du bayān chez al-Shāfiʿī et leur relecture dans l'école mālikite.",
      "Explicitation par la parole, par l'acte, par le silence approbateur.",
      "Conséquence méthodologique : la limite d'une lecture qui prétendrait se passer de la tradition.",
    ],
    date: "2026-07-14",
  },
  {
    slug: "coran-47-24-des-verrous-sur-les-coeurs",
    ref: "Cor. 47/24",
    surah: "Sourate Muḥammad",
    arabic: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا",
    french:
      "Ne méditent-ils donc pas le Coran ? Ou bien y a-t-il des verrous sur leurs cœurs ?",
    category: "Herméneutique",
    tags: ["tadabbur", "coeur", "lecture"],
    angle:
      "Le tadabbur n'est pas une performance intellectuelle : c'est un état du cœur que le verset décrit en creux.",
    axes: [
      "Racine d-b-r : lire ce qui vient « derrière », l'issue et la suite d'une parole.",
      "L'obstacle n'est pas cognitif mais moral — la théorie des voiles chez les commentateurs.",
      "Comment une pratique régulière de tadabbur se construit concrètement, verset par verset.",
    ],
    date: "2026-07-08",
  },
  {
    slug: "coran-4-82-labsence-de-contradiction",
    ref: "Cor. 4/82",
    surah: "Sourate al-Nisāʾ",
    arabic:
      "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا",
    french:
      "Ne méditent-ils pas le Coran ? S'il provenait d'un autre qu'Allāh, ils y trouveraient certes de nombreuses contradictions.",
    category: "Herméneutique",
    tags: ["cohérence", "ikhtilaf", "argument"],
    angle:
      "Un argument de cohérence interne : que signifie exactement « ikhtilāf » ici, et que prouve son absence ?",
    axes: [
      "Différence entre variation de formulation et contradiction logique.",
      "L'argument est-il empirique, rationnel, ou les deux ?",
      "Traiter honnêtement les cas classiquement présentés comme contradictoires.",
    ],
    date: "2026-07-02",
  },
  {
    slug: "coran-39-23-un-livre-aux-repetitions-jumelees",
    ref: "Cor. 39/23",
    surah: "Sourate al-Zumar",
    arabic:
      "اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُّتَشَابِهًا مَّثَانِيَ",
    french:
      "Allāh a fait descendre le plus beau des discours : un Livre dont les parties se ressemblent et se répondent deux à deux.",
    category: "Herméneutique",
    tags: ["mathani", "structure", "rhétorique"],
    angle:
      "Ici « mutashābih » ne signifie pas ambigu mais harmonieux. Un déplacement de sens décisif pour la méthode.",
    axes: [
      "Deux emplois du même mot en 3/7 et 39/23 : leçon de lexicographie coranique.",
      "Les mathānī et la structure en miroir de certaines sourates.",
      "Ce que la structure apporte à l'interprétation d'un passage isolé.",
    ],
    date: "2026-06-26",
  },
  {
    slug: "coran-11-1-versets-consolides-puis-detailles",
    ref: "Cor. 11/1",
    surah: "Sourate Hūd",
    arabic:
      "كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ",
    french:
      "Un Livre dont les versets ont été consolidés puis détaillés, de la part d'un Sage, parfaitement Informé.",
    category: "Herméneutique",
    tags: ["ihkam", "tafsil", "usul"],
    angle:
      "Consolidation puis détail : le Coran décrit sa propre méthode de descente et, par là, sa méthode de lecture.",
    axes: [
      "Iḥkām et tafṣīl comme deux moments d'un même acte de révélation.",
      "Articulation avec le global (mujmal) et le précisé (mubayyan) en uṣūl.",
      "Application : lire une prescription générale à la lumière de son détail ultérieur.",
    ],
    date: "2026-06-20",
  },
  {
    slug: "coran-12-2-un-coran-arabe",
    ref: "Cor. 12/2",
    surah: "Sourate Yūsuf",
    arabic: "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ",
    french:
      "Nous l'avons fait descendre en un Coran arabe, afin que vous raisonniez.",
    category: "Herméneutique",
    tags: ["langue", "traduction", "aql"],
    angle:
      "L'arabité du Coran est-elle un accident historique ou une donnée herméneutique ? Et que devient alors la traduction ?",
    axes: [
      "Le lien posé par le verset entre langue et intelligibilité.",
      "Statut de la traduction : interprétation du sens, jamais Coran.",
      "Les conséquences pratiques pour un lecteur francophone sérieux.",
    ],
    date: "2026-06-14",
  },
  {
    slug: "coran-54-17-un-coran-rendu-facile",
    ref: "Cor. 54/17",
    surah: "Sourate al-Qamar",
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    french:
      "Nous avons rendu le Coran facile pour le rappel. Y a-t-il quelqu'un pour s'en souvenir ?",
    category: "Herméneutique",
    tags: ["facilité", "memorisation", "dhikr"],
    angle:
      "Facilité pour le rappel — non pas facilité de tout comprendre. Une distinction que le verset impose.",
    axes: [
      "La répétition du verset dans la sourate et sa fonction rythmique.",
      "Facilité de mémorisation, facilité d'accès, difficulté de la science : trois plans distincts.",
      "Ce que cela implique pour l'humilité de l'exégète.",
    ],
    date: "2026-06-08",
  },

  // ───────────── Théologie ─────────────
  {
    slug: "coran-112-1-4-la-sourate-de-lunicite",
    ref: "Cor. 112/1-4",
    surah: "Sourate al-Ikhlāṣ",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    french:
      "Dis : Il est Allāh, Unique. Allāh, le Recours absolu. Il n'a pas engendré et n'a pas été engendré, et nul ne Lui est égal.",
    category: "Théologie",
    tags: ["tawhid", "aqida", "ikhlas"],
    angle:
      "Quatre versets qui condensent la doctrine de l'unicité en excluant, une à une, toutes les formes d'association.",
    axes: [
      "Aḥad et wāḥid : la nuance que les traductions effacent.",
      "Le sens de ṣamad chez les anciens : ce qui n'a pas de creux, ce vers quoi tout se tourne.",
      "La négation comme méthode théologique : dire Dieu en écartant l'inadéquat.",
    ],
    date: "2026-07-24",
  },
  {
    slug: "coran-42-11-rien-ne-lui-ressemble",
    ref: "Cor. 42/11",
    surah: "Sourate al-Shūrā",
    arabic: "لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",
    french:
      "Rien ne Lui est semblable, et Il est l'Audient, le Clairvoyant.",
    category: "Théologie",
    tags: ["tanzih", "attributs", "aqida"],
    angle:
      "Le verset-clef de tout discours sur les attributs : il affirme et écarte dans la même respiration.",
    axes: [
      "La double négation apparente de « ka-mithlihi » et ses lectures classiques.",
      "Affirmation des attributs sans assimilation (tashbīh) ni négation (taʿṭīl).",
      "La voie des anciens (tafwīḍ) et celle de l'interprétation (taʾwīl) : différend réel ou terminologique ?",
    ],
    date: "2026-07-18",
  },
  {
    slug: "coran-2-255-le-verset-du-trone",
    ref: "Cor. 2/255",
    surah: "Sourate al-Baqara",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    french:
      "Allāh, point de divinité si ce n'est Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent.",
    category: "Théologie",
    tags: ["ayat al-kursi", "attributs", "tawhid"],
    angle:
      "Le plus grand verset du Coran : une exégèse phrase par phrase de sa théologie du soutien du monde.",
    axes: [
      "Al-Ḥayy al-Qayyūm : les deux noms dont dérivent, selon plusieurs savants, tous les autres.",
      "La négation du sommeil comme réfutation d'un dieu absent ou intermittent.",
      "Le Kursī : sens propre, sens figuré, et la prudence des anciens.",
    ],
    date: "2026-07-12",
  },
  {
    slug: "coran-24-35-lumiere-des-cieux-et-de-la-terre",
    ref: "Cor. 24/35",
    surah: "Sourate al-Nūr",
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    french: "Allāh est la Lumière des cieux et de la terre.",
    category: "Théologie",
    tags: ["nur", "métaphore", "attributs"],
    angle:
      "Un verset où la théologie touche à la métaphysique de la lumière — et où le sens propre doit être manié avec soin.",
    axes: [
      "Lumière comme substance, ou comme ce par quoi tout devient visible ?",
      "La parabole de la niche : lecture littérale et lectures symboliques.",
      "Ce que la prudence mālikite retient de ce passage.",
    ],
    date: "2026-07-06",
  },
  {
    slug: "coran-20-5-le-tout-misericordieux-sur-le-trone",
    ref: "Cor. 20/5",
    surah: "Sourate Ṭā-Hā",
    arabic: "الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ",
    french: "Le Tout Miséricordieux s'est établi sur le Trône.",
    category: "Théologie",
    tags: ["istiwa", "attributs", "malik"],
    angle:
      "La parole célèbre de l'imām Mālik sur l'istiwāʾ, et pourquoi elle reste la formulation la plus sûre.",
    axes: [
      "« L'istiwāʾ est connu, le comment est inconnu, y croire est obligatoire, s'en enquérir est innovation ».",
      "Pourquoi le nom al-Raḥmān précède ici, et non un nom de puissance.",
      "Les dérives symétriques : anthropomorphisme et vidage du sens.",
    ],
    date: "2026-06-30",
  },
  {
    slug: "coran-6-103-les-regards-ne-latteignent-pas",
    ref: "Cor. 6/103",
    surah: "Sourate al-Anʿām",
    arabic: "لَّا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ",
    french:
      "Les regards ne peuvent L'atteindre, alors qu'Il atteint tous les regards.",
    category: "Théologie",
    tags: ["ruya", "vision", "aqida"],
    angle:
      "Vision de Dieu dans l'au-delà : comment concilier ce verset avec ceux qui annoncent des visages rayonnants tournés vers leur Seigneur ?",
    axes: [
      "Idrāk (saisir, cerner) n'est pas ruʾya (voir) : la clef lexicale.",
      "Le débat classique et la position majoritaire des gens de la sunna.",
      "Les enjeux spirituels de la question, au-delà de la controverse.",
    ],
    date: "2026-06-24",
  },
  {
    slug: "coran-57-3-le-premier-et-le-dernier",
    ref: "Cor. 57/3",
    surah: "Sourate al-Ḥadīd",
    arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ",
    french:
      "Il est le Premier et le Dernier, l'Apparent et le Caché.",
    category: "Théologie",
    tags: ["noms divins", "temps", "aqida"],
    angle:
      "Quatre noms en quatre mots : une théologie du temps et de la présence tenue en une seule phrase.",
    axes: [
      "Antériorité sans commencement, postériorité sans fin : ce que cela exclut.",
      "Ẓāhir et bāṭin : manifeste par Ses signes, dérobé à la saisie.",
      "Le commentaire prophétique de ce verset et son usage dans l'invocation.",
    ],
    date: "2026-06-18",
  },
  {
    slug: "coran-7-180-les-plus-beaux-noms",
    ref: "Cor. 7/180",
    surah: "Sourate al-Aʿrāf",
    arabic: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا",
    french:
      "À Allāh appartiennent les plus beaux noms : invoquez-Le par eux.",
    category: "Théologie",
    tags: ["asma", "invocation", "aqida"],
    angle:
      "Les noms ne sont pas une liste à mémoriser : le verset en fait un mode d'adresse et une éducation du cœur.",
    axes: [
      "Ḥusnā : la beauté comme perfection, non comme ornement.",
      "La question de la limitation à quatre-vingt-dix-neuf noms.",
      "Le ilḥād dans les noms : ce que le verset interdit juste après.",
    ],
    date: "2026-06-12",
  },

  // ───────────── Uṣūl al-tafsīr ─────────────
  {
    slug: "coran-2-106-nous-nabrogeons-un-verset",
    ref: "Cor. 2/106",
    surah: "Sourate al-Baqara",
    arabic:
      "مَا نَنسَخْ مِنْ آيَةٍ أَوْ نُنسِهَا نَأْتِ بِخَيْرٍ مِّنْهَا أَوْ مِثْلِهَا",
    french:
      "Si Nous abrogeons un verset ou le faisons oublier, Nous en apportons un meilleur, ou un semblable.",
    category: "Uṣūl al-tafsīr",
    tags: ["naskh", "usul", "loi"],
    angle:
      "Le verset socle du naskh : que désigne exactement « āya » ici, et de quelle sorte de remplacement parle-t-on ?",
    axes: [
      "Āya : verset, signe, ou prescription antérieure ?",
      "L'échelle du naskh chez les anciens et son rétrécissement chez les modernes.",
      "Naskh et gradation pédagogique : deux notions à ne pas confondre.",
    ],
    date: "2026-07-22",
  },
  {
    slug: "coran-16-101-remplacer-un-verset-par-un-autre",
    ref: "Cor. 16/101",
    surah: "Sourate al-Naḥl",
    arabic:
      "وَإِذَا بَدَّلْنَا آيَةً مَّكَانَ آيَةٍ ۙ وَاللَّهُ أَعْلَمُ بِمَا يُنَزِّلُ",
    french:
      "Et lorsque Nous remplaçons un verset par un autre — et Allāh sait mieux ce qu'Il fait descendre.",
    category: "Uṣūl al-tafsīr",
    tags: ["naskh", "objection", "usul"],
    angle:
      "Le verset répond à une objection ancienne : un Dieu qui change d'avis ? L'exégèse doit y répondre précisément.",
    axes: [
      "Différence entre changement dans la science divine et changement dans la prescription.",
      "L'accusation d'invention (iftirāʾ) et la réponse coranique.",
      "Ce que le naskh dit de la temporalité de la Loi.",
    ],
    date: "2026-07-16",
  },
  {
    slug: "coran-5-3-jai-parachieve-votre-religion",
    ref: "Cor. 5/3",
    surah: "Sourate al-Māʾida",
    arabic: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي",
    french:
      "Aujourd'hui, J'ai parachevé pour vous votre religion et J'ai accompli sur vous Mon bienfait.",
    category: "Uṣūl al-tafsīr",
    tags: ["kamal", "innovation", "usul"],
    angle:
      "Complétude de la religion : ce que le verset ferme, et ce qu'il laisse volontairement ouvert à l'ijtihād.",
    axes: [
      "Kamāl des fondements et ouverture des applications.",
      "Le verset est-il un argument contre toute nouveauté ? Nuances mālikites.",
      "L'occasion de descente et le témoignage de ʿUmar.",
    ],
    date: "2026-07-10",
  },
  {
    slug: "coran-6-38-nous-navons-rien-omis",
    ref: "Cor. 6/38",
    surah: "Sourate al-Anʿām",
    arabic: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ",
    french: "Nous n'avons rien omis dans le Livre.",
    category: "Uṣūl al-tafsīr",
    tags: ["exhaustivité", "usul", "sunna"],
    angle:
      "« Rien omis » : de quel Livre parle-t-on, et en quel sens l'exhaustivité est-elle affirmée ?",
    axes: [
      "Al-Kitāb : le Coran, ou la Tablette préservée ? Les deux lectures des anciens.",
      "Exhaustivité des principes et non des cas d'espèce.",
      "Pourquoi ce verset ne dispense pas de la sunna, ni du qiyās.",
    ],
    date: "2026-07-04",
  },
  {
    slug: "coran-59-7-ce-que-le-messager-vous-donne",
    ref: "Cor. 59/7",
    surah: "Sourate al-Ḥashr",
    arabic: "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا",
    french:
      "Prenez ce que le Messager vous donne, et abstenez-vous de ce qu'il vous interdit.",
    category: "Uṣūl al-tafsīr",
    tags: ["sunna", "autorité", "usul"],
    angle:
      "Un verset descendu dans un contexte de butin, devenu un fondement général de l'autorité de la sunna. Comment se justifie ce passage ?",
    axes: [
      "La règle : la portée tient au terme général, non à la cause particulière.",
      "Les usages du verset chez les uṣūlistes.",
      "Limites : distinguer la prescription religieuse de la décision de circonstance.",
    ],
    date: "2026-06-28",
  },
  {
    slug: "coran-4-59-obeissez-a-allah-et-au-messager",
    ref: "Cor. 4/59",
    surah: "Sourate al-Nisāʾ",
    arabic:
      "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
    french:
      "Obéissez à Allāh, obéissez au Messager et à ceux d'entre vous qui détiennent le commandement.",
    category: "Uṣūl al-tafsīr",
    tags: ["autorité", "ijtihad", "usul"],
    angle:
      "Trois obéissances, deux verbes : la grammaire du verset porte à elle seule une doctrine de l'autorité.",
    axes: [
      "Pourquoi « aṭīʿū » est répété pour le Messager et omis pour ūlū al-amr.",
      "Qui sont les ūlū al-amr : gouvernants, savants, ou les deux ?",
      "La clause de renvoi au Coran et à la sunna en cas de litige.",
    ],
    date: "2026-06-22",
  },
  {
    slug: "coran-16-43-interrogez-les-gens-du-rappel",
    ref: "Cor. 16/43",
    surah: "Sourate al-Naḥl",
    arabic: "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",
    french:
      "Interrogez les gens du Rappel, si vous ne savez pas.",
    category: "Uṣūl al-tafsīr",
    tags: ["taqlid", "savants", "usul"],
    angle:
      "Le fondement coranique du recours au savant — et ses conditions, souvent oubliées dans les deux sens.",
    axes: [
      "Qui sont les « ahl al-dhikr » selon le contexte de descente et selon l'usage postérieur.",
      "Taqlīd du non-savant : obligation, permission, ou faiblesse ?",
      "Comment choisir à qui l'on demande : critères classiques.",
    ],
    date: "2026-06-16",
  },
  {
    slug: "coran-17-36-ne-poursuis-pas-ce-dont-tu-nas-nulle-science",
    ref: "Cor. 17/36",
    surah: "Sourate al-Isrāʾ",
    arabic: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ",
    french: "Ne poursuis pas ce dont tu n'as aucune science.",
    category: "Uṣūl al-tafsīr",
    tags: ["ilm", "éthique", "tafsir bi-l-ray"],
    angle:
      "L'interdit qui encadre toute exégèse : parler du Coran sans science est visé en premier par ce verset.",
    axes: [
      "Qafā : suivre une trace sans en connaître l'origine.",
      "Le tafsīr bi-l-raʾy blâmé et le tafsīr bi-l-raʾy recevable.",
      "La responsabilité de l'ouïe, de la vue et du cœur mentionnée dans la suite du verset.",
    ],
    date: "2026-06-10",
  },

  // ───────────── Contexte ─────────────
  {
    slug: "coran-2-256-nulle-contrainte-en-religion",
    ref: "Cor. 2/256",
    surah: "Sourate al-Baqara",
    arabic: "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ",
    french:
      "Nulle contrainte en religion : la voie droite s'est distinguée de l'égarement.",
    category: "Contexte",
    tags: ["liberté", "asbab", "naskh"],
    angle:
      "Le verset le plus cité et l'un des plus mal cités : son occasion de descente change tout à sa portée.",
    axes: [
      "Les récits d'occasion rapportés par al-Ṭabarī et Abū Dāwūd.",
      "La thèse de l'abrogation par le verset de l'épée : examen critique.",
      "Portée juridique réelle dans la tradition mālikite.",
    ],
    date: "2026-07-26",
  },
  {
    slug: "coran-9-5-le-verset-dit-de-lepee",
    ref: "Cor. 9/5",
    surah: "Sourate al-Tawba",
    arabic: "فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ فَاقْتُلُوا الْمُشْرِكِينَ حَيْثُ وَجَدتُّمُوهُمْ",
    french:
      "Une fois écoulés les mois sacrés, tuez les associateurs où que vous les trouviez.",
    category: "Contexte",
    tags: ["asbab", "guerre", "polémique"],
    angle:
      "Le verset le plus instrumentalisé du Coran. Le lire sans son début, sa fin, ni son contexte, c'est le falsifier.",
    axes: [
      "Le traité rompu : à qui s'adresse précisément l'ordre ?",
      "La suite immédiate du verset et le verset 6 sur la protection demandée.",
      "L'usage polémique moderne, des deux côtés, et la réponse des exégètes.",
    ],
    date: "2026-07-19",
  },
  {
    slug: "coran-8-61-sils-inclinent-a-la-paix",
    ref: "Cor. 8/61",
    surah: "Sourate al-Anfāl",
    arabic: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ",
    french:
      "S'ils inclinent à la paix, incline vers elle et place ta confiance en Allāh.",
    category: "Contexte",
    tags: ["paix", "traité", "sira"],
    angle:
      "La paix comme réponse obligée dès qu'elle est offerte : contexte de Badr et suites juridiques.",
    axes: [
      "Janaḥa : l'image de l'aile qui s'incline, et sa charge sémantique.",
      "Articulation avec les versets de combat : règle et exception.",
      "Al-Ḥudaybiyya comme mise en pratique prophétique.",
    ],
    date: "2026-07-13",
  },
  {
    slug: "coran-22-39-autorisation-est-donnee",
    ref: "Cor. 22/39",
    surah: "Sourate al-Ḥajj",
    arabic: "أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُمْ ظُلِمُوا",
    french:
      "Autorisation est donnée à ceux qui sont combattus, parce qu'ils ont été lésés.",
    category: "Contexte",
    tags: ["asbab", "légitime défense", "sira"],
    angle:
      "Le premier verset autorisant le combat : sa formulation défensive est un fait exégétique majeur.",
    axes: [
      "La forme passive « yuqātalūna » : on les combat d'abord.",
      "Treize années de patience mecquoise comme arrière-plan.",
      "La justification donnée dans la suite : protéger les lieux de culte de tous.",
    ],
    date: "2026-07-07",
  },
  {
    slug: "coran-24-11-le-recit-de-la-calomnie",
    ref: "Cor. 24/11",
    surah: "Sourate al-Nūr",
    arabic: "إِنَّ الَّذِينَ جَاءُوا بِالْإِفْكِ عُصْبَةٌ مِّنكُمْ",
    french:
      "Ceux qui sont venus avec la calomnie sont un groupe parmi vous.",
    category: "Contexte",
    tags: ["ifk", "asbab", "éthique"],
    angle:
      "L'affaire du ifk : un événement intime devenu législation publique sur la rumeur et la preuve.",
    axes: [
      "Le récit complet et les personnes impliquées.",
      "« Ne le tenez pas pour un mal » : le retournement coranique de l'épreuve.",
      "Les règles tirées du passage : quatre témoins, présomption de bien, interdiction de relayer.",
    ],
    date: "2026-07-01",
  },
  {
    slug: "coran-33-37-le-verset-de-zayd",
    ref: "Cor. 33/37",
    surah: "Sourate al-Aḥzāb",
    arabic: "وَتُخْفِي فِي نَفْسِكَ مَا اللَّهُ مُبْدِيهِ وَتَخْشَى النَّاسَ",
    french:
      "Tu cachais en toi-même ce qu'Allāh allait divulguer, et tu craignais les gens.",
    category: "Contexte",
    tags: ["asbab", "adoption", "sira"],
    angle:
      "Un verset difficile, souvent attaqué : le contexte de l'abolition de l'adoption filiative en éclaire l'enjeu.",
    axes: [
      "Ce que « ce qu'Allāh allait divulguer » désigne réellement selon les exégètes.",
      "La rupture avec la coutume préislamique du tabannī.",
      "Répondre honnêtement aux lectures orientalistes du passage.",
    ],
    date: "2026-06-25",
  },
  {
    slug: "coran-80-1-2-il-sest-renfrogne",
    ref: "Cor. 80/1-2",
    surah: "Sourate ʿAbasa",
    arabic: "عَبَسَ وَتَوَلَّىٰ ۝ أَن جَاءَهُ الْأَعْمَىٰ",
    french:
      "Il s'est renfrogné et s'est détourné, parce que l'aveugle est venu à lui.",
    category: "Contexte",
    tags: ["asbab", "éthique", "sira"],
    angle:
      "Un reproche divin adressé au Prophète : ce que ce passage prouve de la véracité du texte et de la hiérarchie coranique des valeurs.",
    axes: [
      "Ibn Umm Maktūm et les notables de Quraysh : la scène reconstituée.",
      "Le passage de la troisième à la deuxième personne et son effet.",
      "La leçon sociale : qui mérite l'attention du savant ?",
    ],
    date: "2026-06-19",
  },
  {
    slug: "coran-60-8-allah-ne-vous-defend-pas",
    ref: "Cor. 60/8",
    surah: "Sourate al-Mumtaḥana",
    arabic:
      "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ",
    french:
      "Allāh ne vous défend pas d'être bons et équitables envers ceux qui ne vous ont pas combattus pour la religion.",
    category: "Contexte",
    tags: ["coexistence", "birr", "asbab"],
    angle:
      "Le verset qui règle la relation avec le non-musulman pacifique : birr et qisṭ, deux termes forts.",
    axes: [
      "L'occasion de descente : Asmāʾ bint Abī Bakr et sa mère.",
      "Birr : le même mot que pour les parents. Portée du choix lexical.",
      "Application contemporaine dans un contexte français.",
    ],
    date: "2026-06-13",
  },

  // ───────────── Sciences coraniques ─────────────
  {
    slug: "coran-15-9-cest-nous-qui-avons-fait-descendre-le-rappel",
    ref: "Cor. 15/9",
    surah: "Sourate al-Ḥijr",
    arabic: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    french:
      "C'est Nous qui avons fait descendre le Rappel, et c'est Nous qui en sommes les gardiens.",
    category: "Sciences coraniques",
    tags: ["préservation", "manuscrits", "tanzil"],
    angle:
      "Promesse de préservation : de quoi parle-t-elle exactement — de la lettre, du sens, ou de la communauté qui le porte ?",
    axes: [
      "Le dhikr : Coran, ou message au sens large ?",
      "Transmission orale et transmission écrite comme réalisation de la promesse.",
      "Ce que les manuscrits anciens confirment, et ce qu'ils ne prouvent pas.",
    ],
    date: "2026-07-25",
  },
  {
    slug: "coran-97-1-la-nuit-du-destin",
    ref: "Cor. 97/1",
    surah: "Sourate al-Qadr",
    arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
    french:
      "Nous l'avons fait descendre lors de la nuit du Destin.",
    category: "Sciences coraniques",
    tags: ["nuzul", "qadr", "ramadan"],
    angle:
      "Comment une révélation étalée sur vingt-trois ans peut-elle être descendue « en une nuit » ? La théorie des deux descentes.",
    axes: [
      "Descente globale vers le ciel de ce monde, descente graduelle vers le Prophète.",
      "Les sources de cette distinction chez Ibn ʿAbbās.",
      "Ce que « qadr » signifie : mesure, valeur, décret.",
    ],
    date: "2026-07-17",
  },
  {
    slug: "coran-2-185-le-mois-de-ramadan",
    ref: "Cor. 2/185",
    surah: "Sourate al-Baqara",
    arabic:
      "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ",
    french:
      "Le mois de Ramaḍān au cours duquel le Coran a été descendu, guidée pour les gens.",
    category: "Sciences coraniques",
    tags: ["nuzul", "ramadan", "huda"],
    angle:
      "Le lien structurel entre le jeûne et la révélation : le mois est défini par le Livre avant de l'être par l'abstinence.",
    axes: [
      "Hudan li-l-nās, puis bayyināt : trois degrés de guidance dans un seul verset.",
      "Articulation avec 97/1 sur la nuit du Destin.",
      "Le lien pratique entre jeûne et lecture assidue du Coran.",
    ],
    date: "2026-07-11",
  },
  {
    slug: "coran-25-32-pourquoi-pas-en-une-seule-fois",
    ref: "Cor. 25/32",
    surah: "Sourate al-Furqān",
    arabic:
      "وَقَالَ الَّذِينَ كَفَرُوا لَوْلَا نُزِّلَ عَلَيْهِ الْقُرْآنُ جُمْلَةً وَاحِدَةً",
    french:
      "Ceux qui ont mécru disent : Pourquoi le Coran ne lui a-t-il pas été descendu en une seule fois ?",
    category: "Sciences coraniques",
    tags: ["tanjim", "gradation", "nuzul"],
    angle:
      "La révélation fragmentée n'est pas un défaut : le verset en fait explicitement une pédagogie du cœur.",
    axes: [
      "« Pour raffermir ton cœur » : la fonction psychologique de la gradation.",
      "Tartīl et tanjīm : deux notions liées.",
      "Conséquence exégétique : lire un verset avec sa date, quand elle est connue.",
    ],
    date: "2026-07-05",
  },
  {
    slug: "coran-75-16-17-ne-remue-pas-ta-langue",
    ref: "Cor. 75/16-17",
    surah: "Sourate al-Qiyāma",
    arabic:
      "لَا تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ ۝ إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ",
    french:
      "Ne remue pas ta langue pour hâter sa récitation. À Nous incombe son rassemblement et sa récitation.",
    category: "Sciences coraniques",
    tags: ["jam", "wahy", "réception"],
    angle:
      "Un verset qui décrit de l'intérieur l'expérience de la réception du wahy — et qui fonde la notion de « jamʿ ».",
    axes: [
      "L'empressement du Prophète et sa correction douce.",
      "Jamʿ : rassemblement dans la poitrine avant rassemblement dans le muṣḥaf.",
      "Ce que le passage implique pour l'histoire de la fixation du texte.",
    ],
    date: "2026-06-29",
  },
  {
    slug: "coran-26-192-195-une-descente-du-seigneur-des-mondes",
    ref: "Cor. 26/192-195",
    surah: "Sourate al-Shuʿarāʾ",
    arabic:
      "وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ ۝ نَزَلَ بِهِ الرُّوحُ الْأَمِينُ ۝ عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ",
    french:
      "Ceci est une descente du Seigneur des mondes. L'Esprit fidèle est descendu avec cela sur ton cœur, pour que tu sois de ceux qui avertissent.",
    category: "Sciences coraniques",
    tags: ["wahy", "jibril", "tanzil"],
    angle:
      "La chaîne de transmission de la révélation, énoncée par le Coran lui-même : source, intermédiaire, destinataire, langue.",
    axes: [
      "« Sur ton cœur » : que dit ce choix du lieu de la réception ?",
      "Al-Rūḥ al-Amīn et la fiabilité de la transmission.",
      "La mention finale de la langue arabe claire et son rôle argumentatif.",
    ],
    date: "2026-06-23",
  },
  {
    slug: "coran-17-88-le-defi-de-linimitabilite",
    ref: "Cor. 17/88",
    surah: "Sourate al-Isrāʾ",
    arabic:
      "قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ",
    french:
      "Dis : Si les hommes et les djinns s'unissaient pour produire un Coran semblable, ils n'y parviendraient pas.",
    category: "Sciences coraniques",
    tags: ["ijaz", "défi", "rhétorique"],
    angle:
      "Le iʿjāz : un défi littéraire, ou davantage ? Histoire d'une doctrine et de ses formulations concurrentes.",
    axes: [
      "La gradation des défis dans le Coran, de la sourate entière au verset.",
      "Ṣarfa contre iʿjāz intrinsèque : le débat classique.",
      "Ce qu'un lecteur non arabophone peut légitimement en percevoir.",
    ],
    date: "2026-06-17",
  },
  {
    slug: "coran-73-4-recite-le-coran-avec-tartil",
    ref: "Cor. 73/4",
    surah: "Sourate al-Muzzammil",
    arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
    french: "Et récite le Coran avec un rythme posé.",
    category: "Sciences coraniques",
    tags: ["tajwid", "tartil", "récitation"],
    angle:
      "Le fondement coranique du tajwīd : un ordre bref dont toute une science est sortie.",
    axes: [
      "Tartīl : ordonner, espacer, poser — le sens lexical avant le sens technique.",
      "De l'ordre coranique aux règles codifiées : légitimité et limites.",
      "Le lien entre lenteur de la récitation et compréhension.",
    ],
    date: "2026-06-11",
  },

  // ───────────── Réflexion ─────────────
  {
    slug: "coran-94-5-6-avec-la-difficulte-une-facilite",
    ref: "Cor. 94/5-6",
    surah: "Sourate al-Sharḥ",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    french:
      "Certes, avec la difficulté est une facilité. Certes, avec la difficulté est une facilité.",
    category: "Réflexion",
    tags: ["épreuve", "espoir", "grammaire"],
    angle:
      "Une répétition qui n'en est pas une : l'article défini et l'indéfini portent ici toute la consolation.",
    axes: [
      "« Al-ʿusr » défini, « yusran » indéfini : la lecture d'Ibn ʿAbbās.",
      "Maʿa et non baʿda : la facilité accompagne, elle ne succède pas seulement.",
      "Usage spirituel du verset sans tomber dans l'optimisme facile.",
    ],
    date: "2026-07-23",
  },
  {
    slug: "coran-13-28-les-coeurs-sapaisent",
    ref: "Cor. 13/28",
    surah: "Sourate al-Raʿd",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    french:
      "N'est-ce point par le rappel d'Allāh que les cœurs s'apaisent ?",
    category: "Réflexion",
    tags: ["dhikr", "coeur", "spiritualité"],
    angle:
      "Une thérapeutique du cœur formulée en cinq mots. Encore faut-il savoir ce que « dhikr » recouvre.",
    axes: [
      "Dhikr : invocation, Coran, ou présence attentive ?",
      "Iṭmiʾnān : la stabilité, distincte de l'euphorie.",
      "Pourquoi l'apaisement n'est pas promis à qui récite sans conscience.",
    ],
    date: "2026-07-15",
  },
  {
    slug: "coran-2-286-allah-nimpose-a-aucune-ame",
    ref: "Cor. 2/286",
    surah: "Sourate al-Baqara",
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    french:
      "Allāh n'impose à aucune âme une charge supérieure à sa capacité.",
    category: "Réflexion",
    tags: ["taklif", "capacité", "usul"],
    angle:
      "Principe théologique et principe juridique à la fois : la mesure comme signature de la Loi.",
    axes: [
      "Wusʿ : capacité effective, non capacité maximale.",
      "Application en fiqh : mashaqqa, rukhṣa, et allègements mālikites.",
      "Lecture spirituelle : le remède contre le scrupule excessif.",
    ],
    date: "2026-07-09",
  },
  {
    slug: "coran-39-53-ne-desesperez-pas",
    ref: "Cor. 39/53",
    surah: "Sourate al-Zumar",
    arabic:
      "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    french:
      "Ne désespérez pas de la miséricorde d'Allāh : Allāh pardonne tous les péchés.",
    category: "Réflexion",
    tags: ["tawba", "miséricorde", "espoir"],
    angle:
      "Le verset que les anciens appelaient « le plus plein d'espoir du Coran » — et ses conditions implicites.",
    axes: [
      "L'occasion de descente et les compagnons concernés.",
      "« Tous les péchés » : portée et articulation avec 4/48.",
      "Espérance et repentir : deux mouvements inséparables.",
    ],
    date: "2026-07-03",
  },
  {
    slug: "coran-49-13-le-plus-noble-dentre-vous",
    ref: "Cor. 49/13",
    surah: "Sourate al-Ḥujurāt",
    arabic:
      "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
    french:
      "Ô hommes, Nous vous avons créés d'un mâle et d'une femelle, et Nous vous avons constitués en peuples et en tribus pour que vous vous connaissiez.",
    category: "Réflexion",
    tags: ["taqwa", "société", "égalité"],
    angle:
      "Le verset fondateur de l'éthique de la différence : la diversité est finalisée par la connaissance mutuelle.",
    axes: [
      "Liyaʿārafū : reconnaissance réciproque, non simple tolérance.",
      "La taqwā comme seul critère de noblesse, et ce qu'elle démonte.",
      "Application dans une société plurielle contemporaine.",
    ],
    date: "2026-06-27",
  },
  {
    slug: "coran-103-1-3-par-le-temps",
    ref: "Cor. 103/1-3",
    surah: "Sourate al-ʿAṣr",
    arabic:
      "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ",
    french:
      "Par le Temps ! L'homme est certes en perdition, sauf ceux qui croient, accomplissent les bonnes œuvres.",
    category: "Réflexion",
    tags: ["temps", "asr", "éthique"],
    angle:
      "Al-Shāfiʿī disait qu'elle suffirait à la communauté si rien d'autre n'avait été révélé. Pourquoi ?",
    axes: [
      "Le serment par le temps et la structure de la sourate.",
      "Quatre conditions, deux individuelles et deux collectives.",
      "Khusr : la perte comme état par défaut, non comme accident.",
    ],
    date: "2026-06-21",
  },
  {
    slug: "coran-31-17-les-conseils-de-luqman",
    ref: "Cor. 31/17",
    surah: "Sourate Luqmān",
    arabic:
      "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ",
    french:
      "Ô mon fils, accomplis la prière, ordonne le convenable, interdis le blâmable et endure ce qui t'atteint.",
    category: "Réflexion",
    tags: ["éducation", "luqman", "sagesse"],
    angle:
      "Un programme éducatif complet en une phrase : culte, engagement, patience — dans cet ordre précis.",
    axes: [
      "Pourquoi la prière vient avant l'action sociale.",
      "Le lien immédiat entre commander le bien et endurer : le prix de la parole.",
      "La pédagogie de la tendresse : « yā bunayya » répété dans la sourate.",
    ],
    date: "2026-06-15",
  },
  {
    slug: "coran-41-34-repousse-le-mal-par-ce-qui-est-meilleur",
    ref: "Cor. 41/34",
    surah: "Sourate Fuṣṣilat",
    arabic:
      "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ",
    french:
      "Repousse le mal par ce qui est meilleur : et voilà que celui avec qui tu avais une inimitié devient un ami chaleureux.",
    category: "Réflexion",
    tags: ["éthique", "controverse", "adab"],
    angle:
      "Une règle de conduite pour la polémique religieuse elle-même : la meilleure réponse transforme l'adversaire.",
    axes: [
      "« Allatī hiya aḥsan » : non pas l'égal, mais le meilleur.",
      "La condition posée juste après : la patience et la part immense.",
      "Application à la controverse en ligne et au débat interreligieux.",
    ],
    date: "2026-06-09",
  },
];

function buildPost(seed: VerseSeed): Post {
  return {
    slug: seed.slug,
    title: `${seed.ref} — ${seed.french.split(/[.:!?]/)[0]!.trim()}`,
    excerpt: seed.angle,
    category: seed.category,
    tags: [...seed.tags, "exégèse"],
    date: seed.date,
    readingTime: "à développer",
    body: [
      { type: "h2", text: `${seed.surah} — ${seed.ref}` },
      {
        type: "verse",
        arabic: seed.arabic,
        translation: seed.french,
        reference: `${seed.surah} — ${seed.ref}`,
      },
      { type: "h2", text: "L'enjeu" },
      { type: "p", text: seed.angle },
      { type: "h2", text: "Axes d'exégèse à développer" },
      ...seed.axes.map((a) => ({ type: "p" as const, text: `— ${a}` })),
      { type: "h2", text: "Développement" },
      {
        type: "p",
        text: "Ce commentaire est en cours de rédaction. Il sera publié ici, avec les références aux tafāsīr et, lorsque cela s'y prête, un enregistrement audio.",
      },
    ],
  };
}

export const versePosts: Post[] = seeds.map(buildPost);
