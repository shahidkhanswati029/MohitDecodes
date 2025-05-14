import React from 'react';

const TutorialCard = ({tutorial}) => {
  return (
    <div className="bg-[#0c111f] text-white p-6 rounded-2xl shadow-md border border-gray-700 w-full max-w-xs text-center hover:scale-105 transition-transform">
      <img src={tutorial.icon} alt={tutorial.title} className="w-20 h-20 mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{tutorial.title}</h2>
      <p className="text-sm text-gray-400 mb-4 line-clamp-3">{tutorial.description}</p>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200">
        Start Learning!
      </button>
    </div>
  );
};

export default TutorialCard;
