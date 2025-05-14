import React from "react";
import { TbEgg } from "react-icons/tb";
import { GiLevelFourAdvanced, GiTeacher } from "react-icons/gi";
import { BiDollar, BiSupport } from "react-icons/bi";
import { MdOutlineAccessTime } from "react-icons/md";

const Card2 = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold">Courses</h2>
        <p className="text-xl sm:text-2xl font-semibold mt-2">
          Master coding with our structured learning paths
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Beginner Friendly */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <TbEgg className="text-6xl text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Learn programming from the ground up with step-by-step guidance for total beginners.
          </p>
        </div>

        {/* Advanced Concepts */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <GiLevelFourAdvanced className="text-6xl text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Advanced Concepts</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Explore real-world projects and master complex tech topics with ease.
          </p>
        </div>

        {/* Affordable Pricing */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <BiDollar className="text-6xl text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Learn without the stress of high fees — quality education made budget-friendly.
          </p>
        </div>

        {/* Expert Instructors */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <GiTeacher className="text-6xl text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Courses are taught by seasoned developers and industry professionals.
          </p>
        </div>

        {/* Flexible Learning */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <MdOutlineAccessTime className="text-6xl text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Study at your own pace with lifetime access to all course materials.
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <BiSupport className="text-6xl text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Our team is always here to help with doubts, feedback, or technical issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
