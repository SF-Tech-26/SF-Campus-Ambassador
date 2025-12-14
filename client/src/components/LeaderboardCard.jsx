import React from 'react';
import { Trophy, Medal, Award, Sparkles } from 'lucide-react';

const LeaderboardCard = ({ rank, name, college, points, isHeader = false }) => {
  const getRankDisplay = () => {
    if (isHeader) return null;
    
    if (rank === 1) {
      return (
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/50">
            <Trophy className="w-6 h-6 text-white" />
          </div>
        </div>
      );
    } else if (rank === 2) {
      return (
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg shadow-gray-400/50">
            <Medal className="w-6 h-6 text-white" />
          </div>
        </div>
      );
    } else if (rank === 3) {
      return (
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-lg shadow-amber-600/50">
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {rank}
          </span>
        </div>
      );
    }
  };

  const getRowStyle = () => {
    if (isHeader) {
      return "bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500";
    }
    if (rank === 1) {
      return "bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/50";
    } else if (rank === 2) {
      return "bg-gradient-to-r from-gray-400/10 to-gray-500/10 border-gray-400/30 hover:border-gray-400/50";
    } else if (rank === 3) {
      return "bg-gradient-to-r from-amber-600/10 to-amber-700/10 border-amber-600/30 hover:border-amber-600/50";
    } else {
      return "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50";
    }
  };

  return (
    <div
      className={`${getRowStyle()} border-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
        !isHeader && 'hover:scale-[1.02] hover:shadow-xl'
      }`}
    >
      <div className="grid grid-cols-12 gap-4 p-4 sm:p-6 items-center">
        {/* Rank Column - 2 cols */}
        <div className="col-span-2 flex justify-center">
          {isHeader ? (
            <span className="text-white font-bold text-lg uppercase">Rank</span>
          ) : (
            getRankDisplay()
          )}
        </div>

        {/* Name Column - 4 cols */}
        <div className="col-span-4">
          {isHeader ? (
            <span className="text-white font-bold text-lg uppercase">Name</span>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-md flex-shrink-0">
                <img 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=40`} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-semibold text-base sm:text-lg truncate">
                {name}
              </span>
            </div>
          )}
        </div>

        {/* College Column - 4 cols */}
        <div className="col-span-4">
          {isHeader ? (
            <span className="text-white font-bold text-lg uppercase">College</span>
          ) : (
            <span className="text-gray-300 text-sm sm:text-base truncate">
              {college}
            </span>
          )}
        </div>

        {/* Points Column - 2 cols */}
        <div className="col-span-2 flex justify-center">
          {isHeader ? (
            <span className="text-white font-bold text-lg uppercase">Points</span>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {points}
              </span>
              {rank <= 3 && <Sparkles className="w-4 h-4 text-yellow-400" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
