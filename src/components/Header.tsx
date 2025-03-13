'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg"></div>
      <nav className="container mx-auto px-4 h-16 relative">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-white drop-shadow">
            Comunique-se
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/sobre" className="text-white/90 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="/curso" className="text-white/90 hover:text-white transition-colors">
              Cursos
            </Link>
            <Link href="/professores" className="text-white/90 hover:text-white transition-colors">
              Professores
            </Link>
            <Link href="/contato" className="text-white/90 hover:text-white transition-colors">
              Contato
            </Link>
            <Link 
              href="/cadastro"
              className="glass-button !px-6 !py-2"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 