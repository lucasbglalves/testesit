'use client'

import Header from '@/components/Header'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Curso() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Nossos Cursos
          </h1>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-3">Comunicação Básica</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#FD6F2F]" />
                  <span className="text-white/80">Fundamentos da comunicação</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#FD6F2F]" />
                  <span className="text-white/80">Expressão corporal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#FD6F2F]" />
                  <span className="text-white/80">Oratória inicial</span>
                </li>
              </ul>
              <p className="mt-3 text-white/70">
                Duração: 3 meses
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-3">Comunicação Avançada</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#FD6F2F]" />
                  <span className="text-white/80">Técnicas avançadas de oratória</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#FD6F2F]" />
                  <span className="text-white/80">Comunicação empresarial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#FD6F2F]" />
                  <span className="text-white/80">Apresentações profissionais</span>
                </li>
              </ul>
              <p className="mt-3 text-white/70">
                Duração: 6 meses
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 