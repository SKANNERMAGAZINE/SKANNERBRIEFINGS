'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSession } from '@/lib/auth'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const s = getSession()
    if (!s) {
      router.replace('/')
    } else {
      setOk(true)
    }
  }, [router])

  if (!ok) return null
  return <>{children}</>
}
