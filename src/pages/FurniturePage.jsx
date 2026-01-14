import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import furniture01 from "../assets/furniture01.jpg";
import furniture02 from "../assets/furniture02.jpg";
import furniture03 from "../assets/furniture03.jpg";
import "../HomePage.css";
import "../styles/Pages.css";

export default function FurniturePage() {
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
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${furniture01})` }}>
        <h1>Furniture Selection</h1>
        <p>Curated pieces that blend form, function, and timeless elegance</p>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section animate-on-scroll">
        <div className="content-image">
          <img src={furniture02} alt="Furniture curation" />
        </div>
        <div className="content-text">
          <h2>The Art of Choosing Furniture</h2>
          <p>
            At Studio Kriyaa, we believe furniture is more than just functional—it's the foundation of your space's character. We carefully curate pieces that balance aesthetics, comfort, and durability.
          </p>
          <p style={{ marginTop: "16px" }}>
            Our furniture selections are thoughtfully sourced from trusted craftsmen and premium manufacturers, ensuring each piece brings quality and longevity to your home.
          </p>
          <Link to="/contact" className="outline-btn">Start Your Project</Link>
        </div>
      </section>

      {/* FURNITURE CATEGORIES */}
      <section className="explore-categories animate-on-scroll" style={{ padding: "80px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "60px", fontSize: "36px", color: "var(--secondary-color)" }}>Our Furniture Approach</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", padding: "30px", borderRadius: "12px", backgroundColor: "#faf8f5", border: "1px solid #e8dcc8" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🪑</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Timeless Classics</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Iconic pieces that transcend trends. We select furniture that brings timeless elegance and never goes out of style.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "30px", borderRadius: "12px", backgroundColor: "#faf8f5", border: "1px solid #e8dcc8" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🛋️</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Comfort First</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Luxury comfort meets elegant design. Every piece is selected for how it feels and performs in daily living.
            </p>
          </div>

          <div style={{ textAlign: "center", padding: "30px", borderRadius: "12px", backgroundColor: "#faf8f5", border: "1px solid #e8dcc8" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>♻️</div>
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "12px" }}>Sustainable Choices</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Quality that lasts generations. We prioritize sustainably sourced materials and ethical craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="content-section animate-on-scroll reverse">
        <div className="content-text">
          <h2>Why Our Furniture Matters</h2>
          <p>
            Furniture is the largest investment in your space design. We take this responsibility seriously, selecting pieces that reflect your lifestyle while maintaining the highest standards of quality.
          </p>
          <p style={{ marginTop: "16px" }}>
            From bespoke custom builds to carefully curated existing collections, every selection is made with intention, ensuring your space tells your unique story.
          </p>
        </div>
        <div className="content-image">
          <img src={furniture03} alt="Luxury furniture selection" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll" style={{ backgroundColor: "linear-gradient(135deg, #faf8f5 0%, #f4efe7 100%)", padding: "80px" }}>
        <h2>Ready to Transform Your Space?</h2>
        <p>Let's discuss your furniture needs and design vision</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Book Consultation</a>
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
