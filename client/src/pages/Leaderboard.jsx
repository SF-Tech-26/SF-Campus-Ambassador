import React, { useState, useEffect, useContext } from 'react';
import { Trophy, Crown, Star, Sparkles } from 'lucide-react';
import LeaderboardCard from '../components/LeaderboardCard';
import ParticleEffect from '../components/ParticleEffect';
import Navbar from '../components/Navbar';
import { fetchScoreboard } from '../api/data';
import { AuthContext } from '../context/AuthContext';

const Leaderboard = () => {
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!token) {
          setError('Please sign in to view the leaderboard');
          setLeaderboardData([]);
          return;
        }

        const response = await fetchScoreboard(token);

        const formatted = (response || []).map((item, index) => ({
          rank: index + 1,
          name: item.name || item.user_name || `User ${index + 1}`,
          college: item.college || item.institution || 'College',
          points: item.points || item.score || 0,
        }));

        setLeaderboardData(formatted);
      } catch (err) {
        console.error('Failed to fetch leaderboard', err);
        setError('Unable to load leaderboard right now');
        setLeaderboardData([]);
      } finally {
        setIsLoading(false);
      }
    };

    getLeaderboard();
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleEffect />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 gap-4">
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
            <Crown className="w-14 h-14 text-yellow-500 animate-bounce" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-2xl">
              Leaderboard
            </h1>
            <Crown className="w-14 h-14 text-yellow-500 animate-bounce" />
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            🏆 Compete, Excel, and Rise to the Top! Track your progress and see how you rank among fellow ambassadors.
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                <Trophy className="w-8 h-8 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-gray-400 mt-6 text-lg">Loading leaderboard...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-red-400 text-xl mb-4">⚠️ {error}</div>
              <p className="text-gray-400">Please try again later.</p>
            </div>
          ) : leaderboardData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Trophy className="w-16 h-16 text-gray-500 mb-4" />
              <p className="text-gray-400 text-lg">No leaderboard data available yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Header Row */}
              <LeaderboardCard isHeader={true} rank="Rank" name="Name" college="College" points="Points" />
              
              {/* Leaderboard Rows */}
              {leaderboardData.map((leader) => (
                <LeaderboardCard 
                  key={leader.rank} 
                  rank={leader.rank}
                  name={leader.name}
                  college={leader.college}
                  points={leader.points}
                />
              ))}
            </div>
          )}
        </div>

        {/* Your Rank Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="relative bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-purple-900/40 border-2 border-purple-500/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Your Current Rank</h3>
                  <p className="text-gray-300">Keep pushing to climb higher! 🚀</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  #15
                </p>
                <div className="flex items-center justify-center sm:justify-end gap-2">
                  <span className="text-gray-300 text-lg">1450 points</span>
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
