'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';

export const GirlsFootballSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <Image 
          src="/girls_football_placeholder.png" 
          alt="Girls Football" 
          fill 
          className="object-cover opacity-60" 
        />
      </motion.div>
      
      {/* Gradient Mask for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="label" className="text-brand-primary mb-6 block">WOMEN'S FOOTBALL</Typography>
            <Typography variant="display-m" className="text-white mb-6">
              THE FUTURE<br />IS EQUAL.
            </Typography>
            <Typography variant="body-l" className="text-neutral-300 mb-10">
              We are committed to building the foundation for the women's game in Nepal. Equal opportunity, equal resources, and a dedicated pathway for female athletes to reach the highest level.
            </Typography>
            <Button variant="primary" withArrow>JOIN THE MOVEMENT</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
