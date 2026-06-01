import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '@/data/portfolio';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';

function BlogsSvg() {
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

      {/* Decorative pulse grid lines */}
      <g className="animate-pulse" style={{ animationDuration: '5s' }}>
        <line x1="250" y1="90" x2="250" y2="410" stroke="#334d36" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-20" />
        <line x1="90" y1="250" x2="410" y2="250" stroke="#334d36" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-20" />
      </g>

      {/* Abstract Open Booklet / Article Mockup */}
      <g className="hover:translate-y-[-5px] transition-transform duration-300">
        {/* Book shadow base */}
        <path d="M120 150 C 180 140, 240 160, 250 162 C 260 160, 320 140, 380 150 L 380 330 C 320 320, 260 340, 250 342 C 240 340, 180 320, 120 330 Z" fill="#f6f6f6" stroke="#334d36" strokeWidth="2.5" />
        {/* Central Spine line */}
        <line x1="250" y1="162" x2="250" y2="342" stroke="#334d36" strokeWidth="2" strokeDasharray="2 4" />
        
        {/* Article writing lines mockups (Left Page) */}
        <rect x="140" y="180" width="80" height="8" rx="3" fill="#334d36" className="opacity-80" />
        <rect x="140" y="196" width="60" height="4" rx="2" fill="#334d36" className="opacity-45" />
        <rect x="140" y="206" width="70" height="4" rx="2" fill="#334d36" className="opacity-45" />
        <rect x="140" y="216" width="50" height="4" rx="2" fill="#334d36" className="opacity-30" />
        
        <rect x="140" y="234" width="70" height="6" rx="3" fill="#faae19" className="opacity-20" />
        <rect x="140" y="234" width="70" height="6" rx="3" stroke="#faae19" strokeWidth="1" />
        <rect x="140" y="248" width="80" height="4" rx="2" fill="#334d36" className="opacity-45" />
        <rect x="140" y="258" width="40" height="4" rx="2" fill="#334d36" className="opacity-35" />
        
        {/* Article writing lines mockups (Right Page) */}
        <rect x="280" y="180" width="70" height="8" rx="3" fill="#faae19" />
        <rect x="280" y="196" width="80" height="4" rx="2" fill="#334d36" className="opacity-45" />
        <rect x="280" y="206" width="60" height="4" rx="2" fill="#334d36" className="opacity-45" />
        <rect x="280" y="216" width="80" height="4" rx="2" fill="#334d36" className="opacity-35" />
        
        {/* Code Block representation on right page */}
        <rect x="276" y="234" width="88" height="50" rx="8" fill="#1C3A2A" />
        <circle cx="288" cy="244" r="2.5" fill="#faae19" />
        <circle cx="296" cy="244" r="2.5" fill="#f6f6f6" className="opacity-70" />
        <circle cx="304" cy="244" r="2.5" fill="#f6f6f6" className="opacity-30" />
        
        <rect x="288" y="256" width="45" height="4" rx="2" fill="#faae19" className="opacity-90" />
        <rect x="288" y="266" width="60" height="4" rx="2" fill="#ffffff" className="opacity-70" />
        <rect x="288" y="274" width="30" height="4" rx="2" fill="#ffffff" className="opacity-40" />
      </g>

      {/* Floating Compiler Terminal Overlay */}
      <g className="hover:translate-y-[-8px] transition-transform duration-300" style={{ transformOrigin: '350px 330px' }}>
        {/* Terminal Container */}
        <rect x="300" y="290" width="110" height="80" rx="12" fill="#f6f6f6" stroke="#334d36" strokeWidth="2.5" className="filter drop-shadow-lg" />
        {/* Terminal Header */}
        <path d="M301.25 291.25 L408.75 291.25 A 10.75 10.75 0 0 1 408.75 306.25 L301.25 306.25 Z" fill="#334d36" />
        {/* Small Dot */}
        <circle cx="312" cy="298.75" r="2.5" fill="#faae19" />
        
        {/* Terminal content */}
        <text x="312" y="325" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#334d36">&gt; npm run</text>
        <text x="312" y="338" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#faae19">  shipped</text>
        
        {/* Glowing checkout badge */}
        <rect x="312" y="348" width="45" height="12" rx="6" fill="#334d36" />
        <text x="334.5" y="356.5" fontFamily="Inter, sans-serif" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle">SUCCESS</text>
      </g>

      {/* Floating Coffee Mug Element (Bottom-Left) */}
      <g className="hover:scale-110 transition-transform duration-300" style={{ transformOrigin: '110px 180px' }}>
        <circle cx="110" cy="180" r="22" fill="#f6f6f6" stroke="#334d36" strokeWidth="2.5" />
        <circle cx="110" cy="180" r="14" fill="#faae19" className="opacity-15" />
        <text x="110" y="180" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="bold" fill="#faae19" textAnchor="middle" dominantBaseline="central" className="material-symbols-outlined select-none">rate_review</text>
      </g>
    </svg>
  );
}

export default function BlogsPage() {
  return (
    <>
      <Helmet>
        <title>News &amp; Blogs | Manish Portfolio</title>
        <meta
          name="description"
          content="Notes on Laravel, React, WordPress, AI-assisted development, and shipped client projects."
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
                  <span className="text-green/60 pointer-events-none">Blogs</span>
                </div>

                {/* Eyebrow Label */}
                <div className="mb-2">
                  <SectionEyebrow label="Blogs" className="!mb-0" />
                </div>

                {/* Main Heading */}
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-green mb-6">
                  Technical Insights & <br className="hidden sm:block" />
                  Deep <span className="text-yellow italic font-normal">Dives</span>
                </h1>

                {/* Supporting Description */}
                <p className="font-body text-lg text-green/70 leading-relaxed mb-0 max-w-xl">
                  Explore tutorials, guides, and thoughts detailing Laravel development, React architectures, performance engineering, and AI-assisted workflows.
                </p>

              </ScrollReveal>
            </div>

            {/* Right Column: Visual Element */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <ScrollReveal delay={0.2} className="relative w-full max-w-[450px]">
                <BlogsSvg />
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
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                className="h-full"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${blog.id}`}
                  className="group flex flex-col h-full rounded-3xl bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {blog.category && (
                        <span className="bg-yellow text-green font-bold text-[11px] px-3 py-1 rounded-full font-headline uppercase tracking-wide flex items-center justify-center leading-none">
                          {blog.category}
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-sm text-green font-bold text-[13px] px-4 py-1.5 rounded-full font-headline flex items-center justify-center leading-none">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green/60 font-body text-[14px] mb-3">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden>
                      schedule
                    </span>
                    <span>{blog.time}</span>
                  </div>
                  <h2 className="font-headline font-bold text-[22px] text-green group-hover:text-yellow transition-colors leading-[1.3] mb-4">
                    {blog.title}
                  </h2>
                  <p className="font-body text-green/70 leading-relaxed flex-1 min-h-0 mt-1">
                    {blog.excerpt ?? `${blog.content.slice(0, 140)}…`}
                  </p>
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
