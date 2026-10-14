'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { useEnquiry } from '@/components/EnquiryContext';
import { ArrowRight } from 'lucide-react';

export default function ProgramsPage() {
  const { openEnquiry } = useEnquiry();

  const groups = ['Train', 'Schools', 'Compete', 'Impact', 'Build'] as const;

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">The Ecosystem Spectrum</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Programs & Services.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Every service at Aurium Sports connects into a single long-term pathway. From a child’s first kick at age 7 to international tryouts in Europe and sustainable sports infrastructure in Nepal.
          </p>
        </div>
      </section>

      {/* Services Grouped */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {groups.map((grp) => {
            const groupServices = services.filter((s) => s.group === grp);
            if (groupServices.length === 0) return null;

            return (
              <div key={grp} className="space-y-8">
                <div className="flex items-center gap-3 pb-3 border-b border-ink/15">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-deep"></span>
                  <h2 className="display text-3xl uppercase tracking-tight text-ink">
                    {grp} Division
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {groupServices.map((svc) => (
                    <div
                      key={svc.slug}
                      className="bg-white border border-ink/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      {/* Image / Header */}
                      <div className="relative h-48 w-full bg-ink-2 overflow-hidden">
                        {svc.image ? (
                          <Image
                            src={svc.image}
                            alt={svc.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center pitch-lines">
                            <span className="display text-6xl text-chalk/10 select-none">
                              {svc.motif}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold">
                            {svc.brand || svc.group}
                          </span>
                          <h3 className="display text-2xl uppercase tracking-tight text-white">
                            {svc.name}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                        <p className="text-xs text-muted font-sans leading-relaxed">
                          {svc.summary}
                        </p>

                        <div className="space-y-1 pt-2 border-t border-ink/5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                            Available Options:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {svc.offerings.map((o) => (
                              <span
                                key={o.name}
                                className="px-2 py-0.5 rounded bg-chalk-2 text-[11px] text-ink/80 font-medium"
                              >
                                {o.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between gap-3 border-t border-ink/5">
                          <Link
                            href={`/services/${svc.slug}`}
                            className="text-xs font-bold text-ink hover:text-gold-deep transition-colors inline-flex items-center gap-1"
                          >
                            Details & Curriculum <ArrowRight size={13} />
                          </Link>

                          <button
                            onClick={() => openEnquiry(svc.offerings[0]?.intent || 'inquiry', svc.slug)}
                            className="px-4 py-2 bg-ink text-chalk text-[11px] font-bold uppercase tracking-wider rounded-full hover:bg-gold hover:text-ink transition-colors"
                          >
                            {svc.offerings[0]?.intent === 'register' ? 'Register' : 'Inquire'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}
