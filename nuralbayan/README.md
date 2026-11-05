# Nūr al-Bayān

Base active récupérée depuis https://nuralbayan.pages.dev/ le 4 novembre 2026.

## Utilisation

Node.js 20 ou plus récent suffit. Aucune installation de dépendances nécessaire.

- `npm run dev` : aperçu local sur http://127.0.0.1:4173
- `npm run build` : génération du dossier statique `dist/`
- Déploiement Cloudflare Pages : utiliser le contenu de `dist/`.

## Fichiers à modifier

| Fichier | Rôle |
| --- | --- |
| `src/index.html` | Document, balises de référencement et styles de navigation |
| `src/assets/index-photo-v1.js` | Application React publiée, remise en forme ; pages, textes et logique |
| `src/assets/LetterField-photo-v1.js` | Animation des lettres |
| `src/assets/styles-CtNC6LEu.css` | Styles de la version publiée |
| `src/assets/fonts/` | Polices locales |
| `src/assets/sidi-kashabiya.jpg` | Photo actuellement utilisée sur la page À propos |

Le code du site actuel est la base active dans `src/`. Le dossier `dist/` est généré à partir de cette base, jamais depuis les anciennes sources Lovable.

## Origine et limites

Le ZIP Lovable était plus ancien que le site publié : accueil animé, offres en préparation, photo, navigation et plusieurs textes différaient. Le code actif a été remplacé par la version publique récupérée, puis mis en forme pour être lisible. Le comportement des scripts et les ressources locales découverts sont conservés.

Cette récupération contient le JavaScript compilé du site, et non les modules TypeScript/TSX d'origine. Les noms de variables et le découpage initial des composants ne sont pas récupérables automatiquement. Les anciennes sources sont conservées dans `archives/sources-lovable-originales.zip` et ne sont pas utilisées par la génération.

La base de données Supabase, les fichiers privés et les fonctions serveur ne sont pas exportés par cette récupération. Les appels externes existants sont conservés. Cette archive n'est pas une sauvegarde du backend. La disponibilité des fonctions externes reste celle du site publié.

Aucune modification du site en ligne, aucune réservation, aucun paiement et aucune écriture dans Supabase n'ont été effectués.

Le manifeste `reference/capture-manifest.json` décrit les octets originaux téléchargés avant mise en forme ; il ne correspond donc pas aux empreintes des fichiers remis en forme.
