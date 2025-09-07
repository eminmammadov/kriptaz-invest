import React from 'react';
import AboutHero from './components/AboutHero/AboutHero';
import AboutCareers from './components/AboutCareers/AboutCareers';
import AboutPartners from './components/AboutPartners/AboutPartners';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPartners />
      <AboutCareers />
    </>
  );
}
