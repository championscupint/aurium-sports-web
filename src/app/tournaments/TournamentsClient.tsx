'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Activity, Shield, BarChart3, CheckCircle2, Sparkles, Trophy, Users } from 'lucide-react';
import { NextSportzCardShowcase } from '@/components/NextSportzCard';
import { TournamentStatsCenter } from '@/components/TournamentStatsCenter';

export function TournamentsClient() {
  const { openEnquiry } = useEnquiry();

  const competitions = [
    {
      title: "Aurium Mini League",
      edition: "3rd Edition Running",
      category: "Grassroots Youth League",
      desc: "Our flagship seasonal league running over several months. Provides young athletes from schools and clubs with regular, competitive weekend matchplay under official refereeing, structured tables, and fair play standards.",
      highlights: [
        "Age groups: U10, U12, U14, U16",
        "Home and away round-robin format",
        "Official ANFA-certified referees",
        "Live standings and top scorer tracking",
      ],
      cta: "Register Team",
    },
    {
      title: "Aurium International Cup",
      edition: "School & Open Editions",
      category: "Premier Cup Tournament",
      desc: "High-stakes cup competition featuring group stages, knockouts, and prestigious championship silverware. Draws teams from leading Kathmandu schools, collegiate sports clubs, and independent academies.",
      highlights: [
        "Group Stage into Cup & Plate knockouts",
        "Live YouTube streaming of semi-finals & finals",
        "Man of the Match & MVP trophies",
        "NextSportz digital player stats integration",
      ],
      cta: "Register Team",
    },
    {
      title: "Corporate & Institutional Cups",
      edition: "Custom Tournaments",
      category: "B2B & Alumni Leagues",
      desc: "Turnkey tournament delivery for corporate sponsors, tech firms, banks, and alumni organizations. Aurium handles pitch booking, fixtures, referees, medical staff, jerseys, and live broadcasting.",
      highlights: [
        "Full turnkey event management",
        "Professional futsal or 7A pitches",
        "Branded jerseys and digital media coverage",
        "Gala dinner & award presentations",
      ],
      cta: "Plan A Tournament",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Competitive Pathways</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Tournaments & Leagues.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Training only becomes meaningful when tested under real competitive pressure. Aurium organizes Nepal’s most professionally structured youth leagues, international tours, and corporate sports events.
          </p>
        </div>
      </section>

      {/* Featured Tournament Hero Photo */}
      <section className="py-12 bg-chalk border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/tournament.jpg"
              alt="Aurium team celebrating trophy win with gold confetti in Kathmandu"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  Next Up: Aurium Mini League 2026
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  School & Club Team Entries Open
                </h3>
              </div>
              <button
                onClick={() => openEnquiry('register', 'tournaments-leagues', 'Aurium Mini League')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs')}
              >
                Register Your Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Cards */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Our Competitive Portfolio</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Leagues, Cups & Corporate Events.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              All competitions strictly adhere to FIFA and ANFA grassroots rules with certified officiating and player health standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitions.map((comp) => (
              <div
                key={comp.title}
                className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-ink text-gold font-mono text-[10px] font-bold uppercase rounded-full">
                      {comp.edition}
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted">
                      {comp.category}
                    </span>
                  </div>

                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-3">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed mb-6">
                    {comp.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-ink/10">
                    {comp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-ink/80 font-sans">
                        <CheckCircle2 size={14} className="text-gold-deep shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-ink/10 flex items-center justify-between">
                  <button
                    onClick={() => openEnquiry('register', 'tournaments-leagues', comp.title)}
                    className="w-full py-3 bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-xs font-bold uppercase rounded-full tracking-wider transition-all"
                  >
                    {comp.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Live Tournament Records & Stats Center */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TournamentStatsCenter />
        </div>
      </section>

      {/* NextSportz Digital Player Card Showcase */}
      <section className="py-24 bg-ink text-chalk grain relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles size={14} /> Official Tech & Sports Science Affiliation
            </div>
            <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              Every Player Gets A <br />
              <span className="accent font-serif italic text-gold normal-case">NextSportz Digital Card.</span>
            </h2>
            <p className="text-base text-chalk/80 font-sans leading-relaxed">
              Aurium Sports integrates directly with **NextSportz** to track every drill, match, and milestone. Below is a live interactive preview of how our academy players build their verified athletic passport.
            </p>
          </div>

          <NextSportzCardShowcase />

          {/* Technology Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                <BarChart3 size={20} />
              </div>
              <h4 className="display text-xl uppercase tracking-wide text-white">
                Training Potential Rating (TPR)
              </h4>
              <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                Rather than arbitrary opinions, player development is scored across 6 technical and physical dimensions using weighted session completion, coach ratings, and matchday performances.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                <Shield size={20} />
              </div>
              <h4 className="display text-xl uppercase tracking-wide text-white">
                Dispute-Free League Operations
              </h4>
              <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                Paper scorecards are eliminated. Team rosters, ANFA referee verifications, cautions, substitutions, and tiebreak math are recorded digitally in real time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                <Users size={20} />
              </div>
              <h4 className="display text-xl uppercase tracking-wide text-white">
                International Scout Visibility
              </h4>
              <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                Whether applying for the Dana Cup in Denmark, regional AFC trials, or school sports scholarships, players carry a permanent, credible digital record of their achievements.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Tournament Registration Call to Action */}
      <section className="py-20 bg-white text-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="eyebrow text-gold-deep justify-center">Host or Join A League</span>
          <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
            Ready To Enter Your Team?
          </h2>
          <p className="text-muted text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Registrations for the upcoming season of the **Aurium Mini League** and **Aurium International Cup** are now open for school squads, youth clubs, and corporate teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openEnquiry('register', 'tournaments-leagues', 'Upcoming Tournament Entry')}
              className={buttonClass('gold', '!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider')}
            >
              Register Team Online
            </button>
            <button
              onClick={() => openEnquiry('inquiry', 'tournaments-leagues', 'Tournament Management Inquiry')}
              className={buttonClass('outline-ink', '!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider')}
            >
              Organize A Corporate Cup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
