import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      country: 'USA',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 5,
      review: "This game is absolutely amazing! I couldn't stop playing. The levels are challenging and fun. I highly recommend it to anyone who loves word games!",
    },
    {
      name: 'Jane Smith',
      country: 'Canada',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 4,
      review: "Great game! The difficulty levels are well-balanced, and I love how I can improve my vocabulary while having fun. I would give it a 5 if there were more levels!",
    },
    {
      name: 'Ali Hassan',
      country: 'Pakistan',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 5,
      review: "An excellent game to test your word skills. The Guru level is a real challenge, and I love it. It really makes you think and expand your vocabulary.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Players Are Saying</h2>
        <p className="text-xl text-gray-600">Here’s what some of our players think about the game!</p>
      </div>

      {/* Use gap-10 to define a consistent gap between the cards */}
      <div className="flex justify-center gap-2 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto mb-8 flex flex-col items-center justify-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.country}</p>

            {/* Rating */}
            <div className="flex justify-center my-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={i < testimonial.rating ? 'yellow' : 'gray'}
                  className="mr-1"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;