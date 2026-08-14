'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './Typography';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon' | 'dark';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', withArrow = false, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-sans font-bold uppercase tracking-wider text-sm transition-all duration-300 ease-out outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-brand-primary text-brand-secondary hover:bg-white px-8 py-4 rounded-none",
      secondary: "bg-transparent border border-neutral-700 text-text-primary hover:border-brand-primary hover:text-brand-primary px-8 py-4 rounded-none",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary px-4 py-2",
      dark: "bg-surface-secondary text-text-primary hover:bg-brand-primary hover:text-brand-secondary px-8 py-4 rounded-none",
      icon: "p-3 bg-surface-secondary text-text-primary hover:bg-brand-primary hover:text-brand-secondary rounded-full",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span>{children as React.ReactNode}</span>
        {withArrow && (
          <motion.span
            className="ml-3 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
