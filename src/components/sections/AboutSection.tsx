import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';
import { DownloadResumeButton } from '@/components/ui/DownloadResumeButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-grey" id="about" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Main Bio */}
          <div className="flex flex-col gap-6 text-green">
            <ScrollReveal className="flex flex-col items-start text-left">
              <div className="flex items-center justify-start gap-3">
                <div className="w-5 h-0.5 bg-yellow" aria-hidden />
                <span className="text-green font-body text-[15px] tracking-wide">About Me</span>
              </div>
              <h2
                id="about-heading"
                className="text-4xl md:text-[54px] font-headline font-bold leading-[1.1] tracking-tight mt-2"
              >
                {site.about.lead}{' '}
                <span className="text-yellow italic font-normal">{site.about.nameHighlight}</span>
              </h2>
              <div className="text-green/80 text-lg leading-relaxed font-body space-y-4 mb-4 mt-6">
                <p>{site.about.body_paragraph1}</p>
                <p>{site.about.body_paragraph2}</p>
                <p className="font-medium text-green">{site.about.body_closing}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="grid grid-cols-4 md:flex gap-2 sm:gap-4 md:gap-8 py-5 my-2 border-t border-b border-black/5">
                {site.about.stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <div className="text-[18px] sm:text-[22px] md:text-[28px] font-headline font-bold text-yellow leading-none">
                      {s.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] md:text-[13px] leading-tight text-green/80 font-body pr-1 md:pr-0">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Elements & Additional Content */}
          <div className="flex flex-col gap-6 lg:pt-16">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {site.about.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 bg-green/5 border border-green/10 rounded-full px-4 py-2"
                  >
                    <span className="material-symbols-outlined text-[18px] text-yellow">{h.icon}</span>
                    <span className="text-[13px] md:text-[14px] font-body text-green font-medium">{h.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <ScrollReveal delay={0.15} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow">star</span>
                  <h3 className="font-headline font-bold text-xl text-green">Core Values</h3>
                </div>
                <div className="space-y-4 flex-1">
                  {site.about.values.map((v) => (
                    <div key={v.title} className="flex flex-col gap-1">
                      <h4 className="font-body font-semibold text-[15px] text-green">{v.title}</h4>
                      <p className="text-[14px] text-green/70 font-body leading-relaxed">{v.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <div className="flex flex-col gap-6">
                <ScrollReveal delay={0.2} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-yellow">work</span>
                    <h3 className="font-headline font-bold text-xl text-green">Currently</h3>
                  </div>
                  <ul className="space-y-3 text-[14px] font-body text-green/80 flex-1">
                    <li className="flex flex-col">
                      <span className="text-[12px] text-green/50 uppercase tracking-wider font-semibold">Role</span>
                      <span className="font-medium text-green">{site.about.currently.role} @ {site.about.currently.company}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[12px] text-green/50 uppercase tracking-wider font-semibold">Location</span>
                      <span className="font-medium text-green">{site.about.currently.location}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[12px] text-green/50 uppercase tracking-wider font-semibold">Open To</span>
                      <span className="font-medium text-green">{site.about.currently.open_to}</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/5 flex-nowrap">
                    {/* Contact Email */}
                    <div className="relative group">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-12 h-12 bg-yellow hover:bg-yellow/90 text-green rounded-full shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                        aria-label="Contact Me"
                      >
                        <span className="material-symbols-outlined text-[24px]">mail</span>
                      </motion.a>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-green text-white text-[11px] font-bold font-headline rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        Contact Me
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green" />
                      </div>
                    </div>
                    
                    {/* LinkedIn */}
                    {site.social?.linkedin && (
                      <div className="relative group">
                        <motion.a
                          href={site.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center w-12 h-12 bg-yellow hover:bg-yellow/90 text-green rounded-full shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                          aria-label="LinkedIn"
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

                    {/* GitHub */}
                    {site.social?.github && (
                      <div className="relative group">
                        <motion.a
                          href={site.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center w-12 h-12 bg-yellow hover:bg-yellow/90 text-green rounded-full shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                          aria-label="GitHub"
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
                    
                    <DownloadResumeButton variant="icon" label="Resume" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
