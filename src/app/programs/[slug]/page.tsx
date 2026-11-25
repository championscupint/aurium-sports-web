import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { playerProgrammes, getPlayerProgramme } from '@/data/programmes';
import { trainingSchedule } from '@/data/schedule';
import { site } from '@/data/site';
import {
  getBreadcrumbSchema,
  getWebPageSchema,
  getFAQSchema,
} from '@/lib/schema';
import { ProgrammeEnrolButton } from './ProgrammeEnrolButton';
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export async function generateStaticParams() {
  return playerProgrammes.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prog = getPlayerProgramme(slug);
  if (!prog) return { title: 'Programme Not Found | Aurium Sports' };

  return {
    title: {
      absolute: prog.seoTitle,
    },
    description: prog.seoDescription,
    alternates: {
      canonical: `/programs/${prog.id}`,
    },
    openGraph: {
      title: prog.seoTitle,
      description: prog.seoDescription,
      url: `${site.url}/programs/${prog.id}`,
      type: 'website',
      images: [
        {
          url: prog.image,
          width: 1200,
          height: 630,
          alt: prog.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: prog.seoTitle,
      description: prog.seoDescription,
      images: [prog.image],
    },
  };
}

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prog = getPlayerProgramme(slug);

  if (!prog) {
    notFound();
  }

  // Match active weekly slots for this programme
  const matchedSlots = trainingSchedule.filter((slot) =>
    slot.ageGroup.toLowerCase().includes(prog.name.split(' ')[0].toLowerCase())
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Programmes', path: '/programs' },
    { name: `${prog.name} (${prog.ageBadge})`, path: `/programs/${prog.id}` },
  ]);

  const webPageSchema = getWebPageSchema({
    title: prog.seoTitle,
    description: prog.seoDescription,
    path: `/programs/${prog.id}`,
  });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${prog.name} (${prog.ageBadge}) — The Aurium Academy`,
    serviceType: `Youth Football Training (${prog.category})`,
    provider: {
      '@id': `${site.url}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Kathmandu' },
      { '@type': 'City', name: 'Lalitpur' },
      { '@type': 'City', name: 'Bhaktapur' },
      { '@type': 'Country', name: 'Nepal' },
    ],
    description: prog.overview,
  };

  const faqSchema = getFAQSchema(prog.faqs);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-ink text-chalk border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-chalk/70 hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft size={14} /> Back to All Training Programmes
          </Link>
          <span className="text-gold font-mono uppercase tracking-widest text-[11px]">
            {prog.category} • {prog.ageBadge}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-ink text-chalk relative grain overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-wider font-mono">
                  <Sparkles size={12} /> {prog.ageBadge}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-chalk text-[11px] font-mono uppercase tracking-wider">
                  {prog.duration} • {prog.frequency}
                </span>
              </div>

              <h1 className="display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                {prog.h1}
              </h1>

              <p className="accent text-xl sm:text-2xl text-gold font-serif italic">
                {prog.tagline}
              </p>

              <p className="text-chalk/85 font-sans text-base leading-relaxed max-w-2xl">
                {prog.overview}
              </p>

              {/* Bilingual Nepali Summary for Local Search & Parent Accessibility */}
              <p
                lang="ne"
                className="text-xs sm:text-sm text-chalk/75 font-sans bg-white/5 border border-white/10 rounded-2xl p-4 max-w-2xl"
              >
                <strong className="text-gold font-mono uppercase text-[10px] tracking-wider block mb-1">
                  नेपाली सारांश (Nepali Overview):
                </strong>
                {prog.nepaliSummary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <ProgrammeEnrolButton
                  programmeId={prog.id}
                  enquiryOption={prog.enquiryOption}
                  label={`${prog.ctaLabel} — ${prog.name}`}
                  variant="gold"
                />
                <Link
                  href="/schedule"
                  className="px-6 py-3.5 rounded-full border border-white/25 text-chalk hover:border-gold hover:text-gold font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View All 5 Ground Timings →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-ink-2">
                <Image
                  src={prog.image}
                  alt={prog.imageAlt}
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

      {/* Curriculum Structure & Expected Outcomes */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="eyebrow text-gold-deep">
              Session Syllabus &amp; Methodology
            </span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              What Players Learn in {prog.name}.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prog.curriculumBlocks.map((block, idx) => (
              <div
                key={block.title}
                className="bg-white p-7 rounded-3xl border border-ink/10 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-gold-deep block">
                    Block 0{idx + 1}
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {block.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Eligibility & What to Bring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="p-8 rounded-3xl bg-white border border-ink/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                Expected Development Outcomes
              </span>
              <h3 className="display text-2xl uppercase tracking-tight text-ink">
                Key Player Milestones
              </h3>
              <ul className="space-y-3">
                {prog.outcomes.map((out) => (
                  <li
                    key={out}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 font-sans"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-gold-deep shrink-0 mt-0.5"
                    />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted font-sans pt-2 border-t border-ink/10">
                <strong className="text-ink">Eligibility:</strong>{' '}
                {prog.eligibility}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-ink/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                Parent Checklist
              </span>
              <h3 className="display text-2xl uppercase tracking-tight text-ink">
                What Your Child Should Bring
              </h3>
              <ul className="space-y-3">
                {prog.whatToBring.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 font-sans"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-gold-deep shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted font-sans pt-2 border-t border-ink/10">
                All training balls, bibs, cones, agility ladders, and pitch-side
                first-aid kits are provided by{' '}
                <Link
                  href="/services/academy"
                  className="text-ink font-bold underline hover:text-gold-deep"
                >
                  The Aurium Academy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Locations & Weekly Slots for This Programme */}
      {matchedSlots.length > 0 && (
        <section className="py-20 bg-white text-ink border-b border-ink/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="eyebrow text-gold-deep">
                  Active Kathmandu Valley Cohorts
                </span>
                <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink mt-2">
                  Training Locations &amp; Timings for {prog.name}.
                </h2>
              </div>
              <Link
                href="/schedule"
                className="text-xs font-bold text-ink hover:text-gold-deep inline-flex items-center gap-1"
              >
                Open Full Interactive Schedule Finder <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchedSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="p-7 rounded-3xl bg-chalk border border-ink/10 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-wider">
                        {slot.locationArea}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                        {slot.openSpots} Spots Open
                      </span>
                    </div>
                    <h3 className="display text-2xl uppercase tracking-tight text-ink">
                      <Link
                        href={`/locations/${slot.locationSlug}`}
                        className="hover:text-gold-deep transition-colors"
                      >
                        {slot.venueName}
                      </Link>
                    </h3>
                    <div className="space-y-1.5 text-xs text-ink/85 font-sans">
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
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-gold-deep shrink-0" />
                        <span>{slot.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between gap-3">
                    <Link
                      href={`/locations/${slot.locationSlug}`}
                      className="text-xs font-bold text-ink hover:text-gold-deep underline"
                    >
                      Ground Details →
                    </Link>
                    <ProgrammeEnrolButton
                      programmeId={prog.id}
                      enquiryOption={`${slot.venueName} — ${slot.ageGroup} (${slot.timing})`}
                      label="Book This Slot"
                      variant="gold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programme FAQs */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="eyebrow text-gold-deep justify-center">
              Parent Questions Answered
            </span>
            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              {prog.name} — Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {prog.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-white border border-ink/10 space-y-2"
              >
                <h3 className="display text-xl uppercase tracking-tight text-ink">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
