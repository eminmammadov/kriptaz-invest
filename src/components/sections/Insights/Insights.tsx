'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/articles/articles';
import styles from './Insights.module.css';

interface InsightsProps {
  articles: Article[];
  className?: string;
}

/**
 * Insights section component for homepage
 * Shows latest articles in responsive grid layout
 */
const Insights: React.FC<InsightsProps> = ({
  articles,
  className = ''
}) => {
  // Debug log
  console.log('Insights component - articles:', articles);
  
  // Take only the first 4 articles for homepage
  const displayArticles = articles.slice(0, 4);

  // If no articles, don't render the section
  if (!articles || articles.length === 0) {
    console.log('No articles found, not rendering Insights section');
    return null;
  }

  return (
    <section className={`${styles.insightsSection} ${className}`}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Resources</h2>
          <p className={styles.subtitle}>See the Latest from Kriptaz</p>
        </div>

        {/* Articles Grid */}
        <div className={styles.articlesGrid}>
          {displayArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/insights/${article.slug}`} 
              className={styles.articleCard}
            >
              {/* Card Header with Image/Logo */}
              <div className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <Image
                    src={article.imagePath}
                    alt={article.title}
                    fill
                    className={styles.articleImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.metadata}>
                  {article.category} • {article.date}
                </div>
                <h3 className={styles.articleTitle}>
                  {article.title}
                </h3>
                <p className={styles.excerpt}>
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore Button */}
        <div className={styles.exploreButton}>
          <Link href="/insights" className={styles.exploreBtn}>
            Explore Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
