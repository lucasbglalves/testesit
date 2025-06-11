import React from 'react';
import Image from 'next/image';

interface CertificateProps {
  title: string;
  date: string;
  code: string;
  instructor: string;
  hours: number;
  studentName: string;
}

const Certificate: React.FC<CertificateProps> = ({
  title,
  date,
  code,
  instructor,
  hours,
  studentName
}) => {
  return (
    <div className="backdrop-blur-sm bg-[#1F526B]/30 p-8 rounded-3xl border border-white/20 max-w-5xl w-full">
      <div className="bg-[#F5F0E6] p-8 rounded-2xl relative overflow-hidden border-4 border-[#FD6F2F]/30">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#FD6F2F]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FD6F2F]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="flex flex-row items-center gap-8">
          {/* Lado esquerdo - Logo e título */}
          <div className="w-1/3 text-center">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <Image
                src="/images/logocomuniquese.png"
                alt="Logo Comunique-se"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-[#1F526B] mb-2">Certificado</h1>
            <p className="text-[#1F526B]/80 text-base">Certificamos que</p>
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="w-2/3">
            {/* Nome do aluno e curso */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#FD6F2F] mb-4">{studentName}</h2>
              <p className="text-[#1F526B]/80 text-base mb-2">concluiu com êxito o curso de</p>
              <h3 className="text-xl font-semibold text-[#1F526B]">{title}</h3>
            </div>

            {/* Informações do curso */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/80 p-3 rounded-xl border border-[#1F526B]/10">
                <p className="text-[#1F526B]/70 text-sm mb-1">Instrutor</p>
                <p className="font-semibold text-base text-[#1F526B]">{instructor}</p>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#1F526B]/10">
                <p className="text-[#1F526B]/70 text-sm mb-1">Carga Horária</p>
                <p className="font-semibold text-base text-[#1F526B]">{hours} horas</p>
              </div>
            </div>

            {/* Código e data */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/80 p-3 rounded-xl border border-[#1F526B]/10">
                <p className="text-[#1F526B]/70 text-sm mb-1">Código do Certificado</p>
                <p className="font-mono text-base text-[#1F526B]">{code}</p>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#1F526B]/10">
                <p className="text-[#1F526B]/70 text-sm mb-1">Data de Emissão</p>
                <p className="font-semibold text-base text-[#1F526B]">{date}</p>
              </div>
            </div>

            {/* Rodapé */}
            <div className="text-center">
              <p className="text-[#1F526B]/80 text-base mb-2">Este certificado é válido e pode ser verificado através do código único acima.</p>
              <p className="text-[#1F526B]/80 text-base">Comunique-se - Transformando a comunicação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate; 