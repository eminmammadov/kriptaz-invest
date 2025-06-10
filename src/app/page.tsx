
'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Cookies } from '@/components/Cookies';

export default function Home() {
  const handleDonateClick = () => {
    console.log('Donate button clicked');
    // Add your donation logic here
  };

  const handleJoinClick = () => {
    console.log('Join Now button clicked');
    // Add your join logic here
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
    // Add your logo click logic here (e.g., navigate to home)
  };

  const handleVideoLoad = () => {
    console.log('Hero video loaded successfully');
  };

  const handleVideoError = (error: Event) => {
    console.error('Hero video failed to load:', error);
  };

  const handleCookiesAccept = () => {
    console.log('Cookies accepted');
    // Add any additional logic when cookies are accepted
  };

  return (
    <div className="min-h-screen">
      <Header
        onDonateClick={handleDonateClick}
        onJoinClick={handleJoinClick}
        onLogoClick={handleLogoClick}
      />

      <Hero
        onVideoLoad={handleVideoLoad}
        onVideoError={handleVideoError}
      />

      {/* Cookies Banner */}
      <Cookies
        onAccept={handleCookiesAccept}
      />
    </div>
  );
}
