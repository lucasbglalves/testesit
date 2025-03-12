'use client'

import Header from '@/components/Header'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Professores() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-5xl mx-auto py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Nossa Equipe</h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Prof. Ana Silva</h2>
              <p className="text-blue-600 mb-2">Especialista em Oratória</p>
              <p className="text-gray-600 text-sm">
                15 anos de experiência em comunicação empresarial e treinamento de executivos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Prof. Carlos Santos</h2>
              <p className="text-blue-600 mb-2">Especialista em Expressão Corporal</p>
              <p className="text-gray-600 text-sm">
                Formado em teatro e especialista em comunicação não-verbal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Profa. Maria Costa</h2>
              <p className="text-blue-600 mb-2">Especialista em Comunicação Digital</p>
              <p className="text-gray-600 text-sm">
                Especialista em mídias digitais e comunicação para redes sociais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 