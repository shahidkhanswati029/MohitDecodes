import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const tutorials = [
  "PHP Tutorial", "C++ Tutorial", "Java Tutorial",
  "React JS Tutorial", "C Tutorial", "Python Tutorial",
  "JavaScript Tutorial", "CSS Tutorial", "HTML Tutorial"
];

const TutorialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white shadow rounded-md font-semibold dark:text-black"
      >
        Tutorials ⌄
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-[90vw] max-w-md sm:max-w-xl max-h-[80vh] overflow-y-auto bg-white rounded-md shadow-lg border z-50 p-4 dark:text-black">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
          >
            <IoMdClose size={20} />
          </button>

          {/* Grid of Tutorial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {tutorials.map((title, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-400 to-gray-500 text-white p-4 rounded-lg text-center text-sm font-semibold cursor-pointer hover:brightness-110 transition"
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialPopup;
