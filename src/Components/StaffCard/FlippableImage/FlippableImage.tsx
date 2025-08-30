// src/FlippableImage.js

import React, { useState } from 'react';
import './flippableImage.css';

interface FlippableImageProps {
  frontImage: string;
  backImage: string;
}

// This is a FUNCTION component
function FlippableImage({ frontImage, backImage }: FlippableImageProps) {
  // The useState hook works correctly here!
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="front" className="flip-card-img" />
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="back" className="flip-card-img" />
        </div>
      </div>
    </div>
  );
}

export default FlippableImage;