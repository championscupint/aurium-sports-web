"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function MethodologySection() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-aurium-gold/20 to-transparent mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2935&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-white z-20 transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
                <div className="text-4xl font-black mb-2 text-white">10+</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-aurium-gold">Years of Coaching Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-aurium-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Methodology</h2>
            <h3 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Data-Driven. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurium-gold to-yellow-200">Player-Centric.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              At Aurium Sports, we believe in a scientific approach to player development. Our methodology combines traditional football wisdom with cutting-edge sports science and technology to maximize every player's potential.
            </p>

            <ul className="space-y-6">
              {[
                "Age-specific training curriculums (U12, U16, Academy)",
                "Performance tracking and biometric analysis",
                "Video analysis and tactical reviews",
                "Position-specific technical coaching",
                "Nutrition and recovery protocols"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-aurium-gold shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
