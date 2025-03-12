import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import ReactQueryProvider from './_frontend/util/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Search your books',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
