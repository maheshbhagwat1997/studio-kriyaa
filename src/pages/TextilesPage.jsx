import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import Textile01 from "../assets/Textile01.jpg";
import Textile02 from "../assets/Textile02.jpg";
import Textile03 from "../assets/Textile03.jpg";
import "../HomePage.css";
import "../styles/Pages.css";

export default function TextilesPage() {
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
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${Textile01})` }}>
        <h1>Textiles & Fabrics</h1>
        <p>Soft luxury that defines comfort and elegance</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section animate-on-scroll">
        <div className="content-image">
          <img src={Textile02} alt="Luxury textiles" />
        </div>
        <div className="content-text">
          <h2>The Touch & Feel of Home</h2>
          <p>
            Textiles are the unsung heroes of interior design. They add warmth, softness, color, and personality while serving crucial functional roles. From luxurious upholstery to flowing drapes, the right fabrics elevate your entire space.
          </p>
          <p style={{ marginTop: "16px" }}>
            We curate textiles with attention to quality, durability, sustainability, and aesthetics—ensuring they look beautiful and feel wonderful for years to come.
          </p>
          <Link to="/contact" className="outline-btn">Explore Textiles</Link>
        </div>
      </section>

      {/* TEXTILE CATEGORIES */}
      <section className="explore-categories animate-on-scroll" style={{ padding: "80px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "60px", fontSize: "36px", color: "var(--secondary-color)" }}>Textile Applications</h2>
        
        <div className="service-detail-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="service-detail-card">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🛋️</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Upholstery</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Premium fabrics for furniture that combine beauty, comfort, and durability for daily use.
            </p>
          </div>

          <div className="service-detail-card">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🪟</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Window Treatments</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Custom drapery and curtains that control light, privacy, and enhance architectural features.
            </p>
          </div>

          <div className="service-detail-card">
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🛏️</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Soft Furnishings</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Bedding, pillows, and throws that add layers of comfort and visual interest.
            </p>
          </div>
        </div>
      </section>

      {/* FABRIC SELECTION SECTION */}
      <section className="content-section animate-on-scroll reverse" style={{ backgroundColor: "#faf8f5" }}>
        <div className="content-text">
          <h2>Fabric Selection Process</h2>
          <p>
            We consider durability, maintenance, and lifestyle when selecting textiles. Every fabric choice is made with your daily living in mind, ensuring both beauty and functionality.
          </p>
          <p style={{ marginTop: "16px" }}>
            Our partnerships with premium fabric houses give you access to exclusive collections and custom options tailored to your specific needs.
          </p>
        </div>
        <div className="content-image">
          <img src={Textile03} alt="Fabric selection process" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll" style={{ backgroundColor: "linear-gradient(135deg, #faf8f5 0%, #f4efe7 100%)", padding: "80px" }}>
        <h2>Discover Your Perfect Fabrics</h2>
        <p>Let's select textiles that bring comfort and beauty to your space</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Schedule Consultation</a>
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
