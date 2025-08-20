// Type definitions for TVL component

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
  onMetricClick?: (metric: TVLMetric) => void;
}

export interface TVLState {
  isVisible: boolean;
  animationDelay: number;
}
