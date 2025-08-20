import React from 'react';
import AboutHero from '@/components/pages/about/AboutHero/AboutHero';
import AboutCareers from '@/components/pages/about/AboutCareers/AboutCareers';
import AboutPartners from '@/components/pages/about/AboutPartners/AboutPartners';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPartners />
      <AboutCareers />
    </>
  );
}
