'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false)
  const [msg, setMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const email = (fd.get('email') as string).trim().toLowerCase()
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) { setMsg('Email invalide.'); return }
    try {
      const list = JSON.parse(localStorage.getItem('bs_waitlist')||'[]')
      if (list.find((u: any) => u.email === email)) { setMsg('Vous êtes déjà sur la liste !'); return }
      list.push({ email, date: new Date().toISOString() })
      localStorage.setItem('bs_waitlist', JSON.stringify(list))
    } catch {}
    try {
      await fetch('/', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: new URLSearchParams(fd as any).toString() })
    } catch {}
    setSubmitted(true)
  }

  return (
    <div className="wl-page">
      <div className="wl-img" style={{position:'relative'}}>
        <Image src="/waitlist-cover.jpg" alt="BRIEFINGS by SKANNER" fill style={{objectFit:'contain',objectPosition:'center bottom'}} priority />
      </div>
      <div className="wl-panel">
        <div>
          <span className="logo-pre">Briefings</span>
          <div className="flex items-baseline"><span className="logo-s">SKANNER</span><span className="logo-mag">MAGAZINE</span></div>
        </div>

        <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',maxWidth:420,padding:'40px 0'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:9,fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--ink)',border:'1px solid var(--ink)',padding:'5px 12px',marginBottom:24,width:'fit-content'}}>
            <span style={{width:6,height:6,background:'var(--ink)',borderRadius:'50%',animation:'pulse 1.5s infinite',display:'inline-block'}}></span>
            Lancement imminent
          </div>
          <h1 style={{fontSize:'clamp(40px,5.5vw,72px)',fontWeight:900,letterSpacing:'-.04em',textTransform:'uppercase',lineHeight:.9,color:'var(--ink)',marginBottom:20}}>
            SOYEZ<br/>LES<br/>PREMIERS.
          </h1>
          <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.75,marginBottom:32,borderLeft:'2px solid var(--ink)',paddingLeft:16}}>
            <strong style={{color:'var(--ink)',fontWeight:600}}>BRIEFINGS by SKANNER Magazine</strong> — la plateforme de fiches et templates pour les professionnels de la mode.
          </p>

          <div style={{border:'1px solid var(--rule)',marginBottom:36}}>
            {['Fiches expertes par niveau — Débutant, Intermédiaire, Expert','54 templates — PR, Management, Marketing Mode','Switch de langue — FR, EN, ES, AR, ZH, KO','Accès anticipé & tarif préférentiel'].map(f => (
              <div key={f} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',borderBottom:'1px solid var(--rule)',fontSize:13,fontWeight:500,color:'var(--muted)'}}>
                <span style={{fontSize:10,fontWeight:900,color:'var(--ink)',flexShrink:0}}>→</span>{f}
              </div>
            ))}
          </div>

          {submitted ? (
            <div style={{padding:'20px 24px',background:'rgba(46,107,64,.06)',border:'1px solid rgba(46,107,64,.3)',borderLeft:'3px solid #2E6B40'}}>
              <div style={{fontSize:14,fontWeight:700,color:'#2E6B40',marginBottom:4}}>Vous êtes sur la liste </div>
              <div style={{fontSize:12,color:'var(--muted)',lineHeight:1.6}}>Vous serez parmi les premiers informés. Accès anticipé et tarif préférentiel garantis.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:12}}>
              <input type="hidden" name="form-name" value="waitlist" />
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <div><label className="fl">Prénom</label><input className="fi" name="prenom" placeholder="Prénom" required /></div>
                <div><label className="fl">Nom</label><input className="fi" name="nom" placeholder="Nom" /></div>
              </div>
              <div><label className="fl">Email professionnel</label><input className="fi" type="email" name="email" placeholder="prenom@marque.com" required /></div>
              <div>
                <label className="fl">Secteur</label>
                <select className="fi" name="secteur">
                  <option>Mode & Luxe</option><option>Communication & PR</option>
                  <option>Management & RH</option><option>Marketing & Digital</option><option>Autre</option>
                </select>
              </div>
              {msg && <p style={{fontSize:12,color:'#C8273A',fontWeight:600}}>{msg}</p>}
              <button type="submit" className="btn btn-ink" style={{width:'100%'}}>Rejoindre la waiting list →</button>
            </form>
          )}
        </div>

        <div style={{fontSize:10,color:'var(--muted)',borderTop:'1px solid var(--rule)',paddingTop:16,display:'flex',justifyContent:'space-between'}}>
          <span>© 2026 Briefings by Skanner Magazine</span>
          <Link href="/" style={{color:'var(--muted)'}}>Déjà inscrit ? Se connecter</Link>
        </div>
      </div>
    </div>
  )
}
