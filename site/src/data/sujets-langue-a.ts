import { slugifySujet, type Sujet } from "./sujet-core";

/** La langue arabe du Coran : champs sémantiques des mots clés. */
export const sujetsLangueA: Sujet[] = [
  {
    slug: slugifySujet("Sens propre et sens figuré"),
    title: "Sens propre et sens figuré",
    arabic: "الحقيقة والمجاز",
    intro:
      "Tout mot n'est pas employé de la même façon dans toutes les phrases. Le Coran, révélé dans une langue arabe d'une richesse rhétorique immense, use aussi bien du **sens propre** que du **sens figuré** — et confondre les deux a produit certaines des plus graves déviations doctrinales de l'histoire islamique.",
    body: [
      { type: "h2", text: "Deux notions à distinguer avec soin" },
      {
        type: "lexique",
        root: "ح ق ق",
        transliteration: "ḥ-q-q",
        sense: "Ce qui est établi, ferme, conforme à la réalité",
        derives: [
          { word: "ḥaqīqa", arabic: "حقيقة", gloss: "le sens propre, celui posé à l'origine pour désigner une chose" },
          { word: "ḥaqq", arabic: "حق", gloss: "le vrai, le droit, ce qui est fondé" },
          { word: "taḥqīq", arabic: "تحقيق", gloss: "vérification, établissement d'un fait" },
        ],
        note: "La ḥaqīqa n'est pas 'la vérité' au sens moderne : c'est l'usage premier et direct d'un mot.",
      },
      {
        type: "lexique",
        root: "ج و ز",
        transliteration: "j-w-z",
        sense: "Passer, traverser, aller au-delà",
        derives: [
          { word: "majāz", arabic: "مجاز", gloss: "le passage, d'où : l'emploi d'un mot au-delà de son sens premier" },
          { word: "jawāz", arabic: "جواز", gloss: "la permission, ce par quoi on peut passer" },
          { word: "ijtiyāz", arabic: "اجتياز", gloss: "le franchissement" },
        ],
        note: "Le majāz suppose qu'on quitte le sens d'origine vers un sens second, relié par une relation (ʿalāqa) et un indice (qarīna).",
      },
      {
        type: "p",
        text: "Les rhétoriciens définissent le sens propre comme l'usage d'un mot dans ce **pour quoi il a été posé** à l'origine dans la convention linguistique. Le sens figuré, lui, est l'usage d'un mot dans **autre chose** que ce pour quoi il a été posé, à condition qu'un indice (qarīna) empêche de comprendre le sens propre et qu'un lien logique relie les deux sens.",
      },
      {
        type: "p",
        text: "Personne ne conteste que l'arabe, comme toute langue, connaît des expressions imagées : « le village a demandé » pour « les gens du village ont demandé », ou « la main de Dieu est au-dessus de leurs mains » dans un serment d'allégeance humain. Le débat porte sur un point précis : **où placer la limite**, et qui a le droit de la déplacer.",
      },
      { type: "h2", text: "L'usage détourné du majāz" },
      {
        type: "p",
        text: "À partir du IVe siècle de l'hégire, certains théologiens ont systématisé la notion de majāz pour un usage bien particulier : dès qu'un verset attribuait à Allāh un attribut jugé gênant pour la raison — une main, une face, l'établissement sur le Trône — on déclarait le mot **figuré**, et on lui substituait un sens abstrait jugé plus conforme à la transcendance divine.",
      },
      {
        type: "verse",
        arabic: "وَٱسْتَوَىٰ عَلَى ٱلْعَرْشِ",
        translation: "Et **Il S'est établi sur le Trône**.",
        reference: "Coran, Ṭāhā, 20:5",
      },
      {
        type: "p",
        text: "Ibn Taymiyya a consacré des volumes entiers à démontrer que cette généralisation du majāz n'a **aucun fondement** chez les premiers linguistes arabes : la distinction ḥaqīqa/majāz elle-même, dans sa forme théorisée, est **postérieure** aux salaf, et son usage pour écarter les attributs divins est une innovation méthodologique, non une règle de langue neutre.",
      },
      {
        type: "quote",
        text: "قال شيخ الإسلام ابن تيمية رحمه الله: **«ولفظ المجاز لم يستعمله أحد من السلف، لا الصحابة ولا التابعون، ولا الأئمة المشهورون في الفقه والتفسير»**، أي في إثبات صفات الله تعالى.\n\nIbn Taymiyya, qu'Allāh lui fasse miséricorde, a dit : **« Le terme de majāz n'a été employé par aucun des salaf, ni les Compagnons, ni les Successeurs, ni les imams reconnus en fiqh et en tafsīr »**, dans le sens où on l'utilise aujourd'hui pour nier les attributs d'Allāh.",
        source: "Majmūʿ al-Fatāwā",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Ce qui distingue les deux usages",
        text: "Reconnaître qu'une expression humaine ordinaire est imagée (« le village a demandé ») ne pose aucun problème doctrinal. Décréter que **tout attribut divin gênant est figuré**, sans critère autre que la gêne ressentie, est une méthode arbitraire qui ouvre la porte à vider le texte de son sens.",
      },
      {
        type: "comparaison",
        title: "Deux usages du critère 'sens figuré'",
        columns: ["Usage linguistique ordinaire", "Usage théologique détourné"],
        rows: [
          { criterion: "Critère du figuré", cells: ["Impossibilité réelle du sens propre dans le contexte", "Gêne intellectuelle ou philosophique"] },
          { criterion: "Exemple", cells: ["« Demande au village » (Yūsuf, 12:82)", "« La main d'Allāh » réinterprétée en « la puissance »"] },
          { criterion: "Conséquence", cells: ["Aucune atteinte au sens du texte", "Négation du sens apparent voulu par le Législateur"] },
          { criterion: "Position des salaf", cells: ["Acceptée sans discussion", "Rejetée comme méthode de négation (taʿṭīl)"] },
        ],
      },
      { type: "h2", text: "La voie médiane des salaf" },
      {
        type: "p",
        text: "La position des salaf n'est pas de nier tout usage figuré en arabe — ce qui serait absurde et contredirait la langue elle-même — mais de refuser qu'on l'invoque **sans preuve** pour évacuer un sens que le texte impose naturellement. Le sens apparent (ẓāhir) d'un attribut divin doit être affirmé, tout en niant qu'il ressemble aux attributs des créatures, **sans en préciser le comment** (bi-lā kayf).",
      },
      {
        type: "balance",
        title: "Ce que dit et ne dit pas la voie des salaf",
        affirmLabel: "Ce qu'ils affirment",
        denyLabel: "Ce qu'ils nient",
        affirm: [
          "Le sens apparent du texte, tel que l'entendaient les premiers Arabes.",
          "La réalité de l'attribut, à la mesure d'Allāh.",
          "La possibilité linguistique d'un sens figuré, quand la preuve l'exige.",
        ],
        deny: [
          "Toute ressemblance entre l'attribut divin et celui de la créature (tamthīl).",
          "Toute recherche du 'comment' de l'attribut (takyīf).",
          "Le recours systématique au figuré par simple gêne rationnelle (taʾwīl bāṭil).",
        ],
        caption: "Entre l'anthropomorphisme (tashbīh) et la négation (taʿṭīl), une troisième voie : l'affirmation sans façon ni comparaison.",
      },
      {
        type: "degres",
        title: "Comment déterminer si un emploi est figuré",
        arabic: "قرائن المجاز",
        degres: [
          { label: "Le sens propre est-il possible ?", note: "Si oui, on s'y tient sans chercher plus loin." },
          { label: "Y a-t-il un indice (qarīna) dans le contexte ?", note: "Un élément textuel, non une simple préférence intellectuelle." },
          { label: "Ce sens second est-il attesté chez les Arabes ?", note: "Sinon, ce n'est pas du majāz mais une invention." },
          { label: "Les salaf l'ont-ils compris ainsi ?", note: "Leur silence ou leur affirmation du sens apparent est décisif." },
        ],
        direction: "asc",
      },
      {
        type: "objection",
        objection: "Mais si l'on affirme systématiquement le sens propre, ne risque-t-on pas de tomber dans l'anthropomorphisme grossier ?",
        reponse:
          "Non, car affirmer le sens apparent d'un attribut n'implique nullement d'en affirmer la **modalité** créaturelle. Quand le Coran dit qu'Allāh entend et voit, le sens apparent est affirmé — mais Son ouïe et Sa vue ne ressemblent en rien à celles des créatures. Le rejet du tashbīh (l'assimilation) est un principe constant chez les salaf, tout comme le rejet du taʿṭīl (la négation). Les deux excès se corrigent mutuellement, non l'un par l'autre en sens unique.",
      },
      { type: "h2", text: "Une portée qui dépasse la théologie" },
      {
        type: "p",
        text: "Cette question n'est pas un débat abstrait réservé aux spécialistes : elle touche à la manière dont chaque musulman lit son Coran. Un texte peut être vidé de son autorité si l'on se permet, chaque fois qu'un sens dérange, de le déclarer figuré sans preuve. C'est pourquoi Ibn al-Qayyim insiste sur le fait que la porte du taʾwīl arbitraire, une fois ouverte, ne se referme plus : elle a servi à nier les attributs divins, puis la résurrection corporelle, puis jusqu'à des piliers entiers de la foi chez certains groupes égarés.",
      },
      {
        type: "p",
        text: "Al-Shinqīṭī, dans son tafsīr, rappelle systématiquement ce principe : chaque fois qu'un verset traite des attributs divins, il **s'arrête sur le sens apparent**, réfute les interprétations qui le détournent sans preuve, et renvoie à la méthode unanime des salaf. Cette rigueur méthodologique n'est pas un détail technique : c'est la garantie que le Coran reste ce qu'il est, la parole de Dieu, et non un texte que chaque école remodèle à sa convenance.",
      },
      {
        type: "verse",
        arabic: "لَيْسَ كَمِثْلِهِۦ شَىْءٌ ۖ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ",
        translation: "**Rien ne Lui ressemble**, et Il est Celui qui entend tout, qui voit tout.",
        reference: "Coran, al-Shūrā, 42:11",
      },
      {
        type: "p",
        text: "Ce verset unique résume la voie médiane : négation de la ressemblance dans sa première partie, affirmation des attributs dans sa seconde. Aucune des deux moitiés n'annule l'autre ; les opposer, c'est précisément l'erreur que ce chapitre cherche à dissiper.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La distinction entre sens propre et sens figuré appartient bien à la langue arabe, et personne ne la nie. Ce qui doit être rejeté, c'est son instrumentalisation pour vider le texte révélé de son sens naturel chaque fois qu'il dérange une doctrine préétablie. La règle des salaf demeure la plus sûre : s'en tenir à l'apparent du texte, sauf preuve contraignante, et ne jamais faire de la raison le juge suprême du langage divin.",
      },
    ],
  },
  {
    slug: slugifySujet("Ces quasi-synonymes qui n'en sont pas"),
    title: "Ces quasi-synonymes qui n'en sont pas",
    intro:
      "Le Coran n'emploie jamais deux mots pour dire exactement la même chose. Là où le lecteur pressé voit des **synonymes interchangeables**, la langue arabe classique révèle des nuances précises, souvent décisives pour comprendre un verset. Ce chapitre explore quelques-unes de ces paires trompeuses.",
    body: [
      { type: "h2", text: "Le principe : pas de synonymie parfaite" },
      {
        type: "p",
        text: "Une règle solidement établie chez les linguistes arabes anciens veut qu'il n'existe pas, dans la langue du Coran, deux mots strictement identiques par le sens. Même quand la traduction française est forcée d'employer le même terme pour deux mots arabes différents, l'original conserve une **nuance** que l'exégète a le devoir de restituer.",
      },
      {
        type: "p",
        text: "Ibn al-Qayyim consacre de longs développements, notamment dans Badāʾiʿ al-Fawāʾid, à ces paires que l'on croit synonymes et qui ne le sont pas : khawf et khashya, raḥma et raʾfa, hudā et rushd. Chacune de ces paires, examinée de près, révèle une différence de degré, de cause ou d'objet.",
      },
      { type: "h2", text: "Khawf et khashya : deux peurs" },
      {
        type: "lexique",
        root: "خ و ف",
        transliteration: "kh-w-f",
        sense: "La crainte devant un danger, connu ou supposé",
        derives: [
          { word: "khawf", arabic: "خوف", gloss: "la peur ordinaire, qui peut naître même sans grande connaissance de l'objet craint" },
          { word: "khāʾif", arabic: "خائف", gloss: "celui qui craint" },
          { word: "makhāfa", arabic: "مخافة", gloss: "l'appréhension" },
        ],
      },
      {
        type: "lexique",
        root: "خ ش ي",
        transliteration: "kh-sh-y",
        sense: "La crainte fondée sur une **connaissance profonde** de ce qui est craint",
        derives: [
          { word: "khashya", arabic: "خشية", gloss: "crainte révérencielle, née de la connaissance de la grandeur de l'objet craint" },
          { word: "khāshiʿ", arabic: "خاشع", gloss: "notion voisine : l'humilité qui accompagne cette crainte" },
        ],
        note: "C'est pourquoi le Coran réserve khashya aux savants : ils craignent Allāh parce qu'ils Le connaissent, non par simple appréhension.",
      },
      {
        type: "verse",
        arabic: "إِنَّمَا يَخْشَى ٱللَّهَ مِنْ عِبَادِهِ ٱلْعُلَمَٰٓؤُا۟",
        translation: "**Seuls craignent Allāh, parmi Ses serviteurs, les savants.**",
        reference: "Coran, Fāṭir, 35:28",
      },
      {
        type: "p",
        text: "Si khawf et khashya étaient de purs synonymes, ce verset n'aurait aucun sens particulier : n'importe qui peut avoir peur. Mais la khashya, crainte née d'une connaissance véritable de la majesté divine, est spécifiquement attribuée à ceux qui savent — ce qui donne au verset toute sa force.",
      },
      { type: "h2", text: "Raḥma et raʾfa : deux visages de la miséricorde" },
      {
        type: "spectre",
        title: "De la tendresse à la miséricorde agissante",
        left: "raʾfa — tendresse, douceur intense",
        right: "raḥma — miséricorde qui agit et pourvoit",
        markers: [
          { label: "raʾfa", position: 20, note: "Douceur du cœur, sensibilité à la souffrance d'autrui" },
          { label: "raḥma", position: 75, note: "Englobe la raʾfa et y ajoute le bienfait concret qui en découle" },
        ],
        caption: "Les deux mots apparaissent souvent ensemble dans le Coran, la raʾfa précédant la raḥma comme la disposition intérieure précède l'acte.",
      },
      {
        type: "verse",
        arabic: "لَقَدْ جَآءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ ... بِٱلْمُؤْمِنِينَ **رَءُوفٌ رَّحِيمٌ**",
        translation: "Un Messager est venu à vous, issu de vous-mêmes... envers les croyants, **plein de douceur et de miséricorde**.",
        reference: "Coran, al-Tawba, 9:128",
      },
      { type: "h2", text: "Hudā et rushd : orienter et affermir" },
      {
        type: "comparaison",
        title: "La guidée et la droiture",
        columns: ["Hudā (هدى)", "Rushd (رشد)"],
        rows: [
          { criterion: "Sens premier", cells: ["Indiquer le chemin, orienter", "Marcher droit sur ce chemin, y persévérer"] },
          { criterion: "Moment", cells: ["Le point de départ, l'appel", "La conduite continue, la maturité"] },
          { criterion: "Exemple coranique", cells: ["« Guide-nous sur le droit chemin » (al-Fātiḥa)", "« Nous lui avons donné sa droiture auparavant » (al-Anbiyāʾ, 21:51, à propos d'Abraham)"] },
        ],
      },
      {
        type: "p",
        text: "Confondre hudā et rushd conduirait à croire que la guidée initiale suffit à garantir une vie entière de droiture — alors que le Coran distingue nettement l'appel reçu de la persévérance qui doit suivre. Combien de personnes ont reçu la hudā sans jamais atteindre le rushd faute de constance !",
      },
      { type: "h2", text: "Autres paires à ne pas confondre" },
      {
        type: "list",
        items: [
          "**Qalb et fuʾād** : le cœur en général, et le cœur dans son mouvement, son agitation, sa combustion intérieure.",
          "**ʿIlm et maʿrifa** : la science établie et transmissible, et la connaissance intime, souvent expérientielle.",
          "**Ṣabr et taḥammul** : la patience volontaire et méritoire, et le simple fait de supporter sans forcément l'accepter intérieurement.",
          "**Qawl et kalām** : la parole en tant qu'énoncé, et la parole en tant que discours structuré et raisonné.",
        ],
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "La méthode d'Ibn al-Qayyim",
        text: "Pour chaque paire suspecte de synonymie, il examine systématiquement : les contextes où seul l'un des deux mots apparaît, les versets où les deux sont juxtaposés, et l'étymologie de chaque racine. C'est cette triple vérification qui permet d'établir la nuance sans la forcer artificiellement.",
      },
      {
        type: "objection",
        objection: "N'est-ce pas excessif de chercher une nuance derrière chaque mot ? La langue courante tolère bien des redondances.",
        reponse:
          "La langue courante, oui. Mais le Coran n'est pas un texte ordinaire : chaque choix lexical y est pesé, et le miracle de son style (iʿjāz) repose précisément sur cette précision inégalée. Quand deux mots proches apparaissent côte à côte dans un même verset — comme raʾfa et raḥma — l'absence de nuance rendrait la répétition inutile, ce qui contredit le principe même de l'éloquence coranique, où rien n'est superflu.",
      },
      { type: "h2", text: "Pourquoi cela importe pour la croyance" },
      {
        type: "p",
        text: "Ces nuances ne sont pas de simples curiosités philologiques. Elles touchent à la compréhension de versets fondamentaux sur la nature de la crainte due à Allāh, sur Sa miséricorde, sur les étapes de la guidée. Un croyant qui confond khawf et khashya risque de réduire toute sa religion à une peur superficielle, sans jamais atteindre la crainte révérencielle fondée sur la connaissance, qui est le fruit mûr de la foi.",
      },
      {
        type: "p",
        text: "De même, comprendre que la hudā n'est qu'un premier pas vers le rushd protège le croyant de la suffisance : recevoir la guidée, entrer dans l'islam, n'est pas une arrivée mais un commencement. Le Coran multiplie les invocations demandant la persévérance précisément parce que la guidée initiale ne garantit rien sans l'effort continu.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Traiter les mots du Coran comme de purs synonymes appauvrit le texte et prive le lecteur de significations que la langue arabe portait avec précision. Chercher la nuance entre khawf et khashya, entre raḥma et raʾfa, entre hudā et rushd, n'est pas un exercice de virtuosité linguistique : c'est une condition pour saisir ce que le Législateur a voulu dire, mot par mot, sans rien y ajouter ni en retrancher.",
      },
    ],
  },
  {
    slug: slugifySujet("Termes et formules récurrents : un glossaire de travail"),
    title: "Termes et formules récurrents : un glossaire de travail",
    intro:
      "Certains mots reviennent des centaines de fois dans le Coran, structurant sa rhétorique et son message. Sans un **glossaire de travail** solide, le lecteur risque de survoler ces termes sans en saisir la portée exacte. Ce chapitre en rassemble quelques-uns, indispensables à toute lecture sérieuse.",
    body: [
      { type: "h2", text: "Pourquoi un glossaire est nécessaire" },
      {
        type: "p",
        text: "Le Coran a été révélé « dans une langue arabe claire » (bi-lisānin ʿarabiyyin mubīn), mais claire ne veut pas dire simple à traduire. De nombreux termes coraniques n'ont pas d'équivalent exact en français, et leur traduction systématique par un seul mot appauvrit ou déforme le sens. Établir un glossaire de travail, c'est se donner les moyens de lire avec précision plutôt qu'avec approximation.",
      },
      { type: "h2", text: "Taqwā : bien plus que la 'piété'" },
      {
        type: "lexique",
        root: "و ق ي",
        transliteration: "w-q-y",
        sense: "Se protéger, se prémunir contre un mal",
        derives: [
          { word: "taqwā", arabic: "تقوى", gloss: "placer une protection entre soi et le châtiment d'Allāh, par l'obéissance" },
          { word: "muttaqī", arabic: "متقي", gloss: "celui qui se protège ainsi" },
          { word: "wiqāya", arabic: "وقاية", gloss: "la protection elle-même, au sens général" },
        ],
        note: "Traduire taqwā par 'piété' fait perdre l'image originelle : celle d'un bouclier dressé entre le serviteur et le mal, par la crainte d'Allāh.",
      },
      {
        type: "quote",
        text: "سُئل أُبيّ بن كعب رضي الله عنه عن التقوى فقال: **«هل أخذت طريقاً ذا شوك؟»** قال: نعم. قال: **«فما عملت؟»** قال: شمّرت واجتهدت. قال: **«فذلك التقوى».**\n\nOn interrogea Ubayy ibn Kaʿb, qu'Allāh l'agrée, sur la taqwā. Il demanda : **« As-tu déjà emprunté un chemin plein d'épines ? »** — « Oui », répondit-on. Il demanda : **« Qu'as-tu fait alors ? »** — « Je me suis retroussé et j'ai fait attention », fut la réponse. Il dit alors : **« Voilà la taqwā. »**",
        source: "Rapporté par al-Qurṭubī dans son tafsīr",
      },
      { type: "h2", text: "Fitna : bien plus qu'une 'tentation'" },
      {
        type: "lexique",
        root: "ف ت ن",
        transliteration: "f-t-n",
        sense: "Éprouver par le feu pour distinguer le bon métal du mauvais",
        derives: [
          { word: "fitna", arabic: "فتنة", gloss: "épreuve, mise à l'épreuve — pas nécessairement une tentation au sens moral" },
          { word: "maftūn", arabic: "مفتون", gloss: "celui qui a été éprouvé, ou séduit" },
          { word: "iftitān", arabic: "افتتان", gloss: "le fait de succomber à l'épreuve" },
        ],
        note: "Le sens originel vient de l'orfèvrerie : on 'éprouve' le métal au feu pour révéler sa pureté. La fitna coranique désigne aussi bien la richesse, les enfants, la persécution, que la discorde.",
      },
      {
        type: "spectre",
        title: "L'étendue du mot fitna",
        left: "épreuve neutre (richesse, enfants)",
        right: "discorde et persécution violente",
        markers: [
          { label: "Fitna des biens", position: 15, note: "« Vos biens et vos enfants ne sont qu'une fitna » (al-Anfāl, 8:28)" },
          { label: "Fitna de la mécréance imposée", position: 90, note: "« La fitna est plus grave que le meurtre » (al-Baqara, 2:191)" },
        ],
        caption: "Un même mot couvre un registre très large ; le contexte seul permet de préciser lequel est visé.",
      },
      { type: "h2", text: "Barzakh : l'entre-deux" },
      {
        type: "verse",
        arabic: "وَمِن وَرَآئِهِم **بَرْزَخٌ** إِلَىٰ يَوْمِ يُبْعَثُونَ",
        translation: "Et derrière eux se trouve **un isthme (barzakh)** jusqu'au jour où ils seront ressuscités.",
        reference: "Coran, al-Muʾminūn, 23:100",
      },
      {
        type: "p",
        text: "Le mot barzakh désigne, en arabe, une barrière ou une séparation entre deux choses — comme celle qui existe entre deux mers sans qu'elles se mêlent. Appliqué à la vie après la mort, il désigne cette **phase intermédiaire**, entre la mort et la résurrection, ni tout à fait ce monde ni encore l'au-delà définitif. Le terme est technique et n'a pas d'équivalent français exact.",
      },
      { type: "h2", text: "Ghayb : l'invisible, pas seulement 'le mystère'" },
      {
        type: "lexique",
        root: "غ ي ب",
        transliteration: "gh-y-b",
        sense: "Ce qui est absent, caché aux sens",
        derives: [
          { word: "ghayb", arabic: "غيب", gloss: "l'invisible — tout ce qui échappe à la perception directe" },
          { word: "ghāʾib", arabic: "غائب", gloss: "l'absent" },
          { word: "ghayāba", arabic: "غيابة", gloss: "le fond obscur d'un puits, par exemple (Yūsuf, 12:10)" },
        ],
        note: "Le ghayb inclut aussi bien des réalités absolues (Allāh, les anges, le Jour dernier) que des réalités relatives (ce qui est caché à une personne mais connu d'une autre).",
      },
      { type: "h2", text: "Autres formules techniques à retenir" },
      {
        type: "list",
        items: [
          "**Al-ʿālamīn** : les mondes, tout ce qui existe hormis Allāh — pas seulement 'l'univers' au sens moderne.",
          "**Al-nafs** : l'âme, le soi ; un terme englobant qui recouvre à la fois le corps, la personne, et l'entité spirituelle selon le contexte.",
          "**Al-amāna** : le dépôt de confiance — la responsabilité morale offerte aux cieux, à la terre, aux montagnes, et acceptée par l'homme seul (al-Aḥzāb, 33:72).",
          "**Al-mīthāq** : le pacte, l'engagement solennel — notamment celui pris de toute l'humanité avant sa naissance terrestre (al-Aʿrāf, 7:172).",
        ],
      },
      {
        type: "degres",
        title: "Comment constituer soi-même son glossaire",
        degres: [
          { label: "Repérer les termes qui reviennent", note: "Les mots employés plus de vingt fois méritent une attention particulière." },
          { label: "Recenser tous leurs emplois", note: "À l'aide d'un muʿjam mufahras (concordance coranique)." },
          { label: "Vérifier la racine et le sens premier", note: "Dans un dictionnaire de langue classique, comme Lisān al-ʿArab." },
          { label: "Confronter avec le tafsīr des salaf", note: "Pour éviter toute reconstruction personnelle du sens." },
        ],
        direction: "asc",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un outil, pas une fin",
        text: "Un glossaire de travail n'a de valeur que s'il reste ouvert à révision, nourri par la lecture continue du tafsīr des salaf. Il ne remplace jamais le recours aux commentaires établis ; il en facilite l'accès et la mémorisation.",
      },
      {
        type: "objection",
        objection: "Cette exigence de précision terminologique n'est-elle pas réservée aux spécialistes de l'arabe ?",
        reponse:
          "Le lecteur non arabophone peut tout à fait bâtir un glossaire personnel à partir de traductions annotées et de tafsīrs fiables, sans maîtriser la grammaire arabe dans le détail. L'essentiel est de ne jamais s'arrêter à une seule traduction française d'un terme technique, et de vérifier, pour les mots clés, ce que disent les commentateurs reconnus sur leur sens exact.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Un glossaire de travail n'est pas un luxe d'érudit : c'est une nécessité pour quiconque veut lire le Coran avec exactitude plutôt qu'avec approximation. Taqwā, fitna, barzakh, ghayb, amāna, mīthāq — chacun de ces mots porte un monde de sens que la traduction la plus soignée ne peut qu'effleurer. S'habituer à interroger les mots avant de conclure sur les versets est le premier réflexe d'une lecture rigoureuse.",
      },
    ],
  },
  {
    slug: slugifySujet("Ẓulm : mettre une chose ailleurs qu'à sa place"),
    title: "Ẓulm : mettre une chose ailleurs qu'à sa place",
    arabic: "الظلم",
    intro:
      "Le mot ẓulm est habituellement traduit par « injustice » ou « oppression », mais son sens racinaire est plus large et plus profond : il désigne le fait de **placer une chose ailleurs qu'à sa place naturelle**. Cette définition, retenue par les linguistes et les exégètes, éclaire des usages coraniques qui semblent d'abord surprenants.",
    body: [
      { type: "h2", text: "La racine et son image" },
      {
        type: "lexique",
        root: "ظ ل م",
        transliteration: "ẓ-l-m",
        sense: "Placer une chose ailleurs qu'à sa place propre ; dépasser sa limite",
        derives: [
          { word: "ẓulm", arabic: "ظلم", gloss: "l'injustice, en tant que déplacement d'une chose hors de sa juste place" },
          { word: "ẓulma", arabic: "ظلمة", gloss: "l'obscurité — même racine : l'absence de lumière à sa place normale" },
          { word: "ẓālim", arabic: "ظالم", gloss: "celui qui commet le ẓulm" },
          { word: "maẓlūm", arabic: "مظلوم", gloss: "celui qui en est victime" },
        ],
        note: "Al-Rāghib al-Iṣfahānī définit le ẓulm comme « mettre une chose là où elle ne doit pas être, en la déplaçant, en l'amoindrissant ou en l'ajoutant au mauvais endroit ».",
      },
      {
        type: "p",
        text: "Cette définition explique pourquoi la même racine donne à la fois « injustice » et « obscurité » : les ténèbres, elles aussi, sont l'absence de la lumière **à l'endroit où elle devrait être**. Le ẓulm est donc, dans son fond, un désordre, une chose sortie de son ordre juste — que ce soit une action, une croyance ou un phénomène naturel.",
      },
      { type: "h2", text: "Les trois degrés du ẓulm selon Ibn al-Qayyim" },
      {
        type: "degres",
        title: "Les trois types de ẓulm",
        arabic: "أنواع الظلم الثلاثة",
        degres: [
          { label: "Ẓulm envers Allāh", arabic: "ظلم العبد بينه وبين ربه", note: "Le plus grave : lui associer des partenaires (shirk), Lui désobéir, nier Ses droits." },
          { label: "Ẓulm envers autrui", arabic: "ظلم العبد لغيره", note: "Porter atteinte au sang, aux biens ou à l'honneur d'un autre être humain." },
          { label: "Ẓulm envers soi-même", arabic: "ظلم العبد لنفسه", note: "Se nuire par le péché, en dehors même du droit d'autrui — le péché intime, la négligence." },
        ],
        direction: "desc",
      },
      {
        type: "verse",
        arabic: "**إِنَّ ٱلشِّرْكَ لَظُلْمٌ عَظِيمٌ**",
        translation: "**Certes, l'association [à Allāh] est une injustice immense.**",
        reference: "Coran, Luqmān, 31:13",
      },
      {
        type: "p",
        text: "Ce verset illustre parfaitement la définition première du mot : associer une créature à Allāh dans l'adoration, c'est **placer un droit divin ailleurs qu'à sa place** — l'attribuer à qui n'en est pas digne. C'est pourquoi le shirk est qualifié de ẓulm suprême : rien ne dérègle plus profondément l'ordre des choses que de donner à une créature ce qui n'appartient qu'au Créateur.",
      },
      { type: "h2", text: "Le ẓulm envers soi-même" },
      {
        type: "verse",
        arabic: "وَمِنْهُم **ظَالِمٌ لِّنَفْسِهِۦ**",
        translation: "Et parmi eux il y a **celui qui est injuste envers lui-même**.",
        reference: "Coran, Fāṭir, 35:32",
      },
      {
        type: "p",
        text: "Ce verset désigne le croyant pécheur, négligent dans certaines de ses obligations, sans pour autant sortir de la foi. L'expression « injuste envers soi-même » montre que le péché, même quand il ne lèse directement personne d'autre, est un ẓulm : le pécheur **déplace** sa propre âme hors de la place que la droiture lui assignait, l'exposant au châtiment qu'elle ne méritait pas si elle était restée à sa juste place d'obéissance.",
      },
      {
        type: "comparaison",
        title: "Les trois types de ẓulm comparés",
        columns: ["Envers Allāh", "Envers autrui", "Envers soi-même"],
        rows: [
          { criterion: "Gravité", cells: ["Maximale — non pardonnée sans repentir (shirk)", "Grave — exige réparation ou pardon de la victime", "Variable — pardonnable par le repentir seul"] },
          { criterion: "Qui peut pardonner", cells: ["Allāh seul, si repentir sincère", "La victime, en plus d'Allāh", "Allāh seul"] },
          { criterion: "Exemple", cells: ["Shirk, mécréance", "Vol, calomnie, meurtre", "Péchés intimes, négligence des actes d'adoration"] },
        ],
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "Un piège de compréhension",
        text: "Réduire le ẓulm à l'injustice sociale, comme le fait souvent le discours contemporain, revient à **amputer** le mot de sa dimension la plus grave : l'injustice envers Allāh Lui-même, qui est le shirk. Un discours qui ne parle du ẓulm qu'en termes politiques ou sociaux inverse la hiérarchie coranique des priorités.",
      },
      { type: "h2", text: "Le ẓulm entre serviteurs : la mise en garde la plus sévère" },
      {
        type: "quote",
        text: "قال رسول الله صلى الله عليه وسلم: **«اتقوا الظلم فإن الظلم ظلمات يوم القيامة»**.\n\nLe Messager d'Allāh, sur lui la paix et le salut, a dit : **« Gardez-vous de l'injustice, car l'injustice sera des ténèbres au Jour de la Résurrection. »**",
        source: "Rapporté par Muslim, d'après Ibn ʿUmar",
      },
      {
        type: "p",
        text: "Ce hadith relie explicitement le ẓulm à la ẓulma, l'obscurité — confirmant le lien étymologique déjà relevé : l'injustice commise dans ce monde se traduira, le Jour de la Résurrection, par des ténèbres littérales entourant celui qui l'a commise. La langue et la révélation se rejoignent ici avec une cohérence remarquable.",
      },
      {
        type: "objection",
        objection: "Le hadith qudsī ne dit-il pas qu'Allāh S'est interdit le ẓulm à Lui-même ? Comment alors parler d'un « ẓulm envers Allāh » ?",
        reponse:
          "Il n'y a aucune contradiction : Allāh S'est interdit de commettre Lui-même l'injustice envers Ses créatures — Il ne diminue le droit de personne ni ne punit sans raison. Le « ẓulm envers Allāh » dont parlent les versets désigne l'injustice que **le serviteur commet envers Allāh**, en Lui refusant Son droit exclusif à l'adoration, non l'inverse. Ce sont deux directions opposées d'une même racine, et le contexte de chaque verset lève toute ambiguïté.",
      },
      { type: "h2", text: "La promesse faite aux opprimés" },
      {
        type: "p",
        text: "Le Coran multiplie les avertissements contre le ẓulm entre créatures et les promesses de secours en faveur de ses victimes. Cette insistance montre que si le ẓulm envers Allāh est le plus grave dans l'absolu, le ẓulm entre serviteurs est celui qu'Allāh a choisi de ne pas pardonner tant que la victime n'a pas obtenu réparation — soulignant la place centrale que la justice entre les hommes occupe dans l'ordre voulu par le Législateur.",
      },
      {
        type: "p",
        text: "Ibn Kathīr, commentant plusieurs versets sur le sort des injustes, rappelle que le délai accordé à l'oppresseur dans cette vie n'est jamais un signe d'impunité, mais un sursis qui aggrave sa charge s'il ne s'en repent pas. Cette vision empêche à la fois le désespoir de la victime et la fausse assurance de l'oppresseur.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Comprendre le ẓulm comme « mettre une chose ailleurs qu'à sa place » restitue au mot toute sa profondeur : il couvre le shirk, l'injustice sociale, et le péché intime, dans un même mouvement de désordre par rapport à l'ordre voulu par Allāh. Loin d'être une notion purement juridique ou politique, le ẓulm engage la relation du serviteur avec son Seigneur, avec ses semblables, et avec lui-même — trois plans que la langue arabe unit en un seul mot d'une richesse inégalée.",
      },
    ],
  },
  {
    slug: slugifySujet("Adhā et ḍarar : deux registres du préjudice"),
    title: "Adhā et ḍarar : deux registres du préjudice",
    arabic: "الأذى والضرر",
    intro:
      "Le vocabulaire coranique du préjudice est d'une précision remarquable. Deux mots reviennent souvent, presque comme des synonymes en traduction française : **adhā** et **ḍarar**. Pourtant, les linguistes et les fuqahāʾ distinguent nettement ces deux registres, dont la confusion peut fausser la compréhension de plusieurs règles juridiques et de plusieurs versets.",
    body: [
      { type: "h2", text: "Adhā : le préjudice léger, souvent supportable" },
      {
        type: "lexique",
        root: "أ ذ ي",
        transliteration: "ʾ-dh-y",
        sense: "Gêne, désagrément, mal léger",
        derives: [
          { word: "adhā", arabic: "أذى", gloss: "tort ou gêne, souvent supportable, qui n'atteint pas nécessairement l'essentiel" },
          { word: "īdhāʾ", arabic: "إيذاء", gloss: "l'action de causer ce tort" },
          { word: "muʾdhī", arabic: "مؤذي", gloss: "ce qui est nuisible sans être destructeur" },
        ],
        note: "L'adhā recouvre un spectre large : d'une simple parole blessante jusqu'à une persécution réelle, mais toujours en deçà de l'atteinte irréversible.",
      },
      { type: "h2", text: "Ḍarar : le préjudice qui atteint le fond" },
      {
        type: "lexique",
        root: "ض ر ر",
        transliteration: "ḍ-r-r",
        sense: "Dommage réel, atteinte à un intérêt essentiel",
        derives: [
          { word: "ḍarar", arabic: "ضرر", gloss: "le dommage, l'atteinte substantielle à un bien, à la santé, à la vie" },
          { word: "ḍarūra", arabic: "ضرورة", gloss: "la nécessité — ce sans quoi un dommage grave surviendrait" },
          { word: "muḍārr", arabic: "مضارّ", gloss: "celui qui cause délibérément un tel dommage" },
        ],
        note: "Le fiqh bâtit toute la théorie des maqāṣid (finalités) autour de la nécessité d'écarter le ḍarar, jugé plus grave et plus structurant que le simple adhā.",
      },
      {
        type: "spectre",
        title: "Du désagrément au dommage",
        left: "adhā — gêne supportable",
        right: "ḍarar — atteinte substantielle",
        markers: [
          { label: "Moquerie, médisance légère", position: 15 },
          { label: "Persécution verbale des premiers musulmans à La Mecque", position: 45, note: "Adhā important, mais sans atteinte à la vie" },
          { label: "Coups, blessures, spoliation", position: 75 },
          { label: "Meurtre, ruine totale", position: 98, note: "Ḍarar au sens le plus fort" },
        ],
        caption: "La frontière entre les deux registres n'est pas fixe : elle dépend du degré d'atteinte à un intérêt protégé (vie, biens, honneur, religion).",
      },
      { type: "h2", text: "Le verset qui distingue les deux notions" },
      {
        type: "verse",
        arabic: "لَن **يَضُرُّوكُمْ** إِلَّآ **أَذًى**",
        translation: "Ils ne pourront jamais **vous nuire** [gravement], sinon [par] **un simple tort**.",
        reference: "Coran, Āl ʿImrān, 3:111",
      },
      {
        type: "p",
        text: "Ce verset, parlant des ennemis des croyants, oppose explicitement les deux registres : la racine ḍ-r-r pour le dommage réel qui leur est refusé, et le mot adhā pour la gêne qu'ils pourront tout de même causer — par la parole, la calomnie, ou une persécution qui n'atteint pas le fondement de la communauté musulmane. La rhétorique du verset perdrait toute sa force si les deux mots étaient interchangeables.",
      },
      { type: "h2", text: "Application juridique : le principe « lā ḍarar wa-lā ḍirār »" },
      {
        type: "quote",
        text: "قال رسول الله صلى الله عليه وسلم: **«لا ضرر ولا ضرار»**.\n\nLe Messager d'Allāh, sur lui la paix et le salut, a dit : **« Point de dommage, ni de dommage réciproque. »**",
        source: "Rapporté par Ibn Mājah et Mālik dans al-Muwaṭṭaʾ, hadith authentifié par plusieurs voies",
      },
      {
        type: "p",
        text: "Ce hadith fonde l'une des règles majeures du fiqh (al-qawāʿid al-fiqhiyya) : « le dommage doit être écarté » (al-ḍarar yuzāl). Cette règle ne concerne pas le simple adhā, tolérable dans la vie sociale — on ne peut exiger l'absence de toute gêne entre les hommes — mais spécifiquement le ḍarar, l'atteinte substantielle qui appelle une intervention, y compris de l'autorité, pour la faire cesser.",
      },
      {
        type: "comparaison",
        title: "Conséquences juridiques de la distinction",
        columns: ["Adhā", "Ḍarar"],
        rows: [
          { criterion: "Obligation de réparation", cells: ["Pas systématique ; relève souvent de la patience et du pardon", "Obligatoire, y compris par voie judiciaire"] },
          { criterion: "Exemple type", cells: ["Une parole désobligeante d'un voisin", "Construire un mur qui prive le voisin de lumière et d'air"] },
          { criterion: "Réponse recommandée", cells: ["Patience (ṣabr), pardon, endurance pour la cause d'Allāh", "Recours, plainte légitime, intervention du juge si besoin"] },
        ],
      },
      { type: "h2", text: "Le devoir de patience face à l'adhā" },
      {
        type: "verse",
        arabic: "وَلَتَسْمَعُنَّ مِنَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ مِن قَبْلِكُمْ وَمِنَ ٱلَّذِينَ أَشْرَكُوٓا۟ **أَذًى كَثِيرًا** ۚ وَإِن **تَصْبِرُوا۟** وَتَتَّقُوا۟ فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ ٱلْأُمُورِ",
        translation:
          "Certes, vous entendrez, de la part de ceux à qui le Livre a été donné avant vous et de la part des associateurs, **beaucoup de tort**. Mais si vous **êtes endurants** et pieux, voilà bien la meilleure résolution à prendre.",
        reference: "Coran, Āl ʿImrān, 3:186",
      },
      {
        type: "p",
        text: "Ce verset associe explicitement l'adhā à la vertu de patience — jamais le ḍarar véritable n'est présenté comme une chose à simplement endurer sans réaction, car il touche à des droits que la sharīʿa protège activement. La différence de registre commande donc une différence de conduite : on endure le tort léger avec noblesse, on combat le dommage réel avec les moyens légitimes.",
      },
      {
        type: "focus",
        kind: "subtilite",
        title: "Un critère utile en pratique",
        text: "Face à une difficulté relationnelle, se demander si l'on est en présence d'un simple adhā — supportable, à endurer avec patience — ou d'un véritable ḍarar — qui appelle réparation ou recours — évite deux excès : la susceptibilité excessive devant toute gêne, et la passivité coupable devant une injustice réelle.",
      },
      {
        type: "objection",
        objection: "N'est-il pas parfois difficile de tracer la limite entre les deux, surtout dans des situations ambiguës ?",
        reponse:
          "Cette difficulté est réelle et c'est précisément pour cela que le fiqh a développé des critères objectifs — l'atteinte à la vie, aux biens, à l'honneur, à la religion ou à la raison, les cinq nécessités protégées (al-ḍarūriyyāt al-khams) — plutôt que de laisser chacun juger selon sa seule sensibilité. Un préjudice qui touche l'une de ces cinq nécessités relève du ḍarar ; ce qui reste en deçà, sans les affecter, demeure de l'ordre de l'adhā.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Distinguer adhā et ḍarar n'est pas un raffinement inutile : c'est une clé de lecture qui éclaire aussi bien les versets sur la patience des croyants face à la persécution que les règles juridiques protégeant les droits de chacun. Le musulman avisé apprend ainsi à endurer ce qui doit l'être avec noblesse, et à ne jamais tolérer, au nom d'une fausse patience, ce qui relève d'un dommage réel exigeant réparation.",
      },
    ],
  },
  {
    slug: slugifySujet("Kufr, fisq, ẓulm : trois termes et leurs degrés"),
    title: "Kufr, fisq, ẓulm : trois termes et leurs degrés",
    intro:
      "Trois mots reviennent constamment dans le Coran pour qualifier ceux qui s'écartent du droit chemin : **kufr**, **fisq** et **ẓulm**. Les employer indistinctement, comme s'ils étaient interchangeables, conduit à des jugements erronés — parfois d'une extrême gravité. Ce chapitre en précise les degrés et les rapports.",
    body: [
      { type: "h2", text: "Trois racines, trois nuances" },
      {
        type: "lexique",
        root: "ك ف ر",
        transliteration: "k-f-r",
        sense: "Couvrir, cacher — d'où : voiler la vérité, nier un bienfait ou une évidence",
        derives: [
          { word: "kufr", arabic: "كفر", gloss: "la mécréance, au sens fort : rejet ou occultation de la foi due" },
          { word: "kāfir", arabic: "كافر", gloss: "celui qui mécroit" },
          { word: "kaffāra", arabic: "كفارة", gloss: "l'expiation — qui 'couvre' le péché" },
        ],
        note: "Le fellah qui enterre la graine sous la terre est appelé kāfir en arabe archaïque : il la 'couvre'. L'image originelle éclaire le sens religieux : voiler délibérément une vérité manifeste.",
      },
      {
        type: "lexique",
        root: "ف س ق",
        transliteration: "f-s-q",
        sense: "Sortir de l'enveloppe, déborder",
        derives: [
          { word: "fisq", arabic: "فسق", gloss: "la transgression, le fait de sortir de l'obéissance sans nécessairement sortir de la foi" },
          { word: "fāsiq", arabic: "فاسق", gloss: "le transgresseur" },
        ],
        note: "Les Arabes disaient d'une datte qui a percé sa peau qu'elle a 'fasaqat' — elle en est sortie. Le fisq est donc une sortie hors de l'obéissance, sans être nécessairement une sortie de la religion.",
      },
      {
        type: "p",
        text: "Le ẓulm, déjà examiné, désigne plus largement le fait de placer une chose ailleurs qu'à sa place — et peut recouvrir le kufr, le fisq, ou un simple péché personnel selon le contexte. Ces trois mots ne sont donc pas de simples synonymes empilés pour l'effet rhétorique : ils désignent des réalités de gravité différente, parfois superposables, parfois distinctes.",
      },
      { type: "h2", text: "Le kufr : négation ou occultation de la vérité due" },
      {
        type: "verse",
        arabic: "وَمَن يَكْفُرْ بِٱلْإِيمَٰنِ فَقَدْ حَبِطَ عَمَلُهُۥ",
        translation: "**Et quiconque mécroit en la foi**, son œuvre sera vaine.",
        reference: "Coran, al-Māʾida, 5:5",
      },
      {
        type: "p",
        text: "Le kufr, dans son sens religieux le plus grave, est le rejet de la foi due à Allāh : Lui associer des partenaires, nier Sa Seigneurie, rejeter la prophétie de Muḥammad ﷺ. C'est le degré le plus sévère parmi les trois, celui qui, sans repentir, exclut définitivement de la miséricorde et fait perdre le bénéfice de toutes les bonnes œuvres.",
      },
      { type: "h2", text: "Le fisq : sortir de l'obéissance sans sortir de la foi" },
      {
        type: "verse",
        arabic: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن جَآءَكُمْ **فَاسِقٌۢ** بِنَبَإٍ فَتَبَيَّنُوٓا۟",
        translation: "Ô vous qui croyez ! Si **un pervers** vous apporte une nouvelle, vérifiez-la.",
        reference: "Coran, al-Ḥujurāt, 49:6",
      },
      {
        type: "p",
        text: "Le verset s'adresse à une communauté de croyants et met en garde contre l'information rapportée par un fāsiq — ce qui suppose que le fisq n'exclut pas, en soi, de la communauté des croyants. Un musulman qui commet des péchés graves sans les considérer licites reste appelé fāsiq, non kāfir, tant qu'il ne rejette pas le fondement même de la foi.",
      },
      {
        type: "degres",
        title: "Les trois notions ordonnées par gravité",
        degres: [
          { label: "Fisq (sans mécréance)", note: "Transgression grave qui n'ôte pas la foi : boire de l'alcool, calomnier, etc." },
          { label: "Ẓulm (envers soi-même)", note: "Recouvre souvent le fisq, en insistant sur le tort que le pécheur se fait à lui-même." },
          { label: "Kufr", note: "Le degré le plus grave : rejet ou occultation délibérée de la vérité de la foi." },
        ],
        direction: "asc",
        caption: "Le ẓulm et le fisq se recoupent largement ; le kufr forme une catégorie à part, qualitativement différente et non seulement plus intense.",
      },
      { type: "h2", text: "Le cas du kufr dūna kufr" },
      {
        type: "p",
        text: "Une difficulté classique surgit avec des versets comme « Et ceux qui ne jugent pas d'après ce qu'Allāh a fait descendre, ceux-là sont les mécréants » (al-Māʾida, 5:44). Les salaf, à commencer par Ibn ʿAbbās, ont expliqué qu'il existe une **mécréance moindre que la mécréance** (kufr dūna kufr) : celle de gouverner par autre chose que la Loi d'Allāh tout en reconnaissant sa légitimité et sans la renier par conviction — ce qui relève alors du fisq ou du ẓulm grave, non du kufr qui exclut de la religion.",
      },
      {
        type: "quote",
        text: "قال ابن عباس رضي الله عنهما في الآية: **«ليس بكفر ينقل عن الملة، كفر دون كفر»**.\n\nIbn ʿAbbās, qu'Allāh les agrée, a dit à propos de ce verset : **« Ce n'est pas une mécréance qui fait sortir de la religion ; c'est une mécréance moindre que la mécréance. »**",
        source: "Rapporté par al-Ḥākim et al-Ṭabarī",
      },
      {
        type: "comparaison",
        title: "Kufr, fisq et ẓulm face au même acte",
        columns: ["Si négation du fondement", "Si simple transgression"],
        rows: [
          { criterion: "Terme applicable", cells: ["Kufr akbar (mécréance majeure)", "Fisq ou kufr aṣghar (mécréance mineure)"] },
          { criterion: "Statut religieux", cells: ["Sortie de l'islam", "Reste musulman, pécheur"] },
          { criterion: "Exemple", cells: ["Juger en rejetant la légitimité de la Loi d'Allāh", "Juger par intérêt personnel tout en reconnaissant la Loi juste"] },
        ],
      },
      {
        type: "focus",
        kind: "vigilance",
        title: "L'erreur des extrémistes",
        text: "Certains groupes égarés appliquent systématiquement le sens fort du kufr à tout verset contenant cette racine, sans tenir compte de la distinction établie par les salaf entre kufr akbar et kufr aṣghar. Cette confusion volontaire ou involontaire a servi à justifier l'excommunication (takfīr) de musulmans pécheurs, contre l'avis unanime des savants reconnus.",
      },
      {
        type: "objection",
        objection: "Si l'on peut toujours réduire un terme sévère à un 'degré mineur', ne risque-t-on pas de vider toute mise en garde coranique de sa force ?",
        reponse:
          "Non, car cette distinction n'est pas arbitraire : elle repose sur des critères précis établis par les salaf eux-mêmes — l'intention, la croyance intérieure sur la légitimité de la Loi, l'absence de dénégation du principe religieux. Elle ne s'applique pas à volonté selon la préférence de chacun, mais suit des cas déjà tranchés par les premiers exégètes, comme le verset du jugement examiné ci-dessus. Loin d'affaiblir le texte, elle en respecte la cohérence interne, puisque le Coran lui-même distingue par ailleurs le mécréant obstiné du croyant pécheur.",
      },
      { type: "h2", text: "L'unité et la distinction des trois notions" },
      {
        type: "p",
        text: "Il serait tout aussi erroné de gommer complètement la parenté entre ces trois mots que de les confondre purement et simplement. Le fisq et le ẓulm partagent souvent le même terrain : le pécheur transgresseur est à la fois fāsiq et ẓālim envers lui-même. Le kufr, en revanche, forme une catégorie qualitativement à part quand il atteint son sens majeur, car il touche au fondement même de la relation entre le serviteur et son Seigneur, non seulement à la conduite.",
      },
      {
        type: "p",
        text: "Al-Ṭabarī, dans son tafsīr, prend soin, chaque fois qu'un de ces trois termes apparaît, de rassembler les avis des Compagnons et des Successeurs pour préciser lequel des sens est visé dans le contexte précis du verset. Cette rigueur méthodique évite tout jugement hâtif, dans un sens comme dans l'autre.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Kufr, fisq et ẓulm ne sont pas des synonymes qu'on emploierait indifféremment pour condamner : ce sont trois degrés distincts, dont la confusion a des conséquences doctrinales lourdes, notamment sur la question du takfīr. La méthode des salaf — distinguer le majeur du mineur, examiner le contexte et l'intention, s'appuyer sur les explications transmises — demeure l'unique garde-fou contre l'excès comme contre la complaisance.",
      },
    ],
  },
  {
    slug: slugifySujet("Ḥaqq : droit, vérité, dû"),
    title: "Ḥaqq : droit, vérité, dû",
    intro:
      "Peu de mots coraniques sont aussi denses que **ḥaqq**. Selon le contexte, il désigne la vérité, le droit, le dû, ou même l'un des Noms d'Allāh. Cette polysémie n'est pas un défaut de précision : elle traduit une unité profonde entre ces notions que la langue française sépare artificiellement en plusieurs mots distincts.",
    body: [
      { type: "h2", text: "Une racine, plusieurs facettes" },
      {
        type: "lexique",
        root: "ح ق ق",
        transliteration: "ḥ-q-q",
        sense: "Ce qui est établi, fixé, conforme, et qui ne peut être nié",
        derives: [
          { word: "ḥaqq", arabic: "حق", gloss: "le vrai, le droit, ce qui est fondé et ne peut être contesté" },
          { word: "ḥaqīqa", arabic: "حقيقة", gloss: "la réalité, le sens propre" },
          { word: "istiḥqāq", arabic: "استحقاق", gloss: "le fait de mériter, d'avoir droit à quelque chose" },
          { word: "taḥqīq", arabic: "تحقيق", gloss: "la vérification, l'établissement certain d'un fait" },
          { word: "al-Ḥaqq", arabic: "الحق", gloss: "l'un des Noms d'Allāh : Celui dont l'existence est absolument certaine et immuable" },
        ],
        note: "Al-Rāghib al-Iṣfahānī note que le ḥaqq est ce qui est en accord parfait avec ce qu'exige la sagesse, le jugement ou la réalité — d'où sa triple application : métaphysique, morale, juridique.",
      },
      { type: "h2", text: "Al-Ḥaqq comme Nom divin" },
      {
        type: "verse",
        arabic: "ذَٰلِكَ بِأَنَّ ٱللَّهَ هُوَ **ٱلْحَقُّ** وَأَنَّ مَا يَدْعُونَ مِن دُونِهِ هُوَ ٱلْبَٰطِلُ",
        translation: "C'est parce qu'Allāh, c'est **Lui la Vérité absolue**, et que ce qu'ils invoquent en dehors de Lui, c'est le faux.",
        reference: "Coran, al-Ḥajj, 22:62",
      },
      {
        type: "p",
        text: "Appliqué à Allāh, al-Ḥaqq signifie que Son existence est la seule à être absolument nécessaire et certaine, sans commencement ni fin, contrairement à toute chose invoquée en dehors de Lui, dont l'existence dépend et dont la divinité prétendue est fausse (bāṭil). Ce Nom relie directement le registre métaphysique du mot — la vérité de l'être — à son opposé, le bāṭil, le faux, le vain.",
      },
      { type: "h2", text: "Ḥaqq comme vérité du discours" },
      {
        type: "verse",
        arabic: "**وَقُلْ جَآءَ ٱلْحَقُّ وَزَهَقَ ٱلْبَٰطِلُ** ۚ إِنَّ ٱلْبَٰطِلَ كَانَ زَهُوقًا",
        translation: "**Et dis : « La vérité est venue et le faux a disparu »** ; car le faux est appelé à disparaître.",
        reference: "Coran, al-Isrāʾ, 17:81",
      },
      {
        type: "p",
        text: "Ici, ḥaqq désigne le message révélé, conforme à la réalité et destiné à triompher du bāṭil, l'erreur ou le mensonge. C'est le sens le plus proche du français « vérité », mais il n'est jamais purement théorique dans le Coran : le ḥaqq qui vient est toujours associé à une victoire concrète sur le faux, une dimension d'accomplissement que le mot français « vérité » ne porte pas toujours.",
      },
      { type: "h2", text: "Ḥaqq comme droit et comme dû" },
      {
        type: "verse",
        arabic: "وَءَاتُوا۟ **حَقَّهُۥ** يَوْمَ حَصَادِهِۦ",
        translation: "Et acquittez-en **le droit dû** le jour de sa récolte.",
        reference: "Coran, al-Anʿām, 6:141",
      },
      {
        type: "p",
        text: "Dans ce contexte, ḥaqq désigne un dû matériel et légal : ce qui revient de droit aux pauvres sur la récolte. Ce sens juridique du mot est à la base du vocabulaire entier des droits en islam : ḥuqūq Allāh (les droits d'Allāh sur Ses serviteurs) et ḥuqūq al-ʿibād (les droits des serviteurs entre eux) forment les deux grandes catégories autour desquelles s'organise tout le fiqh des transactions et des obligations.",
      },
      {
        type: "comparaison",
        title: "Les trois grands emplois de ḥaqq",
        columns: ["Métaphysique", "Épistémique", "Juridique"],
        rows: [
          { criterion: "Sens", cells: ["Réalité nécessaire, immuable", "Vérité conforme aux faits", "Droit, dû légitime"] },
          { criterion: "Exemple coranique", cells: ["al-Ḥajj, 22:62 (Al-Ḥaqq, Nom d'Allāh)", "al-Isrāʾ, 17:81 (le message révélé)", "al-Anʿām, 6:141 (le dû sur la récolte)"] },
          { criterion: "Opposé", cells: ["Al-bāṭil (le néant, le faux dieu)", "Al-kadhib (le mensonge)", "Al-ẓulm (la spoliation)"] },
        ],
      },
      {
        type: "schema",
        title: "Comment les trois sens se rejoignent",
        variant: "branch",
        nodes: [
          { label: "Ḥaqq", arabic: "حق", note: "Ce qui est fermement établi et ne peut être nié" },
          { label: "Sur le plan de l'être", note: "Al-Ḥaqq : Allāh, dont l'existence est certaine" },
          { label: "Sur le plan du dire", note: "Le discours conforme à cette réalité établie" },
          { label: "Sur le plan de l'agir", note: "Ce qui est dû à chacun, conformément à l'ordre juste" },
        ],
        caption: "Les trois branches ne sont pas des sens séparés par hasard : elles découlent toutes de l'idée centrale de fermeté et de conformité à ce qui est établi.",
      },
      { type: "h2", text: "Ḥaqq et bāṭil : une opposition structurante" },
      {
        type: "balance",
        title: "Le ḥaqq face au bāṭil dans le Coran",
        arabic: "الحق والباطل",
        affirmLabel: "Caractéristiques du ḥaqq",
        denyLabel: "Caractéristiques du bāṭil",
        affirm: [
          "Fermeté, permanence, conformité à la réalité.",
          "Destiné à demeurer et à s'imposer, même après opposition.",
          "Source unique : Allāh et ce qu'Il a révélé.",
        ],
        deny: [
          "Instabilité, disparition inévitable à terme.",
          "Apparence trompeuse, sans fondement réel.",
          "Multiplicité des sources : caprices, conjectures, invention humaine.",
        ],
        caption: "Le Coran ne présente jamais ḥaqq et bāṭil comme deux forces à égalité : le second est intrinsèquement voué à s'effondrer.",
      },
      {
        type: "focus",
        kind: "repere",
        title: "Un fil conducteur utile en lecture",
        text: "Chaque fois qu'apparaît le mot ḥaqq dans un verset, il est utile de se demander lequel des trois registres — l'être, le dire, ou le dû — est visé. Cette question simple évite bien des contresens, notamment dans les versets où plusieurs sens semblent se superposer.",
      },
      {
        type: "objection",
        objection: "N'est-ce pas artificiel de vouloir séparer des sens qu'un seul mot arabe exprime naturellement ensemble ?",
        reponse:
          "L'objection a sa part de vérité : dans plusieurs versets, les trois dimensions sont volontairement présentes ensemble, et vouloir les cloisonner appauvrirait le texte. Mais dans d'autres cas, comme le verset du dû sur la récolte, seul le sens juridique est pertinent, et y lire une portée métaphysique serait un contresens. L'exercice de distinction n'a donc pas pour but de fragmenter artificiellement le mot, mais de donner au lecteur les moyens de reconnaître, verset par verset, lequel des registres domine ou s'ils se superposent effectivement.",
      },
      { type: "h2", text: "Une portée qui dépasse la linguistique" },
      {
        type: "p",
        text: "Cette richesse du mot ḥaqq n'est pas un simple fait de style : elle reflète une vision unifiée du monde où la vérité métaphysique, la vérité du discours et la justice des droits ne sont pas des domaines séparés, comme tend à le penser une modernité qui isole le fait, la valeur et le droit. Dans la vision coranique, celui qui reconnaît Al-Ḥaqq comme Nom divin est appelé, par cohérence, à dire le ḥaqq et à rendre à chacun son ḥaqq — les trois plans se soutiennent et se répondent.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Ḥaqq résiste à toute traduction unique parce qu'il porte, dans une seule racine, l'idée de fermeté qui unit l'être, le vrai et le dû. Vouloir le réduire à un seul mot français — « vérité » le plus souvent — c'est perdre une partie de ce que le Coran a voulu dire. Apprendre à discerner, verset par verset, quel registre du ḥaqq est engagé demeure l'un des exercices les plus formateurs pour quiconque veut lire le Coran dans sa langue et selon l'esprit des salaf.",
      },
    ],
  },
];
