"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Trophy,
  Sparkles,
  Eye,
  Lock,
} from "lucide-react";

const SCENES = [
  {
    num: 1,
    code: "SCENE 01",
    title: "The Titans Arena",
    subtitle: "Sunset Over the Pitch · Stadium Floodlights Ignite",
  },
  {
    num: 2,
    code: "SCENE 02",
    title: "Four Individual Leagues",
    subtitle: "Type A, Type B, Type C & Type D Enter the Arena",
  },
  {
    num: 3,
    code: "SCENE 03",
    title: "Four League Champions",
    subtitle: "A1 · B1 · C1 · D1 — Peer-Group Supremacy",
  },
  {
    num: 4,
    code: "SCENE 04",
    title: "Four League Runners-Up",
    subtitle: "A2 · B2 · C2 · D2 — Two Qualifiers Per League",
  },
  {
    num: 5,
    code: "SCENE 05",
    title: "Eight Qualifiers Converge",
    subtitle: "4 Champion–Runner-Up Pairs Travel to the Championship Arena",
  },
  {
    num: 6,
    code: "SCENE 06",
    title: "Clash of the Titans",
    subtitle: "The 5th Competition · The Bankers Championship Trophy Emerges",
  },
  {
    num: 7,
    code: "SCENE 07",
    title: "Stage 1: The League Stage",
    subtitle: "Group X (A1,C1,B2,D2) & Group Y (B1,D1,A2,C2) · 7m Halves",
  },
  {
    num: 8,
    code: "SCENE 08",
    title: "Stage 2: The Knockout Stage",
    subtitle: "Semi-Finals (X1 vs Y2 · Y1 vs X2) & 3rd Place · 10m Halves",
  },
  {
    num: 9,
    code: "SCENE 09",
    title: "The Grand Final",
    subtitle: "Two Finalists · Floodlights & The Titan Rolling Shield",
  },
  {
    num: 10,
    code: "SCENE 10",
    title: "The Bankers' Champion",
    subtitle: "ONE BANKING FRATERNITY. ONE TITAN CHAMPION.",
  },
];

export function RoadToTheClashInteractive({ compact = false }: { compact?: boolean }) {
  const { store } = useEcosystem();
  const [scene, setScene] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Auto-advance timer when playing
  useEffect(() => {
    if (!isPlaying || reducedMotion) return;
    const timer = setInterval(() => {
      setScene((prev) => {
        if (prev >= 10) {
          setIsPlaying(false);
          return 10;
        }
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, reducedMotion]);

  // Subtle WebAudio atmospheric chime ONLY if user explicitly clicks Audio ON
  useEffect(() => {
    if (!audioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      const freqs = [220, 246.94, 261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
      osc.frequency.setValueAtTime(freqs[(scene - 1) % freqs.length], ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.1);
    } catch {
      // Ignore if audio blocked
    }
  }, [scene, audioEnabled]);

  const qualifyingLeagues = store.competitions.filter((c) => !c.isChampionship);
  const champions = store.qualifications.filter((q) => q.qualificationRank === "CHAMPION");
  const runnersUp = store.qualifications.filter((q) => q.qualificationRank === "RUNNER_UP");
  const groupX = store.clashStandings.filter((r) => r.groupName === "Group X");
  const groupY = store.clashStandings.filter((r) => r.groupName === "Group Y");
  const sf1 = store.fixtures.find((f) => f.id === "clash-sf1");
  const sf2 = store.fixtures.find((f) => f.id === "clash-sf2");
  const thirdPlace = store.fixtures.find((f) => f.id === "clash-3rd");
  const grandFinal = store.fixtures.find((f) => f.id === "clash-final");

  const verifiedChampionText =
    grandFinal && grandFinal.isVerifiedByAdmin && grandFinal.homeScore !== null && grandFinal.awayScore !== null
      ? grandFinal.homeScore > grandFinal.awayScore
        ? grandFinal.homeTeamName
        : grandFinal.awayTeamName
      : "Awaiting Verified Magh Grand Final Result";

  return (
    <div className="rounded-3xl bg-[#050C1A] border-2 border-amber-500/35 shadow-[0_25px_90px_rgba(0,0,0,0.75)] overflow-hidden">
      {/* Top Cinematic Control Bar */}
      <div className="bg-[#081326] border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            OFFICIAL INTERACTIVE FEATURE · THE ROAD TO THE CLASH
          </div>
          <h3 className="font-display font-black text-xl md:text-2xl text-white">
            FOUR LEAGUES. EIGHT QUALIFIERS. ONE CHAMPIONSHIP.
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? "Pause Journey" : "Play Journey"}
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setScene(1);
            }}
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl border border-white/15"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Replay
          </button>

          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            title="Atmospheric Chime (Never Autoplays)"
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-xl border transition-all ${
              audioEnabled
                ? "bg-teal-500/20 border-teal-400 text-teal-300"
                : "bg-white/5 border-white/15 text-slate-300 hover:text-white"
            }`}
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            {audioEnabled ? "Sound On" : "Sound Off"}
          </button>

          <button
            onClick={() => {
              setReducedMotion(!reducedMotion);
              setIsPlaying(false);
            }}
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-xl border transition-all ${
              reducedMotion
                ? "bg-amber-500/20 border-amber-400 text-amber-300"
                : "bg-white/5 border-white/15 text-slate-300 hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            {reducedMotion ? "Static All-Scenes View" : "Reduced Motion / Static"}
          </button>
        </div>
      </div>

      {/* 10-Scene Timeline Stepper */}
      <div className="bg-[#060E1D] border-b border-white/10 px-4 py-3 overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {SCENES.map((s) => {
            const active = scene === s.num;
            const passed = scene > s.num;
            return (
              <button
                key={s.num}
                onClick={() => {
                  setIsPlaying(false);
                  setScene(s.num);
                }}
                className={`px-3 py-2 rounded-xl text-left transition-all border ${
                  active
                    ? "bg-amber-400 text-slate-950 border-amber-300 font-black shadow-lg scale-[1.02]"
                    : passed
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/30 font-bold"
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="text-[9px] uppercase tracking-widest opacity-80">{s.code}</div>
                <div className="text-xs truncate max-w-[135px]">{s.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Static All-Scenes Accessible Fallback Mode */}
      {reducedMotion ? (
        <div className="p-6 md:p-10 space-y-6 bg-[#071120]">
          <div className="bg-amber-500/10 border border-amber-400/30 rounded-2xl p-4 text-xs text-amber-200">
            <strong>Accessible Static Overview Enabled:</strong> Showing all 10 qualification and championship stages simultaneously using live verified data from the AIC Titans Cup store.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCENES.map((s) => (
              <div key={s.num} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest">
                  {s.code}
                </div>
                <div className="font-display font-bold text-base text-white mt-0.5">{s.title}</div>
                <div className="text-xs text-slate-300 mt-1">{s.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Dynamic Animated Stage Canvas */
        <div className={`relative ${compact ? "min-h-[500px]" : "min-h-[580px]"} p-6 md:p-10 flex flex-col justify-between overflow-hidden`}>
          {/* Atmospheric Stadium & Sunset Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 transition-all duration-1000"
            style={{
              backgroundImage:
                scene <= 2
                  ? "url('/images/escape-sunset-pitch.jpg')"
                  : scene >= 6
                  ? "url('/images/clash-stadium-night.jpg')"
                  : "url('/images/banking-hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040914]/90 via-[#040914]/75 to-[#040914]/95" />

          {/* Active Scene Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                {SCENES[scene - 1].code} OF 10
              </span>
              <h4 className="font-display font-black text-2xl md:text-3xl text-white mt-2">
                {SCENES[scene - 1].title}
              </h4>
              <p className="text-xs md:text-sm text-slate-300">{SCENES[scene - 1].subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScene((s) => Math.max(1, s - 1))}
                disabled={scene === 1}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white border border-white/15"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setScene((s) => Math.min(10, s + 1))}
                disabled={scene === 10}
                className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-30 text-slate-950 font-black"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scene Body Content */}
          <div className="relative z-10 my-auto py-6">
            <AnimatePresence mode="wait">
              {/* SCENE 1: THE TITANS ARENA */}
              {scene === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-3xl mx-auto space-y-5"
                >
                  <div className="relative inline-block">
                    <div className="absolute -inset-6 rounded-full bg-amber-400/25 blur-2xl animate-pulse" />
                    <img
                      src="/logos/parent-crest.svg"
                      alt="AIC Titans Cup Crest"
                      className="relative w-36 h-40 mx-auto object-contain drop-shadow-[0_0_30px_rgba(212,160,23,0.6)]"
                    />
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.28em] text-amber-400">
                    SUNSET OVER THE PITCH · STADIUM FLOODLIGHTS IGNITE
                  </div>
                  <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight">
                    WELCOME TO THE <span className="text-amber-400">TITANS ARENA</span>
                  </h2>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    Across Nepal&apos;s 7 Provinces and 105 NRB-licensed Banks and Financial Institutions, a single connected sporting journey begins: four distinct class qualifying championships leading into a fifth, full-fledged championship tournament.
                  </p>
                </motion.div>
              )}

              {/* SCENE 2: FOUR INDIVIDUAL LEAGUES */}
              {scene === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                  {qualifyingLeagues.map((comp, i) => (
                    <motion.div
                      key={comp.slug}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl bg-[#0A182E]/90 border-2 p-5 flex flex-col items-center text-center"
                      style={{ borderColor: comp.accentHex }}
                    >
                      <img src={comp.logoPath} alt={comp.name} className="w-24 h-28 object-contain mb-3" />
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white mb-2"
                        style={{ backgroundColor: comp.accentHex }}
                      >
                        {comp.nrbClass.split("·")[0]}
                      </span>
                      <h5 className="font-display font-black text-lg text-white">{comp.name}</h5>
                      <p className="text-xs text-slate-300 mt-1">{comp.targetAudience}</p>
                      <div className="mt-4 pt-3 border-t border-white/10 w-full text-[11px] text-amber-300 font-bold">
                        Window: {comp.nepaliMonthWindow}
                      </div>
                      <Link
                        href={`/aic-titans-cup/competitions/${comp.slug}`}
                        className="mt-3 text-[11px] font-extrabold text-white underline hover:text-amber-400"
                      >
                        Explore League &rarr;
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* SCENE 3: FOUR CHAMPIONS */}
              {scene === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center max-w-2xl mx-auto mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                      QUALIFICATION BERTHS 1 TO 4 · LEAGUE CHAMPIONS
                    </span>
                    <h4 className="font-display font-black text-2xl text-white mt-1">
                      The Verified Champion of Each NRB Class Advances (A1 · B1 · C1 · D1)
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {champions.map((q) => (
                      <div
                        key={q.id}
                        className="rounded-2xl bg-gradient-to-b from-amber-500/20 to-[#09152B] border border-amber-400/50 p-5 text-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                          {q.slotCode}
                        </div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                          {q.sourceCompetitionName}
                        </div>
                        <div className="font-display font-black text-lg text-white mt-2">
                          {q.isVerifiedAndApproved && q.institutionName
                            ? q.institutionName
                            : "Pending Official Verification"}
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-slate-200">
                          {q.isVerifiedAndApproved ? (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Champion
                            </>
                          ) : (
                            <>
                              <Lock className="w-3 h-3 text-amber-400" /> Awaiting Stage 1 Completion
                            </>
                          )}
                        </div>
                        <div className="mt-3 text-[11px] text-teal-300 font-semibold">
                          Seeds into Clash {q.assignedClashGroup}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SCENE 4: FOUR RUNNERS-UP */}
              {scene === 4 && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center max-w-2xl mx-auto mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400">
                      QUALIFICATION BERTHS 5 TO 8 · LEAGUE RUNNERS-UP
                    </span>
                    <h4 className="font-display font-black text-2xl text-white mt-1">
                      Each Individual Competition Produces Two Qualifiers (A2 · B2 · C2 · D2)
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {runnersUp.map((q) => (
                      <div
                        key={q.id}
                        className="rounded-2xl bg-gradient-to-b from-teal-500/20 to-[#09152B] border border-teal-400/50 p-5 text-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-teal-400 text-slate-950 font-black text-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                          {q.slotCode}
                        </div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-teal-300">
                          {q.sourceCompetitionName}
                        </div>
                        <div className="font-display font-black text-lg text-white mt-2">
                          {q.isVerifiedAndApproved && q.institutionName
                            ? q.institutionName
                            : "Pending Official Verification"}
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-slate-200">
                          {q.isVerifiedAndApproved ? (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Runner-Up
                            </>
                          ) : (
                            <>
                              <Lock className="w-3 h-3 text-amber-400" /> Awaiting Stage 1 Completion
                            </>
                          )}
                        </div>
                        <div className="mt-3 text-[11px] text-amber-300 font-semibold">
                          Placed in {q.assignedClashGroup} (Opposite Same-Class Champion)
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SCENE 5: EIGHT QUALIFIERS CONVERGE */}
              {scene === 5 && (
                <motion.div
                  key="s5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                      FOUR CHAMPION–RUNNER-UP PAIRS CONVERGE
                    </span>
                    <h4 className="font-display font-black text-2xl text-white mt-1">
                      8 Verified Qualifiers Travel into the Central Championship Arena
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type A Pair (Commercial)", codes: ["A1", "A2"], color: "#2563EB" },
                      { label: "Type B Pair (Development)", codes: ["B1", "B2"], color: "#059669" },
                      { label: "Type C Pair (Finance Cos.)", codes: ["C1", "C2"], color: "#7C3AED" },
                      { label: "Type D Pair (Microfinance)", codes: ["D1", "D2"], color: "#EA580C" },
                    ].map((pair, idx) => (
                      <motion.div
                        key={pair.label}
                        initial={{ opacity: 0, x: idx < 2 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.12 }}
                        className="rounded-2xl bg-[#0A182E] border-2 p-4 space-y-3"
                        style={{ borderColor: pair.color }}
                      >
                        <div className="text-xs font-black uppercase tracking-wider text-white text-center pb-2 border-b border-white/10">
                          {pair.label}
                        </div>
                        {pair.codes.map((code) => {
                          const q = store.qualifications.find((item) => item.slotCode === code);
                          return (
                            <div
                              key={code}
                              className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2"
                            >
                              <div>
                                <div className="text-[10px] font-extrabold text-amber-400">
                                  {code} · {q?.qualificationRank}
                                </div>
                                <div className="text-xs font-bold text-white">
                                  {q?.isVerifiedAndApproved && q.institutionName
                                    ? q.institutionName
                                    : "Pending Verification"}
                                </div>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/10 text-teal-300">
                                {q?.assignedClashGroup}
                              </span>
                            </div>
                          );
                        })}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SCENE 6: CLASH OF THE TITANS REVEAL */}
              {scene === 6 && (
                <motion.div
                  key="s6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-3xl mx-auto space-y-5"
                >
                  <div className="flex items-center justify-center gap-8">
                    <img
                      src="/logos/clash-crest.svg"
                      alt="Clash of the Titans Emblem"
                      className="w-32 h-36 object-contain drop-shadow-[0_0_30px_rgba(212,160,23,0.65)]"
                    />
                    <img
                      src="/logos/titan-trophy.svg"
                      alt="The Titan Rolling Shield Trophy"
                      className="w-28 h-36 object-contain drop-shadow-[0_0_30px_rgba(253,224,71,0.5)]"
                    />
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-amber-400">
                    COMPETITION 05 · MAGH (6 CHAMPIONSHIP MATCHDAYS)
                  </div>
                  <h2 className="font-display font-black text-4xl md:text-5xl text-white">
                    CLASH OF THE TITANS
                  </h2>
                  <div className="text-lg font-extrabold tracking-widest text-amber-300 uppercase">
                    THE BANKERS CHAMPIONSHIP
                  </div>
                  <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                    Not a single final match — a complete, standalone league-cum-knockout tournament where the 8 verified qualifiers battle across Group X &amp; Group Y (7m halves) before entering the Semi-Finals, 3rd Place Playoff, and Grand Final (10m halves).
                  </p>
                </motion.div>
              )}

              {/* SCENE 7: THE LEAGUE STAGE (GROUP X & GROUP Y) */}
              {scene === 7 && (
                <motion.div
                  key="s7"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {[
                    { title: "GROUP X · SEEDED LEAGUE STAGE (A1 · C1 · B2 · D2)", rows: groupX },
                    { title: "GROUP Y · SEEDED LEAGUE STAGE (B1 · D1 · A2 · C2)", rows: groupY },
                  ].map((grp) => (
                    <div
                      key={grp.title}
                      className="rounded-2xl bg-[#0A182E] border border-amber-400/40 p-5 overflow-x-auto"
                    >
                      <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-3">
                        {grp.title}
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-white/15 text-slate-400">
                            <th className="py-2">Slot / Team</th>
                            <th className="py-2 text-center">P</th>
                            <th className="py-2 text-center">W</th>
                            <th className="py-2 text-center">D</th>
                            <th className="py-2 text-center">L</th>
                            <th className="py-2 text-center">GD</th>
                            <th className="py-2 text-center text-amber-300">PTS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {grp.rows.map((r, idx) => (
                            <tr key={r.teamId} className="border-b border-white/5">
                              <td className="py-2.5 font-bold text-white">
                                <span className="inline-block w-6 text-amber-400">{r.qualificationSlotCode}</span>{" "}
                                {r.institutionName}
                                {idx < 2 && (
                                  <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                                    Top 2 SF Zone
                                  </span>
                                )}
                              </td>
                              <td className="py-2.5 text-center">{r.played}</td>
                              <td className="py-2.5 text-center">{r.won}</td>
                              <td className="py-2.5 text-center">{r.drawn}</td>
                              <td className="py-2.5 text-center">{r.lost}</td>
                              <td className="py-2.5 text-center">{r.goalDifference}</td>
                              <td className="py-2.5 text-center font-black text-amber-400">{r.points}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mt-3 text-[11px] text-slate-400">
                        Single round-robin (3 matches/team · 7 min each half · 20-min match slot · Days 1–3).
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* SCENE 8: THE KNOCKOUT STAGE */}
              {scene === 8 && (
                <motion.div
                  key="s8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                  {[sf1, sf2, thirdPlace].map((m, idx) => (
                    <div
                      key={m?.id || idx}
                      className="rounded-2xl bg-[#0A182E] border border-amber-400/40 p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                          {m?.dayLabel}
                        </div>
                        <div className="text-xs text-teal-300 font-bold mt-1">
                          10 Minutes Each Half · 35-Min Slot
                        </div>
                        <div className="mt-4 space-y-2.5">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{m?.homeTeamName}</span>
                            <span className="font-black text-amber-400">
                              {m?.isVerifiedByAdmin && m.homeScore !== null ? m.homeScore : "—"}
                            </span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{m?.awayTeamName}</span>
                            <span className="font-black text-amber-400">
                              {m?.isVerifiedByAdmin && m.awayScore !== null ? m.awayScore : "—"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                        Status: <strong className="text-white">{m?.status}</strong> (Direct 3-kick penalty shootout if tied)
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* SCENE 9: THE GRAND FINAL */}
              {scene === 9 && (
                <motion.div
                  key="s9"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-3xl mx-auto text-center space-y-5"
                >
                  <div className="text-xs font-black uppercase tracking-[0.28em] text-amber-400">
                    MAGH DAY 6 · BANKERS&apos; CLASH-6 · 10 MINUTES EACH HALF
                  </div>
                  <h3 className="font-display font-black text-3xl md:text-4xl text-white">
                    THE GRAND FINAL OF CLASH OF THE TITANS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 bg-[#0A182E] border-2 border-amber-400/50 rounded-3xl p-6">
                    <div className="p-4 rounded-2xl bg-white/5">
                      <div className="text-[10px] font-bold text-amber-300 uppercase">Finalist 01</div>
                      <div className="font-display font-black text-lg text-white mt-1">
                        {grandFinal?.homeTeamName}
                      </div>
                      <div className="text-2xl font-black text-amber-400 mt-2">
                        {grandFinal?.isVerifiedByAdmin && grandFinal.homeScore !== null
                          ? grandFinal.homeScore
                          : "—"}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="/logos/titan-trophy.svg" alt="Trophy" className="w-20 h-24 object-contain" />
                      <span className="text-xs font-black uppercase tracking-widest text-amber-400 mt-1">
                        VS · 10m × 2
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5">
                      <div className="text-[10px] font-bold text-amber-300 uppercase">Finalist 02</div>
                      <div className="font-display font-black text-lg text-white mt-1">
                        {grandFinal?.awayTeamName}
                      </div>
                      <div className="text-2xl font-black text-amber-400 mt-2">
                        {grandFinal?.isVerifiedByAdmin && grandFinal.awayScore !== null
                          ? grandFinal.awayScore
                          : "—"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SCENE 10: THE BANKERS' CHAMPION */}
              {scene === 10 && (
                <motion.div
                  key="s10"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-3xl mx-auto space-y-5"
                >
                  <img
                    src="/logos/titan-trophy.svg"
                    alt="The Titan Rolling Shield"
                    className="w-28 h-36 mx-auto object-contain drop-shadow-[0_0_35px_rgba(253,224,71,0.75)]"
                  />
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-amber-400">
                    THE ULTIMATE HONOUR OF NEPAL&apos;S FINANCIAL SECTOR
                  </div>
                  <h2 className="font-display font-black text-3xl md:text-5xl text-white">
                    ONE BANKING FRATERNITY.<br />
                    <span className="text-amber-400">ONE TITAN CHAMPION.</span>
                  </h2>
                  <div className="inline-block rounded-2xl bg-[#0A182E] border-2 border-amber-400 px-8 py-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      VERIFIED AIC TITANS CUP BANKERS&apos; CHAMPION
                    </div>
                    <div className="font-display font-black text-xl md:text-2xl text-amber-300 mt-1">
                      {verifiedChampionText}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <Link
                      href="/aic-titans-cup/competitions/clash-of-the-titans"
                      className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl"
                    >
                      Explore Clash of the Titans Page
                    </Link>
                    <Link
                      href="/aic-titans-cup/admin"
                      className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl"
                    >
                      Verify Qualifiers in Admin Portal
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Live Data Integrity Footer */}
          <div className="relative z-10 border-t border-white/10 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                Connected to Live Ecosystem Data Store · Zero hardcoded winners or fabricated scores.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/aic-titans-cup/competitions" className="text-amber-300 hover:underline font-semibold">
                Explore All 4 Qualifying Leagues &rarr;
              </Link>
              <Link href="/aic-titans-cup/competitions/clash-of-the-titans" className="text-teal-300 hover:underline font-semibold">
                View Clash Standings &amp; Bracket &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
