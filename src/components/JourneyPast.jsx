import React from 'react';

const JourneyPast = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="font-label text-secondary uppercase tracking-[0.3em] text-xs font-semibold">Epoch I</span>
          <h2 className="font-headline text-5xl md:text-7xl leading-tight text-white font-bold italic">The Celestial Origins</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
            Before the glow of silicon, there was only the cold fire of the stars. We mapped our fates in the alignment of distant giants.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <img className="relative z-10 w-full aspect-square object-cover rounded-full border border-outline-variant/30 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2geKwJwnsT8_aIew_S2AUg9DYRhmbq9sTpLSA78Y3Sv94Zm9_eoNSFOE0yOoJG4qcYQW9cpHkBIqmiIEcfbfSGysndpQfciVoC61FQjm8wzJtyuNCudVPbCQb58G2ixnIBjJ-di2ZTt_TY0EfTm19pejwEV4TnMA9PIQs2ssf_sCnNHcDqe9VCNrmibmQouW2rS5oLO-45pir_jpnRxnQuaPf3le-hBQQfUFl8Lh0VzBZKcDYAAIY0UkAJlS_q8QAPggOHoGReoI" alt="Intricate ancient star chart" />
        </div>
      </div>
    </section>
  );
};

export default JourneyPast;
