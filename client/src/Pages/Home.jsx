import React from 'react'
import Navbar from '../CommonComponents/Navbar'
import HomeTopSection from '../Components/HomeTopSection'
import WhatGameIs from '../Components/WhatGameIs'
import Levels from '../Components/Levels'
import Footer from '../CommonComponents/Footer'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <>
        <div className="">
            <Navbar/>
        </div>
        <div className="relative">
            <HomeTopSection/>
        </div>
        <div className="">
          <WhatGameIs/>
        </div>
        <div className="">
          <Levels/>
        </div>
        <div className="">
          <Testimonials/>
        </div>
        <div className="">
          <Footer/>
        </div>
    </>
  )
}

export default Home