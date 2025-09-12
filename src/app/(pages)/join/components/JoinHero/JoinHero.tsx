'use client';

import React, { useState } from 'react';
import Logo from '@/components/layout/Header/Logo/Logo';
import { Button } from '@/components/ui/Button';
import { Titles } from '@/components/ui/Titles';
import styles from './JoinHero.module.css';

// ============================================================================
// JOIN CONTENT CONFIGURATION - CENTRALIZED TEXT MANAGEMENT
// ============================================================================

const JOIN_CONTENT = {
  mainTitle: 'Access to Invest Founders starts with your login.',
  loginButton: 'Login to System',
  learnMoreLink: 'Learn terms of use >',
  learnMoreHref: '/terms'
} as const;

/**
 * JoinHero component for the join page
 * Displays login form with video background
 */
const JoinHero: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login attempt:', { userId, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/join.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div className={styles.rightColumn}>
        <div className={styles.contentContainer}>
          <div className={styles.logoSection}>
            <Logo
              onClick={() => {}}
              variant="secondary"
            />
          </div>
          
          <div className={styles.mainContent}>
            <Titles variant="dark" className={styles.mainTitle}>
              {JOIN_CONTENT.mainTitle}
            </Titles>
            
            <div className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className={styles.input}
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
              
              <div className={styles.buttonContainer}>
                <Button
                  onClick={handleLogin}
                  variant="secondary"
                  size="medium"
                  className={styles.loginButton}
                >
                  {JOIN_CONTENT.loginButton}
                </Button>
              </div>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <a 
              href={JOIN_CONTENT.learnMoreHref}
              className={styles.learnMoreLink}
            >
              {JOIN_CONTENT.learnMoreLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHero;
