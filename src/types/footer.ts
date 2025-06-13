// Type definitions for Footer components

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string; // Icon identifier (e.g., 'twitter', 'github', 'telegram')
  ariaLabel: string;
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export interface SocialProps {
  links?: SocialLink[];
  className?: string;
  onSocialClick?: (social: SocialLink) => void;
}

export interface FooterProps {
  className?: string;
  companyName?: string;
  copyrightYear?: string;
  links?: FooterLink[];
  socialLinks?: SocialLink[];
  onLinkClick?: (link: FooterLink) => void;
  onSocialClick?: (social: SocialLink) => void;
  onLogoClick?: () => void;
}
