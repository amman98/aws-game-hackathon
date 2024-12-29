import React from 'react';

const Footer = () => {
  return (
    <div className="bg-yellow-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-sm">
        {/* Main Footer Sections */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/leaderboard" className="hover:text-yellow-400">Leaderboard</a></li>
            <li><a href="/play-a-game" className="hover:text-yellow-400">Play a Game</a></li>
            <li><a href="/report-a-problem" className="hover:text-yellow-400">Report a Problem</a></li>
          </ul>
        </div>

        {/* Levels Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-4">Levels</h3>
          <ul className="space-y-2">
            <li><a href="/basic" className="hover:text-yellow-400">Basic</a></li>
            <li><a href="/master" className="hover:text-yellow-400">Master</a></li>
            <li><a href="/guru" className="hover:text-yellow-400">Guru</a></li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="w-full sm:w-1/4 text-center sm:text-right">
          <p className="text-sm opacity-70">© 2025 WordQuest. All Rights Reserved.</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-4 border-t border-yellow-700 pt-4 text-center">
        <p className="text-sm text-opacity-60">Designed with ❤️ by WordQuest Team</p>
      </div>
    </div>
  );
}

export default Footer;