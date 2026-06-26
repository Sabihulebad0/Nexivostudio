'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <GlassCard className="p-10 md:p-14 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-brand-orange" />
              </div>

              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-brand-cream mb-3">
                Stay Ahead of the Curve
              </h2>
              <p className="font-bricolage text-base text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
                Get weekly insights on web design, SEO strategies, and digital marketing
                trends delivered straight to your inbox.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-[10px] bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-bricolage text-sm"
                >
                  You&apos;re subscribed! Welcome aboard.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/5 border border-white/12 rounded-[10px] px-5 py-3.5 text-brand-cream placeholder:text-white/30 font-bricolage text-sm focus:outline-none focus:border-brand-orange/50 transition-colors duration-200"
                  />
                  <Button type="submit" variant="primary" className="shrink-0 justify-center">
                    Subscribe
                  </Button>
                </form>
              )}

              <p className="font-bricolage text-xs text-white/30 mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
