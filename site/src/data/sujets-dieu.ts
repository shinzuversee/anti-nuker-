import { slugifySujet, type Sujet } from "./sujet-core";

/**
 * Chapitre I — « Connaissez-vous Dieu ? »
 * Groupe a — Généralités au sujet de Dieu.
 * Chaque sujet suit le même format : introduction, sections, versets,
 * schéma, expérience de pensée, extrait de tafsīr (arabe + traduction),
 * conclusion. L'espace audio est ajouté automatiquement en bas de page.
 */
export const sujetsDieuGeneralites: Sujet[] = [
  {
    slug: slugifySujet("Si la foi est rationnelle, pourquoi tant de savants n'y adhèrent-ils pas ?"),
    title: "Si la foi est rationnelle, pourquoi tant de savants n'y adhèrent-ils pas ?",
    arabic: "العقل والإيمان",
    intro:
      "C’est une objection que l’on entend partout : « Si croire était vraiment raisonnable, les plus intelligents croiraient. » L’argument paraît solide, il est en réalité fragile — non parce que la science serait suspecte, mais parce qu’il confond deux choses très différentes : la compétence dans un domaine, et la disposition du cœur devant une vérité qui engage toute la vie.\n\nCe sujet examine l’objection avec sérieux, en distinguant ce que la raison peut établir, ce qu’elle ne peut pas trancher seule, et ce qui, dans l’homme, résiste à ce qu’il a pourtant compris.",
    body: [
      { type: "h2", text: "Poser correctement la question" },
      {
        type: "p",
        text: "L’objection suppose que la foi serait la conclusion d’un calcul : celui qui calcule le mieux devrait donc y arriver le premier. Mais la foi, dans le Coran, n’est jamais présentée comme le résultat d’une seule opération intellectuelle. Elle est présentée comme une **reconnaissance** : reconnaître, c’est voir un signe et accepter d’en tirer les conséquences.",
      },
      {
        type: "p",
        text: "Or accepter les conséquences n’est pas un acte de l’intelligence seule. Un médecin sait mieux que quiconque ce que le tabac fait aux poumons ; cela ne l’empêche pas de fumer. **La distance entre savoir et adhérer n’est pas une distance de compétence, c’est une distance de volonté.**",
      },
      {
        type: "verse",
        arabic:
          "وَجَحَدُوا۟ بِهَا وَٱسْتَيْقَنَتْهَآ **أَنفُسُهُمْ** ظُلْمًا وَعُلُوًّا",
        translation:
          "Ils les ont niés injustement et par orgueil, alors que **leurs âmes en étaient convaincues**.",
        reference: "Coran, al-Naml, 27:14",
      },
      {
        type: "p",
        text: "Le verset décrit exactement le phénomène : une certitude intérieure, et un refus extérieur. Le Coran n’attribue pas ce refus à un manque d’information, mais à deux causes nommées : l’injustice (ẓulm) et l’élévation de soi (ʿuluww).",
      },
      { type: "h2", text: "Ce que la raison établit, ce qu’elle ne tranche pas" },
      {
        type: "list",
        items: [
          "**Ce que la raison atteint** : que le monde n’a pas en lui-même la raison de son existence, qu’un ordre suppose une mise en ordre, que l’infini régressif de causes ne se suffit pas.",
          "**Ce qu’elle ne tranche pas seule** : la nature des attributs divins, le contenu de la Loi, le détail de l’au-delà. Ceci relève de la Révélation, non de la déduction.",
          "**Ce qu’elle ne fait jamais** : contraindre au consentement. On peut comprendre un argument et refuser de s’y soumettre.",
        ],
      },
      {
        type: "schema",
        title: "Du signe à l’adhésion",
        arabic: "من الآية إلى الإيمان",
        variant: "flow",
        nodes: [
          { label: "Le signe", arabic: "الآية", note: "L’ordre du monde, la contingence des choses, la parole révélée." },
          { label: "La perception", note: "L’intelligence saisit le signe et en reconnaît la portée." },
          { label: "Le consentement", arabic: "التصديق", note: "L’acte libre par lequel on accepte ce que l’on a compris." },
          { label: "La foi vécue", arabic: "الإيمان", note: "La reconnaissance devient orientation de la vie entière." },
        ],
        caption:
          "L’objection « les savants ne croient pas » suppose que la chaîne s’arrête à la deuxième étape. Or c’est à la troisième que tout se joue.",
      },
      { type: "h2", text: "La compétence est locale, la question est totale" },
      {
        type: "p",
        text: "Un spécialiste des particules est compétent sur les particules. Sa compétence ne s’étend pas d’elle-même à la question de savoir pourquoi il y a quelque chose plutôt que rien. **Le télescope voit loin, il ne voit pas d’où vient le regard.** Confondre l’autorité d’un savant dans son champ avec son autorité hors de ce champ est une erreur de méthode que la science elle-même réprouve.",
      },
      {
        type: "p",
        text: "Il faut ajouter un fait rarement rappelé : parmi les hommes de science, croyants et non-croyants coexistent, hier comme aujourd’hui. Si la compétence scientifique décidait de la question, ce partage n’existerait pas.",
      },
      {
        type: "experiment",
        title: "La lettre dans le désert",
        steps: [
          "Tu traverses un désert vide et tu trouves, posée sur une pierre, une lettre écrite dans ta langue, qui te nomme et décrit ton itinéraire.",
          "Un compagnon linguiste t’explique en détail la grammaire, l’encre, le papier, la datation. Son analyse est irréprochable.",
          "Puis il conclut : « **Rien ici n’indique un auteur.** Le vent a pu disposer l’encre ainsi. »",
          "Sa compétence n’est pas en cause : il connaît la lettre mieux que toi. Ce qui est en cause, c’est son refus de franchir un pas que rien, dans son savoir, n’interdit.",
        ],
        conclusion:
          "L’expertise éclaire la matière du signe ; **elle ne remplace pas la décision d’en reconnaître l’auteur**. Voilà pourquoi la foi n’est ni contraire à la raison, ni produite mécaniquement par elle.",
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "وقوله: **﴿وَجَحَدُوا بِهَا وَاسْتَيْقَنَتْهَا أَنْفُسُهُمْ﴾** يقول تعالى ذكره: وجحد فرعون وقومه بآيات الله التي أتاهم بها موسى، **وقد أيقنت أنفسهم أنها من عند الله**، وأنها حقّ، ولكنهم جحدوا بها ظلمًا منهم لأنفسهم وعلوًّا واستكبارًا عن الإقرار بها.\n\nSa parole : **« Ils les ont niés alors que leurs âmes en étaient convaincues »** — le Très-Haut veut dire : Pharaon et son peuple ont nié les signes d’Allāh que Moïse leur avait apportés, **alors que leurs âmes étaient certaines qu’ils venaient d’Allāh** et qu’ils étaient la vérité ; mais ils les ont niés par injustice envers eux-mêmes, par élévation et par orgueil, refusant de les reconnaître.",
        source: "Tafsīr al-Ṭabarī, sourate al-Naml, 27:14",
      },
      {
        type: "p",
        text: "Al-Ṭabarī ne dit pas que Pharaon manquait d’arguments : il dit qu’il en avait trop. La reconnaissance aurait coûté un trône. **Le prix du consentement, et non le manque de preuve, explique souvent le refus.**",
      },
      { type: "h2", text: "Conséquences pratiques" },
      {
        type: "list",
        items: [
          "Ne jamais argumenter par le nombre : ni « la majorité croit », ni « les savants ne croient pas » ne sont des preuves.",
          "Distinguer, chez l’interlocuteur, l’objection intellectuelle réelle de l’obstacle moral ou affectif : elles ne se traitent pas de la même façon.",
          "Travailler sa propre sincérité avant de travailler ses arguments : **l’orgueil se réfute mal par la logique**.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La foi est rationnelle en ce sens qu’elle ne demande jamais de croire l’absurde et qu’elle s’appuie sur des signes accessibles à tous. Mais elle n’est pas automatique, parce qu’elle engage. **Le doute est parfois une question ; il est parfois un refuge.** Discerner l’un de l’autre, chez soi d’abord, est le début de la lucidité.",
      },
      {
        type: "verse",
        arabic:
          "سَأَصْرِفُ عَنْ ءَايَٰتِىَ ٱلَّذِينَ **يَتَكَبَّرُونَ فِى ٱلْأَرْضِ بِغَيْرِ ٱلْحَقِّ**",
        translation:
          "Je détournerai de Mes signes ceux qui, **sur terre, s’enflent d’orgueil sans droit**.",
        reference: "Coran, al-Aʿrāf, 7:146",
      },
    ],
  },

  {
    slug: slugifySujet("Dieu regarde-t-Il l'homme, si petit dans l'immensité du cosmos ?"),
    title: "Dieu regarde-t-Il l'homme, si petit dans l'immensité du cosmos ?",
    arabic: "عناية الله بالإنسان",
    intro:
      "Depuis que l’on sait la Terre minuscule dans une galaxie parmi des milliards, une objection revient : comment prétendre que le Créateur de cette immensité s’occuperait d’un individu ? L’argument tire sa force d’une intuition — ce qui est grand compte, ce qui est petit ne compte pas.\n\nMais cette intuition est humaine, non divine. Elle vaut pour un être limité, dont l’attention est une ressource rare. Ce sujet montre pourquoi elle ne s’applique pas à Celui dont la science et la puissance ne se divisent pas.",
    body: [
      { type: "h2", text: "L’objection en toute honnêteté" },
      {
        type: "p",
        text: "Formulons-la au plus fort : l’univers observable contient des milliards de galaxies ; l’humanité occupe une poussière ; la vie d’un homme dure un instant. Croire que le Maître d’un tel ensemble entend une prière murmurée dans une chambre paraît disproportionné.",
      },
      {
        type: "p",
        text: "L’objection suppose une prémisse cachée : **l’attention se partage**. Un roi qui gouverne un empire ne peut pas connaître chaque sujet ; plus le domaine grandit, plus l’individu se dilue. C’est vrai — pour un roi.",
      },
      { type: "h2", text: "Une science qui ne se divise pas" },
      {
        type: "p",
        text: "La science divine n’est pas une somme d’informations stockées, qu’il faudrait parcourir. Elle est un attribut unique, sans succession ni effort. **Connaître une galaxie ne Lui coûte pas davantage que connaître un grain de poussière ; connaître un homme ne Lui en coûte pas moins.** La comparaison avec l’attention humaine s’effondre dès qu’on cesse de Le penser comme une créature très grande.",
      },
      {
        type: "verse",
        arabic:
          "وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِى ٱلْبَرِّ وَٱلْبَحْرِ ۚ **وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا**",
        translation:
          "Il détient les clés de l’invisible, nul autre que Lui ne les connaît. Il sait ce qui est sur la terre ferme et dans la mer. **Pas une feuille ne tombe sans qu’Il ne le sache.**",
        reference: "Coran, al-Anʿām, 6:59",
      },
      {
        type: "p",
        text: "Le verset choisit délibérément l’exemple le plus insignifiant : une feuille. Non pas les astres, non pas les empires — une feuille qui tombe, que personne ne regarde. **Le Coran répond à l’objection avant qu’elle ne soit posée.**",
      },
      {
        type: "schema",
        title: "Deux manières de regarder",
        variant: "branch",
        nodes: [
          {
            label: "Le regard d’une créature",
            note: "Limité, il se partage : plus l’objet est vaste, moins le détail est vu. Attention = ressource rare.",
          },
          {
            label: "La science du Créateur",
            arabic: "علم الله",
            note: "Une, sans effort ni succession : le tout et le détail sont connus du même savoir.",
          },
          {
            label: "Conséquence pour le cosmos",
            note: "L’immensité n’est pas une charge : elle est un signe parmi Ses signes.",
          },
          {
            label: "Conséquence pour l’homme",
            note: "La petiteté n’est pas un oubli : elle est le lieu même où la sollicitude se manifeste.",
          },
        ],
        caption:
          "L’objection cosmologique naît d’une projection : appliquer à Dieu la loi de l’attention humaine.",
      },
      { type: "h2", text: "La grandeur n’est pas une mesure de valeur" },
      {
        type: "p",
        text: "La taille est une mesure physique ; la valeur ne l’est pas. Une montagne pèse plus qu’un enfant ; nul n’en conclut qu’elle vaut davantage. **Dans le Coran, ce qui distingue l’homme n’est ni sa masse ni sa position, mais le dépôt qu’il porte** : la responsabilité, la parole, la capacité de reconnaître ou de nier.",
      },
      {
        type: "experiment",
        title: "L’horloger et le grain de sable",
        steps: [
          "Imagine un artisan capable de construire, dans le même geste, une cathédrale et une montre miniature dont chaque rouage tient sur un ongle.",
          "Tu observes la cathédrale et tu déclares : « Un homme qui construit cela ne peut pas s’intéresser à un rouage d’un millimètre. »",
          "Ton raisonnement vaudrait si sa capacité était limitée et qu’il devait choisir. **Mais tu as vu de tes yeux qu’il fait les deux, sans fatigue.**",
          "Alors la conclusion s’inverse : la finesse du rouage n’est pas la preuve de son désintérêt, elle est la preuve supplémentaire de sa maîtrise.",
        ],
        conclusion:
          "L’immensité du cosmos, loin d’éloigner Dieu de toi, **atteste d’une puissance pour laquelle ton cas n’est pas un surcroît de travail**.",
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قوله تعالى: **﴿وَمَا تَسْقُطُ مِنْ وَرَقَةٍ إِلَّا يَعْلَمُهَا﴾** أخبر سبحانه أنه **يعلم الجزئيات كما يعلم الكليات**، وأنَّ سقوط الورقة على صغرها لا يخفى عليه، تنبيهًا على أنَّ ما فوقها أولى بأن يعلمه؛ **فمن أحاط علمه بالورقة الساقطة فكيف يغفل عن عبده الداعي؟**\n\nSa parole : **« Pas une feuille ne tombe sans qu’Il ne le sache »** — Il informe, Exalté soit-Il, qu’**Il connaît les particuliers comme Il connaît les universels**, et que la chute d’une feuille, si petite soit-elle, ne Lui échappe pas ; ceci pour signaler que ce qui est plus grand est connu de Lui à plus forte raison. **Celui dont la science embrasse la feuille qui tombe, comment serait-Il inattentif à Son serviteur qui L’invoque ?**",
        source: "D’après al-Qurṭubī, al-Jāmiʿ li-aḥkām al-Qurʾān, 6:59",
      },
      { type: "h2", text: "Conséquences pratiques" },
      {
        type: "list",
        items: [
          "Ne jamais mesurer sa valeur à sa visibilité : **ce qui n’est vu de personne est connu de Lui**.",
          "Invoquer sans se croire indigne d’être entendu : la petitesse est la condition de la créature, non un motif d’exclusion.",
          "Faire de l’astronomie un motif d’émerveillement, non d’angoisse : l’échelle du cosmos est un signe, pas un argument contraire.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’objection cosmique impressionne parce qu’elle se présente comme moderne. Elle est en réalité très ancienne : c’est toujours la même erreur, celle de mesurer Dieu à l’aune de nos limites. **Une fois cette projection retirée, l’immensité ne dit plus l’abandon : elle dit la puissance de Celui qui, connaissant tout, connaît aussi ton nom.**",
      },
      {
        type: "verse",
        arabic:
          "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى **قَرِيبٌ** ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ",
        translation:
          "Et quand Mes serviteurs t’interrogent sur Moi : Je suis **tout proche**, Je réponds à l’appel de celui qui M’invoque quand il M’invoque.",
        reference: "Coran, al-Baqara, 2:186",
      },
    ],
  },

  {
    slug: slugifySujet("Allāh est-il « un dieu des Arabes » ?"),
    title: "Allāh est-il « un dieu des Arabes » ?",
    arabic: "ليس إلهًا قوميًّا",
    intro:
      "On entend parfois qu’« Allāh » désignerait une divinité tribale, propre aux Arabes, distincte du Dieu des juifs et des chrétiens. L’affirmation circule, mais elle ne résiste ni à la linguistique, ni à l’histoire, ni au texte coranique lui-même.\n\nCe sujet établit trois choses : ce que le mot dit dans la langue, ce que les chrétiens et les juifs arabophones en font depuis des siècles, et ce que le Coran affirme de la continuité prophétique.",
    body: [
      { type: "h2", text: "Ce que dit la langue" },
      {
        type: "p",
        text: "« Allāh » n’est pas un nom importé ni forgé : il appartient à la langue arabe comme « Dieu » appartient au français. La forme la plus courante chez les grammairiens le fait remonter à al-ilāh (الإله), « la divinité », par contraction. **Le mot n’est donc pas le nom d’un dieu parmi d’autres : il est l’article de l’unicité inscrit dans la langue.**",
      },
      {
        type: "p",
        text: "C’est pourquoi il ne prend ni féminin ni pluriel. On dit ālihah (آلهة) pour « des divinités » ; jamais pour Lui. Une langue peut multiplier ses idoles ; celle-ci a réservé un mot que la grammaire elle-même empêche de multiplier.",
      },
      {
        type: "schema",
        title: "ilāh / Allāh",
        arabic: "إله / الله",
        variant: "branch",
        nodes: [
          { label: "ilāh — nom commun", arabic: "إله", note: "« une divinité », ce qui est adoré, à tort ou à raison. Admet le pluriel : آلهة." },
          { label: "al-ilāh → Allāh", arabic: "الله", note: "La Divinité par excellence. Ni féminin, ni pluriel, ni diminutif." },
          { label: "Usage arabe chrétien", note: "Les bibles arabes traduisent Theos / Elohim par « Allāh » depuis les premiers siècles." },
          { label: "Parenté sémitique", note: "Hébreu Eloah / Elohim, araméen Alāhā : même racine sémitique, même sens." },
        ],
        caption:
          "Le mot n’est donc ni ethnique ni confessionnel : il est le terme arabe pour désigner Dieu.",
      },
      { type: "h2", text: "L’usage historique le contredit" },
      {
        type: "list",
        items: [
          "Les **chrétiens arabophones** — coptes, maronites, melkites — disent « Allāh » dans leur liturgie et leurs bibles, avant et après l’islam.",
          "Les **juifs arabophones**, jusqu’aux grandes œuvres de Saʿadia Gaon traduites en arabe, emploient le même mot.",
          "L’araméen de Jésus dit **Alāhā** ; l’hébreu dit **Eloah** au singulier. **La racine est commune à toutes les langues sémitiques.**",
        ],
      },
      { type: "h2", text: "Ce que le Coran affirme" },
      {
        type: "verse",
        arabic:
          "وَلَا تُجَٰدِلُوٓا۟ أَهْلَ ٱلْكِتَٰبِ إِلَّا بِٱلَّتِى هِىَ أَحْسَنُ ... وَقُولُوٓا۟ ءَامَنَّا بِٱلَّذِىٓ أُنزِلَ إِلَيْنَا وَأُنزِلَ إِلَيْكُمْ **وَإِلَٰهُنَا وَإِلَٰهُكُمْ وَٰحِدٌ**",
        translation:
          "Ne discutez avec les gens du Livre que de la meilleure manière… et dites : nous croyons en ce qui a été descendu vers nous et vers vous, **et notre Dieu et votre Dieu sont Un**.",
        reference: "Coran, al-ʿAnkabūt, 29:46",
      },
      {
        type: "p",
        text: "Le texte ne dit pas « nos dieux se ressemblent » : il dit **wāḥid**, Un. La différence entre les communautés porte sur ce qu’on affirme de Lui — engendre-t-Il ? est-Il trois ? — non sur l’identité de Celui dont on parle.",
      },
      {
        type: "experiment",
        title: "Le nom et la personne",
        steps: [
          "Deux voisins parlent du même homme, un juge de leur ville. L’un le nomme dans sa langue « le Juge », l’autre dans la sienne « al-Qāḍī ».",
          "Ils se disputent : l’un affirme qu’il est marié et père, l’autre qu’il est célibataire et sans enfant.",
          "Leur désaccord est réel — et il est sérieux. **Mais il porte sur ce qu’ils disent de lui, non sur le fait qu’ils parlent de lui.**",
          "Conclure « ils parlent de deux hommes différents parce qu’ils emploient deux mots » serait une erreur élémentaire.",
        ],
        conclusion:
          "Il en va de même ici : **le désaccord théologique est profond, la référence est commune**. Confondre les deux plans transforme un débat sérieux en malentendu de vocabulaire.",
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قوله: **﴿وَإِلَهُنَا وَإِلَهُكُمْ وَاحِدٌ﴾** أي: **معبودنا ومعبودكم إله واحد لا شريك له**، وإن اختلفتم في وصفه؛ فإنَّ الربَّ الذي أنزل التوراة والإنجيل هو الذي أنزل القرآن، **ودعوة الرسل كلِّهم إلى إله واحد**، وإنما وقع الخلاف فيما نُسب إليه مما لا يليق به.\n\nSa parole : **« Et notre Dieu et votre Dieu sont Un »**, c’est-à-dire : **Celui que nous adorons et Celui que vous adorez est un Dieu unique, sans associé**, même si vous divergez dans la manière de Le décrire. Car le Seigneur qui a fait descendre la Torah et l’Évangile est Celui qui a fait descendre le Coran, **et l’appel de tous les messagers fut vers un Dieu unique** ; la divergence n’est survenue que sur ce qu’on Lui a attribué et qui ne Lui convient pas.",
        source: "Sens exposé par les commentateurs, al-ʿAnkabūt 29:46",
      },
      { type: "h2", text: "Ce qui reste vrai dans l’objection" },
      {
        type: "p",
        text: "Une part de l’objection mérite d’être entendue : **les descriptions divergent réellement**. Affirmer la filiation divine, ou la trinité, n’est pas une nuance. Le Coran le dit sans détour. Mais la divergence se situe sur les attributs, non sur l’existence d’un référent commun ; c’est précisément ce qui rend le dialogue possible et la discussion sérieuse.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Dire « Allāh est le dieu des Arabes » revient à dire « Dieu est le dieu des Français ». C’est une confusion entre un mot et une divinité. **Le nom est arabe ; Celui qu’il nomme n’appartient à aucun peuple, puisque tous Lui appartiennent.**",
      },
      {
        type: "verse",
        arabic: "قُلْ يَٰٓأَيُّهَا ٱلنَّاسُ إِنِّى رَسُولُ ٱللَّهِ إِلَيْكُمْ **جَمِيعًا**",
        translation: "Dis : ô hommes, je suis pour vous **tous** le messager d’Allāh.",
        reference: "Coran, al-Aʿrāf, 7:158",
      },
    ],
  },

  {
    slug: slugifySujet("Peut-on voir Dieu de ces yeux-ci ?"),
    title: "Peut-on voir Dieu de ces yeux-ci ?",
    arabic: "الرؤية",
    intro:
      "La question de la vision de Dieu (al-ruʾya) est l’une des plus délicates de la théologie. Elle se pose sur deux plans qu’il ne faut jamais mélanger : ici-bas, dans cette vie et avec ces yeux ; et dans l’au-delà, pour les croyants au Paradis.\n\nLa position mālikite et ashʿarite, celle de la grande tradition sunnite, distingue nettement les deux : **impossible ici-bas, réelle dans l’au-delà**, sans qu’il faille pour autant attribuer à Dieu une direction, une forme ou une limite.",
    body: [
      { type: "h2", text: "Ici-bas : la demande de Moïse" },
      {
        type: "verse",
        arabic:
          "وَلَمَّا جَآءَ مُوسَىٰ لِمِيقَٰتِنَا وَكَلَّمَهُۥ رَبُّهُۥ قَالَ رَبِّ **أَرِنِىٓ أَنظُرْ إِلَيْكَ** ۚ قَالَ **لَن تَرَىٰنِى** وَلَٰكِنِ ٱنظُرْ إِلَى ٱلْجَبَلِ فَإِنِ ٱسْتَقَرَّ مَكَانَهُۥ فَسَوْفَ تَرَىٰنِى",
        translation:
          "Et lorsque Moïse vint à Notre rendez-vous et que son Seigneur lui eut parlé, il dit : Seigneur, **montre-Toi à moi que je Te regarde**. Il dit : **tu ne Me verras pas**, mais regarde la montagne : si elle tient en place, alors tu Me verras.",
        reference: "Coran, al-Aʿrāf, 7:143",
      },
      {
        type: "p",
        text: "Trois enseignements se tirent de ce verset. D’abord, **la demande n’est pas absurde** : Moïse, prophète, ne demande pas une chose impossible en soi, sinon il n’aurait pas demandé. Ensuite, la réponse « lan tarānī » porte sur cette vie. Enfin, l’épreuve de la montagne montre où est l’obstacle : **non pas du côté de Dieu, mais du côté de la constitution de la créature**, incapable de soutenir une telle manifestation dans son état présent.",
      },
      {
        type: "p",
        text: "C’est aussi le sens du verset : « Les regards ne L’atteignent pas, et Il atteint les regards » (al-Anʿām 6:103). Les commentateurs sunnites y lisent une négation de l’**encerclement** (idrāk) — voir en cernant, en délimitant — non une négation absolue de toute vision.",
      },
      {
        type: "schema",
        title: "La vision : deux demeures, deux régimes",
        arabic: "الرؤية",
        variant: "branch",
        nodes: [
          {
            label: "Ici-bas — impossible",
            arabic: "لن تراني",
            note: "Non par défaut de Dieu, mais par faiblesse de la constitution actuelle de la créature (la montagne s’effondre).",
          },
          {
            label: "Au-delà — réelle",
            arabic: "ناضرة",
            note: "Vision accordée aux croyants au Paradis, affirmée par le Coran et de nombreux hadīths rigoureux.",
          },
          {
            label: "Ce qui est nié dans tous les cas",
            arabic: "الإدراك",
            note: "Le fait de cerner, délimiter, situer : pas de direction, pas de distance, pas de forme.",
          },
          {
            label: "Ce qui est affirmé",
            note: "Une vision réelle, sans modalité connue de nous — « sans comment » (bi-lā kayf).",
          },
        ],
        caption:
          "Toute la difficulté vient de ce qu’on projette sur la vision de l’au-delà les conditions physiques de la vision d’ici-bas.",
      },
      { type: "h2", text: "Dans l’au-delà : ce que le texte affirme" },
      {
        type: "verse",
        arabic: "وُجُوهٌ يَوْمَئِذٍ **نَّاضِرَةٌ** ۝ **إِلَىٰ رَبِّهَا نَاظِرَةٌ**",
        translation:
          "Ce jour-là, il y aura des visages **resplendissants**, **tournés vers leur Seigneur, Le regardant**.",
        reference: "Coran, al-Qiyāma, 75:22-23",
      },
      {
        type: "p",
        text: "Le hadīth confirme : « Vous verrez votre Seigneur comme vous voyez cette lune, sans être empêchés de Le voir. » La comparaison porte sur **la clarté et l’absence d’obstacle**, non sur la forme ni la distance : la lune n’est pas ce à quoi Il ressemble, elle est l’image d’une vision certaine et sans gêne.",
      },
      {
        type: "experiment",
        title: "Le nouveau-né et la lumière",
        steps: [
          "Un enfant dans le sein maternel ne voit rien : ni couleurs, ni visages. Ce n’est pas que la lumière n’existe pas ; c’est que son état ne le permet pas.",
          "Explique-lui — s’il pouvait entendre — qu’il verra un jour le soleil. Rien dans son expérience actuelle ne rend cela crédible.",
          "Puis il naît. **Le même être, désormais autrement constitué, voit ce qui lui était rigoureusement inaccessible.**",
          "Rien n’a changé du côté de la lumière ; tout a changé du côté de celui qui regarde.",
        ],
        conclusion:
          "La demeure dernière est décrite comme une **autre création** (nashʾa ukhrā). L’impossibilité d’ici-bas n’est donc pas une impossibilité en soi : **elle tient à l’état du regard, non à ce qui est regardé**.",
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال أهل السنة: **معنى ﴿لَا تُدْرِكُهُ الْأَبْصَارُ﴾ لا تحيط به الأبصار**، والإدراك أخصُّ من الرؤية؛ **فنفيُ الإدراك لا يستلزم نفيَ الرؤية**، كما يقال: رأيتُ البحر ولم أُدركه. وقد دلَّ قوله تعالى: **﴿إِلَى رَبِّهَا نَاظِرَةٌ﴾** وتواترت الأخبار عن النبي ﷺ أنَّ المؤمنين **يرون ربَّهم في الآخرة بلا كيفٍ ولا جهةٍ ولا حدٍّ**.\n\nLes gens de la Sunna ont dit : **le sens de « les regards ne L’atteignent pas » est que les regards ne L’embrassent pas** ; or « atteindre » (idrāk) est plus spécifique que « voir ». **Nier l’encerclement n’implique donc pas de nier la vision**, comme on dit : « j’ai vu la mer sans l’embrasser du regard ». Sa parole **« tournés vers leur Seigneur, Le regardant »** l’indique, et les récits du Prophète ﷺ se sont transmis en masse : les croyants **verront leur Seigneur dans l’au-delà, sans modalité, sans direction et sans limite**.",
        source: "Synthèse d’après al-Qurṭubī et les théologiens ashʿarites-mālikites, 6:103 / 75:23",
      },
      { type: "h2", text: "Les erreurs à éviter" },
      {
        type: "list",
        items: [
          "**Nier purement la vision** dans l’au-delà, par crainte de l’anthropomorphisme : c’est contredire un texte explicite.",
          "**Affirmer la vision en l’imaginant** : lui donner une direction, une distance, une forme — c’est retomber dans la comparaison que le Coran écarte (« rien ne Lui ressemble »).",
          "**Prétendre Le voir ici-bas** en état de veille : la tradition sunnite majoritaire l’exclut, y compris pour les plus grands saints.",
          "Confondre vision oculaire et **dévoilement du cœur** : le second est un état spirituel, il ne s’appelle pas ruʾya au sens technique.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La réponse tient en une phrase : **non de ces yeux-ci, oui de ces yeux-là**. Non dans cette demeure dont la constitution ne le supporte pas ; oui dans la demeure où l’homme sera recréé pour cela. Et dans les deux cas, la règle demeure : affirmer ce que le texte affirme, nier la ressemblance, et **ne pas prétendre au comment**.",
      },
      {
        type: "verse",
        arabic: "لَّيْسَ كَمِثْلِهِۦ شَىْءٌ ۖ **وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ**",
        translation: "Rien ne Lui ressemble, **et Il est l’Audient, le Clairvoyant**.",
        reference: "Coran, al-Shūrā, 42:11",
      },
    ],
  },

  {
    slug: slugifySujet("Dieu était, et rien n'était avec Lui : le temps commence-t-il avec la création ?"),
    title: "Dieu était, et rien n'était avec Lui : le temps commence-t-il avec la création ?",
    arabic: "الأزل والزمان",
    intro:
      "« Allāh était, et rien n’était avec Lui » : ce hadīth rapporté par al-Bukhārī est l’une des formules les plus denses de la théologie musulmane. Il pose d’un coup l’éternité sans commencement (azal) et la nouveauté de tout le reste.\n\nMais il soulève aussitôt une question redoutable : si Dieu « était » avant, y avait-il un avant ? Le temps est-il une créature ? Et que devient alors la question « pourquoi a-t-Il créé à ce moment-là plutôt qu’à un autre » ?",
    body: [
      { type: "h2", text: "Le principe : Il est qadīm, tout le reste est ḥādith" },
      {
        type: "p",
        text: "La théologie sunnite distingue deux catégories exhaustives : le **qadīm**, ce dont l’existence n’a pas de commencement, et le **ḥādith**, ce qui advient après n’avoir pas été. **Dieu seul est qadīm ; tout ce qui n’est pas Lui est ḥādith** — les corps, les accidents, l’espace, et le temps lui-même.",
      },
      {
        type: "quote",
        text: "كَانَ اللَّهُ وَلَمْ يَكُنْ شَيْءٌ غَيْرُهُ\n\n« Allāh était, et rien d’autre que Lui n’était. »",
        source: "Rapporté par al-Bukhārī (bad’ al-khalq)",
      },
      {
        type: "p",
        text: "Le « était » de la formule n’est pas un passé situé dans le temps : la langue n’en a pas d’autre. **Dire « avant la création » ne désigne pas un moment antérieur, mais une antériorité de l’être, non du calendrier.** C’est le point qui, une fois saisi, dissout la plupart des objections.",
      },
      {
        type: "schema",
        title: "Ce qui a un commencement, ce qui n’en a pas",
        arabic: "القديم والحادث",
        variant: "branch",
        nodes: [
          { label: "Le qadīm", arabic: "القديم", note: "Sans commencement, sans fin, sans cause. Un seul : Allāh, avec Ses attributs éternels." },
          { label: "Le ḥādith", arabic: "الحادث", note: "Ce qui advient : matière, mouvement, espace — et le temps, qui n’est que la mesure du changement." },
          { label: "Le temps", arabic: "الزمان", note: "Mesure du mouvement des créatures. Pas de mouvement, pas de temps : il naît avec le monde." },
          { label: "L’erreur commune", note: "Se représenter un temps vide qui « attendait » la création. Ce temps-là n’a jamais existé." },
        ],
        caption:
          "Le temps n’est pas le contenant de la création : il est l’une des choses créées.",
      },
      { type: "h2", text: "« Pourquoi à ce moment-là ? » — une question mal formée" },
      {
        type: "p",
        text: "L’objection classique se formule ainsi : si Dieu est éternel et le monde récent, pourquoi a-t-Il attendu ? Qu’est-ce qui a déclenché la décision à cet instant précis ?",
      },
      {
        type: "p",
        text: "La réponse sunnite est nette : **la question suppose ce qu’elle devrait prouver**, à savoir un temps préexistant dans lequel des instants se seraient succédé. S’il n’y a pas d’instants avant le premier instant, il n’y a pas de « moment choisi parmi d’autres », donc **pas de retard à expliquer**. La création n’est pas advenue tard : elle a advenu, et avec elle le premier « quand ».",
      },
      {
        type: "experiment",
        title: "Le nord du pôle Nord",
        steps: [
          "Tu tiens un globe et tu poses le doigt sur le pôle Nord. Puis tu demandes : « Qu’y a-t-il **plus au nord** que ce point ? »",
          "La question est grammaticalement correcte, on peut la prononcer. Elle n’a pourtant aucun objet : le nord est une direction définie **sur** la sphère, et elle s’épuise là.",
          "L’absence de réponse n’est pas une lacune du savoir : c’est le signe que la question ne portait sur rien.",
          "De même : « qu’y avait-il **avant** le premier instant ? » — **l’avant est une relation interne au temps ; il n’y a pas d’avant au bord du temps.**",
        ],
        conclusion:
          "Dieu n’a pas attendu, car il n’y avait pas d’attente possible. **Son éternité n’est pas une durée très longue : c’est l’absence pure de commencement.**",
      },
      { type: "h2", text: "Ce que cela implique des attributs" },
      {
        type: "list",
        items: [
          "**La volonté divine est éternelle** ; c’est son objet qui est daté. Il a voulu de toute éternité que le monde soit à tel rang de l’existence.",
          "**Rien ne Le change** : la création n’ajoute rien à Lui, n’en retranche rien, ne Le fait pas passer d’un état à un autre.",
          "**Rien ne Lui est co-éternel** : ni matière première, ni loi, ni temps. Poser un co-éternel, c’est poser un second nécessaire.",
        ],
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال أهل التحقيق: **الزمان عندنا مقدارُ حركةٍ، والحركةُ حادثة، فالزمان حادث**؛ فلا يقال: كان الله في زمانٍ ثم خلق، **لأنَّ الزمان من جملة خلقه**. ومعنى **﴿هُوَ الْأَوَّلُ﴾** أي: **الذي ليس لوجوده ابتداء**، لا أنه أوَّلُ الأشياء في ترتيب الزمان. **وسؤال «لِمَ خلق في هذا الوقت دون غيره» ساقطٌ**، إذ لا وقت قبل الخلق يُنسب إليه التقديم والتأخير.\n\nLes vérificateurs ont dit : **le temps est chez nous la mesure d’un mouvement ; or le mouvement est advenu, donc le temps est advenu**. On ne dit donc pas : Allāh était dans un temps, puis Il créa, **car le temps fait partie de Sa création**. Le sens de **« Il est le Premier »** est : **Celui dont l’existence n’a pas de commencement**, non qu’Il serait la première des choses dans l’ordre chronologique. **Et la question « pourquoi a-t-Il créé à ce moment et non à un autre » tombe d’elle-même**, puisqu’il n’y a pas de temps avant la création auquel rapporter une antériorité ou un retard.",
        source: "Synthèse des théologiens ashʿarites-mālikites (commentaire de al-Ḥadīd 57:3)",
      },
      {
        type: "verse",
        arabic: "هُوَ **ٱلْأَوَّلُ وَٱلْءَاخِرُ وَٱلظَّٰهِرُ وَٱلْبَاطِنُ** ۖ وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌ",
        translation:
          "Il est **le Premier et le Dernier, l’Apparent et le Caché**, et Il est de toute chose Savant.",
        reference: "Coran, al-Ḥadīd, 57:3",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "« Dieu était, et rien n’était avec Lui » : la formule ne décrit pas une scène dans un temps vide, elle nie toute co-éternité. **Le temps n’est pas le théâtre où Dieu agit ; il est l’une des choses qu’Il a faites.** Comprendre cela, c’est cesser de Lui appliquer nos catégories de durée — et c’est déjà entrer dans le sens de « rien ne Lui ressemble ».",
      },
    ],
  },

  {
    slug: slugifySujet("Nul n'a la garantie de mourir croyant : la notion de muwāfāt"),
    title: "Nul n'a la garantie de mourir croyant : la notion de muwāfāt",
    arabic: "الموافاة",
    intro:
      "La muwāfāt est l’un des concepts les plus graves et les plus mal connus de la théologie sunnite. Le mot désigne **l’état dans lequel le serviteur rencontre Dieu au moment de la mort** — et c’est cet état-là, non les états antérieurs, qui décide du sort dernier.\n\nCe principe explique pourquoi le croyant vit entre la crainte et l’espérance, pourquoi l’on ne se déclare pas sauvé, et pourquoi l’on ne condamne pas définitivement autrui de son vivant.",
    body: [
      { type: "h2", text: "Le sens du mot" },
      {
        type: "p",
        text: "Muwāfāt (الموافاة) vient de wafā, « s’acquitter, arriver au terme ». En théologie, elle désigne **la rencontre finale** : ce sur quoi la vie se referme. Le jugement porte sur le terme, non sur la moyenne du parcours. **Ce n’est pas la longueur du chemin qui compte, c’est la porte par laquelle on sort.**",
      },
      {
        type: "quote",
        text:
          "إِنَّمَا الْأَعْمَالُ **بِالْخَوَاتِيمِ**\n\n« Les actes ne valent que par **leurs fins**. »",
        source: "Rapporté par al-Bukhārī",
      },
      {
        type: "schema",
        title: "Le poids du terme",
        arabic: "الخاتمة",
        variant: "flow",
        nodes: [
          { label: "L’état présent", note: "Foi ou incroyance, obéissance ou désobéissance, à un instant donné du parcours." },
          { label: "Le parcours", note: "Il peut connaître des retournements dans les deux sens, jusqu’au dernier souffle." },
          { label: "La muwāfāt", arabic: "الموافاة", note: "L’état effectif au moment où l’âme quitte le corps : c’est lui qui est pris en compte." },
          { label: "Le sort dernier", note: "Fondé sur ce terme, connu de Dieu de toute éternité — et de Lui seul." },
        ],
        caption:
          "D’où la règle : on espère sans se croire sauvé, on craint sans désespérer, on ne juge personne comme définitivement perdu de son vivant.",
      },
      { type: "h2", text: "Deux conséquences opposées, également nécessaires" },
      {
        type: "list",
        items: [
          "**Contre la présomption** : celui qui a passé sa vie dans l’obéissance ne détient aucune garantie. Se déclarer sauvé est déjà un défaut, car c’est prétendre savoir ce que Dieu seul sait.",
          "**Contre le désespoir** : celui qui a passé sa vie dans la faute peut être saisi par la miséricorde au dernier moment. **Aucune biographie n’est close tant que le souffle demeure.**",
          "**Contre l’excommunication facile** : on ne dit d’aucun vivant qu’il est en enfer. On peut juger un acte ; on ne scelle pas un destin.",
        ],
      },
      {
        type: "verse",
        arabic:
          "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ **وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ**",
        translation:
          "Ô vous qui croyez, craignez Allāh comme Il doit être craint, **et ne mourez qu’en état de soumission**.",
        reference: "Coran, Āl ʿImrān, 3:102",
      },
      {
        type: "p",
        text: "Remarque la formulation : on n’ordonne pas de « ne pas mourir », ce qui serait absurde, mais de **veiller à l’état dans lequel la mort nous trouvera**. Comme la mort survient sans préavis, l’ordre revient à : sois à tout instant dans l’état où tu voudrais être trouvé.",
      },
      {
        type: "experiment",
        title: "La lettre cachetée",
        steps: [
          "Tu écris chaque jour une longue lettre à un homme dont dépend ton sort. Certaines pages sont belles, d’autres honteuses.",
          "On te prévient d’une seule règle : **le pli sera cacheté à un instant que tu ignores**, et le destinataire ne lira que la page ouverte à ce moment-là.",
          "Comment écrirais-tu ? Non pas en comptant les bonnes pages passées, ni en te désolant des mauvaises — **mais en veillant à ce que la page en cours soit tenable**.",
          "Celui qui se rassure : « j’ai déjà écrit cent belles pages » ne comprend pas la règle. Celui qui renonce : « ma dernière page est infâme, tout est perdu » ne la comprend pas davantage : il peut tourner la page maintenant.",
        ],
        conclusion:
          "La muwāfāt n’est pas faite pour angoisser : elle est faite pour **maintenir le cœur éveillé au présent**, entre la crainte qui empêche l’insouciance et l’espérance qui empêche l’abandon.",
      },
      { type: "h2", text: "Muwāfāt et décret divin" },
      {
        type: "p",
        text: "Une précision s’impose. Dieu connaît de toute éternité le terme de chacun ; **cette science n’oblige personne**. Elle est science de ce qui sera, non contrainte sur ce qui sera. Le serviteur choisit réellement, et Dieu sait réellement ce qu’il choisira. **La connaissance n’est pas une chaîne : savoir qu’un homme partira demain ne l’a jamais fait partir.**",
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال الأشعري وأصحابه: **المعتبر في السعادة والشقاوة الموافاة**؛ فمن **وافى ربَّه مؤمنًا** فهو السعيد وإن سبق منه كفر، **ومن وافاه كافرًا** فهو الشقيّ وإن سبق منه إيمان وطاعة. ولهذا **لا يُقطع لمعيَّنٍ من الأحياء بجنةٍ ولا نار**، **ولا يأمن العبد مكر الله ولا ييأس من روحه**، بل يكون بين الخوف والرجاء إلى أن يلقى ربَّه.\n\nAl-Ashʿarī et ses compagnons ont dit : **ce qui est pris en compte dans le bonheur et la perdition, c’est la muwāfāt**. Celui qui **rencontre son Seigneur croyant** est l’heureux, même si une incroyance l’a précédé ; **celui qui Le rencontre incroyant** est le malheureux, même si une foi et une obéissance l’ont précédée. C’est pourquoi **on ne tranche pour aucun vivant en particulier ni par le Paradis ni par le Feu**, **et le serviteur ne se croit pas à l’abri du stratagème d’Allāh ni ne désespère de Sa miséricorde** : il demeure entre la crainte et l’espérance jusqu’à ce qu’il rencontre son Seigneur.",
        source: "Doctrine ashʿarite classique, rapportée dans les traités de ʿaqīda mālikites",
      },
      { type: "h2", text: "Conséquences pratiques" },
      {
        type: "list",
        items: [
          "Multiplier l’invocation **thabbit qalbī ʿalā dīnik** — « affermis mon cœur dans Ta religion » : le Prophète ﷺ lui-même la répétait.",
          "Ne jamais parler de sa propre fin comme d’une chose acquise ; dire « in shāʾ Allāh » n’est pas une formule, c’est une théologie.",
          "Traiter le pécheur comme un homme dont l’histoire n’est pas écrite : **appeler, non enterrer**.",
          "Vivre le présent comme le seul terrain d’action : le passé est jugé, l’avenir est promis à personne.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La muwāfāt place chacun dans une humilité exacte : ni triomphante, ni désespérée. Elle interdit de se compter parmi les sauvés, et interdit tout autant de compter quiconque parmi les perdus. **Il ne reste alors qu’une chose à faire : se tenir prêt, maintenant.**",
      },
      {
        type: "verse",
        arabic: "رَبَّنَا **لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا** وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً",
        translation:
          "Seigneur, **ne fais pas dévier nos cœurs après que Tu nous as guidés**, et accorde-nous une miséricorde venant de Toi.",
        reference: "Coran, Āl ʿImrān, 3:8",
      },
    ],
  },

  {
    slug: slugifySujet("L'amour de Dieu : ce qui l'attire, ce qui l'éloigne"),
    title: "L'amour de Dieu : ce qui l'attire, ce qui l'éloigne",
    arabic: "المحبة",
    intro:
      "Le Coran ne se contente pas de dire que Dieu pardonne : il dit qu’Il **aime**. Et il nomme, avec une précision remarquable, ceux qu’Il aime et ceux qu’Il n’aime pas. Ce vocabulaire n’est pas décoratif : il trace une carte.\n\nCe sujet suit cette carte : ce que signifie l’amour attribué à Dieu, quelles qualités le texte associe à cet amour, lesquelles l’écartent, et comment l’amour du serviteur se vérifie autrement que par le sentiment.",
    body: [
      { type: "h2", text: "Que signifie « Dieu aime » ?" },
      {
        type: "p",
        text: "Chez la créature, l’amour est une inclination, souvent accompagnée d’un manque : on aime ce qui nous complète. **Rien de tel ne peut être attribué à Dieu**, qui ne manque de rien et que rien n’affecte. La règle des attributs s’applique ici comme ailleurs : on affirme le terme, on nie la ressemblance.",
      },
      {
        type: "p",
        text: "Les théologiens mālikites-ashʿarites expliquent la maḥabba divine par **la volonté du bien pour le serviteur et l’agrément de son état** : Dieu aime le juste en ce qu’Il veut pour lui le meilleur et agrée sa justice. **Ce n’est pas une émotion qui monte en Lui ; c’est une orientation réelle de la faveur.**",
      },
      {
        type: "schema",
        title: "Ceux qu’Il aime, ceux qu’Il n’aime pas",
        arabic: "يحب / لا يحب",
        variant: "branch",
        nodes: [
          { label: "Il aime les pieux", arabic: "المتقين", note: "Ceux qui prennent garde : la vigilance intérieure avant l’acte visible." },
          { label: "Il aime les bienfaisants", arabic: "المحسنين", note: "Ceux qui font le bien au-delà du dû, et le font avec excellence." },
          { label: "Il aime les repentants et les purs", arabic: "التوابين والمتطهرين", note: "La faute n’exclut pas ; c’est l’installation dans la faute qui exclut." },
          { label: "Il aime les patients et les confiants", arabic: "الصابرين والمتوكلين", note: "Tenir dans l’épreuve, et s’en remettre après avoir agi." },
          { label: "Il n’aime pas les injustes", arabic: "الظالمين", note: "L’injustice envers autrui et envers soi-même." },
          { label: "Il n’aime pas les orgueilleux et les corrupteurs", arabic: "المستكبرين والمفسدين", note: "L’élévation de soi, la vantardise, le désordre semé sur terre." },
        ],
        caption:
          "Le Coran ne décrit pas un amour vague : il l’attache à des qualités nommées, donc à des actes.",
      },
      { type: "h2", text: "La preuve de l’amour n’est pas le sentiment" },
      {
        type: "verse",
        arabic:
          "قُلْ إِن كُنتُمْ تُحِبُّونَ ٱللَّهَ **فَٱتَّبِعُونِى يُحْبِبْكُمُ ٱللَّهُ** وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ",
        translation:
          "Dis : si vous aimez Allāh, **suivez-moi, Allāh vous aimera** et vous pardonnera vos péchés.",
        reference: "Coran, Āl ʿImrān, 3:31",
      },
      {
        type: "p",
        text: "Ce verset a été appelé par les anciens **« le verset de l’épreuve »** (āyat al-imtiḥān) : il met à l’épreuve toute prétention à l’amour. On disait aimer ; le texte répond en donnant un critère vérifiable — le suivi. **L’amour, ici, ne se mesure pas à l’émotion ressentie mais à l’obéissance consentie.**",
      },
      {
        type: "experiment",
        title: "Les deux serviteurs du roi",
        steps: [
          "Un roi part en voyage et laisse à deux serviteurs la même consigne écrite.",
          "Le premier passe ses journées à parler de son attachement au roi, pleure en évoquant son nom, orne sa maison de son portrait — mais n’ouvre pas la consigne.",
          "Le second ne dit rien de ses sentiments : il lit la consigne, l’applique, et corrige ce qu’il a mal fait.",
          "Au retour, lequel des deux a réellement aimé ? **Le sentiment sans conformité est un discours ; la conformité, elle, est déjà une preuve.**",
        ],
        conclusion:
          "Ceci n’abolit pas le sentiment : il est un don, il réjouit et soutient. **Mais il est le fruit, non la racine.** Beaucoup attendent d’aimer pour obéir ; l’ordre inverse est celui du verset.",
      },
      { type: "h2", text: "Ce qui éloigne" },
      {
        type: "list",
        items: [
          "**L’injustice** — ẓulm : mettre une chose hors de sa place, envers autrui ou envers soi.",
          "**L’orgueil** — kibr : refuser la vérité et mépriser les gens. C’est le péché originel d’Iblīs, non un manque de savoir.",
          "**La corruption** — fasād : semer le désordre, dans la terre, dans les liens, dans les biens.",
          "**La trahison et l’excès** — khiyāna, iʿtidāʾ : rompre le pacte, dépasser la limite même dans le droit.",
          "**L’installation dans la faute** : la faute ponctuelle est prévue par le repentir ; c’est l’insistance sans retour qui ferme la porte.",
        ],
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قال العلماء في قوله: **﴿قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ﴾**: هذه الآية تُسمَّى **آية المِحنة**؛ **فمن ادَّعى محبَّة الله ولم يتَّبع رسوله ﷺ كان مُدَّعيًا كاذبًا** حتى يوافق دعواه فعلُه. **ومحبَّة الله للعبد**: إرادته له الخير وإكرامه ورضاه عنه، لا انفعال ولا ميل كما يكون في المخلوقين، **تعالى الله عن ذلك**.\n\nLes savants ont dit au sujet de Sa parole **« Dis : si vous aimez Allāh, suivez-moi, Allāh vous aimera »** : ce verset est appelé **le verset de l’épreuve**. **Quiconque prétend aimer Allāh sans suivre Son messager ﷺ est un prétendant menteur**, jusqu’à ce que son acte s’accorde à sa prétention. **Quant à l’amour d’Allāh pour le serviteur**, il consiste en ce qu’Il veut pour lui le bien, l’honore et l’agrée — non un affect ni une inclination comme chez les créatures : **Allāh est bien au-dessus de cela**.",
        source: "D’après al-Qurṭubī, al-Jāmiʿ li-aḥkām al-Qurʾān, 3:31",
      },
      { type: "h2", text: "Conséquences pratiques" },
      {
        type: "list",
        items: [
          "Vérifier son amour à ce qu’on fait quand personne ne regarde, non à ce qu’on ressent en écoutant un rappel.",
          "Commencer par les **obligations** : le hadīth qudsī place le rapprochement d’abord dans ce qui est prescrit, puis dans le surérogatoire.",
          "Traquer l’orgueil plus que la faute visible : c’est lui qui, dans le texte, éloigne le plus sûrement.",
          "Se repentir vite et sans mise en scène : **le repentant est nommé parmi les aimés**.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’amour divin n’est ni un sentiment que l’on projette sur Dieu, ni une récompense arbitraire. Il est attaché, dans le texte même, à des qualités que l’homme peut acquérir et à des travers qu’il peut quitter. **Autrement dit : la porte n’est pas fermée, elle est indiquée.**",
      },
      {
        type: "verse",
        arabic:
          "**وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ**",
        translation: "**Et Allāh aime les bienfaisants.**",
        reference: "Coran, Āl ʿImrān, 3:134",
      },
    ],
  },

  {
    slug: slugifySujet("Une objection : un Dieu qui châtie l'incroyance est-il juste ?"),
    title: "Une objection : un Dieu qui châtie l'incroyance est-il juste ?",
    arabic: "العدل الإلهي",
    intro:
      "C’est peut-être l’objection la plus fréquente aujourd’hui : comment un Dieu miséricordieux peut-Il châtier quelqu’un pour une croyance ? On y ajoute souvent : et celui qui n’a jamais entendu le message ?\n\nLa réponse musulmane ne consiste ni à minimiser le châtiment, ni à durcir le propos. Elle consiste à préciser trois choses : ce qu’est réellement le kufr, à quelles conditions la responsabilité s’engage, et ce que la justice signifie quand elle est attribuée à Dieu.",
    body: [
      { type: "h2", text: "Ce que le kufr n’est pas" },
      {
        type: "p",
        text: "Le mot kufr (كفر) signifie littéralement **couvrir, recouvrir** — on l’emploie pour le cultivateur qui recouvre la graine de terre. Le kufr théologique n’est donc pas d’abord une erreur intellectuelle : c’est **le fait de recouvrir une vérité qui s’est présentée**, de la voiler après qu’elle est apparue.",
      },
      {
        type: "list",
        items: [
          "Ce n’est pas **l’ignorance** de celui à qui rien n’a été transmis.",
          "Ce n’est pas **l’erreur** de celui qui cherche sincèrement et se trompe.",
          "Ce n’est pas **le doute** de celui qui interroge en voulant savoir.",
          "C’est **le refus** de celui qui a vu et a préféré ne pas voir : « ils les ont niés alors que leurs âmes en étaient convaincues ».",
        ],
      },
      {
        type: "schema",
        title: "Quand la responsabilité s’engage",
        arabic: "شروط التكليف",
        variant: "flow",
        nodes: [
          { label: "Capacité", arabic: "العقل والبلوغ", note: "Ni l’enfant, ni l’aliéné, ni celui qui n’a pas la raison ne sont tenus." },
          { label: "Message parvenu", arabic: "بلوغ الدعوة", note: "« Nous ne châtions jamais avant d’avoir envoyé un messager » (17:15)." },
          { label: "Message compris, non déformé", note: "Une caricature transmise n’est pas le message : le refus d’une caricature n’est pas un refus du vrai." },
          { label: "Refus délibéré", arabic: "الجحود", note: "Voir, reconnaître intérieurement, et couvrir. C’est là seulement que le kufr est constitué." },
        ],
        caption:
          "Ôte l’une de ces conditions, et la responsabilité pleine n’est pas engagée. La justice divine est conditionnelle, non aveugle.",
      },
      {
        type: "verse",
        arabic: "**وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ نَبْعَثَ رَسُولًا**",
        translation: "**Et Nous ne châtions jamais avant d’avoir envoyé un messager.**",
        reference: "Coran, al-Isrāʾ, 17:15",
      },
      {
        type: "p",
        text: "Ce verset règle, à lui seul, la question de « celui qui n’a jamais entendu ». La tradition sunnite en tire la notion d’**ahl al-fatra**, ceux que le message n’a pas atteints : leur sort relève de la miséricorde et d’une épreuve propre au Jour dernier, non d’une condamnation automatique. **Nul n’est châtié pour une information qui ne lui est pas parvenue.**",
      },
      { type: "h2", text: "« Une faute finie, un châtiment infini ? »" },
      {
        type: "p",
        text: "L’objection suppose que la peine se calcule sur la durée de l’acte. Mais aucun droit humain ne fonctionne ainsi : **un meurtre dure quelques secondes et se punit de décennies**. La gravité ne se mesure pas au chronomètre, elle se mesure à ce qui est atteint.",
      },
      {
        type: "p",
        text: "S’ajoute un point souvent oublié : la tradition enseigne que **celui qui persiste éternellement dans le refus le ferait indéfiniment s’il en avait le temps** — l’état ne s’interrompt pas par un changement de cœur, mais par la mort. La permanence de la peine répond à la permanence de l’état, non à la durée d’un instant.",
      },
      {
        type: "experiment",
        title: "Le médecin et le patient",
        steps: [
          "Un médecin diagnostique une maladie mortelle mais guérissable. Il l’explique clairement, gratuitement, plusieurs fois, dans la langue du patient.",
          "Le patient comprend parfaitement, prend l’ordonnance, la déchire devant lui et déclare que le médecin ment.",
          "Des années plus tard, la maladie l’emporte. **Diras-tu que le médecin l’a tué ?**",
          "Change maintenant un seul paramètre : le patient est sourd et personne ne lui a jamais transmis le diagnostic. **Le jugement s’inverse aussitôt** — et c’est exactement ce que dit le verset 17:15.",
        ],
        conclusion:
          "La justice ne consiste pas à traiter tout le monde identiquement, **mais à tenir compte de ce que chacun a réellement reçu**. C’est le principe même du taklīf.",
      },
      { type: "h2", text: "La justice divine n’est pas mesurée par nous" },
      {
        type: "p",
        text: "Un dernier point, essentiel dans l’école ashʿarite-mālikite : **la justice divine ne se soumet pas à un étalon extérieur à Dieu**. Il n’existe pas une Justice au-dessus de Lui à laquelle Il devrait se conformer. Ce qu’Il fait est juste parce que c’est Lui qui le fait, Lui qui possède, Lui qui donne l’être. **Ceci n’ouvre pas à l’arbitraire** : Il s’est prescrit à Lui-même la miséricorde et a promis de ne pas léser d’un atome.",
      },
      {
        type: "verse",
        arabic:
          "إِنَّ ٱللَّهَ **لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ** ۖ وَإِن تَكُ حَسَنَةً يُضَٰعِفْهَا وَيُؤْتِ مِن لَّدُنْهُ أَجْرًا عَظِيمًا",
        translation:
          "Allāh **ne lèse pas même du poids d’un atome** ; et s’il s’agit d’une bonne action, Il la multiplie et accorde de Sa part une immense récompense.",
        reference: "Coran, al-Nisāʾ, 4:40",
      },
      { type: "h2", text: "L’avis des commentateurs" },
      {
        type: "quote",
        text:
          "قوله تعالى: **﴿وَمَا كُنَّا مُعَذِّبِينَ حَتَّى نَبْعَثَ رَسُولًا﴾** فيه دليلٌ على أنَّ **الله لا يؤاخذ الخلق قبل قيام الحجَّة عليهم بالرسل**؛ قال العلماء: **فأهل الفترة ومن لم تبلغه الدعوة ليسوا معذَّبين** بمجرَّد عدم علمهم، **بل أمرهم إلى الله ورحمته**. وليس في هذا تعطيلٌ للوعيد، **وإنما هو بيانٌ أنَّ العذاب متعلِّقٌ بالإعراض بعد البلاغ**، لا بالجهل الذي لا صنع للعبد فيه.\n\nSa parole : **« Et Nous ne châtions jamais avant d’avoir envoyé un messager »** contient la preuve qu’**Allāh ne saisit pas les créatures avant que l’argument ne soit établi contre elles par les messagers**. Les savants ont dit : **les gens de la fatra et ceux que l’appel n’a pas atteints ne sont pas châtiés** du seul fait de leur ignorance ; **leur affaire revient à Allāh et à Sa miséricorde**. Il n’y a là aucune abolition de la menace, **mais l’exposé que le châtiment est lié au détournement après la transmission**, et non à une ignorance dont le serviteur n’est pas l’auteur.",
        source: "D’après al-Qurṭubī, al-Jāmiʿ li-aḥkām al-Qurʾān, 17:15",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "L’objection perd sa force dès que trois confusions sont levées : le kufr n’est pas l’ignorance ; la responsabilité suppose que le message soit réellement parvenu et compris ; et la peine répond à un état persistant, non à un instant. **Reste alors le cœur de la doctrine : Il ne lèse personne, et Sa miséricorde précède Sa colère.**",
      },
      {
        type: "quote",
        text: "إِنَّ رَحْمَتِي **سَبَقَتْ** غَضَبِي\n\n« Ma miséricorde **devance** Ma colère. »",
        source: "Hadīth qudsī, rapporté par al-Bukhārī et Muslim",
      },
    ],
  },
];
