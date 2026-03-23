import React from 'react';

const Ignition = () => {
  return (
    <section className="py-32 px-6 md:px-24 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 relative">
          <div className="absolute -top-20 -left-20 text-on-surface/5 font-headline text-[12rem] leading-none pointer-events-none">02</div>
          <img className="rounded-lg shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeFJmmQ73T3l596VlnksQjD0_DJFlWI3OSS8GjFwcTayby4ppahsr8D3_JaciJOEldQwCY3WhYqP7a2MZKAM6Z38IQIK_8jyqLw5GLP9WdQfG63YhkqSCdVB0DAabmL7VqY9KakFTw2IYG_Pgqz9ItDj2ztAHYYna8EvQd-N0J9ybo3T7NewrCOA_5YNrotpzBO8KTM9YxHbC6NnAq9SEnmtC2lSj3bs9Hm2GD_CjHEOEbpvevgcppnvY4tGT5LpcVKiM7XzerzZA" alt="detailed view of a rotating blue planet with soft atmosphere glow" />
        </div>
        <div className="md:col-span-5 md:pl-12 space-y-8">
          <h2 className="font-headline text-4xl md:text-6xl italic">Ignition</h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
            The first spark did not come from fire, but from thought. A ripple across the Aether Narrative that crystallized into the first star. It was the birth of time itself.
          </p>
          <blockquote className="border-l-2 border-primary/30 pl-8 py-2 italic font-headline text-xl text-primary/80">
            "In the moment of ignition, the universe found its voice."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Ignition;
