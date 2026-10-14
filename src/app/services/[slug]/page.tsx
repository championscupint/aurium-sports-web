import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getService } from '@/data/services';
import { ServiceOfferingClient } from './ServiceOfferingClient';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: 'Service Not Found | Aurium Sports' };

  return {
    title: `${svc.name} | Aurium Sports Kathmandu`,
    description: svc.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);

  if (!svc) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Back button & Breadcrumb */}
      <div className="bg-ink text-chalk border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-chalk/70 hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft size={14} /> Back to All Programs
          </Link>
          <span className="text-gold font-mono uppercase tracking-widest text-[11px]">
            {svc.group} Spectrum
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-ink text-chalk relative grain overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider font-mono">
                {svc.brand || svc.group}
              </div>

              <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
                {svc.name}
              </h1>

              <p className="accent text-2xl sm:text-3xl text-gold font-serif italic">
                {svc.tagline}
              </p>

              <p className="text-chalk/80 font-sans text-base leading-relaxed max-w-2xl">
                {svc.summary}
              </p>

              {/* Target Audience Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs uppercase font-bold text-chalk/50 mr-2">Audience:</span>
                {svc.audience.map((a) => (
                  <span
                    key={a}
                    className="px-3 py-1 rounded-full bg-white/10 text-chalk text-xs font-medium border border-white/10"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Image / Motif Panel */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-ink-2">
                {svc.image ? (
                  <Image
                    src={svc.image}
                    alt={svc.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pitch-lines text-center">
                    <span className="display text-8xl text-chalk/10 select-none">
                      {svc.motif}
                    </span>
                    <span className="display text-3xl uppercase tracking-tight text-gold mt-4">
                      {svc.name}
                    </span>
                    <span className="text-xs text-chalk/60 font-sans mt-2 max-w-xs">
                      {svc.kicker}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights & Methodology Breakdown */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="eyebrow text-ink">Methodology & Value</span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
              Why We Are <span className="accent font-serif italic normal-case text-gold-deep">Different.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.highlights.map((h, i) => (
              <div
                key={h.title}
                className="bg-white p-6 rounded-2xl border border-ink/10 flex flex-col justify-between hover:border-gold hover:shadow-md transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-gold-deep mb-2 block">
                    0{i + 1}
                  </span>
                  <h3 className="display text-xl uppercase tracking-tight text-ink mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Offerings & Interactive Selection (Client Component for instant modal trigger) */}
      <section className="py-20 bg-white text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceOfferingClient service={svc} />
        </div>
      </section>

    </div>
  );
}
