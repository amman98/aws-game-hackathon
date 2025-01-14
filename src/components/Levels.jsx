import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Levels = () => {
  const levels = [
    {
      title: "Basic Level",
      description: "This level is for beginners. The words are short, ranging from 5 to 10 characters, to help you get started.",
      features: [
        "Simple, short words",
        "10 stages to complete",
        "Perfect for getting familiar with the game",
      ],
      route: "/play-a-game/basic",
    },
    {
      title: "Master Level",
      description: "For those who have mastered the basics. The words are a bit more challenging, ranging from 11 to 15 characters.",
      features: [
        "Medium complexity words",
        "10 stages with increasing difficulty",
        "Test your word-guessing skills!",
      ],
      route: "/play-a-game/master",
    },
    {
      title: "Guru Level",
      description: "The ultimate challenge! Words here range from 16 to 20 characters, and the difficulty is high. Only the bravest can complete this level!",
      features: [
        "Long and challenging words",
        "10 stages of expert-level word guessing",
        "For true word-game enthusiasts!",
      ],
      route: "/play-a-game/guru",
    },
  ];
  

  const navigate = useNavigate();
  const [isUsernameSaved, setIsUsernameSaved] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const gameUserName = localStorage.getItem('gameUserName');
    setIsUsernameSaved(!!gameUserName); // Convert to boolean
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-800 via-orange-500 via-yellow-600 to-yellow-800 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl bg-yellow-900 text-white p-8 rounded-lg shadow-lg mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Your Level</h2>

          {/* Level Cards with Flexbox */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Loop through each Level div */}
            {levels.map((level, index) => (
            <div 
              key={index} 
              className="level-card p-6 rounded-lg bg-yellow-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-yellow-600 flex-1 min-w-[280px]"
            >
              <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
              <p className="text-lg mb-4">{level.description}</p>
              <ul className="text-lg list-disc pl-6">
                {level.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handleNavigate(level.route)}
                disabled={!isUsernameSaved}
                className="bg-yellow-500 mt-10 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
              >
                Let's Play ❤️
              </button>
            </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Levels;
