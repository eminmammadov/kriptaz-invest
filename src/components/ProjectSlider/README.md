# ProjectSlider Component

A responsive, animated horizontal logo carousel component with smooth continuous scrolling and infinite loop effect.

## Features

- **Smooth Animation**: Continuous horizontal scrolling from right to left
- **Infinite Loop**: Seamless logo repetition for uninterrupted carousel effect
- **Responsive Design**: Adaptive logo sizing and spacing across all screen sizes
- **Hover Pause**: Optional pause functionality when hovering over the slider
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader friendly
- **TypeScript**: Complete type safety with proper interfaces
- **CSS Modules**: Scoped styling following project conventions
- **Performance**: Optimized with Next.js Image component and proper loading strategies

## Installation

The component is already integrated into the project. Import it from:

```typescript
import { ProjectSlider } from '@/components/ProjectSlider';
```

## Basic Usage

```tsx
import { ProjectSlider } from '@/components/ProjectSlider';

function App() {
  return (
    <div>
      {/* Your app content */}
      
      <ProjectSlider 
        onLogoClick={(logo) => console.log('Logo clicked:', logo.name)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `logos` | `ProjectLogo[]` | Default logos array | Array of logo objects to display |
| `animationSpeed` | `number` | `30` | Animation duration in seconds for one complete cycle |
| `pauseOnHover` | `boolean` | `true` | Whether to pause animation on hover |
| `logoHeight` | `number` | `48` | Height of logos in pixels |
| `spacing` | `number` | `3` | Spacing between logos in rem |
| `onLogoClick` | `(logo: ProjectLogo) => void` | `undefined` | Callback when a logo is clicked |

## ProjectLogo Interface

```typescript
interface ProjectLogo {
  name: string;        // Logo name/identifier
  src: string;         // Path to logo image
  alt: string;         // Alt text for accessibility
  href?: string;       // Optional external link
}
```

## Examples

### Custom Animation Speed
```tsx
<ProjectSlider 
  animationSpeed={15}  // Faster animation (15 seconds)
  onLogoClick={(logo) => console.log('Fast logo clicked:', logo.name)}
/>
```

### Custom Logo Size and Spacing
```tsx
<ProjectSlider 
  logoHeight={60}      // Larger logos
  spacing={4}          // More spacing
  onLogoClick={(logo) => console.log('Large logo clicked:', logo.name)}
/>
```

### Custom Logos with Links
```tsx
const customLogos = [
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
  }
];

<ProjectSlider 
  logos={customLogos}
  onLogoClick={(logo) => console.log('Custom logo clicked:', logo.name)}
/>
```

### Disable Hover Pause
```tsx
<ProjectSlider 
  pauseOnHover={false}
  onLogoClick={(logo) => console.log('No pause logo clicked:', logo.name)}
/>
```

## Default Logos

The component includes these default partner logos:

- **Aptos** - Blockchain platform
- **BlackRock** - Investment management
- **Jupiter** - DeFi platform
- **Ondo** - Finance protocol
- **Ripple** - Cryptocurrency platform
- **Sui** - Blockchain platform

## Styling

The component uses CSS Modules with the following classes:

- `.sliderContainer` - Main container with overflow hidden
- `.sliderTrack` - Animated track containing logos
- `.logoItem` - Individual logo wrapper
- `.logoImage` - Logo image styling
- `.paused` - Applied when animation is paused

### Custom Styling
```tsx
<ProjectSlider 
  className="my-custom-slider"
  onLogoClick={(logo) => console.log('Custom styled logo clicked:', logo.name)}
/>
```

## Responsive Behavior

- **Desktop**: Full-size logos with standard spacing
- **Tablet (≤768px)**: 70% logo size with reduced spacing
- **Mobile (≤480px)**: 50% logo size with minimal spacing
- **Animation**: Smooth scaling and consistent performance across devices

## Accessibility Features

- **ARIA Labels**: Proper role and aria attributes
- **Keyboard Navigation**: Tab navigation and Enter/Space activation
- **Screen Readers**: Descriptive labels and live regions
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **High Contrast**: Enhanced visibility in high contrast mode
- **Focus Management**: Clear focus indicators for keyboard users

## Performance Optimizations

- **Image Optimization**: Uses Next.js Image component
- **Priority Loading**: First set of logos loaded with priority
- **Unoptimized SVGs**: SVG logos bypass unnecessary optimization
- **CSS Animations**: Hardware-accelerated transforms for smooth performance
- **Efficient Rendering**: Minimal re-renders with proper memoization

## Browser Support

- Modern browsers with CSS animation support
- Graceful fallback for older browsers
- Hardware acceleration for smooth animations
- SVG support required for logo display

## Integration Examples

### With Analytics
```tsx
const handleLogoClick = (logo: ProjectLogo) => {
  // Track logo clicks
  gtag('event', 'logo_click', {
    logo_name: logo.name,
    logo_href: logo.href
  });
  
  console.log('Logo clicked with analytics:', logo.name);
};

<ProjectSlider onLogoClick={handleLogoClick} />
```

### In a Section
```tsx
<section className="partners-section">
  <div className="container">
    <h2>Our Partners</h2>
    <p>We work with industry leaders...</p>
  </div>
  
  <ProjectSlider 
    animationSpeed={25}
    logoHeight={55}
    onLogoClick={handleLogoClick}
  />
</section>
```
