'use client';

import React from 'react';
import styles from './Paragraph.module.css';

export interface ParagraphProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  as?: 'p' | 'div' | 'span';
}

/**
 * Paragraph UI component
 * Text component with dark and light variants for different backgrounds
 * Dark variant: for white backgrounds (black text)
 * Light variant: for dark backgrounds (white text)
 */
const Paragraph: React.FC<ParagraphProps> = ({
  children,
  variant = 'light',
  size = 'medium',
  className = '',
  as: Component = 'p'
}) => {
  const paragraphClasses = [
    styles.paragraph,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={paragraphClasses}>
      {children}
    </Component>
  );
};

export default Paragraph;
