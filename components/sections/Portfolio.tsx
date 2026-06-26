'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';
import { PORTFOLIO_ITEMS, PORTFOLIO_TABS } from '@/lib/constants';
import type { PortfolioTab } from '@/lib/constants';
import type { PortfolioItem } from '@/types';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('All');

  const filtered: PortfolioItem[] =
    activeTab === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            Featured{' '}
            <span className="text-brand-orange">Projects</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            A selection of our best work across web design, development, SEO, and social media.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {PORTFOLIO_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-grotesk text-sm px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-brand-orange text-brand-cream shadow-lg shadow-brand-orange/20'
                  : 'glass text-white/60 hover:text-white/90 hover:border-white/25'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((item) => (
              <GlassCard
                key={item.id}
                className="overflow-hidden glass-hover group cursor-pointer"
              >
                {/* Placeholder image */}
                <div
                  className={`h-44 bg-gradient-to-br ${item.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3">
                    <span className="font-grotesk text-xs font-semibold bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-grotesk font-semibold text-brand-cream text-sm mb-1">
                    {item.title}
                  </h3>
                  <span className="font-bricolage text-xs text-brand-orange">
                    {item.category}
                  </span>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
