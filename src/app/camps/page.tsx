'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Calendar, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

export default function CampsPage() {
  const { openEnquiry } = useEnquiry();

  const camps = [
    {
      name: "Winter Camp",
      season: "Poush – Magh",
      duration: "Est. 2 Weeks",
      desc: "Our premier winter holiday program. High-intensity morning football and sports drills, team bonding, cold-weather conditioning, and end-of-camp award festival.",
      highlight: "Includes Mental Health Day & Awards Ceremony",
      status: "Registrations Open",
    },
    {
      name: "Spring Camp",
      season: "Chaitra",
      duration: "Est. 10 Days",
      desc: "Fresh start right after annual school exams. Focus on technical agility, cone dribbling drills, positional awareness, and rebuilding fitness.",
      highlight: "Skill Assessment Report Cards provided",
      status: "Upcoming",
    },
    {
      name: "Summer Camp",
      season: "Asar – Shrawan",
      duration: "Est. 2 Weeks",
      desc: "Beat the school vacation slump with high-energy daily morning sessions in football, basketball, and fun multi-sport challenges.",
      highlight: "Includes hydrations, tactical workshops & matchdays",
      status: "Upcoming",
    },
    {
      name: "Dashain Camp",
      season: "Ashwin – Kartik",
      duration: "Est. 1 Week",
      desc: "Fast-paced holiday camp keeping kids active and mentally refreshed through Nepal's major festive break.",
      highlight: "Small-sided tournaments & festival fixtures",
      status: "Seasonal",
    },
    {
      name: "Session-End Camp",
      season: "Falgun – Chaitra",
      duration: "Est. 1 Week",
      desc: "Wrap up the school session with intensive player evaluations, team trials, and selection for elite traveling squads.",
      highlight: "Talent scout trials & elite squad placement",
      status: "Upcoming",
    },
    {
      name: "Closed Camp",
      season: "Pre-Tournament",
      duration: "Intensive 5–7 Days",
      desc: "Rigorous, invitation-only tactical preparation camp for academy teams preparing for national leagues or international tours like the Dana Cup.",
      highlight: "Video analysis & tactical match scenarios",
      status: "By Selection Only",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Holiday Athletic Intensives</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Holiday Training Camps.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            School breaks shouldn’t mean sedentary days in front of screens. Aurium training camps provide structured morning athletic training, joy, resilience, and new friendships.
          </p>
        </div>
      </section>

      {/* Hero Showcase Photo */}
      <section className="py-12 bg-chalk border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[300px] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/camp.jpg"
              alt="Nepali youth football camp team huddle on a crisp winter morning"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  All Kathmandu Locations
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  Team Huddle & Morning Conditioning
                </h3>
              </div>
              <button
                onClick={() => openEnquiry('register', 'training-camps')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs')}
              >
                Register For Next Camp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Pillars */}
      <section className="py-16 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-chalk border border-ink/10 space-y-2">
              <Award className="text-gold-deep" size={24} />
              <h3 className="display text-xl uppercase">Every Player Recognized</h3>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Every camp culminates in a festival ceremony with official Aurium completion certificates, MVP awards, and parent showcase games.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-chalk border border-ink/10 space-y-2">
              <HeartHandshake className="text-gold-deep" size={24} />
              <h3 className="display text-xl uppercase">Dedicated Mental Health Day</h3>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Each camp includes workshops on self-confidence, dealing with competition pressure, emotional check-ins, and supportive sportsmanship.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-chalk border border-ink/10 space-y-2">
              <Calendar className="text-gold-deep" size={24} />
              <h3 className="display text-xl uppercase">Coached by Mentors</h3>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Led by AFC and ANFA licensed coaching staff who prioritize player safety, positive communication, and individualized feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Cards */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <span className="eyebrow text-ink">Annual Calendar</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              Seasonal Camp Editions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp) => (
              <div
                key={camp.name}
                className="bg-white p-8 rounded-3xl border border-ink/10 flex flex-col justify-between hover:border-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-ink text-chalk text-[10px] font-bold uppercase tracking-wider font-mono">
                      {camp.season}
                    </span>
                    <span className="text-xs font-semibold text-gold-deep">
                      {camp.duration}
                    </span>
                  </div>

                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-2 group-hover:text-gold-deep transition-colors">
                    {camp.name}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed mb-4">
                    {camp.desc}
                  </p>

                  <div className="p-3 bg-chalk-2 rounded-xl text-[11px] font-medium text-ink/80 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>{camp.highlight}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ink/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted">
                    {camp.status}
                  </span>
                  <button
                    onClick={() => openEnquiry('register', 'training-camps', camp.name)}
                    className="px-5 py-2.5 bg-gold text-ink text-xs font-bold uppercase tracking-wider rounded-full hover:bg-ink hover:text-chalk transition-colors"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
