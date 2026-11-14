'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { useEnquiry } from '@/components/EnquiryContext';
import { PlayerProgrammesShowcase } from '@/components/PlayerProgrammesShowcase';
import { CoachingRemarksAndTestimonials } from '@/components/CoachingRemarksAndTestimonials';
import { buttonClass } from '@/lib/ui';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ProgramsClient() {
  const { openEnquiry } = useEnquiry();
  const groups = ['Train', 'Schools', 'Compete', 'Impact', 'Build'] as const;

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
              <Sparkles size={12} /> Ages 3 to 16 • Grassroots to International Elite
            </div>
            <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white">
              Our Training <span className="accent font-serif italic text-gold normal-case">Programmes.</span>
            </h1>
            <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
              Every programme at The Aurium Academy connects into a single long-term pathway—from <strong className="text-gold">Little Ballers (Ages 3–5)</strong> and <strong className="text-gold">Academy Prep (Ages 6–8)</strong> to our <strong className="text-gold">Invite-Only Elite Squads</strong> and international tournament tours across the <strong className="text-white">Dana Cup, Norway Cup, and Yangshuo Cup</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openEnquiry('register', 'academy')}
              className={buttonClass('gold', '!py-4 !px-8 text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold/20')}
            >
              Book a Spot Now
            </button>
            <Link
              href="/schedule"
              className={buttonClass('outline-chalk', '!py-4 !px-6 text-xs font-bold uppercase tracking-wider')}
            >
              Grounds & Schedule →
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Age-Group & Specialist Player Programmes Showcase (Lahore Virgil / Legends Inspired UX) */}
      <PlayerProgrammesShowcase showHeader={false} />

      {/* 2. Creative Coaching Directorate Remarks & Parent/Player Testimonials */}
      <CoachingRemarksAndTestimonials />

      {/* 3. Complete 9-Service Institutional & Community Ecosystem */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-ink/10 pb-8 gap-6">
          <div>
            <span className="eyebrow text-gold-deep">Institutional & Ecosystem Services</span>
            <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink mt-2">
              The Complete 9-Pillar Ecosystem.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted max-w-md font-sans leading-relaxed">
            Beyond weekly age-group football classes, explore our school ECA partnerships, holiday camps, tournaments, mental health workshops, and turf infrastructure services.
          </p>
        </div>

        {groups.map((grp) => {
          const groupServices = services.filter((s) => s.group === grp);
          if (groupServices.length === 0) return null;

          return (
            <section key={grp} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-ink/10 pb-4">
                <span className="px-3 py-1 bg-ink text-gold font-mono text-xs uppercase font-bold tracking-wider rounded-full">
                  Pillar
                </span>
                <h3 className="display text-3xl uppercase tracking-tight text-ink">
                  {grp}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupServices.map((svc) => (
                  <div
                    key={svc.slug}
                    className="group bg-white rounded-3xl border border-ink/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image / motif thumbnail */}
                      <div className="relative h-44 w-full bg-ink overflow-hidden">
                        {svc.image ? (
                          <Image
                            src={svc.image}
                            alt={svc.imageAlt || `${svc.name} - Aurium Sports in Kathmandu, Nepal`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink to-ink-2">
                            <span className="display text-5xl text-white/10 tracking-widest uppercase">
                              {svc.motif}
                            </span>
                          </div>
                        )}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 bg-ink/90 text-gold text-[10px] font-mono font-bold uppercase tracking-wider rounded-full border border-gold/30">
                            {svc.kicker}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <h4 className="display text-2xl uppercase tracking-tight text-ink">
                          {svc.name}
                        </h4>
                        <p className="text-xs text-muted font-sans leading-relaxed line-clamp-3">
                          {svc.summary}
                        </p>

                        <div className="flex flex-wrap gap-1 pt-2">
                          {svc.audience.map((a) => (
                            <span key={a} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-chalk border border-ink/10 text-muted">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 pt-0 border-t border-ink/5 mt-4 flex items-center justify-between">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="text-xs font-bold text-ink hover:text-gold-deep flex items-center gap-1 transition-colors"
                      >
                        Learn More <ArrowRight size={13} />
                      </Link>

                      <button
                        onClick={() => openEnquiry(svc.offerings[0]?.intent || 'register', svc.slug)}
                        className="px-4 py-2 bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-[10px] font-bold uppercase rounded-full tracking-wider transition-all"
                      >
                        {svc.offerings[0]?.intent === 'register' ? 'Book a Spot' : 'Enquire'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
