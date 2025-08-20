'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Cookies } from '@/components/ui/Cookies';
import { FooterLink, SocialLink } from '@/shared/types/footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
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
        {children}
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
};

export default ClientLayout;
