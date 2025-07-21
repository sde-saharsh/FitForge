import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Workouts from './pages/Workouts';
import Profile from './pages/Profile';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advance';

// Import workout type pages
import FullBody from './pages/FullBody';
import UpperBody from './pages/UpperBody';
import LowerBody from './pages/LowerBody';
import Core from './pages/Core';
import Cardio from './pages/Cardio';
import Yoga from './pages/Yoga';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-all">
      <Navbar />
      <div className="pt-24 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/workouts" element={<Workouts />}/>
          <Route path="beginner" element={<Beginner />} />
          <Route path="intermediate" element={<Intermediate />} />
          <Route path="advanced" element={<Advanced />} />

          {/* Workout Types */}
          <Route path="/workouts/full-body" element={<FullBody />} />
          <Route path="/workouts/upper-body" element={<UpperBody />} />
          <Route path="/workouts/lower-body" element={<LowerBody />} />
          <Route path="/workouts/core" element={<Core />} />
          <Route path="/workouts/cardio" element={<Cardio />} />
          <Route path="/workouts/yoga" element={<Yoga />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
