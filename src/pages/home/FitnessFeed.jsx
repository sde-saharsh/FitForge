import React from 'react';

const fitnessFeed = [
  {
    type: 'article',
    title: "How to Beat Workout Boredom",
    description: "5 creative ways to keep your routine fresh and fun.",
    image: "/images/tip-boredom.jpg",
    link: "/articles/workout-boredom",
  },
  {
    type: 'event',
    title: "Sunday Group Run",
    description: "Join us for a 5K run this weekend in Central Park.",
    image: "/images/group-run.jpg",
    link: "/events/sunday-run",
  },
  {
    type: 'highlight',
    title: "Trending: Yoga Flow",
    description: "This week's most popular yoga session. Try it!",
    image: "/images/yoga-flow.jpg",
    link: "/explore/yoga-flow",
  },
];

const FitnessFeed = () => (
  <section className="mt-12 px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white px-2">
      Explore Highlights
    </h2>

    {/* Horizontal scroll container on small screens, grid on md+ */}
    <div
      className="flex flex-col gap-6 pb-4 md:grid md:grid-cols-3 md:gap-8"
      style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
    >
      {fitnessFeed.map((item, idx) => (
        <a
          href={item.link}
          key={idx}
          className="snap-start min-w-[260px] sm:min-w-[280px] md:min-w-0 max-w-xs md:max-w-none flex-shrink-0 
            bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 
            border border-transparent dark:border-gray-700 
            flex flex-col"
          style={{ textDecoration: 'none' }}
          aria-label={`${item.type} - ${item.title}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded-t-xl"
            loading="lazy"
          />
          <div className="p-4 flex flex-col flex-grow">
            <div className="text-xs uppercase tracking-wide text-sky-500 font-semibold mb-1 select-none">
              {item.type === 'article' && 'Article'}
              {item.type === 'event' && 'Event'}
              {item.type === 'highlight' && 'Trending'}
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white flex-grow">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>
            <span className="text-sky-600 dark:text-sky-400 text-sm font-semibold hover:underline">
              Read more →
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FitnessFeed;
