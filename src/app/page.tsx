'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { ChatBubbleBottomCenterTextIcon, UserGroupIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-0 -left-1/4 bg-[#1F526B]"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA]"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7]"></div>
        <div className="background-blur bottom-0 -right-1/4 bg-[#FD6F2F]"></div>
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              <span className="text-white">
                Desenvolva sua comunicação de forma natural e efetiva
              </span>
            </h1>
            <p className="text-base text-white/80">
              Aprenda técnicas de comunicação com especialistas e transforme sua maneira de se expressar.
            </p>
            <div className="flex gap-3">
              <Link 
                href="/cadastro"
                className="glass-button"
              >
                Comece Agora
              </Link>
              <Link 
                href="/sobre"
                className="px-5 py-2 rounded-md text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg aspect-video relative overflow-hidden border border-white/20 hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <ChatBubbleBottomCenterTextIcon className="w-20 h-20 text-[#FD6F2F]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-white mb-3">Como podemos ajudar você?</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-sm">
              Nossa metodologia foi desenvolvida para ajudar você a se comunicar melhor em qualquer situação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-5 border border-white/20">
              <div className="icon-container">
                <AcademicCapIcon />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Metodologia Personalizada</h3>
              <p className="text-white/70 text-sm">
                Aulas adaptadas ao seu perfil e objetivos.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-5 border border-white/20">
              <div className="icon-container">
                <UserGroupIcon />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Prática em Grupo</h3>
              <p className="text-white/70 text-sm">
                Exercícios práticos com outros alunos para desenvolver habilidades sociais.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-5 border border-white/20">
              <div className="icon-container">
                <ClockIcon />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Horários Flexíveis</h3>
              <p className="text-white/70 text-sm">
                Agende suas aulas de acordo com sua disponibilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">Pronto para transformar sua comunicação?</h2>
                <p className="text-white/70 text-sm">Comece sua jornada hoje mesmo.</p>
              </div>
              <div className="flex gap-3">
                <Link 
                  href="/cadastro" 
                  className="glass-button"
                >
                  Comece Agora
                </Link>
                <Link 
                  href="/sobre" 
                  className="px-5 py-2 rounded-md text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 