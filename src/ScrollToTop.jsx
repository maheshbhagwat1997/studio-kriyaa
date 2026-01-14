import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initEntranceAnimations } from "./utils/entrance";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately scroll to top on route change
    if (typeof window !== "undefined") {
      // Force instant scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      
      // Reinitialize entrance animations after a short delay
      requestAnimationFrame(() => {
        initEntranceAnimations();
      });
    }
  }, [pathname, behavior]);

  return null;
}
