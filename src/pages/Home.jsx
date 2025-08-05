import React, { useEffect, useState } from 'react';
import FitnessFeed from './home/FitnessFeed';

const motivationalQuotes = [
  "Your journey to a stronger you starts now.",
  "Every workout counts—keep going!",
  "Consistency is the key to results.",
  "Progress, not perfection.",
  "Sweat, smile, repeat.",
  "Believe in yourself—you’ve got this!",
];

const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [userName, setUserName] = useState('');

  // Cycle through quotes every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Load username from localStorage only once
  useEffect(() => {
    const fitness_profile = localStorage.getItem('fitness_profile');
    const name = fitness_profile ? JSON.parse(fitness_profile).name : '';
    setUserName(name || 'Champion'); // Default fallback
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-6 py-20   transition-colors duration-700">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg">
          Let’s move, <span className="text-sky-600 dark:text-sky-400">{userName}</span>!
        </h1>
        <div className="w-24 h-1 bg-sky-500 rounded mx-auto mt-4 mb-10 shadow-lg"></div>
        <p
          key={quoteIndex}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 max-w-xl mx-auto 
          transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn"
          style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}
        >
          {motivationalQuotes[quoteIndex]}
        </p>
      </div>

      {/* Add this style block to define the fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation-name: fadeIn;
          }
        `}
      </style>


      <FitnessFeed />
    </div>
  );
};

export default Home;
