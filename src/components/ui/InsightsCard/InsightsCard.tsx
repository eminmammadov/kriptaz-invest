import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/articles/articles';
import styles from './InsightsCard.module.css';

interface InsightsCardProps {
  article: Article;
  variant?: 'homepage' | 'insights-page';
  showDescription?: boolean;
  descriptionLimit?: number;
  className?: string;
}

/**
 * InsightsCard UI component
 * Reusable article card for both homepage and insights page
 */
const InsightsCard: React.FC<InsightsCardProps> = ({
  article,
  variant = 'homepage',
  showDescription = true,
  descriptionLimit = 140,
  className = ''
}) => {
  // Truncate description if needed
  const truncatedDescription = showDescription && article.description
    ? article.description.length > descriptionLimit
      ? `${article.description.substring(0, descriptionLimit)}...`
      : article.description
    : null;

  return (
    <Link 
      href={`/insights/${article.slug}`} 
      className={`${styles.insightsCard} ${styles[variant]} ${className}`}
    >
      {/* Card Image */}
      <div className={styles.imageContainer}>
        <Image
          src={article.imagePath}
          alt={article.title}
          fill
          className={styles.articleImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Card Content */}
      <div className={styles.content}>
        <div className={styles.metadata}>
          {article.category} • {article.date}
        </div>
        <h3 className={styles.title}>
          {article.title}
        </h3>
        
        {/* Description for homepage variant */}
        {variant === 'homepage' && truncatedDescription && (
          <p className={styles.description}>
            {truncatedDescription}
          </p>
        )}
        
        {/* Read More for insights page variant */}
        {variant === 'insights-page' && (
          <div className={styles.readMore}>
            Read More →
          </div>
        )}
      </div>
    </Link>
  );
};

export default InsightsCard;
