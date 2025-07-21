import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const levels = [
  {
    name: 'Beginner',
    img: './begineer.jpg',
    path: '/beginner',
  },
  {
    name: 'Intermediate',
    img: './intermediate.jpg',
    path: '/intermediate',
  },
  {
    name: 'Advanced',
    img: './advance.jpg',
    path: '/advanced',
  }
];

const types = [
  {
    name: 'Full Body',
    img: 'https://source.unsplash.com/featured/?fullbody,exercise',
    path: '/workouts/full-body'
  },
  {
    name: 'Upper Body',
    img: 'https://source.unsplash.com/featured/?upperbody,workout',
    path: '/workouts/upper-body'
  },
  {
    name: 'Lower Body',
    img: 'https://source.unsplash.com/featured/?legs,workout',
    path: '/workouts/lower-body'
  },
  {
    name: 'Core',
    img: 'https://source.unsplash.com/featured/?core,abs',
    path: '/workouts/core'
  },
  {
    name: 'Cardio',
    img: 'https://source.unsplash.com/featured/?cardio,running',
    path: '/workouts/cardio'
  },
  {
    name: 'Yoga',
    img: 'https://source.unsplash.com/featured/?yoga,meditation',
    path: '/workouts/yoga'
  }
];

const Workouts = () => {
  return (
    <div className="p-6 min-h-screen w-[90%] md:w-[80%] m-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Workout Levels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {levels.map((level) => (
          <Link
            key={level.name}
            to={level.path}
            className="bg-[#101828] shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img src={level.img} alt={level.name} className="h-40 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-blue-600">{level.name}</h3>
              <p className="text-gray-400 mt-2">Perfect for {level.name.toLowerCase()} level athletes.</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-6 text-white">Workout Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {types.map((type) => (
          <Link
            key={type.name}
            to={type.path}
            className="bg-[#101828] shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={type.img} alt={type.name} className="h-40 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-green-500">{type.name}</h3>
              <p className="text-gray-400 mt-2">Focused routines to target {type.name.toLowerCase()}.</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Workouts;
