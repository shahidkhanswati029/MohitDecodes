import React from 'react';
import LearningPopup from './LearningPopup';
import TutorialPopup from './TutorialPopup';
import HeroSection from './HeroSection';
import Card1 from '../Card1';
import CompaniesGrid from './CompaniesGrid';
import Card2 from './Card2';
import End from './End';
const Home = () => {
  return (
    <div className="px-4 py-4">
      {/* Popups Section */}
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 mb-6 items-center md:items-start mt-10">
        <LearningPopup  />
        <TutorialPopup />
      </div>

      {/* Hero Section */}
      <div className="mb-6 ">
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
