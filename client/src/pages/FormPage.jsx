// pages/FormPage.jsx
import React, { useState, useContext } from "react";
import ParticleBackground from "../components/ParticleBackground";
import GlassCard from "../components/GlassCard";
import { AuthContext } from "../context/AuthContext";
import { submitUserData } from "../api/data";

const FormPage = () => {
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    sf_id_if_registered: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login first!");
      return;
    }

    setLoading(true);
    try {
      const response = await submitUserData(token, formData);
      console.log("Response:", response);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        college: "",
        sf_id_if_registered: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <GlassCard>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="bg-transparent border-b p-2 text-sm sm:text-base focus:outline-none"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="bg-transparent border-b p-2 text-sm sm:text-base"
            />
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Mobile"
              className="bg-transparent border-b p-2 text-sm sm:text-base"
            />
            <input
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              placeholder="College"
              className="bg-transparent border-b p-2 text-sm sm:text-base"
            />
            <input
              name="sf_id_if_registered"
              value={formData.sf_id_if_registered}
              onChange={handleChange}
              placeholder="Student ID (optional)"
              className="bg-transparent border-b p-2 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 rounded font-bold mt-3 hover:opacity-80 transition text-sm sm:text-base"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default FormPage;
