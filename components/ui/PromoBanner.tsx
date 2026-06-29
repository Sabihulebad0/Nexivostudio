'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];
const STORAGE_KEY = 'nexivo_promo_seen_v1';

const PERKS = [
  'Full website & SEO audit',
  'Custom digital growth roadmap',
  'No commitment required',
];

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const { openSchedule } = useModal();

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 2700);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  const claim = () => {
    dismiss();
    openSchedule();
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={dismiss}
            className="fixed inset-0 z-[9990] bg-black/65 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 48 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-[9991] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative pointer-events-auto w-full max-w-[480px] overflow-hidden rounded-2xl"
              style={{
                background: 'rgba(13,13,13,0.97)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 32px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,106,28,0.1)',
              }}
            >
              {/* Orange ambient glow — top */}
              <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(255,106,28,0.22) 0%, transparent 70%)' }}
              />

              {/* Decorative top stripe */}
              <div
                className="absolute top-0 inset-x-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent 0%, #FF6A1C 40%, #ff9254 60%, transparent 100%)' }}
              />

              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Close banner"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors text-white/40 hover:text-white/80"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative px-8 pt-8 pb-8 sm:px-10 sm:pt-9 sm:pb-9">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.45, ease: EASE }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{
                    background: 'rgba(255,106,28,0.12)',
                    border: '1px solid rgba(255,106,28,0.3)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brand-orange"
                    style={{ animation: 'pulse 1.8s ease-in-out infinite' }}
                  />
                  <span className="font-grotesk text-[11px] font-semibold text-brand-orange tracking-widest uppercase">
                    Welcome Offer
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
                  className="font-grotesk font-bold text-[26px] sm:text-[30px] text-brand-cream leading-[1.2] mb-3"
                >
                  Unlock a{' '}
                  <span className="text-brand-orange">Free Strategy</span>
                  <br />
                  Session for Your Business
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.5, ease: EASE }}
                  className="font-bricolage text-sm text-white/50 leading-relaxed mb-6"
                >
                  Book a complimentary 30-minute consultation with our experts.
                  We&apos;ll audit your online presence and build a custom growth plan — at zero cost.
                </motion.p>

                {/* Perks list */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                  className="flex flex-col gap-2.5 mb-7"
                >
                  {PERKS.map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255,106,28,0.15)' }}
                      >
                        <svg className="w-3 h-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-bricolage text-sm text-white/65">{perk}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-white/6 mb-7" />

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.5, ease: EASE }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <button
                    onClick={claim}
                    className="flex-1 py-3.5 px-6 rounded-xl font-grotesk font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, #FF6A1C 0%, #e85c12 100%)' }}
                  >
                    Claim Free Session →
                  </button>
                  <button
                    onClick={dismiss}
                    className="flex-1 py-3.5 px-6 rounded-xl font-grotesk text-sm text-white/50 hover:text-white/75 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    Maybe Later
                  </button>
                </motion.div>

                {/* Fine print */}
                <p className="mt-4 text-center font-bricolage text-[11px] text-white/22">
                  Limited spots available · No credit card required
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
