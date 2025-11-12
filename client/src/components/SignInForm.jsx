// components/SignInForm.jsx
import { useState, useContext } from "react";
import { loginCA } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
<<<<<<< HEAD
import festBg from "../assets/FB_IMG_1675170342527.jpg";

=======
>>>>>>> 46952e0 (puskar)

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
<<<<<<< HEAD
<div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
  {/* full-bleed background image with subtle color overlay */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      zIndex: -30,
      backgroundImage: `linear-gradient(rgba(6,8,15,0.35), rgba(6,8,15,0.55)), url(${festBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      transform: "scale(1.06)",
      filter: "contrast(0.95) saturate(0.9)",
    }}
  />

  {/* soft vignette */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      zIndex: -20,
      background:
        "radial-gradient(ellipse at 10% 20%, rgba(99,102,241,0.06), transparent 8%), radial-gradient(ellipse at 90% 80%, rgba(236,72,153,0.04), transparent 10%)",
    }}
  />

  {/* dark overlay */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(2,6,23,0.55)",
      zIndex: -10,
    }}
  />

  <form
    onSubmit={handleSubmit}
    className="relative z-10 w-full max-w-lg p-8 rounded-3xl bg-white/6 backdrop-blur-md border border-white/8 shadow-2xl text-white overflow-hidden"
    aria-label="Sign in form"
  >
    {/* subtle top glow */}
    <div className="absolute -top-10 -left-8 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-400/10 blur-3xl pointer-events-none" />

    {/* header */}
    <div className="relative z-20 text-center mb-6">
      <h2 className="text-3xl font-semibold tracking-tight">Sign In</h2>
    </div>

    {error && (
      <p className="text-red-300 bg-red-900/30 px-4 py-2 rounded-md text-sm mb-4 text-center">
        {error}
      </p>
    )}

    <div className="grid grid-cols-1 gap-4">
      {["email", "password"].map((key) => (
        <label key={key} className="block">
          <span className="text-xs text-white/60 mb-2 capitalize inline-block">
            {key}
          </span>
          <input
            type={key === "password" ? "password" : "text"}
            name={key}
            placeholder={key === "email" ? "you@domain.com" : "••••••••"}
            value={form?.[key] ?? ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/6 placeholder-white/50 border border-white/6 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/25 outline-none transition-all duration-200 text-sm"
          />
        </label>
      ))}
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 mt-6 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 font-semibold tracking-wide hover:scale-[1.02] transform transition-all duration-200 shadow-[0_12px_50px_rgba(99,102,241,0.12)] disabled:opacity-60"
    >
      {loading ? "Signing in..." : "Sign In"}
    </button>

      {/* <div className="flex items-center gap-2">
        <span className="h-1 w-8 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-60" />
        <span>Welcome to Spring Fest</span>
      </div> */}

<div className="mt-6 flex justify-center">
  <p className="text-sm text-white/70">
    New user?{" "}
    <a
      href="/signup"
      className="text-indigo-400 hover:text-pink-400 font-medium hover:underline transition-colors duration-200"
    >
      Sign Up
    </a>
  </p>
</div>
      {/* <a href="#" className="text-white/60 hover:underline text-xs">
        Forgot?
      </a> */}
   

    {/* floating particles */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-8 top-28 w-0.5 h-3 bg-indigo-500/30 rounded" />
      <div className="absolute right-16 top-10 w-1 h-4 bg-pink-400/18 rounded" />
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
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}

        {["email", "password"].map((key) => (
          <input
            key={key}
            type={key === "password" ? "password" : "text"}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded bg-white/30 placeholder-white"
            required
          />
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-2 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
>>>>>>> 46952e0 (puskar)
  );
};

export default SignInForm;
