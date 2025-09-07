'use client';

import React, { useState } from 'react';
import { SubscribeProps } from '@/lib/types/subscribe';
import styles from './Subscribe.module.css';

const Subscribe: React.FC<SubscribeProps> = ({
  className = '',
  title = "The Future of Finance",
  description = "Subscribe for the latest updates, insights, and news.",
  placeholder = "Email",
  buttonText = "Sign Up",
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
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
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
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : buttonText}
            </button>
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
