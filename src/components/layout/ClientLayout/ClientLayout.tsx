'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Cookies } from '@/components/ui/Cookies';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { FooterLink, SocialLink } from '@/shared/types/footer';
import { useGlobalStore, useCookies } from '@/shared/store/useGlobalStore';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const generateSessionId = useGlobalStore((state) => state.generateSessionId);
  const incrementPageViews = useGlobalStore((state) => state.incrementPageViews);
  const { accepted: cookiesAccepted, setAccepted: setCookiesAccepted } = useCookies();

  // Hydrate store and initialize session only on client side
  useEffect(() => {
    // Hydrate the persisted store
    useGlobalStore.persist.rehydrate();
    
    // Initialize session and track page views only once
    generateSessionId();
    incrementPageViews();
  }, [generateSessionId, incrementPageViews]); // Empty dependency array to run only once

  const handleDonateClick = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Donate button clicked');
    }
    // TODO: Implement analytics tracking
  };

  const handleJoinClick = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Join Now button clicked');
    }
    // TODO: Implement analytics tracking
  };

  const handleLogoClick = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Logo clicked');
    }
    // TODO: Implement analytics tracking
  };

  const handleCookiesAccept = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Cookies accepted');
    }
    setCookiesAccepted(true);
  };

  const handleFooterLinkClick = (link: FooterLink) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Footer link clicked:', link.label);
    }
    // TODO: Implement analytics tracking
  };

  const handleFooterSocialClick = (social: SocialLink) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Footer social clicked:', social.name);
    }
    // TODO: Implement analytics tracking
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header
          onDonateClick={handleDonateClick}
          onJoinClick={handleJoinClick}
          onLogoClick={handleLogoClick}
        />

        <main role="main">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>

        <Footer
          onLinkClick={handleFooterLinkClick}
          onSocialClick={handleFooterSocialClick}
          onLogoClick={handleLogoClick}
        />

        {!cookiesAccepted && (
          <Cookies
            onAccept={handleCookiesAccept}
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default ClientLayout;
