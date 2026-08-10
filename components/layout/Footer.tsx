'use client';

import React from 'react';
import Link from 'next/link';
import { COLLEGE_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">{COLLEGE_INFO.department}</h3>
            <p className="text-sm text-gray-400 mb-2">{COLLEGE_INFO.name}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{COLLEGE_INFO.address}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Contact & Info</h4>
            <p className="text-xs text-gray-400 mb-1"><span className="font-semibold text-gray-300">PG Phone:</span> {COLLEGE_INFO.phonePG}</p>
            <p className="text-xs text-gray-400 mb-1"><span className="font-semibold text-gray-300">UG Phone:</span> {COLLEGE_INFO.phoneUG}</p>
            <p className="text-xs text-gray-400 mb-1"><span className="font-semibold text-gray-300">Email:</span> {COLLEGE_INFO.emailPG}</p>
            <p className="text-xs text-gray-400 mt-3">{COLLEGE_INFO.status}</p>
            <p className="text-xs text-gray-400">{COLLEGE_INFO.accreditation}</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {COLLEGE_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
