import React from "react";

const blobs = [
  {
    color: "rgba(34, 211, 238, 0.15)",
    size: "40%",
    top: "10%",
    left: "15%",
    animation: "aurora-drift-1 20s ease-in-out infinite alternate",
    blur: "100px",
  },
  {
    color: "rgba(139, 92, 246, 0.12)",
    size: "45%",
    top: "50%",
    left: "60%",
    animation: "aurora-drift-2 25s ease-in-out infinite alternate",
    blur: "120px",
  },
  {
    color: "rgba(59, 130, 246, 0.13)",
    size: "35%",
    top: "60%",
    left: "10%",
    animation: "aurora-drift-3 18s ease-in-out infinite alternate",
    blur: "90px",
  },
  {
    color: "rgba(34, 211, 238, 0.10)",
    size: "50%",
    top: "5%",
    left: "70%",
    animation: "aurora-drift-4 22s ease-in-out infinite alternate",
    blur: "110px",
  },
  {
    color: "rgba(139, 92, 246, 0.08)",
    size: "38%",
    top: "40%",
    left: "35%",
    animation: "aurora-drift-5 15s ease-in-out infinite alternate",
    blur: "80px",
  },
];

const keyframes = `
@keyframes aurora-drift-1 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  33% { transform: translate(60px, -40px) scale(1.1) rotate(20deg); border-radius: 50% 40% 30% 70% / 60% 30% 50% 40%; }
  66% { transform: translate(-30px, 50px) scale(0.95) rotate(-10deg); border-radius: 30% 60% 50% 40% / 50% 60% 30% 60%; }
  100% { transform: translate(40px, 30px) scale(1.05) rotate(15deg); border-radius: 60% 30% 40% 60% / 40% 50% 60% 30%; }
}

@keyframes aurora-drift-2 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 50% 50% 40% 60% / 60% 40% 50% 50%; }
  33% { transform: translate(-50px, 30px) scale(1.08) rotate(-15deg); border-radius: 40% 60% 50% 40% / 50% 60% 40% 50%; }
  66% { transform: translate(40px, -60px) scale(0.92) rotate(25deg); border-radius: 60% 40% 60% 30% / 30% 50% 60% 40%; }
  100% { transform: translate(-20px, -30px) scale(1.03) rotate(-5deg); border-radius: 35% 55% 45% 55% / 55% 35% 55% 45%; }
}

@keyframes aurora-drift-3 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%; }
  33% { transform: translate(70px, 20px) scale(1.12) rotate(30deg); border-radius: 45% 55% 35% 65% / 65% 35% 55% 45%; }
  66% { transform: translate(-40px, -50px) scale(0.9) rotate(-20deg); border-radius: 55% 45% 65% 35% / 35% 65% 45% 55%; }
  100% { transform: translate(30px, -20px) scale(1.06) rotate(10deg); border-radius: 40% 60% 55% 45% / 45% 55% 60% 40%; }
}

@keyframes aurora-drift-4 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 45% 55% 60% 40% / 55% 45% 50% 50%; }
  33% { transform: translate(-60px, -35px) scale(0.95) rotate(-25deg); border-radius: 55% 45% 40% 60% / 45% 55% 60% 40%; }
  66% { transform: translate(50px, 40px) scale(1.1) rotate(15deg); border-radius: 35% 65% 55% 45% / 60% 40% 45% 55%; }
  100% { transform: translate(-25px, 50px) scale(1.02) rotate(-8deg); border-radius: 50% 50% 45% 55% / 50% 50% 55% 45%; }
}

@keyframes aurora-drift-5 {
  0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 55% 45% 50% 50% / 45% 55% 50% 50%; }
  33% { transform: translate(45px, -55px) scale(1.07) rotate(22deg); border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; }
  66% { transform: translate(-55px, 35px) scale(0.93) rotate(-18deg); border-radius: 65% 35% 50% 50% / 40% 60% 50% 50%; }
  100% { transform: translate(20px, 45px) scale(1.04) rotate(12deg); border-radius: 50% 50% 60% 40% / 60% 40% 40% 60%; }
}
`;

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>{keyframes}</style>
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: blob.top,
            left: blob.left,
            width: blob.size,
            aspectRatio: "1",
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: `blur(${blob.blur})`,
            animation: blob.animation,
            willChange: "transform, border-radius",
          }}
        />
      ))}
    </div>
  );
};

export default AuroraBackground;
