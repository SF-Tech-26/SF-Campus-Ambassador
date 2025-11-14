import React, { useContext, useEffect, useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import GlassCard from "../components/GlassCard";
import { AuthContext } from "../context/AuthContext";
import { fetchSubmittedData } from "../api/data";
import { useNavigate } from "react-router-dom";

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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
