'use client';

import React from 'react';
import { useEnquiry } from '@/components/EnquiryContext';
import { ArrowRight } from 'lucide-react';

export function AnnouncementsClient() {
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
      service: "tournaments-leagues",
    },
    {
      id: "notice-03",
      date: "August 2026",
      tag: "Coaching Roster",
      title: "Coach Recruitment Drive — 2026 Season",
      summary: "Aurium Sports Directorate is expanding its grassroots coaching panel. Certified coaches with AFC, ANFA, or physical education degrees are encouraged to apply for positions across Kathmandu schools.",
      deadline: "Rolling Admissions",
      action: "Apply as Coach",
      intent: "inquiry" as const,
      service: "become-a-trainer",
    },
    {
      id: "notice-04",
      date: "July 2026",
      tag: "International Tours",
      title: "Dana Cup Denmark 2026 Preliminary Scouting Trials",
      summary: "Preliminary scouting begins across our partner schools and academy cohorts to identify boys and girls squads for the 2026 Dana Cup European tour in Hjørring, Denmark.",
      deadline: "Invitation & Scout Selection",
      action: "Trial Details",
      intent: "inquiry" as const,
      service: "talent-scout",
    },
    {
      id: "notice-05",
      date: "June 2026",
      tag: "School ECA",
      title: "SportsEd Curriculum Rollout for Academic Year 2083/2026",
      summary: "Institutional packages are now open for school administrators wishing to integrate the Aurium SportsEd curriculum and coaching staff into their school term timetables.",
      deadline: "Term Planning",
      action: "Book Demo Session",
      intent: "inquiry" as const,
      service: "school-programs",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Official Bulletins</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Announcements & Notices.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Stay up to date with trials, camp registration deadlines, league standings, and institutional announcements from the Aurium Sports Directorate.
          </p>
        </div>
      </section>

      {/* Notices Feed */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {notices.map((n) => (
            <div
              key={n.id}
              className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 bg-ink text-gold font-mono text-[10px] font-bold uppercase rounded-full">
                    {n.tag}
                  </span>
                  <span className="text-xs text-muted font-mono">
                    {n.date}
                  </span>
                </div>

                <h3 className="display text-2xl uppercase tracking-tight text-ink mt-2">
                  {n.title}
                </h3>

                <p className="text-xs text-muted font-sans leading-relaxed">
                  {n.summary}
                </p>

                <div className="text-[11px] font-mono text-gold-deep font-semibold pt-1">
                  Status: {n.deadline}
                </div>
              </div>

              <button
                onClick={() => openEnquiry(n.intent, n.service, n.title)}
                className="shrink-0 px-6 py-3.5 bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-xs font-bold uppercase rounded-full tracking-wider transition-all flex items-center gap-1.5"
              >
                {n.action} <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
