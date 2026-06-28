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

const statsData = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 50,  suffix: '+', label: 'Happy Clients' },
  { value: 5,   suffix: '+', label: 'Years of Experience' },
];

// Fixed particle positions to avoid hydration mismatch
const PARTICLES = [
  { left: 6,  top: 18, size: 2, delay: 0,   dur: 7  },
  { left: 14, top: 55, size: 3, delay: 1.4, dur: 9  },
  { left: 22, top: 78, size: 2, delay: 2.8, dur: 6  },
  { left: 30, top: 30, size: 1, delay: 0.6, dur: 8  },
  { left: 40, top: 65, size: 3, delay: 3.2, dur: 7  },
  { left: 50, top: 12, size: 2, delay: 1.9, dur: 9  },
  { left: 58, top: 48, size: 1, delay: 0.3, dur: 6  },
  { left: 67, top: 82, size: 2, delay: 2.1, dur: 8  },
  { left: 75, top: 22, size: 3, delay: 3.7, dur: 7  },
  { left: 83, top: 60, size: 2, delay: 1.1, dur: 9  },
  { left: 90, top: 38, size: 1, delay: 4.2, dur: 6  },
  { left: 11, top: 40, size: 2, delay: 2.5, dur: 8  },
  { left: 46, top: 88, size: 1, delay: 0.9, dur: 7  },
  { left: 62, top: 10, size: 3, delay: 3.0, dur: 9  },
  { left: 78, top: 72, size: 2, delay: 1.6, dur: 6  },
];

export default function Hero() {
  const { openSchedule } = useModal();
  const sectionRef  = useRef<HTMLElement>(null);
  const blob1Ref    = useRef<HTMLDivElement>(null);
  const blob2Ref    = useRef<HTMLDivElement>(null);
  const blob3Ref    = useRef<HTMLDivElement>(null);
  const blob4Ref    = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Blob animations ──────────────────────────────────────────────────
      gsap.to(blob1Ref.current, { scale: 1.22, opacity: 0.22, duration: 8,  repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to(blob2Ref.current, { scale: 1.30, opacity: 0.14, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });
      gsap.to(blob3Ref.current, { scale: 1.15, opacity: 0.09, duration: 13, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 4 });
      gsap.to(blob4Ref.current, { scale: 1.18, opacity: 0.11, duration: 9,  repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 });

      // ── Slow-spin decorative ring ────────────────────────────────────────
      gsap.to(ringRef.current, { rotation: 360, duration: 40, repeat: -1, ease: 'none' });

      // ── Masked word reveal ───────────────────────────────────────────────
      gsap.from('.gsap-word', {
        y: '110%',
        duration: 0.9,
        stagger: 0.07,
        ease: 'power4.out',
        delay: 0.1,
      });

      // ── Content stagger ──────────────────────────────────────────────────
      gsap.from(['.hero-label', '.hero-sub', '.hero-buttons'], {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.13,
        ease: 'power3.out',
        delay: 0.55,
      });

      // ── Form slide in ────────────────────────────────────────────────────
      gsap.from('.hero-form', {
        x: 70,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      // ── Stat counters ────────────────────────────────────────────────────
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const { value, suffix } = statsData[i];
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 2.2,
          delay: 0.85,
          ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(obj.val) + suffix; },
        });
      });

      // ── Stats row fade in ────────────────────────────────────────────────
      gsap.from('.hero-stats', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.82,
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
      {/* ── Background ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.35) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-orange"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float-particle ${p.dur}s ${p.delay}s infinite ease-in-out`,
            }}
          />
        ))}

        {/* Blobs */}
        <div ref={blob1Ref} style={{ opacity: 0.13 }}
          className="absolute -top-32 -left-24 w-[680px] h-[680px] bg-brand-orange rounded-full blur-[130px]"
        />
        <div ref={blob2Ref} style={{ opacity: 0.07 }}
          className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-orange-500 rounded-full blur-[110px]"
        />
        <div ref={blob3Ref} style={{ opacity: 0.04 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-brand-orange rounded-full blur-[150px]"
        />
        <div ref={blob4Ref} style={{ opacity: 0.08 }}
          className="absolute top-10 right-[15%] w-[340px] h-[340px] bg-orange-400 rounded-full blur-[100px]"
        />

        {/* Decorative rings */}
        <div
          ref={ringRef}
          className="absolute -left-48 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full opacity-[0.14]"
          style={{ border: '1.5px solid #FF6A1C' }}
        />
        <div
          className="absolute right-[10%] top-[8%] w-56 h-56 rounded-full opacity-[0.18]"
          style={{ border: '1px solid #FF6A1C', animation: 'spin-slow 60s linear infinite reverse' }}
        />
        <div
          className="absolute right-[20%] bottom-[12%] w-28 h-28 rounded-full opacity-[0.12]"
          style={{ border: '1px solid rgba(255,250,243,0.5)' }}
        />

        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_50%_50%,transparent_50%,#0d0d0d_100%)]" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
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

            {/* Stats */}
            <div className="hero-stats flex gap-8 mt-12 pt-10 border-t border-white/8">
              {statsData.map((stat, i) => (
                <div key={stat.label}>
                  <div className="font-grotesk font-bold text-2xl text-brand-orange">
                    <span ref={(el) => { counterRefs.current[i] = el; }}>
                      0{stat.suffix}
                    </span>
                  </div>
                  <div className="font-bricolage text-xs text-white/45 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="hero-form pt-8 lg:pt-12">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
