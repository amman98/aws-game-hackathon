import React, { useState } from 'react';

const QuizCard = ({ quiz }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === quiz.answer);
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
              ${selectedOption
                ? option === quiz.answer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-200 hover:bg-blue-300'}
              transition-all`}
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
    </div>
  );
};

export default QuizCard;