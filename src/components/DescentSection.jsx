import React from 'react';

const DescentSection = () => {
  return (
    <section className="relative py-32 px-12 md:px-24 bg-surface-container-lowest overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center max-w-screen-2xl mx-auto">
        <div className="md:col-span-5 space-y-10 order-2 md:order-1">
          <span className="font-label text-tertiary-fixed-dim tracking-[0.3em] uppercase text-xs">Structural Log</span>
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight">Beyond the horizon of events.</h2>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed opacity-80 max-w-md">
            In the silence of the void, every whisper echoes like a star collapsing. We map the unseen, navigating through layers of digital consciousness and ancient stardust.
          </p>
          <div className="pt-6">
            <a className="inline-flex items-center gap-4 text-secondary font-body uppercase tracking-[0.2em] text-xs hover:gap-6 transition-all duration-300" href="#">
              <span>Read the Protocols</span>
              <div className="h-[1px] w-12 bg-secondary/50"></div>
            </a>
          </div>
        </div>
        <div className="md:col-span-7 relative order-1 md:order-2">
          {/* Asymmetric Bento Block */}
          <div className="grid grid-cols-6 grid-rows-6 gap-6 aspect-square md:aspect-video">
            <div className="col-span-4 row-span-6 rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" data-alt="abstract architectural forms emerging from dark purple mist with sharp metallic edges and glowing cyan panel lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOmdGgzhdNvWn1aOTPtLioKhby38FtJyi6y36mUOK4PLKbt6JYxqN7HlE-B-G-3pmt0-KZ2KWr3LNhKNkHGLpSolCEQ4iKd31cNgGEAHCFMDfgdCUNOtDN1ZsK0C1WHpkhpzCAuR5KVgV2vrw0sS8Fvx3OzlkB7di0TeXrvFbpueAcGRNlV2Z5ejLfd8im3U0Mu8vCyL1cSeCTkvkOAN3XdXQtg-CJLlFbPxy8x1cT5MaFV4HiqGN4pBtAKVKgYhYRZEnq_uzla4k" alt="abstract architectural forms"/>
            </div>
            <div className="col-span-2 row-span-3 bg-surface-container-high rounded-xl p-8 flex flex-col justify-end backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-primary mb-4 text-4xl" data-icon="grain">grain</span>
              <p className="font-label text-[10px] tracking-[0.2em] uppercase text-outline">Frequency 432Hz</p>
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover opacity-60" data-alt="macro photograph of glowing cosmic particles and dust motes suspended in a deep indigo liquid with refracted light beams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwUPWCaiGP5JcYMJNKCDfFDU8_4Gf0jtLljh7FXJzFlpGYdlOcRtyFdaNJxB9L2Qwph6ES0vSEoynVfGUcTDEk7l4iDNy8YIvHb0xkMLL5TPHvBhjIjx_hDKazm4ZzTipWUljCA6u9LnxEHpBJfwji3UoLnt9aeJEJo9CmPlV2htvKK2x5QRRpJKOqAb398uB-ml_goKOD0cxzJC5dZlligEvKT4Ceba3PUZzilL2AjqrS2eDSOstgfQJ7xFs0f4L_QgggxEKjiWA" alt="macro photograph of glowing cosmic particles"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescentSection;
