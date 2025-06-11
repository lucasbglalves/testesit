import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Simula verificação de autenticação (em um MVP real isso viria de um contexto/estado global)
const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
};

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);

  if (!isAuthenticated()) {
    return null;
  }

  return <>{children}</>;
} 