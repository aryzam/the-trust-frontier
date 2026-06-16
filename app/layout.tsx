import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Trust Frontier',
  description: 'Illuminating the technologies reshaping our world — the ones hiding in plain sight.',
  openGraph: {
    title: 'The Trust Frontier',
    description: 'Illuminating the technologies reshaping our world — the ones hiding in plain sight.',
    url: 'https://thetrustfrontier.com',
    siteName: 'The Trust Frontier',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
