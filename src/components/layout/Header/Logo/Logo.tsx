'use client';

import React from 'react';
import Image from 'next/image';
import { LogoProps } from '@/lib/types/header';
import styles from './Logo.module.css';

/**
 * Logo component for Kriptaz Invest
 * Uses the full logo consistently across all screen sizes
 */
const Logo: React.FC<LogoProps> = ({
  className = '',
  onClick
}) => {
  return (
    <div
      className={`${styles.logoContainer} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Kriptaz Invest - Go to homepage"
    >
      {/* Full Logo - Used for all screen sizes */}
      <Image
        src="/logos/kriptaz-invest-full-black-logo.svg"
        alt="Kriptaz Invest"
        width={200}
        height={40}
        className={styles.logoImage}
        priority
      />
    </div>
  );
};

export default Logo;
