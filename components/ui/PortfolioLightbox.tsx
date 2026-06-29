'use client';

import { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioItem } from '@/types';

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface Props {
  items: PortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNav: (index: number) => void;
}

export default function PortfolioLightbox({ items, activeIndex, onClose, onNav }: Props) {
  const item = activeIndex !== null ? items[activeIndex] : null;
  const total = items.length;
  const prevIndexRef = useRef<number | null>(null);
  const direction = activeIndex !== null && prevIndexRef.current !== null
    ? activeIndex > prevIndexRef.current ? 1 : -1
    : 1;

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    prevIndexRef.current = activeIndex;
    onNav((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onNav]);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    prevIndexRef.current = activeIndex;
    onNav((activeIndex + 1) % total);
  }, [activeIndex, total, onNav]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      prevIndexRef.current = null;
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeIndex]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60, scale: 0.97 }),
  };

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* ── Backdrop ─────────────────────────────────────────────────── */}
          <motion.div
            key="lb-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 z-[9100]"
            style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(16px)' }}
          />

          {/* ── Shell ────────────────────────────────────────────────────── */}
          <motion.div
            key="lb-shell"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[9101] flex flex-col"
          >
            {/* ── Top bar ────────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 shrink-0">
              {/* Counter */}
              <div className="flex items-center gap-2">
                <span className="font-grotesk font-semibold text-white text-sm">
                  {(activeIndex! + 1).toString().padStart(2, '0')}
                </span>
                <span className="w-8 h-[1px] bg-white/20" />
                <span className="font-grotesk text-white/30 text-sm">
                  {total.toString().padStart(2, '0')}
                </span>
              </div>

              {/* Project info — center */}
              <motion.div
                key={`topinfo-${activeIndex}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="absolute left-1/2 -translate-x-1/2 text-center hidden sm:block"
              >
                <p className="font-grotesk text-[11px] font-semibold text-brand-orange uppercase tracking-[0.2em]">
                  {item.category}
                </p>
                <h3 className="font-grotesk font-bold text-white text-sm leading-tight mt-0.5">
                  {item.title}
                </h3>
              </motion.div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all group"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── Main image area ─────────────────────────────────────────── */}
            <div
              className="flex-1 flex items-center justify-center px-12 sm:px-20 min-h-0 cursor-default"
              onClick={onClose}
            >
              {/* Prev arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 sm:left-5 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all group shrink-0"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-white/50 group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image with slide animation */}
              <div
                className="relative w-full max-h-full overflow-hidden"
                style={{ borderRadius: '14px', maxWidth: '1100px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: EASE }}
                    className="w-full"
                    style={{
                      aspectRatio: '16 / 10',
                      background: '#111',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      boxShadow: '0 48px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06)',
                    }}
                  >
                    {item.imageSrc && (
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-contain"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 sm:right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all group shrink-0"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-white/50 group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* ── Bottom: mobile title + thumbnail strip ──────────────────── */}
            <div className="shrink-0 pb-5 pt-4 px-5 sm:px-8">
              {/* Mobile title */}
              <motion.div
                key={`mobtitle-${activeIndex}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden text-center mb-4"
              >
                <p className="font-grotesk text-[10px] font-semibold text-brand-orange uppercase tracking-widest">
                  {item.category}
                </p>
                <h3 className="font-grotesk font-semibold text-white text-sm mt-0.5">{item.title}</h3>
              </motion.div>

              {/* Thumbnail strip — scrollable, max 10 shown */}
              {total > 1 && (
                <div className="flex gap-2 justify-center overflow-x-auto scrollbar-hide pb-1">
                  {items.slice(0, 14).map((thumb, i) => (
                    <button
                      key={thumb.id}
                      onClick={() => { prevIndexRef.current = activeIndex; onNav(i); }}
                      className="shrink-0 transition-all duration-200"
                      style={{
                        width: '52px',
                        height: '36px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        opacity: i === activeIndex ? 1 : 0.35,
                        border: i === activeIndex ? '1.5px solid #FF6A1C' : '1.5px solid transparent',
                        transform: i === activeIndex ? 'scale(1.08)' : 'scale(1)',
                      }}
                      aria-label={`Go to ${thumb.title}`}
                    >
                      {thumb.imageSrc ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={thumb.imageSrc}
                            alt={thumb.title}
                            fill
                            sizes="52px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${thumb.image}`} />
                      )}
                    </button>
                  ))}
                  {total > 14 && (
                    <div
                      className="shrink-0 flex items-center justify-center text-white/30 font-grotesk text-xs"
                      style={{ width: '52px', height: '36px' }}
                    >
                      +{total - 14}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
