import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../CommonComponents/Navbar';
import QuizCard from '../components/QuizCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import quiz data
import basicQuizData from './Levels/Basic.json';
import masterQuizData from './Levels/Master.json';
import guruQuizData from './Levels/Guru.json';

const StartAGame = () => {
  const { level } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Based on the level, set the appropriate quiz data
    if (level === 'basic') {
      setQuizzes(basicQuizData);
    } else if (level === 'master') {
      setQuizzes(masterQuizData);
    } else if (level === 'guru') {
      setQuizzes(guruQuizData);
    }
  }, [level]);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
        if(level === 'basic')
        {
            setScore(score + 2);
        }
        else if(level === 'master')
        {
            setScore(score + 5);
        }
        else{
            setScore(score + 10);
        }
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
  };

  const handleSubmit = () => {
    const userId = localStorage.getItem('userId');

    axios.put(`http://localhost:3001/${userId}`, {
      score: score
    })
      .then(response => {
        console.log('Score updated:', response.data);
        navigate('/leaderboard');  // Redirect to leaderboard
      })
      .catch(error => {
        console.error('Error updating score:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 py-10 relative">
        <div className="absolute top-5 right-10 text-2xl text-white font-semibold">
          {quizzes.length > 0 && (
            <>
              <span>
                {currentIndex >= quizzes.length
                  ? `${quizzes.length}/${quizzes.length}`
                  : `${currentIndex + 1}/${quizzes.length}`}
              </span>
              <div className="text-lg mt-2">Score: {score}</div>
            </>
          )}
        </div>

        <div className="text-center text-white mb-10">
          <h1 className="text-5xl font-extrabold">🔥 {level.charAt(0).toUpperCase() + level.slice(1)} Level Quizzes</h1>
          <p className="text-lg mt-4">
            Answer the {level} level quizzes below and get 
            {level === 'basic' ? '+2' : level === 'master' ? '+5' : level === 'guru' ? '+10' : ''} points!
          </p>
        </div>

        <div className="flex justify-center">
          {quizzes.length > 0 && currentIndex < quizzes.length ? (
            <QuizCard
              quiz={quizzes[currentIndex]}
              onCorrectAnswer={(isCorrect) => handleCorrectAnswer(isCorrect)}
            />
          ) : (
            <div className="text-center mt-10">
              <p className="text-3xl text-white font-semibold mb-6">
                🎉 Quiz Completed!
              </p>
              <div className="space-x-4">
                <button
                  onClick={handleRetry}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  🔄 Retry
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >
                  ➡️ Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartAGame;