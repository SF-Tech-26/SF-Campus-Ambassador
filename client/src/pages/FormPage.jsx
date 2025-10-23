import React, { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import GlassCard from "../components/GlassCard";

const FormPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <GlassCard>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input required placeholder="Name" className="bg-transparent border-b p-2 text-sm sm:text-base focus:outline-none"/>
            <input required placeholder="Email" type="email" className="bg-transparent border-b p-2 text-sm sm:text-base"/>
            <input required placeholder="Mobile" className="bg-transparent border-b p-2 text-sm sm:text-base"/>
            <input required placeholder="College" className="bg-transparent border-b p-2 text-sm sm:text-base"/>
            <input placeholder="Student ID (optional)" className="bg-transparent border-b p-2 text-sm sm:text-base"/>
            <button type="submit" className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 rounded font-bold mt-3 hover:opacity-80 transition text-sm sm:text-base">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default FormPage;
