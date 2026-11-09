'use client';

import React from 'react';
import Image from 'next/image';
import { site } from '@/data/site';
import { useEnquiry } from './EnquiryContext';
import { trackSocialClick, trackEnrollmentClick } from '@/lib/analytics';
import { ArrowUpRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';

const featuredSocialMedia = [
  {
    id: 'dana-cup-denmark',
    platform: 'Instagram Reel',
    platformKey: 'instagram' as const,
    url: site.instagram,
    tag: 'Global Pathway • Hjørring, Denmark',
    title: 'From Kathmandu to the Dana Cup Quarter-Finals',
    caption:
      'Relive the historic moment our Aurium x Rato Bangala U14 Girls squad battled European clubs to reach the Quarter-Finals in Denmark. #AuriumSports #DanaCup #GirlsFootballNepal',
    image: '/images/stadium-night.jpg',
    imageAlt:
      'Aurium Sports youth football squad under floodlights at Dana Cup in Hjørring, Denmark — shared on @auriumsports Instagram',
  },
  {
    id: 'tiktok-academy-drills',
    platform: 'TikTok Spotlight',
    platformKey: 'tiktok' as const,
    url: site.tiktok,
    tag: 'Academy Microcycle • Ages 7–16',
    title: 'Inside Our 3-Day Weekly Training & GK Reflex Drills',
    caption:
      'High-tempo first-touch mastery, positional rondos, and specialist Goalkeeper reflex saves at Baneshwor Height & Patan Dhoka. #TheAuriumAcademy #FootballNepal #TikTokNepal',
    image: '/images/academy.jpg',
    imageAlt:
      'Youth footballers practicing technical ball mastery drills at The Aurium Academy in Kathmandu — featured on @auriumsports TikTok',
  },
  {
    id: 'bust-mental-wellbeing',
    platform: 'Instagram & TikTok',
    platformKey: 'instagram' as const,
    url: site.instagram,
    tag: 'B.U.S.T. Protocol • Sports Science',
    title: 'Why Every Session Starts With Breathing & Mindful Focus',
    caption:
      'Before the whistle blows, we train the mind. See how our B.U.S.T. framework builds emotional resilience and injury-free confidence. #SportsForMentalHealth #AuriumSports',
    image: '/images/wellbeing.jpg',
    imageAlt:
      'Aurium Sports coach leading a B.U.S.T. mindfulness and breathing circle with young athletes in Kathmandu',
  },
  {
    id: 'mini-league-matchday',
    platform: 'Facebook & Instagram',
    platformKey: 'facebook' as const,
    url: site.facebook,
    tag: 'Aurium Mini League • Matchday',
    title: '350+ Young Athletes Competing With Live NextSportz Stats',
    caption:
      'Full matchday albums, MVP awards, school standings, and verified NextSportz player cards from across Kathmandu Valley. #AuriumMiniLeague #YouthFootballNepal',
    image: '/images/tournament.jpg',
    imageAlt:
      'Youth football teams competing in the Aurium Mini League in Kathmandu — photo gallery on Aurium Sports Facebook',
  },
];

export function SocialMediaShowcase() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="py-24 bg-ink text-chalk grain relative border-b border-white/10 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Top Header + Follow Us On Socials Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="eyebrow text-gold">
              Follow Us On Socials • {site.socialHandle}
            </span>
            <h2 className="display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              Live From The Pitch{' '}
              <span className="accent font-serif italic normal-case text-gold">
                @auriumsports
              </span>
            </h2>
            <p className="text-chalk/75 font-sans text-sm sm:text-base leading-relaxed">
              Join thousands of parents, players, and schools following our daily training drills, Dana Cup international tours, goalkeeper clinics, and Aurium Mini League highlights across Instagram, TikTok, and Facebook.
            </p>
          </div>

          {/* Direct Social Follow Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('instagram', 'home_showcase_header')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all"
            >
              <span>Instagram</span>
              <span className="font-mono text-[10px] bg-black/25 px-2 py-0.5 rounded-full">
                @auriumsports
              </span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('tiktok', 'home_showcase_header')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-ink font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-gold transition-all"
            >
              <span>TikTok</span>
              <span className="font-mono text-[10px] bg-ink/10 px-2 py-0.5 rounded-full">
                @auriumsports
              </span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('facebook', 'home_showcase_header')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1877F2] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#166FE5] transition-all"
            >
              <span>Facebook</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* 4 Curated Reels / Social Media Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSocialMedia.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackSocialClick(item.platformKey, `showcase_card_${item.id}`)
              }
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-ink-2 flex flex-col justify-between hover:border-gold/70 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              {/* Visual Media Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

                {/* Top Platform Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-ink/85 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-gold">
                    {item.platform}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-gold text-ink flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play size={14} fill="currentColor" />
                  </span>
                </div>

                {/* Bottom Overlay Title & Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold block">
                    {item.tag}
                  </span>
                  <h3 className="display text-xl uppercase tracking-tight text-white leading-snug group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-chalk/75 font-sans leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-gold">
                    <span>Watch on {item.platform.split(' ')[0]}</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 3 Official Channel Directory Cards + Free Trial Lead Magnet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 3 Social Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {site.socials.map((soc) => {
              const platformKey = soc.name.toLowerCase() as
                | 'instagram'
                | 'tiktok'
                | 'facebook';
              return (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(platformKey, 'home_channel_card')}
                  className="p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/50 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                        {soc.name}
                      </span>
                      <ArrowUpRight size={14} className="text-gold" />
                    </div>
                    <div className="display text-xl uppercase text-white tracking-tight">
                      {soc.handle}
                    </div>
                    <p className="text-xs text-chalk/65 font-sans leading-relaxed">
                      {soc.badge}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                    Follow {soc.name} →
                  </span>
                </a>
              );
            })}
          </div>

          {/* High-Converting "Book a Free 1-Session Trial" Card for Social Visitors */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/40 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-bold text-gold">
                <Sparkles size={13} /> New Player Invitation • Ages 7–16
              </div>
              <h3 className="display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                Claim a Free Trial Session at The Aurium Academy
              </h3>
              <p className="text-xs text-chalk/80 font-sans leading-relaxed">
                Seen our drills on Instagram or TikTok? Bring your child for an introductory training session at Baneshwor Height, Patan Dhoka, or Bhaktapur with our certified coaching staff.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-[11px] text-chalk/80 font-mono">
                <CheckCircle2 size={14} className="text-gold shrink-0" />
                <span>Boys & Girls • U8 to U16</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  trackEnrollmentClick('free_trial_session');
                  openEnquiry(
                    'register',
                    'academy',
                    'Free 1-Session Academy Trial'
                  );
                }}
                className="px-6 py-3 rounded-full bg-gold hover:bg-white text-ink font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                Book Free Trial →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
