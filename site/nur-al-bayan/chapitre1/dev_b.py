# Développement en prose après chaque schéma : page « objection » et groupe b (attributs).
import importlib.util, os
_s = importlib.util.spec_from_file_location('da', os.path.join(os.path.dirname(__file__), 'dev_a.py'))
_m = importlib.util.module_from_spec(_s); _s.loader.exec_module(_m)
P, Q, dev = _m.P, _m.Q, _m.dev
ADD = {}

SAV = "Les savants sur cette question"

# ---------------------------------------------------------------- Objection
ADD["Une objection : un Dieu qui châtie l'incroyance est-il juste ?"] = {"after": {
"Deux chemins, deux destinations": dev([
  "Reprenons ce schéma étape par étape, car chaque étape répond à une question précise. **Première étape, la vérité est présentée à tous** : le verset 2:256 dit que « le droit chemin s'est distingué de l'égarement ». Avant tout jugement, il y a donc un avertissement, des preuves, un appel. Personne n'est jugé dans le noir. Ceux que le message n'a pas atteints relèvent d'un autre régime, que la page traite plus bas avec al-Shinqītī.",
  "**Deuxième étape, le croyant dit oui** : il croit à Dieu, à Ses messagers, et donc au Paradis. Il oriente sa vie vers cette promesse, accepte des efforts et des renoncements pour elle. Dieu lui accorde ce qu'il a cherché. Il n'y a là rien d'arbitraire : c'est la rencontre d'un désir et d'une promesse.",
  "**Troisième étape, le négateur dit non** : il ne veut ni de Dieu, ni de Sa rencontre, ni de Sa demeure. Dieu ne le force pas à y entrer. Remarque bien : ce n'est pas Dieu qui lui ferme une porte qu'il voulait ouvrir ; c'est lui qui a refusé d'entrer par la porte qu'on lui ouvrait.",
  "**Quatrième étape, la justice est respectée** : chacun obtient ce vers quoi il a marché. C'est le sens du verset 10:44 : « Allāh ne lèse les gens en rien ». Le croyant n'est pas lésé, puisqu'il obtient ce qu'il a cherché ; le négateur n'est pas lésé non plus, puisqu'on ne lui enlève rien qu'il ait voulu."],
  Q("Mais personne ne veut aller en Enfer ; le négateur ne l'a donc pas choisi ?",
    "Personne ne choisit l'Enfer comme on choisit un dessert. Mais on peut choisir ce qui y conduit, en refusant ce qui en préserve. Celui qui refuse de prendre le seul pont qui traverse le fleuve ne choisit pas de se noyer ; il choisit de ne pas traverser par le pont. Le Coran dit que les gens du Feu reconnaîtront : « un avertisseur nous est bien venu, mais nous avons démenti » (67:9).",
    "Le refus porte sur le chemin ; la destination en est la conséquence."),
  Q("Le négateur n'a peut-être pas compris le message ?",
    "C'est exactement la distinction que fait la page dans la partie sur le kufr : on n'est pas responsable du refus d'une caricature. Le schéma « Quand la responsabilité s'engage » pose comme condition que le message soit parvenu et compris sans déformation. Le raisonnement de correspondance ne concerne que celui qui a reçu la vérité et l'a refusée en connaissance de cause.")),
"Trois hypothèses : laquelle est juste ?": dev([
  "Ce tableau est une expérience de pensée : imaginons les trois manières possibles d'organiser l'au-delà, et voyons laquelle est juste.",
  "**Première hypothèse, tout le monde au Paradis de force.** Celui qui a haï Dieu, qui s'est moqué de Ses messagers, qui a peut-être persécuté des croyants, serait contraint de vivre éternellement dans la proximité de Celui qu'il a rejeté. On croit que ce serait de la bonté ; en réalité, ce serait **une double injustice**. Injustice envers lui, d'abord : son « non » ne compterait pour rien, comme s'il n'était pas une personne libre. Injustice envers les croyants, ensuite : leur fidélité, leurs sacrifices, leur patience ne vaudraient pas plus que le mépris.",
  "**Deuxième hypothèse, personne ne reçoit rien.** Le croyant et le négateur seraient traités de la même façon, par l'anéantissement par exemple. Mais alors Dieu aurait menti dans Sa promesse, et la vie morale perdrait tout son sens : à quoi bon le bien, si le bourreau et la victime finissent au même endroit ?",
  "**Troisième hypothèse, chacun reçoit ce qu'il a choisi.** C'est la seule qui respecte à la fois **la liberté** de l'homme, **la véracité** de Dieu et **la justice** entre les hommes. Et c'est exactement ce que le Coran enseigne."],
  Q("Dieu ne pourrait-Il pas changer le cœur du négateur pour qu'il veuille le Paradis ?",
    "Il le pourrait, puisqu'Il peut tout. Mais un cœur changé de force n'aurait pas choisi. Ce serait un autre être, et non la personne qui a vécu cette vie. Dieu a voulu des êtres capables de dire oui librement, et cela implique qu'ils puissent dire non. Al-Qurtubī le dit à propos de Noé : une acceptation imposée n'est pas valable.")),
"La chaîne de la responsabilité": dev([
  "Ce cycle montre en quatre temps comment la responsabilité est construite, de telle sorte qu'à aucune étape on ne puisse accuser Dieu. **Dieu montre** : la vérité vient de Lui, avec ses preuves. **Dieu préfère** : Il dit clairement qu'Il n'agrée pas la mécréance pour Ses serviteurs (39:7). Il ne reste donc pas neutre ; Il indique le bon chemin. **L'homme choisit** : « que celui qui veut croie, que celui qui veut mécroie ». **Le choix porte son fruit** : « ce ne sont que vos œuvres que Je compte pour vous ».",
  "On voit que la chaîne est complète. Celui qui finit privé du Paradis ne peut pas dire : je n'ai pas su (Dieu a montré), je ne savais pas ce que Dieu voulait (Il a dit ce qu'Il préfère), on m'a forcé (le choix était le mien), on m'a jugé sur autre chose que mes actes (ce sont ses œuvres qu'on lui rend). C'est pourquoi le hadith conclut : « que celui qui trouve autre chose ne s'en prenne qu'à lui-même »."]),
"La justice divine résumée en cinq étapes": dev([
  "Ce schéma récapitule toute la page en cinq principes, chacun appuyé sur un texte. **Dieu n'a besoin de rien** : ni notre foi ni notre refus ne Lui ajoutent quoi que ce soit ; le châtiment n'est donc pas une vengeance. **Il avertit avant de juger** : nul n'est châtié sans que l'avertissement lui soit parvenu. **Il ne contraint pas** : le choix est réellement laissé à l'homme. **Il rend à chacun ses œuvres** : ce qu'on trouve, c'est ce qu'on a fait. **Il ne lèse personne** : celui qui se retrouve privé s'en est privé lui-même.",
  "Si l'on retient ces cinq principes, l'objection de départ, « un Dieu bon ne châtierait pas », se retourne entièrement : c'est justement **parce que** Dieu est juste qu'Il ne peut ni forcer le refus, ni traiter de la même façon celui qui a accepté et celui qui a refusé."]),
"Quand la responsabilité s’engage": dev([
  "Ce schéma, déjà présent sur le site, pose les conditions sans lesquelles personne n'est tenu pour responsable. **La capacité** : ni l'enfant, ni l'aliéné ne sont tenus. **Le message parvenu** : c'est le verset 17:15. **Le message compris, non déformé** : celui qui n'a reçu qu'une caricature de l'islam n'a pas refusé l'islam, il a refusé une caricature. **Le refus délibéré** : voir, reconnaître intérieurement, et couvrir ; c'est le sens même du mot « kufr », qui veut dire « couvrir ».",
  "La légende est capitale : **ôte une seule de ces conditions, et la responsabilité pleine n'est pas engagée**. La justice divine n'est pas aveugle ; elle tient compte de chaque situation. Ce schéma complète le raisonnement de correspondance : celui-ci ne s'applique qu'à celui qui remplit les quatre conditions."],
  Q("Qui peut savoir si quelqu'un a vraiment compris le message ?",
    "Personne, sauf Dieu. C'est pourquoi le musulman ne juge pas le sort éternel d'une personne précise : il expose les règles, et il laisse le jugement à Celui qui connaît les cœurs. Notre rôle est de transmettre le message le plus fidèlement possible, pas de trier les gens.")),
"Ce que disent les savants, en un coup d'œil": dev([
  "Ce tableau montre que l'argument de cette page n'est pas une invention personnelle : il est porté par les commentateurs, des Successeurs jusqu'à nos jours. Qatāda et al-Qurtubī sur l'impossibilité d'imposer la foi, Ibn Kathīr sur la contrainte, Ibn ʿĀshūr sur le libre choix et sur le châtiment qui n'est ni aversion ni vengeance, al-Shinqītī sur l'avertissement préalable, et al-Qurtubī encore sur la différence entre ce que Dieu permet et ce qu'Il agrée."]),
"Le sort des gens de la fatra": dev([
  "Ce tableau expose honnêtement une divergence entre les savants. **Le premier avis** dit que ceux qui ont vécu sans recevoir le message sont excusés, et il s'appuie sur des versets clairs : « Nous ne châtions jamais avant d'avoir envoyé un messager » (17:15), et le verset où les gardiens de l'Enfer demandent à chaque groupe : « ne vous est-il pas venu d'avertisseur ? » (67:8), ce qui suppose que tous les gens du Feu en ont reçu un. **Le second avis** dit que quiconque meurt dans l'association est au Feu, et s'appuie sur la généralité d'autres versets et sur des hadiths rapportés par Muslim.",
  "Al-Shinqītī ne tranche pas par préférence personnelle : il cherche **la position qui garde toutes les preuves**. C'est ce que montre le schéma suivant."]),
"La justice divine en quatre étapes": dev([
  "Ce schéma résume la solution d'al-Shinqītī. **La fitra et la raison** : Dieu dépose en chacun ce qui permet de Le reconnaître. **Le messager** : Il ne châtie pas avant que l'avertissement soit parvenu. **L'excuse levée** : le refus ne compte qu'après avoir connu et rejeté. **La science de Dieu** : ceux que le message n'a pas atteints seront éprouvés au Jour de la Résurrection, selon ce qu'Il sait d'eux.",
  "Cette solution est la plus juste qu'on puisse imaginer : personne n'est condamné pour ce qu'il n'a pas reçu, et personne n'est sauvé malgré un refus qu'il aurait opposé si le message lui était parvenu. Al-Shinqītī ajoute que **concilier les preuves est obligatoire** quand c'est possible, et que seule cette position y parvient."],
  Q("Une épreuve dans l'au-delà, n'est-ce pas contradictoire avec l'idée que l'au-delà est une demeure de rétribution ?",
    "C'est l'objection qu'Ibn ʿAbd al-Barr avait faite, et Ibn Kathīr y répond, cité par al-Shinqītī : l'au-delà est bien une demeure de rétribution, mais cela n'empêche pas une épreuve dans les plaines de la Résurrection, avant l'entrée au Paradis ou en Enfer. Il cite d'autres épreuves rapportées par les textes : l'ordre de se prosterner, le passage sur le pont.")),
"Pourquoi un châtiment durable pour une vie limitée ?": dev([
  "Ce tableau répond à l'objection de la disproportion. **La prémisse de l'objection** : la faute a duré quelques décennies, le châtiment devrait donc être limité. **La réponse** : ce qui est jugé, ce n'est pas la durée de l'acte, c'est **la disposition du cœur**. Même dans la justice humaine, un acte de quelques secondes peut entraîner une peine de plusieurs années : on ne mesure pas une faute au chronomètre.",
  "Le verset 6:28 apporte la clé : « s'ils étaient renvoyés, ils recommenceraient ». La disposition de refus n'est pas un accident passager ; elle est permanente. L'exemple d'Iblīs le prouve : il avait tout vu, et il s'est obstiné. **Ce qui reste certain**, dit la dernière ligne, c'est que Dieu ne châtie personne sans avertissement, et qu'Il S'est interdit l'injustice."])
}}

# ---------------------------------------------------------------- Affirmer sans comparer
ADD["Affirmer sans comparer : le verset qui gouverne la question"] = {"after": {
"Trois attitudes devant les attributs": dev([
  "Ce tableau présente les trois chemins possibles devant un verset comme « Il S'est établi sur le Trône ». **La comparaison (tashbīh)** imagine Dieu comme un roi assis sur un siège, en plus grand. Elle garde le texte, mais elle perd la transcendance : elle contredit « rien ne Lui ressemble ». **La négation (taʿtīl)** dit que le mot ne veut rien dire de réel, ou qu'il désigne autre chose. Elle croit protéger la transcendance, mais elle perd le texte : Dieu aurait parlé pour ne rien dire.",
  "**La voie des anciens** garde les deux. Elle affirme que le mot a un sens, que Dieu S'est réellement établi sur le Trône d'une manière qui Lui convient, et elle refuse toute image du comment. C'est exactement la phrase de Mālik : « l'istiwāʾ n'est pas inconnu, le comment n'est pas concevable »."],
  Q("Affirmer un sens sans pouvoir l'imaginer, n'est-ce pas une contradiction ?",
    "Non : nous le faisons constamment. J'affirme que mon âme existe et pense, sans pouvoir me la représenter. Les physiciens affirment des réalités qu'aucune image ne peut figurer. Comprendre qu'une chose est vraie n'exige pas de pouvoir la dessiner. C'est d'autant plus vrai pour Dieu, dont « rien ne Lui ressemble ».")),
"Le verset 42:11 en deux temps": dev([
  "Ce schéma décompose le verset. **La négation** : « rien ne Lui ressemble ». Toute image tirée des créatures est écartée d'avance. **L'affirmation** : « et Il est l'Audient, le Voyant ». Le sens est maintenu : Il entend et voit réellement. **La conséquence** : on sait ce que les mots veulent dire, on ne sait pas comment cela est en Dieu.",
  "Il est remarquable que la négation vienne **avant** l'affirmation. On commence par purifier l'esprit de toute image, puis on reçoit le sens. Si l'on faisait l'inverse, on risquerait d'entendre « l'Audient » avec l'image d'une oreille humaine."]),
"Une seule phrase, deux mouvements": dev([
  "Cette balance, présente sur le site, nomme les deux moitiés du verset : **la barrière** et **la fenêtre**. La barrière, « rien ne Lui ressemble », retire de notre portée le comment, non par ignorance passagère mais par nature. La fenêtre, « Il est l'Audient, le Voyant », montre que la transcendance n'aboutit pas au silence : Dieu Se nomme et Se qualifie Lui-même.",
  "La légende donne le diagnostic des deux erreurs : **ne retenir que la barrière** mène à nier les attributs ; **ne retenir que la fenêtre** mène à comparer Dieu aux créatures. Le croyant garde les deux, comme on garde à la fois les deux ailes d'un oiseau."]),
"Les quatre phrases de Mālik, une par une": dev([
  "Prenons chaque phrase de Mālik comme une règle. **« L'istiwāʾ n'est pas inconnu »** : le mot a un sens en arabe, compris par tous les Arabes. Mālik refuse donc de dire que le verset est incompréhensible. **« Le comment n'est pas concevable »** : notre intelligence ne connaît que des « comment » créés ; elle ne peut pas concevoir celui de Dieu. **« Y croire est obligatoire »** : on ne rejette pas ce que Dieu a dit de Lui sous prétexte qu'on ne peut pas l'imaginer.",
  "**« Poser la question est une innovation »** : non pas toute question, mais la question du **comment**. Demander « que veut dire ce verset ? » est légitime ; demander « comment est-Il établi, assis, debout, à quelle distance ? », c'est poser à Son sujet une question qu'on ne pose qu'aux créatures. D'où la sévérité de Mālik envers l'homme qui l'interrogeait : il ne cherchait pas à comprendre, il cherchait une image."],
  Q("Mālik n'était-il pas trop dur avec ce questionneur ?",
    "Il faut replacer la scène dans son contexte : à l'époque de Mālik, des groupes commençaient à semer le trouble par des questions de ce genre. Mālik protégeait la communauté contre une curiosité qui ne cherchait pas la vérité. Ses quatre phrases, elles, sont d'une grande douceur pédagogique : elles donnent en une minute toute la méthode.")),
"Les savants sur cette question": dev([
  "Ce tableau montre une chaîne continue de savants malikites, de Rabīʿa, le maître de Mālik, à al-Shinqītī au vingtième siècle, en passant par Sahnūn et Ibn ʿAbd al-Barr. Tous tiennent la même ligne : **affirmer ce que Dieu a dit de Lui, refuser toute ressemblance, ne pas chercher le comment**. Ce n'est pas une position isolée : c'est la colonne vertébrale de l'école sur cette question."])
}}

# ---------------------------------------------------------------- Science, ouïe…
ADD["Dieu sait tout, entend tout, voit tout, et a pouvoir sur toute chose"] = {"after": {
"Nos limites, et leur absence en Dieu": dev([
  "Ce tableau prend chacune de nos limites et montre qu'elle ne s'applique pas à Dieu. **Entendre** : un simple mur empêchait ʿĀʾisha d'entendre Khawla dans la même pièce ; rien n'a empêché Dieu de l'entendre. **Plusieurs voix** : chez nous, elles se brouillent ; Ibn Battāl explique que l'ouïe de Dieu « atteint » toutes les voix. **Savoir** : notre science s'acquiert, se perd, se trompe ; la Sienne est sans acquisition ni oubli. **Pouvoir** : le nôtre est limité et se fatigue ; le Sien s'étend à toute chose, sans effort.",
  "La dernière ligne répond à la question la plus douloureuse : **le silence apparent**. Quand une prière semble sans réponse, ce n'est ni de la surdité ni de l'indifférence. Le Prophète ﷺ a enseigné que toute invocation est exaucée de l'une de trois façons : accordée tout de suite, mise en réserve pour l'au-delà, ou par un mal équivalent écarté."],
  Q("Comment peut-on entendre des milliards de voix en même temps ?",
    "Pour nous, c'est impossible, parce que notre ouïe est un organe limité qui traite les sons un par un. La question suppose que Dieu entend comme nous, en plus rapide. Mais « rien ne Lui ressemble » : Son ouïe n'est pas un organe, elle n'a pas de capacité à saturer. L'impossibilité est la nôtre, pas la Sienne.")),
"Nos attributs et les Siens : le même mot, deux ordres": dev([
  "Cette balance, présente sur le site, met côte à côte nos attributs et ceux de Dieu. Chez la créature, **le savoir** s'acquiert et se perd ; chez Dieu, il est sans apprentissage ni oubli, mais **réellement science**. Chez nous, **l'ouïe** dépend d'un organe, d'un air, d'une distance ; chez Lui, elle est sans organe semblable au nôtre, mais **réellement ouïe**. Et ainsi pour la vue et la puissance.",
  "La répétition de « mais réellement » à chaque ligne est voulue. Elle rappelle que **retirer les limites ne revient pas à retirer l'attribut**. Le mot vient de notre langue ; la limitation, elle, ne suit pas. Le sens demeure, le comment échappe."]),
"Quatre attributs, quatre effets sur le cœur": dev([
  "Ce schéma montre que ces attributs ne sont pas des abstractions. **Il sait** : la comédie sociale prend fin, car l'intention compte plus que la façade. **Il entend** : l'invocation la plus faible, murmurée, est reçue. **Il voit** : la solitude n'existe pas, et la pudeur devient intérieure. **Il peut** : aucune situation n'est définitivement fermée, et l'espérance cesse d'être naïve.",
  "La légende le dit : chaque attribut, correctement cru, **déplace une habitude du cœur**. On mesure sa foi en ces attributs moins à ce qu'on en sait qu'à ce qu'ils changent dans notre conduite quand personne ne nous regarde."]),
"L'ouïe du Créateur et l'ouïe de la créature": dev([
  "Ce tableau reprend l'histoire de Khawla pour comparer les deux ouïes. **L'existence** : les deux sont réelles ; Ibn Battāl insiste pour dire que nier l'ouïe de Dieu, c'est nier qu'Il soit l'Audient. **La limite** : un mur arrête la nôtre, rien n'arrête la Sienne. **La simultanéité** : nous ne pouvons pas écouter deux personnes à la fois ; Lui entend toutes les invocations, dans toutes les langues, au même instant. **L'organe** : aucune image corporelle, puisque « rien ne Lui ressemble ».",
  "L'histoire de Khawla rend tout cela concret : une femme âgée, humiliée par son mari, murmure sa plainte, et la réponse descend du ciel sous forme de versets qui changeront la loi pour toujours. **C'est cela, « Il entend ».**"]),
SAV: dev([
  "Ce tableau rassemble ʿĀʾisha, Ibn Battāl, al-Tabarī et al-Shinqītī. Tous affirment la réalité de ces attributs, tous refusent d'y projeter nos limites, et tous en tirent une conséquence pratique : on n'invoque ni un sourd ni un absent."])
}}

# ---------------------------------------------------------------- Parole
ADD["La parole divine : ce qui est affirmé et ce qui ne l'est pas"] = {"after": {
"Le raisonnement par parité": dev([
  "Ce schéma applique une règle de cohérence. **Dieu sait sans cerveau** : personne ne nie Sa science sous prétexte qu'Il n'a pas de cerveau. **Dieu voit sans yeux de chair** : le Coran le dit, et personne n'en conclut qu'Il est aveugle. **Dieu parle sans gorge** : la même logique s'applique ; nier Sa parole parce qu'Il n'a pas de gorge serait aussi illogique que nier Sa science parce qu'Il n'a pas de cerveau.",
  "Le dernier nœud ajoute la preuve de la langue : le Coran dit « Allāh a parlé à Moïse, d'une véritable parole » (taklīman). Les grammairiens, rapporte al-Nahhās, sont unanimes : un verbe renforcé par son nom verbal ne peut pas être une métaphore. **Le texte lui-même interdit de lire « parler » comme une image.**"],
  Q("Si Dieu parle, Sa parole a-t-elle commencé un jour ?",
    "Les savants distinguent l'attribut de parole, que Dieu a toujours eu, et les actes de parole, qu'Il accomplit quand Il veut : Il a parlé à Moïse à un moment précis, Il parlera aux gens au Jour dernier. Dieu n'a jamais été privé de la parole, et Il parle quand Il le veut. C'est ce que dit la balance présente sur cette page.")),
"Ce que l'on affirme, ce que l'on refuse": dev([
  "Cette balance, présente sur le site, détaille la position. **Affirmé** : Dieu parle réellement, par des paroles audibles pour qui Il veut ; Sa parole est liée à Sa volonté ; le Coran est Sa parole, lettres et sens, non créée. **Écarté** : l'idée que le Coran ne serait que l'expression créée d'une parole intérieure muette ; une parole créée dans un corps ; tout organe ou souffle ; et le silence sur le sens.",
  "La légende rappelle la règle constante de toute la théologie des attributs : **affirmer l'attribut, nier la ressemblance, se taire sur le comment**."]),
"La parole divine : la ligne des savants": dev([
  "Ce tableau résume ce qu'on affirme et ce qu'on refuse, ligne par ligne. **La réalité** : Dieu parle réellement, et l'insistance du mot « taklīman » le confirme ; on refuse l'idée d'une parole créée dans un arbre, que Dieu Se serait seulement attribuée. **Le Coran** : il est « la parole d'Allāh » (9:6) ; on refuse d'en faire un produit de l'inspiration humaine. **La modalité** : elle Lui convient, et n'est pas celle de nos voix. **La méthode** : affirmer comme le texte, avec la règle de Mālik.",
  "Le point le plus concret est le deuxième : **quand je récite le Coran, je récite la parole de Dieu**, et non un texte composé par un homme. C'est ce qui donne à la récitation sa gravité et sa douceur."]),
SAV: dev([
  "Les savants réunis ici, al-Qurtubī, al-Nahhās, al-Shinqītī et Mālik, montrent qu'il y a sur ce point une convergence entre la grammaire, l'exégèse et la théologie. La grammaire interdit la métaphore, l'exégèse confirme la réalité de la parole, et la théologie la reçoit sans modalité."])
}}

# ---------------------------------------------------------------- En haut
ADD["« Dieu est en haut » : hauteur, séparation, infinité"] = {"after": {
"Hauteur dans l'espace et hauteur de transcendance": dev([
  "Ce tableau distingue deux sens du mot « haut ». **La hauteur dans l'espace** suppose un lieu qui contient, une distance mesurable, et elle dépend de la position de l'observateur : ce qui est en haut pour moi est en bas pour quelqu'un aux antipodes. **La hauteur de transcendance** dit seulement que **rien de créé n'est au-dessus de Dieu** ; elle ne dépend de personne, elle est absolue.",
  "Les savants refusent la première et affirment la seconde. Ibn ʿAbd al-Barr refuse toute description du type « Il descend par Son Essence, assis sur Son siège », parce que c'est une modalité ; et il rapporte de Mālik : « Allāh est dans le ciel, et Sa science est en tout lieu »."],
  Q("Mais « dans le ciel », n'est-ce pas un lieu ?",
    "En arabe, « fī l-samāʾ » peut signifier « dans le ciel » ou « en haut », car « samāʾ » désigne tout ce qui est au-dessus. Les savants qui l'emploient précisent aussitôt qu'aucun lieu créé ne Le contient, puisque les cieux eux-mêmes sont des créatures qui n'existaient pas quand Dieu existait seul. Le Prophète ﷺ l'a dit : « Tu es l'Apparent, rien n'est au-dessus de Toi ».")),
"L'équilibre d'Ibn ʿAbd al-Barr": dev([
  "Cette balance montre la position d'Ibn ʿAbd al-Barr, le grand malikite de Cordoue. **Ce qu'il affirme** : la hauteur de Dieu, l'istiwāʾ sur le Trône comme le texte le dit, la descente et la venue comme le Prophète ﷺ les a dites, une science qui n'est absente d'aucun lieu. **Ce qu'il refuse** : toute modalité, toute comparaison avec un roi sur son trône, toute analogie tirée des corps, et le panthéisme qui mêle Dieu à chaque chose.",
  "Cet équilibre est difficile à tenir, et c'est pourquoi il est précieux : on peut tomber d'un côté en imaginant Dieu comme un corps assis, ou de l'autre en Le dissolvant dans la création. Ibn ʿAbd al-Barr tient le milieu, en s'en remettant à une seule règle : **ne rien décrire de Dieu au-delà de ce qu'Il a dit de Lui-même**."]),
SAV: dev([
  "Ce tableau réunit Mālik, Ibn ʿAbd al-Barr et Ibn Masʿūd. Leur formule commune tient en deux moitiés : **au-dessus de la création**, et **Sa science partout**. Ni une hauteur qui éloignerait Dieu de nous, ni une proximité qui Le mêlerait aux choses."])
}}

# ---------------------------------------------------------------- Maʿiyya
ADD["« Dieu est avec vous » et « Je suis proche » : concilier les registres"] = {"after": {
"Hauteur et proximité": dev([
  "Ce tableau montre que hauteur et proximité ne s'opposent pas, parce qu'elles ne disent pas la même chose. **La hauteur** dit que rien de créé n'est au-dessus de Dieu ; **la proximité** dit que rien n'échappe à Sa science, Son ouïe et Sa vue. La première produit **la révérence**, la seconde **la confiance et la vigilance**.",
  "La formule des anciens, rapportée par Ibn ʿAbd al-Barr, réunit les deux en une phrase : « **Il est sur le Trône, et Sa science est avec eux où qu'ils soient** ». On peut être à la fois très haut et très proche, comme le soleil est loin et pourtant sa lumière entre dans chaque pièce."],
  Q("Le soleil est une image : n'est-ce pas comparer Dieu à une créature ?",
    "C'est une illustration pour l'esprit, non une description de Dieu. Elle montre seulement que, même dans le monde créé, la hauteur et la présence ne s'excluent pas. Si c'est possible pour une créature, c'est a fortiori possible pour Celui qui n'a aucune de nos limites.")),
"Maʿiyya générale et maʿiyya particulière": dev([
  "Ce tableau, présent sur le site, distingue deux manières dont Dieu est « avec » les hommes. **L'accompagnement général** concerne toute créature, croyante ou non : c'est Sa science, Sa puissance, Sa vision. **L'accompagnement particulier** concerne les prophètes, les croyants, les patients : c'est Son soutien, Sa protection, Son secours.",
  "Les deux versets types le montrent. « Il est avec vous où que vous soyez » (57:4) s'adresse à tous, et il produit **la vigilance**. « Ne t'attriste pas, Allāh est avec nous » (9:40), dit par le Prophète ﷺ à Abū Bakr dans la grotte, est l'accompagnement particulier, et il produit **la confiance dans l'épreuve**."]),
"L'effet des deux registres sur le croyant": dev([
  "Ce cycle montre comment hauteur et proximité composent un seul équilibre intérieur, que les savants appellent « murāqaba », la conscience d'être sous le regard de Dieu. **Il est au-dessus** : je ne dispose pas de Lui. **Il sait tout** : je ne suis jamais hors de Sa vue. **Il est proche** : l'invocation n'a aucune distance à franchir. **Il est avec les patients** : l'épreuve n'est pas un abandon.",
  "Supprime un seul de ces registres, et l'équilibre se rompt : sans la hauteur, on devient familier avec Dieu ; sans la proximité, on se sent abandonné."]),
"Ce que produit le verset dans le cœur": dev([
  "Ce cycle part du verset de « la conversation à trois » (58:7). **Dans le secret**, aucune conversation n'est vraiment à deux ou à trois. **Dans la tentation**, je me sais vu là où personne ne me voit. **Dans la solitude**, je ne suis jamais seul. **Au Jour dernier**, ce qui a été su sera dit.",
  "Ce verset est l'un des plus puissants pour la vie intérieure : il transforme chaque réunion, chaque messagerie privée, chaque pensée cachée en un lieu où Dieu est présent par Sa science."]),
SAV: dev([
  "Ce tableau montre une chose rare : sur l'explication du verset 58:7, Ibn ʿAbd al-Barr constate l'**accord des Compagnons et des Successeurs**, sans contradicteur dont l'avis compte. Al-Dahhāk, Sufyān al-Thawrī, Ibn Masʿūd et Mālik disent la même chose : Il est au-dessus, Sa science est avec nous."])
}}

# ---------------------------------------------------------------- Tafwīd
ADD["Ce que l'on remet à Dieu : le sens des termes, ou la réalité qu'ils désignent ?"] = {"after": {
"Deux sortes de « remise à Dieu » (tafwīd)": dev([
  "Ce tableau oppose deux attitudes qui portent le même nom. **Remettre le sens** : « je ne sais pas ce que ce mot veut dire ». **Remettre la modalité** : « je sais ce qu'il veut dire, je ne sais pas comment cela est en Dieu ». La première rend une partie du Coran muette ; la seconde laisse le Coran parler, tout en laissant Dieu au-delà de nos images.",
  "La dernière ligne tranche par la parole de Mālik : « l'istiwāʾ n'est pas inconnu » contredit directement la première attitude ; « le comment n'est pas concevable » décrit exactement la seconde."],
  Q("Mais certains savants respectés ont pratiqué le tafwīd du sens ?",
    "Des savants ont parfois employé des formules de prudence qui ont été comprises ainsi. Mais la formule de Mālik, transmise par Ibn ʿAbd al-Barr et expliquée par al-Shinqītī, distingue clairement le sens et la modalité. On respecte les savants tout en préférant la formulation la plus claire et la plus ancienne.")),
"Remettre le sens, ou remettre le comment": dev([
  "Ce tableau, présent sur le site, ajoute deux lignes importantes. **Le statut du Coran** : si l'on remet le sens à Dieu, des passages entiers resteraient inintelligibles, alors que le Coran se présente comme une explicitation, « en arabe clair ». **L'effet sur la foi** : des attributs sans contenu laissent le cœur sans objet ; des attributs compris nourrissent l'adoration.",
  "C'est la conséquence pratique la plus importante : je ne peux pas aimer, craindre ou espérer en un Dieu dont je ne comprendrais aucun attribut. **Comprendre le sens est la condition de l'adoration.**"]),
"Ce qui est connu, ce qui est remis à Dieu": dev([
  "Ce schéma suit le chemin d'un mot coranique. **Le mot** : révélé en arabe clair, pour être compris. **Le sens de base** : connu par la langue, comme dit Mālik. **La réalité en Dieu** : affirmée comme réelle, digne de Sa perfection. **La modalité** : remise à Dieu.",
  "Al-Shinqītī ajoute que la langue arabe elle-même savait qu'entre le Créateur et le créé, la différence est sans limite. Les Arabes n'avaient donc pas besoin de vider les mots de leur sens pour protéger la transcendance : **la transcendance était déjà dans la relation entre Créateur et créature**."]),
SAV: dev([
  "Mālik, al-Shinqītī, Sahnūn et Ibn ʿAbd al-Barr forment ici une ligne cohérente : on connaît le sens, on ignore le comment, et l'on se tait sur ce que Dieu n'a pas dit de Lui-même. C'est à la fois une affirmation et une humilité."])
}}

# ---------------------------------------------------------------- Taʾwīl
ADD["Ta'wīl : là où elle s'impose, là où elle ne s'étend pas"] = {"after": {
"Interprétation légitime et interprétation abusive": dev([
  "Ce tableau donne les critères pour juger une interprétation. **Ce qui la déclenche** : une preuve claire, textuelle ou rationnelle, et non le simple malaise devant un texte. **Son effet** : elle précise le sens, elle ne l'annule pas. **L'exemple** : Ibn Battāl explique « l'ouïe embrasse les voix » par « l'ouïe atteint les voix », pour écarter l'idée d'une étendue corporelle ; il précise sans nier. À l'inverse, nier toute ouïe réelle en Dieu serait une interprétation abusive.",
  "**L'attitude envers l'autre avis** est le dernier critère, souvent oublié : celui qui interprète honnêtement respecte celui qui n'interprète pas, et inversement. Ibn ʿAbd al-Barr, qui affirme sans modalité, rapporte pourtant l'interprétation attribuée à Mālik, sans la mépriser."]),
"Le test de légitimité": dev([
  "Cette balance, présente sur le site, donne quatre questions à se poser devant toute interprétation. **Un autre texte impose-t-il le sens second ?** **La langue arabe atteste-t-elle couramment cet emploi ?** **Les Compagnons ont-ils lu ainsi ?** **Le sens premier est-il impossible dans le contexte lui-même ?** Si la réponse est oui, le déplacement de sens est recevable.",
  "À l'inverse, l'interprétation est abusive si elle vient seulement d'une **prémisse philosophique importée**, si **aucun ancien** ne l'a jamais proposée, si l'emploi n'est **attesté nulle part** en arabe, ou si elle **vide l'attribut** au lieu de le préciser. Ce test permet de juger chaque cas, sans tomber ni dans le rejet de toute interprétation, ni dans l'interprétation de tout."]),
"Deux lectures malikites du hadith de la descente": dev([
  "Ce tableau montre que l'école malikite elle-même a connu deux lectures du hadith de la descente. **Ibn ʿAbd al-Barr** dit : « Il descend », comme l'a dit le Prophète ﷺ, sans dire comment, et il ajoute que la parole sur la descente est la même que sur l'istiwāʾ. **Une transmission attribuée à Mālik** dit : « Son ordre descend », et Ibn ʿAbd al-Barr ajoute que cela peut se comprendre comme la descente de la miséricorde et de l'exaucement.",
  "L'objection du tableau est intéressante : si c'est l'ordre et la miséricorde qui descendent, pourquoi le dernier tiers de la nuit, puisqu'ils descendent jour et nuit ? La réponse proposée : c'est le moment où **la miséricorde et l'exaucement sont les plus abondants**, d'où l'encouragement à prier à cette heure.",
  "La dernière ligne est la plus importante : **les deux lectures partagent l'essentiel**, aucune modalité, aucun déplacement corporel. La divergence est réelle, mais elle reste à l'intérieur de la Sunna."],
  Q("Alors laquelle choisir ?",
    "Les deux sont rapportées dans l'école, par des savants qui refusent tous l'anthropomorphisme. On peut suivre l'affirmation sans modalité d'Ibn ʿAbd al-Barr, qui est la plus proche du texte, tout en respectant ceux qui interprètent. Le plus important est le fruit pratique, que tous partagent : prier dans le dernier tiers de la nuit.")),
SAV: dev([
  "Ce tableau réunit les deux voies de l'école : Mālik selon deux transmissions, Ibn ʿAbd al-Barr, Ibn Battāl, al-Qurtubī et al-Khattābī. On y voit que le débat sur l'interprétation n'oppose pas des croyants à des égarés, mais des savants qui partagent le même refus de comparer Dieu aux créatures."])
}}

# ---------------------------------------------------------------- Classification
ADD["Une classification des attributs : essentiels, actifs, personnels"] = {"after": {
"Ce que dit « chaque jour, Il est à une œuvre »": dev([
  "Ce schéma explique un verset que le Prophète ﷺ a lui-même commenté. **Son Essence ne change pas** : Il est le Vivant, le Savant, le Puissant, de toute éternité. **Il agit chaque jour** : pardonner un péché, dissiper une détresse, élever des gens et en abaisser d'autres. **Selon Sa volonté** : Ses actes ne Lui sont pas imposés. **Pour mon espérance** : aujourd'hui même, je peux être l'objet de Son œuvre de pardon.",
  "Cette distinction répond à une difficulté philosophique ancienne : comment un Dieu immuable peut-Il agir dans le temps ? Réponse : Son Essence ne change pas, mais Il accomplit des actes **quand Il veut**. Ce n'est pas Lui qui change ; ce sont Ses créatures qui reçoivent, à chaque moment, ce qu'Il a voulu leur donner."]),
"Les attributs divins": dev([
  "Ce schéma, présent sur le site, présente quatre familles. **Attributs d'essence** : inséparables de Lui, la vie, la science, la puissance. **Attributs d'action** : liés à Sa volonté, créer, donner, parler quand Il veut. **Attributs affirmatifs** : ce que les textes Lui attribuent. **Attributs négatifs** : ce qu'ils écartent de Lui, le sommeil, la fatigue, l'associé.",
  "La légende précise qu'un même attribut peut relever de plusieurs familles selon l'angle. La parole, par exemple, est un attribut d'essence, puisque Dieu n'a jamais été privé de parole, et un attribut d'action, puisqu'Il parle quand Il veut. **La classification sert à comprendre, pas à enfermer.**"]),
"Ce que produit chaque famille d'attributs": dev([
  "Ce cycle, présent sur le site, relie chaque famille à une attitude. **L'essence** produit la révérence. **L'action** produit l'invocation constante, puisqu'Il donne et répond. **L'affirmation** de Sa miséricorde et de Sa sagesse produit l'amour. **La négation** de tout associé et de toute faiblesse produit l'unicité pure.",
  "Au centre : **l'adoration**. Chaque famille d'attributs nourrit une part de l'adoration ; les connaître toutes, c'est adorer Dieu de tout son être."]),
"Attributs d'essence et attributs d'action": dev([
  "Ce tableau détaille la distinction. **La définition** : Dieu n'a jamais cessé d'être qualifié des attributs d'essence ; Il accomplit les attributs d'action quand Il veut. **Les exemples** : la vie, la science, la puissance d'un côté ; pardonner, créer, pourvoir, se réjouir du repentir de l'autre. **Les versets types** : « Il est le Vivant, l'Immuable » (2:255) et « chaque jour, Il est à une œuvre » (55:29).",
  "**Ce que j'en tire** : les attributs d'essence me donnent **la stabilité**, car Celui en qui je place ma confiance ne change pas ; les attributs d'action me donnent **l'espoir**, car aujourd'hui même Il peut pardonner mon péché et dissiper ma peine."]),
SAV: dev([
  "Ce tableau montre que la distinction n'est pas une invention tardive : elle s'appuie sur des hadiths expliquant 55:29 (Abū l-Dardāʾ, Ibn ʿUmar) et sur la réflexion des théologiens rapportée par al-Qurtubī. Elle sert à comprendre comment un Dieu immuable agit dans le monde."])
}}

# ---------------------------------------------------------------- Beauté et rigueur
ADD["Attributs de beauté et attributs de rigueur"] = {"after": {
"Pourquoi les deux registres sont nécessaires": dev([
  "Ce tableau imagine ce qui se passerait si l'on supprimait un registre. **Sans la rigueur**, l'homme tombe dans la négligence : « Dieu pardonnera de toute façon ». Il perd le sérieux de la responsabilité. **Sans la beauté**, l'homme tombe dans le désespoir : « je suis perdu ». Il perd la confiance qui permet de revenir.",
  "La dernière ligne cite le hadith de Muslim : si le croyant connaissait l'étendue du châtiment, nul n'espérerait ; si le mécréant connaissait l'étendue de la miséricorde, nul ne désespérerait. **Les deux connaissances doivent avancer ensemble**, comme les deux ailes d'un oiseau."],
  Q("Ne vaudrait-il pas mieux insister uniquement sur la miséricorde, pour attirer les gens ?",
    "Un médecin qui ne parlerait que des bienfaits de la santé, sans jamais mentionner la maladie, ne soignerait personne. La miséricorde de Dieu est plus vaste, et le Coran le dit, mais taire la rigueur reviendrait à mentir sur la réalité. Al-Qurtubī rappelle d'ailleurs que, selon une transmission, Gabriel reprocha au Prophète ﷺ de désespérer les gens : l'équilibre va dans les deux sens.")),
"Ce que produit chaque versant": dev([
  "Ce tableau, présent sur le site, nomme les effets et les dangers. **Les noms de beauté** (al-Rahmān, al-Ghafūr, al-Latīf, al-Wadūd) produisent l'amour, la confiance, le retour ; isolés, ils mènent au laxisme. **Les noms de rigueur** (al-ʿAzīz, al-Jabbār, Shadīd al-ʿiqāb) produisent la révérence, la retenue, le sérieux ; isolés, ils mènent à la dureté et au désespoir.",
  "La dernière ligne donne **les correctifs** : quand je glisse vers le laxisme, je me rappelle la sévérité du décompte ; quand je glisse vers le désespoir, je me rappelle que Sa miséricorde devance Sa colère. Le croyant se soigne lui-même avec le registre dont il manque."]),
SAV: dev([
  "Les savants réunis ici, le hadith de Muslim, al-Qurtubī, Ibn Kathīr, et le hadith des cent parts de miséricorde, disent tous la même chose : les deux registres sont réels, ils ne sont pas de même taille, et le chemin du milieu est le meilleur."])
}}

# ---------------------------------------------------------------- Termes partagés
ADD["Peut-on employer pour d'autres que Lui les termes qui Le qualifient ?"] = {"after": {
"La règle d'al-Shinqītī": dev([
  "Ce schéma résume la démonstration d'al-Shinqītī. **Un mot commun** : « audient », « savant », « vivant » se disent de Dieu et de l'homme ; le Coran le fait lui-même. **Deux réalités** : chez Dieu, parfaite et sans limite ; chez l'homme, réelle mais limitée. **Une distance mesurée** : autant de différence entre les attributs qu'entre les essences. **Une connaissance vraie** : on sait vraiment quelque chose de Dieu, sans jamais L'imaginer.",
  "La troisième étape est la clé : personne ne pense que l'Essence de Dieu ressemble à celle d'un homme ; il n'y a donc aucune raison de penser que Son ouïe ressemble à la nôtre. **Le partage du mot ne crée aucune ressemblance de réalité.**"]),
"Ce qui se partage, ce qui ne se partage pas": dev([
  "Cette balance, présente sur le site, fixe les limites de l'usage. **Employable pour la créature** : savant, vivant, généreux, puissant, au sens limité ; roi ou seigneur d'une maison, au sens relatif ; et même « miséricordieux » (rahīm), que le Coran dit du Prophète ﷺ (9:128). **Réservé à Dieu** : « Allāh », « al-Rahmān », « Seigneur des mondes », « le Créateur » au sens absolu, « al-Samad ».",
  "La légende donne le critère : **ce n'est pas le mot seul qui compte, mais l'absoluité de ce qu'il affirme**. On peut dire d'un homme qu'il est puissant ; on ne peut pas dire de lui qu'il est « le Puissant » sans restriction, car cela affirmerait une puissance absolue."]),
"Le même mot, deux réalités": dev([
  "Ce tableau reprend les exemples coraniques qu'al-Shinqītī aligne. Pour **la science**, « Nous n'étions pas absent » (7:7) pour Dieu, et « un garçon plein de science » (51:28) pour Isaac. Pour **la vie**, « le Vivant » (2:255) pour Dieu, et « le jour où il sera ressuscité vivant » (19:15) pour Jean. Pour **l'ouïe et la vue**, « l'Audient, le Voyant » (42:11) pour Dieu, et « Nous l'avons fait entendant et voyant » (76:2) pour l'homme.",
  "Le Coran lui-même pratique donc ce partage des mots, sans aucune gêne. Il nous apprend par là la méthode : **utiliser nos mots pour connaître Dieu, et ajouter « rien ne Lui ressemble » pour ne jamais L'imaginer**."]),
SAV: dev([
  "Ce tableau montre qu'al-Shinqītī applique la même démonstration à chaque attribut, avec une rigueur remarquable, et qu'il rejoint en cela Ibn ʿAbd al-Barr et Sahnūn : on décrit Dieu avec les mots qu'Il a choisis, et l'on s'arrête là où Il s'est arrêté."])
}}

# ---------------------------------------------------------------- Afin que Nous sachions
ADD["« Afin que Nous sachions » : Dieu ignorerait-Il l'avenir ?"] = {"after": {
"Deux sortes de « savoir »": dev([
  "Ce tableau distingue deux choses que le mot « savoir » peut désigner. **La science d'avance** porte sur ce qui arrivera : Dieu l'a de toute éternité. **La science de ce qui est arrivé** porte sur le fait réalisé : elle existe quand la chose s'est produite. La deuxième ligne pose la question décisive : **sur quoi se fonde la rétribution ?** Jamais sur ce que quelqu'un aurait fait, toujours sur ce qu'il a fait.",
  "C'est pourquoi ʿAlī explique « afin que Nous sachions » par « afin que Nous voyions » : Dieu savait d'avance qui resterait fidèle au changement de qibla, mais Il a voulu que cette fidélité **se réalise et devienne visible**, pour que la récompense et le blâme reposent sur des faits."],
  Q("Si Dieu sait d'avance, l'épreuve n'est-elle pas une mise en scène ?",
    "Une mise en scène supposerait que les acteurs ne choisissent pas. Or dans l'épreuve, l'homme choisit réellement : il ne connaît pas ce que Dieu sait, et ses actes sont les siens. L'épreuve n'est pas une pièce de théâtre dont Dieu connaîtrait le texte ; c'est une vie réelle dont Dieu connaît l'issue. Savoir n'est pas forcer.")),
"« Li-naʿlama » : cinq explications complémentaires": dev([
  "Ce schéma réunit les cinq explications rapportées par al-Qurtubī. **Pour que Nous voyions** (ʿAlī) : le savoir de ce qui arrive, une fois arrivé. **Pour que vous sachiez que Nous savons** : les hypocrites doutaient que Dieu connaisse l'avenir, et l'épreuve le leur montre. **Pour distinguer** (Ibn ʿAbbās) : séparer les gens de certitude des gens de doute. **Pour que le Prophète et les siens sachent** (al-Mahdawī) : Dieu S'attribue ce que font Ses envoyés. **Par honneur pour Son Messager** : Dieu attribue à Lui-même le savoir de Muhammad.",
  "Ces explications ne s'excluent pas ; elles se superposent. Toutes ont un point commun : **aucune ne suppose que Dieu apprenne quelque chose qu'Il ignorait**. Toutes expliquent pourquoi l'épreuve est utile alors que Dieu sait déjà."]),
SAV: dev([
  "ʿAlī, Ibn ʿAbbās, al-Mahdawī et al-Qurtubī proposent des explications différentes, mais tous partent du même principe : la science de Dieu est totale, et l'épreuve sert à rendre visible ce qu'Il sait. C'est un bel exemple de divergence qui enrichit au lieu de diviser."])
}}
