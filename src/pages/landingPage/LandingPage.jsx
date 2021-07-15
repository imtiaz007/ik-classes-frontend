/* eslint-disable import/no-unresolved */
import React from 'react';
import Header from '../../molecules/topNavBar';
import Banner from './components/banner/Banner';
import PricingCards from './components/pricingCards';

const LandingPage = () => (
  <div>
    <Header />
    <Banner />
    <PricingCards />
  </div>
);

export default LandingPage;
