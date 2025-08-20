'use client';

import React from 'react';
import { Cookies } from '../index';

/**
 * Examples of how to use the Cookies component
 * This file demonstrates various configurations and use cases
 */

// Example 1: Basic Cookies banner with default settings
export const BasicCookiesExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Basic Cookies Banner</h1>
      <p>This example shows the default cookies banner with standard 6-hour timer.</p>
      
      <Cookies 
        onAccept={() => console.log('Basic cookies accepted!')}
      />
    </div>
  );
};

// Example 2: Custom message and button text
export const CustomMessageExample = () => {
  const customMessage = "We use cookies to enhance your browsing experience and provide personalized content. By clicking 'Accept All', you consent to our use of cookies.";
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Message Example</h1>
      <p>This example shows a custom message and button text.</p>
      
      <Cookies 
        message={customMessage}
        buttonText="Accept All"
        onAccept={() => console.log('Custom cookies accepted!')}
      />
    </div>
  );
};

// Example 3: Custom timing settings
export const CustomTimingExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Timing Example</h1>
      <p>This example shows custom timing: 2-second delay, 1-hour hide duration.</p>
      
      <Cookies 
        autoShowDelay={2000}
        hideForHours={1}
        buttonText="Got it!"
        onAccept={() => console.log('Custom timing cookies accepted!')}
      />
    </div>
  );
};

// Example 4: Immediate show (no delay)
export const ImmediateShowExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Immediate Show Example</h1>
      <p>This example shows the banner immediately without delay.</p>
      
      <Cookies 
        autoShowDelay={0}
        onAccept={() => console.log('Immediate cookies accepted!')}
      />
    </div>
  );
};

// Example 5: Custom styling
export const CustomStyledExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Styled Example</h1>
      <p>This example shows how to add custom CSS classes.</p>
      
      <Cookies 
        className="custom-cookies-banner"
        message="This banner has custom styling applied via className prop."
        buttonText="Understood"
        onAccept={() => console.log('Custom styled cookies accepted!')}
      />
    </div>
  );
};

// Example 6: Long duration (24 hours)
export const LongDurationExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Long Duration Example</h1>
      <p>This example hides the banner for 24 hours after acceptance.</p>
      
      <Cookies 
        hideForHours={24}
        message="This banner will stay hidden for 24 hours after you accept it."
        buttonText="Accept for 24h"
        onAccept={() => console.log('24-hour cookies accepted!')}
      />
    </div>
  );
};

// Example usage in a complete page layout
export const CompletePageExample = () => {
  const handleCookiesAccept = () => {
    console.log('Page cookies accepted');
    // You could trigger analytics, update user preferences, etc.
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-xl font-bold">My Website</h1>
      </header>
      
      {/* Main content */}
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Site</h2>
        <p className="mb-4">
          This is an example of how the Cookies component integrates into a complete page layout.
          The banner will appear in the bottom-left on desktop and bottom-center on mobile.
        </p>
        <p className="mb-4">
          Try resizing your browser window to see the responsive behavior.
        </p>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 p-4 border-t mt-auto">
        <p className="text-sm text-gray-600">© 2024 My Website. All rights reserved.</p>
      </footer>
      
      {/* Cookies Banner */}
      <Cookies 
        onAccept={handleCookiesAccept}
        autoShowDelay={1500}
      />
    </div>
  );
};

export default CompletePageExample;
