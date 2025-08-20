'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { ProjectSliderProps, ProjectLogo, ProjectSliderState } from '@/shared/types/projectSlider';
import styles from './ProjectSlider.module.css';

// Default project logos
const defaultLogos: ProjectLogo[] = [
  {
    name: 'Aptos',
    src: '/images/projects/aptos.svg',
    alt: 'Aptos blockchain platform logo'
  },
  {
    name: 'BlackRock',
    src: '/images/projects/blackrock.svg',
    alt: 'BlackRock investment management logo'
  },
  {
    name: 'Jupiter',
    src: '/images/projects/jupiter.svg',
    alt: 'Jupiter DeFi platform logo'
  },
  {
    name: 'Ondo',
    src: '/images/projects/ondo.svg',
    alt: 'Ondo Finance logo'
  },
  {
    name: 'Ripple',
    src: '/images/projects/ripple.svg',
    alt: 'Ripple cryptocurrency platform logo'
  },
  {
    name: 'Sui',
    src: '/images/projects/sui.svg',
    alt: 'Sui blockchain platform logo'
  }
];

/**
 * ProjectSlider component with horizontal logo carousel
 * Features smooth continuous scrolling with infinite loop effect
 */
const ProjectSlider: React.FC<ProjectSliderProps> = ({
  className = '',
  logos = defaultLogos,
  animationSpeed = 30,
  pauseOnHover = true,
  logoHeight = 30,
  spacing = 4,
  onLogoClick
}) => {
  const [sliderState, setSliderState] = useState<ProjectSliderState>({
    isPaused: false,
    isHovered: false
  });

  // Create duplicated logos for seamless infinite scroll
  // We need enough duplicates to ensure seamless scrolling
  const duplicatedLogos = useMemo(() => {
    // Create multiple sets to ensure seamless loop
    const multiplier = Math.max(3, Math.ceil(20 / logos.length)); // Ensure at least 3 sets
    const result = [];
    for (let i = 0; i < multiplier; i++) {
      result.push(...logos);
    }
    return result;
  }, [logos]);

  // Handle mouse enter
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setSliderState(prev => ({ ...prev, isHovered: true, isPaused: true }));
    }
  }, [pauseOnHover]);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setSliderState(prev => ({ ...prev, isHovered: false, isPaused: false }));
    }
  }, [pauseOnHover]);

  // Handle logo click
  const handleLogoClick = useCallback((logo: ProjectLogo) => {
    onLogoClick?.(logo);
    
    // If logo has href, navigate to it
    if (logo.href) {
      window.open(logo.href, '_blank', 'noopener,noreferrer');
    }
  }, [onLogoClick]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent, logo: ProjectLogo) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLogoClick(logo);
    }
  }, [handleLogoClick]);

  // CSS custom properties for dynamic styling
  const containerStyle = {
    '--animation-duration': `${animationSpeed}s`,
    '--logo-height': `${logoHeight}px`,
    '--logo-height-mobile': `${Math.max(logoHeight * 0.7, 24)}px`,
    '--logo-spacing': `${spacing}rem`,
    '--logo-spacing-mobile': `${Math.max(spacing * 0.7, 1)}rem`
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.sliderContainer} ${className}`}
      style={containerStyle}
      role="region"
      aria-label="Partner and project logos carousel"
    >
      <div className={styles.container}>
        <div className={styles.sliderContent}>
          <div
            className={`${styles.sliderTrack} ${sliderState.isPaused ? styles.paused : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-live="off"
          >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={styles.logoItem}
            onClick={() => handleLogoClick(logo)}
            onKeyDown={(e) => handleKeyDown(e, logo)}
            tabIndex={0}
            role="button"
            aria-label={`${logo.name} - Click to learn more`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logoHeight * 2} // Provide width for Next.js Image optimization
              height={logoHeight}
              className={styles.logoImage}
              priority={index < logos.length} // Prioritize first set of logos
              unoptimized // SVGs don't need optimization
            />
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
