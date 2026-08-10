'use client';

import React from 'react';
import Link from 'next/link';
import { COLLEGE_INFO } from '@/lib/constants';
import Navigation from './Navigation';
import EmergencyTicker from './EmergencyTicker';

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  return (
    <header className="w-full border-b border-brand-border bg-white sticky top-0 z-40 shadow-sm">
      <EmergencyTicker />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-brand-textPrimary leading-tight">
              {COLLEGE_INFO.department}
            </span>
            <span className="text-xs sm:text-sm text-brand-textSecondary font-medium">
              {COLLEGE_INFO.name}
            </span>
          </Link>

          <Navigation />

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
