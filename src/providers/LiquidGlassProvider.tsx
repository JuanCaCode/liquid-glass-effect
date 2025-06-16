import { useEffect } from "react";
import { GlassSVGDefs } from "../utils/svgDefs.tsx";

const copyInheritedStyles = (
  source: HTMLElement,
  target: HTMLElement,
  properties: string[]
) => {
  const computed = window.getComputedStyle(source);
  properties.forEach((prop) => {
    target.style.setProperty(prop, computed.getPropertyValue(prop));
  });
};

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

        const wrapper = document.createElement("div");
        wrapper.className = "glass__container";

        const effect = document.createElement("div");
        effect.className = "glass__effect";

        const color = document.createElement("div");
        color.className = "glass__color";

        const shine = document.createElement("div");
        shine.className = "glass__shine";

        copyInheritedStyles(el as HTMLElement, wrapper, [
          "border-radius",
          "overflow",
          "backdrop-filter",
          "box-shadow",
          "border",
        ]);

        [effect, color, shine].forEach((layer) => {
          copyInheritedStyles(el as HTMLElement, layer, [
            "border-radius",
            "overflow",
            "margin",
            "margin-top",
            "margin-bottom",
            "margin-left",
            "margin-right",
          ]);
        });

        el.classList.add("liquid-glass-initialized");
        el.parentNode?.insertBefore(wrapper, el);
        wrapper.appendChild(effect);
        wrapper.appendChild(color);
        wrapper.appendChild(shine);
        wrapper.appendChild(el);
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
