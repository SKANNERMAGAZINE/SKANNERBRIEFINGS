# Projet Briefings by Skanner Magazine — code source complet

Ce ZIP contient le PROJET COMPLET (code source Next.js), pas le site compilé.
Il permet de tout modifier (fiches, pages, images) et de rebuilder.

## Contenu
- `src/` — code source (pages, composants, données)
- `public/` — images + fiches HTML (dans public/fiches-html/)
- `package.json`, `next.config.ts`, `tsconfig.json` — configuration

## Comment relancer le projet (dans une nouvelle conversation Claude)
1. Décompresser ce ZIP.
2. Installer les dépendances : `npm install`
3. Builder le site : `npm run build`
   → génère le dossier `out/` (le site statique prêt à déployer).
4. Pour déployer : zipper le CONTENU de `out/` à la racine
   (`cd out && zip -r ../site.zip .`), puis glisser sur Netlify.

## Points clés
- Site statique (export), déployé sur Netlify (pas Vercel).
- Les fiches sont dans `public/fiches-html/` (fichiers HTML autonomes).
- Les images sont dans `public/` (référencées par chemin absolu, ex /mktg-1.jpg).
- Registre des fiches : `src/data/fichesHtml.ts`
- Chapitres : `src/data/chapitres.ts`
- Pages : accueil `src/app/home/`, thématique `src/app/thematique/[theme]/`

## RÈGLES
- AUCUN emoji nulle part (interface, code, textes).
- Ne pas changer la charte graphique (couleurs, General Sans, structure 5 onglets).
- Vocabulaire : uniquement "fiches" et "templates".
- Tester en mode texte (Playwright headless), pas de captures d'écran.
- Les pages sont protégées par AuthGuard (localStorage bs_session) : pour tester,
  injecter une session avant chargement.
