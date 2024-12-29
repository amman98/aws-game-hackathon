import React from 'react';

const PlayAGameCompo = () => {
  const levels = [
    {
      title: '🔥 Basic',
      rules: [
        '⚡ Rule 1: Stay in game',
        '💎 Rule 2: Collect points',
        '🚧 Rule 3: Avoid obstacles',
        '🏁 Rule 4: Reach checkpoint',
        '⏱️ Rule 5: Time limited'
      ],
    },
    {
      title: '⚡ Master',
      rules: [
        '🚀 Rule 1: Increase speed',
        '💰 Rule 2: Double points',
        '🛑 Rule 3: Harder obstacles',
        '🔍 Rule 4: Hidden paths',
        '❤️ Rule 5: Limited lives',
        '👾 Rule 6: Boss level',
        '⏳ Rule 7: Extra time bonus'
      ],
    },
    {
      title: '👑 Pro',
      rules: [
        '⚡ Rule 1: Ultra speed',
        '❌ Rule 2: No checkpoints',
        '⚠️ Rule 3: Sudden obstacles',
        '🧩 Rule 4: Puzzle levels',
        '💥 Rule 5: Critical hits',
        '⏲️ Rule 6: Time penalties',
        '👻 Rule 7: Random enemy spawns',
        '✨ Rule 8: Extra life pickups',
        '🐉 Rule 9: Final boss',
        '🗺️ Rule 10: Unlock secret map'
      ],
    }
  ];

  return (
    <div className='min-h-screen flex flex-col justify-center py-10 items-center bg-gradient-to-r from-yellow-300 to-orange-400'>
      <h1 className='text-5xl font-extrabold mb-12 text-white text-center drop-shadow-lg'>🎮 Choose Your Level</h1>
      <div className='flex flex-wrap gap-10 justify-center'>
        {levels.map((level, index) => (
          <div 
            key={index} 
            className='w-80 p-6 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-yellow-500'
          >
            <h2 className='text-4xl font-bold text-center mb-6 text-yellow-600'>{level.title}</h2>
            <ul className='list-disc list-inside space-y-2 text-gray-700'>
              {level.rules.map((rule, i) => (
                <li key={i} className='text-lg'>{rule}</li>
              ))}
            </ul>
            <div className='flex justify-center mt-6'>
              <button className='bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'>
                🎮 Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayAGameCompo;