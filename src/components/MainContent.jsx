import React from 'react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem, FadeInReveal, ParallaxLayer, HoverCard } from './animations';

const MainContent = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 overflow-hidden">
      {/* Atmospheric Background Element */}
      <ParallaxLayer speed={0.2} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary nebula-glow rounded-full blur-[150px] opacity-20 animate-pulse transition-opacity duration-[10s]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary nebula-glow rounded-full blur-[100px] opacity-10 animate-pulse transition-opacity duration-[8s]" style={{ animationDelay: '2s' }}></div>
        <img className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen" data-alt="faint deep space ethereal cosmic grid with violet and cyan nebulous clouds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADfn9xX84fkO-es7XxUwT4jFdCDAvVSTs2PQR-UtM7_woWxJDz3zNw7PBOmNOjp3CUHoklswyk4Ib9d0aluoEgxFehWvyddjvPk19SKFc4GLxuzTmr48ThKa3TC4ZVyeykriEHKodB6wjEafK5NTbCh_E1KvG6pjzzyaJS_g-qTGHnZG57zT9ZZVnmceFtXFWsTerrAHbvBYYT0XRf27x2oUGxM7gAYjn-ZB2zLO5UAK-SJiTHWlxnmzIoacoaco-blK1828BmYMg" alt="cosmic background"/>
      </ParallaxLayer>

      {/* Foreground Content Constraint */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-48 flex flex-col items-center">
        
        {/* Narrative Conclusion Header */}
        <StaggerContainer staggerDelay={0.3} className="text-center mb-24 max-w-3xl">
          <StaggerItem yOffset={30}>
            <span className="font-label text-secondary tracking-[0.5em] uppercase text-xs mb-6 block">Zenith Phase</span>
          </StaggerItem>
          <StaggerItem yOffset={50}>
            <h1 className="font-headline italic text-5xl md:text-7xl text-white mb-8 leading-tight drop-shadow-lg">Cycle Complete. <br/> <span className="text-primary opacity-80">The Story Continues.</span></h1>
          </StaggerItem>
          <StaggerItem yOffset={30}>
            <p className="font-body text-slate-300 text-lg md:text-xl font-light tracking-wide leading-relaxed">
              Every end is a new coordinate. Your traversal through the Aether has synchronized with the primordial frequency. Now, a new universe awaits.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Bento Summary Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-32">
          
          <FadeInReveal delay={0.1}>
            <HoverCard className="glass-card p-10 rounded-2xl flex flex-col justify-between min-h-[300px] border-t border-primary/20 hover:bg-surface-container-high/60 transition-all duration-700 h-full">
              <span className="material-symbols-outlined text-4xl text-primary/60 mb-8">all_inclusive</span>
              <div>
                <h3 className="font-headline italic text-2xl text-white mb-3">Memory Encoded</h3>
                <p className="font-body text-sm text-slate-400">All sequences successfully written to the void archive.</p>
              </div>
            </HoverCard>
          </FadeInReveal>

          <FadeInReveal delay={0.2}>
            <HoverCard className="glass-card p-10 rounded-2xl flex flex-col justify-between min-h-[300px] border-t border-secondary/20 hover:bg-surface-container-high/60 transition-all duration-700 h-full">
              <span className="material-symbols-outlined text-4xl text-secondary/60 mb-8">graphic_eq</span>
              <div>
                <h3 className="font-headline italic text-2xl text-white mb-3">Flow Synchronized</h3>
                <p className="font-body text-sm text-slate-400">Your frequency has matched the cosmic background resonance.</p>
              </div>
            </HoverCard>
          </FadeInReveal>

          <FadeInReveal delay={0.3}>
            <HoverCard className="glass-card p-10 rounded-2xl flex flex-col justify-between min-h-[300px] border-t border-tertiary/20 hover:bg-surface-container-high/60 transition-all duration-700 h-full">
              <span className="material-symbols-outlined text-4xl text-tertiary/60 mb-8">flight_takeoff</span>
              <div>
                <h3 className="font-headline italic text-2xl text-white mb-3">Ascension Met</h3>
                <p className="font-body text-sm text-slate-400">Clearance granted for higher dimensional traversals.</p>
              </div>
            </HoverCard>
          </FadeInReveal>

        </div>

        {/* Action Cluster */}
        <FadeInReveal delay={0.4} yOffset={30}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link to="/origin" className="relative px-12 py-5 bg-primary-container text-on-primary-container font-body font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(106,54,168,0.5)] group">
              <span className="relative z-10">Return to Origin</span>
              <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
            </Link>
            <button className="px-12 py-5 bg-surface-variant/20 backdrop-blur-md border border-outline-variant/20 text-on-surface font-body font-medium rounded-full transition-all duration-500 hover:bg-surface-variant/40 hover:text-secondary group flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">share</span>
              <span>Share the Journey</span>
            </button>
          </div>
        </FadeInReveal>
      </div>

      {/* Signature Scroll Comet (Static for this screen) */}
      <div className="fixed left-12 bottom-0 h-48 w-px bg-outline-variant/30 flex justify-center z-20">
        <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_#46f5e0] -translate-y-32"></div>
      </div>
    </main>
  );
};

export default MainContent;
