import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-12 bg-transparent relative z-20">
      <div className="flex flex-row justify-between items-center w-full max-w-screen-2xl mx-auto">
        <div className="text-sm font-bold text-slate-400 font-label tracking-widest uppercase">
          Aether Narrative
        </div>
        <div className="flex gap-8">
          <a className="font-inter text-xs tracking-widest text-slate-600 hover:text-cyan-400 transition-colors duration-300" href="#">Privacy</a>
          <a className="font-inter text-xs tracking-widest text-slate-600 hover:text-cyan-400 transition-colors duration-300" href="#">Terms</a>
          <a className="font-inter text-xs tracking-widest text-slate-600 hover:text-cyan-400 transition-colors duration-300" href="#">Data Protocol</a>
        </div>
        <div className="font-inter text-xs tracking-widest text-slate-500">
          © 2024 Celestial Observer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
