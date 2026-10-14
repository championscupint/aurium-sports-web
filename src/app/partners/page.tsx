'use client';

import React from 'react';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Building2, Globe2 } from 'lucide-react';

export default function PartnersPage() {
  const { openEnquiry } = useEnquiry();

  const schoolPartners = [
    { name: "Rato Bangala School", desc: "Collaborative Dana Cup Denmark U14 Girls campaign partner and academic sports exchange." },
    { name: "Sanskriti International School", desc: "International tournament partner and sports education curriculum adopter." },
    { name: "Galaxy Public School", desc: "Grassroots school football program and student athlete training partner." },
    { name: "Mount View English Boarding School", desc: "Long-term sports education academy partnership and holiday training camps." },
    { name: "Orchid College", desc: "Collegiate sports management, youth coaching and futsal training partnership." },
    { name: "LRI School", desc: "ECA training, holiday sports camp delivery and youth athletic development." },
  ];

  const affiliations = [
    { name: "Dana Cup Hjørring", location: "Denmark", note: "One of the world's largest youth football tournaments; regular participant & quarter-finalists." },
    { name: "ISCA", location: "International", note: "International Sport and Culture Association affiliation for grassroots sport-for-all." },
    { name: "ICSSPE", location: "Global", note: "International Council of Sports Science and Physical Education research and coaching member." },
    { name: "Atlético Barranco Hondo", location: "Spain / Asia Chapter", note: "International club affiliation and European coaching curriculum exchange." },
    { name: "Project Play", location: "Global", note: "Movement for youth physical literacy and equitable access to sports regardless of income." },
  ];

  const venueTechPartners = [
    { name: "NextSportz", type: "Digital Partner", note: "Live scoring, digital player profiling, match analytics and electronic tournament operations across Nepal." },
    { name: "Euro Futsal", type: "Venue Partner", note: "Academy training center in Kathmandu valley hosting regular weekly sessions." },
    { name: "Sirutar Futsal", type: "Venue Partner", note: "Grassroots training camp and community tournament hosting facility." },
    { name: "Pasikot Budanilkantha", type: "Upcoming Hub", note: "Proposed flagship Aurium Arena 007 site featuring 7A futsal court, gym, recovery, and pool." },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Collaborative Network</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Our Partners & Affiliations.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Building a nationwide sports ecosystem requires deep institutional collaboration. We are proud to work with leading schools, global tournament bodies, and venue operators.
          </p>
        </div>
      </section>

      {/* Institutional School Partners */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="eyebrow text-ink">Education & Academics</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              Partner Schools & Colleges.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolPartners.map((school) => (
              <div
                key={school.name}
                className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-chalk-2 flex items-center justify-center text-ink mb-4">
                    <Building2 size={24} />
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-2">
                    {school.name}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {school.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-ink/10">
                  <span className="text-[10px] font-mono uppercase font-bold text-gold-deep">
                    Academic Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Affiliations */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="eyebrow text-gold-deep">International Footprint</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              Global Affiliations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliations.map((aff) => (
              <div
                key={aff.name}
                className="bg-chalk p-8 rounded-3xl border border-ink/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Globe2 size={24} className="text-gold-deep" />
                    <span className="text-xs font-mono font-bold uppercase text-muted">
                      {aff.location}
                    </span>
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-2">
                    {aff.name}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {aff.note}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-ink/10">
                  <span className="text-[10px] font-mono uppercase font-bold text-ink/70">
                    International Pathway
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & Technology */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="eyebrow text-ink">Venues & Technology</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              Infrastructure Partners.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venueTechPartners.map((vt) => (
              <div
                key={vt.name}
                className="bg-white p-6 rounded-2xl border border-ink/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-gold-deep block mb-2">
                    {vt.type}
                  </span>
                  <h3 className="display text-xl uppercase tracking-tight text-ink mb-2">
                    {vt.name}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {vt.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Callout */}
      <section className="py-20 bg-ink text-chalk grain relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="eyebrow text-gold justify-center">Join The Network</span>
          <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white max-w-3xl mx-auto">
            Become a Partner or Sponsor.
          </h2>
          <p className="text-chalk/80 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Whether you represent a corporate brand seeking youth sports sponsorship, a school looking for a complete ECA sports department, or a venue owner seeking high occupancy.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openEnquiry('partner')}
              className={buttonClass('gold', '!py-4 !px-8 text-xs')}
            >
              Start Partnership Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
