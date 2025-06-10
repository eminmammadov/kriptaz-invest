# Cookies Component

A responsive, accessible cookies banner component with glass effect styling and automatic timer functionality.

## Features

- **Responsive Design**: Bottom-left positioning on desktop, bottom-center on mobile
- **Glass Effect**: Modern backdrop-blur styling with semi-transparent background
- **Timer Functionality**: Automatically hides for configurable hours (default: 6 hours)
- **Smooth Animations**: Fade-in/fade-out transitions with reduced motion support
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader friendly
- **TypeScript**: Complete type safety with proper interfaces
- **CSS Modules**: Scoped styling following project conventions

## Installation

The component is already integrated into the project. Import it from:

```typescript
import { Cookies } from '@/components/Cookies';
```

## Basic Usage

```tsx
import { Cookies } from '@/components/Cookies';

function App() {
  return (
    <div>
      {/* Your app content */}
      
      <Cookies 
        onAccept={() => console.log('Cookies accepted!')}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `onAccept` | `() => void` | `undefined` | Callback when user accepts cookies |
| `message` | `string` | Default regulatory message | Custom message text |
| `buttonText` | `string` | `'OK'` | Text for the accept button |
| `autoShowDelay` | `number` | `1000` | Delay in ms before showing banner |
| `hideForHours` | `number` | `6` | Hours to hide banner after acceptance |

## Examples

### Custom Message
```tsx
<Cookies 
  message="We use cookies to enhance your experience."
  buttonText="Accept All"
  onAccept={() => console.log('Custom cookies accepted!')}
/>
```

### Custom Timing
```tsx
<Cookies 
  autoShowDelay={2000}  // 2 second delay
  hideForHours={24}     // Hide for 24 hours
  onAccept={() => console.log('Cookies accepted!')}
/>
```

### Immediate Show
```tsx
<Cookies 
  autoShowDelay={0}     // Show immediately
  onAccept={() => console.log('Cookies accepted!')}
/>
```

## Styling

The component uses CSS Modules with the following classes:

- `.cookiesBanner` - Main container
- `.cookiesContent` - Content wrapper
- `.cookiesMessage` - Message text
- `.cookiesActions` - Button container
- `.acceptButton` - Accept button

### Custom Styling
```tsx
<Cookies 
  className="my-custom-banner"
  onAccept={() => console.log('Cookies accepted!')}
/>
```

## Responsive Behavior

- **Desktop (≥768px)**: Positioned at bottom-left with 1rem margin
- **Mobile (<768px)**: Positioned at bottom-center with responsive width
- **Glass Effect**: Backdrop-blur with semi-transparent background
- **Animations**: Smooth fade-in/out with transform effects

## Accessibility Features

- **ARIA Labels**: Proper role and aria attributes
- **Keyboard Navigation**: Escape key to accept
- **Screen Readers**: Descriptive labels and live regions
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **High Contrast**: Enhanced visibility in high contrast mode

## Storage

The component uses `localStorage` to track acceptance:

- **Key**: `kriptaz_cookies_accepted`
- **Value**: JSON object with timestamp and acceptance status
- **Duration**: Configurable via `hideForHours` prop

## Browser Support

- Modern browsers with CSS backdrop-filter support
- Graceful fallback for older browsers
- localStorage support required for timer functionality

## Integration with Analytics

```tsx
const handleCookiesAccept = () => {
  // Enable analytics tracking
  gtag('consent', 'update', {
    analytics_storage: 'granted'
  });
  
  console.log('Cookies accepted - analytics enabled');
};

<Cookies onAccept={handleCookiesAccept} />
```
