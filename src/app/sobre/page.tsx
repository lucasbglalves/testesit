'use client'

import Header from '@/components/Header'
import { AcademicCapIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import CarouselInfo from '@/components/CarouselInfo'

export default function Sobre() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center items-center">
            <div style={{ width: '650px', height: '300px' }} className="bg-white/10 rounded-xl flex items-center justify-center overflow-hidden border border-white/20">
              <img src="/images/sobrenos01.png" alt="Sobre 1" className="object-cover w-full h-full" />
            </div>
            <div style={{ width: '650px', height: '300px' }} className="bg-white/10 rounded-xl flex items-center justify-center overflow-hidden border border-white/20">
              <img src="/images/sobrenos02.png" alt="Sobre 2" className="object-cover w-full h-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Sobre Nós
          </h1>
          
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10 space-y-4">
            <div>
              <p className="text-white/80">
                A Comunique-se nasceu com uma missão simples e poderosa: ajudar pessoas a desenvolverem sua comunicação pessoal e profissional de forma prática, assertiva e empática. Sabemos que muitas pessoas enfrentam obstáculos invisíveis, como a timidez, a introversão ou a ansiedade social, que dificultam sua capacidade de se expressar com clareza e confiança. Nosso papel é mostrar que isso pode ser superado.
              </p>
            </div>
            
            <div>
              <p className="text-white/80">
                Nossa plataforma é gratuita e pensada para todos que desejam melhorar suas habilidades de expressão. Além disso, oferecemos conteúdos exclusivos para profissionais que dependem de uma comunicação eficaz no dia a dia, como executivos, gestores, médicos, advogados, consultores e vendedores.
              </p>
            </div>

            <div>
              <p className="text-white/80">
                Acreditamos que comunicar-se bem é transformador. E é exatamente isso que oferecemos: ferramentas e conhecimento para transformar relações, influenciar decisões e gerar confiança em qualquer conversa.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">Nossa proposta é simples:</h2>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">• Conteúdo acessível e de fácil compreensão</li>
                <li className="flex items-center">• Leitura contabilizada para acompanhar seu progresso</li>
              </ul>
            </div>

            <div>
              <p className="text-white/80">
                Comunique-se é mais que uma plataforma é uma jornada rumo à sua melhor versão comunicativa. Seja para vencer debates em família ou liderar reuniões com autoridade, aqui você encontra o suporte que faltava.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CarouselInfo />
    </main>
  )
} 