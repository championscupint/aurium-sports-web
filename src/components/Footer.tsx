"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-aurium-light border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-aurium-gold/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-aurium-gold/30 blur-xl rounded-full group-hover:bg-aurium-gold/50 transition-colors duration-500" />
                <Image
                  src="/logo_transparent.png"
                  alt="Aurium Sports Logo"
                  width={48}
                  height={48}
                  className="relative drop-shadow-[0_0_10px_rgba(251,193,8,0.5)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tighter leading-none text-white">AURIUM</span>
                <span className="font-heading font-bold text-sm tracking-[0.2em] text-aurium-gold uppercase">Sports</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building more than footballers. We are a long-term ecosystem around grassroots football, youth development, and sports for mental wellbeing in Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-aurium-gold transition-colors font-medium">FB</a>
              <a href="#" className="text-gray-400 hover:text-aurium-gold transition-colors font-medium">IG</a>
              <a href="#" className="text-gray-400 hover:text-aurium-gold transition-colors font-medium">TW</a>
              <a href="#" className="text-gray-400 hover:text-aurium-gold transition-colors font-medium">YT</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-aurium-gold transition-colors">About Us</Link></li>
              <li><Link href="/development" className="hover:text-aurium-gold transition-colors">Player Development</Link></li>
              <li><Link href="/tournaments" className="hover:text-aurium-gold transition-colors">Tournaments</Link></li>
              <li><Link href="/impact" className="hover:text-aurium-gold transition-colors">Community Impact</Link></li>
              <li><Link href="/technology" className="hover:text-aurium-gold transition-colors">Sports Technology</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-aurium-gold shrink-0" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-aurium-gold shrink-0" />
                <span>+977 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-aurium-gold shrink-0" />
                <span>info@auriumsports.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on tournaments, programs, and news.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-aurium-gold transition-colors text-white"
              />
              <button 
                type="submit"
                className="w-full bg-aurium-gold text-aurium-dark font-bold py-2 rounded hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Aurium Academy Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-aurium-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-aurium-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
