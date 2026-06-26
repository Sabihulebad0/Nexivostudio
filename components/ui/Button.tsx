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
    'inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold font-grotesk transition-all duration-200 cursor-pointer text-sm leading-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    primary:
      'bg-brand-orange text-brand-cream hover:brightness-110 active:scale-95',
    ghost:
      'bg-white/5 text-brand-cream border border-white/20 backdrop-blur-sm hover:bg-white/10 active:scale-95',
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
