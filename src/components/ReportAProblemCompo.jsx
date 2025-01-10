import React, { useState } from 'react';

const ReportAProblemCompo = () => {
  const [problem, setProblem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (problem) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setProblem('');
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-200 to-yellow-300'>
      <h1 className='text-5xl font-extrabold mb-8 text-white drop-shadow-lg'>Report a Problem 🛠️</h1>
      <div className='w-full max-w-2xl p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300'>
        {submitted ? (
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-green-500'>Thank You! ✅</h2>
            <p className='text-gray-600 mt-4'>Your problem has been reported successfully. Our team will review it shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-xl font-medium text-gray-700 mb-2'>Describe the Problem:</label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className='w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none'
                placeholder='Explain the issue in detail...'
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300'>
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReportAProblemCompo;