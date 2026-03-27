import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import HeroOrigin from '../components/HeroOrigin';
import CelestialArchives from '../components/CelestialArchives';

const PageOrigin = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      
      {/* Background with parallax-nebula class simulation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 cosmic-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-[200px] opacity-10 bg-primary parallax-nebula"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <HeroOrigin />
        <CelestialArchives />
      </main>
      <Footer />
    </>
  );
};

export default PageOrigin;
