import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  setPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-[#05070a] border-t border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
            <div className="w-8 h-8 bg-white rounded-sm transform -skew-x-12 flex items-center justify-center">
              <span className="text-[#0A0E1A] font-black text-sm italic tracking-tighter">VB</span>
            </div>
            <span className="text-xl font-bold tracking-widest text-white">
              VICTORY<span className="text-gray-500 underline">BALL</span>
            </span>
          </div>
          <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">
            © 2024 Victory Ball International. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
          <ShieldCheck className="w-12 h-12 text-white" />
          <div className="text-center">
            <div className="text-[10px] font-black tracking-[0.4em] text-white">OFFICIAL STANDARDS</div>
            <div className="text-[8px] tracking-[0.2em] text-gray-400">CERTIFIED ARENA EQUIPMENT</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
          <div className="flex flex-col gap-3">
            <span className="text-white mb-2 text-xs">GOVERNANCE</span>
            <button onClick={() => setPage('privacy')} className="text-left hover:text-white transition-colors">Privacy Protocol</button>
            <button onClick={() => setPage('terms')} className="text-left hover:text-white transition-colors">Terms of Play</button>
            <button onClick={() => setPage('safety')} className="text-left hover:text-white transition-colors">Safety Specs</button>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white mb-2 text-xs">SIGNAL</span>
            <a href="mailto:gohith07@gmail.com" className="text-lg font-black text-white hover:text-[#FF5F00] transition-colors lowercase tracking-tighter">gohith07@gmail.com</a>
            <p className="text-gray-700 max-w-[200px] leading-relaxed">Direct channel for arena inquiries and league certification.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
