'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { XIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import ContactForm from '@/components/ui/ContactForm';

const contactInfo = [
  {
    Icon: MapPin,
    label: 'Address',
    value: '123 Digital Ave, Suite 400\nSan Francisco, CA 94105',
    href: undefined,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+1 (555) 000-1234',
    href: 'tel:+15550001234',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@nexivostudio.com',
    href: 'mailto:hello@nexivostudio.com',
  },
];

const socials = [
  { Icon: XIcon, label: 'X (Twitter)', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
];

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            Let&apos;s Build Something{' '}
            <span className="text-brand-orange">Great Together</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Ready to grow your digital presence? Reach out and let&apos;s discuss how we can
            help your business thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Info */}
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/8 relative overflow-hidden">
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <h3 className="font-grotesk font-bold text-2xl text-brand-cream mb-2">
                    Contact Information
                  </h3>
                  <p className="font-bricolage text-sm text-white/50 mb-8 leading-relaxed">
                    Fill out the form or reach us directly through any of the channels below.
                    We typically respond within 24 hours.
                  </p>

                  <div className="space-y-6 mb-10">
                    {contactInfo.map(({ Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="font-grotesk text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                            {label}
                          </div>
                          {href ? (
                            <a
                              href={href}
                              className="font-bricolage text-sm text-brand-cream/80 hover:text-brand-orange transition-colors leading-relaxed"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="font-bricolage text-sm text-brand-cream/80 leading-relaxed whitespace-pre-line">
                              {value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-grotesk text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                      Follow Us
                    </p>
                    <div className="flex gap-3">
                      {socials.map(({ Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/40 transition-all duration-200"
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="p-8 md:p-12">
                <h3 className="font-grotesk font-bold text-2xl text-brand-cream mb-2">
                  Send Us a Message
                </h3>
                <p className="font-bricolage text-sm text-white/50 mb-8 leading-relaxed">
                  Tell us about your project and we&apos;ll get back to you with a plan.
                </p>
                <ContactForm />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
