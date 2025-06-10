'use client';

import React from 'react';
import { TVL } from '../index';
import { TVLMetric } from '@/types/tvl';

/**
 * Examples of how to use the TVL component
 * This file demonstrates various configurations and use cases
 */

// Example 1: Basic TVL with default metrics
export const BasicTVLExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Basic TVL Component</h1>
      <p className="mb-8">This example shows the default TVL component with Ondo metrics.</p>
      
      <TVL 
        onMetricClick={(metric) => console.log('Metric clicked:', metric)}
      />
    </div>
  );
};

// Example 2: Custom metrics and title
export const CustomTVLExample = () => {
  const customMetrics: TVLMetric[] = [
    {
      value: '25',
      label: 'Active Networks'
    },
    {
      value: '500+',
      label: 'Partner Projects'
    },
    {
      value: '95%',
      label: 'Uptime Guarantee',
      superscript: '*'
    },
    {
      value: '$5B',
      label: 'Assets Under Management',
      badge: 'AUM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom TVL Example</h1>
      <p className="mb-8">This example shows custom metrics and title.</p>
      
      <TVL 
        title="Building the next generation of decentralized finance infrastructure."
        metrics={customMetrics}
        onMetricClick={(metric) => console.log('Custom metric clicked:', metric)}
      />
    </div>
  );
};

// Example 3: Minimal metrics
export const MinimalTVLExample = () => {
  const minimalMetrics: TVLMetric[] = [
    {
      value: '$2.5B',
      label: 'Total Value Locked',
      badge: 'TVL'
    },
    {
      value: '1M+',
      label: 'Active Users'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Minimal TVL Example</h1>
      <p className="mb-8">This example shows a simplified version with fewer metrics.</p>
      
      <TVL 
        title="Simple and powerful DeFi solutions."
        metrics={minimalMetrics}
        onMetricClick={(metric) => console.log('Minimal metric clicked:', metric)}
      />
    </div>
  );
};

// Example 4: With subtitle
export const TVLWithSubtitleExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">TVL with Subtitle</h1>
      <p className="mb-8">This example includes both title and subtitle.</p>
      
      <TVL 
        title="Ondo is building the foundation for the future of finance."
        subtitle="Trusted by institutions and individuals worldwide"
        onMetricClick={(metric) => console.log('Subtitle example metric clicked:', metric)}
      />
    </div>
  );
};

// Example 5: Custom styling
export const CustomStyledTVLExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Styled TVL</h1>
      <p className="mb-8">This example shows how to add custom CSS classes.</p>
      
      <TVL 
        className="custom-tvl-section"
        onMetricClick={(metric) => console.log('Custom styled metric clicked:', metric)}
      />
    </div>
  );
};

// Example usage in a complete page layout
export const CompletePageExample = () => {
  const handleMetricClick = (metric: TVLMetric) => {
    console.log('Page metric clicked:', metric);
    // You could trigger analytics, show modal, etc.
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-xl font-bold">DeFi Platform</h1>
      </header>
      
      {/* Main content */}
      <main>
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-4">Platform Overview</h2>
          <p className="mb-8">
            Our platform provides comprehensive DeFi solutions with industry-leading security and performance.
          </p>
        </section>
        
        {/* TVL Section */}
        <TVL 
          onMetricClick={handleMetricClick}
        />
        
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <p>
            Learn more about our platform features and capabilities.
          </p>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 p-4 border-t">
        <p className="text-sm text-gray-600">© 2024 DeFi Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CompletePageExample;
