'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AboutPartners.module.css';

interface Partner {
  id: string;
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

interface AboutPartnersProps {
  className?: string;
}

const AboutPartners: React.FC<AboutPartnersProps> = ({ className = '' }) => {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Switchboard',
      logo: '/images/partners/switchboard.svg',
      alt: 'Switchboard logo'
    },
    {
      id: '2',
      name: 'WithoutFee',
      logo: '/images/partners/withoutfee.svg',
      alt: 'WithoutFee logo'
    },
    {
      id: '3',
      name: 'XRP Ledger',
      logo: '/images/partners/xrp-ledger.svg',
      alt: 'XRP Ledger logo'
    },
    {
      id: '4',
      name: 'BlackRock',
      logo: '/images/partners/blackrock.svg',
      alt: 'BlackRock logo'
    },
    {
      id: '5',
      name: 'Ripple',
      logo: '/images/partners/ripple.svg',
      alt: 'Ripple logo'
    },
    {
      id: '6',
      name: 'Franklin Templeton',
      logo: '/images/partners/franklin-templeton.svg',
      alt: 'Franklin Templeton logo'
    },
    {
      id: '7',
      name: 'Gitcoin',
      logo: '/images/partners/gitcoin.svg',
      alt: 'Gitcoin logo'
    },
    {
      id: '8',
      name: 'Jupiter',
      logo: '/images/partners/jupiter.svg',
      alt: 'Jupiter logo'
    },
    {
      id: '9',
      name: 'Coinbase',
      logo: '/images/partners/coinbase.svg',
      alt: 'Coinbase logo'
    },
    {
      id: '10',
      name: 'Phantom',
      logo: '/images/partners/phantom.svg',
      alt: 'Phantom logo'
    },
    {
      id: '11',
      name: 'Solana',
      logo: '/images/partners/solana.svg',
      alt: 'Solana logo'
    },
    {
      id: '12',
      name: 'Polygon',
      logo: '/images/partners/polygon.svg',
      alt: 'Polygon logo'
    },
    {
      id: '13',
      name: 'Arbitrum',
      logo: '/images/partners/arbitrum.svg',
      alt: 'Arbitrum logo'
    },
    {
      id: '14',
      name: 'Chainlink',
      logo: '/images/partners/chainlink.svg',
      alt: 'Chainlink logo'
    },
    {
      id: '15',
      name: 'Fidelity',
      logo: '/images/partners/fidelity.svg',
      alt: 'Fidelity logo'
    },
    {
      id: '16',
      name: 'PayPal',
      logo: '/images/partners/paypal.svg',
      alt: 'PayPal logo'
    },
    {
      id: '17',
      name: 'LayerZero',
      logo: '/images/partners/layerzero.svg',
      alt: 'LayerZero logo'
    },
    {
      id: '18',
      name: 'Meta Mask',
      logo: '/images/partners/metamask.svg',
      alt: 'Meta Mask logo'
    },
    {
      id: '19',
      name: 'Axelar',
      logo: '/images/partners/axelar.svg',
      alt: 'Axelar logo'
    },
    {
      id: '20',
      name: 'Stellar',
      logo: '/images/partners/stellar.svg',
      alt: 'Stellar logo'
    }
  ];

  const handleExploreClick = () => {
    console.log('Explore Ecosystem clicked');
  };

  return (
    <section className={`${styles.partners} ${className}`} role="region" aria-labelledby="partners-section-title">
      <div className={styles.container}>
        <div className={styles.partnersContent}>
          <div className={styles.headerSection}>
            <p className={styles.sectionLabel}>Our Partners</p>
            <h2 id="partners-section-title" className={styles.title}>
              Network of top-tier partners<br />and service providers
            </h2>
            <p className={styles.description}>
              The Ondo Ecosystem is the set of partners aligned with this mission, a network of strong partnerships 
              with leading on-chain providers across liquidity, custody, and other key on-chain services. This directory 
              helps us shine the spotlight on these exceptional partners and helps our clients find reputable players 
              that can help them achieve their goals.
            </p>
            <button 
              className={styles.exploreButton}
              onClick={handleExploreClick}
              aria-label="Explore our ecosystem of partners"
            >
              Explore Ecosystem
            </button>
          </div>
          
          <div className={styles.partnersGrid} role="list" aria-label="Partner companies">
            {partners.map((partner) => (
              <div key={partner.id} className={styles.partnerItem} role="listitem">
                <div className={styles.partnerLogo}>
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className={styles.logoImage}
                    sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 120px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
