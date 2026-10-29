# Méthode « objection » appliquée aux groupes b (attributs) et d (décret).
ADD = {}

def accueil(texts, focus_text, title="Ce que je vais montrer"):
    return [{"type": "h2", "text": "On peut comprendre que la question se pose"}] + \
           [{"type": "p", "text": t} for t in texts] + \
           [{"type": "focus", "kind": "repere", "title": title, "text": focus_text}]

def savants(rows, caption="Les citations complètes figurent dans la page."):
    return [{"type": "h2", "text": "Ce que disent les savants, en un coup d'œil"},
            {"type": "comparaison", "title": "Les savants sur cette question", "columns": ["Ce qu'ils affirment", "Où le lire"],
             "rows": [{"criterion": a, "cells": [b, c]} for a, b, c in rows], "caption": caption}]

def sujet(intro, acc, focus, coeur_titre, coeur, rows):
    return {"intro": intro, "start_blocks": accueil(acc, focus) + [{"type": "h2", "text": coeur_titre}] + coeur,
            "blocks": savants(rows), "before": ["Conclusion"]}

MALIK = ("Mālik ibn Anas", "« L'istiwāʾ n'est pas inconnu, le comment n'est pas concevable, y croire est obligatoire, la question est une innovation »", "Al-Qurtubī, 1/254 ; al-Tamhīd, 5/149")
IBN_AB_IJMAA = ("Ibn ʿAbd al-Barr (malikite)", "Les gens de la Sunna affirment toutes les qualités rapportées, au sens réel, sans les décrire par un comment", "Al-Tamhīd, 5/156")
SHINQ_21 = ("Al-Shinqītī (malikite)", "Dieu a un attribut réel digne de Sa perfection, la créature un attribut à sa mesure ; la différence est celle des essences", "Adwāʾ al-Bayān, 2/21")
SAHNUN = ("Sahnūn (malikite)", "« Fait partie de la connaissance de Dieu d'ignorer ce qu'Il n'a pas dit de Lui-même »", "Al-Tamhīd, 5/158")

# ---------- b. Attributs ----------
ADD["Affirmer sans comparer : le verset qui gouverne la question"] = sujet(
"On peut comprendre que ce sujet paraisse délicat. Quand on lit que Dieu « entend », « voit », « s'établit sur le Trône » ou qu'Il a « deux mains », deux réactions viennent spontanément : soit on se L'imagine comme un être humain très grand, soit, pour éviter cela, on vide ces mots de leur sens. Les deux semblent nécessaires, et les deux sont fausses.\n\nJe vais montrer qu'un seul verset, « Rien ne Lui ressemble, et Il est l'Audient, le Voyant », tient ensemble les deux exigences : affirmer tout ce que Dieu a dit de Lui-même, et refuser toute ressemblance avec les créatures. L'imam Mālik l'a résumé en quatre phrases devenues célèbres.\n\nJe m'appuie sur Mālik, Rabīʿa, Sahnūn, Ibn ʿAbd al-Barr, al-Qurtubī et al-Shinqītī.",
["L'embarras est réel. Nous ne pensons qu'avec des images tirées de notre monde. Dès qu'on entend « main », on voit une main humaine ; dès qu'on entend « assis », on voit quelqu'un sur un siège.",
 "Pour échapper à ces images, certains concluent qu'il faut dire que ces mots « ne veulent rien dire » ou qu'ils sont de simples métaphores. On croit ainsi protéger Dieu, mais on rend muettes des parties entières du Coran."],
"Le verset 42:11 donne la méthode : **une négation** (« rien ne Lui ressemble ») qui écarte toute image, puis **une affirmation** (« Il est l'Audient, le Voyant ») qui maintient le sens. On ne choisit pas entre les deux : on garde **les deux à la fois**.",
"Le cœur du raisonnement : nier la ressemblance, affirmer le sens",
[{"type": "comparaison", "title": "Trois attitudes devant les attributs", "columns": ["Ce qu'elle fait", "Ce qu'elle perd"], "rows": [
   {"criterion": "La comparaison (tashbīh)", "cells": ["Imagine Dieu comme un homme agrandi", "La transcendance : « rien ne Lui ressemble »"]},
   {"criterion": "La négation (taʿtīl)", "cells": ["Vide les mots de leur sens pour éviter l'image", "La révélation : Dieu a parlé pour être compris"]},
   {"criterion": "La voie des anciens", "cells": ["Affirme le sens, refuse le comment", "Rien : elle garde à la fois la transcendance et le texte"]}
 ], "caption": "La règle de Mālik appliquée à 42:11."},
 {"type": "schema", "title": "Le verset 42:11 en deux temps", "arabic": "لَيۡسَ كَمِثۡلِهِۦ شَيۡءٞۖ وَهُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ", "variant": "flow", "nodes": [
   {"label": "La négation", "arabic": "لَيۡسَ كَمِثۡلِهِۦ شَيۡءٞ", "note": "Toute image tirée des créatures est écartée."},
   {"label": "L'affirmation", "arabic": "وَهُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ", "note": "Le sens est maintenu : Il entend et voit réellement."},
   {"label": "La conséquence", "note": "On sait ce que les mots veulent dire ; on ne sait pas comment cela est en Dieu."}
 ], "caption": "Al-Shinqītī voit dans la parole de Mālik le résumé exact de ce verset (Adwāʾ, 2/32)."}],
[MALIK, ("Rabīʿa (maître de Mālik)", "A dit exactement la même chose que Mālik sur l'istiwāʾ", "Al-Tamhīd, 5/149"), IBN_AB_IJMAA, SAHNUN,
 ("Mālik (d'après Ibn Wahb)", "Celui qui mime un attribut divin avec son corps compare Dieu à lui-même", "Al-Tamhīd, 5/157"),
 ("Al-Shinqītī (malikite)", "Purifier Dieu de ce qui ne Lui convient pas et croire à ce qu'Il a dit de Lui, c'est le sens de la parole de Mālik", "Adwāʾ al-Bayān, 2/32"), SHINQ_21])

ADD["Dieu sait tout, entend tout, voit tout, et a pouvoir sur toute chose"] = sujet(
"On peut comprendre que ces attributs suscitent des questions. Comment un seul Être pourrait-Il entendre en même temps les milliards de prières de l'humanité, dans toutes les langues ? Et s'Il sait tout et voit tout, pourquoi semble-t-Il parfois ne pas répondre ? Ces questions sont humaines, et elles ont une réponse.\n\nJe vais montrer qu'elles viennent toutes d'une même source : nous imaginons l'ouïe et la science de Dieu sur le modèle des nôtres, limitées, fatigables, partagées. L'histoire de Khawla, dont Dieu a entendu la plainte alors que ʿĀʾisha, dans la même pièce, ne l'entendait pas, montre ce que veut dire « l'Audient ».\n\nJe m'appuie sur ʿĀʾisha, al-Qurtubī, Ibn Battāl, al-Shinqītī et le Coran.",
["La question vient de notre expérience : quand trop de gens nous parlent en même temps, nous n'entendons plus rien. Quand on nous demande trop, nous oublions. Nous projetons naturellement ces limites sur Dieu.",
 "Une autre question suit : s'Il entend tout, pourquoi tant de prières semblent-elles sans réponse ?"],
"Ces attributs ne sont pas les nôtres en plus grand : **« rien ne Lui ressemble »**. Et le silence apparent n'est pas de la surdité : le Prophète ﷺ a enseigné que toute invocation est exaucée, **soit tout de suite, soit mise en réserve, soit par un mal écarté** (rapporté par Ibn Battāl, 10/145).",
"Le cœur du raisonnement : des attributs réels, sans les limites des nôtres",
[{"type": "comparaison", "title": "Nos limites, et leur absence en Dieu", "columns": ["Chez l'homme", "Chez Dieu"], "rows": [
   {"criterion": "Entendre", "cells": ["Un mur suffit à empêcher ʿĀʾisha d'entendre", "« Allāh a bien entendu » la plainte de Khawla (58:1)"]},
   {"criterion": "Plusieurs voix", "cells": ["Elles se brouillent", "« Son ouïe atteint toutes les voix » (Ibn Battāl)"]},
   {"criterion": "Savoir", "cells": ["Acquis, partiel, oublié", "Sans acquisition, total, sans oubli"]},
   {"criterion": "Pouvoir", "cells": ["Limité et fatigable", "Sur toute chose, sans fatigue"]},
   {"criterion": "Le silence apparent", "cells": ["Signe d'indifférence", "Exaucement différé, mis en réserve, ou mal écarté"]}
 ], "caption": "D'après al-Qurtubī 17/270 et Ibn Battāl 10/417 et 10/145."}],
[("ʿĀʾisha", "« Louange à Allāh dont l'ouïe embrasse les voix » ; elle n'entendait pas Khawla dans la même pièce", "Al-Bukhārī ; al-Qurtubī, 17/270"),
 ("Ibn Battāl (malikite)", "Être Audient implique une ouïe réelle, comme être Savant implique une science ; « vous n'invoquez ni un sourd ni un absent »", "Sharh, 10/417"),
 ("Al-Tabarī (chez Ibn Battāl)", "Toute invocation est exaucée de l'une de trois manières", "Sharh, 10/145"), SHINQ_21])

ADD["La parole divine : ce qui est affirmé et ce qui ne l'est pas"] = sujet(
"On peut comprendre que l'idée d'un Dieu qui « parle » surprenne. Parler suppose, chez nous, une bouche, une voix, une langue, une succession de sons. Comment l'Être éternel pourrait-Il parler ? N'est-ce pas une image ? La question a occupé les théologiens pendant des siècles.\n\nJe vais montrer que le Coran a fermé lui-même la porte à la lecture métaphorique, par un simple détail de grammaire : « Allāh a parlé à Moïse, d'une véritable parole » (taklīman). Et que l'on peut affirmer cette parole sans lui prêter les organes de la nôtre.\n\nJe m'appuie sur al-Qurtubī, al-Nahhās, al-Shinqītī et la règle de Mālik.",
["L'objection est logique : chez nous, la parole est inséparable du corps. Il paraît donc naturel de conclure que, Dieu n'ayant pas de corps, Il ne parle pas réellement.",
 "Mais ce raisonnement prouverait trop : chez nous, la science est aussi liée au cerveau, et la vue aux yeux. Faudrait-il dire que Dieu ne sait pas et ne voit pas ?"],
"Ce qui vaut pour la science et la vue vaut pour la parole : Dieu **parle réellement**, d'une parole qui Lui convient, **sans organes**. Le Coran le confirme par une insistance grammaticale qui, selon les grammairiens unanimes, **interdit la lecture métaphorique** (al-Qurtubī, 6/18).",
"Le cœur du raisonnement : ce qui vaut pour la science vaut pour la parole",
[{"type": "schema", "title": "Le raisonnement par parité", "arabic": "القول في الصفات واحد", "variant": "flow", "nodes": [
   {"label": "Dieu sait sans cerveau", "note": "Personne ne nie Sa science sous prétexte qu'Il n'a pas d'organe."},
   {"label": "Dieu voit sans yeux de chair", "note": "« Rien ne Lui ressemble, et Il est le Voyant »."},
   {"label": "Dieu parle sans gorge", "arabic": "وَكَلَّمَ ٱللَّهُ مُوسَىٰ تَكۡلِيمٗا", "note": "La même logique s'applique : réel, sans modalité humaine."},
   {"label": "La grammaire le confirme", "note": "Un verbe renforcé par son nom verbal ne peut être une métaphore (al-Nahhās)."}
 ], "caption": "D'après al-Qurtubī, 6/18, et al-Shinqītī, 2/21."}],
[("Al-Qurtubī (malikite)", "« Taklīman » prouve une parole réelle, non une parole créée dans un arbre", "Al-Jāmiʿ, 6/18"),
 ("Al-Nahhās (chez al-Qurtubī)", "Les grammairiens sont unanimes : un verbe renforcé par son nom verbal n'est pas une métaphore", "Al-Jāmiʿ, 6/18"),
 ("Al-Shinqītī (malikite)", "Cite la parole parmi les attributs que Dieu S'attribue en propre (4:164, 7:144, 9:6)", "Adwāʾ al-Bayān, 2/21"), MALIK])

ADD["« Dieu est en haut » : hauteur, séparation, infinité"] = sujet(
"On peut comprendre que dire « Dieu est en haut » mette mal à l'aise. Aujourd'hui, nous savons que la Terre est ronde et que le « haut » d'un Européen est le « bas » d'un Australien. Dire que Dieu est « au-dessus », n'est-ce pas Le placer dans un lieu, comme un objet dans l'espace ?\n\nJe vais montrer que les textes sur la hauteur de Dieu ne parlent pas d'une position dans l'espace, mais d'une transcendance : rien de créé n'est au-dessus de Lui, et Il n'est contenu par rien. L'imam Mālik disait : « Allāh est dans le ciel, et Sa science est en tout lieu. »\n\nJe m'appuie sur Mālik, Ibn ʿAbd al-Barr, al-Qurtubī et le hadith « Tu es l'Apparent, rien n'est au-dessus de Toi ».",
["L'objection a du poids : notre « haut » est relatif à notre position sur une sphère qui tourne. Une hauteur physique ne peut donc pas être absolue.",
 "Mais elle suppose que la hauteur affirmée de Dieu serait **une hauteur dans l'espace créé**. Or l'espace lui-même est une créature, qui n'existait pas quand Dieu existait seul."],
"Dire que Dieu est « au-dessus » ne revient pas à Le mettre **dans** un lieu : c'est dire, comme le Prophète ﷺ, « **Tu es l'Apparent, rien n'est au-dessus de Toi** ». La hauteur affirmée est celle de **la domination et de la transcendance**, et Ibn ʿAbd al-Barr refuse fermement d'y ajouter toute description de modalité.",
"Le cœur du raisonnement : au-dessus de la création, non dans la création",
[{"type": "comparaison", "title": "Hauteur dans l'espace et hauteur de transcendance", "columns": ["Hauteur dans l'espace", "Hauteur de transcendance"], "rows": [
   {"criterion": "Ce qu'elle suppose", "cells": ["Un lieu qui contient, une distance mesurable", "Que rien de créé n'est au-dessus de Lui"]},
   {"criterion": "Elle dépend de", "cells": ["La position de l'observateur", "Rien : elle est absolue"]},
   {"criterion": "Ce qu'en disent les savants", "cells": ["Refusée : « c'est une modalité, et ils en ont horreur » (Ibn ʿAbd al-Barr)", "Affirmée : « Allāh est dans le ciel, Sa science en tout lieu » (Mālik)"]}
 ], "caption": "D'après al-Tamhīd, 5/149 à 156."}],
[("Mālik ibn Anas", "« Allāh est dans le ciel, et Sa science est en tout lieu ; aucun lieu n'en est vide »", "Al-Tamhīd, 5/149"), MALIK, IBN_AB_IJMAA,
 ("Ibn ʿAbd al-Barr", "Refuse « Il descend par Son Essence » : c'est une modalité, que les gens de compréhension évitent", "Al-Tamhīd, 5/156"),
 ("Ibn Masʿūd", "« Allāh est au-dessus du Trône, et rien de vos actes ne Lui échappe »", "Al-Tamhīd, 5/150")])

ADD["« Dieu est avec vous » et « Je suis proche » : concilier les registres"] = sujet(
"On peut comprendre que ces deux séries de versets semblent se contredire. D'un côté, Dieu est au-dessus du Trône ; de l'autre, Il est « avec vous où que vous soyez », « plus proche que la veine jugulaire ». Comment peut-Il être à la fois très haut et tout proche ?\n\nJe vais montrer que les Compagnons et leurs élèves n'y ont vu aucune contradiction, et qu'Ibn ʿAbd al-Barr rapporte leur accord : Il est au-dessus du Trône, et Sa science, Son ouïe, Sa vue et Son soutien sont avec nous. Ce n'est pas une proximité de distance, c'est une proximité de connaissance et de soin.\n\nJe m'appuie sur Ibn ʿAbd al-Barr, al-Dahhāk, Sufyān al-Thawrī, Ibn Masʿūd et Mālik.",
["La difficulté vient de nos catégories spatiales : chez nous, être proche de quelqu'un, c'est être près de lui dans l'espace ; être au-dessus, c'est être loin.",
 "Pourtant, dans notre propre langage, nous disons d'un parent éloigné qu'il est « avec nous » par la pensée, et d'un ami lointain qu'il est « proche ». La proximité n'est pas toujours une affaire de mètres."],
"Le verset de « la conversation à trois » **commence et se termine par la science** : « Allāh sait ce qui est dans les cieux et sur la terre… Allāh sait toute chose » (58:7). Les savants des Compagnons et des Successeurs ont dit : « **Il est sur le Trône, et Sa science est avec eux** », et personne dont l'avis compte ne les a contredits.",
"Le cœur du raisonnement : deux registres qui ne se contredisent pas",
[{"type": "comparaison", "title": "Hauteur et proximité", "columns": ["Hauteur (ʿuluww)", "Proximité (maʿiyya, qurb)"], "rows": [
   {"criterion": "Ce qu'elle dit", "cells": ["Rien de créé n'est au-dessus de Lui", "Rien n'échappe à Sa science, Son ouïe, Sa vue"]},
   {"criterion": "Ce qu'elle n'est pas", "cells": ["Un éloignement indifférent", "Un mélange de Dieu avec les choses"]},
   {"criterion": "Effet sur le cœur", "cells": ["La révérence", "La confiance et la vigilance"]},
   {"criterion": "Formule des anciens", "cells": ["« Il est sur le Trône »", "« Sa science est avec eux où qu'ils soient »"]}
 ], "caption": "D'après Ibn ʿAbd al-Barr, al-Tamhīd, 5/149 à 150."}],
[("Les Compagnons et Successeurs", "« Il est sur le Trône, et Sa science est en tout lieu » ; nul dont l'avis compte ne les a contredits", "Al-Tamhīd, 5/150"),
 ("Al-Dahhāk ibn Muzāhim", "« Il est sur Son Trône, et Sa science est avec eux où qu'ils soient »", "Al-Tamhīd, 5/150"),
 ("Sufyān al-Thawrī", "A dit la même chose qu'al-Dahhāk", "Al-Tamhīd, 5/150"),
 ("Wakīʿ", "Jugeait gravement fausse la doctrine qui met Dieu en toute chose", "Al-Tamhīd, 5/155"),
 ("Mālik ibn Anas", "« Allāh est dans le ciel, et Sa science est en tout lieu »", "Al-Tamhīd, 5/149")])

ADD["Ce que l'on remet à Dieu : le sens des termes, ou la réalité qu'ils désignent ?"] = sujet(
"On peut comprendre la tentation de dire : « Ces versets sur les attributs, Dieu seul sait ce qu'ils veulent dire. » Cela paraît humble et prudent. Pourquoi chercher à comprendre ce qui nous dépasse ?\n\nJe vais montrer que cette humilité, si elle porte sur le sens des mots, aboutit à un résultat étrange : elle rend incompréhensible une partie du Livre que Dieu a révélé « en arabe clair ». Les anciens ne remettaient pas à Dieu le sens, mais la modalité. Al-Shinqītī l'explique à partir de la parole de Mālik.\n\nJe m'appuie sur Mālik, al-Shinqītī, Ibn ʿAbd al-Barr et Sahnūn.",
["L'intention est respectable : on veut éviter de parler de Dieu sans savoir. Et il est vrai qu'il y a en Lui une part qui nous échappe totalement.",
 "Mais il faut savoir **quelle part** nous échappe. Si l'on dit que le sens même des mots nous échappe, alors les versets des attributs deviennent des formules vides, et Dieu nous aurait parlé pour ne rien nous dire."],
"Mālik a fait la distinction en deux phrases : « **l'istiwāʾ n'est pas inconnu** » (le sens est compris), « **le comment n'est pas concevable** » (la modalité est remise à Dieu). Al-Shinqītī précise que les Arabes connaissaient par leur langue **le sens de base**, sans connaître de modalité ni de limite pour Dieu (Adwāʾ, 7/276).",
"Le cœur du raisonnement : on comprend le sens, on ignore le comment",
[{"type": "comparaison", "title": "Deux sortes de « remise à Dieu » (tafwīd)", "columns": ["Remettre le sens", "Remettre la modalité"], "rows": [
   {"criterion": "Ce qu'on dit", "cells": ["« Je ne sais pas ce que ce mot veut dire »", "« Je sais ce qu'il veut dire, je ne sais pas comment cela est en Dieu »"]},
   {"criterion": "Ce qu'il en résulte", "cells": ["Une partie du Coran devient muette", "Le Coran parle, Dieu reste au-delà de nos images"]},
   {"criterion": "Position de Mālik", "cells": ["Non : « l'istiwāʾ n'est pas inconnu »", "Oui : « le comment n'est pas concevable »"]}
 ], "caption": "Al-Shinqītī, Adwāʾ al-Bayān, 7/276."}],
[MALIK, ("Al-Shinqītī (malikite)", "Les Arabes connaissent par leur langue le sens de base, sans connaître de modalité ni de limite pour Dieu", "Adwāʾ al-Bayān, 7/276"),
 ("Al-Shinqītī", "Leur langue savait déjà qu'entre le Créateur et le créé la différence est sans limite", "Adwāʾ al-Bayān, 7/276"), SAHNUN, IBN_AB_IJMAA])

ADD["Ta'wīl : là où elle s'impose, là où elle ne s'étend pas"] = sujet(
"On peut comprendre qu'on veuille interpréter certains textes. Quand on lit que Dieu « descend » chaque nuit, ou que Son ouïe « embrasse » les voix, l'esprit cherche spontanément un sens qui évite toute image de déplacement ou d'étendue. Les savants eux-mêmes l'ont fait. Où est alors la limite ?\n\nJe vais montrer que l'école malikite elle-même a connu deux voies sur ces questions, celle d'Ibn ʿAbd al-Barr, qui affirme sans modalité, et celle d'Ibn Battāl, qui interprète, et que les deux partagent l'essentiel : aucun des deux n'imagine Dieu comme un corps. Je montrerai aussi pourquoi l'interprétation n'est légitime que lorsqu'une preuve l'exige.\n\nJe m'appuie sur Mālik, Ibn ʿAbd al-Barr, Ibn Battāl, al-Qurtubī, al-Khattābī et le verset 3:7.",
["Interpréter n'est pas un crime : le Coran lui-même emploie des images, et la langue arabe est riche en figures. Le Prophète ﷺ a prié pour qu'Ibn ʿAbbās reçoive la science de l'interprétation.",
 "Mais si l'on interprète tout ce qui dérange, il ne reste plus rien : chaque attribut peut être transformé en autre chose. Il faut donc une règle."],
"La règle qui se dégage des savants : **on n'interprète que lorsqu'une preuve l'impose**, jamais au point de **nier** ce que le texte affirme, et **la divergence entre savants de la Sunna** qui refusent tous l'anthropomorphisme **se traite avec respect**, comme l'a fait Ibn ʿAbd al-Barr.",
"Le cœur du raisonnement : une interprétation est un outil, pas une échappatoire",
[{"type": "comparaison", "title": "Interprétation légitime et interprétation abusive", "columns": ["Légitime", "Abusive"], "rows": [
   {"criterion": "Ce qui la déclenche", "cells": ["Une preuve textuelle ou rationnelle claire", "Le simple malaise devant un texte"]},
   {"criterion": "Son effet", "cells": ["Elle précise le sens", "Elle annule ce que le texte affirme"]},
   {"criterion": "Exemple", "cells": ["« L'ouïe atteint les voix » plutôt que « s'élargit » (Ibn Battāl)", "Nier toute ouïe réelle en Dieu"]},
   {"criterion": "Attitude envers l'autre avis", "cells": ["Respect, comme Ibn ʿAbd al-Barr rapportant l'avis attribué à Mālik", "Condamnation de quiconque lit autrement"]}
 ], "caption": "D'après al-Tamhīd, 5/155, et Sharh d'Ibn Battāl, 10/417."}],
[("Mālik (d'après Ashhab, chez al-Tabarī)", "L'arrêt se fait après « nul n'en connaît l'interprétation qu'Allāh » (3:7)", "Al-Qurtubī, 4/16"),
 ("Al-Qurtubī", "C'est l'avis de la plupart des savants, rapporté d'Ibn Masʿūd, Ubayy, Ibn ʿAbbās et ʿĀʾisha", "Al-Jāmiʿ, 4/16"),
 ("Al-Khattābī", "Dieu loue les enracinés pour leur foi, « nous y croyons », et non pour une science de l'ambigu", "Al-Qurtubī, 4/16"),
 ("Mālik (d'après Mutarrif)", "Sur la descente : « Son ordre descend »", "Al-Tamhīd, 5/155"),
 ("Ibn ʿAbd al-Barr", "« Il descend », comme l'a dit le Prophète ﷺ, sans modalité, comme pour l'istiwāʾ", "Al-Tamhīd, 5/155"),
 ("Ibn Battāl (malikite)", "« L'ouïe embrasse » veut dire « atteint », pour écarter l'idée d'étendue corporelle", "Sharh, 10/417")])

ADD["Une classification des attributs : essentiels, actifs, personnels"] = sujet(
"On peut comprendre qu'on se méfie des classifications. Ranger les attributs de Dieu en catégories, n'est-ce pas Le traiter comme un objet d'étude ? Et si Dieu ne change pas, comment dire qu'Il « pardonne aujourd'hui » ou qu'Il « descend chaque nuit » ? Cela ne suppose-t-il pas un changement en Lui ?\n\nJe vais montrer que la classification n'est qu'un outil d'enseignement, et que la distinction entre attributs d'essence et attributs d'action répond justement à cette difficulté : Dieu ne change pas dans Son Essence, mais Il agit, quand Il veut, comme Il veut. Le verset « chaque jour, Il est à une œuvre », expliqué par le Prophète ﷺ lui-même, l'illustre parfaitement.\n\nJe m'appuie sur al-Qurtubī, Abū l-Dardāʾ, Ibn Bahr et le Coran.",
["La méfiance est saine : aucune classification n'épuise Dieu, et certaines ont parfois servi à des débats stériles.",
 "Mais nous classons parce que notre esprit en a besoin pour **tenir ensemble** beaucoup d'informations. Une carte n'est pas le territoire, mais elle aide à ne pas s'y perdre."],
"La distinction utile est simple : certains attributs, comme la vie et la science, **Dieu ne cesse jamais d'en être qualifié** ; d'autres, comme pardonner ou créer, **Il les accomplit quand Il veut**. Cela ne fait pas changer Dieu ; cela dit qu'**Il agit réellement** dans le monde, comme le dit 55:29.",
"Le cœur du raisonnement : Dieu ne change pas, mais Il agit",
[{"type": "schema", "title": "Ce que dit « chaque jour, Il est à une œuvre »", "arabic": "كُلَّ يَوۡمٍ هُوَ فِي شَأۡنٖ", "variant": "flow", "nodes": [
   {"label": "Son Essence ne change pas", "note": "Il est le Vivant, le Savant, le Puissant, de toute éternité."},
   {"label": "Il agit chaque jour", "note": "« Pardonner un péché, dissiper une détresse, élever des gens et en abaisser d'autres »."},
   {"label": "Selon Sa volonté", "note": "Ses actes ne sont pas imposés de l'extérieur : Il fait ce qu'Il veut."},
   {"label": "Pour mon espérance", "note": "Aujourd'hui même, je peux être l'objet de Son œuvre de pardon."}
 ], "caption": "D'après le hadith d'Abū l-Dardāʾ cité par al-Qurtubī, 17/166."}],
[("Abū l-Dardāʾ (hadith)", "« Parmi Ses œuvres : pardonner un péché, dissiper une détresse, élever des gens et en abaisser d'autres »", "Al-Qurtubī, 17/166"),
 ("Ibn ʿUmar (hadith)", "« Il pardonne un péché, dissipe une détresse, exauce celui qui invoque »", "Al-Qurtubī, 17/166"),
 ("Ibn Bahr", "Son œuvre en ce monde est l'épreuve ; au Jour dernier, la rétribution et le jugement", "Al-Qurtubī, 17/166"),
 ("Al-Bāqillānī (chez al-Qurtubī)", "Certains noms renvoient à Son Essence, d'autres à des attributs d'essence, d'autres à des attributs d'action", "Al-Jāmiʿ, 7/326")])

ADD["Attributs de beauté et attributs de rigueur"] = sujet(
"On peut comprendre que la coexistence de la miséricorde et du châtiment dans le Coran déroute. On voudrait parfois un Dieu uniquement doux, et l'on se demande pourquoi le Coran parle si souvent de l'Enfer. À l'inverse, d'autres ne retiennent que la sévérité et vivent dans l'angoisse.\n\nJe vais montrer que les deux registres sont nécessaires, et qu'ils ne sont pas de même taille : la miséricorde « embrasse toute chose », le châtiment frappe « qui Je veux ». Un hadith rapporté par Muslim et commenté par al-Qurtubī en donne l'équilibre exact.\n\nJe m'appuie sur al-Qurtubī, Ibn Kathīr et le hadith des cent parts de miséricorde.",
["Le malaise est compréhensible : nous associons la douceur à l'amour et la sévérité à la dureté.",
 "Mais nous savons aussi, par expérience, qu'un parent qui ne met jamais en garde n'aime pas vraiment, et qu'un parent qui ne fait que menacer détruit son enfant. L'éducation juste tient les deux."],
"Al-Qurtubī résume l'équilibre en une phrase : « **le désespoir est une capitulation, l'espérance seule est une négligence, et le meilleur des chemins est celui du milieu** » (al-Jāmiʿ, 10/34). Et il précise : la crainte doit dominer **quand on est en bonne santé**, l'espérance **à l'approche de la mort**.",
"Le cœur du raisonnement : deux registres, une seule sagesse",
[{"type": "comparaison", "title": "Pourquoi les deux registres sont nécessaires", "columns": ["Sans la rigueur", "Sans la beauté"], "rows": [
   {"criterion": "Effet sur l'homme", "cells": ["Négligence : « Dieu pardonnera de toute façon »", "Désespoir : « je suis perdu »"]},
   {"criterion": "Ce qui manque", "cells": ["Le sérieux de la responsabilité", "La confiance qui permet de revenir"]},
   {"criterion": "Ce que dit le hadith", "cells": ["« Si le croyant savait ce qu'il y a comme châtiment, nul n'espérerait »", "« Si le mécréant savait ce qu'il y a comme miséricorde, nul ne désespérerait »"]}
 ], "caption": "Hadith de Muslim, cité par al-Qurtubī, 10/34."}],
[("Le Prophète ﷺ (Muslim)", "Le hadith du croyant qui saurait le châtiment et du mécréant qui saurait la miséricorde", "Al-Qurtubī, 10/34"),
 ("Al-Qurtubī (malikite)", "« Le meilleur des chemins est celui du milieu » ; crainte dans la santé, espérance dans la maladie", "Al-Jāmiʿ, 10/34"),
 ("Ibn Kathīr", "Le verset 15:49 fonde les deux stations de l'espérance et de la crainte", "Tafsīr, 4/652"),
 ("Le Prophète ﷺ (al-Bukhārī)", "Cent parts de miséricorde, dont une seule descendue sur terre", "Ibn Battāl, 9/213")])

ADD["Peut-on employer pour d'autres que Lui les termes qui Le qualifient ?"] = sujet(
"On peut comprendre l'hésitation. Si l'on dit d'un homme qu'il est « savant » et de Dieu qu'Il est « Savant », ne met-on pas l'homme au niveau de Dieu ? Et si, à l'inverse, on refuse d'employer les mêmes mots, comment parler de Dieu ?\n\nJe vais montrer que le Coran lui-même emploie les mêmes mots pour Dieu et pour les créatures, sans jamais confondre les réalités. Al-Shinqītī en fait une démonstration attribut par attribut, et conclut par une règle limpide : la différence entre les attributs est à la mesure de la différence entre les essences.\n\nJe m'appuie sur al-Shinqītī, le Coran et l'invocation que Mālik rapporte de Kaʿb.",
["Le problème est réel : le langage humain est fait pour parler des choses humaines. Utiliser les mêmes mots pour Dieu semble risquer la confusion.",
 "Mais refuser tout mot commun rendrait impossible toute connaissance de Dieu : nous ne pouvons comprendre que ce qui ressemble, au moins par le mot, à notre expérience."],
"Le Coran dit de Dieu qu'Il est « l'Audient, le Voyant » (42:11), et de l'homme : « Nous l'avons fait entendant et voyant » (76:2). Al-Shinqītī conclut : **un attribut réel digne de Sa perfection, un attribut réel à la mesure de la créature, et entre les deux la même distance qu'entre leurs essences** (Adwāʾ, 2/21).",
"Le cœur du raisonnement : le mot est commun, la réalité est propre",
[{"type": "schema", "title": "La règle d'al-Shinqītī", "arabic": "الاشتراك في الاسم لا في الحقيقة", "variant": "flow", "nodes": [
   {"label": "Un mot commun", "note": "« Audient », « savant », « vivant » se disent de Dieu et de l'homme."},
   {"label": "Deux réalités", "note": "Chez Dieu : parfaite, sans limite. Chez l'homme : réelle, mais limitée."},
   {"label": "Une distance mesurée", "note": "Autant de différence entre les attributs qu'entre les essences."},
   {"label": "Une connaissance vraie", "note": "On sait vraiment quelque chose de Dieu, sans jamais L'imaginer."}
 ], "caption": "Al-Shinqītī, Adwāʾ al-Bayān, 2/21."}],
[SHINQ_21, ("Al-Shinqītī", "Même démonstration pour la science, la vie, l'ouïe, la vue et la parole", "Adwāʾ al-Bayān, 2/21"),
 ("Ibn ʿAbd al-Barr", "Les noms et attributs ne se décrivent que par ce que Dieu ou Son Messager en ont dit", "Al-Tamhīd, 5/156"), SAHNUN])

ADD["« Afin que Nous sachions » : Dieu ignorerait-Il l'avenir ?"] = sujet(
"On peut comprendre que ces versets surprennent. Le Coran affirme partout que Dieu sait tout, le passé comme l'avenir. Et pourtant, plusieurs versets disent qu'Il éprouve les hommes « afin de savoir » qui sera sincère. Si Dieu savait déjà, pourquoi éprouver ? Et s'Il ne savait pas, comment est-Il omniscient ?\n\nJe vais montrer que la difficulté disparaît dès qu'on distingue ce que Dieu sait d'avance et ce qui se réalise et devient visible. Al-Qurtubī rapporte cinq explications des savants, dont celle de ʿAlī ibn Abī Tālib : « afin que Nous voyions ». Et l'épreuve a un but précis : rendre la justice visible.\n\nJe m'appuie sur al-Qurtubī, ʿAlī, Ibn ʿAbbās, al-Tabarī et al-Mahdawī.",
["La question est sérieuse, et elle se pose dans toutes les traditions religieuses : comment concilier la prescience divine avec l'idée d'une épreuve ?",
 "Une lecture rapide pourrait faire croire que Dieu apprend quelque chose. Mais cela contredirait des dizaines de versets clairs sur Sa science totale."],
"Dieu sait de toute éternité **ce qui arrivera** ; l'épreuve fait que cela **arrive réellement**, devient **visible**, et peut donc être **rétribué**. Dieu ne juge personne sur ce qu'Il sait seulement, mais sur **ce que la personne a réellement fait**. L'épreuve ne sert pas à informer Dieu : **elle sert à rendre la justice visible**.",
"Le cœur du raisonnement : savoir d'avance n'est pas juger d'avance",
[{"type": "comparaison", "title": "Deux sortes de « savoir »", "columns": ["Science d'avance", "Science de ce qui est arrivé"], "rows": [
   {"criterion": "Objet", "cells": ["Ce qui arrivera", "Ce qui est arrivé"]},
   {"criterion": "Fondement de la rétribution ?", "cells": ["Non : nul n'est puni pour ce qu'il aurait fait", "Oui : on est rétribué pour ce qu'on a fait"]},
   {"criterion": "Ce que dit « li-naʿlama »", "cells": ["Ce savoir existe déjà", "« Afin que Nous voyions » (ʿAlī) : afin que cela se réalise et se voie"]}
 ], "caption": "D'après al-Qurtubī, al-Jāmiʿ, 2/156."}],
[("ʿAlī ibn Abī Tālib", "« Afin que Nous sachions » veut dire « afin que Nous voyions »", "Al-Qurtubī, 2/156"),
 ("Ibn ʿAbbās (chez al-Tabarī)", "« Pour distinguer les gens de certitude des gens de doute »", "Al-Qurtubī, 2/156"),
 ("Al-Mahdawī", "Dieu S'attribue ce que savent le Prophète et ses partisans, « et c'est bon »", "Al-Qurtubī, 2/156"),
 ("Al-Qurtubī (malikite)", "Rapporte aussi : « afin que vous sachiez que Nous savons », contre les hypocrites qui doutaient de Sa prescience", "Al-Jāmiʿ, 2/156")])

# ---------- d. Décret ----------
ADD["Le décret et la responsabilité humaine"] = sujet(
"On peut comprendre que cette question soit l'une des plus douloureuses. Si tout est écrit d'avance, mes choix sont-ils vraiment les miens ? Et si Dieu a décrété que quelqu'un pécherait, comment peut-Il le punir ? Beaucoup de croyants ont été troublés par cette question, et même deux prophètes, Adam et Moïse, en ont débattu selon un hadith que l'imam Mālik a placé en tête de son « Livre du décret ».\n\nJe vais montrer que la réponse des savants est claire : le décret relève de Dieu, et nul ne sera interrogé sur lui ; les ordres et les interdits relèvent de nous, et c'est sur eux que nous serons jugés. Et nul n'a le droit d'invoquer le décret pour excuser un péché : c'est un consensus rapporté par Ibn ʿAbd al-Barr.\n\nJe m'appuie sur le Muwatta, Ibn ʿAbd al-Barr, ʿUmar ibn ʿAbd al-ʿAzīz, Muhammad ibn Wāsiʿ et ʿUmar ibn al-Khattāb.",
["La question est légitime, et elle a été posée dès l'époque des Compagnons. Elle repose sur une intuition morale juste : on ne devrait pas être puni pour ce qu'on n'a pas choisi.",
 "Mais elle suppose que **le savoir de Dieu** et **l'écriture du décret** forceraient l'homme. Or savoir qu'une chose arrivera ne la cause pas : un astronome qui prévoit une éclipse ne la provoque pas."],
"Les savants répondent en séparant **deux registres**. Le décret est le secret d'Allāh : je ne le connais pas avant qu'il arrive, et **on ne m'interrogera pas dessus**. Les ordres et les interdits sont connus de moi, et **c'est sur eux que je serai jugé**. ʿUmar ibn ʿAbd al-ʿAzīz : « **Demande des comptes à toi-même là où ton Seigneur t'en demandera** » (al-Istidhkār, 8/259).",
"Le cœur du raisonnement : je ne connais pas le décret, je connais l'ordre",
[{"type": "schema", "title": "Pourquoi le décret n'excuse pas le péché", "arabic": "لا حجة في القدر على المعصية", "variant": "flow", "nodes": [
   {"label": "Je ne connais pas le décret d'avance", "note": "Quand j'agis, je ne sais pas ce qui est écrit : je choisis réellement."},
   {"label": "Je connais l'ordre et l'interdit", "note": "Ce que Dieu attend de moi m'a été clairement enseigné."},
   {"label": "Mon choix est réel", "note": "Je le sens : personne ne me pousse quand je décide de mentir ou de dire vrai."},
   {"label": "Le décret n'est connu qu'après coup", "note": "Invoquer « c'était écrit » après avoir péché est une excuse a posteriori."},
   {"label": "Consensus des savants", "note": "Nul n'a le droit d'en faire un argument pour ses péchés (Ibn ʿAbd al-Barr, 8/260)."}
 ], "caption": "D'après al-Istidhkār, 8/259 à 260."}],
[("Mālik (Muwatta)", "Ouvre le « Livre du décret » par le débat d'Adam et Moïse", "Al-Istidhkār, 8/257"),
 ("Ibn ʿAbd al-Barr (malikite)", "Le cas d'Adam est particulier, car il parlait après son repentir ; consensus : le décret n'excuse aucun péché", "Al-Istidhkār, 8/259 à 260"),
 ("Yahyā ibn Saʿīd (d'après Mālik)", "Cela s'est passé après qu'Adam eut été pardonné", "Al-Istidhkār, 8/260"),
 ("ʿUmar ibn ʿAbd al-ʿAzīz", "« Dieu ne demande pas de comptes sur ce qu'Il a décrété, mais sur ce qu'Il a ordonné »", "Al-Istidhkār, 8/259"),
 ("Muhammad ibn Wāsiʿ", "« Dieu ne questionnera pas sur Son décret, mais sur vos actes »", "Al-Istidhkār, 8/259"),
 ("Muslim ibn Yasār et Abū l-ʿĀliya", "Il suffit de savoir que rien ne t'atteint sans être écrit, et que tu seras rétribué pour tes œuvres", "Al-Istidhkār, 8/259"),
 ("ʿUmar ibn al-Khattāb", "« Nous fuyons le décret d'Allāh vers le décret d'Allāh »", "Al-Istidhkār, 8/250")])

ADD["Les quatre degrés de la foi au qadar"] = sujet(
"On peut comprendre que la foi au décret paraisse abstraite, voire inquiétante. Que veut dire concrètement « croire au qadar » ? Est-ce accepter que tout est figé ? Faut-il renoncer à agir ? Et comment cette croyance peut-elle être une source de paix plutôt que d'angoisse ?\n\nJe vais montrer que les savants ont résumé cette foi en quatre degrés, science, écriture, volonté, création, et qu'un Compagnon, Salmān al-Fārisī, l'a traduite en une phrase de vie : savoir que ce qui t'a atteint ne pouvait pas te manquer. J'ajoute l'histoire de ʿAlī qui refusa qu'on monte la garde devant lui.\n\nJe m'appuie sur le Muwatta, Ibn ʿAbd al-Barr, Salmān, ʿAlī et ʿAbd al-Rahmān ibn Mahdī.",
["Le décret est souvent présenté comme une doctrine difficile, réservée aux théologiens. Il est normal de se demander à quoi elle sert dans la vie de tous les jours.",
 "On craint aussi qu'elle rende passif : si tout est écrit, pourquoi faire des efforts ?"],
"La foi au qadar n'est pas une théorie : c'est **une manière de vivre les événements**. Salmān al-Fārisī la définit ainsi : « **Quand l'homme sait au fond de lui que ce qui l'a atteint ne pouvait le manquer, et que ce qui l'a manqué ne pouvait l'atteindre** » (al-Istidhkār, 8/258). Elle n'empêche pas d'agir : elle empêche **de s'effondrer** après avoir agi.",
"Le cœur du raisonnement : une doctrine qui libère de l'angoisse",
[{"type": "comparaison", "title": "Ce que la foi au qadar change", "columns": ["Sans cette foi", "Avec cette foi"], "rows": [
   {"criterion": "Devant un échec", "cells": ["« Si seulement j'avais fait autrement… » sans fin", "« J'ai fait ce que je devais ; le résultat appartient à Dieu »"]},
   {"criterion": "Devant un succès", "cells": ["« C'est grâce à moi seul »", "« C'est par la grâce de Dieu, qui a mis en mouvement les causes »"]},
   {"criterion": "Devant le danger", "cells": ["L'angoisse permanente", "La précaution, puis la paix (l'histoire de ʿAlī)"]},
   {"criterion": "Devant l'avenir", "cells": ["La peur de ce qui pourrait arriver", "« Rien ne nous atteindra hormis ce qu'Allāh a écrit pour nous » (9:51)"]}
 ], "caption": "D'après al-Istidhkār, 8/258 à 266."}],
[("Ibn ʿUmar (hadith du Muwatta)", "« Toute chose est selon un décret, même l'incapacité et l'habileté »", "Al-Istidhkār, 8/266"),
 ("Tāwūs", "Les Compagnons qu'il a connus disaient : « toute chose est selon un décret »", "Al-Istidhkār, 8/266"),
 ("Salmān al-Fārisī", "La foi au décret : savoir que ce qui t'a atteint ne pouvait te manquer", "Al-Istidhkār, 8/258"),
 ("ʿAlī ibn Abī Tālib", "« Quand l'affaire est décrétée au ciel, les gens de la terre l'exécutent »", "Al-Istidhkār, 8/259"),
 ("ʿAbd al-Rahmān ibn Mahdī", "« La science, le décret et l'écriture, c'est la même chose »", "Al-Istidhkār, 8/266"),
 ("Ibn ʿAbd al-Barr (malikite)", "« Le décret est le secret d'Allāh, on ne l'atteint pas par la controverse »", "Al-Istidhkār, 8/266")])

ADD["L'invocation change-t-elle ce qui est écrit ?"] = sujet(
"On peut comprendre que cette question décourage parfois de prier. Si tout est déjà écrit, à quoi bon demander ? Soit ce que je demande est écrit pour moi, et je l'aurai sans prier ; soit il ne l'est pas, et ma prière n'y changera rien. Ce raisonnement semble imparable.\n\nJe vais montrer qu'il contient une faille : il sépare le résultat des moyens qui y mènent. L'invocation fait elle-même partie du décret, comme le remède fait partie de la guérison. Et les plus grands Compagnons, qui croyaient au décret plus que quiconque, priaient Dieu de les effacer du registre des malheureux.\n\nJe m'appuie sur al-Qurtubī, ʿUmar, Ibn Masʿūd, Abū Wāʾil, Ibn ʿAbbās et le hadith des liens de parenté.",
["Le raisonnement « tout est écrit, donc la prière est inutile » est très ancien, et il a l'apparence de la logique.",
 "Mais appliqué à la vie quotidienne, il paraît vite absurde : « tout est écrit, donc inutile de manger », « tout est écrit, donc inutile de prendre un remède »."],
"La faille est simple : **le décret porte sur les résultats et sur leurs causes à la fois**. Dieu a décrété la guérison **par** le remède, la satiété **par** la nourriture, et l'exaucement **par** l'invocation. Ma prière n'est pas extérieure au décret : **elle en fait partie**.",
"Le cœur du raisonnement : l'invocation est une cause décrétée",
[{"type": "schema", "title": "Le raisonnement fautif et sa correction", "arabic": "الدعاء من القدر", "variant": "flow", "nodes": [
   {"label": "Le raisonnement fautif", "note": "« Le résultat est écrit, donc ce que je fais n'y change rien. »"},
   {"label": "L'erreur", "note": "Il imagine le résultat écrit sans ses causes, comme s'il tombait du ciel."},
   {"label": "La correction", "note": "Le résultat est écrit avec ses causes : l'invocation, l'effort, le remède."},
   {"label": "La preuve des Compagnons", "note": "ʿUmar, Ibn Masʿūd et Abū Wāʾil demandaient à être inscrits parmi les bienheureux."}
 ], "caption": "D'après al-Qurtubī, al-Jāmiʿ, 9/329 à 330."}],
[("ʿUmar ibn al-Khattāb", "« Si Tu m'as inscrit parmi les malheureux, efface-moi et inscris-moi parmi les bienheureux »", "Al-Qurtubī, 9/330"),
 ("Ibn Masʿūd et Abū Wāʾil", "La même invocation", "Al-Qurtubī, 9/330"),
 ("Ibn ʿAbbās", "Deux livres en plus de la Mère du Livre ; Dieu efface et confirme dans ces deux-là", "Al-Qurtubī, 9/329"),
 ("Al-Qurtubī (malikite)", "Le verset 13:39 reste général, c'est le plus apparent", "Al-Jāmiʿ, 9/329"),
 ("Le Prophète ﷺ (al-Bukhārī et Muslim)", "« Que celui qui veut que sa subsistance soit élargie entretienne ses liens de parenté »", "Al-Qurtubī, 9/330")])

ADD["De la justice divine et de la souffrance humaine"] = sujet(
"On peut comprendre que la souffrance soit l'objection la plus forte contre la foi. Un enfant malade, une catastrophe, une injustice qui reste impunie : si Dieu est bon et tout-puissant, pourquoi le permet-Il ? Cette question n'est pas un caprice d'intellectuel ; elle naît souvent d'une douleur réelle, et elle mérite d'être traitée avec respect.\n\nJe vais montrer d'abord que l'accusation d'injustice repose sur une idée précise : qu'on aurait un dû envers Dieu. Ibn ʿAbbās, puis Rabīʿa, le maître de Mālik, y ont répondu d'une phrase. Puis je montrerai que ce que Dieu ne doit à personne, Il l'a pourtant promis : Il S'est prescrit la miséricorde et S'est interdit l'injustice.\n\nJe m'appuie sur Ibn ʿAbbās, Rabīʿa, Ibn ʿAbd al-Barr et le Coran.",
["La souffrance des innocents est la plus vieille objection contre Dieu, et aucune réponse ne la fait disparaître de la vie. Il faut d'abord la reconnaître.",
 "Mais il faut aussi distinguer deux questions : « **pourquoi** cette souffrance ? », à laquelle nous ne pouvons souvent pas répondre en détail, et « **Dieu est-Il injuste** de la permettre ? », à laquelle la tradition répond clairement."],
"L'injustice, c'est **priver quelqu'un de son dû**. Or nous n'avons aucun dû envers Dieu : la vie, la santé, la guidée sont des dons. Ibn ʿAbbās : « **Si la guidée était un bien qui t'appartenait et qu'Il t'en a privé, Il t'a lésé. Mais si elle est la guidée d'Allāh, qu'Il donne à qui Il veut, Il ne t'a lésé en rien** » (al-Istidhkār, 8/267). Et pourtant, Dieu a **promis** la miséricorde à ceux qui souffrent avec patience.",
"Le cœur du raisonnement : nous n'avons pas de dû, mais nous avons une promesse",
[{"type": "comparaison", "title": "Deux niveaux de réponse", "columns": ["Le droit", "La promesse"], "rows": [
   {"criterion": "Question", "cells": ["Dieu me doit-Il quelque chose ?", "Que m'a-t-Il promis ?"]},
   {"criterion": "Réponse", "cells": ["Non : tout ce que j'ai est un don (Ibn ʿAbbās)", "La miséricorde, la récompense de la patience, la justice au Jour dernier"]},
   {"criterion": "Effet", "cells": ["L'accusation d'injustice tombe", "L'espérance reste vivante au cœur de l'épreuve"]},
   {"criterion": "Mon devoir", "cells": ["Ne pas accuser Dieu", "Soulager celui qui souffre"]}
 ], "caption": "D'après al-Istidhkār, 8/267, et les versets de la patience."}],
[("Ibn ʿAbbās", "Si la guidée est la guidée d'Allāh, Il ne t'a lésé en rien en ne te la donnant pas", "Al-Istidhkār, 8/267"),
 ("Rabīʿa (maître de Mālik)", "La même réponse à Ghaylān, le partisan du libre arbitre absolu", "Al-Istidhkār, 8/267"),
 ("Ibn ʿAbd al-Barr (malikite)", "« Rien n'arrive dans le royaume d'Allāh qu'Il ne le veuille, et ton Seigneur n'est pas injuste »", "Al-Istidhkār, 8/267"),
 ("Le hadith du Muwatta", "« Elle n'aura que ce qui lui a été décrété »", "Al-Istidhkār, 8/269")])

ADD["Le mal existe-t-il en soi, ou seulement comme privation ?"] = sujet(
"On peut comprendre que l'existence du mal pose problème au croyant. Si Dieu crée toute chose, a-t-Il créé le mal ? Et s'Il l'a créé, comment peut-Il être bon ? À l'inverse, si le mal ne vient pas de Lui, d'où vient-il ? Existerait-il une seconde puissance, rivale de Dieu ?\n\nJe vais montrer que la tradition tient deux choses ensemble : tout ce qui existe est créé par Dieu, et pourtant on ne Lui attribue pas le mal en parole, par une politesse que le Prophète ﷺ et les prophètes avant lui nous ont enseignée. Al-Qurtubī l'explique à partir de l'invocation « le mal ne T'est pas attribué ».\n\nJe m'appuie sur al-Qurtubī, l'invocation d'ouverture de la prière, Abraham et le compagnon de Moïse.",
["La question est l'une des plus anciennes de la philosophie. Certaines religions ont répondu en posant deux dieux, un bon et un mauvais.",
 "L'islam refuse ce dualisme : il n'y a qu'un seul Créateur. Il faut donc expliquer comment le mal entre dans un monde créé par un Dieu bon."],
"Al-Qurtubī distingue **deux plans** : sur le plan de **la création**, tout vient de Dieu ; sur le plan de **la parole**, on ne Lui attribue pas le mal, « **par une politesse qu'Il nous a enseignée** ». Le mal n'a pas de consistance propre qui ferait de lui **un rival** du bien : il est toujours, d'une manière ou d'une autre, **un bien qui manque**.",
"Le cœur du raisonnement : tout est créé, mais le mal n'est pas un rival",
[{"type": "comparaison", "title": "Trois réponses au problème du mal", "columns": ["Ce qu'elle affirme", "Ce qui ne va pas"], "rows": [
   {"criterion": "Le dualisme", "cells": ["Deux puissances, une bonne et une mauvaise", "Il nie l'unicité du Créateur"]},
   {"criterion": "La négation du mal", "cells": ["Le mal n'existe pas vraiment", "Il nie l'expérience et le Coran, qui parlent de maladies et d'injustices"]},
   {"criterion": "La voie d'al-Qurtubī", "cells": ["Tout est créé ; le mal n'est pas attribué à Dieu en parole, et il n'a pas de consistance rivale", "Rien : elle garde l'unicité, la réalité du mal et la bonté de Dieu"]}
 ], "caption": "D'après al-Qurtubī, al-Jāmiʿ, 15/210."}],
[("Le Prophète ﷺ (Muslim)", "« Le bien tout entier est entre Tes mains, et le mal ne T'est pas attribué »", "Al-Qurtubī, 7/153 et 15/210"),
 ("Al-Qurtubī (malikite)", "Tous les actes ont Dieu pour Créateur, mais le mal ne Lui est pas attribué en parole", "Al-Jāmiʿ, 15/210"),
 ("Abraham (26:80)", "« Quand je suis malade, c'est Lui qui me guérit »", "Al-Qurtubī, 15/210"),
 ("Le compagnon de Moïse (18:63)", "« Seul le Diable m'a fait oublier »", "Al-Qurtubī, 15/210")])

ADD["Ce que « Dieu égare qui Il veut » signifie, et ne signifie pas"] = sujet(
"On peut comprendre que ce verset choque. « Allāh égare qui Il veut et guide qui Il veut » : lu isolément, il semble dire que Dieu choisit arbitrairement de perdre certaines personnes, puis les punit de s'être perdues. Ce serait évidemment injuste.\n\nJe vais montrer que le Coran explique lui-même ce verset par d'autres : « Lorsqu'ils dévièrent, Allāh fit dévier leurs cœurs ». L'égarement divin vient après un refus lucide, comme une sanction et un scellement, et non avant, comme une fatalité. Ibn ʿAbbās et Rabīʿa en tirent une réponse décisive.\n\nJe m'appuie sur le Coran, Ibn ʿAbd al-Barr, Ibn al-Zubayr, Ibn ʿAbbās et Rabīʿa.",
["L'indignation est saine : si le verset voulait dire que Dieu égare des innocents puis les châtie, ce serait une injustice, et Dieu Se l'est interdite.",
 "Le problème vient de la lecture **isolée** d'un verset. Le Coran s'explique par le Coran, et d'autres versets précisent **qui** Dieu égare et **pourquoi**."],
"Le verset 61:5 donne l'ordre exact : d'abord « **vous savez que je suis le messager d'Allāh** » (ils savaient), puis « **ils dévièrent** » (choix libre), et seulement ensuite « **Allāh fit dévier leurs cœurs** » (sanction). L'égarement divin **ratifie** un refus ; il ne le **précède** pas.",
"Le cœur du raisonnement : l'égarement divin suit le refus, il ne le précède pas",
[{"type": "comparaison", "title": "Deux lectures du verset", "columns": ["Lecture fautive", "Lecture coranique"], "rows": [
   {"criterion": "Ordre des événements", "cells": ["Dieu égare, puis l'homme se perd", "L'homme refuse en connaissance, puis Dieu le laisse dans son refus"]},
   {"criterion": "Qui est égaré", "cells": ["N'importe qui, au hasard", "« Les pervers » (61:5), « les injustes » (14:27)"]},
   {"criterion": "Justice", "cells": ["Bafouée", "Respectée : « ton Seigneur n'est pas injuste » (Ibn ʿAbd al-Barr)"]},
   {"criterion": "Ce que je dois faire", "cells": ["Me résigner", "Ne jamais repousser une vérité que je reconnais, et demander : « ne fais pas dévier nos cœurs » (3:8)"]}
 ], "caption": "D'après 61:5 et al-Istidhkār, 8/267."}],
[("Ibn al-Zubayr (Muwatta)", "« Allāh est Celui qui guide et Celui qui éprouve »", "Al-Istidhkār, 8/267"),
 ("Ibn ʿAbd al-Barr (malikite)", "Cette parole vient du Coran ; rien n'arrive sans Sa volonté, et Il n'est pas injuste", "Al-Istidhkār, 8/267"),
 ("Ibn ʿAbbās", "Si la guidée est un don de Dieu, Il ne te lèse pas en ne te la donnant pas", "Al-Istidhkār, 8/267"),
 ("Rabīʿa", "À Ghaylān : « Tu prétends que Dieu est désobéi par contrainte ? »", "Al-Istidhkār, 8/267")])

ADD["Agir alors que tout est su : le paradoxe dissous"] = sujet(
"On peut comprendre ce paradoxe : si Dieu sait déjà si j'irai au Paradis ou en Enfer, à quoi bon agir ? Les Compagnons eux-mêmes ont posé cette question au Prophète ﷺ : « Alors, pourquoi agir ? » Ce n'est donc ni une question impie ni une question naïve.\n\nJe vais montrer que la réponse prophétique dissout le paradoxe : « Agissez, chacun est facilité vers ce pour quoi il a été créé. » La fin a été décrétée avec ses moyens ; mes actes ne sont pas inutiles, ils sont le chemin par lequel elle se réalise. Et je ne connais pas ma fin, je connais seulement ce qui m'est facilité aujourd'hui.\n\nJe m'appuie sur le Muwatta, Ibn ʿAbd al-Barr, ʿAlī, Yahyā ibn Maʿīn et la sourate al-Layl.",
["Le paradoxe a la forme d'un syllogisme rigoureux : la fin est connue ; ce qui est connu arrivera ; donc mes actes n'y changent rien.",
 "Les Compagnons l'ont formulé exactement ainsi, et le Prophète ﷺ ne les a pas blâmés de poser la question : il leur a répondu."],
"La réponse : « **Agissez, chacun est facilité vers ce pour quoi il a été créé** ». Dieu n'a pas décrété la fin **sans** les actes ; Il l'a décrétée **par** les actes : « Il l'emploie aux œuvres des gens du Paradis ». Et puisque je ne connais pas ce qui est écrit, **je ne peux pas m'en servir comme excuse** : je ne connais que ce qui m'est facilité aujourd'hui.",
"Le cœur du raisonnement : la fin est décrétée avec ses moyens",
[{"type": "schema", "title": "Comment le paradoxe se dissout", "arabic": "اعملوا فكل ميسر لما خلق له", "variant": "flow", "nodes": [
   {"label": "La fin est connue de Dieu", "note": "Vrai : rien n'échappe à Sa science."},
   {"label": "Elle n'est pas connue de moi", "note": "Je ne peux donc pas agir en fonction d'elle."},
   {"label": "Elle se réalise par mes actes", "note": "« Il l'emploie aux œuvres des gens du Paradis jusqu'à sa mort »."},
   {"label": "La facilité est un signe", "note": "« Nous lui faciliterons la voie la plus aisée » (92:7)."}
 ], "caption": "D'après le Muwatta et le hadith de ʿAlī, al-Istidhkār, 8/260 à 261."}],
[("Mālik (Muwatta, d'après ʿUmar)", "« Quand Allāh crée un serviteur pour le Paradis, Il l'emploie aux œuvres des gens du Paradis »", "Al-Istidhkār, 8/260"),
 ("Ibn ʿAbd al-Barr (malikite)", "La chaîne du Muwatta est interrompue, mais le sens est rapporté par une vingtaine de Compagnons", "Al-Istidhkār, 8/261"),
 ("Yahyā ibn Maʿīn", "A écrit de sa main à côté de Muslim ibn Yasār : « inconnu »", "Al-Istidhkār, 8/261"),
 ("ʿAlī ibn Abī Tālib (hadith)", "« Agissez, chacun est facilité vers ce pour quoi il a été créé »", "Al-Istidhkār, 8/261")])
