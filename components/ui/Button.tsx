import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  children,
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk transition-all duration-300 cursor-pointer text-sm leading-none disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-[#FF6A1C] to-[#FF8C42] text-brand-cream shadow-[0_4px_20px_rgba(255,106,28,0.35)] hover:shadow-[0_6px_28px_rgba(255,106,28,0.55)] hover:brightness-110 hover:-translate-y-0.5 active:scale-95 active:translate-y-0',
    ghost:
      'bg-white/5 text-brand-cream border border-white/15 backdrop-blur-sm hover:bg-white/10 hover:border-brand-orange/35 hover:text-brand-orange hover:-translate-y-0.5 active:scale-95 active:translate-y-0',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
