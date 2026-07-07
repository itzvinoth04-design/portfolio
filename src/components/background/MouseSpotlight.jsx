import React from "react";

const SPOTLIGHT_SIZE = 600;

const MouseSpotlight = ({ mousePosition = { x: 0, y: 0 } }) => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          width: `${SPOTLIGHT_SIZE}px`,
          height: `${SPOTLIGHT_SIZE}px`,
          left: mousePosition.x - SPOTLIGHT_SIZE / 2,
          top: mousePosition.y - SPOTLIGHT_SIZE / 2,
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, rgba(34, 211, 238, 0.02) 35%, transparent 70%)",
          borderRadius: "50%",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
          willChange: "left, top",
        }}
      />
    </div>
  );
};

export default MouseSpotlight;
