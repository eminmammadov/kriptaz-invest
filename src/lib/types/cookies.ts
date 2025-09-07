// Type definitions for Cookies component

export interface CookiesProps {
  className?: string;
  onAccept?: () => void;
  message?: string;
  buttonText?: string;
  autoShowDelay?: number; // Delay in milliseconds before showing the banner
  hideForHours?: number; // Number of hours to hide the banner after acceptance (default: 6)
}

export interface CookiesBannerState {
  isVisible: boolean;
  isAnimating: boolean;
  shouldRender: boolean;
}
