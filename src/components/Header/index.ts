// Export all Header components for easy importing
export { default as Header } from './Header';
export { default as Logo } from './Logo/Logo';
export { default as Navigation } from './Navigation/Navigation';
export { default as HeaderButtons } from './HeaderButtons/HeaderButtons';

// Re-export types
export type {
  HeaderProps,
  LogoProps,
  NavigationProps,
  HeaderButtonsProps,
  NavigationItem
} from '@/types/header';
