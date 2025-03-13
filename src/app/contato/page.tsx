'use client'

import Header from '@/components/Header'

export default function Contato() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-pink-400 animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-purple-400 animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-cyan-400 animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Entre em Contato
          </h1>
          
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10">
            <form className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-white mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="glass-input !py-2"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="glass-input !py-2"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-white mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="glass-input !py-2"
                  placeholder="Digite o assunto"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={2}
                  className="glass-input resize-none !py-2"
                  placeholder="Digite sua mensagem"
                />
              </div>

              <button
                type="submit"
                className="glass-button w-full !py-2"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 