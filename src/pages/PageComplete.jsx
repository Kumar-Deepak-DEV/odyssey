import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const PageComplete = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      {/* The component MainContent handles the specific Cycle Complete layout and background */}
      <MainContent />
      <Footer />
    </>
  );
};

export default PageComplete;
