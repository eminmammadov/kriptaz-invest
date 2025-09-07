import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "../styles/globals.css";
import ClientLayout from '@/components/layout/ClientLayout';

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kriptaz Invest - Crypto Investment Fund",
    template: "%s | Kriptaz Invest"
  },
  description: "Professional crypto investment fund established by mutual investors. Managed with disciplined strategies and regulatory standards for reliable, transparent investment services.",
  keywords: ["crypto investment", "blockchain fund", "cryptocurrency", "investment platform", "digital assets", "DeFi", "portfolio management"],
  authors: [{ name: "Kriptaz Blockchain" }],
  creator: "Kriptaz Blockchain",
  publisher: "Kriptaz Invest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kriptaz-invest.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Kriptaz Invest - Crypto Investment Fund',
    description: 'Professional crypto investment fund established by mutual investors. Managed with disciplined strategies and regulatory standards.',
    siteName: 'Kriptaz Invest',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kriptaz Invest - Crypto Investment Fund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriptaz Invest - Crypto Investment Fund',
    description: 'Professional crypto investment fund established by mutual investors.',
    creator: '@KriptazInvest',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/gellix/Gellix-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/gellix/Gellix-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${playfair.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
