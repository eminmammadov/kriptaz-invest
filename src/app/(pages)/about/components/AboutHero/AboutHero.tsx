
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import { Titles } from '@/components/ui/Titles';
import { Paragraph } from '@/components/ui/Paragraph';
import styles from './AboutHero.module.css';

const AboutHero: React.FC = () => {
  // Centralized content configuration
  const ABOUT_CONTENT = {
    pageTitle: "About us",
    mainTitle: "Who we are and what we build",
    description: [
      "At the beginning of 2024, 20 friends came together around a shared vision: to build our financial independence through regular and disciplined investing.",
      "Instead of taking big risks, we developed the idea of pooling the money we saved for small expenses like coffee and tea in our daily lives. We decided to invest in cryptocurrencies every two weeks, with a total budget of $500, $25 per person.",
      "We made our first investment on June 1, 2024, and we maintained this disciplined approach. Over six months, each member invested only $275. While some friends left the project for various reasons during this time, we continued on our path with our dedicated core team of 10.",
      "Our goal is to build a strong investment fund with small but steady steps and achieve financial comfort through our collective strength. Instead of taking large risks individually, we develop smart and sustainable investment strategies as a community.",
      "As of today, our portfolio continues to grow."
    ],
    image: {
      src: "/images/about/team-cover.png",
      alt: "Team meeting in modern office conference room with city skyline view",
      width: 1560,
      height: 1041
    }
  };

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
    <div className={styles.container}>
      <PageHeader title={ABOUT_CONTENT.pageTitle} />
      
      <div className={styles.contentSection}>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <Titles variant="light" className={styles.title}>
              {ABOUT_CONTENT.mainTitle}
            </Titles>
            <Paragraph variant="light" size="large" className={styles.description}>
              {ABOUT_CONTENT.description.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < ABOUT_CONTENT.description.length - 1 && (
                    <>
                      <br /><br />
                    </>
                  )}
                </React.Fragment>
              ))}
              <br /><br />
              As of today, our <Link href="/portfolio" className={styles.portfolioLink}>portfolio</Link> is at <span className={styles.dateBlock}>{getCurrentDate()}</span> and continues to grow.
            </Paragraph>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src={ABOUT_CONTENT.image.src}
                alt={ABOUT_CONTENT.image.alt}
                width={ABOUT_CONTENT.image.width}
                height={ABOUT_CONTENT.image.height}
                className={styles.heroImage}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 900px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
