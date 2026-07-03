# Briefings by Skanner Magazine

Plateforme de fiches théoriques et templates actionnables — Next.js (App Router) + TypeScript + Tailwind CSS.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```
Le site tourne sur http://localhost:3000

## Build de production

```bash
npm run build
```
Génère un site statique dans le dossier `out/`.

## Déploiement

### Vercel (recommandé)
1. Créer un compte sur vercel.com
2. "Add New Project" → importer ce dossier (ou connecter le dépôt Git)
3. Vercel détecte Next.js automatiquement. Cliquer "Deploy".

### Netlify
1. `npm run build`
2. Glisser le dossier `out/` sur https://app.netlify.com/drop

## Configuration à faire avant la mise en ligne

- **Domaine** : remplacer `SITE_URL` dans `src/lib/seo.ts` par le vrai domaine (impacte SEO, sitemap, OpenGraph).
- **Liens Stripe** : remplacer les placeholders `VOTRE_LIEN_*` dans `src/app/formules/page.tsx`.
- **Authentification** : le système actuel (localStorage) convient pour une démo. Voir l'avertissement dans `src/lib/auth.ts` pour la migration vers une auth serveur réelle (Supabase/NextAuth) avant de protéger du contenu payant.
- **Images** : remplacer les fichiers `/public/*.jpg` par les visuels définitifs (mêmes noms de fichiers).

## Structure

```
src/
  app/            Routes (login, home, formules, waitlist)
  components/     Nav, AuthGuard
  data/           themes.ts (thématiques + niveaux + libellés)
  lib/            auth.ts, seo.ts
```

## Ajouter du contenu

Le site est volontairement livré sans contenu (fiches/templates) — seules les
quatre thématiques sont mises en avant : PR & Communication, Management,
Marketing Mode, Finance. Les thématiques et leurs libellés sont définis dans
`src/data/themes.ts`. Le panneau de chaque thématique (dans `src/app/home/page.tsx`)
affiche un message « contenu à venir » prêt à être remplacé par les fiches et
templates au fur et à mesure de leur création.
