import React from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Leaderboard from './pages/Leaderboard';
import PlayAGame from './Pages/PlayAGame';
import ReportAProblem from './Pages/ReportAProblem';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/play-a-game" element={<PlayAGame />} />
        <Route path="/report-a-problem" element={<ReportAProblem />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
);