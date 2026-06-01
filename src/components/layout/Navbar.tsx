import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';
import type { SectionId } from '@/hooks/useScrollSpy';

const NAV: { id: SectionId; label: string; hash: string }[] = [
  { id: 'home', label: 'Home', hash: '#home' },
  { id: 'services', label: 'Services', hash: '#services' },
  { id: 'portfolio', label: 'Projects', hash: '#portfolio' },
  { id: 'skills', label: 'Skills & Tools', hash: '#skills' },
  { id: 'about', label: 'About', hash: '#about' },
  { id: 'experience', label: 'Experience', hash: '#experience' },
  { id: 'blogs', label: 'Blogs', hash: '#blogs' },
];

type Props = {
  activeSection: SectionId;
  scrollSpyEnabled: boolean;
};

export function Navbar({ activeSection, scrollSpyEnabled }: Props) {
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-green rounded-full mt-4 md:mt-6 mx-auto w-[95%] max-w-7xl p-3 shadow-xl font-headline font-bold text-sm tracking-wide"
      aria-label="Primary"
    >
      <Link
        to="/"
        className="text-lg md:text-xl font-black text-white flex items-center gap-2 no-underline group hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-full pl-0.5"
      >
        <motion.span
          className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green text-[1.1rem] font-black shrink-0 origin-center will-change-transform"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {site.logoLetter}
        </motion.span>
        <span>{site.brandName}</span>
      </Link>

      <div className="hidden md:flex items-center gap-6 lg:gap-8" role="list">
        {NAV.map((item) => {
          let toTarget: string | { pathname: string; hash?: string };
          let isActive = false;

          if (item.id === 'services') {
            toTarget = '/services';
            isActive = pathname === '/services' || (scrollSpyEnabled && onHome && activeSection === 'services');
          } else if (item.id === 'portfolio') {
            toTarget = '/projects';
            isActive = pathname === '/projects' || (scrollSpyEnabled && onHome && activeSection === 'portfolio');
          } else if (item.id === 'blogs') {
            toTarget = '/blogs';
            isActive = pathname === '/blogs' || (scrollSpyEnabled && onHome && activeSection === 'blogs');
          } else {
            toTarget = { pathname: '/', hash: item.hash.slice(1) };
            isActive = scrollSpyEnabled && onHome && activeSection === item.id;
          }

          return (
            <Link
              key={item.hash}
              to={toTarget}
              role="listitem"
              className={`font-bold border-b-2 pb-0.5 transition-all duration-300 border-transparent hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm ${
                isActive
                  ? 'text-yellow border-yellow'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <Link
        to={{ pathname: '/', hash: 'contact' }}
        className="bg-white text-green px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all duration-300 text-xs md:text-sm whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Contact Me
      </Link>
    </motion.nav>
  );
}
