'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { XIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import ContactForm from '@/components/ui/ContactForm';

const offices = [
  {
    flag: '🇺🇸',
    region: 'North America',
    city: 'California',
    country: 'United States',
  },
  {
    flag: '🇵🇰',
    region: 'South Asia',
    city: 'Karachi',
    country: 'Pakistan',
  },
];

const contactInfo = [
  {
    Icon: Phone,
    label: 'Phone',
    value: '+1 (555) 000-1234',
    href: 'tel:+15550001234',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'info@nexivostudio.io',
    href: 'mailto:info@nexivostudio.io',
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
            <span className="text-gradient-orange">Great Together</span>
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

                  {/* Office locations */}
                  <div className="mb-8">
                    <div className="font-grotesk text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <MapPin size={12} className="text-brand-orange" />
                      Our Offices
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {offices.map(({ flag, region, city, country }) => (
                        <div
                          key={city}
                          className="rounded-xl border border-white/8 bg-white/3 p-4 hover:border-brand-orange/30 hover:bg-white/5 transition-all duration-200"
                        >
                          <span className="text-2xl leading-none">{flag}</span>
                          <p className="font-grotesk text-[10px] font-semibold text-brand-orange uppercase tracking-wider mt-2 mb-0.5">
                            {region}
                          </p>
                          <p className="font-grotesk font-semibold text-sm text-brand-cream">
                            {city}
                          </p>
                          <p className="font-bricolage text-xs text-white/40">
                            {country}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="space-y-5 mb-10">
                    {contactInfo.map(({ Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-brand-orange" />
                        </div>
                        <div>
                          <div className="font-grotesk text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                            {label}
                          </div>
                          <a
                            href={href}
                            className="font-bricolage text-sm text-brand-cream/80 hover:text-brand-orange transition-colors leading-relaxed"
                          >
                            {value}
                          </a>
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
