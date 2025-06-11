'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';
import Header from '@/components/Header';

const plans = [
  {
    name: 'Básico',
    price: {
      monthly: 'R$ 49,90',
      yearly: 'R$ 39,90',
    },
    description: 'Ideal para iniciantes que querem começar sua jornada na comunicação.',
    features: [
      'Acesso a 5 cursos básicos',
      'Certificado de conclusão',
      'Suporte por email',
      'Comunidade no Discord',
      'Atualizações mensais',
    ],
    cta: 'Começar agora',
    popular: false,
  },
  {
    name: 'Profissional',
    price: {
      monthly: 'R$ 89,90',
      yearly: 'R$ 69,90',
    },
    description: 'Para quem quer se aprofundar e desenvolver habilidades avançadas.',
    features: [
      'Acesso a todos os cursos',
      'Certificado de conclusão',
      'Suporte prioritário',
      'Comunidade no Discord',
      'Atualizações semanais',
      'Mentoria mensal em grupo',
      'Projetos práticos',
    ],
    cta: 'Começar agora',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 'Sob consulta',
      yearly: 'Sob consulta',
    },
    description: 'Soluções personalizadas para empresas e equipes.',
    features: [
      'Acesso a todos os cursos',
      'Certificados personalizados',
      'Suporte dedicado',
      'Comunidade exclusiva',
      'Atualizações em tempo real',
      'Mentoria individual',
      'Projetos customizados',
      'API de integração',
    ],
    cta: 'Fale conosco',
    popular: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-0 -left-1/4 bg-[#1F526B]"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA]"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7]"></div>
        <div className="background-blur bottom-0 -right-1/4 bg-[#FD6F2F]"></div>
      </div>

      <Header />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Escolha o plano ideal para você
          </h1>
          <p className="text-white/80 text-lg">
            Invista no seu desenvolvimento pessoal e profissional
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative flex rounded-full p-1 bg-white/10 backdrop-blur-sm border border-white/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`${
                !isYearly ? 'bg-white/20 text-white' : 'text-white/70'
              } relative w-32 rounded-full py-2 text-sm font-semibold transition-all`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`${
                isYearly ? 'bg-white/20 text-white' : 'text-white/70'
              } relative w-32 rounded-full py-2 text-sm font-semibold transition-all`}
            >
              Anual
              <span className="absolute -top-1 -right-1 rounded-full bg-[#FD6F2F] px-2 py-0.5 text-xs font-medium text-white">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between backdrop-blur-sm bg-white/10 rounded-lg p-8 border border-white/20 ${
                plan.popular ? 'relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-[#FD6F2F] px-3 py-1 text-sm font-semibold text-white text-center">
                  Mais popular
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                </div>
                <p className="mt-4 text-sm text-white/70">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold text-white">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== 'Sob consulta' && (
                    <span className="text-sm font-semibold text-white/70">
                      /mês
                      {isYearly && (
                        <span className="block text-xs mt-1">
                          cobrado anualmente
                        </span>
                      )}
                    </span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-[#FD6F2F]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={plan.name === 'Enterprise' ? '/contato' : '/cadastro'}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[#FD6F2F] text-white hover:bg-[#FD6F2F]/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Seção de Métodos de Pagamento */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">
            Métodos de Pagamento
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center">
              <img src="/images/mastercard.png" alt="Mastercard" className="h-12 w-auto mb-3" />
              <span className="text-white/80 text-sm">Mastercard</span>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center">
              <img src="/images/visa.png" alt="Visa" className="h-12 w-auto mb-3" />
              <span className="text-white/80 text-sm">Visa</span>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center">
              <img src="/images/PIX.png" alt="Pix" className="h-12 w-auto mb-3" />
              <span className="text-white/80 text-sm">Pix</span>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center">
              <img src="/images/elo.png" alt="Elo" className="h-12 w-auto mb-3" />
              <span className="text-white/80 text-sm">Elo</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 