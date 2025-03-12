'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { CheckCircleIcon, AcademicCapIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto pt-16 pb-20 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-blue-600 block mb-2">Desenvolva</span>
              suas habilidades de comunicação
            </h1>
            <p className="text-xl text-gray-600">
              Conectamos você com os melhores profissionais para aprimorar sua expressão verbal e corporal.
            </p>
            <div>
              <Link 
                href="/cadastro"
                className="inline-flex px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium"
              >
                Comece Agora
              </Link>
            </div>
          </div>
          <div className="relative h-72 md:h-96 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher a Comunique-se?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece tudo que você precisa para desenvolver suas habilidades de comunicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aulas Personalizadas</h3>
              <p className="text-sm text-gray-600">
                Aprenda no seu ritmo com professores especializados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feedback em Tempo Real</h3>
              <p className="text-sm text-gray-600">
                Receba orientações práticas para melhorar sua comunicação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ClockIcon className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexibilidade</h3>
              <p className="text-sm text-gray-600">
                Escolha horários que se adequem à sua rotina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Pronto para começar?</h2>
              <p className="text-blue-100 text-sm">Junte-se a milhares de alunos.</p>
            </div>
            <div className="flex gap-3">
              <Link 
                href="/cadastro" 
                className="px-5 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
              >
                Comece Agora
              </Link>
              <Link 
                href="/sobre" 
                className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 