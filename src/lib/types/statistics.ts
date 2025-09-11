// Type definitions for Statistics component

export interface StatisticsMetric {
  value: string;
  label: string;
  badge?: string;
  superscript?: string;
}

export interface StatisticsProps {
  className?: string;
  title?: string;
  metrics?: StatisticsMetric[];
}
