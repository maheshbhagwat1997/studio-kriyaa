import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ScrollToTop from "./ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProjectStoryPage from "./pages/ProjectStoryPage";
import FurniturePage from "./pages/FurniturePage";
import DecorPage from "./pages/DecorPage";
import LightingPage from "./pages/LightingPage";
import TextilesPage from "./pages/TextilesPage";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <Router>
      <ScrollToTop behavior="smooth" />
      {/* Global floating contact actions */}
      <FloatingActions />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project-story" element={<ProjectStoryPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/decor" element={<DecorPage />} />
        <Route path="/lighting" element={<LightingPage />} />
        <Route path="/textiles" element={<TextilesPage />} />
      </Routes>
    </Router>
  );
}

