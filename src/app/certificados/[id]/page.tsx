import Certificate from '@/components/Certificate';

// Dados mockados dos certificados
const certificates = {
  'comunicacao-efetiva': {
    title: 'Comunicação Efetiva',
    date: '15/03/2024',
    code: 'CERT-2024-001',
    instructor: 'Prof. João Silva',
    hours: 40,
    studentName: 'Maria Oliveira'
  },
  'oratoria-basica': {
    title: 'Oratória Básica',
    date: '20/03/2024',
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
          <p className="text-gray-600">O certificado solicitado não existe ou foi removido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Certificate {...certificate} />
    </div>
  );
} 