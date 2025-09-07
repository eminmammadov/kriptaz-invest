# AboutCareers Component

A careers section component that displays job openings and team culture for the About page. Features a clean, professional design with job listings and a team celebration photo.

## Features

- **Section Header**: "Careers at Ondo" label with compelling title
- **Call-to-Action**: "All 19 Roles" button for viewing all positions
- **Job Listings**: Grid layout showcasing featured job openings
- **Team Photo**: Large celebration photo showing company culture
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Accessibility**: Full ARIA support and keyboard navigation
- **Interactive Elements**: Clickable job cards and buttons

## Usage

```tsx
import AboutCareers from '@/components/About/AboutCareers';

export default function AboutPage() {
  return (
    <main>
      <AboutCareers />
    </main>
  );
}
```

### With Custom Styling

```tsx
import AboutCareers from '@/components/About/AboutCareers';

export default function AboutPage() {
  return (
    <main>
      <AboutCareers className="custom-careers-section" />
    </main>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |

## Design System

### Typography
- **Section Label**: Playfair Display, 0.875rem
- **Title**: Gellix, 2.5rem (responsive)
- **Job Titles**: Gellix SemiBold, 1.25rem
- **Job Details**: Playfair Display, 0.875rem

### Colors
- **Background**: White (`--color-white`)
- **Text**: Primary Black (`--color-primary-black`)
- **Job Cards**: Light Gray (`--color-light-gray`)
- **Button**: Primary Black with Accent Green hover
- **Secondary Text**: Gray 700 (`--color-gray-700`)

### Layout
- **Full-width**: Breaks container constraints like Header/Footer
- **Responsive Grid**: Auto-fit columns for job listings
- **Centered Content**: Maximum 1200px width with auto margins
- **Proper Spacing**: Consistent padding and gaps

## Accessibility Features

- **Semantic HTML**: Proper section, heading, and list structure
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Keyboard Navigation**: Full keyboard support for job cards
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Comprehensive alt text and descriptions
- **Reduced Motion**: Respects user motion preferences

## Responsive Behavior

### Desktop (1024px+)
- Multi-column job grid
- Large team photo with shadow
- Full button and card hover effects

### Tablet (768px - 1024px)
- Adjusted grid columns
- Reduced font sizes
- Maintained visual hierarchy

### Mobile (< 768px)
- Single column job layout
- Stacked content sections
- Touch-optimized button sizes
- Simplified spacing

## Interactive Elements

### All Roles Button
- Primary black background
- Accent green hover state
- Subtle lift animation
- Uppercase text styling

### Job Cards
- Light gray background
- Hover lift and shadow effects
- Clickable with keyboard support
- Focus outline for accessibility

### Team Photo
- Optimized Next.js Image component
- Responsive sizing
- Rounded corners with shadow
- Priority loading for performance

## Integration

The component is designed to integrate seamlessly with the About page structure:

```tsx
<main role="main">
  <AboutHero />
  <AboutTeam />
  <AboutCareers />  {/* Positioned after team, before partners */}
  <AboutPartners />
</main>
```

## Customization

The component uses CSS Modules for styling and can be customized through:

1. **CSS Variables**: Modify colors through the global design system
2. **Custom Classes**: Add additional styling via className prop
3. **Job Data**: Update the jobListings array for different positions
4. **Button Actions**: Customize click handlers for navigation

## Performance

- **Optimized Images**: Uses Next.js Image component with proper sizing
- **Efficient Rendering**: Minimal re-renders with proper React patterns
- **Lazy Loading**: Images load efficiently with priority settings
- **CSS Modules**: Scoped styles prevent conflicts

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- CSS Grid with fallbacks
