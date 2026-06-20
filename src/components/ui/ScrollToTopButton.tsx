import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 w-12 h-12 rounded-full bg-yellow text-green flex items-center justify-center shadow-xl border border-white/10 hover:bg-yellow/90 hover:scale-105 active:scale-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span className="material-symbols-outlined text-[26px] font-bold" aria-hidden>
            arrow_upward
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
