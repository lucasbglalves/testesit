import Link from 'next/link'
import Header from '@/components/Header'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Entrar
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Acesse sua conta no Comunique-se
              </p>
            </div>

            <div className="mt-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="********"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Lembrar-me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/esqueci-senha" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                      Esqueceu a senha?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-200"
                  >
                    Entrar
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Não tem uma conta?{' '}
                    <Link href="/cadastro" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                      Cadastre-se aqui
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 