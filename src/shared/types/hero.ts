// Type definitions for Hero component

export interface HeroProps {
  className?: string;
  videoSrc?: string;
  title?: string;
  description?: string;
  onVideoLoad?: () => void;
  onVideoError?: (error: Event) => void;
}
