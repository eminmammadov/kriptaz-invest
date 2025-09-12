// Type definitions for Header components

export interface NavigationItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: NavigationItem[];
}

export interface LogoProps {
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
  onItemClick?: (item: NavigationItem) => void;
  variant?: 'primary' | 'secondary';
}

/* HeaderButtonsProps removed - HeaderButtons component no longer exists */

export interface HeaderProps {
  className?: string;
  navigationItems?: NavigationItem[];
  onDonateClick?: () => void;
  onJoinClick?: () => void;
  onLogoClick?: () => void;
}
