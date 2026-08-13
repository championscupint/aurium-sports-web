"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Globe, Trophy, Users, Shield } from "lucide-react";

const ecosystemPillars = [
  {
    title: "Grassroots Development",
    description: "Building strong foundational skills for youth players through structured, age-appropriate coaching methodologies.",
    icon: Users,
    colSpan: "md:col-span-2",
  },
  {
    title: "Mental Wellbeing",
    description: "Integrating sports psychology to build resilience, emotional intelligence, and mental toughness.",
    icon: Brain,
    colSpan: "md:col-span-1",
  },
  {
    title: "Competitive Tournaments",
    description: "Organizing high-level competitions to test skills, build character, and showcase talent on a larger stage.",
    icon: Trophy,
    colSpan: "md:col-span-1",
  },
  {
    title: "Sports Technology",
    description: "Utilizing modern data analytics and performance tracking to optimize player development and injury prevention.",
    icon: Activity,
    colSpan: "md:col-span-1",
  },
  {
    title: "International Exposure",
    description: "Connecting local talent with global opportunities through international camps.",
    icon: Globe,
    colSpan: "md:col-span-1",
  }
];

export function EcosystemSection() {
  return (
    <section className="py-32 relative bg-aurium-dark overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aurium-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-aurium-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Ecosystem</h2>
            <h3 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tighter mb-6">
              A Holistic Approach
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We go beyond tactical and technical training. Our comprehensive ecosystem is designed to develop well-rounded individuals who excel both on and off the pitch.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] hover:border-aurium-gold/30 transition-all duration-500 group relative overflow-hidden ${pillar.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aurium-gold/0 via-aurium-gold/0 to-aurium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-aurium-gold/50 group-hover:scale-110 transition-all duration-500">
                <pillar.icon className="w-8 h-8 text-aurium-gold" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-4">{pillar.title}</h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
