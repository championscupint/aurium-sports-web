'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site, stats, journey, bust, weeklyPlan } from '@/data/site';
import { services } from '@/data/services';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { ArrowRight, MessageCircle, ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '@/lib/schema';

export function HomeClient({ faqs }: { faqs: FAQItem[] }) {
  const { openEnquiry } = useEnquiry();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* =========================================================================
          1. HERO SECTION (Cinematic Editorial, Himalayan Golden Hour)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-ink text-chalk grain overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-himalaya.jpg"
            alt="Aurium Sports youth athletes training with Himalayan peaks in background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-65 scale-[1.02] transition-transform duration-1000"
            priority
          />
          {/* Subtle multi-stop gradient for readable contrast without losing photograph beauty */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-end w-full min-h-[85vh]">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold font-sans">
                Kathmandu Valley Grassroots Ecosystem
              </span>
            </div>

            {/* Massive Display Title */}
            <h1 className="display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-6 uppercase">
              Building More Than <span className="accent text-gold font-serif italic normal-case block sm:inline">Footballers.</span>
            </h1>

            <p className="text-base sm:text-xl text-chalk/85 max-w-2xl font-sans leading-relaxed mb-8">
              Nepal’s complete youth sports ecosystem. Academy training across football, basketball, and cricket, sports science, school ECA curricula, and a pioneering <strong className="text-gold font-medium">Sports for Mental Health</strong> model.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiry('register')}
                className={buttonClass('gold', '!py-4 !px-8 text-xs')}
              >
                Enroll A Player
              </button>
              <Link
                href="/programs"
                className={buttonClass('outline-chalk', '!py-4 !px-8 text-xs')}
              >
                Explore 9 Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stat Bar At Base Of Hero */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-ink/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-2 flex items-baseline gap-3">
                <span className="display text-3xl text-gold">{s.value}{s.suffix}</span>
                <span className="text-xs uppercase font-mono tracking-wider text-chalk/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="bg-gold text-ink py-3 border-y border-ink overflow-hidden select-none">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee font-display uppercase tracking-wider text-sm sm:text-base">
          <span>★ THE AURIUM ACADEMY</span>
          <span>•</span>
          <span>DANA CUP DENMARK QUARTER-FINALISTS</span>
          <span>•</span>
          <span>SPORTS FOR MENTAL HEALTH (B.U.S.T.)</span>
          <span>•</span>
          <span>AURIUM SPORTS-ED CURRICULUM</span>
          <span>•</span>
          <span>KATHMANDU • JORPATI • BHAKTAPUR</span>
          <span>•</span>
          <span>THE AURIUM ACADEMY</span>
          <span>•</span>
          <span>DANA CUP DENMARK QUARTER-FINALISTS</span>
          <span>•</span>
          <span>SPORTS FOR MENTAL HEALTH (B.U.S.T.)</span>
          <span>•</span>
          <span>AURIUM SPORTS-ED CURRICULUM</span>
        </div>
      </section>

      {/* Mobile Stats Band */}
      <section className="lg:hidden bg-ink-2 text-chalk py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="display text-3xl text-gold">{s.value}{s.suffix}</div>
              <div className="text-[11px] uppercase font-mono tracking-wider text-chalk/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. CORE PHILOSOPHY & SPORTS FOR MENTAL HEALTH SPOTLIGHT
          ========================================================================= */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-gold-deep">Pioneering Sports Science</span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink leading-tight">
                Not Just Better Athletes. <br />
                <span className="accent font-serif italic text-gold-deep normal-case">Healthier Minds.</span>
              </h2>
              
              <p className="text-base text-muted font-sans leading-relaxed">
                In Nepal, youth sports is frequently reduced to unstructured recreational kicking. Aurium Sports introduces an evidence-backed framework rooted in clinical sports psychology, injury prevention, and emotional resilience.
              </p>

              {/* BUST Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {bust.map((b) => (
                  <div key={b.letter} className="p-4 bg-white rounded-2xl border border-ink/10 shadow-sm flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-ink text-gold flex items-center justify-center display text-xl shrink-0 font-mono">
                      {b.letter}
                    </span>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider text-ink">{b.word}</div>
                      <div className="text-[11px] text-muted font-sans">Every Session</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/mental-health"
                  className={buttonClass('ink', '!py-3.5 !px-8 text-xs')}
                >
                  Explore Mental Health Model →
                </Link>
                <button
                  onClick={() => openEnquiry('inquiry', 'sports-mental-health')}
                  className={buttonClass('outline-ink', '!py-3.5 !px-6 text-xs')}
                >
                  Book School Workshop
                </button>
              </div>
            </div>

            {/* Right: Pitch Visual & Weekly Split */}
            <div className="lg:col-span-6">
              <div className="bg-ink text-chalk rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden grain shadow-2xl">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">Weekly Microcycle</span>
                      <h3 className="display text-2xl uppercase tracking-tight text-white mt-1">3-Day Development Model</h3>
                    </div>
                    <span className="px-3 py-1 bg-white/10 text-chalk text-[11px] font-mono rounded-full">Periodized</span>
                  </div>

                  <div className="space-y-4">
                    {weeklyPlan.map((d) => (
                      <div key={d.day} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display uppercase text-gold text-lg">{d.day}</span>
                          <span className="text-xs font-semibold text-chalk/90">{d.focus}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {d.blocks.map((b) => (
                            <span key={b} className="text-[10px] font-mono px-2 py-1 bg-ink/80 rounded-md text-chalk/80 border border-white/5">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-chalk/60 font-sans italic border-t border-white/10 pt-4">
                    Every session is guided by certified coaches with player check-ins, hydration monitoring, and post-session reflection circles.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. COMPREHENSIVE SERVICES CATALOG (Bento Architecture)
          ========================================================================= */}
      <section className="py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Our Complete Ecosystem</span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink mt-2">
                Nine Pathways to Excellence.
              </h2>
            </div>
            <p className="text-muted text-sm max-w-md font-sans">
              From foundational school classes to international tournament competition, turf infrastructure, and career coaching pathways.
            </p>
          </div>

          {/* Bento Grid: 9 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.slug}
                className="group relative bg-chalk rounded-3xl border border-ink/10 overflow-hidden flex flex-col justify-between hover:border-ink/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Card Top: Image / Motif */}
                <div className="relative h-48 w-full overflow-hidden bg-ink">
                  {svc.image ? (
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink to-ink-2">
                      <span className="display text-6xl text-white/10 tracking-widest uppercase">
                        {svc.motif}
                      </span>
                    </div>
                  )}
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-ink/90 backdrop-blur-md text-gold text-[10px] font-mono uppercase tracking-wider font-bold rounded-full border border-gold/30">
                      {svc.group}
                    </span>
                  </div>

                  {/* Price Tag if available */}
                  {svc.offerings[0]?.meta && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-ink text-[10px] font-mono font-bold rounded-full">
                        {svc.offerings[0].meta}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-gold-deep font-bold uppercase tracking-wider">
                      {svc.kicker}
                    </span>
                    <h3 className="display text-2xl uppercase tracking-tight text-ink mt-1">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-muted font-sans leading-relaxed mt-2 line-clamp-3">
                      {svc.summary}
                    </p>
                  </div>

                  {/* Audience Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {svc.audience.map((a) => (
                      <span key={a} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white border border-ink/10 text-muted">
                        {a}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs font-bold text-ink hover:text-gold-deep flex items-center gap-1 transition-colors"
                    >
                      Details & Syllabus <ArrowRight size={13} />
                    </Link>

                    <button
                      onClick={() => openEnquiry(svc.offerings[0]?.intent || 'register', svc.slug)}
                      className="px-4 py-2 bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-[10px] font-bold uppercase rounded-full tracking-wider transition-all"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className={buttonClass('outline-ink', '!py-3.5 !px-8 text-xs')}
            >
              View Full Program Details & Packages →
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. INTERNATIONAL PATHWAY & DANA CUP SPOTLIGHT
          ========================================================================= */}
      <section className="py-24 bg-ink text-chalk grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-gold">Historic Milestone • Hjørring, Denmark</span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
                Putting Nepal On The <br />
                <span className="accent font-serif italic text-gold normal-case">World Football Map.</span>
              </h2>

              <p className="text-base text-chalk/80 font-sans leading-relaxed">
                In July 2025, Aurium Sports squads traveled to Denmark for the **Dana Cup**—one of the world&apos;s most prestigious youth football tournaments with over 1,000 teams from 45+ nations.
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-gold font-display text-xl uppercase tracking-wide">
                  Dana Cup 2025 Quarter-Finalists
                </div>
                <p className="text-xs text-chalk/70 font-sans leading-relaxed">
                  The **Aurium x Rato Bangala U14 Girls** squad delivered historic performances, advancing through the group stages and knockout rounds into the **Quarter-Finals**—the first time a Nepali youth girls team reached that stage in a European youth tournament.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openEnquiry('inquiry', 'training-camps', 'Dana Cup 2026 Tour')}
                  className={buttonClass('gold', '!py-3.5 !px-8 text-xs')}
                >
                  Join 2026 Denmark Squad Trials
                </button>
                <Link
                  href="/tournaments"
                  className={buttonClass('outline-chalk', '!py-3.5 !px-6 text-xs')}
                >
                  View Tournaments & Leagues →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/stadium-night.jpg"
                  alt="Aurium squads competing on international pitch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="display text-2xl uppercase text-white">Dana Cup, Denmark</div>
                  <div className="text-xs text-gold font-mono uppercase tracking-wider">Hjørring • International Tour</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. THE 6-STAGE PLAYER JOURNEY STEPPER
          ========================================================================= */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-gold-deep justify-center">Long-Term Athletic Development</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              The 6-Stage Aurium Pathway.
            </h2>
            <p className="text-xs text-muted font-sans">
              We guide children from their first discovery of the sport through school competition, elite academy leagues, and life leadership.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((j, idx) => (
              <div
                key={j.step}
                className="p-6 bg-white rounded-2xl border border-ink/10 shadow-sm flex flex-col justify-between h-48 hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-2">
                  <span className="display text-3xl text-gold-deep">0{idx + 1}</span>
                  <h4 className="display text-lg uppercase tracking-tight text-ink">{j.step}</h4>
                </div>
                <p className="text-[11px] text-muted font-sans leading-snug">
                  {j.line}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. FREQUENTLY ASKED QUESTIONS & GEO KNOWLEDGE HUB
          ========================================================================= */}
      <section className="py-24 bg-white text-ink border-b border-ink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-gold-deep font-mono text-xs uppercase font-bold tracking-widest">
              <HelpCircle size={16} /> FAQ & Academy Guide
            </div>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Answers For Parents & Schools.
            </h2>
            <p className="text-xs text-muted font-sans max-w-lg mx-auto">
              Everything you need to know about joining Aurium Sports, training locations across Kathmandu, and our coaching philosophy.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-ink/10 bg-chalk overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display uppercase tracking-tight text-base sm:text-lg text-ink hover:text-gold-deep transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gold-deep transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted font-sans leading-relaxed border-t border-ink/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. LEADERSHIP & QUOTE
          ========================================================================= */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="eyebrow text-gold-deep justify-center">Leadership Philosophy</span>
          
          <blockquote className="display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink max-w-4xl mx-auto leading-tight">
            “People don’t choose Aurium Sports simply because we teach football. They choose us because we <span className="accent font-serif italic normal-case text-gold-deep">develop people.</span>”
          </blockquote>

          <div className="flex flex-col items-center justify-center gap-2 pt-4">
            <span className="font-bold text-xl text-ink">Diwas Agasti</span>
            <span className="text-xs text-gold-deep font-bold uppercase tracking-widest font-mono">
              Sports Director & Owner
            </span>
            <span className="text-xs text-muted font-sans">
              Leading a certified coaching roster of 12+ Goalkeeper and Assistant Coaches across Kathmandu
            </span>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className={buttonClass('outline-ink', '!py-3.5 !px-8 text-xs')}
            >
              Meet The Full Coaching & Technical Team →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FAST ENROLLMENT CALLOUT
          ========================================================================= */}
      <section className="py-20 bg-ink text-chalk relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              Kathmandu Locations • Baneshwor • Jorpati • Bhaktapur
            </span>
            <h2 className="display text-4xl sm:text-5xl uppercase tracking-tight text-white mt-2">
              Start Your Training This Week.
            </h2>
            <p className="text-chalk/70 text-sm mt-3 font-sans">
              Academy admissions and camp registrations are processed directly with our coaching coordinators via WhatsApp or Email.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => openEnquiry('register')}
              className={buttonClass('gold', '!py-4 !px-8 text-xs')}
            >
              Register Player Now
            </button>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-full transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp ({site.phones[0]})
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
