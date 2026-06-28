import type { ReactNode } from 'react';

interface LegalSectionProps {
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalSection({ lastUpdated, children }: LegalSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-bricolage text-xs text-white/30 mb-8">
          Last updated: <span className="text-white/50">{lastUpdated}</span>
        </p>
        <div
          className="rounded-2xl p-8 md:p-12 space-y-10"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-grotesk font-bold text-xl text-brand-cream border-l-2 border-brand-orange pl-4">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-grotesk font-semibold text-base text-brand-cream/90">
      {children}
    </h3>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return (
    <p className="font-bricolage text-sm text-white/60 leading-relaxed">
      {children}
    </p>
  );
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2 pl-1">
      {children}
    </ul>
  );
}

export function LegalLi({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 font-bricolage text-sm text-white/60 leading-relaxed">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
      {children}
    </li>
  );
}

export function LegalBlock({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-3">
      {children}
    </div>
  );
}
