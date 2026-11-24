"use client";

import React, { useState } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Share2, Download, Sparkles } from "lucide-react";

export default function NewsAndMediaPage() {
  const { store } = useEcosystem();
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "Competition Format", "Sports CSR", "Regional Hubs", "Bankers' Escape"];
  const articles =
    filter === "ALL" ? store.news : store.news.filter((n) => n.category === filter);

  return (
    <div className="min-h-screen bg-[#040914] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" /> OFFICIAL PRESS CENTER, PUBLICATIONS &amp; STORIES
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
              News, Media &amp; <span className="text-amber-400">Publications</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  filter === cat
                    ? "bg-amber-400 text-slate-950 font-black"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="rounded-3xl bg-[#081326] border border-white/15 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <img src={art.imageUrl} alt={art.title} className="w-full h-60 object-cover" />
                <div className="p-6 md:p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
                    <span>{art.category}</span>
                    <span className="text-slate-400">
                      {art.publishedAt} · {art.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-black text-2xl text-white">{art.title}</h2>
                  <p className="text-xs text-amber-200/90 font-medium leading-relaxed">{art.excerpt}</p>
                  <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                    {art.content.map((para, i) => (
                      <p key={i} className="leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Aurium Sports Press Desk</span>
                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold"
                >
                  <Share2 className="w-3.5 h-3.5" /> Copy Share Link
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Official Downloadable Publications Vault */}
        <div className="rounded-3xl bg-[#081326] border border-amber-400/35 p-8 space-y-6">
          <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            OFFICIAL PDF PUBLICATIONS VAULT
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Download Official Handbooks, CSR Manifesto &amp; BFI Location Directory
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {[
              {
                name: "Master Banking Championship Handbook (16 Pages)",
                url: "/downloads/AIC_Titans_Cup_Official_Tournament_Handbook.pdf",
              },
              {
                name: "Master Corporate Sponsorship & CSR Prospectus (16 Pages)",
                url: "/downloads/AIC_Titans_Cup_Sponsorship_and_Partnership_Proposal.pdf",
              },
              {
                name: "National CSR Design Manifesto & Local Plan (8 Pages)",
                url: "/downloads/AIC_Titans_Cup_National_CSR_Manifesto_and_Implementation_Plan.pdf",
              },
              {
                name: "105 BFI Location & 7 Regional Hubs Directory (9 Pages)",
                url: "/downloads/AIC_Titans_Cup_BFI_Location_and_Regional_Hub_Directory.pdf",
              },
              {
                name: "AIC Titans Cup – Type A (Commercial) Handbook",
                url: "/downloads/AIC_Titans_Cup_Type_A_Handbook_and_Proposal.pdf",
              },
              {
                name: "AIC Titans Cup – Type B (Development) Handbook",
                url: "/downloads/AIC_Titans_Cup_Type_B_Handbook_and_Proposal.pdf",
              },
              {
                name: "AIC Titans Cup – Type C (Finance) Handbook",
                url: "/downloads/AIC_Titans_Cup_Type_C_Handbook_and_Proposal.pdf",
              },
              {
                name: "AIC Titans Cup – Type D (Microfinance) Handbook",
                url: "/downloads/AIC_Titans_Cup_Type_D_Handbook_and_Proposal.pdf",
              },
              {
                name: "Clash of the Titans – The Bankers Championship PDF",
                url: "/downloads/Clash_of_the_Titans_The_Bankers_Championship.pdf",
              },
            ].map((doc) => (
              <a
                key={doc.url}
                href={doc.url}
                target="_blank"
                className="p-4 rounded-2xl bg-white/5 hover:bg-amber-400/15 border border-white/10 hover:border-amber-400/40 flex items-center justify-between gap-3 transition-all"
              >
                <span className="font-bold text-white">{doc.name}</span>
                <Download className="w-4 h-4 text-amber-400 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
