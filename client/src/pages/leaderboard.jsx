import React, { useState, useEffect, useContext } from 'react';
import { Trophy, Crown, Star, Sparkles } from 'lucide-react';
import LeaderboardCard from '../components/LeaderboardCard';
import ParticleEffect from '../components/ParticleEffect';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { getLeaderboardData } from '../api/data';

const Leaderboard = () => {
  const { token, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState(null);
  const [myRank, setMyRank] = useState(null);
  const [myPoints, setMyPoints] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if user is logged in
        if (!token) {
          setError('Please sign in to view the leaderboard');
          setLeaderboardData([]);
          setIsLoading(false);
          return;
        }

        if (!user) {
          setError('User data not loaded. Please refresh the page.');
          setLeaderboardData([]);
          setIsLoading(false);
          return;
        }

        console.log('Building leaderboard from logged-in user:', user);
        
        // Use only the actual logged-in user data from AuthContext
        // No dummy data - just show the current user
        const currentUserData = [{
          name: user.name || 'User',
          college: user.college || user.institution || 'College',
          points: 0, // Points will be calculated from tasks in Dashboard
          email: user.email || '',
          isCurrentUser: true
        }];

        // Map to leaderboard format with rank
        const formatted = currentUserData.map((item, index) => ({
          rank: index + 1,
          name: item.name,
          college: item.college,
          points: item.points,
          email: item.email,
          isCurrentUser: item.isCurrentUser
        }));

        setLeaderboardData(formatted);
        setMyRank(1);
        setMyPoints(formatted[0].points);
        
        console.log('Leaderboard ready with user:', formatted[0].name, 'from', formatted[0].college);

      } catch (e) {
        console.error('Leaderboard error:', e);
        setError('Unable to load leaderboard. Please try again later.');
        setLeaderboardData([]);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [token, user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleEffect />
      </div>

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 pt-36 pb-16">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Crown className="w-14 h-14 text-yellow-400 animate-bounce" />
            <h1 className="text-6xl font-extrabold text-yellow-400">
              Leaderboard
            </h1>
            <Crown className="w-14 h-14 text-yellow-400 animate-bounce" />
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            🏆 Compete, Excel, and Rise to the Top! Track your progress and see how you rank.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT: LEADERBOARD */}
          <div className="lg:col-span-2 space-y-3">
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
                {error.includes('sign in') && (
                  <a 
                    href="/signin" 
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform"
                  >
                    Sign In Now
                  </a>
                )}
              </div>
            ) : leaderboardData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Trophy className="w-16 h-16 text-gray-500 mb-4" />
                <p className="text-gray-400 text-lg">No leaderboard data available yet</p>
              </div>
            ) : (
              <>
                <LeaderboardCard
                  isHeader
                  rank="Rank"
                  name="Name"
                  college="College"
                  points="Points"
                />

                {leaderboardData.map((leader) => (
                  <LeaderboardCard
                    key={leader.rank}
                    rank={leader.rank}
                    name={leader.name}
                    college={leader.college}
                    points={leader.points}
                  />
                ))}
              </>
            )}
          </div>

          {/* RIGHT: YOUR RANK */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-purple-900/40 border border-purple-500/40 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">Your Current Rank</h3>
              <p className="text-gray-300 mb-6">Keep pushing 🚀</p>

              <p className="text-6xl font-extrabold text-purple-400 mb-2">
                {myRank ? `#${myRank}` : '—'}
              </p>

              <div className="flex justify-center items-center gap-2 text-lg">
                <span>{myPoints} points</span>
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Leaderboard;