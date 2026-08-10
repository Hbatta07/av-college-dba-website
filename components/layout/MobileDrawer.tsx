'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, COLLEGE_INFO } from '@/lib/constants';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-4/5 max-w-xs bg-white h-full shadow-xl z-10 flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-brand-border">
            <span className="text-sm font-bold text-brand-textPrimary">{COLLEGE_INFO.department}</span>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 font-bold p-1">
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
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
        </div>
        <div className="pt-6 border-t border-brand-border text-xs text-brand-textSecondary">
          <p>{COLLEGE_INFO.name}</p>
        </div>
      </div>
    </div>
  );
}
