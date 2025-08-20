import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TVL from '../TVL';
import { TVLMetric } from '@/shared/types/tvl';

describe('TVL Component', () => {
  const mockMetrics: TVLMetric[] = [
    {
      value: '10',
      label: 'Test Chains'
    },
    {
      value: '$1B',
      label: 'Test Value',
      badge: 'TVL'
    },
    {
      value: '80%',
      label: 'Test Share',
      superscript: '1'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default title and metrics', () => {
    render(<TVL />);
    
    expect(screen.getByRole('region', { name: /total value locked metrics/i })).toBeInTheDocument();
    expect(screen.getByText(/ondo is building the foundation/i)).toBeInTheDocument();
    
    // Check default metrics
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText('$1B')).toBeInTheDocument();
  });

  it('renders with custom title and metrics', () => {
    const customTitle = 'Custom TVL Title';
    
    render(
      <TVL 
        title={customTitle}
        metrics={mockMetrics}
      />
    );
    
    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('$1B')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    const subtitle = 'Test subtitle';
    
    render(
      <TVL 
        subtitle={subtitle}
        metrics={mockMetrics}
      />
    );
    
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('calls onMetricClick when metric is clicked', () => {
    const mockOnMetricClick = jest.fn();
    
    render(
      <TVL 
        metrics={mockMetrics}
        onMetricClick={mockOnMetricClick}
      />
    );
    
    const metricItems = screen.getAllByRole('listitem');
    fireEvent.click(metricItems[0]);
    
    expect(mockOnMetricClick).toHaveBeenCalledWith(mockMetrics[0]);
  });

  it('handles keyboard navigation', () => {
    const mockOnMetricClick = jest.fn();
    
    render(
      <TVL 
        metrics={mockMetrics}
        onMetricClick={mockOnMetricClick}
      />
    );
    
    const metricItems = screen.getAllByRole('listitem');
    fireEvent.keyDown(metricItems[0], { key: 'Enter' });
    
    expect(mockOnMetricClick).toHaveBeenCalledWith(mockMetrics[0]);
  });

  it('handles space key navigation', () => {
    const mockOnMetricClick = jest.fn();
    
    render(
      <TVL 
        metrics={mockMetrics}
        onMetricClick={mockOnMetricClick}
      />
    );
    
    const metricItems = screen.getAllByRole('listitem');
    fireEvent.keyDown(metricItems[0], { key: ' ' });
    
    expect(mockOnMetricClick).toHaveBeenCalledWith(mockMetrics[0]);
  });

  it('renders badges correctly', () => {
    render(<TVL metrics={mockMetrics} />);
    
    expect(screen.getByText('TVL')).toBeInTheDocument();
    expect(screen.getByText('TVL')).toHaveClass('metricBadge');
  });

  it('renders superscripts correctly', () => {
    render(<TVL metrics={mockMetrics} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1')).toHaveClass('metricSuperscript');
  });

  it('applies custom className', () => {
    const customClass = 'custom-tvl';
    
    render(<TVL className={customClass} />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveClass(customClass);
  });

  it('has proper accessibility attributes', () => {
    render(<TVL metrics={mockMetrics} />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveAttribute('aria-label', 'Total Value Locked metrics and statistics');
    
    const metricsList = screen.getByRole('list');
    expect(metricsList).toHaveAttribute('aria-label', 'Key performance metrics');
    
    const metricItems = screen.getAllByRole('listitem');
    metricItems.forEach(item => {
      expect(item).toHaveAttribute('tabIndex', '0');
      expect(item).toHaveAttribute('aria-label');
    });
  });

  it('renders correct number of metrics', () => {
    render(<TVL metrics={mockMetrics} />);
    
    const metricItems = screen.getAllByRole('listitem');
    expect(metricItems).toHaveLength(mockMetrics.length);
  });

  it('handles empty metrics array', () => {
    render(<TVL metrics={[]} />);
    
    const metricItems = screen.queryAllByRole('listitem');
    expect(metricItems).toHaveLength(0);
  });

  it('renders metrics without labels', () => {
    const metricsWithoutLabels: TVLMetric[] = [
      {
        value: '$1B',
        label: '',
        badge: 'TVL'
      }
    ];
    
    render(<TVL metrics={metricsWithoutLabels} />);
    
    expect(screen.getByText('$1B')).toBeInTheDocument();
    expect(screen.getByText('TVL')).toBeInTheDocument();
  });
});
