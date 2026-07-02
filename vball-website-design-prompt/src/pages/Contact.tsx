import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Bird, Camera, Play } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-none uppercase">
            CONNECT <br />
            <span className="text-[#FF5F00]">CORE</span>
          </h1>
          <p className="text-gray-400 text-lg tracking-wide border-l-2 border-[#FF5F00] pl-6 py-2">
            The direct signal channel for Victory Ball HQ.
          </p>
        </header>

        <div className="space-y-12 mb-16">
          <div className="flex gap-6 items-start">
            <div className="mt-1 p-3 bg-white/5 rounded-none border border-white/10">
              <Mail className="w-8 h-8 text-[#FF5F00]" />
            </div>
            <div>
              <div className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase mb-2">Primary Signal</div>
              <a 
                href="mailto:gohith07@gmail.com" 
                className="text-3xl md:text-5xl font-black tracking-tighter text-white hover:text-[#FF5F00] transition-colors lowercase"
              >
                gohith07@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <SocialIcon icon={<Bird className="w-5 h-5" />} />
          <SocialIcon icon={<Camera className="w-5 h-5" />} />
          <SocialIcon icon={<Play className="w-5 h-5" />} />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="p-4 bg-white/5 border border-white/10 hover:bg-[#FF5F00] hover:text-[#0A0E1A] transition-all text-white">
    {icon}
  </a>
);

export default Contact;
