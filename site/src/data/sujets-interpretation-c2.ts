import { slugifySujet, type Sujet } from "./sujet-core";

/** Suite du groupe « Les sources et leur poids ». */
export const sujetsInterpretationC2: Sujet[] = [
  {
    slug: slugifySujet("Al-Rāzī, al-Zamakhsharī, Ibn ʿĀshūr : trois tempéraments"),
    title: "Al-Rāzī, al-Zamakhsharī, Ibn ʿĀshūr : trois tempéraments",
    intro:
      "Lire un tafsīr sans connaître son auteur, c'est écouter un plaidoyer en croyant entendre un rapport. Ces trois commentaires comptent parmi les plus influents, et chacun impose au texte une pente reconnaissable. Savoir laquelle ne dispense pas de les lire : cela permet de les lire utilement.",
    body: [
      { type: "h2", text: "Trois projets distincts" },
      {
        type: "comparaison",
        title: "Ce que chacun cherche dans le verset",
        columns: ["al-Zamakhsharī", "al-Rāzī", "Ibn ʿĀshūr"],
        rows: [
          {
            criterion: "Œuvre",
            cells: ["al-Kashshāf (m. 538 H)", "Mafātīḥ al-ghayb (m. 606 H)", "al-Taḥrīr wa-l-tanwīr (m. 1393 H)"],
          },
          {
            criterion: "Force principale",
            cells: ["Rhétorique arabe, finesse d'analyse du style", "Ampleur des questions soulevées, rigueur d'argumentation", "Cohérence des sourates, langue, contexte historique"],
          },
          {
            criterion: "Pente à connaître",
            cells: ["Théologie muʿtazilite insérée dans l'analyse", "Longues digressions philosophiques et kalām", "Lectures modernisantes ponctuelles"],
          },
          {
            criterion: "Usage recommandé",
            cells: ["Pour la balāgha, avec vigilance doctrinale", "Pour l'inventaire des objections et des réponses", "Pour la structure et la langue"],
          },
        ],
      },
      { type: "h2", text: "Al-Zamakhsharī : la langue au service d'une thèse" },
      {
        type: "p",
        text: "Son analyse du style arabe reste inégalée : peu d'auteurs sentent aussi bien pourquoi un mot est placé avant un autre. Mais son muʿtazilisme intervient précisément là où la doctrine est en jeu — sur la vision de Dieu, sur les attributs, sur le décret. Les savants postérieurs, y compris ceux qui le combattaient, l'ont lu pour la rhétorique en signalant les passages doctrinaux.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "La règle de lecture des anciens",
        text: "On tire profit d'un savant sur ce qu'il maîtrise, sans lui emprunter ce qu'il défend. Cette distinction, appliquée depuis des siècles, évite à la fois l'imitation aveugle et le rejet en bloc.",
      },
      { type: "h2", text: "Al-Rāzī : l'inventaire des difficultés" },
      {
        type: "p",
        text: "On a dit de son commentaire qu'« il contient tout sauf le tafsīr » — formule injuste mais révélatrice. Sa force est ailleurs : nul n'expose mieux les objections possibles à un verset, y compris celles qu'un lecteur n'aurait pas formulées. C'est un ouvrage de questions, à lire avec un ouvrage de transmission à côté.",
      },
      {
        type: "objection",
        objection: "Pourquoi lire des auteurs dont la doctrine est critiquable ?",
        reponse:
          "Parce que la critique suppose la connaissance, et parce que ces ouvrages contiennent un savoir de langue et d'argumentation qu'on ne trouve pas ailleurs. Les imams qui les ont réfutés les avaient d'abord lus attentivement. Le danger n'est pas la lecture : c'est la lecture non préparée, sans base doctrinale établie.",
      },
      { type: "h2", text: "Ibn ʿĀshūr : la sourate comme unité" },
      {
        type: "p",
        text: "Son apport majeur est l'attention à la **cohérence d'ensemble** : chaque sourate est introduite par ses objectifs, et les transitions entre passages sont justifiées. Pour qui veut sortir de la lecture verset par verset, c'est l'outil le plus utile de la période récente.",
      },
      {
        type: "verse",
        arabic: "**كِتَٰبٌ أَنزَلْنَٰهُ إِلَيْكَ مُبَٰرَكٌ لِّيَدَّبَّرُوٓا۟ ءَايَٰتِهِۦ**",
        translation:
          "**Un Livre béni que Nous avons fait descendre vers toi, afin qu'ils en méditent les versets.**",
        reference: "Coran, Ṣād, 38:29",
      },
      {
        type: "degres",
        title: "Un ordre de lecture raisonnable",
        degres: [
          { label: "Fondations", note: "Un tafsīr de transmission : al-Ṭabarī, Ibn Kathīr." },
          { label: "Langue", note: "al-Kashshāf pour la rhétorique, avec accompagnement." },
          { label: "Questions", note: "al-Rāzī pour l'éventail des objections." },
          { label: "Structure", note: "Ibn ʿĀshūr pour la logique d'ensemble des sourates." },
        ],
        direction: "asc",
        caption: "L'ordre compte plus que la liste : commencer par les commentaires spéculatifs déforme durablement la lecture.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Aucun de ces livres n'est neutre, et aucun n'est inutile. Les lire, c'est apprendre à distinguer dans une même page ce qui vient du verset et ce qui vient de son commentateur — exercice qui, à lui seul, forme un lecteur.",
      },
    ],
  },
  {
    slug: slugifySujet("Commencer le tafsīr : une bibliographie"),
    title: "Commencer le tafsīr : une bibliographie",
    intro:
      "La question revient sans cesse : par quoi commencer ? La mauvaise réponse consiste à donner une liste de vingt titres. La bonne consiste à indiquer un chemin court, ordonné, réellement praticable — et à dire franchement ce qui ne doit pas être abordé en premier.",
    body: [
      { type: "h2", text: "Avant tout livre : trois préalables" },
      {
        type: "list",
        items: [
          "Une lecture régulière du Coran lui-même, avec traduction, en notant les questions plutôt qu'en les résolvant.",
          "Un socle de langue : même modeste, il change tout le rapport au texte.",
          "Une croyance établie sur les bases : sans cela, les commentaires spéculatifs déstabilisent au lieu d'instruire.",
        ],
      },
      {
        type: "chronologie",
        title: "Un parcours en quatre étapes",
        events: [
          {
            date: "Étape 1",
            label: "Un tafsīr bref et sûr",
            note: "al-Tafsīr al-muyassar, ou al-Saʿdī (Taysīr al-karīm al-Raḥmān) : clair, spirituellement nourrissant, sans digressions.",
          },
          {
            date: "Étape 2",
            label: "Un tafsīr de transmission",
            note: "Ibn Kathīr : verset par verset, appuyé sur le Coran, la Sunna et les salaf. À lire par portions, sur la durée.",
          },
          {
            date: "Étape 3",
            label: "Les principes de la discipline",
            note: "Une introduction aux uṣūl al-tafsīr — la Muqaddima d'Ibn Taymiyya en est le texte fondateur, court et dense.",
          },
          {
            date: "Étape 4",
            label: "Les grands ouvrages",
            note: "al-Ṭabarī pour la transmission et le débat, al-Shinqīṭī pour le Coran par le Coran, al-Qurṭubī pour les implications juridiques.",
          },
        ],
        caption: "Le passage à l'étape suivante suppose d'avoir terminé la précédente, pas de l'avoir survolée.",
      },
      { type: "h2", text: "Ce qu'il vaut mieux différer" },
      {
        type: "balance",
        title: "Commencer par là, pas par ici",
        affirmLabel: "Pour commencer",
        denyLabel: "À différer",
        affirm: [
          "Un commentaire concis lu intégralement.",
          "Une sourate travaillée à fond plutôt que trente parcourues.",
          "La prise de notes des questions restées ouvertes.",
        ],
        deny: [
          "Les commentaires de kalām et de philosophie.",
          "Les tafsīr par indication spirituelle, avant la maîtrise du sens apparent.",
          "Les compilations d'israʾīliyyāt sans appareil critique.",
          "Les vidéos qui traitent un verset isolé sans jamais son contexte.",
        ],
      },
      {
        type: "verse",
        arabic: "**وَقُل رَّبِّ زِدْنِى عِلْمًا**",
        translation: "**Et dis : Seigneur, accrois ma science.**",
        reference: "Coran, Ṭāhā, 20:114",
      },
      {
        type: "experiment",
        title: "L'expérience du carnet",
        steps: [
          "Choisis une sourate courte que tu récites souvent.",
          "Écris, sans aucun livre, ce que tu crois qu'elle dit.",
          "Lis ensuite un tafsīr bref, et note les écarts.",
          "Recommence six mois plus tard sur la même sourate.",
        ],
        conclusion:
          "L'écart mesuré entre les deux carnets est la seule évaluation honnête de la progression — bien plus fiable que le nombre de pages lues.",
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Le piège de l'accumulation",
        text: "Posséder les ouvrages n'est pas les avoir lus, et les avoir lus n'est pas les avoir étudiés. Un seul commentaire achevé vaut mieux que dix commencés.",
      },
      {
        type: "quote",
        text: "**من لم يتقن الأصول حُرم الوصول.**\n\n**Celui qui ne maîtrise pas les fondements est privé d'arriver.**",
        source: "Adage des gens de science",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le tafsīr ne s'aborde pas comme une bibliothèque à conquérir, mais comme une discipline à installer : peu de livres, dans le bon ordre, lus jusqu'au bout, avec un maître si possible. Le reste vient naturellement, et beaucoup plus vite qu'on ne le croit.",
      },
    ],
  },
];
