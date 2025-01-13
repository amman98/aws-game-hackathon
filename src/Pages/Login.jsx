import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import Navbar from '../CommonComponents/Navbar'

const Login = () => {
  return (
    <>
      <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <SignIn />
        </div>
      </ClerkProvider>
    </>
  )
}

export default Login