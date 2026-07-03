'use client'
import { useState } from 'react'
import Link from 'next/link'
import AuthGuard from '@/components/AuthGuard'
import Nav from '@/components/Nav'
import { THEME_LABELS, LEVEL_LABELS, type Theme, type Level } from '@/data/themes'
import { getChapitre } from '@/data/chapitres'
import { getFichesByChapitre } from '@/data/fichesHtml'

const LEVELS: Level[] = ['deb','int','exp']

export default function ChapitreClient({ theme, chapitreSlug }: { theme: string; chapitreSlug: string }) {
  const t = theme as Theme
  const [level, setLevel] = useState<Level>('deb')
  const chap = getChapitre(t, chapitreSlug)
  const label = THEME_LABELS[t]?.fr || 'Thématique'

  if (!chap) {
    return <AuthGuard><Nav active="home" /><div className="tm-wrap"><p style={{padding:40}}>Chapitre introuvable.</p></div></AuthGuard>
  }

  const fiches = getFichesByChapitre(t, chap.num, level)
  const complet = chap.statut === 'dispo'

  return (
    <AuthGuard>
      <Nav active="home" />
      <div className="tm-wrap">

        <header className="tm-head tm-head-chap">
          <Link href={`/thematique/${t}`} className="tm-back">← {label}</Link>
          <div className="tm-chap-hero">
            <span className="tm-chap-hero-num">{String(chap.num).padStart(2,'0')}</span>
            <div>
              {complet && <span className="tm-badge tm-badge-green">Chapitre complet</span>}
              {chap.statut==='encours' && <span className="tm-badge tm-badge-yellow">En cours</span>}
              <h1 className="tm-title" style={{marginTop:8}}>{chap.nom}</h1>
              <p className="tm-desc">{chap.desc}</p>
            </div>
          </div>
        </header>

        <div className="tm-levels">
          <span className="tm-levels-label">Niveau :</span>
          {LEVELS.map(l => (
            <button key={l} className={`tm-level-pill ${level===l?'active':''}`} onClick={()=>setLevel(l)}>
              {LEVEL_LABELS[l].fr}
            </button>
          ))}
        </div>

        <div className="tm-fiches">
          {fiches.length === 0 ? (
            <div className="tm-empty">
              <p>Les fiches de ce niveau arrivent bientôt.</p>
              <Link href="/waitlist" className="tm-cta-btn">Être notifié·e</Link>
            </div>
          ) : fiches.map((f, i) => (
            <a key={f.slug} href={`/fiches-html/${f.slug}.html`} className="tm-fiche">
              <span className="tm-fiche-num">{i+1}</span>
              <div className="tm-fiche-body">
                <h4 className="tm-fiche-name">{f.name}</h4>
                <span className="tm-fiche-meta">{f.desc.split('·')[0].trim()} · {f.duree} · fiche + template</span>
              </div>
              <span className="tm-fiche-open">Ouvrir →</span>
            </a>
          ))}
        </div>

      </div>
    </AuthGuard>
  )
}
