import { sommaire, type IndexChapter, type IndexEntry } from "./sommaire";
import { slugifySujet, type Sujet, type SujetBlock, type SchemaNode } from "./sujet-core";
import { sujetsDieuGeneralites } from "./sujets-dieu";
import { sujetsDieuAttributs } from "./sujets-dieu-attributs";
import { sujetsDieuAttributs2 } from "./sujets-dieu-attributs-2";
import { sujetsDieuNoms } from "./sujets-dieu-noms";
import { sujetsDieuQadar } from "./sujets-dieu-qadar";
import { sujetsDieuQadar2 } from "./sujets-dieu-qadar-2";
import { sujetsDieuUluhiyya } from "./sujets-dieu-uluhiyya";
import { sujetsSpiritualiteGeneralites } from "./sujets-spiritualite-generalites";
import { sujetsSpiritualiteDhikr } from "./sujets-spiritualite-dhikr";
import { sujetsSpiritualiteIntention } from "./sujets-spiritualite-intention";
import { sujetsSpiritualiteCoeur } from "./sujets-spiritualite-coeur";
import { sujetsPedagogieFacultes } from "./sujets-pedagogie-facultes";
import { sujetsPedagogieEtude } from "./sujets-pedagogie-etude";
import { sujetsInterpretationA1 } from "./sujets-interpretation-a1";
import { sujetsInterpretationA2 } from "./sujets-interpretation-a2";
import { sujetsInterpretationB } from "./sujets-interpretation-b";
import { sujetsInterpretationA3 } from "./sujets-interpretation-a3";
import { sujetsInterpretationB2 } from "./sujets-interpretation-b2";
import { sujetsInterpretationC2 } from "./sujets-interpretation-c2";
import { sujetsInterpretationC } from "./sujets-interpretation-c";
import { sujetsLangueA } from "./sujets-langue-a";
import { sujetsLangueB } from "./sujets-langue-b";
import { sujetsLangueC } from "./sujets-langue-c";
import { sujetsCoranA } from "./sujets-coran-a";
import { sujetsCoranB } from "./sujets-coran-b";

export { slugifySujet };
export type { Sujet, SujetBlock, SchemaNode };

/**
 * Développements longs. Ajoutez ici une entrée par sujet : versets, images,
 * sous-titres, citations. La clé est le slug généré depuis le titre du sommaire.
 */
const sujetsBase: Sujet[] = [

  {
    slug: slugifySujet("« Allāh » est le nom, en arabe, de Celui qui crée toute chose"),
    title: "« Allāh » est le nom, en arabe, de Celui qui crée toute chose",
    arabic: "الله",
    intro:
      "Tout d’abord, il faut savoir que se demander qui est Allah est une question que nous devrions tous nous poser. On pense souvent, par intuition, qu’elle est simple, logique, pourtant, elle se révèle en réalité bien plus technique et d’une richesse plus profonde. C’est ce que nous allons explorer ensemble dans cet article.\n\nAvant toute discussion sur les attributs, la providence ou la Loi, il faut s'entendre sur ce que désigne le mot « Allāh ». Ce n'est ni une divinité ethnique, ni un concept philosophique parmi d'autres : c'est le nom propre, dans la langue arabe, de Celui qui donne l'être à toute chose.\u00a0",
    body: [
      { type: "h2", text: "Un nom propre, non un nom commun" },
      {
        type: "p",
        text: "En arabe, ilāh (إله) est un nom commun : « une divinité », ce qui est adoré. Allāh (الله) en est la forme déterminée et unique : la Divinité, celle dont l'existence ne dépend de rien. La langue elle-même distingue donc l'objet d'adoration en général de Celui qui, seul, la mérite.",
      },
      {
        type: "p",
        text: "C'est pourquoi le mot ne prend ni féminin ni pluriel. On dit ālihah (آلهة) pour « des divinités », jamais pour Lui. Cette irrégularité grammaticale n'est pas un accident : elle inscrit l'unicité dans la structure même du mot.",
      },
      {
        type: "verse",
        arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ",
        translation: "Dis : Lui, Allāh, est Un. Allāh est al-Ṣamad, Celui dont tout dépend et qui ne dépend de rien.",
        reference: "Coran, al-Ikhlāṣ, 112:1-2",
      },
      { type: "h2", text: "Contexte" },
      {
        type: "p",
        text: "Imagine-toi 1 400 ans en arrière. À cette époque, il y avait des idolâtres, ceux qui adoraient des statues, à La Mecque. Ils étaient bien plus nombreux que les musulmans et adoraient plusieurs divinités matin, midi et soir. Puis un jour, l’un d’eux vient vers toi et te dit :",
      },
      {
        type: "quote",
        text: "« Hé, toi, ta divinité, elle ressemble à quoi ? Nous, on sait à quoi ressemblent les nôtres, mais la tienne, elle ressemble à qui ? On n’a pas de statue d’elle. »",
      },
      {
        type: "p",
        text: "Que répondrais-tu ? Tu serais bloqué. Eh bien, c’est ce qu’a vécu le Prophète, paix et salut sur lui. Au moment où on lui a posé cette question, certains savants disent même qu’il est devenu rouge de colère. C’est alors qu’Allah a fait descendre les versets 1 et 2 de la sourate Al-Ikhlâs. Si tu regardes bien, elle commence par : « Dis » ; c’est Allah qui lui ordonne de répondre ainsi ( la sourate ikhlass ). Ils disaient également : « Qui a créé Allah ? » Le Prophète, paix et salut sur lui, s’est alors mis en colère, mais les versets de cette sourate ont apaisé le Messager.",
      },
      {
        type: "quote",
        text: "حدثنا ابن حميد، قال: ثنا سلمة، قال: ثني ابن إسحاق، عن محمد، عن سعيد، قال: أتى رهط من اليهود النبي ﷺ، فقالوا: يا محمد هذا الله خلق الخلق، **فمن خلقه؟** **فغضب النبيّ ﷺ حتى انتُقِع لونه**، ثم ساورهم غضبا لربه، فجاءه جبريل عليه السلام فسكنه، وقال: اخفض عليك جناحك يا محمد، وجاءه من الله جواب ما سألوه عنه. قال: \" يقول الله: **﴿قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ﴾** \" فلما تلا عليهم النبي ﷺ، قالوا: **صف لنا ربك كيف خلقه، وكيف عضده، وكيف ذراعه**، فغضب النبيّ ﷺ أشدّ من غضبه الأول، وساورهم غضبا، فأتاه جبريل فقال له مثل مقالته، وأتاه بجواب ما سألوه عنه: **﴿وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ وَالأرْضُ جَمِيعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ وَالسَّماوَاتُ مَطْوِيَّاتٌ بِيَمِينِهِ سُبْحَانَهُ وَتَعَالَى عَمَّا يُشْرِكُونَ﴾** .\n\nIbn Humayd nous a rapporté, disant : Salama nous a rapporté, disant : Ibn Ishaq m'a rapporté, d'après Muhammad, d'après Sa'id, qui a dit : Un groupe de Juifs est venu voir le Prophète ﷺ et ils ont dit : « Ô Muhammad, **voici qu'Allah a créé la création, mais qui L'a créé ?** » Le Prophète ﷺ **s'est alors mis en colère au point que la couleur de son visage en a changé**, puis il s'est élancé vers eux avec véhémence, pris de colère pour son Seigneur. Gabriel (paix sur lui) est alors venu à lui pour le apaiser et lui a dit : « Sois indulgent et doux, ô Muhammad. » Et il lui a apporté de la part d'Allah la réponse à ce qu'ils lui avaient demandé. Il a dit : « Allah dit : **﴿Dis : Il est Allah, Unique. Allah, Le Seul à être imploré pour ce que l'on désire. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui.﴾** » Lorsque le Prophète ﷺ leur eut récité cela, ils dirent : « **Décris-nous ton Seigneur : comment est Sa création, comment est Son bras et comment est Son avant-bras ?** » Le Prophète ﷺ s'est alors mis dans une colère encore plus intense que la première fois, et il s'est élancé vers eux avec véhémence. Gabriel est alors venu à lui, lui a répété les mêmes paroles, et lui a apporté la réponse à ce qu'ils lui avaient demandé : **﴿Ils n'ont pas estimé Allah à Sa juste valeur, alors que la terre tout entière sera Sa poignée au Jour de la Résurrection, et que les cieux seront déployés dans Sa main droite. Gloire à Lui ! Il est bien au-dessus de ce qu'ils Lui associent !﴾**.",
        source: "Tafsīr al-Tabarī, sourate al-Ikhlāṣ",
      },
      {

        type: "verse",
        arabic: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ لَيَقُولُنَّ ٱللَّهُ",
        translation: "Et si tu leur demandes qui a créé les cieux et la terre, ils diront assurément : Allāh.",
        reference: "Coran, Luqmān, 31:25",
      },
      {
        type: "p",
        text: "Le nom \"Allah\" est celui qui englobe tous les autres Noms c’est précisément pour cette raison qu’il est utilisé dans le verset ci-dessous. En réalité, les polythéistes reconnaissaient déjà qu'Allah est le Créateur des cieux et de la terre. Cependant, ils Lui associaient d'autres entités comme des divinités de la guerre ou de la subsistance une pratique qu'Allah condamne fermement.",
      },
      { type: "noms-schema" },

      { type: "h2", text: "Ce que le nom n'est pas" },
      {
        type: "list",
        items: [
          "Ce n'est pas une traduction : « Allāh » n'est pas le nom d'un dieu concurrent de « Dieu », c'est le mot arabe pour Dieu.",
          "Ce n'est pas un nom réservé aux musulmans : les chrétiens et juifs arabophones l'emploient dans leurs liturgies depuis des siècles.",
          "Ce n'est pas un nom dérivé d'une tribu, d'un lieu ou d'un astre.",
        ],
      },
      {
        type: "quote",
        text: "Le nom Allāh est celui auquel tous les autres noms se rapportent ; les quatre-vingt-dix-neuf lui sont attribués, et il n'est attribué à aucun.",
        source: "Formulation classique des commentateurs",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Si ce nom désigne Celui qui crée toute chose, alors aucune créature ne peut partager avec Lui cette fonction. C’est pourquoi cette précision de sens n’est pas seulement une question de vocabulaire : elle engage directement la compréhension de la foi. De cette clarification lexicale découlent en effet l’invocation, la confiance, la crainte révérencielle et l’espérance. Ainsi, un point de grammaire devient aussi un point de croyance, car bien distinguer les mots, c’est aussi mieux saisir le sens du divin.\n\n\nLe nom « Allah » est le nom principal par lequel est désignée Sa Majesté. Il est souvent employé dans des contextes où Sa grandeur apparaît de manière éclatante, notamment lorsqu’il est rappelé que les cieux et la terre Lui appartiennent. Rien de tout cela n’existe au hasard ni sans dessein : la création relève de Sa volonté, et l’homme lui-même n’est qu’un dépositaire dans cet ordre parfait. Nous Lui appartenons et c’est vers Lui que nous retournerons.",
      },
      {
        type: "verse",
        arabic:
          "ٱللَّهِ ٱلَّذِى **لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ** ۗ وَوَيْلٌ لِّلْكَٰفِرِينَ مِنْ عَذَابٍ شَدِيدٍ",
        translation:
          "Allāh, **à qui appartient tout ce qui est dans les cieux et tout ce qui est sur la terre**. Et malheur aux mécréants, pour un dur châtiment.",
        reference: "Coran, Ibrāhīm, 14:2",
      },
      {
        type: "audio",
        src: "/__l5e/assets-v1/c0a2c43a-b307-4215-a59b-b56e3136c20d/enregistrement-allah.m4a",
        title: "ÉCOUTER LE COMMENTAIRE DE SIDI",
        caption: "Enregistrement audio du développement ci-dessus.",
      },
    ],
  },
  {
    slug: slugifySujet("Croire en Dieu est naturel à l'homme"),
    title: "Croire en Dieu est naturel à l'homme",
    arabic: "الفطرة",
    intro:
      "On présente souvent la foi comme une chose apprise, transmise, presque imposée de l’extérieur. Pourtant, avant tout enseignement, avant toute culture, il existe en l’homme une disposition première : une inclination silencieuse qui le pousse à reconnaître son Créateur.\n\nCette disposition, la tradition islamique la nomme la fitra (الفطرة). Comprendre ce mot, c’est comprendre pourquoi la foi n’est pas un ajout à la nature humaine, mais un retour à elle.\u00a0",
    body: [
      { type: "h2", text: "Qu’est-ce que la fitra ?" },
      {
        type: "p",
        text: "Le mot fitra vient de la racine arabe f-t-r (ف ط ر), qui signifie « fendre », « ouvrir », et par extension « créer à partir de rien », inaugurer une forme. De la même racine vient le nom divin **Fātir**, « Celui qui crée en donnant une forme première ». La fitra désigne donc l’état originel dans lequel l’être humain est façonné : une nature saine, orientée vers la reconnaissance de l’Unique.",
      },
      {
        type: "p",
        text: "Il ne s’agit pas d’un savoir déjà constitué, ni d’un catalogue de croyances gravé dans l’esprit. Il s’agit d’une **orientation** : comme l’œil est fait pour la lumière et l’oreille pour le son, le cœur est fait pour son Créateur. La révélation ne vient donc pas plaquer une doctrine étrangère sur l’homme ; elle réveille ce qui, en lui, dormait.",
      },
      {
        type: "verse",
        arabic:
          "فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا ۚ **فِطْرَتَ ٱللَّهِ ٱلَّتِى فَطَرَ ٱلنَّاسَ عَلَيْهَا** ۚ لَا تَبْدِيلَ لِخَلْقِ ٱللَّهِ ۚ ذَٰلِكَ ٱلدِّينُ ٱلْقَيِّمُ وَلَٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
        translation:
          "Dirige tout ton être vers la religion en pur monothéiste : **telle est la nature (fitra) selon laquelle Allāh a façonné les hommes**. Il n’y a pas de changement à la création d’Allāh. Voilà la religion droite ; mais la plupart des gens ne savent pas.",
        reference: "Coran, al-Rūm, 30:30",
      },
      { type: "h2", text: "Le témoignage antérieur" },
      {
        type: "p",
        text: "Le Quran évoque un engagement primordial : avant même l’histoire, les âmes ont été appelées à témoigner. Ce récit n’est pas un simple récit du passé ; il explique pourquoi, aujourd’hui encore, nul ne peut prétendre n’avoir jamais entendu parler de son Seigneur.",
      },
      {
        type: "verse",
        arabic:
          "وَإِذْ أَخَذَ رَبُّكَ مِنۢ بَنِىٓ ءَادَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰٓ أَنفُسِهِمْ **أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا۟ بَلَىٰ شَهِدْنَا**",
        translation:
          "Et quand ton Seigneur tira une descendance des reins des fils d’Adam et les fit témoigner contre eux-mêmes : **« Ne suis-Je pas votre Seigneur ? » Ils répondirent : « Mais si, nous en témoignons. »**",
        reference: "Coran, al-Aʿrāf, 7:172",
      },
      {
        type: "quote",
        text: "فَقَالَ قَوْمٌ: مَعْنَى الْآيَةِ أَنَّ **اللَّهَ تَعَالَى أَخْرَجَ مِنْ ظُهُورِ بني آدم بعضهم من بعض**. قالوا: معنى \"**أَشْهَدَهُمْ عَلى أَنْفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ**\" **دَلَّهُمْ بِخَلْقِهِ عَلَى توحيده**، لأن كل بالغ يعلم ضرور **أَنَّ لَهُ رَبًّا وَاحِدًا**. \"**أَلَسْتُ بِرَبِّكُمْ**\" أَيْ قَالَ. فَقَامَ ذَلِكَ مَقَامَ **الْإِشْهَادِ عَلَيْهِمْ**، وَ**الْإِقْرَارِ مِنْهُمْ**، كَمَا قَالَ تَعَالَى فِي **السَّمَاوَاتِ وَالْأَرْضِ**: \"**قالَتا أَتَيْنا طائِعِينَ**\". ذَهَبَ إِلَى هَذَا **الْقَفَّالُ وَأَطْنَبَ**.\n\nUn groupe de savants a dit : le sens du verset est que **Allah**, exalté soit-Il, a **fait sortir les fils d'Adam des reins les uns des autres**. Selon eux, le sens de « **Il les fit témoigner sur eux-mêmes** : \"**Ne suis-Je pas votre Seigneur ?**\" » est qu'**Il leur a montré, par Sa création, Son unicité** — car tout être parvenu à maturité sait nécessairement qu'**il a un Seigneur unique**. « **Ne suis-Je pas votre Seigneur ?** », c'est-à-dire : **Il le leur dit** (à travers ce signe). Cela tient alors lieu de **témoignage exigé d'eux** et de **reconnaissance de leur part** — de la même manière que le Très-Haut dit à propos des **cieux et de la terre** : « **Elles dirent : \"Nous venons de plein gré.\"** » C'est la position d'**al-Qaffâl**, qu'il a **longuement développée**.",
        source: "Tafsir de Al-Qurtubi",
      },
      {
        type: "p",
        text: "Les commentateurs expliquent que ce témoignage se prolonge dans la conscience de chacun : il ne demeure pas comme un souvenir précis, mais comme une **empreinte**. C’est cette empreinte qui explique le trouble de l’homme devant l’immensité du ciel, son besoin de sens, et cet appel intérieur qui surgit lorsque tous les appuis s’effondrent.",
      },
      { type: "h2", text: "Le hadīth de la fitra" },
      {
        type: "quote",
        text: "**كُلُّ مَوْلُودٍ يُولَدُ عَلَى الْفِطْرَةِ**، فَأَبَوَاهُ يُهَوِّدَانِهِ أَوْ يُنَصِّرَانِهِ أَوْ يُمَجِّسَانِهِ، كَمَثَلِ الْبَهِيمَةِ تُنْتَجُ الْبَهِيمَةَ، هَلْ تَرَى فِيهَا جَدْعَاءَ؟\n\n**Tout nouveau-né naît selon la fitra** ; ce sont ensuite ses parents qui en font un juif, un chrétien ou un mazdéen, à l’image de la bête qui met bas une bête intacte : y voyez-vous une oreille coupée ?",
        source: "Rapporté par al-Bukhārī et Muslim, d’après Abū Hurayra",
      },
      {
        type: "p",
        text: "L’image est saisissante : l’animal naît entier, et c’est la main de l’homme qui vient marquer, entailler, modifier. De même, l’âme naît droite, et ce sont les influences extérieures éducation, milieu, passions, habitudes qui viennent la détourner. Le mal n’est donc pas premier dans l’homme : il est **acquis**.",
      },
      {
        type: "p",
        text: "Cela change tout dans notre manière de considérer autrui. Celui qui ne croit pas n’est pas un être d’une autre espèce : il est un homme dont la fitra a été recouverte. Et ce qui est recouvert peut être **dévoilé**\u00a0ce mot, en arabe, est précisément celui qu’on emploie pour la mécréance, kufr, qui signifie littéralement « couvrir ». C’est pourquoi il ne faut pas abandonner une personne qui ne croit pas, mais au contraire l’aider avec patience, bienveillance et sagesse à s’orienter vers la vérité. Chacun peut traverser des moments d’égarement ou d’hésitation, et il est souvent plus utile d’accompagner que de juger. Le rôle du croyant est alors de tendre la main, d’éclairer le chemin et d’encourager sans brusquer.\u00a0\n\n\nAl-Qurtubî écrit que la fitra sur laquelle l'être humain naît, ce n'est pas connaître Allah au sens d'avoir conscience de ce que sont la foi et l'incroyance, ni au sens d'avoir conscience de ce qu'est la croyance du cœur, son expression par la langue et sa manifestation par les actes.\nCette fit'ra, c'est la prédisposition qu'a l'être humain, dès sa naissance, à aspirer à Dieu et à Le reconnaître, au fil de son développement\u00a0",
      },
      { type: "h2", text: "Ce qui recouvre la fitra" },
      {
        type: "list",
        items: [
          "L’habitude : ce que l’on répète sans réfléchir finit par tenir lieu de vérité.",
          "L’imitation aveugle du milieu, qui remplace la réflexion et l'étude.",
          "L’attachement excessif au monde, qui sature le cœur et étouffe l’écoute intérieure.",
          "L’orgueil, qui refuse de devoir quelque chose à plus grand que soi.",
          "La distraction permanente, qui empêche l’homme de se retrouver seul avec lui-même.",
        ],
      },
      {
        type: "p",
        text: "Aucune de ces causes n’est une réfutation de la foi : ce sont des **voiles**, non des arguments. C’est pourquoi la voie islamique insiste tant sur le silence, la méditation de la création, la prière nocturne et le rappel : autant de moyens de retirer, une couche après l’autre, ce qui a été déposé sur la nature première.",
      },
      { type: "h2", text: "Raison et fitra ne s’opposent pas" },
      {
        type: "p",
        text: "Dans la théologie mālikite, la fitra n’est pas un sentiment vague opposé à la raison. Elle est ce qui rend la raison **disponible** à l’évidence. La raison examine, ordonne, démontre ; la fitra reconnaît. L’une est le chemin, l’autre est l’élan qui pousse à le prendre.",
      },
      {
        type: "verse",
        arabic:
          "**أَفِى ٱللَّهِ شَكٌّ فَاطِرِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ**",
        translation:
          "**Y a-t-il un doute au sujet d’Allāh, Créateur (Fātir) des cieux et de la terre ?**",
        reference: "Coran, Ibrāhīm, 14:10",
      },
      {
        type: "p",
        text: "Remarque la construction du verset : il n’argumente pas d’abord, il **interroge**. C’est le propre de ce qui s’adresse à la fitra : on ne démontre pas la lumière à un œil ouvert, on lui demande simplement de regarder.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Croire n’est donc pas un effort contre-nature : c’est le retour de l’homme à son point d’origine. Ce que la révélation apporte, ce n’est pas une greffe, mais une confirmation ; elle nomme et précise ce que le cœur pressentait sans pouvoir le dire.\n\nAinsi, celui qui cherche sincèrement ne part jamais de zéro : il retrouve. Et celui qui s’éloigne ne devient pas neutre : il s’ajoute des voiles. Entre les deux, il n’y a pas seulement une question d’idées, mais une question de **purification** — car la fiṭra ne se démontre pas, elle se dégage.",
      },
      {
        type: "audio",
        src: "/__l5e/assets-v1/5b035d88-5d9e-4b6f-a1b0-370a39822408/enregistrement-fitra.m4a",
        title: "ÉCOUTER LE COMMENTAIRE DE SIDI",
        caption: "Enregistrement audio du développement ci-dessus.",
      },
    ],
  },
];

export const sujets: Sujet[] = [
  ...sujetsBase,
  ...sujetsDieuGeneralites,
  ...sujetsDieuAttributs,
  ...sujetsDieuAttributs2,
  ...sujetsDieuNoms,
  ...sujetsDieuQadar,
  ...sujetsDieuQadar2,
  ...sujetsDieuUluhiyya,
  ...sujetsSpiritualiteGeneralites,
  ...sujetsSpiritualiteDhikr,
  ...sujetsSpiritualiteIntention,
  ...sujetsSpiritualiteCoeur,
  ...sujetsPedagogieFacultes,
  ...sujetsPedagogieEtude,
  ...sujetsInterpretationA1,
  ...sujetsInterpretationA2,
  ...sujetsInterpretationB,
  ...sujetsInterpretationC,
  ...sujetsInterpretationC2,
  ...sujetsInterpretationB2,
  ...sujetsInterpretationA3,
  ...sujetsLangueA,
  ...sujetsLangueB,
  ...sujetsLangueC,
  ...sujetsCoranA,
  ...sujetsCoranB,
];

const sujetBySlug = new Map<string, Sujet>(sujets.map((s) => [s.slug, s]));


export function getSujet(slug: string): Sujet | undefined {
  return sujetBySlug.get(slug);
}

export type SujetLocation = {
  entry: IndexEntry;
  chapter: IndexChapter;
  groupLabel: string;
  slug: string;
};

export const sujetIndex: SujetLocation[] = sommaire.flatMap((chapter) =>
  chapter.groups.flatMap((group) =>
    group.entries.map((entry) => ({
      entry,
      chapter,
      groupLabel: group.label,
      slug: slugifySujet(entry.title),
    })),
  ),
);

export function findSujetLocation(slug: string): SujetLocation | undefined {
  return sujetIndex.find((l) => l.slug === slug);
}
