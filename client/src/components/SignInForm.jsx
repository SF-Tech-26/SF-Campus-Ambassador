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
  );
};

export default SignInForm;
