import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';

function ProjectsSvg() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full max-w-[450px] mx-auto filter drop-shadow-[0_20px_50px_rgba(28,58,42,0.1)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background glowing rings */}
      <circle cx="250" cy="250" r="160" stroke="#faae19" strokeWidth="1" strokeDasharray="4 8" className="opacity-30" />
      <circle cx="250" cy="250" r="110" stroke="#334d36" strokeWidth="1" className="opacity-20" />

      {/* Decorative Network Grid */}
      <g className="animate-pulse" style={{ animationDuration: '4s' }}>
        <line x1="250" y1="90" x2="250" y2="410" stroke="#334d36" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-20" />
        <line x1="90" y1="250" x2="410" y2="250" stroke="#334d36" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-20" />
      </g>

      {/* Overlapping Browser Card Mockup */}
      <g className="hover:translate-y-[-5px] transition-transform duration-300">
        {/* Browser Shadow Backing */}
        <rect x="100" y="110" width="280" height="180" rx="16" fill="#f6f6f6" stroke="#334d36" strokeWidth="2.5" />
        {/* Browser Top Header Bar */}
        <rect x="100" y="110" width="280" height="30" rx="16" fill="#334d36" />
        <rect x="100" y="125" width="280" height="15" fill="#334d36" />
        {/* Browser Window Controls Dots */}
        <circle cx="125" cy="125" r="4" fill="#faae19" />
        <circle cx="137" cy="125" r="4" fill="#f6f6f6" className="opacity-60" />
        <circle cx="149" cy="125" r="4" fill="#f6f6f6" className="opacity-30" />
        {/* Browser Search Bar */}
        <rect x="170" y="117" width="180" height="16" rx="8" fill="#1C3A2A" />
        
        {/* Browser Content Layout Mockup */}
        <rect x="120" y="160" width="100" height="12" rx="4" fill="#334d36" className="opacity-80" />
        <rect x="120" y="180" width="160" height="6" rx="3" fill="#334d36" className="opacity-45" />
        <rect x="120" y="192" width="200" height="6" rx="3" fill="#334d36" className="opacity-30" />
        
        {/* Abstract Columns Grid in Browser */}
        <rect x="120" y="215" width="70" height="50" rx="8" fill="#faae19" className="opacity-15" />
        <rect x="120" y="215" width="70" height="50" rx="8" stroke="#faae19" strokeWidth="1.5" />
        <circle cx="155" cy="240" r="10" stroke="#faae19" strokeWidth="1.5" />
        <line x1="150" y1="240" x2="160" y2="240" stroke="#faae19" strokeWidth="1.5" />
        <line x1="155" y1="235" x2="155" y2="245" stroke="#faae19" strokeWidth="1.5" />

        <rect x="205" y="215" width="70" height="50" rx="8" fill="#334d36" className="opacity-5" />
        <rect x="205" y="215" width="70" height="50" rx="8" stroke="#334d36" strokeWidth="1.5" className="opacity-60" />
        <rect x="215" y="227" width="35" height="4" rx="2" fill="#334d36" className="opacity-60" />
        <rect x="215" y="237" width="50" height="4" rx="2" fill="#334d36" className="opacity-35" />
        <rect x="215" y="247" width="25" height="4" rx="2" fill="#334d36" className="opacity-20" />

        <rect x="290" y="215" width="70" height="50" rx="8" fill="#334d36" className="opacity-5" />
        <rect x="290" y="215" width="70" height="50" rx="8" stroke="#334d36" strokeWidth="1.5" className="opacity-60" />
        <circle cx="325" cy="240" r="10" stroke="#334d36" strokeWidth="1.5" className="opacity-60" />
      </g>

      {/* Floating Smartphone Mockup Overlaying Browser */}
      <g className="hover:translate-y-[-10px] transition-transform duration-300" style={{ transformOrigin: '340px 300px' }}>
        {/* Phone Case Shadow */}
        <rect x="300" y="200" width="100" height="180" rx="20" fill="#f6f6f6" stroke="#334d36" strokeWidth="3" className="filter drop-shadow-xl" />
        {/* Phone Screen Bezels */}
        <rect x="306" y="206" width="88" height="168" rx="14" fill="#1C3A2A" />
        
        {/* Phone Speaker Notch */}
        <rect x="335" y="211" width="30" height="8" rx="4" fill="#334d36" />
        
        {/* Phone Screen UI Layout */}
        <circle cx="350" cy="245" r="16" fill="#faae19" />
        <circle cx="350" cy="245" r="10" fill="#f6f6f6" className="opacity-80" />
        
        <rect x="320" y="275" width="60" height="6" rx="3" fill="#ffffff" className="opacity-90" />
        <rect x="325" y="287" width="50" height="4" rx="2" fill="#ffffff" className="opacity-50" />
        
        <rect x="320" y="305" width="60" height="24" rx="6" fill="#faae19" className="opacity-20" />
        <rect x="320" y="305" width="60" height="24" rx="6" stroke="#faae19" strokeWidth="1" />
        <circle cx="332" cy="317" r="5" fill="#faae19" />
        <rect x="343" y="315" width="30" height="4" rx="2" fill="#ffffff" className="opacity-80" />
        
        <rect x="320" y="337" width="60" height="24" rx="6" fill="#334d36" className="opacity-40" />
        <circle cx="332" cy="349" r="5" fill="#ffffff" className="opacity-70" />
        <rect x="343" y="347" width="20" height="4" rx="2" fill="#ffffff" className="opacity-80" />
      </g>

      {/* Floating Gear Element (Bottom-Left) */}
      <g className="animate-spin" style={{ transformOrigin: '110px 330px', animationDuration: '25s' }}>
        <circle cx="110" cy="330" r="22" fill="#f6f6f6" stroke="#334d36" strokeWidth="2.5" />
        <circle cx="110" cy="330" r="14" fill="#faae19" className="opacity-20" />
        <circle cx="110" cy="330" r="7" stroke="#faae19" strokeWidth="2" />
        <rect x="108" y="303" width="4" height="6" rx="1" fill="#334d36" />
        <rect x="108" y="351" width="4" height="6" rx="1" fill="#334d36" />
        <rect x="83" y="328" width="6" height="4" rx="1" fill="#334d36" />
        <rect x="131" y="328" width="6" height="4" rx="1" fill="#334d36" />
      </g>
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>All Projects | Manish Portfolio</title>
        <meta name="description" content="Browse all portfolio projects — web, WordPress, Laravel, and React work." />
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
                  <span className="text-green/60 pointer-events-none">Projects</span>
                </div>

                {/* Eyebrow Label */}
                <div className="mb-2">
                  <SectionEyebrow label="Projects" className="!mb-0" />
                </div>

                {/* Main Heading */}
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-green mb-6">
                  Featured Works & <br className="hidden sm:block" />
                  Creative <span className="text-yellow italic font-normal">Projects</span>
                </h1>

                {/* Supporting Description */}
                <p className="font-body text-lg text-green/70 leading-relaxed mb-0 max-w-xl">
                  Browse a curated collection of client products, SaaS applications, and custom engineering works built to solve real-world business challenges.
                </p>

              </ScrollReveal>
            </div>

            {/* Right Column: Visual Element */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <ScrollReveal delay={0.2} className="relative w-full max-w-[450px]">
                <ProjectsSvg />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
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
