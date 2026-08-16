'use client';

import React from 'react';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { FadeUp } from './motion/FadeUp';

export const InternationalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <Typography variant="label" className="text-brand-primary mb-6 block">GLOBAL PATHWAYS</Typography>
            <Typography variant="heading-xl" className="text-white mb-6">
              FROM NEPAL<br />TO THE WORLD.
            </Typography>
            <Typography variant="body-l" className="text-neutral-400 mb-10 mx-auto">
              We believe talent is universal, but opportunity is not. Aurium connects our players with international tournaments, trials, and academic scholarships abroad.
            </Typography>
            <div className="flex gap-4 justify-center">
              <Button variant="primary">INTERNATIONAL PROGRAMS</Button>
              <Button variant="secondary" className="hidden sm:inline-flex">OUR PARTNERS</Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
