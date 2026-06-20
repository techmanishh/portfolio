import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion } from 'framer-motion';

export function RootLayout() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const activeSection = useScrollSpy(onHome);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-24 md:pb-0 overflow-x-hidden">
      <ScrollToTop />
      <ScrollToTopButton />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-yellow focus:text-green focus:px-4 focus:py-2 focus:rounded-full focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar activeSection={activeSection} scrollSpyEnabled={onHome} />
      <motion.main
        id="main-content"
        tabIndex={-1}
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <MarqueeBanner singleYellow />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
