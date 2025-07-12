'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cookies } from '@/components/Cookies';
import AboutHero from '@/components/About/AboutHero/AboutHero';
import AboutTeam from '@/components/About/AboutTeam/AboutTeam';
import AboutCareers from '@/components/About/AboutCareers/AboutCareers';
import AboutPartners from '@/components/About/AboutPartners/AboutPartners';
import { FooterLink, SocialLink } from '@/types/footer';

export default function AboutPage() {
  const handleDonateClick = () => {
    console.log('Donate button clicked');
  };

  const handleJoinClick = () => {
    console.log('Join Now button clicked');
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handleCookiesAccept = () => {
    console.log('Cookies accepted');
  };

  const handleFooterLinkClick = (link: FooterLink) => {
    console.log('Footer link clicked:', link.label);
  };

  const handleFooterSocialClick = (social: SocialLink) => {
    console.log('Footer social clicked:', social.name);
  };

  return (
    <div className="min-h-screen">
      <Header
        onDonateClick={handleDonateClick}
        onJoinClick={handleJoinClick}
        onLogoClick={handleLogoClick}
      />

      <main role="main">
        <AboutHero />
        <AboutTeam />
        <AboutPartners />
        <AboutCareers />
      </main>

      <Footer
        onLinkClick={handleFooterLinkClick}
        onSocialClick={handleFooterSocialClick}
        onLogoClick={handleLogoClick}
      />

      <Cookies
        onAccept={handleCookiesAccept}
      />
    </div>
  );
}
