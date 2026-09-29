import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { RouterProvider, useRouter } from '@/context/RouterContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';
import LandingPage from '@/pages/LandingPage';
import ScholarshipsPage from '@/pages/ScholarshipsPage';
import ScholarshipDetailPage from '@/pages/ScholarshipDetailPage';
import EligibilityCheckerPage from '@/pages/EligibilityCheckerPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import HelpPage from '@/pages/HelpPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';

function AppRoutes() {
  const { path } = useRouter();

  const scholarshipMatch = path.match(/^\/scholarships\/([\w-]+)$/);

  if (path === '/') return <LandingPage />;
  if (path === '/scholarships') return <ScholarshipsPage />;
  if (scholarshipMatch) return <ScholarshipDetailPage scholarshipId={scholarshipMatch[1]} />;
  if (path === '/eligibility') return <EligibilityCheckerPage />;
  if (path === '/how-it-works') return <HowItWorksPage />;
  if (path === '/help') return <HelpPage />;
  if (path === '/login') return <LoginPage />;
  if (path === '/register') return <RegisterPage />;
  if (path.startsWith('/dashboard')) {
    return (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    );
  }

  return <LandingPage />;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider>
          <div className="min-h-screen flex flex-col bg-base">
            <Navbar />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
