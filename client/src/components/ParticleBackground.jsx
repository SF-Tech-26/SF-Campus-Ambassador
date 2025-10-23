import React, { useEffect } from "react";

const ParticleBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".particles");
    for (let i = 0; i < 25; i++) {
      const el = document.createElement("div");
      el.className = "particle";
      el.style.width = `${Math.random() * 6 + 4}px`;
      el.style.height = el.style.width;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.background = ["#00ffff", "#ff00ff", "#00ff99", "#ffd700"][
        Math.floor(Math.random() * 4)
      ];
      el.style.animationDuration = `${4 + Math.random() * 6}s`;
      container.appendChild(el);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-stage.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b0047]/70 via-[#001a3d]/60 to-[#004d66]/70 mix-blend-overlay"></div>
      <div className="particles absolute inset-0 overflow-hidden"></div>
    </div>
  );
};

export default ParticleBackground;
