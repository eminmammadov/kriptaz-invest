
'use client';

import { Hero } from '@/components/sections/Hero';
// import { ProjectSlider, ProjectLogo } from '@/components/sections/ProjectSlider';
import { TVL } from '@/components/sections/TVL';
import Rates from '@/components/sections/Rates';
import { Subscribe } from '@/components/sections/Subscribe';

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
