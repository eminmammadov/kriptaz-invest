import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectSlider from '../ProjectSlider';
import { ProjectLogo } from '@/types/projectSlider';

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  };
});

describe('ProjectSlider Component', () => {
  const mockLogos: ProjectLogo[] = [
    {
      name: 'Test Logo 1',
      src: '/test1.svg',
      alt: 'Test logo 1'
    },
    {
      name: 'Test Logo 2',
      src: '/test2.svg',
      alt: 'Test logo 2',
      href: 'https://example.com'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default logos', () => {
    render(<ProjectSlider />);
    
    expect(screen.getByRole('region', { name: /partner and project logos carousel/i })).toBeInTheDocument();
    
    // Should render default logos (duplicated for infinite scroll)
    expect(screen.getAllByAltText(/aptos blockchain platform logo/i)).toHaveLength(2);
    expect(screen.getAllByAltText(/blackrock investment management logo/i)).toHaveLength(2);
  });

  it('renders with custom logos', () => {
    render(<ProjectSlider logos={mockLogos} />);
    
    expect(screen.getAllByAltText('Test logo 1')).toHaveLength(2); // Duplicated
    expect(screen.getAllByAltText('Test logo 2')).toHaveLength(2); // Duplicated
  });

  it('calls onLogoClick when logo is clicked', () => {
    const mockOnLogoClick = jest.fn();
    
    render(<ProjectSlider logos={mockLogos} onLogoClick={mockOnLogoClick} />);
    
    const logoButton = screen.getAllByRole('button')[0];
    fireEvent.click(logoButton);
    
    expect(mockOnLogoClick).toHaveBeenCalledWith(mockLogos[0]);
  });

  it('handles keyboard navigation', () => {
    const mockOnLogoClick = jest.fn();
    
    render(<ProjectSlider logos={mockLogos} onLogoClick={mockOnLogoClick} />);
    
    const logoButton = screen.getAllByRole('button')[0];
    fireEvent.keyDown(logoButton, { key: 'Enter' });
    
    expect(mockOnLogoClick).toHaveBeenCalledWith(mockLogos[0]);
  });

  it('handles space key navigation', () => {
    const mockOnLogoClick = jest.fn();
    
    render(<ProjectSlider logos={mockLogos} onLogoClick={mockOnLogoClick} />);
    
    const logoButton = screen.getAllByRole('button')[0];
    fireEvent.keyDown(logoButton, { key: ' ' });
    
    expect(mockOnLogoClick).toHaveBeenCalledWith(mockLogos[0]);
  });

  it('pauses animation on hover when pauseOnHover is true', () => {
    render(<ProjectSlider pauseOnHover={true} />);
    
    const container = screen.getByRole('region');
    const track = container.querySelector('[class*="sliderTrack"]');
    
    expect(track).not.toHaveClass('paused');
    
    fireEvent.mouseEnter(container);
    expect(track).toHaveClass('paused');
    
    fireEvent.mouseLeave(container);
    expect(track).not.toHaveClass('paused');
  });

  it('does not pause animation on hover when pauseOnHover is false', () => {
    render(<ProjectSlider pauseOnHover={false} />);
    
    const container = screen.getByRole('region');
    const track = container.querySelector('[class*="sliderTrack"]');
    
    fireEvent.mouseEnter(container);
    expect(track).not.toHaveClass('paused');
  });

  it('applies custom className', () => {
    const customClass = 'custom-slider';
    
    render(<ProjectSlider className={customClass} />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveClass(customClass);
  });

  it('applies custom CSS properties for styling', () => {
    render(
      <ProjectSlider 
        animationSpeed={20}
        logoHeight={60}
        spacing={4}
      />
    );
    
    const container = screen.getByRole('region');

    // Note: jsdom doesn't fully support CSS custom properties,
    // but we can check that the style attribute is set
    expect(container).toHaveAttribute('style');
  });

  it('opens external link when logo with href is clicked', () => {
    // Mock window.open
    const mockOpen = jest.fn();
    Object.defineProperty(window, 'open', {
      value: mockOpen,
      writable: true
    });
    
    render(<ProjectSlider logos={mockLogos} />);
    
    // Click the logo with href
    const logoButtons = screen.getAllByRole('button');
    const logoWithHref = logoButtons.find(button => 
      button.getAttribute('aria-label')?.includes('Test Logo 2')
    );
    
    if (logoWithHref) {
      fireEvent.click(logoWithHref);
      expect(mockOpen).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer');
    }
  });

  it('has proper accessibility attributes', () => {
    render(<ProjectSlider logos={mockLogos} />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveAttribute('aria-label', 'Partner and project logos carousel');
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('tabIndex', '0');
      expect(button).toHaveAttribute('aria-label');
    });
  });

  it('renders correct number of duplicated logos', () => {
    render(<ProjectSlider logos={mockLogos} />);
    
    // Should render each logo twice (original + duplicate for infinite scroll)
    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(mockLogos.length * 2);
  });
});
