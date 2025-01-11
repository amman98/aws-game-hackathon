import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <div className='flex justify-between items-center bg-yellow-500 py-2 px-5 relative'>
      
      {/* Hamburger Icon - Shows below 640px */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Menu (Visible on larger screens or when menuOpen) */}
      <div className={`flex flex-col sm:flex-row gap-5 absolute sm:static top-12 left-0 w-full sm:w-auto bg-yellow-500 sm:bg-transparent p-5 sm:p-0 ${menuOpen ? 'flex' : 'hidden'} sm:flex z-10`}>
        <Link to={'/'}>
          <h1 className='p-1 px-3 rounded-xl cursor-pointer font-bold hover:bg-yellow-900 hover:text-white transition'>Home</h1>
        </Link>
        <Link to={'/play-a-game'}>
          <h1 className='p-1 px-3 rounded-xl cursor-pointer font-bold hover:bg-yellow-900 hover:text-white transition'>Play Game</h1>
        </Link>
        <Link to={'/leaderboard'}>
          <h1 className='p-1 px-3 rounded-xl cursor-pointer font-bold hover:bg-yellow-900 hover:text-white transition'>Leaderboard</h1>
        </Link>
        <Link to={'/report-a-problem'}>
          <h1 className='p-1 px-3 rounded-xl cursor-pointer font-bold hover:bg-yellow-900 hover:text-white transition'>Report</h1>
        </Link>
      </div>

      {/* User Profile or Sign-In */}
      <div className="flex items-center">
        {isSignedIn ? (
            <UserButton afterSignOutUrl="/login" />
        ) : (
          <Link to="/login" className="font-bold hover:text-white">
            Sign In
          </Link>
        )}
      </div>

    </div>
  );
}

export default Navbar;