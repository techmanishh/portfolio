import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layout/RootLayout';
import { PageLoader } from '@/components/PageLoader';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const BlogsPage = lazy(() => import('@/pages/BlogsPage'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'));
const LegalPage = lazy(() => import('@/pages/LegalPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  useGoogleAnalytics();
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="project/:id" element={<ProjectDetailPage />} />
          <Route path="service/:id" element={<ServiceDetailPage />} />
          <Route path="blog/:id" element={<BlogDetailPage />} />
          <Route path="terms" element={<LegalPage />} />
          <Route path="privacy" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
