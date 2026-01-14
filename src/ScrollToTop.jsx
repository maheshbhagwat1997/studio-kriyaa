import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initEntranceAnimations } from "./utils/entrance";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately scroll to top on route change
    if (typeof window !== "undefined") {
      // Force instant scroll to top - multiple methods for mobile compatibility
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Use setTimeout to ensure scroll happens after render on mobile
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
      
      // Reinitialize entrance animations after a short delay
      requestAnimationFrame(() => {
        initEntranceAnimations();
      });
    }
  }, [pathname, behavior]);

  return null;
}
