import React from "react";
import ParticleBackground from "../components/ParticleBackground";
import GlassCard from "../components/GlassCard";

const Dashboard = () => {
  const tasks = [
    { name: "Get participant to SF", pts: 30, diff: "Hard" },
    { name: "Suggest Idea", pts: 5, diff: "Easy" },
    { name: "Submit Contacts", pts: 10, diff: "Medium" },
    { name: "Suggest Venue", pts: 5, diff: "Easy" },
  ];

  const diffColors = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-500",
    Hard: "bg-red-500",
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden px-4 sm:px-6 md:px-8">
      <ParticleBackground />
      <div className="relative z-10 py-6 md:py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
          Dashboard
        </h1>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
          <GlassCard><p className="text-center text-base sm:text-lg font-semibold">View Profile</p></GlassCard>
          <GlassCard><p className="text-center text-base sm:text-lg font-semibold">#1 Your Standings</p></GlassCard>
          <GlassCard><p className="text-center text-base sm:text-lg font-semibold">Guidelines</p></GlassCard>
          <GlassCard><p className="text-center text-base sm:text-lg font-semibold">Leaderboard</p></GlassCard>
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
                <tr key={i} className="border-b border-white/10 hover:bg-white/10 transition">
                  <td className="py-3">{t.name}</td>
                  <td>
                    <button className="bg-cyan-500 hover:bg-cyan-600 px-3 sm:px-4 py-1 rounded text-xs sm:text-sm">
                      Click Here
                    </button>
                  </td>
                  <td>{t.pts}</td>
                  <td>0%</td>
                  <td>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${diffColors[t.diff]}`}>
                      {t.diff}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs sm:text-sm text-gray-300 text-center">Overall Progress: 0/4 Complete</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
