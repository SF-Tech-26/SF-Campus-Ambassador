import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FormPage from "./pages/FormPage";
import ViewProfile from "./pages/ViewProfile";


export default function App() {
  return (
    <Router>
      <nav className="absolute top-0 w-full flex justify-between p-4 text-white z-20 font-semibold">
        <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
        {/* <Link to="/form" className="hover:text-purple-400 transition">Form</Link> */}
        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">logout</button>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/viewprofile" element={<ViewProfile />} />

        

      </Routes>
    </Router>
  );
}
