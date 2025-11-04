// components/SignInForm.jsx
import { useState, useContext } from "react";
import { loginCA } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignInForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await loginCA(form);
      console.log("Login API response:", response);

      // Normalize payload: `loginCA` returns `res.data`, but some APIs nest data
      const payload = response && response.data ? response.data : response;

      // token can be named token or accessToken, or nested
      const token = payload?.token ?? payload?.accessToken ?? payload?.data?.token ?? null;
      const user = payload?.user ?? payload?.data ?? {};

      if (!token) throw new Error("No token received from server");

      // Call context login with normalized args
      login(token, user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      // axios errors often have a response with a message
      const serverMessage = err?.response?.data?.message || err?.response?.data || null;
      setError(serverMessage || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#030313] via-[#0b0f1a] to-[#0b0712] p-6">
  <form
    onSubmit={handleSubmit}
    className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-[#07101a]/85 border border-[#1f2937]/40 shadow-[0_10px_40px_rgba(2,6,23,0.7)] text-white overflow-hidden"
  >
    {/* soft vignette and subtle top glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-0 top-0 w-2/3 h-2/3 bg-gradient-to-tr from-[#0f1724]/20 to-transparent blur-3xl" />
      <div className="absolute right-6 top-6 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600/20 to-transparent blur-xl" />
    </div>

    {/* left accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 opacity-60" />

    <div className="relative z-20">
      <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">Sign In</h2>

      {error && (
        <p className="text-red-300 bg-red-900/30 px-3 py-2 rounded-md text-sm mb-4 text-center">
          {error}
        </p>
      )}

      {["email", "password"].map((key) => (
        <div key={key} className="mb-4">
          <input
            type={key === "password" ? "password" : "text"}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#0b1624]/60 placeholder-white/60 border border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200 text-sm"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 font-semibold tracking-wide hover:scale-[1.02] transform transition-all duration-200 shadow-[0_8px_30px_rgba(99,102,241,0.12)] disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      {/* <div className="mt-5 flex items-center justify-between text-xs text-white/60">
        <span>Fest Pass?</span>
        <span className="underline cursor-pointer">Help</span>
      </div> */}

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/50">
        <span className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full opacity-60" />
        <span>Welcome to Spring Fest</span>
        <span className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full opacity-60" />
      </div>
    </div>
  </form>

  {/* subtle floating particles (decorative only) */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div className="absolute left-10 top-28 w-0.5 h-2 bg-indigo-500/30 rounded animate-[pulse_2.5s_infinite]" />
    <div className="absolute right-16 top-16 w-1 h-3 bg-pink-400/20 rounded animate-[pulse_3s_infinite_0.6s]" />
  </div>

  <style>{`
    @keyframes pulse {
      0% { opacity: 0.25; transform: translateY(0); }
      50% { opacity: 1; transform: translateY(-6px); }
      100% { opacity: 0.25; transform: translateY(0); }
    }
    .animate-[pulse_2.5s_infinite] { animation: pulse 2.5s infinite; }
    .animate-[pulse_3s_infinite_0.6s] { animation: pulse 3s infinite 0.6s; }
  `}</style>
</div>


  );
};

export default SignInForm;
