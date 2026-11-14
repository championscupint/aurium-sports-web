'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  playerProgrammes,
  internationalTournaments,
  PlayerProgramme,
} from '@/data/programmes';
import { useEnquiry } from './EnquiryContext';
import { trackEnrollmentClick } from '@/lib/analytics';
import {
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Globe,
  ShieldCheck,
} from 'lucide-react';

type FilterTab = 'All' | 'Grassroots' | 'Core Academy' | 'Specialist' | 'Invite Only';

export function PlayerProgrammesShowcase({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const { openEnquiry } = useEnquiry();
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const tabs: { key: FilterTab; label: string }[] = [
    { key: 'All', label: 'All Programmes (7)' },
    { key: 'Grassroots', label: 'Little Ballers & Prep (Ages 3–8)' },
    { key: 'Core Academy', label: 'Foundation & Youth (Ages 9–16)' },
    { key: 'Specialist', label: 'Goalkeeper & Girls' },
    { key: 'Invite Only', label: 'Elite (Invite Only)' },
  ];

  const filtered: PlayerProgramme[] =
    activeTab === 'All'
      ? playerProgrammes
      : playerProgrammes.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 bg-chalk text-ink border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {showHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="eyebrow text-gold-deep">
                The Aurium Academy • Player Pathways
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-none">
                Find Your Child’s{' '}
                <span className="accent font-serif italic normal-case text-gold-deep">
                  Training Programme.
                </span>
              </h2>
              <p className="text-muted font-sans text-sm sm:text-base leading-relaxed">
                Designed around international youth development standards and our signature B.U.S.T. sports-science framework. From first touches in <strong>Little Ballers (Ages 3–5)</strong> and <strong>Academy Prep (Ages 6–8)</strong> to our <strong>Invite-Only Elite Squad</strong>, every child develops at the pace best suited for them.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/schedule"
                className="px-5 py-3 rounded-full bg-white border border-ink/15 hover:border-ink text-ink font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                View Weekly Timings & Grounds →
              </Link>
            </div>
          </div>
        )}

        {/* Interactive Age & Pathway Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-ink/10 pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-ink text-gold shadow-md'
                    : 'bg-white text-ink/75 border border-ink/10 hover:border-ink/30 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((prog) => {
            const isElite = prog.featured || prog.category === 'Invite Only';
            return (
              <div
                key={prog.id}
                className={`group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isElite
                    ? 'md:col-span-2 lg:col-span-3 bg-ink text-chalk border-2 border-gold shadow-2xl'
                    : 'bg-white text-ink border border-ink/10 hover:border-gold hover:shadow-xl'
                }`}
              >
                {isElite ? (
                  /* Featured Full-Width Elite (Invite Only) Card */
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="relative min-h-[280px] lg:col-span-5 bg-ink-2 overflow-hidden">
                      <Image
                        src={prog.image}
                        alt={prog.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-3.5 py-1 rounded-full bg-gold text-ink font-mono text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                          <Sparkles size={12} /> {prog.ageBadge}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-ink/90 text-gold border border-gold/40 font-mono text-[10px] font-bold uppercase tracking-wider">
                          High-Performance Pathway
                        </span>
                      </div>
                    </div>

                    <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gold">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock size={14} /> {prog.duration}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar size={14} /> {prog.frequency}
                          </span>
                        </div>

                        <div>
                          <h3 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white">
                            {prog.name}
                          </h3>
                          <p className="accent font-serif italic text-xl text-gold mt-1">
                            {prog.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-chalk/80 font-sans leading-relaxed">
                          {prog.overview}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          {prog.outcomes.map((out) => (
                            <div
                              key={out}
                              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-chalk/90"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-gold shrink-0 mt-0.5"
                              />
                              <span className="leading-snug font-medium">{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-[11px] font-mono text-chalk/70">
                          International Targets:{' '}
                          <strong className="text-gold">
                            Dana Cup · Norway Cup · Yangshuo Cup · Gothia Cup
                          </strong>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              trackEnrollmentClick(prog.id);
                              openEnquiry('register', 'academy', prog.enquiryOption);
                            }}
                            className="px-7 py-3.5 rounded-full bg-gold hover:bg-white text-ink font-bold text-xs uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                          >
                            {prog.ctaLabel} <ArrowRight size={14} />
                          </button>
                          <Link
                            href="/services/international"
                            className="px-5 py-3.5 rounded-full border border-white/25 hover:border-gold text-chalk hover:text-gold font-bold text-xs uppercase tracking-wider transition-all"
                          >
                            Explore International Tours
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Age-Group / Specialist Programme Card */
                  <>
                    <div>
                      {/* Image Header */}
                      <div className="relative h-52 w-full bg-ink overflow-hidden">
                        <Image
                          src={prog.image}
                          alt={prog.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                        {/* Age Badge Top Left */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full bg-gold text-ink font-mono text-xs font-bold uppercase tracking-wider shadow-md">
                            {prog.ageBadge}
                          </span>
                        </div>

                        {/* Category Pill Top Right */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-ink/85 backdrop-blur-md text-chalk border border-white/15 font-mono text-[10px] uppercase tracking-wider font-semibold">
                            {prog.category}
                          </span>
                        </div>

                        {/* Duration & Frequency Bar at Bottom of Image */}
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-chalk/90">
                          <span className="inline-flex items-center gap-1 bg-ink/75 backdrop-blur-sm px-2.5 py-1 rounded-md">
                            <Clock size={12} className="text-gold" /> {prog.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-ink/75 backdrop-blur-sm px-2.5 py-1 rounded-md">
                            <Calendar size={12} className="text-gold" /> {prog.frequency}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="display text-3xl uppercase tracking-tight text-ink group-hover:text-gold-deep transition-colors">
                            {prog.name}
                          </h3>
                          <p className="text-xs font-serif italic text-gold-deep mt-0.5">
                            {prog.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-muted font-sans leading-relaxed">
                          {prog.overview}
                        </p>

                        {/* 3 Outcomes */}
                        <div className="pt-3 border-t border-ink/10 space-y-2">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-ink/60 font-bold">
                            Key Learning Outcomes:
                          </div>
                          {prog.outcomes.map((outcome) => (
                            <div
                              key={outcome}
                              className="flex items-start gap-2 text-xs text-ink/85 font-sans"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-gold-deep shrink-0 mt-0.5"
                              />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer CTAs: Book a Spot + Learn More */}
                    <div className="p-6 pt-0 mt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          trackEnrollmentClick(prog.id);
                          openEnquiry('register', 'academy', prog.enquiryOption);
                        }}
                        className="flex-1 py-3.5 px-5 rounded-full bg-gold hover:bg-ink text-ink hover:text-gold font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        {prog.ctaLabel} <ArrowRight size={14} />
                      </button>

                      <Link
                        href="/schedule"
                        className="py-3.5 px-4 rounded-full border border-ink/15 hover:border-ink text-ink font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        Timings
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Tournament Exposure Strip (Dana Cup, Norway Cup, Yangshuo Cup, Gothia Cup) */}
        <div className="rounded-3xl bg-ink text-chalk p-8 sm:p-10 border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold font-bold">
                <Globe size={14} /> International Youth Tournament Pathways
              </span>
              <h3 className="display text-2xl sm:text-4xl uppercase tracking-tight text-white">
                From Kathmandu Valley to the World’s Biggest Stages.
              </h3>
            </div>
            <button
              type="button"
              onClick={() =>
                openEnquiry(
                  'register',
                  'international',
                  'International Tournament Trial Registration'
                )
              }
              className="px-6 py-3 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shrink-0"
            >
              Register for International Trials →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {internationalTournaments.map((t) => (
              <div
                key={t.name}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5"
              >
                <div className="text-[11px] font-mono text-gold font-bold uppercase tracking-wider">
                  {t.country}
                </div>
                <div className="display text-xl uppercase text-white tracking-tight">
                  {t.name}
                </div>
                <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                  {t.highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-chalk/70 font-sans">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold shrink-0" />
              <span>
                Full visa support, safeguarding chaperones, certified coaching staff, and kit packages managed end-to-end by Aurium Sports.
              </span>
            </span>
            <Link
              href="/safeguarding"
              className="text-gold font-bold hover:underline"
            >
              View Child Safeguarding Policy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
