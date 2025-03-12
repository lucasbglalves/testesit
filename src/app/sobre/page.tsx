'use client'

import Header from '@/components/Header'

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-3xl mx-auto py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nós</h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              A Comunique-se nasceu da paixão por transformar vidas através da comunicação efetiva. 
              Nossa missão é capacitar pessoas a se expressarem com confiança e clareza em qualquer situação.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
            <p className="text-gray-600 mb-6">
              Fundada em 2024, nossa plataforma já ajudou centenas de pessoas a superarem seus desafios 
              na comunicação. Começamos com um pequeno grupo de professores dedicados e hoje contamos 
              com uma equipe diversificada de especialistas em comunicação.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Excelência no ensino</li>
              <li>Compromisso com resultados</li>
              <li>Inovação constante</li>
              <li>Atendimento personalizado</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
} 