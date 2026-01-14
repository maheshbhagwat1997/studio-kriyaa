import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import lighting01 from "../assets/lighting01.jpg";
import lighting02 from "../assets/lighting02.jpg";
import lighting03 from "../assets/lighting03.jpg";
import "../HomePage.css";
import "../styles/Pages.css";

export default function LightingPage() {
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

      {/* PAGE HERO */}
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${lighting01})` }}>
        <h1>Lighting Design</h1>
        <p>The art of illumination that transforms spaces and moods</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section animate-on-scroll">
        <div className="content-image">
          <img src={lighting02} alt="Lighting design" />
        </div>
        <div className="content-text">
          <h2>Light: The Soul of Interior Design</h2>
          <p>
            Lighting is far more than functional—it's transformative. The right light can enhance beauty, create ambiance, influence emotions, and define how a space is experienced throughout the day.
          </p>
          <p style={{ marginTop: "16px" }}>
            We design lighting systems that balance aesthetics with practicality, considering layering, color temperature, and technology to create spaces that feel perfect in any moment.
          </p>
          <Link to="/contact" className="outline-btn">Plan Your Lighting</Link>
        </div>
      </section>

      {/* LIGHTING TYPES */}
      <section className="explore-categories animate-on-scroll" style={{ padding: "80px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "60px", fontSize: "36px", color: "var(--secondary-color)" }}>Lighting Layers</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", padding: "30px", borderRadius: "12px", backgroundColor: "#faf8f5", border: "1px solid #e8dcc8" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>💡</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Ambient Lighting</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Overall illumination that sets the foundation for your space's atmosphere and functionality.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "30px", borderRadius: "12px", backgroundColor: "#faf8f5", border: "1px solid #e8dcc8" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔦</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Task Lighting</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Focused illumination for specific activities like reading, cooking, or working.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "30px", borderRadius: "12px", backgroundColor: "#faf8f5", border: "1px solid #e8dcc8" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✨</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Accent Lighting</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Dramatic highlights that showcase art, architecture, and create visual depth.
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTING LAYERS SECTION */}
      <section className="content-section animate-on-scroll reverse" style={{ backgroundColor: "#faf8f5" }}>
        <div className="content-text">
          <h2>Layered Lighting Approach</h2>
          <p>
            Professional lighting design considers three essential layers: ambient lighting for overall illumination, task lighting for specific activities, and accent lighting to highlight architectural features and art.
          </p>
          <p style={{ marginTop: "16px" }}>
            We integrate smart lighting controls and dimmers to give you complete flexibility over your home's ambiance throughout the day.
          </p>
        </div>
        <div className="content-image">
          <img src={lighting03} alt="Layered lighting design" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll" style={{ backgroundColor: "linear-gradient(135deg, #faf8f5 0%, #f4efe7 100%)", padding: "80px" }}>
        <h2>Illuminate Your Space</h2>
        <p>Let's design lighting that transforms your environment</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Start Planning</a>
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
            <Link to="/furniture" className="footer-link">Furniture</Link>
            <Link to="/decor" className="footer-link">Decor</Link>
            <Link to="/lighting" className="footer-link">Lighting</Link>
            <Link to="/textiles" className="footer-link">Textiles</Link>
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
