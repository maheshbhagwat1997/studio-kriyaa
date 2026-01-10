import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { polyfillSmoothScroll } from "./utils/animate";
import { initEntranceAnimations } from "./utils/entrance";

// Apply a small smooth-scroll polyfill (or wrapper) and initialize entrance animations
polyfillSmoothScroll();
initEntranceAnimations();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
