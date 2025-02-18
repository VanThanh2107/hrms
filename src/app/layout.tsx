import type { Metadata } from 'next';
import './globals.css';
import Header from '@/layouts/header';
import { krub } from '@/utils';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${krub.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
