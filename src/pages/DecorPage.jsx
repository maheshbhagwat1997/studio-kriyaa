import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import Decor01 from "../assets/Decor01.jpg";
import Decor02 from "../assets/Decor02.jpg";
import Decor03 from "../assets/Decor03.jpg";
import "../HomePage.css";
import "../styles/Pages.css";

export default function DecorPage() {
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
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${Decor01})` }}>
        <h1>Decor & Accessories</h1>
        <p>The finishing touches that bring your space to life</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section animate-on-scroll">
        <div className="content-image">
          <img src={Decor02} alt="Decor and accessories" />
        </div>
        <div className="content-text">
          <h2>Decor: Where Personality Shines</h2>
          <p>
            Decor is the soul of interior design. From artwork to accessories, every carefully chosen element tells your story and transforms a space from merely functional to truly personal.
          </p>
          <p style={{ marginTop: "16px" }}>
            We believe in thoughtful curation—selecting pieces that complement your space while reflecting your individuality and creating a cohesive, harmonious environment.
          </p>
          <Link to="/contact" className="outline-btn">Explore More</Link>
        </div>
      </section>

      {/* DECOR CATEGORIES */}
      <section className="explore-categories animate-on-scroll" style={{ padding: "80px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "60px", fontSize: "36px", color: "var(--secondary-color)" }}>Decor Services</h2>
        
        <div className="service-detail-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="service-detail-card">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎨</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Art Curation</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Original artwork and prints that create focal points and express your aesthetic sensibility.
            </p>
          </div>

          <div className="service-detail-card">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏺</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Accessories</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Curated decorative objects, from statement vases to subtle accents, that add character.
            </p>
          </div>

          <div className="service-detail-card">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌿</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Living Elements</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Strategic placement of plants and natural elements to bring life and freshness to interiors.
            </p>
          </div>
        </div>
      </section>

      {/* ADDITIONAL DECOR SECTION */}
      <section className="content-section animate-on-scroll reverse" style={{ backgroundColor: "#faf8f5" }}>
        <div className="content-text">
          <h2>Curated Collections</h2>
          <p>
            Every decorative piece is selected to complement your interior architecture and enhance the overall aesthetic harmony of your home.
          </p>
          <p style={{ marginTop: "16px" }}>
            From statement art to subtle accents, we source pieces that create visual interest while maintaining a cohesive design narrative.
          </p>
        </div>
        <div className="content-image">
          <img src={Decor03} alt="Curated decor collections" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll" style={{ backgroundColor: "linear-gradient(135deg, #faf8f5 0%, #f4efe7 100%)", padding: "80px" }}>
        <h2>Let's Personalize Your Space</h2>
        <p>Schedule a consultation to discover decor that reflects your style</p>
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
