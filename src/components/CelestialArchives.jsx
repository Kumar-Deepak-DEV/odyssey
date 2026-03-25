import React from 'react';

const CelestialArchives = () => {
  return (
    <section className="py-32 px-6 md:px-24 max-w-screen-2xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="font-headline text-5xl mb-6">Celestial Archives</h2>
        <div className="h-px w-24 bg-primary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
        <div className="md:col-span-2 md:row-span-2 glass-card rounded-xl p-10 flex flex-col justify-end group overflow-hidden relative">
          <img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7bUfqdk38kd3QduIKZKAz0gWJppuKfw_U8SNneiCLsGrVd4jQrBunGKq-8ksSuHi_gQfjpPYcHfQujRJG2w9jiND-nBDiIiHoNY6JJGRo6wE1Fe_cW53wEf8vpKc3wtUKX9dgA4NwrJr9SqtT4EYJ_uEdapvNwSEdvrwMValFC94eqdFZRaEKEkVkWWSHlZfefXvT5vZUJOZ4EJ4LZSyFE6KS9m5OKa8Ha30go0g64el_B81hdd-O2eLhzrMj61CbJlK8KX4_d24" alt="abstract cosmic light streaks" />
          <div className="relative z-10">
            <span className="text-secondary font-label text-xs tracking-widest uppercase mb-4 block">Chronos</span>
            <h3 className="text-3xl font-headline italic mb-4">The Temporal Flux</h3>
            <p className="text-on-surface-variant text-sm max-w-xs">Understanding the bending of light across eras of celestial evolution.</p>
          </div>
        </div>
        <div className="md:col-span-2 glass-card rounded-xl p-8 flex items-center gap-8 group">
          <div className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-4xl">flare</span>
          </div>
          <div>
            <h3 className="text-xl font-headline italic mb-2">Solar Winds</h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">The breath of stars that carries the seeds of new worlds.</p>
          </div>
        </div>
        <div className="glass-card rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-secondary">biotech</span>
          <h3 className="text-lg font-headline italic mt-12">Analysis</h3>
        </div>
        <div className="glass-card rounded-xl p-8 flex flex-col justify-between border border-primary/10">
          <span className="material-symbols-outlined text-primary">auto_graph</span>
          <h3 className="text-lg font-headline italic mt-12">Growth</h3>
        </div>
      </div>
    </section>
  );
};

export default CelestialArchives;
