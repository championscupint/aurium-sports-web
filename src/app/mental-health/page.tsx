'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { bust, weeklyPlan } from '@/data/site';
import { BookOpen, Brain, CheckCircle2 } from 'lucide-react';

export default function MentalHealthPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Our Core Philosophy</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Sports For Mental Health.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Athletic performance and mental wellbeing are inseparable. Aurium Sports pioneers a scientifically verified model using physical sport to reduce anxiety, build emotional resilience, and foster supportive communities for youth in Nepal.
          </p>
        </div>
      </section>

      {/* Hero Documentary Image */}
      <section className="py-12 bg-chalk border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/wellbeing.jpg"
              alt="Coach and children in peaceful reflection circle on football pitch in Kathmandu valley"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  Post-Training Mindful Rituals
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  Guided Reflection & Breathwork
                </h3>
              </div>
              <button
                onClick={() => openEnquiry('inquiry', 'sports-for-mental-health')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs')}
              >
                Book School or Parent Workshop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Science & Studies */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-deep">Clinical Evidence</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              The Science Behind Our Methods.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-chalk border border-ink/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gold-deep">
                <Brain size={16} /> Harvard Medical School
              </div>
              <h3 className="display text-2xl uppercase tracking-tight text-ink">
                Exercise & Neuroplasticity
              </h3>
              <blockquote className="text-xs sm:text-sm text-muted font-serif italic border-l-2 border-gold-deep pl-4 leading-relaxed">
                “Engaging in 30 minutes of structured, moderate cardiovascular activity stimulates neurogenesis, enhances mood regulation, and significantly decreases acute symptoms of anxiety in adolescents.”
              </blockquote>
              <p className="text-xs text-muted font-sans leading-relaxed">
                At Aurium, training sessions are calibrated with target heart rate periods to naturally stimulate dopamine, serotonin, and endorphin release.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-chalk border border-ink/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gold-deep">
                <BookOpen size={16} /> The Lancet Psychiatry (2018)
              </div>
              <h3 className="display text-2xl uppercase tracking-tight text-ink">
                Population Mental Health Impact
              </h3>
              <blockquote className="text-xs sm:text-sm text-muted font-serif italic border-l-2 border-gold-deep pl-4 leading-relaxed">
                “In a landmark study of 1.2 million individuals, those participating in regular team sports experienced 22.3% fewer poor mental health days per month compared to sedentary peers.”
              </blockquote>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Team sports foster social belonging and protective psychological buffers against academic burnout and social anxiety.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* The B.U.S.T Framework & Periodization */}
      <section className="py-20 bg-ink text-chalk grain relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div>
            <span className="eyebrow text-gold">Methodology in Action</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white mt-2">
              The B.U.S.T. Framework.
            </h2>
            <p className="text-chalk/70 text-sm max-w-xl font-sans mt-3">
              Every training session follows a strict physiological and emotional protocol:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bust.map((b) => (
              <div key={b.word} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <span className="display text-5xl text-gold">{b.letter}</span>
                <h4 className="display text-xl uppercase text-white mt-2 mb-1">{b.word}</h4>
                <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                  {b.letter === 'B' && 'Controlled nasal diaphragmatic breathing to settle the nervous system and increase oxygenation before kickoff.'}
                  {b.letter === 'U' && 'Dynamic movement preparation: joint mobility, neuromuscular activation, and progressive blood flow.'}
                  {b.letter === 'S' && 'Dynamic active stretching tailored to prevent youth groin, knee, and hamstring tightness.'}
                  {b.letter === 'T' && 'Targeted technical drills, decision-making under match conditions, and game scenario play.'}
                </p>
              </div>
            ))}
          </div>

          {/* 3-Day Cycle Table */}
          <div className="space-y-6 pt-6">
            <h3 className="display text-2xl uppercase tracking-tight text-white">
              Weekly 3-Day Periodization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {weeklyPlan.map((plan) => (
                <div key={plan.day} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs text-gold uppercase font-bold">{plan.day}</span>
                    <span className="text-sm font-bold text-white">{plan.focus}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-chalk/80 font-sans">
                    {plan.blocks.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-gold shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Workshop Offerings */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Outreach Clinics</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Workshops & Programs.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              Bring our Sports for Mental Health facilitators to your school, club, or corporate organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-ink/10 flex flex-col justify-between shadow-sm">
              <div>
                <span className="px-3 py-1 rounded-full bg-chalk-2 text-[10px] font-mono font-bold uppercase tracking-wider text-ink/70">
                  Schools & Colleges
                </span>
                <h3 className="display text-2xl uppercase tracking-tight text-ink mt-4 mb-3">
                  Student Athlete Clinic
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Interactive 90-minute workshop combining physical movement games with safe spaces to discuss academic pressure, anxiety, and self-confidence.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-ink/10">
                <button
                  onClick={() => openEnquiry('inquiry', 'sports-for-mental-health', 'Student Athlete Clinic')}
                  className="w-full py-3 bg-ink text-chalk text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors"
                >
                  Book For School
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-ink/10 flex flex-col justify-between shadow-sm">
              <div>
                <span className="px-3 py-1 rounded-full bg-chalk-2 text-[10px] font-mono font-bold uppercase tracking-wider text-ink/70">
                  Parents & Guardians
                </span>
                <h3 className="display text-2xl uppercase tracking-tight text-ink mt-4 mb-3">
                  Parent Wellbeing Forum
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Guided session helping parents cultivate positive sideline behavior, support their children through competitive setbacks, and foster healthy emotional resilience.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-ink/10">
                <button
                  onClick={() => openEnquiry('inquiry', 'sports-for-mental-health', 'Parent Wellbeing Forum')}
                  className="w-full py-3 bg-ink text-chalk text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors"
                >
                  Book Parent Session
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-ink/10 flex flex-col justify-between shadow-sm">
              <div>
                <span className="px-3 py-1 rounded-full bg-chalk-2 text-[10px] font-mono font-bold uppercase tracking-wider text-ink/70">
                  Institutions & NGOs
                </span>
                <h3 className="display text-2xl uppercase tracking-tight text-ink mt-4 mb-3">
                  Custom Sport-for-Good
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Community interventions, post-disaster physical activity programs, and youth development partnerships aligned with UN Sustainable Development Goals.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-ink/10">
                <button
                  onClick={() => openEnquiry('inquiry', 'sports-for-mental-health', 'Custom Sport-for-Good')}
                  className="w-full py-3 bg-ink text-chalk text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
