import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-10 items-center">
      <NavLink to="/origin" className={({ isActive }) => `flex flex-col items-center justify-center transition-all duration-500 group ${isActive ? 'text-cyan-400 scale-125 shadow-[0_0_15px_rgba(70,245,224,0.4)]' : 'text-slate-500 opacity-40 hover:opacity-100 hover:text-cyan-200'}`}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>radio_button_checked</span>
            <span className={`font-space-grotesk text-[10px] tracking-[0.3em] uppercase mt-2 ${isActive ? 'block' : 'hidden group-hover:block'}`}>Origin</span>
          </>
        )}
      </NavLink>
      <NavLink to="/journey" className={({ isActive }) => `flex flex-col items-center justify-center transition-all duration-500 group ${isActive ? 'text-cyan-400 scale-125 shadow-[0_0_15px_rgba(70,245,224,0.4)]' : 'text-slate-500 opacity-40 hover:opacity-100 hover:text-cyan-200'}`}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>rocket_launch</span>
            <span className={`font-space-grotesk text-[10px] tracking-[0.3em] uppercase mt-2 ${isActive ? 'block' : 'hidden group-hover:block'}`}>Ascension</span>
          </>
        )}
      </NavLink>
      <NavLink to="/cartography" className={({ isActive }) => `flex flex-col items-center justify-center transition-all duration-500 group ${isActive ? 'text-cyan-400 scale-125 shadow-[0_0_15px_rgba(70,245,224,0.4)]' : 'text-slate-500 opacity-40 hover:opacity-100 hover:text-cyan-200'}`}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>grain</span>
            <span className={`font-space-grotesk text-[10px] tracking-[0.3em] uppercase mt-2 ${isActive ? 'block' : 'hidden group-hover:block'}`}>Entropy</span>
          </>
        )}
      </NavLink>
      <NavLink to="/complete" className={({ isActive }) => `flex flex-col items-center justify-center transition-all duration-500 group ${isActive ? 'text-cyan-400 scale-125 shadow-[0_0_15px_rgba(70,245,224,0.4)]' : 'text-slate-500 opacity-40 hover:opacity-100 hover:text-cyan-200'}`}>
        {({ isActive }) => (
          <>
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>auto_awesome</span>
            <span className={`font-space-grotesk text-[10px] tracking-[0.3em] uppercase mt-2 ${isActive ? 'block' : 'hidden group-hover:block'}`}>Zenith</span>
          </>
        )}
      </NavLink>
    </aside>
  );
};

export default SideNav;
