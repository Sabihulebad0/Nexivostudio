'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import PortfolioLightbox from '@/components/ui/PortfolioLightbox';
import { PORTFOLIO_ITEMS, PORTFOLIO_TABS } from '@/lib/constants';
import type { PortfolioTab } from '@/lib/constants';
import type { PortfolioItem } from '@/types';

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.055, ease: EASE },
  }),
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: PortfolioItem[] =
    activeTab === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  const handleTabChange = (tab: PortfolioTab) => {
    setActiveTab(tab);
    setLightboxIndex(null);
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            Featured <span className="text-gradient-orange">Projects</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            A curated selection of our best work across design, development, and digital marketing.
          </p>
        </motion.div>

        {/* ── Filter tabs with sliding pill ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 mb-12"
        >
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`relative font-grotesk text-sm px-5 py-2.5 rounded-full transition-colors duration-200 ${
                activeTab === tab ? 'text-white' : 'text-white/45 hover:text-white/75'
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-brand-orange"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              {tab}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ───────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => item.imageSrc && setLightboxIndex(idx)}
                className="group relative overflow-hidden rounded-2xl cursor-zoom-in"
                style={{ aspectRatio: '4 / 3' }}
              >
                {/* Image */}
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.image}`} />
                )}

                {/* Dark gradient overlay — fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Zoom icon — scale in from center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-13 h-13 rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-350"
                    style={{
                      width: '52px',
                      height: '52px',
                      background: 'rgba(255,106,28,0.85)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 0 30px rgba(255,106,28,0.4)',
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zm-6-3v6m-3-3h6" />
                    </svg>
                  </div>
                </div>

                {/* Bottom info — slides up on hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <span className="font-grotesk text-[10px] font-semibold text-brand-orange uppercase tracking-[0.18em] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-grotesk font-bold text-white text-[15px] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Tag badge — top-right, fades in */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <span className="font-grotesk text-[10px] font-semibold bg-black/50 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── View all CTA ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-center mt-14"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-grotesk font-semibold text-sm text-brand-cream border border-white/12 hover:border-brand-orange/50 bg-white/4 hover:bg-brand-orange/8 transition-all duration-250"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <PortfolioLightbox
        items={filtered}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNav={setLightboxIndex}
      />
    </section>
  );
}
