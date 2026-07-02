import React from 'react';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setPage('home')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-[#FF5F00] rounded-sm transform -skew-x-12 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xl italic tracking-tighter text-[#0A0E1A]">VB</span>
              </div>
              <div className="absolute -inset-1 bg-orange-500/30 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-widest text-white hidden sm:block">
              VICTORY<span className="text-[#FF5F00]">BALL</span>
            </span>
          </div>
          
          <div className="flex gap-3 sm:gap-6">
            <button 
              onClick={() => setPage('home')}
              className={`text-[10px] sm:text-xs uppercase tracking-widest hover:text-[#FF5F00] transition-colors ${currentPage === 'home' ? 'text-[#FF5F00]' : 'text-gray-400'}`}
            >
              Hype
            </button>
            <button 
              onClick={() => setPage('rulebook')}
              className={`text-[10px] sm:text-xs uppercase tracking-widest hover:text-[#FF5F00] transition-colors ${currentPage === 'rulebook' ? 'text-[#FF5F00]' : 'text-gray-400'}`}
            >
              Rulebook
            </button>
            <button 
              onClick={() => setPage('advanced')}
              className={`text-[10px] sm:text-xs uppercase tracking-widest hover:text-[#FF5F00] transition-colors ${currentPage === 'advanced' ? 'text-[#FF5F00]' : 'text-gray-400'}`}
            >
              Meta
            </button>
            <button 
              onClick={() => setPage('arenas')}
              className={`text-[10px] sm:text-xs uppercase tracking-widest hover:text-[#FF5F00] transition-colors ${currentPage === 'arenas' ? 'text-[#FF5F00]' : 'text-gray-400'}`}
            >
              Arenas
            </button>
            <button 
              onClick={() => setPage('contact')}
              className={`text-[10px] sm:text-xs uppercase tracking-widest hover:text-[#FF5F00] transition-colors ${currentPage === 'contact' ? 'text-[#FF5F00]' : 'text-gray-400'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
