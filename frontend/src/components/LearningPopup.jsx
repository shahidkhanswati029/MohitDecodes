import React, { useState, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';

const LearningPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block z-50 ml-20 pl-10">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white shadow rounded-md font-semibold dark:text-black"
      >
        Start Learning ⌄
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute left-1/2 -translate-x-1/2 mt-2 w-[90vw] sm:w-96 max-w-md bg-white rounded-md shadow-lg border p-6 z-50"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
          >
            <IoMdClose size={20} />
          </button>

          {/* Header */}
          <div className="bg-gray-100 p-4 rounded-md mb-4 dark:text-gray-600">
            <h2 className="text-xl font-bold mb-1">MohitDecode</h2>
            <p className="text-sm text-gray-600">
              Learn and explore programming with easy-to-follow tutorials and resources.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md">
              Blogs
            </button>
            <button className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md">
              Notes
            </button>
            <button className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md">
              Courses
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPopup;
