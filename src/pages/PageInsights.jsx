import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import HeroCosmic from '../components/HeroCosmic';
import BentoGridInsights from '../components/BentoGridInsights';

const PageInsights = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 cosmic-grid"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary nebula-glow rounded-full"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary nebula-glow rounded-full"></div>
      </div>
      <Navbar />
      <SideNav />
      <main className="relative z-10 pt-40 pb-24 px-12 max-w-screen-2xl mx-auto">
        <HeroCosmic />
        <BentoGridInsights />
      </main>
      <Footer />
    </>
  );
};

export default PageInsights;
