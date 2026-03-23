import React from 'react';

const JourneyFooter = () => {
  return (
    <footer className="relative z-10 border-t border-outline-variant/10 bg-surface-container-lowest/80 backdrop-blur-md py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-on-surface">
            <div className="size-4">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="font-headline font-bold text-sm tracking-widest uppercase">Aether Narrative</span>
          </div>
          <p className="text-[10px] font-label text-on-surface-variant tracking-wider uppercase">© 2104-2024 Trans-Temporal Media Group</p>
        </div>
        <div className="flex gap-8">
          <a className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Manifesto</a>
          <a className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Technical Docs</a>
          <a className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-colors" data-icon="share">share</span>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-colors" data-icon="settings">settings</span>
        </div>
      </div>
    </footer>
  );
};

export default JourneyFooter;
