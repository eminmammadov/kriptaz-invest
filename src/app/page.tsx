
'use client';

import { Hero } from '@/components/ui/Hero';
// import { ProjectSlider, ProjectLogo } from '@/components/ui/ProjectSlider';
import { TVL } from '@/components/ui/TVL';
import Rates from '@/components/ui/Rates';
import { Subscribe } from '@/components/ui/Subscribe';

export default function Home() {
  return (
    <>
      <Hero />

      {/* <ProjectSlider
        onLogoClick={handleProjectLogoClick}
      /> */}

      <TVL />

      <Rates />

      <Subscribe />
    </>
  );
}
