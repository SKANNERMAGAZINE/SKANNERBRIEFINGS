'use client'
import { useState } from 'react'
import Link from 'next/link'
import AuthGuard from '@/components/AuthGuard'
import Nav from '@/components/Nav'
import { THEME_LABELS, LEVEL_LABELS, type Theme, type Level } from '@/data/themes'
import { getChapitres } from '@/data/chapitres'
import { getChapitresDispo, getFichesByChapitre } from '@/data/fichesHtml'

const LEVELS: Level[] = ['deb','int','exp']

export default function ThematiqueClient({ theme }: { theme: string }) {
  const t = theme as Theme
  const [level, setLevel] = useState<Level>('deb')
  const chapitres = getChapitres(t)
  const dispo = getChapitresDispo(t)
  const label = THEME_LABELS[t]?.fr || 'Thématique'
  const totalDispo = chapitres.filter(c => c.statut !== 'bientot').length

  return (
    <AuthGuard>
      <Nav active="home" />
      <div className="tm-wrap">

        {/* En-tête thématique */}
        <header className="tm-head">
          <Link href="/home" className="tm-back">← Toutes les thématiques</Link>
          <span className="tm-tag">Thématique</span>
          <h1 className="tm-title">{label}</h1>
          <p className="tm-desc">Un parcours en {chapitres.length} chapitres, du fondamental à l'expertise. Fiches et templates actionnables.</p>
          <div className="tm-progress">
            <div className="tm-progress-track"><div className="tm-progress-fill" style={{width:`${Math.round(totalDispo/chapitres.length*100)}%`}} /></div>
            <span className="tm-progress-label">{totalDispo} / {chapitres.length} chapitres</span>
          </div>
        </header>

        {/* Sélecteur de niveau */}
        <div className="tm-levels">
          <span className="tm-levels-label">Niveau :</span>
          {LEVELS.map(l => (
            <button key={l} className={`tm-level-pill ${level===l?'active':''}`} onClick={()=>setLevel(l)}>
              {LEVEL_LABELS[l].fr}
            </button>
          ))}
        </div>

        {/* Grille des chapitres */}
        <div className="tm-grid">
          {chapitres.map(c => {
            const estDispo = c.statut !== 'bientot'
            const fiches = estDispo ? getFichesByChapitre(t, c.num, level) : []
            const card = (
              <div className={`tm-chap ${estDispo?'':'tm-chap-locked'}`}>
                <div className="tm-chap-top">
                  <span className="tm-chap-num">{String(c.num).padStart(2,'0')}</span>
                  {c.statut==='dispo' && <span className="tm-badge tm-badge-green">Dispo</span>}
                  {c.statut==='encours' && <span className="tm-badge tm-badge-yellow">En cours</span>}
                  {c.statut==='bientot' && <span className="tm-badge tm-badge-dark">Bientôt</span>}
                </div>
                <h3 className="tm-chap-name">{c.nom}</h3>
                <p className="tm-chap-desc">{c.desc}</p>
                {estDispo && fiches.length>0 && (
                  <div className="tm-chap-bars">
                    {[0,1,2,3].map(i => <span key={i} className={`tm-bar ${i<fiches.length?'on':''}`} />)}
                  </div>
                )}
              </div>
            )
            return estDispo
              ? <Link key={c.num} href={`/thematique/${t}/${c.slug}`} className="tm-chap-link">{card}</Link>
              : <div key={c.num}>{card}</div>
          })}
        </div>

        {/* Bandeau waiting list */}
        <div className="tm-cta">
          <div>
            <div className="tm-cta-title">Les prochains chapitres arrivent bientôt</div>
            <div className="tm-cta-sub">Sois notifié·e à chaque nouveau chapitre débloqué</div>
          </div>
          <Link href="/waitlist" className="tm-cta-btn">Rejoindre la liste</Link>
        </div>

      </div>
    </AuthGuard>
  )
}
