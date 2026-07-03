// Configuration SEO centralisée
// IMPORTANT : remplacer SITE_URL par le vrai domaine en production

export const SITE_URL = 'https://briefings.skanner-magazine.com'
export const SITE_NAME = 'Briefings by Skanner Magazine'
export const SITE_DESCRIPTION = 'Fiches théoriques et templates actionnables pour les professionnels de la mode, du management et de la communication. Un produit éditorial Skanner Magazine.'

export function pageMetadata(opts: {
  title: string
  description?: string
  path?: string
  image?: string
}) {
  const url = `${SITE_URL}${opts.path || ''}`
  const description = opts.description || SITE_DESCRIPTION
  const image = opts.image || `${SITE_URL}/hero.jpg`
  return {
    title: opts.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
      locale: 'fr_FR',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: opts.title,
      description,
      images: [image],
    },
  }
}
