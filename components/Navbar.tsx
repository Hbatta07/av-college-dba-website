"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculty", href: "/faculty" },
  { name: "Notice Board", href: "/notices" },
  { name: "Career Hub", href: "/career-hub" },
  { name: "Student Life", href: "/student-life" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F7F4ED] border-b border-[#E5E0D6] sticky top-0 z-50">
      {/* Top Gold Stripe */}
      <div className="h-[3px] bg-[#B08D57] w-full" />

      {/* Main Header / Branding Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/images/av-college-logo.png"
                alt="A.V. College Logo"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
            <div className="border-l border-[#E5E0D6] pl-4">
              <p className="text-xs tracking-wider uppercase text-[#7A263A] font-semibold">
                A.V. College of Arts, Science & Commerce
              </p>
              <h1 className="text-lg sm:text-xl font-bold text-[#172033] tracking-tight leading-snug">
                Department of Business Administration
              </h1>
              <p className="text-xs text-[#252525]/70 font-medium">
                Post-Graduate Centre • Autonomous • Affiliated to Osmania University
              </p>
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#172033] hover:text-[#7A263A] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="border-t border-[#E5E0D6] bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-1 sm:space-x-4 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block py-3 px-3 transition-colors duration-150 border-b-2 ${
                      isActive
                        ? "text-[#7A263A] border-[#7A263A] font-semibold bg-[#F7F4ED]/50"
                        : "text-[#172033] border-transparent hover:text-[#7A263A] hover:border-[#B08D57]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E0D6] bg-white px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 px-3 text-sm font-medium ${
                  isActive
                    ? "text-[#7A263A] bg-[#F7F4ED] border-l-4 border-[#7A263A]"
                    : "text-[#172033] hover:bg-[#F7F4ED]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
