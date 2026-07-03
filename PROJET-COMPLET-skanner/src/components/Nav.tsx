'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getSession, clearSession } from '@/lib/auth'

export default function Nav({ active }: { active?: string }) {
  const [user, setUser] = useState('')
  const [plan, setPlan] = useState('Gratuit')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const s = getSession()
    if (s) {
      setUser(s.email.split('@')[0])
      const labels: Record<string, string> = { free: 'Gratuit', thematic: 'Thématique', bouquet: 'Bouquet', pro: 'Pro' }
      setPlan(s.email === 'admin@skanner.fr' ? 'Admin' : (labels[s.plan] || 'Gratuit'))
    }
  }, [])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLogout = () => { clearSession(); window.location.href = '/' }

  return (
    <>
      <nav className="sitenav" aria-label="Navigation principale">
        <div className="nav-left">
          <Link href="/home" className={`nav-link ${active === 'home' ? 'active' : ''}`}>Thématiques</Link>
          <Link href="/formules" className={`nav-link ${active === 'formules' ? 'active' : ''}`}>Formules</Link>
          <Link href="/waitlist" className="nav-link" style={{ color: 'var(--sage)', fontWeight: 800 }}>Waiting List</Link>
        </div>

        <div className="nav-center">
          <Link href="/home" className="logo-wrap" aria-label="Accueil Briefings by Skanner Magazine">
            <span className="logo-pre">Briefings</span>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span className="logo-s">SKANNER</span>
              <span className="logo-mag">MAGAZINE</span>
            </div>
          </Link>
        </div>

        <div className="nav-right">
          <span className={`nav-badge ${plan === 'Pro' || plan === 'Admin' ? 'pro' : ''}`}>{plan}</span>
          <button onClick={handleLogout} className="nav-logout-btn" style={{ color: 'var(--muted)' }}>
            {user || 'Connexion'}
          </button>
        </div>

        {/* Bouton burger — visible mobile uniquement */}
        <button
          className="nav-burger"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`burger-line ${menuOpen ? 'open1' : ''}`} />
          <span className={`burger-line ${menuOpen ? 'open2' : ''}`} />
          <span className={`burger-line ${menuOpen ? 'open3' : ''}`} />
        </button>
      </nav>

      {/* Menu mobile plein écran */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navigation">
          <Link href="/home" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Thématiques</Link>
          <Link href="/formules" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Formules</Link>
          <Link href="/waitlist" className="mobile-menu-link" style={{ color: 'var(--sage)' }} onClick={() => setMenuOpen(false)}>Waiting List</Link>
          <div className="mobile-menu-divider" />
          <div className="mobile-menu-meta">
            <span className={`nav-badge ${plan === 'Pro' || plan === 'Admin' ? 'pro' : ''}`}>{plan}</span>
            {user && <span style={{ fontSize: 13, color: 'var(--muted)' }}>{user}</span>}
          </div>
          <button onClick={handleLogout} className="mobile-menu-link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>
            {user ? 'Déconnexion' : 'Connexion'}
          </button>
        </div>
      )}
    </>
  )
}
