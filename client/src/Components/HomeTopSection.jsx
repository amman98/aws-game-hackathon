import React from 'react';

const HomeTopSection = () => {
  return (
    <div className="w-full h-max overflow-hidden relative">
      {/* Image with custom blur effect */}
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/127c3874614871.5c353a7208a5a.jpg"
        className="w-[1600px] max-h-full object-cover filter blur-[2px]" // Added blur here
        alt=""
      />
      
      {/* Moving Text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-black font-extrabold text-3xl md:text-5xl animate-marquee">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-500 bg-clip-text lg:text-[100px] lg:whitespace-nowrap text-transparent">
              Welcome to <span className="">Word Quest</span></h1>
      </div>
    </div>
  );
};

export default HomeTopSection;