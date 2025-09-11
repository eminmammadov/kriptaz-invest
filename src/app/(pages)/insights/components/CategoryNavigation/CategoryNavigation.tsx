'use client';

import React from 'react';
import styles from './CategoryNavigation.module.css';

interface CategoryNavigationProps {
  categories: string[];
  categoryCounts: Record<string, number>;
  activeCategory?: string;
  onCategoryClick?: (category: string) => void;
  className?: string;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  categoryCounts,
  activeCategory,
  onCategoryClick,
  className = ''
}) => {
  const handleCategoryClick = (category: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onCategoryClick?.(category);
  };

  return (
    <nav className={`${styles.categoryNavigation} ${className}`}>
      {categories.map((category) => (
        <a 
          key={category} 
          href="#" 
          className={`${styles.categoryLink} ${activeCategory === category ? styles.active : ''}`}
          onClick={(e) => handleCategoryClick(category, e)}
        >
          {category} <span className={styles.categoryCount}>{categoryCounts[category] || 0}</span>
        </a>
      ))}
    </nav>
  );
};

export default CategoryNavigation;
