# Développement en prose après chaque schéma : groupe d (décret divin).
import importlib.util, os
_s = importlib.util.spec_from_file_location('da', os.path.join(os.path.dirname(__file__), 'dev_a.py'))
_m = importlib.util.module_from_spec(_s); _s.loader.exec_module(_m)
P, Q, dev = _m.P, _m.Q, _m.dev
ADD = {}
SAV = "Les savants sur cette question"

ADD["Le décret et la responsabilité humaine"] = {"after": {
"Pourquoi le décret n'excuse pas le péché": dev([
  "Ce schéma démonte, étape par étape, l'excuse « c'était écrit ». **Je ne connais pas le décret d'avance** : au moment où j'agis, je ne sais pas ce qui est écrit. Je ne peux donc pas dire que je me suis conformé au décret ; je me suis conformé à mon propre choix. **Je connais l'ordre et l'interdit** : ce que Dieu attend de moi m'a été clairement enseigné, et c'est cela qui devait guider mon acte.",
  "**Mon choix est réel** : chacun en fait l'expérience. Personne ne me pousse quand je décide de mentir ou de dire vrai ; je sens que la décision m'appartient. **Le décret n'est connu qu'après coup** : invoquer « c'était écrit » après avoir péché, c'est utiliser une connaissance que je n'avais pas au moment de choisir. C'est une excuse fabriquée a posteriori.",
  "Le dernier nœud donne la conclusion des savants : Ibn ʿAbd al-Barr rapporte **le consensus** selon lequel nul n'a le droit d'invoquer le décret pour excuser un péché. Le voleur ne peut pas dire au juge « c'était écrit » ; le juge pourrait lui répondre, avec la même logique : « ta punition aussi était écrite »."],
  Q("Si Dieu savait que j'allais pécher, pouvais-je faire autrement ?",
    "Oui, au sens où rien ne t'y forçait : tu as choisi. Dieu savait ce que tu choisirais, mais Son savoir n'a pas produit ton choix ; il l'a connu. Un professeur qui prévoit qu'un élève paresseux échouera n'est pas la cause de l'échec. La science de Dieu est infiniment plus sûre que celle du professeur, mais elle reste une connaissance, pas une contrainte.",
    "La balance « Entre la contrainte et l'auto-création », plus bas sur cette page, détaille ce point."),
  Q("Alors pourquoi Adam a-t-il pu invoquer le décret devant Moïse ?",
    "Ibn ʿAbd al-Barr répond : Adam parlait d'une faute dont il s'était déjà repenti et qui lui avait été pardonnée, et Moïse lui reprochait la conséquence, la sortie du Paradis, qui était un décret. On peut invoquer le décret pour un malheur, ou pour une faute déjà effacée par le repentir ; jamais pour justifier un péché qu'on commet ou qu'on refuse de quitter.")),
"Entre la contrainte et l’auto-création": dev([
  "Cette balance, présente sur le site, situe la Sunna entre deux erreurs historiques. **Ce qu'elle affirme** : l'homme a une volonté réelle et une capacité réelle au moment de l'acte ; cette volonté et cette capacité sont elles-mêmes créées par Dieu ; l'acte est véritablement attribué à l'homme ; et le décret englobe l'acte sans le supprimer. **Ce qu'elle écarte** : le jabr, qui fait de l'homme un automate, et la doctrine qadarite, qui fait de l'homme le créateur indépendant de ses actes.",
  "La légende résume l'enjeu en une phrase : **le jabrite supprime l'homme pour sauver Dieu, le qadarite supprime Dieu pour sauver l'homme, la Sunna garde les deux**. On n'a pas à choisir entre la toute-puissance de Dieu et la responsabilité humaine : les deux sont vraies, chacune à son niveau."]),
"De la volonté divine à l’acte du serviteur": dev([
  "Ce schéma, présent sur le site, suit le trajet d'un acte humain du point de vue de la théologie. **Science éternelle** : Dieu sait ce que chacun choisira. **Décret** : cette science est fixée et écrite. **Création de la capacité** : au moment de l'acte, Dieu crée en l'homme le pouvoir d'agir. **Volonté et choix** : l'homme veut et choisit réellement. **Acquisition** : l'acte devient sien, et il en est loué ou blâmé.",
  "La légende insiste : **chaque étape est réelle, aucune n'efface les autres**. L'erreur classique consiste à n'en regarder qu'une : celui qui ne voit que la science divine conclut au fatalisme, celui qui ne voit que le choix humain conclut à l'indépendance de l'homme. La vérité tient la chaîne entière."]),
"Les trois verrous d'Ibn ʿAbd al-Barr": dev([
  "Ce schéma présente les garde-fous qu'Ibn ʿAbd al-Barr pose autour du hadith d'Adam et Moïse. **Le repentir avait eu lieu** : Adam ne s'excusait pas d'un péché en cours, mais parlait d'une faute pardonnée ; Mālik le rapporte de Yahyā ibn Saʿīd. **Moïse blâmait la conséquence** : la sortie du Paradis, qui était une épreuve décrétée. **Il est interdit d'en faire une excuse** : c'est un consensus. **Le blâme reste légitime** : on blâme le péché et on loue l'obéissance, comme Dieu le fait dans Son Livre.",
  "Ces quatre verrous empêchent qu'un hadith authentique devienne une excuse pour le péché. C'est un bel exemple de la manière dont les savants lisent un texte : **à la lumière de tous les autres**, jamais isolément."]),
"Deux registres à ne pas confondre": dev([
  "Ce tableau sépare ce qui relève de Dieu et ce qui relève de moi. **Le décret, la science, l'écriture** sont à Dieu : je n'ai pas à les sonder, car « le qadar est le secret d'Allāh », et je ne serai pas interrogé dessus. **Les ordres et les interdits** sont à moi : je dois les connaître et les accomplir, et je serai interrogé sur chacun d'eux.",
  "La conséquence pratique est libératrice : je n'ai pas à m'épuiser à comprendre comment le décret et ma liberté s'articulent dans le détail. Je dois seulement me demander, chaque jour : **qu'est-ce que Dieu attend de moi maintenant ?** C'est le conseil de ʿUmar ibn ʿAbd al-ʿAzīz à al-Hasan : « demande des comptes à toi-même là où ton Seigneur t'en demandera »."]),
SAV: dev([
  "Ce tableau montre une remarquable continuité : de ʿUmar ibn al-Khattāb à Ibn ʿAbd al-Barr, en passant par ʿUmar ibn ʿAbd al-ʿAzīz, Muhammad ibn Wāsiʿ, Muslim ibn Yasār et Abū l-ʿĀliya, tous refusent de faire du décret une excuse, et tous ramènent l'homme à sa responsabilité concrète."])
}}

ADD["Les quatre degrés de la foi au qadar"] = {"after": {
"Ce que la foi au qadar change": dev([
  "Ce tableau montre que la foi au décret n'est pas une théorie : elle change notre manière de vivre quatre situations. **Devant un échec**, sans cette foi, on tourne en rond : « si seulement j'avais fait autrement ». Avec elle, on peut dire : « j'ai fait ce que je devais, le résultat appartient à Dieu ». Ce n'est pas de la résignation paresseuse ; c'est la paix de celui qui a agi.",
  "**Devant un succès**, sans cette foi, on s'attribue tout. Avec elle, on reconnaît que Dieu a mis en mouvement les causes, et l'orgueil n'a plus de prise. **Devant le danger**, on prend ses précautions, puis on dort en paix, comme ʿAlī qui refusa la garde nocturne. **Devant l'avenir**, la peur de ce qui pourrait arriver cède la place à la confiance : « rien ne nous atteindra hormis ce qu'Allāh a écrit pour nous » (9:51)."],
  Q("Cette paix n'est-elle pas une forme de passivité ?",
    "Non, car elle vient après l'action, pas à sa place. ʿUmar a pris toutes les précautions devant la peste ; ʿAlī combattait en première ligne. La foi au qadar ne supprime pas l'effort ; elle supprime l'angoisse qui paralyse avant l'effort et le désespoir qui détruit après l'échec.")),
"Volonté créatrice et amour divin : deux choses distinctes": dev([
  "Cette balance, présente sur le site, résout une confusion fréquente. **La volonté créatrice** (mashīʾa) porte sur tout ce qui existe, le bien comme le mal : rien n'existe hors d'elle. Elle explique pourquoi le mal peut exister dans un monde créé par un Dieu parfait, sans impliquer qu'Il l'approuve. **L'amour et l'agrément** (mahabba, ridā) ne portent que sur le bien, la foi, l'obéissance : Dieu n'aime pas la mécréance, même s'Il en permet l'existence.",
  "Confondre les deux mène à deux erreurs opposées : croire que Dieu **aime tout** ce qui arrive, y compris le crime, ou croire que ce que Dieu n'aime pas **ne peut pas** arriver. Al-Qurtubī le dit à propos de 39:7 : « la volonté n'est pas l'agrément ; c'est la doctrine des gens de la Sunna »."]),
"Les quatre degrés, un enchaînement obligé": dev([
  "Ce schéma, présent sur le site, montre que les quatre degrés se tiennent. **La science** : Dieu connaît tout ce qui sera. **L'écriture** : cette science est fixée. **La volonté** : rien n'existe sans Sa volonté. **La création** : Il crée toute chose, y compris les actes.",
  "La légende dit : **chaque degré nié entraîne en cascade la ruine des suivants**. Si l'on nie la science, il n'y a rien à écrire ; si l'on nie l'écriture, la science n'est plus fixée ; si l'on nie la volonté, des choses existeraient malgré Dieu ; si l'on nie la création, l'homme serait un second créateur. ʿAbd al-Rahmān ibn Mahdī résumait : « la science, le décret et l'écriture, c'est la même chose »."]),
"Les quatre degrés, vécus au quotidien": dev([
  "Ce cycle traduit chaque degré en attitude. **Il sait** : rien de ce qui m'arrive ne Le surprend. **Il a écrit** : ma vie n'est pas une improvisation, elle a un sens même quand je ne le vois pas. **Il veut** : rien n'arrive dans Son royaume contre Sa volonté. **Il crée** : c'est Lui qui met en mouvement les causes que j'emploie.",
  "Au centre : **la paix du cœur**. C'est la définition de Salmān al-Fārisī mise en pratique : savoir que ce qui t'a atteint ne pouvait pas te manquer."]),
SAV: dev([
  "Ce tableau réunit des voix très diverses, un hadith du Muwatta, des Successeurs, Salmān, ʿAlī, ʿAbd al-Rahmān ibn Mahdī et Ibn ʿAbd al-Barr. Ils ont un point commun : aucun ne présente le décret comme une source d'angoisse. Tous en font une source de paix, à condition de ne pas en faire un sujet de controverse."])
}}

ADD["L'invocation change-t-elle ce qui est écrit ?"] = {"after": {
"Le raisonnement fautif et sa correction": dev([
  "Ce schéma isole l'erreur du raisonnement « tout est écrit, donc la prière est inutile ». **Le raisonnement fautif** imagine le résultat écrit tout seul, comme s'il allait tomber du ciel quoi qu'on fasse. **L'erreur** est là : il sépare le résultat des causes qui y mènent. **La correction** : le résultat est écrit **avec ses causes**. Si Dieu a décrété que tu guérirais, Il a décrété que ce serait par tel remède, telle prière, tel médecin.",
  "**La preuve des Compagnons** clôt le débat : ʿUmar, Ibn Masʿūd et Abū Wāʾil, qui croyaient au décret mieux que quiconque, demandaient à Dieu de les effacer du registre des malheureux. S'ils avaient pensé que la prière était inutile, ils ne l'auraient pas faite autour de la Kaʿba en pleurant."],
  Q("Si mon invocation était écrite, à quoi sert-il que je la fasse ?",
    "Elle était écrite comme une chose que tu ferais, pas comme une chose qui arriverait sans toi. Si tu ne la fais pas, c'est que ce n'était pas cela qui était écrit. Tu ne peux pas te placer en dehors du décret pour le regarder et décider de ne pas agir : ton choix d'agir ou non fait lui-même partie du décret.")),
"Deux sortes de décret, selon les savants": dev([
  "Cette balance, présente sur le site, présente une distinction des savants. **Le décret suspendu** est fixé avec sa condition : « ceci arrivera, sauf si l'invocation est faite ». L'invocation en fait partie comme cause d'évitement. **Le décret scellé** est fixé sans condition : il survient inéluctablement, comme la mort au terme fixé.",
  "La légende contient l'essentiel : **cette distinction n'est pas connue de l'homme au moment où il invoque**. Je ne sais jamais si le malheur que je redoute est suspendu ou scellé ; je dois donc toujours invoquer. Et si le malheur arrive malgré tout, je sais qu'il était scellé, et je l'accueille avec la patience et l'agrément."]),
"L’invocation dans l’ordre du décret": dev([
  "Ce schéma, présent sur le site, suit le trajet d'une invocation exaucée. **Le décret suspendu** est fixé avec sa condition. **Le serviteur invoque** : c'est une cause instituée par Dieu Lui-même. **La condition s'accomplit**. **L'effet survient** : le mal est détourné ou le bien accordé.",
  "La légende est une formule à retenir : **l'invocation n'intervient jamais « contre » le décret ; elle intervient toujours « dans » le décret**. Celui qui prie ne lutte pas contre Dieu ; il entre dans le chemin que Dieu a tracé pour lui accorder ce qu'il demande."]),
"Comment la vie peut-elle être « allongée » ?": dev([
  "Ce tableau présente deux lectures du hadith des liens de parenté. **La lecture spirituelle** : ce qui est allongé, c'est la trace laissée, le bon souvenir, la récompense qui continue ; « c'est comme s'il n'était pas mort ». **La lecture littérale** : le terme inscrit dans le registre des anges est réellement retardé, tandis que ce qui est dans la science de Dieu ne change pas.",
  "Ibn ʿAbbās appuie la seconde lecture sur le verset 6:2, qui parle de deux termes : « Il a décrété un terme, et un terme fixé est auprès de Lui ». Les deux lectures ont un point commun : **entretenir ses liens de parenté produit un effet réel**, dans le temps ou dans la mémoire. C'est un encouragement concret à visiter ses proches."]),
SAV: dev([
  "Les savants réunis ici, ʿUmar, Ibn Masʿūd, Abū Wāʾil, Ibn ʿAbbās et al-Qurtubī, montrent que la question de l'invocation et du décret n'a jamais conduit les premiers musulmans à prier moins. Elle les a conduits à prier mieux, en sachant que leur prière faisait partie du plan de Dieu."])
}}

ADD["De la justice divine et de la souffrance humaine"] = {"after": {
"Deux niveaux de réponse": dev([
  "Ce tableau distingue deux questions qu'on mélange souvent. **La question du droit** : Dieu me doit-Il quelque chose ? Non, répond Ibn ʿAbbās : tout ce que j'ai est un don. L'accusation d'injustice tombe donc, car l'injustice consiste à priver quelqu'un de son dû. **La question de la promesse** : que m'a-t-Il promis ? La miséricorde, la récompense de la patience, la justice parfaite au Jour dernier. L'espérance reste donc vivante au cœur de l'épreuve.",
  "La dernière ligne rappelle **mes devoirs** : ne pas accuser Dieu, et soulager celui qui souffre. La réponse théologique n'est jamais une raison de rester indifférent devant la douleur d'autrui."],
  Q("Cette réponse n'est-elle pas froide devant quelqu'un qui souffre ?",
    "Elle le serait si on la donnait à la place de la compassion. Devant celui qui souffre, on commence par être présent, aider, consoler. La réponse théologique vient pour celui qui, dans sa douleur, se demande si Dieu l'a abandonné ou trahi : elle lui dit que non, que rien ne lui était dû et que pourtant tout lui est promis.")),
"Ce que la souffrance n’est jamais, et ce qu’elle peut être": dev([
  "Cette balance, présente sur le site, protège de deux erreurs. **Ce que la souffrance peut être** : une épreuve qui élève, un rappel qui détourne d'un péril plus grave, une purification qui efface des fautes, et un mystère de sagesse que notre raison ne perce pas toujours. **Ce qu'elle n'est jamais nécessairement** : une preuve que Dieu serait injuste, un signe automatique de châtiment mérité, une raison de désespérer, une réalité arbitraire.",
  "La deuxième case de droite est importante pour la vie concrète : **on ne doit jamais dire à quelqu'un qui souffre que c'est sa faute**. Le juste souffre aussi, et parfois davantage : les prophètes ont été les plus éprouvés des hommes. La légende rappelle qu'un même malheur peut avoir plusieurs fonctions à la fois, connues de Dieu seul."]),
"La souffrance dans l’économie complète de la justice": dev([
  "Ce schéma, présent sur le site, replace la souffrance dans un cadre plus large. **L'épreuve ici-bas** est visible, souvent incomprise. **Ses fonctions cachées** sont connues de Dieu seul. **Le compte n'est pas clos** : la vie d'ici-bas n'épuise pas la rétribution. **Le Jour de la pesée exacte** restitue chaque atome de bien et de mal.",
  "La légende propose une image forte : **juger la justice divine sur la seule scène d'ici-bas, c'est juger une pièce de théâtre en n'en voyant que le premier acte**. L'innocent qui souffre et le coupable qui prospère ne sont pas la fin de l'histoire."]),
SAV: dev([
  "Ibn ʿAbbās, Rabīʿa et Ibn ʿAbd al-Barr répondent ici à la même question, à des époques différentes, avec le même argument : Dieu ne lèse personne en ne donnant pas ce qui ne Lui était pas dû. Et le hadith du Muwatta rappelle que chacun n'aura que ce qui lui a été décrété, ce qui libère de l'envie et de la rivalité."])
}}

ADD["Le mal existe-t-il en soi, ou seulement comme privation ?"] = {"after": {
"Trois réponses au problème du mal": dev([
  "Ce tableau compare trois manières de répondre. **Le dualisme** pose deux puissances, une bonne et une mauvaise. Il explique le mal, mais il détruit l'unicité de Dieu : il y aurait deux créateurs. **La négation du mal** dit que le mal n'existe pas vraiment. Elle préserve Dieu, mais elle ment sur l'expérience et contredit le Coran, qui parle de maladies, d'injustices, de catastrophes.",
  "**La voie d'al-Qurtubī** garde tout : il n'y a qu'un Créateur ; le mal existe réellement ; et pourtant on ne l'attribue pas à Dieu en parole, par une politesse enseignée par les prophètes, et parce que le mal n'a pas de consistance propre qui ferait de lui un rival du bien."]),
"Deux niveaux d’attribution, pour ne pas confondre": dev([
  "Cette balance, présente sur le site, distingue deux niveaux. **La création** : tout ce qui existe, y compris l'acte mauvais en tant qu'événement, est créé par Dieu ; rien n'arrive hors de Sa volonté. **L'acquisition** : le mal en tant que mal n'est pas attribué directement à Dieu ; l'homme acquiert son acte et en porte la responsabilité morale.",
  "Un exemple aide à comprendre : quand un homme frappe injustement quelqu'un, le mouvement de son bras est créé par Dieu, comme tout mouvement ; mais **l'injustice** est celle de l'homme, qui a choisi de frapper. On ne dit pas que Dieu a été injuste ; on dit que l'homme l'a été."],
  Q("Si Dieu crée l'acte, comment l'homme peut-il en être responsable ?",
    "Parce que Dieu crée l'acte que l'homme a choisi. Le choix est réellement celui de l'homme ; Dieu lui donne le pouvoir de le réaliser. C'est ce que les théologiens appellent l'acquisition (kasb). On peut comparer, avec prudence, à un fournisseur d'électricité : il fournit l'énergie à toute la ville, mais c'est chaque habitant qui choisit d'allumer une lampe ou de commettre un dégât avec un appareil.")),
"Création et attribution : deux plans distincts": dev([
  "Ce schéma développe la position d'al-Qurtubī en quatre plans. **La création** : tout vient de Dieu. **La sagesse** : ce qui est mal pour moi dans l'instant s'inscrit dans un ensemble où Dieu ne fait rien en vain. **La parole** : on attribue à Dieu le bien, la guérison, le pardon ; on ne Lui attribue pas le mal pris isolément. **Le cœur** : cette politesse façonne un regard confiant.",
  "Les exemples coraniques sont parlants. Abraham dit « quand je suis malade, c'est Lui qui me guérit » (26:80) : il s'attribue la maladie et attribue la guérison à Dieu. Le jeune compagnon de Moïse dit « seul le Diable m'a fait oublier » (18:63). **Les prophètes parlent de Dieu avec délicatesse**, et cette délicatesse est elle-même un enseignement."]),
SAV: dev([
  "Les sources réunies ici, l'invocation du Prophète ﷺ, al-Qurtubī, Abraham et le compagnon de Moïse, enseignent toutes la même chose : tout est créé par Dieu, et pourtant le croyant ne Lui attribue que le bien. Ce n'est pas une contradiction ; c'est une manière juste de parler de Celui dont la sagesse dépasse ce que nous voyons."])
}}

ADD["Ce que « Dieu égare qui Il veut » signifie, et ne signifie pas"] = {"after": {
"Deux lectures du verset": dev([
  "Ce tableau oppose une lecture fautive et la lecture coranique. **L'ordre des événements** : la lecture fautive imagine que Dieu égare d'abord et que l'homme se perd ensuite ; le Coran dit l'inverse, l'homme refuse en connaissance de cause, puis Dieu le laisse dans son refus. **Qui est égaré** : non pas n'importe qui au hasard, mais « les pervers » (61:5) et « les injustes » (14:27). **La justice** : elle est respectée, car Dieu ne prive de Sa guidée que celui qui l'a repoussée.",
  "**Ce que je dois faire** : ne jamais repousser une vérité que je reconnais, et demander comme les savants enracinés : « ne fais pas dévier nos cœurs après nous avoir guidés » (3:8)."]),
"L'enchaînement décrit par les textes": dev([
  "Ce cycle, présent sur le site, décrit comment un cœur se ferme. **La clarté** : l'argument est exposé, la fitra est intacte. **Le refus** : il est volontaire, souvent motivé par l'intérêt ou l'orgueil. **L'habitude** : le refus répété devient une pente. **L'abandon** : Dieu retire Son assistance ; c'est l'égarement dont parlent les versets.",
  "La légende cite une formule d'Ibn al-Qayyim : **la punition du péché, c'est le péché suivant ; la récompense de la bonne action, c'en est une autre**. Ce n'est pas une fatalité extérieure : c'est la logique même de l'habitude. Celui qui ment une fois ment plus facilement la seconde. Et celui qui fait le bien une fois le fait plus facilement ensuite."]),
"Ce que fait Dieu, ce que fait l'homme": dev([
  "Ce tableau, présent sur le site, distingue deux égarements. **L'égarement initial**, que Dieu imposerait à quelqu'un sans raison : aucun verset ne l'affirme, ce serait une injustice impossible en Dieu, et cela rendrait le châtiment absurde. **L'égarement de sanction**, que Dieu laisse se produire après le refus de l'homme : il est affirmé par plusieurs versets (9:115, 61:5, 40:35, 2:26), et c'est une justice, la privation méritée d'une aide qui était gratuite.",
  "La dernière ligne est décisive : l'égarement de sanction **rend le châtiment intelligible**. On n'est pas puni pour avoir été égaré ; on est égaré parce qu'on a refusé, et c'est ce refus qui est jugé."]),
"Les étapes de l'égarement selon le Coran": dev([
  "Ce schéma suit le verset 61:5 mot à mot. **La connaissance** : « vous savez que je suis le messager d'Allāh ». **Le refus volontaire** : « ils dévièrent ». **La sanction** : « Allāh fit dévier leurs cœurs ». **La règle** : « Allāh ne guide pas les gens pervers ».",
  "La dernière étape demande une lecture attentive : le verset ne dit pas qu'Allāh ne guide **personne**, il dit qu'Il ne guide pas **ceux qui sortent volontairement de Sa voie**. Celui qui revient trouve la porte ouverte, comme le montre l'histoire de tous ceux qui se sont convertis après une longue opposition."],
  Q("Si Dieu a fait dévier un cœur, celui-ci peut-il encore revenir ?",
    "Tant que l'homme vit, la porte du repentir reste ouverte : « ne désespérez pas de la miséricorde d'Allāh » (39:53). L'égarement de sanction n'est pas un verrou définitif posé de l'extérieur ; c'est une pente qui devient plus raide à mesure qu'on la descend. Le retour est plus difficile, mais jamais impossible, et Dieu est plus prompt à revenir vers celui qui revient que celui-ci ne l'est vers Lui.")),
SAV: dev([
  "Ibn al-Zubayr, Ibn ʿAbd al-Barr, Ibn ʿAbbās et Rabīʿa tiennent les deux bouts : rien n'arrive sans la volonté de Dieu, et Dieu n'est pas injuste. La guidée est un don, et celui qui la refuse ne peut pas se plaindre de ne pas l'avoir reçue."])
}}

ADD["Agir alors que tout est su : le paradoxe dissous"] = {"after": {
"Comment le paradoxe se dissout": dev([
  "Ce schéma prend le paradoxe et le défait étape par étape. **La fin est connue de Dieu** : c'est vrai, rien n'échappe à Sa science. **Elle n'est pas connue de moi** : c'est la clé. Je ne peux pas agir en fonction de ce que je ne connais pas. Le paradoxe suppose que je pourrais me placer du point de vue de Dieu, regarder ma fin, puis décider de ne rien faire ; c'est impossible.",
  "**Elle se réalise par mes actes** : le hadith du Muwatta dit que Dieu « emploie aux œuvres des gens du Paradis » celui qu'Il a créé pour le Paradis. La fin n'arrive pas malgré les actes, elle arrive **par** eux. **La facilité est un signe** : je ne connais pas ma fin, mais je connais ce qui m'est facilité aujourd'hui, et le verset 92:7 dit que Dieu facilite la voie la plus aisée à celui qui donne et qui craint."],
  Q("Et si je sens que le mal m'est facilité, est-ce le signe que je suis perdu ?",
    "Non. C'est un signal d'alarme, pas un verdict. Le verset 92:5 donne les conditions : donner, craindre, croire. Si je les remplis, la facilité vers le bien suivra. Personne ne peut lire son destin dans ses difficultés présentes ; on ne peut que changer de direction. Les Compagnons venus tard à l'islam, après des années d'opposition, en sont la preuve.")),
"Ce que le décret n'affirme pas": dev([
  "Cette balance, présente sur le site, corrige quatre malentendus. **Ce qui est vrai** : Dieu sait tout ; Sa science n'est pas la cause de nos actes, elle en est la connaissance ; nous avons une volonté réelle ; le décret inclut les causes, dont notre effort. **Ce qui est faux** : que la prescience contraigne ; que l'homme soit une pierre qui tombe ; que le décret dispense de l'action ; que l'on puisse invoquer le décret pour excuser un péché.",
  "La deuxième ligne de droite contient une image simple : **la différence entre tomber et marcher, chacun l'éprouve**. Nous savons de l'intérieur que nos actes volontaires ne sont pas des chutes. Aucune théorie ne peut effacer cette expérience."]),
"Le raisonnement fautif et la réponse prophétique": dev([
  "Ce tableau met côte à côte le raisonnement des Compagnons et la réponse du Prophète ﷺ. **La prémisse** est la même des deux côtés : la fin est connue d'avance. **La conclusion** diverge : le raisonnement fautif conclut que les actes ne servent à rien ; la réponse prophétique conclut que les actes sont le chemin par lequel la fin se réalise.",
  "**L'erreur** est de séparer la fin des moyens. **Le signe** : là où le raisonnement fautif laisse l'homme dans le noir, la réponse prophétique lui donne une boussole, la facilité vers le bien. Si l'on me facilite le bien, je continue et je remercie ; sinon, je fais ce que demande le verset, et je demande à Dieu de me faciliter la voie."]),
SAV: dev([
  "Ce tableau montre aussi la rigueur des savants : Ibn ʿAbd al-Barr signale que la chaîne du hadith du Muwatta est interrompue, cite le jugement de Yahyā ibn Maʿīn, puis montre que le sens est porté par une vingtaine de Compagnons, dont ʿAlī. On peut faire confiance à une tradition qui critique jusqu'aux textes de son propre imam."])
}}
