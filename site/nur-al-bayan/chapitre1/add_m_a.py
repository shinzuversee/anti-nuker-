# Méthode « objection » appliquée au groupe a : on accueille la question, puis le cœur du raisonnement,
# puis un tableau des savants.
ADD = {}

def accueil(texts, focus_title, focus_text):
    return [{"type": "h2", "text": "On peut comprendre que la question se pose"}] + \
           [{"type": "p", "text": t} for t in texts] + \
           [{"type": "focus", "kind": "repere", "title": focus_title, "text": focus_text}]

# 1. Fitra
ADD["Croire en Dieu est naturel à l'homme"] = {
"intro": "On peut comprendre que l'on doute de cette affirmation. Beaucoup de gens disent sincèrement : « Je ne ressens aucun besoin de Dieu. J'ai grandi sans religion et je vis très bien. Si croire était naturel, je le sentirais. » D'autres ajoutent que la religion n'est qu'un produit de l'éducation : on croit en Dieu parce que ses parents y croyaient.\n\nJe vais montrer que ces deux remarques, loin de contredire la fitra, sont exactement ce que le Prophète ﷺ a décrit : l'homme naît avec une orientation vers son Créateur, et c'est le milieu qui la développe, la déforme ou la recouvre. Ne rien ressentir ne prouve pas l'absence de la fitra, pas plus que celui qui n'a jamais parlé une langue ne prouve qu'il n'avait pas la capacité de parler.\n\nJe m'appuie sur le hadith de la fitra transmis par l'imam Mālik, sur Ibn ʿAbd al-Barr, Ibn ʿĀshūr, Ibn ʿAtiyya, al-Qurtubī et Ibn Kathīr, et sur ce que constatent aujourd'hui les sciences cognitives.",
"start_blocks": accueil([
  "Commençons par reconnaître la force de l'objection. Il existe des millions de personnes qui vivent sans aucune pratique religieuse, qui se disent heureuses, morales, épanouies, et qui affirment en toute sincérité **ne ressentir aucun manque**. Leur dire « tu as Dieu en toi, tu ne le sais pas » peut sembler arrogant.",
  "L'autre forme de l'objection est plus savante : les enfants de musulmans deviennent musulmans, les enfants de chrétiens deviennent chrétiens, les enfants d'athées deviennent athées. **La croyance ne serait donc qu'une affaire d'éducation**, et non une donnée de la nature humaine."
 ], "Ce que je vais montrer", "Le Prophète ﷺ a lui-même formulé la seconde objection, quatorze siècles avant les sociologues : « **ce sont ses parents qui en font un juif, un chrétien ou un mazdéen** ». Il ne nie donc pas le rôle de l'éducation : il l'affirme. Mais il dit ce qui existe **avant** elle. C'est cette distinction entre **la capacité** et **son développement** qui résout la question.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : une capacité n'est pas un savoir"},
 {"type": "p", "text": "Prenons une comparaison simple. Tout enfant naît avec **la capacité de parler**. Mais il ne parle pas à la naissance, et la langue qu'il parlera dépend entièrement de son entourage : arabe, français ou chinois. Un enfant élevé loin de tout langage humain ne parlera presque pas. Personne n'en conclut que le langage est une simple invention sociale : on dit que **la capacité est naturelle, et que sa forme est apprise**."},
 {"type": "p", "text": "La fitra fonctionne de la même manière. L'homme naît avec **une orientation** vers son Créateur : il cherche des causes, il pressent que le monde a un sens, il se tourne vers un secours unique dans la détresse. C'est ce qu'Ibn ʿAtiyya, exégète malikite d'al-Andalus, appelle « **la constitution qui est dans l'âme de l'homme, préparée et disposée pour qu'il distingue par elle les œuvres de Dieu, qu'il en tire la preuve de son Seigneur et qu'il connaisse Ses lois** » (cité par Ibn ʿĀshūr, al-Tahrīr, 21/90). Ensuite, le milieu développe cette orientation, la déforme ou la recouvre."},
 {"type": "comparaison", "title": "La fitra comparée à la capacité de parler", "columns": ["La capacité de parler", "La fitra"], "rows": [
   {"criterion": "À la naissance", "cells": ["Présente, mais pas encore exercée", "Présente, mais pas encore consciente"]},
   {"criterion": "Ce que donne le milieu", "cells": ["La langue particulière : arabe, français…", "La forme de la croyance : islam, autre religion, ou rien"]},
   {"criterion": "Si le milieu est absent ou hostile", "cells": ["La capacité s'atrophie, sans disparaître", "L'orientation est recouvrée, sans disparaître"]},
   {"criterion": "Ce qui la réveille", "cells": ["Le contact avec des gens qui parlent", "Le rappel, la réflexion, et souvent la détresse (29:65)"]},
   {"criterion": "Ce qu'on en conclut", "cells": ["Le langage est naturel, les langues sont apprises", "La recherche de Dieu est naturelle, son contenu exact est révélé"]}
 ], "caption": "Comparaison pédagogique, appuyée sur le hadith de la fitra et sur Ibn ʿĀshūr."},
 {"type": "schema", "title": "Ce qui se passe entre la naissance et l'âge adulte", "arabic": "مسار الفطرة", "variant": "flow", "nodes": [
   {"label": "La naissance", "arabic": "يولد على الفطرة", "note": "Une orientation vers le Créateur, intacte comme le petit animal « entier » du hadith."},
   {"label": "L'éducation", "arabic": "فأبواه", "note": "Elle donne une forme : elle peut confirmer la fitra ou la dévier."},
   {"label": "Les distractions", "arabic": "اجتالتهم الشياطين", "note": "Les passions et les suggestions recouvrent ce qui était clair."},
   {"label": "Les moments de vérité", "arabic": "دعوا الله مخلصين", "note": "La détresse, la mort d'un proche, la beauté du monde : la fitra remonte."},
   {"label": "Le choix adulte", "note": "Celui qui a entendu le rappel décide de suivre son orientation première ou de la refuser."}
 ], "caption": "Synthèse des hadiths de la fitra (Mālik, Muslim) et de 29:65."},
 {"type": "focus", "kind": "subtilite", "title": "Pourquoi « je ne ressens rien » ne suffit pas", "text": "Celui qui dit « je ne ressens aucun besoin de Dieu » décrit son état **actuel**, pas sa nature. Un homme qui a faim depuis longtemps finit par ne plus sentir la faim, sans que son corps cesse d'avoir besoin de nourriture. Ibn ʿĀshūr fait remarquer que **l'habitude se déguise en évidence** : ce qu'on n'a jamais entendu finit par sembler inexistant. La question honnête n'est pas « est-ce que je ressens Dieu ? », mais « **qu'est-ce qui, en moi, résiste quand je pense que tout cela n'a aucune cause et aucun sens ?** »"}
],
"blocks": [
 {"type": "h2", "text": "Ce que disent les savants, en un coup d'œil"},
 {"type": "comparaison", "title": "La fitra chez les savants", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Abū Hurayra (Compagnon)", "cells": ["Il récitait après le hadith : « la fitra d'Allāh selon laquelle Il a créé les gens » (30:30)", "Rapporté par Ibn Kathīr, Tafsīr, 6/93"]},
   {"criterion": "Ibn ʿAbbās, Mujāhid, ʿIkrima, Qatāda", "cells": ["« Pas de changement à la création d'Allāh » veut dire : à la religion d'Allāh", "Ibn Kathīr, Tafsīr, 6/93"]},
   {"criterion": "Ibn al-Mubārak", "cells": ["La fitra est « ce que Dieu a commencé pour l'homme », incluant ce qu'Il a décrété", "Rapporté par Ibn ʿAbd al-Barr, al-Istidhkār, 3/105"]},
   {"criterion": "Ibn ʿAbd al-Barr (malikite, m. 463 H)", "cells": ["La fitra n'est pas l'islam au sens plein, car l'islam est parole, conviction et œuvre ; c'est une aptitude", "Al-Istidhkār, 3/104"]},
   {"criterion": "Ibn ʿAtiyya (malikite, m. 541 H)", "cells": ["La constitution préparée pour reconnaître les œuvres de Dieu et en tirer la preuve de son Seigneur", "Cité par Ibn ʿĀshūr, al-Tahrīr, 21/90"]},
   {"criterion": "Al-Qurtubī (malikite, m. 671 H)", "cells": ["Dans la détresse en mer, ils invoquent Dieu « sincères dans leurs intentions, ayant délaissé les idoles »", "Al-Jāmiʿ, 13/362"]},
   {"criterion": "Ibn Kathīr (m. 774 H)", "cells": ["Dieu a créé Ses créatures « sur Sa connaissance et Son unicité »", "Tafsīr, 6/92"]},
   {"criterion": "Ibn ʿĀshūr (malikite, m. 1393 H)", "cells": ["« Le tawhīd est la fitra, et l'association est une altération de la fitra »", "Al-Tahrīr, 21/90"]}
 ], "caption": "Les citations complètes figurent plus haut dans la page."}
],
"before": ["Conclusion"]
}

# 2. Savants
ADD["Si la foi est rationnelle, pourquoi tant de savants n'y adhèrent-ils pas ?"] = {
"intro": "On peut comprendre que cette question trouble. Si les preuves de Dieu étaient vraiment solides, les esprits les plus brillants de notre époque, physiciens, biologistes, philosophes, devraient être les premiers à croire. Or beaucoup d'entre eux ne croient pas. N'est-ce pas le signe que la foi ne résiste pas à l'examen ?\n\nJe vais montrer que cette question repose sur une confusion : elle suppose que croire est uniquement une affaire d'intelligence. En réalité, la foi engage aussi la volonté, l'orgueil, les intérêts et le mode de vie. Le Coran décrit précisément des gens qui avaient la certitude et qui ont pourtant refusé. Il redéfinit aussi ce qu'est un véritable savant.\n\nJe m'appuie sur al-Qurtubī, Ibn Kathīr, Ibn Masʿūd, Mujāhid, Ibn ʿAbbās et la lettre du Prophète ﷺ à Héraclius.",
"start_blocks": accueil([
  "La question est légitime, et elle mérite une réponse sérieuse. Nous vivons dans une époque où la science a obtenu des résultats immenses, et où ceux qui la font jouissent d'un grand prestige. Quand un grand chercheur déclare ne pas croire, cela pèse.",
  "La question cache cependant une prémisse : **si l'on est intelligent et informé, on croit forcément à ce qui est vrai**. Toute notre expérience humaine montre que c'est faux. Des gens très intelligents fument en connaissant les risques, restent dans des situations qu'ils savent mauvaises, refusent d'admettre une erreur évidente. L'intelligence ne suffit jamais à elle seule à faire **consentir**."
 ], "Ce que je vais montrer", "Le Coran ne dit pas que les négateurs manquent tous d'intelligence. Il dit au contraire de Pharaon et de ses notables : « **ils les nièrent, alors qu'en eux-mêmes ils en avaient la certitude, par injustice et par orgueil** » (27:14). Le problème n'est pas toujours dans la tête ; il est souvent dans **ce que la conclusion coûterait**.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : savoir, vouloir, se soumettre"},
 {"type": "p", "text": "Pour qu'un homme croie, il faut que trois choses se réunissent. Il faut d'abord **qu'il sache** : que les preuves lui parviennent et qu'il les comprenne. Il faut ensuite **qu'il veuille** : qu'il accepte de regarder dans cette direction. Il faut enfin **qu'il consente** : qu'il accepte ce que cette vérité implique pour sa vie. Un grand savant peut réunir la première condition sans les deux autres."},
 {"type": "schema", "title": "Les trois étapes de l'adhésion", "arabic": "العلم والإرادة والتسليم", "variant": "flow", "nodes": [
   {"label": "Savoir", "arabic": "العلم", "note": "Les preuves sont comprises. Un savant peut y être excellent dans son domaine."},
   {"label": "Vouloir regarder", "arabic": "الإرادة", "note": "On accepte de poser la question du sens, et non seulement celle du fonctionnement."},
   {"label": "Consentir", "arabic": "التسليم", "note": "On accepte de changer sa vie, de reconnaître un Maître, de renoncer à certaines choses."},
   {"label": "Ce qui bloque souvent", "arabic": "جَحَدُواْ بِهَا وَٱسۡتَيۡقَنَتۡهَآ", "note": "L'orgueil et l'intérêt : « ils nièrent alors qu'ils en avaient la certitude » (27:14)."}
 ], "caption": "D'après 27:14 et l'explication d'al-Qurtubī, 13/163."},
 {"type": "comparaison", "title": "Pourquoi un grand savant peut ne pas croire", "columns": ["Raison", "Ce qu'en dit la tradition"], "rows": [
   {"criterion": "Le savoir est spécialisé", "cells": ["On peut tout savoir d'un domaine et ignorer la question du sens", "« Ils connaissent un aspect apparent de la vie d'ici-bas » (30:7) ; Ibn Kathīr : « habiles pour la vie d'ici-bas, inattentifs à l'au-delà »"]},
   {"criterion": "L'orgueil", "cells": ["Se soumettre à un Maître est difficile pour qui est habitué à maîtriser", "Pharaon et ses notables « s'enorgueillirent de croire en Moïse » (al-Qurtubī, 13/163)"]},
   {"criterion": "Le coût social", "cells": ["Croire peut coûter une position, une réputation, un milieu", "Héraclius reconnut les signes d'un prophète puis recula devant ses patriarches (Sahīh)"]},
   {"criterion": "L'illusion de suffisance", "cells": ["Se croire au-dessus de la question", "Ibn Masʿūd : « l'illusion sur soi suffit comme ignorance »"]}
 ], "caption": "Synthèse des sources citées dans cette page."},
 {"type": "focus", "kind": "subtilite", "title": "L'argument se retourne", "text": "Si l'on compte les savants, on trouve aussi, à toutes les époques, d'immenses esprits croyants : Ibn Sīnā, Ibn Rushd, al-Bīrūnī, et bien des scientifiques modernes. Le nombre ne tranche donc rien. Ce qui tranche, ce sont **les preuves**, et chacun doit les examiner **lui-même**, sans s'abriter derrière l'opinion d'un autre, savant ou non."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Ibn ʿAbbās", "cells": ["« Les mécréants connaissent l'édification de ce monde, et dans la religion ils sont ignorants » ; les savants qui craignent Dieu sont « ceux qui savent qu'Il est capable de toute chose »", "Ibn Kathīr, 6/84 ; al-Qurtubī, 14/343"]},
   {"criterion": "Al-Hasan al-Basrī", "cells": ["L'un d'eux retourne une pièce sur son ongle et t'en dit le poids, sans savoir bien prier", "Ibn Kathīr, Tafsīr, 6/84"]},
   {"criterion": "Ibn Masʿūd", "cells": ["« La crainte d'Allāh suffit comme science, et l'illusion sur soi suffit comme ignorance »", "Al-Qurtubī, 14/343"]},
   {"criterion": "Mujāhid ; al-Rabīʿ ibn Anas", "cells": ["« Le savant, c'est celui qui craint Allāh » ; « celui qui ne craint pas Allāh n'est pas un savant »", "Al-Qurtubī, 14/343"]},
   {"criterion": "Saʿd ibn Ibrāhīm (juge de Médine)", "cells": ["Le plus savant de Médine ? « Le plus pieux envers son Seigneur »", "Al-Qurtubī, 14/343"]},
   {"criterion": "Al-Qurtubī (malikite)", "cells": ["Pharaon et ses notables avaient la certitude ; ils furent des opposants obstinés", "Al-Jāmiʿ, 13/163"]},
   {"criterion": "Ibn Kathīr", "cells": ["« La plupart des gens n'ont de science que de ce bas monde »", "Tafsīr, 6/84"]}
 ], "caption": "Les citations complètes figurent dans la page."}
]}
}

# 3. Cosmos
ADD["Dieu regarde-t-Il l'homme, si petit dans l'immensité du cosmos ?"] = {
"intro": "On peut comprendre le vertige que provoque cette question. L'univers observable compte des milliards de galaxies, chacune contenant des milliards d'étoiles. La Terre n'y est qu'un grain de poussière, et l'homme un grain sur ce grain. Comment imaginer que le Créateur de tout cela s'intéresse à ma prière, à mes soucis, à mes fautes ?\n\nJe vais montrer que cette question repose sur une image de Dieu calquée sur nous : un être limité, qui devrait répartir son attention et négliger les petites choses pour s'occuper des grandes. Or Dieu n'est pas ainsi. Et le Coran affirme que l'homme a été honoré, et que tout l'univers a été mis à son service.\n\nJe m'appuie sur al-Qurtubī, Ibn ʿĀshūr et le Coran lui-même.",
"start_blocks": accueil([
  "La question n'a rien de naïf. Elle exprime une expérience réelle : regarder le ciel la nuit et se sentir **infiniment petit**. Les découvertes de l'astronomie moderne ont encore agrandi ce vertige.",
  "Le raisonnement implicite est le suivant : plus une chose est petite, moins elle compte ; or l'homme est minuscule à l'échelle du cosmos ; donc il ne compte pas pour Celui qui a créé le cosmos."
 ], "Ce que je vais montrer", "Ce raisonnement contient **deux erreurs**. La première : il mesure la valeur à la taille. La seconde : il imagine Dieu comme un être dont **l'attention serait limitée**. Une fois ces deux erreurs corrigées, la question se dissout.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : la taille n'est pas la valeur, et l'attention divine n'est pas limitée"},
 {"type": "comparaison", "title": "Les deux erreurs de l'objection", "columns": ["Ce que suppose l'objection", "Ce que montrent la raison et le Coran"], "rows": [
   {"criterion": "La valeur", "cells": ["Ce qui est grand compte plus que ce qui est petit", "Un enfant vaut plus qu'une montagne. La valeur vient de la conscience et de la responsabilité, non de la masse (17:70)"]},
   {"criterion": "L'attention", "cells": ["Dieu devrait choisir entre les galaxies et l'homme", "« Pas une feuille ne tombe sans qu'Il le sache » (6:59) : Sa science ne se divise pas"]},
   {"criterion": "La place de l'homme", "cells": ["Un accident perdu dans l'immensité", "« Il a mis à votre service tout ce qui est dans les cieux et sur la terre » (45:13)"]},
   {"criterion": "Ce qui en découle", "cells": ["L'homme est insignifiant", "L'immensité du cosmos est la mesure de la générosité de Dieu envers l'homme"]}
 ], "caption": "Synthèse de 6:59, 17:70 et 45:13."},
 {"type": "schema", "title": "Comment le Coran renverse la perspective", "arabic": "الإنسان والكون", "variant": "flow", "nodes": [
   {"label": "L'univers est immense", "note": "Le Coran ne le nie pas : il invite à regarder les cieux sans fin."},
   {"label": "Il est mis au service", "arabic": "سَخَّرَ لَكُم", "note": "Le soleil pour la lumière, la pluie pour boire, les étoiles pour se guider (Ibn ʿĀshūr, 25/337)."},
   {"label": "L'homme est honoré", "arabic": "كَرَّمۡنَا بَنِيٓ ءَادَمَ", "note": "Une noblesse « qui écarte l'imperfection » (al-Qurtubī, 10/293)."},
   {"label": "Il est connu jusque dans le détail", "arabic": "وَمَا تَسۡقُطُ مِن وَرَقَةٍ إِلَّا يَعۡلَمُهَا", "note": "Rien n'est trop petit pour Sa science (6:59)."}
 ], "caption": "Lecture croisée de 45:13, 17:70 et 6:59."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Al-Qurtubī (malikite)", "cells": ["« Nous avons honoré » : une noblesse qui écarte l'imperfection, et non la générosité des richesses", "Al-Jāmiʿ, 10/293"]},
   {"criterion": "Al-Qurtubī", "cells": ["Dieu a créé ce qu'Il a créé « pour leurs intérêts », en signe de « la perfection de Sa puissance et la plénitude de Son bienfait »", "Al-Jāmiʿ, 16/160"]},
   {"criterion": "Ibn ʿĀshūr (malikite)", "cells": ["Le soleil, la pluie, les étoiles sont des bienfaits « qui méritent la gratitude » et aussi « des preuves »", "Al-Tahrīr, 25/337"]},
   {"criterion": "Al-Qurtubī", "cells": ["Rien n'échappe à la science de Dieu, pas même la feuille qui tombe", "Al-Jāmiʿ, sur 6:59"]}
 ], "caption": "Les citations complètes figurent dans la page."}
]}
}

# 4. Dieu des Arabes
ADD["Allāh est-il « un dieu des Arabes » ?"] = {
"intro": "On peut comprendre d'où vient cette idée. Le mot « Allāh » est arabe, le Coran est en arabe, le Prophète ﷺ était arabe, et l'on prie en arabe dans le monde entier. Pour quelqu'un qui découvre l'islam de l'extérieur, il est tentant de penser qu'il s'agit d'un dieu particulier, celui d'un peuple, distinct du « Dieu » des autres.\n\nJe vais montrer que cette impression confond la langue d'une révélation avec son destinataire. Dès sa première page, le Coran présente Allāh comme « Seigneur des mondes ». Le Prophète ﷺ a écrit à l'empereur de Byzance. Et les chrétiens arabes eux-mêmes appelaient Dieu « Allāh » avant l'islam.\n\nJe m'appuie sur al-Qurtubī, Ibn Kathīr, Qatāda, Ibn ʿAbbās et la lettre à Héraclius.",
"start_blocks": accueil([
  "L'impression est compréhensible : quand une religion se présente avec une langue, des noms et des rites venus d'un peuple particulier, on peut croire qu'elle **appartient** à ce peuple.",
  "Mais le raisonnement suppose que **le nom** donné à Dieu détermine **qui** est Dieu. Or quand un Français dit « Dieu », un Anglais « God » et un Allemand « Gott », personne ne pense qu'ils parlent de trois divinités différentes. La vraie question n'est pas « quel mot ? », mais « **à qui ce mot renvoie-t-il ?** »"
 ], "Ce que je vais montrer", "Le mot « Allāh » renvoie au **Créateur unique de toute chose**, et le Coran le dit dès son premier verset : « Louange à Allāh, **Seigneur des mondes** ». Al-Qurtubī rapporte la définition de Qatāda : les mondes, c'est **tout ce qui existe en dehors d'Allāh**. On ne peut pas être plus universel.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : la langue d'un message n'est pas sa frontière"},
 {"type": "schema", "title": "Du mot à la réalité qu'il désigne", "arabic": "الاسم والمسمى", "variant": "flow", "nodes": [
   {"label": "Un mot arabe", "arabic": "الله", "note": "Comme tout nom, il appartient à une langue."},
   {"label": "Une réalité universelle", "arabic": "رَبِّ ٱلۡعَٰلَمِينَ", "note": "Il désigne le Seigneur de tout ce qui existe en dehors de Lui (1:2)."},
   {"label": "Un message adressé à tous", "arabic": "لِيَكُونَ لِلۡعَٰلَمِينَ نَذِيرًا", "note": "Le Coran est un avertissement « pour les mondes » (25:1)."},
   {"label": "Un appel à tous les peuples", "arabic": "تَعَالَوۡاْ إِلَىٰ كَلِمَةٖ سَوَآءِۭ", "note": "La lettre à Héraclius : « venez à une parole commune » (3:64)."}
 ], "caption": "D'après al-Qurtubī, 1/138 et 4/105."},
 {"type": "comparaison", "title": "Arabe par la langue, universel par le contenu", "columns": ["Ce qui est arabe", "Ce qui est universel"], "rows": [
   {"criterion": "Le nom", "cells": ["Le mot « Allāh »", "Le Créateur qu'il désigne, nommé « Dieu » ou « God » dans d'autres langues"]},
   {"criterion": "Le Livre", "cells": ["Révélé en arabe clair", "Adressé « aux mondes », aux djinns et aux humains (25:1)"]},
   {"criterion": "Le Messager", "cells": ["Né à La Mecque", "Envoyé « à vous tous » (7:158), il écrit aux rois de Byzance et de Perse"]},
   {"criterion": "La croyance", "cells": ["Énoncée en arabe : lā ilāha illā Allāh", "Le même tawhīd que celui d'Abraham, de Moïse et de Jésus (3:64)"]}
 ], "caption": "Une langue de révélation n'est pas une frontière de destination."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Qatāda", "cells": ["« Les mondes : tout ce qui existe en dehors d'Allāh »", "Al-Qurtubī, 1/138"]},
   {"criterion": "Ibn ʿAbbās", "cells": ["Les mondes sont les djinns et les humains, à qui le Coran est un avertissement (25:1)", "Al-Qurtubī, 1/138"]},
   {"criterion": "Ibn Kathīr", "cells": ["« Al-ʿālamīn : pluriel de ʿālam, c'est-à-dire tout ce qui existe en dehors d'Allāh »", "Tafsīr, 1/199"]},
   {"criterion": "Al-Qurtubī (malikite)", "cells": ["Rapporte la lettre du Prophète ﷺ à Héraclius, « le grand des Romains », qui commence au nom d'Allāh", "Al-Jāmiʿ, 4/105"]},
   {"criterion": "Ibn al-Qayyim (cité par al-Tamīmī)", "cells": ["Tous les habitants de la terre, Arabes et non-Arabes, savent qu'« Allāh » est le nom du Seigneur des mondes", "Voir la page « Allāh » de ce chapitre"]}
 ], "caption": "Les citations complètes figurent dans la page et dans le sujet « Allāh »."}
]}
}

# 5. Vision
ADD["Peut-on voir Dieu de ces yeux-ci ?"] = {
"intro": "On peut comprendre que cette question intrigue. D'un côté, on lit que « les regards ne L'atteignent pas » ; de l'autre, que les croyants regarderont leur Seigneur au Jour dernier. Et beaucoup se demandent : si Dieu existe vraiment, pourquoi ne se montre-t-Il pas, tout simplement ? Cela réglerait toutes les discussions.\n\nJe vais montrer que la réponse du Coran est cohérente et profonde : ici-bas, nos yeux ne sont pas faits pour Le voir, et la vie est une épreuve de la foi en l'invisible ; dans l'au-delà, Il se manifestera à ceux qui L'ont aimé sans Le voir, comme une récompense. L'imam Mālik l'a résumé en une phrase lumineuse.\n\nJe m'appuie sur Mālik, al-Shāfiʿī, al-Qurtubī, Ibn Kathīr, ʿĀʾisha et Abū Dharr.",
"start_blocks": accueil([
  "La question « pourquoi Dieu ne se montre-t-Il pas ? » est l'une des plus anciennes. Le Coran la rapporte lui-même : des gens demandaient à Moïse de leur faire « voir Allāh ouvertement ».",
  "Elle repose sur une intuition simple : voir, c'est savoir. Si Dieu se montrait, personne ne pourrait plus douter. Pourquoi alors garder ce voile ?"
 ], "Ce que je vais montrer", "Si Dieu se montrait ici-bas tel qu'Il est, il n'y aurait plus **d'épreuve**, plus de **foi en l'invisible**, plus de **choix libre** : tout le monde serait contraint par l'évidence, comme on est contraint de croire au soleil en plein midi. Le voile n'est pas une absence ; c'est **l'espace de la liberté**. Et la vision est promise **ensuite**, comme le sommet de la récompense.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : le voile ici-bas, la vision ensuite"},
 {"type": "schema", "title": "Pourquoi Dieu ne se montre pas maintenant", "arabic": "الحجاب والرؤية", "variant": "flow", "nodes": [
   {"label": "Nos yeux ne le supporteraient pas", "arabic": "لَن تَرَىٰنِي", "note": "La montagne s'est effondrée quand Il s'est manifesté à elle (7:143)."},
   {"label": "La vie est une épreuve", "arabic": "يُؤۡمِنُونَ بِٱلۡغَيۡبِ", "note": "La foi en l'invisible n'a de sens que si l'invisible reste invisible (2:3)."},
   {"label": "Le voile protège la liberté", "note": "Une évidence écrasante ne laisserait plus de place au choix."},
   {"label": "La vision est la récompense", "arabic": "إِلَىٰ رَبِّهَا نَاظِرَةٞ", "note": "Ceux qui ont cru sans voir verront (75:23)."},
   {"label": "Le voile devient châtiment", "arabic": "لَّمَحۡجُوبُونَ", "note": "Pour ceux qui ont refusé, le voile demeure (83:15)."}
 ], "caption": "D'après 7:143, 75:23, 83:15 et la parole de Mālik."},
 {"type": "comparaison", "title": "Ici-bas et dans l'au-delà", "columns": ["Ici-bas", "Dans l'au-delà"], "rows": [
   {"criterion": "La vision de Dieu", "cells": ["Personne, pas même un prophète : « Lumière : comment pourrais-je Le voir ? »", "Les croyants Le verront comme on voit la lune, sans bousculade"]},
   {"criterion": "Le rôle du voile", "cells": ["Laisser la place à la foi et au choix", "Pour les négateurs, une privation : « ils seront voilés »"]},
   {"criterion": "Ce que l'on fait", "cells": ["On adore « comme si on Le voyait »", "On Le voit, et c'est le plus aimé des dons"]}
 ], "caption": "Synthèse des hadiths de Jarīr, Suhayb, Abū Dharr et de la parole de ʿĀʾisha."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Mālik ibn Anas", "cells": ["« Puisqu'Il a voilé Ses ennemis, Il se manifestera à Ses alliés jusqu'à ce qu'ils Le voient »", "Ibn al-Jawzī, Zād al-masīr, 4/416"]},
   {"criterion": "Al-Shāfiʿī", "cells": ["« Puisqu'Il a voilé certains par Sa colère, d'autres Le verront par Son agrément »", "Zād al-masīr, 4/416"]},
   {"criterion": "Ibn Kathīr", "cells": ["Juge ce raisonnement d'al-Shāfiʿī « d'une extrême beauté » ; rapporte les hadiths de Jarīr et de Suhayb", "Cité en note de Zād al-masīr ; Tafsīr, 7/436"]},
   {"criterion": "Al-Qurtubī (malikite)", "cells": ["« Vers leur Seigneur elles regarderont » : c'est l'avis de la grande majorité des savants", "Al-Jāmiʿ, 19/107"]},
   {"criterion": "ʿĀʾisha", "cells": ["Le Prophète ﷺ n'a pas vu son Seigneur ici-bas ; il a vu Gabriel sous sa forme réelle", "Ibn Kathīr, Tafsīr, 7/64"]},
   {"criterion": "Abū Dharr", "cells": ["Le Prophète ﷺ a dit : « Lumière : comment pourrais-je Le voir ? »", "Muslim, cité par Ibn Kathīr, 7/64"]},
   {"criterion": "Al-Zajjāj", "cells": ["Le verset 83:15 prouve la vision, sinon il ne menacerait de rien", "Zād al-masīr, 4/416"]}
 ], "caption": "Les citations complètes figurent dans la page."}
]}
}

# 6. Dieu était
ADD["Dieu était, et rien n'était avec Lui : le temps commence-t-il avec la création ?"] = {
"intro": "On peut comprendre que cette question donne le vertige. Si Dieu existait avant toute chose, que faisait-Il « avant » ? Pourquoi a-t-Il créé à ce moment-là et pas plus tôt ? Et s'Il a toujours existé, n'y a-t-il pas eu une éternité de temps vide avant la création ?\n\nJe vais montrer que ces questions, aussi naturelles qu'elles paraissent, contiennent un piège : elles imaginent Dieu à l'intérieur du temps, comme nous. Or le temps est lui-même une créature. Le Prophète ﷺ l'a résumé en une phrase : « Allāh était, et rien d'autre que Lui n'était. » Et la raison, comme l'a montré al-Bayhaqī, conduit au même endroit.\n\nJe m'appuie sur le hadith de ʿImrān ibn Husayn, al-Qurtubī, al-Bayhaqī et les théologiens.",
"start_blocks": accueil([
  "La question « qu'y avait-il avant ? » est celle que pose tout enfant, et que pose aussi la cosmologie moderne. Elle n'a rien d'irrespectueux : des gens du Yémen sont venus la poser au Prophète ﷺ en personne.",
  "Le piège est dans le mot « avant ». Il suppose une ligne de temps sur laquelle Dieu serait placé, avec un passé, un présent et un futur. On demande alors : qu'a-t-Il fait pendant tout ce temps ?"
 ], "Ce que je vais montrer", "Le temps, tel que nous le connaissons, est **le rythme du changement des créatures** : les jours, les nuits, les mouvements. Là où il n'y a pas de créatures, il n'y a pas de temps à « remplir ». Demander « pourquoi pas plus tôt ? », c'est comme demander « qu'y a-t-il au nord du pôle Nord ? » : **la question perd son sens au-delà de la limite**.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : le temps est une créature"},
 {"type": "comparaison", "title": "Deux manières de se représenter le commencement", "columns": ["La représentation fautive", "La représentation juste"], "rows": [
   {"criterion": "Le temps", "cells": ["Une scène vide qui existait déjà, sur laquelle Dieu attendait", "Une créature, qui commence avec le monde qu'il mesure"]},
   {"criterion": "Dieu", "cells": ["Un être dans le temps, qui aurait un « avant » et un « après »", "« Le Premier, rien n'est avant Toi » : hors du temps qu'Il a créé"]},
   {"criterion": "« Pourquoi pas plus tôt ? »", "cells": ["Une vraie question", "Une question sans objet : il n'y avait pas de « plus tôt »"]},
   {"criterion": "La raison", "cells": ["Une chaîne infinie de causes sans début", "Al-Bayhaqī : ce qui commence exige un Premier sans commencement"]}
 ], "caption": "D'après le hadith de ʿImrān ibn Husayn, al-Qurtubī 17/236 et al-Bayhaqī, Shuʿab al-īmān, 1/250."},
 {"type": "schema", "title": "Ce que dit le hadith, étape par étape", "arabic": "كان الله ولم يكن شيء غيره", "variant": "flow", "nodes": [
   {"label": "Allāh était", "note": "Seul, sans rien avec Lui, sans temps ni lieu."},
   {"label": "Son Trône était sur l'eau", "arabic": "وَكَانَ عَرۡشُهُۥ عَلَى ٱلۡمَآءِ", "note": "Premières créatures mentionnées (11:7)."},
   {"label": "Il écrivit toute chose", "note": "Le décret de toute la création, dans le Rappel."},
   {"label": "Il créa les cieux et la terre", "note": "Et avec eux, le temps que nous mesurons."}
 ], "caption": "Hadith rapporté par al-Bukhārī d'après ʿImrān ibn Husayn."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Le Prophète ﷺ (hadith de ʿImrān)", "cells": ["« Allāh était, et rien d'autre que Lui n'était »", "Al-Bukhārī ; al-Bayhaqī, al-Sunan al-kubrā, 18/6"]},
   {"criterion": "Le Prophète ﷺ (hadith d'Abū Hurayra)", "cells": ["« Tu es le Premier, rien n'est avant Toi ; Tu es le Dernier, rien n'est après Toi »", "Muslim ; al-Qurtubī, 17/236"]},
   {"criterion": "Al-Qurtubī (malikite)", "cells": ["Le Prophète ﷺ a expliqué ces noms « d'une explication qui dispense de la parole de tout autre »", "Al-Jāmiʿ, 17/236"]},
   {"criterion": "Al-Bayhaqī", "cells": ["Les corps ne sont jamais sans états changeants ; ce qui commence exige quelqu'un qui le fasse commencer", "Shuʿab al-īmān, 1/250"]}
 ], "caption": "Les citations complètes figurent dans la page."}
]}
}

# 7. Muwāfāt
ADD["Nul n'a la garantie de mourir croyant : la notion de muwāfāt"] = {
"intro": "On peut comprendre que cette idée inquiète, et même qu'elle choque. « Si j'ai prié toute ma vie, et que je peux malgré tout mal finir, à quoi bon ? Et si un criminel peut se repentir au dernier moment et entrer au Paradis, où est la justice ? » La notion de muwāfāt, l'idée que c'est l'état final qui compte, semble à première vue injuste et décourageante.\n\nJe vais montrer qu'elle est au contraire l'une des plus grandes expressions de la justice et de la miséricorde divines. Elle ferme la porte à l'orgueil de celui qui se croit sauvé, et elle laisse ouverte, jusqu'au dernier souffle, la porte de celui qui se croit perdu. Et elle n'est pas une loterie : la fin d'un homme est presque toujours le fruit de ce qu'il a cultivé intérieurement.\n\nJe m'appuie sur le hadith d'Ibn Masʿūd, le Sahīh d'al-Bukhārī commenté par Ibn Battāl et al-Muhallab, al-Qurtubī et la sourate Fussilat.",
"start_blocks": accueil([
  "La crainte est légitime. Personne n'aime l'idée qu'une vie entière d'efforts puisse se perdre, ni que le dernier moment pèse si lourd.",
  "Mais il faut regarder l'idée **dans les deux sens**. Si la fin décide, alors **celui qui a mal vécu peut encore être sauvé**. Et si la fin décide, alors **celui qui a bien vécu ne doit jamais se croire arrivé**. La même règle protège le désespéré du désespoir et l'orgueilleux de l'orgueil."
 ], "Ce que je vais montrer", "La fin n'arrive presque jamais par surprise. Les savants ont souligné que celui qui finit mal après une vie apparemment pieuse est souvent celui dont **l'intérieur ne correspondait pas à l'extérieur**. La muwāfāt n'est donc pas un tirage au sort ; c'est **la vérité du cœur qui se révèle au moment où tous les masques tombent**.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : la fin révèle ce qui était au fond"},
 {"type": "comparaison", "title": "La muwāfāt vue sous ses deux faces", "columns": ["Pour celui qui se croit sauvé", "Pour celui qui se croit perdu"], "rows": [
   {"criterion": "Le danger", "cells": ["L'orgueil, la sécurité illusoire, l'hypocrisie cachée", "Le désespoir, l'abandon de tout effort"]},
   {"criterion": "Ce que dit la muwāfāt", "cells": ["« Les œuvres ne valent que par leur fin » : rien n'est acquis", "Une parole de vérité avant la mort efface la mécréance et ses œuvres (al-Muhallab)"]},
   {"criterion": "Ce qu'elle produit", "cells": ["La vigilance et la sincérité", "L'espérance et le retour"]},
   {"criterion": "Le verset", "cells": ["« Ne fais pas dévier nos cœurs après nous avoir guidés » (3:8)", "« Ne désespérez pas de la miséricorde d'Allāh » (39:53)"]}
 ], "caption": "D'après al-Muhallab chez Ibn Battāl, 10/306, et al-Qurtubī, 11/29."},
 {"type": "schema", "title": "Pourquoi la fin n'est pas une loterie", "arabic": "حسن الخاتمة", "variant": "flow", "nodes": [
   {"label": "Ce qu'on cultive en secret", "note": "La sincérité ou l'ostentation, la prière cachée ou le péché caché."},
   {"label": "Ce qui devient habitude", "note": "Ce qu'on répète finit par devenir le fond de l'âme."},
   {"label": "Ce qui remonte à la fin", "note": "Quand les forces s'en vont, il ne reste que ce fond."},
   {"label": "La fermeté vient de Dieu", "arabic": "يُثَبِّتُ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ", "note": "Il affermit ceux qui ont cru, ici-bas et dans l'au-delà (14:27)."}
 ], "caption": "Lecture de 14:27 et du hadith « les œuvres ne valent que par leur fin »."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Le Prophète ﷺ (Ibn Masʿūd)", "cells": ["On peut être à une coudée du Paradis ou de l'Enfer, et l'écrit devance", "Al-Bukhārī et Muslim ; al-Qurtubī, 1/194"]},
   {"criterion": "Le Prophète ﷺ (Sahl ibn Saʿd)", "cells": ["« Les œuvres ne valent que par leur fin »", "Al-Bukhārī ; Ibn Battāl, 10/306"]},
   {"criterion": "Al-Muhallab (malikite)", "cells": ["C'est la règle de Dieu dans le bien et le mal, comme celui qui attrape une unité de prière avant le lever du soleil", "Ibn Battāl, Sharh, 10/306"]},
   {"criterion": "Al-Qurtubī (malikite)", "cells": ["Deux avis : le walī ne peut se savoir walī, ou il le peut sans perdre sa crainte", "Al-Jāmiʿ, 11/29"]},
   {"criterion": "Al-Sarī", "cells": ["Même si les oiseaux te saluaient « ô allié d'Allāh », il faudrait craindre une ruse", "Al-Qurtubī, 11/29"]}
 ], "caption": "Les citations complètes figurent dans la page."}
]}
}

# 8. Amour
ADD["L'amour de Dieu : ce qui l'attire, ce qui l'éloigne"] = {
"intro": "On peut comprendre que cette question déroute. Pour beaucoup, l'amour est un sentiment spontané, qui ne se mérite pas : on aime ou on n'aime pas. Alors, quand on lit que Dieu « aime » certains et « n'aime pas » d'autres, on se demande si Son amour est conditionnel, comme un amour humain intéressé. Un Dieu parfait ne devrait-Il pas aimer tout le monde de la même façon ?\n\nJe vais montrer que la Révélation distingue deux choses : la miséricorde, qui embrasse toute créature, et l'amour au sens de la proximité choisie, qui répond à une relation. Dieu donne la vie, la pluie et la subsistance à tous ; mais Il s'approche de celui qui s'approche de Lui. Ce n'est pas un amour intéressé : c'est un amour qui respecte la liberté de l'autre.\n\nJe m'appuie sur le hadith qudsī du walī, le hadith de Gabriel du Muwatta, le hadith de Muʿādh, Ibn Kathīr, al-Qurtubī, al-Azharī et Ibn ʿAbd al-Barr.",
"start_blocks": accueil([
  "L'objection a une vraie base : dans notre expérience, l'amour qui pose des conditions nous paraît moins pur. On admire l'amour d'une mère, qui aime son enfant même quand il la déçoit.",
  "Mais on oublie une chose : même cette mère ne peut pas **forcer** son enfant à l'aimer en retour. Elle peut l'aimer de loin ; la **relation** d'amour, elle, demande que les deux s'approchent. Le Coran parle précisément de cette relation : « **Il les aime et ils L'aiment** » (5:54)."
 ], "Ce que je vais montrer", "La miséricorde de Dieu s'étend à tout (7:156) : c'est Son don à toute créature. Son amour, au sens de la proximité et de l'élection, **répond à un mouvement** : « Mon serviteur ne cesse de s'approcher de Moi… **jusqu'à ce que Je l'aime** ». Dieu ne refuse Son amour à personne ; c'est l'homme qui choisit de s'approcher ou de s'éloigner.") + [
 {"type": "h2", "text": "Le cœur du raisonnement : la miséricorde pour tous, l'amour pour qui s'approche"},
 {"type": "comparaison", "title": "Miséricorde et amour", "columns": ["La miséricorde (rahma)", "L'amour (mahabba)"], "rows": [
   {"criterion": "Qui la reçoit", "cells": ["Toute créature, croyante ou non", "Ceux qui s'approchent de Lui"]},
   {"criterion": "Sous quelle forme", "cells": ["La vie, la santé, la pluie, la subsistance, le délai pour revenir", "La proximité, la guidée, l'exaucement, « Je suis son ouïe et sa vue »"]},
   {"criterion": "Ce qu'elle demande", "cells": ["Rien : c'est un don", "Une réponse : suivre le Prophète ﷺ (3:31), les obligations puis le surérogatoire"]},
   {"criterion": "Verset", "cells": ["« Ma miséricorde embrasse toute chose » (7:156)", "« Il les aime et ils L'aiment » (5:54)"]}
 ], "caption": "D'après al-Qurtubī, 1/105 et 4/59, et le hadith qudsī d'al-Bukhārī."},
 {"type": "cycle", "title": "Le cercle de l'amour divin", "arabic": "يحبهم ويحبونه", "center": "La proximité", "steps": [
   {"label": "Dieu aime d'abord", "note": "« Il les aime » vient avant « ils L'aiment »."},
   {"label": "Le serviteur répond", "note": "Par les obligations, puis les actes surérogatoires."},
   {"label": "Dieu rapproche", "note": "« Jusqu'à ce que Je l'aime », puis Il guide son ouïe, sa vue, sa main."},
   {"label": "Le ciel et la terre l'aiment", "note": "Gabriel, les anges, puis l'accueil favorable sur terre."}
 ], "caption": "D'après les hadiths du walī et de Gabriel."}
],
"section_blocks": {"L’avis des commentateurs": [
 {"type": "comparaison", "title": "Ce que disent les savants, en un coup d'œil", "columns": ["Ce qu'ils affirment", "Où le lire"], "rows": [
   {"criterion": "Ibn Kathīr", "cells": ["Le verset 3:31 « juge quiconque prétend aimer Allāh » ; « l'important est que tu sois aimé »", "Tafsīr, 2/336"]},
   {"criterion": "Al-Hasan al-Basrī", "cells": ["« Des gens ont prétendu aimer Allāh, alors Allāh les a éprouvés par ce verset »", "Ibn Kathīr, 2/336"]},
   {"criterion": "Al-Azharī (cité par al-Qurtubī)", "cells": ["L'amour du serviteur pour Dieu, c'est Lui obéir ; l'amour de Dieu pour Ses serviteurs, c'est Son bienfait par le pardon", "Al-Jāmiʿ, 4/59"]},
   {"criterion": "Ibn ʿAbd al-Barr (malikite)", "cells": ["Rapporte le hadith de Gabriel et juge authentique celui de Muʿādh sur les quatre portes de l'amour", "Al-Tamhīd, 21/238 ; al-Istidhkār, 8/451"]},
   {"criterion": "Abū Sulaymān al-Dārānī", "cells": ["On n'est frères en Dieu qu'en se visitant et en se donnant l'un à l'autre", "Al-Istidhkār, 8/451"]},
   {"criterion": "Ibn Battāl (malikite)", "cells": ["Rapporte le hadith qudsī du walī : les obligations d'abord, puis le surérogatoire", "Sharh, 10/211"]}
 ], "caption": "Les citations complètes figurent dans la page."}
]}
}
