'use client';

import React from 'react';
import { ScheduleLocationFinder } from '@/components/ScheduleLocationFinder';
import { Calendar, MapPin, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { site } from '@/data/site';

export function ScheduleClient() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Calendar size={14} /> Weekly Cohort Timings
          </div>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Training Schedule & <br />
            <span className="accent font-serif italic text-gold normal-case">
              Ground Locations.
            </span>
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Choose a training ground and time slot that fits your child&apos;s routine. We operate across 5 dedicated locations in Kathmandu, Lalitpur, and Bhaktapur with morning, evening, and weekend cohorts.
          </p>
        </div>
      </section>

      {/* Main Interactive Finder */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScheduleLocationFinder />
        </div>
      </section>

      {/* Quick Help Banner */}
      <section className="py-12 bg-white border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="display text-xl uppercase tracking-tight text-ink">
              Need a custom schedule for your school or cohort?
            </h4>
            <p className="text-xs text-muted font-sans mt-0.5">
              Contact our academy coaching desk directly on WhatsApp for transport advice and sibling slot coordination.
            </p>
          </div>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi Aurium Sports, I would like to inquire about training schedules and slot availability.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#20b858] transition-colors flex items-center gap-2 shrink-0 shadow-md"
          >
            <MessageCircle size={16} /> WhatsApp Coordinator
          </a>
        </div>
      </section>
    </div>
  );
}

