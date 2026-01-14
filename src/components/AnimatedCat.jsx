import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AnimatedCat.css';

export default function AnimatedCat() {
  const [showMessage, setShowMessage] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  };

  // Contextual messages based on current page
  const getContextualMessages = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return [
        "Welcome to Studio Kriyaa! 🏠",
        "Need help finding something?",
        "Check out our amazing projects!",
        "Want to explore our services?",
        getGreeting(),
      ];
    } else if (path === '/about') {
      return [
        "Learning about us? Great! 😊",
        "We're passionate designers!",
        "Check our design philosophy!",
        "Ready to start a project?",
        getGreeting(),
      ];
    } else if (path === '/services') {
      return [
        "Explore our services! ✨",
        "We offer 6 core services!",
        "Need interior design help?",
        "Let's transform your space!",
        getGreeting(),
      ];
    } else if (path === '/contact') {
      return [
        "Ready to connect? 📧",
        "Fill out the form below!",
        "We'll respond quickly!",
        "Let's make magic together!",
        getGreeting(),
      ];
    } else if (path === '/project-story') {
      return [
        "See our design journey! 🎨",
        "Explore project phases!",
        "Click sections to expand!",
        "Amazing transformations ahead!",
        getGreeting(),
      ];
    }
    
    return [
      "Hi there! I'm your assistant! 😺",
      "Click me for help!",
      "Need navigation tips?",
      getGreeting(),
    ];
  };

  const handleCatClick = () => {
    const messages = getContextualMessages();
    
    setShowMessage(true);
    setIsWaving(true);
    setMessageIndex((prev) => (prev + 1) % messages.length);
    
    setTimeout(() => {
      setShowMessage(false);
      setIsWaving(false);
    }, 3000);
  };

  // Quick navigation helper
  const handleDoubleClick = () => {
    const path = location.pathname;
    
    // Suggest next logical page
    if (path === '/') {
      navigate('/about');
    } else if (path === '/about') {
      navigate('/services');
    } else if (path === '/services') {
      navigate('/contact');
    } else if (path === '/contact') {
      navigate('/');
    } else if (path === '/project-story') {
      navigate('/contact');
    }
  };

  const messages = getContextualMessages();
  const currentMessage = messages[messageIndex];

  return (
    <div 
      className="cat-container" 
      onClick={handleCatClick}
      onDoubleClick={handleDoubleClick}
      title="Click me for tips! Double-click to navigate!"
    >
      <div className="cat-wrapper">
        <div className={`realistic-cat ${isWaving ? 'waving' : ''}`}>
          {/* Simple emoji cat - cute and realistic */}
          <div className="emoji-cat">😺</div>
          
          {/* Waving paw effect */}
          {isWaving && <div className="waving-paw">👋</div>}
        </div>

        {/* Speech Bubble - Only show when clicked */}
        {showMessage && (
          <div className="speech-bubble assistant-bubble">
            <span>{currentMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
