import "./HomePage.css";
import { Link } from "react-router-dom";
import AnimatedCat from "./components/AnimatedCat";
import hero from "./assets/hero.jpg";
import explore from "./assets/explore.jpg";
import content1 from "./assets/content1.jpg";
import content2 from "./assets/content2.jpg";
import content3 from "./assets/content3.jpg";
import kids2 from "./assets/kids2.jpg";
import promo from "./assets/promo.jpg";
import logo from "./assets/Union.png";

export default function HomePage() {
  return (
    <div className="home-page">

      {/* ANIMATED CAT */}
      <AnimatedCat />
      <header className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-link" aria-label="Studio Kriyaa Home">
            <img src={logo} alt="Studio Kriyaa Logo" className="logo-icon" />
            <div className="logo">Studio Kriyaa</div>
          </Link>
        </div>
        <nav>
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      {/* HERO HEADER */}
      <section
        className="hero-header animate-on-scroll"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1>Discover the Elegance of Studio Kriyaa’s Luxurious Interiors</h1>
        <p>
          Step into a world where every detail matters, where every corner is
          curated to create an unforgettable living experience.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Explore More</a>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section animate-on-scroll">
        <div className="process-card">
          <div className="process-icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#c9905a" strokeWidth="2"/>
              <path d="M 32 12 L 32 32 L 44 32" stroke="#c9905a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="32" cy="32" r="3" fill="#c9905a"/>
            </svg>
          </div>
          <h3>Start Project</h3>
          <p>
            Start your design journey—share your vision and let’s create
            something remarkable.
          </p>
        </div>

        <div className="process-card">
          <div className="process-icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 44 L 28 20 L 36 44 L 44 20" stroke="#c9905a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="28" cy="20" r="3" fill="#c9905a"/>
              <circle cx="36" cy="44" r="3" fill="#c9905a"/>
              <circle cx="44" cy="20" r="3" fill="#c9905a"/>
            </svg>
          </div>
          <h3>Craft</h3>
          <p>
            Collaborate to refine your vision and craft brilliance into every
            detail.
          </p>
        </div>

        <div className="process-card">
          <div className="process-icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M 16 48 L 48 48" stroke="#c9905a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 24 40 L 24 48" stroke="#c9905a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 32 30 L 32 48" stroke="#c9905a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 40 20 L 40 48" stroke="#c9905a" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="24" cy="36" r="2" fill="#c9905a"/>
              <circle cx="32" cy="26" r="2" fill="#c9905a"/>
              <circle cx="40" cy="16" r="2" fill="#c9905a"/>
            </svg>
          </div>
          <h3>Execute</h3>
          <p>
            Watch your vision come to life as we execute with precision—
            celebrate your beautifully transformed space.
          </p>
        </div>
      </section>

      {/* EXPLORE BANNER */}
      <section
        className="explore-banner animate-on-scroll"
        style={{ backgroundImage: `url(${explore})` }}
      >
        <h2>Explore our work</h2>
      </section>

      {/* CONTENT BLOCK 1 */}
      <section className="content-section animate-on-scroll">
        <img src={content1} alt="Living Area" className="content-image" />

        <div className="content-text">
          <h2>Crafting Timeless Elegance</h2>
          <p>
            At Studio Kriyaa, we believe that a space is not just a collection
            of furniture, but a canvas that reflects the unique essence of its
            inhabitants.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="outline-btn">Explore now</a>
        </div>
      </section>

      {/* CONTENT BLOCK 2 */}
      <section className="content-section reverse animate-on-scroll">
        <div className="content-text">
          <h2>Elevating Everyday Living</h2>
          <p>
            Step into a world where every moment is enhanced by the thoughtful
            design of your surroundings—crafted to inspire and delight.
          </p>
          <Link to="/project-story" className="outline-btn">Discover More</Link>
        </div>

        <img src={content2} alt="Room Design" className="content-image" />
      </section>

      {/* CONTENT BLOCK 3 */}
      <section className="content-section animate-on-scroll">
        <img src={content3} alt="Kids Room" className="content-image" />

        <div className="content-text">
          <h2>"A Space to Grow, Imagine, and Play."</h2>
          <p>
            A cozy, creative haven where imagination meets thoughtful design—
            crafted to nurture growth and comfort in every corner of your
            child’s world.
          </p>
          <Link to="/project-story" className="outline-btn">Discover More</Link>
        </div>
      </section>

      {/* KIDS BEDROOM 2 SECTION */}
      <section className="content-section animate-on-scroll">
        <img
          src={kids2}
          alt="Kids Bedroom 2"
          className="content-image"
          style={{ objectFit: "cover" }}
        />
        <div className="content-text">
          <h2>Where Comfort Meets Creativity.</h2>
          <p>
            A thoughtfully designed space where imagination blossoms — blending colors, comfort, and functionality to create the perfect environment for growing minds.
          </p>
          <Link to="/project-story" className="outline-btn">
            Discover More
          </Link>
        </div>
      </section>

      {/* PROMO SECTION */}
      <section
        className="promo-section animate-on-scroll"
        style={{ backgroundImage: `url(${promo})` }}
      >
        <h2>"Transform Your Space — Get a Free Design Estimate Now."</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Get in Touch</a>
      </section>

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
