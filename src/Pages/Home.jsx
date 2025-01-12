import React, { useState, useEffect } from 'react';
import Navbar from '../CommonComponents/Navbar';
import HomeTopSection from '../components/HomeTopSection';
import WhatGameIs from '../components/WhatGameIs';
import Footer from '../CommonComponents/Footer';
import { useUser } from '@clerk/clerk-react';
import PopUpCard from '../components/PopUpCard';

const Home = () => {
  const { isSignedIn } = useUser();
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const gameUserName = localStorage.getItem('gameUserName');
    if (isSignedIn && !gameUserName) {
      setShowPopUp(true);
    }
  }, [isSignedIn]);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <>
      {showPopUp && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
          <PopUpCard onClose={handleClosePopUp} />
        </div>
      )}

      <div className="">
        <Navbar />
      </div>
      <div className="relative">
        <HomeTopSection />
      </div>
      <div className="">
        <WhatGameIs />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;