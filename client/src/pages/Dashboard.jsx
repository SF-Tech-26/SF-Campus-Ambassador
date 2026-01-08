// import React, { useContext, useEffect, useState } from "react";
// import ParticleBackground from "../components/ParticleBackground";
// import GlassCard from "../components/GlassCard";
// import { AuthContext } from "../context/AuthContext";
// import { fetchSubmittedData } from "../api/data";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { token } = useContext(AuthContext);
//   const [submittedData, setSubmittedData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch dashboard data
//   useEffect(() => {
//     const getData = async () => {
//       if (!token) return;
//       try {
//         setLoading(true);
//         const data = await fetchSubmittedData(token);
//         setSubmittedData(data);
//         setError(null);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch dashboard data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, [token]);

//   const tasks = [
//     { name: "Get participant to SF", pts: 30, ptsGained: 0 },
//     { name: "Suggest Idea", pts: 5, ptsGained: 0 },
//     { name: "Submit Contacts", pts: 10, diptsGained: 0 },
//     { name: "Suggest Venue", pts: 5, ptsGained: 0 },
//   ];


//   // Show loading and error states
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white text-lg">
//         Loading dashboard...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-400 text-lg">
//         {error}
//       </div>
//     );
//   }

//   // Show loading and error states
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white text-lg">
//         Loading dashboard...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-400 text-lg">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       {/* Main container: Removed mystical background gradient */}
//       <div className="relative min-h-screen overflow-hidden">

//         {/* Top Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
//           <button onClick={() => navigate("/viewprofile")}>
//             <GlassCard>
//               <p className="text-center text-base sm:text-lg font-semibold">
//                 View Profile
//               </p>
//             </GlassCard>
//           </button>
//           <GlassCard>
//             <p className="text-center text-base sm:text-lg font-semibold">
//               #1 Your Standings
//             </p>
//           </GlassCard>
//           <GlassCard>
//             <p className="text-center text-base sm:text-lg font-semibold">
//               Guidelines
//             </p>
//           </GlassCard>
//           <GlassCard>
//             <p className="text-center text-base sm:text-lg font-semibold">
//               Leaderboard
//             </p>
//           </GlassCard>
//         </div>

//         {/* Tasks Table */}
//         <div className="glass p-4 sm:p-6 overflow-x-auto rounded-xl">
//           <table className="min-w-full text-left text-sm sm:text-base">
//             <thead>
//               <tr className="text-gray-300 border-b border-white/20">
//                 <th className="py-2">Task</th>
//                 <th>Action</th>
//                 <th>Points</th>
//                 <th>Progress</th>
//                 <th>Difficulty</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((t, i) => (
//                 <tr
//                   key={i}
//                   className="border-b border-white/10 hover:bg-white/10 transition"
//                 >
//                   <td className="py-3">{t.name}</td>
//                   <td>
//                     <button
//                       onClick={() => navigate("/form")}
//                       className="bg-cyan-500 hover:bg-cyan-600 px-3 sm:px-4 py-1 rounded text-xs sm:text-sm"
//                     >
//                       Click Here
//                     </button>
//                   </td>
//                   <td>{t.pts}</td>

//                   {/* Show dynamic progress if available */}
//                   <td>{submittedData?.progress?.[t.name] || "0%"}</td>

//                   <td>
//                     <span
//                       className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${diffColors[t.diff]}`}
//                     >
//                       {t.diff}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Overall Progress */}
//           <p className="mt-4 text-xs sm:text-sm text-gray-300 text-center">
//             Overall Progress:{" "}
//             {submittedData?.completedTasks?.length || 0}/{tasks.length} Complete
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { fetchSubmittedData } from "../api/data";
import { User, Trophy, BookOpen, Crown, CheckCircle } from 'lucide-react';
import dashboardBg from "../assets/dashboardbg.jpg";

// --- Components ---

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-6 text-white z-50">
      <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-cyan-400 transition font-jaro">
        HOME
      </Link>

      {token ? (
        <button
          onClick={() => {
            logout();
            navigate("/signin");
          }}
          type="button"
          className="bg-red-600/80 hover:bg-red-700 text-white font-medium rounded-full px-6 py-2 transition-all shadow-lg shadow-red-500/20 backdrop-blur-sm"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/signin"
          className="bg-blue-600/80 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 transition-all shadow-lg shadow-blue-500/20 backdrop-blur-sm"
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

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchSubmittedData();
        setSubmittedData(data);
        setError(null);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const tasks = [
    { name: "Get participant to SF", pts: 30, ptsGained: 0, type: "participant" },
    { name: "Suggest Idea", pts: 5, ptsGained: 0, type: "idea" },
    { name: "Submit Contacts", pts: 10, ptsGained: 0, type: "contact" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-white selection:bg-cyan-500/30 font-sans">
      <Navbar />

      {/* Background with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 pt-32 pb-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-jaro text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 drop-shadow-xl tracking-wider">
            DASHBOARD
          </h1>
          <p className="text-gray-300 text-sm sm:text-base tracking-[0.2em] uppercase opacity-90">
            Campus Ambassador Program
          </p>
        </div>

        {/* Cards Row (Restored Layout) */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12">
          {[
            { title: "View Profile", icon: User, action: () => navigate("/viewprofile") },
            { title: "#1 Your Standings", icon: Trophy, action: () => { } },
            { title: "Guidelines", icon: BookOpen, action: () => navigate("/guidelines") },
            { title: "Leaderboard", icon: Crown, action: () => navigate("/leaderboard") }
          ].map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="group relative flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] flex flex-col items-center justify-center text-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <item.icon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-white tracking-wide z-10">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Tasks Table (Restored Layout) */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl overflow-x-auto">
          <div className="mb-6 border-b border-white/10 pb-4">
            <h2 className="font-jaro text-3xl text-white tracking-wide">YOUR TASKS</h2>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-white/10 text-sm uppercase tracking-wider">
                <th className="py-4 px-4 font-semibold">Task</th>
                <th className="py-4 px-4 font-semibold text-center">Action</th>
                <th className="py-4 px-4 font-semibold text-center">Points</th>
                <th className="py-4 px-4 font-semibold text-center">Progress</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {tasks.map((t, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200 group">
                  <td className="py-4 px-4 font-medium text-white group-hover:text-yellow-400 transition-colors">
                    {t.name}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => navigate("/form", { state: { type: t.type } })}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-2 px-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                    >
                      Click Here
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-yellow-400 text-lg">
                    {t.pts}
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-emerald-400 text-lg">
                    {t.ptsGained}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

