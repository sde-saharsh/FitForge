import React, { useReducer, useEffect } from 'react';
import { FaWeight, FaVenusMars, FaUser, FaRulerVertical, FaBirthdayCake, FaSave } from 'react-icons/fa';

const initialUser = {
  img: '',
  name: 'Saharsh',
  about: 'Fitness enthusiast',
  age: '21',
  weight: '65',
  height: '151'
};

const reducer = (state, action) => ({
  ...state,
  [action.type]: action.val
});

const calculateBMI = (weight, height) => {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  return isNaN(bmi) ? 'N/A' : bmi.toFixed(2);
};

const Profile = () => {
  const [state, dispatch] = useReducer(reducer, () => {
    const local = localStorage.getItem('fitness_profile');
    return local ? JSON.parse(local) : initialUser;
  });

  const bmi = calculateBMI(parseFloat(state.weight), parseFloat(state.height));

  const handleSave = () => {
    localStorage.setItem('fitness_profile', JSON.stringify(state));
    alert('Profile saved!');
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl">
      {/* Profile Image & Name */}
      <div className="text-center mb-6">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 dark:border-yellow-400 mb-3"
        />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{state.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{state.about}</p>
      </div>

      {/* Info Fields */}
      <div className="space-y-4">
        {/* Name */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaUser /> Name
          </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ val: e.target.value, type: 'name' })}
            className="mt-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
          />
        </div>

        {/* About */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaVenusMars /> About
          </label>
          <input
            type="text"
            value={state.about}
            onChange={(e) => dispatch({ val: e.target.value, type: 'about' })}
            className="mt-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
          />
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaBirthdayCake /> Age
          </label>
          <input
            type="number"
            value={state.age}
            onChange={(e) => dispatch({ val: e.target.value, type: 'age' })}
            className="mt-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaWeight /> Weight (kg)
          </label>
          <input
            type="number"
            value={state.weight}
            onChange={(e) => dispatch({ val: e.target.value, type: 'weight' })}
            className="mt-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
          />
        </div>

        {/* Height */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaRulerVertical /> Height (cm)
          </label>
          <input
            type="number"
            value={state.height}
            onChange={(e) => dispatch({ val: e.target.value, type: 'height' })}
            className="mt-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
          />
        </div>

        {/* BMI Display */}
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            Your BMI: <span className="text-blue-600">{bmi}</span>
          </p>
        </div>

        {/* Save Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition"
          >
            <FaSave /> Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
