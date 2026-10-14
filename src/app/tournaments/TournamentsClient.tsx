'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Activity, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

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

      {/* NextSportz Digital Analytics Spotlight */}
      <section className="py-20 bg-ink text-chalk grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-gold">Digital Sports Integration</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                Live Data & Player Stats with NextSportz.
              </h2>
              <p className="text-chalk/80 font-sans text-sm leading-relaxed">
                Gone are the days of paper match sheets and lost records. Through our technology partnership with **NextSportz**, every match in Aurium competitions is tracked in real-time.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-chalk/90 font-sans">
                  <BarChart3 className="text-gold shrink-0" size={18} />
                  <span>Individual player profiles tracking goals, assists, minutes played, and clean sheets.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-chalk/90 font-sans">
                  <Activity className="text-gold shrink-0" size={18} />
                  <span>Real-time digital league tables, live score tickers, and automated tiebreak calculations.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-chalk/90 font-sans">
                  <Shield className="text-gold shrink-0" size={18} />
                  <span>Scouting databases for national and international youth scouts.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/data-pitch.jpg"
                  alt="Digital sports tablet tracking tactical stats on football pitch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
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
