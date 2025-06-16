import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/main_liquid_glass.css";

import App from "./App.tsx";
import { LiquidGlassProvider } from "./providers/LiquidGlassProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LiquidGlassProvider>
      <App />
    </LiquidGlassProvider>
  </StrictMode>
);
