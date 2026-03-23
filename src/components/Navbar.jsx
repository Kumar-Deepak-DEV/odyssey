import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-surface/40 dark:bg-slate-950/40 backdrop-blur-xl shadow-[0_0_50px_rgba(106,54,168,0.1)]">
      <div className="flex justify-between items-center px-12 py-8 w-full mx-auto">
        <Link to="/" className="text-2xl font-black tracking-[0.2em] uppercase text-violet-100 dark:text-violet-50">
          Aether Narrative
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <NavLink to="/origin" className={({ isActive }) => `text-slate-300/70 hover:text-white transition-colors duration-500 hover:scale-105 transition-transform duration-700 ease-out font-label text-sm tracking-widest ${isActive ? 'text-primary border-b border-primary/50 pb-1 font-bold' : ''}`}>Chronicles</NavLink>
          <NavLink to="/cartography" className={({ isActive }) => `text-slate-300/70 hover:text-white transition-colors duration-500 hover:scale-105 transition-transform duration-700 ease-out font-label text-sm tracking-widest ${isActive ? 'text-cyan-400 border-b border-cyan-400/50 pb-1 font-bold' : ''}`}>Nebula</NavLink>
          <NavLink to="/" className={({ isActive }) => `text-slate-300/70 hover:text-white transition-colors duration-500 hover:scale-105 transition-transform duration-700 ease-out font-label text-sm tracking-widest ${isActive ? 'text-primary border-b border-primary/50 pb-1 font-bold' : ''}`}>The Void</NavLink>
          <NavLink to="/insights" className={({ isActive }) => `text-slate-300/70 hover:text-white transition-colors duration-500 hover:scale-105 transition-transform duration-700 ease-out font-label text-sm tracking-widest ${isActive ? 'text-secondary border-b border-secondary/50 pb-1 font-bold' : ''}`}>Observatory</NavLink>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors cursor-pointer">menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
