interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/8 border border-brand-orange/20 font-bricolage text-[11px] font-semibold uppercase tracking-widest text-brand-orange/80 mb-4 ${className}`}
      style={{ boxShadow: '0 0 16px rgba(255,106,28,0.08)' }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" style={{ boxShadow: '0 0 6px rgba(255,106,28,0.8)' }} />
      {children}
    </span>
  );
}
