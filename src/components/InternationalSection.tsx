'use client';

import React from 'react';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { FadeUp } from './motion/FadeUp';

export const InternationalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <FadeUp>
              <Typography variant="label" className="text-brand-primary mb-6 block">GLOBAL PATHWAYS</Typography>
              <Typography variant="heading-xl" className="text-white mb-6">
                FROM NEPAL<br />TO THE WORLD.
              </Typography>
              <Typography variant="body-l" className="text-neutral-400 mb-10 max-w-lg">
                We believe talent is universal, but opportunity is not. Aurium connects our players with international tournaments, trials, and academic scholarships abroad.
              </Typography>
              <div className="flex gap-4">
                <Button variant="primary">INTERNATIONAL PROGRAMS</Button>
                <Button variant="secondary" className="hidden sm:inline-flex">OUR PARTNERS</Button>
              </div>
            </FadeUp>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <FadeUp delay={0.2} className="bg-surface-primary border border-neutral-800 p-8 rounded-soft text-center flex flex-col items-center justify-center">
              <Typography variant="display-m" className="text-brand-primary mb-2">12+</Typography>
              <Typography variant="label" className="text-neutral-500">Countries Visited</Typography>
            </FadeUp>
            <FadeUp delay={0.3} className="bg-surface-primary border border-neutral-800 p-8 rounded-soft text-center flex flex-col items-center justify-center translate-y-8">
              <Typography variant="display-m" className="text-brand-primary mb-2">50+</Typography>
              <Typography variant="label" className="text-neutral-500">Players Placed Abroad</Typography>
            </FadeUp>
            <FadeUp delay={0.4} className="bg-surface-primary border border-neutral-800 p-8 rounded-soft text-center flex flex-col items-center justify-center">
              <Typography variant="display-m" className="text-brand-primary mb-2">3</Typography>
              <Typography variant="label" className="text-neutral-500">International Hubs</Typography>
            </FadeUp>
            <FadeUp delay={0.5} className="bg-surface-primary border border-neutral-800 p-8 rounded-soft text-center flex flex-col items-center justify-center translate-y-8">
              <Typography variant="display-m" className="text-brand-primary mb-2">100%</Typography>
              <Typography variant="label" className="text-neutral-500">Commitment</Typography>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};
