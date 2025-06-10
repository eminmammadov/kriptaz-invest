'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { HeroProps } from '@/types/hero';
import styles from './Hero.module.css';

/**
 * Hero component with video background
 * Displays main heading and two-column descriptive text
 * Responsive design with accessibility features
 */
const Hero: React.FC<HeroProps> = ({
  className = '',
  videoSrc = '/video/hero-video.mp4',
  backgroundImage,
  videoOverlayImage = '/images/video-filter.svg',
  title = 'Build Your Noble Legacy for Generations to Come',
  leftText = 'Grand Founders is an economic development and national security foundation that makes impact investments and supports emerging entrepreneurs globally, ensuring a noble legacy for generations to come.',
  rightText = 'Grand Founders is a noble community of mission-driven and socially responsible multimillionaires, united by similar culture and values. The foundation is NYC based 501c3, and fully backed and supervised by Grand Founders Ambassadors.',
  onVideoLoad,
  onVideoError
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      onVideoLoad?.();
    };

    const handleCanPlay = () => {
      // Attempt to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video autoplay successful
          })
          .catch((error) => {
            console.warn('Hero video autoplay failed:', error);
            // Try to play without sound as fallback
            video.muted = true;
            video.play().catch((err) => {
              console.error('Hero video play failed even when muted:', err);
            });
          });
      }
    };

    const handleError = (error: Event) => {
      console.error('Hero video error:', error);
      setVideoError(true);
      onVideoError?.(error);
    };

    // Add essential event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [onVideoLoad, onVideoError]);

  return (
    <section
      className={`${styles.hero} ${className}`}
      role="banner"
      aria-label="Hero section with company mission"
    >
      {/* Background Section with Video */}
      <div
        className={styles.backgroundSection}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
        }}
      >
        {/* Fallback background image when video fails */}
        {videoError && backgroundImage && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />
        )}

        {!videoError && (
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

            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundColor: '#000'
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
            <source src={videoSrc.replace('.mp4', '.ogv')} type="video/ogg" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        )}

        {/* Video Overlay Image */}
        <Image
          src={videoOverlayImage}
          alt=""
          fill
          className={styles.videoOverlayImage}
          aria-hidden="true"
          priority={false}
        />

        {/* Video Filters */}
        <div className={styles.videoFilters} aria-hidden="true" />

        <div className={styles.backgroundOverlay} aria-hidden="true" />
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title}
          </h1>

          <div className={styles.textContainer}>
            <div className={styles.textColumn}>
              <p>{leftText}</p>
            </div>
            <div className={styles.textColumn}>
              <p>{rightText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
