'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { HeroProps } from '@/lib/types/hero';
import { Button } from '@/components/ui/Button';
import { ClientsLogo } from '@/components/ui/ClientsLogo';
import { BigTitle } from '@/components/ui/BigTitle';
import { Paragraph } from '@/components/ui/Paragraph';
import styles from './Hero.module.css';

/**
 * Hero component with video background and modern design
 * Follows the established React TypeScript patterns and CSS Modules styling
 */
const Hero: React.FC<HeroProps> = ({
  className = '',
  videoSrc = '/videos/hero-video.mp4',
  title = 'Crypto investment and asset fund',
  description = 'Founded with distinguished investors, our regulated fund platform applies disciplined DDGO principles to allocate weekly savings into crypto assets, ensuring transparent, reliable, and sustainable growth.',
  onVideoLoad,
  onVideoError
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoad = () => {
      onVideoLoad?.();
    };

    const handleError = (event: Event) => {
      setVideoError(true);
      onVideoError?.(event);
    };

    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('error', handleError);
    };
  }, [onVideoLoad, onVideoError]);

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
                aria-hidden="true"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Error Fallback */}
              {videoError && (
                <div className={styles.videoErrorFallback}>
                  <p>Background video unavailable</p>
                </div>
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
            <BigTitle>{title}</BigTitle>

            {/* Description */}
            <div className={styles.descriptionContainer}>
              <Paragraph variant="light" size="medium">{description}</Paragraph>
            </div>

            {/* Portfolio Button and Read More Link */}
            <div className={styles.buttonContainer}>
              <Button href="/portfolio" variant="primary" size="medium">
                Portfolio
              </Button>
              <Link href="/about" className={styles.readMoreLink}>
                Read about us
              </Link>
            </div>
          </div>
        </div>

        {/* Partner Logos Slider */}
        <ClientsLogo />
      </div>
    </section>
  );
};

export default Hero;
