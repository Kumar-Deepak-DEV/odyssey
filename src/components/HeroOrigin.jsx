import React from 'react';

const HeroOrigin = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 text-center">
      <div className="inline-block mb-6 px-4 py-1 border border-secondary/20 rounded-full glass-card">
        <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary">Phase I: Genesis</span>
      </div>
      <h1 className="font-headline text-6xl md:text-9xl mb-8 leading-tight max-w-6xl mx-auto italic">
        The Origin <span className="text-primary">of</span> Light
      </h1>
      <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed opacity-80 mb-16">
        Before the stars found their orbits, there was only the Aether. A silent expanse waiting for the first resonance.
      </p>
      <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl shadow-2xl">
        <img className="w-full h-full object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-NmFyAgfsfDJ9vKJ_6eHgZPU0aTx7GzsplUEAdnsgV0Q58uBACWjSsMj-1bF_eKl2_z5u2l8tl6KGLbTZDjdI-X5i5YyFGahrOoVYXViOQLdCH_rdPxdwBx5R8iooYksSsJe7ykZipj92Q_i-n0ZhNLyPed5eI-gfLUYUK03Vl5wLA59bIpshBXiAWYfE3Xevhtd4LJBzggnZ-iQe92auRL5ZwsCLqbeysr-L1nlGymRWRUdXTaBZJZJer8olChOaVpivx359AIY" alt="stunning cinematic nebula with vibrant purples and deep blues swirling with newborn stars and cosmic dust" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroOrigin;
