import Certificate from '@/components/Certificate';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from '@/components/Header';

// Dados mockados dos certificados
const certificates = {
  'cert-2024-001': {
    title: 'Comunicação Efetiva',
    date: '15/02/2025',
    code: 'CERT-2024-001',
    instructor: 'Prof. João Silva',
    hours: 40,
    studentName: 'Maria Oliveira'
  },
  'cert-2024-002': {
    title: 'Oratória Básica',
    date: '01/02/2025',
    code: 'CERT-2024-002',
    instructor: 'Prof. Ana Santos',
    hours: 30,
    studentName: 'Maria Oliveira'
  }
};

export default function CertificatePage({ params }: { params: { id: string } }) {
  const certificate = certificates[params.id as keyof typeof certificates];

  if (!certificate) {
    return (
      <main className="page-content">
        <div className="page-background">
          <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
          <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
          <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
        </div>
        
        <Header />
        
        <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-md mx-auto w-full text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Certificado não encontrado</h1>
            <p className="text-white/80 mb-6">O certificado solicitado não existe ou foi removido.</p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 px-4 py-2 glass-button"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Voltar ao Dashboard
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-1/4 -left-1/4 bg-[#1F526B] animate-blob"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA] animate-blob animation-delay-2000"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7] animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <section className="container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 px-4 py-2 glass-button"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Voltar ao Dashboard
            </Link>
          </div>
          <Certificate {...certificate} />
        </div>
      </section>
    </main>
  );
} 