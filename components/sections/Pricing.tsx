'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/constants';
import type { ServicePricing } from '@/types';
import { useModal } from '@/context/ModalContext';

export default function Pricing() {
  const [activeService, setActiveService] = useState<string>(PRICING_PLANS[0].service);
  const { openPricing } = useModal();

  const active: ServicePricing =
    PRICING_PLANS.find((s) => s.service === activeService) ?? PRICING_PLANS[0];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,250,243,0.35) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-brand-orange rounded-full blur-[160px] opacity-[0.07]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,transparent_50%,#0d0d0d_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            Transparent, Honest{' '}
            <span className="text-gradient-orange">Pricing</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            No hidden fees. Choose the service and the plan that fits your goals and budget.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="glass flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl">
            {PRICING_PLANS.map((s) => (
              <button
                key={s.service}
                onClick={() => setActiveService(s.service)}
                className={`font-grotesk text-sm px-5 py-2 rounded-xl transition-all duration-200 ${
                  activeService === s.service
                    ? 'bg-brand-orange text-brand-cream shadow-lg shadow-brand-orange/25'
                    : 'text-white/55 hover:text-white/85 hover:bg-white/5'
                }`}
              >
                {s.service}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          >
            {active.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'md:-mt-5 md:mb-0 bg-white/[0.07] border-2 border-brand-orange shadow-[0_0_60px_rgba(255,106,28,0.2)] backdrop-blur-xl'
                    : 'glass glass-hover mt-0'
                }`}
              >
                {/* Top accent bar on highlighted */}
                {plan.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
                )}

                {/* Most Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="font-grotesk text-[11px] font-bold uppercase tracking-widest bg-brand-orange text-brand-cream px-4 py-1.5 rounded-full shadow-lg shadow-brand-orange/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-7 flex flex-col flex-1 ${plan.highlighted ? 'pt-9' : ''}`}>
                  {/* Plan name */}
                  <p
                    className={`font-grotesk text-xs font-semibold uppercase tracking-widest mb-4 ${
                      plan.highlighted ? 'text-brand-orange' : 'text-white/40'
                    }`}
                  >
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="flex items-end gap-1 mb-3">
                    <span className="font-grotesk font-bold text-5xl text-brand-cream leading-none">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-bricolage text-white/40 text-sm mb-1.5">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-bricolage text-sm text-white/50 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="h-px bg-white/8 mb-6" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.highlighted ? 'bg-brand-orange/20' : 'bg-white/8'
                          }`}
                        >
                          <Check
                            size={10}
                            className={plan.highlighted ? 'text-brand-orange' : 'text-white/50'}
                          />
                        </div>
                        <span className="font-bricolage text-sm text-white/65 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.highlighted ? 'primary' : 'ghost'}
                    className="w-full justify-center"
                    onClick={() =>
                      openPricing({
                        service: active.service,
                        plan: plan.name,
                        price: plan.price,
                        period: plan.period,
                        features: plan.features,
                      })
                    }
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center font-bricolage text-xs text-white/30 mt-12"
        >
          All plans include a free consultation. Need something custom?{' '}
          <a href="#contact" className="text-brand-orange hover:underline transition-colors">
            Let&apos;s talk.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
