import React, { useState } from 'react';
import axios from 'axios';

const PopUpCard = ({ onClose }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = () => {
    if (name.trim() === '') {
      setError(true);
      setErrorMessage('Username is required!')
      return;
    }

    
    axios.post('https://ss970w5kfh.execute-api.us-west-2.amazonaws.com/prod/users', {
      username: name  // This sends the name in the request body
    })
      .then((response) => {
        if(response.data && response.data.id) {
          localStorage.setItem('userId', response.data.id);
          console.log(response.data);
          localStorage.setItem('gameUserName', name);
          onClose();  // Close the popup
        } else {
          console.error('No user ID received in response');
        }
      })
      .catch((error) => {
        setError(true);
        if (error.response && error.response.status === 500) {
          // Handle duplicate username case
          setErrorMessage('Username is already in use.');
        } else {
          console.error('Failed to post the data: ', error);
          setErrorMessage('An error occurred. Please try again.');
        }
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="bg-gradient-to-br from-yellow-500 via-yellow-700 to-yellow-500 p-14 rounded-xl shadow-2xl border-[1px] border-yellow-800">
        <h1 className='font-bold text-[25px]'>
          Enter your <span className='text-white'>username</span> for the Game
        </h1>
        <input
          type="text"
          placeholder='Jake, Paul or Taha...'
          className={`border-[2px] border-yellow-800 w-full p-2 rounded-xl mt-3 ${error ? 'border-red-500' : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className='text-red-500 mt-1'>{errorMessage}</p>}
        <p className='text-white mt-2'>
          Note: The name you enter will be displayed in the <span className='font-bold'>LeaderBoard</span> Section.
        </p>
        <button
          className='bg-gradient-to-bl from-yellow-200 via-yellow-600 to-yellow-200 w-full p-3 rounded-2xl mt-5 hover:scale-105 hover:shadow-xl transition-transform duration-300 font-semibold text-white'
          onClick={handleSubmit}
        >
          Submit 🚀
        </button>
      </div>
    </div>
  );
};

export default PopUpCard;