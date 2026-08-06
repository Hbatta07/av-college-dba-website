import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Department of Business Administration | A.V. College',
  description:
    'Official portal for the Department of Business Administration (MBA), A.V. College of Arts, Science & Commerce, Hyderabad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-brand-bg text-brand-textPrimary`}>
        {children}
      </body>
    </html>
  );
}
