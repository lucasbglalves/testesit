import { useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/images/conteudoexclusivo.02.png',
    title: 'Conteúdo Exclusivo',
    text: 'Acesse materiais desenvolvidos por especialistas em comunicação, com dicas práticas para o seu dia a dia.'
  },
  {
    image: '/images/acompanheseuprogresso.png',
    title: 'Acompanhe seu Progresso',
    text: 'Veja sua evolução com nosso sistema de leitura contabilizada e conquiste novos patamares.'
  },
  {
    image: '/images/comunidadeapoio.png',
    title: 'Comunidade de Apoio',
    text: 'Participe de uma comunidade que incentiva o crescimento pessoal e profissional.'
  }
]

export default function CarouselInfo() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="w-full px-0 md:px-8 mt-2 mb-12">
      <div className="relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-md bg-white/10 border border-white/20 w-full" style={{height: '340px'}}>
        <div className="flex items-center justify-center h-64 bg-black/30">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            width={1600}
            height={256}
            className="object-cover h-full w-full"
            style={{ maxHeight: '256px', objectFit: 'cover' }}
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">{slides[current].title}</h3>
          <p className="text-white/80 text-base">{slides[current].text}</p>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={prevSlide} className="bg-[#1F526B]/80 hover:bg-[#FD6F2F] text-white rounded-full p-2 m-2 transition-colors">
            &#8592;
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={nextSlide} className="bg-[#1F526B]/80 hover:bg-[#FD6F2F] text-white rounded-full p-2 m-2 transition-colors">
            &#8594;
          </button>
        </div>
        <div className="flex justify-center gap-2 pb-4">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-3 h-3 rounded-full ${idx === current ? 'bg-[#FD6F2F]' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 