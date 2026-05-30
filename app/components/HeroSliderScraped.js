"use client";
import React from 'react';

const HeroSliderScraped = () => {
  return (
    <div style={{ width: '100%', height: '736px', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
      <iframe 
        src="/slider/index.html" 
        style={{
          width: '100%', 
          height: '100%', 
          border: 'none',
        }}
        title="Hero Slider"
        scrolling="no"
      />
    </div>
  );
};

export default HeroSliderScraped;
