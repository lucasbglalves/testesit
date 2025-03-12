'use client'

import Header from '@/components/Header'

export default function Contato() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full max-w-5xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o assunto"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite sua mensagem"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Outras Formas de Contato</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-600 mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Paulista, 1000<br />
                    São Paulo - SP
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-600 mb-1">Contatos</h3>
                  <p className="text-gray-600">
                    Email: contato@comuniquese.com.br<br />
                    Telefone: (11) 1234-5678
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-600 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta<br />
                    9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 