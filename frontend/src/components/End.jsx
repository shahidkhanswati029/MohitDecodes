import React from "react";
import { useNavigate } from "react-router-dom";

const End = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center min-h-[70vh] flex items-center justify-center text-center px-4 dark:bg-gray-900"
      style={{
        backgroundImage: `url('/your-image-path.png')`, // Replace with actual path or import
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-gray-900"></div>

      <div className="relative z-10 text-white max-w-2xl dark:bg-gray-900">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Start Your Coding Journey
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Learn coding step-by-step with India's most loved programming mentor.
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default End;
