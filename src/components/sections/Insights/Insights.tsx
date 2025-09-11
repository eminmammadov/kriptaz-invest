'use client';

import React from 'react';
import { Article } from '@/lib/articles/articles';
import { Titles } from '@/components/ui/Titles';
import { Button } from '@/components/ui/Button';
import { InsightsCard } from '@/components/ui/InsightsCard';
import styles from './Insights.module.css';

interface InsightsProps {
  articles: Article[];
  className?: string;
}

// Centralized text content
const INSIGHTS_TEXT = {
  title: 'Resources See the Latest from Invest Founders',
  exploreButton: 'Explore Insights'
} as const;

// Configuration constants
const INSIGHTS_CONFIG = {
  maxArticles: 4,
  descriptionLimit: 140
} as const;

/**
 * Insights section component for homepage
 * Shows latest articles in responsive grid layout
 */
const Insights: React.FC<InsightsProps> = ({
  articles,
  className = ''
}) => {
  // If no articles, don't render the section
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className={`${styles.insightsSection} ${className}`}>
      <div className={styles.container}>
        <div className={styles.insightsContent}>
          {/* Header Section */}
          <div className={styles.insightsHeader}>
            <Titles variant="dark">{INSIGHTS_TEXT.title}</Titles>
          </div>

          {/* Articles Grid */}
          <div className={styles.articlesGrid}>
            {articles.slice(0, INSIGHTS_CONFIG.maxArticles).map((article) => (
              <InsightsCard 
                key={article.id} 
                article={article}
                variant="homepage"
                showDescription={true}
                descriptionLimit={INSIGHTS_CONFIG.descriptionLimit}
              />
            ))}
          </div>

          {/* Explore Button */}
          <div className={styles.exploreButton}>
            <Button href="/insights" variant="secondary" size="medium">
              {INSIGHTS_TEXT.exploreButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
