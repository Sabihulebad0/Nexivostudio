'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Palette, Code2, Share2, SearchCheck, Globe, Wrench, type LucideIcon } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { gsap } from '@/lib/gsap';
import type { ServiceCategory } from '@/types';

const iconMap: Record<string, LucideIcon> = { Palette, Code2, Share2, SearchCheck, Globe, Wrench };

interface Props {
  service: ServiceCategory;
}

export default function ServiceHero({ service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const Icon = iconMap[service.icon] ?? Palette;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Blob breathing
      gsap.to(blobRef.current, {
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Stagger fade+y on content elements
      gsap.from(
        ['.sh-breadcrumb', '.sh-icon', '.sh-label', '.sh-heading', '.sh-sub', '.sh-buttons'],
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.35) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Orange breathing blob */}
        <div
          ref={blobRef}
          style={{ opacity: 0.12 }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-orange rounded-full blur-[140px]"
        />

        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_50%_50%,transparent_55%,#0d0d0d_100%)]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Breadcrumb */}
        <div className="sh-breadcrumb flex items-center justify-center gap-1.5 mb-8">
          <Link
            href="/"
            className="font-bricolage text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-white/30" />
          <span className="font-bricolage text-sm text-white/40">Services</span>
          <ChevronRight size={13} className="text-white/30" />
          <span className="font-bricolage text-sm text-white/70">{service.title}</span>
        </div>

        {/* Icon badge */}
        <div className="sh-icon flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/12 border border-brand-orange/25 flex items-center justify-center">
            <Icon size={28} className="text-brand-orange" />
          </div>
        </div>

        {/* Eyebrow label */}
        <div className="sh-label">
          <SectionLabel>{service.title}</SectionLabel>
        </div>

        {/* Heading */}
        <h1 className="sh-heading font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-cream leading-[1.15] tracking-tight mt-2 mb-6">
          {service.title}{' '}
          <span className="text-brand-orange">Services</span>
        </h1>

        {/* Subheading */}
        <p className="sh-sub font-bricolage text-base text-white/55 leading-relaxed max-w-xl mx-auto mb-10">
          {service.description}
        </p>

        {/* CTA Buttons */}
        <div className="sh-buttons flex flex-wrap gap-4 justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk text-sm leading-none bg-brand-orange text-brand-cream hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            Get a Free Quote
          </a>
          <a
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk text-sm leading-none bg-white/5 text-brand-cream border border-white/20 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
