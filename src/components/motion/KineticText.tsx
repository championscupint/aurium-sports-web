'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Typography } from '../ui/Typography';

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: 'display-xl' | 'display-l' | 'display-m';
}

export const KineticText: React.FC<KineticTextProps> = ({ 
  text, 
  className = "",
  delay = 0,
  variant = 'display-xl'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Split by words, but could split by lines if passed with \n
  const lines = text.split(/\\n|\n/);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      style={{ perspective: "1000px" }}
    >
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden pb-2">
          <motion.div variants={item}>
            <Typography variant={variant} className="whitespace-pre-wrap">
              {line}
            </Typography>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
