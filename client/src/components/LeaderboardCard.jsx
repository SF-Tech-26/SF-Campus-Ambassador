// import React from 'react';
// import { Trophy, Medal, Award, Sparkles } from 'lucide-react';

// const LeaderboardCard = ({ rank, name, college, points, isHeader = false }) => {
//   const getRankDisplay = () => {
//     if (isHeader) return null;
    
//     if (rank === 1) {
//       return (
//         <div className="flex items-center justify-center">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50">
//             <Trophy className="w-6 h-6 text-white" />
//           </div>
//         </div>
//       );
//     } else if (rank === 2) {
//       return (
//         <div className="flex items-center justify-center">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg shadow-gray-400/50">
//             <Medal className="w-6 h-6 text-white" />
//           </div>
//         </div>
//       );
//     } else if (rank === 3) {
//       return (
//         <div className="flex items-center justify-center">
//           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg shadow-amber-600/50">
//             <Award className="w-6 h-6 text-white" />
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="flex items-center justify-center">
//           <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//             {rank}
//           </span>
//         </div>
//       );
//     }
//   };

//   const getRowStyle = () => {
//     if (isHeader) {
//       return "bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500";
//     }
//     if (rank === 1) {
//       return "bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/50";
//     } else if (rank === 2) {
//       return "bg-gradient-to-r from-gray-400/10 to-gray-500/10 border-gray-400/30 hover:border-gray-400/50";
//     } else if (rank === 3) {
//       return "bg-gradient-to-r from-amber-600/10 to-amber-700/10 border-amber-600/30 hover:border-amber-600/50";
//     } else {
//       return "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50";
//     }
//   };

//   return (
//     <div
//       className={`${getRowStyle()} border-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
//         !isHeader && 'hover:scale-[1.02] hover:shadow-xl'
//       }`}
//     >
//       <div className="grid grid-cols-12 gap-2 sm:gap-4 p-3 sm:p-5 items-center">
//         {/* Rank Column - 2 cols */}
//         <div className="col-span-2 flex justify-center items-center min-h-[60px]">
//           {isHeader ? (
//             <span className="text-white font-bold text-sm sm:text-lg uppercase text-center">Rank</span>
//           ) : (
//             getRankDisplay()
//           )}
//         </div>

//         {/* Name Column - 3 cols */}
//         <div className="col-span-3 flex items-center min-h-[60px]">
//           {isHeader ? (
//             <span className="text-white font-bold text-sm sm:text-lg uppercase">Name</span>
//           ) : (
//             <div className="flex items-center gap-2 w-full">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-md flex-shrink-0">
//                 <img 
//                   src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=40`} 
//                   alt={name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="text-white font-semibold text-sm sm:text-base truncate flex-1">
//                 {name}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* College Column - 5 cols */}
//         <div className="col-span-5 flex items-center min-h-[60px]">
//           {isHeader ? (
//             <span className="text-white font-bold text-sm sm:text-lg uppercase">College</span>
//           ) : (
//             <span className="text-gray-300 text-xs sm:text-base truncate block w-full">
//               {college}
//             </span>
//           )}
//         </div>

//         {/* Points Column - 2 cols */}
//         <div className="col-span-2 flex justify-center items-center min-h-[60px]">
//           {isHeader ? (
//             <span className="text-white font-bold text-sm sm:text-lg uppercase text-center">Points</span>
//           ) : (
//             <div className="flex items-center justify-center gap-1">
//               <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 {points}
//               </span>
//               {rank <= 3 && <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaderboardCard;


import React from 'react';
import { Trophy, Medal, Award, Sparkles } from 'lucide-react';

const LeaderboardCard = ({ rank, name, college, points, isHeader = false }) => {

  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-white" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-white" />;
    if (rank === 3) return <Award className="w-6 h-6 text-white" />;
    return <span className="font-bold">{rank}</span>;
  };

  return (
    <div className={`border border-white/10 rounded-xl ${isHeader ? 'bg-cyan-600' : 'bg-slate-800/60 hover:bg-slate-700/60'}`}>
      <div className="grid grid-cols-12 items-center px-5 py-4 min-h-[72px]">

        {/* Rank */}
        <div className="col-span-2 flex justify-center">
          {isHeader ? 'Rank' : (
            <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
              {getRankIcon()}
            </div>
          )}
        </div>

        {/* Name */}
        <div className="col-span-4 flex items-center gap-3 truncate">
          {isHeader ? 'Name' : (
            <>
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`}
                alt={name}
                className="w-9 h-9 rounded-full"
              />
              <span className="truncate font-semibold">{name}</span>
            </>
          )}
        </div>

        {/* College */}
        <div className="col-span-4 truncate text-gray-300">
          {isHeader ? 'College' : college}
        </div>

        {/* Points */}
        <div className="col-span-2 flex justify-center items-center gap-1">
          {isHeader ? 'Points' : (
            <>
              <span className="font-bold text-cyan-400">{points}</span>
              {rank <= 3 && <Sparkles className="w-4 h-4 text-yellow-400" />}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default LeaderboardCard;
