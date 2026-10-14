'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site, stats, journey, bust, weeklyPlan } from '@/data/site';
import { services } from '@/data/services';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HomePage() {
  const { openEnquiry } = useEnquiry();

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

            <p className="text-base sm:text-xl text-chalk/90 max-w-2xl font-sans leading-relaxed mb-10">
              We connect grassroots training, school sports departments, holiday camps, and international tournament pathways with our pioneering <strong className="text-gold font-semibold">Sports for Mental Health</strong> model.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiry('register')}
                className={buttonClass('gold', '!py-4 !px-8 text-xs shadow-xl')}
              >
                Join Aurium Academy <ArrowRight size={16} />
              </button>

              <Link
                href="/programs"
                className={buttonClass('outline-chalk', '!py-4 !px-8 text-xs backdrop-blur-sm')}
              >
                Explore Services & School Programs
              </Link>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="display text-3xl md:text-5xl text-gold">
                  {s.value}{s.suffix}
                </span>
                <span className="text-xs uppercase tracking-wider text-chalk/70 font-sans mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MARQUEE / VALUE TICKER
          ========================================================================= */}
      <section className="bg-gold text-ink py-4 border-y border-ink font-display text-lg uppercase tracking-wider overflow-hidden">
        <div className="marquee">
          <div className="marquee__track">
            <span>• YOUTH FOOTBALL ACADEMY</span>
            <span>• DANA CUP QUARTER-FINALISTS</span>
            <span>• SPORTS FOR MENTAL HEALTH</span>
            <span>• AURIUM SPORTSED SCHOOL CURRICULUM</span>
            <span>• BUST TRAINING METHODOLOGY</span>
            <span>• AURIUM MINI LEAGUE</span>
            <span>• BASKETBALL & CRICKET DEVELOPMENT</span>
            <span>• FIFA-QUALITY TURF ARENA</span>
          </div>
          <div className="marquee__track" aria-hidden="true">
            <span>• YOUTH FOOTBALL ACADEMY</span>
            <span>• DANA CUP QUARTER-FINALISTS</span>
            <span>• SPORTS FOR MENTAL HEALTH</span>
            <span>• AURIUM SPORTSED SCHOOL CURRICULUM</span>
            <span>• BUST TRAINING METHODOLOGY</span>
            <span>• AURIUM MINI LEAGUE</span>
            <span>• BASKETBALL & CRICKET DEVELOPMENT</span>
            <span>• FIFA-QUALITY TURF ARENA</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SIGNATURE PILLAR: SPORTS FOR MENTAL HEALTH (Dark, Science-backed)
          ========================================================================= */}
      <section className="py-24 bg-ink text-chalk relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-gold">Our Foundation</span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                Sports For <br /><span className="accent text-gold font-serif italic normal-case">Mental Health.</span>
              </h2>

              <p className="text-chalk/80 leading-relaxed font-sans text-base">
                In Nepal, youth sports have historically prioritized winning matches at all costs. At Aurium, we believe <em>stronger minds build stronger athletes</em>. Our evidence-backed model integrates psychological resilience, emotional check-ins, and post-session self-reflection into every training minute.
              </p>

              {/* BUST Framework Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gold font-mono">
                    The Aurium B.U.S.T. Framework
                  </h4>
                  <span className="text-[11px] text-chalk/50">Used across all sessions</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {bust.map((item) => (
                    <div key={item.word} className="bg-ink p-3 rounded-xl border border-white/10 text-center">
                      <div className="display text-2xl text-gold">{item.letter}</div>
                      <div className="text-xs font-semibold text-chalk mt-0.5">{item.word}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Structured Cycle */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-bold text-chalk/60 font-sans">
                  Weekly 3-Day Development Cycle
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {weeklyPlan.map((p) => (
                    <div key={p.day} className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-[11px] uppercase font-bold text-gold font-mono">{p.day}</div>
                      <div className="text-sm font-bold text-white mt-1">{p.focus}</div>
                      <div className="text-[11px] text-chalk/60 mt-1">SSG, agility & match play</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/mental-health"
                  className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider hover:underline"
                >
                  Read The Science & Harvard/Lancet Case Studies →
                </Link>
              </div>
            </div>

            {/* Right Column: Visual of Reflection Circle */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/wellbeing.jpg"
                  alt="Nepali youth footballers in a guided reflection and breathing circle with coach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-2xl bg-ink/80 backdrop-blur-md border border-white/10 text-xs">
                    <p className="italic text-chalk/90 font-serif">
                      “500+ students and parents engaged through our sports mental health clinics and self-reflection circles across Kathmandu.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICES BENTO GRID (The 9 Core Service Lines)
          ========================================================================= */}
      <section id="services" className="py-24 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-ink">Ecosystem Spectrum</span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-ink mt-2">
                Our Complete <span className="accent font-serif italic normal-case text-gold-deep">Services.</span>
              </h2>
            </div>
            <p className="text-muted max-w-md font-sans text-sm">
              From foundational age-7 training and school curriculums to nationwide tournaments, international tours, and turf infrastructure.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.slug}
                className="offer-card flex flex-col bg-white border border-ink/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Visual Header / Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-ink-2">
                  {svc.image ? (
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink-2 pitch-lines p-6">
                      <span className="display text-7xl text-chalk/10 select-none">
                        {svc.motif}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

                  {/* Kicker badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-gold border border-white/10">
                      {svc.brand || svc.group}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="display text-2xl uppercase tracking-tight text-white">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-gold font-sans font-medium">
                      {svc.kicker}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {svc.summary}
                  </p>

                  {/* Target Audience Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {svc.audience.map((a) => (
                      <span
                        key={a}
                        className="px-2.5 py-0.5 rounded-md bg-chalk-2 text-[10px] font-medium text-ink/80"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  {/* Offerings Mini List */}
                  <div className="pt-2 border-t border-ink/5 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink/60">
                      {svc.offeringsTitle}:
                    </span>
                    <ul className="text-xs space-y-1 text-ink/80 font-medium">
                      {svc.offerings.slice(0, 3).map((o) => (
                        <li key={o.name} className="flex items-center justify-between">
                          <span>• {o.name}</span>
                          {o.meta && <span className="text-[10px] text-muted">{o.meta}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs font-bold text-ink hover:text-gold-deep transition-colors inline-flex items-center gap-1"
                    >
                      Learn More <ArrowRight size={13} />
                    </Link>

                    <button
                      onClick={() => openEnquiry(svc.offerings[0]?.intent || 'inquiry', svc.slug)}
                      className="offer-action px-4 py-2 bg-ink text-chalk text-[11px] font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors"
                    >
                      {svc.offerings[0]?.intent === 'register' ? 'Register' : 'Inquire'}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. INTERNATIONAL PROOF: THE DANA CUP CAMPAIGN
          ========================================================================= */}
      <section className="py-24 bg-ink text-chalk relative grain overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/stadium-night.jpg"
            alt="International tournament stadium"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-gold">Global Exposure</span>
              <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                From Nepal <br /><span className="accent text-gold font-serif italic normal-case">To The World.</span>
              </h2>

              <p className="text-chalk/80 font-sans leading-relaxed text-base">
                Talent is universal, but international opportunity has long been inaccessible for Nepali athletes. Aurium created history at the prestigious <strong className="text-white">Dana Cup in Denmark</strong>, taking boys U12, U14, U16 and fielding Nepal’s first-ever <strong className="text-gold">U14 Girls team</strong> to reach the international Quarter-Finals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="display text-3xl text-gold">HISTORIC</span>
                  <p className="text-xs text-chalk/70 mt-1">1st Nepali U14 girls squad at a major European cup</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="display text-3xl text-gold">QTR-FINAL</span>
                  <p className="text-xs text-chalk/70 mt-1">Quarter-finalists finish against elite global competition</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="display text-3xl text-gold">END-TO-END</span>
                  <p className="text-xs text-chalk/70 mt-1">Visas, camps, kits, and European match logistics</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/services/international"
                  className={buttonClass('gold', '!py-3.5 !px-7 text-xs')}
                >
                  International Tour Details
                </Link>
                <button
                  onClick={() => openEnquiry('inquiry', 'international')}
                  className={buttonClass('outline-chalk', '!py-3.5 !px-7 text-xs')}
                >
                  Join Next Tournament Trial
                </button>
              </div>
            </div>

            {/* Right: Tournament Trophy & Celebration Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/tournament.jpg"
                  alt="Aurium team celebrating tournament championship victory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                    Dana Cup & Aurium Mini League
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. THE AURIUM JOURNEY (Discover -> Play -> Develop -> Compete -> Represent -> Lead)
          ========================================================================= */}
      <section className="py-24 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-ink justify-center">Player Development Pathway</span>
            <h2 className="display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
              The Aurium <span className="accent font-serif italic normal-case text-gold-deep">Journey.</span>
            </h2>
            <p className="text-muted text-sm font-sans">
              Progression is not a straight line, but a continuous cycle of athletic and character development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((j, idx) => (
              <div
                key={j.step}
                className="bg-white p-6 rounded-2xl border border-ink/10 flex flex-col justify-between hover:border-gold hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-gold-deep mb-2">
                    0{idx + 1}
                  </div>
                  <h4 className="display text-2xl uppercase tracking-tight text-ink group-hover:text-gold-deep transition-colors">
                    {j.step}
                  </h4>
                </div>
                <p className="text-xs text-muted font-sans mt-4">
                  {j.line}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. LEADERSHIP & QUOTE
          ========================================================================= */}
      <section className="py-24 bg-white text-ink">
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
