
'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

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
    </div>
  );
}
