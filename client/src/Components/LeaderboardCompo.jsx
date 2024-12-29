import React from 'react';
import bgImage from '../assets/bg-image.jpg';

const LeaderboardCompo = () => {
  const data = [
    { id: 1, name: 'John Doe', score: 150 },
    { id: 2, name: 'Jane Smith', score: 200 },
    { id: 3, name: 'Alice Johnson', score: 180 },
    { id: 4, name: 'Bob Brown', score: 100 },
    { id: 5, name: 'Charlie Black', score: 130 }
  ];

  const sortedData = data.sort((a, b) => b.score - a.score);

  const getBadge = (index) => {
    if (index === 0) return '🏆 1st';
    if (index === 1) return '🥈 2nd';
    if (index === 2) return '🥉 3rd';
    return `${index + 1}`;
  };

  const getMedalClass = (index) => {
    if (index === 0) return 'bg-yellow-400';
    if (index === 1) return 'bg-gray-400';
    if (index === 2) return 'bg-orange-400';
    return 'bg-green-300';
  };

  return (
    <div
      className='min-h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='w-1/2 bg-yellow-600 rounded-lg border-[2px] border-black p-3 shadow-lg'>
        <h1 className='text-5xl font-bold text-center mb-8'>🏅 Leaderboard</h1>
        <table className='w-full border-collapse border border-gray-400 rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-blue-300 text-lg'>
              <th className='border p-4 rounded-tl-lg'>Rank</th>
              <th className='border p-4'>User Name</th>
              <th className='border p-4 rounded-tr-lg'>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((user, index) => (
              <tr
                key={user.id}
                className={`hover:scale-105 transition-all duration-300 ${getMedalClass(index)} border-[2px] border-black text-center`}
              >
                <td className='border p-4 font-semibold'>{getBadge(index)}</td>
                <td className='border p-4'>{user.name}</td>
                <td className='border p-4'>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardCompo;
