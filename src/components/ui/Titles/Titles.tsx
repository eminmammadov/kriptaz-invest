'use client';

import React from 'react';
import styles from './Titles.module.css';

export interface TitlesProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'dark' | 'light';
}

/**
 * Titles UI component
 * Section title component with consistent styling
 * Based on Statistics component title styles
 */
const Titles: React.FC<TitlesProps> = ({
  children,
  className = '',
  as: Component = 'h2',
  variant = 'dark'
}) => {
  const titleClasses = [
    styles.title,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={titleClasses}>
      {children}
    </Component>
  );
};

export default Titles;
