
'use client';

import { Hero } from '@/components/ui/Hero';
import { ProjectSlider, ProjectLogo } from '@/components/ui/ProjectSlider';
import { TVL } from '@/components/ui/TVL';
import Rates from '@/components/ui/Rates';

export default function Home() {
  const handleVideoLoad = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Hero video loaded successfully');
    }
  };

  const handleVideoError = (error: Event) => {
    console.error('Hero video failed to load:', error);
    // TODO: Implement proper error tracking (e.g., Sentry, LogRocket)
  };

  const handleProjectLogoClick = (logo: ProjectLogo) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Project logo clicked:', logo.name);
    }
    // TODO: Implement analytics tracking
  };

  return (
    <>
      <Hero
        videoSrc="/videos/hero-video.mp4"
        videoOverlayImage="/images/video-filter.svg"
        title="Investors established crypto investment fund"
        description="Founded with distinguished investors, our regulated fund platform applies disciplined DDGO principles to allocate weekly savings into crypto assets, ensuring transparent, reliable, and sustainable growth."
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
