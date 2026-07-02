import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Target, ArrowRight } from 'lucide-react';
import GlitchButton from '../components/GlitchButton';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        {/* 3D Arena Concept Visual (Simplified CSS Version) */}
        <div className="absolute inset-0 z-0 opacity-30 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-5xl h-[500px] border border-orange-500/20 [perspective:1000px] rotate-x-12">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/5" />
            {/* Table Surface */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[2px] bg-orange-500/40" />
            {/* Glowing Ball Path */}
            <motion.div 
              initial={{ x: -200, y: 0, opacity: 0 }}
              animate={{ 
                x: [ -200, 100, -50, 200 ], 
                y: [ 50, -100, 80, -20 ],
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-4 h-4 bg-[#FF5F00] rounded-full shadow-[0_0_20px_#FF5F00] z-20"
            />
            {/* Motion Trail */}
            <svg className="absolute inset-0 w-full h-full stroke-[#FF5F00]/30 stroke-2 fill-none">
              <path d="M 200 300 Q 400 100 600 350 T 900 200" className="opacity-20" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 bg-[#FF5F00]/10 border border-[#FF5F00]/30 text-[#FF5F00] text-[10px] font-black tracking-[0.3em] uppercase mb-4 italic"
          >
            2024 Global League Registration Open
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none italic"
          >
            VICTORY IS <br />
            <span className="text-[#FF5F00] drop-shadow-[0_0_30px_rgba(255,95,0,0.5)]">5 BOUNCES</span> AWAY.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide px-4"
          >
            The first table sport where the walls are weapons and your body is the ultimate reset. 
            No boundaries. No limits.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <GlitchButton onClick={() => setPage('rulebook')}>
              Enter the Rulebook
            </GlitchButton>
            <GlitchButton variant="secondary" onClick={() => setPage('advanced')}>
              Master the Meta
            </GlitchButton>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Core Loop */}
      <section className="py-24 bg-[#0A0E1A] relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 italic tracking-widest">HOW IT WORKS</h2>
            <div className="h-1 w-24 bg-[#FF5F00] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              icon={<Target className="w-8 h-8 text-[#FF5F00]" />}
              title="The 5-Bounce Win"
              desc="Your goal is to force 5 total bounces on the opponent’s side. Every surface is in play."
            />
            <Card 
              icon={<Zap className="w-8 h-8 text-[#FF5F00]" />}
              title="The Wall Accumulator"
              desc="Every wall strike counts toward the bounce total if it lands on the table. Bank shots are lethal."
            />
            <Card 
              icon={<Shield className="w-8 h-8 text-[#FF5F00]" />}
              title="Freestyle Physics"
              desc="Use your paddle or your body. Just keep the ball from hitting the floor. Anything but hands is legal."
            />
          </div>
        </div>
      </section>

      {/* Section 3: Call to Advanced Tactics */}
      <section className="py-24 relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5F00]/5 to-blue-500/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">
            Think you know the game?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Learn the <span className="text-white font-bold">Kinetic Reset</span> and the <span className="text-white font-bold">Sky-Bank</span>. 
            Transcend the basic rally and become a master of the arena.
          </p>
          <GlitchButton onClick={() => setPage('advanced')}>
            Explore Advanced Techniques <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </GlitchButton>
        </div>
      </section>

      {/* Corporate Partnerships Section */}
      <section className="py-16 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-[10px] font-black tracking-[0.5em] text-center text-gray-600 mb-10 uppercase italic">Global League Partners</div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
            <span className="text-2xl font-black italic tracking-tighter text-white">NEO-DRIVE</span>
            <span className="text-2xl font-black italic tracking-tighter text-white">ORBITAL SYSTEMS</span>
            <span className="text-2xl font-black italic tracking-tighter text-white">KINETIC DRINKS</span>
            <span className="text-2xl font-black italic tracking-tighter text-white">SYNTH-WEAR</span>
            <span className="text-2xl font-black italic tracking-tighter text-white">QUANTUM OPTICS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#121826] border border-white/5 p-8 relative group"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-[#FF5F00] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4 tracking-wider uppercase italic">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);

export default Home;
