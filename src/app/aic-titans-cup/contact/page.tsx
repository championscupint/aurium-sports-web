"use client";

import React, { useState } from "react";
import { useEcosystem } from "@/components/aic/EcosystemProvider";
import { Search, Download, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-[#101D32] py-14 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#C7F464]">
              <Sparkles className="w-4 h-4" /> SECRETARIAT CONTACT &amp; NATIONAL BFI GEOLOCATION TRACKER
            </div>
            <h1 className="font-titan-display font-bold text-4xl sm:text-6xl text-white">
              7 Regional Hubs &amp; <span className="text-[#C7F464]">105 BFI Directory</span>
            </h1>
            <p className="text-base text-[#BFC8D3] leading-relaxed">
              Because <strong className="text-white">58 of Nepal&apos;s 105 NRB-licensed Banks and Financial Institutions (55.2%)</strong> are headquartered outside Kathmandu Valley, AIC Titans Cup organizes regional qualifier pods across 7 Regional Hubs so every team gets an accessible nearby opportunity.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="/downloads/AIC_Titans_Cup_BFI_Location_and_Regional_Hub_Directory.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#FF783D] hover:bg-[#e8662c] text-white font-extrabold text-xs uppercase tracking-wider py-4 px-5 rounded-xl transition-colors text-center"
            >
              <Download className="w-4 h-4 shrink-0" /> Download 105-BFI Directory PDF
            </a>
          </div>
        </div>

        {/* 7 Regional Tournament Hubs Cards */}
        <section className="space-y-6">
          <h2 className="font-titan-display font-bold text-2xl sm:text-3xl text-white">
            The 7 Regional Tournament Hubs Across Nepal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionalHubs.map((h) => (
              <div
                key={h.id}
                className="rounded-3xl bg-[#091220] border border-[#C7F464]/30 p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider">
                    <span className="px-3 py-1 rounded-full bg-[#C7F464] text-[#101D32]">{h.id}</span>
                    <span className="text-[#C7F464]">{h.province}</span>
                  </div>
                  <h3 className="font-titan-display font-bold text-lg text-white pt-1">{h.name}</h3>
                  <div className="text-xs text-[#FF783D] font-bold">Cities: {h.cities}</div>
                  <div className="text-xs text-[#BFC8D3]">
                    <strong className="text-white">HQs Hosted:</strong> {h.hqsHosted} ({h.density})
                  </div>
                  <p className="text-xs text-[#BFC8D3] leading-relaxed pt-1">{h.operationalPlan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Searchable 105-BFI Census */}
        <section className="rounded-3xl bg-[#F7F8FA] text-[#101D32] border border-[#E2E8F0] p-5 sm:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF783D]">
                INTERACTIVE BFI LOCATION &amp; CSR TRACKER
              </div>
              <h2 className="font-titan-display font-bold text-2xl text-[#101D32] mt-1">
                Search All 105 NRB-Licensed Institutions ({filtered.length} Shown)
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#475569] absolute left-3.5 top-3" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search bank, city, province, hub..."
                  className="pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs text-[#101D32] w-full"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["ALL", "Class A", "Class B", "Class C", "Class D"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setClassFilter(cls)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                      classFilter === cls
                        ? "bg-[#101D32] text-[#C7F464] font-extrabold"
                        : "bg-white text-[#101D32] border border-[#CBD5E1] hover:bg-[#E2E8F0]"
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto max-h-[540px] overflow-y-auto border border-[#CBD5E1] rounded-2xl bg-white">
            <table className="w-full text-left text-xs min-w-[900px]">
              <thead className="bg-[#101D32] text-white sticky top-0">
                <tr className="border-b border-white/15">
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
                  <tr key={b.id} className="border-b border-[#E2E8F0] hover:bg-[#F7F8FA]">
                    <td className="py-2.5 px-3 font-titan-mono font-bold text-[#FF783D]">{b.id}</td>
                    <td className="py-2.5 px-3 font-bold text-[#101D32]">{b.name}</td>
                    <td className="py-2.5 px-3 text-[#2563EB] font-semibold">{b.nrbClass}</td>
                    <td className="py-2.5 px-3 text-[#252B35]">{b.headOffice}</td>
                    <td className="py-2.5 px-3 text-[#252B35]">{b.province}</td>
                    <td className="py-2.5 px-3 font-titan-mono font-bold text-[#101D32]">{b.estimatedBranches}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#101D32]">{b.assignedHub}</td>
                    <td className="py-2.5 px-3 text-[#252B35]">
                      <strong className="text-[#101D32] font-titan-mono">{b.expectedCsrRange}</strong> · {b.localCsrFocus}
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
