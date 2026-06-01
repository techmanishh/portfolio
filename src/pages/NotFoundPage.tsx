import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Manish Portfolio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-white">
        <div className="text-center max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline font-extrabold text-[150px] md:text-[240px] leading-none flex items-center justify-center tracking-tighter mb-4 select-none"
          >
            <span className="text-green">4</span>
            <span className="text-yellow relative flex items-center justify-center mx-1 md:mx-2">
              0
              <div className="absolute w-[110%] h-[12px] md:h-[20px] bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
            </span>
            <span className="text-green">4</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl flex items-center justify-center gap-2 md:gap-3 mb-6"
          >
            <span className="font-headline font-bold text-green tracking-tight">Oops!</span>
            <span className="font-headline font-light italic text-yellow tracking-tight">Page not Found</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green/70 font-body text-sm md:text-base max-w-[280px] md:max-w-sm mx-auto mb-10 leading-relaxed"
          >
            The page you are looking for cannot be found. take a break before trying again
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-yellow text-green px-8 py-3.5 rounded-full font-bold font-headline text-sm transition-transform hover:scale-105 mx-auto"
            >
              Go to Home Page
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
