'use client';

import React from 'react';
import { HeaderButtonsProps } from '@/shared/types/header';
import styles from './HeaderButtons.module.css';

/**
 * HeaderButtons component containing action buttons (Donate and Join Now)
 * Features distinct styling for primary and secondary actions
 */
const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  className = '',
  onDonateClick,
  onJoinClick,
  isMobile = false
}) => {
  const containerClass = isMobile ? styles.mobileContainer : styles.buttonsContainer;

  return (
    <div className={`${containerClass} ${className}`}>
      {/* Donate Button - Primary Black Style */}
      <button
        onClick={onDonateClick}
        className={`${styles.button} ${styles.donateButton}`}
        aria-label="Make a donation"
      >
        PORTFOLIO
      </button>

      {/* Join Now Button - Only show on desktop, hidden in mobile dropdown */}
      {!isMobile && (
        <button
          onClick={onJoinClick}
          className={`${styles.button} ${styles.joinButton}`}
          aria-label="Join our community"
        >
          JOIN
        </button>
      )}
    </div>
  );
};

export default HeaderButtons;
