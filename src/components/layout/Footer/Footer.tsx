'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FooterProps, SocialLink } from '@/shared/types/footer';
import styles from './Footer.module.css';

// ============================================================================
// FOOTER CONTENT CONFIGURATION - CENTRALIZED TEXT MANAGEMENT
// ============================================================================

// Navigation menu items
const navigationMenu = [
  {
    title: 'Fund',
    items: [
      { label: 'About us', href: '/about', external: false },
      { label: 'Members', href: '/members', external: false },
      { label: 'Insights', href: '/insights', external: false },
      { label: 'Contact', href: '/contact', external: false }
      
    ]
  },
  {
    title: 'Auth',
    items: [
      { label: 'Join', href: '/join', external: false },
      { label: 'Portfolio', href: '/portfolio', external: true },
    ]
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms of Service', href: '/terms', external: false },
      { label: 'Privacy Policy', href: '/privacy', external: true }
    ]
  }
];

// Social media links
const defaultSocialLinks: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/InvestFounders',
    icon: 'twitter',
    ariaLabel: 'Follow us on X'
  }
];

// Legal disclaimer content
const legalContent = {
  disclaimers: [
    "* The Invest Founders Fund and its associated crypto investment services referenced herein are not registered securities under applicable securities laws and regulations. Investment opportunities offered through our platform shall not be considered as registered investment products and may be subject to regulatory restrictions in certain jurisdictions.",
    "The Fund, established by close friends and managed by Invest Founders, operates as an alternative investment vehicle focusing on cryptocurrency and technology assets. While we adhere to official regulatory standards, investors should be aware that crypto investments carry substantial risks and are subject to high volatility.",
    "Our DDGO (Dama Dama Göl Olar) investment principle and weekly allocation strategies are proprietary methodologies that do not guarantee future performance. Past performance, if any, is not indicative of future results. The Fund's disciplined approach to crypto asset allocation may result in partial or total loss of invested capital.",
    "Invest Founders, as the Fund manager, provides investment management services but makes no representations or warranties regarding investment outcomes. The Fund is not registered as an investment company under applicable investment company regulations.",
    "RISK DISCLOSURE: Cryptocurrency investments involve significant risks, including but not limited to: market volatility, regulatory changes, technological risks, liquidity constraints, and potential total loss of investment. Weekly savings allocated to crypto assets through our platform may fluctuate substantially in value.",
    "Nothing herein constitutes an offer to sell or solicitation to buy any securities or investment products. Participation in the Fund requires acceptance of additional terms and conditions. Prospective investors should conduct independent due diligence and consult with qualified financial advisors before making investment decisions.",
    "For additional terms and conditions, please visit: investfounders.com/terms, docs.investfounders.com, and investfounders.com."
  ],
  notes: [
    {
      number: "1.",
      text: "Fund performance metrics are calculated based on changes in net asset value over specified periods and may not accurately reflect actual investor returns due to the timing of contributions and withdrawals."
    },
    {
      number: "2.",
      text: "Investment allocations and returns are subject to market conditions as of the stated date. Weekly contribution amounts and investment strategies may be modified at the Funds discretion."
    },
    {
      number: "3.",
      text: "Regulatory compliance standards referenced are based on current interpretations and may change over time. Additional restrictions and requirements may apply."
    }
  ]
};

// Brand information
const brandInfo = {
  logoAlt: "Invest Founders",
  logoAriaLabel: "Invest Founders - Go to homepage"
};

/**
 * Footer component based on reference design
 * Features navigation menu, legal disclaimers, and company branding
 */
const Footer: React.FC<FooterProps> = ({
  className = '',
  socialLinks = defaultSocialLinks,
  onLinkClick,
  onSocialClick,
  onLogoClick
}) => {
  const router = useRouter();

  const handleLinkClick = (href: string, external: boolean) => {
    if (onLinkClick) {
      onLinkClick({ label: '', href, external });
    } else if (!external) {
      router.push(href);
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      router.push('/');
    }
  };

  const handleSocialClick = (social: SocialLink) => {
    if (onSocialClick) {
      onSocialClick(social);
    }
  };

  return (
    <footer
      className={`${styles.footer} ${className}`}
      role="contentinfo"
    >
      <div className={styles.container}>
        {/* Top Section - Navigation Menu */}
        <div className={styles.navigationSection}>
          {navigationMenu.map((section) => (
            <div key={section.title} className={styles.navColumn}>
              <h3 className={styles.navTitle}>{section.title}</h3>
              <ul className={styles.navList}>
                {section.items.map((item) => (
                  <li key={item.label} className={styles.navItem}>
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.href, item.external)}
                      className={styles.navLink}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                      {item.external && <MdOutlineArrowOutward className={styles.externalIcon} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section - Legal Disclaimers */}
        <div className={styles.legalSection}>
          <div className={styles.disclaimerText}>
            {legalContent.disclaimers.map((disclaimer, index) => (
              <p key={index}>{disclaimer}</p>
            ))}
          </div>

          {/* Numbered Notes */}
          <div className={styles.notesSection}>
            {legalContent.notes.map((note, index) => (
              <div key={index} className={styles.note}>
                <span className={styles.noteNumber}>{note.number}</span>
                <span className={styles.noteText}>{note.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Company Branding */}
        <div className={styles.brandSection}>
          <div className={styles.brandContent}>
            <div
              className={styles.companyLogo}
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && handleLogoClick) {
                  e.preventDefault();
                  handleLogoClick();
                }
              }}
              aria-label={brandInfo.logoAriaLabel}
            >
              <Image
                src="/logos/kriptaz-invest-full-white-logo.svg"
                alt={brandInfo.logoAlt}
                width={100}
                height={30}
                className={styles.logoImage}
                priority
              />
            </div>
            
            {/* Right Side - Copyright, Links and Social */}
            <div className={styles.rightSection}>
              {/* Copyright and Links */}
              <div className={styles.copyrightSection}>
                <div className={styles.copyrightText}>
                  <span>Invest Founders © 2025</span>
                  <span className={styles.separator}>-</span>
                  <Link href="/terms" className={styles.copyrightLink}>
                    Terms of Service
                  </Link>
                  <span className={styles.separator}>-</span>
                  <Link href="/privacy" className={styles.copyrightLink}>
                    Privacy Policy
                  </Link>
                </div>
              </div>
              
              {/* Social Links */}
              <div className={styles.socialSection}>
                <div className={styles.socialContainer}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      onClick={() => {
                        if (handleSocialClick) {
                          handleSocialClick(social);
                        }
                      }}
                      aria-label={social.ariaLabel}
                      title={social.ariaLabel}
                    >
                      {social.icon === 'twitter' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
