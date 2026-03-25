import React from 'react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem, FadeInReveal, ParallaxLayer } from './animations';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Atmospheric Background Layer */}
      <ParallaxLayer speed={0.4} className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full nebula-glow opacity-30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-container/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" data-alt="cinematic deep space nebula with ethereal violet and cyan gas clouds swirling around distant glowing stars and cosmic dust" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzlSCf4qunHBKHXJ4zAk8QqhYJfcS9pib8qAbcIFkwfywHoQp05HNOE0uPJddkeg4IS2rBF0_qSHkdXIc42Uuc9GTZiWfb9hHbWai-UoppuCAQ1zLdetZ4ggkZwYT1TUmkcfIaeCRU9fVS3F8Hx5iXsqQ_Smn3LrHy7BfAM6aWTq2LYKj3WhGjGkMg9Q70ABvBqB1EUsK4JrpxmLBZqJoRpRwp_HjmCNoMHiBLh4M3vi-0gxCG4rlSBB3RAS0qcjeCd90j-lGSREA" alt="cinematic deep space nebula"/>
      </ParallaxLayer>
      {/* Narrative Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl space-y-8">
        <StaggerContainer staggerDelay={0.3} className="overflow-hidden">
          <StaggerItem yOffset={40}>
            <p className="font-label text-secondary tracking-[0.6em] uppercase text-[10px] mb-4 opacity-80">Chronicle I: The Awakening</p>
          </StaggerItem>
          <StaggerItem yOffset={60}>
            <h1 className="font-headline italic text-display-lg md:text-[8rem] text-primary leading-none tracking-tighter drop-shadow-2xl">
              Aether Narrative
            </h1>
          </StaggerItem>
          <StaggerItem yOffset={40}>
            <p className="font-body text-on-surface-variant text-lg md:text-2xl tracking-widest font-light max-w-2xl mx-auto opacity-70 mt-6">
              Explore the Void
            </p>
          </StaggerItem>
          <StaggerItem yOffset={40} className="pt-12">
            <Link to="/origin" className="group relative inline-block px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(218,185,255,0.2)] hover:shadow-[0_0_40px_rgba(218,185,255,0.6)]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-primary opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
              <div className="absolute inset-0 bg-secondary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-3 font-body font-bold text-on-primary uppercase tracking-[0.2em] text-sm">
                Begin the Journey
                <span className="material-symbols-outlined transition-transform duration-500 group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
              </span>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-label text-[10px] tracking-[0.4em] uppercase text-slate-500">Descent</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent"
        ></motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
