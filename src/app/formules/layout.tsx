import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Formules & Abonnements',
  description: 'Choisissez votre accès aux fiches et templates Briefings by Skanner Magazine. Découverte gratuite, par rubrique, bouquet ou accès complet.',
  path: '/formules',
})

export default function FormulesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
