'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RatesProps, RateCard } from '@/shared/types/rates';
import styles from './Rates.module.css';

const defaultRateCards: RateCard[] = [
  {
    id: 'usdy',
    logo: 'USDY',
    title: 'US Dollar Yield*',
    subtitle: 'For Individuals and Institutions (non US)',
    rate: '4.29%',
    apy: 'APY²',
    targetAudience: 'For Individuals and Institutions (non US)',
    image: '/images/rates/1.png'
  },
  {
    id: 'ousg',
    logo: 'OUSG',
    title: 'Short Term US Treasuries Fund*',
    subtitle: 'For Qualified Purchasers, Accredited Investors',
    rate: '4.13%',
    apy: 'APY²',
    targetAudience: 'For Qualified Purchasers, Accredited Investors',
    image: '/images/rates/2.png'
  }
];

const Rates: React.FC<RatesProps> = ({
  title = "Our Technology, Your Tokens",
  description = "Our Nexus technology enables issuers of tokenized US Treasuries and stablecoins to offer instant minting and redemption to their clients.",
  cards = defaultRateCards,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className={`${styles.ratesContainer} ${className}`}>
      <div className={styles.container}>
        <div className={styles.ratesContent}>
          
          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            {/* Left Content */}
            <div className={styles.leftContent}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              
              {/* Company Logo */}
              <div className={styles.companyLogo}>
                <Image
                  src="/images/partners/blackrock.svg"
                  alt="BlackRock"
                  width={120}
                  height={40}
                  className={styles.logoImage}
                />
              </div>
              
              {/* Transition Line */}
              <div className={styles.transitionLine}>
                <div className={styles.lineProgress} style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}></div>
              </div>
              
              {/* Navigation Arrows */}
              <div className={styles.navigation}>
                <button 
                  className={styles.navButton}
                  onClick={prevCard}
                  aria-label="Previous rate card"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button 
                  className={styles.navButton}
                  onClick={nextCard}
                  aria-label="Next rate card"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content - Enhanced Slider with Images Only */}
            <div className={styles.rightContent}>
              <div className={styles.sliderContainer}>
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`${styles.sliderItem} ${index === currentIndex ? styles.active : ''} ${index < currentIndex ? styles.previous : ''} ${index > currentIndex ? styles.next : ''}`}
                  >
                    <div className={styles.sliderContent}>
                      <div className={styles.cardImage}>
                        <Image
                          src={card.image}
                          alt={`${card.logo} rate card`}
                          width={500}
                          height={350}
                          className={styles.image}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className={styles.mobileLayout}>
            <div className={styles.mobileHeader}>
              <h2 className={styles.mobileTitle}>{title}</h2>
              
              {/* Mobile Navigation */}
              <div className={styles.mobileNavigation}>
                <button 
                  className={styles.mobileNavButton}
                  onClick={prevCard}
                  aria-label="Previous rate card"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button 
                  className={styles.mobileNavButton}
                  onClick={nextCard}
                  aria-label="Next rate card"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <p className={styles.mobileDescription}>{description}</p>

            {/* Mobile Company Logo */}
            <div className={styles.mobileCompanyLogo}>
              <Image
                src="/images/partners/blackrock.svg"
                alt="BlackRock"
                width={100}
                height={32}
                className={styles.mobileLogoImage}
              />
            </div>

            {/* Mobile Rate Card */}
            <div className={styles.mobileCardContainer}>
              <Image
                src={cards[currentIndex].image}
                alt={`${cards[currentIndex].logo} rate card`}
                width={400}
                height={300}
                className={styles.mobileCardImage}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Rates;
