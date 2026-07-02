import React from 'react';
import { motion } from 'framer-motion';

interface GlitchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const GlitchButton: React.FC<GlitchButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group px-8 py-4 font-bold tracking-[0.2em] uppercase transition-all duration-300 overflow-hidden ${
        isPrimary 
          ? 'bg-[#FF5F00] text-[#0A0E1A] shadow-[0_0_20px_rgba(255,95,0,0.3)]' 
          : 'bg-transparent text-white border-2 border-white/20 hover:border-[#FF5F00]/50'
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glitch Overlay */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
      </div>

      {/* Hover Glow */}
      {isPrimary && (
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      
      {/* Glitch Bars */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:animate-pulse group-hover:opacity-100" />
      <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white opacity-0 group-hover:animate-pulse group-hover:opacity-100" />
    </motion.button>
  );
};

export default GlitchButton;
