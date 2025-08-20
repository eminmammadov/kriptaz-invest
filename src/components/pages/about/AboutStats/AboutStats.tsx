import React from 'react';
import styles from './AboutStats.module.css';

interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

type AboutStatsProps = object

const AboutStats: React.FC<AboutStatsProps> = () => {
  const stats: Stat[] = [
    {
      id: '1',
      value: '$2.5B+',
      label: 'Assets Under Management',
      description: 'Total value of assets managed'
    },
    {
      id: '2',
      value: '50K+',
      label: 'Active Users',
      description: 'Registered platform users'
    },
    {
      id: '3',
      value: '25+',
      label: 'Countries',
      description: 'Global market presence'
    },
    {
      id: '4',
      value: '99.9%',
      label: 'Uptime',
      description: 'Platform reliability'
    },
    {
      id: '5',
      value: '150+',
      label: 'Team Members',
      description: 'Global workforce'
    },
    {
      id: '6',
      value: '5 Years',
      label: 'Experience',
      description: 'Industry expertise'
    },
    {
      id: '7',
      value: '24/7',
      label: 'Support',
      description: 'Customer service'
    },
    {
      id: '8',
      value: '1M+',
      label: 'Transactions',
      description: 'Processed monthly'
    }
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.statsContent}>
          <div className={styles.headerSection}>
            <h2 className={styles.title}>
              Numbers that define our impact
            </h2>
            <p className={styles.subtitle}>
              Our growth and success metrics demonstrate our commitment to excellence and innovation in financial technology.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                {stat.description && (
                  <div className={styles.statDescription}>{stat.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
