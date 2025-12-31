// components/SignUpForm.jsx
import { useState, useContext } from "react";
import { registerCA } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import festBg from "../assets/FB_IMG_1675170342527.jpg";
import { toast } from "react-toastify";

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔄 Loading toast
    const toastId = toast.loading("Creating your account...");

    try {
      const response = await registerCA(form);

      // Normalize response
      const payload = response?.data ?? response;

      const token =
        payload?.token ||
        payload?.accessToken ||
        payload?.data?.token ||
        null;

      // if (!token) throw new Error("No token received from server");
      if (!token) {
        const backendMsg =
          payload?.message ||
          payload?.error ||
          payload?.data?.message ||
          "Registration failed";

        throw new Error(backendMsg);
      }

      // Auto-login after signup
      login(token, payload?.user ?? payload ?? {});

      // ✅ Success toast
      toast.update(toastId, {
        render: "Registration successful 🎉",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      // ➡️ Navigate after toast
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (err) {
      console.error("Signup error:", err);

      const serverMessage =
        err?.response?.data?.message ||
        err?.response?.data ||
        err?.message ||
        "Error registering";

      toast.update(toastId, {
        render: serverMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background */}
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
          backgroundPosition: "center",
          transform: "scale(1.05)",
          filter: "contrast(0.95) saturate(0.95)",
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
        className="relative z-10 w-full max-w-lg p-8 rounded-3xl bg-white/6 backdrop-blur-md border border-white/8 shadow-2xl text-white"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Sign Up
        </h2>

        {/* Form Fields */}
        <div className="flex flex-col">
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
              required={
                !["addr", "security_question", "security_answer"].includes(key)
              }
              className="w-full mb-3 p-3 rounded-xl bg-white/6 placeholder-white/60 border border-white/6 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/25 outline-none transition-all duration-200 text-sm"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 font-semibold tracking-wide hover:scale-[1.02] transition disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-indigo-400 hover:text-pink-400 font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
