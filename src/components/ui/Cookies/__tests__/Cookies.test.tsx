import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cookies from '../Cookies';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Cookies Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('renders with default message', async () => {
    render(<Cookies />);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    expect(screen.getByText(/The goods referenced on this website/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /OK/ })).toBeInTheDocument();
  });

  it('renders with custom message and button text', async () => {
    const customMessage = 'Custom cookie message';
    const customButtonText = 'Accept All';
    
    render(
      <Cookies 
        message={customMessage}
        buttonText={customButtonText}
      />
    );
    
    await waitFor(() => {
      expect(screen.getByText(customMessage)).toBeInTheDocument();
    });
    
    expect(screen.getByRole('button', { name: new RegExp(customButtonText) })).toBeInTheDocument();
  });

  it('calls onAccept when button is clicked', async () => {
    const mockOnAccept = jest.fn();
    
    render(<Cookies onAccept={mockOnAccept} />);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    const acceptButton = screen.getByRole('button', { name: /OK/ });
    fireEvent.click(acceptButton);
    
    expect(mockOnAccept).toHaveBeenCalledTimes(1);
  });

  it('stores acceptance in localStorage', async () => {
    render(<Cookies />);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    const acceptButton = screen.getByRole('button', { name: /OK/ });
    fireEvent.click(acceptButton);
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'kriptaz_cookies_accepted',
      expect.stringContaining('"accepted":true')
    );
  });

  it('does not render when cookies are already accepted and within time limit', () => {
    const recentTimestamp = Date.now() - (2 * 60 * 60 * 1000); // 2 hours ago
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({ timestamp: recentTimestamp, accepted: true })
    );
    
    render(<Cookies hideForHours={6} />);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when cookies acceptance has expired', async () => {
    const oldTimestamp = Date.now() - (8 * 60 * 60 * 1000); // 8 hours ago
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify({ timestamp: oldTimestamp, accepted: true })
    );
    
    render(<Cookies hideForHours={6} />);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('handles keyboard navigation (Escape key)', async () => {
    const mockOnAccept = jest.fn();
    
    render(<Cookies onAccept={mockOnAccept} />);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    const dialog = screen.getByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape' });
    
    expect(mockOnAccept).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', async () => {
    const customClass = 'custom-cookies-banner';
    
    render(<Cookies className={customClass} />);
    
    await waitFor(() => {
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveClass(customClass);
    });
  });

  it('shows immediately when autoShowDelay is 0', async () => {
    render(<Cookies autoShowDelay={0} />);
    
    // Should appear immediately without waiting
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
