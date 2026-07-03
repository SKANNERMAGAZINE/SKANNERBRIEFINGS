import ThematiqueClient from './ThematiqueClient'

export function generateStaticParams() {
  return [{ theme: 'dd' }]
}

export default async function Page({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params
  return <ThematiqueClient theme={theme} />
}
