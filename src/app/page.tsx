'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { CheckCircleIcon, AcademicCapIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-0 -left-1/4 bg-pink-400 animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-purple-400 animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-cyan-400 animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 block mb-2">
                Desenvolva
              </span>
              <span className="text-white">
                suas habilidades de comunicação
              </span>
            </h1>
            <p className="text-xl text-white/80">
              Conectamos você com os melhores profissionais para aprimorar sua expressão verbal e corporal.
            </p>
            <div>
              <Link 
                href="/cadastro"
                className="glass-button inline-flex"
              >
                Comece Agora
              </Link>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl aspect-square relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-24 h-24 text-purple-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">Por que escolher a Comunique-se?</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Nossa plataforma oferece tudo que você precisa para desenvolver suas habilidades de comunicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-purple-400/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Aulas Personalizadas</h3>
              <p className="text-white/70">
                Aprenda no seu ritmo com professores especializados.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-purple-400/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Feedback em Tempo Real</h3>
              <p className="text-white/70">
                Receba orientações práticas para melhorar sua comunicação.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-purple-400/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flexibilidade</h3>
              <p className="text-white/70">
                Escolha horários que se adequem à sua rotina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Pronto para começar?</h2>
              <p className="text-white/70">Junte-se a milhares de alunos.</p>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/cadastro" 
                className="glass-button"
              >
                Comece Agora
              </Link>
              <Link 
                href="/sobre" 
                className="glass-button !bg-white/10 hover:!bg-white/20 border-white/30"
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