'use client';

import React from 'react';
import styles from './BigTitle.module.css';

export interface BigTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * BigTitle UI component
 * Large, prominent title component with responsive design
 * Based on Hero component title styles
 */
const BigTitle: React.FC<BigTitleProps> = ({
  children,
  className = '',
  as: Component = 'h1'
}) => {
  return (
    <Component className={`${styles.bigTitle} ${className}`}>
      {children}
    </Component>
  );
};

export default BigTitle;
