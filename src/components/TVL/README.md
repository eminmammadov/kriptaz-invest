# TVL Component

A responsive, elegant component for displaying Total Value Locked (TVL) metrics and key statistics with smooth animations and professional typography.

## Features

- **Elegant Typography**: Uses Playfair Display for content and Gellix for badges
- **Smooth Animations**: Staggered fade-in animations for metrics
- **Responsive Design**: Adaptive layout for mobile, tablet, and desktop
- **Interactive Elements**: Hover effects and click handlers for metrics
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader friendly
- **TypeScript**: Complete type safety with proper interfaces
- **CSS Modules**: Scoped styling following project conventions

## Installation

The component is already integrated into the project. Import it from:

```typescript
import { TVL } from '@/components/TVL';
```

## Basic Usage

```tsx
import { TVL } from '@/components/TVL';

function App() {
  return (
    <div>
      {/* Your app content */}
      
      <TVL 
        onMetricClick={(metric) => console.log('Metric clicked:', metric)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `title` | `string` | Default Ondo title | Main heading text |
| `subtitle` | `string` | `undefined` | Optional subtitle text |
| `metrics` | `TVLMetric[]` | Default metrics array | Array of metric objects to display |
| `onMetricClick` | `(metric: TVLMetric) => void` | `undefined` | Callback when a metric is clicked |

## TVLMetric Interface

```typescript
interface TVLMetric {
  value: string;        // The main metric value (e.g., "10", "$1B")
  label: string;        // Description label
  badge?: string;       // Optional badge text (e.g., "TVL")
  superscript?: string; // Optional superscript (e.g., "1")
}
```

## Examples

### Custom Title and Metrics
```tsx
const customMetrics = [
  {
    value: '25',
    label: 'Active Networks'
  },
  {
    value: '$5B',
    label: 'Assets Under Management',
    badge: 'AUM'
  }
];

<TVL 
  title="Building the next generation of DeFi infrastructure."
  metrics={customMetrics}
  onMetricClick={(metric) => console.log('Custom metric clicked:', metric)}
/>
```

### With Subtitle
```tsx
<TVL 
  title="Ondo is building the foundation for the future of finance."
  subtitle="Trusted by institutions and individuals worldwide"
  onMetricClick={(metric) => console.log('Metric clicked:', metric)}
/>
```

### Minimal Configuration
```tsx
const minimalMetrics = [
  {
    value: '$2.5B',
    label: 'Total Value Locked',
    badge: 'TVL'
  }
];

<TVL 
  title="Simple and powerful DeFi solutions."
  metrics={minimalMetrics}
/>
```

## Default Metrics

The component includes these default metrics based on Ondo Finance:

- **10** - Supported Chains
- **101** - Integrated Projects
- **80%¹** - Yieldcoin Market Share (with superscript)
- **$1B** - TVL (with badge)

## Styling

The component uses CSS Modules with the following classes:

- `.tvlContainer` - Main container section
- `.tvlContent` - Content wrapper with max-width
- `.tvlHeader` - Header section with title/subtitle
- `.tvlTitle` - Main title styling
- `.metricsGrid` - Grid layout for metrics
- `.metricItem` - Individual metric container
- `.metricValue` - Large metric value text
- `.metricLabel` - Metric description text
- `.metricBadge` - Badge styling (e.g., "TVL")
- `.metricSuperscript` - Superscript styling

### Custom Styling
```tsx
<TVL 
  className="my-custom-tvl"
  onMetricClick={(metric) => console.log('Custom styled metric clicked:', metric)}
/>
```

## Responsive Behavior

- **Desktop**: 4-column grid with large typography
- **Tablet (≤768px)**: 2-column grid with medium typography
- **Mobile (≤480px)**: Single column with centered alignment and smaller typography

## Accessibility Features

- **ARIA Labels**: Proper role and aria attributes
- **Keyboard Navigation**: Tab navigation and Enter/Space activation
- **Screen Readers**: Descriptive labels for each metric
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **High Contrast**: Enhanced visibility in high contrast mode
- **Focus Management**: Clear focus indicators for keyboard users

## Animations

- **Staggered Entry**: Metrics animate in with 0.1s delays
- **Smooth Transitions**: 0.6s ease-out animations
- **Hover Effects**: Subtle lift and background changes
- **Performance**: Hardware-accelerated transforms

## Integration Examples

### With Analytics
```tsx
const handleMetricClick = (metric: TVLMetric) => {
  // Track metric interactions
  gtag('event', 'metric_click', {
    metric_value: metric.value,
    metric_label: metric.label
  });
  
  console.log('Metric clicked with analytics:', metric);
};

<TVL onMetricClick={handleMetricClick} />
```

### In a Dashboard
```tsx
<section className="dashboard-metrics">
  <div className="container">
    <h1>Platform Overview</h1>
    <p>Real-time metrics and performance indicators</p>
  </div>
  
  <TVL 
    title="Leading the future of decentralized finance"
    onMetricClick={handleMetricClick}
  />
</section>
```

## Browser Support

- Modern browsers with CSS Grid support
- Graceful fallback for older browsers
- Hardware acceleration for smooth animations
- SVG support for badges and icons

## Performance

- **Optimized Rendering**: Minimal re-renders with proper memoization
- **Efficient Animations**: CSS-based animations for smooth performance
- **Responsive Images**: Proper sizing and loading strategies
- **Accessibility**: Screen reader optimized without performance impact
