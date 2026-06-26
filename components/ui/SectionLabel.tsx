interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-bricolage text-xs font-semibold uppercase tracking-widest text-muted mb-3 ${className}`}
    >
      {children}
    </span>
  );
}
