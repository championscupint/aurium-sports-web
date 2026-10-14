'use client';

import React from 'react';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { ArrowRight } from 'lucide-react';

export default function AnnouncementsPage() {
  const { openEnquiry } = useEnquiry();

  const notices = [
    {
      id: "notice-01",
      date: "October 2026",
      tag: "Admissions & Camps",
      title: "Winter Training Camp 2026 Registrations Open",
      summary: "Registrations are now officially live for the annual Winter Football & Multi-Sport Camp. Morning slots available across all Kathmandu centers. Limited to 25 players per coaching cluster for individual attention.",
      deadline: "Closes when slots are filled",
      action: "Register Player",
      intent: "register" as const,
      service: "training-camps",
    },
    {
      id: "notice-02",
      date: "September 2026",
      tag: "Tournament Notice",
      title: "Aurium Mini League — 3rd Edition Matchday Schedules",
      summary: "Official fixtures, tie sheets, and venue details for the upcoming weekend matches in the Aurium Mini League. Team managers are requested to review age verification cards before matchday kickoff.",
      deadline: "Active Tournament",
      action: "Inquire / View Fixtures",
      intent: "inquiry" as const,
      service: "tournaments",
    },
    {
      id: "notice-03",
      date: "August 2026",
      tag: "International Tour",
      title: "Dana Cup & International Showcase Trials Callout",
      summary: "Open scouting trials for the upcoming European and Asian youth tournament squads (Boys U12, U14, U16 and Girls U14). Players with competitive experience are invited to attend.",
      deadline: "Trial dates announced monthly",
      action: "Register For Trial",
      intent: "inquiry" as const,
      service: "international",
    },
    {
      id: "notice-04",
      date: "July 2026",
      tag: "Coach Recruitment",
      title: "Open Call: Grassroots Coaches & School ECA Instructors",
      summary: "Aurium SportsEd is hiring licensed and passionate football, basketball, and physical development trainers for new partner school clusters in Kathmandu and Lalitpur.",
      deadline: "Rolling applications",
      action: "Apply as Coach",
      intent: "apply" as const,
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Official Bulletins</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Notices & Announcements.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Stay updated with upcoming tournament fixture lists, seasonal holiday camp registrations, trial calls, and official academy news.
          </p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-ink/10">
            <span className="text-xs uppercase font-mono font-bold text-muted">
              Latest Published Notices
            </span>
            <span className="text-xs font-mono font-bold text-gold-deep">
              Updated Live
            </span>
          </div>

          <div className="space-y-6">
            {notices.map((n) => (
              <div
                key={n.id}
                className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-0.5 rounded-full bg-chalk-2 text-ink/80 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {n.tag}
                    </span>
                    <span className="text-xs text-muted font-mono">
                      {n.date}
                    </span>
                    <span className="text-[11px] text-gold-deep font-semibold">
                      • {n.deadline}
                    </span>
                  </div>

                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {n.title}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {n.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center">
                  <button
                    onClick={() => openEnquiry(n.intent, n.service)}
                    className="px-6 py-3.5 bg-ink text-chalk text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {n.action} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice CTA */}
          <div className="p-8 rounded-3xl bg-white border border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="display text-xl uppercase tracking-tight text-ink">
                Need Official Verification or Letters?
              </h4>
              <p className="text-xs text-muted font-sans mt-1">
                For school administrative NOCs, tournament eligibility queries, or scholarship letters.
              </p>
            </div>
            <button
              onClick={() => openEnquiry('inquiry')}
              className={buttonClass('outline-ink', '!py-3 !px-6 text-xs')}
            >
              Contact Administration
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
