import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getServiceById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getServiceById(id) : undefined;

  if (!item) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-headline text-2xl text-green mb-4">Service not found</h1>
        <Link to="/services" className="text-yellow font-bold hover:underline">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={item.description} />
      </Helmet>
      
      {/* Hero Section */}
      <article className="relative pt-36 md:pt-40 pb-12 md:pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Content on Left */}
            <div className="relative z-10">
              <ScrollReveal>
                <div className="flex items-center gap-2 font-body text-[12px] md:text-[13px] text-green/60 mb-2 md:mb-3">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                  <span className="text-green/30">/</span>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                  <span className="text-green/30">/</span>
                  <span className="text-green/60 pointer-events-none">{item.title}</span>
                </div>
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-green leading-[1.15] tracking-tight mb-8">
                  {item.title.split(' ').map((word, i, arr) => (
                    <span key={i}>
                      {i === arr.length - 1 ? (
                        <span className="text-yellow italic font-normal">{word}</span>
                      ) : (
                        word + ' '
                      )}
                    </span>
                  ))}
                </h1>
                
                <p className="font-body text-lg md:text-xl text-green/70 leading-relaxed mb-10 max-w-xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Inquire Now" />
                </div>
              </ScrollReveal>
            </div>

            {/* Image on Right */}
            <ScrollReveal delay={0.2} className="relative">
              {item.image && (
                <div className={`relative z-10 w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-grey/30 ${
                  item.id === 'mobile-app' || item.id === 'ecommerce' ? 'aspect-square' : 'aspect-[3/2]'
                }`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              {/* Decorative Blobs */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-green/5 rounded-full blur-2xl -z-10" />
            </ScrollReveal>

          </div>
        </div>
      </article>

      {/* Merged Overview & Benefits Section */}
      <section className="py-20 md:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center">
            
            {/* Title & Narrative on Left */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <SectionEyebrow label="The Solution" />
                <h2 className="font-headline font-bold text-3xl md:text-5xl text-green mb-8 leading-tight">
                  Service <span className="text-yellow italic font-normal">Overview</span> & Key Benefits
                </h2>
                <p className="font-body text-[17px] md:text-lg text-green/80 leading-relaxed">
                  {item.detailed_description}
                </p>
              </ScrollReveal>
            </div>

            {/* Small Cards on Right */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {item.benefits.map((benefit, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-black/[0.02] flex items-center gap-4 hover:shadow-md transition-all group hover:bg-yellow/5 h-full">
                      <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <span className="font-headline font-bold text-green text-sm">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="font-body text-green/80 text-sm leading-snug">
                        {benefit}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid (Dark Section) */}
      <section className="py-24 bg-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionEyebrow label="Features" className="justify-center" light />
              <h2 className="font-headline font-bold text-4xl md:text-6xl text-white">
                Everything <span className="text-yellow italic font-normal">Included</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Scope', items: item.services_included, icon: 'inventory_2' },
              { title: 'Deliverables', items: item.deliverables, icon: 'card_giftcard' },
              { title: 'ROI & Outcomes', items: item.outcomes, icon: 'trending_up' }
            ].map((box, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 h-full flex flex-col hover:bg-white/[0.08] transition-colors group">
                  <div className="w-14 h-14 bg-yellow rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                    <span className="material-symbols-outlined text-green text-3xl">{box.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-2xl mb-8 text-white">{box.title}</h3>
                  <ul className="space-y-4 flex-1">
                    {box.items.map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 font-body text-[15px] leading-relaxed">
                        <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">done_all</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionEyebrow label="Our Process" className="justify-center" />
              <h2 className="font-headline font-bold text-4xl md:text-6xl text-green">
                Our Working <span className="text-yellow italic font-normal">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {item.process.map((step, i) => (
                <div key={i} className="bg-grey/40 p-10 rounded-[2.5rem] relative overflow-hidden group hover:bg-yellow/10 transition-colors duration-500 h-full border border-black/[0.02]">
                  <div className="absolute -right-4 -top-4 text-9xl font-headline font-black text-green/[0.03] group-hover:text-yellow/[0.1] transition-colors duration-500">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  
                  <h4 className="font-headline font-bold text-2xl text-green mb-4 relative z-10">{step.title}</h4>
                  <p className="font-body text-green/70 leading-relaxed text-[16px] relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ideal For: Use Cases & Industries */}
      <section className="py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">


          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* Ideal Use Cases - Left Side */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <h3 className="font-headline font-bold text-2xl text-green mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-yellow rounded-full" />
                  Use Cases
                </h3>
                <div className="grid grid-cols-1 gap-5">
                  {item.use_cases.map((useCase, i) => (
                    <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.03] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-start gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-yellow/10 flex items-center justify-center shrink-0 text-yellow group-hover:scale-110 group-hover:bg-yellow group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">verified</span>
                      </div>
                      <p className="font-body text-green/80 text-[16px] leading-relaxed pt-1 sm:pt-2">{useCase}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Target Industries - Right Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <ScrollReveal delay={0.2}>
                <h3 className="font-headline font-bold text-2xl text-green mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-yellow rounded-full" />
                  Target Industries
                </h3>
                <div className="flex flex-col gap-2">
                  {item.industries.map((industry, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default p-4 rounded-2xl hover:bg-white border border-transparent hover:border-black/[0.03] hover:shadow-sm transition-all">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow/40 group-hover:bg-yellow transition-colors shrink-0" />
                      <span className="text-green/90 font-headline font-bold text-lg group-hover:text-green transition-colors">{industry}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* Problems Solved (Compact) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionEyebrow label="Solutions" className="justify-center" />
              <h2 className="font-headline font-bold text-4xl md:text-6xl text-green">
                Solving <span className="text-yellow italic font-normal">Business</span> Challenges
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {item.problems_solved.map((problem, i) => (
                <div key={i} className="bg-grey/40 px-8 py-6 rounded-2xl flex items-center gap-4 border border-black/[0.02] shadow-sm hover:border-yellow transition-colors text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
                  <span className="material-symbols-outlined text-yellow shrink-0">task_alt</span>
                  <span className="font-body text-green text-[15px] font-medium leading-tight">{problem}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
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
