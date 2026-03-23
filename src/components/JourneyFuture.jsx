import React from 'react';

const JourneyFuture = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-8 bg-surface-container-lowest/50">
      <div className="max-w-5xl w-full flex flex-col md:flex-row-reverse gap-16 items-center">
        <div className="space-y-8 md:text-right">
          <span className="font-label text-primary uppercase tracking-[0.3em] text-xs font-semibold">Epoch III</span>
          <h2 className="font-headline text-5xl md:text-7xl leading-tight text-white font-bold">Digital Singularity</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md ml-auto">
            Today, the stars are no longer silent observers. We encode them into logic, building new universes from the fragments of the old.
          </p>
          <div className="flex gap-4 justify-end">
            <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20">
              Initialize Future
            </button>
            <button className="px-8 py-3 glass-panel text-white font-bold rounded-full hover:bg-surface-container-highest transition-colors">
              Explore Archive
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-lg aspect-square">
          <div className="absolute inset-0 bg-secondary/5 rounded-xl rotate-3"></div>
          <div className="absolute inset-0 bg-primary/5 rounded-xl -rotate-3"></div>
          <img className="relative z-10 w-full h-full object-cover rounded-xl border border-outline-variant/20 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoRIOIt2XCzAnBaEmCjAwsIMRtiekWyXRdPwW3KgKVetINMcza0-jMAFO9XKT6csLxxX3O55oTGDzj2YRGzR5EwS3Ilx4Id0sT_-yRBu8u-YthhYa5hQw-Pwyc0yrNECrhzb1JpeK89I0KhEYyxD8kHX0SE3Yvfc88ujhWZRZFf0RKPowlgewo-MrRgDP1fcadaFFd5KFnLwrpKaajz4R0B4yXuMqw9Alf-V5rSbn0hAjy8aQL77Zbfy-Yx6LBShHalSNaKIaO1fE" alt="Futuristic glowing data visualization" />
          <div className="absolute -top-6 -right-6 glass-panel p-4 rounded-lg z-20 space-y-1">
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined text-sm">database</span>
              <span className="font-label text-[10px] uppercase font-bold">Latency: 0.02ms</span>
            </div>
            <div className="h-[1px] w-full bg-outline-variant/30"></div>
            <div className="text-[10px] font-label text-on-surface-variant">NODE_AETHER_PRIMARY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyFuture;
