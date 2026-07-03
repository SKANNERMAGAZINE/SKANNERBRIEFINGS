'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getSession, createSession, getUsers, saveUsers, hashPwd, ADMIN_EMAIL, ADMIN_PWD } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [tab, setTab] = useState<'signup'|'login'>('signup')
  const [msg, setMsg] = useState({ text:'', type:'' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (getSession()) router.replace('/home')
  }, [router])

  function showMsg(text: string, type: string) {
    setMsg({ text, type })
    if (type !== 'error') setTimeout(() => setMsg({text:'',type:''}), 4000)
  }

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const email = (fd.get('email') as string).trim().toLowerCase()
    const pwd = fd.get('password') as string
    const prenom = fd.get('prenom') as string

    if (!email || !pwd) { showMsg('Remplissez tous les champs.', 'error'); return }
    if (pwd.length < 8) { showMsg('Mot de passe : 8 caractères minimum.', 'error'); return }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) { showMsg('Email invalide.', 'error'); return }

    const users = getUsers()
    if (users.find(u => u.email === email)) {
      showMsg('Compte déjà existant — connectez-vous.', 'error'); return
    }

    const pwdHash = hashPwd(pwd)
    users.push({ email, prenom: prenom||'', nom:'', plan:'free', passwordHash: pwdHash })
    saveUsers(users)
    createSession(email, pwdHash, 'free')
    showMsg('Compte créé — redirection…', 'success')
    setTimeout(() => router.push('/home'), 700)
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const email = (fd.get('email') as string).trim().toLowerCase()
    const pwd = fd.get('password') as string

    if (!email || !pwd) { showMsg('Remplissez tous les champs.', 'error'); setLoading(false); return }

    if (email === ADMIN_EMAIL && pwd === ADMIN_PWD) {
      createSession(email, hashPwd(pwd), 'pro')
      router.push('/home'); return
    }

    const users = getUsers()
    const user = users.find(u => u.email === email)
    if (!user) { showMsg('Aucun compte avec cet email.', 'error'); setLoading(false); return }
    if (user.passwordHash !== hashPwd(pwd)) { showMsg('Mot de passe incorrect.', 'error'); setLoading(false); return }

    createSession(email, user.passwordHash, user.plan)
    router.push('/home')
  }

  return (
    <div className="landing">
      <div className="landing-img">
        <Image src="/hero.jpg" alt="BRIEFINGS by SKANNER" fill style={{objectFit:'contain',objectPosition:'center bottom'}} priority />
      </div>

      <div className="landing-panel">
        <div>
          <span className="logo-pre">Briefings</span>
          <div className="flex items-baseline">
            <span className="logo-s">SKANNER</span>
            <span className="logo-mag">MAGAZINE</span>
          </div>
        </div>

        <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:400, padding:'36px 0'}}>
          <h1 style={{fontSize:'clamp(36px,4.5vw,64px)',fontWeight:900,letterSpacing:'-.04em',textTransform:'uppercase',lineHeight:.9,marginBottom:20}}>
            Le savoir<br/>opérationnel.<br/>Pas le reste.
          </h1>
          <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.75,marginBottom:30,borderLeft:'2px solid var(--ink)',paddingLeft:16}}>
            Fiches, briefings et templates actionnables — <strong style={{color:'var(--ink)',fontWeight:600}}>pour les professionnels de la mode, du management et de la communication.</strong>
          </p>
          <div style={{width:28,height:1,background:'var(--rule)',marginBottom:26}}></div>

          <div className="auth-tabs">
            <div className={`auth-tab ${tab==='signup'?'on':''}`} onClick={() => setTab('signup')}>Créer un compte</div>
            <div className={`auth-tab ${tab==='login'?'on':''}`} onClick={() => setTab('login')}>Se connecter</div>
          </div>

          {msg.text && <div className={`auth-msg ${msg.type}`} style={{marginBottom:12}}>{msg.text}</div>}

          {tab === 'signup' && (
            <form onSubmit={handleSignup} style={{display:'flex',flexDirection:'column',gap:14}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <div><label className="fl">Prénom</label><input className="fi" name="prenom" placeholder="Prénom" /></div>
                <div><label className="fl">Nom</label><input className="fi" name="nom" placeholder="Nom" /></div>
              </div>
              <div><label className="fl">Email professionnel</label><input className="fi" type="email" name="email" placeholder="prenom@marque.com" required /></div>
              <div>
                <label className="fl">Secteur</label>
                <select className="fi" name="secteur">
                  <option value="">Choisir…</option>
                  <option>Mode & Luxe</option>
                  <option>Communication & PR</option>
                  <option>Management & RH</option>
                  <option>Marketing & Digital</option>
                  <option>Autre</option>
                </select>
              </div>
              <div><label className="fl">Mot de passe</label><input className="fi" type="password" name="password" placeholder="8 caractères minimum" minLength={8} required /></div>
              <button type="submit" className="btn btn-ink" style={{width:'100%'}}>Continuer →</button>
              <div style={{fontSize:11,color:'var(--muted)',textAlign:'center'}}>
                Déjà inscrit ? <span style={{color:'var(--ink)',cursor:'pointer',fontWeight:600,textDecoration:'underline'}} onClick={() => setTab('login')}>Se connecter</span>
              </div>
            </form>
          )}

          {tab === 'login' && (
            <form onSubmit={handleLogin} style={{display:'flex',flexDirection:'column',gap:14}}>
              <div><label className="fl">Email</label><input className="fi" type="email" name="email" placeholder="prenom@marque.com" required /></div>
              <div><label className="fl">Mot de passe</label><input className="fi" type="password" name="password" placeholder="••••••••" required /></div>
              <button type="submit" className="btn btn-ink" style={{width:'100%'}} disabled={loading}>
                {loading ? 'Connexion…' : 'Accéder →'}
              </button>
              <div style={{fontSize:11,color:'var(--muted)',textAlign:'center'}}>
                Pas de compte ? <span style={{color:'var(--ink)',cursor:'pointer',fontWeight:600,textDecoration:'underline'}} onClick={() => setTab('signup')}>S&apos;inscrire</span>
              </div>
            </form>
          )}
        </div>

        <div style={{fontSize:10,color:'var(--muted)',borderTop:'1px solid var(--rule)',paddingTop:16,display:'flex',justifyContent:'space-between'}}>
          <span>© 2026 Briefings by Skanner Magazine</span>
          <a href="/waitlist" style={{color:'var(--muted)'}}>Waiting List →</a>
        </div>
      </div>
    </div>
  )
}
