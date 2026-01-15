import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./FloatingActions.css";

export default function FloatingActions() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Ensure EmailJS is initialized when this component mounts
    try {
      emailjs.init("E1tpEq4mWicb6Gp5A");
    } catch {}
  }, []);

  const whatsappNumber = "+919552653064";
  const whatsappHref = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
    "Hi Studio Kriyaa, I'd like a free estimate."
  )}`;
  const mailHref = `mailto:contact.studiokriyaa@gmail.com?subject=${encodeURIComponent(
    "Studio Kriyaa Inquiry"
  )}&body=${encodeURIComponent("Hi Studio Kriyaa,")}`;

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setStatus("");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.contact) {
      setStatus("Please fill name, email, and contact number.");
      return;
    }
    setIsSending(true);
    setStatus("");
    try {
      const payload = {
        from_name: form.name,
        from_email: form.email,
        phone: form.contact,
        project_type: "Free Estimate",
        message: `Location: ${form.location}\nContact: ${form.contact}`,
      };

      await emailjs.send("service_i1fp524", "template_wxfqw7e", payload);
      setStatus("Thank you! Your estimate request has been sent.");
      setForm({ name: "", contact: "", email: "", location: "" });
    } catch (err) {
      console.error("EmailJS error (estimate):", err);
      setStatus("Failed to send. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="floating-actions">
        <a className="fab fab-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M12 2a10 10 0 0 0-8.9 14.8L2 22l5.4-1.1A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-1-.3-1.7-.6a10 10 0 0 1-3.6-3.1c-.5-.6-1-1.3-1.3-2-.3-.7-.3-1.2-.2-1.6.1-.5.6-1.4 1.2-1.6.3-.1.6-.1.8 0h.6c.2 0 .4.3.5.5l.7 1.6c.1.3.1.5 0 .7l-.3.5c-.1.2-.2.3-.1.5.1.3.5.8 1.1 1.3.6.5 1.3.9 1.6 1 .2.1.4.1.6 0l.6-.4c.2-.1.4-.1.6 0l1.8.8c.3.1.5.3.6.5.1.2.1.5 0 .8z"/>
          </svg>
        </a>
        <a className="fab fab-mail" href={mailHref} aria-label="Send Mail" title="Send Mail">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.2l9 5.4 9-5.4V7H3zm18 10V9.3l-9 5.4-9-5.4V17h18z"/>
          </svg>
        </a>
      </div>

      <button className="free-estimate-btn" onClick={openModal} aria-haspopup="dialog" aria-controls="estimate-modal">
        Free Estimate
      </button>

      {showModal && (
        <div id="estimate-modal" className="estimate-modal" role="dialog" aria-modal="true">
          <div className="estimate-card">
            <div className="estimate-header">
              <h3>Get Free Estimate</h3>
              <button className="close-x" onClick={closeModal} aria-label="Close">×</button>
            </div>

            <form className="estimate-form" onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={onChange} required />
              </label>

              <label>
                Contact Number
                <input name="contact" value={form.contact} onChange={onChange} required />
              </label>

              <label>
                Email Address
                <input type="email" name="email" value={form.email} onChange={onChange} required />
              </label>

              <label>
                Project Location
                <input name="location" value={form.location} onChange={onChange} />
              </label>

              <button type="submit" className="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Submit"}
              </button>
              {status && <p className={`status ${status.startsWith("Thank") ? "ok" : "err"}`}>{status}</p>}
            </form>
          </div>
          <div className="backdrop" onClick={closeModal} aria-hidden="true" />
        </div>
      )}
    </>
  );
}
