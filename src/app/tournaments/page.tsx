'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Activity, Shield, ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';

export default function TournamentsPage() {
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
      edition: "Custom Management",
      category: "Turnkey Tournament Delivery",
      desc: "End-to-end tournament management for corporate houses, tech companies, banking institutions, and alumni networks looking for professional sports days and weekend futsal tournaments.",
      highlights: [
        "Fixtures, tie sheets, and RACI planning",
        "Venue reservation and match-ball provision",
        "Full medical first-aid on pitch",
        "Custom branded merchandise & trophies",
      ],
      cta: "Book Tournament",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Meaningful Competition</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Tournaments & Leagues.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Training without competition leaves potential untested. We run Nepal’s most organized grassroots youth leagues and provide end-to-end tournament management for schools, colleges, and corporations.
          </p>
        </div>
      </section>

      {/* Hero Tournament Visual */}
      <section className="py-12 bg-chalk border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[300px] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/tournament.jpg"
              alt="Aurium youth players lifting champions trophy on the pitch with confetti"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  Aurium Cup Champions
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  Celebrating Grassroots Champions
                </h3>
              </div>
              <button
                onClick={() => openEnquiry('register', 'tournaments')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs')}
              >
                Enter Your Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Formats */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Our Properties</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Leagues & Tournaments.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              From continuous weekend league play to corporate sports days and national cup formats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {competitions.map((comp) => (
              <div
                key={comp.title}
                className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-ink text-chalk text-[10px] font-bold uppercase tracking-wider font-mono">
                      {comp.category}
                    </span>
                    <span className="text-xs font-semibold text-gold-deep">
                      {comp.edition}
                    </span>
                  </div>

                  <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-3">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed mb-6">
                    {comp.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-ink/10">
                    {comp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-ink/10">
                  <button
                    onClick={() => openEnquiry(comp.cta === 'Register Team' ? 'register' : 'inquiry', 'tournaments', comp.title)}
                    className="w-full py-3.5 bg-ink text-chalk text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors flex items-center justify-center gap-2"
                  >
                    {comp.cta} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tech & Data Partnership: NextSportz */}
      <section className="py-20 bg-ink text-chalk grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-gold">Digital Infrastructure</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white">
                Powered by NextSportz.
              </h2>
              <p className="text-chalk/80 font-sans text-sm leading-relaxed">
                Modern competitions demand real-time data. Through our digital partner <strong className="text-gold">NextSportz</strong>, all Aurium tournaments feature live scoring, verified player rosters, electronic match cards, goal tracking, and digital scouting profiles.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Activity size={20} className="text-gold shrink-0" />
                  <span className="text-xs text-chalk/90 font-medium">Instant live score updates & standings</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <BarChart3 size={20} className="text-gold shrink-0" />
                  <span className="text-xs text-chalk/90 font-medium">Individual goals, assists, and disciplinary logs</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Shield size={20} className="text-gold shrink-0" />
                  <span className="text-xs text-chalk/90 font-medium">Anti-age fraud and player card verification</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/data-pitch.jpg"
                  alt="NextSportz digital soccer pitch data analytics interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
