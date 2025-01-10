import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import Navbar from '../CommonComponents/Navbar'

const Login = () => {
  return (
    <>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen">
          <SignIn/>
        </div>
    </>
  )
}

export default Login