'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Cadastro() {
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
            <h1 className="page-title">Criar Conta</h1>
            <p className="text-white/80">
              Junte-se a nossa comunidade e comece sua jornada
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-base font-medium text-white mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-[#FD6F2F]" />
                </div>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="glass-input pl-11"
                  placeholder="Digite seu nome"
                />
              </div>
            </div>

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
            </div>

            <div>
              <label htmlFor="confirmarSenha" className="block text-base font-medium text-white mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-[#FD6F2F]" />
                </div>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  className="glass-input pl-11"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            <button
              type="submit"
              className="glass-button w-full"
            >
              Criar Conta
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-[#FD6F2F] hover:text-[#e65a1a]">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 