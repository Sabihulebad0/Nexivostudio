'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps: [number, number][] = [
      [80, 18],
      [300, 42],
      [650, 68],
      [1050, 88],
      [1400, 100],
    ];

    const timers = steps.map(([delay, val]) =>
      setTimeout(() => setProgress(val), delay)
    );
    const hide = setTimeout(() => setVisible(false), 2100);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(hide);
    };
  }, []);

  // Smooth count-up to match progress
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => (prev < progress ? prev + 1 : prev));
    }, 11);
    return () => clearInterval(id);
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
          style={{ background: '#0a0a0a' }}
        >
          {/* Ambient radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 52%, rgba(255,106,28,0.09) 0%, transparent 70%)',
            }}
          />

          {/* Corner bracket decorations */}
          {[
            'top-6 left-6 border-t-2 border-l-2 rounded-tl',
            'top-6 right-6 border-t-2 border-r-2 rounded-tr',
            'bottom-6 left-6 border-b-2 border-l-2 rounded-bl',
            'bottom-6 right-6 border-b-2 border-r-2 rounded-br',
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: EASE }}
              className={`absolute w-7 h-7 border-brand-orange/25 ${cls}`}
            />
          ))}

          {/* Logo + glow */}
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 blur-3xl rounded-full scale-[2] bg-brand-orange/8" />
            <Image
              src="/logo_nexivo.png"
              alt="NexivoStudio"
              width={210}
              height={58}
              priority
              className="h-14 w-auto"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease: EASE }}
            className="mt-2.5 font-bricolage text-[10px] tracking-[0.32em] uppercase text-white/28"
          >
            Digital Agency
          </motion.p>

          {/* Progress section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            className="mt-14 flex flex-col items-center gap-3 w-[220px]"
          >
            {/* Progress bar */}
            <div className="relative w-full h-[2px] bg-white/6 rounded-full overflow-visible">
              {/* Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #cc4a00 0%, #FF6A1C 60%, #ff9254 100%)',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              {/* Glow dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-orange"
                style={{
                  boxShadow: '0 0 10px 3px rgba(255,106,28,0.7)',
                }}
                animate={{ left: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            {/* Counter */}
            <div className="flex items-baseline gap-1">
              <span className="font-grotesk text-[13px] font-semibold text-brand-orange/80 tabular-nums w-9 text-right">
                {String(count).padStart(3, '0')}
              </span>
              <span className="font-grotesk text-[10px] text-white/25">%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
