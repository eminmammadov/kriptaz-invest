'use client';

import React from 'react';
import { LinkProps } from '@/shared/types/footer';
import styles from './Link.module.css';

/**
 * Reusable Link component for Footer navigation
 * Handles both internal and external links with proper accessibility
 */
const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  external = false,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const linkProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {};

  return (
    <a
      href={href}
      className={`${styles.link} ${className}`}
      onClick={handleClick}
      {...linkProps}
    >
      {children}
    </a>
  );
};

export default Link;
