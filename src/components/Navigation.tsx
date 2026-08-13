import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 text-aurium-light transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
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
          </div>
          <div className="hidden lg:flex space-x-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link href="/about" className="text-gray-300 hover:text-aurium-gold transition-colors">About</Link>
            <Link href="/development" className="text-gray-300 hover:text-aurium-gold transition-colors">Development</Link>
            <Link href="/tournaments" className="text-gray-300 hover:text-aurium-gold transition-colors">Tournaments</Link>
            <Link href="/impact" className="text-gray-300 hover:text-aurium-gold transition-colors">Impact</Link>
            <Link 
              href="/contact" 
              className="relative overflow-hidden group bg-aurium-gold text-[#0a0a0a] px-8 py-3 rounded-full font-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(251,193,8,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10">Enroll Now</span>
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button className="text-aurium-light hover:text-aurium-gold transition-colors p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
