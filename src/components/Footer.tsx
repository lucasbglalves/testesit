import Link from 'next/link'
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-[#1F526B]/80 border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row justify-between items-start w-full gap-8 mt-10">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-center justify-end text-center w-full max-w-xs">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/images/logocomuniquese.png"
                alt="Logo Comunique-se"
                width={160}
                height={64}
                style={{ objectFit: 'contain', height: '64px', width: 'auto' }}
              />
            </Link>
            <h3 className="text-white font-semibold mb-2" style={{ marginBottom: '10px' }}>Comunique-se</h3>
            <p className="text-white/80 text-sm mb-0">
              Transformando vidas através da comunicação efetiva.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <h3 className="text-white font-semibold mb-2" style={{ marginBottom: '10px' }}>Links Rápidos</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/sobre" className="text-white/80 hover:text-[#FD6F2F] text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-[#FD6F2F] text-sm transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/professores" className="text-white/80 hover:text-[#FD6F2F] text-sm transition-colors">
                  Professores
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/80 hover:text-[#FD6F2F] text-sm transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <h3 className="text-white font-semibold mb-2" style={{ marginBottom: '10px' }}>Contato</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <EnvelopeIcon className="w-5 h-5 text-[#FD6F2F]" />
                contato@comunique-se.com.br
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <PhoneIcon className="w-5 h-5 text-[#FD6F2F]" />
                (11) 99999-9999
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <h3 className="text-white font-semibold mb-2" style={{ marginBottom: '10px' }}>Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/comuniquese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#FD6F2F] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/comuniquese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#FD6F2F] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://youtube.com/@comuniquese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#FD6F2F] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Métodos de Pagamento */}
          <div className="flex flex-col items-center w-full max-w-xs">
            <h3 className="text-white font-semibold mb-2" style={{ marginBottom: '10px' }}>Métodos de Pagamento</h3>
            <div className="flex gap-4">
              <img src="/images/mastercard.png" alt="Mastercard" className="h-8 w-auto" />
              <img src="/images/visa.png" alt="Visa" className="h-8 w-auto" />
              <img src="/images/PIX.png" alt="Pix" className="h-8 w-auto" />
              <img src="/images/elo.png" alt="Elo" className="h-8 w-auto" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm my-4">
            © {new Date().getFullYear()} Comunique-se. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 