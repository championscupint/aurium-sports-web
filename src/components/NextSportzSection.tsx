'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { FadeUp } from './motion/FadeUp';

export const NextSportzSection = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-accent-blue/5 border-y border-brand-accent-blue/10 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-accent-blue rounded flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <Typography variant="label" className="text-brand-accent-blue uppercase tracking-widest">POWERED BY NEXTSPORTZ</Typography>
              </div>
              
              <Typography variant="heading-xl" className="text-white mb-6">
                THE FUTURE IS<br />DATA-DRIVEN.
              </Typography>
              <Typography variant="body-l" className="text-neutral-400 mb-10 max-w-lg">
                Technology is no longer a luxury. It is a necessity. NextSportz provides the digital infrastructure for our ecosystem, offering player performance tracking, scouting analytics, and tournament management.
              </Typography>
              <Button className="bg-brand-accent-blue hover:bg-brand-accent-blue/80 text-white" withArrow>
                EXPLORE NEXTSPORTZ
              </Button>
            </FadeUp>
          </div>

          <div className="relative">
            <FadeUp delay={0.2} className="relative aspect-video w-full rounded-sharp overflow-hidden shadow-2xl shadow-brand-accent-blue/20 border border-brand-accent-blue/20">
              <Image 
                src="/tech_data_placeholder.png" 
                alt="NextSportz Technology" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-brand-accent-blue/20 mix-blend-overlay" />
            </FadeUp>
            
            {/* Floating UI Elements */}
            <FadeUp delay={0.4} className="absolute -bottom-8 -left-8 bg-surface-primary border border-neutral-800 p-6 rounded-soft shadow-xl hidden md:block">
              <Typography variant="label" className="text-neutral-500 mb-2">PERFORMANCE METRIC</Typography>
              <div className="flex items-end gap-3">
                <Typography variant="display-s" className="text-brand-accent-blue leading-none">+24%</Typography>
                <Typography variant="body-s" className="text-white mb-1">Sprint Speed</Typography>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.5} className="absolute -top-8 -right-8 bg-surface-primary border border-neutral-800 p-6 rounded-soft shadow-xl hidden md:block">
              <Typography variant="label" className="text-neutral-500 mb-2">MATCH ANALYSIS</Typography>
              <div className="flex gap-2 items-end h-12">
                <div className="w-4 h-full bg-neutral-800 rounded-t" />
                <div className="w-4 h-3/4 bg-brand-primary rounded-t" />
                <div className="w-4 h-1/2 bg-neutral-800 rounded-t" />
                <div className="w-4 h-5/6 bg-brand-accent-blue rounded-t" />
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};
