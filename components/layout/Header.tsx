'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Palette, Code2, Share2, SearchCheck, Globe, Wrench, type LucideIcon } from 'lucide-react';
import { NAV_LINKS, SERVICE_CATEGORIES } from '@/lib/constants';
import { toSlug } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';
import Button from '@/components/ui/Button';

const iconMap: Record<string, LucideIcon> = { Palette, Code2, Share2, SearchCheck, Globe, Wrench };

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* â”€â”€ Animated 3-line hamburger â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col justify-between w-[18px] h-[13px]">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="block h-[2px] w-full rounded-full bg-current origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-[2px] w-full rounded-full bg-current"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="block h-[2px] w-full rounded-full bg-current origin-center"
      />
    </div>
  );
}

/* â”€â”€ Per-item slide-in transition â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const slideIn = (i: number) => ({
  initial: { x: 32, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.38, ease: EASE, delay: 0.06 + i * 0.055 },
});

export default function Header() {
  const { openSchedule } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openServices = () => { clearTimeout(closeTimer.current); setServicesOpen(true); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 120); };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || servicesOpen
            ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-white/8 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="shrink-0">
              <Image src="/logo_nexivo.png" alt="NexivoStudio" width={160} height={44} priority className="h-11 w-auto" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) =>
                link.label === 'Services' ? (
                  <div
                    key="services-trigger"
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <a
                      href="/services"
                      className="font-grotesk text-sm text-brand-cream/70 hover:text-brand-orange transition-colors duration-200 flex items-center gap-1"
                    >
                      Services
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-brand-orange' : ''}`}
                      />
                    </a>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-grotesk text-sm text-brand-cream/70 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" className="text-xs px-5 py-2.5" onClick={openSchedule}>
                Schedule a Call
              </Button>
              <Button variant="primary" className="text-xs px-5 py-2.5">
                Contact Us
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.92 }}
              className={`md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                mobileOpen
                  ? 'bg-brand-orange text-brand-cream shadow-lg shadow-brand-orange/40'
                  : 'bg-white/6 border border-white/12 text-brand-cream/80 hover:bg-white/10 hover:border-brand-orange/30 hover:text-brand-orange'
              }`}
              aria-label="Toggle menu"
            >
              {/* Glow ring when open */}
              {mobileOpen && (
                <motion.span
                  layoutId="hamburger-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 rounded-xl ring-2 ring-brand-orange/40"
                />
              )}
              <HamburgerIcon isOpen={mobileOpen} />
            </motion.button>
          </div>
        </div>

        {/* â”€â”€ Desktop Mega Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 hidden md:block"
            >
              <div className="bg-[#141414] border-t-2 border-brand-orange border-b border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)] max-h-[calc(100vh-72px)] overflow-y-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const Icon = iconMap[cat.icon] ?? Palette;
                      return (
                        <div key={cat.title}>
                          <a
                            href={`/services/${cat.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-center gap-2 mb-4 pb-3 border-b border-white/8 hover:border-brand-orange/30 transition-colors duration-300"
                          >
                            <div className="w-7 h-7 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/25 group-hover:scale-110 transition-all duration-300">
                              <Icon size={14} className="text-brand-orange" />
                            </div>
                            <span className="font-grotesk font-semibold text-brand-orange text-sm group-hover:text-brand-orange/80 transition-colors duration-200">
                              {cat.title}
                            </span>
                          </a>
                          <ul className="flex flex-col gap-0.5">
                            {cat.children.map((child) => (
                              <li key={child.title}>
                                <a
                                  href={`/services/${cat.slug}/${toSlug(child.title)}`}
                                  onClick={() => setServicesOpen(false)}
                                  className="group relative flex items-center py-[5px] overflow-hidden"
                                >
                                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-0 bg-brand-orange rounded-full group-hover:w-2.5 transition-all duration-300 ease-out" />
                                  <span className="font-bricolage text-[13px] text-white/50 group-hover:text-brand-cream leading-snug pl-0 group-hover:pl-4 transition-all duration-300 ease-out">
                                    {child.title}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* â”€â”€ Mobile Drawer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobile}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] md:hidden flex flex-col"
              style={{
                background: 'linear-gradient(160deg, #161616 0%, #111111 100%)',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Orange top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

              {/* Header row */}
              <div className="flex items-center justify-between px-5 h-16 shrink-0 border-b border-white/6">
                <Image src="/logo_nexivo.png" alt="NexivoStudio" width={130} height={36} className="h-9 w-auto" />
                <motion.button
                  onClick={closeMobile}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-lg bg-white/6 hover:bg-white/12 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  aria-label="Close menu"
                >
                  <HamburgerIcon isOpen={true} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-1 overflow-y-auto px-4 pt-3 pb-6">
                {NAV_LINKS.map((link, i) =>
                  link.label === 'Services' ? (
                    /* Services accordion */
                    <motion.div
                      key="services-mobile"
                      {...slideIn(i)}
                    >
                      {/* Accordion trigger */}
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-3.5 border-b border-white/6 group"
                      >
                        <span className={`font-grotesk text-[15px] font-medium transition-colors duration-200 ${mobileServicesOpen ? 'text-brand-orange' : 'text-brand-cream/80 group-hover:text-brand-orange'}`}>
                          Services
                        </span>
                        <motion.div
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                          className={`transition-colors duration-200 ${mobileServicesOpen ? 'text-brand-orange' : 'text-white/40 group-hover:text-brand-orange'}`}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>

                      {/* Accordion content */}
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pb-1 space-y-4">
                              {SERVICE_CATEGORIES.map((cat) => {
                                const Icon = iconMap[cat.icon] ?? Palette;
                                return (
                                  <div key={cat.slug}>
                                    {/* Category header */}
                                    <a
                                      href={`/services/${cat.slug}`}
                                      onClick={closeMobile}
                                      className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-white/4 transition-colors duration-200 group/cat"
                                    >
                                      <div className="w-6 h-6 rounded-md bg-brand-orange/15 border border-brand-orange/20 flex items-center justify-center shrink-0">
                                        <Icon size={12} className="text-brand-orange" />
                                      </div>
                                      <span className="font-grotesk text-sm font-semibold text-brand-orange group-hover/cat:text-brand-orange/80 transition-colors">
                                        {cat.title}
                                      </span>
                                    </a>

                                    {/* Child links */}
                                    <ul className="mt-1 pl-[34px] space-y-0.5">
                                      {cat.children.map((child) => (
                                        <li key={child.title}>
                                          <a
                                            href={`/services/${cat.slug}/${toSlug(child.title)}`}
                                            onClick={closeMobile}
                                            className="flex items-center gap-2 py-1 font-bricolage text-xs text-white/45 hover:text-brand-cream transition-colors duration-200 group/child"
                                          >
                                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover/child:bg-brand-orange shrink-0 transition-colors duration-200" />
                                            {child.title}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}

                              {/* View all services link */}
                              <a
                                href="/services"
                                onClick={closeMobile}
                                className="flex items-center gap-2 px-2 py-2 mt-1 rounded-lg border border-brand-orange/20 bg-brand-orange/5 hover:bg-brand-orange/10 transition-colors duration-200 group/all"
                              >
                                <span className="font-grotesk text-xs font-semibold text-brand-orange">
                                  View All Services â†’
                                </span>
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMobile}
                      {...slideIn(i)}
                      className="font-grotesk text-[15px] font-medium text-brand-cream/80 hover:text-brand-orange py-3.5 border-b border-white/6 transition-colors duration-200"
                    >
                      {link.label}
                    </motion.a>
                  )
                )}

                {/* Divider */}
                <div className="h-px bg-white/6 my-5" />

                {/* CTA buttons */}
                <motion.div
                  {...slideIn(NAV_LINKS.length + 1)}
                  className="flex flex-col gap-3"
                >
                  <button
                    onClick={() => { closeMobile(); openSchedule(); }}
                    className="w-full py-3 rounded-full font-grotesk font-semibold text-sm text-brand-cream bg-white/6 border border-white/12 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    Schedule a Call
                  </button>
                  <a
                    href="/contact"
                    onClick={closeMobile}
                    className="w-full py-3 rounded-full font-grotesk font-semibold text-sm text-brand-cream bg-brand-orange hover:brightness-110 transition-all duration-200 text-center"
                  >
                    Contact Us
                  </a>
                </motion.div>

                {/* Bottom contact strip */}
                <motion.div
                  {...slideIn(NAV_LINKS.length + 2)}
                  className="mt-auto pt-6 flex flex-col gap-1"
                >
                  <p className="font-bricolage text-[10px] text-white/25 uppercase tracking-widest mb-1">
                    Get in touch
                  </p>
                  <a
                    href="mailto:info@nexivostudio.io"
                    className="font-bricolage text-xs text-white/45 hover:text-brand-orange transition-colors duration-200"
                  >
                    info@nexivostudio.io
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

