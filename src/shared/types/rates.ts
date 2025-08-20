export interface RateCard {
  id: string;
  logo: string;
  title: string;
  subtitle: string;
  rate: string;
  apy: string;
  targetAudience: string;
  image: string;
}

export interface RatesProps {
  title?: string;
  description?: string;
  cards?: RateCard[];
  className?: string;
}
