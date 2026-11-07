'use client';

import React, { useState, useMemo } from 'react';
import { trainingSchedule, trainingLocations, TrainingSlot } from '@/data/schedule';
import { useEnquiry } from '@/components/EnquiryContext';
import { buttonClass } from '@/lib/ui';
import {
  MapPin,
  Calendar,
  Clock,
  UserCheck,
  Filter,
  CheckCircle2,
  Sparkles,
  Search,
} from 'lucide-react';

export function ScheduleLocationFinder() {
  const { openEnquiry } = useEnquiry();

  const [selectedAge, setSelectedAge] = useState<string>('All');
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [selectedShift, setSelectedShift] = useState<string>('All');

  const filteredSlots = useMemo(() => {
    return trainingSchedule.filter((slot) => {
      const matchAge = selectedAge === 'All' || slot.ageGroup === selectedAge;
      const matchArea = selectedArea === 'All' || slot.locationArea === selectedArea;
      const matchShift = selectedShift === 'All' || slot.sessionType === selectedShift;
      return matchAge && matchArea && matchShift;
    });
  }, [selectedAge, selectedArea, selectedShift]);

  const resetFilters = () => {
    setSelectedAge('All');
    setSelectedArea('All');
    setSelectedShift('All');
  };

  return (
    <div className="w-full space-y-8">
      
      {/* Filter Bar Controls */}
      <div className="p-6 bg-white rounded-3xl border border-ink/10 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink/10 pb-4">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gold-deep" />
            <h3 className="font-display uppercase tracking-wider text-ink text-base">
              Filter Weekly Training Slots
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted">
              {filteredSlots.length} {filteredSlots.length === 1 ? 'Slot' : 'Slots'} Available
            </span>
            {(selectedAge !== 'All' || selectedArea !== 'All' || selectedShift !== 'All') && (
              <button
                onClick={resetFilters}
                className="text-[11px] font-bold text-gold-deep hover:underline ml-2"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* 3 Dropdown Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
          
          {/* Age Group Filter */}
          <div>
            <label className="block text-muted font-bold mb-1.5 uppercase tracking-wider text-[10px]">
              Player Age / Cohort
            </label>
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-ink/15 bg-chalk text-ink focus:outline-none focus:border-gold-deep"
            >
              <option value="All">All Age Groups & Cohorts</option>
              <option value="U8–U10 Grassroots">U8–U10 Grassroots (Ages 6–10)</option>
              <option value="U12–U14 Juniors">U12–U14 Juniors (Ages 11–14)</option>
              <option value="U16 Youth Elite">U16 Youth Elite (Ages 14–17)</option>
              <option value="U14 Girls Elite">U14 Girls Elite (Dana Cup Cohort)</option>
              <option value="Goalkeeping Specialization">Goalkeeping Specialization (Clinic)</option>
            </select>
          </div>

          {/* Location Area Filter */}
          <div>
            <label className="block text-muted font-bold mb-1.5 uppercase tracking-wider text-[10px]">
              Training Area / Hub
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-ink/15 bg-chalk text-ink focus:outline-none focus:border-gold-deep"
            >
              <option value="All">All Training Locations (Valley-Wide)</option>
              <option value="Kathmandu Central">Kathmandu Central (Baneshwor & Ace)</option>
              <option value="Lalitpur">Lalitpur (Patan Dhoka & Khumaltar)</option>
              <option value="Bhaktapur">Bhaktapur (Sirutar Complex)</option>
            </select>
          </div>

          {/* Time Shift Filter */}
          <div>
            <label className="block text-muted font-bold mb-1.5 uppercase tracking-wider text-[10px]">
              Session Timing
            </label>
            <select
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-ink/15 bg-chalk text-ink focus:outline-none focus:border-gold-deep"
            >
              <option value="All">All Timings & Shifts</option>
              <option value="Morning Cohort">Morning Cohort (6:30 AM – 8:30 AM)</option>
              <option value="Evening Cohort">Evening Cohort (3:30 PM – 6:15 PM)</option>
              <option value="Weekend Intensive">Weekend Intensive (Sat & Sun)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Grid of Matched Slots */}
      {filteredSlots.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-ink/10 space-y-4">
          <Search size={32} className="text-muted mx-auto" />
          <h4 className="display text-xl uppercase tracking-tight text-ink">
            No training slots match your exact combination
          </h4>
          <p className="text-xs text-muted font-sans max-w-md mx-auto">
            Try adjusting your age or location filters, or contact our coordinators directly to request a custom squad schedule.
          </p>
          <button
            onClick={resetFilters}
            className={buttonClass('gold', '!py-2.5 !px-6 text-xs')}
          >
            Show All Slots
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSlots.map((slot) => (
            <div
              key={slot.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-ink/10 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-gold-deep/50 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Header row: Cohort & Venue */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-ink text-gold font-mono text-[10px] font-bold uppercase tracking-wider inline-block">
                      {slot.ageGroup}
                    </span>
                    <h4 className="display text-xl uppercase tracking-tight text-ink mt-2">
                      {slot.venueName}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                    {slot.openSpots} Spots Left
                  </span>
                </div>

                {/* Focus description */}
                <p className="text-xs text-muted font-sans leading-relaxed">
                  {slot.focus}
                </p>

                {/* Details list */}
                <div className="pt-2 border-t border-ink/10 space-y-2 text-xs font-sans text-ink/80">
                  <div className="flex items-center gap-2.5">
                    <Calendar size={14} className="text-gold-deep shrink-0" />
                    <span><strong>Days:</strong> {slot.days.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className="text-gold-deep shrink-0" />
                    <span><strong>Timing:</strong> {slot.timing} ({slot.sessionType})</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <UserCheck size={14} className="text-gold-deep shrink-0" />
                    <span><strong>Head Coach:</strong> {slot.headCoach}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin size={14} className="text-gold-deep shrink-0" />
                    <span className="truncate">{slot.address}</span>
                  </div>
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-5 mt-5 border-t border-ink/10 flex items-center justify-between gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(slot.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono font-bold text-gold-deep hover:underline"
                >
                  Map Location →
                </a>

                <button
                  onClick={() =>
                    openEnquiry(
                      'register',
                      'academy',
                      `${slot.venueName} — ${slot.ageGroup} (${slot.timing})`
                    )
                  }
                  className="px-4 py-2.5 rounded-full bg-ink text-gold hover:bg-gold hover:text-ink font-mono text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Directory of all 5 Academy Grounds */}
      <div className="pt-10 border-t border-ink/10">
        <h4 className="display text-xl uppercase tracking-tight text-ink mb-4">
          All Aurium Training Locations Across Kathmandu Valley
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainingLocations.map((loc) => (
            <div
              key={loc.id}
              className="p-5 bg-chalk rounded-2xl border border-ink/10 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase text-gold-deep">
                  {loc.area}
                </span>
                {loc.isHQ && (
                  <span className="px-2 py-0.5 rounded bg-ink text-gold text-[9px] font-mono font-bold uppercase">
                    HQ Ground
                  </span>
                )}
              </div>
              <h5 className="font-bold text-sm text-ink">{loc.name}</h5>
              <p className="text-[11px] text-muted font-sans leading-relaxed">
                {loc.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] font-bold text-gold-deep hover:underline pt-1"
              >
                Directions in Google Maps →
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

