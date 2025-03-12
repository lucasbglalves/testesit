'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Comunique-se
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="/curso" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cursos
            </Link>
            <Link href="/professores" className="text-gray-600 hover:text-blue-600 transition-colors">
              Professores
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contato
            </Link>
            <Link 
              href="/cadastro"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 