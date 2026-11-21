'use client';

import React, { useState, useRef } from 'react';
import { coachRemarks, parentPlayerTestimonials } from '@/data/programmes';
import { site } from '@/data/site';
import { useEnquiry } from './EnquiryContext';
import { buttonClass } from '@/lib/ui';
import {
  Award,
  Quote,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const AFFILIATION_FILTERS = [
  'All',
  'Academy Parent',
  'Training Venue',
  'Partner School',
] as const;

export function CoachingRemarksAndTestimonials() {
  const { openEnquiry } = useEnquiry();
  const [activeFilter, setActiveFilter] =
    useState<(typeof AFFILIATION_FILTERS)[number]>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredTestimonials =
    activeFilter === 'All'
      ? parentPlayerTestimonials
      : parentPlayerTestimonials.filter(
          (t) => t.affiliationType === activeFilter
        );

  const handleFilterChange = (filter: (typeof AFFILIATION_FILTERS)[number]) => {
    setActiveFilter(filter);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* =========================================================================
          PART A: PROFESSIONAL REMARKS FROM OUR COACHING DIRECTORATE (NO NAMES)
          ========================================================================= */}
      <section className="py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="eyebrow text-gold-deep">
                Coaching Directorate & Technical Philosophy
              </span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-none">
                Guided By Certified{' '}
                <span className="accent font-serif italic normal-case text-gold-deep">
                  Specialists.
                </span>
              </h2>
              <p className="text-muted font-sans text-sm sm:text-base leading-relaxed">
                Our 12+ certified coaching directorate combines international academy pedagogy, specialist goalkeeping instruction, sports-science conditioning, and clinical mental wellbeing protocols across every age group.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-chalk border border-ink/10 text-xs font-mono font-bold text-ink shrink-0">
              <ShieldCheck size={16} className="text-gold-deep" />
              <span>100% Background-Verified & First-Aid Certified Staff</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coachRemarks.map((item) => (
              <div
                key={item.department}
                className="p-8 sm:p-10 rounded-3xl bg-chalk border border-ink/10 hover:border-gold transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-deep font-bold">
                      {item.focusPillar}
                    </span>
                  </div>

                  <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-ink leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {item.remark}
                  </p>
                </div>

                <div className="pt-5 border-t border-ink/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-ink uppercase tracking-wide">
                      {item.department}
                    </div>
                    <div className="text-xs text-gold-deep font-mono">
                      {item.roleTitle}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-ink text-gold flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PART B: 12 AUTHENTIC & TACTICAL PARENT TESTIMONIALS
          (Horizontal Left-to-Right Scroll Carousel)
          ========================================================================= */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-gold-deep font-mono text-xs uppercase font-bold tracking-widest">
                <Sparkles size={15} /> Trusted By 5,000+ Academy & Partner School Parents
              </div>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-none">
                What Our Parents{' '}
                <span className="accent font-serif italic normal-case text-gold-deep">
                  Say.
                </span>
              </h2>
              <p className="text-muted text-sm sm:text-base font-sans">
                Swipe or scroll left to right to explore tactical feedback from Academy Parents across our 5 Training Venues and Partner Schools in Kathmandu, Lalitpur, and Bhaktapur.
              </p>
            </div>

            {/* Filter Pills + Prev/Next Scroll Controls */}
            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {AFFILIATION_FILTERS.map((filter) => {
                  const isActive = activeFilter === filter;
                  const label =
                    filter === 'All'
                      ? `All (${parentPlayerTestimonials.length})`
                      : `${filter}s`;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => handleFilterChange(filter)}
                      className={`px-4 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-ink text-gold shadow-sm'
                          : 'bg-white text-muted hover:text-ink border border-ink/10'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollByAmount('left')}
                  aria-label="Scroll testimonials left"
                  className="w-10 h-10 rounded-full bg-white border border-ink/15 text-ink hover:bg-ink hover:text-gold transition-colors flex items-center justify-center shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByAmount('right')}
                  aria-label="Scroll testimonials right"
                  className="w-10 h-10 rounded-full bg-ink text-gold hover:bg-gold hover:text-ink transition-colors flex items-center justify-center shadow-sm"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Left-to-Right Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredTestimonials.map((t, idx) => (
              <div
                key={`${t.childName}-${idx}`}
                className="w-[85vw] sm:w-[370px] lg:w-[400px] shrink-0 snap-start p-7 sm:p-8 rounded-3xl bg-white text-ink border border-ink/10 hover:border-gold-deep/50 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Badges: Affiliation Type + Quote Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-wider">
                      {t.affiliationType}
                    </span>
                    <div className="flex items-center gap-1 text-gold-deep">
                      <span className="text-[10px] font-mono text-muted mr-1">
                        {String(idx + 1).padStart(2, '0')} /{' '}
                        {String(filteredTestimonials.length).padStart(2, '0')}
                      </span>
                      <Quote size={20} className="text-gold-deep/40 shrink-0" />
                    </div>
                  </div>

                  {/* Training Venue / Partner School Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-chalk border border-ink/10 text-[11px] font-mono font-bold text-gold-deep max-w-full">
                    <MapPin size={12} className="shrink-0" />
                    <span className="truncate">{t.venueOrSchool}</span>
                  </div>

                  {/* Tactical Parent Quote */}
                  <p className="text-xs sm:text-sm font-sans leading-relaxed italic text-ink/85">
                    “{t.quote}”
                  </p>
                </div>

                {/* Card Footer: Parent of Child Name, Programme & Location */}
                <div className="pt-5 border-t border-ink/10 space-y-1">
                  <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-ink">
                    {t.role}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                    <span className="truncate">{t.programmeTag}</span>
                    <span className="shrink-0 ml-2">• {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Booking & Google Review Callout Bar */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-gold/50 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                Ages 3 to 16 • Boys & Girls • All Skill Levels
              </span>
              <h3 className="display text-2xl sm:text-4xl uppercase tracking-tight text-ink">
                Ready to Book Your Child’s Spot?
              </h3>
              <p className="text-xs sm:text-sm text-muted font-sans">
                Select your child’s age group—from Little Ballers (Ages 3–5) and Academy Prep (Ages 6–8) to Foundation, Youth Development, or Elite Trial assessment.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openEnquiry('register', 'academy')}
                className={buttonClass('gold', '!py-4 !px-8 text-xs shadow-md')}
              >
                Book a Spot Now <ArrowRight size={14} />
              </button>
              <a
                href={site.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass(
                  'outline-ink',
                  '!py-4 !px-6 text-xs inline-flex items-center gap-1.5'
                )}
              >
                <Star size={14} className="text-gold-deep fill-gold" /> Review Us
                on Google
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
