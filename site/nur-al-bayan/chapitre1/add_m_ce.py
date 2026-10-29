# Méthode « objection » appliquée aux groupes c (noms divins) et e (adoration).
import importlib.util, os
_s = importlib.util.spec_from_file_location('bd', os.path.join(os.path.dirname(__file__), 'add_m_bd.py'))
_m = importlib.util.module_from_spec(_s); _s.loader.exec_module(_m)
sujet = _m.sujet
ADD = {}

# ---------- c. Noms divins ----------
ADD["Un nom, quatre-vingt-dix-neuf, ou davantage ?"] = sujet(
"On peut comprendre la curiosité autour des « 99 noms ». On les voit affichés en calligraphie, récités en chaîne, appris par cœur. Mais on se demande : la liste est-elle fixée par le Prophète ﷺ ? Dieu n'aurait-Il que 99 noms ? Et pourquoi certaines listes diffèrent-elles des autres ?\n\nJe vais montrer que le hadith authentique dit « Allāh a quatre-vingt-dix-neuf noms ; quiconque les dénombre entre au Paradis », sans donner la liste dans sa version la plus sûre, et que les savants malikites eux-mêmes, al-Qurtubī, Ibn ʿAtiyya, Ibn al-Qābisī, ont reconnu que les noms dépassent ce nombre. L'invocation que Mālik rapporte de Kaʿb en donne la juste attitude : « ceux que je connais et ceux que je ne connais pas ».\n\nJe m'appuie sur al-Qurtubī, Ibn ʿAtiyya, Ibn Battāl, al-Dāwūdī, Ibn al-Qābisī et al-Tabarī.",
["La question est légitime : la liste des 99 noms est partout, et beaucoup pensent qu'elle a été dictée mot à mot par le Prophète ﷺ.",
 "Elle soulève aussi une question de fond : peut-on enfermer Dieu dans un nombre ?"],
"Le hadith dit que Dieu **a** quatre-vingt-dix-neuf noms dont la connaissance mène au Paradis ; il ne dit pas qu'Il **n'en a que** quatre-vingt-dix-neuf. Al-Qurtubī en a recensé **plus de deux cents** dans les livres des imams, et l'invocation rapportée par Mālik demande refuge auprès de « **tous les plus beaux noms, ceux que je connais et ceux que je ne connais pas** ».",
"Le cœur du raisonnement : un nombre pour un mérite, non une limite pour Dieu",
[{"type": "comparaison", "title": "Ce que dit le hadith, et ce qu'il ne dit pas", "columns": ["Ce qu'il dit", "Ce qu'il ne dit pas"], "rows": [
   {"criterion": "Le nombre", "cells": ["Il y a quatre-vingt-dix-neuf noms liés à une promesse", "Dieu n'a que quatre-vingt-dix-neuf noms"]},
   {"criterion": "La liste", "cells": ["La version la plus sûre ne la donne pas (Ibn ʿAtiyya)", "La liste d'al-Tirmidhī est transmise de manière massive"]},
   {"criterion": "Le mérite", "cells": ["« Quiconque les dénombre entre au Paradis »", "Il suffit de les réciter sans les comprendre ni les vivre"]}
 ], "caption": "D'après al-Qurtubī, 7/325, et Ibn Battāl, 10/142."}],
[("Ibn ʿAtiyya (malikite)", "La liste d'al-Tirmidhī n'est pas transmise massivement ; seule la phrase des 99 noms l'est", "Al-Qurtubī, 7/325"),
 ("Al-Qurtubī (malikite)", "A recensé plus de deux cents noms dans les livres des imams", "Al-Jāmiʿ, 7/325"),
 ("Al-Dāwūdī (malikite)", "« Il n'est pas établi que le Prophète ﷺ ait énuméré les 99 noms »", "Ibn Battāl, 10/142"),
 ("Ibn al-Qābisī (malikite)", "L'invocation de Kaʿb, « ceux que je connais et ceux que je ne connais pas », est plus sûre que de fixer une liste", "Ibn Battāl, 10/142"),
 ("Mālik (Muwatta)", "Rapporte l'invocation de Kaʿb", "Ibn Battāl, 10/142"),
 ("Al-Tabarī", "Tous les noms sont immenses ; « le nom suprême » veut dire « le nom immense »", "Ibn Battāl, 10/143 à 144")])

ADD["Extraire un nom à partir d'un verbe coranique : les conditions"] = sujet(
"On peut comprendre la tentation : le Coran dit que Dieu « ruse », « se moque », « oublie » ceux qui L'ont oublié. Pourquoi ne pas en faire des noms : le Rusé, le Moqueur ? À l'inverse, d'autres trouvent ces versets gênants et préféreraient les ignorer.\n\nJe vais montrer que les savants ont posé des conditions strictes : un nom divin doit exprimer une perfection absolue, sans imperfection possible, et être attesté par les textes. Les actes cités dans un contexte de réponse, comme la ruse contre les rusés, ne deviennent pas des noms absolus. Al-Qurtubī l'illustre avec « le meilleur de ceux qui rusent ».\n\nJe m'appuie sur al-Qurtubī, Ibn al-ʿArabī, Ibn al-Hassār, al-Farrāʾ et Ibn ʿAbbās.",
["La question est logique : si Dieu fait une chose, pourquoi ne pas Le nommer d'après elle ?",
 "Mais certains verbes, pris hors contexte, évoquent une imperfection : la ruse évoque la tromperie, l'oubli évoque l'ignorance."],
"Dans le Coran, ces actes sont toujours **une réponse** : Dieu « ruse » **contre ceux qui rusent**, « oublie » **ceux qui L'ont oublié**. Dans ce contexte, ils sont **justice et perfection**. Hors de ce contexte, ils deviendraient des défauts. C'est pourquoi on dit « **le meilleur de ceux qui rusent** », comme le Coran, et non « le Rusé » tout court.",
"Le cœur du raisonnement : un acte de réponse n'est pas un nom absolu",
[{"type": "schema", "title": "Les conditions d'un nom divin", "arabic": "شروط الاسم", "variant": "flow", "nodes": [
   {"label": "Attesté", "note": "Il figure dans le Coran ou la Sunna authentique : on ne crée pas de nom par analogie."},
   {"label": "Parfait", "note": "Il exprime une perfection sans aucune imperfection possible."},
   {"label": "Absolu", "note": "Il garde sa perfection sans avoir besoin d'un contexte de réponse."},
   {"label": "Sinon : acte ou formule", "note": "On le garde tel que le texte le dit : « le meilleur de ceux qui rusent »."}
 ], "caption": "D'après al-Qurtubī, 4/99 et 7/327."}],
[("Al-Farrāʾ", "La « ruse » de Dieu : amener progressivement vers leur perte ceux qui L'ont trahi, sans qu'ils le sachent", "Al-Qurtubī, 4/98"),
 ("Ibn ʿAbbās", "« Chaque fois qu'ils commettaient une faute, Nous leur renouvelions un bienfait »", "Al-Qurtubī, 4/98"),
 ("Al-Zajjāj", "La ruse de Dieu est la rétribution de leur ruse, nommée du même nom", "Al-Qurtubī, 4/98"),
 ("Ibn al-ʿArabī (malikite)", "A compté « le meilleur de ceux qui rusent » parmi les noms", "Al-Qurtubī, 7/327"),
 ("Ibn al-Hassār", "A critiqué l'ajout de noms non attestés", "Al-Qurtubī, 7/327"),
 ("Al-Qurtubī (malikite)", "L'invocation « ruse en ma faveur » est permise sur la base du hadith authentique", "Al-Jāmiʿ, 7/327")])

ADD["Al-Rahmān et al-Rahīm : deux miséricordes, deux portées"] = sujet(
"On peut comprendre qu'on se demande pourquoi ces deux noms, si proches, sont toujours réunis, et d'abord dans la Basmala que l'on prononce des dizaines de fois par jour. Ne disent-ils pas la même chose ? Et si Dieu est si miséricordieux, pourquoi la souffrance et le châtiment existent-ils ?\n\nJe vais montrer que les savants ont distingué une miséricorde générale, qui touche toute créature, et une miséricorde particulière, réservée aux croyants, et que leur réunion est, selon al-Mubarrad, « une faveur après une faveur ». Le hadith des cent parts de miséricorde donne la mesure de ce que nous ne voyons pas encore.\n\nJe m'appuie sur al-Qurtubī, Abū ʿAlī al-Fārisī, al-ʿArzamī, Ibn al-Mubārak, al-Muhallab et Ibn Battāl.",
["La question de la répétition est naturelle : pourquoi deux mots quand un seul suffirait ?",
 "Et la question de fond est plus grave : si la miséricorde de Dieu est si vaste, pourquoi le monde contient-il tant de douleur ?"],
"Al-Rahmān a « **un nom particulier et une action générale** » : seul Dieu le porte, et Sa miséricorde touche **toute créature**. Al-Rahīm a « **un nom général et une action particulière** » : on peut le dire d'un homme, et cette miséricorde vise **surtout les croyants**. Et ce que nous voyons de la miséricorde ici-bas n'en est qu'**un centième**.",
"Le cœur du raisonnement : une miséricorde pour tous, une autre pour ceux qui répondent",
[{"type": "schema", "title": "Les deux miséricordes", "arabic": "الرحمن الرحيم", "variant": "flow", "nodes": [
   {"label": "Al-Rahmān", "note": "La pluie, la vie, la santé, le délai pour revenir : pour toute créature."},
   {"label": "Al-Rahīm", "note": "La guidée, le pardon, la proximité : pour ceux qui répondent."},
   {"label": "Un centième ici-bas", "note": "Toute la tendresse du monde vient d'une seule part sur cent."},
   {"label": "Quatre-vingt-dix-neuf réservées", "note": "Pour le Jour de la Résurrection (al-Muhallab)."}
 ], "caption": "D'après al-Qurtubī, 1/105, et Ibn Battāl, 9/213."}],
[("La majorité des savants", "Al-Rahmān : nom particulier, action générale ; al-Rahīm : nom général, action particulière", "Al-Qurtubī, 1/105"),
 ("Abū ʿAlī al-Fārisī", "Al-Rahmān englobe toutes les formes de miséricorde ; al-Rahīm concerne les croyants", "Al-Qurtubī, 1/105"),
 ("Al-ʿArzamī", "Al-Rahmān : les bienfaits communs ; al-Rahīm : la guidée des croyants", "Al-Qurtubī, 1/105"),
 ("Ibn al-Mubārak", "« Al-Rahmān : quand on Lui demande, Il donne ; al-Rahīm : quand on ne Lui demande pas, Il se fâche »", "Al-Qurtubī, 1/105"),
 ("Al-Mubarrad", "Leur réunion : « une faveur après une faveur, un bienfait après un bienfait »", "Al-Qurtubī, 1/105"),
 ("Al-Muhallab (malikite)", "La part descendue est dans le cœur des créatures ; les autres sont pour la Résurrection", "Ibn Battāl, 9/213")])

ADD["Al-Hakīm : la sagesse comme mise en ordre"] = sujet(
"On peut comprendre qu'on doute parfois de la sagesse divine. Devant certains événements, une mort brutale, une injustice, une épreuve qui semble absurde, on se demande : où est la sagesse là-dedans ? Si Dieu est sage, pourquoi tant de choses semblent-elles n'avoir aucun sens ?\n\nJe vais montrer que la réponse est donnée dès les premières pages du Coran, par les anges eux-mêmes : ils ne comprenaient pas pourquoi Dieu créait l'homme, et ils ont fini par dire « nous n'avons de science que ce que Tu nous as appris, c'est Toi le Savant, le Sage ». La sagesse divine se reconnaît d'abord en reconnaissant les limites de la nôtre.\n\nJe m'appuie sur al-Qurtubī, ʿAlī, Ibn ʿUmar, Abū Bakr et Ibn ʿĀshūr.",
["Le doute est humain : nous jugeons naturellement les événements à partir de ce que nous en voyons.",
 "Mais nous ne voyons qu'un fragment : ni le passé entier, ni l'avenir, ni les conséquences lointaines. Juger la sagesse d'un tout à partir d'un fragment est risqué."],
"Dans « al-ʿAlīm al-Hakīm », **la science vient avant la sagesse**. La sagesse consiste à mettre chaque chose à sa place, et l'on ne peut le faire que si l'on connaît **toutes** les choses. Quand un décret me paraît absurde, ce n'est pas la sagesse divine qui manque : **c'est ma science qui est partielle**.",
"Le cœur du raisonnement : la sagesse dépend de la science",
[{"type": "comparaison", "title": "Notre sagesse et la Sienne", "columns": ["Notre sagesse", "La sagesse divine"], "rows": [
   {"criterion": "Science sur laquelle elle s'appuie", "cells": ["Partielle, limitée au présent", "Totale : passé, présent, avenir, conséquences"]},
   {"criterion": "Ce qu'elle voit", "cells": ["Un fragment", "L'ensemble"]},
   {"criterion": "Attitude juste", "cells": ["« Je ne sais pas » quand on ne sait pas (ʿAlī)", "« C'est Toi le Savant, le Sage » (2:32)"]}
 ], "caption": "D'après al-Qurtubī, 1/285."}],
[("Les anges (2:32)", "« Nous n'avons de science que ce que Tu nous as appris »", "Coran"),
 ("Al-Qurtubī (malikite)", "Il est obligatoire de dire « Allāh sait mieux, je ne sais pas » quand on ne sait pas", "Al-Jāmiʿ, 1/285"),
 ("ʿAlī ibn Abī Tālib", "« Quelle fraîcheur pour le foie » de dire « Allāh sait mieux »", "Al-Qurtubī, 1/285"),
 ("Ibn ʿUmar", "Se félicita d'avoir répondu « je n'en ai aucune science »", "Al-Qurtubī, 1/285"),
 ("Abū Bakr", "« Reviens, que j'interroge les gens »", "Al-Qurtubī, 1/285")])

ADD["Al-Samad, ou l'autosuffisance : commentaire de sourate al-Ikhlās"] = sujet(
"On peut comprendre que le mot « al-Samad » reste mystérieux. Il n'apparaît qu'une seule fois dans le Coran, dans une sourate très courte, et les traductions varient : « l'Absolu », « le Seul à être imploré », « le Soutien universel ». Que veut-il vraiment dire, et qu'est-ce que cela change pour moi ?\n\nJe vais montrer que les Compagnons et leurs élèves ont donné une dizaine de sens complémentaires, et qu'al-Qurtubī retient comme le plus juste celui qu'atteste l'étymologie : Celui vers qui l'on se tourne dans tous les besoins. Ce nom résume à lui seul notre dépendance et Son autosuffisance.\n\nJe m'appuie sur al-Qurtubī, Ibn ʿAbbās, ʿAlī, Ubayy ibn Kaʿb, Abū Hurayra, al-Suddī et al-Khattābī.",
["Un mot unique et ancien suscite naturellement des interprétations diverses.",
 "La diversité des traductions peut donner l'impression que personne ne sait vraiment ce qu'il veut dire."],
"Les sens rapportés ne s'opposent pas : ils sont **les facettes d'une même réalité**. Celui vers qui tout se tourne doit être **parfait**, **permanent**, **sans besoin**, **sans naissance ni descendance**. Al-Qurtubī retient le premier sens, « **Celui vers qui l'on se tourne dans les besoins** », appuyé par 16:53 : « quand le malheur vous touche, c'est vers Lui que vous criez ».",
"Le cœur du raisonnement : tout a besoin de Lui, Il n'a besoin de rien",
[{"type": "schema", "title": "Al-Samad, un nom à deux faces", "arabic": "الصمد", "variant": "flow", "nodes": [
   {"label": "Notre face", "note": "Tout être a besoin de Lui : on se tourne vers Lui dans chaque besoin."},
   {"label": "Sa face", "note": "Il se passe de tout être : « l'Autosuffisant dont tout a besoin » (Abū Hurayra)."},
   {"label": "Ce qui en découle", "note": "Il n'engendre pas et n'est pas engendré, car seul ce qui meurt a besoin d'héritiers (Ubayy)."},
   {"label": "Ce que j'en fais", "note": "Je ne fais d'aucune créature mon « samad »."}
 ], "caption": "D'après al-Qurtubī, 20/245."}],
[("Ibn ʿAbbās", "« Celui vers qui l'on se tourne dans les besoins »", "Al-Qurtubī, 20/245"),
 ("ʿAlī, Ibn ʿAbbās, Abū Wāʾil, Sufyān", "« Le Maître dont la seigneurie est parfaite en toute noblesse »", "Al-Qurtubī, 20/245"),
 ("Ubayy ibn Kaʿb", "« Celui qui n'engendre pas et n'est pas engendré »", "Al-Qurtubī, 20/245"),
 ("Abū Hurayra", "« Celui qui se passe de tous, et dont tous ont besoin »", "Al-Qurtubī, 20/245"),
 ("Al-Suddī", "« Celui qu'on vise dans les désirs, et qu'on appelle au secours dans les malheurs »", "Al-Qurtubī, 20/245"),
 ("Al-Qurtubī (d'après al-Khattābī)", "Le sens juste est celui qu'atteste l'étymologie : le premier", "Al-Jāmiʿ, 20/245")])

ADD["Invoquer Dieu par Ses noms : ce qui est rapporté et ce qui est inventé"] = sujet(
"On peut comprendre l'attrait des pratiques autour des noms divins : répéter un nom un nombre précis de fois, porter un nom écrit sur soi, calculer la valeur numérique des lettres. Ces pratiques promettent souvent des résultats concrets, et elles semblent pieuses puisqu'elles utilisent les noms de Dieu.\n\nJe vais montrer que le Coran demande d'invoquer Dieu par Ses noms, et que les savants malikites ont décrit la manière juste de le faire : à chaque besoin, le nom qui lui correspond, avec la conscience de Celui qu'on prie. L'invocation inventée, elle, cherche la force dans une formule plutôt que dans la relation.\n\nJe m'appuie sur al-Qurtubī, Ibn al-ʿArabī, Ibn al-Hassār et Ibn ʿAbd al-Barr.",
["L'attrait est compréhensible : on veut une prière efficace, et des méthodes précises rassurent.",
 "Mais la question est : d'où vient l'efficacité de la prière ? De la formule, ou de Celui à qui l'on parle ?"],
"Al-Qurtubī et Ibn al-ʿArabī enseignent une méthode simple : « **demander par chaque nom ce qui lui convient** ». Ô Miséricordieux, fais-moi miséricorde ; ô Guide, guide-moi. Cela oblige à **savoir ce que l'on demande et à qui**. L'efficacité vient de **la relation**, non du nombre de répétitions.",
"Le cœur du raisonnement : on prie Dieu par Son nom, on ne prie pas un nom",
[{"type": "comparaison", "title": "Invocation rapportée et invocation inventée", "columns": ["Rapportée", "Inventée"], "rows": [
   {"criterion": "Sa force", "cells": ["La relation avec Dieu et la conscience de Ses attributs", "Un nombre, une combinaison de lettres, un objet"]},
   {"criterion": "Son lien au besoin", "cells": ["« Ô Celui qui ouvre, ouvre-moi » : le nom correspond au besoin", "Un nom répété sans rapport avec la demande"]},
   {"criterion": "Sa source", "cells": ["Le Coran, la Sunna, les formules des Compagnons", "Des traditions tardives sans fondement"]},
   {"criterion": "Le risque", "cells": ["Aucun", "Croire qu'une formule agit par elle-même : une porte vers la superstition"]}
 ], "caption": "D'après al-Qurtubī, 7/327."}],
[("Al-Qurtubī (malikite)", "« Demander par chaque nom ce qui lui convient » ; « Ô Allāh » contient tous les noms", "Al-Jāmiʿ, 7/327"),
 ("Ibn al-ʿArabī (malikite)", "« Ordonne ainsi ton invocation, et tu seras parmi les sincères »", "Al-Qurtubī, 7/327"),
 ("Ibn al-Hassār", "Dans « invoquez-Le par eux », on invoque Dieu Lui-même par Ses noms", "Al-Qurtubī, 7/326"),
 ("Muqātil (sur la révélation de 7:180)", "Le verset répond aux polythéistes qui croyaient que « Rahmān » et « Rahīm » étaient deux dieux", "Al-Qurtubī, 7/325")])

# ---------- e. Adoration ----------
ADD["Reconnaître Dieu comme unique divinité"] = sujet(
"On peut comprendre que l'insistance de l'islam sur l'unicité paraisse parfois excessive. Beaucoup de gens croient en « un Dieu », même vaguement, et ne voient pas pourquoi il faudrait être si strict : pourquoi ne pas honorer aussi des saints, des intermédiaires, des forces de la nature ? Et pourquoi Dieu demanderait-Il qu'on L'adore, s'Il n'a besoin de rien ?\n\nJe vais montrer que la question centrale n'est pas « Dieu existe-t-il ? », que même les idolâtres de La Mecque admettaient, mais « à qui l'homme se soumet-il, et de qui attend-il son bien et son mal ? ». Et que l'adoration n'est pas un besoin de Dieu, mais ce pour quoi l'homme est fait, comme l'explique Ibn ʿĀshūr.\n\nJe m'appuie sur al-Qurtubī, Ibn ʿĀshūr, Mujāhid, ʿAlī et Ibn ʿAbbās.",
["L'objection a deux formes. La première : « l'important est de croire en Dieu, peu importent les détails ». La seconde : « pourquoi Dieu voudrait-Il être adoré ? »",
 "Les deux supposent que l'adoration serait une affaire de Dieu, un hommage qu'Il réclamerait. Or le Coran dit le contraire : « Je ne veux d'eux aucune subsistance » (51:57)."],
"L'adoration n'est pas un service rendu à Dieu ; c'est **la vérité de la relation** entre l'homme et Celui qui détient réellement son bien et son mal. Adorer un autre que Lui, ce n'est pas Lui faire tort : **c'est se tromper sur la réalité**, et se soumettre à ce qui n'a aucun pouvoir propre. Ibn ʿĀshūr : Dieu a créé l'homme « **avec une constitution qui conduit à Son unicité** ».",
"Le cœur du raisonnement : l'adoration est due à Celui qui possède réellement",
[{"type": "schema", "title": "Pourquoi l'adoration n'est due qu'à Dieu", "arabic": "لا إله إلا الله", "variant": "flow", "nodes": [
   {"label": "Adorer, c'est se soumettre", "note": "Avec la conviction que l'adoré détient notre bien et notre mal (Ibn ʿĀshūr)."},
   {"label": "Seul Dieu détient réellement", "note": "Les saints, les astres, les idoles sont eux-mêmes créés et dépendants."},
   {"label": "Donc l'adoration Lui revient", "note": "La donner à un autre, c'est une erreur sur la réalité."},
   {"label": "Et cela profite à l'homme", "note": "Dieu n'en a pas besoin ; c'est l'homme qui y trouve sa finalité."}
 ], "caption": "D'après Ibn ʿĀshūr, al-Tahrīr, 27/25 à 28."}],
[("Ibn ʿĀshūr (malikite)", "« Pour qu'ils M'adorent » : Je n'agrée pour leur existence que la reconnaissance de Mon unicité", "Al-Tahrīr, 27/25"),
 ("Ibn ʿĀshūr", "L'homme est créé avec une constitution qui conduit à l'unicité, mais ses choix peuvent l'en écarter", "Al-Tahrīr, 27/26"),
 ("ʿAlī ibn Abī Tālib", "« Pour que Je leur ordonne de M'adorer »", "Al-Qurtubī, 17/55"),
 ("Mujāhid", "« Pour qu'ils Me connaissent »", "Al-Qurtubī, 17/55"),
 ("Ibn ʿAbbās", "« Pour qu'ils reconnaissent Mon adoration, de gré ou de force »", "Al-Qurtubī, 17/55")])

ADD["Ce qu'est réellement le shirk, et ses degrés"] = sujet(
"On peut comprendre qu'on s'interroge sur la gravité du shirk. Le Coran dit que Dieu ne pardonne pas qu'on Lui associe quoi que ce soit (4:48). Pourquoi cette faute serait-elle plus grave que le meurtre ou le vol ? Et faut-il considérer comme polythéiste quelqu'un qui dit « on a eu la pluie grâce à telle saison » ?\n\nJe vais montrer, avec le hadith du Muwatta sur la pluie et les étoiles, que le shirk a des degrés, et qu'une même phrase peut être une mécréance totale ou une simple maladresse selon ce que l'on croit. Et que sa gravité vient de ce qu'il touche la relation même entre l'homme et son Créateur.\n\nJe m'appuie sur le Muwatta, Ibn ʿAbd al-Barr, al-Shāfiʿī, Mālik et al-Qurtubī.",
["La question de la gravité est légitime : le meurtre fait une victime visible, le shirk semble n'en faire aucune.",
 "Et la question des degrés est importante : on ne peut pas traiter de la même façon l'adorateur d'idoles et celui qui emploie une expression maladroite."],
"La gravité du shirk vient de ce qu'il **fausse la relation fondamentale** : il donne à une créature ce qui revient au Créateur. Mais Ibn ʿAbd al-Barr montre, à partir du hadith du Muwatta, que **tout dépend de la croyance** : dire « par telle étoile » est une mécréance si l'on croit que l'étoile **crée** la pluie, et n'en est pas une si l'on y voit **un signe ou une saison** voulus par Dieu.",
"Le cœur du raisonnement : le shirk est une erreur sur qui détient le pouvoir",
[{"type": "comparaison", "title": "Les degrés du shirk", "columns": ["Ce qui se passe dans le cœur", "Jugement"], "rows": [
   {"criterion": "Grand shirk", "cells": ["Attribuer à une créature un pouvoir propre de créer, de donner, de guérir", "Fait sortir de la religion (Ibn ʿAbd al-Barr)"]},
   {"criterion": "Expression maladroite", "cells": ["Employer une formule de la Jāhiliyya en croyant que Dieu seul agit", "Pas de mécréance, mais à éviter (al-Shāfiʿī, Mālik)"]},
   {"criterion": "Shirk discret", "cells": ["Accomplir une œuvre pour Dieu et pour le regard des gens", "« Je le laisse, lui et son association » (hadith qudsī)"]}
 ], "caption": "D'après al-Istidhkār, 2/436 à 438, et al-Qurtubī, 5/180."}],
[("Le hadith du Muwatta (Zayd ibn Khālid)", "« Ce matin, parmi Mes serviteurs, il y a un croyant en Moi et un mécréant »", "Al-Istidhkār, 2/436"),
 ("Ibn ʿAbd al-Barr (malikite)", "Mécréance si l'on croit que l'étoile crée la pluie ; foi si l'on y voit un signe voulu par Dieu", "Al-Istidhkār, 2/437"),
 ("Al-Shāfiʿī", "Dire « à telle saison » n'est pas de la mécréance ; il préfère éviter « par telle étoile »", "Al-Istidhkār, 2/438"),
 ("Mālik ibn Anas", "Détestait qu'on dise d'un nuage « comme il est prometteur de pluie »", "Al-Istidhkār, 2/437"),
 ("Ibn ʿAbbās", "« Vous faites de votre subsistance un démenti » (56:82) concerne les étoiles de pluie", "Al-Istidhkār, 2/437"),
 ("Al-Qurtubī (malikite)", "Rapporte le hadith qudsī « Je suis l'Associé qui se passe le mieux d'associés »", "Al-Jāmiʿ, 5/180")])

ADD["L'intercession : les versets qui la limitent, ceux qui l'affirment"] = sujet(
"On peut comprendre la confusion autour de l'intercession. Certains versets semblent la nier : « Craignez un jour où aucune âme ne servira à une autre, où aucune intercession ne sera acceptée ». D'autres l'affirment : les prophètes, les anges et les croyants intercéderont. Alors, existe-t-elle ou non ? Et si elle existe, pourquoi ne pas chercher des intercesseurs dès maintenant ?\n\nJe vais montrer, avec al-Tabarī et al-Qurtubī, que le Coran ne nie pas l'intercession : il nie l'intercession sans permission, celle que les idolâtres de La Mecque prêtaient à leurs idoles. L'intercession existe, mais elle a deux conditions : la permission de Dieu et Son agrément pour celui qui en bénéficie.\n\nJe m'appuie sur al-Tabarī, al-Qurtubī, Ibn ʿAtiyya et le Coran.",
["La contradiction apparente est réelle quand on lit les versets séparément.",
 "Elle se résout dès qu'on regarde à qui chaque verset s'adresse : les uns répondent aux idolâtres, les autres décrivent la miséricorde du Jour dernier."],
"Les idolâtres disaient : « **Nous ne les adorons que pour qu'ils nous rapprochent d'Allāh** » (39:3). Le Coran leur répond : « **Qui peut intercéder auprès de Lui sans Sa permission ?** » (2:255). L'intercession existe, mais elle n'est pas un pouvoir qu'on s'arroge : c'est **un honneur que Dieu accorde**, pour ceux qu'**Il agrée**.",
"Le cœur du raisonnement : une intercession accordée, non une intercession arrachée",
[{"type": "comparaison", "title": "Intercession niée et intercession affirmée", "columns": ["Niée", "Affirmée"], "rows": [
   {"criterion": "Qui l'exerce", "cells": ["Des idoles ou des êtres qu'on adore à côté de Dieu", "Ceux que Dieu honore : prophètes, anges, savants, croyants"]},
   {"criterion": "Comment", "cells": ["Par une pression sur Dieu, comme sur un roi", "Par Sa permission (2:255)"]},
   {"criterion": "Pour qui", "cells": ["Pour n'importe qui, même l'associateur", "Pour ceux qu'Il agrée (21:28)"]},
   {"criterion": "Attitude juste", "cells": ["Adorer l'intermédiaire", "Demander à Dieu de nous en faire bénéficier"]}
 ], "caption": "D'après al-Qurtubī, 3/273."}],
[("Al-Tabarī", "L'Āyat al-kursī est descendue contre ceux qui disaient « nous ne les adorons que pour qu'ils nous rapprochent »", "Al-Qurtubī, 3/273"),
 ("Al-Qurtubī (malikite)", "Dieu permet d'intercéder aux prophètes, savants, combattants et anges, pour ceux qu'Il agrée", "Al-Jāmiʿ, 3/273"),
 ("Ibn ʿAtiyya (malikite)", "Les savants et les gens de bien intercèdent pour ceux qui ont de bonnes œuvres", "Al-Qurtubī, 3/273"),
 ("Hadith d'al-Bukhārī", "« Seigneur, nos frères priaient et jeûnaient avec nous »", "Al-Qurtubī, 3/273")])

ADD["Le recours aux causes n'est pas une atteinte à l'unicité"] = sujet(
"On peut comprendre que cette question trouble certains croyants. Si c'est Dieu qui guérit, pourquoi prendre un médicament ? Si c'est Lui qui protège, pourquoi fermer sa porte à clé ? Le recours aux moyens ne serait-il pas un manque de confiance, voire une forme d'association ? À l'inverse, d'autres comptent tellement sur les moyens qu'ils oublient Dieu.\n\nJe vais montrer, avec l'épisode de ʿUmar devant la peste rapporté par Mālik, que prendre les moyens fait partie de la foi, et que le danger n'est pas dans le moyen, mais dans le cœur qui lui attribue un pouvoir propre. « Nous fuyons le décret d'Allāh vers le décret d'Allāh. »\n\nJe m'appuie sur le Muwatta, Ibn ʿAbd al-Barr, ʿUmar, Abū ʿUbayda et ʿAbd al-Rahmān ibn ʿAwf.",
["La question vient d'un souci sincère de pureté de la foi : on ne veut rien attribuer à un autre que Dieu.",
 "Mais elle aboutit, si on la pousse, à des absurdités : ne plus manger, ne plus se soigner, ne plus travailler, au nom de la confiance en Dieu."],
"ʿUmar répond à Abū ʿUbayda : « **Nous fuyons le décret d'Allāh vers le décret d'Allāh** ». Le danger et la fuite sont **tous deux** des décrets ; la raison choisit **le meilleur versant**, comme le berger choisit l'herbe fertile. Prendre les moyens n'est pas manquer de foi : **c'est la foi qui sait où elle met les pieds**.",
"Le cœur du raisonnement : le moyen est un décret, son effet appartient à Dieu",
[{"type": "comparaison", "title": "Trois attitudes envers les causes", "columns": ["Ce qu'elle fait", "Ce qui ne va pas"], "rows": [
   {"criterion": "Négliger les causes", "cells": ["« Dieu fera tout, je ne fais rien »", "Contredit ʿUmar, la Sunna et la raison"]},
   {"criterion": "Compter sur les causes seules", "cells": ["« C'est le médicament qui guérit »", "Attribue à la créature un pouvoir propre : un pas vers le shirk"]},
   {"criterion": "La voie de ʿUmar", "cells": ["Prendre la cause, attendre l'effet de Dieu", "Rien : c'est la confiance (tawakkul) véritable"]}
 ], "caption": "D'après al-Istidhkār, 8/250."}],
[("ʿUmar ibn al-Khattāb", "« Nous fuyons le décret d'Allāh vers le décret d'Allāh »", "Al-Istidhkār, 8/250"),
 ("ʿAbd al-Rahmān ibn ʿAwf (hadith)", "On n'entre pas dans une terre touchée par l'épidémie, on n'en sort pas pour la fuir", "Al-Istidhkār, 8/250"),
 ("Mālik (Muwatta)", "Rapporte l'épisode de Sargh", "Al-Istidhkār, 8/250"),
 ("Ibn ʿAbd al-Barr (malikite)", "Les amulettes sont réprouvées parce qu'on croyait qu'elles écartaient le mal, alors que seul Dieu l'écarte", "Al-Tamhīd, 11/11")])

ADD["Amulettes, superstitions et lecture des signes"] = sujet(
"On peut comprendre l'attrait des porte-bonheur. L'œil bleu, la main de Fatma, le bracelet protecteur, le numéro fétiche : ce sont souvent des objets offerts avec amour, portés par habitude, et qui semblent inoffensifs. Pourquoi l'islam y attache-t-il tant d'importance ? N'est-ce pas un peu excessif ?\n\nJe vais montrer, avec le hadith du Muwatta sur les colliers des chameaux et l'explication de Mālik lui-même, que la question n'est pas l'objet, mais la croyance : croire qu'une chose protège par elle-même revient à lui attribuer ce qui n'appartient qu'à Dieu. Et je montrerai la distinction très fine des savants malikites entre ce qu'on accroche avant le malheur et ce qu'on accroche après.\n\nJe m'appuie sur le Muwatta, Mālik, Ibn ʿAbd al-Barr, ʿĀʾisha et Ibn Masʿūd.",
["L'objection est sincère : la plupart des gens qui portent ces objets n'ont aucune intention d'adorer autre chose que Dieu.",
 "Mais il faut se demander : **pourquoi** les porte-t-on ? Si c'est par décoration, rien de grave. Si c'est parce qu'on croit qu'ils **protègent**, la question change de nature."],
"Le Prophète ﷺ a fait couper les colliers des chameaux **en pleine nuit**, et Mālik explique : « **c'était à cause du mauvais œil** ». Ibn ʿAbd al-Barr résume : ces objets étaient interdits parce qu'on croyait qu'ils écartaient le malheur, « **alors que seul Allāh l'écarte : c'est Lui qui guérit et qui éprouve** ».",
"Le cœur du raisonnement : ce n'est pas l'objet, c'est la croyance",
[{"type": "schema", "title": "La question à se poser devant un porte-bonheur", "arabic": "التمائم", "variant": "flow", "nodes": [
   {"label": "Est-ce que je crois qu'il me protège ?", "note": "Si non, c'est un simple objet."},
   {"label": "Si oui : à qui j'attribue la protection ?", "note": "À l'objet lui-même : c'est ce que le hadith visait."},
   {"label": "Que dit la tradition ?", "note": "« Seul Allāh écarte le mal : Il guérit et Il éprouve » (Ibn ʿAbd al-Barr)."},
   {"label": "Que faire ?", "note": "Couper le collier, et remettre sa protection à Dieu."}
 ], "caption": "D'après al-Tamhīd, 11/8 à 11."}],
[("Le hadith du Muwatta (Abū Bashīr)", "« Qu'il ne reste au cou d'aucun chameau un collier sans qu'il soit coupé »", "Al-Tamhīd, 11/8"),
 ("Mālik ibn Anas", "« Je pense que c'était à cause du mauvais œil » ; il tolérait les écrits des noms de Dieu pour les malades, pas pour repousser l'œil", "Al-Tamhīd, 11/8 à 9"),
 ("Ibn ʿAbd al-Barr (malikite)", "Réprouvé avant le malheur, toléré après, comme la roqya", "Al-Tamhīd, 11/8 à 12"),
 ("ʿĀʾisha", "Réprouvait les bracelets de fer contre le mauvais œil ; « ce qu'on accroche après le malheur n'est pas une amulette »", "Al-Tamhīd, 11/11 à 12"),
 ("Ibn Masʿūd", "Les incantations non conformes, les amulettes et les philtres relèvent du shirk", "Al-Tamhīd, 11/12"),
 ("Rabīʿa", "Faire porter une perle à une femme pour qu'elle conçoive est « une opinion mauvaise et détestable »", "Al-Tamhīd, 11/11")])

ADD["Le concept même de culte : ce que « ʿibāda » recouvre"] = sujet(
"On peut comprendre qu'on réduise l'adoration aux rites : la prière, le jeûne, le pèlerinage. C'est ce qu'on voit, ce qu'on apprend en premier. Mais alors, que faire du reste de la vie, le travail, la famille, le repos ? Est-ce du temps perdu pour Dieu ? Et à l'inverse, si tout est adoration, le mot ne perd-il pas son sens ?\n\nJe vais montrer, avec la définition d'Ibn ʿĀshūr, que l'adoration repose sur deux piliers, un geste de soumission et une conviction intérieure, et que cette définition permet à la fois de comprendre pourquoi le respect n'est pas de l'adoration, et comment un acte ordinaire peut en devenir une.\n\nJe m'appuie sur Ibn ʿĀshūr, le hadith de Gabriel et le Coran.",
["La réduction aux rites est compréhensible : ce sont les actes les plus visibles et les mieux définis.",
 "Mais elle crée une coupure entre « la vie religieuse » et « la vraie vie », et beaucoup en souffrent sans savoir comment la réparer."],
"Ibn ʿĀshūr définit l'adoration comme « **la manifestation de la soumission envers l'adoré, avec la conviction qu'il détient le bien et le mal de l'adorateur** ». Les rites en sont les formes les plus pures ; mais tout acte accompli **en se soumettant à ce que Dieu permet ou ordonne**, et **en sachant que le résultat est entre Ses mains**, entre dans cette définition.",
"Le cœur du raisonnement : deux piliers, et toute la vie peut s'y appuyer",
[{"type": "comparaison", "title": "Respect, adoration, vie ordinaire", "columns": ["Ce qu'il y a dans le cœur", "Est-ce de l'adoration ?"], "rows": [
   {"criterion": "Respecter ses parents ou un savant", "cells": ["De l'estime, sans croire qu'ils détiennent mon destin", "Non, c'est un devoir moral (et un acte d'obéissance à Dieu)"]},
   {"criterion": "Craindre un objet ou une date", "cells": ["La croyance qu'il agit sur mon destin", "C'est un glissement vers le shirk"]},
   {"criterion": "Travailler, manger, dormir", "cells": ["Si je le fais en me soumettant à ce que Dieu permet, en remettant le résultat à Lui", "Oui, cela entre dans la finalité de ma création"]}
 ], "caption": "D'après Ibn ʿĀshūr, al-Tahrīr, 27/26 à 27."}],
[("Ibn ʿĀshūr (malikite)", "L'adoration : manifester la soumission, avec la conviction que l'adoré détient notre bien et notre mal", "Al-Tahrīr, 27/26"),
 ("Ibn ʿĀshūr", "Au sens de la Sunna, l'adoration englobe l'obéissance à toutes les prescriptions, « que tu adores Allāh comme si tu Le voyais »", "Al-Tahrīr, 27/27"),
 ("Ibn ʿĀshūr", "Les prescriptions visent le bien des hommes, ici-bas et dans l'au-delà", "Al-Tahrīr, 27/27"),
 ("Mujāhid et Zayd ibn Aslam", "« Pour qu'ils M'adorent » : pour que Je leur ordonne et leur interdise", "Al-Tahrīr, 27/27")])
