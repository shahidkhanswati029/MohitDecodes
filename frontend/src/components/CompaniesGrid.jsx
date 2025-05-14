import React from "react";

const companies = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Goldman_Sachs.svg" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/EY_logo_2019.svg" },
  { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hitachi_logo.svg" },
  { name: "JPMorgan", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/JPMorgan_Chase_Logo_2008_1.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Dell_logo_2016.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Deloitte.svg" },
];

const CompaniesGrid = () => {
  return (
    <div className="py-16 text-center mt-20 bg-gray-200 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">
        Helped students achieve their dream job at
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 max-w-6xl mx-auto">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition rounded-lg flex items-center justify-center h-20 w-full p-4"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        + many more companies
      </p>
    </div>
  );
};

export default CompaniesGrid;
