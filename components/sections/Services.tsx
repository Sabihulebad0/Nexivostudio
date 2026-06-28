'use client';

import { useEffect, useRef } from 'react';
import { Palette, Code2, Share2, SearchCheck, Globe, Wrench, type LucideIcon } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { gsap } from '@/lib/gsap';

const iconMap: Record<string, LucideIcon> = { Palette, Code2, Share2, SearchCheck, Globe, Wrench };

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-heading', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.services-heading', start: 'top 85%' },
      });

      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services-heading text-center mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            What We{' '}
            <span className="text-brand-orange">Do Best</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            End-to-end digital services designed to grow your business, elevate your brand,
            and outperform the competition.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Palette;
            return (
              <div key={cat.title} className="service-card">
                <GlassCard className="p-6 h-full glass-hover group flex flex-col">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <Icon size={20} className="text-brand-orange" />
                  </div>

                  {/* Title + count */}
                  <h3 className="font-grotesk font-semibold text-brand-cream text-lg mb-1">
                    {cat.title}
                  </h3>
                  <p className="font-bricolage text-xs text-white/35 mb-4">
                    {cat.children.length} services
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/8 mb-4" />

                  {/* Child service list */}
                  <ul className="flex flex-col gap-2 flex-1">
                    {cat.children.map((child) => (
                      <li key={child.title} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-orange/60 mt-[7px] shrink-0" />
                        <span className="font-bricolage text-[13px] text-white/55 leading-snug">
                          {child.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer CTA */}
                  <div className="mt-5 pt-4 border-t border-white/8">
                    <a
                      href={`/services/${cat.slug}`}
                      className="font-grotesk text-xs font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors"
                    >
                      Get started →
                    </a>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
