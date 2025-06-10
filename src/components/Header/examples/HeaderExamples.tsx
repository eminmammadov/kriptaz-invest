'use client';

import React from 'react';
import { Header, Logo, Navigation, HeaderButtons } from '../index';
import { NavigationItem } from '@/types/header';

/**
 * Examples of how to use the Header component system
 * This file demonstrates various configurations and use cases
 */

// Example 1: Basic Header with default navigation
export const BasicHeaderExample = () => {
  return (
    <Header 
      onDonateClick={() => alert('Donate clicked!')}
      onJoinClick={() => alert('Join Now clicked!')}
      onLogoClick={() => alert('Logo clicked!')}
    />
  );
};

// Example 2: Header with custom navigation items
export const CustomNavigationExample = () => {
  const customNavItems: NavigationItem[] = [
    {
      label: 'SERVICES',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Investment Management', href: '/services/investment' },
        { label: 'Financial Planning', href: '/services/planning' },
        { label: 'Wealth Advisory', href: '/services/advisory' },
      ]
    },
    {
      label: 'ABOUT',
      href: '/about'
    },
    {
      label: 'CONTACT',
      href: '/contact'
    }
  ];

  return (
    <Header 
      navigationItems={customNavItems}
      onDonateClick={() => console.log('Custom donate action')}
      onJoinClick={() => console.log('Custom join action')}
    />
  );
};

// Example 3: Individual component usage
export const IndividualComponentsExample = () => {
  const navItems: NavigationItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo onClick={() => console.log('Logo clicked')} />
          <Navigation 
            items={navItems}
            onItemClick={(item) => console.log('Nav item clicked:', item)}
          />
          <HeaderButtons 
            onDonateClick={() => console.log('Donate')}
            onJoinClick={() => console.log('Join')}
          />
        </div>
      </div>
    </div>
  );
};

// Example 4: Header with custom styling
export const StyledHeaderExample = () => {
  return (
    <Header 
      className="bg-blue-50 border-blue-200"
      onDonateClick={() => console.log('Styled donate')}
      onJoinClick={() => console.log('Styled join')}
    />
  );
};

// Example 5: Minimal header for specific pages
export const MinimalHeaderExample = () => {
  const minimalNavItems: NavigationItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'BACK', href: '/dashboard' }
  ];

  return (
    <Header 
      navigationItems={minimalNavItems}
      onLogoClick={() => window.location.href = '/'}
    />
  );
};

// Example usage in a page component
export const ExamplePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onDonateClick={() => {
          // Handle donation logic
          window.open('/donate', '_blank');
        }}
        onJoinClick={() => {
          // Handle join logic
          window.open('/signup', '_blank');
        }}
        onLogoClick={() => {
          // Navigate to home
          window.location.href = '/';
        }}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Header Component Examples
        </h1>
        <p className="mt-4 text-gray-600">
          This page demonstrates various ways to use the Header component system.
        </p>
      </main>
    </div>
  );
};

export default ExamplePage;
