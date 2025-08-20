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
  title = "Institutional-Grade Cash Management",
  description = "Earn reliable, high quality yield backed by short-term US Treasuries, distributed daily. Built with institutional-grade transparency.",
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
              
              {/* Navigation Arrows */}
              <div className={styles.navigation}>
                <button 
                  className={styles.navButton}
                  onClick={prevCard}
                  aria-label="Previous rate card"
                >
                  ←
                </button>
                <button 
                  className={styles.navButton}
                  onClick={nextCard}
                  aria-label="Next rate card"
                >
                  →
                </button>
              </div>
            </div>

            {/* Right Content - Rate Cards */}
            <div className={styles.rightContent}>
              <div className={styles.cardsContainer}>
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`${styles.rateCard} ${index === currentIndex ? styles.active : ''}`}
                  >
                    <Image
                      src={card.image}
                      alt={`${card.logo} rate card`}
                      width={400}
                      height={200}
                      className={styles.cardImage}
                      priority={index === 0}
                    />
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
                  ←
                </button>
                <button 
                  className={styles.mobileNavButton}
                  onClick={nextCard}
                  aria-label="Next rate card"
                >
                  →
                </button>
              </div>
            </div>

            <p className={styles.mobileDescription}>{description}</p>

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
