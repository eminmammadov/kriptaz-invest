# Footer Component

A modular, responsive Footer component built with TypeScript and CSS Modules, designed to match the exact specifications from the provided design images.

## Features

- **Modular Architecture**: Composed of separate sub-components (Link, Social)
- **Responsive Design**: Adapts perfectly between desktop and mobile layouts
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **CSS Modules**: Scoped styling with no conflicts
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Customizable**: Configurable links, social media, and branding
- **Next.js Integration**: Uses Next.js router for navigation
- **Full-Width Layout**: Matches Header component's layout pattern
- **Prominent Logo**: Centered, white logo with responsive sizing
- **Visual Separation**: Horizontal line above content for better organization
- **External Links**: Social media links open in new tabs with proper security

## Component Structure

```
Footer/
├── Footer.tsx              # Main footer component
├── Footer.module.css       # Main footer styles
├── Link/
│   ├── Link.tsx           # Reusable link component
│   └── Link.module.css    # Link styles
├── Social/
│   ├── Social.tsx         # Social media component
│   └── Social.module.css  # Social styles
├── index.ts               # Export file
└── README.md              # This file
```

## Usage

### Basic Usage

```tsx
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  );
}
```

### Advanced Usage

```tsx
import { Footer } from '@/components/Footer';
import { FooterLink, SocialLink } from '@/shared/types/footer';

const customLinks: FooterLink[] = [
  { label: 'About', href: '/about', external: false },
  { label: 'Terms', href: '/terms', external: false },
  { label: 'Privacy', href: '/privacy', external: false }
];

const customSocial: SocialLink[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/company',
    icon: 'twitter',
    ariaLabel: 'Follow us on Twitter'
  }
];

export default function Page() {
  const handleLinkClick = (link: FooterLink) => {
    console.log('Link clicked:', link.label);
  };

  const handleSocialClick = (social: SocialLink) => {
    console.log('Social clicked:', social.name);
  };

  return (
    <div>
      <Footer
        companyName="Your Company"
        copyrightYear="2024"
        links={customLinks}
        socialLinks={customSocial}
        onLinkClick={handleLinkClick}
        onSocialClick={handleSocialClick}
        onLogoClick={() => console.log('Logo clicked')}
      />
    </div>
  );
}
```

## Props

### FooterProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `companyName` | `string` | `'Invest Founders'` | Company name displayed |
| `copyrightYear` | `string` | `'2025'` | Copyright year |
| `links` | `FooterLink[]` | Default links | Footer navigation links |
| `socialLinks` | `SocialLink[]` | Default social | Social media links |
| `onLinkClick` | `(link: FooterLink) => void` | `undefined` | Link click handler |
| `onSocialClick` | `(social: SocialLink) => void` | `undefined` | Social click handler |
| `onLogoClick` | `() => void` | `undefined` | Logo click handler |

## Sub-Components

### Link Component

Reusable link component with hover effects and accessibility features.

```tsx
import { Link } from '@/components/Footer';

<Link href="/about" external={false}>
  About Us
</Link>
```

### Social Component

Social media icons with hover animations and proper accessibility.

```tsx
import { Social } from '@/components/Footer';

<Social
  links={socialLinks}
  onSocialClick={handleSocialClick}
/>
```

## Styling

The component uses CSS Modules with the established design system:

- **Colors**: Uses CSS variables from the global color system
- **Typography**: Playfair Display for main content, Gellix for navigation
- **Layout**: Full-width with responsive margins matching Header component
- **Animations**: Subtle hover effects with reduced motion support

## Responsive Behavior

- **Desktop**: Horizontal layout with links and social icons on opposite sides
- **Mobile**: Stacked layout with centered social icons
- **Breakpoints**: Matches the established responsive system (768px, 1024px)

## Accessibility

- Semantic HTML with proper `role` attributes
- ARIA labels for social media icons
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Testing

Run the component tests:

```bash
npm test Footer
```

The test suite covers:
- Rendering with default and custom props
- Event handling
- Accessibility attributes
- Responsive behavior

## Design Compliance

This component matches the exact design specifications from the provided images:
- Black background (`--color-primary-black`)
- White text with proper typography hierarchy
- Correct spacing and layout proportions
- Responsive behavior for desktop and mobile
- Social media icons with proper hover states
