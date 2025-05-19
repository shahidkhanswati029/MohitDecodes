// src/pages/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 'react',
    title: 'React Tutorial',
    description: 'Learn how to build dynamic web apps with React from scratch.',
  },
  {
    id: 'css',
    title: 'CSS Tutorial',
    description: 'Master the art of styling websites using modern CSS.',
  },
  {
    id: 'github-copilot',
    title: 'GitHub with Copilot',
    description: 'Boost productivity with GitHub Copilot, your AI pair programmer.',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Explore the world of data using Python, Pandas, and machine learning.',
  },
];

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4 mt-10">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">{course.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{course.description}</p>
          </div>
          <Link
            to={`/course/${course.id}`}
            className="self-start inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-medium px-6 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition duration-200"
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
