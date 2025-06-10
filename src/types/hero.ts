// Type definitions for Hero component

export interface HeroProps {
  className?: string;
  videoSrc?: string;
  videoOverlayImage?: string;
  title?: string;
  leftText?: string;
  rightText?: string;
  onVideoLoad?: () => void;
  onVideoError?: (error: Event) => void;
}
