import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invest Founders - Investment Platform",
  description: "Investment platform developed by Kriptaz Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1239.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
