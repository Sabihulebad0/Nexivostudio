'use client';

import { useEffect, useRef } from 'react';
import { Phone, Calendar } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import LeadForm from '@/components/ui/LeadForm';
import { useModal } from '@/context/ModalContext';
import { gsap } from '@/lib/gsap';

const headlineSegments = [
  { words: ['We', 'Build'], orange: false },
  { words: ['Digital', 'Experiences'], orange: true },
  { words: ['That', 'Drive', 'Growth'], orange: false },
];

export default function Hero() {
  const { openSchedule } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Blob breathing ────────────────────────────────────────────────────
      gsap.to(blob1Ref.current, {
        scale: 1.18, opacity: 0.22, duration: 8,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
      gsap.to(blob2Ref.current, {
        scale: 1.25, opacity: 0.14, duration: 10,
        repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2,
      });
      gsap.to(blob3Ref.current, {
        scale: 1.1, opacity: 0.09, duration: 12,
        repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 4,
      });

      // ── Masked word reveal ────────────────────────────────────────────────
      gsap.from('.gsap-word', {
        y: '105%',
        duration: 0.85,
        stagger: 0.07,
        ease: 'power4.out',
        delay: 0.1,
      });

      // ── Content stagger ───────────────────────────────────────────────────
      gsap.from(['.hero-label', '.hero-sub', '.hero-buttons', '.hero-stats'], {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: 'power2.out',
        delay: 0.55,
      });

      // ── Form slide in ─────────────────────────────────────────────────────
      gsap.from('.hero-form', {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* ── Background ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.35) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Blobs */}
        <div ref={blob1Ref} style={{ opacity: 0.13 }}
          className="absolute -top-32 -left-24 w-[640px] h-[640px] bg-brand-orange rounded-full blur-[130px]"
        />
        <div ref={blob2Ref} style={{ opacity: 0.07 }}
          className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-orange-500 rounded-full blur-[110px]"
        />
        <div ref={blob3Ref} style={{ opacity: 0.04 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-orange rounded-full blur-[140px]"
        />

        {/* Decorative rings */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-[0.18]"
          style={{ border: '1.5px solid #FF6A1C' }} />
        <div className="absolute right-[12%] top-[10%] w-52 h-52 rounded-full opacity-[0.22]"
          style={{ border: '1px solid #FF6A1C' }} />
        <div className="absolute right-[22%] bottom-[15%] w-24 h-24 rounded-full opacity-[0.15]"
          style={{ border: '1px solid rgba(255,250,243,0.6)' }} />

        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_50%_50%,transparent_55%,#0d0d0d_100%)]" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col">
            <div className="hero-label">
              <SectionLabel>Digital Agency</SectionLabel>
            </div>

            {/* Masked word-by-word reveal */}
            <h1 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-cream leading-[1.15] tracking-tight mt-2 mb-6">
              {headlineSegments.map(({ words, orange }) =>
                words.map((word) => (
                  <span
                    key={word}
                    className="inline-block overflow-hidden leading-[1.2] align-bottom"
                  >
                    <span className={`gsap-word inline-block${orange ? ' text-brand-orange' : ''}`}>
                      {word}&nbsp;
                    </span>
                  </span>
                ))
              )}
            </h1>

            <p className="hero-sub font-bricolage text-base text-white/55 leading-relaxed mb-10 max-w-md">
              From stunning web design to performance-driven SEO and social media marketing —
              NexivoStudio is your end-to-end digital growth partner.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <Button variant="ghost" className="gap-2.5">
                <Phone size={16} /> Call Us
              </Button>
              <Button variant="ghost" className="gap-2.5" onClick={openSchedule}>
                <Calendar size={16} /> Schedule a Call
              </Button>
            </div>

            <div className="hero-stats flex gap-8 mt-12 pt-10 border-t border-white/8">
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '5+', label: 'Years of Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-grotesk font-bold text-2xl text-brand-orange">{stat.value}</div>
                  <div className="font-bricolage text-xs text-white/45 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="hero-form">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
