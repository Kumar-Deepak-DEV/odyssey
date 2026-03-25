import React from 'react';
import { FadeInReveal, HoverCard } from './animations';

const BentoGridInsights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Primary Highlight: 14 Billion Years */}
      <FadeInReveal delay={0.1} yOffset={50} duration={0.8} className="md:col-span-8">
        <HoverCard className="group relative overflow-hidden glass-card rounded-xl p-12 flex flex-col justify-between min-h-[450px] w-full h-full">
          <div className="absolute top-0 right-0 p-8">
          <span className="material-symbols-outlined text-primary/40 text-6xl">history_toggle_off</span>
        </div>
        <div>
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary mb-4 block">Temporal Axis</span>
          <h2 className="font-headline text-6xl italic text-on-surface mb-6">14 Billion Years</h2>
          <p className="font-body text-on-surface-variant/80 max-w-md">
            The calculated duration of the current narrative epoch. Every cycle meticulously recorded within the celestial substrate.
          </p>
        </div>
        <div className="mt-12 flex items-end justify-between">
          <div className="flex gap-4">
            <div className="w-16 h-[2px] bg-primary"></div>
            <div className="w-8 h-[2px] bg-primary/20"></div>
            <div className="w-4 h-[2px] bg-primary/10"></div>
          </div>
          <div className="text-right">
            <span className="font-label text-xs tracking-widest text-secondary block mb-2">STABILITY INDEX</span>
            <div className="text-4xl font-light font-body tracking-tighter text-white">99.98%</div>
          </div>
          </div>
        </HoverCard>
      </FadeInReveal>
      
      {/* Side Card: Circular Progress */}
      <FadeInReveal delay={0.2} yOffset={50} duration={0.8} className="md:col-span-4">
        <HoverCard className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center h-full w-full">
          <div className="relative w-48 h-48 mb-8">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-surface-variant" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="2"></circle>
            <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="120" strokeWidth="4"></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-headline text-4xl italic text-white">76%</span>
            <span className="font-label text-[8px] tracking-widest uppercase text-slate-400">Sync Status</span>
          </div>
        </div>
        <h3 className="font-headline text-2xl mb-2 italic">Aether Flow</h3>
          <p className="font-body text-xs text-on-surface-variant uppercase tracking-[0.2em]">Synchronized Flux</p>
        </HoverCard>
      </FadeInReveal>

      {/* Stats Row */}
      <FadeInReveal delay={0.1} yOffset={50} className="md:col-span-4">
        <HoverCard className="glass-card rounded-xl p-8 border-l-2 border-primary/20 h-full w-full">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-8 block">Expansion Limit</span>
        <div className="text-5xl font-body font-bold text-white mb-4">93B</div>
        <span className="font-headline italic text-xl text-on-surface-variant block mb-6">Light Years</span>
        <p className="text-xs font-body text-slate-500 leading-relaxed uppercase tracking-widest">
          The measurable diameter of the observable narrative horizon.
        </p>
        </HoverCard>
      </FadeInReveal>

      <FadeInReveal delay={0.2} yOffset={50} className="md:col-span-4">
        <HoverCard className="glass-card rounded-xl p-8 overflow-hidden relative h-full w-full">
          <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADfn9xX84fkO-es7XxUwT4jFdCDAvVSTs2PQR-UtM7_woWxJDz3zNw7PBOmNOjp3CUHoklswyk4Ib9d0aluoEgxFehWvyddjvPk19SKFc4GLxuzTmr48ThKa3TC4ZVyeykriEHKodB6wjEafK5NTbCh_E1KvG6pjzzyaJS_g-qTGHnZG57zT9ZZVnmceFtXFWsTerrAHbvBYYT0XRf27x2oUGxM7gAYjn-ZB2zLO5UAK-SJiTHWlxnmzIoacoaco-blK1828BmYMg" alt="Celestial nebula" />
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-secondary">database</span>
            <h3 className="font-headline text-2xl mt-4 italic">Core Archive</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[10px] font-label tracking-widest text-slate-400">
              <span>RECORDS</span>
              <span className="text-white">∞</span>
            </div>
            <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-gradient-to-r from-primary to-secondary"></div>
            </div>
          </div>
          </div>
        </HoverCard>
      </FadeInReveal>

      {/* Infinity Protocol Card */}
      <FadeInReveal delay={0.3} yOffset={50} className="md:col-span-4">
        <HoverCard className="glass-card rounded-xl p-8 flex flex-col justify-center bg-gradient-to-br from-surface-container-high/40 to-transparent h-full w-full">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary mb-4 block">Operational Mode</span>
        <h3 className="font-headline text-3xl italic text-white mb-4">Infinity Protocol</h3>
        <div className="flex items-center gap-3 text-secondary animate-pulse">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#46f5e0]"></span>
          <span className="font-label text-[10px] tracking-[0.2em] uppercase">Active & Stable</span>
        </div>
        </HoverCard>
      </FadeInReveal>

      {/* Asymmetric Data Visualization Section */}
      <FadeInReveal delay={0.2} yOffset={50} className="md:col-span-12">
        <HoverCard className="glass-card rounded-xl p-12 mt-8 w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
            <h2 className="font-headline text-4xl italic text-primary mb-6">Neural Mapping</h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              Visualizing the interconnectivity of narrative threads across multiple dimensions of the Aether.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-container to-primary text-on-primary font-label text-xs tracking-widest uppercase font-bold hover:scale-105 transition-transform">
              Initialize Scan
            </button>
          </div>
          <div className="md:w-2/3 relative h-64 w-full bg-surface-container-lowest/50 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Simulated Tech Grid */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* SVG Data Visualization */}
              <svg className="w-full h-full opacity-60" viewBox="0 0 400 200">
                <path d="M0 100 Q 50 20, 100 100 T 200 100 T 300 100 T 400 100" fill="none" stroke="#46f5e0" strokeWidth="1"></path>
                <path d="M0 120 Q 70 50, 140 120 T 280 120 T 400 120" fill="none" stroke="#dab9ff" strokeWidth="0.5"></path>
                <circle cx="100" cy="100" fill="#46f5e0" r="3">
                  <animate attributeName="r" dur="2s" repeatCount="indefinite" values="3;5;3"></animate>
                </circle>
                <circle cx="200" cy="100" fill="#dab9ff" r="2"></circle>
                <circle cx="300" cy="100" fill="#46f5e0" r="4"></circle>
              </svg>
              </div>
            </div>
          </div>
        </HoverCard>
      </FadeInReveal>
    </div>
  );
};

export default BentoGridInsights;
