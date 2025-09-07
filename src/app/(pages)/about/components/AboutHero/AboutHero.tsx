import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHero.module.css';

interface AboutHeroProps {
  className?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ className = '' }) => {
  // Get current date in a readable format
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return now.toLocaleDateString('en-US', options);
  };

  return (
    <section className={`${styles.hero} ${className}`} role="banner" aria-labelledby="about-hero-title">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1 id="about-hero-title" className={styles.title}>
              Who we are and what we build
            </h1>
            <p className={styles.description}>
              At the beginning of 2024, 20 friends came together around a shared vision: to build our financial independence through regular and disciplined investing.
              <br /><br />
              Instead of taking big risks, we developed the idea of pooling the money we saved for small expenses like coffee and tea in our daily lives. We decided to invest in cryptocurrencies every two weeks, with a total budget of $500, $25 per person.
              <br /><br />
              We made our first investment on June 1, 2024, and we maintained this disciplined approach. Over six months, each member invested only $275. While some friends left the project for various reasons during this time, we continued on our path with our dedicated core team of 10.
              <br /><br />
              Our goal is to build a strong investment fund with small but steady steps and achieve financial comfort through our collective strength. Instead of taking large risks individually, we develop smart and sustainable investment strategies as a community.
              <br /><br />
              As of today, our <Link href="/portfolio" className={styles.portfolioLink}>portfolio</Link> is at <span className={styles.dateBlock}>{getCurrentDate()}</span> and continues to grow.
            </p>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/about/team-cover.png"
                alt="Team meeting in modern office conference room with city skyline view"
                width={1560}
                height={1041}
                className={styles.heroImage}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
