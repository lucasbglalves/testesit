'use client';

import Header from '@/components/Header';
import { 
  BookOpenIcon, 
  ChatBubbleLeftRightIcon, 
  AcademicCapIcon, 
  DocumentCheckIcon,
  UserGroupIcon,
  CalendarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    status: 'Online',
    image: '/images/anasilva.png'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    specialty: 'Expressão Corporal',
    status: 'Offline',
    image: '/images/carlossantos.png'
  },
  {
    id: 3,
    name: 'Maria Costa',
    specialty: 'Comunicação Digital',
    status: 'Online',
    image: '/images/mariacosta.png'
  }
];

const courses = [
  {
    id: 1,
    title: 'Linguagem corporal',
    progress: 75,
    nextClass: '15/03 - 19:00',
    instructor: 'Ana Silva',
    image: '/images/linguagemcorporal.png'
  },
  {
    id: 2,
    title: 'Comunicação Organizacional',
    progress: 30,
    nextClass: '16/03 - 20:00',
    instructor: 'Carlos Santos',
    image: '/images/comunicacaoorganizacional.png'
  },
  {
    id: 3,
    title: 'Comunicação Corporativa',
    progress: 90,
    nextClass: '17/03 - 18:00',
    instructor: 'Maria Costa',
    image: '/images/comunicacaocorporativa.png'
  }
];

const certificates = [
  {
    id: 1,
    title: 'Comunicação Efetiva',
    date: '15/02/2024',
    status: 'Concluído'
  },
  {
    id: 2,
    title: 'Oratória Básica',
    date: '01/02/2024',
    status: 'Concluído'
  }
];

const groupMentoring = [
  {
    id: 1,
    title: 'Mentoria em Grupo - Oratória',
    date: '20/03/2024',
    time: '19:00',
    participants: 8,
    instructor: 'Ana Silva'
  },
  {
    id: 2,
    title: 'Mentoria em Grupo - Comunicação Digital',
    date: '25/03/2024',
    time: '20:00',
    participants: 6,
    instructor: 'Maria Costa'
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
          <div className="flex justify-between items-center">
            <h1 className="page-title">Dashboard do Aluno</h1>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD6F2F]/20 text-[#FD6F2F] text-sm">
              <RocketLaunchIcon className="w-4 h-4" />
              Plano Profissional
            </div>
          </div>
        </div>

        {/* Cursos em Andamento */}
        <div className="mb-8">
          <h2 className="section-title flex items-center gap-2 mb-4">
            <AcademicCapIcon className="w-5 h-5 text-[#FD6F2F]" />
            Meus Cursos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map(course => (
              <div 
                key={course.id} 
                className="bg-black/40 rounded-lg border border-white/10 overflow-hidden cursor-pointer hover:border-[#FD6F2F]/50 transition-colors"
                onClick={() => router.push(`/dashboard/cursos/${course.id}`)}
              >
                <div className="h-40 relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium">{course.title}</h3>
                  <p className="text-white/70 text-sm mt-1">Instrutor: {course.instructor}</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-white/60 mb-1">
                      <span>Progresso</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-[#FD6F2F] h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Próxima aula: {course.nextClass}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  <div className="w-10 h-10 rounded-full relative overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={`Professor(a) ${teacher.name}`}
                      fill
                      className="object-cover"
                    />
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

        <div className="grid md:grid-cols-2 gap-6 pb-8">
          {/* Certificados */}
          <div className="bg-black/40 p-6 rounded-lg border border-white/10">
            <h2 className="section-title flex items-center gap-2">
              <DocumentCheckIcon className="w-5 h-5 text-[#FD6F2F]" />
              Meus Certificados
            </h2>
            <div className="space-y-4">
              {certificates.map(certificate => (
                <div key={certificate.id} className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-medium">{certificate.title}</h3>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                      {certificate.status}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mt-1">Concluído em {certificate.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mentoria em Grupo */}
          <div className="bg-black/40 p-6 rounded-lg border border-white/10">
            <h2 className="section-title flex items-center gap-2">
              <UserGroupIcon className="w-5 h-5 text-[#FD6F2F]" />
              Próximas Mentorias
            </h2>
            <div className="space-y-4">
              {groupMentoring.map(mentoring => (
                <div key={mentoring.id} className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <h3 className="text-white font-medium">{mentoring.title}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      {mentoring.date} às {mentoring.time}
                    </p>
                    <p className="text-white/60 text-sm">Instrutor: {mentoring.instructor}</p>
                    <p className="text-white/60 text-sm">{mentoring.participants} participantes confirmados</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 