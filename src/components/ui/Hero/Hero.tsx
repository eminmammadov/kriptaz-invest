'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroProps } from '@/shared/types/hero';
import styles from './Hero.module.css';

/**
 * Hero component with video background and modern design
 * Follows the established React TypeScript patterns and CSS Modules styling
 */
const Hero: React.FC<HeroProps> = ({
  className = '',
  videoSrc = '/videos/hero-video.mp4',
  videoOverlayImage = '/images/video-filter.svg',
  title = 'Investors established crypto investment fund',
  description = 'Founded with distinguished investors, our regulated fund platform applies disciplined DDGO principles to allocate weekly savings into crypto assets, ensuring transparent, reliable, and sustainable growth.',
  onVideoLoad,
  onVideoError
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [screenSize, setScreenSize] = useState({
    isMobileSmall: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  // Hook to detect screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobileSmall: width <= 395,
        isMobile: width <= 640,
        isTablet: width > 640 && width <= 1024,
        isDesktop: width > 1024,
      });
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize with debounce
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 150);
    };

    window.addEventListener('resize', debouncedResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Determine which SVG overlay to use based on screen size
  const currentOverlayImage = screenSize.isMobileSmall
    ? '/images/video-filter-mobile.svg'
    : videoOverlayImage;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      onVideoLoad?.();
    };

    const handleError = (error: Event) => {
      console.error('Hero video failed to load:', error);
      onVideoError?.(error);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [onVideoLoad, onVideoError]);

  // Partner logos array - sonsuz döngü için çoğaltılmış
  const baseLogos = [
    { src: '/images/projects/sui.svg', alt: 'Sui' },
    { src: '/images/projects/aptos.svg', alt: 'APTOS' },
    { src: '/images/partners/blackrock.svg', alt: 'AON' },
    { src: '/images/partners/blackrock.svg', alt: 'Goldman Sachs' },
    { src: '/images/projects/ripple.svg', alt: 'Ripple' }
  ];

  // Sonsuz döngü için 4 kez çoğalt
  const partnerLogos = [
    ...baseLogos,
    ...baseLogos,
    ...baseLogos,
    ...baseLogos
  ];

  return (
    <section className={`${styles.heroSection} ${className}`} role="banner">
      {/* Video Background Section - Full Screen */}
      <div className={styles.videoSection}>
        <div className={styles.videoSectionContainer}>
          <div className={styles.videoSectionContent}>
            <div className={styles.videoContainer}>
              {/* Background Video */}
              <video
                ref={videoRef}
                className={styles.videoBackground}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                aria-hidden="true"
                data-testid="hero-video"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* SVG Overlay - Responsive based on screen size */}
              {currentOverlayImage && (
                <Image
                  src={currentOverlayImage}
                  alt=""
                  fill
                  className={`${styles.videoOverlayImage} ${screenSize.isMobileSmall ? styles.mobileOverlay : ''}`}
                  aria-hidden="true"
                  priority
                />
              )}

              {/* Video Overlay for Better Text Contrast */}
              <div className={styles.videoOverlay} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Title */}
            <h1 className={styles.heroTitle}>{title}</h1>

            {/* Description */}
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionText}>{description}</p>
            </div>

            {/* Portfolio Button */}
            <div className={styles.buttonContainer}>
              <Link href="/portfolio" className={styles.portfolioButton}>
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Partner Logos Slider */}
        <div className={styles.partnerLogosContainer}>
          <div className={styles.partnerLogosWrapper}>
            <div className={styles.logosSlider}>
              {partnerLogos.map((logo, index) => (
                <div key={index} className={styles.logoItem}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={40}
                    className={styles.partnerLogo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
