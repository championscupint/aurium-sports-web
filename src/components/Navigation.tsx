'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEnquiry } from './EnquiryContext';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { Menu, X, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { buttonClass } from '@/lib/ui';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesDropdown(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
            : 'bg-gradient-to-b from-ink/90 via-ink/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1">
            <div className="relative w-11 h-11 shrink-0 drop-shadow-[0_2px_8px_rgba(251,193,8,0.3)] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-512.png"
                alt="Aurium Sports Crest"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-tight text-xl md:text-2xl text-chalk leading-none group-hover:text-gold transition-colors">
                AURIUM SPORTS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold font-sans mt-0.5 leading-none">
                Kathmandu • Nepal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors py-2 ${
                  pathname.startsWith('/services') ? 'text-gold' : 'text-chalk/90 hover:text-gold'
                }`}
                aria-expanded={servicesDropdown}
              >
                Services & Programs
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-ink border border-white/15 rounded-2xl shadow-2xl p-4 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-gold border-b border-white/10">
                    All Offerings
                  </div>
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="px-3 py-2 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-bold text-chalk group-hover:text-gold transition-colors">
                          {svc.name}
                        </div>
                        <div className="text-[11px] text-chalk/50 truncate max-w-[200px]">
                          {svc.kicker}
                        </div>
                      </div>
                      <ArrowRight size={12} className="text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-white/10 mt-1">
                    <Link
                      href="/programs"
                      className="text-[11px] font-bold text-gold hover:underline flex items-center justify-between px-3"
                    >
                      View All Programs Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/camps"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === '/camps' ? 'text-gold' : 'text-chalk/90 hover:text-gold'
              }`}
            >
              Camps
            </Link>

            <Link
              href="/tournaments"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === '/tournaments' ? 'text-gold' : 'text-chalk/90 hover:text-gold'
              }`}
            >
              Tournaments
            </Link>

            <Link
              href="/mental-health"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === '/mental-health' ? 'text-gold' : 'text-chalk/90 hover:text-gold'
              }`}
            >
              Mental Health
            </Link>

            <Link
              href="/about"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === '/about' ? 'text-gold' : 'text-chalk/90 hover:text-gold'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === '/contact' ? 'text-gold' : 'text-chalk/90 hover:text-gold'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#25D366] text-chalk transition-colors"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={() => openEnquiry('register')}
              className={buttonClass('gold', '!py-2.5 !px-5 text-xs shadow-md')}
            >
              Register / Enquire
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiry('register')}
              className="sm:hidden px-3 py-1.5 bg-gold text-ink text-[11px] font-bold uppercase tracking-wider rounded-full"
            >
              Join
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-chalk hover:text-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-ink pt-24 pb-8 px-6 overflow-y-auto flex flex-col justify-between border-t border-white/10 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest font-mono text-gold font-bold">
                Navigation Menu
              </span>
            </div>

            <div className="grid gap-4">
              <Link
                href="/"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/programs"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                All Programs
              </Link>
              <Link
                href="/camps"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Training Camps
              </Link>
              <Link
                href="/tournaments"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Tournaments & Leagues
              </Link>
              <Link
                href="/mental-health"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Sports for Mental Health
              </Link>
              <Link
                href="/about"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                About & Leadership
              </Link>
              <Link
                href="/partners"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Our Partners
              </Link>
              <Link
                href="/become-a-trainer"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Become a Trainer
              </Link>
              <Link
                href="/contact"
                className="display text-3xl uppercase text-chalk hover:text-gold transition-colors"
              >
                Contact & Location
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileOpen(false);
                openEnquiry('register');
              }}
              className="w-full py-4 bg-gold text-ink font-bold uppercase tracking-wider text-sm rounded-full text-center"
            >
              Register a Player
            </button>
            <div className="flex justify-between items-center text-xs text-chalk/60">
              <span>{site.phones[0]}</span>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-bold flex items-center gap-1"
              >
                <MessageCircle size={14} /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
