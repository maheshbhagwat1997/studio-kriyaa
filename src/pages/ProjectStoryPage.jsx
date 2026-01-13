import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";

// Import your project images here
import mood1 from "../assets/mood1.jpg";
import mood2 from "../assets/mood2.jpg";
import mood3 from "../assets/mood3.jpg";
import process1 from "../assets/process1.jpg";
import process2 from "../assets/process2.jpg";
import process3 from "../assets/process3.jpg";
import final1 from "../assets/final1.jpg";
import final2 from "../assets/final2.jpg";

import "../HomePage.css";
import "../styles/ProjectStory.css";

export default function ProjectStoryPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "Concept Sketches",
      description: "Every great design begins with a vision. Our initial concept sketches capture the raw ideas and creative exploration that lay the foundation for the entire project. These hand-drawn illustrations represent the first sparks of imagination, translating client aspirations into visual form.",
      images: [
        // Replace with: sketch1, sketch2
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
      ]
    },
    {
      title: "Mood Boards",
      description: "Mood boards establish the emotional tone and aesthetic direction of the space. Through carefully curated collections of colors, textures, patterns, and inspirational imagery, we create a cohesive visual narrative that guides every design decision throughout the project.",
      images: [mood1, mood2, mood3]
    },
    {
      title: "Material Boards",
      description: "Material selection is where design meets tactility. Our material boards showcase the precise fabrics, finishes, woods, metals, and stone selections that will bring the design to life. Each material is chosen for its quality, durability, and contribution to the overall aesthetic harmony.",
      images: [
        // Replace with: material1, material2
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
      ]
    },
    {
      title: "Process Photos",
      description: "The transformation journey unfolds through process documentation. These behind-the-scenes glimpses capture the craftsmanship, attention to detail, and meticulous execution that turn concepts into reality. From construction to installation, every step is carefully orchestrated.",
      images: [process1, process2, process3]
    },
    {
      title: "Final Outcome",
      description: "The culmination of vision, planning, and execution. The completed space embodies the perfect synthesis of form and function, aesthetics and comfort. Every detail reflects the thoughtful design process and collaborative journey, creating an environment that exceeds expectations and transforms daily living.",
      images: [final1, final2]
    }
  ];

  return (
    <div className="page">
      {/* ANIMATED CAT */}
      <AnimatedCat />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-link" aria-label="Studio Kriyaa Home">
            <span className="logo-ring" aria-hidden="true">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="32" y1="4" x2="32" y2="14" className="ring-line" />
                </g>
              </svg>
            </span>
            <img src={logo} alt="Studio Kriyaa Logo" className="logo-icon" />
            <div className="logo">Studio Kriyaa</div>
          </Link>
        </div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* STORY HEADER */}
      <section className="story-hero animate-on-scroll">
        <h1>The Story Behind the Design</h1>
        <p>Explore the journey from idea to reality.</p>
      </section>

      {/* ACCORDION SECTIONS */}
      <section className="story-accordion animate-on-scroll">
        {sections.map((section, index) => (
          <div key={index} className={`accordion-item ${openSection === index ? 'active' : ''}`}>
            <div 
              className="accordion-header" 
              onClick={() => toggleSection(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleSection(index)}
            >
              <h2>{section.title}</h2>
              <span className="accordion-icon">{openSection === index ? '−' : '+'}</span>
            </div>
            
            <div className={`accordion-content ${openSection === index ? 'open' : ''}`}>
              <p>{section.description}</p>
              <div className="accordion-images">
                {section.images.map((img, imgIndex) => (
                  <img key={imgIndex} src={img} alt={`${section.title} ${imgIndex + 1}`} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll">
        <h2>Ready to Create Your Story?</h2>
        <p>Let's bring your vision to life</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Get Started</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo footer-logo-top">
          <Link to="/">
            <img src={logo} alt="Studio Kriyaa logo" className="footer-logo-img" /> <span style={{ color: '#111' }}>Studio Kriyaa</span>
          </Link>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#furniture" className="footer-link">Furniture</a>
            <a href="#decor" className="footer-link">Decor</a>
            <a href="#lighting" className="footer-link">Lighting</a>
            <a href="#textiles" className="footer-link">Textiles</a>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="footer-link">Behance</a>
          </div>
        </div>

        <p className="copyright">© 2025 Studio Kriyaa. All rights reserved.</p>
      </footer>
    </div>
  );
}
