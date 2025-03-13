'use client'

import Header from '@/components/Header'

export default function Sobre() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-purple-400 animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-cyan-400 animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-pink-400 animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Sobre Nós
          </h1>
          
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-4 border border-white/10 space-y-4">
            <div>
              <p className="text-white/80">
                A Comunique-se nasceu da paixão por transformar vidas através da comunicação efetiva. 
                Nossa missão é capacitar pessoas a se expressarem com confiança e clareza.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Nossa História</h2>
              <p className="text-white/80">
                Fundada em 2024, nossa plataforma já ajudou centenas de pessoas a superarem seus desafios 
                na comunicação. Hoje contamos com uma equipe diversificada de especialistas.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Nossos Valores</h2>
              <ul className="grid grid-cols-2 gap-2 text-white/80">
                <li className="flex items-center">• Excelência no ensino</li>
                <li className="flex items-center">• Compromisso com resultados</li>
                <li className="flex items-center">• Inovação constante</li>
                <li className="flex items-center">• Atendimento personalizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 