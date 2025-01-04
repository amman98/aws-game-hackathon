import React, { useEffect, useState } from 'react';
import Navbar from '../../../CommonComponents/Navbar';
import QuizCard from '../../../Components/QuizCard.jsx';

const Basic = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/src/Pages/Levels/basic/Basic.json')
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error('Failed to load quizzes:', err));
  }, []);

  const handleNextQuiz = () => {
    if (currentIndex < quizzes.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000); // Delay for 2 seconds
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 py-10 relative'>
        <div className='absolute top-5 right-10 text-2xl text-white font-semibold'>
          {quizzes.length > 0 && (
            <span>{currentIndex + 1}/{quizzes.length}</span>
          )}
        </div>
        <div className='text-center text-white mb-10'>
          <h1 className='text-5xl font-extrabold'>🔥 Basic Level Quizzes</h1>
          <p className='text-lg mt-4'>Answer the quizzes below and score points!</p>
        </div>

        <div className='flex justify-center'>
          {quizzes.length > 0 && (
            <QuizCard
              quiz={quizzes[currentIndex]}
              onCorrectAnswer={handleNextQuiz}  // Pass function to QuizCard
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Basic;