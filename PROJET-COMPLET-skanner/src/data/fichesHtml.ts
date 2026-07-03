// Fiches HTML interactives autonomes (avec quiz), servies depuis /public/fiches-html/
import type { Theme, Level } from './themes'

export interface FicheHtml {
  slug: string          // nom du fichier dans /public/fiches-html/ (sans .html)
  theme: Theme
  level: Level
  chapitre: number      // numéro de chapitre (1 à 12)
  semaine: number       // semaine dans le chapitre (1 à 4)
  name: string
  desc: string
  duree: string
}

export const FICHES_HTML: FicheHtml[] = [
  {
    slug: 'fin-deb-compte-resultat',
    theme: 'fin',
    level: 'deb',
    chapitre: 1,
    semaine: 1,
    name: 'Le compte de résultat décodé',
    desc: 'Lire la performance ligne par ligne, du chiffre d\'affaires au résultat net',
    duree: '14 min',
  },
  {
    slug: 'dd-deb-ecosysteme',
    theme: 'dd',
    level: 'deb',
    chapitre: 1,
    semaine: 1,
    name: "L'écosystème digital décodé",
    desc: 'Owned, earned, paid · le parcours · les 4 chiffres clés (CAC, conversion, panier, LTV)',
    duree: '14 min',
  },
  {
    slug: 'dd-deb-parcours-client',
    theme: 'dd',
    level: 'deb',
    chapitre: 1,
    semaine: 2,
    name: 'Le parcours client en ligne',
    desc: 'Les 5 étapes · ce que vit le client · les frictions · accompagner au lieu de pousser',
    duree: '13 min',
  },
  {
    slug: 'dd-int-parcours-client',
    theme: 'dd',
    level: 'int',
    chapitre: 1,
    semaine: 2,
    name: 'Optimiser le parcours client',
    desc: 'Mesurer chaque étape · point de fuite · abandon de panier · test A/B',
    duree: '15 min',
  },
  {
    slug: 'dd-exp-parcours-client',
    theme: 'dd',
    level: 'exp',
    chapitre: 1,
    semaine: 2,
    name: 'Modéliser le parcours client',
    desc: 'Parcours non linéaire · chemins de conversion · micro-conversions · boucle d\'optimisation',
    duree: '17 min',
  },
  {
    slug: 'dd-deb-canaux-acquisition',
    theme: 'dd',
    level: 'deb',
    chapitre: 1,
    semaine: 3,
    name: "Les canaux d'acquisition",
    desc: "Owned, earned, paid · comment choisir · l'erreur de vouloir être partout",
    duree: '12 min',
  },
  {
    slug: 'dd-int-canaux-acquisition',
    theme: 'dd',
    level: 'int',
    chapitre: 1,
    semaine: 3,
    name: "Arbitrer ses canaux d'acquisition",
    desc: 'Comparer au CAC · répartir le budget · rapide vs durable · pousser ou couper',
    duree: '15 min',
  },
  {
    slug: 'dd-exp-canaux-acquisition',
    theme: 'dd',
    level: 'exp',
    chapitre: 1,
    semaine: 3,
    name: 'Modéliser son mix de canaux',
    desc: 'Portefeuille · saturation et CAC marginal · attribution · résilience',
    duree: '18 min',
  },
  {
    slug: 'dd-deb-mesurer-piloter',
    theme: 'dd',
    level: 'deb',
    chapitre: 1,
    semaine: 4,
    name: 'Mesurer et piloter',
    desc: "Qu'est-ce qu'un KPI · les 4 chiffres clés · lire un tableau de bord · ne pas se noyer",
    duree: '13 min',
  },
  {
    slug: 'dd-int-mesurer-piloter',
    theme: 'dd',
    level: 'int',
    chapitre: 1,
    semaine: 4,
    name: 'Piloter avec les bons KPIs',
    desc: "KPIs selon l'objectif · résultat vs action · tableau qui pilote · signal vs bruit",
    duree: '15 min',
  },
  {
    slug: 'dd-exp-mesurer-piloter',
    theme: 'dd',
    level: 'exp',
    chapitre: 1,
    semaine: 4,
    name: 'Modéliser la performance',
    desc: 'Cohortes · LTV et payback · corrélation vs causalité · décider dans l\'incertitude',
    duree: '18 min',
  },
  {
    slug: 'dd-deb-modeles-ebusiness',
    theme: 'dd',
    level: 'deb',
    chapitre: 2,
    semaine: 1,
    name: 'Modèles e-business',
    desc: 'D2C · marketplace · abonnement · B2B · comment choisir son modèle',
    duree: '13 min',
  },
  {
    slug: 'dd-int-modeles-ebusiness',
    theme: 'dd',
    level: 'int',
    chapitre: 2,
    semaine: 1,
    name: 'Arbitrer son modèle e-business',
    desc: 'Marge nette par modèle · combiner les modèles · quand basculer',
    duree: '15 min',
  },
  {
    slug: 'dd-exp-modeles-ebusiness',
    theme: 'dd',
    level: 'exp',
    chapitre: 2,
    semaine: 1,
    name: 'Modéliser son économie e-business',
    desc: 'Point mort · marge de contribution · matrice de scoring des modèles',
    duree: '18 min',
  },
  {
    slug: 'dd-deb-tunnel-vente',
    theme: 'dd',
    level: 'deb',
    chapitre: 2,
    semaine: 2,
    name: 'Le tunnel de vente',
    desc: 'Visite · intérêt · panier · achat · réduire les frictions',
    duree: '13 min',
  },
  {
    slug: 'dd-int-tunnel-vente',
    theme: 'dd',
    level: 'int',
    chapitre: 2,
    semaine: 2,
    name: 'Optimiser son tunnel de vente',
    desc: 'Taux par étape · point de fuite · valeur d\'un point gagné',
    duree: '15 min',
  },
  {
    slug: 'dd-exp-tunnel-vente',
    theme: 'dd',
    level: 'exp',
    chapitre: 2,
    semaine: 2,
    name: 'Modéliser son tunnel de conversion',
    desc: 'Impact € par étape · priorisation des tests A/B par ROI',
    duree: '18 min',
  },
  {
    slug: 'dd-deb-pricing-marge',
    theme: 'dd',
    level: 'deb',
    chapitre: 2,
    semaine: 3,
    name: 'Pricing & marge',
    desc: 'Prix · coût · marge · les 3 façons de fixer un prix',
    duree: '13 min',
  },
  {
    slug: 'dd-int-pricing-marge',
    theme: 'dd',
    level: 'int',
    chapitre: 2,
    semaine: 3,
    name: 'Optimiser son pricing',
    desc: 'Marge nette réelle · seuil de rentabilité · effet d\'une remise',
    duree: '15 min',
  },
  {
    slug: 'dd-exp-pricing-marge',
    theme: 'dd',
    level: 'exp',
    chapitre: 2,
    semaine: 3,
    name: 'Pricing à la valeur',
    desc: 'Élasticité · architecture de prix · point mort · matrice de positionnement',
    duree: '18 min',
  },
  {
    slug: 'dd-deb-roadmap-digitale',
    theme: 'dd',
    level: 'deb',
    chapitre: 2,
    semaine: 4,
    name: 'La roadmap digitale',
    desc: 'Prioriser par impact/effort · séquencer · ne pas tout faire à la fois',
    duree: '13 min',
  },
  {
    slug: 'dd-int-roadmap-digitale',
    theme: 'dd',
    level: 'int',
    chapitre: 2,
    semaine: 4,
    name: 'Arbitrer sa roadmap',
    desc: 'Valeur/coût · quick wins vs chantiers de fond · jalons',
    duree: '15 min',
  },
  {
    slug: 'dd-exp-roadmap-digitale',
    theme: 'dd',
    level: 'exp',
    chapitre: 2,
    semaine: 4,
    name: 'Modéliser son séquençage',
    desc: 'Dépendances · ressources · ROI cumulé · matrice de priorisation',
    duree: '18 min',
  },
  {
    slug: 'dd-int-ecosysteme',
    theme: 'dd',
    level: 'int',
    chapitre: 1,
    semaine: 1,
    name: 'Arbitrer son écosystème digital',
    desc: 'Répartition par maturité · benchmarks funnel · ratio LTV/CAC par canal · quand couper',
    duree: '16 min',
  },
  {
    slug: 'dd-exp-ecosysteme',
    theme: 'dd',
    level: 'exp',
    chapitre: 1,
    semaine: 1,
    name: 'Modéliser son écosystème digital',
    desc: 'Attribution · LTV par cohorte · saturation & payback · piloter en incertitude · cockpit',
    duree: '18 min',
  },
]

export function getFichesHtmlByThemeAndLevel(theme: Theme, level: Level) {
  return FICHES_HTML
    .filter(f => f.theme === theme && f.level === level)
    .sort((a, b) => a.chapitre - b.chapitre || a.semaine - b.semaine)
}

export function getFichesByChapitre(theme: Theme, chapitre: number, level: Level) {
  return FICHES_HTML
    .filter(f => f.theme === theme && f.chapitre === chapitre && f.level === level)
    .sort((a, b) => a.semaine - b.semaine)
}

export function getChapitresDispo(theme: Theme): number[] {
  return [...new Set(FICHES_HTML.filter(f => f.theme === theme).map(f => f.chapitre))].sort((a,b)=>a-b)
}
