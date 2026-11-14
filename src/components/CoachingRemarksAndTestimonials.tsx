'use client';

import React from 'react';
import { coachRemarks, parentPlayerTestimonials } from '@/data/programmes';
import { useEnquiry } from './EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Award, Quote, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export function CoachingRemarksAndTestimonials() {
  const { openEnquiry } = useEnquiry();

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
          PART B: PARENT & PLAYER TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-gold-deep font-mono text-xs uppercase font-bold tracking-widest">
              <Sparkles size={15} /> Trusted By 5,000+ Parents & Players
            </div>
            <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-none">
              What Our Parents &{' '}
              <span className="accent font-serif italic normal-case text-gold-deep">
                Players Say.
              </span>
            </h2>
            <p className="text-muted text-sm sm:text-base font-sans">
              Real experiences from families and young athletes across our Little Ballers, Academy Prep, Foundation, Girls Development, and Invite-Only Elite squads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parentPlayerTestimonials.map((t, idx) => (
              <div
                key={idx}
                className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between space-y-6 shadow-sm ${
                  t.type === 'player'
                    ? 'bg-ink text-chalk border-gold/50'
                    : 'bg-white text-ink border-ink/10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                        t.type === 'player'
                          ? 'bg-gold text-ink'
                          : 'bg-chalk text-gold-deep border border-ink/10'
                      }`}
                    >
                      {t.programmeTag}
                    </span>
                    <Quote
                      size={22}
                      className={
                        t.type === 'player' ? 'text-gold/60' : 'text-gold-deep/40'
                      }
                    />
                  </div>

                  <p
                    className={`text-sm sm:text-base font-sans leading-relaxed italic ${
                      t.type === 'player' ? 'text-chalk/90' : 'text-ink/85'
                    }`}
                  >
                    “{t.quote}”
                  </p>
                </div>

                <div
                  className={`pt-5 border-t flex items-center justify-between ${
                    t.type === 'player' ? 'border-white/10' : 'border-ink/10'
                  }`}
                >
                  <div>
                    <div
                      className={`font-bold text-xs sm:text-sm uppercase tracking-wider ${
                        t.type === 'player' ? 'text-gold' : 'text-ink'
                      }`}
                    >
                      {t.role}
                    </div>
                    <div
                      className={`text-xs font-mono mt-0.5 ${
                        t.type === 'player' ? 'text-chalk/60' : 'text-muted'
                      }`}
                    >
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Booking Callout Bar */}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
