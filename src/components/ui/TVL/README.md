# Hero Component

A modern, responsive Hero component that displays a mission statement and key performance metrics in a clean, elegant design.

## Features

- **Mission Statement**: Prominent headline text that communicates the company's vision
- **Key Metrics Grid**: Four key performance indicators displayed in a responsive grid
- **Clean Typography**: Modern, readable fonts with proper hierarchy
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Subtle fade-in animations with staggered delays
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Usage

```tsx
import TVL from '@/components/ui/TVL';

// Basic usage with default metrics
<TVL />

// Custom mission statement and metrics
<TVL 
  title="Your company mission statement here"
  subtitle="Optional subtitle for additional context"
  metrics={[
    { value: '100', label: 'Happy Customers' },
    { value: '50M', label: 'Revenue' },
    { value: '95%', label: 'Satisfaction Rate', superscript: '1' },
    { value: '$2.5B', label: 'Market Cap' }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `title` | `string` | `'Ondo is building the foundation for the future of finance.'` | Mission statement headline |
| `subtitle` | `string` | `undefined` | Optional subtitle text |
| `metrics` | `TVLMetric[]` | Default Ondo metrics | Array of key performance metrics |

## TVLMetric Interface

```tsx
interface TVLMetric {
  value: string;        // The metric value (e.g., "100", "$1.41B")
  label: string;        // Description of the metric
  superscript?: string; // Optional superscript (e.g., footnote numbers)
}
```

## Default Metrics

The component comes with pre-configured metrics inspired by the reference design:

1. **10** - Supported Chains
2. **127** - Integrated Projects  
3. **80%** - Yieldcoin Market Share¹
4. **$1.41B** - TVL

## Responsive Behavior

- **Desktop (1200px+)**: 4-column grid layout
- **Tablet (768px-1199px)**: 2-column grid layout
- **Mobile (<768px)**: 2-column grid with centered alignment
- **Small Mobile (<480px)**: Optimized spacing and typography

## Styling

The component uses CSS modules with a clean, minimalist design:
- White background with black text for high contrast
- Large, bold numbers for metrics
- Proper spacing and typography hierarchy
- Smooth fade-in animations

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Reduced motion support for users with vestibular disorders
- High contrast mode support
