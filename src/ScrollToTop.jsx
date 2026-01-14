import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initEntranceAnimations } from "./utils/entrance";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately scroll to top on route change
    if (typeof window !== "undefined") {
      // Use instant scroll for immediate feedback
      window.scrollTo(0, 0);
      
      // Then apply smooth behavior if specified
      setTimeout(() => {
        if (behavior === "smooth" && typeof window.__smoothScroll === "function") {
          window.__smoothScroll(0, 0, { duration: 600 }).then(() => {
            initEntranceAnimations();
          });
        } else {
          initEntranceAnimations();
        }
      }, 0);
    }
  }, [pathname, behavior]);

  return null;
}
