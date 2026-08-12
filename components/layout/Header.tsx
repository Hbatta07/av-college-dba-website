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
  { name: "Notice Board", href: "/notices" },
  { name: "Career Hub", href: "/career-hub" },
  { name: "Student Life", href: "/student-life" },
];

export default function Header({ onOpenMobileMenu }: HeaderProps) {
  const pathname = usePathname();
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);

  const handleMobileClick = () => {
    if (onOpenMobileMenu) {
      onOpenMobileMenu();
    } else {
      setInternalMobileOpen(!internalMobileOpen);
    }
  };

  return (
    <header className="w-full bg-[#F7F4ED] border-b border-[#E5E0D6] sticky top-0 z-50">
      <div className="h-[3px] bg-[#B08D57] w-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            {/* Logo removed temporarily to fix build */}
            <div className="border-l-2 border-[#7A263A] pl-4">
              <p className="text-[11px] sm:text-xs tracking-wider uppercase text-[#7A263A] font-semibold">
                A.V. College of Arts, Science & Commerce
              </p>
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#172033] tracking-tight leading-snug">
                Department of Business Administration
              </h1>
            </div>
          </Link>

          <button
            onClick={handleMobileClick}
            className="md:hidden p-2 text-[#172033] hover:text-[#7A263A] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Desktop Nav */}
      <nav className="border-t border-[#E5E0D6] bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`inline-block py-3 px-3 border-b-2 ${pathname === link.href ? "text-[#7A263A] border-[#7A263A]" : "border-transparent"}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
