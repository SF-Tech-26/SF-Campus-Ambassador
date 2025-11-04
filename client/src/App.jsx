// App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Testimonials from './components/testimonials2'

import Dashboard from "./pages/Dashboard";
import FormPage from "./pages/FormPage";
import ViewProfile from "./pages/ViewProfile";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  

  return (
    <nav className="absolute top-0 w-full flex justify-between p-4 text-white z-20 font-semibold">
      <Link to="/" className="hover:text-cyan-400 transition">
        Home
      </Link>

      {token ? (
        <button
          onClick={() => {
            logout();
            navigate("/signin");
          }}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/signin"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        >
          Sign In
        </Link>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/form"
            element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            }
          />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
