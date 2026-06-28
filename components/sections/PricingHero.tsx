'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Tag } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { gsap } from '@/lib/gsap';

const pills = ['No Hidden Fees', 'Free Consultation', 'Cancel Anytime'];

const stats = [
  { value: '4', label: 'Services' },
  { value: '3', label: 'Plans Each' },
  { value: '150+', label: 'Happy Clients' },
];

export default function PricingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        scale: 1.18,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.from(
        ['.ph-breadcrumb', '.ph-icon', '.ph-label', '.ph-heading', '.ph-sub', '.ph-pills', '.ph-stats'],
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
      className="relative min-h-[68vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.35) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div
          ref={blobRef}
          style={{ opacity: 0.12 }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-brand-orange rounded-full blur-[140px]"
        />

        {/* Decorative rings */}
        <div
          className="absolute left-[8%] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-[0.12]"
          style={{ border: '1px solid #FF6A1C' }}
        />
        <div
          className="absolute right-[10%] top-[20%] w-40 h-40 rounded-full opacity-[0.15]"
          style={{ border: '1px solid #FF6A1C' }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_50%_50%,transparent_55%,#0d0d0d_100%)]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Breadcrumb */}
        <div className="ph-breadcrumb flex items-center justify-center gap-1.5 mb-8">
          <Link
            href="/"
            className="font-bricolage text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-white/30" />
          <span className="font-bricolage text-sm text-white/70">Pricing</span>
        </div>

        {/* Icon badge */}
        <div className="ph-icon flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/12 border border-brand-orange/25 flex items-center justify-center">
            <Tag size={28} className="text-brand-orange" />
          </div>
        </div>

        {/* Label */}
        <div className="ph-label">
          <SectionLabel>Transparent Pricing</SectionLabel>
        </div>

        {/* Heading */}
        <h1 className="ph-heading font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-cream leading-[1.15] tracking-tight mt-2 mb-6">
          Plans for Every{' '}
          <span className="text-brand-orange">Business</span>
        </h1>

        {/* Subtext */}
        <p className="ph-sub font-bricolage text-base text-white/55 leading-relaxed max-w-lg mx-auto mb-8">
          Choose from clear, honest pricing across all our services. No surprises, no lock-ins —
          just results that grow your business.
        </p>

        {/* Pill badges */}
        <div className="ph-pills flex flex-wrap justify-center gap-3 mb-12">
          {pills.map((pill) => (
            <span
              key={pill}
              className="font-bricolage text-xs text-white/60 bg-white/5 border border-white/12 px-4 py-1.5 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="ph-stats inline-flex flex-wrap justify-center gap-10 px-10 py-5 rounded-2xl bg-white/[0.03] border border-white/8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="text-center">
                <div className="font-grotesk font-bold text-2xl text-brand-orange">{stat.value}</div>
                <div className="font-bricolage text-xs text-white/40 mt-0.5">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
