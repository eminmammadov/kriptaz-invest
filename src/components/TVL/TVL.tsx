'use client';

import React from 'react';
import { TVLProps, TVLMetric } from '@/types/tvl';
import styles from './TVL.module.css';

// Default metrics based on the image
const defaultMetrics: TVLMetric[] = [
  {
    value: '10',
    label: 'Friend Members'
  },
  {
    value: '6',
    label: 'Investment Projects'
  },
  {
    value: '4.5%',
    label: 'Investor Rate',
    superscript: '1'
  },
  {
    value: '$50K',
    label: 'Market Value',
    badge: 'TVL'
  }
];

/**
 * TVL component displaying key metrics and statistics
 * Features elegant typography and smooth animations
 */
const TVL: React.FC<TVLProps> = ({
  className = '',
  title = 'Invest Founders fund was established with Close Friends',
  subtitle,
  metrics = defaultMetrics
}) => {


  return (
    <section 
      className={`${styles.tvlContainer} ${className}`}
      role="region"
      aria-label="Total Value Locked metrics and statistics"
    >
      <div className={styles.tvlContent}>
        {/* Header Section */}
        <div className={styles.tvlHeader}>
          <h2 className={styles.tvlTitle}>
            {title}
          </h2>
          {subtitle && (
            <p className={styles.tvlSubtitle}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Metrics Grid */}
        <div 
          className={styles.metricsGrid}
          role="list"
          aria-label="Key performance metrics"
        >
          {metrics.map((metric, index) => (
            <div
              key={`${metric.value}-${index}`}
              className={styles.metricItem}
              role="listitem"
              aria-label={`${metric.value} ${metric.label}${metric.badge ? ` ${metric.badge}` : ''}`}
            >
              <div className={styles.metricValue}>
                {metric.value}
                {metric.superscript && (
                  <span className={styles.metricSuperscript}>
                    {metric.superscript}
                  </span>
                )}
                {metric.badge && (
                  <span className={styles.metricBadge}>
                    {metric.badge}
                  </span>
                )}
              </div>
              {metric.label && (
                <p className={styles.metricLabel}>
                  {metric.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TVL;
