import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import GlitchButton from '../components/GlitchButton';

const Arenas: React.FC = () => {
  const locations = [
    { name: "Neo-Tokyo Central", city: "Tokyo, JP", status: "Active", type: "Flagship" },
    { name: "Brooklyn Glass-Works", city: "New York, USA", status: "Active", type: "Certified" },
    { name: "Berlin Bunker-V", city: "Berlin, DE", status: "Opening Q4", type: "Pro-Circuit" },
    { name: "Seoul Sky-Deck", city: "Seoul, KR", status: "Maintenance", type: "Exhibition" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-none">
          CERTIFIED <br />
          <span className="text-[#FF5F00] text-7xl md:text-9xl uppercase">ARENAS</span>
        </h1>
        <p className="text-gray-400 max-w-xl text-lg tracking-wide border-l-2 border-[#FF5F00] pl-6 py-2">
          Victory Ball is played in high-spec, glass-walled environments. Find an official venue or license your own.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {locations.map((loc, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-[#121826] border border-white/5 p-6 relative group overflow-hidden"
          >
            <div className={`absolute top-0 right-0 px-2 py-1 text-[8px] font-black tracking-widest ${loc.status === 'Active' ? 'bg-green-500 text-black' : 'bg-orange-500 text-black'}`}>
              {loc.status}
            </div>
            <div className="text-xs font-bold text-[#FF5F00] mb-2 tracking-widest uppercase">{loc.type}</div>
            <h3 className="text-xl font-bold mb-1 italic uppercase">{loc.name}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              {loc.city}
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white hover:text-[#FF5F00] transition-colors">
              BOOK SESSION <ExternalLink className="w-3 h-3" />
            </button>
          </motion.div>
        ))}
      </div>

      <section className="bg-gradient-to-r from-[#FF5F00] to-orange-700 p-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <Globe className="w-[600px] h-[600px]" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-[#0A0E1A]" />
              <span className="font-black text-[#0A0E1A] tracking-widest text-sm">ARENA LICENSING</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A0E1A] italic tracking-tighter mb-4 uppercase">
              START A CHAPTER.
            </h2>
            <p className="text-orange-100 text-lg">
              Want to bring Victory Ball to your city? We provide full Arena Specs, 
              Automated Tracking tech, and official league certification.
            </p>
          </div>
          <GlitchButton className="bg-[#0A0E1A] text-white shadow-none">
            GET THE SPECS
          </GlitchButton>
        </div>
      </section>
    </div>
  );
};

export default Arenas;
