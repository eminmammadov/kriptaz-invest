# Hero Component

A responsive hero section component with video background for the Invest Founders platform, built with React, TypeScript, and CSS Modules.

## Overview

The Hero component creates an immersive full-screen section with a video background, main heading, and two-column descriptive text. It follows the existing project patterns and design system.

## Features

- **Video Background**: Autoplay, muted, looping video with fallback support
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Accessibility**: Supports reduced motion preferences and screen readers
- **Performance Optimized**: Lazy loading and error handling for video
- **Customizable Content**: Configurable title and text content
- **CSS Modules**: Scoped styling following project conventions

## Usage

### Basic Usage
```tsx
import { Hero } from '@/components/Hero';

<Hero />
```

### Custom Content
```tsx
<Hero 
  title="Your Custom Title"
  leftText="Custom left column text..."
  rightText="Custom right column text..."
  videoSrc="/path/to/your/video.mp4"
  onVideoLoad={() => console.log('Video loaded')}
  onVideoError={(error) => console.error('Video error:', error)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `videoSrc` | `string` | `'/video/hero-video.mp4'` | Path to background video |
| `title` | `string` | `'Build Your Noble Legacy...'` | Main heading text |
| `leftText` | `string` | Default content | Left column text |
| `rightText` | `string` | Default content | Right column text |
| `onVideoLoad` | `() => void` | `undefined` | Video load callback |
| `onVideoError` | `(error: Event) => void` | `undefined` | Video error callback |

## Design System

### Colors
- Background: `var(--color-light-gray)` (#E7E7E7)
- Text: `var(--color-primary-black)` (#111111)
- Overlay: Semi-transparent light gray gradient

### Typography
- Font: `var(--font-primary)` (Playfair Display)
- Title: 3.5rem (desktop), responsive scaling
- Body: 1.125rem with 1.7 line height

### Layout
- Full viewport width with centered content
- Maximum content width: 1200px
- Two-column grid on desktop, single column on mobile
- Minimum height: 100vh (80vh on mobile)

## Responsive Breakpoints

- **Desktop (1024px+)**: Full layout with large typography
- **Tablet (768px-1023px)**: Reduced spacing and font sizes
- **Mobile (<768px)**: Single column layout, smaller typography

## Accessibility Features

- **Reduced Motion**: Video hidden for users who prefer reduced motion
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Focus states and proper tab order
- **Video Fallback**: Graceful degradation when video fails to load

## File Structure

```
src/components/Hero/
├── Hero.tsx              # Main component
├── Hero.module.css       # Component styles
├── index.ts              # Export barrel
└── README.md             # This documentation

src/types/
└── hero.ts               # TypeScript interfaces
```

## Browser Support

- Modern browsers with CSS Grid support
- Video element support (MP4 format)
- CSS custom properties support
- Responsive design features

## Performance Considerations

- Video preload set to "metadata" for faster initial load
- Error handling prevents component crashes
- Responsive images and optimized layouts
- CSS-only animations for better performance
