'use client'
import Link from 'next/link'
import AuthGuard from '@/components/AuthGuard'
import Nav from '@/components/Nav'

const PLANS = [
  { num:'01', tag:'GRATUIT', name:'Découverte', price:'0', per:'Pour toujours', feats:['Accès découverte','Un aperçu par thématique'], na:['Thématiques complètes','Accès illimité'], cta:'Commencer gratuitement', href:'/home', style:{} },
  { num:'02', tag:'THÉMATIQUE', name:'Par rubrique', price:'9.99', per:'Par thématique — accès à vie', feats:['Une thématique complète','Les trois niveaux','Mises à jour incluses'], na:['Les autres thématiques'], cta:'Choisir une thématique', href:'/home', style:{} },
  { num:'03', tag:'POPULAIRE', name:'Bouquet', price:'45.90', per:'Accès à vie', feats:['PR & Communication','Management','Marketing Mode','Finance'], na:['Futures thématiques'], cta:'Accès complet', href:'https://buy.stripe.com/VOTRE_LIEN_BOUQUET', featured:true },
  { num:'04', tag:'PRO', name:'Full Access', price:'79.90', per:'Par an — accès illimité', feats:['Toutes les thématiques','Futures thématiques incluses','Nouveaux contenus en avant-première','Support prioritaire'], na:[], cta:'S\'abonner Full Access', href:'https://buy.stripe.com/VOTRE_LIEN_PRO', style:{} },
]

export default function FormulesPage() {
  return (
    <AuthGuard>
      <Nav active="formules" />
      <nav style={{display:'flex',alignItems:'center',gap:6,fontSize:10,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--muted)',padding:'11px 40px',borderBottom:'1px solid var(--rule)',background:'var(--paper)'}}>
        <Link href="/home" style={{color:'var(--muted)'}}>Accueil</Link>
        <span style={{color:'var(--rule)'}}>·</span>
        <span style={{color:'var(--ink)'}}>Formules</span>
      </nav>

      <div style={{padding:'60px 40px 80px'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:44,paddingBottom:18,borderBottom:'1px solid var(--rule)',flexWrap:'wrap',gap:16}}>
          <div>
            <div style={{fontSize:9,fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>Abonnements</div>
            <div style={{fontSize:'clamp(26px,3.5vw,44px)',fontWeight:900,letterSpacing:'-.02em',textTransform:'uppercase',lineHeight:.92}}>
              CHOISISSEZ<br/><span style={{fontWeight:400,fontStyle:'italic'}}>VOTRE ACCÈS</span>
            </div>
          </div>
          <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.7,maxWidth:280}}>Commencez gratuitement. Montez en puissance selon vos besoins.</p>
        </div>

        <div className="pricing-grid">
          {PLANS.map(p => (
            <div key={p.num} className={`plan ${(p as any).featured?'featured':''}`}>
              {(p as any).featured && <span style={{fontSize:8,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--yellow)',marginBottom:12,display:'block'}}>★ Populaire</span>}
              <div style={{fontSize:9,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',color:(p as any).featured?'rgba(255,255,255,.35)':'var(--muted)',marginBottom:12}}>{p.num} — {p.tag}</div>
              <div style={{fontSize:18,fontWeight:900,letterSpacing:'-.01em',textTransform:'uppercase',color:(p as any).featured?'#fff':'var(--ink)',marginBottom:5}}>{p.name}</div>
              <div className="plan-price">{p.price.includes('.')?<><sup style={{fontSize:17,verticalAlign:'super'}}>€</sup>{p.price.split('.')[0]}<span style={{fontSize:28,fontWeight:600}}>.{p.price.split('.')[1]}</span></>:<><sup style={{fontSize:17,verticalAlign:'super'}}>€</sup>{p.price}</>}</div>
              <div style={{fontSize:9,fontWeight:600,letterSpacing:'.12em',textTransform:'uppercase',color:(p as any).featured?'rgba(255,255,255,.38)':'var(--muted)',marginBottom:20}}>{p.per}</div>
              <div style={{height:1,background:(p as any).featured?'rgba(255,255,255,.15)':'var(--rule)',marginBottom:16}}></div>
              <div className="plan-feats" style={{flex:1,display:'flex',flexDirection:'column',marginBottom:16}}>
                {p.feats.map(f => <div key={f} className="plan-feat">{f}</div>)}
                {p.na?.map(f => <div key={f} className="plan-feat" style={{color:'#bbb'}}>{f}</div>)}
              </div>
              <a href={p.href} className={`btn ${(p as any).featured?'btn-featured':'btn-outline'}`} style={{width:'100%',marginTop:'auto'}}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        <div style={{marginTop:32,padding:'16px 0',borderTop:'1px solid var(--rule)',textAlign:'center',fontSize:12,color:'var(--muted)'}}>
          Pas encore prêt ? <Link href="/waitlist" style={{color:'var(--ink)',fontWeight:700,textDecoration:'underline',textUnderlineOffset:2}}>Rejoignez la waiting list</Link> pour un accès anticipé.
        </div>
      </div>

      <footer className="sitefooter">
        <div className="flex flex-col">
          <span className="logo-pre">Briefings</span>
          <div className="flex items-baseline"><span className="logo-s">SKANNER</span><span className="logo-mag">MAGAZINE</span></div>
        </div>
        <div className="footer-copy">© 2026 — Skanner Magazine</div>
      </footer>
    </AuthGuard>
  )
}
