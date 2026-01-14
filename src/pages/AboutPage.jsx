import { Link } from "react-router-dom";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import aboutImage from "../assets/about.jpg";
import "../HomePage.css";
import "../styles/Pages.css";

export default function AboutPage() {
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
          <Link to="/about" className="nav-link active">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* ABOUT HEADER */}
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${aboutImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1>About Studio Kriyaa</h1>
        <p>Crafting Luxurious Spaces That Tell Your Story</p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content animate-on-scroll">
        <div className="content-block">
          <h2>Our Story</h2>
          <p>
            The name "Kriyaa" comes from the Sanskrit word क्रिया, symbolizing action, creation, and the disciplined practice of making. For us, it reflects our core belief that great design emerges from a continuous cycle of curiosity, exploration, and execution.
          </p>
          <p>
            Studio Kriyaa was born from a passion to redefine how spaces can influence human experience. With a multidisciplinary approach spanning architecture, interiors, landscape, and custom furniture, we strive to unite design thinking with craftsmanship.
            Every project begins with listening—understanding how people live, work, and feel—followed by a tailored design journey that transforms ideas into built reality.
          </p>
          <p>
            At Studio Kriyaa, our story is written in every detail we create, every space we shape, and every client relationship we nurture.
            This is our "kriyaa"—our craft, our purpose, and our promise.
          </p>
        </div>

        <div className="content-block">
          <h2>Our Philosophy</h2>
          <p>
            Every space has a story, and every client has a unique vision. We work closely with our clients to understand their needs, preferences, and lifestyle to create designs that are truly personal and meaningful.
          </p>
          <p>
            We believe in:
          </p>
          <ul className="philosophy-list">
            <li><strong>Authenticity:</strong> Designs that reflect your personality and values</li>
            <li><strong>Quality:</strong> Attention to detail in every element</li>
            <li><strong>Sustainability:</strong> Responsible design choices for the environment</li>
            <li><strong>Innovation:</strong> Blending timeless elegance with modern trends</li>
            <li><strong>Excellence:</strong> Delivering beyond expectations on every project</li>
          </ul>
        </div>

        <div className="content-block">
          <h2>Why Choose Studio Kriyaa?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Expert Team</h3>
              <p>Our designers bring years of experience and a keen eye for detail to every project.</p>
            </div>
            <div className="feature-card">
              <h3>Custom Solutions</h3>
              <p>We create bespoke designs tailored specifically to your needs and preferences.</p>
            </div>
            <div className="feature-card">
              <h3>Quality Materials</h3>
              <p>We source only the finest materials and furnishings for your space.</p>
            </div>
            <div className="feature-card">
              <h3>Timely Delivery</h3>
              <p>We respect your time and ensure projects are completed on schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll">
        <h2>Ready to Transform Your Space?</h2>
        <p>Let's create something beautiful together</p>
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
      <Link to="/furniture">Furniture</Link>
      <Link to="/decor">Decor</Link>
      <Link to="/lighting">Lighting</Link>
      <Link to="/textiles">Textiles</Link>
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
