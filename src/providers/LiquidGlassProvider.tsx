import { useEffect } from "react";
import { GlassSVGDefs } from "../utils/svgDefs";

export function LiquidGlassProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const applyLiquidGlassEffect = () => {
      const elements = document.querySelectorAll(".liquid-glass");

      elements.forEach((el) => {
        // Evitar duplicar si ya tiene el contenedor
        if (el.classList.contains("liquid-glass-initialized")) return;

        el.classList.add("glass__container");

        const effect = document.createElement("div");
        effect.className = "glass__effect";

        const color = document.createElement("div");
        color.className = "glass__color";

        const shine = document.createElement("div");
        shine.className = "glass__shine";

        el.classList.add("liquid-glass-initialized");
        el.appendChild(effect);
        el.appendChild(color);
        el.appendChild(shine);
      });
    };

    applyLiquidGlassEffect();

    // Observar nuevos nodos insertados dinámicamente
    const observer = new MutationObserver(applyLiquidGlassEffect);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlassSVGDefs />
      {children}
    </>
  );
}
