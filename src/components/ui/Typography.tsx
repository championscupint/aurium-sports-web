import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TypographyVariant = 
  | 'display-xl' | 'display-l' | 'display-m' | 'display-s'
  | 'heading-xl' | 'heading-l' | 'heading-m' | 'heading-s'
  | 'body-l' | 'body-m' | 'body-s'
  | 'label' | 'numeric';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body-m', 
  as, 
  className, 
  children, 
  ...props 
}) => {
  const Component = as || getDefaultElement(variant);

  const baseStyles = "text-text-primary";
  
  const variantStyles = {
    'display-xl': 'font-display font-bold text-6xl md:text-8xl tracking-tight uppercase leading-[0.9]',
    'display-l': 'font-display font-bold text-5xl md:text-7xl tracking-tight leading-none',
    'display-m': 'font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight',
    'display-s': 'font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight',
    'heading-xl': 'font-sans font-bold text-3xl md:text-4xl leading-snug',
    'heading-l': 'font-sans font-bold text-2xl md:text-3xl leading-snug',
    'heading-m': 'font-sans font-semibold text-xl md:text-2xl leading-snug',
    'heading-s': 'font-sans font-semibold text-lg md:text-xl leading-snug',
    'body-l': 'font-sans text-lg md:text-xl text-text-secondary leading-relaxed',
    'body-m': 'font-sans text-base md:text-lg text-text-secondary leading-relaxed',
    'body-s': 'font-sans text-sm md:text-base text-text-secondary leading-relaxed',
    'label': 'font-sans text-xs uppercase tracking-widest font-semibold',
    'numeric': 'font-display font-bold text-7xl md:text-9xl text-brand-primary tabular-nums leading-none',
  };

  return (
    <Component className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyVariant): React.ElementType {
  switch (variant) {
    case 'display-xl':
    case 'display-l':
      return 'h1';
    case 'display-m':
    case 'display-s':
      return 'h2';
    case 'heading-xl':
    case 'heading-l':
      return 'h3';
    case 'heading-m':
    case 'heading-s':
      return 'h4';
    case 'body-l':
    case 'body-m':
    case 'body-s':
      return 'p';
    case 'label':
      return 'span';
    case 'numeric':
      return 'div';
    default:
      return 'p';
  }
}
