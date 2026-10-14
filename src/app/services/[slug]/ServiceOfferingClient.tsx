'use client';

import React from 'react';
import { Service } from '@/data/services';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { site } from '@/data/site';

export function ServiceOfferingClient({ service }: { service: Service }) {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-gold-deep">Programs & Packages</span>
          <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
            {service.offeringsTitle}
          </h2>
        </div>
        <p className="text-muted text-xs max-w-sm font-sans">
          Select an offering below to register online or send an inquiry directly to the coaching directorate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.offerings.map((offering) => (
          <div
            key={offering.name}
            className="p-8 rounded-3xl border-2 border-ink/10 bg-chalk hover:border-gold hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-ink text-chalk text-[10px] font-bold uppercase tracking-wider font-mono">
                  {offering.intent.toUpperCase()}
                </span>
                {offering.meta && (
                  <span className="text-xs font-semibold text-gold-deep font-sans">
                    {offering.meta}
                  </span>
                )}
              </div>

              <h3 className="display text-2xl uppercase tracking-tight text-ink mb-3 group-hover:text-gold-deep transition-colors">
                {offering.name}
              </h3>

              <p className="text-xs text-muted font-sans leading-relaxed">
                {offering.description}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-ink/10 space-y-3">
              <button
                type="button"
                onClick={() => openEnquiry(offering.intent, service.slug, offering.name)}
                className={`w-full ${buttonClass(
                  offering.intent === 'register' ? 'gold' : 'ink',
                  '!py-3.5 !text-xs justify-center shadow-md'
                )}`}
              >
                {offering.intent === 'register' ? 'Register Now' : 'Send Inquiry'} <ArrowRight size={14} />
              </button>

              <div className="text-center">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hi Aurium Sports, I want to inquire about ${service.name} - ${offering.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-muted hover:text-ink font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <MessageCircle size={13} className="text-[#25D366]" /> Ask quick question on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
