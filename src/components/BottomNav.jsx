import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-panel px-8 py-4 rounded-full flex items-center gap-12 border-primary/10">
        <Link to="/origin" className="flex flex-col items-center gap-1 group cursor-pointer">
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform" data-icon="auto_awesome">auto_awesome</span>
          <span className="text-[9px] font-label uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Origin</span>
        </Link>
        <div className="w-[1px] h-6 bg-outline-variant/30"></div>
        <Link to="/journey" className="flex flex-col items-center gap-1 group cursor-pointer">
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors" data-icon="explore">explore</span>
          <span className="text-[9px] font-label uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Voyage</span>
        </Link>
        <div className="w-[1px] h-6 bg-outline-variant/30"></div>
        <Link to="/complete" className="flex flex-col items-center gap-1 group cursor-pointer">
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary transition-colors" data-icon="hub">hub</span>
          <span className="text-[9px] font-label uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Nexus</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
