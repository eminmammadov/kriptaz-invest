import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../index';
import { FooterLink } from '@/types/footer';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Footer Component', () => {
  const mockOnLinkClick = jest.fn();
  const mockOnSocialClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<Footer />);

    expect(screen.getByText('Invest Founders © 2025')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByLabelText('Kriptaz Invest - Go to homepage')).toBeInTheDocument();
  });

  it('renders with custom company name and year', () => {
    render(
      <Footer 
        companyName="Kriptaz Invest"
        copyrightYear="2024"
      />
    );
    
    expect(screen.getByText('Kriptaz Invest')).toBeInTheDocument();
    expect(screen.getByText('Kriptaz Invest © 2024')).toBeInTheDocument();
  });

  it('renders custom links', () => {
    const customLinks: FooterLink[] = [
      { label: 'About', href: '/about', external: false },
      { label: 'Contact', href: '/contact', external: false }
    ];

    render(<Footer links={customLinks} />);
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.queryByText('Terms of Service')).not.toBeInTheDocument();
  });

  it('calls onLinkClick when link is clicked', () => {
    const customLinks: FooterLink[] = [
      { label: 'About', href: '/about', external: false }
    ];

    render(
      <Footer 
        links={customLinks}
        onLinkClick={mockOnLinkClick}
      />
    );
    
    fireEvent.click(screen.getByText('About'));
    expect(mockOnLinkClick).toHaveBeenCalledWith(customLinks[0]);
  });

  it('renders social media icons', () => {
    render(<Footer />);

    // Check for social media buttons by their aria-labels
    expect(screen.getByLabelText('Follow us on X')).toBeInTheDocument();
  });

  it('calls onSocialClick when social link is clicked', () => {
    render(<Footer onSocialClick={mockOnSocialClick} />);

    fireEvent.click(screen.getByLabelText('Follow us on X'));
    expect(mockOnSocialClick).toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    // Check social buttons have proper aria-labels
    expect(screen.getByLabelText('Follow us on X')).toBeInTheDocument();

    // Check logo accessibility
    expect(screen.getByLabelText('Kriptaz Invest - Go to homepage')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-footer" />);

    expect(container.firstChild).toHaveClass('custom-footer');
  });

  it('social link opens in new tab with correct URL', () => {
    render(<Footer />);

    const socialLink = screen.getByLabelText('Follow us on X');
    expect(socialLink).toHaveAttribute('href', 'https://x.com/InvestFounders');
    expect(socialLink).toHaveAttribute('target', '_blank');
    expect(socialLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
