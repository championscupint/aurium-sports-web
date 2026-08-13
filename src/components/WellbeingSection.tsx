"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Zap } from "lucide-react";

export function WellbeingSection() {
  return (
    <section className="py-32 bg-aurium-dark text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <h2 className="text-aurium-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Sports Psychology</h2>
              <h3 className="text-5xl md:text-6xl font-heading font-black tracking-tighter mb-6 leading-[1.1]">
                Mental Wellbeing <br/>at Our Core
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are the first academy in Nepal to fully integrate sports psychology into our core curriculum. We build resilience, emotional intelligence, and mental toughness to help players thrive under pressure.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-aurium-gold/30 transition-colors">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Brain className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading mb-2">Cognitive Training</h4>
                  <p className="text-gray-400">Enhancing decision-making speed, spatial awareness, and focus during high-pressure situations.</p>
                </div>
              </div>

              <div className="flex gap-6 bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-aurium-gold/30 transition-colors">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Heart className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading mb-2">Emotional Resilience</h4>
                  <p className="text-gray-400">Tools to manage performance anxiety, bounce back from setbacks, and maintain unshakeable confidence.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-aurium-dark via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2858&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-aurium-gold/20 rounded-full blur-[40px] z-0 group-hover:scale-150 group-hover:bg-aurium-gold/40 transition-all duration-700" />
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <p className="font-heading font-medium text-lg italic text-gray-200">
                    "Football is played with the head. Your feet are just the tools."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
