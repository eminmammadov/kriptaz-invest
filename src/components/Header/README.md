# Header Component System

A modular, responsive header component system for the Invest Founders platform, built with React, TypeScript, and CSS Modules.

## Components Overview

### 1. Header (Main Component)
The main container component that orchestrates all header functionality.

**Features:**
- Responsive design (desktop and mobile)
- Sticky positioning
- Mobile hamburger menu
- Configurable navigation items
- Event handlers for all interactive elements

**Usage:**
```tsx
import { Header } from '@/components/Header';

<Header 
  onDonateClick={() => console.log('Donate clicked')}
  onJoinClick={() => console.log('Join clicked')}
  onLogoClick={() => console.log('Logo clicked')}
/>
```

### 2. Logo Component
Displays the Grand Founders brand with sunburst icon and company name.

**Features:**
- Custom SVG sunburst icon
- Accessible keyboard navigation
- Click handler support
- Responsive sizing

### 3. Navigation Component
Handles the main navigation menu with dropdown functionality.

**Features:**
- Dropdown menus with smooth animations
- Keyboard navigation (Arrow keys, Enter, Escape)
- Click-outside-to-close functionality
- ARIA accessibility attributes
- Mobile-responsive (hidden on mobile, shown in hamburger menu)

### 4. HeaderButtons Component
Contains the action buttons (Donate and Join Now).

**Features:**
- Distinct styling for primary/secondary actions
- Hover and focus states
- Accessible button design
- Responsive layout

## Accessibility Features

- **ARIA Labels**: All interactive elements have proper ARIA labels
- **Keyboard Navigation**: Full keyboard support with focus management
- **Screen Reader Support**: Semantic HTML and proper role attributes
- **Focus Management**: Visible focus indicators and logical tab order

## Responsive Design

- **Desktop (md+)**: Full horizontal layout with all components visible
- **Mobile (<md)**: Hamburger menu with collapsible navigation
- **Tablet**: Optimized spacing and touch-friendly targets

## Customization

### Navigation Items
You can customize navigation items by passing a `navigationItems` prop:

```tsx
const customNavItems = [
  {
    label: 'SERVICES',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Investment', href: '/investment' },
      { label: 'Advisory', href: '/advisory' }
    ]
  },
  {
    label: 'ABOUT',
    href: '/about'
  }
];

<Header navigationItems={customNavItems} />
```

### Styling
All components accept a `className` prop for additional styling:

```tsx
<Header className="shadow-lg" />
<Logo className="text-blue-600" />
<Navigation className="space-x-6" />
<HeaderButtons className="space-x-4" />
```

## Event Handlers

The Header component supports several event handlers:

- `onDonateClick`: Triggered when the Donate button is clicked
- `onJoinClick`: Triggered when the Join Now button is clicked
- `onLogoClick`: Triggered when the logo is clicked
- `onItemClick`: Triggered when navigation items are clicked (via Navigation component)

## TypeScript Support

All components are fully typed with TypeScript interfaces:

- `HeaderProps`
- `LogoProps`
- `NavigationProps`
- `HeaderButtonsProps`
- `NavigationItem`

## File Structure

```
src/components/Header/
├── Header.tsx              # Main header component
├── Logo/
│   └── Logo.tsx           # Logo component
├── Navigation/
│   └── Navigation.tsx     # Navigation component
├── HeaderButtons/
│   └── HeaderButtons.tsx  # Action buttons component
├── index.ts               # Export barrel
└── README.md              # This file

src/types/
└── header.ts              # TypeScript interfaces
```

## Dependencies

- React 19+
- TypeScript 5+
- Tailwind CSS 4+
- Next.js 15+ (for the @/ import alias)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Keyboard navigation support
- Screen reader compatibility
