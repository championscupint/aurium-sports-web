'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from './ui/Typography';
import { ClipReveal } from './motion/ClipReveal';

const pillars = [
  { id: 'academy', name: 'ACADEMY', title: 'Grassroots Foundation', desc: 'Developing the complete player through structured methodology.' },
  { id: 'tournaments', name: 'TOURNAMENTS', title: 'Competitive Platform', desc: 'Creating high-level environments for talent to shine.' },
  { id: 'nextsportz', name: 'NEXTSPORTZ', title: 'Data & Technology', desc: 'Tracking performance, scouting, and digital infrastructure.' },
  { id: 'international', name: 'INTERNATIONAL', title: 'Global Pathways', desc: 'Connecting Nepali talent to global opportunities.' }
];

export const EcosystemSection = () => {
  const [activeId, setActiveId] = useState('academy');

  return (
    <section className="py-24 md:py-32 bg-background border-t border-neutral-900 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Diagram / Graphic */}
          <div className="relative aspect-square md:aspect-[4/3] w-full rounded-sharp overflow-hidden border border-neutral-800 group">
            <Image 
              src="/tech_data_placeholder.png" 
              alt="Ecosystem Tech" 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Interactive Nodes Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-8 md:p-12">
              <Typography variant="heading-m" className="text-white mb-2">INTEGRATED</Typography>
              <Typography variant="heading-m" className="text-brand-primary mb-8">ECOSYSTEM</Typography>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/80 backdrop-blur-md p-6 border-l-2 border-brand-primary max-w-sm mt-auto"
                >
                  <Typography variant="label" className="text-brand-primary mb-2">
                    {pillars.find(p => p.id === activeId)?.name}
                  </Typography>
                  <Typography variant="body-m" className="text-white">
                    {pillars.find(p => p.id === activeId)?.desc}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-black/40 to-transparent pointer-events-none z-10" />
          </div>

          {/* Right: Selectors */}
          <div className="flex flex-col justify-center">
            <ClipReveal>
              <Typography variant="label" className="text-neutral-500 mb-4 block">THE 4 PILLARS</Typography>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <Typography variant="display-m" className="text-white mb-12">
                MORE THAN<br />JUST A PITCH.
              </Typography>
            </ClipReveal>

            <div className="flex flex-col gap-6">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveId(pillar.id)}
                  className={`text-left group relative pl-8 py-4 transition-all duration-300 ${activeId === pillar.id ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
                >
                  {/* Indicator Line */}
                  <motion.div 
                    className={`absolute left-0 top-0 bottom-0 w-[2px] ${activeId === pillar.id ? 'bg-brand-primary' : 'bg-neutral-800'}`}
                    layoutId="activeIndicatorEcosystem"
                  />
                  <Typography variant="heading-s" className={`mb-1 transition-colors duration-300 ${activeId === pillar.id ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="label" className="text-neutral-500">{pillar.name}</Typography>
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
    </section>
  );
};
