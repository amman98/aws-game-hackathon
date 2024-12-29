import React from 'react';

const WhatGameIs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 via-orange-300 via-yellow-400 to-yellow-500 p-8 flex flex-col items-center">
      <h1 className='font-bold text-[35px] mb-10 text-white'  style={{ textShadow: "2px 2px 4px black" }}>Some examples that how the game is going to be look like</h1>
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
            <span className="border-b-4 border-white px-4">A</span>
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
            <p className="italic text-sm opacity-80">Hint: It's a vehicle!</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6 animate-pulse">Can You Guess the Word?</h1>
          <p className="text-lg mb-4">Fill in the missing letter!</p>
          <div className="flex justify-center items-center gap-2 text-5xl font-mono mb-6">
            <span className="border-b-4 border-white px-4">B</span>
            <span className="border-b-4 border-white px-4">_</span>
            <span className="border-b-4 border-white px-4">T</span>
            <span className="border-b-4 border-white px-4">E</span>
            <span className="border-b-4 border-white px-4">R</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              A
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              I
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              O
            </button>
          </div>
          <div className="mt-8">
            <p className="italic text-sm opacity-80">Hint: It's a refreshing drink!</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-900 text-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-6 animate-pulse">Can You Guess the Word?</h1>
          <p className="text-lg mb-4">Fill in the missing letter!</p>
          <div className="flex justify-center items-center gap-2 text-5xl font-mono mb-6">
            <span className="border-b-4 border-white px-4">T</span>
            <span className="border-b-4 border-white px-4">_</span>
            <span className="border-b-4 border-white px-4">E</span>
            <span className="border-b-4 border-white px-4">A</span>
            <span className="border-b-4 border-white px-4">M</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              A
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              I
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
              O
            </button>
          </div>
          <div className="mt-8">
            <p className="italic text-sm opacity-80">Hint: You drink it in the morning!</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatGameIs;