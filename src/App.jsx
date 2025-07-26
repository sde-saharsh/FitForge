import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Workouts from './pages/workouts/Workouts';
import Profile from './pages/user/Profile';
import Beginner from './pages/workouts/Beginner';
import Intermediate from './pages/workouts/Intermediate';
import Advanced from './pages/workouts/Advance';

// Workout type pages
import FullBody from './pages/workouts/FullBody';
import UpperBody from './pages/workouts/UpperBody';
import LowerBody from './pages/workouts/LowerBody';
import Core from './pages/workouts/Core';
import Cardio from './pages/workouts/Cardio';
import Yoga from './pages/workouts/Yoga';

const App = () => {
  const [modeLight, setModeLight] = useState(() => {
    const mode = localStorage.getItem('mode');
    return mode !== 'dark'; // true if not dark
  });

  // Make sure html dark class is set/unset for Tailwind dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', !modeLight);
  }, [modeLight]);

  return (
    <div
      className={`min-h-screen transition-all ${
        modeLight
          ? 'bg-gray-50 text-gray-900'
          : 'bg-gray-950 text-white'
      }`}
    >
      <Navbar modeLight={modeLight} />
      <div className="pt-24 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/advanced" element={<Advanced />} />
          {/* Workout Types */}
          <Route path="/workouts/full-body" element={<FullBody />} />
          <Route path="/workouts/upper-body" element={<UpperBody />} />
          <Route path="/workouts/lower-body" element={<LowerBody />} />
          <Route path="/workouts/core" element={<Core />} />
          <Route path="/workouts/cardio" element={<Cardio />} />
          <Route path="/workouts/yoga" element={<Yoga />} />
          <Route
            path="/profile"
            element={
              <Profile modeLight={modeLight} setModeLight={setModeLight} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
