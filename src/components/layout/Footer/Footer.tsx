'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from './Link/Link';
import Social from './Social/Social';
import { FooterProps, FooterLink, SocialLink } from '@/shared/types/footer';
import styles from './Footer.module.css';

// Default footer links based on the design
const defaultFooterLinks: FooterLink[] = [
  {
    label: 'Terms of Service',
    href: '/terms',
    external: false
  },
  {
    label: 'Privacy Policy',
    href: '/privacy',
    external: false
  }
];

// Default social links
const defaultSocialLinks: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/InvestFounders',
    icon: 'twitter',
    ariaLabel: 'Follow us on X'
  }
];

/**
 * Main Footer component that combines Logo, Links, and Social components
 * Features responsive design matching the provided designs exactly
 */
const Footer: React.FC<FooterProps> = ({
  className = '',
  companyName = 'Invest Founders',
  copyrightYear = '2025',
  links = defaultFooterLinks,
  socialLinks = defaultSocialLinks,
  onLinkClick,
  onSocialClick,
  onLogoClick
}) => {
  const router = useRouter();

  const handleLinkClick = (link: FooterLink) => {
    if (onLinkClick) {
      onLinkClick(link);
    } else if (!link.external) {
      // Navigate using Next.js router for internal links
      router.push(link.href);
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      // Navigate to home page
      router.push('/');
    }
  };

  const handleSocialClick = (social: SocialLink) => {
    if (onSocialClick) {
      onSocialClick(social);
    }
    // Default behavior is handled in Social component
  };

  return (
    <footer
      className={`${styles.footer} ${className}`}
      role="contentinfo"
    >
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Disclaimer Text */}
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerText}>
              IMPORTANT LEGAL DISCLAIMERS AND RISK WARNINGS
              The Invest Founders (Fund) and its associated crypto investment services referenced herein are not registered securities under applicable securities laws and regulations. Investment opportunities offered through our platform shall not be considered as registered investment products and may be subject to regulatory restrictions in certain jurisdictions.

              
              The Fund, established by close friends and managed by Kriptaz Blockchain, operates as an alternative investment vehicle focusing on cryptocurrency and technology assets. While we adhere to official regulatory standards, investors should be aware that crypto investments carry substantial risks and are subject to high volatility.
              
              Our DDGO (Dama Dama Göl Olar) investment principle and weekly allocation strategies are proprietary methodologies that do not guarantee future performance. Past performance, if any, is not indicative of future results. The Funds disciplined approach to crypto asset allocation may result in partial or total loss of invested capital.
              
              Kriptaz Blockchain, as the Fund manager, provides investment management services but makes no representations or warranties regarding investment outcomes. The Fund is not registered as an investment company under applicable investment company regulations.
              
              RISK DISCLOSURE: Cryptocurrency investments involve significant risks, including but not limited to: market volatility, regulatory changes, technological risks, liquidity constraints, and potential total loss of investment. Weekly savings allocated to crypto assets through our platform may fluctuate substantially in value.
              
              Nothing herein constitutes an offer to sell or solicitation to buy any securities or investment products. Participation in the Fund requires acceptance of additional terms and conditions. Prospective investors should conduct independent due diligence and consult with qualified financial advisors before making investment decisions.
            </p>
            <p className={styles.disclaimerText}>
              [1] Fund performance metrics are calculated based on changes in net asset value over specified periods and may not accurately reflect actual investor returns due to the timing of contributions and withdrawals.
            </p>
            <p className={styles.disclaimerText}>
              [2] Investment allocations and returns are subject to market conditions as of the stated date. Weekly contribution amounts and investment strategies may be modified at the Funds discretion.
            </p>
            <p className={styles.disclaimerText}>
              [3] Regulatory compliance standards referenced are based on current interpretations and may change over time. Additional restrictions and requirements may apply.
            </p>
          </div>

          {/* Company Logo */}
          <div className={styles.logoSection}>
            <div
              className={styles.footerLogo}
              onClick={handleLogoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && handleLogoClick) {
                  e.preventDefault();
                  handleLogoClick();
                }
              }}
              aria-label="Kriptaz Invest - Go to homepage"
            >
              <Image
                src="/logos/kriptaz-invest-full-white-logo.svg"
                alt="Kriptaz Invest"
                width={400}
                height={120}
                className={styles.logoImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Left side: Copyright and Links */}
          <div className={styles.leftSection}>
            <span className={styles.copyright}>
              {companyName} © {copyrightYear}
            </span>
            <div className={styles.linksContainer}>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  external={link.external}
                  onClick={() => handleLinkClick(link)}
                  className={styles.footerLink}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Social Media */}
          <div className={styles.rightSection}>
            <Social
              links={socialLinks}
              onSocialClick={handleSocialClick}
              className={styles.socialSection}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
