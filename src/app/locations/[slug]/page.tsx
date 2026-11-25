import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  trainingLocations,
  getTrainingLocation,
  trainingSchedule,
} from '@/data/schedule';
import { site } from '@/data/site';
import {
  getBreadcrumbSchema,
  getWebPageSchema,
  getFAQSchema,
  getTrainingLocationSchema,
} from '@/lib/schema';
import { LocationBookingButton } from './LocationBookingButton';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  ArrowRight,
} from 'lucide-react';

export async function generateStaticParams() {
  return trainingLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getTrainingLocation(slug);
  if (!loc) return { title: 'Training Location Not Found | Aurium Sports' };

  return {
    title: {
      absolute: loc.seoTitle,
    },
    description: loc.seoDescription,
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
    openGraph: {
      title: loc.seoTitle,
      description: loc.seoDescription,
      url: `${site.url}/locations/${loc.slug}`,
      type: 'website',
      images: [
        {
          url: loc.image,
          width: 1200,
          height: 630,
          alt: loc.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: loc.seoTitle,
      description: loc.seoDescription,
      images: [loc.image],
    },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getTrainingLocation(slug);

  if (!loc) {
    notFound();
  }

  const locationSlots = trainingSchedule.filter(
    (s) => s.locationSlug === loc.slug || (loc.isHQ && s.id === 'slot-elite-1')
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Training Schedule & Locations', path: '/schedule' },
    { name: loc.name, path: `/locations/${loc.slug}` },
  ]);

  const webPageSchema = getWebPageSchema({
    title: loc.seoTitle,
    description: loc.seoDescription,
    path: `/locations/${loc.slug}`,
  });

  const locationSchema = getTrainingLocationSchema(loc);
  const faqSchema = getFAQSchema(loc.faqs);

  return (
    <div className="flex flex-col w-full pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-ink text-chalk border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/schedule"
            className="inline-flex items-center gap-1.5 text-chalk/70 hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft size={14} /> Back to All Training Locations &amp; Schedule
          </Link>
          <span className="text-gold font-mono uppercase tracking-widest text-[11px]">
            {loc.area} • {loc.city}
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-ink text-chalk relative grain overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider font-mono">
                  <MapPin size={13} /> {loc.name}
                </span>
                {loc.isHQ && (
                  <span className="px-3 py-1 rounded-full bg-white/10 text-chalk text-[11px] font-mono uppercase tracking-wider">
                    Official Kathmandu Headquarters
                  </span>
                )}
              </div>

              <h1 className="display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                {loc.h1}
              </h1>

              <p className="text-chalk/85 font-sans text-base leading-relaxed max-w-2xl">
                {loc.intro}
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs font-sans text-chalk/80">
                <div>
                  <strong className="text-gold font-mono uppercase">
                    Verified Address:
                  </strong>{' '}
                  {loc.address}
                </div>
                <div>
                  <strong className="text-gold font-mono uppercase">
                    Direct Phone / WhatsApp:
                  </strong>{' '}
                  +977 {site.phone} • {site.email}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <LocationBookingButton
                  locationSlug={loc.slug}
                  optionLabel={`${loc.name} (${loc.neighborhood}, ${loc.city})`}
                  label="Book a Trial Spot at This Ground"
                  variant="gold"
                />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/25 text-chalk hover:border-gold hover:text-gold font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-ink-2">
                <Image
                  src={loc.image}
                  alt={loc.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Training Timetable at This Location */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-gold-deep">
                Verified Weekly Timetable
              </span>
              <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                Training Cohorts at {loc.neighborhood}.
              </h2>
            </div>
            <Link
              href="/programs"
              className="text-xs font-bold text-ink hover:text-gold-deep inline-flex items-center gap-1"
            >
              View All 7 Age-Group Syllabi <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locationSlots.map((slot) => (
              <div
                key={slot.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-ink/10 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-wider">
                      {slot.ageGroup}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      {slot.openSpots} Spots Open
                    </span>
                  </div>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {slot.ageRange} • {slot.sessionType}
                  </h3>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {slot.focus}
                  </p>

                  <div className="pt-3 border-t border-ink/10 space-y-1.5 text-xs text-ink/85 font-sans">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gold-deep shrink-0" />
                      <span>
                        <strong>Days:</strong> {slot.days.join(', ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gold-deep shrink-0" />
                      <span>
                        <strong>Timing:</strong> {slot.timing}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted">
                    {slot.headCoach}
                  </span>
                  <LocationBookingButton
                    locationSlug={loc.slug}
                    optionLabel={`${loc.name} — ${slot.ageGroup} (${slot.timing})`}
                    label="Book a Spot"
                    variant="gold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Features & Programmes Available */}
      <section className="py-20 bg-white text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="eyebrow text-gold-deep">Ground Specifications</span>
            <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
              Facility &amp; Coaching Standards at {loc.name}.
            </h2>
            <ul className="space-y-3">
              {loc.facilityFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-sm text-ink/85 font-sans"
                >
                  <CheckCircle2
                    size={18}
                    className="text-gold-deep shrink-0 mt-0.5"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <span className="eyebrow text-gold-deep">Available Pathways</span>
            <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
              Programmes Offered at This Location.
            </h2>
            <div className="flex flex-wrap gap-2">
              {loc.programmesOffered.map((prog) => (
                <span
                  key={prog}
                  className="px-4 py-2 rounded-full bg-chalk border border-ink/15 text-xs font-mono font-bold text-ink"
                >
                  {prog}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted font-sans leading-relaxed">
              Every session at {loc.name} follows Aurium Sports’{' '}
              <Link
                href="/mental-health"
                className="text-ink font-bold underline hover:text-gold-deep"
              >
                B.U.S.T. Sports for Mental Wellbeing
              </Link>{' '}
              protocol and connects directly to{' '}
              <Link
                href="/tournaments"
                className="text-ink font-bold underline hover:text-gold-deep"
              >
                Aurium Mini League
              </Link>{' '}
              and{' '}
              <Link
                href="/services/international"
                className="text-ink font-bold underline hover:text-gold-deep"
              >
                International Tournament Tours
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Location FAQs */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-gold-deep justify-center">
              Local Parent Guide
            </span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              Frequently Asked Questions — {loc.neighborhood}, {loc.city}.
            </h2>
          </div>

          <div className="space-y-4">
            {loc.faqs.map((f) => (
              <div
                key={f.question}
                className="p-6 rounded-2xl bg-white border border-ink/10 space-y-2"
              >
                <h3 className="display text-xl uppercase tracking-tight text-ink">
                  {f.question}
                </h3>
                <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
