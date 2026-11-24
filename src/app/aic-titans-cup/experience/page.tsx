"use client";

import React from "react";
import { Sun, Trophy, Coffee, Music, HeartPulse, Award, CheckCircle2 } from "lucide-react";

const ZONES = [
  {
    code: "ZONE 01 · THE TITANS' ARENA",
    title: "High-Tempo Football, Futsal & Team Challenges",
    desc: "Fast 7-minute league halves and 10-minute knockout halves on premium turf, complemented by crossbar challenges, penalty shootouts, and inter-branch relay competitions.",
    items: ["5v5 / Futsal Championship Pitches", "Bankers Skills & Crossbar Challenge", "Executive Penalty Shootout Showcase", "3-Camera Live Broadcast & Replays"],
    icon: Trophy,
    img: "/images/turf-match-action.jpg",
    accent: "#C7F464",
  },
  {
    code: "ZONE 02 · THE RECHARGE ZONE",
    title: "Relaxation, Recovery & Sideline Comfort",
    desc: "Step off the pitch into shaded resort-style lounge pavilions designed for post-match recovery, physiotherapy, and stress-free relaxation away from banking targets.",
    items: ["Shaded Team Recovery Lounges", "Electrolyte & Hydration Stations", "On-Site Sports Physiotherapy & Ice Baths", "Healthy Smoothies & Fresh Fruit Bars"],
    icon: Coffee,
    img: "/images/escape-sunset-pitch.jpg",
    accent: "#10B981",
  },
  {
    code: "ZONE 03 · THE TITANS SOCIAL",
    title: "Music, Food & Inter-Bank Networking",
    desc: "Where branch managers, credit analysts, IT officers, and CEOs from different institutions connect over curated food stalls, acoustic sunset sessions, and team celebrations.",
    items: ["Inter-Bank Networking Terrace", "Curated Culinary & Coffee Pop-Ups", "Sunset Music & DJ Sessions", "Colleague & Family Spectator Seating"],
    icon: Music,
    img: "/images/himalaya-escape.jpg",
    accent: "#FF783D",
  },
  {
    code: "ZONE 04 · THE HEALTHY TITANS",
    title: "Physical Wellbeing, Fitness & Mental Reset",
    desc: "Promoting preventive healthcare, active living, and mental wellbeing across Nepal's financial workforce — backed by NPR 500,000 player insurance and standby medical care.",
    items: ["Executive Cardiovascular & BMI Checks", "Sports for Mental Wellbeing Workshops", "Mandatory Pitchside Medic & Ambulance", "NPR 500,000 Accidental Player Cover"],
    icon: HeartPulse,
    img: "/images/wellness-pitch.jpg",
    accent: "#2563EB",
  },
  {
    code: "ZONE 05 · THE TITANS CELEBRATION",
    title: "Awards, Trophy Ceremonies & Institutional Pride",
    desc: "Every matchday honours Man of the Match winners, culminating in the Magh Clash of the Titans Awards Gala, The Titan Rolling Shield, and the Governor's CSR Excellence Plaques.",
    items: ["The Titan Rolling Shield Ceremony", "70:30 Winner & Runner-Up Honours", "Branded Media Wall & Team Portraits", "Grassroots CSR & Local Coach Honours"],
    icon: Award,
    img: "/images/trophy-celebration.jpg",
    accent: "#8B5CF6",
  },
];

export default function BankersExperiencePage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Light Championship Hero */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] text-[#101D32] border-b border-[#E2E8F0]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101D32] text-[#C7F464] text-xs font-extrabold uppercase tracking-[0.18em]">
                <Sun className="w-4 h-4" /> THE TITANS&apos; ESCAPE · SPORTING HOLIDAY ATMOSPHERE
              </div>
              <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-[#101D32] leading-tight">
                NOT JUST A TOURNAMENT. YOUR WELL-DESERVED RESET.
              </h1>
              <p className="text-base sm:text-lg text-[#252B35] leading-relaxed">
                After a hectic month of financial reporting, targets, audits, and customer management, it&apos;s time to recharge. AIC Titans Cup blends competitive football with an outdoor sporting holiday created specifically for Nepal&apos;s banking fraternity.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] text-xs text-[#252B35] shadow-sm">
                <strong className="text-[#101D32]">Governance Note:</strong> All festival &amp; hospitality zones below represent the official experience architecture proposed by Aurium Sports, subject to final venue confirmation and organizer budget sign-off.
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/escape-sunset-pitch.jpg"
                alt="The Titans Escape Sporting Holiday"
                className="rounded-3xl shadow-2xl border-4 border-white w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Experience Zones on Midnight Navy */}
      <section className="py-16 sm:py-24 bg-[#101D32]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {ZONES.map((z, idx) => {
            const Icon = z.icon;
            return (
              <div
                key={z.code}
                className="rounded-3xl bg-[#091220] border border-white/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl"
              >
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={z.img} alt={z.title} className="w-full h-full min-h-[260px] object-cover" />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C7F464]">
                    <Icon className="w-4 h-4" /> {z.code}
                  </div>
                  <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white">{z.title}</h2>
                  <p className="text-sm text-[#BFC8D3] leading-relaxed">{z.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {z.items.map((it) => (
                      <div key={it} className="flex items-center gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#C7F464] shrink-0" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
