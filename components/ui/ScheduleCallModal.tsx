'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useReCaptcha } from '@/hooks/useReCaptcha';
import { useModal } from '@/context/ModalContext';
import { SERVICE_CATEGORIES } from '@/lib/constants';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget: string;
  message?: string;
};

const inputClass = (error?: boolean) =>
  `w-full rounded-xl px-4 py-3 font-bricolage text-sm text-brand-cream placeholder:text-white/25 focus:outline-none transition-all duration-200 ${
    error
      ? 'bg-red-500/8 border border-red-500/50 focus:border-red-500/70'
      : 'bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:bg-white/8'
  }`;

const selectStyle = { backgroundColor: 'rgba(20,20,20,0.98)' };

export default function ScheduleCallModal() {
  const { isScheduleOpen, closeSchedule } = useModal();
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
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSchedule(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeSchedule]);

  useEffect(() => {
    document.body.style.overflow = isScheduleOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isScheduleOpen]);

  const onClose = () => {
    closeSchedule();
    setTimeout(() => { setSubmitted(false); setSubmitError(''); reset(); }, 350);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitError('');
    try {
      let recaptchaToken = '';
      recaptchaToken = await executeRecaptcha('schedule_call');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formType: 'schedule-call', recaptchaToken }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <AnimatePresence>
      {isScheduleOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[4vh] bottom-[4vh] z-[201] mx-auto max-w-lg rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: 'rgba(15,15,15,0.98)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 48px 120px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,106,28,0.08)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-5 border-b border-white/8 shrink-0"
              style={{ background: 'rgba(15,15,15,0.99)' }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/15 border border-brand-orange/20 flex items-center justify-center">
                  <Calendar size={18} className="text-brand-orange" />
                </div>
                <div>
                  <h2 className="font-grotesk font-bold text-brand-cream text-base leading-tight">
                    Schedule a Call
                  </h2>
                  <p className="font-bricolage text-xs text-white/35 mt-0.5">
                    We&apos;ll get back to you within 24 hours
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
                /* ── Success State ── */
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
                    You&apos;re all set!
                  </h3>
                  <p className="font-bricolage text-sm text-white/50 max-w-xs leading-relaxed mb-8">
                    Thanks for reaching out. A member of our team will contact you within 24 hours to
                    schedule your call.
                  </p>
                  <button
                    onClick={onClose}
                    className="font-grotesk text-sm font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-7 py-2.5 rounded-full hover:bg-brand-orange/20 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  {/* Name + Email */}
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
                        <p className="font-bricolage text-xs text-red-400/90 mt-1">{errors.name.message}</p>
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
                        <p className="font-bricolage text-xs text-red-400/90 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                      Phone Number{' '}
                      <span className="normal-case tracking-normal text-white/25 text-[10px]">(optional)</span>
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={inputClass()}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                      Service of Interest <span className="text-brand-orange">*</span>
                    </label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className={inputClass(!!errors.service)}
                      style={selectStyle}
                    >
                      <option value="" style={{ background: '#141414' }}>Select a service…</option>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <optgroup
                          key={cat.slug}
                          label={cat.title}
                          style={{ background: '#141414', color: '#FF6A1C' }}
                        >
                          {cat.children.map((child) => (
                            <option
                              key={child.title}
                              value={child.title}
                              style={{ background: '#141414', color: '#FFFAF3' }}
                            >
                              {child.title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="font-bricolage text-xs text-red-400/90 mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                      Project Budget{' '}
                      <span className="normal-case tracking-normal text-white/25 text-[10px]">(optional)</span>
                    </label>
                    <select
                      {...register('budget')}
                      className={inputClass()}
                      style={selectStyle}
                    >
                      <option value="" style={{ background: '#141414' }}>Select a budget range…</option>
                      {[
                        ['under-1k', 'Under $1,000'],
                        ['1k-5k', '$1,000 – $5,000'],
                        ['5k-15k', '$5,000 – $15,000'],
                        ['15k-50k', '$15,000 – $50,000'],
                        ['50k+', '$50,000+'],
                      ].map(([v, l]) => (
                        <option key={v} value={v} style={{ background: '#141414', color: '#FFFAF3' }}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-grotesk text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">
                      Project Details{' '}
                      <span className="normal-case tracking-normal text-white/25 text-[10px]">(optional)</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your project, goals, or any questions you have…"
                      className={`${inputClass()} resize-none`}
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/6" />

                  {/* Error */}
                  {submitError && (
                    <p className="font-bricolage text-xs text-red-400/90 text-center bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
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
                        Send Request
                      </>
                    )}
                  </button>

                  <p className="font-bricolage text-[11px] text-white/25 text-center leading-relaxed">
                    By submitting you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
