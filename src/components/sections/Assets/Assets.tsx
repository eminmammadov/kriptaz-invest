'use client';

import React from 'react';
import Image from 'next/image';
import { Titles } from '@/components/ui/Titles';
import { Paragraph } from '@/components/ui/Paragraph';
import { Button } from '@/components/ui/Button';
import styles from './Assets.module.css';

interface Asset {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  lendAPY: string;
  borrowAPY: string;
}

interface AssetsProps {
  className?: string;
}

// Centralized text content
const ASSETS_TEXT = {
  title: 'We generate returns with the Assets we list.',
  description: 'Our investment approach focuses on carefully selected listed assets, enabling us to deliver steady returns while ensuring growth and stability.',
  button: 'Visit Portfolio'
} as const;

// Sample assets data
const assetsData: Asset[] = [
  {
    id: 'usdc',
    name: 'USDC',
    fullName: 'Circle USD',
    icon: 'images/icons/usdc.svg',
    lendAPY: '4.30%',
    borrowAPY: '5.00%'
  },
  {
    id: 'usdt',
    name: 'USDT',
    fullName: 'Tether USD',
    icon: 'images/icons/usdt.svg',
    lendAPY: '4.29%',
    borrowAPY: '5.00%'
  },
  {
    id: 'ondo',
    name: 'ONDO',
    fullName: 'Ondo Finance',
    icon: 'images/icons/ondo.svg',
    lendAPY: '4.37%',
    borrowAPY: '5.08%'
  },
  {
    id: 'ena',
    name: 'ENA',
    fullName: 'Ethena',
    icon: 'images/icons/ena.svg',
    lendAPY: '4.37%',
    borrowAPY: '5.13%'
  }
];

/**
 * Assets section component
 * Displays borrowing and lending information for various crypto assets
 */
const Assets: React.FC<AssetsProps> = ({ className = '' }) => {
  return (
    <section className={`${styles.assetsSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side - Information Block */}
          <div className={styles.infoBlock}>
            <Titles variant="dark" className={styles.title}>
              {ASSETS_TEXT.title}
            </Titles>
            
            <Paragraph variant="dark" size="medium" className={styles.description}>
              {ASSETS_TEXT.description}
            </Paragraph>
            
            <Button
              href="/portfolio"
              variant="secondary"
              size="medium"
              className={styles.visitButton}
            >
              {ASSETS_TEXT.button}
            </Button>
          </div>

          {/* Right Side - Assets List */}
          <div className={styles.assetsList}>
            {assetsData.map((asset) => (
              <div key={asset.id} className={styles.assetItem}>
                <div className={styles.assetInfo}>
                  <div className={styles.assetIcon}>
                    <Image 
                      src={asset.icon} 
                      alt={asset.name}
                      width={32}
                      height={32}
                      className={styles.icon}
                    />
                  </div>
                  <div className={styles.assetDetails}>
                    <h3 className={styles.assetName}>{asset.name}</h3>
                    <p className={styles.assetFullName}>{asset.fullName}</p>
                  </div>
                </div>
                
                <div className={styles.apyInfo}>
                  <div className={styles.apyItem}>
                    <span className={styles.apyValue}>{asset.lendAPY}</span>
                    <span className={styles.apyLabel}>Low APM</span>
                  </div>
                  <div className={styles.apyItem}>
                    <span className={styles.apyValue}>{asset.borrowAPY}</span>
                    <span className={styles.apyLabel}>High APM</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assets;
