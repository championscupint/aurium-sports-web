"use client";

import React, { useState } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { MapPin, Building2, Search, Download, Sparkles } from "lucide-react";

export default function ContactAndHubsPage() {
  const { bfis, regionalHubs } = useEcosystem();
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("ALL");

  const filtered = bfis.filter((b) => {
    const matchClass = classFilter === "ALL" || b.nrbClass === classFilter;
    const matchQuery =
      !search ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.headOffice.toLowerCase().includes(search.toLowerCase()) ||
      b.province.toLowerCase().includes(search.toLowerCase()) ||
      b.assignedHub.toLowerCase().includes(search.toLowerCase());
    return matchClass && matchQuery;
  });

  return (
    <div className="min-h-screen bg-[#040914] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">
              <Sparkles className="w-4 h-4" /> SECRETARIAT CONTACT &amp; NATIONAL BFI GEOLOCATION TRACKER
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white">
              7 Regional Hubs &amp; <span className="text-amber-400">105 BFI Directory</span>
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Because <strong className="text-white">58 of Nepal&apos;s 105 NRB-licensed Banks and Financial Institutions (55.2%)</strong> are headquartered outside Kathmandu Valley, AIC Titans Cup organizes regional qualifier pods across 7 Regional Hubs so every team gets an accessible nearby opportunity.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="/downloads/AIC_Titans_Cup_BFI_Location_and_Regional_Hub_Directory.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider py-4 px-5 rounded-xl"
            >
              <Download className="w-4 h-4" /> Download 105-BFI Directory PDF
            </a>
          </div>
        </div>

        {/* 7 Regional Tournament Hubs Cards */}
        <section className="space-y-6">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            The 7 Regional Tournament Hubs Across Nepal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionalHubs.map((h) => (
              <div
                key={h.id}
                className="rounded-3xl bg-[#081326] border border-amber-400/35 p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950">{h.id}</span>
                    <span className="text-teal-300">{h.province}</span>
                  </div>
                  <h3 className="font-display font-black text-lg text-white pt-1">{h.name}</h3>
                  <div className="text-xs text-amber-200 font-semibold">Cities: {h.cities}</div>
                  <div className="text-xs text-slate-300">
                    <strong className="text-white">HQs Hosted:</strong> {h.hqsHosted} ({h.density})
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{h.operationalPlan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Searchable 105-BFI Census */}
        <section className="rounded-3xl bg-[#081326] border border-white/15 p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-teal-400">
                INTERACTIVE BFI LOCATION &amp; CSR TRACKER
              </div>
              <h2 className="font-display font-black text-2xl text-white mt-1">
                Search All 105 NRB-Licensed Institutions ({filtered.length} Shown)
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search bank, city, province, hub..."
                  className="pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs text-white w-64"
                />
              </div>
              <div className="flex gap-1.5">
                {["ALL", "Class A", "Class B", "Class C", "Class D"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setClassFilter(cls)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold ${
                      classFilter === cls
                        ? "bg-amber-400 text-slate-950 font-black"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto max-h-[540px] overflow-y-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs min-w-[920px]">
              <thead className="bg-[#050C1A] sticky top-0">
                <tr className="border-b border-white/15 text-slate-400">
                  <th className="py-3 px-3">ID</th>
                  <th className="py-3 px-3">Institution Name</th>
                  <th className="py-3 px-3">NRB Class</th>
                  <th className="py-3 px-3">Head Office</th>
                  <th className="py-3 px-3">Province</th>
                  <th className="py-3 px-3">Branches</th>
                  <th className="py-3 px-3">Assigned Regional Hub</th>
                  <th className="py-3 px-3">Expected Local CSR &amp; Focus</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-2.5 px-3 font-black text-amber-400">{b.id}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{b.name}</td>
                    <td className="py-2.5 px-3 text-teal-300 font-semibold">{b.nrbClass}</td>
                    <td className="py-2.5 px-3 text-slate-300">{b.headOffice}</td>
                    <td className="py-2.5 px-3 text-slate-300">{b.province}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{b.estimatedBranches}</td>
                    <td className="py-2.5 px-3 text-amber-200">{b.assignedHub}</td>
                    <td className="py-2.5 px-3 text-slate-300">
                      <strong className="text-white">{b.expectedCsrRange}</strong> · {b.localCsrFocus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
