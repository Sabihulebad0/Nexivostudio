'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { gsap } from '@/lib/gsap';
import { toSlug } from '@/lib/utils';
import type { ServiceCategory } from '@/types';

interface Props {
  service: ServiceCategory;
}

export default function ServiceChildren({ service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sc-heading', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.sc-heading', start: 'top 85%' },
      });

      gsap.from('.sc-card', {
        y: 50,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.sc-grid', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="sc-heading text-center mb-14">
          <SectionLabel>What&apos;s Included</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            Everything You Need for{' '}
            <span className="text-brand-orange">{service.title}</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            A complete suite of {service.title.toLowerCase()} services to grow your business.
          </p>
        </div>

        {/* Cards grid */}
        <div className="sc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.children.map((child, i) => (
            <Link
              key={child.title}
              href={`/services/${service.slug}/${toSlug(child.title)}`}
              className="sc-card group"
            >
              <GlassCard className="glass-hover p-7 flex flex-col h-full">
                {/* Number badge */}
                <p className="font-grotesk text-xs font-bold text-brand-orange/50 mb-4 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </p>
                {/* Title */}
                <h3 className="font-grotesk font-semibold text-brand-cream text-lg mb-3 group-hover:text-brand-orange transition-colors duration-200">
                  {child.title}
                </h3>
                {/* Divider */}
                <div className="h-px bg-white/8 mb-4" />
                {/* Description */}
                <p className="font-bricolage text-sm text-white/55 leading-relaxed flex-1">
                  {child.description}
                </p>
                <span className="font-grotesk text-xs font-semibold text-brand-orange mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more →
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
