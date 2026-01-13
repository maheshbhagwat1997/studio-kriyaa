import React from 'react';
import './AnimatedCat.css';

export default function AnimatedCat() {
  return (
    <div className="cat-container">
      <div className="cat-wrapper">
        <div className="cat">
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
          
          {/* Tail */}
          <div className="cat-tail"></div>
        </div>

        {/* Speech Bubble */}
        <div className="speech-bubble">
          <span className="speech-text">Hii!</span>
          <div className="speech-tail"></div>
        </div>
      </div>
    </div>
  );
}
