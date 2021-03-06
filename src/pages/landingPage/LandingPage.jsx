/* eslint-disable import/no-unresolved */
import React from 'react';
import AboutMe from './components/aboutMeCard/AboutMe';
import Banner from './components/banner/Banner';
import PricingCards from './components/pricingCards';
import ReviewCard from './components/reviewCard';

const LandingPage = () => (
  <>
    <Banner />
    <AboutMe />
    {/* Why IK classes, Live classes, pre recorded content */}
    <PricingCards />
    <ReviewCard />
  </>
);

export default LandingPage;
