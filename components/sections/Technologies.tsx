'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { TECHNOLOGIES } from '@/lib/constants';

// Double the list so the marquee loops seamlessly
const techItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel>Technologies We Use</SectionLabel>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-cream mt-2">
            Built with{' '}
            <span className="text-brand-orange">Modern Tools</span>
          </h2>
          <p className="font-bricolage text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            We leverage the latest, most proven technologies to build fast, scalable, and
            maintainable digital products.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {techItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="inline-flex items-center gap-3 mx-6 px-6 py-4 glass rounded-2xl opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                <span className="text-brand-orange font-grotesk font-bold text-xs">
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-grotesk font-semibold text-brand-cream text-sm whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row (reversed) */}
      <div className="marquee-container mt-4">
        <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {[...techItems].reverse().map((tech, index) => (
            <div
              key={`${tech.name}-rev-${index}`}
              className="inline-flex items-center gap-3 mx-6 px-6 py-4 glass rounded-2xl opacity-30 hover:opacity-80 transition-opacity duration-300 cursor-default shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <span className="text-white/50 font-grotesk font-bold text-xs">
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-grotesk font-medium text-white/50 text-sm whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
