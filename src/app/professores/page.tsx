'use client'

import Header from '@/components/Header'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Professores() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Nossa Equipe
          </h1>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10">
              <div className="w-16 h-16 bg-[#FD6F2F]/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <AcademicCapIcon className="w-8 h-8 text-[#FD6F2F]" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1">Prof. Ana Silva</h2>
              <p className="text-[#FD6F2F] mb-2">Especialista em Oratória</p>
              <p className="text-white/70 text-sm">
                15 anos de experiência em comunicação empresarial.
              </p>
            </div>

            <div className="text-center backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10">
              <div className="w-16 h-16 bg-[#FD6F2F]/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <AcademicCapIcon className="w-8 h-8 text-[#FD6F2F]" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1">Prof. Carlos Santos</h2>
              <p className="text-[#FD6F2F] mb-2">Especialista em Expressão</p>
              <p className="text-white/70 text-sm">
                Formado em teatro e comunicação não-verbal.
              </p>
            </div>

            <div className="text-center backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10">
              <div className="w-16 h-16 bg-[#FD6F2F]/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <AcademicCapIcon className="w-8 h-8 text-[#FD6F2F]" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1">Profa. Maria Costa</h2>
              <p className="text-[#FD6F2F] mb-2">Especialista em Digital</p>
              <p className="text-white/70 text-sm">
                Especialista em mídias e redes sociais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 