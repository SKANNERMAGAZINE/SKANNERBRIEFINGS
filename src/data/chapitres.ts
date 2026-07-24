// Référentiel des chapitres par thématique.
// Statut : 'dispo' (fiches publiées), 'encours' (partiellement publié), 'bientot' (à venir).
import type { Theme } from './themes'

export interface Chapitre {
  num: number
  slug: string
  nom: string
  desc: string
  statut: 'dispo' | 'encours' | 'bientot'
}

export const CHAPITRES: Record<Theme, Chapitre[]> = {
  dd: [
    { num:1,  slug:'fondations',       nom:'Fondations',        desc:'Écosystème, parcours client, canaux, pilotage', statut:'dispo' },
    { num:2,  slug:'e-business',       nom:'E-business',        desc:'Modèles, tunnel de vente, pricing, roadmap',    statut:'dispo' },
    { num:3,  slug:'seo-sea',          nom:'SEO / SEA',         desc:'Référencement naturel et payant',               statut:'bientot' },
    { num:4,  slug:'data-marketing',   nom:'Data marketing',    desc:'Collecte, segmentation, analytics',             statut:'bientot' },
    { num:5,  slug:'crm',              nom:'CRM & fidélisation',desc:'Cycle de vie, email, rétention, LTV',           statut:'bientot' },
    { num:6,  slug:'social-media',     nom:'Social media',      desc:'Plateformes, contenu, communauté, social ads',  statut:'bientot' },
    { num:7,  slug:'content',          nom:'Content & inbound', desc:'Stratégie de contenu, lead, storytelling',      statut:'bientot' },
    { num:8,  slug:'ia-marketing',     nom:'IA & marketing',    desc:'Cas d\'usage, outils, automatisation',           statut:'bientot' },
    { num:9,  slug:'media-buying',     nom:'Media buying',      desc:'Enchères, ciblage, créa, optimisation',         statut:'bientot' },
    { num:10, slug:'omnicanal',        nom:'Omnicanal',         desc:'Cohérence des canaux, online-to-offline',       statut:'bientot' },
    { num:11, slug:'legal',            nom:'Légal & e-réputation',desc:'RGPD, mentions, avis, gestion de crise',      statut:'bientot' },
    { num:12, slug:'pilotage',         nom:'Pilotage & performance',desc:'Dashboards, KPIs, cohortes, reporting',     statut:'bientot' },
  ],
  pr: [
    { num:1, slug:'fondations-rp', nom:'Fondations des relations presse', desc:'Écosystème média, message clé, communiqué, retombées', statut:'dispo' },
    { num:2, slug:'prise-parole-influence', nom:'Prise de parole & influence', desc:'Media training, communication de crise, influence, notoriété', statut:'dispo' },
  ],
  mgmt: [], mktg: [], fin: [],
}

export function getChapitres(theme: Theme): Chapitre[] {
  return CHAPITRES[theme] || []
}
export function getChapitre(theme: Theme, slug: string): Chapitre | undefined {
  return (CHAPITRES[theme] || []).find(c => c.slug === slug)
}
