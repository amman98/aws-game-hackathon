import React from 'react';

const HomeTopSection = () => {
  return (
    <div className='w-full h-max overflow-hidden relative'>
      {/* Image with custom blur and restricted size */}
      <img 
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/127c3874614871.5c353a7208a5a.jpg" 
        className='w-[1600px] max-h-full object-cover' 
        alt=""
      />
    </div>
  );
};

export default HomeTopSection;
