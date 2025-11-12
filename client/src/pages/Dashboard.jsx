import React, { useContext, useEffect, useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import GlassCard from "../components/GlassCard";
import { AuthContext } from "../context/AuthContext";
import { fetchSubmittedData } from "../api/data";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { token, logout } = useContext(AuthContext);
=======
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
>>>>>>> 46952e0 (puskar)
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dashboard data
  useEffect(() => {
    const getData = async () => {
      if (!token) return;
      try {
        setLoading(true);
        const data = await fetchSubmittedData(token);
        setSubmittedData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [token]);

<<<<<<< HEAD
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

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dashboard data
  useEffect(() => {
    const getData = async () => {
      if (!token) return;
      try {
        setLoading(true);
        const data = await fetchSubmittedData(token);
        setSubmittedData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [token]);

=======
>>>>>>> 46952e0 (puskar)
  const tasks = [
    { name: "Get participant to SF", pts: 30, ptsGained: 0 },
    { name: "Suggest Idea", pts: 5, ptsGained: 0 },
    { name: "Submit Contacts", pts: 10, diptsGained: 0 },
    { name: "Suggest Venue", pts: 5, ptsGained: 0 },
  ];


  // Show loading and error states
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-lg">
        {error}
      </div>
    );
  }

  // Show loading and error states
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-lg">
        {error}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {/* Main container: Removed mystical background gradient */}
      <div className="relative min-h-screen overflow-hidden">

<<<<<<< HEAD
        {/* Removed mystical-fog and magic-particle divs */}

        <div className="relative z-10 py-20 md:py-24 px-4 sm:px-6 md:px-8">
          {/* Header: Applied font-jaro and removed purple gradient/glows */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="font-jaro text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-3" style={{ letterSpacing: '0.1em' }}>
              DASHBOARD
            </h1>
            <p className="text-gray-300 text-sm sm:text-base opacity-80" style={{ letterSpacing: '0.15em' }}>
              Campus Ambassador
            </p>
          </div>

          {/* Spell Cards Grid: Uses mock GlassCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-14">
            {/* Simplified buttons: Removed navigate() */}
            <button onClick={() => navigate("/viewprofile")} className="w-full">
              <GlassCard icon="👤">
                <p>View Profile</p>
              </GlassCard>
            </button>
            <GlassCard icon="🏆">
              <p>#1 Your Standings</p>
            </GlassCard>
            <button onClick={() => navigate("/guidelines")} className="w-full">
              <GlassCard icon="📜">
                <p>Guidelines</p>
              </GlassCard>
            </button>
            <button onClick={() => navigate("/leaderboard")} className="w-full">
              <GlassCard icon="🎯">
                <p>Leaderboard</p>
              </GlassCard>
            </button>
          </div>

          {/* Tasks Table: Replaced 'mystical-panel' with 'panel-style' */}
          <div className="panel-style p-6 sm:p-8 overflow-x-auto">
            {/* Table Header: Removed purple styles, applied font-jaro */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <h2 className="font-jaro text-2xl sm:text-3xl font-bold text-white" style={{ letterSpacing: '0.15em' }}>
                YOUR TASKS
              </h2>
            </div>

            <table className="min-w-full text-left text-sm sm:text-base">
              <thead>
                {/* Table Header: Changed border color */}
                <tr className="text-gray-400 border-b-2 border-gray-700">
                  <th className="py-4 px-3 font-semibold uppercase tracking-wider">Task</th>
                  <th className="px-3 font-semibold uppercase tracking-wider">Action</th>
                  <th className="px-3 font-semibold uppercase tracking-wider">Points</th>
                  <th className="px-3 font-semibold uppercase tracking-wider">Progress</th>
                  <th className="px-3 font-semibold uppercase tracking-wider">Points Gained</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((t, i) => (
                  /* Table Row: Updated border and hover colors */
                  <tr
                    key={i}
                    className="border-b border-gray-800 hover:bg-gray-800/60 transition-all duration-300"
                  >
                    {/* Task Name: Removed purple styles */}
                    <td className="py-5 px-3 font-medium text-white">
                      {t.name}
                    </td>
                    <td className="px-3">
                      {/* Button: Changed to red theme */}
                      <button
                        onClick={() => console.log("Navigate to form")}
                        className="bg-red-700 hover:bg-red-800 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-red-700/50 hover:scale-105 text-white"
                      >
                        Click Here
                      </button>
                    </td>
                    <td className="px-3">
                      {/* Points: Simplified style */}
                      <span className="inline-flex items-center gap-1 text-yellow-400 font-bold text-base sm:text-lg">
                        {t.pts}
                      </span>
                    </td>

                    <td className="px-3">
                      {/* Progress: Simplified style */}
                      <span className="text-emerald-400 font-semibold">
                        {submittedData?.progress?.[t.name] || "0%"}
                      </span>
                    </td>

                    <td className="px-3">
                      {/* Points Gained: Changed from Difficulty */}
                      <span className="text-emerald-400 font-bold text-base sm:text-lg">
                        {t.ptsGained}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Overall Progress Display: Updated panel style */}
            <div className="mt-8">
              <div className="bg-gray-900/80 border-2 border-gray-700 rounded-xl p-5 text-center backdrop-blur-sm">
                <p className="text-base sm:text-lg font-semibold text-gray-300 mb-2" style={{ letterSpacing: '0.1em' }}>
                  Overall Progress
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  {/* Simplified text colors */}
                  <span className="text-yellow-400">
                    {submittedData?.completedTasks?.length || 0}
                  </span>
                  <span className="text-gray-500 mx-2">/</span>
                  <span className="text-white">
                    {tasks.length}
                  </span>
                  <span className="text-gray-300 text-lg ml-2">Complete</span>
                </p>
              </div>
            </div>
          </div>
=======
        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
          <button onClick={() => navigate("/viewprofile")}>
            <GlassCard>
              <p className="text-center text-base sm:text-lg font-semibold">
                View Profile
              </p>
            </GlassCard>
          </button>
          <GlassCard>
            <p className="text-center text-base sm:text-lg font-semibold">
              #1 Your Standings
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-center text-base sm:text-lg font-semibold">
              Guidelines
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-center text-base sm:text-lg font-semibold">
              Leaderboard
            </p>
          </GlassCard>
        </div>

        {/* Tasks Table */}
        <div className="glass p-4 sm:p-6 overflow-x-auto rounded-xl">
          <table className="min-w-full text-left text-sm sm:text-base">
            <thead>
              <tr className="text-gray-300 border-b border-white/20">
                <th className="py-2">Task</th>
                <th>Action</th>
                <th>Points</th>
                <th>Progress</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/10 transition"
                >
                  <td className="py-3">{t.name}</td>
                  <td>
                    <button
                      onClick={() => navigate("/form")}
                      className="bg-cyan-500 hover:bg-cyan-600 px-3 sm:px-4 py-1 rounded text-xs sm:text-sm"
                    >
                      Click Here
                    </button>
                  </td>
                  <td>{t.pts}</td>

                  {/* Show dynamic progress if available */}
                  <td>{submittedData?.progress?.[t.name] || "0%"}</td>

                  <td>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${diffColors[t.diff]}`}
                    >
                      {t.diff}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Overall Progress */}
          <p className="mt-4 text-xs sm:text-sm text-gray-300 text-center">
            Overall Progress:{" "}
            {submittedData?.completedTasks?.length || 0}/{tasks.length} Complete
          </p>
>>>>>>> 46952e0 (puskar)
        </div>
      </div>
    </>
  );
};

export default Dashboard;
