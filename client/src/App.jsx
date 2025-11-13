<<<<<<< HEAD
// App.jsx
=======
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import FAQ from "./pages/FAQ";
<<<<<<< HEAD
// import Testimonials from './components/testimonials2'
=======
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8

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
<<<<<<< HEAD


=======
import Responsibility from "./pages/Responsibility";
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8

export default function App() {
  return (
    <AuthProvider>
      <Router>
<<<<<<< HEAD

=======
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8
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
<<<<<<< HEAD
=======
          <Route path="/responsibility" element={<Responsibility />} />
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
