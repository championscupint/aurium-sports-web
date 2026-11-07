'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  NextSportzPlayerCard,
  nextSportzPlayerCards,
} from '@/data/nextsportz';
import {
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Flame,
  CheckCircle2,
} from 'lucide-react';

export function NextSportzCardShowcase() {
  const [selectedId, setSelectedId] = useState<string>(nextSportzPlayerCards[0].id);

  const activeCard: NextSportzPlayerCard =
    nextSportzPlayerCards.find((c) => c.id === selectedId) || nextSportzPlayerCards[0];

  const xpPercentage = Math.min(
    100,
    Math.round((activeCard.xp / activeCard.nextLevelXp) * 100)
  );

  return (
    <div className="w-full">
      {/* Player Profile Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {nextSportzPlayerCards.map((card) => {
          const isActive = card.id === activeCard.id;
          return (
            <button
              key={card.id}
              onClick={() => setSelectedId(card.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-gold text-ink border-gold shadow-lg shadow-gold/20 scale-105'
                  : 'bg-white/5 text-chalk/80 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isActive ? 'bg-ink' : 'bg-gold'
                }`}
              />
              <span>{card.name}</span>
              <span className="text-[10px] opacity-75 font-normal">
                ({card.position} • {card.tpr} TPR)
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Card + Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        
        {/* Left: NextSportz Digital Player Card (Physical simulation) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-[32px] p-1.5 bg-gradient-to-b from-gold via-amber-600/40 to-ink shadow-[0_20px_60px_-15px_rgba(251,193,8,0.35)] group transition-transform duration-300 hover:scale-[1.02]">
            {/* Card inner dark body */}
            <div className="relative rounded-[28px] bg-gradient-to-b from-[#18181b] via-[#0f0f11] to-[#09090b] text-chalk p-6 overflow-hidden border border-white/10">
              
              {/* Holographic / Texture Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Bar: NextSportz branding & Crest */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 shrink-0">
                    <Image
                      src="/images/nextsportz-badge.png"
                      alt="NextSportz Technology Partner"
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-gold leading-none">
                      NextSportz Pass
                    </span>
                    <span className="font-mono text-[8px] text-chalk/50 tracking-wider">
                      Verified Athlete ID
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gold font-bold">
                  <span>🇳🇵</span>
                  <span>NEPAL</span>
                </div>
              </div>

              {/* Main Player Rating & Profile Info */}
              <div className="pt-5 pb-3 flex items-start justify-between relative z-10">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="display text-6xl text-gold font-black leading-none drop-shadow-[0_2px_10px_rgba(251,193,8,0.4)]">
                      {activeCard.tpr}
                    </span>
                    <span className="font-mono text-xs font-bold text-chalk/60 uppercase">
                      TPR
                    </span>
                  </div>
                  <div className="inline-block mt-1 px-2 py-0.5 rounded bg-gold/20 text-gold font-mono text-xs font-bold uppercase tracking-wider">
                    {activeCard.position}
                  </div>
                  <div className="text-[10px] text-chalk/60 font-mono mt-1">
                    #{activeCard.number} • {activeCard.gender}
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/40 shadow-inner bg-ink/80 flex items-center justify-center">
                    <Image
                      src="/images/logo-512.png"
                      alt="Aurium Sports"
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[9px] font-mono text-chalk/60 uppercase tracking-widest mt-1.5 text-right">
                    Aurium Academy
                  </span>
                </div>
              </div>

              {/* Player Name and Level */}
              <div className="py-2 text-center border-y border-white/10 my-2 relative z-10">
                <h3 className="display text-2xl uppercase tracking-wider text-white">
                  {activeCard.name}
                </h3>
                <p className="text-[11px] font-sans text-gold font-medium">
                  {activeCard.positionFull}
                </p>
                <div className="inline-flex items-center gap-1.5 mt-1 text-[10px] font-mono text-chalk/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{activeCard.tier}</span>
                  <span>•</span>
                  <span>{activeCard.level}</span>
                </div>
              </div>

              {/* Core 6 Attributes Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 py-4 relative z-10">
                {activeCard.attributes.map((attr) => (
                  <div
                    key={attr.key}
                    className="flex items-center justify-between bg-white/[0.04] px-3 py-1.5 rounded-xl border border-white/5"
                  >
                    <span className="font-mono text-xs font-bold text-chalk/70">
                      {attr.key}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="display text-sm font-bold text-gold">
                        {attr.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* XP Progression Bar */}
              <div className="space-y-1.5 pt-2 border-t border-white/10 relative z-10">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-chalk/60 flex items-center gap-1">
                    <TrendingUp size={11} className="text-gold" /> Training XP
                  </span>
                  <span className="text-gold font-bold">
                    {activeCard.xp.toLocaleString()} / {activeCard.nextLevelXp.toLocaleString()} XP
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${xpPercentage}%` }}
                  />
                </div>
              </div>

              {/* Badges Footer */}
              <div className="pt-3 flex items-center justify-between text-[9px] font-mono text-chalk/50 relative z-10">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck size={12} /> Rep: {activeCard.reputationScore}/100
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <Flame size={12} /> {activeCard.attendanceStreak}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Right: Detailed Analytics, Match History & Scouting Passport */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> NextSportz Player Passport
            </div>
            <h3 className="display text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Data-Backed Player Evolution.
            </h3>
            <p className="text-sm text-chalk/80 font-sans leading-relaxed mt-2">
              Every Aurium training session and tournament match contributes weighted Experience Points (XP) into the player&apos;s Training Potential Rating (TPR). No subjectivity—pure, verifiable progress.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="font-mono text-[10px] text-chalk/60 uppercase tracking-wider">
                Matches
              </div>
              <div className="display text-2xl text-gold mt-0.5">
                {activeCard.matchStats.matches}
              </div>
            </div>

            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="font-mono text-[10px] text-chalk/60 uppercase tracking-wider">
                {activeCard.isGoalkeeper ? 'Clean Sheets' : 'Goals'}
              </div>
              <div className="display text-2xl text-gold mt-0.5">
                {activeCard.isGoalkeeper
                  ? activeCard.matchStats.cleanSheets
                  : activeCard.matchStats.goals}
              </div>
            </div>

            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="font-mono text-[10px] text-chalk/60 uppercase tracking-wider">
                {activeCard.isGoalkeeper ? 'Saves Contributed' : 'Assists'}
              </div>
              <div className="display text-2xl text-gold mt-0.5">
                {activeCard.isGoalkeeper ? '48' : activeCard.matchStats.assists}
              </div>
            </div>

            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="font-mono text-[10px] text-chalk/60 uppercase tracking-wider">
                MOTM Awards
              </div>
              <div className="display text-2xl text-gold mt-0.5">
                {activeCard.matchStats.motm}
              </div>
            </div>
          </div>

          {/* Form Guide & Attributes Breakdown */}
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-chalk/80 font-bold uppercase tracking-wider">
                Recent Tournament Form:
              </span>
              <div className="flex items-center gap-1.5">
                {activeCard.recentForm.map((f, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[11px] ${
                      f === 'W'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : f === 'D'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Attribute Explanations */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
              {activeCard.attributes.map((attr) => (
                <div key={attr.key} className="flex items-center justify-between text-chalk/80">
                  <span className="text-chalk/60">{attr.label}</span>
                  <span className="font-mono font-bold text-gold">{attr.value} / 99</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Achievements & Badges */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider">
              Verified Career Badges:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeCard.badges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold/10 border border-gold/30 text-chalk text-xs font-sans"
                >
                  <Award size={13} className="text-gold shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
