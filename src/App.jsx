import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ScrollToTop from "./ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProjectStoryPage from "./pages/ProjectStoryPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop behavior="smooth" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project-story" element={<ProjectStoryPage />} />
      </Routes>
    </Router>
  );
}

