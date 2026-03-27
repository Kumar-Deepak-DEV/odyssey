import React from 'react';
import Navbar from '../components/Navbar';
import JourneyPast from '../components/JourneyPast';
import JourneyPortal from '../components/JourneyPortal';
import JourneyFuture from '../components/JourneyFuture';
import JourneyCTA from '../components/JourneyCTA';
import JourneyFooter from '../components/JourneyFooter';
import BottomNav from '../components/BottomNav';

const PageJourney = () => {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 size-[500px] bg-primary-container nebula-glow rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 size-[600px] bg-secondary nebula-glow rounded-full"></div>
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-outline-variant/20 z-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full blur-[4px] shadow-[0_0_15px_#46f5e0]"></div>
        <div className="h-1/3 w-full bg-secondary shadow-[0_0_10px_#46f5e0]"></div>
      </div>

      <main className="relative z-10">
        <JourneyPast />
        <JourneyPortal />
        <JourneyFuture />
        <JourneyCTA />
      </main>
      <JourneyFooter />
      <BottomNav />
    </>
  );
};

export default PageJourney;
