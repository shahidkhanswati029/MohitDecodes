import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const phrases = [
    "Learn C Programming",
    "Learn JavaScript",
    "Learn Python",
    "Master Data Structures",
    "Crack Coding Interviews",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl w-full text-center">
        {/* Top Badge */}
        <div className="inline-block mb-4 px-4 py-2 bg-gray-200 dark:bg-white/10 text-sm font-medium rounded-full backdrop-blur-sm transition-colors duration-300">
          Learn coding the right way
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="text-gray-600 dark:text-gray-300">MohitDecode</span>
        </h1>

        {/* Typing Text */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 px-4 sm:px-10">
          Not sure which course to start with? We’re here to help! Explore a
          wide range of courses and find the perfect fit for your learning
          journey — all for free.{" "}
          <strong className="text-black dark:text-white">MohitDecode</strong> is
          my initiative to simplify complex coding concepts that took me years
          to learn, and present them in a way that's easy to understand.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Explore Courses
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition duration-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
            Read Articles
          </button>
        </div>

        {/* Stats */}
        <div className="text-base font-medium text-gray-800 dark:text-gray-200 flex flex-wrap gap-6 items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded-md max-w-xl mx-auto">
          <div>
            📘 Courses: <span className="font-bold">50+</span>
          </div>
          <div>
            🎓 Students: <span className="font-bold">100+</span>
          </div>
          <div>
            ⭐ Rating: <span className="font-bold">(50+ reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
