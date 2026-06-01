import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

type Props = {
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  titleAfter?: string;
};

export function PageListHeading({ eyebrow, titleBefore, titleAccent, titleAfter = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const parentSection = containerRef.current.closest('section');
      if (parentSection) {
        parentSection.classList.remove('pt-28', 'md:pt-36');
        parentSection.classList.add('pt-[120px]', 'md:pt-[148px]');
      }
    }
  }, []);

  return (
    <div ref={containerRef}>
      <ScrollReveal className="flex flex-col mb-12 md:mb-16 gap-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body text-[12px] text-green/60 mb-3">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="text-green/30">/</span>
          <span className="text-green/60 pointer-events-none">{titleAccent}</span>
        </div>

        {/* Eyebrow Label with 8px margin bottom override */}
        <div className="mb-2">
          <SectionEyebrow label={eyebrow} className="!mb-0" />
        </div>

        {/* Page Headline */}
        <h1 className="font-headline font-bold text-3xl md:text-5xl tracking-tight leading-[1.1]">
          <span className="text-green">{titleBefore}</span>
          <span className="text-yellow italic font-normal">{titleAccent}</span>
          {titleAfter ? <span className="text-green">{titleAfter}</span> : null}
        </h1>
      </ScrollReveal>
    </div>
  );
}
