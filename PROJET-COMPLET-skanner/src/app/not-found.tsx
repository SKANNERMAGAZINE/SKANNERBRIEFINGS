import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', background: '#fff' }}>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 2 }}>Briefings</span>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
          <span style={{ fontSize: 20, fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-.02em' }}>SKANNER</span>
          <span style={{ fontSize: 20, fontWeight: 400, fontStyle: 'italic', textTransform: 'uppercase' }}>MAGAZINE</span>
        </div>
      </div>
      <h1 style={{ fontSize: 'clamp(64px,12vw,140px)', fontWeight: 900, letterSpacing: '-.05em', lineHeight: .85, color: 'var(--ink)', marginBottom: 16 }}>404</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 360, lineHeight: 1.6, marginBottom: 32 }}>
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/home" className="btn btn-ink">← Retour à l&apos;accueil</Link>
    </main>
  )
}
