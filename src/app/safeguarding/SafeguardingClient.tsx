'use client';

import React from 'react';
import Link from 'next/link';
import { site } from '@/data/site';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import {
  ShieldCheck,
  HeartHandshake,
  AlertTriangle,
  Stethoscope,
  Users,
  Eye,
  FileCheck,
  Mail,
  Phone,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export function SafeguardingClient() {
  const { openEnquiry } = useEnquiry();

  const pillars = [
    {
      icon: <Users className="text-gold" size={24} />,
      title: 'Vetted & Licensed Coaches',
      description:
        'Every Aurium coach undergoes strict identity verification, background screening, and reference checks. All coaching staff hold accredited ANFA or AFC certifications along with mandatory in-house Child Protection Orientation before taking the pitch.',
    },
    {
      icon: <AlertTriangle className="text-gold" size={24} />,
      title: 'Zero Tolerance for Abuse & Bullying',
      description:
        'We enforce an uncompromising zero-tolerance policy regarding physical intimidation, verbal degradation, peer bullying, sexual misconduct, or psychological distress. Coaching is conducted with positive reinforcement, dignity, and encouragement.',
    },
    {
      icon: <Stethoscope className="text-gold" size={24} />,
      title: 'Pitchside Medical & First Aid Protocols',
      description:
        'A fully certified first-responder and comprehensive trauma kit are present at every academy session, school camp, and tournament match. We operate strict concussion return-to-play protocols and heat/hydration monitoring during high temperatures.',
    },
    {
      icon: <Eye className="text-gold" size={24} />,
      title: 'Open & Observable Training Sessions',
      description:
        'All training environments are open to parents, school representatives, and guardians. Aurium maintains an open-door policy where guardians are welcome to observe drills, post-training debriefs, and match play from designated sideline areas.',
    },
    {
      icon: <FileCheck className="text-gold" size={24} />,
      title: 'Consent & Media Privacy Controls',
      description:
        'Player media, photography, and match broadcast appearances require explicit parental consent. Parents retain the unconditional right to opt out of public promotional features without affecting their child’s training or team selection.',
    },
    {
      icon: <Lock className="text-gold" size={24} />,
      title: 'Confidential Reporting Channels',
      description:
        'Any athlete, parent, or school administrator can report concerns directly to our Designated Safeguarding Officer with guaranteed confidentiality, prompt investigation, and zero fear of retaliation.',
    },
  ];

  const standards = [
    'Minimum 1:12 Coach-to-Player ratio in grassroots age groups (U8–U10) for maximum supervision',
    'Mandatory medical history and emergency contact file for every enrolled student',
    'Clear concussion evaluation procedure aligned with international sports medicine guidelines',
    'Structured B.U.S.T. warm-up & cool-down framework preventing overuse injuries and growth-plate stress',
    'Independent Designated Safeguarding Lead (DSL) reporting directly to the Sports Directorate',
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} /> FIFA Guardians™ Aligned Standard
          </div>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Child Safeguarding & <br />
            <span className="accent font-serif italic text-gold normal-case">
              Player Welfare Policy.
            </span>
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            At Aurium Sports, player safety and emotional wellbeing are non-negotiable. We provide parents, school principals, and partner institutions with the gold standard in youth athletic protection.
          </p>
        </div>
      </section>

      {/* Trust Quote Banner */}
      <section className="py-12 bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-chalk border border-ink/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 max-w-3xl">
              <span className="eyebrow text-gold-deep">Directorate Commitment</span>
              <p className="font-serif italic text-ink text-lg sm:text-xl leading-relaxed">
                &ldquo;We build people before we build footballers. A child who feels safe, respected, and heard is a child who will flourish on the pitch and throughout life.&rdquo;
              </p>
              <div className="text-xs font-mono text-muted pt-1">
                — Diwas Agasti, Sports Director & Owner, Aurium Sports
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-2">
              <button
                onClick={() => openEnquiry('inquiry', 'academy', 'Child Safeguarding Query')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs font-bold uppercase tracking-wider')}
              >
                Inquire With Safeguarding Lead
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Safeguarding Pillars */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="eyebrow text-gold-deep">Our Protection Framework</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              The 6 Safeguarding Commitments.
            </h2>
            <p className="text-xs text-muted font-sans">
              Designed to meet and exceed guidelines set by ANFA, AFC, and leading international private school standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 bg-white rounded-3xl border border-ink/10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-ink flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="display text-xl uppercase tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Operational Safety Standards */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-gold-deep">On-Pitch Safety</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
                Safety In Every Drill, <br />
                Every Session, Every Venue.
              </h2>
              <p className="text-sm text-muted font-sans leading-relaxed">
                Whether training at our central Baneshwor Height headquarters or running after-school programs at partner institutions like Rato Bangala School, Ullens, and Ace, every venue conforms to strict hazard inspections before play commences.
              </p>

              <div className="space-y-3 pt-2">
                {standards.map((std) => (
                  <div key={std} className="flex items-start gap-3 text-xs text-ink/80 font-sans">
                    <CheckCircle2 size={16} className="text-gold-deep shrink-0 mt-0.5" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Designated Safeguarding Contact Card */}
            <div className="lg:col-span-5">
              <div className="bg-ink text-chalk p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-gold">
                    Confidential Reporting Officer
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-white mt-1">
                    Safeguarding Contact Channel
                  </h3>
                  <p className="text-xs text-chalk/70 font-sans mt-2 leading-relaxed">
                    If you have any questions, wish to view our detailed policy documentation, or need to report any incident, please reach out directly:
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/10 text-xs font-sans">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="text-chalk/60 font-mono text-[10px] uppercase">Official Confidential Email</div>
                      <a href={`mailto:${site.email}`} className="text-white font-bold hover:text-gold transition-colors">
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="text-chalk/60 font-mono text-[10px] uppercase">Emergency & Welfare Hotline</div>
                      <a href={`tel:${site.phones[0]}`} className="text-white font-bold hover:text-gold transition-colors">
                        +977 {site.phones[0]}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-chalk/80 leading-relaxed">
                    Reports can be submitted anonymously if preferred. All inquiries are acknowledged within 24 hours by the Directorate.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Institutional Assurance */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="eyebrow text-gold-deep justify-center">For School Administrators</span>
          <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
            School Partner Compliance.
          </h2>
          <p className="text-xs text-muted font-sans leading-relaxed max-w-xl mx-auto">
            Are you a school coordinator or principal seeking ECA integration? Our coaches come fully equipped with background verification folders, insurance endorsements, and institutional safeguarding memorandums.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openEnquiry('partner', 'school-programs', 'School Safeguarding Dossier Request')}
              className={buttonClass('gold', '!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider')}
            >
              Request Safeguarding Compliance Pack
            </button>
            <Link
              href="/contact"
              className={buttonClass('outline-ink', '!py-3.5 !px-8 text-xs font-bold uppercase tracking-wider')}
            >
              Schedule Institutional Meeting →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

