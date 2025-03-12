'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          Comunique-se
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/sobre" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Sobre
          </Link>
          <Link href="/cursos" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Cursos
          </Link>
          <Link href="/professores" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Professores
          </Link>
          <Link href="/contato" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Contato
          </Link>
          <div className="flex items-center space-x-3 ml-4">
            <Link 
              href="/login" 
              className="text-sm px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/cadastro" 
              className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Começar
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-1.5 text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="py-2 px-4 space-y-2">
              <Link
                href="/sobre"
                className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/cursos"
                className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link
                href="/professores"
                className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Professores
              </Link>
              <Link
                href="/contato"
                className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="pt-2 space-y-2">
                <Link
                  href="/login"
                  className="block w-full py-2 text-sm text-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entrar
                </Link>
                <Link
                  href="/cadastro"
                  className="block w-full py-2 text-sm text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Começar
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 