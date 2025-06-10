'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { HeroProps } from '@/types/hero';
import styles from './Hero.module.css';

/**
 * Hero component with video background and content section
 * Follows the established React TypeScript patterns and CSS Modules styling
 */
const Hero: React.FC<HeroProps> = ({
  className = '',
  videoSrc = '/videos/hero-video.mp4',
  videoOverlayImage = '/images/video-filter.svg',
  title = 'Crypto investment online fund established by mutual investors',
  leftText = 'Our online fund platform, founded with distinguished investors from our close network, operates under official regulatory standards, providing a reliable, transparent, and bespoke investment service.',
  rightText = 'Managed with disciplined strategies and our "DDGO" (Dama Dama Göl Olar) principle, our fund allocates weekly savings into crypto assets to achieve steady growth and secure our future.',
  onVideoLoad,
  onVideoError
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileSmall, setIsMobileSmall] = useState(false);

  // Hook to detect screen size for mobile-specific SVG
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileSmall(window.innerWidth <= 395);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine which SVG overlay to use based on screen size
  const currentOverlayImage = isMobileSmall
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

  return (
    <section className={`${styles.heroSection} ${className}`} role="banner">
      {/* Video Background Section */}
      <div className={styles.videoSection}>
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
            <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
            <source src={videoSrc.replace('.mp4', '.ogv')} type="video/ogg" />
            Your browser does not support the video tag.
          </video>

          {/* SVG Overlay - Responsive based on screen size */}
          {currentOverlayImage && (
            <Image
              src={currentOverlayImage}
              alt=""
              fill
              className={`${styles.videoOverlayImage} ${isMobileSmall ? styles.mobileOverlay : ''}`}
              aria-hidden="true"
              priority
            />
          )}

          {/* Video Overlay for Better Text Contrast */}
          <div className={styles.videoOverlay} aria-hidden="true" />
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {/* Top Decorative Line */}
          <div className={styles.decorativeLine} aria-hidden="true" />

          {/* Main Title */}
          <h1 className={styles.heroTitle}>{title}</h1>

          {/* Two-Column Text Layout */}
          <div className={styles.textColumns}>
            <div className={styles.textColumn}>
              <p className={styles.columnText}>{leftText}</p>
            </div>
            <div className={styles.textColumn}>
              <p className={styles.columnText}>{rightText}</p>
            </div>
          </div>

          {/* Bottom Decorative Line */}
          <div className={styles.decorativeLine} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
