'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { CookiesProps, CookiesBannerState } from '@/types/cookies';
import styles from './Cookies.module.css';

// Default message matching the image content
const DEFAULT_MESSAGE = `May fortune favor your every step. Our online fund platform, developed by carefully selected investors from our close network, adheres to official regulations and offers you a transparent, personalized investment partner. Guided by disciplined strategies and our 'DDGO' principle (meaning 'steady progress toward the goal'), we channel your weekly savings into crypto assets to foster consistent growth and secure a prosperous future.`;

// Storage key for tracking cookie acceptance
const COOKIES_STORAGE_KEY = 'kriptaz_cookies_accepted';

/**
 * Cookies banner component with glass effect and responsive positioning
 * Follows the established React TypeScript patterns and CSS Modules styling
 */
const Cookies: React.FC<CookiesProps> = ({
  className = '',
  onAccept,
  message = DEFAULT_MESSAGE,
  buttonText = 'OK',
  autoShowDelay = 1000,
  hideForHours = 6
}) => {
  const [bannerState, setBannerState] = useState<CookiesBannerState>({
    isVisible: false,
    isAnimating: false,
    shouldRender: false
  });

  // Check if cookies have been accepted and if the time limit has passed
  const checkCookieAcceptance = useCallback(() => {
    try {
      const acceptedData = localStorage.getItem(COOKIES_STORAGE_KEY);
      if (!acceptedData) {
        return false;
      }

      const { timestamp } = JSON.parse(acceptedData);
      const now = Date.now();
      const hoursInMs = hideForHours * 60 * 60 * 1000;
      
      // If more than specified hours have passed, show the banner again
      return (now - timestamp) < hoursInMs;
    } catch (error) {
      console.warn('Error checking cookie acceptance:', error);
      return false;
    }
  }, [hideForHours]);

  // Handle accept button click
  const handleAccept = useCallback(() => {
    setBannerState(prev => ({ ...prev, isAnimating: true, isVisible: false }));
    
    // Store acceptance with timestamp
    try {
      const acceptanceData = {
        timestamp: Date.now(),
        accepted: true
      };
      localStorage.setItem(COOKIES_STORAGE_KEY, JSON.stringify(acceptanceData));
    } catch (error) {
      console.warn('Error storing cookie acceptance:', error);
    }

    // Call optional callback
    onAccept?.();

    // Remove from DOM after animation completes
    setTimeout(() => {
      setBannerState(prev => ({ ...prev, shouldRender: false, isAnimating: false }));
    }, 500);
  }, [onAccept]);

  // Initialize banner visibility
  useEffect(() => {
    const shouldShow = !checkCookieAcceptance();
    
    if (shouldShow) {
      setBannerState(prev => ({ ...prev, shouldRender: true }));
      
      // Show with delay for smooth entrance
      const timer = setTimeout(() => {
        setBannerState(prev => ({ ...prev, isVisible: true }));
      }, autoShowDelay);

      return () => clearTimeout(timer);
    }
  }, [checkCookieAcceptance, autoShowDelay]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleAccept();
    }
  }, [handleAccept]);

  // Don't render if not needed
  if (!bannerState.shouldRender) {
    return null;
  }

  return (
    <div
      className={`${styles.cookiesBanner} ${bannerState.isVisible ? styles.visible : ''} ${className}`}
      role="dialog"
      aria-labelledby="cookies-title"
      aria-describedby="cookies-message"
      aria-live="polite"
      onKeyDown={handleKeyDown}
    >
      <div className={styles.cookiesContent}>
        <p 
          id="cookies-message"
          className={styles.cookiesMessage}
        >
          {message}
        </p>
        
        <div className={styles.cookiesActions}>
          <button
            onClick={handleAccept}
            className={styles.acceptButton}
            aria-label={`Accept cookies and close banner - ${buttonText}`}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
