'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  duration = 0.6,
  yOffset = 40
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 1, 0.5, 1] // Custom cubic-bezier matching CSS token
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
