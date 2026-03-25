import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 cosmic-grid"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary nebula-glow rounded-full"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary nebula-glow rounded-full"></div>
    </div>
  );
};

export default Background;
