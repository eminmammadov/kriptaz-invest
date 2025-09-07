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
}

export interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
  onItemClick?: (item: NavigationItem) => void;
}

export interface HeaderButtonsProps {
  className?: string;
  onDonateClick?: () => void;
  onJoinClick?: () => void;
  isMobile?: boolean;
}

export interface HeaderProps {
  className?: string;
  navigationItems?: NavigationItem[];
  onDonateClick?: () => void;
  onJoinClick?: () => void;
  onLogoClick?: () => void;
}
