import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { PillButtonLink } from '@/components/ui/PillButton';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function EcosystemSvg() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full max-w-[450px] mx-auto filter drop-shadow-[0_20px_50px_rgba(28,58,42,0.1)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background soft glow rings */}
      <circle cx="250" cy="250" r="180" stroke="#faae19" strokeWidth="1" strokeDasharray="5 10" fill="#334d36" fillOpacity="0.02" className="opacity-75" />
      {/* Dashed orbit circle with light green shade background */}
      <circle cx="250" cy="250" r="130" stroke="#334d36" strokeWidth="1.5" strokeDasharray="3 6" fill="#334d36" fillOpacity="0.05" />
      <circle cx="250" cy="250" r="80" stroke="#334d36" strokeWidth="1" className="opacity-20" />

      {/* Orbiting particles (pulsing lines or circles) */}
      <g className="animate-spin" style={{ transformOrigin: '250px 250px', animationDuration: '40s' }}>
        <line x1="250" y1="70" x2="250" y2="430" stroke="#334d36" strokeWidth="0.5" strokeDasharray="4 8" className="opacity-30" />
        <line x1="70" y1="250" x2="430" y2="250" stroke="#334d36" strokeWidth="0.5" strokeDasharray="4 8" className="opacity-30" />
      </g>

      {/* Connecting Network Lines */}
      <path d="M250 250 L250 100" stroke="#faae19" strokeWidth="2" strokeDasharray="4 4" className="opacity-75" />
      <path d="M250 250 L115 180" stroke="#334d36" strokeWidth="1.5" className="opacity-60" />
      <path d="M250 250 L385 180" stroke="#334d36" strokeWidth="1.5" className="opacity-60" />
      <path d="M250 250 L160 360" stroke="#334d36" strokeWidth="1.5" className="opacity-60" />
      <path d="M250 250 L340 360" stroke="#faae19" strokeWidth="2" strokeDasharray="4 4" className="opacity-75" />

      {/* Central Node (Ecosystem Core) */}
      <circle cx="250" cy="250" r="32" fill="#334d36" className="shadow-lg" />
      <circle cx="250" cy="250" r="24" fill="#1C3A2A" />
      <circle cx="250" cy="250" r="8" fill="#faae19" className="animate-pulse" />
      
      {/* Central Hub Decorative Pulse ring */}
      <circle cx="250" cy="250" r="42" stroke="#faae19" strokeWidth="1" className="opacity-30 animate-ping" style={{ transformOrigin: '250px 250px', animationDuration: '3s' }} />

      {/* Module 1: AI & Analytics (Top) */}
      <g>
        <circle cx="250" cy="90" r="28" fill="#f6f6f6" stroke="#faae19" strokeWidth="3" />
        <circle cx="250" cy="90" r="20" fill="#faae19" className="opacity-10" />
        <text x="250" y="90" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#334d36" textAnchor="middle" dominantBaseline="central" className="material-symbols-outlined select-none">auto_awesome</text>
        <rect x="210" y="124" width="80" height="18" rx="9" fill="#334d36" />
        <text x="250" y="136" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.5">INTELLIGENCE</text>
      </g>

      {/* Module 2: SaaS & Products (Left-Top) */}
      <g>
        <circle cx="110" cy="180" r="26" fill="#f6f6f6" stroke="#334d36" strokeWidth="3" />
        <circle cx="110" cy="180" r="18" fill="#334d36" className="opacity-5" />
        <text x="110" y="180" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#334d36" textAnchor="middle" dominantBaseline="central" className="material-symbols-outlined select-none">rocket</text>
        <rect x="75" y="212" width="70" height="18" rx="9" fill="#f6f6f6" stroke="#334d36" strokeWidth="1" />
        <text x="110" y="223" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="bold" fill="#334d36" textAnchor="middle">SAAS & MVP</text>
      </g>

      {/* Module 3: Web Apps (Right-Top) */}
      <g>
        <circle cx="390" cy="180" r="26" fill="#f6f6f6" stroke="#334d36" strokeWidth="3" />
        <circle cx="390" cy="180" r="18" fill="#334d36" className="opacity-5" />
        <text x="390" y="180" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#334d36" textAnchor="middle" dominantBaseline="central" className="material-symbols-outlined select-none">layers</text>
        <rect x="355" y="212" width="70" height="18" rx="9" fill="#f6f6f6" stroke="#334d36" strokeWidth="1" />
        <text x="390" y="223" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="bold" fill="#334d36" textAnchor="middle">CUSTOM WEB</text>
      </g>

      {/* Module 4: Automation (Left-Bottom) */}
      <g>
        <circle cx="160" cy="360" r="26" fill="#f6f6f6" stroke="#334d36" strokeWidth="3" />
        <circle cx="160" cy="360" r="18" fill="#334d36" className="opacity-5" />
        <text x="160" y="360" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#334d36" textAnchor="middle" dominantBaseline="central" className="material-symbols-outlined select-none">automation</text>
        <rect x="120" y="392" width="80" height="18" rx="9" fill="#f6f6f6" stroke="#334d36" strokeWidth="1" />
        <text x="160" y="403" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="bold" fill="#334d36" textAnchor="middle">AUTOMATIONS</text>
      </g>

      {/* Module 5: Cloud & Infrastructure (Right-Bottom) */}
      <g>
        <circle cx="340" cy="360" r="26" fill="#f6f6f6" stroke="#faae19" strokeWidth="3" />
        <circle cx="340" cy="360" r="18" fill="#faae19" className="opacity-10" />
        <text x="340" y="360" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="#334d36" textAnchor="middle" dominantBaseline="central" className="material-symbols-outlined select-none">cloud</text>
        <rect x="300" y="392" width="80" height="18" rx="9" fill="#334d36" />
        <text x="340" y="403" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="bold" fill="#ffffff" textAnchor="middle">INFRASTRUCTURE</text>
      </g>
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>All Services | Manish Portfolio</title>
        <meta
          name="description"
          content="Web development, WordPress, Laravel + React, and freelance consulting services."
        />
      </Helmet>
      
      {/* Premium Redesigned Hero Section */}
      <section className="pt-[120px] md:pt-[148px] bg-white pb-10 md:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 relative z-10 flex flex-col justify-center">
              <ScrollReveal className="flex flex-col gap-0">
                
                {/* Dynamic Breadcrumbs */}
                <div className="flex items-center gap-2 font-body text-[12px] text-green/60 mb-3">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                  <span className="text-green/30">/</span>
                  <span className="text-green/60 pointer-events-none">Services</span>
                </div>

                {/* Eyebrow Label */}
                <div className="mb-2">
                  <SectionEyebrow label="Services" className="!mb-0" />
                </div>

                {/* Main Heading */}
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-green mb-6">
                  Professional Services & <br className="hidden sm:block" />
                  Digital <span className="text-yellow italic font-normal">Solutions</span>
                </h1>

                {/* Supporting Description */}
                <p className="font-body text-lg text-green/70 leading-relaxed mb-0 max-w-xl">
                  Explore a comprehensive range of software engineering, custom development, and scalable architectural solutions built to launch and grow your digital products.
                </p>

              </ScrollReveal>
            </div>

            {/* Right Column: Visual Element */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <ScrollReveal delay={0.2} className="relative w-full max-w-[450px]">
                <EcosystemSvg />
                {/* Decorative Blobs */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-green/5 rounded-full blur-2xl -z-10" />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      <MarqueeBanner />

      <section className="pt-16 md:pt-20 pb-20 md:pb-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-black/[0.03]"
              >
                <div className="mb-6 w-14 h-14 bg-yellow rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl text-green">{service.icon}</span>
                </div>
                <h2 className="font-headline font-bold text-[22px] text-green mb-3">{service.title}</h2>
                <p className="font-body text-green/60 leading-relaxed mb-6 text-[15px] flex-1">
                  {service.description}
                </p>
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center font-headline font-bold text-[15px] focus-visible:outline focus-visible:underline rounded mt-auto w-fit group"
                >
                  <span className="text-green group-hover:text-yellow transition-colors">Learn more</span>
                  <span className="text-yellow ml-2 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Let&apos;s Create an <span className="text-yellow">Amazing</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Project</span> Together!
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me" />
          </div>
        </div>
      </section>
    </>
  );
}
