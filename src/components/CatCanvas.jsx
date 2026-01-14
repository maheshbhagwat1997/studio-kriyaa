import React, { useState, useEffect } from 'react';
import './CatCanvas.css';

export default function CatCanvas() {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Natural blinking pattern
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000 + Math.random() * 3000); // Blink every 4-7 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="cat-canvas-container">
      <svg viewBox="0 0 400 480" className="cat-canvas-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Fur texture pattern */}
          <filter id="furTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>

          {/* Soft shadow filter */}
          <filter id="softShadow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feOffset dx="0" dy="3" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
          </filter>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Eye shine gradient */}
          <radialGradient id="eyeShine" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Head fur gradient */}
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5A578" />
            <stop offset="50%" stopColor="#E8956A" />
            <stop offset="100%" stopColor="#D8845A" />
          </linearGradient>

          {/* Body fur gradient */}
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4A878" />
            <stop offset="50%" stopColor="#E8956A" />
            <stop offset="100%" stopColor="#D97960" />
          </linearGradient>

          {/* Ear gradient */}
          <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5A578" />
            <stop offset="100%" stopColor="#D8845A" />
          </linearGradient>
        </defs>

        {/* Shadow under cat */}
        <ellipse cx="200" cy="440" rx="80" ry="15" fill="#000000" opacity="0.1" />

        {/* Back legs */}
        <ellipse cx="150" cy="360" rx="18" ry="40" fill="#E8956A" filter="url(#furTexture)" />
        <ellipse cx="250" cy="360" rx="18" ry="40" fill="#E8956A" filter="url(#furTexture)" />
        
        {/* Back leg paws */}
        <ellipse cx="150" cy="400" rx="22" ry="14" fill="#D8845A" />
        <ellipse cx="250" cy="400" rx="22" ry="14" fill="#D8845A" />
        <ellipse cx="150" cy="403" rx="16" ry="8" fill="#C9775C" />
        <ellipse cx="250" cy="403" rx="16" ry="8" fill="#C9775C" />

        {/* Tail */}
        <path
          d="M 280 320 Q 320 280 330 200 Q 335 150 320 100"
          stroke="#D8845A"
          strokeWidth="24"
          fill="none"
          strokeLinecap="round"
          filter="url(#furTexture)"
          opacity="0.9"
        />
        <path
          d="M 280 320 Q 320 280 330 200 Q 335 150 320 100"
          stroke="#C9775C"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Body */}
        <ellipse cx="200" cy="300" rx="70" ry="85" fill="url(#bodyGradient)" filter="url(#furTexture)" />
        
        {/* Belly patch */}
        <ellipse cx="200" cy="320" rx="45" ry="55" fill="#F5D4B8" filter="url(#furTexture)" opacity="0.8" />

        {/* Front left leg */}
        <ellipse cx="155" cy="360" rx="16" ry="45" fill="#E8956A" filter="url(#furTexture)" />
        <ellipse cx="155" cy="405" rx="20" ry="14" fill="#D8845A" />
        <ellipse cx="155" cy="408" rx="14" ry="8" fill="#C9775C" />

        {/* Front right leg */}
        <ellipse cx="245" cy="360" rx="16" ry="45" fill="#E8956A" filter="url(#furTexture)" />
        <ellipse cx="245" cy="405" rx="20" ry="14" fill="#D8845A" />
        <ellipse cx="245" cy="408" rx="14" ry="8" fill="#C9775C" />

        {/* Chest patch */}
        <ellipse cx="200" cy="270" rx="35" ry="40" fill="#FFE4D0" filter="url(#furTexture)" opacity="0.7" />

        {/* Neck area shading */}
        <ellipse cx="200" cy="240" rx="55" ry="30" fill="#D97960" opacity="0.15" />

        {/* Head */}
        <circle cx="200" cy="120" r="70" fill="url(#headGradient)" filter="url(#furTexture)" />

        {/* Left ear */}
        <path
          d="M 155 70 L 140 20 L 160 80 Z"
          fill="url(#earGradient)"
          filter="url(#furTexture)"
        />
        {/* Left ear inner */}
        <path
          d="M 154 68 L 148 35 L 157 75 Z"
          fill="#FFB5A0"
          opacity="0.8"
        />

        {/* Right ear */}
        <path
          d="M 245 70 L 260 20 L 240 80 Z"
          fill="url(#earGradient)"
          filter="url(#furTexture)"
        />
        {/* Right ear inner */}
        <path
          d="M 246 68 L 252 35 L 243 75 Z"
          fill="#FFB5A0"
          opacity="0.8"
        />

        {/* Cheeks blush */}
        <ellipse cx="130" cy="130" rx="20" ry="15" fill="#FF8FA0" opacity="0.25" />
        <ellipse cx="270" cy="130" rx="20" ry="15" fill="#FF8FA0" opacity="0.25" />

        {/* Snout/muzzle */}
        <ellipse cx="200" cy="145" rx="35" ry="30" fill="#F5D4B8" filter="url(#furTexture)" opacity="0.9" />

        {/* Nose */}
        <path d="M 200 145 L 195 160 L 205 160 Z" fill="#FF8FA0" />

        {/* Mouth line */}
        <line x1="200" y1="160" x2="200" y2="170" stroke="#D97960" strokeWidth="1.5" />

        {/* Mouth curves */}
        <path
          d="M 200 165 Q 185 172 175 170"
          stroke="#D97960"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 200 165 Q 215 172 225 170"
          stroke="#D97960"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Whiskers - left side */}
        <line x1="165" y1="135" x2="100" y2="130" stroke="#D8845A" strokeWidth="1" opacity="0.6" />
        <line x1="165" y1="145" x2="100" y2="145" stroke="#D8845A" strokeWidth="1" opacity="0.6" />
        <line x1="165" y1="155" x2="100" y2="160" stroke="#D8845A" strokeWidth="1" opacity="0.6" />

        {/* Whiskers - right side */}
        <line x1="235" y1="135" x2="300" y2="130" stroke="#D8845A" strokeWidth="1" opacity="0.6" />
        <line x1="235" y1="145" x2="300" y2="145" stroke="#D8845A" strokeWidth="1" opacity="0.6" />
        <line x1="235" y1="155" x2="300" y2="160" stroke="#D8845A" strokeWidth="1" opacity="0.6" />

        {/* Left eye white */}
        <ellipse cx="170" cy="105" rx="16" ry="22" fill="#FFFFFF" filter="url(#softShadow)" />

        {/* Right eye white */}
        <ellipse cx="230" cy="105" rx="16" ry="22" fill="#FFFFFF" filter="url(#softShadow)" />

        {/* Left eye iris/pupil group */}
        <g className={`eye-group ${isBlinking ? 'blinking' : ''}`}>
          <circle cx="170" cy="110" r="12" fill="#8B6F47" />
          <circle cx="170" cy="110" r="9" fill="#3D2817" />
          <ellipse cx="170" cy="108" rx="4" ry="6" fill="#000000" />
        </g>

        {/* Left eye shine */}
        <circle cx="173" cy="105" r="5" fill="url(#eyeShine)" />
        <circle cx="175" cy="107" r="2.5" fill="#FFFFFF" opacity="0.8" />

        {/* Right eye iris/pupil group */}
        <g className={`eye-group ${isBlinking ? 'blinking' : ''}`}>
          <circle cx="230" cy="110" r="12" fill="#8B6F47" />
          <circle cx="230" cy="110" r="9" fill="#3D2817" />
          <ellipse cx="230" cy="108" rx="4" ry="6" fill="#000000" />
        </g>

        {/* Right eye shine */}
        <circle cx="233" cy="105" r="5" fill="url(#eyeShine)" />
        <circle cx="235" cy="107" r="2.5" fill="#FFFFFF" opacity="0.8" />

        {/* Eye outlines for definition */}
        <ellipse cx="170" cy="105" rx="16" ry="22" fill="none" stroke="#D8845A" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="230" cy="105" rx="16" ry="22" fill="none" stroke="#D8845A" strokeWidth="0.5" opacity="0.3" />

        {/* Fur detail lines on head */}
        <path d="M 140 100 Q 150 85 160 95" stroke="#D8845A" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 240 100 Q 250 85 260 95" stroke="#D8845A" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 180 70 Q 190 60 200 65" stroke="#D8845A" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 200 65 Q 210 60 220 70" stroke="#D8845A" strokeWidth="0.8" fill="none" opacity="0.3" />
      </svg>
    </div>
  );
}
