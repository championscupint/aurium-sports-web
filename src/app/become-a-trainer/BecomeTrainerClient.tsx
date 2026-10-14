'use client';

import React, { useState } from 'react';
import { buildMessage, whatsappUrl, mailtoUrl } from '@/lib/enquiry';
import { Award, HeartHandshake, CheckCircle2, MessageCircle, Mail } from 'lucide-react';

export function BecomeTrainerClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sport: 'Football',
    experience: '1–3 years',
    licence: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const context = { kind: 'apply' as const };
  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const mlLink = mailtoUrl(context, formattedMsg);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Coaching Careers</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Become An Aurium Coach.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Coaching is an honorable profession. We offer certified mentors competitive pay, continuous education, European curriculum exposure, and career progression across schools and academy leagues.
          </p>
        </div>
      </section>

      {/* Main Form and Benefits Split */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: What We Offer */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="eyebrow text-gold-deep">Professional Pathway</span>
                <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink mt-2">
                  Why Coach With Aurium?
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <Award className="text-gold-deep" size={18} />
                    <span>Continuous Coach Education</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Gain access to international coaching curricula (FIFA, NSCCA, and ICSSPE modules) and mentorship under Sports Director & Owner Diwas Agasti.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <HeartHandshake className="text-gold-deep" size={18} />
                    <span>Sports for Mental Health Training</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Learn how to mentor young players through emotional setbacks, manage game pressure, and become a supportive sports psychologist on the pitch.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-ink text-sm">
                    <CheckCircle2 className="text-gold-deep" size={18} />
                    <span>Reliable Income & Career Security</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Structured multi-term contracts with partner schools, private academies, holiday camps, and tournament bonuses.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ink/10 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                    Direct Application
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink mt-1">
                    Submit Your Coaching Credentials
                  </h3>
                  <p className="text-xs text-muted font-sans mt-1">
                    Fill out the form below to immediately connect with our Technical Directorate.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block text-muted font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Roshan Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-muted font-semibold mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-muted font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-muted font-semibold mb-1">Primary Sport</label>
                      <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      >
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Goalkeeper Specialist">Goalkeeper Specialist</option>
                        <option value="Physical Conditioning / Fitness">Physical Conditioning / Fitness</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-muted font-semibold mb-1">Coaching Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      >
                        <option value="Less than 1 year (Aspiring)">Less than 1 year (Aspiring)</option>
                        <option value="1–3 years">1–3 years</option>
                        <option value="3–5 years">3–5 years</option>
                        <option value="5+ years (Senior)">5+ years (Senior)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted font-semibold mb-1">Certifications / Licenses (if any)</label>
                    <input
                      type="text"
                      name="licence"
                      value={formData.licence}
                      onChange={handleInputChange}
                      placeholder="e.g. ANFA 'D' / 'C', AFC License, Sports Science Degree"
                      className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-muted font-semibold mb-1">Coaching Philosophy / Brief Bio</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your background, age groups coached, and what drives you to mentor young athletes..."
                      className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                    />
                  </div>
                </div>

                {/* Dispatch Buttons */}
                <div className="pt-4 border-t border-ink/10 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-colors shadow-md text-center"
                  >
                    <MessageCircle size={16} /> Submit via WhatsApp
                  </a>

                  <a
                    href={mlLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-ink/30 hover:border-ink text-ink font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors text-center"
                  >
                    <Mail size={16} /> Submit via Email
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
