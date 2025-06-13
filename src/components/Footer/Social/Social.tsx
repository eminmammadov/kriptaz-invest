'use client';

import React from 'react';
import { SocialProps, SocialLink } from '@/types/footer';
import styles from './Social.module.css';

// Default social links based on the design
const defaultSocialLinks: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/InvestFounders',
    icon: 'twitter',
    ariaLabel: 'Follow us on X'
  }
];

/**
 * Social media icons component for Footer
 * Displays social media links with hover effects
 */
const Social: React.FC<SocialProps> = ({
  links = defaultSocialLinks,
  className = '',
  onSocialClick
}) => {

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'twitter':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.socialContainer} ${className}`}>
      {links.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          onClick={() => {
            // Allow default link behavior but also call custom handler if provided
            if (onSocialClick) {
              onSocialClick(social);
            }
          }}
          aria-label={social.ariaLabel}
          title={social.ariaLabel}
        >
          {renderIcon(social.icon)}
        </a>
      ))}
    </div>
  );
};

export default Social;
