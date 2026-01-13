import React, { useState } from 'react';
import './AnimatedCat.css';

export default function AnimatedCat() {
  const [showMessage, setShowMessage] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  const handleCatClick = () => {
    setShowMessage(true);
    setIsWaving(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsWaving(false);
    }, 3000);
  };

  return (
    <div className="cat-container" onClick={handleCatClick}>
      <div className="cat-wrapper">
        <div className={`cat ${isWaving ? 'waving' : ''}`}>
          <div className="cat-head">
            {/* Left Ear */}
            <div className="cat-ear cat-ear-left"></div>
            {/* Right Ear */}
            <div className="cat-ear cat-ear-right"></div>
            
            {/* Face */}
            <div className="cat-face">
              {/* Left Eye */}
              <div className="cat-eye cat-eye-left">
                <div className="cat-pupil"></div>
              </div>
              
              {/* Right Eye */}
              <div className="cat-eye cat-eye-right">
                <div className="cat-pupil"></div>
              </div>
              
              {/* Nose */}
              <div className="cat-nose"></div>
              
              {/* Mouth */}
              <div className="cat-mouth"></div>
            </div>
          </div>
          
          {/* Body */}
          <div className="cat-body">
            {/* Left Arm */}
            <div className="cat-arm cat-arm-left"></div>
            {/* Right Arm */}
            <div className="cat-arm cat-arm-right"></div>
            
            {/* Belly */}
            <div className="cat-belly"></div>
          </div>
          
          {/* Whiskers */}
          <div className="cat-whiskers">
            <div className="cat-whisker whisker-left-1"></div>
            <div className="cat-whisker whisker-left-2"></div>
            <div className="cat-whisker whisker-right-1"></div>
            <div className="cat-whisker whisker-right-2"></div>
          </div>
          
          {/* Cheeks */}
          <div className="cat-cheek cat-cheek-left"></div>
          <div className="cat-cheek cat-cheek-right"></div>
          
          {/* Legs */}
          <div className="cat-leg cat-leg-left"></div>
          <div className="cat-leg cat-leg-right"></div>
          
          {/* Tail */}
          <div className="cat-tail"></div>
        </div>

        {/* Speech Bubble - Only show when clicked */}
        {showMessage && (
          <div className="speech-bubble">
            <span>Hii!</span>
          </div>
        )}
      </div>
    </div>
  );
}
