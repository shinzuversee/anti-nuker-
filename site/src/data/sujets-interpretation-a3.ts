import { slugifySujet, type Sujet } from "./sujet-core";

/** Suite du groupe « Ce qu'est l'interprétation, et ce qu'elle n'est pas ». */
export const sujetsInterpretationA3: Sujet[] = [
  {
    slug: slugifySujet("Tafsīr et taʾwīl : deux mots, deux prétentions différentes"),
    title: "Tafsīr et taʾwīl : deux mots, deux prétentions différentes",
    arabic: "التفسير والتأويل",
    intro:
      "Les deux mots sont souvent employés l'un pour l'autre, et l'usage ancien les confondait volontiers. Pourtant, à mesure que les disciplines se sont formées, une distinction s'est imposée — et elle porte moins sur la technique que sur la **prétention** de celui qui parle.",
    body: [
      { type: "h2", text: "Deux racines, deux gestes" },
      {
        type: "lexique",
        root: "ف س ر",
        transliteration: "f-s-r",
        sense: "Découvrir, dévoiler ce qui est couvert",
        derives: [
          { word: "tafsīr", arabic: "تفسير", gloss: "expliciter le sens d'un énoncé" },
          { word: "tafsira", arabic: "تفسرة", gloss: "l'échantillon que le médecin examine pour connaître un mal" },
          { word: "safara", arabic: "سفر", gloss: "métathèse de la même idée : découvrir, comme un visage se dévoile" },
        ],
        note: "La racine dit le dévoilement d'un donné existant, non la production d'un sens nouveau.",
      },
      {
        type: "p",
        text: "**Taʾwīl**, de la racine ʾ-w-l, dit le retour d'une chose vers son terme. D'où deux emplois : l'explication qui ramène l'énoncé à son intention, et la réalité vers laquelle l'énoncé pointe et qui n'apparaîtra qu'au moment voulu.",
      },
      {
        type: "comparaison",
        title: "Ce que chaque mot engage",
        columns: ["Tafsīr", "Taʾwīl (sens tardif)"],
        rows: [
          { criterion: "Objet", cells: ["Le sens de l'énoncé", "La réalité désignée, ou un sens second"] },
          { criterion: "Fondement exigé", cells: ["Transmission, langue, contexte", "Indice contraignant tiré du texte"] },
          { criterion: "Risque", cells: ["Erreur d'information", "Projection d'une doctrine sur le texte"] },
          { criterion: "Statut de celui qui parle", cells: ["Rapporteur d'un sens", "Prétendant à une intention"] },
        ],
      },
      { type: "h2", text: "Le verset qui a nourri le débat" },
      {
        type: "verse",
        arabic:
          "وَمَا يَعْلَمُ **تَأْوِيلَهُۥٓ** إِلَّا ٱللَّهُ ۗ وَٱلرَّٰسِخُونَ فِى ٱلْعِلْمِ يَقُولُونَ ءَامَنَّا بِهِۦ",
        translation:
          "Or nul n'en connaît **le taʾwīl** à part Allāh. Et ceux qui sont enracinés dans la science disent : « Nous y croyons. »",
        reference: "Coran, Āl ʿImrān, 3:7",
      },
      {
        type: "p",
        text: "Toute la question tient à un arrêt de lecture : s'arrête-t-on à « Allāh », ou continue-t-on « et ceux qui sont enracinés » ? Ibn Taymiyya montre que les deux lectures sont vraies selon le sens donné à taʾwīl : la **réalité** des choses annoncées n'est connue que de Dieu ; leur **explication** est accessible aux savants.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La clé de la difficulté",
        text: "Un même mot pris en deux sens produit deux lectures apparemment contradictoires. Précise le sens, et la contradiction disparaît sans qu'aucun avis n'ait besoin d'être rejeté.",
      },
      {
        type: "objection",
        objection: "Alors la distinction n'est qu'une affaire de vocabulaire, sans conséquence.",
        reponse:
          "Elle a une conséquence directe : elle détermine ce que tu as le droit d'affirmer. Dire « ce verset signifie » engage une transmission ou une évidence de langue ; dire « ce verset vise en réalité » engage une prétention à l'intention divine. La seconde exige infiniment plus, et elle est la source de la plupart des dérives interprétatives.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le partage n'est pas scolaire : il mesure la modestie du commentateur. Le tafsīr dévoile ce qui est là ; le taʾwīl, mal conduit, ajoute ce qu'on voulait y trouver. Savoir dans lequel des deux on se tient est le premier acte de méthode.",
      },
    ],
  },
  {
    slug: slugifySujet("La différence entre expliquer un verset et appliquer un verset"),
    title: "La différence entre expliquer un verset et appliquer un verset",
    intro:
      "Un même verset peut être correctement expliqué et abusivement appliqué. C'est l'une des confusions les plus fréquentes du discours religieux contemporain : on cite juste, et on conclut faux. Distinguer les deux opérations protège autant le texte que ceux à qui on l'oppose.",
    body: [
      { type: "h2", text: "Deux opérations distinctes" },
      {
        type: "schema",
        title: "Du texte à la situation",
        variant: "flow",
        nodes: [
          { label: "Énoncé", note: "Ce que le verset dit, en arabe, dans son contexte." },
          { label: "Sens établi", arabic: "المعنى", note: "Le tafsīr : ce que l'énoncé signifie." },
          { label: "Règle dégagée", arabic: "الحكم", note: "Ce que l'énoncé exige, en général." },
          { label: "Cas particulier", arabic: "التنزيل", note: "Cette personne, ici, maintenant — l'étape la plus risquée." },
        ],
        caption: "Chaque flèche exige une compétence différente ; se tromper d'étape est une erreur de méthode, pas d'opinion.",
      },
      {
        type: "p",
        text: "Les uṣūlistes appellent la dernière étape **tanzīl al-ḥukm** : faire descendre la règle sur un cas. C'est là qu'interviennent les conditions, les empêchements, l'ignorance excusable, la contrainte, la capacité — autant de facteurs absents du travail sur le sens.",
      },
      { type: "h2", text: "Un exemple classique" },
      {
        type: "verse",
        arabic: "**وَمَن لَّمْ يَحْكُم بِمَآ أَنزَلَ ٱللَّهُ فَأُو۟لَٰٓئِكَ هُمُ ٱلْكَٰفِرُونَ**",
        translation:
          "**Et ceux qui ne jugent pas d'après ce qu'Allāh a fait descendre, ceux-là sont les mécréants.**",
        reference: "Coran, al-Māʾida, 5:44",
      },
      {
        type: "quote",
        text: "قال ابن عباس رضي الله عنهما: **ليس بالكفر الذي تذهبون إليه**، **كفر دون كفر**.\n\nIbn ʿAbbās, qu'Allāh les agrée, a dit : **« Ce n'est pas la mécréance vers laquelle vous allez ; c'est une mécréance moindre que la mécréance. »**",
        source: "Rapporté par al-Ḥākim et al-Ṭabarī",
      },
      {
        type: "p",
        text: "Le sens du verset n'est pas discuté : il est sévère et il est clair. Ce qui est discuté, c'est **l'application** à tel individu, dans telle situation, avec telles croyances. Un Compagnon met lui-même en garde contre le raccourci.",
      },
      {
        type: "balance",
        title: "Ce que chaque opération exige",
        affirmLabel: "Expliquer",
        denyLabel: "Appliquer",
        affirm: [
          "Connaître la langue et le contexte de descente.",
          "Rassembler les versets parallèles.",
          "Consulter la transmission des premiers exégètes.",
        ],
        deny: [
          "Tout ce qui précède, plus :",
          "Établir les faits du cas avec certitude.",
          "Vérifier les conditions réalisées et les empêchements écartés.",
          "Disposer de l'autorité légitime quand la règle est judiciaire.",
        ],
        caption: "L'explication est un travail de savoir ; l'application est un travail de savoir et de responsabilité.",
      },
      {
        type: "experiment",
        title: "L'expérience du code de la route",
        steps: [
          "Un article dit : franchir la ligne continue est sanctionné.",
          "Le sens est limpide, personne n'en débat.",
          "Une ambulance franchit la ligne pour sauver un blessé.",
          "Le texte n'a pas changé ; son application à ce cas, oui.",
        ],
        conclusion:
          "Une règle claire n'implique pas un verdict automatique. C'est vrai des lois humaines, à plus forte raison des textes révélés dont la sévérité engage l'au-delà.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le symptôme",
        text: "Quand un discours passe du verset au jugement sur des personnes en une seule phrase, une étape entière a été sautée — et c'est toujours la plus exigeante.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Expliquer relève de la science ; appliquer relève de la science et de la crainte de Dieu. Confondre les deux ne rend pas plus fidèle au texte : cela transforme un enseignement en arme, et un lecteur en juge de ce qu'il n'a pas examiné.",
      },
    ],
  },
  {
    slug: slugifySujet("L'exégèse par l'opinion : blâmée en un sens, requise en un autre"),
    title: "L'exégèse par l'opinion : blâmée en un sens, requise en un autre",
    arabic: "التفسير بالرأي",
    intro:
      "Un hadith sévère annonce le Feu à qui interprète le Coran par son opinion. Pourtant les plus grands exégètes ont raisonné, comparé, tranché — ce qui est bien une forme d'opinion. La contradiction n'est qu'apparente : elle disparaît dès qu'on distingue l'opinion **arbitraire** de l'opinion **outillée**.",
    body: [
      { type: "h2", text: "L'avertissement" },
      {
        type: "quote",
        text: "**من قال في القرآن برأيه فليتبوّأ مقعده من النار.**\n\n**Quiconque parle du Coran selon sa propre opinion, qu'il prépare son siège dans le Feu.**",
        source: "Rapporté par al-Tirmidhī, d'après Ibn ʿAbbās",
      },
      {
        type: "p",
        text: "Al-Ṭabarī, qui rapporte ce genre de mises en garde, écrit lui-même des milliers de pages où il pèse les avis et en préfère un. S'il avait compris le hadith comme une interdiction de raisonner, son livre n'existerait pas.",
      },
      { type: "h2", text: "Deux opinions qui ne se ressemblent pas" },
      {
        type: "comparaison",
        title: "Raʾy blâmé et raʾy recevable",
        columns: ["Opinion blâmée", "Opinion recevable"],
        rows: [
          { criterion: "Point de départ", cells: ["Une conviction préalable à imposer au texte", "Le texte, sa langue, ses parallèles"] },
          { criterion: "Outillage", cells: ["Aucun, ou lacunaire", "Langue, asbāb, transmission, uṣūl"] },
          { criterion: "Attitude devant l'inconnu", cells: ["Comble le vide", "Suspend son jugement"] },
          { criterion: "Rapport aux anciens", cells: ["Les ignore ou les contredit sans raison", "Ne sort pas de l'éventail de leurs avis sans argument"] },
        ],
      },
      {
        type: "degres",
        title: "Les conditions cumulatives",
        arabic: "شروط المفسر",
        degres: [
          { label: "La langue", note: "Lexique, grammaire, rhétorique : sans quoi on lit une traduction, pas un texte." },
          { label: "Le Coran par le Coran", note: "Rassembler les versets d'un même sujet avant de conclure." },
          { label: "La Sunna et les salaf", note: "Ce que le Prophète ﷺ et les Compagnons ont dit du passage." },
          { label: "Les principes", note: "Général et particulier, absolu et conditionné, explicite et implicite." },
          { label: "La droiture", note: "Ibn Taymiyya : l'innovation dans le cœur déforme la lecture avant l'argument." },
        ],
        direction: "asc",
      },
      {
        type: "verse",
        arabic: "**أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ** أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ",
        translation:
          "**Ne méditent-ils donc pas le Coran ?** Ou bien y a-t-il des verrous sur leurs cœurs ?",
        reference: "Coran, Muḥammad, 47:24",
      },
      {
        type: "p",
        text: "Le Coran ordonne la méditation à tous. L'interdiction du hadith ne peut donc pas viser la réflexion elle-même : elle vise la **parole publique** sur le sens de Dieu sans en avoir les moyens.",
      },
      {
        type: "objection",
        objection: "Le croyant ordinaire n'a donc pas le droit de comprendre ce qu'il lit ?",
        reponse:
          "Il en a le droit et le devoir : méditer, tirer profit, être remué. Ce qui lui est interdit, c'est de transformer son impression en affirmation doctrinale : « ce verset veut dire », prononcé devant d'autres, engage la parole de Dieu. Entre tirer profit et enseigner, il y a la distance qui sépare boire d'une source et prétendre en dresser la carte.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Le test de l'ordre",
        text: "Demande-toi ce qui est venu en premier : ta conclusion, ou ta lecture ? Si la conclusion précédait, tu n'as pas interprété le texte, tu l'as convoqué.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le raisonnement n'est pas l'ennemi du tafsīr : il en est l'instrument, à condition d'être soumis au texte plutôt que de s'en servir. L'exégèse blâmée n'est pas celle qui pense trop, c'est celle qui écoute trop peu.",
      },
    ],
  },
];
