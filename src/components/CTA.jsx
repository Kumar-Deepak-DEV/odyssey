import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-48 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 nebula-glow -z-10"></div>
      <h2 className="font-headline text-5xl md:text-7xl mb-12 italic">The Journey Continues</h2>
      <Link to="/origin" className="inline-block bg-primary-container text-primary px-12 py-5 rounded-full font-label text-sm uppercase tracking-[0.3em] hover:scale-105 active:opacity-50 transition-all duration-300 shadow-[0_0_30px_rgba(106,54,168,0.3)]">
        Venture Deeper
      </Link>
      <div className="mt-24 flex flex-col items-center">
        <div className="w-px h-24 bg-gradient-to-b from-secondary/50 to-transparent"></div>
        <span className="mt-4 font-label text-[10px] tracking-[0.5em] text-secondary/60 uppercase">Descent into the Void</span>
      </div>
    </section>
  );
};

export default CTA;
