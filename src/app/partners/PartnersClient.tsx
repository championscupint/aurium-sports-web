'use client';

import React from 'react';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { Building2, Globe2 } from 'lucide-react';

export function PartnersClient() {
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

  const venues = [
    { name: "Dhanyentari Futsal", location: "Hadigaun, Kathmandu", type: "Academy & Camp Venue" },
    { name: "Baneshwor Multi-Sport Hub", location: "Baneshwor Height", type: "HQ & Development Center" },
    { name: "Jorpati Futsal Arena", location: "Jorpati, Kathmandu", type: "East Kathmandu Training" },
    { name: "Bhaktapur Sports Center", location: "Sallaghari, Bhaktapur", type: "Valley East Academy" },
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Institutional Network</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Partners & Affiliations.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Building a nationwide sports ecosystem requires deep institutional collaboration. We are proud to work with leading schools, global tournament bodies, and venue operators.
          </p>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="eyebrow text-gold-deep">Academic Partners</span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Partner Schools in Nepal.
              </h2>
            </div>
            <p className="text-muted text-xs max-w-sm font-sans">
              Leading private and progressive schools adopting Aurium SportsEd, after-school coaching, and international tour programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolPartners.map((school) => (
              <div
                key={school.name}
                className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-chalk flex items-center justify-center text-ink mb-4">
                    <Building2 size={22} className="text-gold-deep" />
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink mb-2">
                    {school.name}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {school.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-ink/10 text-[10px] text-muted font-mono uppercase tracking-wider">
                  Partner School • Kathmandu
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => openEnquiry('inquiry', 'school-programs')}
              className={buttonClass('gold', '!py-3.5 !px-8 text-xs')}
            >
              Inquire About School Partnership
            </button>
          </div>

        </div>
      </section>

      {/* Global Affiliations */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="eyebrow text-gold-deep">International Alignment</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Global Affiliations & Bodies.
            </h2>
            <p className="text-muted text-xs font-sans">
              Connecting grassroots sports in Nepal with European tournament networks, international physical education councils, and youth safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliations.map((aff) => (
              <div
                key={aff.name}
                className="p-8 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Globe2 size={20} className="text-gold-deep" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-muted">
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-20 bg-ink text-chalk grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow text-gold justify-center">Infrastructure</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Training Grounds & Venues.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((v) => (
              <div
                key={v.name}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-gold tracking-widest font-bold">
                    {v.type}
                  </span>
                  <h4 className="display text-xl uppercase text-white mt-2 mb-1">
                    {v.name}
                  </h4>
                  <p className="text-xs text-chalk/70 font-sans">
                    {v.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
