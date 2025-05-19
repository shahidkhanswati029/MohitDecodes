import React from 'react';

const courses = [
  {
    title: "React Course",
    description:
      "Dive into the world of modern frontend development with this hands-on React course. Learn components, hooks, props, state management, and more—step by step.",
    playlistUrl:
      "https://www.youtube.com/embed/videoseries?list=PLsjpRo2EZP1KK2XFRx8ByU3ZZDRCZcJV6",
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">Courses</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={course.playlistUrl}
                title={course.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
