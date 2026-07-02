import React from 'react';
import { motion } from 'framer-motion';
import { Wind, CornerUpRight, MoveDown, Zap, ShieldAlert, Target } from 'lucide-react';

const Advanced: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-none">
          ADVANCED <br />
          <span className="text-[#FF5F00] text-7xl md:text-9xl">META</span>
        </h1>
        <p className="text-gray-400 max-w-xl text-lg tracking-wide border-l-2 border-[#FF5F00] pl-6 py-2">
          Master the physics of the arena. When basic rallies fail, the Meta begins.
        </p>
      </header>

      {/* Section 1: Wall Mastery */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 italic tracking-widest flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#FF5F00]" />
          WALL MASTERY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MetaCard 
            title="The Sky-Bank"
            icon={<Wind className="w-8 h-8 text-[#FF5F00]" />}
            technique="Aim for the highest point on the back walls. The distance makes it hard to track, and the multiple wall-clips can end a game in one shot."
            difficulty="EXPERT"
          />
          <MetaCard 
            title="The Corner Trap"
            icon={<CornerUpRight className="w-8 h-8 text-[#FF5F00]" />}
            technique="Forcing the ball to bounce rapidly between two walls and the table edge to skyrocket the opponent’s bounce count in milliseconds."
            difficulty="ADVANCED"
          />
        </div>
      </section>

      {/* Section 2: Body & Paddle Juggling */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 italic tracking-widest flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#FF5F00]" />
          BODY MECHANICS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MetaCard 
            title="The Kinetic Reset"
            icon={<Zap className="w-8 h-8 text-[#FF5F00]" />}
            technique="If a ball is too fast, trap it against your chest (The Freestyle Carry). Once controlled, 'roll' it onto your paddle to launch a counter-attack."
            difficulty="PRO"
          />
          <MetaCard 
            title="The Air-Stall"
            icon={<ShieldAlert className="w-8 h-8 text-[#FF5F00]" />}
            technique="When out of position, keep hitting the ball straight up. You take a bounce penalty for each hit, but gain 3 seconds to regain your footing."
            difficulty="INTERMEDIATE"
          />
        </div>
      </section>

      {/* Section 3: The Underside Sniper */}
      <section>
        <div className="relative overflow-hidden bg-gradient-to-br from-[#121826] to-[#0A0E1A] border border-white/10 p-12">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Target className="w-96 h-96" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-red-500/10 text-red-500 font-bold text-xs tracking-widest mb-6">UNBLOCKABLE</div>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6 flex items-center gap-4">
                <MoveDown className="text-[#FF5F00]" />
                UNDERSIDE SNIPER
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Intentionally hitting the ball into the underside of the opponent's table. 
                It’s an <span className="text-white italic">"invisible"</span> bounce that is nearly impossible to defend once the ball is underneath the surface. 
                The ball's momentum often carries it toward the floor, ending the rally instantly.
              </p>
              <div className="flex gap-4 items-center">
                <div className="h-2 w-32 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-[#FF5F00]" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#FF5F00]">LETHALITY: 95%</span>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
                {/* Decorative Diagram */}
                <div className="aspect-video border border-dashed border-white/20 relative flex items-center justify-center">
                    <div className="w-full h-[2px] bg-white/40 absolute top-1/2" />
                    <motion.div 
                        animate={{ y: [0, 40, -10], x: [0, 40, 80], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_orange]"
                    />
                    <div className="absolute top-[60%] left-[55%] text-[10px] text-[#FF5F00] font-bold">UNDERSIDE CLIP</div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface MetaCardProps {
  title: string;
  icon: React.ReactNode;
  technique: string;
  difficulty: string;
}

const MetaCard: React.FC<MetaCardProps> = ({ title, icon, technique, difficulty }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-[#121826]/50 border border-white/5 p-8 relative group overflow-hidden"
  >
    <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF5F00] text-[#0A0E1A] font-bold text-[10px] tracking-widest">
      {difficulty}
    </div>
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 italic tracking-tight uppercase">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm mb-6">{technique}</p>
    <div className="flex gap-2">
      {[1, 2, 3].map(i => (
        <div key={i} className={`h-1 w-8 ${i === 3 ? 'bg-white/10' : 'bg-[#FF5F00]'}`} />
      ))}
    </div>
  </motion.div>
);

export default Advanced;
