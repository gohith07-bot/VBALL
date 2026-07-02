import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, AlertTriangle, Layers, Maximize, MousePointer2 } from 'lucide-react';

const Rulebook: React.FC = () => {
  const [activeWallSim, setActiveWallSim] = useState(false);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <header className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block border border-[#FF5F00] px-4 py-1 mb-6 text-[#FF5F00] text-xs font-bold tracking-[0.3em] uppercase"
        >
          Official Standards
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4">THE RULEBOOK</h1>
        <p className="text-gray-400 max-w-2xl mx-auto italic tracking-widest uppercase text-sm">The Official Bible of Victory Ball</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {/* Section 1: Winning the Rally */}
        <RuleSection 
          number="01"
          title="Winning the Rally"
          rules={[
            {
              head: "The 5-Bounce Threshold",
              body: "The first side to record 5 total bounces (including table surface, edges, or underside) on their half loses the point."
            },
            {
              head: "Neutral Net Play",
              body: "The net is 'Neutral'. If the ball rests on the net, it's a scramble. If it falls off on its own, it's a bounce for the side it lands on."
            }
          ]}
        />

        {/* Section 2: Arena Physics */}
        <RuleSection 
          number="02"
          title="Arena Physics"
          rules={[
            {
              head: "The Underside",
              body: "Hitting the bottom of the table counts as 1 bounce for the side it is on. Invisible points are the deadliest."
            },
            {
              head: "The Floor (Fatal)",
              body: "If the ball touches the ground, the rally is over and the point is awarded to the opponent immediately."
            }
          ]}
        />

        {/* Section 3: Player Mechanics */}
        <RuleSection 
          number="03"
          title="Human Mechanics"
          rules={[
            {
              head: "Handball Violation",
              body: "Any contact from the wrist down to the fingertips is an immediate 'Out'. Your hand is not part of the game."
            },
            {
              head: "Freestyle Catching",
              body: "You may 'catch' and 'throw' using your chest, shoulders, or head to reset your paddle shot. This is legal."
            }
          ]}
        />
      </div>

      {/* Interactive Simulation Section */}
      <section className="bg-[#121826] border border-white/5 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Layers className="w-64 h-64 text-[#FF5F00]" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 italic tracking-tight flex items-center gap-3">
              <Maximize className="text-[#FF5F00]" />
              THE WALL ACCUMULATOR
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              You can bank off as many walls as you want. If a ball hits 3 walls and then lands on the opponent's side, 
              they are instantly at <span className="text-[#FF5F00] font-bold">4 bounces</span> (3 walls + 1 table).
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveWallSim(!activeWallSim)}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-none font-bold tracking-widest transition-all flex items-center gap-2 group"
              >
                <MousePointer2 className="w-5 h-5 text-[#FF5F00] group-hover:scale-125 transition-transform" />
                {activeWallSim ? 'STOP SIMULATION' : 'TRIGGER WALL BOUNCE'}
              </button>
            </div>
          </div>

          <div className="h-64 bg-black/40 border border-white/10 relative flex items-center justify-center">
            {/* Simulation Area */}
            <div className="absolute inset-0 border-[20px] border-[#0A0E1A]" />
            <div className="relative w-full h-full p-4 overflow-hidden">
              <AnimatePresence>
                {activeWallSim && (
                  <>
                    {/* The Wall Path */}
                    <motion.div
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 500 250" className="w-full h-full stroke-[#FF5F00] stroke-2 fill-none drop-shadow-[0_0_10px_#FF5F00] preserve-3d">
                         <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          d="M 20 230 L 100 50 L 250 200 L 400 80 L 480 230" 
                         />
                      </svg>
                      {/* Bounce Labels - using percentages for better responsiveness */}
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="absolute left-[20%] top-[15%] text-[10px] font-bold text-white bg-orange-500 px-1">WALL 1</motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="absolute left-[45%] top-[70%] text-[10px] font-bold text-white bg-orange-500 px-1">WALL 2</motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="absolute left-[75%] top-[25%] text-[10px] font-bold text-white bg-orange-500 px-1">WALL 3</motion.div>
                      <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        transition={{ delay: 1.2, type: "spring" }} 
                        className="absolute right-[5%] bottom-[10%] text-lg md:text-2xl font-black text-white italic drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]"
                      >
                        +4 BOUNCES!
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              {!activeWallSim && (
                <div className="flex flex-col items-center justify-center h-full text-gray-600">
                   <p className="text-xs tracking-widest">AWAITING INPUT</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Air Strikes Clause */}
      <div className="mt-12 p-8 border-l-4 border-[#FF5F00] bg-white/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 italic uppercase">
          <AlertTriangle className="text-[#FF5F00]" />
          The Air Strike Clause
        </h3>
        <p className="text-gray-400">
          You can hit the ball as many times as you want in the air. The first hit is free; every hit after that counts as 1 bounce for <span className="text-white underline">you</span>. 
          Trade bounces for position at your own risk.
        </p>
      </div>
    </div>
  );
};

interface RuleSectionProps {
  number: string;
  title: string;
  rules: { head: string; body: string }[];
}

const RuleSection: React.FC<RuleSectionProps> = ({ number, title, rules }) => (
  <div className="relative">
    <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4 pointer-events-none select-none">
      {number}
    </div>
    <div className="relative z-10">
      <h2 className="text-2xl font-bold mb-8 italic tracking-widest text-[#FF5F00] flex items-center gap-3">
        <HelpCircle className="w-5 h-5" />
        {title}
      </h2>
      <div className="space-y-8">
        {rules.map((rule, idx) => (
          <div key={idx}>
            <h4 className="text-white font-bold mb-2 tracking-wide uppercase text-sm">{rule.head}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Rulebook;
