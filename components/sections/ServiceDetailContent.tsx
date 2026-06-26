'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Zap, Users, ChevronDown, Check } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionLabel from '@/components/ui/SectionLabel';
import { gsap } from '@/lib/gsap';
import { toSlug } from '@/lib/utils';
import { getProcess, getStats, getDeliverables, getFaqs } from '@/lib/service-content';
import type { ServiceCategory, ServiceChild } from '@/types';

const WHY_US = [
  {
    icon: CheckCircle2,
    title: 'Tailored to Your Goals',
    desc: 'Every engagement is built around your specific objectives, audience, and budget — no cookie-cutter templates ever.',
  },
  {
    icon: Zap,
    title: 'Fast, Measurable Results',
    desc: 'Our battle-tested frameworks are designed to deliver impact quickly, with clear KPIs and transparent reporting at every milestone.',
  },
  {
    icon: Users,
    title: 'Dedicated Expert Team',
    desc: 'You work directly with specialists who have deep industry experience — not an account manager shuffling work to juniors.',
  },
];

interface Props {
  category: ServiceCategory;
  service: ServiceChild;
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-grotesk font-semibold text-brand-cream text-sm sm:text-base group-hover:text-brand-orange transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-white/40 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-brand-orange' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '240px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="font-bricolage text-sm text-white/55 leading-relaxed pb-5 pr-8">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServiceDetailContent({ category, service }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const siblings = category.children.filter((c) => c.title !== service.title);
  const process = getProcess(category.slug);
  const stats = getStats(category.slug);
  const deliverables = getDeliverables(category.slug);
  const faqs = getFaqs(category.slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        { el: '.sdc-overview', start: 'top 85%' },
        { el: '.sdc-process-heading', start: 'top 85%' },
        { el: '.sdc-deliverables-heading', start: 'top 85%' },
        { el: '.sdc-whyus-heading', start: 'top 85%' },
        { el: '.sdc-faq-heading', start: 'top 85%' },
        { el: '.sdc-siblings-heading', start: 'top 85%' },
      ];
      sections.forEach(({ el, start }) => {
        gsap.from(el, {
          y: 35, opacity: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start },
        });
      });

      gsap.from('.sdc-stat', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sdc-stats', start: 'top 85%' },
      });

      gsap.from('.sdc-step', {
        y: 50, opacity: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.sdc-steps', start: 'top 80%' },
      });

      gsap.from('.sdc-deliverable', {
        x: -20, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '.sdc-deliverables-grid', start: 'top 80%' },
      });

      gsap.from('.sdc-benefit', {
        y: 50, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.sdc-benefits', start: 'top 80%' },
      });

      gsap.from('.sdc-faq-wrap', {
        y: 30, opacity: 0, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: '.sdc-faq-wrap', start: 'top 80%' },
      });

      gsap.from('.sdc-sibling', {
        y: 40, opacity: 0, duration: 0.55, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.sdc-siblings', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-28">

        {/* ── 1. Overview + Stats ──────────────────────────────────────────── */}
        <div className="sdc-overview grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Left — description */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8 sm:p-10 border-l-4 border-brand-orange h-full">
              <SectionLabel>Overview</SectionLabel>
              <h2 className="font-grotesk font-bold text-2xl sm:text-3xl text-brand-cream mt-3 mb-4">
                What is <span className="text-brand-orange">{service.title}</span>?
              </h2>
              <p className="font-bricolage text-base text-white/65 leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="font-bricolage text-sm text-white/45 leading-relaxed">
                At NexivoStudio, we treat every project as a long-term investment in your brand&apos;s growth.
                Our approach combines strategic thinking with meticulous execution — so you get results that
                look great today and continue performing for years to come.
              </p>
            </GlassCard>
          </div>

          {/* Right — stats */}
          <div className="lg:col-span-2 sdc-stats flex flex-col gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="sdc-stat">
                <GlassCard className="p-6 glass-hover flex items-center gap-5">
                  <p className="font-grotesk font-bold text-3xl text-brand-orange leading-none shrink-0">
                    {stat.value}
                  </p>
                  <p className="font-bricolage text-sm text-white/55 leading-snug">{stat.label}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Our Process ───────────────────────────────────────────────── */}
        <div>
          <div className="sdc-process-heading text-center mb-14">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-brand-cream mt-2">
              Our <span className="text-brand-orange">{service.title}</span> Process
            </h2>
            <p className="font-bricolage text-sm text-white/45 mt-3 max-w-lg mx-auto">
              A transparent, structured workflow that keeps you in the loop from start to launch.
            </p>
          </div>

          <div className="sdc-steps grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {process.map((step) => (
              <div key={step.step} className="sdc-step">
                <GlassCard className="glass-hover p-6 h-full flex flex-col gap-4 relative overflow-hidden">
                  {/* Faded background number */}
                  <span className="absolute -bottom-3 -right-1 font-grotesk font-black text-[5rem] leading-none text-white/[0.04] select-none pointer-events-none">
                    {step.step}
                  </span>
                  {/* Orange step badge */}
                  <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center self-start shrink-0">
                    <span className="font-grotesk font-bold text-xs text-white">{step.step}</span>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-white/8" />
                  {/* Content */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-grotesk font-semibold text-brand-cream text-sm leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-bricolage text-xs text-white/50 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. What You Get (Deliverables) ──────────────────────────────── */}
        <div>
          <div className="sdc-deliverables-heading text-center mb-12">
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-brand-cream mt-2">
              What You <span className="text-brand-orange">Get</span>
            </h2>
            <p className="font-bricolage text-sm text-white/45 mt-3 max-w-lg mx-auto">
              Tangible outputs and assets you receive at the end of every engagement.
            </p>
          </div>

          <GlassCard className="p-8 sm:p-10">
            <div className="sdc-deliverables-grid grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              {deliverables.map((item) => (
                <div key={item} className="sdc-deliverable flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-brand-orange" strokeWidth={3} />
                  </div>
                  <span className="font-bricolage text-sm text-white/70 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Bonus callout */}
            <div className="mt-8 pt-6 border-t border-white/8 flex items-start gap-3">
              <span className="font-grotesk text-xs font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                BONUS
              </span>
              <p className="font-bricolage text-sm text-white/50 leading-relaxed">
                Every project comes with a dedicated onboarding call, a shared project workspace for real-time
                collaboration, and a post-delivery review session to ensure full handoff.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* ── 4. Why NexivoStudio ─────────────────────────────────────────── */}
        <div>
          <div className="sdc-whyus-heading text-center mb-12">
            <SectionLabel>Why Us</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-brand-cream mt-2">
              Why Choose <span className="text-brand-orange">NexivoStudio</span>?
            </h2>
          </div>
          <div className="sdc-benefits grid grid-cols-1 sm:grid-cols-3 gap-5">
            {WHY_US.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="sdc-benefit">
                <GlassCard className="p-7 h-full glass-hover flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-brand-orange" />
                  </div>
                  <h3 className="font-grotesk font-semibold text-brand-cream text-base mb-3">{title}</h3>
                  <p className="font-bricolage text-sm text-white/55 leading-relaxed flex-1">{desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. FAQ ──────────────────────────────────────────────────────── */}
        <div>
          <div className="sdc-faq-heading text-center mb-12">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-brand-cream mt-2">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
            <p className="font-bricolage text-sm text-white/45 mt-3 max-w-lg mx-auto">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="sdc-faq-wrap max-w-3xl mx-auto">
            <GlassCard className="px-6 sm:px-10 py-2">
              {faqs.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </GlassCard>
          </div>
        </div>

        {/* ── 6. Related Services ─────────────────────────────────────────── */}
        {siblings.length > 0 && (
          <div>
            <div className="sdc-siblings-heading text-center mb-12">
              <SectionLabel>More Services</SectionLabel>
              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-brand-cream mt-2">
                Other <span className="text-brand-orange">{category.title}</span> Services
              </h2>
              <p className="font-bricolage text-sm text-white/45 mt-3 max-w-lg mx-auto">
                Explore the full suite of {category.title.toLowerCase()} solutions we offer.
              </p>
            </div>
            <div className="sdc-siblings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siblings.map((sibling) => (
                <Link
                  key={sibling.title}
                  href={`/services/${category.slug}/${toSlug(sibling.title)}`}
                  className="sdc-sibling group"
                >
                  <GlassCard className="p-6 h-full glass-hover flex flex-col gap-3">
                    <h3 className="font-grotesk font-semibold text-brand-cream text-sm group-hover:text-brand-orange transition-colors duration-200">
                      {sibling.title}
                    </h3>
                    <p className="font-bricolage text-xs text-white/45 leading-relaxed flex-1 line-clamp-2">
                      {sibling.description}
                    </p>
                    <span className="font-grotesk text-xs font-semibold text-brand-orange flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn more →
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
