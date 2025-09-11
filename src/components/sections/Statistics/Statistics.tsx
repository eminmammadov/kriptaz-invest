'use client';

import React from 'react';
import { StatisticsProps, StatisticsMetric } from '@/lib/types/statistics';
import { Titles } from '@/components/ui/Titles';
import styles from './Statistics.module.css';

// Default metrics based on the image
const defaultMetrics: StatisticsMetric[] = [
  {
    value: '9',
    label: 'Friend Members'
  },
  {
    value: '11',
    label: 'Investment Projects'
  },
  {
    value: '4.29%',
    label: 'Investor Rate',
    superscript: '+'
  },
  {
    value: '$100K',
    label: 'Market Value',
    badge: 'TVL'
  }
];

/**
 * Statistics component displaying key metrics and statistics
 * Features elegant typography and smooth animations
 */
const Statistics: React.FC<StatisticsProps> = ({
  className = '',
  title = 'Invest Founders fund was established with Close Friends',
  metrics = defaultMetrics
}) => {
  return (
    <section
      className={`${styles.statisticsContainer} ${className}`}
      role="region"
      aria-label="Statistics and metrics"
    >
      <div className={styles.container}>
        <div className={styles.statisticsContent}>
        {/* Header Section */}
        <div className={styles.statisticsHeader}>
          <Titles variant="dark">{title}</Titles>
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
      </div>
    </section>
  );
};

export default Statistics;
