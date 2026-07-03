import ChapitreClient from './ChapitreClient'
import { CHAPITRES } from '@/data/chapitres'

export function generateStaticParams() {
  const params: { theme: string; chapitre: string }[] = []
  for (const [theme, chaps] of Object.entries(CHAPITRES)) {
    for (const c of chaps) {
      params.push({ theme, chapitre: c.slug })
    }
  }
  return params
}

export default async function Page({ params }: { params: Promise<{ theme: string; chapitre: string }> }) {
  const { theme, chapitre } = await params
  return <ChapitreClient theme={theme} chapitreSlug={chapitre} />
}
