'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Academy', href: '/academy', desc: 'Where the journey begins.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
  { name: 'Football', href: '/football', desc: 'Our methodology and playstyle.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
  { name: 'Tournaments', href: '/tournaments', desc: 'Competition creates opportunity.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
  { name: 'Impact', href: '/impact', desc: 'Real numbers. Real stories.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
  { name: 'International', href: '/international', desc: 'From Nepal to the world.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
  { name: 'Technology', href: '/technology', desc: 'The future is data-driven.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
  { name: 'About', href: '/about', desc: 'Building more than footballers.', image: '/aurium_sports_demo_v3_1786598287818.webp' },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || activeMegaMenu ? 'bg-surface-primary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(251,193,8,0.3)] group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo_transparent.png" 
                alt="Aurium Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col tracking-tight text-white group-hover:text-brand-primary transition-colors duration-300">
              <span className="font-display font-bold text-xl md:text-2xl leading-none">AURIUM</span>
              <span className="font-sans font-bold text-[10px] md:text-xs text-brand-primary tracking-[0.2em] leading-none mt-1">SPORTS</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="px-4 py-2"
                onMouseEnter={() => setActiveMegaMenu(item.name)}
              >
                <Link href={item.href} className="text-sm font-bold text-text-primary uppercase tracking-wider hover:text-brand-primary transition-colors">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <Button variant="primary" className="hidden md:inline-flex py-3 px-6 text-xs" withArrow>
              JOIN AURIUM
            </Button>
            
            <button 
              className="lg:hidden text-text-primary p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-surface-secondary border-t border-neutral-800 shadow-2xl"
            >
              <div className="container mx-auto px-12 py-12 flex grid-cols-12 gap-8">
                {/* Left: Category & Desc */}
                <div className="w-1/3 pr-8 border-r border-neutral-800">
                  <Typography variant="heading-l" className="uppercase text-brand-primary mb-4">
                    {activeMegaMenu}
                  </Typography>
                  <Typography variant="body-m">
                    {navItems.find(i => i.name === activeMegaMenu)?.desc}
                  </Typography>
                </div>
                
                {/* Center: Links */}
                <div className="w-1/3 px-8 flex flex-col space-y-4">
                  {['Programs', 'Methodology', 'Stories', 'Contact'].map((link) => (
                    <Link key={link} href={`/${activeMegaMenu?.toLowerCase()}/${link.toLowerCase()}`} className="group flex items-center text-lg font-bold text-text-primary hover:text-brand-primary transition-colors">
                      {link}
                      <ChevronRight className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" size={20} />
                    </Link>
                  ))}
                </div>

                {/* Right: Featured Image */}
                <div className="w-1/3 pl-8 relative h-48 rounded-sharp overflow-hidden group">
                  <Image 
                    src={navItems.find(i => i.name === activeMegaMenu)?.image || "/logo_transparent.png"} 
                    alt="Featured" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <Typography variant="label" className="text-white">Featured Story</Typography>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-40 bg-surface-primary flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 flex-grow">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col group"
                  >
                    <span className="font-display font-bold text-4xl uppercase tracking-tight text-text-primary group-hover:text-brand-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="text-text-secondary text-sm mt-1">{item.desc}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-4"
            >
              <Button variant="primary" className="w-full">
                JOIN AURIUM
              </Button>
              <div className="flex justify-between items-center text-sm text-text-secondary pt-6 border-t border-neutral-800">
                <span>© {new Date().getFullYear()} Aurium Sports</span>
                <div className="flex space-x-4">
                  <a href="#">IG</a>
                  <a href="#">FB</a>
                  <a href="#">IN</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
