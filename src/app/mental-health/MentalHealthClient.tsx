'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { bust } from '@/data/site';

export function MentalHealthClient() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="eyebrow text-gold-deep">Clinical Foundation</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              Grounded in Clinical Research.
            </h2>
            <p className="text-muted text-sm font-sans mt-3 leading-relaxed">
              Global clinical trials demonstrate that structured physical exercise, supervised team sports, and breathwork significantly lower cortisol, elevate BDNF (brain-derived neurotrophic factor), and prevent youth depressive disorders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="display text-4xl text-gold-deep">1.5×</span>
                <h3 className="display text-xl uppercase tracking-tight text-ink">
                  More Effective Than Counseling Alone
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  A landmark study in the <em>British Journal of Sports Medicine</em> (2023) demonstrated physical activity is 1.5 times more effective in reducing mild-to-moderate depression than pharmacological treatments alone.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-ink/10 text-[10px] font-mono text-muted uppercase">
                Source: BJSM Clinical Review
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="display text-4xl text-gold-deep">60%</span>
                <h3 className="display text-xl uppercase tracking-tight text-ink">
                  Lower Anxiety Symptoms
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Research published in <em>The Lancet Psychiatry</em> examining 1.2 million individuals revealed team sports participation produced the largest reduction in poor mental health days compared to solitary exercise.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-ink/10 text-[10px] font-mono text-muted uppercase">
                Source: The Lancet Psychiatry
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="display text-4xl text-gold-deep">3x</span>
                <h3 className="display text-xl uppercase tracking-tight text-ink">
                  Higher Executive Function
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Harvard Health neuroimaging demonstrates structured sports with fast tactical decisions (like football and basketball) activate the prefrontal cortex, enhancing focus and emotional self-regulation in classrooms.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-ink/10 text-[10px] font-mono text-muted uppercase">
                Source: Harvard Medical School
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The B.U.S.T. Framework in Action */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-ink">Our Practical Implementation</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                The B.U.S.T. Training Model.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              Developed by Aurium Sports to weave mindfulness, physiological readiness, and injury prevention into every single training session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bust.map((b) => (
              <div key={b.letter} className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-ink text-gold flex items-center justify-center display text-2xl mb-6 font-mono">
                    {b.letter}
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-2">
                    {b.word}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {b.letter === 'B' && 'Diaphragmatic breathing and box-breathing to calm the sympathetic nervous system and reset focus before entering high-intensity drills.'}
                    {b.letter === 'U' && 'Dynamic movement, agility ladders, and joint activation routines designed to gradually elevate heart rate and protect developing bodies.'}
                    {b.letter === 'S' && 'Targeted hamstring, groin, hip flexor, and calf mobility routines preventing early growth-plate strains and building bodily durability.'}
                    {b.letter === 'T' && 'Intelligent small-sided match play, tactical decision-making, and teamwork drills that challenge the mind as much as the body.'}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-ink/10 text-[10px] text-muted font-mono uppercase">
                  Duration: {b.letter === 'T' ? '50 mins' : '10-15 mins'}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* School & Parent Workshops */}
      <section className="py-24 bg-white text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow text-gold-deep justify-center">Community Outreach</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Book Mental Health Clinics & Workshops.
            </h2>
            <p className="text-muted text-xs font-sans">
              We bring our sports psychology specialists and certified coaches to schools, parents, and community clubs across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-white text-[10px] font-mono font-bold uppercase tracking-wider text-gold-deep border border-ink/10">
                  Schools & Teachers
                </span>
                <h3 className="display text-2xl uppercase tracking-tight text-ink mt-4 mb-3">
                  Student Athlete Clinic
                </h3>
                <p className="text-xs text-muted font-sans leading-relaxed">
                  Interactive 90-minute workshop on campus. Combines on-pitch breathing games with classroom guidance on managing exam stress and peer competition.
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

            <div className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-white text-[10px] font-mono font-bold uppercase tracking-wider text-gold-deep border border-ink/10">
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

            <div className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-white text-[10px] font-mono font-bold uppercase tracking-wider text-gold-deep border border-ink/10">
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
