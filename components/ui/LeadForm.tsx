'use client';

import { useForm } from 'react-hook-form';
import GlassCard from './GlassCard';
import Button from './Button';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  terms: boolean;
}

const inputClass =
  'w-full bg-white/5 border border-white/12 rounded-[10px] px-4 py-3 text-brand-cream placeholder:text-white/30 font-bricolage text-sm focus:outline-none focus:border-brand-orange/50 transition-colors duration-200';

const labelClass = 'block font-bricolage text-xs font-medium text-white/60 mb-1.5';

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formType: 'lead-form' }),
      });
      if (!res.ok) throw new Error('Server error');
      reset();
    } catch {
      setError('root', { message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <GlassCard className="p-6 md:p-8">
      <h3 className="font-grotesk text-xl font-bold text-brand-cream mb-6">
        Get a Free Consultation
      </h3>

      {isSubmitSuccessful && (
        <div className="mb-4 rounded-[10px] bg-brand-orange/10 border border-brand-orange/30 px-4 py-3 text-brand-orange font-bricolage text-sm">
          Thank you! We&apos;ll be in touch shortly.
        </div>
      )}
      {errors.root && (
        <div className="mb-4 rounded-[10px] bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 font-bricolage text-sm">
          {errors.root.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div>
          <label className={labelClass}>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 font-bricolage">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
            type="email"
            placeholder="you@example.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 font-bricolage">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400 font-bricolage">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Service</label>
          <select
            {...register('service', { required: 'Please select a service' })}
            className={`${inputClass} appearance-none`}
            defaultValue=""
          >
            <option value="" disabled className="bg-[#1a1a1a] text-white/40">
              Select a service
            </option>
            <option value="web-design" className="bg-[#1a1a1a]">Web Design</option>
            <option value="web-development" className="bg-[#1a1a1a]">Web Development</option>
            <option value="social-media" className="bg-[#1a1a1a]">Social Media Marketing</option>
            <option value="seo" className="bg-[#1a1a1a]">SEO</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400 font-bricolage">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Message</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={3}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400 font-bricolage">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            {...register('terms', { required: 'You must agree to the terms' })}
            type="checkbox"
            id="lead-terms"
            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-brand-orange cursor-pointer"
          />
          <label htmlFor="lead-terms" className="font-bricolage text-xs text-white/50 cursor-pointer leading-relaxed">
            I agree to the{' '}
            <span className="text-brand-orange underline-offset-2 hover:underline">
              Terms and Conditions
            </span>
          </label>
        </div>
        {errors.terms && (
          <p className="text-xs text-red-400 font-bricolage">{errors.terms.message}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          className="w-full justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
        </Button>
      </form>
    </GlassCard>
  );
}
