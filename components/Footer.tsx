import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#172033] text-[#E5E0D6] border-t-2 border-[#B08D57] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Column 1: Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white p-1 rounded-none flex-shrink-0">
                <Image
                  src="/images/av-college-logo.png"
                  alt="A.V. College Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-[#B08D57] font-semibold uppercase tracking-wider">
                  A.V. College of Arts, Science & Commerce
                </p>
                <p className="text-sm font-bold text-white">
                  Department of Business Administration
                </p>
              </div>
            </div>
            <p className="text-xs text-[#E5E0D6]/80 leading-relaxed">
              Gaganmahal, Domalguda, Hyderabad, Telangana 500029.<br />
              Affiliated to Osmania University • Re-accredited by NAAC.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B08D57] mb-3">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/academics" className="hover:text-[#B08D57]">Academics & Curriculum</Link></li>
              <li><Link href="/admissions" className="hover:text-[#B08D57]">Admissions & Eligibility</Link></li>
              <li><Link href="/faculty" className="hover:text-[#B08D57]">Faculty Directory</Link></li>
              <li><Link href="/notices" className="hover:text-[#B08D57]">Notices & Circulars</Link></li>
              <li><Link href="/career-hub" className="hover:text-[#B08D57]">Career & Placement Cell</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B08D57] mb-3">
              Department Contact
            </p>
            <p className="text-xs text-[#E5E0D6]/80">
              <span className="font-semibold text-white">Office:</span> Post-Graduate Centre Block
            </p>
            <p className="text-xs text-[#E5E0D6]/80">
              <span className="font-semibold text-white">Location:</span> Hyderabad, Telangana, India
            </p>
            <p className="text-xs text-[#E5E0D6]/80">
              <span className="font-semibold text-white">Status:</span> [DATA REQUIRED]
            </p>
          </div>

        </div>

        <div className="border-t border-[#E5E0D6]/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#E5E0D6]/60">
          <p>© {new Date().getFullYear()} Department of Business Administration, A.V. College. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Official Academic Departmental Portal</p>
        </div>
      </div>
    </footer>
  );
}
