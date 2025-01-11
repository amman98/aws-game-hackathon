import React from 'react';

const WhatGameIs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 via-orange-300 via-yellow-400 to-yellow-500 p-8 flex flex-col items-center">
      <h1 className='font-bold text-[35px] mb-10 text-white'  style={{ textShadow: "2px 2px 4px black" }}>Welcome to Word Quest, the ultimate game to test your grammar! The rules are simple, you will be presented with a word with one of the letters missing. Select amongst three options to fill in the word and you receive points. Complete 10 levels and you will be ranked in our global leaderboard. Here are some examples below of how the game looks! </h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {/* Card 1 */}
        <div className="bg-yellow-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6 animate-pulse">Can You Guess the Word?</h1>
          <p className="text-lg mb-4">Fill in the missing letter!</p>
          <div className="flex justify-center items-center gap-2 text-5xl font-mono mb-6">
            <span className="border-b-4 border-white px-4">H</span>
            <span className="border-b-4 border-white px-4">O</span>
            <span className="border-b-4 border-white px-4">_</span>
            <span className="border-b-4 border-white px-4">E</span>
            <span className="border-b-4 border-white px-4">Y</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              A
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              N
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              M
            </button>
          </div>
          <div className="mt-8">
            <p className="italic text-sm opacity-80">Hint: It's sweet and made by bees!</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6 animate-pulse">Can You Guess the Word?</h1>
          <p className="text-lg mb-4">Fill in the missing letter!</p>
          <div className="flex justify-center items-center gap-2 text-5xl font-mono mb-6">
            <span className="border-b-4 border-white px-4">S</span>
            <span className="border-b-4 border-white px-4">_</span>
            <span className="border-b-4 border-white px-4">C</span>
            <span className="border-b-4 border-white px-4">C</span>
            <span className="border-b-4 border-white px-4">E</span>
            <span className="border-b-4 border-white px-4">R</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              O
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              I
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              U
            </button>
          </div>
          <div className="mt-8">
            <p className="italic text-sm opacity-80">Hint: It's a sport!</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6 animate-pulse">Can You Guess the Word?</h1>
          <p className="text-lg mb-4">Fill in the missing letter!</p>
          <div className="flex justify-center items-center gap-2 text-5xl font-mono mb-6">
            <span className="border-b-4 border-white px-4">S</span>
            <span className="border-b-4 border-white px-4">_</span>
            <span className="border-b-4 border-white px-4">O</span>
            <span className="border-b-4 border-white px-4">E</span>
            <span className="border-b-4 border-white px-4">S</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              A
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              I
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              H
            </button>
          </div>
          <div className="mt-8">
            <p className="italic text-sm opacity-80">Hint: It's a footwear!</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6 animate-pulse">Can You Guess the Word?</h1>
          <p className="text-lg mb-4">Fill in the missing letter!</p>
          <div className="flex justify-center items-center gap-2 text-5xl font-mono mb-6">
            <span className="border-b-4 border-white px-4">C</span>
            <span className="border-b-4 border-white px-4">_</span>
            <span className="border-b-4 border-white px-4">E</span>
            <span className="border-b-4 border-white px-4">A</span>
            <span className="border-b-4 border-white px-4">M</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              H
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              R
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              S
            </button>
          </div>
          <div className="mt-8">
            <p className="italic text-sm opacity-80">Hint: You put it in coffee!</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatGameIs;