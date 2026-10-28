# Nour El Bayan — site web

Site vitrine de Nour El Bayan, construit avec React, Vite, TypeScript, Tailwind CSS et framer-motion.

## Lancer le site

```bash
cd site
npm install
npm run dev      # site en local sur http://localhost:5173
npm run build    # version de production dans dist/
```

## Modifier le contenu

Tous les textes (titres, parcours, rappels, FAQ, liens, e-mail) sont dans **`src/content.ts`**.
Change-les à cet endroit : aucun composant n'a besoin d'être modifié.

À remplacer avant la mise en ligne :
- `site.email` et `site.socials` (TikTok, Instagram, YouTube) ;
- les liens `href: '#'` des rappels vers tes vidéos.

## Structure

- `src/components/` : une section du site par fichier (Hero, Verse, Mission, Programs, Method, Reminders, Quote, Faq, FinalCta, Footer).
- `src/index.css` : couleurs et polices du thème (`@theme`).
- `public/favicon.svg` : icône de l'onglet.

## Mise en ligne

Le dossier est prêt pour Vercel, Netlify ou Cloudflare Pages : dossier racine `site`, commande `npm run build`, dossier publié `dist`.
