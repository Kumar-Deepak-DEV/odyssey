import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import HeroCartography from '../components/HeroCartography';
import FeatureCards from '../components/FeatureCards';

const PageCartography = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      {/* Background for cartography */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary-container blur-[150px] opacity-20 animate-pulse transition-all duration-1000"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[1000px] h-[1000px] bg-secondary blur-[200px] opacity-10 animate-pulse transition-all duration-1000" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-tertiary-container blur-[150px] opacity-10 animate-pulse transition-all duration-1000" style={{ animationDelay: '4s', transform: 'translate(-50%, -50%)' }}></div>
      </div>
      
      <main className="relative z-10 pt-48 pb-24 px-6 md:px-24 max-w-screen-2xl mx-auto">
        <HeroCartography />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
};

export default PageCartography;
