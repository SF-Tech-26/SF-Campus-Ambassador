// App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import FAQ from "./pages/FAQ";
// import Testimonials from './components/testimonials2'

import Dashboard from "./pages/Dashboard";
import FormPage from "./pages/FormPage";
import ViewProfile from "./pages/ViewProfile";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Testimonials from './components/testimonials';
import AboutPage from "./pages/AboutUs";
import { LandingPage } from "./pages/LandingPage";



export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
