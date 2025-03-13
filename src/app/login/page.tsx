'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Login() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-md mx-auto w-full py-12">
          <div className="text-center mb-8">
            <h1 className="page-title">Bem-vindo de volta</h1>
            <p className="text-white/80">
              Entre na sua conta para continuar
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-base font-medium text-white mb-2">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-[#FD6F2F]" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="glass-input pl-11"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <div>
              <label htmlFor="senha" className="block text-base font-medium text-white mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-[#FD6F2F]" />
                </div>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="glass-input pl-11"
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="lembrar"
                    name="lembrar"
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/30 bg-white/10 text-[#FD6F2F] focus:ring-[#FD6F2F]"
                  />
                  <label htmlFor="lembrar" className="ml-2 block text-sm text-white/70">
                    Lembrar-me
                  </label>
                </div>
                <Link href="/recuperar-senha" className="text-sm text-[#FD6F2F] hover:text-[#e65a1a]">
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="glass-button w-full"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70">
              Ainda não tem uma conta?{' '}
              <Link href="/cadastro" className="text-[#FD6F2F] hover:text-[#e65a1a]">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 