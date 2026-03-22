import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

// Page Imports
import PageExplore from './pages/PageExplore';
import PageOrigin from './pages/PageOrigin';
import PageCartography from './pages/PageCartography';
import PageJourney from './pages/PageJourney';
import PageInsights from './pages/PageInsights';
import PageComplete from './pages/PageComplete';

const AnimatedRoutes = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.02, filter: "blur(10px)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition} key="explore"><PageExplore /></motion.div>} />
        <Route path="/origin" element={<motion.div {...pageTransition} key="origin"><PageOrigin /></motion.div>} />
        <Route path="/cartography" element={<motion.div {...pageTransition} key="cartography"><PageCartography /></motion.div>} />
        <Route path="/journey" element={<motion.div {...pageTransition} key="journey"><PageJourney /></motion.div>} />
        <Route path="/insights" element={<motion.div {...pageTransition} key="insights"><PageInsights /></motion.div>} />
        <Route path="/complete" element={<motion.div {...pageTransition} key="complete"><PageComplete /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
