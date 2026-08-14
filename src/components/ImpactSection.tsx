'use client';

import React from 'react';
import { Typography } from './ui/Typography';
import { FadeUp } from './motion/FadeUp';
import { ClipReveal } from './motion/ClipReveal';

export const ImpactSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ClipReveal>
            <Typography variant="label" className="text-brand-primary mb-4 block">OUR IMPACT</Typography>
          </ClipReveal>
          <ClipReveal delay={0.1}>
            <Typography variant="heading-xl" className="text-white mb-6">REAL NUMBERS.<br />REAL STORIES.</Typography>
          </ClipReveal>
          <FadeUp delay={0.2}>
            <Typography variant="body-l" className="text-neutral-400">
              We measure our success not just in trophies, but in the lives we touch and the communities we uplift.
            </Typography>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { value: "5,000+", label: "Players Reached" },
            { value: "120+", label: "Coaches Trained" },
            { value: "50%", label: "Scholarships" },
            { value: "10+", label: "Communities" }
          ].map((stat, i) => (
            <FadeUp key={i} delay={0.3 + (i * 0.1)} className="text-center">
              <Typography variant="display-l" className="text-white mb-2">{stat.value}</Typography>
              <div className="w-8 h-1 bg-brand-primary mx-auto mb-4" />
              <Typography variant="label" className="text-neutral-500">{stat.label}</Typography>
            </FadeUp>
          ))}
        </div>

        <div className="border-t border-neutral-900 pt-20">
          <FadeUp>
            <Typography variant="label" className="text-neutral-500 text-center mb-12 block">OUR PARTNERS IN DEVELOPMENT</Typography>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
            {/* Logos would go here, using placeholders for now */}
            {[1, 2, 3, 4, 5].map((item) => (
              <FadeUp key={item} delay={0.4 + (item * 0.1)}>
                <div className="w-32 h-12 bg-neutral-800 rounded flex items-center justify-center">
                  <Typography variant="label" className="text-neutral-600">PARTNER {item}</Typography>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
