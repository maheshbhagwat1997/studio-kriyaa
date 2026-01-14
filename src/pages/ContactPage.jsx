import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AnimatedCat from "../components/AnimatedCat";
import logo from "../assets/Union.png";
import contactImage from "../assets/contactus.jpg";
import "../HomePage.css";
import "../styles/Pages.css";

// Initialize EmailJS with your Public Key
emailjs.init("VnM6YXmL3J3AjXxmP");

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all required fields");
      setTimeout(() => setSubmitMessage(""), 3000);
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS to studio email
      const result = await emailjs.send(
        "service_qlm98yj",  // Service ID
        "template_kf6vxnk", // Template ID
        {
          to_email: "contact.studiokriyaa@gmail.com",  // Studio email (set in EmailJS template "To Email" field)
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          project_type: formData.projectType || "Not specified",
          message: formData.message,
          reply_to: formData.email
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon!");
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage("Failed to send message. Please try again later or email us directly.");
      setTimeout(() => setSubmitMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

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
          <Link to="/contact" className="nav-link active">Contact</Link>
        </nav>
      </header>

      {/* CONTACT HEADER */}
      <section className="page-hero animate-on-scroll" style={{ backgroundImage: `url(${contactImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1>Get In Touch</h1>
        <p>We'd Love to Hear From You</p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section animate-on-scroll">
        <div className="contact-container">
          {/* CONTACT INFO */}
          <div className="contact-info">
            <h2>Connect With Us</h2>
            <p>Have a question or ready to start your design journey? Reach out to us through any of the channels below.</p>

            <div className="info-block">
              <h3>📍 Address</h3>
              <p>Studio Kriyaa<br/>Pune | Nashik | Ahilyanagar | Goa</p>
            </div>

            <div className="info-block">
              <h3>📞 Phone</h3>
              <p><a href="tel:+919552653064">(+91) 9552653064</a></p>
            </div>

            <div className="info-block">
              <h3>📧 Email</h3>
              <p><a href="mailto:contact.studiokriyaa@gmail.com">contact.studiokriyaa@gmail.com</a></p>
            </div>

            <div className="info-block">
              <h3>🕐 Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/studio.kriyaa_?igsh=MWs4Y2lyNTdzcjdxeg==" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Studio Kriyaa Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8zm4.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578325552417" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Studio Kriyaa Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.4c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.07c-1.05 0-1.38.66-1.38 1.34v1.6h2.35l-.38 2.9h-1.97v7A10 10 0 0 0 22 12z"/></svg>
                Facebook
              </a>
              <a href="https://www.linkedin.com/company/studiokriya/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Studio Kriyaa LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69H9.38V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.35 4.22 5.4v6.81zM5.34 7.43a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12zM6.89 20.45H3.8V9h3.09v11.45z"/></svg>
                LinkedIn
              </a>
              <a href="https://www.behance.net/mhshbhgwt" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Studio Kriyaa Behance">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 11.5c0 1.67 1.34 3 3 3s3-1.33 3-3-1.34-3-3-3-3 1.33-3 3zm10.5 0c0 .83-.67 1.5-1.5 1.5H14v-3h2c.83 0 1.5.67 1.5 1.5zM5 8h3v8H5zM19 8h-4v2h3v1.5h-3V18h-2V8h-4v10h2v-3h2.5c1.93 0 3.5-1.57 3.5-3.5S16.93 8 15 8H19z"/></svg>
                Behance
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <p className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
            <div className="email-connect">
              <p>Or email us directly at:</p>
              <a href="mailto:contact.studiokriyaa@gmail.com" className="email-link">contact.studiokriyaa@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll">
        <h2>Or Fill Our Design Consultation Form</h2>
        <p>Get detailed information about your project requirements</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfysuWTNmRABGUmHBBm7ut53rIxH7oLA5FoKl5xrRCNzjncgw/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn">Open Form</a>
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
