import { GlassSVGDefs } from "../utils/svgDefs";

export function LiquidGlassProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <GlassSVGDefs />
    </>
  );
}
