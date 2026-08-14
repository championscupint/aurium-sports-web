'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from './ui/Typography';
import { ClipReveal } from './motion/ClipReveal';

const journeySteps = [
  { id: '01', title: 'DISCOVER', desc: 'Finding the passion.' },
  { id: '02', title: 'PLAY', desc: 'Learning through joy.' },
  { id: '03', title: 'DEVELOP', desc: 'Building the foundation.' },
  { id: '04', title: 'COMPETE', desc: 'Testing the limits.' },
  { id: '05', title: 'REPRESENT', desc: 'Playing for more.' },
  { id: '06', title: 'LEAD', desc: 'Guiding the next.' },
];

export const JourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-surface-secondary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <ClipReveal>
          <Typography variant="heading-l" className="text-white mb-4">THE AURIUM JOURNEY</Typography>
        </ClipReveal>
        <Typography variant="body-l" className="text-neutral-400 max-w-2xl">
          Progression is not a straight line, but a continuous cycle of growth. This is how we build.
        </Typography>
      </div>

      <div className="relative h-64 md:h-80 w-full">
        {/* Horizontal Moving Track */}
        <motion.div 
          style={{ x: xPos }}
          className="absolute top-0 left-6 lg:left-12 flex items-center h-full gap-8 md:gap-16 w-max pr-32"
        >
          {journeySteps.map((step, index) => (
            <div key={step.id} className="flex flex-col relative min-w-[280px] md:min-w-[350px]">
              
              {/* Top number */}
              <Typography variant="label" className="text-brand-primary mb-6">
                {step.id}
              </Typography>

              {/* Connecting Line (except last) */}
              {index !== journeySteps.length - 1 && (
                <div className="absolute top-2 left-8 w-[calc(100%+2rem)] md:w-[calc(100%+4rem)] h-[1px] bg-neutral-800" />
              )}
              
              {/* Step Content */}
              <div className="bg-surface-primary border border-neutral-800 p-8 rounded-soft shadow-xl transition-all duration-300 hover:border-brand-primary/50 hover:shadow-brand-primary/10">
                <Typography variant="display-m" className="text-white mb-2">{step.title}</Typography>
                <Typography variant="body-m" className="text-neutral-400">{step.desc}</Typography>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
