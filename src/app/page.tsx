
'use client';

import { Hero } from '@/components/ui/Hero';
import { ProjectSlider, ProjectLogo } from '@/components/ui/ProjectSlider';
import { TVL } from '@/components/ui/TVL';
import Rates from '@/components/ui/Rates';

export default function Home() {
  const handleVideoLoad = () => {
    console.log('Hero video loaded successfully');
  };

  const handleVideoError = (error: Event) => {
    console.error('Hero video failed to load:', error);
  };

  const handleProjectLogoClick = (logo: ProjectLogo) => {
    console.log('Project logo clicked:', logo.name);
  };

  return (
    <>
      <Hero
        onVideoLoad={handleVideoLoad}
        onVideoError={handleVideoError}
      />

      <ProjectSlider
        onLogoClick={handleProjectLogoClick}
      />

      <TVL />

      <Rates />
    </>
  );
}
