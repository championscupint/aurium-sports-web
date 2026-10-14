'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { useEnquiry } from './EnquiryContext';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <footer className="bg-ink text-chalk border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner / Callout */}
        <div className="bg-gradient-to-r from-ink-2 to-ink-3 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold mb-3">Begin The Journey</span>
              <h3 className="display text-3xl md:text-5xl uppercase tracking-tight text-white mb-3">
                Ready to develop the complete player?
              </h3>
              <p className="text-chalk/70 font-sans text-sm md:text-base leading-relaxed">
                Whether you are a parent enrolling a 7-year-old, a school principal seeking a proven sports curriculum, or an aspiring coach, Aurium provides the complete pathway.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                onClick={() => openEnquiry('register')}
                className="px-8 py-4 bg-gold text-ink font-bold text-xs uppercase tracking-widest rounded-full hover:bg-chalk transition-all shadow-lg active:scale-95"
              >
                Register Player
              </button>
              <button
                onClick={() => openEnquiry('inquiry')}
                className="px-8 py-4 border-2 border-chalk/30 text-chalk font-bold text-xs uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all"
              >
                General Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Multi-column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10 text-sm">
          
          {/* Col 1: Brand Info & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/images/logo-512.png"
                  alt="Aurium Sports"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-2xl text-white tracking-tight">
                AURIUM SPORTS
              </span>
            </div>

            <p className="text-chalk/70 font-sans leading-relaxed text-xs max-w-sm">
              Building Nepal’s most complete youth sports ecosystem. Focused on athletic excellence, emotional resilience, and lifelong character through football, basketball, and cricket.
            </p>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-chalk/60 max-w-sm">
              <span className="font-semibold text-chalk/80">Entity:</span> <strong className="text-gold font-medium">{site.legalName}</strong> • Kathmandu, Nepal.
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-gold hover:text-white flex items-center gap-1 transition-colors"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1"
              >
                WhatsApp Chat <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Col 2: Services & Programs */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-chalk text-base mb-4">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-chalk/70">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/programs" className="text-gold font-semibold hover:underline">
                  View All Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Competitions & Infrastructure */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-chalk text-base mb-4">
              Infrastructure
            </h4>
            <ul className="space-y-2 text-xs text-chalk/70">
              {services.slice(5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/camps" className="hover:text-gold transition-colors">
                  Holiday Training Camps
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-gold transition-colors">
                  Aurium Mini League
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Academy Office */}
          <div>
            <h4 className="font-display uppercase tracking-wider text-chalk text-base mb-4">
              Kathmandu HQ
            </h4>
            <ul className="space-y-3 text-xs text-chalk/70">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gold shrink-0" />
                <span>{site.phones.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold shrink-0" />
                <span>{site.emails.inquiry}</span>
              </li>
              <li className="pt-2">
                <div className="flex flex-col gap-1.5 font-sans">
                  <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
                  <Link href="/become-a-trainer" className="hover:text-gold transition-colors">Become a Trainer</Link>
                  <Link href="/partners" className="hover:text-gold transition-colors">Our Partners</Link>
                  <Link href="/announcements" className="hover:text-gold transition-colors">Announcements & Notices</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-chalk/50 gap-4">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-chalk transition-colors">About</Link>
            <Link href="/contact" className="hover:text-chalk transition-colors">Contact</Link>
            <button
              onClick={() => openEnquiry('inquiry')}
              className="text-gold hover:underline font-medium"
            >
              Direct Message
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
