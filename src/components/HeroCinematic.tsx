"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroCinematic() {
  return (
    <div className="relative w-full h-[100vh] bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518605368461-1ebce2789617?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        
        {/* Animated Gold Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aurium-gold rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-block border border-aurium-gold/30 bg-aurium-gold/10 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <span className="text-aurium-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Welcome to the future of Nepal Football</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-heading font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
            Building More <br />
            Than <span className="text-transparent bg-clip-text bg-gradient-to-b from-aurium-gold to-yellow-600 drop-shadow-[0_0_30px_rgba(251,193,8,0.3)]">Footballers</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed font-medium"
        >
          We are a long-term ecosystem around grassroots football, youth development, 
          and sports for mental wellbeing. Experience football at an international standard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link 
            href="/development" 
            className="group relative overflow-hidden bg-aurium-gold text-[#0a0a0a] px-10 py-5 rounded-full font-black text-lg sm:text-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,193,8,0.4)] flex items-center justify-center gap-3"
          >
            <span className="relative z-10">Discover Our Programs</span>
            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </Link>
          
          <Link 
            href="/about" 
            className="group bg-white/5 text-white backdrop-blur-md border border-white/10 px-10 py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <PlayCircle size={24} className="group-hover:text-aurium-gold transition-colors" />
            Watch Our Story
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </div>
  );
}
