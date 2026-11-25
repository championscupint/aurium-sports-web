"use client";

import React from "react";
import Link from "next/link";
import { RoadToTheClashInteractive } from "@/components/aic/RoadToTheClashInteractive";
import { Sparkles, ArrowRight } from "lucide-react";

export default function RoadToTheClashPage() {
  return (
    <div className="min-h-screen bg-[#101D32] py-14 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
            <Sparkles className="w-4 h-4" /> SIGNATURE INTERACTIVE EXPERIENCE · 10 SCENES
          </div>
          <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
            The Road to the <span className="text-[#C7F464]">Clash</span>
          </h1>
          <p className="text-base sm:text-lg text-[#BFC8D3] leading-relaxed">
            FOUR LEAGUES. EIGHT QUALIFIERS. ONE CHAMPIONSHIP. Step through all 10 interactive scenes showing how the verified Champion and Runner-Up of Types A, B, C, and D converge into Clash of the Titans – The Bankers Championship.
          </p>
        </div>

        <RoadToTheClashInteractive basePath="/aic-titans-cup" />

        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-[#091220] border border-white/15">
          <div className="text-xs sm:text-sm text-[#BFC8D3]">
            Ready to enter your institution&apos;s Gentlemen and Ladies squads in Stage 1?
          </div>
          <Link
            href="/aic-titans-cup/register"
            className="inline-flex items-center gap-2 bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-colors"
          >
            Register Your Institution <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
