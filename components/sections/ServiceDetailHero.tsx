'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Palette, Code2, Share2, SearchCheck, type LucideIcon } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { gsap } from '@/lib/gsap';
import type { ServiceCategory, ServiceChild } from '@/types';

const iconMap: Record<string, LucideIcon> = { Palette, Code2, Share2, SearchCheck };

interface Props {
  category: ServiceCategory;
  service: ServiceChild;
}

export default function ServiceDetailHero({ category, service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        scale: 1.15, opacity: 0.2, duration: 7,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
      });

      gsap.from(
        ['.sdh-breadcrumb', '.sdh-badge', '.sdh-label', '.sdh-heading', '.sdh-sub', '.sdh-buttons'],
        { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const Icon = iconMap[category.icon] ?? Palette;

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.3) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div
          ref={blobRef}
          style={{ opacity: 0.12 }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_50%,#0d0d0d_100%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="sdh-breadcrumb flex items-center justify-center gap-1.5 mb-8 font-bricolage text-xs text-white/40 flex-wrap">
          <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight size={11} className="text-white/25 shrink-0" />
          <Link href="/#services" className="hover:text-brand-orange transition-colors">Services</Link>
          <ChevronRight size={11} className="text-white/25 shrink-0" />
          <Link href={`/services/${category.slug}`} className="hover:text-brand-orange transition-colors">
            {category.title}
          </Link>
          <ChevronRight size={11} className="text-white/25 shrink-0" />
          <span className="text-white/65">{service.title}</span>
        </div>

        {/* Category badge + icon */}
        <div className="sdh-badge flex items-center justify-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-orange/12 border border-brand-orange/25 flex items-center justify-center">
            <Icon size={24} className="text-brand-orange" />
          </div>
          <span className="font-grotesk text-xs font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-1.5 rounded-full">
            {category.title}
          </span>
        </div>

        <div className="sdh-label">
          <SectionLabel>Our Services</SectionLabel>
        </div>

        <h1 className="sdh-heading font-grotesk font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-brand-cream mt-3 mb-5 leading-tight">
          {service.title}
        </h1>

        <p className="sdh-sub font-bricolage text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
          {service.description}
        </p>

        <div className="sdh-buttons flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk text-sm leading-none bg-brand-orange text-brand-cream hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            Get a Free Quote
          </a>
          <Link
            href={`/services/${category.slug}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk text-sm leading-none bg-white/5 text-brand-cream border border-white/20 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            ← Back to {category.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
