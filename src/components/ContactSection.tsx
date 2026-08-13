"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ageGroup: "u12",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to an API
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Decorative background grids/glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#050505] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/5">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-aurium-gold/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-12 md:p-20 text-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter mb-6 leading-[1.1]">
                Start Your <br/>
                <span className="text-aurium-gold">Journey</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Whether you're looking to join our elite academy, partner with us, or learn more about our methodologies, we'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-aurium-gold/50 group-hover:bg-aurium-gold/10 transition-colors">
                    <span className="font-black text-2xl text-white group-hover:text-aurium-gold transition-colors">1</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Express Interest</p>
                    <p className="text-sm text-gray-400">Fill out the detailed application form</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-aurium-gold/50 group-hover:bg-aurium-gold/10 transition-colors">
                    <span className="font-black text-2xl text-white group-hover:text-aurium-gold transition-colors">2</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Evaluation</p>
                    <p className="text-sm text-gray-400">Attend a technical & tactical assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-aurium-gold/50 group-hover:bg-aurium-gold/10 transition-colors">
                    <span className="font-black text-2xl text-white group-hover:text-aurium-gold transition-colors">3</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">Enrollment</p>
                    <p className="text-sm text-gray-400">Join the Aurium Sports ecosystem</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-20 bg-white/[0.02]">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Application Received</h3>
                  <p className="text-gray-400 text-lg">
                    Thank you for your interest in Aurium Sports. Our team will contact you shortly with the next steps.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-aurium-gold font-bold hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aurium-gold focus:border-transparent transition-all placeholder-gray-600"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aurium-gold focus:border-transparent transition-all placeholder-gray-600"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Program of Interest</label>
                    <select 
                      id="program"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aurium-gold focus:border-transparent transition-all appearance-none"
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({...formData, ageGroup: e.target.value})}
                    >
                      <option value="u12" className="bg-[#0a0a0a]">U12 Boys (Foundation)</option>
                      <option value="u16b" className="bg-[#0a0a0a]">U16 Boys (Competitive)</option>
                      <option value="u16g" className="bg-[#0a0a0a]">U16 Girls (Competitive)</option>
                      <option value="other" className="bg-[#0a0a0a]">Partnerships / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Additional Information</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-aurium-gold focus:border-transparent transition-all resize-none placeholder-gray-600"
                      placeholder="Tell us about your background..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-aurium-gold text-[#0a0a0a] font-black text-lg py-5 rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-3 group mt-4"
                  >
                    Submit Application
                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
