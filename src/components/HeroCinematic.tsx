'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { KineticText } from './motion/KineticText';

export const HeroCinematic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Mouse parallax
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // max 20px shift
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Layer 1: Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{ 
            backgroundImage: "url('/hero_cinematic_placeholder.png')",
            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px) scale(1.05)`
          }}
        />
      </motion.div>

      {/* Layer 2: Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Layer 3: Typography & Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center transition-transform duration-300 ease-out"
      >
        <div style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="label" className="text-brand-primary tracking-[0.3em] mb-6 block">
              AURIUM SPORTS
            </Typography>
          </motion.div>
          
          <KineticText 
            text="BUILDING MORE THAN FOOTBALLERS."
            variant="display-xl"
            className="text-white mb-8"
            delay={0.4}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 max-w-xl"
          >
            <Typography variant="body-l" className="text-neutral-200">
              We are a long-term ecosystem around grassroots football, youth development, and sports for mental wellbeing in Nepal.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <Button variant="primary" withArrow>JOIN THE JOURNEY</Button>
            <Button variant="secondary" className="hidden sm:inline-flex border-neutral-500">DISCOVER PROGRAMS</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Layer 4: Decorative Lines */}
      <div className="absolute bottom-12 left-6 lg:left-12 z-30 flex gap-2">
        <motion.div 
          initial={{ height: 0 }} animate={{ height: 40 }} transition={{ duration: 1, delay: 2 }}
          className="w-[1px] bg-brand-primary"
        />
        <motion.div 
          initial={{ height: 0 }} animate={{ height: 24 }} transition={{ duration: 1, delay: 2.2 }}
          className="w-[1px] bg-neutral-600"
        />
      </div>
    </section>
  );
};
