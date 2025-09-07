// Type definitions for Hero component (formerly TVL)

export interface TVLMetric {
  value: string;
  label: string;
  badge?: string;
  superscript?: string;
}

export interface TVLProps {
  className?: string;
  title?: string;
  subtitle?: string;
  metrics?: TVLMetric[];
}

export interface TVLState {
  isVisible: boolean;
  animationDelay: number;
}
