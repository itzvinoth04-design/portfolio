import React from "react";

const keyframes = `
@keyframes grid-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
`;

const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <style>{keyframes}</style>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          animation: "grid-pulse 8s ease-in-out infinite",
          willChange: "opacity",
        }}
      />
    </div>
  );
};

export default GridOverlay;
