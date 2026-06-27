'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette, Code2, Share2, SearchCheck, type LucideIcon } from 'lucide-react';
import { NAV_LINKS, SERVICE_CATEGORIES } from '@/lib/constants';
import { toSlug } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';
import Button from '@/components/ui/Button';

const iconMap: Record<string, LucideIcon> = { Palette, Code2, Share2, SearchCheck };

export default function Header() {
  const { openSchedule } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const closeMobile = () => setMobileOpen(false);

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
            <a href="#home" className="shrink-0">
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
                    <button className="font-grotesk text-sm text-brand-cream/70 hover:text-brand-orange transition-colors duration-200 flex items-center gap-1">
                      Services
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-brand-orange' : ''}`}
                      />
                    </button>
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
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-brand-cream/70 hover:text-brand-orange transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mega Menu ──────────────────────────────────────────────────────── */}
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
              <div className="bg-[#141414] border-t-2 border-brand-orange border-b border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-4 gap-10">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const Icon = iconMap[cat.icon] ?? Palette;
                      return (
                        <div key={cat.title}>
                          {/* Column header */}
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

                          {/* Child links — sliding orange dash on hover */}
                          <ul className="flex flex-col gap-0.5">
                            {cat.children.map((child) => (
                              <li key={child.title}>
                                <a
                                  href={`/services/${cat.slug}/${toSlug(child.title)}`}
                                  onClick={() => setServicesOpen(false)}
                                  className="group relative flex items-center py-[5px] overflow-hidden"
                                >
                                  {/* Orange dash — grows from 0 to 10px */}
                                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-0 bg-brand-orange rounded-full group-hover:w-2.5 transition-all duration-300 ease-out" />
                                  {/* Text — slides right, brightens */}
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#111111] border-l border-white/10 md:hidden flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 h-16 shrink-0">
                <Image src="/logo_nexivo.png" alt="NexivoStudio" width={140} height={40} className="h-10 w-auto" />
                <button
                  onClick={closeMobile}
                  className="p-2 text-brand-cream/60 hover:text-brand-orange transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col px-6 pt-4 gap-1 flex-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className="font-grotesk text-base text-brand-cream/80 hover:text-brand-orange py-3 border-b border-white/8 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-8">
                  <Button variant="ghost" className="w-full justify-center">
                    Schedule a Call
                  </Button>
                  <Button variant="primary" className="w-full justify-center">
                    Contact Us
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
