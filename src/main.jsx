import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Leaderboard from './Pages/Leaderboard.jsx'
import PlayAGame from './Pages/PlayAGame.jsx'
import ReportAProblem from './Pages/ReportAProblem.jsx'
import Login from './Pages/Login.jsx'
import StartAGame from './Pages/StartAGame.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/leaderboard' element={<Leaderboard/>} />
          <Route path='/play-a-game' element={<PlayAGame/>} />
          <Route path='/play-a-game/:level' element={<StartAGame/>} />
          {/* <Route path='/play-a-game/basic' element={<BasicLevel/>} />
          <Route path='/play-a-game/master' element={<MasterLevel/>} />
          <Route path='/play-a-game/guru' element={<GuruLevel/>} /> */}
          <Route path='/report-a-problem' element={<ReportAProblem/>} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)