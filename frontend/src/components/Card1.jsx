import React from "react";

const Card1 = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white mt-20">
      {/* Heading */}
      <div className="text-center px-4 sm:px-10">
        <h3 className="text-2xl font-bold">
          Learn to Code Through Real-World Projects
        </h3>
        <p className="max-w-4xl mx-auto mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
          At MohitDecodes, we focus on more than just theory — you’ll build
          practical skills through hands-on exercises that mirror real-world
          development. Whether you're a beginner or an experienced developer,
          our courses are designed to prepare you for real-life projects and
          professional success.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20 py-8 max-w-6xl mx-auto">
        {/* Web Development Card */}
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/25/12/16/mug-6966047_1280.jpg"
            alt="Web development"
            className="w-full h-48 object-cover hover:cursor-pointer"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Start your web development journey by learning HTML to create the
              structure of web pages, then use CSS to style and enhance them.
              Practice consistently to build real websites and grow into a
              professional developer.
            </p>
          </div>
        </div>

        {/* Data Science & AI Card */}
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
          <img
            src="https://media.istockphoto.com/id/1901664341/photo/powerful-ai-cpu-processing-data-glowing-data-signals-flowing.jpg?s=1024x1024&w=is&k=20&c=FMyZ-yfQjtWnEcdHGXQcbqTWZGrjEheD6_3WLPRe_RQ="
            alt="Data Science and AI"
            className="w-full h-48 object-cover hover:cursor-pointer"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Data Science & AI</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Start your journey in Data Science and AI by learning how data
              drives decisions. With Python and simple algorithms, you’ll begin
              solving real problems using smart technologies.
            </p>
          </div>
        </div>

        {/* DSA Card */}
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
          <img
            src="https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=612x612&w=0&k=20&c=MBhix9YGEH0JQ39j2K8Dp4mA-tZ4QMWFm6V90rJGRJg="
            alt="Data Structures and Algorithms"
            className="w-full h-48 object-cover hover:cursor-pointer"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Data Structures & Algorithms</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Begin your coding journey by mastering Data Structures and
              Algorithms. These essentials boost your logic and are key to
              cracking technical interviews with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="text-center mt-8 text-gray-700 dark:text-gray-300 text-base px-4">
        Take the first step today — start learning, building, and growing with MohitDecodes.
      </div>
    </div>
  );
};

export default Card1;
