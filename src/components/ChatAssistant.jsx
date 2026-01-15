import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatAssistant.css";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showQuestions, setShowQuestions] = useState(true);
  const navigate = useNavigate();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Initial greeting
      setMessages([
        { type: "bot", text: "Hi! I'm your assistant Whiskey 🐱 How can I help you today?" },
      ]);
    }
  };

  const handleQuestion = (question, answer, route) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
      { type: "bot", text: answer },
    ]);
    setShowQuestions(false);
    
    // Navigate if route provided
    if (route) {
      setTimeout(() => {
        setIsOpen(false);
        navigate(route);
      }, 1500);
    }
  };

  const resetChat = () => {
    setMessages([
      { type: "bot", text: "Hi! I'm your assistant Whiskey 🐱 How can I help you today?" },
    ]);
    setShowQuestions(true);
  };

  const questions = [
    {
      q: "What services do you offer?",
      a: "We offer Interior Design, Space Planning, Furniture Selection, Lighting Design, Decor & Textiles. Let me take you to our Services page!",
      route: "/services",
    },
    {
      q: "How can I contact you?",
      a: "You can reach us at contact.studiokriyaa@gmail.com or call +91 9552653064. I'll take you to our Contact page!",
      route: "/contact",
    },
    {
      q: "Where are you located?",
      a: "Studio Kriyaa serves Pune, Nashik, Ahilyanagar, and Goa. We're ready to transform your space!",
      route: null,
    },
    {
      q: "What's your design process?",
      a: "Our process has 3 steps: Start Project (share your vision) → Craft (refine details) → Execute (bring it to life). Check our About page for more!",
      route: "/about",
    },
    {
      q: "How do I get started?",
      a: "Click the 'Free Estimate' button at the bottom right to fill out a quick form, or contact us directly. Let's create something beautiful!",
      route: null,
    },
  ];

  return (
    <>
      {/* Floating Cat Icon */}
      <button
        className={`chat-cat-btn ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label="Chat with Whiskey"
      >
        🐱
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-cat-icon">🐱</span>
              <span>Whiskey - Your Assistant</span>
            </div>
            <button className="chat-close" onClick={toggleChat} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {showQuestions && (
            <div className="chat-questions">
              <p className="chat-prompt">Choose a question:</p>
              {questions.map((item, idx) => (
                <button
                  key={idx}
                  className="chat-question-btn"
                  onClick={() => handleQuestion(item.q, item.a, item.route)}
                >
                  {item.q}
                </button>
              ))}
            </div>
          )}

          {!showQuestions && (
            <div className="chat-footer">
              <button className="chat-reset-btn" onClick={resetChat}>
                Ask Another Question
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
