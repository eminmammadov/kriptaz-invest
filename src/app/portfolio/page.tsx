'use client';

import { Header } from '@/components/Header';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Portfolio
          </h1>
        </div>
      </main>
    </div>
  );
}
