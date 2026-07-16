'use client'
import Image from 'next/image'
import Link from 'next/link'
import AuthGuard from '@/components/AuthGuard'
import Nav from '@/components/Nav'

const MARQUEE = ['BRIEFINGS EXPERTS','PR & COMMUNICATION','MANAGEMENT','MARKETING MODE','FINANCE','DÉBUTANT · INTERMÉDIAIRE · EXPERT']

export default function HomePage() {

  return (
    <AuthGuard>
      <Nav active="home" />

      {/* HERO */}
      <section className="hero-editorial">
        <div className="hero-ed-img" style={{position:'relative'}}>
          <Image src="/hero.jpg" alt="Briefings by Skanner Magazine" fill style={{objectFit:'contain',objectPosition:'center bottom'}} priority />
        </div>
        <div className="hero-ed-panel">
          <div>
            <h1 className="hero-ed-title">BRIEF<span style={{fontWeight:400,fontStyle:'italic'}}>INGS</span><br/>EXPERTS.</h1>
            <p className="hero-ed-lead">Chaque sujet expliqué en une fiche, avec un template actionnable pour décider et agir tout de suite. <strong>Pensé pour les professionnels qui vont à l'essentiel.</strong></p>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a href="#thematiques" className="btn btn-ink">Voir les thématiques</a>
              <Link href="/formules" className="btn btn-outline">Formules</Link>
            </div>
          </div>
          <div style={{display:'flex',borderTop:'1px solid var(--rule)',paddingTop:24}}>
            {[['4','Thématiques'],['3','Niveaux'],['∞','À venir']].map(([n,l],i) => (
              <div key={l} style={{flex:1,paddingRight:i<2?16:0,borderRight:i<2?'1px solid var(--rule)':undefined,marginRight:i<2?16:0}}>
                <div style={{fontSize:34,fontWeight:900,letterSpacing:'-.03em',lineHeight:1,color:'var(--ink)'}}>{n}</div>
                <div style={{fontSize:9,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--muted)',marginTop:3}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRILLE DES THÉMATIQUES — vitrine cliquable */}
      <section id="thematiques" className="home-themes">
        <div className="home-themes-label">Les thématiques</div>
        <div className="home-themes-grid">

          <Link href="/thematique/dd" className="home-theme-card">
            <div className="home-theme-img" style={{position:'relative'}}>
              <Image src="/dd-mesurer.jpg" alt="Data & Digital" fill style={{objectFit:'cover',objectPosition:'center top'}} />
              <span className="home-theme-badge home-theme-badge-on">Disponible</span>
            </div>
            <div className="home-theme-body">
              <h3 className="home-theme-title">Data &amp; Digital</h3>
              <p className="home-theme-desc">Marketing digital, e-commerce, data et pilotage de la performance.</p>
              <div className="home-theme-stats">
                <div><span className="hts-n">12</span><span className="hts-l">Chapitres</span></div>
                <div><span className="hts-n">3</span><span className="hts-l">Niveaux</span></div>
              </div>
              <span className="home-theme-cta">Explorer →</span>
            </div>
          </Link>

          <Link href="/thematique/pr" className="home-theme-card">
            <div className="home-theme-img" style={{position:'relative',background:'linear-gradient(135deg,#FF6FD8,#E8FF00)'}}>
              <span className="home-theme-badge home-theme-badge-on">Disponible</span>
            </div>
            <div className="home-theme-body">
              <h3 className="home-theme-title">PR &amp; Communication</h3>
              <p className="home-theme-desc">Relations presse, prise de parole, image et influence.</p>
              <div className="home-theme-stats">
                <div><span className="hts-n">1</span><span className="hts-l">Chapitre</span></div>
                <div><span className="hts-n">3</span><span className="hts-l">Niveaux</span></div>
              </div>
              <span className="home-theme-cta">Explorer →</span>
            </div>
          </Link>

          <div className="home-theme-card home-theme-locked">
            <div className="home-theme-img" style={{background:'#DDDBD6',display:'flex',alignItems:'center',justifyContent:'center'}}>
              
              <span className="home-theme-badge home-theme-badge-soon">Bientôt</span>
            </div>
            <div className="home-theme-body">
              <h3 className="home-theme-title home-theme-title-off">Finance</h3>
              <p className="home-theme-desc home-theme-desc-off">Lire ses chiffres, arbitrer, financer sa croissance.</p>
              <span className="home-theme-cta home-theme-cta-off">Bientôt disponible</span>
            </div>
          </div>

          <div className="home-theme-card home-theme-locked">
            <div className="home-theme-img" style={{background:'#DDDBD6',display:'flex',alignItems:'center',justifyContent:'center'}}>
              
              <span className="home-theme-badge home-theme-badge-soon">Bientôt</span>
            </div>
            <div className="home-theme-body">
              <h3 className="home-theme-title home-theme-title-off">Management</h3>
              <p className="home-theme-desc home-theme-desc-off">Équipe, organisation, leadership et prise de décision.</p>
              <span className="home-theme-cta home-theme-cta-off">Bientôt disponible</span>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="sitefooter">
        <div style={{display:'flex',flexDirection:'column'}}>
          <span className="logo-pre">Briefings</span>
          <div style={{display:'flex',alignItems:'baseline'}}><span className="logo-s">SKANNER</span><span className="logo-mag">MAGAZINE</span></div>
        </div>
        <div className="footer-copy">© 2026 — Skanner Magazine</div>
      </footer>
    </AuthGuard>
  )
}
