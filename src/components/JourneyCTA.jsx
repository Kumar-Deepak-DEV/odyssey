import React from 'react';
import { Link } from 'react-router-dom';

const JourneyCTA = () => {
  return (
    <section className="py-32 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl space-y-8">
        <div className="size-16 mx-auto bg-surface-container-high flex items-center justify-center rounded-full border border-outline-variant/30">
          <span className="material-symbols-outlined text-primary" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl text-white italic">The story continues with you.</h2>
        <p className="text-on-surface-variant font-body">Are you ready to transcend the horizon?</p>
        <div className="pt-8 flex flex-col items-center gap-4">
          <Link to="/insights" className="group relative inline-flex items-center gap-3 text-secondary-fixed font-bold tracking-widest text-sm uppercase">
            Begin The Next Chapter
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneyCTA;
