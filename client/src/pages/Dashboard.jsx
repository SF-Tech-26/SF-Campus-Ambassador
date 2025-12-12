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
import ParticleBackground from "../components/ParticleBackground";
import GlassCard from "../components/GlassCard";
import { AuthContext } from "../context/AuthContext";
import { fetchSubmittedData } from "../api/data";
import { useNavigate, Link } from "react-router-dom";
import festBg from "../assets/FB_IMG_1675170342527.jpg";

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

const Dashboard = () => 
  {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dashboard data
useEffect(() => {
  const getData = async () => {
    try {
      setLoading(true);

      // call API WITHOUT token
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

  return (
<>
  <Navbar />

  {/* CLEAN modern background */}
  <div
  className="relative min-h-screen overflow-hidden"
  style={{
    backgroundImage: `url(${festBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // smooth modern parallax effect
  }}
>


    {/* Soft vignette */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 70%)",
        zIndex: -10,
      }}
    />

    {/* Subtle texture grid */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
        zIndex: -20,
      }}
    />

    <div className="relative z-10 py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="text-center mb-10 md:mb-14">
        <h2
          className="font-jaro text-5xl sm:text-7xl md:text-7xl font-extrabold text-white mb-3"
          style={{ letterSpacing: "0.1em" }}
        >
          DASHBOARD
        </h2>
        <p
          className="text-gray-200 text-sm sm:text-base opacity-90"
          style={{ letterSpacing: "0.15em" }}
        >
          Campus Ambassador
        </p>
      </div>

      {/* Spell Cards */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-10 md:mb-14">
        <button onClick={() => navigate("/viewprofile")} className="bg-white/20 w-full">
          <GlassCard icon="👤">
            <p>View Profile</p>
          </GlassCard>
        </button>
        <div className="bg-white/20 w-full">
        <GlassCard icon="🏆">
          <p>#1 Your Standings</p>
        </GlassCard>
        </div>
        <button onClick={() => navigate("/guidelines")} className="bg-white/20 w-full">
          <GlassCard icon="📜">
            <p>Guidelines</p>
          </GlassCard>
        </button>
        <button onClick={() => navigate("/leaderboard")} className="bg-white/20 w-full">
          <GlassCard icon="🎯">
            <p>Leaderboard</p>
          </GlassCard>
        </button>
      </div>

      {/* Tasks Table */}
      <div className="panel-style p-6 sm:p-8 overflow-x-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-md">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h2
            className="font-jaro text-2xl sm:text-3xl font-bold text-white"
            style={{ letterSpacing: "0.15em" }}
          >
            YOUR TASKS
          </h2>
        </div>

        <table className="min-w-full text-left text-sm sm:text-base">
          <thead>
            <tr className="text-gray-300 border-b-2 border-gray-600">
              <th className="py-4 px-3 font-semibold uppercase tracking-wider">
                Task
              </th>
              <th className="px-3 font-semibold uppercase tracking-wider">
                Action
              </th>
              <th className="px-3 font-semibold uppercase tracking-wider">
                Points
              </th>
              <th className="px-3 font-semibold uppercase tracking-wider">
                Points Gained
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t, i) => {
              if (t.name === "Suggest Venue") return null;

              return (
                <tr
                  key={i}
                  className="border-b border-gray-700 hover:bg-white/5 transition-all duration-300"
                >
                  <td className="py-5 px-3 font-medium text-white">
                    {t.name}
                  </td>

                  {/* SIMPLE BLUE BUTTON — clean & modern */}
                  <td className="px-3">
                    <button
                      onClick={() => navigate("/form")}
                      className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md text-white"
                    >
                      Click Here
                    </button>
                  </td>

                  <td className="px-3">
                    <span className="inline-flex items-center gap-1 text-yellow-300 font-bold text-base sm:text-lg">
                      {t.pts}
                    </span>
                  </td>

                  <td className="px-3">
                    <span className="text-emerald-300 font-bold text-base sm:text-lg">
                      {t.ptsGained}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</>



  );
};

export default Dashboard;

