'use client'

import Header from '@/components/Header'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Curso() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Nossos Cursos</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Comunicação Básica</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Fundamentos da comunicação</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Expressão corporal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Oratória inicial</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Duração: 3 meses
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Comunicação Avançada</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Técnicas avançadas de oratória</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Comunicação empresarial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>Apresentações profissionais</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Duração: 6 meses
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 