import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';

const footerNav = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'All Services' },
  { path: '/projects', label: 'All Projects' },
  { path: '/blogs', label: 'All Blogs' },
  { hash: 'contact', label: 'Contact Me' },
] as const;

export function Footer() {
  
  const linkedin = site.social?.linkedin;
  const github = site.social?.github;

  return (
    <footer className="bg-white pb-0 pt-8 md:pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pt-4 md:pt-6 text-center md:text-left">
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-green font-black text-xl">
                {site.logoLetter}
              </div>
              <span className="text-3xl md:text-4xl font-black text-green">{site.brandName}</span>
            </div>
            <p className="text-green/70 max-w-md mb-6 leading-relaxed font-body">{site.footer.blurb}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3" aria-label="Social links">
              {linkedin && (
                <div className="relative group">
                  <motion.a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16" aria-hidden>
                      <path d="M4.943 13.394V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </motion.a>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-green text-white text-[11px] font-bold font-headline rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    LinkedIn
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green" />
                  </div>
                </div>
              )}
              {github && (
                <div className="relative group">
                  <motion.a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </motion.a>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-green text-white text-[11px] font-bold font-headline rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                    GitHub
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green" />
                  </div>
                </div>
              )}
              <div className="relative group">
                <motion.a
                  href="https://wa.me/919768809635"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12.031 0C5.393 0 0 5.391 0 12.029c0 2.12.553 4.195 1.603 6.015L.231 24l6.107-1.601a11.97 11.97 0 005.693 1.433v-.001h.001C18.667 23.831 24 18.437 24 12.03 24 5.393 18.667 0 12.031 0zm0 21.829h-.001a9.98 9.98 0 01-5.093-1.39l-.365-.217-3.784.992.993-3.69-.237-.377a10.027 10.027 0 01-1.53-5.32c0-5.526 4.498-10.023 10.025-10.023 2.678 0 5.195 1.042 7.088 2.937A9.957 9.957 0 0122.023 12.03c0 5.524-4.496 10.02-10.023 10.02h.03zm5.503-7.519c-.302-.15-1.785-.88-2.062-.982-.277-.101-.48-.15-.682.15-.202.302-.78 .982-.956 1.183-.176.202-.352.227-.654.076-.302-.15-1.275-.47-2.428-1.501-.897-.803-1.503-1.796-1.679-2.098-.176-.303-.018-.467.133-.618.135-.135.302-.352.453-.528.152-.176.202-.303.303-.503.101-.202.05-.378-.025-.529-.076-.151-.682-1.644-.935-2.25-.246-.593-.497-.512-.682-.521-.176-.008-.378-.01-.58-.01-.202 0-.528.076-.805.378-.277.302-1.057 1.033-1.057 2.518s1.082 2.915 1.233 3.117c.152.202 2.127 3.245 5.15 4.549.718.309 1.28.494 1.718.632.72.23 1.376.198 1.895.12.58-.088 1.785-.729 2.036-1.433.251-.704.251-1.308.176-1.433-.075-.125-.277-.201-.58-.352z" />
                  </svg>
                </motion.a>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-green text-white text-[11px] font-bold font-headline rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                  WhatsApp
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h2 className="text-yellow font-bold text-lg mb-4 font-headline">Quick Links</h2>
            <ul className="space-y-2.5 font-body text-sm flex flex-col items-center md:items-start">
              {footerNav.map((item) => (
                <li key={'path' in item ? item.path : item.hash}>
                  <Link
                    className="text-green/80 hover:text-yellow transition-colors focus-visible:outline focus-visible:underline rounded"
                    to={'path' in item ? item.path : { pathname: '/', hash: item.hash }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h2 className="text-yellow font-bold text-lg mb-4 font-headline">Contact</h2>
            <ul className="space-y-3.5 text-green/80 font-body text-sm flex flex-col items-center md:items-start text-center md:text-left">
              <li>
                <a href={`tel:${site.footer.phone.replace(/[^0-9+]/g, '')}`} className="flex items-start gap-2.5 hover:text-yellow transition-colors group">
                  <span className="material-symbols-outlined text-[18px] opacity-70 group-hover:opacity-100 mt-0.5">call</span>
                  <span>{site.footer.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://${site.footer.web}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-yellow transition-colors group">
                  <svg className="w-[18px] h-[18px] opacity-70 group-hover:opacity-100 mt-[3px] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>{site.footer.web}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.footer.email}`} className="flex items-start gap-2.5 hover:text-yellow transition-colors group">
                  <span className="material-symbols-outlined text-[18px] opacity-70 group-hover:opacity-100 mt-0.5">mail</span>
                  <span>{site.footer.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.footer.addressLines.join(' '))}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-yellow transition-colors group">
                  <span className="material-symbols-outlined text-[18px] opacity-70 group-hover:opacity-100 mt-0.5">location_on</span>
                  <span className="leading-relaxed">
                    {site.footer.addressLines[0]}
                    <br />
                    {site.footer.addressLines[1]}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white py-5 px-6 md:px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-green/80 font-body text-center md:text-left">
            Copyright © {site.footer.copyrightYear}{' '}
            <span className="text-yellow">{site.brandName}</span> All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-green/80 font-body">
            <Link className="hover:text-yellow transition-colors focus-visible:outline rounded" to="/terms">
              User Terms &amp; Conditions
            </Link>
            <span className="opacity-40" aria-hidden>
              |
            </span>
            <Link className="hover:text-yellow transition-colors focus-visible:outline rounded" to="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
