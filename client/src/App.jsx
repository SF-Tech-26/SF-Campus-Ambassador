import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      {/* <nav className="absolute top-0 w-full flex justify-between p-4 text-white z-20 font-semibold">
        <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
        <Link to="/form" className="hover:text-purple-400 transition">Form</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>

    </Router>
  );
}
