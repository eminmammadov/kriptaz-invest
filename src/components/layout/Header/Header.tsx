'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import { Button } from '@/components/ui/Button';
import { HeaderProps, NavigationItem } from '@/lib/types/header';
import styles from './Header.module.css';

// Default navigation items
const defaultNavigationItems: NavigationItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Members', href: '/members' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Main Header component that combines Logo, Navigation, and HeaderButtons
 * Responsive design with mobile hamburger menu
 */
const Header: React.FC<HeaderProps> = ({
  className = '',
  navigationItems = defaultNavigationItems,
  onJoinClick,
  onLogoClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check if current page is home page
  useEffect(() => {
    setIsHomePage(pathname === '/');
  }, [pathname]);

  const handleNavigationItemClick = (item: NavigationItem) => {
    if (item.href) {
      // Navigate using Next.js router
      router.push(item.href);
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Navigate to home page
    router.push('/');
    onLogoClick?.();
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // handleDonateClick removed - no longer needed

  const handleJoinClick = () => {
    // Handle join button click - can be external link or internal page
    if (onJoinClick) {
      onJoinClick();
    } else {
      // Default behavior - navigate to join/signup page
      router.push('/join');
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${!isHomePage ? styles.headerWithBackground : ''} ${className}`}
      style={!isHomePage ? { backgroundColor: '#eeeeee' } : {}}
    >
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Logo
            onClick={handleLogoClick}
            className={styles.logoContainer}
            variant={isHomePage ? "primary" : "secondary"}
          />

          {/* Desktop Navigation */}
          <Navigation
            items={navigationItems}
            onItemClick={handleNavigationItemClick}
            className={styles.navigationContainer}
            variant={isHomePage ? "primary" : "secondary"}
          />

          {/* Desktop Header Buttons */}
          <div className={styles.buttonsContainer}>
            <Button
              onClick={handleJoinClick}
              variant={isHomePage ? "primary" : "secondary"}
              size="medium"
              className={styles.desktopJoinButton}
            >
              Join System
            </Button>
          </div>

          {/* Mobile Buttons Group - JOIN and Hamburger Menu */}
          <div className={styles.mobileButtonsGroup}>
            {/* Mobile Join Button - Visible only on mobile */}
            <Button
              onClick={handleJoinClick}
              variant={isHomePage ? "primary" : "secondary"}
              size="medium"
              className={styles.mobileJoinButton}
            >
              Join System
            </Button>

            {/* Mobile Menu Button - 2-line hamburger with X animation */}
            <button
              onClick={toggleMobileMenu}
              className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.mobileMenuButtonOpen : ''}`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className={styles.hamburgerIcon}>
                <span className={`${styles.hamburgerLine} ${styles.hamburgerLineTop}`}></span>
                <span className={`${styles.hamburgerLine} ${styles.hamburgerLineBottom}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNavigation} role="navigation" aria-label="Mobile navigation">
              {/* Mobile Navigation Items */}
              <div className={styles.mobileNavItems}>
                <Navigation
                  items={navigationItems}
                  onItemClick={handleNavigationItemClick}
                  className="mobileNavigation"
                  variant={isHomePage ? "primary" : "secondary"}
                />
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
