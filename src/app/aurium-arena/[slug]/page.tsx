import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  auriumArenaData,
  getArenaSupportingGuide,
} from '@/data/aurium-arena';
import { site } from '@/data/site';
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getWebPageSchema,
} from '@/lib/schema';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react';

export async function generateStaticParams() {
  return auriumArenaData.supportingGuides.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getArenaSupportingGuide(slug);
  if (!guide) return { title: 'Guide Not Found | Aurium Arena' };

  return {
    title: {
      absolute: guide.seoTitle,
    },
    description: guide.seoDescription,
    alternates: {
      canonical: `/aurium-arena/${guide.slug}`,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `${site.url}/aurium-arena/${guide.slug}`,
      type: 'article',
      images: [
        {
          url: '/images/arena/aurium-arena-7v7-turf-masterplan-pasikot-kathmandu.png',
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seoTitle,
      description: guide.seoDescription,
      images: [
        '/images/arena/aurium-arena-7v7-turf-masterplan-pasikot-kathmandu.png',
      ],
    },
  };
}

export default async function ArenaSupportingGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getArenaSupportingGuide(slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = auriumArenaData.supportingGuides.filter(
    (g) => g.slug !== guide.slug
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Aurium Arena', path: '/aurium-arena' },
    { name: guide.title, path: `/aurium-arena/${guide.slug}` },
  ]);

  const webPageSchema = getWebPageSchema({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/aurium-arena/${guide.slug}`,
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.h1,
    description: guide.seoDescription,
    author: {
      '@id': `${site.url}/#organization`,
    },
    publisher: {
      '@id': `${site.url}/#organization`,
    },
    mainEntityOfPage: `${site.url}/aurium-arena/${guide.slug}`,
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
  };

  const faqSchema = getFAQSchema(guide.faqs);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-ink text-chalk border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/aurium-arena"
            className="inline-flex items-center gap-1.5 text-chalk/70 hover:text-gold transition-colors font-medium"
          >
            <ArrowLeft size={14} /> Back to Aurium Arena Main Project &amp;
            Enquiry Hub
          </Link>
          <span className="text-gold font-mono uppercase tracking-widest text-[11px]">
            {guide.code}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-ink text-chalk relative grain overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-wider font-mono">
              <Sparkles size={12} /> {guide.kicker}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-chalk text-[11px] font-mono uppercase tracking-wider">
              Aurium Arena • Pasikot, Kathmandu
            </span>
          </div>

          <h1 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
            {guide.h1}
          </h1>

          <p className="text-chalk/85 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
            {guide.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/aurium-arena#invest-form"
              className="px-7 py-3.5 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-widest hover:bg-white transition-all inline-flex items-center gap-2"
            >
              Submit Aurium Arena Investment Enquiry <ArrowRight size={14} />
            </Link>
            <Link
              href="/aurium-arena#project-infrastructure"
              className="px-6 py-3.5 rounded-full border border-white/25 text-chalk hover:border-gold hover:text-gold font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              View 7v7 Turf, Seating &amp; Restaurant Scope →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Editorial Content */}
      <section className="py-20 bg-chalk text-ink border-b border-ink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {guide.sections.map((sec) => (
            <div
              key={sec.heading}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-ink/10 shadow-sm space-y-4"
            >
              <h2 className="display text-2xl sm:text-4xl uppercase tracking-tight text-ink">
                {sec.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted font-sans leading-relaxed">
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {sec.bullets && (
                <ul className="space-y-2.5 pt-3 border-t border-ink/10">
                  {sec.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 font-sans"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-gold-deep shrink-0 mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Project Connection Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-ink text-chalk border border-gold/40 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gold font-bold">
              <MapPin size={14} /> Featured Project: Aurium Arena (Pasikot,
              Budhanilkantha, Kathmandu)
            </div>
            <h3 className="display text-2xl sm:text-4xl uppercase text-white">
              Explore the Aurium Arena 7v7 Turf, Grandstand &amp; Restaurant
              Development.
            </h3>
            <p className="text-xs sm:text-sm text-chalk/80 font-sans leading-relaxed">
              Situated on a 22,352 sq.ft. parcel in Pasikot, Kathmandu, Aurium
              Arena combines a 130 ft × 95 ft 7v7 artificial turf pitch, ~260
              public spectator seats across North and East 3-tier grandstands,
              and a +4.5 ft elevated glass-fronted restaurant and viewing deck.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/aurium-arena"
                className="px-6 py-3 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
              >
                Explore Main Aurium Arena Page →
              </Link>
              <Link
                href="/aurium-arena#invest-form"
                className="px-6 py-3 rounded-full border border-white/25 text-chalk hover:border-gold hover:text-gold font-bold text-xs uppercase tracking-wider transition-all"
              >
                Request Investment Proposal
              </Link>
            </div>
          </div>

          {/* Guide FAQs */}
          <div className="space-y-4 pt-4">
            <h2 className="display text-3xl uppercase tracking-tight text-ink">
              Key Questions Answered
            </h2>
            {guide.faqs.map((f) => (
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

      {/* Related Guides */}
      <section className="py-16 bg-white text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="display text-2xl sm:text-4xl uppercase tracking-tight text-ink">
            More Sports Infrastructure &amp; Investment Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherGuides.slice(0, 3).map((g) => (
              <Link
                key={g.slug}
                href={`/aurium-arena/${g.slug}`}
                className="p-6 rounded-3xl bg-chalk border border-ink/10 hover:border-gold-deep transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-deep font-bold">
                    {g.code}
                  </span>
                  <h3 className="display text-xl uppercase text-ink">
                    {g.title}
                  </h3>
                  <p className="text-xs text-muted font-sans line-clamp-2">
                    {g.summary}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-ink hover:text-gold-deep inline-flex items-center gap-1">
                  Read Guide <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
