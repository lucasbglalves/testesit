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
import { useRouter, useParams } from 'next/navigation';

// Dados mockados dos cursos
const initialCoursesData = [
  {
    id: 1,
    title: 'Linguagem Corporal',
    instructor: 'Ana Silva',
    progress: 75,
    modules: [
      {
        id: 3,
        title: 'Comunicação e Expressão',
        completed: false,
        lessons: [
          {
            id: 5,
            title: 'Linguagem Corporal e Emoções',
            content: `A linguagem corporal expressa emoções de forma inconsciente, revelando sentimentos que podem não ser verbalizados. Gestos, posturas e expressões faciais comunicam estados emocionais, permitindo que os outros percebam a intenção e o interesse. Assim, a interpretação da linguagem corporal pode influenciar a compreensão e a resposta emocional nas interações sociais.

Conflitos internos consomem energia mental e emocional, dificultando a atenção plena e a observação dos outros. Quando estamos imersos em nossos próprios conflitos, tendemos a projetar nossas emoções e percepções, tornando-nos menos receptivos às experiências alheias. Isso resulta em uma visão distorcida dos fenômenos que ocorrem ao nosso redor, limitando nossa empatia e compreensão.

Os elementos principais da Técnica de Alexander incluem o uso correto do centro de gravidade e a conscientização das posturas e hábitos corporais. A técnica visa corrigir malformações físicas e tensões musculares, promovendo harmonia e repouso no corpo. Além disso, enfatiza a aprendizagem do uso adequado do corpo, em vez de apenas realizar exercícios.

Técnica de Alexander: Melhore sua postura e consciência corporal para transmitir confiança e clareza.
Prática de Movimentos: Realize exercícios de relaxamento e respiração para reduzir a tensão e aumentar a presença.
Observação da Linguagem Corporal: Treine a percepção das reações do público e ajuste sua comunicação não verbal para engajar melhor a audiência.

A linguagem corporal pode ser lida e interpretada através da observação de gestos, posturas e expressões faciais, que revelam emoções e intenções. É importante considerar o contexto e a cultura, pois diferentes ambientes podem influenciar a interpretação dos sinais. Além disso, a prática e a conscientização ajudam a discernir padrões e significados, permitindo uma compreensão mais profunda das interações humanas.

Princípios da Linguagem Corporal:
- Exploração dos fundamentos que permitem entender a comunicação não verbal
- Interpretação de Gestos e Expressões: Análise de como os gestos e expressões faciais refletem emoções e intenções
- Aplicações Práticas: Técnicas para melhorar a comunicação interpessoal e a expressão corporal, especialmente em contextos como o amor e apresentações

Comunicação Simultânea: A linguagem do corpo transmite múltiplas mensagens ao mesmo tempo, que podem ser analisadas em conjunto para entender a emoção dominante.
Inconsciente e Consciente: A linguagem corporal reflete tanto emoções conscientes quanto inconscientes, revelando o que a pessoa realmente sente.
Estrutura e Simplicidade: A linguagem do corpo possui uma estrutura básica que é intuitiva e familiar, permitindo que as pessoas reconheçam e interpretem gestos e posturas facilmente.

Estes princípios ajudam a decifrar a comunicação não verbal nas interações humanas.`,
            completed: false
          },
          {
            id: 6,
            title: 'Interpretação e Aplicação Prática',
            content: `Interpretação de Gestos e Expressões: envolve a análise de como os movimentos corporais e as expressões faciais comunicam emoções e intenções.

Gestos: Os gestos podem ser classificados em diferentes categorias, como gestos emblemáticos (que têm um significado específico, como acenar) e gestos ilustrativos (que acompanham a fala para enfatizar uma ideia). A intensidade e a frequência dos gestos também podem indicar o nível de emoção ou envolvimento da pessoa.

Expressões Faciais: O rosto é um dos principais veículos de comunicação emocional. Expressões como sorrisos, franzir de sobrancelhas e olhares podem transmitir alegria, raiva, surpresa ou tristeza. A microexpressão, que são expressões faciais rápidas e involuntárias, pode revelar sentimentos ocultos.

Postura e Proxêmica: A postura geral de uma pessoa (aberta ou fechada) e a distância em relação aos outros (proxêmica) também são cruciais. Uma postura aberta e uma proximidade adequada podem indicar receptividade e interesse, enquanto uma postura fechada ou distância excessiva podem sinalizar desconforto ou desinteresse.

Esses elementos, quando analisados em conjunto, oferecem uma visão mais clara das emoções e intenções de uma pessoa durante a comunicação.

As Aplicações Práticas da linguagem corporal envolvem a utilização dos princípios e conceitos aprendidos para melhorar a comunicação e as interações interpessoais:

Desenvolvimento de Habilidades de Observação: A prática de observar a linguagem corporal em diferentes contextos ajuda a identificar padrões e a entender melhor as emoções dos outros. Exercícios com amigos ou colegas podem ser realizados para analisar gestos e expressões, promovendo uma maior consciência sobre como a comunicação não verbal afeta as interações.

Expressão Emocional: Aprender a usar a linguagem corporal de forma consciente permite que as pessoas expressem suas emoções de maneira mais autêntica. Isso é especialmente importante em situações como apresentações, onde a confiança e a empatia podem ser transmitidas através de gestos, posturas e expressões faciais adequadas.

Melhoria nas Relações Interpessoais: A aplicação dos conhecimentos sobre linguagem corporal pode fortalecer relacionamentos, pois permite uma comunicação mais clara e eficaz. Ao entender as emoções dos outros e ajustar a própria linguagem corporal, é possível criar um ambiente mais positivo e colaborativo.

Essas aplicações práticas visam não apenas melhorar a comunicação, mas também aumentar a empatia e a conexão entre as pessoas.`,
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Comunicação Organizacional',
    instructor: 'Carlos Santos',
    progress: 30,
    modules: [
      {
        id: 1,
        title: 'A comunicação no contexto organizacional',
        completed: false,
        lessons: [
          {
            id: 1,
            title: 'A comunicação no contexto organizacional',
            content: `A comunicação organizacional é entendida como o processo que viabiliza o fluxo de informações dentro das instituições. Não se restringe a simples trocas de mensagens, mas constitui um elo fundamental para o funcionamento e a sobrevivência das organizações. Sua função vai além de informar: ela motiva, orienta comportamentos e influencia a cultura institucional.
Dentro do ambiente organizacional, a comunicação pode ocorrer de forma formal ou informal. A comunicação formal segue fluxos hierárquicos e procedimentos oficiais, enquanto a informal surge de maneira espontânea entre os colaboradores. Ambas exercem papéis importantes no desenvolvimento e no clima organizacional.

Comunicação e cultura organizacional
A comunicação é um dos pilares da cultura organizacional, uma vez que transmite os valores, crenças e normas compartilhados pelos membros da organização. Através da linguagem e dos símbolos comunicacionais, os indivíduos internalizam a identidade e os objetivos institucionais.

Tipos de comunicação
A comunicação organizacional pode ser classificada de diversas formas. Uma das classificações mais comuns envolve: comunicação interna (voltada para o público interno da empresa) e comunicação externa (focada em públicos externos como clientes, parceiros e sociedade).
A comunicação interna é essencial para promover o engajamento dos colaboradores e fortalecer o senso de pertencimento. Ela pode se dar por canais diversos, como murais, jornais internos, reuniões, e-mails e redes corporativas. Já a comunicação externa é estratégica para consolidar a imagem institucional e deve ser gerenciada com cuidado, principalmente em tempos de crise.
A comunicação como ferramenta de gestão
Mais do que uma função operacional, a comunicação deve ser vista como uma ferramenta de gestão. Líderes e gestores precisam dominar competências comunicacionais para conduzir equipes, tomar decisões e gerir mudanças. A comunicação eficaz permite alinhar objetivos, reduzir conflitos e fomentar um ambiente colaborativo.
 Barreiras à comunicação
As barreiras à comunicação podem comprometer o desempenho organizacional. Entre os obstáculos mais comuns estão o ruído, a falta de feedback, interpretações equivocadas, falhas nos canais e problemas culturais. Superar essas barreiras requer investimento em políticas de comunicação claras, capacitação e abertura ao diálogo.

6. Planejamento da comunicação organizacional
Um planejamento adequado da comunicação organizacional inclui diagnóstico, definição de objetivos, identificação de públicos, escolha de canais, cronograma e avaliação de resultados. Esse processo torna a comunicação mais estratégica e alinhada às metas institucionais.

Considerações finais
A comunicação organizacional é um elemento vital para o sucesso das empresas. Ela impacta diretamente a produtividade, o clima interno, a imagem pública e a competitividade. Portanto, deve ser gerenciada com seriedade, por meio de práticas que promovam a clareza, a escuta e o alinhamento institucional.

Referências
O conteúdo deste resumo foi parafraseado a partir do documento:
FREITAS, Luiz Carlos de. Comunicação Organizacional. Apostila acadêmica.`,
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Comunicação Corporativa',
    instructor: 'Maria Costa',
    progress: 90,
    modules: [
      {
        id: 1,
        title: 'Fundamentos da Comunicação Interpessoal e Corporativa',
        completed: false,
        lessons: [
          {
            id: 1,
            title: 'Fundamentos da Comunicação Interpessoal e Corporativa',
            content: 'A comunicação é essencial para o funcionamento eficaz das organizações. Muitas falhas de entendimento ocorrem não por falta de vocabulário, mas por bloqueios emocionais como medo, ciúmes ou ressentimento. A base de toda comunicação bem-sucedida está no entendimento do significado e no processo de codificação e decodificação da mensagem. O emissor deve adaptar sua linguagem ao repertório do receptor para evitar ruídos e interpretações equivocadas. Segundo o material da LCN Gestão (2016), comunicar não é apenas transmitir informações, mas garantir que o conteúdo seja compreendido de forma eficaz.',
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: 'Barreiras e Ruídos na Comunicação Organizacional',
        completed: false,
        lessons: [
          {
            id: 1,
            title: 'Barreiras e Ruídos na Comunicação Organizacional',
            content: 'As falhas na comunicação têm origem quando o emissor considera o receptor como um agente passivo. As diferenças de experiências, cultura, temperamento e percepção afetam a interpretação da mensagem. Os ruídos mais comuns incluem: excesso de dados, falta de liderança, cultura organizacional fechada, e baixa empatia. Emoções fortes agem como ruídos, distorcendo o significado. É vital reconhecer que tanto emissor quanto receptor têm responsabilidades compartilhadas no processo comunicacional.',
            completed: false
          }
        ]
      },
      {
        id: 3,
        title: 'Confiança, Relações Humanas e Intenção Comunicacional',
        completed: false,
        lessons: [
          {
            id: 1,
            title: 'Confiança, Relações Humanas e Intenção Comunicacional',
            content: 'Relações humanas moldam a comunicação. Onde há confiança, há mais abertura e compreensão. Onde há desconfiança, a comunicação tende ao fracasso, mesmo com palavras bem escolhidas. É essencial que o emissor compreenda como é percebido pelo receptor, tanto em termos de significado total (quem é) quanto de intenção específica (o que pretende). A comunicação corporativa deve partir da ação coerente, pois atitudes falam mais alto que palavras. Relações são construídas por meio da empatia, escuta ativa e intenção clara.\n\nOs Três Componentes da Mensagem: Fatos, Sentimentos e Propósitos\nToda mensagem codificada possui três elementos: fatos objetivos (dados e informações), sentimentos (reações emocionais) e propósitos (intenções do emissor). O bom comunicador deve ser preciso, breve e claro com os fatos; demonstrar empatia e respeitar os sentimentos alheios; e deixar claro seu propósito. Compreender e equilibrar esses três aspectos reduz conflitos e aumenta a efetividade da comunicação. Ao integrar sentimentos e intenções aos fatos, a comunicação ganha humanidade e direção.',
            completed: false
          }
        ]
      },
      {
        id: 4,
        title: 'O Papel da Liderança e a Alta Direção na Comunicação',
        completed: false,
        lessons: [
          {
            id: 1,
            title: 'O Papel da Liderança e a Alta Direção na Comunicação',
            content: 'A alta direção tem papel central na comunicação corporativa. Ela deve garantir fluidez nos fluxos de informação, coerência entre discurso e prática e sinceridade na partilha de dados. A comunicação eficaz envolve adaptação ao ponto de vista do receptor, transmissão dos conteúdos em pequenas doses, e abertura para feedback e participação ativa. O líder deve agir como facilitador do diálogo, criando espaços de escuta e expressão.',
            completed: false
          }
        ]
      },
      {
        id: 5,
        title: 'Competências do Comunicador Eficaz e Boas Práticas',
        completed: false,
        lessons: [
          {
            id: 1,
            title: 'Competências do Comunicador Eficaz e Boas Práticas',
            content: 'O comunicador eficaz é um bom ouvinte, empático, aberto a críticas construtivas e preparado para dialogar. Deve confirmar a compreensão da mensagem, ser assertivo e estimular a expressão do outro. É fundamental buscar feedbacks, adequar a linguagem à audiência e praticar a escuta ativa. A melhoria contínua das competências comunicacionais é um diferencial competitivo tanto para o profissional quanto para a organização.\n\nReferência:\nCASTRO, Luciano. Comunicação Empresarial. LCN Gestão, 2016. Disponível em: https://www.lcngestao.com.br',
            completed: false
          }
        ]
      }
    ]
  }
];

export default function CoursePage() {
  const params = useParams();
  const courseId = Number(params.id);

  // Usar useState para gerenciar os dados do curso e permitir atualizações
  const [coursesData, setCoursesData] = useState(initialCoursesData);

  const courseData = coursesData.find(c => c.id === courseId);

  const [expandedModule, setExpandedModule] = useState<number | null>(courseData?.modules[0]?.id || null);
  const [selectedLesson, setSelectedLesson] = useState<number>(courseData?.modules[0]?.lessons[0]?.id || 1);
  const router = useRouter();

  if (!courseData) {
    return <div className="text-white text-center py-12">Curso não encontrado.</div>;
  }

  const handleModuleClick = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
    // Se o módulo foi expandido, selecione a primeira lição dele
    if (expandedModule !== moduleId) {
      const moduleToExpand = courseData?.modules.find(m => m.id === moduleId);
      if (moduleToExpand && moduleToExpand.lessons.length > 0) {
        setSelectedLesson(moduleToExpand.lessons[0].id);
      }
    }
  };

  const handleLessonClick = (lessonId: number) => {
    setSelectedLesson(lessonId);
    
    // Marcar a lição como concluída no estado local
    setCoursesData(prevCoursesData => {
      return prevCoursesData.map(course => {
        if (course.id === courseId) {
          return {
            ...course,
            modules: course.modules.map(module => {
              return {
                ...module,
                lessons: module.lessons.map(lesson => {
                  if (lesson.id === lessonId) {
                    return { ...lesson, completed: true };
                  }
                  return lesson;
                })
              };
            })
          };
        }
        return course;
      });
    });
  };

  const getLessonContent = () => {
    for (const module of courseData.modules) {
      const lesson = module.lessons.find(l => l.id === selectedLesson);
      if (lesson) return lesson;
    }
    return null;
  };

  // Função para encontrar a lição atual e seu índice
  const findCurrentLessonInfo = () => {
    let currentModuleIndex = -1;
    let currentLessonIndex = -1;

    for (let i = 0; i < courseData.modules.length; i++) {
      const module = courseData.modules[i];
      const lessonIndex = module.lessons.findIndex(l => l.id === selectedLesson);
      if (lessonIndex !== -1) {
        currentModuleIndex = i;
        currentLessonIndex = lessonIndex;
        return { module, lessonIndex, currentModuleIndex };
      }
    }
    return null;
  };

  const currentLessonInfo = findCurrentLessonInfo();
  const currentModule = currentLessonInfo?.module;
  const currentLessonIndex = currentLessonInfo?.lessonIndex;
  const currentModuleIndex = currentLessonInfo?.currentModuleIndex;

  // Lógica para navegar para a próxima aula
  const goToNextLesson = () => {
    if (!currentModule || currentLessonIndex === undefined || currentModuleIndex === undefined) return;

    // Verifica se há uma próxima lição no módulo atual
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setSelectedLesson(currentModule.lessons[currentLessonIndex + 1].id);
    } else {
      // Se não houver próxima lição no módulo atual, procura o próximo módulo
      if (currentModuleIndex < courseData.modules.length - 1) {
        const nextModule = courseData.modules[currentModuleIndex + 1];
        if (nextModule.lessons.length > 0) {
          setSelectedLesson(nextModule.lessons[0].id);
          setExpandedModule(nextModule.id); // Expande o próximo módulo
        }
      }
    }
  };

  // Lógica para navegar para a aula anterior
  const goToPreviousLesson = () => {
    if (!currentModule || currentLessonIndex === undefined || currentModuleIndex === undefined) return;

    // Verifica se há uma lição anterior no módulo atual
    if (currentLessonIndex > 0) {
      setSelectedLesson(currentModule.lessons[currentLessonIndex - 1].id);
    } else {
      // Se não houver lição anterior no módulo atual, procura o módulo anterior
      if (currentModuleIndex > 0) {
        const previousModule = courseData.modules[currentModuleIndex - 1];
        if (previousModule.lessons.length > 0) {
          setSelectedLesson(previousModule.lessons[previousModule.lessons.length - 1].id);
          setExpandedModule(previousModule.id); // Expande o módulo anterior
        }
      }
    }
  };

  const currentLesson = getLessonContent();

  // Determina se os botões de navegação devem estar desabilitados
  const isFirstLesson = currentModuleIndex === 0 && currentLessonIndex === 0;
  const isLastLesson = currentModuleIndex === courseData.modules.length - 1 && currentLessonIndex === (currentModule?.lessons.length ?? 0) - 1;

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
          <span className="text-white">{courseData.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                        // A marcação já é feita no handleLessonClick ao selecionar a aula
                        // console.log('Marcar como concluída'); // Remover log
                      }}
                    >
                      Marcar como concluída
                    </button>
                    <div className="flex gap-2">
                      <button
                        className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={goToPreviousLesson}
                        disabled={isFirstLesson}
                      >
                        Aula anterior
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg bg-[#FD6F2F] text-white hover:bg-[#FD6F2F]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={goToNextLesson}
                        disabled={isLastLesson}
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