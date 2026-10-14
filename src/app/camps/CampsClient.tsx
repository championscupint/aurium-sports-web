'use client';

import React from 'react';
import Image from 'next/image';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Calendar, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

export function CampsClient() {
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
      desc: "Short, dynamic holiday football clinic keeping youth active before festive family celebrations.",
      highlight: "Small-sided World Cup tournaments & medals",
      status: "Upcoming",
    },
    {
      name: "Session-End Camp",
      season: "Between Terms",
      duration: "5–7 Days",
      desc: "Fast-paced refresher camp targeting specific tactical roles: finishing, 1v1 defending, and goalkeeper clinics.",
      highlight: "Intensive position-specific training",
      status: "Upcoming",
    },
    {
      name: "Closed School Camps",
      season: "Custom Dates",
      duration: "Flexible",
      desc: "Exclusive training camp delivered on-campus or at our partner venues for a single school’s sports squads.",
      highlight: "Custom curriculum designed for school teams",
      status: "Available for Booking",
    },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Seasonal Programs</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Holiday Training Camps.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            School holidays should not mean weeks of screen time. Aurium Holiday Camps bring together hundreds of boys and girls across Kathmandu for immersive, joyful, and disciplined athletic development.
          </p>
        </div>
      </section>

      {/* Featured Camp Hero Photo */}
      <section className="py-12 bg-chalk border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] min-h-[320px] rounded-3xl overflow-hidden border border-ink/10 shadow-lg">
            <Image
              src="/images/camp.jpg"
              alt="Aurium Sports youth athletes in huddle during winter football camp"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  Next Up: Winter Camp 2026
                </span>
                <h3 className="display text-2xl sm:text-4xl uppercase text-white mt-1">
                  Poush – Magh Intake Now Enrolling
                </h3>
              </div>
              <button
                onClick={() => openEnquiry('register', 'training-camps', 'Winter Camp')}
                className={buttonClass('gold', '!py-3 !px-6 text-xs')}
              >
                Register For Camp Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Lineup Grid */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Year-Round Calendar</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Our 6 Seasonal Camps.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              Every camp includes certified coaches, first-aid presence, evaluation report cards, and an official participation certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp) => (
              <div
                key={camp.name}
                className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-ink text-gold font-mono text-[10px] font-bold uppercase rounded-full">
                      {camp.season}
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted">
                      {camp.duration}
                    </span>
                  </div>

                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-2">
                    {camp.name}
                  </h3>

                  <p className="text-xs text-muted font-sans leading-relaxed mb-6">
                    {camp.desc}
                  </p>

                  <div className="p-3 bg-white rounded-2xl border border-ink/10 text-[11px] font-sans text-ink/80 flex items-center gap-2">
                    <Award size={16} className="text-gold-deep shrink-0" />
                    <span>{camp.highlight}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-ink/10 flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                    camp.status === 'Registrations Open' ? 'text-green-600 font-bold' : 'text-muted'
                  }`}>
                    {camp.status}
                  </span>

                  <button
                    onClick={() => openEnquiry('register', 'training-camps', camp.name)}
                    className="px-4 py-2 bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-[10px] font-bold uppercase rounded-full tracking-wider transition-all"
                  >
                    Enroll Player
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* What Every Camper Receives */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="eyebrow text-gold-deep justify-center">The Aurium Standard</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Included With Every Camp Registration.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
              <CheckCircle2 className="text-gold-deep" size={24} />
              <h4 className="display text-lg uppercase text-ink">Official Training Kit</h4>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Breathable customized Aurium camp jersey and training gear.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
              <Award className="text-gold-deep" size={24} />
              <h4 className="display text-lg uppercase text-ink">Camp Certificate</h4>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Official recognized certificate of completion with coach endorsement.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
              <Calendar className="text-gold-deep" size={24} />
              <h4 className="display text-lg uppercase text-ink">Skill Evaluation</h4>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Detailed player progress report card tracking technical and physical growth.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
              <HeartHandshake className="text-gold-deep" size={24} />
              <h4 className="display text-lg uppercase text-ink">Mental Health Workshop</h4>
              <p className="text-xs text-muted font-sans leading-relaxed">
                Special session on team resilience, leadership, and emotional regulation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
