'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ClientsLogo.module.css';

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface ClientsLogoProps {
  logos?: ClientLogo[];
  className?: string;
}

/**
 * ClientsLogo UI component
 * Displays partner/client logos in an infinite scrolling slider
 */
const ClientsLogo: React.FC<ClientsLogoProps> = ({
  logos = [],
  className = ''
}) => {
  // Default logos if none provided
  const defaultLogos: ClientLogo[] = [
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

  const baseLogos = logos.length > 0 ? logos : defaultLogos;

  // Sonsuz döngü için 4 kez çoğalt
  const clientLogos = [
    ...baseLogos,
    ...baseLogos,
    ...baseLogos,
    ...baseLogos
  ];

  return (
    <div className={`${styles.clientsLogoContainer} ${className}`}>
      <div className={styles.clientsLogoWrapper}>
        <div className={styles.logosSlider}>
          {clientLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={40}
                className={styles.clientLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;
