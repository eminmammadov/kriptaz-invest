'use client';

import React, { useState } from 'react';
import { SubscribeProps } from '@/lib/types/subscribe';
import { Button } from '@/components/ui/Button';
import { Titles } from '@/components/ui/Titles';
import styles from './Subscribe.module.css';

const Subscribe: React.FC<SubscribeProps> = ({
  className = '',
  title = "The Future of Finance Subscribe for the latest updates, insights, and news.",
  placeholder = "Email",
  buttonText = "Subscribe",
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Successfully subscribed!');
        setIsSuccess(true);
        setEmail('');
        
        // Call custom handler if provided
        if (onSubscribe) {
          await onSubscribe(email);
        }
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch {
      setMessage('Network error. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${styles.subscribeContainer} ${className}`}>
      <div className={styles.backgroundImage} />
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Titles variant="light" className={styles.title}>
            {title}
          </Titles>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={styles.emailInput}
              disabled={isLoading}
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="medium"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribe...' : buttonText}
            </Button>
          </div>
          
          {message && (
            <div className={`${styles.message} ${isSuccess ? styles.success : styles.error}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
