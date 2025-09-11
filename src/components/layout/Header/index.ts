// Export all Header components for easy importing
export { default as Header } from './Header';
export { default as Logo } from './Logo/Logo';
export { default as Navigation } from './Navigation/Navigation';

// Re-export types
export type {
  HeaderProps,
  LogoProps,
  NavigationProps,
  NavigationItem
} from '@/lib/types/header';
