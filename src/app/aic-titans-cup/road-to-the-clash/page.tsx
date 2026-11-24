"use client";

import React from "react";
import Link from "next/link";
import { RoadToTheClashInteractive } from "@/components/aic/RoadToTheClashInteractive";
import { Sparkles, ArrowRight } from "lucide-react";

export default function RoadToTheClashPage() {
  return (
    <div className="min-h-screen bg-[#040914] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
            <Sparkles className="w-4 h-4" /> SIGNATURE INTERACTIVE EXPERIENCE · 10 SCENES
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
            The Road to the <span className="text-amber-400">Clash</span>
          </h1>
          <p className="text-base text-slate-300">
            FOUR LEAGUES. EIGHT QUALIFIERS. ONE CHAMPIONSHIP. Step through all 10 interactive scenes showing how the verified Champion and Runner-Up of Types A, B, C, and D converge into Clash of the Titans – The Bankers Championship.
          </p>
        </div>

        <RoadToTheClashInteractive />

        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-[#081326] border border-white/15">
          <div className="text-xs text-slate-300">
            Want to test live qualification transfers and league-stage standings updates in real time?
          </div>
          <Link
            href="/aic-titans-cup/admin"
            className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl"
          >
            Open Qualification Admin Simulator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
