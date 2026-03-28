import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SilentWake from '../components/SilentWake';
import Ignition from '../components/Ignition';
import DescentSection from '../components/DescentSection';
import CTA from '../components/CTA';

const PageExplore = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      {/* Basic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 bg-primary"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-20"></div>
      </div>
      
      <main className="relative z-10">
        <Hero />
        <SilentWake />
        <Ignition />
        <DescentSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default PageExplore;
