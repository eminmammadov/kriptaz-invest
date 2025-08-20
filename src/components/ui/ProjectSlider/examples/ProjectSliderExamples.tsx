'use client';

import React from 'react';
import { ProjectSlider } from '../index';
import { ProjectLogo } from '@/shared/types/projectSlider';

/**
 * Examples of how to use the ProjectSlider component
 * This file demonstrates various configurations and use cases
 */

// Example 1: Basic ProjectSlider with default settings
export const BasicProjectSliderExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Basic Project Slider</h1>
      <p className="mb-8">This example shows the default project slider with all partner logos.</p>
      
      <ProjectSlider 
        onLogoClick={(logo) => console.log('Logo clicked:', logo.name)}
      />
    </div>
  );
};

// Example 2: Custom animation speed and sizing
export const CustomSpeedExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Speed & Size Example</h1>
      <p className="mb-8">This example shows faster animation with larger logos.</p>
      
      <ProjectSlider 
        animationSpeed={15}
        logoHeight={60}
        spacing={4}
        onLogoClick={(logo) => console.log('Fast slider logo clicked:', logo.name)}
      />
    </div>
  );
};

// Example 3: Custom logos with links
export const CustomLogosExample = () => {
  const customLogos: ProjectLogo[] = [
    {
      name: 'Aptos',
      src: '/images/projects/aptos.svg',
      alt: 'Aptos blockchain platform',
      href: 'https://aptos.dev'
    },
    {
      name: 'Ripple',
      src: '/images/projects/ripple.svg',
      alt: 'Ripple cryptocurrency platform',
      href: 'https://ripple.com'
    },
    {
      name: 'Sui',
      src: '/images/projects/sui.svg',
      alt: 'Sui blockchain platform',
      href: 'https://sui.io'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Logos with Links</h1>
      <p className="mb-8">This example shows custom logo selection with external links.</p>
      
      <ProjectSlider 
        logos={customLogos}
        onLogoClick={(logo) => console.log('Custom logo clicked:', logo.name)}
      />
    </div>
  );
};

// Example 4: No hover pause
export const NoHoverPauseExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">No Hover Pause Example</h1>
      <p className="mb-8">This slider continues animating even when hovered.</p>
      
      <ProjectSlider 
        pauseOnHover={false}
        onLogoClick={(logo) => console.log('No pause logo clicked:', logo.name)}
      />
    </div>
  );
};

// Example 5: Slow and large
export const SlowLargeExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Slow & Large Example</h1>
      <p className="mb-8">This example shows a slow-moving slider with large logos.</p>
      
      <ProjectSlider 
        animationSpeed={60}
        logoHeight={80}
        spacing={5}
        onLogoClick={(logo) => console.log('Large logo clicked:', logo.name)}
      />
    </div>
  );
};

// Example 6: Custom styling
export const CustomStyledExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Styled Example</h1>
      <p className="mb-8">This example shows how to add custom CSS classes.</p>
      
      <ProjectSlider 
        className="custom-project-slider"
        logoHeight={50}
        onLogoClick={(logo) => console.log('Custom styled logo clicked:', logo.name)}
      />
    </div>
  );
};

// Example usage in a complete page layout
export const CompletePageExample = () => {
  const handleLogoClick = (logo: ProjectLogo) => {
    console.log('Page logo clicked:', logo.name);
    // You could trigger analytics, show modal, etc.
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-xl font-bold">Investment Platform</h1>
      </header>
      
      {/* Main content */}
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
        <p className="mb-8">
          We work with leading blockchain and financial technology companies to provide 
          the best investment opportunities for our clients.
        </p>
      </main>
      
      {/* Project Slider */}
      <ProjectSlider 
        onLogoClick={handleLogoClick}
        animationSpeed={25}
        logoHeight={55}
      />
      
      {/* Footer */}
      <footer className="bg-gray-100 p-4 border-t mt-8">
        <p className="text-sm text-gray-600">© 2024 Investment Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CompletePageExample;
