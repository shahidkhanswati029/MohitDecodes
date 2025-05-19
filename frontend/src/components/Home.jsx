import React from 'react';
import HeroSection from './HeroSection';
import Card1 from "./Card1"
import CompaniesGrid from './CompaniesGrid';
import Card2 from './Card2';
import End from './End';
const Home = () => {
  return (
    <div className="px-4 py-4">
      
      {/* Hero Section */}
      <div className="mb-6 mt-10 md:mt-0 ">
        <HeroSection />
        <Card1 />
        <CompaniesGrid/>
        <Card2/>
        <End/>
      </div>
    </div>
  );
};

export default Home;
