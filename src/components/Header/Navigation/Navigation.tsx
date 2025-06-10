'use client';

import React from 'react';
import { NavigationProps, NavigationItem } from '@/types/header';
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
  const handleItemClick = (item: NavigationItem) => {
    onItemClick?.(item);
  };

  const isMobileNavigation = className?.includes('mobileNavigation');
  const navClassName = isMobileNavigation ? styles.mobileNavigation : styles.navigation;

  return (
    <nav
      className={`${navClassName} ${className || ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {items.map((item) => (
        <button
          key={item.label}
          className={styles.navigationButton}
          onClick={() => handleItemClick(item)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
