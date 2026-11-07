'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  TournamentStatSummary,
  nextSportzTournaments,
} from '@/data/nextsportz';
import {
  Trophy,
  Shield,
  Activity,
  Award,
  BarChart2,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export function TournamentStatsCenter() {
  const [activeTourneyId, setActiveTourneyId] = useState<string>(
    nextSportzTournaments[0].id
  );
  const [statTab, setStatTab] = useState<'scorers' | 'keepers' | 'standings'>('scorers');

  const tourney: TournamentStatSummary =
    nextSportzTournaments.find((t) => t.id === activeTourneyId) ||
    nextSportzTournaments[0];

  return (
    <div className="w-full space-y-12">
      
      {/* Tournament Selector Pills */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-ink/10 pb-6">
        <div>
          <span className="eyebrow text-gold-deep">Powered by NextSportz</span>
          <h3 className="display text-2xl sm:text-4xl uppercase tracking-tight text-ink mt-1">
            Tournament Management & Live Records
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {nextSportzTournaments.map((t) => {
            const isSelected = t.id === tourney.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTourneyId(t.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-ink text-gold border-ink shadow-md'
                    : 'bg-chalk text-muted border-ink/15 hover:border-ink hover:text-ink'
                }`}
              >
                {t.shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tournament Overview Banner */}
      <div className="bg-ink text-chalk rounded-3xl p-8 sm:p-10 border border-white/10 grain relative overflow-hidden shadow-xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gold text-ink font-mono text-[10px] font-bold uppercase tracking-wider">
                {tourney.edition}
              </span>
              <span className="text-xs font-mono text-chalk/70">
                {tourney.category}
              </span>
            </div>

            <h2 className="display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              {tourney.name}
            </h2>

            <p className="text-sm text-chalk/80 font-sans leading-relaxed">
              {tourney.tagline}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {tourney.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 text-xs font-sans text-chalk/90 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10"
                >
                  <CheckCircle2 size={13} className="text-gold shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key KPI Tiles */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-chalk/60">
                Teams Managed
              </div>
              <div className="display text-3xl text-gold mt-1">
                {tourney.stats.teams}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-chalk/60">
                Matches Tracked
              </div>
              <div className="display text-3xl text-gold mt-1">
                {tourney.stats.matches}
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-chalk/60">
                Goals Recorded
              </div>
              <div className="display text-3xl text-gold mt-1">
                {tourney.stats.goals}
              </div>
              <div className="text-[9px] font-mono text-gold/80 mt-0.5">
                {tourney.stats.avgGoalsPerMatch} / match
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-chalk/60">
                Fair Play Score
              </div>
              <div className="display text-3xl text-emerald-400 mt-1">
                {tourney.stats.fairPlayScore}%
              </div>
              <div className="text-[9px] font-mono text-chalk/60 mt-0.5">
                Zero disputes
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-tabs for Scorers, Keepers, Standings */}
      <div className="bg-white rounded-3xl border border-ink/10 p-6 sm:p-8 shadow-sm">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-ink/10 pb-6 mb-6">
          <div className="flex items-center gap-2">
            <BarChart2 className="text-gold-deep" size={20} />
            <h4 className="display text-xl uppercase tracking-tight text-ink">
              Official Leaderboards & Records
            </h4>
          </div>

          <div className="flex items-center gap-2 p-1 bg-chalk rounded-full border border-ink/10 text-xs font-mono font-bold uppercase">
            <button
              onClick={() => setStatTab('scorers')}
              className={`px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
                statTab === 'scorers'
                  ? 'bg-ink text-gold shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Trophy size={13} /> Top Scorers
            </button>
            <button
              onClick={() => setStatTab('keepers')}
              className={`px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
                statTab === 'keepers'
                  ? 'bg-ink text-gold shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Shield size={13} /> Clean Sheets
            </button>
            <button
              onClick={() => setStatTab('standings')}
              className={`px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 ${
                statTab === 'standings'
                  ? 'bg-ink text-gold shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <TrendingUp size={13} /> Table Snapshot
            </button>
          </div>
        </div>

        {/* Tab 1: Top Scorers (Golden Boot) */}
        {statTab === 'scorers' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-ink/10 text-muted uppercase font-mono text-[10px] tracking-wider">
                  <th className="py-3 px-3">#</th>
                  <th className="py-3 px-3">Player Name</th>
                  <th className="py-3 px-3">Team / School</th>
                  <th className="py-3 px-3 text-center">Matches</th>
                  <th className="py-3 px-3 text-center">Goals</th>
                  <th className="py-3 px-3 text-right">NextSportz TPR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {tourney.topScorers.map((scorer) => (
                  <tr key={scorer.player} className="hover:bg-chalk/50 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-ink">
                      {scorer.rank === 1 ? '🥇' : scorer.rank === 2 ? '🥈' : scorer.rank === 3 ? '🥉' : `${scorer.rank}`}
                    </td>
                    <td className="py-3 px-3 font-bold text-ink flex items-center gap-2">
                      <span>{scorer.player}</span>
                      {scorer.rank === 1 && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-mono uppercase font-bold">
                          Golden Boot
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-muted">{scorer.team}</td>
                    <td className="py-3 px-3 text-center font-mono">{scorer.matches}</td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-ink text-sm">
                      {scorer.goals}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-gold-deep">
                      {scorer.tpr} OVR
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Clean Sheets (Golden Glove) */}
        {statTab === 'keepers' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-ink/10 text-muted uppercase font-mono text-[10px] tracking-wider">
                  <th className="py-3 px-3">#</th>
                  <th className="py-3 px-3">Goalkeeper</th>
                  <th className="py-3 px-3">Team / School</th>
                  <th className="py-3 px-3 text-center">Matches</th>
                  <th className="py-3 px-3 text-center">Clean Sheets</th>
                  <th className="py-3 px-3 text-right">Save Efficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {tourney.cleanSheets.map((keeper) => (
                  <tr key={keeper.player} className="hover:bg-chalk/50 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-ink">
                      {keeper.rank === 1 ? '🧤' : `${keeper.rank}`}
                    </td>
                    <td className="py-3 px-3 font-bold text-ink flex items-center gap-2">
                      <span>{keeper.player}</span>
                      {keeper.rank === 1 && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono uppercase font-bold">
                          Golden Glove
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-muted">{keeper.team}</td>
                    <td className="py-3 px-3 text-center font-mono">{keeper.matches}</td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-ink text-sm">
                      {keeper.cleanSheets}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-emerald-600">
                      {keeper.savePercentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Standings Table Snapshot */}
        {statTab === 'standings' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-ink/10 text-muted uppercase font-mono text-[10px] tracking-wider">
                  <th className="py-3 px-3">Pos</th>
                  <th className="py-3 px-3">Club / Institution</th>
                  <th className="py-3 px-2 text-center">P</th>
                  <th className="py-3 px-2 text-center">W</th>
                  <th className="py-3 px-2 text-center">D</th>
                  <th className="py-3 px-2 text-center">L</th>
                  <th className="py-3 px-2 text-center">GD</th>
                  <th className="py-3 px-3 text-center font-bold">PTS</th>
                  <th className="py-3 px-3 text-right">Form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {tourney.standingsSample.map((row) => (
                  <tr key={row.team} className="hover:bg-chalk/50 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-ink">
                      {row.rank}
                    </td>
                    <td className="py-3 px-3 font-bold text-ink">
                      {row.team}
                    </td>
                    <td className="py-3 px-2 text-center font-mono">{row.played}</td>
                    <td className="py-3 px-2 text-center font-mono">{row.won}</td>
                    <td className="py-3 px-2 text-center font-mono">{row.drawn}</td>
                    <td className="py-3 px-2 text-center font-mono">{row.lost}</td>
                    <td className="py-3 px-2 text-center font-mono">
                      {row.gd > 0 ? `+${row.gd}` : row.gd}
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-ink text-sm">
                      {row.points}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="inline-flex items-center gap-1">
                        {row.form.map((f, i) => (
                          <span
                            key={i}
                            className={`w-4 h-4 rounded text-[9px] font-mono font-bold flex items-center justify-center ${
                              f === 'W'
                                ? 'bg-emerald-500 text-white'
                                : f === 'D'
                                ? 'bg-amber-400 text-ink'
                                : 'bg-rose-500 text-white'
                            }`}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
}
