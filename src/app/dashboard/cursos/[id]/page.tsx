'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { 
  AcademicCapIcon, 
  BookOpenIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

// Dados mockados do curso
const courseData = {
  id: 1,
  title: 'Oratória Avançada',
  instructor: 'Ana Silva',
  progress: 75,
  modules: [
    {
      id: 1,
      title: 'Fundamentos da Oratória',
      completed: true,
      lessons: [
        {
          id: 1,
          title: 'Introdução à Oratória',
          content: `A oratória é a arte de falar em público de forma clara, objetiva e impactante. Nesta primeira aula, vamos explorar os princípios fundamentais que todo orador deve conhecer.

Principais pontos abordados:
- A importância da comunicação efetiva
- Elementos básicos da oratória
- Superando o medo de falar em público
- Técnicas de respiração e controle vocal

Exercício prático:
1. Grave um vídeo de 2 minutos apresentando-se
2. Analise sua postura, voz e gestos
3. Identifique pontos de melhoria`,
          completed: true
        },
        {
          id: 2,
          title: 'Estrutura de uma Apresentação',
          content: `Uma boa apresentação precisa ter uma estrutura clara e coesa. Vamos aprender como organizar suas ideias de forma impactante.

Estrutura básica:
1. Introdução (15% do tempo)
   - Capturar a atenção
   - Apresentar o tema
   - Estabelecer credibilidade

2. Desenvolvimento (70% do tempo)
   - Argumentos principais
   - Exemplos e dados
   - Transições suaves

3. Conclusão (15% do tempo)
   - Resumo dos pontos principais
   - Call to action
   - Encerramento memorável

Exercício:
Crie uma estrutura para uma apresentação de 10 minutos sobre um tema de sua escolha.`,
          completed: true
        }
      ]
    },
    {
      id: 2,
      title: 'Técnicas Avançadas',
      completed: false,
      lessons: [
        {
          id: 3,
          title: 'Storytelling e Persuasão',
          content: `A arte de contar histórias é uma das ferramentas mais poderosas para engajar sua audiência.

Elementos do Storytelling:
- Personagem principal
- Conflito ou desafio
- Jornada de transformação
- Resolução

Técnicas de Persuasão:
1. Ethos (Credibilidade)
2. Pathos (Emoção)
3. Logos (Lógica)

Exercício:
Desenvolva uma história pessoal que ilustre um ponto importante da sua apresentação.`,
          completed: false
        },
        {
          id: 4,
          title: 'Gestos e Linguagem Corporal',
          content: `Sua linguagem corporal pode reforçar ou contradizer suas palavras. Aprenda a usar seu corpo para comunicar com mais efetividade.

Pontos principais:
- Postura e posicionamento
- Gestos e movimentos das mãos
- Expressões faciais
- Movimentação no palco

Exercício:
Pratique sua apresentação focando apenas nos aspectos não-verbais da comunicação.`,
          completed: false
        }
      ]
    }
  ]
};

export default function CoursePage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const router = useRouter();

  const handleModuleClick = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleLessonClick = (lessonId: number) => {
    setSelectedLesson(lessonId);
  };

  const getLessonContent = () => {
    for (const module of courseData.modules) {
      const lesson = module.lessons.find(l => l.id === selectedLesson);
      if (lesson) return lesson;
    }
    return null;
  };

  const currentLesson = getLessonContent();

  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <div className="container py-12">
        <div className="flex items-center gap-2 text-white/60 mb-6">
          <button onClick={() => router.push('/dashboard')} className="hover:text-white transition-colors">
            Dashboard
          </button>
          <ChevronRightIcon className="w-4 h-4" />
          <span className="text-white">Oratória Avançada</span>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar com módulos */}
          <div className="md:col-span-1">
            <div className="bg-black/40 rounded-lg border border-white/10 p-4">
              <div className="flex items-center gap-2 mb-4">
                <AcademicCapIcon className="w-5 h-5 text-[#FD6F2F]" />
                <h2 className="text-white font-medium">Módulos</h2>
              </div>
              <div className="space-y-2">
                {courseData.modules.map(module => (
                  <div key={module.id}>
                    <button
                      onClick={() => handleModuleClick(module.id)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {module.completed ? (
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        ) : (
                          <BookOpenIcon className="w-5 h-5 text-white/60" />
                        )}
                        <span className="text-white">{module.title}</span>
                      </div>
                      {expandedModule === module.id ? (
                        <ChevronDownIcon className="w-4 h-4 text-white/60" />
                      ) : (
                        <ChevronRightIcon className="w-4 h-4 text-white/60" />
                      )}
                    </button>
                    {expandedModule === module.id && (
                      <div className="ml-7 mt-2 space-y-1">
                        {module.lessons.map(lesson => (
                          <button
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson.id)}
                            className={`w-full text-left p-2 rounded-lg transition-colors ${
                              selectedLesson === lesson.id
                                ? 'bg-[#FD6F2F]/20 text-[#FD6F2F]'
                                : 'hover:bg-white/5 text-white/60 hover:text-white'
                            }`}
                          >
                            {lesson.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conteúdo da aula */}
          <div className="md:col-span-3">
            <div className="bg-black/40 rounded-lg border border-white/10 p-6">
              {currentLesson ? (
                <>
                  <h1 className="text-2xl font-semibold text-white mb-4">{currentLesson.title}</h1>
                  <div className="prose prose-invert max-w-none">
                    {currentLesson.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-white/80 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <button
                      className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      onClick={() => {
                        // Marcar aula como concluída
                        console.log('Marcar como concluída');
                      }}
                    >
                      Marcar como concluída
                    </button>
                    <div className="flex gap-2">
                      <button
                        className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        onClick={() => {
                          // Navegar para aula anterior
                          console.log('Aula anterior');
                        }}
                      >
                        Aula anterior
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg bg-[#FD6F2F] text-white hover:bg-[#FD6F2F]/90 transition-colors"
                        onClick={() => {
                          // Navegar para próxima aula
                          console.log('Próxima aula');
                        }}
                      >
                        Próxima aula
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-white/60 text-center py-12">
                  Selecione uma aula para começar
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 