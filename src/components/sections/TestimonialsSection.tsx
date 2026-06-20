import type { RefObject } from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { testimonials, testimonialsSettings } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const GAP_PX = 16;

type Layout = {
  perView: number;
  cardWidth: number;
};

function useCarouselLayout(containerRef: RefObject<HTMLElement | null>) {
  const [layout, setLayout] = useState<Layout>({ perView: 1, cardWidth: 0 });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mq = window.matchMedia('(min-width: 768px)');

    const compute = () => {
      const w = el.clientWidth;
      const perView = mq.matches ? 3 : 1;
      const cw = perView > 0 ? (w - (perView - 1) * GAP_PX) / perView : w;
      setLayout({ perView, cardWidth: Math.max(0, cw) });
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    mq.addEventListener('change', compute);
    return () => {
      ro.disconnect();
      mq.removeEventListener('change', compute);
    };
  }, [containerRef]);

  return layout;
}

export function TestimonialsSection() {
  const n = testimonials.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const layout = useCarouselLayout(containerRef);
  const { perView, cardWidth } = layout;

  const [start, setStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const stride = cardWidth > 0 ? cardWidth + GAP_PX : 0;

  // Cloned items for infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, perView)];

  useEffect(() => {
    if (stride <= 0) return;

    const ms = testimonialsSettings.autoScrollIntervalMs ?? 3000;
    const pauseHover = testimonialsSettings.pauseOnHover !== false;
    
    const tick = window.setInterval(() => {
      if (pauseHover && pausedRef.current) return;
      
      setIsTransitioning(true);
      setStart((s) => s + 1);
    }, ms);

    return () => window.clearInterval(tick);
  }, [stride, perView]);

  // Handle the infinite loop reset
  useEffect(() => {
    if (start >= n) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setStart(0);
      }, 500); // match the duration-500 in CSS
      return () => window.clearTimeout(timer);
    }
  }, [start, n]);

  const pauseHover = testimonialsSettings.pauseOnHover !== false;
  const translateX = start * stride;
  const dotCount = n;

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-yellow" aria-hidden />
            <p className="font-headline font-bold text-[15px] tracking-wide text-green">
              Clients Testimonials
            </p>
          </div>
          <h2
            id="testimonials-heading"
            className="font-headline font-extrabold text-3xl md:text-5xl text-green leading-tight"
          >
            The Impact of My Work:
            <br />
            <span className="text-yellow italic font-normal">Client Testimonials</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-grey rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50 -z-10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-yellow rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-10 -z-10 blur-3xl" aria-hidden />

          <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-[1.75rem]"
            onMouseEnter={() => pauseHover && setPaused(true)}
            onMouseLeave={() => pauseHover && setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div
              className="flex gap-4 items-stretch"
              style={{
                transform: cardWidth > 0 ? `translateX(-${translateX}px)` : undefined,
                transition: isTransitioning ? 'transform 500ms ease-out' : 'none',
              }}
            >
              {extendedTestimonials.map((test, i) => (
                <article
                  key={`${test.id ?? test.name}-${i}`}
                  className="shrink-0 h-full self-stretch flex"
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : '100%',
                  }}
                  aria-hidden={i < start || i >= start + perView}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.4 }}
                    className="bg-grey p-6 md:p-8 rounded-[1.75rem] flex flex-col flex-1 min-h-0 w-full h-full group transition-all duration-300 hover:bg-white hover:shadow-lg border border-transparent hover:border-black/5"
                  >
                    <div className="flex-1 min-h-0">
                      <div className="text-yellow mb-4" aria-hidden>
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 opacity-50">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="font-headline text-base md:text-lg text-green leading-relaxed font-bold tracking-tight mb-6">
                        &ldquo;{test.text}&rdquo;
                      </p>
                    </div>
                    {test.projectId && (
                      <div className="mt-auto shrink-0 pt-4 border-t border-black/5">
                        <Link
                          to={`/project/${test.projectId}`}
                          className="inline-flex items-center gap-1.5 font-headline font-bold text-xs md:text-sm text-green hover:text-yellow transition-colors duration-200 group/link"
                        >
                          View Case Study
                          <span className="material-symbols-outlined text-[18px] translate-y-[0.5px] group-hover/link:translate-x-0.5 transition-transform duration-200">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </article>
              ))}
            </div>
          </div>

          {dotCount > 1 && (
            <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial position">
              {Array.from({ length: dotCount }, (_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === (start % dotCount)}
                  aria-label={`Show testimonials starting at ${i + 1}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setStart(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green ${
                    i === (start % dotCount) ? 'w-8 bg-green' : 'w-2 bg-green/25 hover:bg-green/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
