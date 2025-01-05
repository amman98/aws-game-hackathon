import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../CommonComponents/Navbar';
import QuizCard from '../../../Components/QuizCard.jsx';

const Guru = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();  // For redirection

  useEffect(() => {
    fetch('/src/Pages/Levels/guru/Guru.json')
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error('Failed to load quizzes:', err));
  }, []);

  const handleNextQuiz = () => {
    if (currentIndex < quizzes.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000);  // Delay for the next quiz
    } else {
      // Show buttons after the last quiz
      setTimeout(() => {
        setCurrentIndex(quizzes.length);  // Move index out of bounds to trigger buttons
      }, 3000);
    }
  };


  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);  // Increment score by 10 only if correct
    }
    handleNextQuiz();
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
  };

  const handleSubmit = () => {
    navigate('/leaderboard');  // Redirect to leaderboard
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 py-10 relative'>
        <div className='absolute top-5 right-10 text-2xl text-white font-semibold'>
          {quizzes.length > 0 && (
            <>
              <span>{currentIndex + 1}/{quizzes.length}</span>
              <div className='text-lg mt-2'>Score: {score}</div>
            </>
          )}
        </div>

        <div className='text-center text-white mb-10'>
          <h1 className='text-5xl font-extrabold'>🔥 Guru Level Quizzes</h1>
          <p className='text-lg mt-4'>Answer the quizzes below and score points!</p>
        </div>

        <div className='flex justify-center'>
          {quizzes.length > 0 && currentIndex < quizzes.length ? (
            <QuizCard
              quiz={quizzes[currentIndex]}
              onCorrectAnswer={(isCorrect) => handleCorrectAnswer(isCorrect)}
            />
          ) : (
            <div className='text-center mt-10'>
              <p className='text-3xl text-white font-semibold mb-6'>
                🎉 Quiz Completed!
              </p>
              <div className='space-x-4'>
                <button
                  onClick={handleRetry}
                  className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
                >
                  🔄 Retry
                </button>
                <button
                  onClick={handleSubmit}
                  className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700'
                >
                  ➡️ Submit
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default Guru;