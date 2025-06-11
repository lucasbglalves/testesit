import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Comunique-se - Plataforma de Treinamento em Comunicação',
  description: 'Desenvolva suas habilidades de comunicação com os melhores profissionais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
} 