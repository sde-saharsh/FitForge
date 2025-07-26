import React, { useEffect, useState } from 'react';
import {
  FaWeight,
  FaVenusMars,
  FaUser,
  FaRulerVertical,
  FaBirthdayCake,
  FaSave,
} from 'react-icons/fa';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

const Profile = ({ modeLight, setModeLight }) => {
  const [displayProfile, setDisplayProfile] = useState({
    name: '',
    about: '',
    age: '',
    weight: '',
    height: '',
  });

  const [inputs, setInputs] = useState({
    name: '',
    about: '',
    age: '',
    weight: '',
    height: '',
  });

  // Load saved profile data on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('fitness_profile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setInputs(profile);
      setDisplayProfile(profile);
    }
  }, []);

  // Save mode preference to localStorage and toggle Tailwind 'dark' class
  useEffect(() => {
    localStorage.setItem('mode', modeLight ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', !modeLight);
  }, [modeLight]);

  const handleSave = () => {
    if (!inputs.name.trim()) {
      alert('Name cannot be empty!');
      return;
    }
    localStorage.setItem('fitness_profile', JSON.stringify(inputs));
    setDisplayProfile(inputs);
    alert('Profile saved!');
  };

  const calculateBMI = (weight, height) => {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    return isNaN(bmi) ? 'N/A' : bmi.toFixed(2);
  };

  const bmi = calculateBMI(
    parseFloat(displayProfile.weight),
    parseFloat(displayProfile.height)
  );

  return (
    <div className={`${modeLight ? 'bg-gray-50' : 'bg-gray-950'} min-h-screen py-10 px-4 transition-colors`}>
      <div
        className={`max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl 
        ${modeLight ? 'bg-white' : 'bg-opacity-80 bg-gray-800 backdrop-blur-xl border border-gray-700'}`}
      >
        {/* Profile Header */}
        <div className="text-center mb-8">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className={`w-32 h-32 rounded-full mx-auto border-4 mb-3 shadow-lg
              ${modeLight ? 'border-sky-500 text-gray-900' : 'border-yellow-400 text-white'}
              hover:scale-105 transition-transform duration-150`}
          />
          <h2 className="text-3xl font-extrabold ">
            {displayProfile.name || 'Your Name'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {displayProfile.about || 'About You'}
          </p>
        </div>


        {/* Input Fields */}
        <div className="space-y-5">
          {[
            { label: 'Name', icon: <FaUser />, type: 'name' },
            { label: 'About', icon: <FaVenusMars />, type: 'about' },
            { label: 'Age', icon: <FaBirthdayCake />, type: 'age' },
            { label: 'Weight (kg)', icon: <FaWeight />, type: 'weight' },
            { label: 'Height (cm)', icon: <FaRulerVertical />, type: 'height' },
          ].map(({ label, icon, type }) => (
            <div key={type} className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {icon} {label}
              </label>
              <input
                type={type === 'age' || type === 'weight' || type === 'height' ? 'number' : 'text'}
                value={inputs[type]}
                onChange={(e) => setInputs({ ...inputs, [type]: e.target.value })}
                className={`
                  mt-1 px-3 py-2 rounded-lg outline-none border border-transparent 
                  transition-all duration-200 shadow-sm
                  ${modeLight
                    ? 'bg-gray-100 focus:bg-white text-gray-900 focus:ring-2 focus:ring-sky-400'
                    : 'bg-gray-700 text-white focus:bg-gray-800 border-gray-600 focus:ring-2 focus:ring-yellow-400'
                  }
                `}
                min={type === 'age' || type === 'weight' || type === 'height' ? 0 : undefined}
              />
            </div>
          ))}
        </div>

        {/* BMI */}
        <div className="mt-7 text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Your BMI: <span className="text-sky-500">{bmi}</span>
          </p>
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            disabled={!inputs.name.trim()}
            className={`
              inline-flex items-center gap-2 px-6 py-2 rounded-full shadow-lg transition-all duration-200
              ${
                inputs.name.trim()
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-600 text-white'
                  : 'bg-gray-400 cursor-not-allowed text-white'
              }
            `}
          >
            <FaSave /> Save Profile
          </button>
        </div>

        {/* Mode Toggle Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setModeLight(!modeLight)}
            className={`
              inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-md border text-base font-semibold transition-all duration-200
              ${
                modeLight
                  ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200'
                  : 'bg-yellow-300 text-yellow-900 hover:bg-yellow-200 border-yellow-400'
              }
            `}
          >
            {modeLight ? <BsMoonStarsFill /> : <BsSunFill />}
            Switch to {modeLight ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
