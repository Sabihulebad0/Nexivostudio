import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { XIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3">
              <Image src="/logo_nexivo.png" alt="NexivoStudio" width={160} height={44} className="h-11 w-auto" />
            </div>
            <p className="font-bricolage text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              We craft digital experiences that grow brands, drive traffic, and convert visitors
              into loyal customers.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: XIcon, label: 'X (Twitter)' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: LinkedInIcon, label: 'LinkedIn' },
                { Icon: FacebookIcon, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-grotesk font-semibold text-brand-cream mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-bricolage text-sm text-white/50 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-grotesk font-semibold text-brand-cream mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="font-bricolage text-sm text-white/50 hover:text-brand-orange transition-colors duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-grotesk font-semibold text-brand-cream mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="font-grotesk text-[10px] font-semibold text-brand-orange/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin size={11} className="text-brand-orange" />
                  Our Offices
                </p>
                <div className="space-y-2 pl-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇺🇸</span>
                    <span className="font-bricolage text-sm text-white/50">
                      California, United States
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇵🇰</span>
                    <span className="font-bricolage text-sm text-white/50">
                      Karachi, Pakistan
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-orange shrink-0" />
                <a
                  href="tel:+15550001234"
                  className="font-bricolage text-sm text-white/50 hover:text-brand-orange transition-colors"
                >
                  +1 (555) 000-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-orange shrink-0" />
                <a
                  href="mailto:info@nexivostudio.io"
                  className="font-bricolage text-sm text-white/50 hover:text-brand-orange transition-colors"
                >
                  info@nexivostudio.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bricolage text-xs text-white/30">
            &copy; {new Date().getFullYear()} NexivoStudio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-bricolage text-xs text-white/30 hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="font-bricolage text-xs text-white/30 hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
            <a href="/refund" className="font-bricolage text-xs text-white/30 hover:text-brand-orange transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
