import React from 'react';
import JoinHero from './components/JoinHero/JoinHero';

export default function JoinPage() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      <JoinHero />
    </div>
  );
}