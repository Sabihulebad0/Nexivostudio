'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useReCaptcha } from '@/hooks/useReCaptcha';
import { useModal } from '@/context/ModalContext';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

const inputClass = (error?: boolean) =>
  `w-full rounded-xl px-4 py-3 font-bricolage text-sm text-brand-cream placeholder:text-white/25 focus:outline-none transition-all duration-200 ${
    error
      ? 'bg-red-500/8 border border-red-500/50 focus:border-red-500/70'
      : 'bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:bg-white/8'
  }`;

export default function PricingInquiryModal() {
  const { pricingData, closePricing } = useModal();
  const { execute: executeRecaptcha } = useReCaptcha();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePricing();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closePricing]);

  useEffect(() => {
    document.body.style.overflow = pricingData ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [pricingData]);

  const onClose = () => {
    closePricing();
    setTimeout(() => { setSubmitted(false); setSubmitError(''); reset(); }, 350);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitError('');
    try {
      let recaptchaToken = '';
      recaptchaToken = await executeRecaptcha('pricing_inquiry');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          formType: 'pricing-inquiry',
          service: pricingData?.service,
          plan: pricingData?.plan,
          price: pricingData?.price,
          period: pricingData?.period,
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {pricingData && (
        <>
          {/* Backdrop */}
          <motion.div
            key="pricing-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            key="pricing-modal"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[4vh] bottom-[4vh] z-[201] mx-auto max-w-2xl rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: 'rgba(15,15,15,0.98)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 48px 120px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,106,28,0.08)',
            }}
          >
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

            {/* Header */}
            <div
              className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-5 border-b border-white/8 shrink-0"
              style={{ background: 'rgba(15,15,15,0.99)' }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/15 border border-brand-orange/20 flex items-center justify-center">
                  <Sparkles size={18} className="text-brand-orange" />
                </div>
                <div>
                  <h2 className="font-grotesk font-bold text-brand-cream text-base leading-tight">
                    Get Started with{' '}
                    <span className="text-brand-orange">{pricingData.plan}</span> Plan
                  </h2>
                  <p className="font-bricolage text-xs text-white/35 mt-0.5">
                    {pricingData.service}&nbsp;·&nbsp;
                    <span className="text-brand-orange font-semibold">{pricingData.price}</span>
                    {pricingData.period && (
                      <span className="text-white/25"> {pricingData.period}</span>
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/6 hover:bg-white/12 flex items-center justify-center transition-colors text-white/50 hover:text-white/90"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 pb-8 pt-6">
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="w-20 h-20 rounded-full bg-brand-orange/12 border border-brand-orange/25 flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={36} className="text-brand-orange" />
                  </motion.div>
                  <h3 className="font-grotesk font-bold text-brand-cream text-xl mb-2">
                    Inquiry Sent!
                  </h3>
                  <p className="font-bricolage text-sm text-white/50 max-w-xs leading-relaxed mb-8">
                    We received your interest in the{' '}
                    <span className="text-brand-orange">{pricingData.plan}</span> plan for{' '}
                    {pricingData.service}. We&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="font-grotesk text-sm font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-7 py-2.5 rounded-full hover:bg-brand-orange/20 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Plan feature summary */}
                  <div
                    className="rounded-xl p-5 border border-brand-orange/20"
                    style={{ background: 'rgba(255,106,28,0.05)' }}
                  >
                    <p className="font-grotesk text-[10px] font-semibold uppercase tracking-widest text-brand-orange mb-3">
                      What&apos;s Included
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pricingData.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={9} className="text-brand-orange" />
                          </div>
                          <span className="font-bricolage text-xs text-white/65 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inquiry form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <p className="font-grotesk text-[10px] font-semibold uppercase tracking-widest text-white/40">
                      Your Details
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                          Full Name <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          {...register('name', { required: 'Required' })}
                          placeholder="John Smith"
                          className={inputClass(!!errors.name)}
                        />
                        {errors.name && (
                          <p className="font-bricolage text-xs text-red-400/90 mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                          Email Address <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          {...register('email', {
                            required: 'Required',
                            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                          })}
                          type="email"
                          placeholder="you@company.com"
                          className={inputClass(!!errors.email)}
                        />
                        {errors.email && (
                          <p className="font-bricolage text-xs text-red-400/90 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                        Phone{' '}
                        <span className="normal-case tracking-normal text-white/25 text-[10px]">
                          (optional)
                        </span>
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputClass()}
                      />
                    </div>

                    <div>
                      <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                        Additional Notes{' '}
                        <span className="normal-case tracking-normal text-white/25 text-[10px]">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        {...register('message')}
                        rows={3}
                        placeholder="Any specific requirements or questions…"
                        className={`${inputClass()} resize-none`}
                      />
                    </div>

                    <div className="h-px bg-white/6" />

                    {submitError && (
                      <p className="font-bricolage text-xs text-red-400/90 text-center bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-grotesk font-semibold text-sm bg-brand-orange text-brand-cream hover:brightness-110 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-wait"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send My Inquiry
                        </>
                      )}
                    </button>

                    <p className="font-bricolage text-[11px] text-white/25 text-center leading-relaxed">
                      No commitment required. We&apos;ll reach out within 24 hours.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
