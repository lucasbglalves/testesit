'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Verifica o estado de login quando o componente é montado
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            <Image
              src="/images/logocomuniquese.png"
              alt="Logo Comunique-se"
              width={160}
              height={64}
              style={{ objectFit: 'contain', height: '64px', width: 'auto' }}
              priority
            />
          </Link>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/sobre" className="text-white/80 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
              Preços
            </Link>
            <Link href="/professores" className="text-white/80 hover:text-white transition-colors">
              Professores
            </Link>
            <Link href="/contato" className="text-white/80 hover:text-white transition-colors">
              Contato
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-[#FD6F2F] hover:text-[#e65a1a] transition-colors">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="glass-button"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link href="/login" className="glass-button">
                Entrar
              </Link>
            )}
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4 px-4">
              <Link
                href="/sobre"
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/pricing"
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Preços
              </Link>
              <Link
                href="/professores"
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Professores
              </Link>
              <Link
                href="/contato"
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-[#FD6F2F] hover:text-[#e65a1a] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="glass-button w-full text-center"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="glass-button w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 