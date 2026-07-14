# Passation — Chapitre 1 « Fondations des relations presse » (thème PR & Communication)

À coller dans la conversation d'intégration de la plateforme Briefings (Next.js).

---

## Ce qui est prêt

**12 fiches HTML** complètes, testées, propres (encodage vérifié, orthographe vérifiée), dans le dossier `CHAPITRE1-PR/` (ou le ZIP `CHAPITRE1-PR-fiches.zip`).

Structure : 4 sujets × 3 niveaux (débutant / intermédiaire / expert).

| Sujet | Débutant | Intermédiaire | Expert |
|---|---|---|---|
| Écosystème média (sem. 1) | Comprendre l'écosystème média | Arbitrer son mix média | Modéliser le rendement RP |
| Construire son message (sem. 2) | Construire son message | Structurer son message en pyramide | Adapter son message par audience |
| Communiqué et pitch (sem. 3) | Structurer un communiqué | Affûter titre et accroche | Planifier sa diffusion |
| Mesurer ses retombées (sem. 4) | Mesurer ses retombées | Les bons indicateurs | Cadrer avant de lancer |

Chaque fiche = 5 onglets (Fiche · À retenir · Glossaire · Quiz · Template), gabarit Skanner, charte verrouillée, template interactif au clic (aucun glisser-déposer sauf pr-int-message-cle, à convertir plus tard).

---

## Étape 1 — Placer les fichiers HTML

Copier les 12 fichiers `pr-*.html` dans `public/` du repo `SKANNERMAGAZINE/SKANNERBRIEFINGS`.

Convention de nommage déjà en place : préfixe `pr-`, niveau (`deb`/`int`/`exp`), sujet.

---

## Étape 2 — Ajouter les entrées au catalogue

Le fichier `fichesHtml-chapitre1-pr.ts` contient le bloc à intégrer dans le catalogue de fiches (à fusionner avec la structure existante des chapitres Data & Digital).

Chaque entrée porte : slug, theme, chapitre, sujet, semaine, niveau, name, desc, duree, htmlFile, image.

---

## Étape 3 — Images (12 à fournir)

Chaque fiche référence une image de couverture dans `public/`. À déposer (format .jpg, < 300 Ko, pas de base64) :

- Écosystème média : `pr-media-1.jpg`, `pr-media-2.jpg`, `pr-media-3.jpg`
- Construire son message : `pr-message-1.jpg`, `pr-message-2.jpg`, `pr-message-3.jpg`
- Communiqué et pitch : `pr-communique-1.jpg`, `pr-communique-2.jpg`, `pr-communique-3.jpg`
- Mesurer ses retombées : `pr-mesure-1.jpg`, `pr-mesure-2.jpg`, `pr-mesure-3.jpg`

Ne PAS utiliser `pr-1.jpg` / `pr-2.jpg` / `pr-3.jpg` (collision avec d'autres visuels du site).

---

## Notes techniques (conventions respectées)

- Fond clair #F8F7F5, encre #0D0D0D, General Sans, palette néon (jaune #E8FF00, violet #C77DFF, vert #39FF14, rose #FF6FD8, bleu #4DD2FF).
- Composant `.reco` en charte Skanner (fond blanc, accent fluo court — pas de pastel).
- Deux fiches « mesurer » intègrent des graphiques SVG maison (anneau, barres, KPIs fond noir) — aucune librairie externe, fonctionne en statique.
- Vocabulaire strict : uniquement « fiches » et « templates ».
- Export PDF via html2canvas + jsPDF (déjà inclus dans le gabarit).

---

## Reste à faire (hors passation, pour info)

- Convertir `pr-int-message-cle` (arbitre de formulations) du glisser-déposer au clic.
- Chapitres 2 à 12 du thème PR à produire.
