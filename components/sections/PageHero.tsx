'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Users, LayoutGrid, BookOpen, Briefcase, MessageCircle, Tag,
  type LucideIcon,
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { gsap } from '@/lib/gsap';

const iconMap: Record<string, LucideIcon> = {
  Users, LayoutGrid, BookOpen, Briefcase, MessageCircle, Tag,
};

interface PageHeroProps {
  breadcrumb: string;
  icon: string;
  label: string;
  title: string;
  highlight: string;
  subtitle: string;
  pills?: string[];
}

export default function PageHero({
  breadcrumb,
  icon,
  label,
  title,
  highlight,
  subtitle,
  pills,
}: PageHeroProps) {
  const Icon = iconMap[icon] ?? Tag;
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef    = useRef<HTMLDivElement>(null);

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
        ['.ph-crumb', '.ph-icon', '.ph-label', '.ph-heading', '.ph-sub', '.ph-pills'],
        { y: 32, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[62vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.35) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div
          ref={blobRef}
          style={{ opacity: 0.11 }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-brand-orange rounded-full blur-[145px]"
        />
        <div
          className="absolute left-[7%] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-[0.10]"
          style={{ border: '1px solid #FF6A1C' }}
        />
        <div
          className="absolute right-[9%] top-[18%] w-40 h-40 rounded-full opacity-[0.13]"
          style={{ border: '1px solid #FF6A1C', animation: 'spin-slow 55s linear infinite reverse' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_50%_50%,transparent_55%,#0d0d0d_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Breadcrumb */}
        <div className="ph-crumb flex items-center justify-center gap-1.5 mb-8">
          <Link
            href="/"
            className="font-bricolage text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-white/30" />
          <span className="font-bricolage text-sm text-white/70">{breadcrumb}</span>
        </div>

        {/* Icon badge */}
        <div className="ph-icon flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/12 border border-brand-orange/25 flex items-center justify-center">
            <Icon size={28} className="text-brand-orange" />
          </div>
        </div>

        {/* Section label */}
        <div className="ph-label">
          <SectionLabel>{label}</SectionLabel>
        </div>

        {/* Heading */}
        <h1 className="ph-heading font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-cream leading-[1.15] tracking-tight mt-2 mb-6">
          {title}{' '}
          <span className="text-brand-orange">{highlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="ph-sub font-bricolage text-base text-white/55 leading-relaxed max-w-lg mx-auto mb-8">
          {subtitle}
        </p>

        {/* Pill badges */}
        {pills && pills.length > 0 && (
          <div className="ph-pills flex flex-wrap justify-center gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="font-bricolage text-xs text-white/60 bg-white/5 border border-white/12 px-4 py-1.5 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
