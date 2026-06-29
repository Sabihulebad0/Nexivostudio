'use client';

import { useEffect, useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { gsap } from '@/lib/gsap';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', desc: 'Across all our service verticals' },
  { value: 50,  suffix: '+', label: 'Happy Clients',      desc: 'Worldwide across 12 industries' },
  { value: 5,   suffix: '+', label: 'Years Experience',   desc: 'Building digital solutions' },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column slides in
      gsap.from('.about-left', {
        x: -40,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-left', start: 'top 80%' },
      });

      // Stat cards stagger in from right
      gsap.from('.stat-card', {
        x: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.stat-cards', start: 'top 80%' },
      });

      // Number counters
      const statEls = gsap.utils.toArray<HTMLElement>('.stat-number', sectionRef.current);
      statEls.forEach((el, i) => {
        const target = parseInt(el.dataset.target ?? '0', 10);
        const suffix = el.dataset.suffix ?? '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          delay: i * 0.15,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="about-left">
            <SectionLabel>About Us</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2 mb-6 leading-tight">
              A Studio Built for{' '}
              <span className="text-gradient-orange">Digital Growth</span>
            </h2>
            <p className="font-bricolage text-base text-white/55 leading-relaxed mb-5">
              NexivoStudio is a full-service digital agency specializing in web design, web
              development, SEO, and social media marketing. We&apos;re a team of strategists,
              designers, and engineers obsessed with building things that work.
            </p>
            <p className="font-bricolage text-base text-white/55 leading-relaxed mb-8">
              We partner with startups, SMBs, and established brands to create cohesive digital
              ecosystems — combining beautiful design with smart technology and growth-focused
              strategy.
            </p>

            <div className="flex flex-col gap-3">
              {['Results-driven approach', 'Transparent communication', 'Cutting-edge technology'].map(
                (value) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span className="font-bricolage text-sm text-white/65">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — animated stat cards */}
          <div className="stat-cards flex flex-col gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <GlassCard className="glass-hover overflow-hidden">
                  <div className="flex items-center gap-6 p-6">
                    {/* Orange left accent */}
                    <div className="shrink-0 w-1 self-stretch rounded-full bg-gradient-to-b from-[#FF6A1C] to-[#FF8C42] opacity-80" />
                    <div className="shrink-0">
                      <div
                        className="stat-number font-grotesk font-bold text-4xl text-gradient-orange"
                        data-target={stat.value}
                        data-suffix={stat.suffix}
                        style={{ filter: 'drop-shadow(0 0 8px rgba(255,106,28,0.35))' }}
                      >
                        0{stat.suffix}
                      </div>
                    </div>
                    <div>
                      <div className="font-grotesk font-semibold text-brand-cream text-lg">
                        {stat.label}
                      </div>
                      <div className="font-bricolage text-sm text-white/40 mt-0.5">
                        {stat.desc}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
