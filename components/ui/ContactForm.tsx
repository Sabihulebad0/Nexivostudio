'use client';

import { useForm } from 'react-hook-form';
import { useReCaptcha } from '@/hooks/useReCaptcha';
import Button from './Button';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const inputClass =
  'w-full bg-white/5 border border-white/12 rounded-[10px] px-4 py-3 text-brand-cream placeholder:text-white/30 font-bricolage text-sm focus:outline-none focus:border-brand-orange/50 transition-colors duration-200';

const labelClass = 'block font-bricolage text-xs font-medium text-white/60 mb-1.5';

export default function ContactForm() {
  const { execute: executeRecaptcha } = useReCaptcha();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      let recaptchaToken = '';
      recaptchaToken = await executeRecaptcha('contact_form');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formType: 'contact', recaptchaToken }),
      });
      if (!res.ok) throw new Error('Server error');
      reset();
    } catch {
      setError('root', { message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {isSubmitSuccessful && (
        <div className="rounded-[10px] bg-brand-orange/10 border border-brand-orange/30 px-4 py-3 text-brand-orange font-bricolage text-sm">
          Message sent! We&apos;ll get back to you soon.
        </div>
      )}
      {errors.root && (
        <div className="rounded-[10px] bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-400 font-bricolage text-sm">
          {errors.root.message}
        </div>
      )}

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
        <label className={labelClass}>Message</label>
        <textarea
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
          rows={5}
          placeholder="Tell us about your project or ask a question..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400 font-bricolage">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
