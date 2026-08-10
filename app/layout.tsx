'use client';

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { COLLEGE_INFO } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileDrawer from '@/components/layout/MobileDrawer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>{`${COLLEGE_INFO.department} | ${COLLEGE_INFO.name}`}</title>
        <meta
          name="description"
          content={`${COLLEGE_INFO.status} - ${COLLEGE_INFO.accreditation}`}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-brand-bg text-brand-textPrimary antialiased`}>
        <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <MobileDrawer
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
