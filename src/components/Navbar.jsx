import React from 'react';
import { motion } from 'framer-motion';
import { Home, Rocket, LayoutGrid, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabItems = [
    { id: '/', label: 'Home', icon: <Home size={20} /> },
    { id: '/explore', label: 'Explore', icon: <Rocket size={20} /> },
    { id: '/workouts', label: 'Workouts', icon: <LayoutGrid size={20} /> },
    { id: '/profile', label: 'Profile', icon: <User size={20} /> },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 text-black dark:text-white rounded-full px-3 py-2 flex justify-between items-center shadow-lg w-[90%] max-w-md border dark:border-gray-700 z-50">
      {tabItems.map((tab) => {
        const isActive = location.pathname === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.id)}
            className="relative flex items-center justify-center h-10 transition-all duration-300 px-3"
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <div className="flex items-center space-x-2 z-10">
              <span className="text-cyan-600 dark:text-cyan-400">
                {tab.icon}
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  className="text-sm font-medium text-cyan-700 dark:text-cyan-300"
                >
                  {tab.label}
                </motion.span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
