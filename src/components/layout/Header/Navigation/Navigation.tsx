'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NavigationProps, NavigationItem } from '@/shared/types/header';
import styles from './Navigation.module.css';

// Default navigation items - simplified without dropdowns
const defaultNavigationItems: NavigationItem[] = [
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Members',
    href: '/members'
  },
  {
    label: 'Insights',
    href: '/insights'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

/**
 * Navigation component with dropdown functionality
 * Handles keyboard navigation and accessibility
 */
const Navigation: React.FC<NavigationProps> = ({
  items = defaultNavigationItems,
  className = '',
  onItemClick
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only showing active state after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleItemClick = (item: NavigationItem) => {
    onItemClick?.(item);
  };

  const isActiveLink = (href: string) => {
    return mounted && pathname === href;
  };

  const isMobileNavigation = className?.includes('mobileNavigation');
  const navClassName = isMobileNavigation ? styles.mobileNavigation : styles.navigation;

  return (
    <nav
      className={`${navClassName} ${className || ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {items.map((item) => {
        const isActive = item.href && isActiveLink(item.href);
        const buttonClassName = isActive
          ? `${styles.navigationButton} ${styles.active}`
          : styles.navigationButton;

        return (
          <button
            key={item.label}
            className={buttonClassName}
            onClick={() => handleItemClick(item)}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
