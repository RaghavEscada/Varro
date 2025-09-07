import React from 'react';

const AustraliaMap = () => {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Australia Map */}
        <path
          d="M150 450 
             L200 420 
             L280 400 
             L350 380 
             L420 360 
             L480 340 
             L550 320 
             L620 300 
             L680 280 
             L750 260 
             L800 240 
             L850 220 
             L880 200 
             L900 180 
             L920 160 
             L940 140 
             L950 120 
             L960 100 
             L970 80 
             L980 60 
             L990 40 
             L1000 20 
             L1000 0 
             L0 0 
             L0 20 
             L10 40 
             L20 60 
             L30 80 
             L40 100 
             L50 120 
             L60 140 
             L80 160 
             L100 180 
             L120 200 
             L140 220 
             L160 240 
             L180 260 
             L200 280 
             L220 300 
             L240 320 
             L260 340 
             L280 360 
             L300 380 
             L320 400 
             L340 420 
             L360 440 
             L380 460 
             L400 480 
             L420 500 
             L440 520 
             L460 540 
             L480 560 
             L500 580 
             L520 600 
             L0 600 
             Z"
          fill="currentColor"
        />
        
        {/* Tasmania */}
        <path
          d="M200 520 
             L220 510 
             L240 500 
             L260 490 
             L280 480 
             L300 470 
             L320 460 
             L340 450 
             L360 440 
             L380 430 
             L400 420 
             L420 410 
             L440 400 
             L460 390 
             L480 380 
             L500 370 
             L520 360 
             L540 350 
             L560 340 
             L580 330 
             L600 320 
             L620 310 
             L640 300 
             L660 290 
             L680 280 
             L700 270 
             L720 260 
             L740 250 
             L760 240 
             L780 230 
             L800 220 
             L820 210 
             L840 200 
             L860 190 
             L880 180 
             L900 170 
             L920 160 
             L940 150 
             L960 140 
             L980 130 
             L1000 120 
             L1000 140 
             L980 150 
             L960 160 
             L940 170 
             L920 180 
             L900 190 
             L880 200 
             L860 210 
             L840 220 
             L820 230 
             L800 240 
             L780 250 
             L760 260 
             L740 270 
             L720 280 
             L700 290 
             L680 300 
             L660 310 
             L640 320 
             L620 330 
             L600 340 
             L580 350 
             L560 360 
             L540 370 
             L520 380 
             L500 390 
             L480 400 
             L460 410 
             L440 420 
             L420 430 
             L400 440 
             L380 450 
             L360 460 
             L340 470 
             L320 480 
             L300 490 
             L280 500 
             L260 510 
             L240 520 
             L220 530 
             L200 540 
             Z"
          fill="currentColor"
        />
        
        {/* Major Cities - Dots */}
        <circle cx="200" cy="400" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="300" cy="350" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="400" cy="300" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="500" cy="250" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="600" cy="200" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="700" cy="150" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="800" cy="100" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="900" cy="50" r="8" fill="currentColor" opacity="0.3" />
        
        {/* State Lines - Subtle */}
        <path
          d="M0 200 L1000 200"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />
        <path
          d="M0 300 L1000 300"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />
        <path
          d="M0 400 L1000 400"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />
        <path
          d="M0 500 L1000 500"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

export default AustraliaMap;
