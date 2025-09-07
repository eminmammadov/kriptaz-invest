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

    const handleCanPlay = () => {
      onVideoLoad?.();
    };

    const handleLoadedData = () => {
      onVideoLoad?.();
    };

    const handleError = (error: Event) => {
      console.error('Hero video failed to load:', error);
      setVideoError(true);
      onVideoError?.(error);
    };

    // Video yükleme event'leri
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Video'yu hemen yükle ve oynat (arka plan için)
    try {
      video.load();
      // Auto-play için user interaction gerekebilir
      video.play().catch(() => {
        // User interaction sonrası tekrar dene
        const playVideo = () => {
          video.play().catch(console.error);
          document.removeEventListener('click', playVideo);
          document.removeEventListener('touchstart', playVideo);
        };
        document.addEventListener('click', playVideo);
        document.addEventListener('touchstart', playVideo);
      });
    } catch (err) {
      console.error('Video load error:', err);
      setVideoError(true);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [onVideoLoad, onVideoError]);

  // Partner logos array - images/partners/ klasöründeki tüm logolar
  const baseLogos = [
    { src: '/images/partners/arbitrum.svg', alt: 'Arbitrum' },
    { src: '/images/partners/arkham.svg', alt: 'Arkham' },
    { src: '/images/partners/blackrock.svg', alt: 'BlackRock' },
    { src: '/images/partners/ethereum.svg', alt: 'Ethereum' },
    { src: '/images/partners/grayscale.svg', alt: 'Grayscale' },
    { src: '/images/partners/jupiter.svg', alt: 'Jupiter' },
    { src: '/images/partners/ondo.svg', alt: 'Ondo' },
    { src: '/images/partners/ripple.svg', alt: 'Ripple' },
    { src: '/images/partners/solana.svg', alt: 'Solana' },
    { src: '/images/partners/xstocks.svg', alt: 'XStocks' }
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
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{
                  pointerEvents: 'none',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none'
                }}
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
            <h1 className={styles.heroTitle}>{title}</h1>

            {/* Description */}
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionText}>{description}</p>
            </div>

            {/* Portfolio Button and Read More Link */}
            <div className={styles.buttonContainer}>
              <Link href="/portfolio" className={styles.portfolioButton}>
                Portfolio
              </Link>
              <Link href="/about" className={styles.readMoreLink}>
                Read about us
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
