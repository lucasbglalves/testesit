import Image from 'next/image';

interface CertificateProps {
  title: string;
  date: string;
  code: string;
  instructor: string;
  hours: number;
  studentName?: string;
}

export default function Certificate({
  title,
  date,
  code,
  instructor,
  hours,
  studentName = 'Nome do Aluno'
}: CertificateProps) {
  return (
    <div className="w-[800px] h-[600px] bg-amber-100 rounded-lg shadow-xl p-8 relative overflow-hidden border border-amber-300">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 50%, transparent 100%), radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, transparent 75%)', 
        backgroundSize: '100% 100%, 50px 50px' 
      }}></div>

      {/* Header */}
      <div className="text-center mb-8 relative">
        {/* Logo */}
        <div className="absolute top-0 left-0 mt-4 ml-8">
          <Image
            src="/images/logocomuniquese.png"
            alt="Logo Comuniquese"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificado</h1>
        <p className="text-gray-600">de Conclusão de Curso</p>
      </div>

      {/* Content */}
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4">Certificamos que</p>
        <p className="text-2xl font-bold text-gray-800 mb-4">{studentName}</p>
        <p className="text-gray-600 mb-4">concluiu com êxito o curso de</p>
        <p className="text-2xl font-bold text-[#FD6F2F] mb-4">{title}</p>
        <p className="text-gray-600">com carga horária de {hours} horas</p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="flex justify-between items-end">
          <div className="text-center">
            <div className="w-32 h-0.5 bg-gray-800 mx-auto mb-2"></div>
            <p className="text-gray-600">{instructor}</p>
            <p className="text-sm text-gray-500">Instrutor</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-0.5 bg-gray-800 mx-auto mb-2"></div>
            <p className="text-gray-600">{date}</p>
            <p className="text-sm text-gray-500">Data de Conclusão</p>
          </div>
        </div>
      </div>

      {/* Certificate Code */}
      <div className="absolute top-4 right-4 text-sm text-gray-500">
        Código: {code}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="absolute top-4 right-4 w-24 h-24 border-2 border-[#FD6F2F] rounded-full"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-[#FD6F2F] rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
        <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-[#FD6F2F] rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-[#FD6F2F] rounded-full"></div>
      </div>
    </div>
  );
} 