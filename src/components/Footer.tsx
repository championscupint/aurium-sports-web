import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';
import { FadeUp } from './motion/FadeUp';
import { ClipReveal } from './motion/ClipReveal';

export const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-neutral-900 pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: The Big Question */}
        <div className="mb-24 md:w-3/4">
          <ClipReveal>
            <Typography variant="display-m" className="text-white mb-8">
              WHERE COULD<br />
              <span className="text-brand-primary">FOOTBALL TAKE YOU?</span>
            </Typography>
          </ClipReveal>
          <FadeUp delay={0.2} className="flex flex-wrap gap-4">
            <Button variant="primary" withArrow>JOIN AURIUM</Button>
            <Button variant="secondary" withArrow>PARTNER WITH US</Button>
          </FadeUp>
        </div>

        {/* Middle Section: Links Grid */}
        <FadeUp delay={0.3} className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-neutral-800 pt-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="relative w-12 h-12 drop-shadow-[0_0_15px_rgba(251,193,8,0.4)] group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo_transparent.png" 
                  alt="Aurium Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
                <span className="font-display font-bold text-2xl leading-none">AURIUM</span>
                <span className="font-sans font-bold text-xs text-brand-primary tracking-[0.2em] leading-none mt-1">SPORTS</span>
              </div>
            </Link>
            <Typography variant="body-m" className="max-w-xs">
              Building more than footballers. A long-term ecosystem around grassroots football and youth development in Nepal.
            </Typography>
          </div>

          <div>
            <Typography variant="label" className="text-white mb-6 block">Ecosystem</Typography>
            <ul className="space-y-4">
              <li><Link href="/academy" className="text-text-secondary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider">Academy</Link></li>
              <li><Link href="/tournaments" className="text-text-secondary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider">Tournaments</Link></li>
              <li><Link href="/international" className="text-text-secondary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider">International</Link></li>
              <li><Link href="/nextsportz" className="text-brand-accent-blue hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">NextSportz</Link></li>
            </ul>
          </div>

          <div>
            <Typography variant="label" className="text-white mb-6 block">Follow the Journey</Typography>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider">Instagram</a></li>
              <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider">Facebook</a></li>
              <li><a href="#" className="text-text-secondary hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider">LinkedIn</a></li>
            </ul>
          </div>
        </FadeUp>

        {/* Bottom Section: Legal */}
        <FadeUp delay={0.4} className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Aurium Sports Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </FadeUp>
      </div>

      {/* Background Graphic Element */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full border-[1px] border-neutral-800 opacity-20 pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[30vw] h-[30vw] rounded-full border-[1px] border-brand-primary opacity-10 pointer-events-none" />
    </footer>
  );
};
