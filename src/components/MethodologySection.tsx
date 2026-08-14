'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { FadeUp } from './motion/FadeUp';
import { ClipReveal } from './motion/ClipReveal';

export const MethodologySection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-primary border-t border-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <ClipReveal>
              <Typography variant="label" className="text-brand-primary mb-4 block">THE ACADEMY</Typography>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <Typography variant="heading-xl" className="text-white mb-6">
                DEVELOPING<br />THE INDIVIDUAL.
              </Typography>
            </ClipReveal>
            <FadeUp delay={0.2}>
              <Typography variant="body-l" className="text-neutral-400">
                Our methodology goes beyond tactical awareness and technical ability. We focus on psychological resilience, physical conditioning, and social responsibility.
              </Typography>
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <Button variant="secondary" withArrow>EXPLORE METHODOLOGY</Button>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Technical Excellence", 
              desc: "Mastering the ball in tight spaces, game intelligence, and high-intensity execution.",
              number: "01"
            },
            { 
              title: "Psychological Edge", 
              desc: "Building resilience, decision-making under pressure, and a growth mindset.",
              number: "02"
            },
            { 
              title: "Physical Conditioning", 
              desc: "Modern sports science applied to youth development for optimal performance and injury prevention.",
              number: "03"
            }
          ].map((item, i) => (
            <FadeUp key={i} delay={0.2 + (i * 0.1)} className="group relative">
              <div className="bg-surface-secondary border border-neutral-800 p-8 rounded-soft h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:border-neutral-600">
                <Typography variant="display-s" className="text-neutral-800 absolute top-4 right-6 pointer-events-none group-hover:text-neutral-700 transition-colors">
                  {item.number}
                </Typography>
                <Typography variant="heading-s" className="text-white mb-4 mt-8">{item.title}</Typography>
                <Typography variant="body-m" className="text-neutral-400">{item.desc}</Typography>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Big visual banner */}
        <FadeUp delay={0.5} className="mt-16 relative w-full h-[60vh] rounded-sharp overflow-hidden group">
          <Image 
            src="/editorial_portrait_placeholder.png" 
            alt="Academy Player" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
            <Typography variant="label" className="text-white mb-2">PLAYER SPOTLIGHT</Typography>
            <Typography variant="heading-m" className="text-brand-primary max-w-xl">
              "AURIUM TAUGHT ME HOW TO THINK THE GAME, NOT JUST PLAY IT."
            </Typography>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};
