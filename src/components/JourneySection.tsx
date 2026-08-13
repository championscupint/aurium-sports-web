"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const journeyStages = [
  {
    year: "U12",
    title: "Foundation & Fun",
    description: "Focusing on technical fundamentals, ball mastery, and fostering a love for the game in a pressure-free environment.",
  },
  {
    year: "U14",
    title: "Tactical Awareness",
    description: "Introducing team tactics, positional play, and decision-making while continuing to refine technical abilities.",
  },
  {
    year: "U16",
    title: "Competitive Edge",
    description: "High-intensity training, advanced tactical concepts, and physical conditioning to prepare for senior football.",
  },
  {
    year: "U18+",
    title: "Elite Transition",
    description: "Bridging the gap to professional football with international exposure, trials, and advanced sports science support.",
  }
];

export function JourneySection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="h-[200vh] bg-[#0a0a0a] relative border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
          <h2 className="text-aurium-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">The Pathway</h2>
          <h3 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tighter">
            The Aurium Journey
          </h3>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 sm:px-6 lg:px-8 w-[200vw] lg:w-[150vw]">
          {journeyStages.map((stage, index) => (
            <div 
              key={stage.year} 
              className="w-[85vw] sm:w-[40vw] lg:w-[30vw] flex-shrink-0 bg-[#050505] p-10 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-aurium-gold/40 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-aurium-gold/5 rounded-full blur-[60px] group-hover:bg-aurium-gold/10 transition-colors duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-5xl md:text-7xl font-black text-white/5 mb-8 group-hover:text-aurium-gold/10 transition-colors duration-500 tracking-tighter">{stage.year}</div>
                <h4 className="text-3xl font-heading font-bold text-white mb-6">{stage.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{stage.description}</p>
              </div>
              <div className="mt-12 w-16 h-1.5 bg-white/10 rounded-full group-hover:bg-aurium-gold transition-colors duration-500 relative z-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
