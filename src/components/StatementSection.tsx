'use client';

import React from 'react';
import { Typography } from './ui/Typography';
import { FadeUp } from './motion/FadeUp';
import { ClipReveal } from './motion/ClipReveal';

export const StatementSection = () => {
  return (
    <section className="py-32 md:py-48 bg-surface-primary flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl z-10">
        
        <FadeUp delay={0.1}>
          <div className="w-16 h-[2px] bg-brand-primary mx-auto mb-12" />
        </FadeUp>

        <ClipReveal>
          <Typography variant="display-l" className="text-white">
            FOOTBALL CAN CHANGE
          </Typography>
        </ClipReveal>
        
        <ClipReveal delay={0.2}>
          <Typography variant="display-l" className="text-brand-primary mt-2 md:mt-4">
            MORE THAN THE SCORE.
          </Typography>
        </ClipReveal>

        <FadeUp delay={0.4} className="mt-16 max-w-3xl mx-auto">
          <Typography variant="body-l" className="text-neutral-400">
            It changes how young people see themselves. It changes how communities interact. It builds resilience, ambition, and belonging. At Aurium, football is simply the starting point.
          </Typography>
        </FadeUp>
        
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-1/4 h-[400px] bg-neutral-800/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
};
