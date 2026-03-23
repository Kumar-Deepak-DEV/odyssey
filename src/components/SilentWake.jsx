import React from 'react';

const SilentWake = () => {
  return (
    <section className="py-32 px-6 md:px-24 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="font-headline text-4xl md:text-6xl italic">The Silent Wake</h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
            In the beginning, darkness was not an absence, but a presence. A heavy, velvet-like thickness that held the potential for everything yet to be. We call this the Cradle of Void.
          </p>
          <div className="pt-8 flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-[1px] bg-secondary group-hover:w-24 transition-all duration-500"></div>
            <span className="font-label text-xs tracking-widest uppercase text-secondary">Trace the Resonance</span>
          </div>
        </div>
        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
          <img className="relative z-10 rounded-lg shadow-2xl transition-transform duration-700 group-hover:-translate-y-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdDh1TT99qwAx3INhqnNycSWzcFuoW248vePUPLnX770-jS1ch0ZnXX-gjUxDQuya4zk-QEvEkxmvzUcs0jJDCh4KoiUvGnZxNIi2I_H2PSv0e_ADVMkSmtfygahIo05JKPAXDB6SFaEAP5Bq2EL1KPX0CJ6ovqCgPJdbRenQnmU5agxeIHq7bBv4J3NsbFxTXK8K6hbwTViVG90cWQiQvs1h9KTnusFfmjBYfXN_0QL0H9aTVEhtVTtAbIWjP9RFjykBBnIZT74M" alt="a single glowing ethereal sphere of white light" />
        </div>
      </div>
    </section>
  );
};

export default SilentWake;
