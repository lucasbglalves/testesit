'use client';

import Header from '@/components/Header';
import { BookOpenIcon, ChatBubbleLeftRightIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const articles = [
  {
    id: 1,
    title: 'Fundamentos da Oratória',
    description: 'Aprenda os princípios básicos para falar em público com confiança.',
    author: 'Profa. Ana Silva',
    readTime: '15 min'
  },
  {
    id: 2,
    title: 'Técnicas de Expressão Corporal',
    description: 'Domine a linguagem não-verbal para uma comunicação mais efetiva.',
    author: 'Prof. Carlos Santos',
    readTime: '20 min'
  },
  {
    id: 3,
    title: 'Comunicação Digital',
    description: 'Estratégias para se comunicar efetivamente nas redes sociais.',
    author: 'Profa. Maria Costa',
    readTime: '12 min'
  }
];

const teachers = [
  {
    id: 1,
    name: 'Ana Silva',
    specialty: 'Oratória',
    status: 'Online'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    specialty: 'Expressão Corporal',
    status: 'Offline'
  },
  {
    id: 3,
    name: 'Maria Costa',
    specialty: 'Comunicação Digital',
    status: 'Online'
  }
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <div className="container">
        <div className="py-12">
          <h1 className="page-title">Dashboard do Aluno</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-8">
          {/* Artigos */}
          <div className="md:col-span-2">
            <div className="bg-black/40 p-6 rounded-lg border border-white/10">
              <h2 className="section-title flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-[#FD6F2F]" />
                Artigos Disponíveis
              </h2>
              <div className="space-y-4">
                {articles.map(article => (
                  <div key={article.id} className="p-4 rounded-lg bg-black/30 border border-white/10 hover:bg-black/40 transition-all cursor-pointer">
                    <h3 className="text-white font-medium">{article.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{article.description}</p>
                    <div className="flex items-center justify-between mt-2 text-sm text-white/60">
                      <span>{article.author}</span>
                      <span>{article.readTime} de leitura</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professores Online */}
          <div>
            <div className="bg-black/40 p-6 rounded-lg border border-white/10">
              <h2 className="section-title flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-[#FD6F2F]" />
                Professores
              </h2>
              <div className="space-y-3">
                {teachers.map(teacher => (
                  <div
                    key={teacher.id}
                    onClick={() => router.push(`/chat/${teacher.id}`)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/10 hover:bg-black/40 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FD6F2F]/20 flex items-center justify-center">
                      <AcademicCapIcon className="w-5 h-5 text-[#FD6F2F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{teacher.name}</h3>
                      <p className="text-white/70 text-sm">{teacher.specialty}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      teacher.status === 'Online' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {teacher.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 