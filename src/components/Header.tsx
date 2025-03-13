'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
      <nav className="container mx-auto px-4 h-14 relative">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-lg font-medium text-white">
            Comunique-se
          </Link>
          
          <div className="hidden md:flex items-center gap-5">
            <Link href="/sobre" className="text-sm text-white/80 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="/curso" className="text-sm text-white/80 hover:text-white transition-colors">
              Cursos
            </Link>
            <Link href="/professores" className="text-sm text-white/80 hover:text-white transition-colors">
              Professores
            </Link>
            <Link href="/contato" className="text-sm text-white/80 hover:text-white transition-colors">
              Contato
            </Link>
            <Link 
              href="/cadastro"
              className="glass-button ml-2"
            >
              Começar Agora
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-4 bg-white/5 backdrop-blur-md md:hidden border-t border-white/10">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/sobre" 
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/curso" 
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link 
                href="/professores" 
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Professores
              </Link>
              <Link 
                href="/contato" 
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                href="/cadastro"
                className="glass-button text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar Agora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 