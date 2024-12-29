import React, { useState } from 'react';

const Levels = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-800 via-orange-500 via-yellow-600 to-yellow-800 p-8 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white">Welcome to the Word Guessing Game</h1>
        <p className="text-lg text-white mt-4">Choose your level and start the challenge!</p>
      </div>

    <div className="w-full max-w-6xl bg-yellow-900 text-white p-8 rounded-lg shadow-lg mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Level</h2>

        {/* Level Cards with Flexbox */}
        <div className="flex flex-wrap justify-center gap-6">
        {/* Basic Level */}
        <div className="level-card p-6 rounded-lg bg-yellow-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-yellow-600 flex-1 min-w-[280px]">
            <h3 className="text-2xl font-bold mb-4">Basic Level</h3>
            <p className="text-lg mb-4">This level is for beginners. The words are short, ranging from 3 to 5 characters, to help you get started.</p>
            <ul className="text-lg list-disc pl-6">
                <li>Simple, short words</li>
                <li>10 stages to complete</li>
                <li>Perfect for getting familiar with the game</li>
            </ul>
            <button className="bg-yellow-500 mt-10 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">Let's Play ❤️</button>
        </div>

        {/* Master Level */}
        <div className="level-card p-6 rounded-lg bg-yellow-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-yellow-600 flex-1 min-w-[280px]">
            <h3 className="text-2xl font-bold mb-4">Master Level</h3>
            <p className="text-lg mb-4">For those who have mastered the basics. The words are a bit more challenging, ranging from 5 to 7 characters.</p>
            <ul className="text-lg list-disc pl-6">
                <li>Medium complexity words</li>
                <li>10 stages with increasing difficulty</li>
                <li>Test your word-guessing skills!</li>
            </ul>
            <button className="bg-yellow-500 mt-10 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">Let's Play ❤️</button>
        </div>

        {/* Guru Level */}
        <div className="level-card p-6 rounded-lg bg-yellow-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-yellow-600 flex-1 min-w-[280px]">
            <h3 className="text-2xl font-bold mb-4">Guru Level</h3>
            <p className="text-lg mb-4">The ultimate challenge! Words here range from 7 to 10 characters, and the difficulty is high. Only the bravest can complete this level!</p>
            <ul className="text-lg list-disc pl-6">
                <li>Long and challenging words</li>
                <li>10 stages of expert-level word guessing</li>
                <li>For true word-game enthusiasts!</li>
            </ul>
            <button className="bg-yellow-500 mt-10 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">Let's Play ❤️</button>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Levels;
