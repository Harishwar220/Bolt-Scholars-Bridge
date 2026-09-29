import { type ReactNode } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from '@/context/RouterContext';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const { navigate } = useRouter();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  return <>{children}</>;
}
