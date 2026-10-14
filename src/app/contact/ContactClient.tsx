'use client';

import React, { useState } from 'react';
import { site } from '@/data/site';
import { buildMessage, whatsappUrl, mailtoUrl } from '@/lib/enquiry';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const context = { kind: 'inquiry' as const };
  const formattedMsg = buildMessage(context, formData);
  const waLink = whatsappUrl(formattedMsg);
  const emailLink = mailtoUrl(context, formattedMsg);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <section className="bg-ink text-chalk py-20 border-b border-white/10 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow text-gold">Get In Touch</span>
          <h1 className="display text-5xl sm:text-7xl uppercase tracking-tight text-white mt-2">
            Contact Aurium Sports.
          </h1>
          <p className="text-chalk/80 font-sans text-base max-w-2xl mt-4 leading-relaxed">
            Whether you are a parent seeking academy enrollment, a school principal exploring sports curricula, or a prospective tournament team, our coordinators are ready to help.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 bg-chalk text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="eyebrow text-gold-deep">Kathmandu Headquarters</span>
                <h2 className="display text-3xl sm:text-4xl uppercase tracking-tight text-ink mt-2">
                  Our Central Office
                </h2>
                <p className="text-xs text-muted font-sans mt-2">
                  Visits by prior appointment for parent orientations, partner meetings, and tournament coordination.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-chalk flex items-center justify-center shrink-0">
                    <MapPin className="text-gold-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink mb-1">Physical Address</h4>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      {site.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(site.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[11px] font-bold text-gold-deep hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-chalk flex items-center justify-center shrink-0">
                    <Phone className="text-gold-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink mb-1">Phone & WhatsApp</h4>
                    <div className="space-y-1 text-xs text-muted font-sans">
                      <div>Primary: <strong className="text-ink">{site.phones[0]}</strong></div>
                      <div>Secondary: <strong className="text-ink">{site.phones[1]}</strong></div>
                    </div>
                    <a
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-bold text-[#25D366] hover:underline"
                    >
                      <MessageCircle size={14} /> Instant WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-ink/10 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-chalk flex items-center justify-center shrink-0">
                    <Mail className="text-gold-deep" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-ink mb-1">Official Emails</h4>
                    <div className="space-y-1 text-xs text-muted font-sans">
                      <div>Inquiries: <strong className="text-ink">{site.emails.inquiry}</strong></div>
                      <div>Registration: <strong className="text-ink">{site.emails.register}</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Message Builder */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ink/10 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-deep font-bold">
                    Fast Inquiry Dispatch
                  </span>
                  <h3 className="display text-2xl uppercase tracking-tight text-ink mt-1">
                    Send A Message Directly
                  </h3>
                  <p className="text-xs text-muted font-sans mt-1">
                    Complete your details to launch a pre-filled WhatsApp message or email directly to our coordinators.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-muted font-semibold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Anil Shrestha"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-muted font-semibold mb-1">Organisation / School (if applicable)</label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleInputChange}
                        placeholder="School or Club name"
                        className="w-full px-4 py-3 rounded-xl border border-ink/15 bg-chalk focus:outline-none focus:border-gold-deep text-ink text-sm"
                      />
                    </div>
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

                  <div>
                    <label className="block text-muted font-semibold mb-1">Your Message / Inquiry Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please let us know how we can help you (e.g., player age, program interested in, school location)..."
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
                    <MessageCircle size={16} /> Send via WhatsApp
                  </a>

                  <a
                    href={emailLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-ink/30 hover:border-ink text-ink font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-colors text-center"
                  >
                    <Mail size={16} /> Send via Email
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
