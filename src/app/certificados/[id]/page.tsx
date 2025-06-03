import Certificate from '@/components/Certificate';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Dados mockados dos certificados
const certificates = {
  'cert-2024-001': {
    title: 'Comunicação Efetiva',
    date: '15/03/2025',
    code: 'CERT-2024-001',
    instructor: 'Prof. João Silva',
    hours: 40,
    studentName: 'Maria Oliveira'
  },
  'cert-2024-002': {
    title: 'Oratória Básica',
    date: '20/03/2025',
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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Certificado não encontrado</h1>
          <p className="text-gray-600 mb-6">O certificado solicitado não existe ou foi removido.</p>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FD6F2F] text-white rounded-lg hover:bg-[#FD6F2F]/90 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Voltar ao Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <Link 
          href="/dashboard" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#FD6F2F] text-white rounded-lg hover:bg-[#FD6F2F]/90 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Voltar ao Dashboard
        </Link>
      </div>
      <Certificate {...certificate} />
    </div>
  );
} 