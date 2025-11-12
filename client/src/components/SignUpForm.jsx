// components/SignUpForm.jsx 
import { useState, useContext } from "react";
import { registerCA } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
<<<<<<< HEAD
import festBg from "../assets/FB_IMG_1675170342527.jpg";
=======
>>>>>>> 46952e0 (puskar)

const SignUpForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "M",
    por: "College Admin",
    dob: "",
    mobile: "",
    yop: "",
    college: "",
    addr: "",
    city: "",
    state: "",
    security_question: "",
    security_answer: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerCA(form);

      // extract token
      const token =
        response?.token ||
        response?.data?.token ||
        response?.accessToken ||
        null;
      console.log("token error");
      if (!token) throw new Error("No token received from server");

      // Login immediately after registration
      login(token, response.user || response.data || {});
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.message || err.message || "Error registering");
    }
  };

  return (
<<<<<<< HEAD
<div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
  {/* Full background image (same as Sign In) with safe fallback */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      zIndex: -30,
      backgroundImage: festBg
        ? `linear-gradient(rgba(6,8,15,0.35), rgba(6,8,15,0.55)), url(${festBg})`
        : "linear-gradient(135deg, rgba(59,20,120,0.9) 0%, rgba(37,99,235,0.9) 100%)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      transform: "scale(1.05)",
      filter: "contrast(0.95) saturate(0.95)",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#061018",
    }}
  />

  {/* Subtle vignette */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      zIndex: -20,
      pointerEvents: "none",
      background:
        "radial-gradient(ellipse at 15% 25%, rgba(99,102,241,0.06), transparent 8%), radial-gradient(ellipse at 85% 75%, rgba(236,72,153,0.04), transparent 12%)",
      mixBlendMode: "screen",
    }}
  />

  {/* Overlay */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(2,6,23,0.45)",
      zIndex: -10,
    }}
  />

  <form
    onSubmit={handleSubmit}
    className="relative z-10 w-full max-w-lg p-8 rounded-3xl bg-white/6 backdrop-blur-md border border-white/8 shadow-2xl text-white overflow-hidden"
    aria-label="Sign up form"
  >
    {/* Decorative top glow */}
    <div className="absolute -top-10 -left-8 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-400/10 blur-3xl pointer-events-none" />

    {/* Heading */}
    <div className="relative z-20 text-center mb-6">
      <h2 className="text-3xl font-semibold tracking-tight">Sign Up</h2>
      {error && (
        <p className="text-red-300 bg-red-900/30 px-4 py-2 rounded-md text-sm mt-4 inline-block">
          {error}
        </p>
      )}
    </div>

    {/* Form fields (logic preserved) */}
    <div className="grid grid-cols-1 gap-4">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type={
            key.includes("password")
              ? "password"
              : key === "dob"
              ? "date"
              : "text"
          }
          name={key}
          placeholder={key.replace(/_/g, " ").toUpperCase()}
          value={form[key]}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-xl bg-white/6 placeholder-white/60 border border-white/6 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/25 outline-none transition-all duration-200 text-sm"
          required={!["addr", "security_question", "security_answer"].includes(
            key
          )}
        />
      ))}
    </div>

    <button
      type="submit"
      className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 font-semibold tracking-wide hover:scale-[1.02] transform transition-all duration-200 shadow-[0_12px_50px_rgba(99,102,241,0.12)] disabled:opacity-60"
    >
      Register
    </button>

    {/* Footer */}
    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/50">
      <span className="h-1 w-8 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-60" />
      <span>Welcome to Spring Fest</span>
      <span className="h-1 w-8 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-60" />
    </div>

    {/* Existing user CTA (centered) */}
    <div className="mt-6 flex justify-center">
      <p className="text-sm text-white/70">
        Already have an account?{" "}
        <a
          href="/signin"
          className="text-indigo-400 hover:text-pink-400 font-medium hover:underline transition-colors duration-200"
        >
          Sign In
        </a>
      </p>
    </div>

    {/* Decorative non-animated particles (right-line removed) */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-8 top-28 w-0.5 h-3 bg-indigo-500/30 rounded" />
      {/* removed right-side pink line */}
      <div className="absolute left-24 bottom-24 w-2 h-2 rounded-full bg-white/6" />
    </div>

    <style>{`
      form { -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
    `}</style>
  </form>
</div>


=======
  <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-700 to-blue-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}

        {/* Form fields */}
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type={
              key.includes("password")
                ? "password"
                : key === "dob"
                ? "date"
                : "text"
            }
            name={key}
            placeholder={key.replace(/_/g, " ").toUpperCase()}
            value={form[key]}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-white/30 placeholder-white"
            required={!["addr", "security_question", "security_answer"].includes(
              key
            )}
          />
        ))}

  <button className="w-full py-2 mt-2 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition-transform">
          Register
        </button>
      </form>
    </div>
>>>>>>> 46952e0 (puskar)
  );
};

export default SignUpForm;  