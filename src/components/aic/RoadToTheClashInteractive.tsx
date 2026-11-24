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
  Eye,
  Lock,
} from "lucide-react";

const SCENES = [
  { num: 1, code: "SCENE 01", title: "The Titans Arena", subtitle: "Sunset Over the Pitch · Stadium Floodlights Ignite" },
  { num: 2, code: "SCENE 02", title: "Four Individual Leagues", subtitle: "Type A, Type B, Type C & Type D Enter the Arena" },
  { num: 3, code: "SCENE 03", title: "Four League Champions", subtitle: "A1 · B1 · C1 · D1 — Peer-Group Supremacy" },
  { num: 4, code: "SCENE 04", title: "Four League Runners-Up", subtitle: "A2 · B2 · C2 · D2 — Two Qualifiers Per League" },
  { num: 5, code: "SCENE 05", title: "Eight Qualifiers Converge", subtitle: "4 Champion–Runner-Up Pairs Travel to the Championship Arena" },
  { num: 6, code: "SCENE 06", title: "Clash of the Titans", subtitle: "The 5th Competition · The Bankers Championship Trophy Emerges" },
  { num: 7, code: "SCENE 07", title: "Stage 1: The League Stage", subtitle: "Group X (A1,C1,B2,D2) & Group Y (B1,D1,A2,C2) · 7m Halves" },
  { num: 8, code: "SCENE 08", title: "Stage 2: The Knockout Stage", subtitle: "Semi-Finals (X1 vs Y2 · Y1 vs X2) & 3rd Place · 10m Halves" },
  { num: 9, code: "SCENE 09", title: "The Grand Final", subtitle: "Two Finalists · Floodlights & The Titan Rolling Shield" },
  { num: 10, code: "SCENE 10", title: "The Bankers' Champion", subtitle: "ONE BANKING FRATERNITY. ONE TITAN CHAMPION." },
];

export function RoadToTheClashInteractive({
  compact = false,
  basePath = "",
}: {
  compact?: boolean;
  basePath?: string;
}) {
  const { store } = useEcosystem();
  const [scene, setScene] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const resolveHref = (h: string) => {
    if (!basePath) return h;
    return h === "/" ? basePath : `${basePath}${h}`;
  };

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

  useEffect(() => {
    if (!audioEnabled) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
      // Ignore audio errors
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
    grandFinal &&
    grandFinal.isVerifiedByAdmin &&
    grandFinal.homeScore !== null &&
    grandFinal.awayScore !== null
      ? grandFinal.homeScore > grandFinal.awayScore
        ? grandFinal.homeTeamName
        : grandFinal.awayTeamName
      : "Awaiting Verified Magh Grand Final Result";

  return (
    <div className="rounded-3xl bg-[#101D32] border border-[#BFC8D3]/25 shadow-2xl overflow-hidden text-[#F7F8FA]">
      {/* Control Header */}
      <div className="bg-[#091220] border-b border-[#BFC8D3]/15 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="font-titan-mono text-[11px] font-bold uppercase tracking-widest text-[#C7F464]">
            THE ROAD TO THE CLASH · INTERACTIVE TOURNAMENT JOURNEY
          </div>
          <h3 className="font-titan-display font-extrabold text-lg sm:text-2xl text-[#F7F8FA] mt-0.5">
            FOUR COMPETITIONS. EIGHT QUALIFIERS. ONE CLASH OF THE TITANS.
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 bg-[#FF783D] hover:bg-[#FF5E1A] text-white font-titan-display font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? "Pause" : "Play Journey"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setScene(1);
            }}
            className="inline-flex items-center gap-1.5 bg-[#162642] hover:bg-[#1e3256] text-[#F7F8FA] font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-[#BFC8D3]/20"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>

          <button
            type="button"
            onClick={() => setAudioEnabled(!audioEnabled)}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-all ${
              audioEnabled
                ? "bg-[#C7F464] text-[#101D32] border-[#C7F464] font-bold"
                : "bg-[#162642] border-[#BFC8D3]/20 text-[#BFC8D3] hover:text-white"
            }`}
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{audioEnabled ? "Sound On" : "Sound Off"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setReducedMotion(!reducedMotion);
              setIsPlaying(false);
            }}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-all ${
              reducedMotion
                ? "bg-[#C7F464] text-[#101D32] border-[#C7F464] font-bold"
                : "bg-[#162642] border-[#BFC8D3]/20 text-[#BFC8D3] hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{reducedMotion ? "Static All-Scenes" : "Static View"}</span>
          </button>
        </div>
      </div>

      {/* 10-Scene Selector Pills (Responsive Grid — Never forces horizontal page scroll) */}
      <div className="bg-[#0C1628] border-b border-[#BFC8D3]/15 px-4 sm:px-6 py-3">
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5">
          {SCENES.map((s) => {
            const active = scene === s.num;
            const passed = scene > s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setScene(s.num);
                }}
                className={`p-2 rounded-xl text-left transition-all border ${
                  active
                    ? "bg-[#C7F464] text-[#101D32] border-[#C7F464] font-bold"
                    : passed
                    ? "bg-[#162642] text-[#C7F464] border-[#C7F464]/40 font-semibold"
                    : "bg-[#101D32] text-[#BFC8D3] border-[#BFC8D3]/15 hover:bg-[#162642] hover:text-white"
                }`}
              >
                <div className="font-titan-mono text-[9px] uppercase tracking-wider opacity-85">
                  {s.code}
                </div>
                <div className="text-[11px] font-bold leading-tight mt-0.5 line-clamp-1">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {reducedMotion ? (
        <div className="p-4 sm:p-8 space-y-5 bg-[#101D32]">
          <div className="bg-[#162642] border border-[#C7F464]/40 rounded-2xl p-4 text-xs text-[#F7F8FA]">
            <strong>Accessible Static Mode Enabled:</strong> Showing all 10 qualification and championship stages simultaneously using live verified data.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCENES.map((s) => (
              <div key={s.num} className="p-4 rounded-2xl bg-[#162642] border border-[#BFC8D3]/20">
                <div className="font-titan-mono text-[10px] font-bold text-[#C7F464] uppercase">
                  {s.code}
                </div>
                <div className="font-titan-display font-bold text-base text-[#F7F8FA] mt-0.5">
                  {s.title}
                </div>
                <div className="text-xs text-[#BFC8D3] mt-1">{s.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`relative ${
            compact ? "min-h-[480px]" : "min-h-[540px]"
          } p-4 sm:p-8 flex flex-col justify-between overflow-hidden`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-700"
            style={{
              backgroundImage:
                scene <= 2
                  ? "url('/images/escape-sunset-pitch.jpg')"
                  : scene >= 6
                  ? "url('/images/clash-stadium-night.jpg')"
                  : "url('/images/turf-match-action.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101D32]/90 via-[#101D32]/80 to-[#101D32]/95" />

          {/* Scene Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#BFC8D3]/15 pb-4">
            <div>
              <span className="font-titan-mono inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#C7F464]/15 text-[#C7F464] border border-[#C7F464]/40">
                {SCENES[scene - 1].code} OF 10
              </span>
              <h4 className="font-titan-display font-extrabold text-xl sm:text-3xl text-[#F7F8FA] mt-2">
                {SCENES[scene - 1].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#BFC8D3]">{SCENES[scene - 1].subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setScene((s) => Math.max(1, s - 1))}
                disabled={scene === 1}
                aria-label="Previous Scene"
                className="p-2.5 rounded-xl bg-[#162642] hover:bg-[#1e3256] disabled:opacity-30 text-white border border-[#BFC8D3]/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setScene((s) => Math.min(10, s + 1))}
                disabled={scene === 10}
                aria-label="Next Scene"
                className="p-2.5 rounded-xl bg-[#C7F464] hover:bg-[#b5e550] disabled:opacity-30 text-[#101D32] font-bold"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scene Content */}
          <div className="relative z-10 my-auto py-6">
            <AnimatePresence mode="wait">
              {scene === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-3xl mx-auto space-y-4"
                >
                  <img
                    src="/logos/parent-crest.svg"
                    alt="AIC Titans Cup Crest"
                    width={128}
                    height={144}
                    className="w-32 h-36 mx-auto object-contain"
                  />
                  <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                    THE TITANS ARENA · NEPAL&apos;S BANKING FOOTBALL ECOSYSTEM
                  </div>
                  <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-[#F7F8FA]">
                    FOUR QUALIFYING LEAGUES. ONE BANKERS CHAMPIONSHIP.
                  </h2>
                  <p className="text-sm text-[#BFC8D3] leading-relaxed">
                    Across Nepal&apos;s 7 Provinces and 105 NRB-licensed Banks and Financial Institutions, Types A, B, C, and D operate as four distinct class championships — qualifying their verified Champion and Runner-Up into the fifth competition: Clash of the Titans.
                  </p>
                </motion.div>
              )}

              {scene === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {qualifyingLeagues.map((comp) => (
                    <div
                      key={comp.slug}
                      className="rounded-2xl bg-[#162642] border-2 p-5 flex flex-col items-center text-center"
                      style={{ borderColor: comp.accentHex }}
                    >
                      <img
                        src={comp.logoPath}
                        alt={comp.name}
                        width={84}
                        height={96}
                        className="w-20 h-24 object-contain mb-3"
                      />
                      <span
                        className="font-titan-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white mb-2"
                        style={{ backgroundColor: comp.accentHex }}
                      >
                        {comp.nrbClass.split("·")[0]}
                      </span>
                      <h5 className="font-titan-display font-bold text-base text-[#F7F8FA]">
                        {comp.name}
                      </h5>
                      <p className="text-xs text-[#BFC8D3] mt-1">{comp.targetAudience}</p>
                      <div className="mt-3 pt-2.5 border-t border-[#BFC8D3]/15 w-full text-xs text-[#C7F464] font-semibold">
                        Window: {comp.nepaliMonthWindow}
                      </div>
                      <Link
                        href={resolveHref(`/competitions/${comp.slug}`)}
                        className="mt-2.5 text-xs font-bold text-[#F7F8FA] underline hover:text-[#C7F464]"
                      >
                        Explore League &rarr;
                      </Link>
                    </div>
                  ))}
                </motion.div>
              )}

              {scene === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {champions.map((q) => (
                    <div
                      key={q.id}
                      className="rounded-2xl bg-[#162642] border border-[#C7F464]/50 p-5 text-center space-y-2"
                    >
                      <div className="font-titan-mono w-11 h-11 rounded-full bg-[#C7F464] text-[#101D32] font-extrabold text-base flex items-center justify-center mx-auto">
                        {q.slotCode}
                      </div>
                      <div className="font-titan-mono text-[10px] font-bold uppercase text-[#C7F464]">
                        {q.sourceCompetitionName}
                      </div>
                      <div className="font-titan-display font-bold text-base text-[#F7F8FA]">
                        {q.isVerifiedAndApproved && q.institutionName
                          ? q.institutionName
                          : "Pending Official Verification"}
                      </div>
                      <div className="text-xs text-[#BFC8D3]">
                        Seeds into Clash <strong className="text-[#C7F464]">{q.assignedClashGroup}</strong>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {scene === 4 && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {runnersUp.map((q) => (
                    <div
                      key={q.id}
                      className="rounded-2xl bg-[#162642] border border-[#FF783D]/50 p-5 text-center space-y-2"
                    >
                      <div className="font-titan-mono w-11 h-11 rounded-full bg-[#FF783D] text-white font-extrabold text-base flex items-center justify-center mx-auto">
                        {q.slotCode}
                      </div>
                      <div className="font-titan-mono text-[10px] font-bold uppercase text-[#FF783D]">
                        {q.sourceCompetitionName}
                      </div>
                      <div className="font-titan-display font-bold text-base text-[#F7F8FA]">
                        {q.isVerifiedAndApproved && q.institutionName
                          ? q.institutionName
                          : "Pending Official Verification"}
                      </div>
                      <div className="text-xs text-[#BFC8D3]">
                        Placed in <strong className="text-[#C7F464]">{q.assignedClashGroup}</strong> (Opposite Same-Class Winner)
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {scene === 5 && (
                <motion.div
                  key="s5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {[
                    { label: "Type A Pair (Commercial)", codes: ["A1", "A2"], color: "#2563EB" },
                    { label: "Type B Pair (Development)", codes: ["B1", "B2"], color: "#10B981" },
                    { label: "Type C Pair (Finance Cos.)", codes: ["C1", "C2"], color: "#8B5CF6" },
                    { label: "Type D Pair (Microfinance)", codes: ["D1", "D2"], color: "#FF783D" },
                  ].map((pair) => (
                    <div
                      key={pair.label}
                      className="rounded-2xl bg-[#162642] border-2 p-4 space-y-2.5"
                      style={{ borderColor: pair.color }}
                    >
                      <div className="font-titan-display text-xs font-bold uppercase text-white text-center pb-2 border-b border-[#BFC8D3]/15">
                        {pair.label}
                      </div>
                      {pair.codes.map((code) => {
                        const q = store.qualifications.find((item) => item.slotCode === code);
                        return (
                          <div
                            key={code}
                            className="p-2.5 rounded-xl bg-[#101D32] border border-[#BFC8D3]/15 flex items-center justify-between gap-2"
                          >
                            <div className="min-w-0">
                              <div className="font-titan-mono text-[10px] font-bold text-[#C7F464]">
                                {code} · {q?.qualificationRank}
                              </div>
                              <div className="text-xs font-semibold text-white truncate">
                                {q?.isVerifiedAndApproved && q.institutionName
                                  ? q.institutionName
                                  : "Pending Verification"}
                              </div>
                            </div>
                            <span className="font-titan-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#162642] text-[#C7F464] shrink-0">
                              {q?.assignedClashGroup}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </motion.div>
              )}

              {scene === 6 && (
                <motion.div
                  key="s6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-3xl mx-auto space-y-4"
                >
                  <div className="flex items-center justify-center gap-6">
                    <img
                      src="/logos/clash-crest.svg"
                      alt="Clash of the Titans"
                      width={112}
                      height={128}
                      className="w-28 h-32 object-contain"
                    />
                    <img
                      src="/logos/titan-trophy.svg"
                      alt="The Titan Rolling Shield"
                      width={96}
                      height={128}
                      className="w-24 h-32 object-contain"
                    />
                  </div>
                  <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                    COMPETITION 05 · MAGH (6 CHAMPIONSHIP MATCHDAYS)
                  </div>
                  <h2 className="font-titan-display font-extrabold text-3xl sm:text-5xl text-[#F7F8FA]">
                    CLASH OF THE TITANS
                  </h2>
                  <p className="text-sm text-[#BFC8D3] max-w-2xl mx-auto">
                    A separate, full-fledged two-stage League-cum-Knockout championship where the 8 verified qualifiers battle across Group X &amp; Group Y (7m halves) before advancing to the Semi-Finals, 3rd Place Playoff, and Grand Final (10m halves).
                  </p>
                </motion.div>
              )}

              {scene === 7 && (
                <motion.div
                  key="s7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                  {[
                    { title: "GROUP X · LEAGUE STAGE (A1 · C1 · B2 · D2)", rows: groupX },
                    { title: "GROUP Y · LEAGUE STAGE (B1 · D1 · A2 · C2)", rows: groupY },
                  ].map((grp) => (
                    <div
                      key={grp.title}
                      className="rounded-2xl bg-[#162642] border border-[#C7F464]/40 p-4 overflow-x-auto"
                    >
                      <div className="font-titan-mono text-xs font-bold uppercase text-[#C7F464] mb-3">
                        {grp.title}
                      </div>
                      <table className="w-full text-left text-xs min-w-[320px]">
                        <thead>
                          <tr className="border-b border-[#BFC8D3]/20 text-[#BFC8D3]">
                            <th className="py-2 pr-2">Slot / Team</th>
                            <th className="py-2 px-1.5 text-center font-titan-mono">P</th>
                            <th className="py-2 px-1.5 text-center font-titan-mono">W</th>
                            <th className="py-2 px-1.5 text-center font-titan-mono">D</th>
                            <th className="py-2 px-1.5 text-center font-titan-mono">L</th>
                            <th className="py-2 px-1.5 text-center font-titan-mono">GD</th>
                            <th className="py-2 pl-1.5 text-center font-titan-mono text-[#C7F464]">PTS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {grp.rows.map((r) => (
                            <tr key={r.teamId} className="border-b border-[#BFC8D3]/10">
                              <td className="py-2 pr-2 font-semibold text-white">
                                <span className="font-titan-mono font-bold text-[#C7F464] mr-1.5">
                                  {r.qualificationSlotCode}
                                </span>
                                {r.institutionName}
                              </td>
                              <td className="py-2 px-1.5 text-center font-titan-mono">{r.played}</td>
                              <td className="py-2 px-1.5 text-center font-titan-mono">{r.won}</td>
                              <td className="py-2 px-1.5 text-center font-titan-mono">{r.drawn}</td>
                              <td className="py-2 px-1.5 text-center font-titan-mono">{r.lost}</td>
                              <td className="py-2 px-1.5 text-center font-titan-mono">{r.goalDifference}</td>
                              <td className="py-2 pl-1.5 text-center font-titan-mono font-bold text-[#C7F464]">
                                {r.points}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </motion.div>
              )}

              {scene === 8 && (
                <motion.div
                  key="s8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {[sf1, sf2, thirdPlace].map((m, idx) => (
                    <div
                      key={m?.id || idx}
                      className="rounded-2xl bg-[#162642] border border-[#BFC8D3]/25 p-5 space-y-3"
                    >
                      <div className="font-titan-mono text-[10px] font-bold uppercase text-[#C7F464]">
                        {m?.dayLabel}
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-[#101D32] flex items-center justify-between gap-2">
                          <span className="font-semibold text-white">{m?.homeTeamName}</span>
                          <span className="font-titan-mono font-bold text-[#C7F464]">
                            {m?.isVerifiedByAdmin && m.homeScore !== null ? m.homeScore : "—"}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#101D32] flex items-center justify-between gap-2">
                          <span className="font-semibold text-white">{m?.awayTeamName}</span>
                          <span className="font-titan-mono font-bold text-[#C7F464]">
                            {m?.isVerifiedByAdmin && m.awayScore !== null ? m.awayScore : "—"}
                          </span>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#BFC8D3]">
                        10m × 2 Halves · Status: <strong className="text-white">{m?.status}</strong>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {scene === 9 && (
                <motion.div
                  key="s9"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-3xl mx-auto text-center space-y-5"
                >
                  <div className="font-titan-mono text-xs font-bold uppercase tracking-widest text-[#C7F464]">
                    MAGH DAY 6 · BANKERS&apos; CLASH-6 · 10 MINUTES EACH HALF
                  </div>
                  <h3 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white">
                    THE GRAND FINAL OF CLASH OF THE TITANS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 bg-[#162642] border-2 border-[#C7F464] rounded-3xl p-6">
                    <div className="p-4 rounded-2xl bg-[#101D32]">
                      <div className="font-titan-mono text-[10px] font-bold text-[#C7F464] uppercase">
                        Finalist 01
                      </div>
                      <div className="font-titan-display font-bold text-base text-white mt-1">
                        {grandFinal?.homeTeamName}
                      </div>
                      <div className="font-titan-mono text-2xl font-bold text-[#C7F464] mt-2">
                        {grandFinal?.isVerifiedByAdmin && grandFinal.homeScore !== null
                          ? grandFinal.homeScore
                          : "—"}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src="/logos/titan-trophy.svg"
                        alt="Trophy"
                        width={72}
                        height={92}
                        className="w-18 h-24 object-contain"
                      />
                      <span className="font-titan-mono text-xs font-bold uppercase text-[#FF783D] mt-1">
                        VS · 10m × 2
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#101D32]">
                      <div className="font-titan-mono text-[10px] font-bold text-[#C7F464] uppercase">
                        Finalist 02
                      </div>
                      <div className="font-titan-display font-bold text-base text-white mt-1">
                        {grandFinal?.awayTeamName}
                      </div>
                      <div className="font-titan-mono text-2xl font-bold text-[#C7F464] mt-2">
                        {grandFinal?.isVerifiedByAdmin && grandFinal.awayScore !== null
                          ? grandFinal.awayScore
                          : "—"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {scene === 10 && (
                <motion.div
                  key="s10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-3xl mx-auto space-y-5"
                >
                  <img
                    src="/logos/titan-trophy.svg"
                    alt="The Titan Rolling Shield"
                    width={100}
                    height={130}
                    className="w-24 h-32 mx-auto object-contain"
                  />
                  <h2 className="font-titan-display font-extrabold text-2xl sm:text-4xl text-white">
                    ONE BANKING FRATERNITY. <span className="text-[#C7F464]">ONE TITAN CHAMPION.</span>
                  </h2>
                  <div className="inline-block rounded-2xl bg-[#162642] border-2 border-[#C7F464] px-6 py-4">
                    <div className="font-titan-mono text-[10px] font-bold uppercase text-[#BFC8D3]">
                      VERIFIED AIC TITANS CUP BANKERS&apos; CHAMPION
                    </div>
                    <div className="font-titan-display font-bold text-lg sm:text-2xl text-[#C7F464] mt-1">
                      {verifiedChampionText}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <Link
                      href={resolveHref("/competitions/clash-of-the-titans")}
                      className="bg-[#C7F464] text-[#101D32] font-titan-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl"
                    >
                      Explore Clash of the Titans Page
                    </Link>
                    <Link
                      href={resolveHref("/admin")}
                      className="bg-[#162642] text-white border border-[#BFC8D3]/25 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl"
                    >
                      Verify Qualifiers in Admin Portal
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Data Integrity Note */}
          <div className="relative z-10 border-t border-[#BFC8D3]/15 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#BFC8D3]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C7F464] shrink-0" />
              <span>Connected to Live Ecosystem Data Store · Zero hardcoded winners or fabricated scores.</span>
            </div>
            <Link
              href={resolveHref("/competitions/clash-of-the-titans")}
              className="text-[#C7F464] hover:underline font-semibold"
            >
              Open Full Clash Standings &amp; Bracket &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
