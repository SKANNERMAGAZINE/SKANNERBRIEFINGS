// ════════════════════════════════════════════════════════════════
// SYSTÈME D'AUTHENTIFICATION — CÔTÉ CLIENT (localStorage)
// ════════════════════════════════════════════════════════════════
// ⚠️ AVERTISSEMENT DE SÉCURITÉ — À LIRE AVANT MISE EN PRODUCTION
//
// Ce système stocke les comptes et les sessions dans le localStorage du
// navigateur. Il convient pour une DÉMO ou un MVP, mais N'EST PAS sûr
// pour protéger du contenu réellement payant :
//   - Les données sont visibles et modifiables côté client (DevTools)
//   - Le hash de mot de passe est faible (pas de vrai salage serveur)
//   - Aucune vérification serveur : un utilisateur averti peut contourner
//
// POUR UNE VRAIE MISE EN PRODUCTION, migrer vers une auth serveur :
//   - Supabase Auth, NextAuth/Auth.js, ou Clerk
//   - Base de données pour les comptes + sessions signées côté serveur
//   - Vérification du plan d'abonnement côté serveur (lié à Stripe)
// Cette migration nécessite d'abandonner l'export statique (output: export)
// au profit d'un déploiement avec fonctions serveur (Vercel le gère nativement).
// ════════════════════════════════════════════════════════════════

export interface User {
  email: string
  prenom: string
  nom: string
  plan: 'free' | 'thematic' | 'bouquet' | 'pro'
  thematic?: string
  passwordHash: string
}

export interface Session {
  email: string
  plan: 'free' | 'thematic' | 'bouquet' | 'pro'
  thematic?: string
  token: string
  expires: number
}

const SEL = 'sk_briefings_2026_xK9mP'

function fnvHash(str: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = (h * 0x01000193) >>> 0
  }
  return h.toString(16)
}

export function hashPwd(pwd: string): string {
  let h = 0
  for (let i = 0; i < pwd.length; i++) {
    h = ((h << 5) - h) + pwd.charCodeAt(i)
    h = h & h
  }
  return h.toString(36)
}

function makeToken(email: string, pwdHash: string): string {
  return fnvHash(`${email}:${pwdHash}:${SEL}`)
}

export function getSession(): Session | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem('bs_session')
    if (!raw) return null
    const s: Session = JSON.parse(raw)
    if (!s?.email || !s?.token || !s?.expires) return null
    if (Date.now() > s.expires) {
      localStorage.removeItem('bs_session')
      return null
    }
    return s
  } catch { return null }
}

export function createSession(email: string, pwdHash: string, plan: Session['plan'], extra?: Partial<Session>): Session {
  const session: Session = {
    email,
    plan,
    token: makeToken(email, pwdHash),
    expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
    ...extra
  }
  localStorage.setItem('bs_session', JSON.stringify(session))
  return session
}

export function clearSession(): void {
  localStorage.removeItem('bs_session')
}

export function getUsers(): User[] {
  try { return JSON.parse(localStorage.getItem('bs_users') || '[]') } catch { return [] }
}

export function saveUsers(users: User[]): void {
  localStorage.setItem('bs_users', JSON.stringify(users))
}

export const ADMIN_EMAIL = 'admin@skanner.fr'
export const ADMIN_PWD = 'admin2026'
