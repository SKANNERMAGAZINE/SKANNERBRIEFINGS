import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Waiting List',
  description: 'Rejoignez la liste d\'attente de Briefings by Skanner Magazine et accédez en avant-première aux fiches et templates.',
  path: '/waitlist',
})

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
