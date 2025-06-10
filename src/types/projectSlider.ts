// Type definitions for ProjectSlider component

export interface ProjectLogo {
  name: string;
  src: string;
  alt: string;
  href?: string; // Optional link for logo clicks
}

export interface ProjectSliderProps {
  className?: string;
  logos?: ProjectLogo[];
  animationSpeed?: number; // Duration in seconds for one complete cycle
  pauseOnHover?: boolean;
  logoHeight?: number; // Height in pixels for logos
  spacing?: number; // Spacing between logos in rem
  onLogoClick?: (logo: ProjectLogo) => void;
}

export interface ProjectSliderState {
  isPaused: boolean;
  isHovered: boolean;
}
