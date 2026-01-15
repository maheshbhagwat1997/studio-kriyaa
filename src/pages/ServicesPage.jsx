import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import servicesImage from "../assets/services.jpg";
import video01 from "../assets/video01.mp4";
import "../HomePage.css";
import "../styles/Pages.css";
import { studioShowreelUrl } from "../utils/media";

export default function ServicesPage() {
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
          <Link to="/services" className="nav-link active">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* SERVICES HEADER */}
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${servicesImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1>Our Services</h1>
        <p>Comprehensive Design Solutions for Every Space</p>
      </section>

      {/* SHOWREEL SECTION */}
      <section className="video-section animate-on-scroll">
        <h2>See Our Process</h2>
        <p>A short walkthrough of how we collaborate, iterate, and bring spaces to life.</p>
        <div className="video-wrapper">
          <video
            className="video-frame"
            src={studioShowreelUrl}
            poster={servicesImage}
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section animate-on-scroll">
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">🏠</div>
            <h3>Residential Design</h3>
            <p>Transform your home into a sanctuary of elegance and comfort. From concept to completion, we create personalized living spaces that reflect your lifestyle.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">🏢</div>
            <h3>Commercial Design</h3>
            <p>Create inspiring work environments that enhance productivity and reflect your brand identity. We design offices, retail spaces, and hospitality venues.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">📐</div>
            <h3>Space Planning</h3>
            <p>Maximize the potential of your space with strategic planning. We optimize layouts for functionality, flow, and aesthetics.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">🎨</div>
            <h3>Color & Materials</h3>
            <p>Expert guidance on color palettes, materials, and finishes. We source premium furnishings and decor to bring your vision to life.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">💡</div>
            <h3>Lighting Design</h3>
            <p>Strategic lighting transforms spaces. We design lighting solutions that enhance ambiance, functionality, and energy efficiency.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">📋</div>
            <h3>Design Consultation</h3>
            <p>Get expert advice for your project. Our consultations provide insights on design trends, budget optimization, and project planning.</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section animate-on-scroll">
        <h2>Our Design Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>We start by understanding your vision, lifestyle, and preferences through detailed consultations.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Conceptualization</h3>
            <p>Our team creates mood boards, 3D renderings, and design concepts for your approval.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Planning</h3>
            <p>We finalize specifications, sourcing, and timelines to ensure seamless execution.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Implementation</h3>
            <p>Our team oversees the entire installation process, ensuring quality and attention to detail.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section cta-video animate-on-scroll">
        <video
          className="cta-bg-video"
          src={video01}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="cta-content">
          <h2>Let's Start Your Project</h2>
          <p>Schedule a consultation to discuss your design needs</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Book Now</a>
        </div>
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
