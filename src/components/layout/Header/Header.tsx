'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import HeaderButtons from './HeaderButtons/HeaderButtons';
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
  onDonateClick,
  onJoinClick,
  onLogoClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll detection for dynamic background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrolled = scrollTop > 20; // Lower threshold for better detection
      console.log('Scroll detected:', scrollTop, 'Scrolled:', scrolled);
      setIsScrolled(scrolled);
    };

    // Multiple event listeners for better compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Test initial scroll position
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const handleDonateClick = () => {
    // Handle donate button click - can be external link or internal page
    if (onDonateClick) {
      onDonateClick();
    } else {
      // Default behavior - navigate to portfolio page
      router.push('/portfolio');
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

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

  console.log('Header render - isScrolled:', isScrolled);
  
  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''} ${className}`}
      data-scrolled={isScrolled}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.6)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out'
      }}
    >
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Logo
            onClick={handleLogoClick}
            className={styles.logoContainer}
          />

          {/* Desktop Navigation */}
          <Navigation
            items={navigationItems}
            onItemClick={handleNavigationItemClick}
            className={styles.navigationContainer}
          />

          {/* Desktop Header Buttons */}
          <HeaderButtons
            onDonateClick={handleDonateClick}
            onJoinClick={handleJoinClick}
            className={styles.buttonsContainer}
          />

          {/* Mobile Buttons Group - JOIN and Hamburger Menu */}
          <div className={styles.mobileButtonsGroup}>
            {/* Mobile Join Button - Visible only on mobile */}
            <button
              onClick={handleJoinClick}
              className={styles.mobileJoinButton}
              aria-label="Join our community"
            >
              Join
            </button>

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
                />
              </div>

              {/* Mobile Action Buttons */}
              <div className={styles.mobileButtonsContainer}>
                <HeaderButtons
                  onDonateClick={handleDonateClick}
                  onJoinClick={handleJoinClick}
                  isMobile={true}
                />
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
