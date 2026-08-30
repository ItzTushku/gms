import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Golomt Custody Trading Concept',
  description: 'Golomt Custody trading concept.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
