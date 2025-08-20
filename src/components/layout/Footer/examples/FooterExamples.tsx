'use client';

import React from 'react';
import { Footer } from '../index';
import { FooterLink, SocialLink } from '@/shared/types/footer';

/**
 * Examples of how to use the Footer component system
 * This file demonstrates various configurations and use cases
 */

// Example 1: Basic Footer with default configuration
export const BasicFooterExample = () => {
  return (
    <Footer 
      onLinkClick={(link) => console.log('Link clicked:', link)}
      onSocialClick={(social) => console.log('Social clicked:', social)}
      onLogoClick={() => console.log('Logo clicked')}
    />
  );
};

// Example 2: Footer with custom links
export const CustomLinksFooterExample = () => {
  const customLinks: FooterLink[] = [
    { label: 'About', href: '/about', external: false },
    { label: 'Terms', href: '/terms', external: false },
    { label: 'Privacy', href: '/privacy', external: false },
    { label: 'Support', href: 'mailto:support@example.com', external: true }
  ];

  return (
    <Footer 
      links={customLinks}
      onLinkClick={(link) => console.log('Custom link clicked:', link)}
    />
  );
};

// Example 3: Footer with custom social links
export const CustomSocialFooterExample = () => {
  const customSocialLinks: SocialLink[] = [
    {
      name: 'X',
      href: 'https://x.com/company',
      icon: 'twitter',
      ariaLabel: 'Follow us on X'
    }
  ];

  return (
    <Footer
      socialLinks={customSocialLinks}
      onSocialClick={(social) => console.log('Custom social clicked:', social)}
    />
  );
};

// Example 4: Footer with custom company name and year
export const CustomBrandingFooterExample = () => {
  return (
    <Footer
      companyName="Invest Founders"
      copyrightYear="2024"
      onLogoClick={() => window.location.href = '/'}
    />
  );
};

// Example 5: Complete page with Footer
export const CompletePageExample = () => {
  const handleLinkClick = (link: FooterLink) => {
    console.log('Footer link clicked:', link.label);
    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal navigation
      window.location.href = link.href;
    }
  };

  const handleSocialClick = (social: SocialLink) => {
    console.log('Social link clicked:', social.name);
    window.open(social.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-xl font-bold">Investment Platform</h1>
      </header>
      
      {/* Main content */}
      <main className="p-8 min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Platform</h2>
        <p className="mb-4">
          This is an example of how the Footer component integrates into a complete page layout.
          The footer will appear at the bottom with proper spacing and responsive behavior.
        </p>
        <p className="mb-4">
          Try resizing your browser window to see the responsive behavior of the footer.
        </p>
        <p className="mb-4">
          The footer includes the company logo, navigation links, and social media icons
          that match the design specifications exactly.
        </p>
      </main>
      
      {/* Footer */}
      <Footer 
        onLinkClick={handleLinkClick}
        onSocialClick={handleSocialClick}
        onLogoClick={() => window.location.href = '/'}
      />
    </div>
  );
};

export default CompletePageExample;
