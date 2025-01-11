import React, { useState } from 'react';

const QuizCard = ({ quiz, onCorrectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [lockSelection, setLockSelection] = useState(false);

  const handleSelect = (option) => {
    if (lockSelection) return;

    setSelectedOption(option);
    const correct = option === quiz.answer;
    setIsCorrect(correct);
    setLockSelection(true);
    let timer = 3;
    setCountdown(timer);

    const interval = setInterval(() => {
      timer--;
      setCountdown(timer);
      if (timer === 0) {
        clearInterval(interval);
        onCorrectAnswer(correct);  // Pass correctness to parent component
        resetState();
      }
    }, 800);
  };

  const resetState = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCountdown(null);
    setLockSelection(false);
  };

  return (
    <div className='w-96 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all'>
      <h3 className='text-2xl font-semibold mb-4'>{quiz.question}</h3>
      <div className='space-y-3'>
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            className={`w-full p-3 rounded-md 
              ${
                selectedOption
                  ? option === quiz.answer
                    ? isCorrect && selectedOption === option
                      ? 'bg-green-500 text-white'
                      : selectedOption === option
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200'
                    : 'bg-gray-200'
                  : 'bg-gray-200 hover:bg-blue-300'
              }
              transition-all`}
            disabled={lockSelection}
          >
            {option}
          </button>
        ))}
      </div>
      
      {selectedOption && (
        <p className={`mt-4 font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? 'Correct!' : 'Wrong Answer'}
        </p>
      )}
      
      {countdown !== null && (
        <p className='mt-2 text-sm text-gray-500'>Next quiz in {countdown}...</p>
      )}
    </div>
  );
};

export default QuizCard;