import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getProjectById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getProjectById(id) : undefined;

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(null);
  }, [id]);

  if (!item) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-headline text-2xl text-green mb-4">Project not found</h1>
        <Link to="/projects" className="text-yellow font-bold hover:underline">
          Back to projects
        </Link>
      </section>
    );
  }

  const metaDesc = (item.summary ?? item.content).slice(0, 155);
  
  const currentMainImage = activeImage || item.image;
  const allImages = Array.from(new Set([item.image, ...(item.gallery ?? [])]));
  const galleryThumbs = allImages.filter((src) => src !== currentMainImage);

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={metaDesc} />
      </Helmet>
      
      {/* Hero Section */}
      <article className="pt-28 md:pt-36 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            {/* Dynamic Breadcrumbs */}
            <div className="flex items-center gap-2 font-body text-[12px] md:text-[13px] text-green/60 mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="text-green/30">/</span>
              <Link to="/projects" className="hover:underline">
                Projects
              </Link>
              <span className="text-green/30">/</span>
              <span className="text-green/60 pointer-events-none">{item.title}</span>
            </div>

            <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-green leading-[1.1] tracking-tight mb-8">
              {item.title}
            </h1>
            
            {/* Summary and Live URL */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
              {item.summary && (
                <p className="font-body text-xl text-green/80 leading-relaxed max-w-4xl">
                  {item.summary}
                </p>
              )}
              {item.is_public && item.live_url && (
                <a
                  href={item.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-green text-white font-headline font-bold px-6 py-3 rounded-full hover:bg-yellow hover:text-green transition-colors flex items-center gap-2"
                >
                  Visit Live Site <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow/20 text-green font-headline font-bold text-[13px] px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
              {/* Main Image */}
              <div className="lg:col-span-9 h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-sm relative group">
                <img
                  src={currentMainImage}
                  alt={item.title}
                  width={1200}
                  height={750}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {item.stack && item.stack.length > 0 && (
                  <div className="absolute bottom-6 right-6 flex flex-wrap gap-2 justify-end max-w-[80%]">
                    {item.stack.map(s => (
                      <span key={s} className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-headline text-[11px] border border-white/10 shadow-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {galleryThumbs.length > 0 && (
                <div className="lg:col-span-3 flex lg:flex-col gap-4 h-[300px] md:h-[500px]">
                  {galleryThumbs.map((src) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(src)}
                      className="relative flex-1 rounded-lg overflow-hidden bg-grey shadow-sm hover:shadow-md transition-all group border border-black/5 p-0 cursor-pointer w-full"
                    >
                      <img
                        src={src}
                        alt={`${item.title} gallery thumbnail`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Overview & The Challenge/Solution */}
      <section className="py-20 md:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Overview */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionEyebrow label="Overview" />
                <h2 className="font-headline font-bold text-3xl md:text-[3rem] text-green mb-8 leading-[1.15]">
                  <span className="text-yellow italic font-normal">Project</span> Overview
                </h2>
                <div className="font-body text-[17px] text-green/80 leading-[1.8] space-y-6">
                  {item.content.split(/\n\n+/).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Challenge & Solution */}
            {(item.problem || item.solution) && (
              <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
                {item.problem && (
                  <ScrollReveal delay={0.1}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/[0.03] hover:shadow-lg hover:-translate-y-1 transition-all group">
                      <h3 className="font-headline font-bold text-xl text-green mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center shrink-0 group-hover:bg-yellow transition-colors duration-300">
                          <span className="material-symbols-outlined text-yellow text-[20px] group-hover:text-white transition-colors duration-300">error</span>
                        </div>
                        The Challenge
                      </h3>
                      <p className="font-body text-[15px] text-green/80 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                  </ScrollReveal>
                )}
                {item.solution && (
                  <ScrollReveal delay={0.2}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/[0.03] hover:shadow-lg hover:-translate-y-1 transition-all group">
                      <h3 className="font-headline font-bold text-xl text-green mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow/10 flex items-center justify-center shrink-0 group-hover:bg-yellow transition-colors duration-300">
                          <span className="material-symbols-outlined text-yellow text-[20px] group-hover:text-white transition-colors duration-300">lightbulb</span>
                        </div>
                        The Solution
                      </h3>
                      <p className="font-body text-[15px] text-green/80 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Key Features & Project Highlights (Dark Section) */}
      {(item.features?.length || item.highlights?.length) ? (
        <section className="py-20 md:py-24 bg-green text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {item.features && item.features.length > 0 && (
                <ScrollReveal>
                  <h2 className="font-headline font-bold text-2xl text-yellow mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-yellow rounded-full" />
                    Key Features
                  </h2>
                  <div className="space-y-4">
                    {item.features.map((f, i) => (
                      <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-yellow text-[14px]">check</span>
                        </div>
                        <p className="font-body text-white/90 text-[15px] leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ScrollReveal delay={0.1}>
                  <h2 className="font-headline font-bold text-2xl text-yellow mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-yellow rounded-full" />
                    Project Highlights
                  </h2>
                  <ul className="flex flex-col">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-6 py-5 border-t border-white/10 first:border-0">
                        <span className="font-headline font-black text-3xl text-yellow/50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="font-body text-white/90 text-[16px] leading-relaxed pt-1">
                          {h}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {/* Learnings, Challenges, Impact (White Background) */}
      {(item.challenges || item.learnings || item.impact) && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionEyebrow label="Outcomes" className="justify-center" />
                <h2 className="font-headline font-bold text-4xl md:text-[3rem] text-green leading-[1.15]">
                  Project <span className="text-yellow italic font-normal">Results</span> & Outcomes
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              
              {/* Challenges */}
              {item.challenges && item.challenges.length > 0 && (
                <ScrollReveal delay={0.1}>
                  <h3 className="font-headline font-bold text-xl text-green mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow">trending_flat</span>
                    Challenges Overcome
                  </h3>
                  <ul className="space-y-4">
                    {item.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                        <p className="font-body text-[16px] text-green/80 leading-relaxed">{c}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              {/* Learnings */}
              {item.learnings && item.learnings.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <h3 className="font-headline font-bold text-xl text-green mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow">star</span>
                    Key Learnings
                  </h3>
                  <ul className="space-y-4">
                    {item.learnings.map((l, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                        <p className="font-body text-[16px] text-green/80 leading-relaxed">{l}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              {/* Impact */}
              {item.impact && item.impact.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <h3 className="font-headline font-bold text-xl text-green mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow">trending_up</span>
                    Business Impact
                  </h3>
                  <ul className="space-y-4">
                    {item.impact.map((imp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                        <p className="font-body text-[16px] text-green/80 leading-relaxed">{imp}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Want to see <span className="text-yellow">Similar</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Results</span> for your business?
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me" />
          </div>
        </div>
      </section>
    </>
  );
}
