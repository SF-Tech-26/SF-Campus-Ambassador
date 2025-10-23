import React from "react";

const GlassCard = ({ children }) => {
  return (
    <div className="glass p-4 sm:p-6 rounded-xl hover:scale-105 transition-transform duration-300">
      {children}
    </div>
  );
};

export default GlassCard;
