import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import App from "./App";
import { LiquidGlassProvider } from "./providers/LiquidGlassProvider";
import "./styles/main.css";
import "./styles/main_liquid_glass.css";
import "./styles/custom_liquid_glass.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LiquidGlassProvider>
      <App />
    </LiquidGlassProvider>
  </StrictMode>
);
