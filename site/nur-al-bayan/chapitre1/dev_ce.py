# Développement en prose après chaque schéma : groupes c (noms divins) et e (adoration).
import importlib.util, os
_s = importlib.util.spec_from_file_location('da', os.path.join(os.path.dirname(__file__), 'dev_a.py'))
_m = importlib.util.module_from_spec(_s); _s.loader.exec_module(_m)
P, Q, dev = _m.P, _m.Q, _m.dev
ADD = {}
SAV = "Les savants sur cette question"

# ================================================================ c. Noms divins
ADD["Un nom, quatre-vingt-dix-neuf, ou davantage ?"] = {"after": {
"Ce que dit le hadith, et ce qu'il ne dit pas": dev([
  "Ce tableau lit le hadith avec précision. **Sur le nombre**, il dit qu'il y a quatre-vingt-dix-neuf noms liés à une promesse ; il ne dit pas que Dieu n'en a que quatre-vingt-dix-neuf. C'est comme si l'on disait « ce professeur a dix livres qu'il recommande » : cela ne veut pas dire qu'il n'en a lu que dix. **Sur la liste**, Ibn ʿAtiyya rappelle que la version la plus sûre du hadith ne la donne pas ; la liste qui circule vient d'une autre version, moins solidement transmise.",
  "**Sur le mérite**, le hadith promet le Paradis à « quiconque les dénombre ». Les savants ont expliqué que « dénombrer » ne veut pas seulement dire réciter, mais connaître, comprendre et vivre selon ces noms. Une récitation mécanique sans compréhension n'est pas ce que vise le hadith."],
  Q("Alors la liste des 99 noms qu'on apprend est-elle fausse ?",
    "Elle n'est pas fausse : la plupart des noms qu'elle contient sont attestés dans le Coran ou la Sunna. Mais elle n'est pas une liste fermée dictée mot à mot par le Prophète ﷺ selon la transmission la plus sûre. On peut l'apprendre avec profit, en sachant que Dieu a d'autres noms, comme le dit l'invocation « ceux que je connais et ceux que je ne connais pas ».")),
"Trois strates dans les noms divins": dev([
  "Ce schéma, présent sur le site, distingue quatre niveaux. **Les noms révélés dans le Coran** : al-Rahmān, al-ʿAzīz, al-Hakīm, attestés par le texte lui-même. **Les noms attestés dans la Sunna** : certains figurent dans des invocations prophétiques sans être coraniques. **Les noms retenus dans les quatre-vingt-dix-neuf** : une sélection savante, utile à la mémorisation. **Les noms gardés dans la science du mystère** : connus de Dieu seul, mentionnés dans un hadith, jamais énumérables par nous.",
  "La quatrième strate est la plus humble : elle nous rappelle qu'il y a en Dieu **une part que nous ne connaîtrons jamais**, même par Ses noms. Et pourtant, nous pouvons l'invoquer, comme Kaʿb le faisait : par « tous Tes noms, ceux que je connais et ceux que je ne connais pas »."]),
"Ce qui fait qu’un mot est reconnu comme nom divin": dev([
  "Cette balance, présente sur le site, donne trois critères. **Le mot doit se dire de Dieu à Sa propre initiative** : par la révélation, non par invention humaine. **Il doit exprimer une perfection absolue**, sans aucune trace d'imperfection possible. **Il doit être employé comme nom**, et pas seulement comme verbe conjugué.",
  "Ces critères expliquent pourquoi les listes savantes diffèrent un peu : tous les savants ne les appliquent pas de la même manière aux cas limites. La légende le dit honnêtement. Mais **le principe est le même pour tous** : on ne nomme pas Dieu comme on veut, on Le nomme comme Il S'est nommé."]),
"Pourquoi certaines invocations sont exaucées et d'autres non": dev([
  "Ce tableau corrige une croyance répandue : l'idée qu'il existerait un nom secret, un mot magique qui garantirait l'exaucement. **Ce qu'on croit souvent** : la clé serait une formule, un nom supérieur aux autres. **Ce que répond al-Tabarī** : tous les noms de Dieu sont immenses ; « le nom suprême » veut dire « le nom immense », comme le montre une autre version du hadith.",
  "**Ce qui fait la différence**, ce n'est pas le mot, c'est **l'état de celui qui invoque**, et le décret de Dieu. Al-Tabarī donne une preuve d'expérience : on répète parfois les mêmes mots que ceux qui ont été exaucés, sans être exaucé. Le secret n'était donc pas dans les mots, mais dans le cœur et la situation de celui qui les prononçait."],
  Q("Mais le hadith parle bien d'un « nom suprême » ?",
    "Oui, et al-Tabarī, cité par Ibn Battāl, explique que les hadiths qui le mentionnent désignent des noms immenses, comme Allāh, ou les formules de l'unicité, sans qu'il s'agisse d'une clé secrète. Ibn al-Qābisī ajoute qu'on ne peut pas dire qu'un nom de Dieu soit « plus grand » qu'un autre au point d'en être distinct. L'essentiel est l'invocation sincère, avec un cœur présent.")),
SAV: dev([
  "Ce tableau montre que les plus grands savants malikites, Ibn ʿAtiyya, al-Qurtubī, al-Dāwūdī, Ibn al-Qābisī, ont refusé d'enfermer les noms de Dieu dans une liste fixe. Leur humilité est une leçon : connaître Dieu, c'est aussi savoir qu'on ne Le connaît jamais entièrement."])
}}

ADD["Extraire un nom à partir d'un verbe coranique : les conditions"] = {"after": {
"Les conditions d'un nom divin": dev([
  "Ce schéma donne les conditions dans l'ordre. **Attesté** : le nom doit figurer dans le Coran ou la Sunna authentique ; on ne crée pas de nom par analogie. **Parfait** : il doit exprimer une perfection sans imperfection possible. **Absolu** : il doit garder sa perfection sans avoir besoin d'un contexte. **Sinon** : on garde la formule telle que le texte la dit, sans en faire un nom.",
  "La troisième condition est la plus subtile. « Rusé » n'est une perfection que dans le contexte de la réponse à des rusés : Dieu déjoue la ruse des injustes. Isolé, le mot évoquerait la tromperie. C'est pourquoi on dit, comme le Coran, « le meilleur de ceux qui rusent », et non « le Rusé »."]),
"Ce qui autorise l’extraction d’un nom, ce qui l’interdit": dev([
  "Cette balance, présente sur le site, donne des exemples concrets. **Extraction légitime** : al-Ghafūr, al-Rahīm, al-ʿAlīm, al-Qadīr, al-Samīʿ, al-Basīr ; ce sont des perfections absolues, attestées sans restriction de contexte. **Extraction refusée** : al-Mākir isolé, al-Muʿadhdhib (Celui qui châtie), al-Nāsī (Celui qui oublie) ; leur sens brut, figé en nom permanent, évoquerait un défaut.",
  "La légende contient une règle importante : **la grammaire seule ne suffit jamais à fonder un nom divin**. Ce n'est pas parce qu'un verbe existe qu'on peut en tirer un participe et l'appeler nom de Dieu. Il faut la convergence du sens, du contexte et de l'attestation."]),
"Le trajet d’un verbe coranique vers un nom légitime": dev([
  "Ce schéma, présent sur le site, montre le parcours qu'un verbe doit faire pour devenir un nom. **Un verbe attesté dans le Coran**, point de départ. **L'examen du contexte** : le sens est-il restreint à une circonstance défavorable ? **L'examen de la perfection** : isolé, le sens reste-t-il une perfection ? **La recherche d'attestation** : un usage reconnu valide-t-il la forme ? **Le nom reconnu**, seule issue si tout est franchi.",
  "La légende est claire : **un seul maillon manquant suffit à refuser le nom**. Cette rigueur protège Dieu de toute expression qui pourrait L'abaisser, et protège le croyant de toute invention."]),
"« Khayr al-mākirīn » : ce qui est permis, ce qui ne l'est pas": dev([
  "Ce tableau applique les règles à un cas réel. **Permis** : dire « le meilleur de ceux qui rusent » tel que le Coran le dit, en contexte ; invoquer « ruse en ma faveur et non contre moi », formule prophétique rapportée par al-Tirmidhī. **Non permis** : dire « le Rusé » comme nom absolu ; dire « Ô Rusé » sans qualification.",
  "La dernière ligne montre que les savants malikites ont débattu : Ibn al-ʿArabī a compté « le meilleur de ceux qui rusent » parmi les noms, Ibn al-Hassār a critiqué l'ajout de noms non attestés, et al-Qurtubī a tranché en permettant l'invocation sur la base du hadith. **Le débat porte sur la limite, pas sur le principe.**"],
  Q("Comment Dieu peut-Il « ruser » s'Il est parfaitement juste ?",
    "Al-Farrāʾ explique que la ruse de Dieu consiste à amener progressivement les injustes vers leur perte sans qu'ils s'en rendent compte, et al-Zajjāj qu'elle est la rétribution de leur ruse, nommée du même nom. Ibn ʿAbbās dit : « chaque fois qu'ils commettaient une faute, Nous leur renouvelions un bienfait ». C'est donc une justice qui retourne contre l'injuste son propre plan.")),
SAV: dev([
  "Les savants réunis ici, al-Farrāʾ, Ibn ʿAbbās, al-Zajjāj, Ibn al-ʿArabī, Ibn al-Hassār et al-Qurtubī, montrent une école qui discute avec rigueur, cas par cas, en revenant toujours aux textes. Aucun n'accepte qu'on nomme Dieu d'un nom qui suggérerait un défaut."])
}}

ADD["Al-Rahmān et al-Rahīm : deux miséricordes, deux portées"] = {"after": {
"Les deux miséricordes": dev([
  "Ce schéma pose les deux miséricordes et leurs proportions. **Al-Rahmān** : la pluie, la vie, la santé, le délai pour revenir, pour toute créature. **Al-Rahīm** : la guidée, le pardon, la proximité, pour ceux qui répondent. **Un centième ici-bas** : toute la tendresse du monde vient d'une seule part sur cent. **Quatre-vingt-dix-neuf réservées** pour le Jour de la Résurrection, selon al-Muhallab.",
  "Si l'on garde ces proportions en tête, la question de la souffrance change de visage : ce que nous voyons de la miséricorde ici-bas est **le plus petit fragment** de ce qui existe. Juger la miséricorde de Dieu sur ce monde, c'est juger un océan sur une goutte."]),
"Deux miséricordes, deux régimes": dev([
  "Cette balance, présente sur le site, compare les deux noms. **Al-Rahmān**, miséricorde d'étendue : elle touche toute créature, se manifeste dans les bienfaits de ce monde, et c'est un nom jamais employé pour une créature. **Al-Rahīm**, miséricorde d'élection : elle est réservée aux croyants, se manifeste par des actes choisis comme le pardon, et c'est un adjectif qu'on peut dire d'un homme miséricordieux.",
  "La légende répond à une objection : **la souffrance d'ici-bas ne dément pas al-Rahmān**, car elle appartient à un ordre où la miséricorde d'élection, al-Rahīm, n'a pas encore dit son dernier mot."],
  Q("Si al-Rahmān touche tout le monde, pourquoi certains vivent-ils dans la misère ?",
    "La miséricorde générale n'est pas l'absence d'épreuve ; c'est le fait que même dans l'épreuve, la vie, le souffle, la capacité de revenir sont donnés. Et l'épreuve elle-même peut être une miséricorde, quand elle élève ou purifie. Le hadith des cent parts dit que nous n'en voyons qu'un centième : la plus grande part de la miséricorde est encore à venir.")),
"De la matrice à l’au-delà : le trajet de la miséricorde": dev([
  "Ce schéma, présent sur le site, part de la racine du mot. **La matrice** (al-rahim) : le lieu où le plus vulnérable est protégé, avant même de naître. C'est l'image même de la miséricorde : protéger celui qui ne peut rien. **Al-Rahmān**, miséricorde universelle. **Al-Rahīm**, miséricorde d'élection. **En ce monde**, subsistance et guidée envoyées à tous. **Dans l'au-delà**, accueil et pardon pour les croyants.",
  "La racine elle-même enseigne : Dieu a choisi, pour dire Sa miséricorde, le mot qui désigne **le ventre de la mère**. Toute la tendresse maternelle n'est qu'une image, et une image imparfaite, de ce qu'Il est."]),
"La formule de la majorité, expliquée": dev([
  "Ce tableau explique la formule « nom particulier, action générale ; nom général, action particulière ». **Le nom** : al-Rahmān est réservé à Dieu ; al-Rahīm peut se dire d'un homme, et le Coran le dit du Prophète ﷺ (9:128). **L'action** : al-Rahmān touche tout le monde ; al-Rahīm vise surtout les croyants.",
  "Les deux dernières lignes donnent les explications d'al-ʿArzamī et d'Ibn al-Mubārak. La seconde est saisissante : **al-Rahīm se fâche quand on ne Lui demande pas**. C'est le contraire des hommes, qui se lassent de ceux qui demandent. La miséricorde divine attend qu'on la sollicite."]),
SAV: dev([
  "Les savants cités ici, d'Abū ʿAlī al-Fārisī à al-Muhallab, convergent : la miséricorde de Dieu a deux portées, l'une générale, l'autre particulière, et leur réunion dans la Basmala est, selon al-Mubarrad, « une faveur après une faveur ». C'est un encouragement à l'espérance pour quiconque prononce ces deux noms."])
}}

ADD["Al-Hakīm : la sagesse comme mise en ordre"] = {"after": {
"Notre sagesse et la Sienne": dev([
  "Ce tableau oppose deux sagesses. **La science sur laquelle elles s'appuient** : la nôtre est partielle et limitée au présent ; la Sienne est totale, elle embrasse le passé, le présent, l'avenir et toutes les conséquences. **Ce qu'elles voient** : nous voyons un fragment, Il voit l'ensemble. **L'attitude juste** : dire « je ne sais pas » quand on ne sait pas, comme ʿAlī, et dire comme les anges « c'est Toi le Savant, le Sage ».",
  "Ce tableau ne demande pas de renoncer à comprendre. Il demande de **reconnaître la limite de ce qu'on comprend**. Un enfant qui ne comprend pas pourquoi on lui fait un vaccin n'a pas raison de penser que ses parents sont cruels : il lui manque seulement une information."],
  Q("Mais si je ne vois jamais la sagesse, comment savoir qu'elle existe ?",
    "Parce que je la vois souvent ailleurs. Combien d'épreuves passées ai-je comprises après coup ? Combien de portes fermées m'ont conduit vers quelque chose de meilleur ? Cette expérience répétée fonde une confiance raisonnable pour les cas où je ne vois pas encore. Et le Coran donne l'exemple de Moïse et al-Khidr : ce qui paraissait absurde avait une sagesse cachée (18:60-82).")),
"Deux manières de comprendre la sagesse divine": dev([
  "Cette balance, présente sur le site, précise ce qu'on affirme. **Ce qui est affirmé** : chaque acte de Dieu comporte une sagesse réelle, connue ou inconnue de nous ; cette sagesse profite aux créatures ; et notre ignorance d'une sagesse particulière n'en prouve pas l'absence. **Ce qui est écarté** : que Dieu agirait pour combler un manque en Lui ; qu'une finalité extérieure Le contraindrait ; et que l'absence de sagesse apparente autoriserait à parler de désordre.",
  "La légende résume l'enjeu : **affirmer la sagesse divine sans lui prêter le besoin** qui accompagne la sagesse humaine. Nous agissons avec sagesse parce que nous avons besoin de quelque chose ; Dieu agit avec sagesse sans avoir besoin de rien."]),
"Les trois faces d’al-Hakīm": dev([
  "Ce schéma, présent sur le site, montre trois sens réunis dans le nom. **Al-hukm, le jugement** : trancher entre le vrai et le faux, le licite et l'illicite. **Al-hikma, la finalité droite** : choisir la meilleure fin et le meilleur moyen. **Al-ihkām, la solidité de l'œuvre** : une exécution sans faille, sans excès ni manque.",
  "Ces trois faces se retrouvent dans la création : **les lois** que Dieu a données sont un jugement juste, **le but** qu'Il a fixé à la vie humaine est une finalité droite, et **le monde** qu'Il a fait est une œuvre solide, dont la science découvre chaque jour la précision."]),
SAV: dev([
  "Les sources réunies ici, la parole des anges, al-Qurtubī, ʿAlī, Ibn ʿUmar et Abū Bakr, ont un point commun : elles enseignent l'humilité intellectuelle comme porte d'entrée vers la sagesse divine. Celui qui sait dire « je ne sais pas » est prêt à reconnaître que Dieu sait."])
}}

ADD["Al-Samad, ou l'autosuffisance : commentaire de sourate al-Ikhlās"] = {"after": {
"Al-Samad, un nom à deux faces": dev([
  "Ce schéma montre les deux faces du nom. **Notre face** : tout être a besoin de Lui, et l'on se tourne vers Lui dans chaque besoin. **Sa face** : Il se passe de tout être ; Abū Hurayra Le définit comme « Celui qui se passe de tous, et dont tous ont besoin ». **Ce qui en découle** : Il n'engendre pas et n'est pas engendré, car, comme le dit Ubayy ibn Kaʿb, seul ce qui meurt a besoin d'héritiers. **Ce que j'en fais** : je ne fais d'aucune créature mon « samad ».",
  "La dernière case est la plus pratique. Chacun a tendance à faire d'une créature son recours ultime : un parent, un patron, un médecin, une banque. Le nom al-Samad me rappelle que **tous ont besoin, comme moi**, et qu'aucun ne peut être le recours ultime."]),
"Al-Samad : deux mouvements en un seul mot": dev([
  "Cette balance, présente sur le site, détaille les deux mouvements. **Ce que le mot affirme de Dieu** : aucun besoin, aucun manque, une perfection achevée, une maîtrise qui ne s'appuie sur aucun secours. **Ce que le mot affirme des créatures** : qu'elles ne peuvent se suffire à elles-mêmes, qu'il n'existe pas d'autre recours véritable, et que la convergence de tous les besoins vers Lui ne diminue en rien Sa perfection.",
  "La légende résume : un seul mot tient ensemble **l'autosuffisance de Dieu et la dépendance universelle de tout le reste**. C'est pourquoi ce nom est au cœur de la sourate qui vaut, selon le hadith, un tiers du Coran."]),
"La structure en boucle de sourate al-Ikhlās": dev([
  "Ce schéma, présent sur le site, montre l'architecture de la sourate. **Le verset 1** pose l'unicité : « Il est Allāh, Unique ». **Le verset 2** donne son fondement : « Allāh, al-Samad ». **Le verset 3** en tire la conséquence : « Il n'a pas engendré et n'a pas été engendré ». **Le verset 4** revient au mot « ahad » : « nul n'est égal à Lui ».",
  "La sourate forme donc **une boucle** : elle commence et finit par « ahad », et au centre se trouve al-Samad, qui explique tout. Pourquoi Dieu est-Il unique ? Parce qu'Il n'a besoin de rien. Pourquoi n'engendre-t-Il pas ? Parce qu'Il n'a besoin de rien. Pourquoi rien ne Lui est égal ? Parce que tout le reste a besoin de Lui."]),
"Les sens d'al-Samad rapportés par al-Qurtubī": dev([
  "Ce tableau réunit les sens donnés par les Compagnons et leurs élèves. Chacun éclaire une facette. **Celui vers qui l'on se tourne** (Ibn ʿAbbās). **Le Maître à la seigneurie parfaite** (ʿAlī, Ibn ʿAbbās, Abū Wāʾil, Sufyān). **Celui qui n'engendre pas** (Ubayy). **Celui qui se passe de tous** (Abū Hurayra). **Celui qu'on vise et qu'on appelle** (al-Suddī). **Le Permanent**. **Le Parfait sans défaut** (Muqātil).",
  "Al-Qurtubī retient le premier, parce que **l'étymologie l'atteste** : en arabe, « samada ilayhi » veut dire « se diriger vers quelqu'un ». Mais les autres sens ne sont pas faux ; ils sont **les conséquences** du premier. Celui vers qui tout se tourne doit nécessairement être parfait, permanent, sans besoin et sans descendance."]),
"Vivre avec le nom al-Samad": dev([
  "Ce cycle traduit le nom en quatre attitudes. **Dans le besoin**, je me tourne vers Lui en premier, et non en dernier recours. **Dans la richesse**, je me souviens que ce que j'ai vient de Lui. **Devant les hommes**, je ne fais d'aucun d'eux mon recours ultime, car ils ont besoin comme moi. **Dans la prière**, je sais que Celui qui se passe de tous ne prie pas pour Lui-même : c'est moi qui en ai besoin.",
  "Ce nom libère d'une double dépendance : la dépendance envers les hommes, et l'illusion de se suffire à soi-même."]),
SAV: dev([
  "Les savants réunis ici donnent des définitions différentes, mais toutes convergent vers la même réalité : un Dieu dont tout dépend et qui ne dépend de rien. Al-Qurtubī, avec al-Khattābī, en retient le sens que l'étymologie confirme, sans rejeter les autres."])
}}

ADD["Invoquer Dieu par Ses noms : ce qui est rapporté et ce qui est inventé"] = {"after": {
"Invocation rapportée et invocation inventée": dev([
  "Ce tableau compare deux manières d'invoquer. **Sa force** : l'invocation rapportée tire sa force de la relation avec Dieu ; l'invocation inventée la cherche dans un nombre, une combinaison de lettres, un objet. **Son lien au besoin** : « Ô Celui qui ouvre, ouvre-moi » correspond au besoin ; un nom répété mécaniquement ne correspond à rien. **Sa source** : le Coran et la Sunna d'un côté, des traditions tardives de l'autre. **Le risque** : croire qu'une formule agit par elle-même, ce qui est une porte vers la superstition.",
  "Le critère central est le premier : **d'où vient l'efficacité ?** Si je crois qu'elle vient de Dieu, je L'invoque avec humilité, quel que soit le nombre de mots. Si je crois qu'elle vient de la formule, je deviens un technicien de la prière, et je m'éloigne de Celui que je prétends invoquer."]),
"Ce qui distingue le tawassul légitime de ses contrefaçons": dev([
  "Cette balance, présente sur le site, donne des critères précis. **Pratique légitime** : invoquer un nom attesté, dans son sens juste, en rapport avec la demande ; s'en remettre à Dieu sans prétendre à un effet garanti ; se fonder sur un texte authentifié. **Pratique déviante** : répéter un nom un nombre de fois calculé selon la valeur numérique des lettres pour obtenir un effet automatique ; prétendre qu'un nom gravé sur une amulette agit par lui-même ; forger des invocations en les attribuant au Prophète ﷺ.",
  "La légende donne la règle décisive : **le critère n'est jamais l'efficacité ressentie, mais la conformité au texte et à son sens**. Beaucoup de pratiques inventées « marchent » en apparence ; cela ne prouve rien, car Dieu exauce aussi celui qui L'invoque maladroitement, par miséricorde."],
  Q("Si une pratique m'a aidé, pourquoi l'abandonner ?",
    "Si elle t'a aidé, c'est Dieu qui t'a aidé, pas la pratique. La question est de savoir si tu continues à te tourner vers Lui, ou vers la formule. Les invocations authentiques donnent le même bien, sans le risque de croire qu'un nombre ou un objet détient un pouvoir.")),
"Du texte révélé à la pratique : trois filtres nécessaires": dev([
  "Ce schéma, présent sur le site, donne une méthode de vérification. **Le nom est-il attesté** dans le Coran ou la Sunna ? **La formule est-elle transmise** par une chaîne fiable ? **Le sens correspond-il à la demande ?** **Une garantie mécanique est-elle prétendue ?** Si la réponse aux trois premières est oui et à la quatrième non, la pratique est valide.",
  "La légende est encourageante : **quatre questions simples suffisent** à démasquer la plupart des pratiques inventées. Pas besoin d'être savant pour les poser ; il suffit d'avoir le réflexe de demander d'où vient ce qu'on nous propose."]),
"Accorder le nom au besoin": dev([
  "Ce schéma applique la méthode d'al-Qurtubī et d'Ibn al-ʿArabī à cinq situations. **Je suis fautif** : « Ô Celui qui accueille le repentir, accueille le mien ». **Je suis perdu** : « Ô Guide, guide-moi ». **Je suis dans le besoin** : « Ô Pourvoyeur, pourvois-moi ». **Je suis bloqué** : « Ô Celui qui ouvre, ouvre-moi ». **Je ne sais pas quoi dire** : « Ô Allāh », le nom qui contient tous les autres.",
  "Cette méthode transforme l'invocation : au lieu de réciter des formules, je **parle à Dieu avec Ses noms**, et chaque nom devient une porte adaptée à ma situation. C'est aussi une manière d'apprendre les noms : on les retient mieux quand on les a utilisés dans sa propre vie."]),
SAV: dev([
  "Al-Qurtubī, Ibn al-ʿArabī, Ibn al-Hassār et Muqātil montrent qu'invoquer par les noms est un acte simple et profond : on s'adresse à Dieu Lui-même, par les noms qu'Il a choisis, en accordant chaque nom à sa demande. Rien de mystérieux ni de technique."])
}}

# ================================================================ e. Adoration
ADD["Reconnaître Dieu comme unique divinité"] = {"after": {
"Pourquoi l'adoration n'est due qu'à Dieu": dev([
  "Ce schéma suit un raisonnement en quatre étapes. **Adorer, c'est se soumettre** avec la conviction que l'adoré détient notre bien et notre mal : c'est la définition d'Ibn ʿĀshūr. **Seul Dieu détient réellement** ce pouvoir : les saints, les astres, les idoles sont eux-mêmes créés et dépendants. **Donc l'adoration Lui revient** : la donner à un autre, c'est se tromper sur la réalité. **Et cela profite à l'homme** : Dieu n'en a pas besoin, c'est l'homme qui y trouve sa finalité.",
  "Le raisonnement est simple, mais il a une conséquence immense : **adorer un autre que Dieu n'est pas d'abord une offense, c'est une erreur**, comme demander de l'eau à un puits sec. Le Coran le dit : « ceux que vous invoquez en dehors de Lui ne possèdent même pas la pellicule d'un noyau de datte » (35:13)."],
  Q("Honorer un saint, est-ce l'adorer ?",
    "Honorer, respecter, aimer un homme pieux n'est pas l'adorer. Ce qui devient adoration, c'est lui adresser une invocation, un sacrifice ou une crainte comme s'il détenait par lui-même un pouvoir sur notre destin. La balance présente plus bas sur cette page trace cette limite précisément.")),
"Ce que suppose vraiment la reconnaissance de l’unique divinité": dev([
  "Cette balance, présente sur le site, détaille ce que l'unicité du culte implique. **Elle implique** de diriger toute invocation vers Dieu seul, de ne vouer de sacrifice qu'à Lui, de placer en Lui seul l'espérance ultime et la crainte révérencielle, et de reconnaître que croire en Dieu sans Lui réserver le culte **ne suffit pas**. **Elle exclut** d'invoquer un saint ou un défunt comme s'il agissait par lui-même, de croire qu'un objet peut détourner une part du culte, et de séparer la croyance en Dieu de l'adoration exclusive.",
  "La dernière ligne de gauche est celle que l'histoire des Mecquois rend évidente : ils reconnaissaient Allāh comme Créateur, et pourtant le Coran les appelle associateurs. **La reconnaissance de Dieu est nécessaire, mais c'est l'exclusivité du culte qui fait le croyant.**"]),
"De la reconnaissance à l’exclusivité : la chaîne du tawhīd": dev([
  "Ce schéma, présent sur le site, montre comment les trois volets du tawhīd s'enchaînent. **La rubūbiyya** : Dieu seul crée et gouverne, ce que même les idolâtres admettaient. **Le constat logique** : Celui qui crée seul mérite d'être adoré seul. **L'ulūhiyya** : l'exclusivité du culte. **Les noms et attributs** : connaître Celui qu'on adore, pour L'adorer avec justesse.",
  "La légende insiste : **ces volets ne sont pas juxtaposés, ils s'enchaînent**. C'est l'argument constant du Coran : « Ô hommes, adorez votre Seigneur, qui vous a créés » (2:21). La création fonde l'adoration."]),
"Deux sortes de « volonté » divine": dev([
  "Ce tableau, tiré d'Ibn ʿĀshūr, distingue deux sens du mot « vouloir » appliqué à Dieu. **La volonté qui décrète** (cosmique) : rien n'arrive sans elle, elle se réalise toujours. **La volonté qui agrée** (législative) : c'est ce que Dieu aime et demande ; elle ne se réalise pas toujours, car l'homme peut s'en écarter.",
  "Le verset « Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent » parle de la seconde. Il ne dit pas que tous adoreront forcément ; il dit **ce que Dieu agrée pour eux**. Cette distinction résout l'objection : « si Dieu a créé les hommes pour L'adorer, pourquoi tant ne L'adorent-ils pas ? »"]),
SAV: dev([
  "Ibn ʿĀshūr, ʿAlī, Mujāhid et Ibn ʿAbbās donnent des explications complémentaires du verset de la finalité. Ibn ʿĀshūr les dépasse en montrant que l'homme est constitué pour l'unicité, et que l'adoration est ce que Dieu agrée pour lui. Toutes ces lectures disent que l'homme trouve son sens en adorant son Créateur."])
}}

ADD["Ce qu'est réellement le shirk, et ses degrés"] = {"after": {
"Les degrés du shirk": dev([
  "Ce tableau classe les situations selon ce qui se passe dans le cœur. **Le grand shirk** : attribuer à une créature un pouvoir propre de créer, de donner ou de guérir. Il fait sortir de la religion. **L'expression maladroite** : employer une formule héritée de la Jāhiliyya tout en croyant que Dieu seul agit. Ce n'est pas de la mécréance, mais al-Shāfiʿī et Mālik recommandent de l'éviter. **Le shirk discret** : accomplir une œuvre à la fois pour Dieu et pour le regard des gens.",
  "Ce classement protège de deux excès : **traiter de mécréant** celui qui emploie une expression maladroite, et à l'inverse **minimiser** le grand shirk sous prétexte que l'intention serait bonne. Ibn ʿAbd al-Barr nous apprend à regarder la croyance du cœur avant de juger les mots."]),
"Situer un acte : shirk majeur, mineur, ou licite ?": dev([
  "Cette balance, présente sur le site, donne des exemples concrets. **Restent dans le licite** : demander l'aide d'un vivant présent et capable ; prendre un médicament comme cause permise par Dieu ; espérer la satisfaction des gens sans qu'elle prime sur celle de Dieu ; fermer sa porte en sachant que cela n'écarte rien sans Sa permission. **Basculent dans le shirk** : invoquer un mort comme s'il entendait et répondait par lui-même ; croire qu'une amulette repousse le mal ; faire un acte d'adoration pour être vu ; craindre une cause seconde plus que Dieu.",
  "La légende donne la question décisive : **à qui, en dernière analyse, le cœur attribue-t-il le pouvoir ?** Le même geste peut être licite ou interdit selon la réponse à cette question."],
  Q("Demander à un vivant de prier pour moi, est-ce du shirk ?",
    "Non. Les Compagnons demandaient au Prophète ﷺ de prier pour eux, et le Prophète ﷺ a demandé à ʿUmar de prier pour lui. Demander à un vivant présent ce qu'il peut faire, comme invoquer Dieu pour toi, est licite. Ce qui devient problématique, c'est de demander à un absent ou à un mort ce que seul Dieu peut accorder.")),
"Les trois degrés du shirk et leurs conséquences": dev([
  "Ce schéma, présent sur le site, nomme trois degrés et leur remède unique. **Le shirk majeur** fait sortir de l'islam. **Le shirk mineur**, comme l'ostentation, ne fait pas sortir de l'islam mais corrompt la sincérité. **Le shirk caché** est un mouvement discret du cœur, souvent inconscient, qui exige une vigilance constante. **L'ikhlās**, la sincérité, est l'antidote aux trois.",
  "Le troisième degré concerne tout le monde, y compris les plus pieux : qui peut affirmer que son intention est parfaitement pure à chaque instant ? C'est pourquoi le hadith qudsī « Je suis l'Associé qui se passe le mieux d'associés » est un avertissement adressé à chaque croyant, pas seulement aux idolâtres."]),
"« Nous avons eu la pluie par telle étoile » : deux intentions": dev([
  "Ce tableau montre comment une même phrase peut avoir deux jugements opposés. **Premier cas** : celui qui croit que l'étoile fait descendre la pluie et crée les nuages, indépendamment de Dieu. Ibn ʿAbd al-Barr dit : mécréance explicite, qui fait sortir de la religion. **Second cas** : celui qui voit dans l'étoile un signe ou une saison que Dieu a établis comme cause parmi d'autres. Ibn ʿAbd al-Barr dit : c'est un croyant.",
  "La dernière ligne donne le conseil pratique : même dans le second cas, il vaut mieux dire comme Abū Hurayra, « par la grâce d'Allāh et Sa miséricorde ». Al-Shāfiʿī propose de dire « à telle saison » plutôt que « par telle étoile ». **Les mots façonnent le cœur** : parler comme les idolâtres finit par faire penser comme eux."]),
SAV: dev([
  "Ce tableau montre l'accord de Mālik, d'al-Shāfiʿī et d'Ibn ʿAbd al-Barr : le jugement dépend de la croyance, et la prudence recommande d'éviter même les expressions ambiguës. Al-Qurtubī ajoute le hadith qudsī qui fait de la sincérité la condition de toute œuvre."])
}}

ADD["L'intercession : les versets qui la limitent, ceux qui l'affirment"] = {"after": {
"Intercession niée et intercession affirmée": dev([
  "Ce tableau résout la contradiction apparente entre les versets. **Qui l'exerce** : l'intercession niée est celle des idoles et des êtres qu'on adore à côté de Dieu ; l'intercession affirmée est celle des prophètes, des anges, des savants et des croyants que Dieu honore. **Comment** : la première serait une pression sur Dieu, comme on fait pression sur un roi ; la seconde se fait par Sa permission. **Pour qui** : la première prétend profiter à n'importe qui ; la seconde ne profite qu'à ceux qu'Il agrée.",
  "La dernière ligne donne l'attitude juste : **ne pas adorer l'intermédiaire, mais demander à Dieu de nous faire bénéficier de son intercession**. On ne s'adresse pas au Prophète ﷺ en disant « intercède pour moi » comme s'il entendait et décidait ; on dit « Ô Allāh, fais-le intercéder pour moi »."]),
"Croire à l’intercession sans tomber dans son détournement": dev([
  "Cette balance, présente sur le site, trace la ligne. **Croyance légitime** : le Prophète ﷺ intercédera par la permission de Dieu ; on demande à Dieu d'en bénéficier ; on œuvre pour être agréé ; et l'on reconnaît que même le plus grand des envoyés ne décide de rien par lui-même. **Dérive** : s'adresser directement à un défunt pour qu'il intercède, croire qu'un intercesseur pourrait faire pencher la décision divine, et négliger l'effort personnel en comptant sur une intercession présumée acquise.",
  "La troisième dérive est la plus fréquente et la plus discrète : **compter sur l'intercession pour se dispenser d'agir**. Or la condition coranique est claire : on n'intercède que pour celui qu'Il agrée. L'intercession récompense un effort ; elle ne le remplace pas."]),
"Le circuit de l’intercession légitime": dev([
  "Ce schéma, présent sur le site, suit le trajet en quatre étapes. **Le croyant** adresse sa demande à Dieu seul. **Allāh** accorde ou non la permission. **L'intercesseur** plaide, une fois autorisé, sans décider. **L'agréé** bénéficie de l'intercession.",
  "La légende contient une remarque profonde : **trois étapes sur quatre dépendent entièrement de Dieu**. La seule chose que l'homme maîtrise, c'est sa demande, adressée à Dieu, et l'effort pour être de ceux qu'Il agrée. Tout le reste Lui appartient."]),
"Les deux conditions de l'intercession": dev([
  "Ce schéma résume la position d'al-Qurtubī. **La permission** : nul n'intercède de sa propre initiative. **L'agrément** : nul n'intercède pour quelqu'un que Dieu n'agrée pas. **Les intercesseurs** : prophètes, anges, savants, combattants, et même les croyants pour leurs frères. **Les bénéficiaires** : ceux qui ont gardé le tawhīd, même avec des fautes.",
  "Le dernier nœud est une immense espérance : l'intercession est **pour les croyants pécheurs**. Le hadith rapporté par al-Bukhārī montre les croyants plaidant pour leurs frères : « ils priaient avec nous et jeûnaient avec nous ». Garder le tawhīd, même avec ses faiblesses, c'est garder la porte de l'intercession ouverte."]),
SAV: dev([
  "Al-Tabarī, al-Qurtubī et Ibn ʿAtiyya convergent : l'intercession existe, elle est un honneur accordé par Dieu, et elle obéit à deux conditions. Le Coran ne nie que l'intercession que les idolâtres prêtaient à leurs idoles."])
}}

ADD["Le recours aux causes n'est pas une atteinte à l'unicité"] = {"after": {
"Trois attitudes envers les causes": dev([
  "Ce tableau présente trois attitudes. **Négliger les causes** : « Dieu fera tout, je ne fais rien ». Cette attitude contredit ʿUmar, la Sunna et la raison ; le Prophète ﷺ portait une armure au combat et prenait des remèdes. **Compter sur les causes seules** : « c'est le médicament qui guérit ». Cette attitude attribue à la créature un pouvoir propre, un pas vers le shirk. **La voie de ʿUmar** : prendre la cause et attendre l'effet de Dieu. C'est le tawakkul véritable.",
  "Ces trois attitudes se reconnaissent à **ce qui se passe après un échec**. Celui qui négligeait les causes se reproche sa paresse. Celui qui comptait sur elles seules désespère. Celui qui suit la voie de ʿUmar a fait son devoir et s'en remet à Dieu en paix."]),
"Prendre une cause : usage légitime ou glissement vers le shirk": dev([
  "Cette balance, présente sur le site, donne des exemples. **Usage licite** : prendre un remède en sachant qu'il n'agit que par la permission de Dieu ; verrouiller sa porte ; remercier celui qui a été le moyen d'un bienfait, en sachant que Dieu en est l'Auteur ; continuer à chercher une cause licite après un échec. **Glissement** : croire qu'une amulette agit par elle-même ; craindre une cause seconde plus que Dieu ; désespérer quand une cause échoue, comme si Dieu ne pouvait agir sans elle ; et à l'inverse, négliger les causes par un tawakkul mal compris.",
  "La troisième ligne de droite est souvent oubliée : **désespérer quand le médecin dit qu'il n'y a plus rien à faire**, c'est oublier que les causes sont des moyens que Dieu a établis, et qu'Il n'est pas limité par eux."]),
"Cause, effet, et attribution ultime": dev([
  "Ce schéma, présent sur le site, décompose le processus. **L'homme agit** : il prend la cause prescrite. **La cause opère** : elle produit son effet ordinaire, selon la sagesse que Dieu a instaurée. **L'effet survient** : jamais garanti à cent pour cent. **Allāh en est l'Auteur** : aucune cause n'agit sans Sa permission.",
  "La légende résume : **la cause est un maillon, non la source**. Le croyant respecte le maillon, puisque Dieu l'a placé là, et remonte toujours à la source."]),
"La logique de ʿUmar": dev([
  "Ce schéma reprend la réponse de ʿUmar à Abū ʿUbayda. **Le danger est un décret** : la peste est arrivée par la volonté de Dieu. **La fuite aussi est un décret** : choisir de rentrer, c'est encore agir à l'intérieur de Son décret. **La raison choisit le meilleur versant** : comme le berger choisit l'herbe fertile. **La révélation confirme** : le hadith rapporté par ʿAbd al-Rahmān ibn ʿAwf valide le choix de ʿUmar.",
  "La leçon dépasse l'épidémie : **toutes nos décisions se font à l'intérieur du décret**. Choisir le bien, se soigner, se protéger, ce n'est pas fuir Dieu, c'est passer d'un décret à un autre, avec Sa permission."],
  Q("Ceux qui restent dans une terre touchée par l'épidémie manquent-ils de prudence ?",
    "Le hadith d'ʿAbd al-Rahmān ibn ʿAwf dit justement de ne pas quitter une terre touchée pour fuir. Ce n'est pas un manque de prudence : c'est une règle sanitaire qui empêche de propager le mal ailleurs. On n'entre pas dans la zone, et l'on n'en sort pas. La prudence est collective, pas seulement individuelle.")),
SAV: dev([
  "ʿUmar, ʿAbd al-Rahmān ibn ʿAwf, Mālik et Ibn ʿAbd al-Barr montrent que les causes font partie de la foi. Le Muwatta transmet l'épisode de la peste comme un modèle de décision : consulter, réfléchir, choisir le plus sûr, puis s'en remettre à Dieu."])
}}

ADD["Amulettes, superstitions et lecture des signes"] = {"after": {
"La question à se poser devant un porte-bonheur": dev([
  "Ce schéma donne une méthode en quatre questions. **Est-ce que je crois qu'il me protège ?** Si non, c'est un simple objet, une décoration ou un souvenir. **Si oui, à qui j'attribue la protection ?** À l'objet lui-même : c'est exactement ce que visait le hadith des colliers. **Que dit la tradition ?** « Seul Allāh écarte le mal : Il guérit et Il éprouve » (Ibn ʿAbd al-Barr). **Que faire ?** Couper le collier, comme les compagnons l'ont fait cette nuit-là.",
  "La première question est la plus importante, et elle demande de l'honnêteté. Beaucoup disent « c'est juste pour la décoration », mais ressentent une angoisse quand l'objet est perdu. **Cette angoisse est le signe que le cœur y avait placé une confiance.**"]),
"Sentiment involontaire et croyance active : où passe la limite": dev([
  "Cette balance, présente sur le site, distingue ce qui est pardonné de ce qui est interdit. **Toléré** : le sentiment fugace de gêne devant un mauvais signe, sans y adhérer ; poursuivre son chemin malgré l'impression ; se réjouir d'une bonne parole entendue. **Interdit** : renoncer à un acte à cause d'un présage ; croire qu'un objet, un jour ou un animal agit par lui-même ; consulter ceux qui prétendent lire l'avenir.",
  "Cette distinction est très rassurante : **personne n'est jugé sur une impression qui traverse l'esprit**. On est jugé sur ce qu'on en fait. Celui qui sent une gêne en voyant un chat noir, et qui continue sa route en disant « bismillāh », n'a commis aucune faute ; il a même vaincu une tentation."]),
"Trois attitudes face aux signes du quotidien": dev([
  "Ce schéma, présent sur le site, suit le trajet d'un signe. **Le signe survient** : une rencontre, une parole, un événement fortuit. **Un sentiment involontaire** naît : il est pardonné tant qu'il reste passif. Ensuite, deux chemins. **Le chemin du shirk** : on s'arrête, on change de décision, on croit que le signe a un pouvoir. **Le chemin du tawakkul** : on poursuit, on invoque Dieu, on refuse au signe toute autorité.",
  "La légende résume : **le même signe peut mener à deux issues opposées**. Tout dépend de ce que le cœur en fait, jamais du signe lui-même."]),
"La position malikite rapportée par Ibn ʿAbd al-Barr": dev([
  "Ce tableau expose une distinction fine de l'école malikite. **Quand** : réprouvé avant le malheur, par peur qu'il arrive ; toléré après, en espérant la guérison. **Quoi** : réprouvés, les colliers, perles, cordes et fers ; tolérés, les écrits contenant les noms de Dieu et Son Livre. **Avec quelle croyance** : l'objet qui protège par lui-même est réprouvé ; l'écrit qui est une invocation, tandis que la guérison vient de Dieu, est toléré.",
  "La légende précise qu'Ibn ʿAbd al-Barr signale un autre avis, plus strict, qui réprouvait tout accrochage, et qu'il juge le premier « plus juste par la tradition et la réflexion ». **Cette honnêteté sur la divergence** permet au lecteur de comprendre les deux positions au lieu d'en découvrir une seule."],
  Q("Accrocher un verset au cou d'un enfant pour le protéger, est-ce permis ?",
    "Selon la distinction rapportée par Ibn ʿAbd al-Barr, c'est réprouvé si on le fait avant tout malheur, par peur du mauvais œil, car cela ressemble aux amulettes de la Jāhiliyya. Mālik tolérait les écrits des noms de Dieu pour les malades, en cherchant la bénédiction, pas pour repousser l'œil. La voie la plus sûre reste celle de la Sunna : réciter sur l'enfant les invocations de protection.")),
SAV: dev([
  "Ce tableau réunit Mālik, Ibn ʿAbd al-Barr, ʿĀʾisha, Ibn Masʿūd et Rabīʿa : tous voient dans les amulettes une croyance qui attribue à un objet ce qui n'appartient qu'à Dieu. Ils distinguent avec finesse les situations, mais le principe est clair : seul Dieu guérit et protège."])
}}

ADD["Le concept même de culte : ce que « ʿibāda » recouvre"] = {"after": {
"Respect, adoration, vie ordinaire": dev([
  "Ce tableau classe trois situations selon ce qui se passe dans le cœur. **Respecter ses parents ou un savant** : on les estime sans croire qu'ils détiennent notre destin. Ce n'est pas de l'adoration ; c'est un devoir moral, et même un acte d'obéissance à Dieu. **Craindre un objet ou une date** : on croit qu'ils agissent sur notre destin. C'est un glissement vers le shirk. **Travailler, manger, dormir** : si on le fait en se soumettant à ce que Dieu permet et en Lui remettant le résultat, cela entre dans l'adoration.",
  "Ce tableau applique la définition d'Ibn ʿĀshūr : **ce n'est pas l'acte extérieur qui fait l'adoration, c'est la conviction intérieure** qui l'accompagne. Le même geste, s'incliner par exemple, peut être une politesse ou un culte selon ce qu'on croit de celui devant qui on s'incline."]),
"Ce qui transforme un acte ordinaire en culte": dev([
  "Cette balance, présente sur le site, donne les deux conditions de tout culte. **L'ikhlās** : accomplir l'acte pour Dieu seul. **La mutābaʿa** : le conformer à ce que la révélation a enseigné. Et elle ajoute que manger, travailler, dormir avec l'intention de se fortifier pour obéir à Dieu élève l'acte ordinaire.",
  "Les invalidations sont aussi précises : un rite fait pour être vu perd sa valeur ; une pratique inventée, même sincère, n'est pas un culte ; réduire la religion aux rites en négligeant l'honnêteté et la justice est une mutilation. **Ces deux conditions, sincérité et conformité, sont les deux ailes de toute adoration.**"],
  Q("Si toute la vie peut être adoration, à quoi servent les rites ?",
    "Les rites sont le noyau qui structure tout le reste. Sans la prière, le jeûne, l'aumône, l'intention qui élève les actes ordinaires s'affaiblit et s'oublie. Les rites rappellent cinq fois par jour à qui l'on appartient, et c'est ce rappel qui rend possible l'adoration dans le reste de la journée.")),
"Les cercles concentriques de la ʿibāda": dev([
  "Ce schéma, présent sur le site, représente l'adoration comme des cercles. **Au centre, les rites codifiés** : prière, jeûne, zakāt, pèlerinage. **Puis les paroles agréées** : véracité, douceur, rappel de Dieu. **Puis les états du cœur** : amour, crainte, patience, gratitude, repentir. **Enfin les actes ordinaires** élevés par l'intention.",
  "La légende précise que **le noyau rituel structure l'ensemble**, mais que les cercles extérieurs sont tout aussi réels. Une vie où seul le centre existe est une vie religieuse coupée du quotidien ; une vie où seuls les cercles extérieurs existent manque de colonne vertébrale."]),
"Les deux piliers de l'adoration selon Ibn ʿĀshūr": dev([
  "Ce schéma reprend la définition d'Ibn ʿĀshūr. **Un geste extérieur** : se prosterner, s'incliner, invoquer, offrir, jeûner. **Une conviction intérieure** : croire que l'adoré détient notre bien et notre mal, par lui-même et durablement. **Leur union fait l'adoration** : quand les deux sont réunis envers un être, cet être devient une divinité pour l'adorateur. **D'où le tawhīd** : puisque seul Dieu détient réellement le bien et le mal, Lui seul mérite cette soumission.",
  "Cette définition est un outil de discernement très utile, car elle permet de juger n'importe quelle pratique avec deux questions : **y a-t-il un geste de soumission ?** et **attribue-t-on à l'être concerné un pouvoir propre sur notre destin ?** Si oui aux deux, c'est une adoration, et elle n'est due qu'à Dieu."]),
SAV: dev([
  "Ibn ʿĀshūr donne ici la définition la plus précise, et il la relie aux autres lectures, celles de Mujāhid et Zayd ibn Aslam. Toutes convergent : l'adoration est la soumission de toute la vie à Celui qui seul détient notre bien et notre mal, et elle sert d'abord le bien de l'homme."])
}}
