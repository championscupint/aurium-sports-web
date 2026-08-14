'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ClipRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const ClipReveal: React.FC<ClipRevealProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up',
  duration = 0.8
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitialClip = () => {
    switch (direction) {
      case 'up': return 'inset(100% 0% 0% 0%)';
      case 'down': return 'inset(0% 0% 100% 0%)';
      case 'left': return 'inset(0% 0% 0% 100%)';
      case 'right': return 'inset(0% 100% 0% 0%)';
    }
  };

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ clipPath: getInitialClip(), scale: 1.05 }}
        animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 } : { clipPath: getInitialClip(), scale: 1.05 }}
        transition={{ 
          duration, 
          delay, 
          ease: [0.83, 0, 0.17, 1] // ease-emphasized
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
