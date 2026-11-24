"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Download, ShieldCheck, Sparkles, MapPin, Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030710] border-t border-amber-500/25 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Top Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1930] via-[#0F2442] to-[#081528] border border-amber-400/30 p-8 md:p-10 mb-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" />
              YOUR INSTITUTION. YOUR TEAM. YOUR TITAN STORY.
            </div>
            <h3 className="font-display font-black text-2xl md:text-3xl text-white">
              FIVE COMPETITIONS. ONE BANKING FRATERNITY. ONE TITAN LEGACY.
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              Step away from targets, audits, and deadlines. Register your Gentlemen (NPR 25,000) and promotional Ladies (NPR 15,000) squads across our 7 Regional Hubs and champion local grassroots girls football &amp; licensed coach employment.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/aic-titans-cup/register"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all"
            >
              Register Your Institution
            </Link>
            <Link
              href="/aic-titans-cup/sponsors"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all"
            >
              Partner / Sponsor
            </Link>
          </div>
        </div>

        {/* 5-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img src="/logos/parent-crest.svg" alt="AIC Titans Cup" className="w-14 h-16 object-contain" />
              <div>
                <div className="font-display font-black text-xl text-white">AIC TITANS CUP</div>
                <div className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  YOUR GAME. YOUR PEOPLE. YOUR ESCAPE.
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Parent Property of Aurium Sports – The Aurium Academy Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Nepal&apos;s official banking and financial services football &amp; futsal ecosystem uniting all 105 NRB-licensed Class A, B, C, and D institutions across four qualifying championships and the fifth league-cum-knockout championship: <strong className="text-white">Clash of the Titans – The Bankers Championship</strong>.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="/downloads/AIC_Titans_Cup_Official_Tournament_Handbook.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/5 hover:bg-amber-400/20 border border-white/15 text-amber-300 px-3 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" /> Master Handbook PDF
              </a>
              <a
                href="/downloads/AIC_Titans_Cup_Sponsorship_and_Partnership_Proposal.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/5 hover:bg-amber-400/20 border border-white/15 text-amber-300 px-3 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" /> Sponsorship Prospectus PDF
              </a>
              <a
                href="/downloads/AIC_Titans_Cup_National_CSR_Manifesto_and_Implementation_Plan.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/5 hover:bg-teal-500/20 border border-white/15 text-teal-300 px-3 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" /> National CSR Manifesto PDF
              </a>
              <a
                href="/downloads/AIC_Titans_Cup_BFI_Location_and_Regional_Hub_Directory.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/5 hover:bg-teal-500/20 border border-white/15 text-teal-300 px-3 py-2 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" /> 105 BFI &amp; 7 Hubs Directory PDF
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-4">
              The 5 Competitions
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/aic-titans-cup/competitions/type-a" className="hover:text-amber-400 transition-colors">
                  1. AIC Titans Cup – Type A (Commercial)
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/competitions/type-b" className="hover:text-amber-400 transition-colors">
                  2. AIC Titans Cup – Type B (Development)
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/competitions/type-c" className="hover:text-amber-400 transition-colors">
                  3. AIC Titans Cup – Type C (Finance Cos.)
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/competitions/type-d" className="hover:text-amber-400 transition-colors">
                  4. AIC Titans Cup – Type D (Microfinance)
                </Link>
              </li>
              <li>
                <Link
                  href="/aic-titans-cup/competitions/clash-of-the-titans"
                  className="text-amber-300 font-bold hover:text-amber-200 transition-colors"
                >
                  5. Clash of the Titans (Championship)
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/road-to-the-clash" className="text-teal-400 hover:text-teal-300 font-semibold">
                  Interactive Road to the Clash &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-4">
              Experience &amp; Governance
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/aic-titans-cup/about" className="hover:text-amber-400 transition-colors">
                  About &amp; 7m/10m Match Clock
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/experience" className="hover:text-amber-400 transition-colors">
                  Bankers&apos; Experience (Holiday Reset)
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/csr" className="hover:text-amber-400 transition-colors">
                  Sports CSR &amp; Local Coach Jobs
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/sponsors" className="hover:text-amber-400 transition-colors">
                  2-Level Sponsorship Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/news" className="hover:text-amber-400 transition-colors">
                  News, Media &amp; Press Center
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/contact" className="hover:text-amber-400 transition-colors">
                  105 BFI Geolocation &amp; 7 Regional Hubs
                </Link>
              </li>
              <li>
                <Link href="/aic-titans-cup/admin" className="text-amber-300 hover:text-white transition-colors">
                  Tournament Directorate Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-4">
              Aurium Sports Ecosystem
            </div>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://www.auriumsports.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white font-semibold hover:text-amber-400"
                >
                  Aurium Sports Main Portal <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-slate-500">www.auriumsports.com</p>
              </li>
              <li>
                <a
                  href="https://www.auriumsports.com/tournaments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white font-semibold hover:text-amber-400"
                >
                  Aurium Tournaments Directory <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-slate-500">Live, Upcoming &amp; Corporate Events</p>
              </li>
              <li>
                <a
                  href="https://nepalyouthcup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-400 font-semibold hover:text-teal-300"
                >
                  Nepal Youth Cup (9–10 Jan 2027) <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-slate-500">Galaxy Public School · U12 &amp; U14 Futsal</p>
              </li>
              <li>
                <a
                  href="/api/public/summary"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  Read-Only Master JSON API <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Integrity Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Aurium Sports – The Aurium Academy Pvt. Ltd. Official Domain:{" "}
            <span className="text-slate-300 font-semibold">https://aictitanscup.auriumsports.com</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              Zero-Fabrication Governance: Only admin-verified results, qualifiers &amp; CSR audits are published.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
