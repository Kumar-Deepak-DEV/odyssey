import React from 'react';

const JourneyPortal = () => {
  return (
    <section className="h-[2048px] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full opacity-30 mix-blend-screen bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHA7oIPx4fHnbuY6pSgOFyYbVa20vm2Lobdt2qPsns6MKvCqHZVKQ2Md5Bth0pKUuxXV8rHgE895BtKFBMGFjk9p5jyzQwrGO7eXu-774rvsjbBFigiYY72BBRfQT_bDDot1zoPQfuJExZEN3HzFzrPeJV-ec4s5T1AihyYsJv6PFN_osnTfdttzdvWtBVFTDRmtQ9Ts24kP3nZ0TdnhuLH2usyRpF4ryQJmDfHl_97FQZwiqL2WhtmZn5GgokE1yBGLMMXm-jW0s')" }}></div>
        </div>
        <div className="relative z-10 text-center space-y-8 px-4">
          <div className="inline-block px-6 py-2 rounded-full glass-panel border-primary/20 mb-4">
            <span className="font-label text-xs text-primary-fixed-dim uppercase tracking-widest">Bridging Realities</span>
          </div>
          <h3 className="font-headline text-4xl md:text-6xl text-white font-medium max-w-3xl mx-auto leading-snug">
            "The distance between <span className="text-primary italic">stardust</span> and <span className="text-secondary">data</span> is measured in human curiosity."
          </h3>
          <div className="mt-12 flex justify-center">
            <div className="relative size-32 md:size-48 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/40 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="size-16 bg-white rounded-full shadow-[0_0_50px_#fff] blur-[2px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPortal;
