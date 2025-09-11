'use client';

import React from 'react';
import Image from 'next/image';
import { LogoProps } from '@/lib/types/header';
import styles from './Logo.module.css';

/**
 * Logo component for Invest Founders
 * Uses the full logo consistently across all screen sizes
 */
const Logo: React.FC<LogoProps> = ({
  className = '',
  onClick,
  variant = 'primary'
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
      aria-label="Invest Founders - Go to homepage"
    >
      {/* Full Logo - Used for all screen sizes */}
      <Image
        src={variant === 'primary' ? "/logos/kriptaz-invest-full-white-logo.svg" : "/logos/kriptaz-invest-full-black-logo.svg"}
        alt="Invest Founders"
        width={200}
        height={40}
        className={styles.logoImage}
        priority
      />
    </div>
  );
};

export default Logo;
