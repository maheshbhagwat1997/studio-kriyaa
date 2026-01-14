import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initEntranceAnimations } from "./utils/entrance";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change (using tiny polyfill wrapper if necessary)
    if (typeof window !== "undefined") {
      if (behavior === "smooth" && typeof window.__smoothScroll === "function") {
        // use the polyfilled/wrapper method (returns a Promise)
        window.__smoothScroll(0, 0, { duration: 600 }).then(() => {
          // re-run entrance animations in case new sections came into view
          initEntranceAnimations();
        });
      } else {
        try {
          window.scrollTo({ top: 0, left: 0, behavior });
        } catch {
          window.scrollTo(0, 0);
        }
        initEntranceAnimations();
      }
    }
  }, [pathname, behavior]);

  return null;
}
