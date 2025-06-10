
'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Cookies } from '@/components/Cookies';
import { ProjectSlider, ProjectLogo } from '@/components/ProjectSlider';
import { TVL } from '@/components/TVL';

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

  const handleProjectLogoClick = (logo: ProjectLogo) => {
    console.log('Project logo clicked:', logo.name);
    // Add any additional logic when a project logo is clicked
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

      {/* Project Partners Slider */}
      <ProjectSlider
        onLogoClick={handleProjectLogoClick}
      />

      {/* TVL Metrics Section */}
      <TVL />

      {/* Cookies Banner */}
      <Cookies
        onAccept={handleCookiesAccept}
      />
    </div>
  );
}
