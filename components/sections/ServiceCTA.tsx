'use client';

import { useEffect, useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { gsap } from '@/lib/gsap';

export default function ServiceCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.scta-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.scta-card', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scta-card">
          <GlassCard className="p-10 sm:p-14">
            <SectionLabel>Ready to Start?</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2 mb-4">
              Let&apos;s Build Something{' '}
              <span className="text-brand-orange">Great Together</span>
            </h2>
            <p className="font-bricolage text-base text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
              Get in touch and let&apos;s discuss how we can help grow your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk text-sm leading-none bg-brand-orange text-brand-cream hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk text-sm leading-none bg-white/5 text-brand-cream border border-white/20 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                Back to Home
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
