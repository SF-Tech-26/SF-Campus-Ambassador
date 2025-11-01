// components/SignUpForm.jsx 
import { useState, useContext } from "react";
import { registerCA } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
  );
};

export default SignUpForm;  