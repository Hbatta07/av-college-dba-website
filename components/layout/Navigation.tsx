'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-brand-primary text-white font-semibold'
                : 'text-brand-textPrimary hover:bg-gray-100'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
