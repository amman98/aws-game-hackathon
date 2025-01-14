import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Leaderboard from './Pages/Leaderboard.jsx'
import PlayAGame from './Pages/PlayAGame.jsx'
import ReportAProblem from './Pages/ReportAProblem.jsx'
import StartAGame from './Pages/StartAGame.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/play-a-game' element={<PlayAGame/>} />
        <Route path='/play-a-game/:level' element={<StartAGame/>} />
        <Route path='/report-a-problem' element={<ReportAProblem/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)