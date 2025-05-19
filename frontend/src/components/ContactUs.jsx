import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:flex md:gap-10 items-start">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          You can also contact us at <br />
          <span className="font-semibold text-black dark:text-white">contact@mohitdecodes.com</span> for any payment or course access related queries.
        </p>
        <img
          src="/your-image-path.png" // Replace with actual path or URL
          alt="Contact Visual"
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>

      {/* Right Section - Contact Form */}
      <form
        className="mt-10 md:mt-0 md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Your 10-digit Indian Number"
            pattern="[0-9]{10}"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <textarea
            placeholder="Type your message here."
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
