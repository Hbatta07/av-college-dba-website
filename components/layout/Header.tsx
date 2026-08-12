"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculty", href: "/faculty" },
  { name: "Notices", href: "/notices" },
  { name: "Career Hub", href: "/career-hub" },
  { name: "Student Life", href: "/student-life" },
];

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileToggle = () => {
    if (onOpenMobileMenu) {
      onOpenMobileMenu();
    } else {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  return (
    <header className="w-full bg-[#F7F4ED] border-b border-[#E5E0D6] sticky top-0 z-50">
      {/* Top Gold Stripe */}
      <div className="h-[3px] bg-[#B08D57] w-full" />

      {/* Top Utility Information Bar */}
      <div className="bg-[#172033] text-white/80 text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>A.V. College of Arts, Science & Commerce (Autonomous) • Domalguda, Hyderabad</span>
          <div className="hidden sm:flex gap-4">
            <span>Affiliated to Osmania University</span>
            <span>•</span>
            <span>NAAC Reaccredited 'A' Grade</span>
          </div>
        </div>
      </div>

      {/* Institutional Branding Header Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 sm:gap-4 group">
            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0 relative flex items-center justify-center">
              <img
                src="/images/av-college-logo.png"
                alt="A.V. College Emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Graceful fallback if image is missing
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="border-l border-[#E5E0D6] pl-3.5">
              <p className="text-[10px] sm:text-xs tracking-wider uppercase text-[#7A263A] font-bold">
                A.V. College of Arts, Science & Commerce
              </p>
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#172033] tracking-tight leading-snug">
                Department of Business Administration (MBA)
              </h1>
              <p className="text-[11px] text-[#252525]/75 font-medium hidden sm:block">
                Post-Graduate Centre • Approved by AICTE, New Delhi
              </p>
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={handleMobileToggle}
            className="md:hidden p-2 text-[#172033] hover:text-[#7A263A] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="border-t border-[#E5E0D6] bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-1 sm:space-x-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block py-2.5 px-3 transition-colors duration-150 border-b-2 ${
                      isActive
                        ? "text-[#7A263A] border-[#7A263A] font-semibold bg-[#F7F4ED]/60"
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E0D6] bg-white px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 text-sm font-medium ${
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
